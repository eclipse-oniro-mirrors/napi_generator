#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""静态用例去 promise 包裹（2026-09-02 审查意见固化）。

背景：静态 hypium arity=1 会注入真实 done（getFuncWithArgsOne），早期「done 无效」
误判导致用例被包成 `await new Promise((resolve) => {...})` 形态——审查意见：包裹多余，
应恢复与动态一致的直接 done 风格（async (done: () => void) => { ... done(); }）。

转换（内容/断言/编号一律不动，仅去包裹层）：
- it 头行不变（保留 Level/编号）
- 删除 `await new Promise<void>((resolve, reject) => {` 行
- 兼容两种 body 形态：直接体 / runCase 包装体（let runCase = async ... => { ... }; runCase().catch(...)）
- 分支内 `resolve(undefined); done();` → `done();`；孤立 `resolve(undefined)` → `done();`
  （无 promise 后 resolve 无意义，用例完成全靠 done）
- 输出行与输入一致（缩进保留），便于 diff 最小化

用法：python3 unwrap_promise.py <file.ets> [file2.ets ...]
"""
import re
import sys
from pathlib import Path


def _brace_delta(ln: str) -> int:
    """行内 { } 净增（跳过 ' \" ` 字符串与模板串）。"""
    d = 0
    i = 0
    n = len(ln)
    while i < n:
        c = ln[i]
        if c in ("'", '"', "`"):
            q = c
            i += 1
            while i < n:
                if ln[i] == "\\":
                    i += 2
                    continue
                if ln[i] == q:
                    break
                i += 1
        elif c == "{":
            d += 1
        elif c == "}":
            d -= 1
        i += 1
    return d


def unwrap_file(path: Path) -> int:
    lines = path.read_text(encoding="utf-8").split("\n")
    it_rows = [i for i, ln in enumerate(lines) if re.match(r"\s*it\(['\"]SUB_", ln)]
    if not it_rows:
        return 0

    def jsdoc_of(it_i: int) -> int:
        i = it_i
        while i > 0 and not lines[i].strip() == "/**":
            i -= 1
        return i

    def unwrap(js: int, end: int) -> list[str]:
        out: list[str] = []
        i = js
        while i < end and "it(" not in lines[i]:
            out.append(lines[i])
            i += 1
        it_line = lines[i]
        assert re.match(r"\s*it\(['\"]SUB_.*async \(done: \(\) => void\): Promise<void> => \{$", it_line), it_line
        out.append(it_line)
        i += 1
        assert "new Promise" in lines[i], lines[i]
        i += 1
        has_run_case = "runCase" in lines[i]
        if has_run_case:
            assert "let runCase" in lines[i], lines[i]
            i += 1
        depth = 1
        body: list[str] = []
        while i < end and depth > 0:
            ln = lines[i]
            depth += _brace_delta(ln)
            if depth > 0:
                body.append(ln)
            i += 1
        assert depth == 0, f"用例未闭合: {it_line[:60]}"
        nb: list[str] = []
        for ln in body:
            ln = ln.replace("resolve(undefined); done();", "done();")
            ln = re.sub(r"\bresolve\(\s*undefined\s*\)\s*;?", "done();", ln)
            nb.append(ln)
        out.extend(nb)
        indent = re.match(r"(\s*)", it_line).group(1)
        out.append(f"{indent}    }})")
        # 保留用例闭之后、下一用例之前的模块级行（常量定义等，如 length_1000）
        # 此时 lines[i] 已越过用例闭（depth 归零行）——检查其后的行；
        # runCase 形态的收尾（runCase().catch(...) 与 promise 闭 ）行跳过
        rest = []
        while i < end:
            ln = lines[i]
            st = ln.strip()
            if st.startswith("runCase().catch(") or st == "});" or st == "})":
                i += 1
                continue
            rest.append(ln)
            i += 1
        out.extend(rest)
        return out

    first_js = jsdoc_of(it_rows[0])
    head = lines[:first_js]
    close_i = None
    for i in range(it_rows[-1], len(lines)):
        if lines[i] in ("  })", "  });"):
            close_i = i
            break
    assert close_i is not None, "describe 闭合未找到"
    tail = lines[close_i:]  # 保留 describe 闭及其后可能的模块级辅助函数
    new_lines = list(head)
    for idx, it_i in enumerate(it_rows):
        js = jsdoc_of(it_i)
        # 块尾到下一用例的 JSDoc 起点（避免 rest 重复保留 JSDoc/用例注释）
        end = jsdoc_of(it_rows[idx + 1]) if idx + 1 < len(it_rows) else close_i
        new_lines.extend(unwrap(js, end))
    new_lines.extend(tail)
    out = "\n".join(new_lines)
    path.write_text(out, encoding="utf-8")
    return len(it_rows)


def main() -> int:
    total = 0
    for arg in sys.argv[1:]:
        p = Path(arg)
        n = unwrap_file(p)
        print(f"{p.name}: 去包裹 {n} 条")
        total += n
    print("TOTAL:", total)
    return 0


if __name__ == "__main__":
    sys.exit(main())
