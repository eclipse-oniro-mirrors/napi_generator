#!/usr/bin/env python3
"""Run the napi_generator VS Code extension test suite.

The VS Code extension integration tests must run inside an Electron Extension
Host. This helper prepares the environment, clears the common
ELECTRON_RUN_AS_NODE trap, starts xvfb, runs the generated Mocha suite, and
prints the machine-readable summary/failures written by
src/test/suite/reporter.ts.
"""

import argparse
import json
import os
import shutil
import subprocess
import sys
import tempfile
import time
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[3]
PLUGIN_DIR = REPO_ROOT / "src" / "vscode_plugin"
RESULT_ROOT = Path("/tmp/vscode-plugin-test-results")
VALID_SUITES = ("common", "gen", "parse", "performance", "stability")


def fail(message: str, code: int = 2) -> "NoReturn":
    print(f"ERROR: {message}", file=sys.stderr)
    raise SystemExit(code)


def prepare_node() -> tuple[str, str]:
    """Return (node_executable, directory_to_prepend_to_PATH)."""
    found = shutil.which("node")
    if found:
        return found, str(Path(found).resolve().parent)

    for candidate in ("/usr/bin/node.20", "/usr/bin/node"):
        if Path(candidate).exists():
            bin_dir = Path("/tmp/vscode-plugin-test-bin")
            bin_dir.mkdir(parents=True, exist_ok=True)
            link = bin_dir / "node"
            if not link.exists():
                link.symlink_to(candidate)
            return str(link), str(bin_dir)

    fail("node 未找到；请安装 Node.js 18+（本仓库验证版本 v20.20.0）")
    return "", ""


def check_environment(plugin_dir: Path) -> None:
    package_json = plugin_dir / "package.json"
    if not package_json.exists():
        fail(f"缺少 {package_json}")

    raw = package_json.read_bytes()
    if raw.startswith(b"\xef\xbb\xbf"):
        fail(
            "package.json 含有 UTF-8 BOM。VS Code 1.73.x 会因此无法加载扩展配置，"
            "请先用无 BOM 的 UTF-8 保存该文件。"
        )

    if shutil.which("xvfb-run") is None and not os.environ.get("DISPLAY"):
        fail("未找到 xvfb-run 且 DISPLAY 为空；请安装 xvfb 或在有图形会话的终端运行")


def run_command(cmd: list[str], cwd: Path, env: dict[str, str], log_path: Path, timeout: int) -> int:
    print("+", " ".join(cmd))
    print(f"  cwd={cwd}")
    print(f"  log={log_path}")
    with log_path.open("w", encoding="utf-8") as log:
        try:
            completed = subprocess.run(
                cmd,
                cwd=str(cwd),
                env=env,
                stdout=log,
                stderr=subprocess.STDOUT,
                timeout=timeout,
            )
        except subprocess.TimeoutExpired:
            print(f"ERROR: 命令超时（{timeout}s），日志见 {log_path}", file=sys.stderr)
            return 124
    return completed.returncode


def print_tail(path: Path, lines: int = 40) -> None:
    if not path.exists():
        return
    try:
        content = path.read_text(encoding="utf-8", errors="replace").splitlines()
    except OSError:
        return
    print(f"--- {path} (last {lines} lines) ---")
    for line in content[-lines:]:
        print(line)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--suite",
        default="all",
        help="逗号分隔的 suite 目录：common,gen,parse,performance,stability；all 表示全部",
    )
    parser.add_argument("--grep", default="", help="只运行 fullTitle 匹配该正则的用例")
    parser.add_argument("--timeout", type=int, default=7200, help="单次运行超时秒数（默认 7200）")
    parser.add_argument("--result-dir", default="", help="结果目录（默认 /tmp/vscode-plugin-test-results/<时间>）")
    parser.add_argument("--no-compile", action="store_true", help="跳过 tsc，直接使用已有 out/")
    parser.add_argument("--install", action="store_true", help="node_modules 不存在时执行 npm install")
    parser.add_argument("--keep-profile", action="store_true", help="保留本次 VS Code profile 便于排查")
    parser.add_argument("--dry-run", action="store_true", help="只打印将执行的命令")
    args = parser.parse_args()

    plugin_dir = PLUGIN_DIR
    suite_arg = args.suite.strip()
    if suite_arg.lower() == "all":
        suite_dirs = ""
    else:
        suites = [item.strip() for item in suite_arg.split(",") if item.strip()]
        invalid = [item for item in suites if item not in VALID_SUITES]
        if invalid:
            fail(f"未知 suite: {', '.join(invalid)}；可选值: {', '.join(VALID_SUITES)}")
        suite_dirs = ",".join(suites)

    check_environment(plugin_dir)
    node, node_dir = prepare_node()

    env = {key: value for key, value in os.environ.items() if key != "ELECTRON_RUN_AS_NODE"}
    env["PATH"] = f"{node_dir}:{env.get('PATH', '')}"
    env["LANG"] = env.get("LANG", "C.UTF-8")
    env["TERM"] = env.get("TERM", "xterm-256color")
    env["VSCODE_TEST_VERSION"] = env.get("VSCODE_TEST_VERSION", "1.73.1")
    env["SUITE_DIRS"] = suite_dirs
    env["SUITE_SHARDS"] = "1"
    env["SUITE_SHARD"] = "0"
    if args.grep:
        env["SUITE_GREP"] = args.grep

    if not (plugin_dir / "node_modules" / ".bin" / "tsc").exists():
        if not args.install:
            fail(
                "node_modules 不存在。请先执行：\n"
                "  cd src/vscode_plugin && npm install --ignore-scripts --no-audit --no-fund\n"
                "或给本脚本加 --install。"
            )
        if args.dry_run:
            print("DRY-RUN: npm install --ignore-scripts --no-audit --no-fund")
        else:
            install_log = Path("/tmp/vscode-plugin-test-install.log")
            rc = run_command(
                ["npm", "install", "--ignore-scripts", "--no-audit", "--no-fund"],
                plugin_dir,
                env,
                install_log,
                args.timeout,
            )
            if rc != 0:
                print_tail(install_log)
                fail("npm install 失败")

    if not args.no_compile:
        compile_log = Path("/tmp/vscode-plugin-test-tsc.log")
        compile_cmd = [str(plugin_dir / "node_modules" / ".bin" / "tsc"), "-p", "./"]
        if args.dry_run:
            print("DRY-RUN:", " ".join(compile_cmd))
        else:
            rc = run_command(compile_cmd, plugin_dir, env, compile_log, args.timeout)
            if rc != 0:
                print("WARNING: tsc 返回非 0（当前仓库存在历史类型错误）；检查是否仍生成 out/")
                print_tail(compile_log, 10)
                if not (plugin_dir / "out" / "test" / "runTest.js").exists():
                    fail("tsc 失败且没有生成 out/test/runTest.js")
                print("继续使用已生成的 out/ 运行测试。")

    if not (plugin_dir / "out" / "test" / "runTest.js").exists():
        fail("缺少 out/test/runTest.js；请先编译")
    if not (plugin_dir / "out" / "test" / "suite" / "reporter.js").exists():
        fail("缺少 out/test/suite/reporter.js；请先编译")

    stamp = time.strftime("%Y%m%d-%H%M%S")
    result_dir = Path(args.result_dir) if args.result_dir else RESULT_ROOT / stamp
    result_dir.mkdir(parents=True, exist_ok=True)
    profile_dir = Path(tempfile.mkdtemp(prefix="vscode-plugin-test-profile-"))
    env["SUITE_RESULT_DIR"] = str(result_dir)
    env["VSCODE_TEST_USER_DATA"] = str(profile_dir / "user-data")
    env["VSCODE_TEST_EXTENSIONS_DIR"] = str(profile_dir / "extensions")

    def finish(code: int) -> int:
        if not args.keep_profile:
            shutil.rmtree(profile_dir, ignore_errors=True)
        return code

    run_log = result_dir / "run.log"
    cmd = [node, str(plugin_dir / "out" / "test" / "runTest.js")]
    if shutil.which("xvfb-run"):
        cmd = ["xvfb-run", "-a"] + cmd

    if args.dry_run:
        print("DRY-RUN:", " ".join(cmd))
        print(f"DRY-RUN: SUITE_DIRS={suite_dirs or '<all>'} SUITE_GREP={args.grep}")
        print(f"DRY-RUN: RESULT_DIR={result_dir}")
        return finish(0)

    rc = run_command(cmd, plugin_dir, env, run_log, args.timeout)
    summary_path = result_dir / "summary.json"
    failures_path = result_dir / "failures.log"

    print(f"\nRESULT_DIR={result_dir}")
    if summary_path.exists():
        summary = json.loads(summary_path.read_text(encoding="utf-8"))
        print(json.dumps(summary, ensure_ascii=False, indent=2))
        if failures_path.exists() and failures_path.read_text(encoding="utf-8").strip():
            print(f"\n--- failures ({failures_path}) ---")
            print(failures_path.read_text(encoding="utf-8").strip())
        if summary.get("failures", 0) > 0:
            return finish(1)
        if rc != 0:
            print(f"WARNING: test process rc={rc}，但 summary 无失败用例", file=sys.stderr)
        return finish(0)

    print_tail(run_log, 80)
    finish(2)
    fail(f"测试进程结束但未生成 {summary_path}（rc={rc}）", 2)
    return 2


if __name__ == "__main__":
    raise SystemExit(main())
