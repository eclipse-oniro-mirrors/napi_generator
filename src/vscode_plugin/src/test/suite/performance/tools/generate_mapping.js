#!/usr/bin/env node
/**
 * 扫描 performance/*.test.ts，维护 README_TEST_REQUIREMENT_MAPPING.md
 *
 * 默认 **增量更新**（小 diff）：刷新统计区 + 文件清单补行/改数 + 映射表追加/改描述。
 * 全量重建（大 diff，仅结构损坏或首次迁移时用）：
 *   node tools/generate_mapping.js --full
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PERF_DIR = path.resolve(__dirname, '..');
const OUT_FILE = path.join(PERF_DIR, 'README_TEST_REQUIREMENT_MAPPING.md');
const REPO_ROOT = path.resolve(PERF_DIR, '../../../../../..');
const BATCH92_RANGE = '8b7dd316..9314adee';

const ARGS = process.argv.slice(2);
const FULL_REBUILD = ARGS.includes('--full');
const PRUNE = ARGS.includes('--prune');

function fileSortKey(name) {
  const base = name.replace(/\.test\.ts$/, '');
  const m = base.match(/^(.+\.part)(\d+)([a-z])?$/);
  if (!m) return name;
  return `${m[1]}${String(parseInt(m[2], 10)).padStart(4, '0')}${m[3] || ' '}.test.ts`;
}

function getCategory(file) {
  if (file.startsWith('conversion_ts') || file.startsWith('conversion_dts2cpp_')) return '2';
  if (file.startsWith('conversion_h2dts_')) return '3';
  if (file.startsWith('conversion_h2dtscpp_')) return '4';
  if (file.startsWith('conversion_c')) return '3/4';
  return '?';
}

function getChainLabel(file) {
  if (file.startsWith('conversion_ts') || file.startsWith('conversion_dts2cpp_')) return 'dts2cpp';
  if (file.startsWith('conversion_h2dts_')) return 'H2DTS Gen';
  if (file.startsWith('conversion_h2dtscpp_')) return 'H2DTSCPP Gen';
  if (file.startsWith('conversion_c')) return 'C Parse';
  return '其他';
}

function filePrefixKey(fileName) {
  const m = fileName.match(/^(conversion_[^.]+)/);
  return m ? m[1] : fileName.replace(/\.test\.ts$/, '');
}

function extractCases(filePath, fileName) {
  const content = fs.readFileSync(filePath, 'utf8');
  const cases = [];
  const re = /\/\*\*[\s\S]*?@tc\.number\s+(\S+)[\s\S]*?@tc\.desc\s+([^\n*]+)[\s\S]*?\*\/\s*\n\s*test\(['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    cases.push({
      file: fileName,
      name: m[3],
      desc: m[2].trim(),
      category: getCategory(fileName),
    });
  }
  if (cases.length === 0) {
    for (const t of content.matchAll(/test\(['"]([^'"]+)['"]/g)) {
      cases.push({
        file: fileName,
        name: t[1],
        desc: '(无 @tc.desc)',
        category: getCategory(fileName),
      });
    }
  }
  return cases;
}

function scanWorkspace() {
  const files = fs.readdirSync(PERF_DIR)
    .filter(f => f.endsWith('.test.ts'))
    .sort((a, b) => fileSortKey(a).localeCompare(fileSortKey(b)));
  const fileCounts = {};
  const allCases = [];
  for (const f of files) {
    const cases = extractCases(path.join(PERF_DIR, f), f);
    fileCounts[f] = cases.length;
    allCases.push(...cases);
  }
  const names = allCases.map(c => c.name);
  const dup = names.filter((n, i) => names.indexOf(n) !== i);
  if (dup.length) {
    console.error('Duplicate test names:', [...new Set(dup)]);
    process.exit(1);
  }
  const prefixTotals = {};
  for (const f of files) {
    const p = filePrefixKey(f);
    prefixTotals[p] = (prefixTotals[p] || 0) + fileCounts[f];
  }
  const dts2cpp = Object.entries(prefixTotals)
    .filter(([k]) => k.startsWith('conversion_ts') || k.startsWith('conversion_dts2cpp_'))
    .reduce((s, [, v]) => s + v, 0);
  const cParse = Object.entries(prefixTotals)
    .filter(([k]) => k.startsWith('conversion_c'))
    .reduce((s, [, v]) => s + v, 0);
  const h2dts = Object.entries(prefixTotals)
    .filter(([k]) => k.startsWith('conversion_h2dts_'))
    .reduce((s, [, v]) => s + v, 0);
  const h2dtscpp = Object.entries(prefixTotals)
    .filter(([k]) => k.startsWith('conversion_h2dtscpp_'))
    .reduce((s, [, v]) => s + v, 0);
  return { files, fileCounts, allCases, prefixTotals, dts2cpp, cParse, h2dts, h2dtscpp };
}

function listBatch92FileNames(fileCounts) {
  try {
    const out = execSync(
      `git -C "${REPO_ROOT}" diff --name-only ${BATCH92_RANGE} -- ` +
      '"src/vscode_plugin/src/test/suite/performance/*.test.ts"',
      { encoding: 'utf8', shell: true },
    ).trim();
    if (!out) return [];
    return out.split('\n').map(p => path.basename(p)).sort((a, b) => fileSortKey(a).localeCompare(fileSortKey(b)));
  } catch (e) {
    console.warn('listBatch92FileNames:', e.message);
    return [];
  }
}

function wrapSection(id, bodyLines) {
  return [
    `<!-- GEN:BEGIN:${id} -->`,
    ...bodyLines,
    `<!-- GEN:END:${id} -->`,
  ];
}

function buildHeader() {
  return [
    '# 测试用例与交付需求逐条映射',
    '',
    '> 口径说明：',
    '> - 已纳入 `performance` 目录下全部性能测试文件：dts2cpp（`conversion_ts*`、`conversion_dts2cpp_*`）、C Parse（`conversion_c*`）、H2DTS Gen（`conversion_h2dts_*`）、H2DTSCPP Gen（`conversion_h2dtscpp_*`）。',
    '> - 每条 `test(...)` 均给出"主归属（2/3/4）+ 具体功能描述"：**2** = dts2cpp、**3** = h2dts、**4** = h2dtscpp；C Parse 为 `3/4`。',
    '> - 功能描述取自各用例 `@tc.desc`；性能阈值：`PARSE_LOOP = 10`，`PARSE_TOTAL_MS = 6000`。',
    '> - 由 `tools/generate_mapping.js` 维护：**默认增量更新**（只追加/改统计），全量重建用 `--full`。',
    '',
  ];
}

function buildOverview(data) {
  const { dts2cpp, cParse, h2dts, h2dtscpp } = data;
  return [
    '## 套件总览',
    '',
    '| 链路 | 主归属指标 | 文件前缀 | 测试 API | 用例数 |',
    '| --- | --- | --- | --- | ---: |',
    `| dts2cpp 解析 | **2** | \`conversion_ts*\` | \`doParseTs\` | ${dts2cpp} |`,
    `| C++ 头文件解析 | **3/4** | \`conversion_c*\` | \`parseFunction\` / \`parseClass\` / … | ${cParse} |`,
    `| h2dts 代码生成 | **3** | \`conversion_h2dts_*\` | \`getDtsFunction\` / \`getDtsClasses\` / … | ${h2dts} |`,
    `| h2dtscpp 转换生成 | **4** | \`conversion_h2dtscpp_*\` | \`transParseObj\` / \`transParameters\` / … | ${h2dtscpp} |`,
    '',
  ];
}

function buildSubcats(data) {
  const { prefixTotals } = data;
  const subCats = [
    ['conversion_tsunion', 'union type alias → ParseObj.types'],
    ['conversion_tsenum', 'enum → ParseObj.enums'],
    ['conversion_tsclass', 'class → ParseObj.classes'],
    ['conversion_tsstruct', 'interface → ParseObj.structs'],
    ['conversion_tsfunc', 'function → ParseObj.funcs'],
    ['conversion_tstype', 'type 对象字面量 → ParseObj.types'],
    ['conversion_cfunc', 'C parse 函数'],
    ['conversion_cclass', 'C parse 类'],
    ['conversion_cstruct', 'C parse 结构体'],
    ['conversion_cenum', 'C parse 枚举'],
    ['conversion_cunion', 'C parse 联合体'],
    ['conversion_cnamespace', 'C parse 命名空间'],
    ['conversion_h2dts_gen', '解析一次 → 循环 gen'],
    ['conversion_h2dts_container', 'h2dts 容器类型专项'],
    ['conversion_h2dts_namespace', 'h2dts namespace 嵌套声明'],
    ['conversion_h2dtscpp_gen', '解析一次 → 循环 trans（gen 分卷）'],
    ['conversion_h2dtscpp_transparams', 'transParameters 分类型专项'],
    ['conversion_h2dtscpp_transparseobj', 'transParseObj 分场景专项'],
    ['conversion_h2dtscpp_class', 'class 场景 transParseObj'],
    ['conversion_h2dtscpp_mixed', '混合 DECL 端到端 genApi/trans'],
    ['conversion_dts2cpp_delivery', 'dts2cpp 交付物 import 解析'],
  ];
  const lines = [
    '## 子类别文件',
    '',
    '| 前缀 | 含义 | 用例数 |',
    '| --- | --- | ---: |',
  ];
  for (const [prefix, meaning] of subCats) {
    lines.push(`| \`${prefix}\` | ${meaning} | ${prefixTotals[prefix] || 0} |`);
  }
  for (const prefix of Object.keys(prefixTotals).filter(k => !subCats.some(([p]) => p === k)).sort()) {
    lines.push(`| \`${prefix}\` | （见 @tc.desc） | ${prefixTotals[prefix]} |`);
  }
  lines.push('');
  return lines;
}

function buildPerfRules() {
  return [
    '## 性能口径',
    '',
    '| 参数 | 值 | 说明 |',
    '| --- | --- | --- |',
    '| `PARSE_LOOP` | 10 | 禁止降到 1～2 次 |',
    '| `PARSE_TOTAL_MS` | 6000 | 10 次总耗时上限 |',
    '| suite 超时 | 600000 | 单文件 10 分钟 |',
    '',
  ];
}

function buildFuncRef() {
  return [
    '## 功能测试对照',
    '',
    '| perf 套件 | 功能测试参考 |',
    '| --- | --- |',
    '| conversion_tsunion | `parse/parsetsunion.test.ts` |',
    '| conversion_tsenum | `parse/parsetsenum.test.ts` |',
    '| conversion_tsclass | `parse/parsetsclass.test.ts` |',
    '| conversion_tsstruct | `parse/parsetsstruct.test.ts` |',
    '| conversion_tsfunc | `parse/parsetsfunc.test.ts` |',
    '| conversion_tstype | `parse/parsetstype.test.ts` |',
    '| conversion_c* | `parse/parsec*.test.ts` |',
    '| conversion_h2dts_gen | `gen/gendts*.test.ts` |',
    '| conversion_h2dtscpp_gen | `gen/gendtscpp*.test.ts` |',
    '',
  ];
}

function buildBatch92(data) {
  const batch92 = listBatch92FileNames(data.fileCounts);
  if (!batch92.length) return ['<!-- GEN:BEGIN:BATCH92 -->\n<!-- GEN:END:BATCH92 -->'];
  const batchCases = batch92.reduce((s, f) => s + (data.fileCounts[f] || 0), 0);
  const batchByPrefix = {};
  for (const f of batch92) {
    const p = filePrefixKey(f);
    batchByPrefix[p] = (batchByPrefix[p] || 0) + (data.fileCounts[f] || 0);
  }
  const batchMeanings = {
    conversion_h2dtscpp_mixed: '混合 C++ 声明 → parse + trans/genApi 全链路性能',
    conversion_h2dtscpp_transparams: 'transParameters 分类型',
    conversion_h2dtscpp_transparseobj: 'transParseObj 分场景',
    conversion_h2dtscpp_class: 'class transParseObj 专项',
    conversion_h2dts_container: 'std 容器 h2dts 生成',
    conversion_h2dts_namespace: 'namespace 嵌套生成',
    conversion_cclass: 'C parseClass 扩充',
    conversion_h2dtscpp_gen: 'h2dtscpp gen 分卷',
    conversion_tsfunc: 'dts2cpp 函数扩充',
  };
  const batchFilesByPrefix = {};
  for (const f of batch92) {
    const p = filePrefixKey(f);
    batchFilesByPrefix[p] = (batchFilesByPrefix[p] || 0) + 1;
  }
  const lines = [
    '## 提交 9314adee 新增性能文件（相对 8b7dd316）',
    '',
    `> 本批共 **${batch92.length}** 个测试文件、**${batchCases}** 条用例（增量维护时仅刷新本段统计，不重写映射总表）。`,
    '',
    '| 文件前缀 | 本批文件数 | 本批用例数 | 覆盖说明 |',
    '| --- | ---: | ---: | --- |',
  ];
  for (const p of Object.keys(batchByPrefix).sort()) {
    lines.push(`| \`${p}\` | ${batchFilesByPrefix[p] || 0} | ${batchByPrefix[p]} | ${batchMeanings[p] || '见 @tc.desc'} |`);
  }
  lines.push('');
  lines.push('<details><summary>本批 92 个文件名</summary>');
  lines.push('');
  lines.push('| 序号 | 测试文件 | 纳入用例数 |');
  lines.push('| --- | --- | ---: |');
  batch92.forEach((f, i) => {
    lines.push(`| ${i + 1} | \`${f}\` | ${data.fileCounts[f] || 0} |`);
  });
  lines.push('');
  lines.push('</details>');
  lines.push('');
  return lines;
}

function buildStats(data) {
  const { files, allCases, dts2cpp, cParse, h2dts, h2dtscpp } = data;
  return [
    '## 覆盖统计',
    '',
    `- 纳入测试文件数：**${files.length}**`,
    `- 纳入用例总数：**${allCases.length}**（dts2cpp ${dts2cpp} + C Parse ${cParse} + H2DTS Gen ${h2dts} + H2DTSCPP Gen ${h2dtscpp}）`,
    '- 统计方式：扫描 `*.test.ts` 中 `test(...)`；映射总表按用例名增量追加，避免全文件重写。',
    '',
  ];
}

function mappingRow(seq, c) {
  const desc = c.desc.replace(/\|/g, '\\|');
  return `| ${seq} | \`${c.file}\` | \`${c.name}\` | 性能测试 | ${c.category} | ${desc} |`;
}

function buildFileListLines(data, existingOrder, existingRows) {
  const { files, fileCounts } = data;
  const set = new Set(files);
  const order = existingOrder && existingOrder.length ? [...existingOrder] : files.slice();
  for (const f of files) {
    if (!order.includes(f)) order.push(f);
  }
  const pruned = order.filter(f => set.has(f));
  const lines = [
    '## 文件纳入清单',
    '',
    '| 序号 | 测试文件 | 纳入用例数 | 链路 |',
    '| --- | --- | ---: | --- |',
  ];
  const rowByFile = new Map();
  if (existingRows) {
    for (const r of existingRows) rowByFile.set(r.file, r.line);
  }
  pruned.forEach((f, i) => {
    const want = `| ${i + 1} | \`${f}\` | ${fileCounts[f]} | ${getChainLabel(f)} |`;
    const prev = rowByFile.get(f);
    if (prev && prev.replace(/\| \d+ \|/, `| ${i + 1} |`) === want) {
      lines.push(prev);
    } else if (prev) {
      lines.push(want);
    } else {
      lines.push(want);
    }
  });
  lines.push('');
  return { lines, order: pruned };
}

function patchFileListSection(doc, data) {
  const m = doc.match(/<!-- GEN:BEGIN:FILELIST -->([\s\S]*?)<!-- GEN:END:FILELIST -->/);
  if (!m) return doc;
  const lines = m[1].split('\n');
  const out = [];
  const seen = new Set();
  let changed = false;
  for (const line of lines) {
    const fm = line.match(FILE_ROW_RE);
    if (!fm) {
      out.push(line);
      continue;
    }
    const file = fm[2];
    const want = data.fileCounts[file];
    if (want === undefined) {
      out.push(line);
      continue;
    }
    seen.add(file);
    const wantLine = `| ${fm[1]} | \`${file}\` | ${want} | ${getChainLabel(file)} |`;
    if (wantLine !== line.trim()) changed = true;
    out.push(wantLine);
  }
  const order = parseFileListOrder(doc);
  for (const f of data.files) {
    if (seen.has(f)) continue;
    order.push(f);
    const idx = out.length;
    out.push(`| ${order.length} | \`${f}\` | ${data.fileCounts[f]} | ${getChainLabel(f)} |`);
    changed = true;
  }
  if (!changed) return doc;
  return replaceSection(doc, 'FILELIST', out);
}

function parseFileListRows(doc) {
  const m = doc.match(/<!-- GEN:BEGIN:FILELIST -->([\s\S]*?)<!-- GEN:END:FILELIST -->/);
  if (!m) return [];
  const rows = [];
  for (const line of m[1].split('\n')) {
    const fm = line.match(FILE_ROW_RE);
    if (fm) rows.push({ file: fm[2], line });
  }
  return rows;
}

function buildMappingTableLines(allCases) {
  const lines = [
    '## 用例逐条映射总表',
    '',
    '| 序号 | 测试文件 | 用例名 | 测试类别 | 对应交付指标主归属（2/3/4） | 对应功能（具体交付内容） |',
    '| --- | --- | --- | --- | --- | --- |',
  ];
  allCases.forEach((c, i) => lines.push(mappingRow(i + 1, c)));
  lines.push('');
  return lines;
}

function buildFullDocument(data) {
  const fl = buildFileListLines(data, null);
  return [
    ...wrapSection('HEADER', buildHeader()),
    ...wrapSection('OVERVIEW', buildOverview(data)),
    ...wrapSection('SUBCATS', buildSubcats(data)),
    ...wrapSection('PERF', buildPerfRules()),
    ...wrapSection('FUNCREF', buildFuncRef()),
    ...wrapSection('BATCH92', buildBatch92(data)),
    ...wrapSection('STATS', buildStats(data)),
    ...wrapSection('FILELIST', fl.lines),
    ...wrapSection('MAPPING', buildMappingTableLines(data.allCases)),
  ].join('\n');
}

function hasMarkers(text) {
  return text.includes('<!-- GEN:BEGIN:MAPPING -->');
}

function replaceSection(doc, id, bodyLines) {
  const re = new RegExp(`<!-- GEN:BEGIN:${id} -->[\\s\\S]*?<!-- GEN:END:${id} -->`, 'm');
  const block = `<!-- GEN:BEGIN:${id} -->\n${bodyLines.join('\n')}\n<!-- GEN:END:${id} -->`;
  if (!re.test(doc)) return null;
  return doc.replace(re, block);
}

/** 描述列可能含 |，从行尾向前解析 */
function parseMappingRow(line) {
  if (!line.startsWith('|') || line.includes('---')) return null;
  const parts = line.split('|').map(s => s.trim());
  if (parts.length < 7) return null;
  const seq = parseInt(parts[1], 10);
  if (Number.isNaN(seq)) return null;
  const file = parts[2].replace(/`/g, '');
  const name = parts[3].replace(/`/g, '');
  if (parts[4] !== '性能测试') return null;
  const category = parts[5];
  const desc = parts.slice(6).filter(Boolean).join(' | ');
  return { seq, file, name, category, desc, line };
}
const FILE_ROW_RE = /^\| (\d+) \| `([^`]+)` \| (\d+) \| ([^|]+) \|$/;

function parseMappingSection(doc) {
  const m = doc.match(/<!-- GEN:BEGIN:MAPPING -->([\s\S]*?)<!-- GEN:END:MAPPING -->/);
  if (!m) return { header: [], rows: [], byName: new Map() };
  const lines = m[1].split('\n');
  const header = [];
  const rows = [];
  const byName = new Map();
  for (const line of lines) {
    const row = parseMappingRow(line);
    if (!row) {
      header.push(line);
      continue;
    }
    rows.push(row);
    byName.set(row.name, row);
  }
  return { header, rows, byName };
}

function parseFileListOrder(doc) {
  const m = doc.match(/<!-- GEN:BEGIN:FILELIST -->([\s\S]*?)<!-- GEN:END:FILELIST -->/);
  if (!m) return [];
  const order = [];
  for (const line of m[1].split('\n')) {
    const fm = line.match(FILE_ROW_RE);
    if (fm) order.push(fm[2]);
  }
  return order;
}

const SUMMARY_SECTION_IDS = [
  ['HEADER', buildHeader],
  ['OVERVIEW', buildOverview],
  ['SUBCATS', buildSubcats],
  ['PERF', buildPerfRules],
  ['FUNCREF', buildFuncRef],
];

function applySummaryRefresh(doc, data) {
  if (!ARGS.includes('--refresh-summary')) return doc;
  let next = doc;
  for (const [id, build] of SUMMARY_SECTION_IDS) {
    const replaced = replaceSection(next, id, build(data));
    if (replaced) next = replaced;
  }
  return next;
}

function applyStatsRefresh(doc, data) {
  const statsBody = buildStats(data);
  const statsBlock = doc.match(/<!-- GEN:BEGIN:STATS -->([\s\S]*?)<!-- GEN:END:STATS -->/);
  const statsText = statsBlock ? statsBlock[1].trim() : '';
  if (statsText === statsBody.join('\n').trim()) return doc;
  const statsNext = replaceSection(doc, 'STATS', statsBody);
  return statsNext || doc;
}

function applyBatchRefresh(doc, data) {
  if (!ARGS.includes('--refresh-batch')) return doc;
  const batchNext = replaceSection(doc, 'BATCH92', buildBatch92(data));
  return batchNext || doc;
}

function pruneAndAppendMappingRows(rows, byName, data) {
  const scannedNames = new Set(data.allCases.map(c => c.name));
  let maxSeq = rows.reduce((m, r) => Math.max(m, r.seq), 0);
  let appended = 0;
  let removed = 0;
  const newRows = [];
  for (const row of rows) {
    if (!scannedNames.has(row.name) && PRUNE) {
      removed++;
      continue;
    }
    newRows.push(row);
  }
  for (const c of data.allCases) {
    if (byName.has(c.name)) continue;
    maxSeq += 1;
    newRows.push({
      seq: maxSeq,
      file: c.file,
      name: c.name,
      category: c.category,
      desc: c.desc,
      line: mappingRow(maxSeq, c),
    });
    appended++;
  }
  return { newRows, appended, removed };
}

function syncMappingRowDescriptions(newRows, data) {
  if (!ARGS.includes('--sync-mapping')) return { newRows, updated: 0 };
  const scanned = new Map(data.allCases.map(c => [c.name, c]));
  let updated = 0;
  const out = newRows.map((row) => {
    const cur = scanned.get(row.name);
    if (!cur) return row;
    const line = mappingRow(row.seq, cur);
    if (line === row.line) return row;
    updated++;
    return { ...row, file: cur.file, desc: cur.desc, category: cur.category, line };
  });
  return { newRows: out, updated };
}

function writeMappingSectionIfChanged(doc, header, newRows, changeCount) {
  if (!changeCount) return doc;
  const mappingBody = [...header, ...newRows.map(r => r.line), ''];
  const mapNext = replaceSection(doc, 'MAPPING', mappingBody);
  return mapNext || doc;
}

function incrementalUpdate(existing, data) {
  let doc = applySummaryRefresh(existing, data);
  doc = applyStatsRefresh(doc, data);
  doc = applyBatchRefresh(doc, data);
  doc = patchFileListSection(doc, data) || doc;

  const { header, rows, byName } = parseMappingSection(doc);
  const pruned = pruneAndAppendMappingRows(rows, byName, data);
  const synced = syncMappingRowDescriptions(pruned.newRows, data);
  const changeCount = pruned.appended + pruned.removed + synced.updated;
  doc = writeMappingSectionIfChanged(doc, header, synced.newRows, changeCount);

  return {
    doc,
    appended: pruned.appended,
    updated: synced.updated,
    removed: pruned.removed,
  };
}

const MIGRATE_SECTION_HEADINGS = [
  '## 套件总览',
  '## 子类别文件',
  '## 性能口径',
  '## 功能测试对照',
  '## 提交 9314adee',
  '## 覆盖统计',
  '## 文件纳入清单',
  '## 用例逐条映射总表',
];

const MIGRATE_SECTION_ID = {
  '## 套件总览': 'OVERVIEW',
  '## 子类别文件': 'SUBCATS',
  '## 性能口径': 'PERF',
  '## 功能测试对照': 'FUNCREF',
  '## 提交 9314adee': 'BATCH92',
  '## 覆盖统计': 'STATS',
  '## 文件纳入清单': 'FILELIST',
  '## 用例逐条映射总表': 'MAPPING',
};

function wrapMigrateHeader(doc) {
  const headerEnd = doc.indexOf('## 套件总览');
  if (headerEnd <= 0) return doc;
  const head = doc.slice(0, headerEnd).trimEnd();
  return `<!-- GEN:BEGIN:HEADER -->\n${head}\n<!-- GEN:END:HEADER -->\n\n` + doc.slice(headerEnd);
}

function migrateSectionEnd(doc, heading, start) {
  let end = doc.length;
  const nextH = doc.indexOf('\n## ', start + 1);
  if (nextH > 0) end = nextH + 1;
  if (heading === '## 提交 9314adee') {
    const close = doc.indexOf('</details>', start);
    if (close > 0) end = doc.indexOf('\n', close + 10) + 1;
  }
  return end;
}

function wrapOneMigrateSection(doc, heading) {
  const start = doc.indexOf(heading);
  if (start < 0) return doc;
  const end = migrateSectionEnd(doc, heading, start);
  const chunk = doc.slice(start, end).trimEnd();
  const id = MIGRATE_SECTION_ID[heading];
  const wrapped = `<!-- GEN:BEGIN:${id} -->\n${chunk}\n<!-- GEN:END:${id} -->\n\n`;
  return doc.slice(0, start) + wrapped + doc.slice(end);
}

function applyMigrateBanner(doc) {
  return doc.replace(
    '> - 本文档由 `tools/generate_mapping.js` 自动生成，修改用例后请重新运行该脚本。',
    '> - 由 `tools/generate_mapping.js` 维护：**默认增量更新**（只追加/改统计），全量重建用 `--full`。',
  );
}

function migrateAddMarkers(existing) {
  /** 在已有全文上套标记（不重排映射表行），便于后续增量 */
  if (hasMarkers(existing)) return existing;
  let doc = wrapMigrateHeader(existing);
  for (const h of MIGRATE_SECTION_HEADINGS) {
    doc = wrapOneMigrateSection(doc, h);
  }
  return applyMigrateBanner(doc);
}

function main() {
  const data = scanWorkspace();
  const existing = fs.existsSync(OUT_FILE) ? fs.readFileSync(OUT_FILE, 'utf8') : '';

  if (FULL_REBUILD || !existing.trim()) {
    const out = buildFullDocument(data);
    fs.writeFileSync(OUT_FILE, out, 'utf8');
    console.log(`Full rebuild ${OUT_FILE}`);
    console.log(`  Files: ${data.files.length}, Cases: ${data.allCases.length}`);
    return;
  }

  let doc = existing;
  if (!hasMarkers(doc)) {
    doc = migrateAddMarkers(doc);
    fs.writeFileSync(OUT_FILE, doc, 'utf8');
    console.log('Migrated README: inserted GEN section markers（仅套标记，未改正文）.');
    console.log('  下次扩用例后请再执行本脚本，将只追加映射行并刷新覆盖统计。');
    return;
  }

  const { doc: next, appended, updated, removed } = incrementalUpdate(doc, data);
  if (next === existing) {
    console.log('No README changes (already up to date).');
    return;
  }
  fs.writeFileSync(OUT_FILE, next, 'utf8');
  console.log(`Incremental update ${OUT_FILE}`);
  console.log(`  Files: ${data.files.length}, Cases: ${data.allCases.length}`);
  console.log(`  Mapping: +${appended} new, ~${updated} updated, -${removed} removed`);
}

main();
