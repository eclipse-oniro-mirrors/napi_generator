#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""gitcode PR 提交一体化：创建 issue → 创建 PR → 描述内嵌 issue 链接自动关联 → （可选）触发 start build。

背景（2026-09 实锤）：
  * gitcode 的 issue 关联只能在「创建 PR 时于描述写入 issue 链接」自动完成；
    API 无法事后关联（POST /pulls/{n}/issues 各种 body 格式均 400）。
  * CI 门禁要求 PR 必须关联 Issue，否则评论 start build 会被拒
    （The PR is not associated with any Issue）。
  * OpenHarmony 提交规范：触发 start build 前须等 1 分钟（--build --delay 60）。

用法：
  # ① 创建 issue，输出 issue 号
  python3 gitcode_pr_submit.py issue \
      --title "[新需求]: xxx ts→ets 迁移与 3.2 SDK 适配" \
      --body "说明..." [--body-file body.md]

  # ② 创建 PR（描述自动追加 issue 链接并验证关联）
  python3 gitcode_pr_submit.py pr \
      --title "test(ability): xxx；Co-authored-by: Agent" \
      --head "nicklaus0602:req2-submit-02" --base master \
      --body-file body.md --issue 32243

  # ②b 已有 PR 补关联（PATCH 描述追加链接）
  python3 gitcode_pr_submit.py link 43950 --issue 32640

  # ③ 本地 CI 同签验板后：PATCH PR 描述追加测试段 + 截图路径
  python3 gitcode_pr_submit.py describe-report 44817 \
      --screenshot /tmp/pr_verify/summary_top.png \
      --report-html /tmp/pr_verify/summary_report.html \
      --summary "6 modules 289/289 failures=0"

  # ④ 触发门禁构建（默认 sleep 60s 后评论 start build）
  python3 gitcode_pr_submit.py build 43480
  python3 gitcode_pr_submit.py build 43480 --delay 0   # 立即触发

  # ⑤ 一键：issue + PR + 关联 + 触发构建（--build 需配 --delay）
  python3 gitcode_pr_submit.py all \
      --issue-title "..." --issue-body-file issue.md \
      --pr-title "..." --head "nicklaus0602:req2-submit-02" --base master \
      --pr-body-file body.md --build

token：~/.gitcode_token（chmod 600），或环境变量 GITCODE_TOKEN。
验板同签：xts_shared/pr_local_verify.py + sign_ci_identical.py（见 PR-DELIVER.md）。
"""
from __future__ import annotations

import argparse
import json
import os
import subprocess
import sys
import time
from pathlib import Path

API = "https://gitcode.com/api/v5/repos/{owner}/{repo}"
DEFAULT_OWNER = "openharmony"
DEFAULT_REPO = "xts_acts"
TOKEN_FILE = Path.home() / ".gitcode_token"
LINK_TEMPLATE = "https://gitcode.com/{owner}/{repo}/issues/{issue}"


def token() -> str:
    t = os.environ.get("GITCODE_TOKEN", "")
    if not t and TOKEN_FILE.is_file():
        t = TOKEN_FILE.read_text().strip()
    if not t:
        sys.exit("缺少 token：~/.gitcode_token 或环境变量 GITCODE_TOKEN")
    return t


def api(owner: str, repo: str) -> str:
    return API.format(owner=owner, repo=repo)


def request(method: str, url: str, payload: dict | None = None) -> dict:
    """gitcode v5 API 调用；非 2xx 退出并打印响应。"""
    cmd = [
        "curl", "-s", "-X", method, url,
        "-H", "Content-Type: application/json",
        "-H", f"private-token: {token()}",
    ]
    stdin_text = None
    if payload is not None:
        cmd.extend(["-d", "@-"])
        stdin_text = json.dumps(payload, ensure_ascii=False)
    r = subprocess.run(cmd, input=stdin_text, capture_output=True, text=True)
    try:
        d = json.loads(r.stdout)
    except json.JSONDecodeError:
        sys.exit(f"[HTTP 异常] {method} {url}\n{r.stdout[:300]}")
    if isinstance(d, dict) and d.get("error_code"):
        sys.exit(f"[API 错误] {method} {url}\n{d.get('error_message', d)}")
    return d


def read_body(path: str | None, inline: str | None) -> str:
    if path:
        return Path(path).read_text(encoding="utf-8").rstrip()
    return (inline or "").rstrip()


def issue_link(owner: str, repo: str, issue: int) -> str:
    return LINK_TEMPLATE.format(owner=owner, repo=repo, issue=issue)


def ensure_issue_linked(owner: str, repo: str, pr: int, issue: int) -> bool:
    """验证 issue 是否已关联；返回 True/False。"""
    d = request("GET", f"{api(owner, repo)}/pulls/{pr}/issues")
    data = d if isinstance(d, list) else d.get("data", d.get("issues", []))
    nums = [int(i.get("number", 0)) for i in data]
    if issue in nums:
        print(f"✅ PR {pr} 已关联 Issue {issue}（自动关联验证通过）")
        return True
    print(f"⚠️  PR {pr} 未检测到 Issue {issue} 关联（当前: {nums}），"
          f"请在 PR 描述补充链接后重跑 link 子命令或网页手动关联")
    return False


def append_issue_link(body: str, owner: str, repo: str, issue: int) -> str:
    link = issue_link(owner, repo, issue)
    if link in body:
        return body
    return body.rstrip() + f"\n\n---\n关联 Issue: {link}\n"


def cmd_issue(args) -> int:
    body = read_body(args.body_file, args.body)
    d = request("POST", f"{api(args.owner, args.repo)}/issues",
                {"title": args.title, "body": body})
    print(f"✅ Issue 已创建: {d.get('number')}")
    print(f"   链接: {d.get('html_url')}")
    return int(d.get("number", 0))


def cmd_pr(args) -> int:
    issue = args.issue
    if issue is None:
        sys.exit("缺少 --issue（关联的 Issue 编号）；gitcode 必须经 PR 描述链接关联")
    body = append_issue_link(
        read_body(args.body_file, args.body), args.owner, args.repo, issue)
    d = request("POST", f"{api(args.owner, args.repo)}/pulls",
                {"title": args.title,
                 "head": args.head,
                 "base": args.base,
                 "body": body})
    pr = int(d.get("number", 0))
    print(f"✅ PR 已创建: {pr}")
    print(f"   链接: {d.get('html_url')}")
    ensure_issue_linked(args.owner, args.repo, pr, issue)
    return pr


def cmd_link(args) -> int:
    """已有 PR：PATCH 描述追加 issue 链接并验证关联（无需重建 PR）。"""
    pr = args.pr
    issue = args.issue
    cur = request("GET", f"{api(args.owner, args.repo)}/pulls/{pr}")
    body = append_issue_link(cur.get("body") or "", args.owner, args.repo, issue)
    request("PATCH", f"{api(args.owner, args.repo)}/pulls/{pr}",
            {"body": body})
    print(f"✅ PR {pr} 描述已追加 Issue {issue} 链接")
    ok = ensure_issue_linked(args.owner, args.repo, pr, issue)
    return 0 if ok else 1


def cmd_build(args) -> int:
    delay = max(0, args.delay)
    if delay:
        print(f"⏳ 等待 {delay}s 后触发门禁（提交后勿过早触发）...")
        time.sleep(delay)
    d = request("POST", f"{api(args.owner, args.repo)}/pulls/{args.pr}/comments",
                {"body": "start build"})
    ok = "note_id" in d or d.get("id")
    print(f"{'✅' if ok else '❌'} PR {args.pr}: 已评论 start build")
    return 0 if ok else 1


def cmd_describe_report(args) -> int:
    """PATCH PR body: append local verify section (CI-identical HAPs + screenshot path)."""
    pr = args.pr
    cur = request("GET", f"{api(args.owner, args.repo)}/pulls/{pr}")
    body = cur.get("body") or ""
    marker = "<!-- pr-local-verify -->"
    section = args.section or ""
    if args.section_file:
        section = Path(args.section_file).read_text(encoding="utf-8")
    if not section.strip():
        shot = args.screenshot or ""
        html = args.report_html or ""
        summary = args.summary or "本地 CI 同签全套板测"
        section = (
            f"{marker}\n"
            f"## 本地交付验板（门禁同签，效力≈下载门禁产物）\n\n"
            f"{summary}\n\n"
            f"- REPORT_HTML: `{html}`\n"
            f"- SCREENSHOT_PNG: `{shot}`\n"
            f"- 签名: `developtools/hapsigner/dist` + 工程 `signature/openharmony_sx.p7b`\n"
            f"- 要求: AppInstallKit 全套；`aa test` 全模块（无 class 过滤）\n"
        )
    if marker in body:
        # replace old block through next --- or EOF
        import re as _re
        body = _re.sub(
            rf"{marker}.*?(?=\n## |\n---\n|\Z)",
            section.rstrip() + "\n\n",
            body,
            count=1,
            flags=_re.S,
        )
    else:
        body = body.rstrip() + "\n\n---\n" + section.rstrip() + "\n"
    request("PATCH", f"{api(args.owner, args.repo)}/pulls/{pr}", {"body": body})
    print(f"✅ PR {pr}: 描述已更新本地验板段")
    if args.screenshot:
        print(f"SCREENSHOT_PNG={args.screenshot}")
        print("Agent: Read 截图出图；若平台需附图，将 summary_top.png 上传到 PR 评论/描述。")
    return 0


def cmd_all(args) -> int:
    issue = args.issue
    if issue is None:
        if not args.issue_title:
            sys.exit("一键模式需要 --issue-title（自动创建 issue）或 --issue 指定已有编号")
        issue_args = argparse.Namespace(
            owner=args.owner, repo=args.repo,
            title=args.issue_title,
            body=args.issue_body, body_file=args.issue_body_file,
        )
        issue = cmd_issue(issue_args)
    pr_args = argparse.Namespace(
        owner=args.owner, repo=args.repo,
        title=args.pr_title, head=args.head, base=args.base,
        body=args.pr_body, body_file=args.pr_body_file, issue=issue,
    )
    pr = cmd_pr(pr_args)
    if args.build:
        build_args = argparse.Namespace(
            owner=args.owner, repo=args.repo, pr=pr, delay=args.delay)
        return cmd_build(build_args)
    return 0


def main() -> int:
    p = argparse.ArgumentParser(description="gitcode PR 提交一体化（issue 创建/关联/触发构建）")
    p.add_argument("--owner", default=DEFAULT_OWNER, help=f"仓库属主（默认 {DEFAULT_OWNER}）")
    p.add_argument("--repo", default=DEFAULT_REPO, help=f"仓库名（默认 {DEFAULT_REPO}）")
    sub = p.add_subparsers(dest="cmd", required=True)

    pi = sub.add_parser("issue", help="创建 issue")
    pi.add_argument("--title", required=True)
    pi.add_argument("--body", default=None, help="描述（与 --body-file 二选一）")
    pi.add_argument("--body-file", default=None, help="描述文件（与 --body 二选一）")
    pi.set_defaults(fn=cmd_issue)

    pp = sub.add_parser("pr", help="创建 PR 并自动关联 issue")
    pp.add_argument("--title", required=True)
    pp.add_argument("--head", required=True, help="fork 分支，形如 nicklaus0602:req2-submit-02")
    pp.add_argument("--base", default="master")
    pp.add_argument("--body", default=None)
    pp.add_argument("--body-file", default=None)
    pp.add_argument("--issue", type=int, required=True, help="关联的 Issue 编号")
    pp.set_defaults(fn=cmd_pr)

    pl = sub.add_parser("link", help="已有 PR：PATCH 描述追加 issue 链接并验证")
    pl.add_argument("pr", type=int, help="PR 编号")
    pl.add_argument("--issue", type=int, required=True, help="关联的 Issue 编号")
    pl.set_defaults(fn=cmd_link)

    pb = sub.add_parser("build", help="评论 start build 触发门禁")
    pb.add_argument("pr", type=int, help="PR 编号")
    pb.add_argument("--delay", type=int, default=60, help="触发前等待秒数（默认 60，规范要求）")
    pb.set_defaults(fn=cmd_build)

    pd = sub.add_parser(
        "describe-report",
        help="PATCH PR 描述追加本地 CI 同签验板结果（截图路径）",
    )
    pd.add_argument("pr", type=int, help="PR 编号")
    pd.add_argument("--screenshot", default="", help="summary_top.png 路径")
    pd.add_argument("--report-html", default="", help="summary_report.html 路径")
    pd.add_argument("--summary", default="", help="一行汇总，如 6 modules 289/289")
    pd.add_argument("--section", default=None, help="自定义 Markdown 段")
    pd.add_argument("--section-file", default=None, help="自定义 Markdown 文件")
    pd.set_defaults(fn=cmd_describe_report)

    pa = sub.add_parser("all", help="一键：issue→PR→（可选）触发构建")
    pa.add_argument("--issue-title", default=None, help="自动创建 issue 时必填")
    pa.add_argument("--issue-body", default=None)
    pa.add_argument("--issue-body-file", default=None)
    pa.add_argument("--issue", type=int, default=None, help="复用已有 issue 编号")
    pa.add_argument("--pr-title", required=True)
    pa.add_argument("--head", required=True)
    pa.add_argument("--base", default="master")
    pa.add_argument("--pr-body", default=None)
    pa.add_argument("--pr-body-file", default=None)
    pa.add_argument("--build", action="store_true", help="创建后自动触发 start build")
    pa.add_argument("--delay", type=int, default=60)
    pa.set_defaults(fn=cmd_all)

    args = p.parse_args()
    return args.fn(args)


if __name__ == "__main__":
    sys.exit(main())
