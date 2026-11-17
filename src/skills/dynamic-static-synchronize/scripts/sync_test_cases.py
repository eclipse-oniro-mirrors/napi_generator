#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""动态测试文件 → 静态测试文件完整转换管道（试点固化 v1）。

步骤：
0. 基础转换：'use static' 头、hypium 静态路径导入、registry 导入合并、bundle 名替换
1. 静态编译器适配（SDK26 ArkTS1.2）：
   - 导出函数加 : void（ESE71336）
   - done: Function → done: () => void
   - new Promise 参数显式/去注解（setTimeout 直接传 resolve 会类型不匹配）
   - globalThis 引用移除
   - AsyncCallback 参数类型统一 (err: BusinessError<void> | null, data: X | undefined)
   - 闭包捕获变量不窄化 → 传参处 as 断言 / 局部常量
   - async 回调不能赋给 AsyncCallback（返回 Promise 不匹配）→ 去 async
   - 内嵌对象字面量需要目标类型 → as 断言
2. 静态 hypium 适配：it() 的 done 无效（StaticSpec 传 suiteParams）→ promise 包裹转换
3. monitor 字面量补 moduleName（静态环境约定）
"""
import re
import sys

HYPUM_DYN = re.compile(r"import\s*\{([^}]*)\}\s*from\s*['\"]@ohos/hypium['\"]")
REG_DYN = re.compile(r"import\s+abilityDelegatorRegistry\s+from\s*'@ohos\.application\.abilityDelegatorRegistry'")
REG_DYN2 = re.compile(r"import\s+abilityDelegatorRegistry2\s+from\s*'@ohos\.app\.ability\.abilityDelegatorRegistry'")
SLEEP_FN = re.compile(r"function sleep\(time: number\): Promise<void> \{\n(?:.*\n)*?\}\n\n", re.M)


def base_transform(src: str, bundle: str, bundle_static: str) -> str:
    if not src.lstrip().startswith("'use static'"):
        src = "'use static';\n" + src
    src = HYPUM_DYN.sub(r"import { \1 } from '../../../hypium/index';", src)
    src = REG_DYN.sub("import abilityDelegatorRegistry from '@ohos.app.ability.abilityDelegatorRegistry'", src)
    src = REG_DYN2.sub("", src)
    src = src.replace("abilityDelegatorRegistry2.", "abilityDelegatorRegistry.")
    src = src.replace(bundle, bundle_static)
    # 移除 sleep 函数定义，统一用 Util.msSleep
    src = SLEEP_FN.sub("", src)
    src = src.replace("import { BusinessError } from '@ohos.base';",
                      "import { BusinessError } from '@ohos.base';\nimport Utils from './Util.test';")
    src = re.sub(r"await sleep\((\d+)\);?", lambda m: f"await Utils.msSleep({m.group(1)});", src)
    src = re.sub(r"sleep\((\d+)\)", lambda m: f"Utils.msSleep({m.group(1)})", src)
    return src


def compile_fixes(src: str) -> str:
    # 1. 导出函数类型注解
    src = re.sub(r"^export default function (\w+)\(\) \{", r"export default function \1(): void {", src, flags=re.M)
    # 2. done 类型
    src = src.replace("async (done: Function)", "async (done: () => void)")
    src = src.replace("(done: Function) => {", "async (done: () => void) => {")
    # 3. globalThis.abilityContext 分支移除（静态无该全局）
    src = re.sub(r"\n\s*if \(globalThis\.abilityContext\) \{\n(?:.*\n)*?\s*\} else \{\n\s*done\(\);\n\s*\}",
                 "\n      done();", src)
    # 4. 回调参数统一静态模式
    src = src.replace("(async (err) =>", "((err: BusinessError<void> | null) =>")
    src = src.replace("(async (err: BusinessError) =>", "((err: BusinessError<void> | null) =>")
    # 去 async 后遗留的双括号归一
    src = src.replace(", ((err: BusinessError<void> | null) => {", ", (err: BusinessError<void> | null) => {")
    src = src.replace("(err: BusinessError) => {", "(err: BusinessError<void> | null) => {")
    src = re.sub(r"\(err: BusinessError(?:<[^>]+>)?, (waitability|data): UIAbility\) =>",
                 r"(err: BusinessError<void> | null, \1: UIAbility | undefined) =>", src)
    src = re.sub(r"async \((err: BusinessError<void> \| null, (?:waitability|data): UIAbility \| undefined)\) =>",
                 r"(\1) =>", src)
    # waitAbilityMonitor 未注解回调（err, data）→ 补注解并去 async
    src = re.sub(r"async \((err, data)\) =>", r"(err: BusinessError<void> | null, data: UIAbility | undefined) =>", src)
    src = re.sub(r"\(err, waitability\) =>", r"(err: BusinessError<void> | null, waitability: UIAbility | undefined) =>", src)
    # waitAbilityMonitor promise .then 回调参数注解
    src = re.sub(r"\.then\((async )?\((data)\) =>", r".then(\1(data: UIAbility) =>", src)
    src = src.replace(".catch((err: BusinessError<void> | null) => {", ".catch((err: Error) => {")
    # 5. monitor 传参 as 断言（闭包变量不窄化）
    src = re.sub(r"delegator\.(addAbilityMonitor|removeAbilityMonitor|waitAbilityMonitor)\((monitor1?)(?=[,\)])",
                 r"delegator.\1(\2 as abilityDelegatorRegistry.AbilityMonitor", src)
    src = re.sub(r"(await )?data\.removeAbilityMonitor\((monitor1?)(?=[,\)])",
                 r"\1data.removeAbilityMonitor(\2 as abilityDelegatorRegistry.AbilityMonitor", src)
    # 6. 内嵌 monitor 字面量 → 具名局部变量（目标类型）
    src = src.replace("      await data.removeAbilityMonitor({\n        abilityName: 'WrongName',\n        onAbilityCreate: onAbilityCreate\n      }, (err: BusinessError<void> | null) => {",
                      "      let wrongMonitor: abilityDelegatorRegistry.AbilityMonitor = {\n        abilityName: 'WrongName',\n        onAbilityCreate: onAbilityCreate\n      };\n      data.removeAbilityMonitor(wrongMonitor, (err: BusinessError<void> | null) => {")
    src = src.replace("      delegator.removeAbilityMonitor({\n        abilityName: 'WrongName',\n        onAbilityCreate: onAbilityCreate\n      }).then(() => {",
                      "      let wrongMonitor2: abilityDelegatorRegistry.AbilityMonitor = {\n        abilityName: 'WrongName',\n        onAbilityCreate: onAbilityCreate\n      };\n      delegator.removeAbilityMonitor(wrongMonitor2).then(() => {")
    # 7. err.code → err?.code
    src = src.replace("err.code", "err?.code")
    # 8. monitor 字面量补 moduleName
    src = re.sub(r"(\s*)(abilityName: '([^']+)',)", r"\1moduleName: 'entry',\n\1\2", src)
    # 9. 回调体内 await 移除（fire-and-forget，完成由 promise/done 驱动）
    src = src.replace("await delegator.removeAbilityMonitor(", "delegator.removeAbilityMonitor(")
    src = src.replace("await data.removeAbilityMonitor(", "data.removeAbilityMonitor(")
    src = src.replace("await delegator.startAbility(", "delegator.startAbility(")
    # 10. 行尾 })) → })（去 async 包裹多余括号）
    src = re.sub(r"\}\)\);?$", "})", src, flags=re.M)
    return src


class _M:
    """多行 it( 头（TestType 行 + async 行）的伪 Match。"""
    def __init__(self, ind: str, name_: str):
        self.ind, self.name_ = ind, name_

    def group(self, n: int) -> str:
        return (self.ind, self.name_)[n - 1]

    def groups(self) -> tuple[str, str]:
        return (self.ind, self.name_)


def _match_it_head(it_re: re.Pattern, lines: list[str], i: int, line: str):
    """匹配 it( 头：单行或 TestType 行 + async 行两行形态。返回 (m, i, line)。"""
    m = it_re.match(line)
    if not m and i + 1 < len(lines):
        m2 = re.match(
            r"^(\s*)it\((['\"])([^'\"]+)\2, TestType\.FUNCTION \| Size\.\w+ \| Level\.LEVEL\d+,?$",
            line)
        if m2 and "async (done: () => void) => {" in lines[i + 1]:
            m = _M(m2.group(1), m2.group(3))
            i += 1
            line = lines[i]
    return m, i, line


def convert_done_to_promise(path: str) -> int:
    """it() 用例 done 模式 → 静态 gate 合规模式（2026-09-01 改版）。

    静态 hypium arity=1 注入真实 done（processFuncWithArgOne），且 gitcode
    ASYNC_TESTCASE.01 要求创建 Promise 的用例必须声明 done 参数 →
    统一 `async (done: () => void): Promise<void>` + `await new Promise`，
    分支内 `resolve(undefined); done();`（先 resolve 再 done）。
    """
    lines = open(path, encoding="utf-8").read().splitlines()
    out: list[str] = []
    i = 0
    n = 0
    it_re = re.compile(
        r"^(\s*)it\((['\"])([^'\"]+)\2, Level\.LEVEL\d+, "
        r"(?:TestType\.FUNCTION \| Size\.\w+ \| )?async \(done: \(\) => void\) => \{$")
    while i < len(lines):
        line = lines[i]
        m, i, line = _match_it_head(it_re, lines, i, line)
        if not m:
            out.append(line)
            i += 1
            continue
        indent = m.group(1)
        name = m.group(2) if len(m.groups()) < 3 else m.group(3)
        depth = line.count("{") - line.count("}")
        j = i + 1
        while j < len(lines) and depth > 0:
            depth += lines[j].count("{") - lines[j].count("}")
            if depth == 0:
                break
            j += 1
        if j >= len(lines) or depth != 0:
            print(f"[WARN] 未找到闭合: {name}", file=sys.stderr)
            out.append(line)
            i += 1
            continue
        body = lines[i + 1:j]
        out.append(_gate_head(indent, name))
        out.extend(_gate_body(body))
        out.append(_gate_end(indent))
        n += 1
        i = j + 1
    open(path, "w", encoding="utf-8").write("\n".join(out) + "\n")
    return n


def _gate_head(indent: str, name: str) -> str:
    """gate 合规用例头：done 参数 + promise 包裹（2026-09-01 改版）。"""
    return (f"{indent}it('{name}', Level.LEVEL0, async (done: () => void): Promise<void> => {{\n"
            f"{indent}      await new Promise<void>((resolve, reject) => {{")


def _gate_body(body: list[str]) -> list[str]:
    """done() → resolve(undefined); done();（先 resolve 再 done，防提前完成）；
    executor 内不能 await → msSleep 改 fire-and-forget。"""
    new_body = [re.sub(r"\bdone\(\)", "resolve(undefined); done();", bl) for bl in body]
    return [re.sub(r"await Utils\.msSleep\((\d+)\);?", r"Utils.msSleep(\1);", bl)
            for bl in new_body]


def _gate_end(indent: str) -> str:
    return f"{indent}      }});\n{indent}}})"


def renumber_4digit(path: str) -> int:
    """gitcode TCNUMBER.01：编号末段必须恰 4 位数字（2026-09-01 实测）。

    动态官方 5 位编号（_23600/_14800）同步后会被门禁报命名违规 →
    去掉末位重编号（14800→1480，动态编号 = 静态 ×10，确定性可追溯）。
    同步替换 it() 名 + @tc.number + @tc.name + 用例内日志/TESTCASE 字符串。
    """
    src = open(path, encoding="utf-8").read()
    nums = set(re.findall(r"(?<![A-Za-z0-9])(\d{5})(?!\d)", src))
    n = 0
    for num in sorted(nums, key=lambda x: -int(x)):
        if num.endswith("0"):
            new = num[:-1]
        else:
            print(f"[WARN] {num} 非 10 的倍数，跳过（需人工重编号）", file=sys.stderr)
            continue
        pat = re.compile(r"(?<![A-Za-z0-9])" + num + r"(?!\d)")
        src, c = pat.subn(new, src)
        n += c
    if n:
        open(path, "w", encoding="utf-8").write(src)
    return n


def aftereach_simplify(src: str) -> str:
    """afterEach 静态化：去掉 removeAbilityMonitor（设备端 cast 崩溃），保留 sleep + done。"""
    src = re.sub(r"    afterEach\(async \(done: \(\) => void\) => \{.*?\n    \}\);\n",
                 "    afterEach(async (done: () => void) => {\n"
                 "      console.info(TAG + \" afterEach each called\");\n"
                 "      await Utils.msSleep(1500);\n"
                 "      done();\n"
                 "    });\n",
                 src, flags=re.S)
    return src


def _extract_dialog_snippet(src: str) -> str | None:
    """从已有静态文件提取 advanced_dialog 点击块（保留同步前静态特有弹窗逻辑）。"""
    if "advanced_dialog_button_0" not in src:
        return None
    m = re.search(
        r"let driver = Driver\.create\(\);\s*"
        r"try \{\s*"
        r"let allowed = await driver\.findComponent\(ON\.id\('advanced_dialog_button_0'\)\);\s*"
        r"if \(allowed\) \{\s*"
        r"await allowed\.click\(\);\s*"
        r"\}\s*"
        r"\} catch \(err\) \{\s*"
        r"console\.error\('findComponent failed: ' \+ JSON\.stringify\(err\)\);\s*"
        r"\}",
        src,
        flags=re.S,
    )
    return m.group(0) if m else None


def _ensure_uitest_import(src: str) -> str:
    if "from '@ohos.UiTest'" in src or 'from "@ohos.UiTest"' in src:
        return src
    return src.replace(
        "from '../../../hypium/index';",
        "from '../../../hypium/index';\nimport { Driver, ON } from '@ohos.UiTest';",
        1,
    )


def preserve_advanced_dialog(src: str, dialog_snip: str | None) -> str:
    """同步后把静态原有 advanced_dialog 点击注回 beforeAll（禁止覆盖抹掉）。

    见 SKILL.md「beforeAll 弹窗硬门禁」；配对动态侧用 sync_advanced_dialog.py。
    """
    if not dialog_snip or "advanced_dialog_button_0" in src:
        return src
    src = _ensure_uitest_import(src)
    m = re.search(r"\bbeforeAll\s*\(", src)
    if not m:
        # 无 beforeAll：在初次 describe 后新建
        dm = re.search(
            r"describe\s*\(\s*['\"][^'\"]+['\"]\s*,\s*(?:\(\)\s*(?::\s*void\s*)?\s*=>\s*)?\{",
            src,
        )
        if not dm:
            return src
        block = (
            "\n    beforeAll(async () => {\n      "
            + dialog_snip
            + "\n    })\n"
        )
        return src[: dm.end()] + block + src[dm.end():]
    brace = src.find("{", m.end())
    if brace < 0:
        return src
    header = src[m.start():brace]
    insert_at = brace + 1
    if "async" not in header:
        new_header = re.sub(r"^(beforeAll\s*\()\s*", r"\1async ", header, count=1)
        src = src[: m.start()] + new_header + src[brace:]
        m = re.search(r"\bbeforeAll\s*\(", src)
        brace = src.find("{", m.end())
        insert_at = brace + 1
    return src[:insert_at] + "\n      " + dialog_snip + "\n" + src[insert_at:]


def preserve_static_only_cases(old_sta: str, new_sta: str, dyn_src: str) -> tuple[str, int]:
    """覆盖同步后把动态没有的静态特有用例注回（禁止为对齐条数删除）。"""
    try:
        from pair_utils import extract_it_block, list_it_names, static_only_names
    except ImportError:
        return new_sta, 0
    only = static_only_names(list_it_names(dyn_src), list_it_names(old_sta))
    new_set = set(list_it_names(new_sta))
    blocks = []
    for name in only:
        if name in new_set:
            continue
        block = extract_it_block(old_sta, name)
        if block:
            blocks.append(block)
    if not blocks:
        return new_sta, 0
    marker = "\n    // ===== preserved static-only cases (do not drop) =====\n"
    insert = marker + "\n".join(blocks)
    idx = new_sta.rfind("\n  })\n}")
    if idx < 0:
        idx = new_sta.rfind("\n  });\n}")
    if idx < 0:
        return new_sta + insert, len(blocks)
    return new_sta[:idx] + insert + new_sta[idx:], len(blocks)


def main():
    args = [a for a in sys.argv[1:] if a != "--no-preserve"]
    no_preserve = "--no-preserve" in sys.argv[1:]
    dyn_file, sta_file, bundle, bundle_static = args[0:4]
    # 覆盖前先保存静态侧弹窗逻辑与全文（静态特有用例）
    dialog_snip = None
    old_sta = ""
    try:
        old_sta = open(sta_file, encoding="utf-8").read()
        dialog_snip = _extract_dialog_snippet(old_sta)
    except OSError:
        pass
    dyn_src = open(dyn_file, encoding="utf-8").read()
    src = dyn_src
    src = base_transform(src, bundle, bundle_static)
    src = compile_fixes(src)
    src = aftereach_simplify(src)
    src = preserve_advanced_dialog(src, dialog_snip)
    open(sta_file, "w", encoding="utf-8").write(src)
    n = convert_done_to_promise(sta_file)
    m = renumber_4digit(sta_file)
    kept = 0
    if old_sta and not no_preserve:
        merged, kept = preserve_static_only_cases(
            old_sta, open(sta_file, encoding="utf-8").read(), dyn_src)
        if kept:
            open(sta_file, "w", encoding="utf-8").write(merged)
    dlg = "dialog-preserved" if dialog_snip else "no-prior-dialog"
    print(
        f"written {sta_file}, gate-wrapped {n} cases, renumbered {m} 5-digit, "
        f"{dlg}, static-only-kept={kept}"
    )


if __name__ == "__main__":
    main()
