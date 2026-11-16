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


def _skip_quoted(ln: str, i: int) -> int:
    """Skip a quote-delimited span starting at ln[i]; return index after close."""
    q = ln[i]
    i += 1
    n = len(ln)
    while i < n:
        if ln[i] == "\\":
            i += 2
            continue
        if ln[i] == q:
            return i + 1
        i += 1
    return n


def _brace_delta(ln: str) -> int:
    """行内 { } 净增（跳过 ' \" ` 字符串与模板串）。"""
    d = 0
    i = 0
    n = len(ln)
    while i < n:
        c = ln[i]
        if c in ("'", '"', "`"):
            i = _skip_quoted(ln, i)
            continue
        if c == "{":
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

    def _skip_promise_header(i: int, it_line: str) -> int:
        if "new Promise" not in lines[i]:
            raise RuntimeError(lines[i])
        i += 1
        if "runCase" in lines[i]:
            if "let runCase" not in lines[i]:
                raise RuntimeError(lines[i])
            i += 1
        return i

    def _collect_promise_body(i: int, end: int, it_line: str) -> tuple[list[str], int]:
        depth = 1
        body: list[str] = []
        while i < end and depth > 0:
            ln = lines[i]
            depth += _brace_delta(ln)
            if depth > 0:
                body.append(ln)
            i += 1
        if depth != 0:
            raise RuntimeError(f"用例未闭合: {it_line[:60]}")
        return body, i

    def _rewrite_resolve_done(body: list[str]) -> list[str]:
        nb: list[str] = []
        for ln in body:
            ln = ln.replace("resolve(undefined); done();", "done();")
            ln = re.sub(r"\bresolve\(\s*undefined\s*\)\s*;?", "done();", ln)
            nb.append(ln)
        return nb

    def _collect_rest(i: int, end: int) -> list[str]:
        rest: list[str] = []
        while i < end:
            ln = lines[i]
            st = ln.strip()
            if st.startswith("runCase().catch(") or st == "});" or st == "})":
                i += 1
                continue
            rest.append(ln)
            i += 1
        return rest

    def unwrap(js: int, end: int) -> list[str]:
        out: list[str] = []
        i = js
        while i < end and "it(" not in lines[i]:
            out.append(lines[i])
            i += 1
        it_line = lines[i]
        it_pat = (
            r"\s*it\(['\"]SUB_.*async \(done: \(\) => void\): "
            r"Promise<void> => \{$"
        )
        if re.match(it_pat, it_line) is None:
            raise RuntimeError(it_line)
        out.append(it_line)
        i = _skip_promise_header(i + 1, it_line)
        body, i = _collect_promise_body(i, end, it_line)
        out.extend(_rewrite_resolve_done(body))
        indent = re.match(r"(\s*)", it_line).group(1)
        out.append(f"{indent}    }})")
        out.extend(_collect_rest(i, end))
        return out

    first_js = jsdoc_of(it_rows[0])
    head = lines[:first_js]
    close_i = None
    for i in range(it_rows[-1], len(lines)):
        if lines[i] in ("  })", "  });"):
            close_i = i
            break
    if close_i is None:
        raise RuntimeError("describe 闭合未找到")
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
