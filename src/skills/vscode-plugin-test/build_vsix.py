#!/usr/bin/env python3
"""Build the napi_generator VS Code extension as a .vsix package.

The repository's full `tsc` build currently reports historical type errors but
still emits JavaScript. This helper compiles (unless --no-compile is used),
tolerates that condition when `out/extension.js` exists, and packages the
runtime files with vsce's programmatic `pack` API. Calling `pack` directly
avoids `vsce package`'s automatic `vscode:prepublish` step, which would rerun
`tsc` and fail on the same historical errors.
"""

import argparse
import hashlib
import json
import os
import shutil
import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path
from typing import NoReturn

REPO_ROOT = Path(__file__).resolve().parents[3]
PLUGIN_DIR = REPO_ROOT / "src" / "vscode_plugin"
DEFAULT_IGNORE = """\
# Runtime extension package only
.vscode/**
.vscode-test/**
src/**
out/test/**
test/**
docs/**
**/*.map
**/*.ts
**/*.tsx
tsconfig.json
package-lock.json
*.vsix
node_modules/.bin/**
node_modules/vsce/**
node_modules/@vscode/vsce/**
"""


def fail(message: str, code: int = 2) -> NoReturn:
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


def read_manifest(plugin_dir: Path) -> dict:
    package_json = plugin_dir / "package.json"
    if not package_json.exists():
        fail(f"缺少 {package_json}")

    raw = package_json.read_bytes()
    if raw.startswith(b"\xef\xbb\xbf"):
        fail(
            "package.json 含有 UTF-8 BOM。VS Code 1.73.x 会因此无法加载扩展配置，"
            "请先用无 BOM 的 UTF-8 保存该文件。"
        )
    try:
        return json.loads(raw.decode("utf-8"))
    except (UnicodeDecodeError, json.JSONDecodeError) as exc:
        fail(f"package.json 不是有效的 UTF-8 JSON: {exc}")
    return {}


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


def print_tail(path: Path, lines: int = 20) -> None:
    if not path.exists():
        return
    try:
        content = path.read_text(encoding="utf-8", errors="replace").splitlines()
    except OSError:
        return
    print(f"--- {path} (last {lines} lines) ---")
    for line in content[-lines:]:
        print(line)


def ensure_dependencies(plugin_dir: Path, env: dict[str, str], timeout: int, install: bool) -> None:
    required = (
        plugin_dir / "node_modules" / ".bin" / "tsc",
        plugin_dir / "node_modules" / "vsce" / "out" / "package.js",
    )
    if all(path.exists() for path in required):
        return

    if not install:
        fail(
            "node_modules 缺少 tsc 或 vsce。请先执行：\n"
            "  cd src/vscode_plugin && npm install --ignore-scripts --no-audit --no-fund\n"
            "或给本脚本加 --install。"
        )

    install_log = Path("/tmp/vscode-plugin-build-install.log")
    rc = run_command(
        ["npm", "install", "--ignore-scripts", "--no-audit", "--no-fund"],
        plugin_dir,
        env,
        install_log,
        timeout,
    )
    if rc != 0:
        print_tail(install_log)
        fail("npm install 失败")


def compile_extension(plugin_dir: Path, env: dict[str, str], timeout: int, no_compile: bool) -> None:
    if not no_compile:
        compile_log = Path("/tmp/vscode-plugin-build-tsc.log")
        tsc = plugin_dir / "node_modules" / ".bin" / "tsc"
        rc = run_command([str(tsc), "-p", "./"], plugin_dir, env, compile_log, timeout)
        if rc != 0:
            print("WARNING: tsc 返回非 0（当前仓库存在历史类型错误）；检查是否仍生成 out/")
            print_tail(compile_log, 10)

    if not (plugin_dir / "out" / "extension.js").exists():
        fail("未生成 out/extension.js；请修复编译或先执行 npm run compile")


def package_vsix(plugin_dir: Path, node: str, output: Path, timeout: int, env: dict[str, str]) -> int:
    vsce_package = plugin_dir / "node_modules" / "vsce" / "out" / "package.js"
    if not vsce_package.exists():
        fail(f"找不到 vsce 打包入口: {vsce_package}")

    root_license = REPO_ROOT / "LICENSE"
    plugin_license = plugin_dir / "LICENSE"
    created_license = False
    if not plugin_license.exists():
        if not root_license.exists():
            fail("仓库根目录没有 LICENSE，vsce 会要求许可证文件")
        shutil.copyfile(root_license, plugin_license)
        created_license = True

    temp_dir = Path(tempfile.mkdtemp(prefix="vscode-plugin-build-"))
    ignore_file = temp_dir / ".vscodeignore"
    ignore_file.write_text(DEFAULT_IGNORE, encoding="utf-8")
    pack_script = temp_dir / "pack_vsix.cjs"
    pack_script.write_text(
        """
const path = require('path');
const { pack } = require(process.argv[2]);
pack({
  cwd: process.argv[3],
  packagePath: path.resolve(process.argv[4]),
  ignoreFile: process.argv[5],
  dependencies: true,
  useYarn: false,
}).then(({ files }) => {
  console.log(`PACK_OK files=${files.length}`);
}).catch(err => {
  console.error('PACK_FAILED:', err && err.stack || err);
  process.exit(1);
});
""".lstrip(),
        encoding="utf-8",
    )

    log_path = Path("/tmp/vscode-plugin-build-vsce.log")
    try:
        rc = run_command(
            [
                node,
                str(pack_script),
                str(vsce_package),
                str(plugin_dir),
                str(output),
                str(ignore_file),
            ],
            plugin_dir,
            env,
            log_path,
            timeout,
        )
        if rc != 0:
            print_tail(log_path)
            fail(f"vsce 打包失败（rc={rc}）")
        if not output.exists():
            print_tail(log_path)
            fail(f"vsce 未生成 {output}")
        return 0
    finally:
        shutil.rmtree(temp_dir, ignore_errors=True)
        if created_license:
            plugin_license.unlink(missing_ok=True)


def validate_vsix(output: Path) -> int:
    try:
        with zipfile.ZipFile(output) as archive:
            bad = archive.testzip()
            if bad:
                fail(f"VSIX 压缩数据损坏: {bad}")
            names = set(archive.namelist())
            required = {
                "extension/out/extension.js",
                "extension/package.json",
            }
            missing = sorted(required - names)
            if missing:
                fail(f"VSIX 缺少必要文件: {', '.join(missing)}")
            return len(names)
    except zipfile.BadZipFile as exc:
        fail(f"不是有效的 VSIX/ZIP: {exc}")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--out", default="", help="输出 .vsix 路径（默认 src/vscode_plugin/napi-gen-<version>.vsix）")
    parser.add_argument("--no-compile", action="store_true", help="跳过 tsc，直接使用已有 out/")
    parser.add_argument("--install", action="store_true", help="node_modules 缺失时自动 npm install")
    parser.add_argument("--timeout", type=int, default=1800, help="单条命令超时秒数（默认 1800）")
    parser.add_argument("--dry-run", action="store_true", help="只打印将执行的命令")
    args = parser.parse_args()

    plugin_dir = PLUGIN_DIR
    manifest = read_manifest(plugin_dir)
    version = str(manifest.get("version") or "0.0.0")
    output = Path(args.out) if args.out else plugin_dir / f"napi-gen-{version}.vsix"
    if not output.is_absolute():
        output = plugin_dir / output
    output = output.resolve()

    node, node_dir = prepare_node()
    env = {key: value for key, value in os.environ.items() if key != "ELECTRON_RUN_AS_NODE"}
    env["PATH"] = f"{node_dir}:{env.get('PATH', '')}"
    env["LANG"] = env.get("LANG", "C.UTF-8")
    env["TERM"] = env.get("TERM", "xterm-256color")

    tsc = plugin_dir / "node_modules" / ".bin" / "tsc"
    if args.dry_run:
        print(f"DRY-RUN: VERSION={version}")
        print(f"DRY-RUN: OUTPUT={output}")
        if not args.no_compile:
            print(f"DRY-RUN: {tsc} -p ./")
        print(f"DRY-RUN: programmatic vsce pack -> {output}")
        print("DRY-RUN: validate extension/out/extension.js and extension/package.json")
        return 0

    if not args.no_compile and not args.install and not tsc.exists():
        fail(
            "node_modules 缺少 tsc。请先执行：\n"
            "  cd src/vscode_plugin && npm install --ignore-scripts --no-audit --no-fund\n"
            "或给本脚本加 --install。"
        )

    ensure_dependencies(plugin_dir, env, args.timeout, args.install)
    compile_extension(plugin_dir, env, args.timeout, args.no_compile)
    package_vsix(plugin_dir, node, output, args.timeout, env)
    file_count = validate_vsix(output)
    digest = hashlib.sha256(output.read_bytes()).hexdigest()
    size_mb = output.stat().st_size / (1024 * 1024)

    print("\nBUILD_OK")
    print(f"VSIX={output}")
    print(f"FILES={file_count}")
    print(f"SIZE={size_mb:.2f}MB")
    print(f"SHA256={digest}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
