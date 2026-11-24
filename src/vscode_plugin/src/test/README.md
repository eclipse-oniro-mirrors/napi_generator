# vscode_plugin 测试套件说明

本目录包含 NAPI Generator 的三套测试树，统一命名为 `suite_v1` / `suite_v2` / `suite_v3`。三套用例相互独立，各自有独立的 Mocha 入口，可按需单独运行。

> 测试目标：`src/parse`（TypeScript 解析）、`src/gen`（d.ts / C++ 代码生成）、`src/gen/gendtscpp`（TS ↔ C++ 类型转换）等模块。

## 目录结构

```text
src/test/
├── README.md                  # 本文件
├── runTest.ts                 # suite_v1 入口（VS Code Extension Host）
├── runTest_v2.ts              # suite_v2 入口
├── runTest_v3.ts              # suite_v3 入口
├── suite_v1/                  # 原有主测试套件（TDD：suite + test）
│   ├── index.ts
│   ├── common/
│   ├── gen/
│   ├── parse/
│   ├── performance/
│   ├── stability/
│   └── extension.test.ts
├── suite_v2/                  # 表驱动 / 数量门禁（TDD：运行时批量注册 test）
│   ├── README.md
│   ├── constants.ts           # N_CL、B1/B2 目标
│   ├── catalog/               # 场景表与笛卡尔积展开
│   ├── harness/               # 注册器、runner、@tc 元数据
│   ├── parse/ gen/ integration/
│   ├── tools/                 # count_gate / generate_b1
│   └── generated/             # 可选落盘分片（默认仅 .gitkeep）
└── suite_v3/                  # 物理 it 用例（BDD：describe + it）
    ├── README.md
    ├── constants.ts
    ├── harness/
    ├── parse/types/ gen/types/ integration/types/
    ├── tools/                 # generate / count_gate / emit_body
    ├── summary.json           # 最近一次子集生成统计
    └── bulk/                  # 全量生成目录（本地生成，gitignore，不参与 tsc）
```

## 三套测试的区别

| 维度 | `suite_v1` | `suite_v2` | `suite_v3` |
|---|---|---|---|
| 定位 | 原有主回归套件 | 规模/数量门禁验证 | 物理化、可审计用例 |
| Mocha UI | `tdd`（`suite` + `test`） | `tdd`（`suite` + `test`） | `bdd`（`describe` + `it`） |
| 用例组织 | 物理 `test()`，按模块/分片存放 | 共享场景表 + 运行时批量注册 | 每条用例物理展开为 `it()` |
| 入口 | `runTest.ts` → `suite_v1/index.ts` | `runTest_v2.ts` → `suite_v2/index.ts` | `runTest_v3.ts` → `suite_v3/index.ts` |
| 运行命令 | `npm test` / `npm run test:v1` | `npm run test:v2` | `npm run test:v3` |
| 数量级 | 约 4.3 万条 `test()` | 冒烟默认 200 条/套；全量目标 58.5 万+ | 子集 900 条；全量由 `bulk/` 生成 |
| 适用场景 | 日常功能/性能/稳定性回归 | 大批量类型组合覆盖、数量门禁 | 测试报告、静态扫描、commonlibrary/Hypium 风格对齐 |

### `suite_v1`：主测试套件

- 入口：`runTest.ts`，加载 `out/test/suite_v1/**/**.test.js`。
- 使用 TDD 风格：`suite('...', function () { test('...', function () { ... }); })`。
- 覆盖 `common`、`gen`、`parse`、`performance`、`stability` 五个子目录。
- 支持 xunit 报告：当 `conf` 中开启报告配置时，结果写入输出目录的 `testres.xunit.xml`。
- `suite_v1/index.ts` **只加载自身目录**，不会把 `suite_v2` / `suite_v3` 一起扫入（避免 TDD/BDD UI 冲突）。

### `suite_v2`：表驱动 + 数量门禁

- 核心思路：用极少量源码描述场景表，在运行时展开为海量 `test()`。
- 关键常量（`constants.ts`）：
  - `N_CL = 183726`：全量 `it()` 基线，设计冻结不可下调；
  - `B1_MIN_PER_SUITE = 50000`：B1 出口，P/G/I 每套至少 5 万；
  - `B2_MIN_PER_SUITE = N_CL + 1`：B2 出口，每套严格超过基线；
  - `TARGET_P/G/I = 190000/195000/200000`，`TARGET_TOTAL = 585000`。
- 共享表展开逻辑位于 `catalog/expand.ts`（`expandTCrossB1`）。
- 每条运行时用例都带 commonlibrary 风格元数据：
  `@tc.number`、`@tc.name`、`@tc.desc`、`@tc.size`、`@tc.type`、`@tc.level`、`@pair`。
- 可选物理落盘：`npm run suite_v2:generate`，生成到 `out/test/suite_v2/generated/`。

### `suite_v3`：物理 `it` 用例

- 每条用例是物理 `it`，上方带完整 `@tc.*` 注释，it 体内直接展开断言：
  “构造源码 → 调用 API → assert”。
- 禁止使用 `runXxxCase` 封装；便于测试报告、静态扫描和逐条审计。
- 默认子集：P/G/I 各 300 条，共 900 条，由 `tools/generate.ts` 生成到 `parse|gen|integration/types/`。
- 全量生成输出到 `bulk/`（已被 `.gitignore` 和 `tsconfig.json` 排除），用于本地压测。
- 最近一次生成统计见 `summary.json`。

## 快速开始

以下命令均在 `src/vscode_plugin` 目录执行：

```bash
npm install
npm run compile

# suite_v1
npm test                 # 兼容原命令，等价于运行 suite_v1
npm run test:v1          # 显式运行 suite_v1

# suite_v2
npm run suite_v2:count   # 数量门禁
npm run test:v2          # 默认冒烟（每套 200 条）
npm run test:v2:full     # 全量（很慢）

# suite_v3
npm run suite_v3:count   # 统计物理 it 数量
npm run test:v3          # 运行子集 900 条
```

### suite_v2 常用变量

| 变量 | 含义 |
|---|---|
| `SUITE_V2_SMOKE=N` | 每套只注册前 N 条，默认 200 |
| `SUITE_V2_SMOKE=0` / `all` | 全量注册 |
| `SUITE_V2_FULL=1` | 全量注册 |
| `SUITE_V2_USE_GENERATED=1` | 加载 `generated/**` 落盘分片，而非表驱动入口 |
| `SUITE_V2_GATE=b2` | `count_gate` 按 B2 终态门槛校验（默认 b1） |

### suite_v3 常用变量

| 变量 | 含义 |
|---|---|
| `SUITE_V3_GENERATE_LIMIT=N` | 生成时截断共享表条数，默认 300；`all`/`0` 表示全量 |
| `SUITE_V3_USE_BULK=1` | 测试加载 `bulk/**`（需先执行 `suite_v3:generate:full`） |

### 生成命令

```bash
# suite_v2：生成带 @tc 注释的物理分片
npm run suite_v2:generate

# suite_v3：生成默认子集，并重新编译
npm run suite_v3:generate

# suite_v3：生成全量 bulk（不参与 tsc）
npm run suite_v3:generate:full
```

## 调试

`src/vscode_plugin/.vscode/launch.json` 提供两个调试配置：

- `Run Extension Tests`：加载 `out/test/suite_v1/index`，运行 `suite_v1`。
- `Run Extension Single-Tests`：加载 `out/test/suite_v1/indexsingle`，用于单文件调试；该入口需按需自行创建。

也可以直接按 `F5` 运行，结果输出在“调试控制台”。

## 新增用例

### 新增 suite_v1 用例

1. 在对应模块目录下新增 `*.test.ts`，文件名以 `.test.ts` 结尾。
2. 使用 TDD 风格 `suite()` + `test()`。
3. 用例注释中补充 `@tc.number`、`@tc.name`、`@tc.desc`、`@tc.type`、`@tc.size`、`@tc.level`。
4. 执行 `npm test` 验证。

### 新增 suite_v2 用例

1. 在 `catalog/` 中补充类型/场景定义，或调整 `expand.ts` 的展开矩阵。
2. 在 `parse/`、`gen/`、`integration/` 中通过 `registerTableDriven()` 注册。
3. 执行 `npm run suite_v2:count` 确认数量门禁通过，再跑 `npm run test:v2`。

### 新增 suite_v3 用例

1. 修改 `suite_v3/tools/generate.ts` 或共享场景表。
2. 执行 `npm run suite_v3:generate` 重新生成子集，不要手工修改生成文件和 `summary.json`。
3. 执行 `npm run suite_v3:count` 与 `npm run test:v3` 验证。

## 命名调整说明

原 `suite` 目录已删除，新增 `suite_v1` 目录，历史命令保持兼容：

| 旧路径/命令 | 新路径/命令 |
|---|---|
| `src/test/suite/` | `src/test/suite_v1/` |
| `out/test/suite/index` | `out/test/suite_v1/index` |
| `--extensionTestsPath=.../suite/index` | `--extensionTestsPath=.../suite_v1/index` |
| `npm test`（原 suite） | `npm test` 或 `npm run test:v1` |

## 当前规模（2026-11-23 统计）

| 测试树 | 文件数 | 行数 | 说明 |
|---|---:|---:|---|
| `suite_v1` | 1,259 | 1,523,787 | 含 `performance` / `stability` 大批量分片 |
| `suite_v2` | 14 | 1,189 | 表驱动源码，运行时展开 |
| `suite_v3` | 54 | 21,927 | 默认子集 900 条 `it` |
| 其他（入口/README） | 4 | 184 | `runTest*.ts` 与本文档 |
| **合计** | **1,331** | **1,547,087** | 约 68 MB |

> 统计口径：`find . -type f | xargs cat | wc -l`，包含空行与注释；数字会随生成用例增长而变化。
