#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
GitCode branch commit stats for OpenHarmony repos (merged code on release branches).

Workflow (see SKILL.md):
  1. List commits on ref_name via web-api repository/commits (since/until)
  2. Attribute employer: direct author/committer email, or MR commits for openharmony_ci merges
  3. Sum +/- lines from repository/commits/{sha} detail ``stats``
     (additions / deletions / total)
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Iterable

try:
    import requests
except ImportError:
    print("❌ 需要 requests: pip install requests", file=sys.stderr)
    sys.exit(1)

DEFAULT_PROJECT = "openharmony/xts_acts"
DEFAULT_REF = "OpenHarmony-7.0-Release"
DEFAULT_SINCE = "20260704"
CI_EMAIL_MARKER = "openharmony_ci"

DEFAULT_DOMAINS = {
    "开鸿智谷": ("talkweb.com.cn",),
    "深开鸿": ("kaihong.com",),
    "润开鸿": ("runkaihong.com.cn",),
    "软通动力": ("isoftstone.com",),
}

BROWSER_HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    ),
    "Accept": "application/json, text/plain, */*",
    "Referer": "https://gitcode.com/openharmony/xts_acts/commits",
    "Origin": "https://gitcode.com",
}

MR_IID_RE = re.compile(r"(?:merge_requests/|![\s]*)(\d+)", re.I)


def email_host(email: str) -> str:
    if not email or "@" not in email:
        return ""
    return email.rsplit("@", 1)[1].lower()


def email_matches_domains(email: str, domains: Iterable[str]) -> bool:
    host = email_host(email)
    if not host:
        return False
    for d in domains:
        domain = d.lower().lstrip("@")
        if host == domain or host.endswith("." + domain):
            return True
    return False


def resolve_domains(employer: str, extra_domains: list[str] | None) -> tuple[str, tuple[str, ...]]:
    key = employer.strip()
    domains = list(DEFAULT_DOMAINS.get(key, ()))
    if extra_domains:
        domains.extend(extra_domains)
    if not domains:
        raise SystemExit(f"❌ 未知雇主 '{employer}'，请用 --domain 指定邮箱后缀")
    return key, tuple(dict.fromkeys(domains))


@dataclass
class CommitStat:
    sha: str
    short_id: str
    title: str
    committed_date: str
    added_lines: int
    removed_lines: int
    employers: list[str] = field(default_factory=list)
    mr_iid: int | None = None


def encode_project(project: str) -> str:
    return project.replace("/", "%2F")


def parse_since(value: str) -> str:
    """Parse YYYYMMDD or ISO date to API since (UTC ISO Z)."""
    raw = value.strip()
    if re.fullmatch(r"\d{8}", raw):
        dt = datetime.strptime(raw, "%Y%m%d").replace(tzinfo=timezone.utc)
        return dt.strftime("%Y-%m-%dT00:00:00Z")
    if "T" in raw:
        return raw if raw.endswith("Z") else raw + "Z"
    return raw + "T00:00:00Z"


def parse_mr_iid(message: str, title: str = "") -> int | None:
    for text in (message or "", title or ""):
        m = MR_IID_RE.search(text)
        if m:
            return int(m.group(1))
    return None


def employers_from_emails(emails: Iterable[str]) -> set[str]:
    matched: set[str] = set()
    for email in emails:
        if not email:
            continue
        lower = email.lower()
        for name, domains in DEFAULT_DOMAINS.items():
            if email_matches_domains(lower, domains):
                matched.add(name)
    return matched


class GitCodeCommitsClient:
    def __init__(self, project: str, repo_id: str | None = None, delay_sec: float = 0.08):
        self.project = project
        self.project_enc = encode_project(project)
        # requests 会对 query 再 encode 一次：传 openharmony%2Fxts_acts → URL 中为 %252F
        self.repo_id = repo_id or self.project_enc
        self.delay_sec = delay_sec
        self.session = requests.Session()
        self.session.headers.update(BROWSER_HEADERS)
        self._mr_cache: dict[int, list[dict]] = {}

    def list_commits(
        self,
        ref_name: str,
        since: str | None = None,
        until: str | None = None,
        per_page: int = 100,
        limit: int | None = None,
    ) -> list[dict]:
        url = f"https://web-api.gitcode.com/api/v2/projects/{self.project_enc}/repository/commits"
        items: list[dict] = []
        page = 1
        while True:
            params: dict = {
                "repoId": self.repo_id,
                "ref_name": ref_name,
                "page": page,
                "per_page": per_page,
            }
            if since:
                params["since"] = since
            if until:
                params["until"] = until
            data = self._get(url, params)
            batch = data.get("content") or []
            if not batch:
                break
            items.extend(batch)
            if limit is not None and len(items) >= limit:
                return items[:limit]
            if len(batch) < per_page:
                break
            page += 1
        return items

    def fetch_commit_stats(self, sha: str) -> tuple[int, int, int]:
        """Return (additions, deletions, total) from commit detail ``stats``."""
        url = (
            f"https://web-api.gitcode.com/api/v2/projects/{self.project_enc}"
            f"/repository/commits/{sha}"
        )
        data = self._get(
            url,
            {"repoId": self.repo_id, "auth_current_project": "true"},
            timeout=60,
        )
        st = data.get("stats") or {}
        added = int(st.get("additions") or 0)
        removed = int(st.get("deletions") or 0)
        total = int(st.get("total") or (added + removed))
        return added, removed, total

    def fetch_mr_commits(self, iid: int, per_page: int = 50) -> list[dict]:
        if iid in self._mr_cache:
            return self._mr_cache[iid]
        base = f"https://web-api.gitcode.com/issuepr/api/v1/projects/{self.project_enc}"
        commits: list[dict] = []
        page = 1
        while True:
            data = self._get(
                f"{base}/merge_requests/{iid}/commits",
                {"repoId": self.repo_id, "iid": iid, "page": page, "per_page": per_page},
            )
            batch = data.get("content") or []
            commits.extend(batch)
            page_count = int(data.get("page_count") or 1)
            if page >= page_count or not batch:
                break
            page += 1
        self._mr_cache[iid] = commits
        return commits

    def _pause(self) -> None:
        if self.delay_sec:
            time.sleep(self.delay_sec)

    def _get(self, url: str, params: dict, timeout: int = 60) -> dict:
        last_err: Exception | None = None
        for attempt in range(5):
            try:
                r = self.session.get(url, params=params, timeout=timeout)
                if r.status_code == 429:
                    wait = 2 ** attempt
                    time.sleep(wait)
                    continue
                r.raise_for_status()
                self._pause()
                return r.json()
            except requests.RequestException as exc:
                last_err = exc
                time.sleep(2 ** attempt)
        raise RuntimeError(f"请求失败: {url}") from last_err


def _commit_emails(commits: list[dict]) -> list[str]:
    emails: list[str] = []
    for commit in commits:
        for key in ("author_email", "committer_email"):
            value = commit.get(key)
            if value:
                emails.append(value)
    return emails


def resolve_commit_employers(commit: dict, client: GitCodeCommitsClient) -> tuple[set[str], int | None]:
    author_email = (commit.get("author_email") or "").lower()
    committer_email = (commit.get("committer_email") or "").lower()
    message = commit.get("message") or ""
    title = commit.get("title") or ""

    direct = employers_from_emails([author_email, committer_email])
    mr_iid = parse_mr_iid(message, title)
    if direct and CI_EMAIL_MARKER not in author_email:
        return direct, mr_iid
    if mr_iid is not None:
        mr_employers = employers_from_emails(
            _commit_emails(client.fetch_mr_commits(mr_iid))
        )
        if mr_employers:
            return mr_employers, mr_iid
    return direct, mr_iid


def build_commit_stats(
    client: GitCodeCommitsClient,
    commits: list[dict],
    employer_filter: str | None,
    count_lines: bool,
    json_out: bool,
) -> list[CommitStat]:
    stats: list[CommitStat] = []
    total = len(commits)

    for idx, commit in enumerate(commits, 1):
        employers, mr_iid = resolve_commit_employers(commit, client)
        if employer_filter and employer_filter not in employers:
            continue
        # scan-all：无雇主命中则跳过（不拉 stats）
        if employer_filter is None and not employers:
            if not json_out and idx % 50 == 0:
                print(f"  …已扫描 {idx}/{total} 条 commit", flush=True)
            continue

        added = removed = 0
        if count_lines:
            try:
                added, removed, _ = client.fetch_commit_stats(commit["id"])
            except Exception as exc:
                print(f"  warn stats {commit.get('short_id')}: {exc}", file=sys.stderr)

        stat = CommitStat(
            sha=commit["id"],
            short_id=commit.get("short_id") or commit["id"][:8],
            title=(commit.get("title") or "")[:100],
            committed_date=(commit.get("committed_date") or "")[:10],
            added_lines=added,
            removed_lines=removed,
            employers=sorted(employers),
            mr_iid=mr_iid,
        )
        stats.append(stat)

        if not json_out and idx % 25 == 0:
            print(f"  …已处理 {idx}/{total} 条 commit", flush=True)

    return stats


def aggregate_by_employer(stats: list[CommitStat]) -> dict[str, dict]:
    agg: dict[str, dict] = {}
    for s in stats:
        for emp in s.employers:
            block = agg.setdefault(
                emp,
                {"commit_count": 0, "added_lines": 0, "removed_lines": 0, "change_lines": 0},
            )
            block["commit_count"] += 1
            block["added_lines"] += s.added_lines
            block["removed_lines"] += s.removed_lines
            block["change_lines"] += s.added_lines + s.removed_lines
    return agg


def _branch_result(
    project: str,
    ref_name: str,
    since_iso: str,
    until_iso: str | None,
    employer_name: str,
    domains: tuple[str, ...],
    commits: list[dict],
    stats: list[CommitStat],
) -> dict:
    total_add = sum(s.added_lines for s in stats)
    total_del = sum(s.removed_lines for s in stats)
    return {
        "project": project,
        "ref_name": ref_name,
        "since": since_iso,
        "until": until_iso,
        "employer": employer_name,
        "email_domains": list(domains),
        "commit_total_on_branch": len(commits),
        "employer_commit_count": len(stats),
        "added_lines": total_add,
        "removed_lines": total_del,
        "change_lines": total_add + total_del,
        "commits": [
            {
                "short_id": s.short_id,
                "date": s.committed_date,
                "mr_iid": s.mr_iid,
                "added_lines": s.added_lines,
                "removed_lines": s.removed_lines,
                "title": s.title,
            }
            for s in stats
        ],
    }


def _print_branch_report(result: dict, stats: list[CommitStat], count_lines: bool) -> None:
    project = result.get("project", "")
    ref_name = result.get("ref_name", "")
    since_iso = result.get("since", "")
    until_iso = result.get("until")
    employer_name = result.get("employer", "")
    domains = result.get("email_domains") or []
    total_add = result.get("added_lines", 0)
    total_del = result.get("removed_lines", 0)
    print()
    print(f"仓库: {project}")
    print(f"分支: {ref_name}")
    print(f"起始: {since_iso}" + (f"  截止: {until_iso}" if until_iso else ""))
    print(f"分支 commit 数（API 过滤后）: {result.get('commit_total_on_branch', 0)}")
    print(f"雇主: {employer_name}（邮箱域: {', '.join(domains)}）")
    print(f"{employer_name} 命中 commit 数: {len(stats)}")
    if count_lines:
        print(f"已合入代码量: +{total_add:,} / -{total_del:,}（变更 {total_add + total_del:,} 行）")
    else:
        print("（未拉取 stats，仅统计 commit 数；去掉 --commits-only 可统计行数）")
    print()
    print(f"{'日期':<12} {'+行':<10} {'-行':<10} {'MR':<8} 标题")
    print("-" * 90)
    for s in sorted(stats, key=lambda x: x.committed_date, reverse=True)[:30]:
        mr = str(s.mr_iid) if s.mr_iid else "-"
        print(
            f"{s.committed_date:<12} {s.added_lines:<10,} {s.removed_lines:<10,} {mr:<8} {s.title[:45]}"
        )
    if len(stats) > 30:
        print(f"... 另有 {len(stats) - 30} 条 commit，完整列表请 --json")


def scan_branch(
    project: str,
    ref_name: str,
    since: str,
    employer: str,
    extra_domains: list[str] | None = None,
    until: str | None = None,
    limit: int | None = None,
    count_lines: bool = True,
    json_out: bool = False,
) -> int:
    employer_name, domains = resolve_domains(employer, extra_domains)
    since_iso = parse_since(since)
    until_iso = parse_since(until) if until else None

    client = GitCodeCommitsClient(project)
    if not json_out:
        print(f"拉取 {project} @ {ref_name} since {since_iso} …", flush=True)
    commits = client.list_commits(ref_name, since=since_iso, until=until_iso, limit=limit)
    if not json_out:
        print(f"共 {len(commits)} 条 commit，开始归因与行数统计…", flush=True)

    stats = build_commit_stats(
        client, commits, employer_name, count_lines=count_lines, json_out=json_out
    )
    result = _branch_result(
        project, ref_name, since_iso, until_iso, employer_name, domains, commits, stats
    )
    if json_out:
        print(json.dumps(result, ensure_ascii=False, indent=2))
    else:
        _print_branch_report(result, stats, count_lines)
    return 0


def _employer_blocks(stats: list[CommitStat]) -> list[dict]:
    agg = aggregate_by_employer(stats)
    blocks = []
    for name in DEFAULT_DOMAINS:
        block = dict(agg.get(name) or {
            "commit_count": 0, "added_lines": 0, "removed_lines": 0, "change_lines": 0
        })
        block["employer"] = name
        block["email_domains"] = list(DEFAULT_DOMAINS.get(name, ()))
        blocks.append(block)
    return blocks


def _scan_all_result(
    project: str,
    ref_name: str,
    since_iso: str,
    until_iso: str | None,
    commits: list[dict],
    stats: list[CommitStat],
    blocks: list[dict],
) -> dict:
    return {
        "project": project,
        "ref_name": ref_name,
        "since": since_iso,
        "until": until_iso,
        "commit_total_on_branch": len(commits),
        "employer_attributed_commits": sum(1 for s in stats if s.employers),
        "employers": blocks,
        "totals": {
            "added_lines": sum(b.get("added_lines", 0) for b in blocks),
            "removed_lines": sum(b.get("removed_lines", 0) for b in blocks),
            "change_lines": sum(b.get("change_lines", 0) for b in blocks),
        },
    }


def _print_scan_all_report(
    result: dict, blocks: list[dict], commits: list[dict], count_lines: bool
) -> None:
    print()
    print(
        f"仓库: {result.get('project')}  分支: {result.get('ref_name')}  "
        f"起始: {result.get('since')}"
    )
    print(
        f"分支 commit 数: {len(commits)}  "
        f"四家雇主命中 commit: {result.get('employer_attributed_commits', 0)}"
    )
    print()
    print(f"{'雇主':<10} {'commit':<8} {'+行':<12} {'-行':<12} {'变更行':<12}")
    print("-" * 58)
    for block in blocks:
        print(
            f"{block.get('employer', ''):<10} {block.get('commit_count', 0):<8} "
            f"{block.get('added_lines', 0):<12,} {block.get('removed_lines', 0):<12,} "
            f"{block.get('change_lines', 0):<12,}"
        )
    totals = result.get("totals") or {}
    print("-" * 58)
    print(
        f"{'合计':<10} {'':8} {totals.get('added_lines', 0):<12,} "
        f"{totals.get('removed_lines', 0):<12,} {totals.get('change_lines', 0):<12,}"
    )
    if not count_lines:
        print("\n（--commits-only：未统计行数）")


def scan_all_employers(
    project: str,
    ref_name: str,
    since: str,
    until: str | None = None,
    limit: int | None = None,
    count_lines: bool = True,
    json_out: bool = False,
) -> int:
    since_iso = parse_since(since)
    until_iso = parse_since(until) if until else None
    client = GitCodeCommitsClient(project)

    if not json_out:
        print(f"拉取 {project} @ {ref_name} since {since_iso} …", flush=True)
    commits = client.list_commits(ref_name, since=since_iso, until=until_iso, limit=limit)
    if not json_out:
        print(f"共 {len(commits)} 条 commit，开始归因…", flush=True)
    stats = build_commit_stats(
        client, commits, employer_filter=None, count_lines=count_lines, json_out=json_out
    )
    blocks = _employer_blocks(stats)
    result = _scan_all_result(project, ref_name, since_iso, until_iso, commits, stats, blocks)
    if json_out:
        print(json.dumps(result, ensure_ascii=False, indent=2))
    else:
        _print_scan_all_report(result, blocks, commits, count_lines)
    return 0


def _build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="GitCode 分支 commit 统计：按邮箱域识别雇主，汇总已合入代码行数"
    )
    parser.add_argument(
        "command",
        nargs="?",
        default="scan-all",
        choices=["scan", "scan-all", "help"],
        help="scan=单雇主; scan-all=四家雇主汇总",
    )
    parser.add_argument("--project", default=DEFAULT_PROJECT)
    parser.add_argument("--ref", default=DEFAULT_REF, help="分支名（默认 OpenHarmony-7.0-Release）")
    parser.add_argument(
        "--since",
        default=DEFAULT_SINCE,
        help="起始日期 YYYYMMDD 或 ISO（默认 20260704，即 2026-07-04）",
    )
    parser.add_argument("--until", default=None, help="截止日期 YYYYMMDD 或 ISO")
    parser.add_argument("--employer", default="开鸿智谷")
    parser.add_argument("--domain", action="append", dest="domains")
    parser.add_argument("--limit", type=int, default=None, help="最多处理 commit 条数（调试）")
    parser.add_argument(
        "--commits-only",
        action="store_true",
        help="仅统计 commit 数，不拉 commit stats（更快）",
    )
    parser.add_argument("--json", action="store_true")
    return parser


def _dispatch(args: argparse.Namespace, parser: argparse.ArgumentParser) -> int:
    if args.command == "help":
        parser.print_help()
        return 0
    count_lines = not args.commits_only
    if args.command == "scan-all":
        return scan_all_employers(
            project=args.project,
            ref_name=args.ref,
            since=args.since,
            until=args.until,
            limit=args.limit,
            count_lines=count_lines,
            json_out=args.json,
        )
    return scan_branch(
        project=args.project,
        ref_name=args.ref,
        since=args.since,
        employer=args.employer,
        extra_domains=args.domains,
        until=args.until,
        limit=args.limit,
        count_lines=count_lines,
        json_out=args.json,
    )


def main(argv: list[str] | None = None) -> int:
    parser = _build_parser()
    return _dispatch(parser.parse_args(argv), parser)


if __name__ == "__main__":
    sys.exit(main())
