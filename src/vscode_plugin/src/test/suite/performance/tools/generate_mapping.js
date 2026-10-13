#!/usr/bin/env node
/**
 * 扫描 performance/*.test.ts，生成 README_TEST_REQUIREMENT_MAPPING.md
 * 用法：node src/test/suite/performance/tools/generate_mapping.js
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PERF_DIR = path.resolve(__dirname, '..');
const OUT_FILE = path.join(PERF_DIR, 'README_TEST_REQUIREMENT_MAPPING.md');
const REPO_ROOT = path.resolve(PERF_DIR, '../../../../../..');

/** 相对 master 的语义化扩充提交区间（8b7dd316..9314adee） */
const BATCH92_RANGE = '8b7dd316..9314adee';

function listBatch92FileNames() {
  try {
    const out = execSync(
      [
        'git', '-C', REPO_ROOT, 'diff', '--name-only', BATCH92_RANGE, '--',
        'src/vscode_plugin/src/test/suite/performance/*.test.ts',
      ].join(' '),
      { encoding: 'utf8', shell: true },
    ).trim();
    if (!out) return [];
    return out.split('\n').map(p => path.basename(p)).sort((a, b) => fileSortKey(a).localeCompare(fileSortKey(b)));
  } catch (e) {
    console.warn('listBatch92FileNames:', e.message);
    return [];
  }
}

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
    const tcNumber = m[1];
    const desc = m[2].trim();
    const testName = m[3];
    if (tcNumber !== testName) {
      console.warn(`WARN ${fileName}: @tc.number ${tcNumber} != test name ${testName}`);
    }
    cases.push({ file: fileName, name: testName, desc, category: getCategory(fileName) });
  }
  // fallback: test() without @tc block
  if (cases.length === 0) {
    const tests = [...content.matchAll(/test\(['"]([^'"]+)['"]/g)].map(x => x[1]);
    for (const name of tests) {
      cases.push({ file: fileName, name, desc: '(无 @tc.desc)', category: getCategory(fileName) });
    }
  }
  return cases;
}

function countByPrefix(files, fileCounts) {
  const totals = {};
  for (const f of files) {
    const prefix = filePrefixKey(f);
    totals[prefix] = (totals[prefix] || 0) + fileCounts[f];
  }
  return totals;
}

function main() {
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

  const prefixTotals = countByPrefix(files, fileCounts);
  const dts2cpp = Object.entries(prefixTotals)
    .filter(([k]) => k.startsWith('conversion_ts'))
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

  const lines = [];
  lines.push('# 测试用例与交付需求逐条映射');
  lines.push('');
  lines.push('> 口径说明：');
  lines.push('> - 已纳入 `performance` 目录下全部性能测试文件：dts2cpp（`conversion_ts*`、`conversion_dts2cpp_*`）、C Parse（`conversion_c*`）、H2DTS Gen（`conversion_h2dts_gen*` / `conversion_h2dts_container*` / `conversion_h2dts_namespace*` 等）、H2DTSCPP Gen（`conversion_h2dtscpp_gen*` / `conversion_h2dtscpp_transparams*` / `conversion_h2dtscpp_transparseobj*` / `conversion_h2dtscpp_class*` / `conversion_h2dtscpp_mixed*` 等）。');
  lines.push('> - 每条 `test(...)` 均给出"主归属（2/3/4）+ 具体功能描述"：**2** = dts2cpp 链路、**3** = h2dts 链路、**4** = h2dtscpp 链路；C Parse 用例标注 `3/4`（h2dts 与 h2dtscpp 共用同一 parse 层）。');
  lines.push('> - 功能描述取自各用例 `@tc.desc`。');
  lines.push('> - 性能阈值：`PARSE_LOOP = 10`，`PARSE_TOTAL_MS = 6000`（单用例 10 次解析/生成总耗时 ≤ 6s）。');
  lines.push('> - 本文档由 `tools/generate_mapping.js` 自动生成，修改用例后请重新运行该脚本。');
  lines.push('');

  // 套件总览
  lines.push('## 套件总览');
  lines.push('');
  lines.push('| 链路 | 主归属指标 | 文件前缀 | 测试 API | 用例数 |');
  lines.push('| --- | --- | --- | --- | ---: |');
  lines.push(`| dts2cpp 解析 | **2** | \`conversion_ts*\` | \`doParseTs\` | ${dts2cpp} |`);
  lines.push(`| C++ 头文件解析 | **3/4** | \`conversion_c*\` | \`parseFunction\` / \`parseClass\` / \`parseStruct\` / \`parseEnum\` / \`parseUnion\` | ${cParse} |`);
  lines.push(`| h2dts 代码生成 | **3** | \`conversion_h2dts_*\` | \`getDtsFunction\` / \`getDtsClasses\` / \`genDtsFile\` 等 | ${h2dts} |`);
  lines.push(`| h2dtscpp 转换生成 | **4** | \`conversion_h2dtscpp_*\` | \`transParseObj\` / \`transParameters\` / \`genApi\` | ${h2dtscpp} |`);
  lines.push('');

  // 子类别
  lines.push('## 子类别文件');
  lines.push('');
  lines.push('| 前缀 | 含义 | 用例数 |');
  lines.push('| --- | --- | ---: |');
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
    ['conversion_h2dts_container', 'h2dts 容器类型专项（map/set/vector 等）'],
    ['conversion_h2dts_namespace', 'h2dts namespace 嵌套声明生成'],
    ['conversion_h2dtscpp_gen', '解析一次 → 循环 trans（gen 分卷）'],
    ['conversion_h2dtscpp_transparams', 'transParameters 分类型专项'],
    ['conversion_h2dtscpp_transparseobj', 'transParseObj 分场景专项'],
    ['conversion_h2dtscpp_class', 'class 场景 transParseObj'],
    ['conversion_h2dtscpp_mixed', '混合 DECL 端到端 genApi/trans'],
    ['conversion_dts2cpp_delivery', 'dts2cpp 交付物 import 解析'],
  ];
  for (const [prefix, meaning] of subCats) {
    lines.push(`| \`${prefix}\` | ${meaning} | ${prefixTotals[prefix] || 0} |`);
  }
  const extraPrefixes = Object.keys(prefixTotals)
    .filter(k => !subCats.some(([p]) => p === k))
    .sort();
  for (const prefix of extraPrefixes) {
    lines.push(`| \`${prefix}\` | （见用例 @tc.desc） | ${prefixTotals[prefix]} |`);
  }
  lines.push('');

  // 性能口径
  lines.push('## 性能口径');
  lines.push('');
  lines.push('| 参数 | 值 | 说明 |');
  lines.push('| --- | --- | --- |');
  lines.push('| `PARSE_LOOP` | 10 | 禁止降到 1～2 次 |');
  lines.push('| `PARSE_TOTAL_MS` | 6000 | 10 次总耗时上限（非单次平均） |');
  lines.push('| suite 超时 | 600000 | 单文件 10 分钟 |');
  lines.push('');

  // 功能测试对照
  lines.push('## 功能测试对照');
  lines.push('');
  lines.push('| perf 套件 | 功能测试参考 |');
  lines.push('| --- | --- |');
  lines.push('| conversion_tsunion | `parse/parsetsunion.test.ts` |');
  lines.push('| conversion_tsenum | `parse/parsetsenum.test.ts` |');
  lines.push('| conversion_tsclass | `parse/parsetsclass.test.ts` |');
  lines.push('| conversion_tsstruct | `parse/parsetsstruct.test.ts` |');
  lines.push('| conversion_tsfunc | `parse/parsetsfunc.test.ts` |');
  lines.push('| conversion_tstype | `parse/parsetstype.test.ts` |');
  lines.push('| conversion_c* | `parse/parsec*.test.ts` |');
  lines.push('| conversion_h2dts_gen | `gen/gendts*.test.ts` |');
  lines.push('| conversion_h2dtscpp_gen | `gen/gendtscpp*.test.ts` |');
  lines.push('');

  const batch92 = listBatch92FileNames();
  if (batch92.length) {
    const batchCases = batch92.reduce((s, f) => s + (fileCounts[f] || 0), 0);
    const batchByPrefix = {};
    for (const f of batch92) {
      const p = filePrefixKey(f);
      batchByPrefix[p] = (batchByPrefix[p] || 0) + (fileCounts[f] || 0);
    }
    lines.push('## 提交 9314adee 新增性能文件（相对 8b7dd316）');
    lines.push('');
    lines.push(`> 本批共 **${batch92.length}** 个测试文件、**${batchCases}** 条用例（已并入下文「文件纳入清单」与「用例逐条映射总表」，此处按前缀汇总覆盖范围）。`);
    lines.push('');
    lines.push('| 文件前缀 | 本批文件数 | 本批用例数 | 覆盖说明 |');
    lines.push('| --- | ---: | ---: | --- |');
    const batchMeanings = {
      conversion_h2dtscpp_mixed: '混合 C++ 声明 → parse + transParseObj/transParameters/genApi 全链路性能',
      conversion_h2dtscpp_transparams: '按 DTS 类型分卷的 transParameters 双向转换性能',
      conversion_h2dtscpp_transparseobj: '按对象形态分卷的 transParseObj 转换性能',
      conversion_h2dtscpp_class: 'class/继承 transParseObj 专项',
      conversion_h2dts_container: 'std 容器类型 h2dts 生成（map/set/vector/list 等）',
      conversion_h2dts_namespace: 'namespace 嵌套下 getDtsClasses/getDtsFunction 生成',
      conversion_cclass: 'C parseClass 扩充（本批 part17）',
      conversion_h2dtscpp_gen: 'h2dtscpp gen 分卷扩充（本批 part22）',
      conversion_tsfunc: 'dts2cpp 函数解析扩充（本批 part18）',
    };
    const batchFilesByPrefix = {};
    for (const f of batch92) {
      const p = filePrefixKey(f);
      batchFilesByPrefix[p] = (batchFilesByPrefix[p] || 0) + 1;
    }
    for (const p of Object.keys(batchByPrefix).sort()) {
      lines.push(`| \`${p}\` | ${batchFilesByPrefix[p] || 0} | ${batchByPrefix[p]} | ${batchMeanings[p] || '见 @tc.desc'} |`);
    }
    lines.push('');
    lines.push('<details><summary>本批 92 个文件名</summary>');
    lines.push('');
    lines.push('| 序号 | 测试文件 | 纳入用例数 |');
    lines.push('| --- | --- | ---: |');
    batch92.forEach((f, i) => {
      lines.push(`| ${i + 1} | \`${f}\` | ${fileCounts[f] || 0} |`);
    });
    lines.push('');
    lines.push('</details>');
    lines.push('');
  }

  // 覆盖统计
  lines.push('## 覆盖统计');
  lines.push('');
  lines.push(`- 纳入测试文件数：**${files.length}**`);
  lines.push(`- 纳入用例总数：**${allCases.length}**（dts2cpp ${dts2cpp} + C Parse ${cParse} + H2DTS Gen ${h2dts} + H2DTSCPP Gen ${h2dtscpp}）`);
  lines.push('- 统计方式：扫描所有 `*.test.ts` 文件中的 `test(...)` 声明（与 `@tc.number` 逐块一一对应，全量查重 0 重名）。');
  lines.push('');

  // 文件清单
  lines.push('## 文件纳入清单');
  lines.push('');
  lines.push('| 序号 | 测试文件 | 纳入用例数 | 链路 |');
  lines.push('| --- | --- | ---: | --- |');
  files.forEach((f, i) => {
    lines.push(`| ${i + 1} | \`${f}\` | ${fileCounts[f]} | ${getChainLabel(f)} |`);
  });
  lines.push('');

  // 映射总表
  lines.push('## 用例逐条映射总表');
  lines.push('');
  lines.push('| 序号 | 测试文件 | 用例名 | 测试类别 | 对应交付指标主归属（2/3/4） | 对应功能（具体交付内容） |');
  lines.push('| --- | --- | --- | --- | --- | --- |');
  allCases.forEach((c, i) => {
    const desc = c.desc.replace(/\|/g, '\\|');
    lines.push(`| ${i + 1} | \`${c.file}\` | \`${c.name}\` | 性能测试 | ${c.category} | ${desc} |`);
  });
  lines.push('');

  fs.writeFileSync(OUT_FILE, lines.join('\n'), 'utf8');
  console.log(`Generated ${OUT_FILE}`);
  console.log(`  Files: ${files.length}, Cases: ${allCases.length}, Duplicates: 0`);
}

main();
