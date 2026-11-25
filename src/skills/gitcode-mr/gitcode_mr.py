#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
GitCode opened merge requests stats for OpenHarmony repos.

Workflow (see SKILL.md):
  1. List opened MRs via issuepr isource/merge_requests API
  2. Parse iid from web_url (e.g. .../merge_requests/42950 -> 42950)
  3. Fetch MR commits; match employer by commit author/committer email domain
  4. Sum added_lines / removed_lines for matched MRs (pending merge code volume)
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
from dataclasses import dataclass, field
from datetime import datetime, timedelta, timezone
from typing import Iterable

try:
    import requests
except ImportError:
    print("❌ 需要 requests: pip install requests", file=sys.stderr)
    sys.exit(1)

DEFAULT_PROJECT = "openharmony/xts_acts"
DEFAULT_EMPLOYER = "开鸿智谷"
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
    "Referer": "https://gitcode.com/openharmony/xts_acts/merge_requests",
    "Origin": "https://gitcode.com",
}


@dataclass
class MrSummary:
    iid: int
    title: str
    web_url: str
    added_lines: int
    removed_lines: int
    emails: list[str] = field(default_factory=list)
    merged_at: str = ""
    # Co-Authored-By: Agent 统计（针对该 MR 的全部 commit）
    agent_matched: int = 0
    commit_total: int = 0

    @property
    def agent_any(self) -> bool:
        """任一 commit 含 `Co-Authored-By: Agent`。"""
        return self.agent_matched > 0

    @property
    def agent_all(self) -> bool:
        """全部 commit 都含 `Co-Authored-By: Agent`。"""
        return self.commit_total > 0 and self.agent_matched == self.commit_total


def parse_iso_dt(value: str) -> datetime | None:
    if not value:
        return None
    s = value.strip().replace("Z", "+00:00")
    try:
        return datetime.fromisoformat(s)
    except ValueError:
        return None


def parse_date_arg(value: str, *, end_of_day: bool = False) -> datetime:
    """Parse YYYYMMDD or ISO datetime; naive dates use UTC+8."""
    tz = timezone(timedelta(hours=8))
    raw = value.strip()
    if re.fullmatch(r"\d{8}", raw):
        dt = datetime.strptime(raw, "%Y%m%d").replace(tzinfo=tz)
        if end_of_day:
            dt = dt.replace(hour=23, minute=59, second=59)
        return dt
    dt = parse_iso_dt(raw)
    if dt is None:
        raise SystemExit(f"❌ 无效日期: {value}")
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=tz)
    return dt


def last_calendar_week_range() -> tuple[datetime, datetime]:
    """Previous Mon 00:00:00 .. Sun 23:59:59 in UTC+8."""
    tz = timezone(timedelta(hours=8))
    today = datetime.now(tz).date()
    this_monday = today - timedelta(days=today.weekday())
    last_monday = this_monday - timedelta(days=7)
    last_sunday = last_monday + timedelta(days=6)
    start = datetime.combine(last_monday, datetime.min.time(), tzinfo=tz)
    end = datetime.combine(last_sunday, datetime.max.time().replace(microsecond=0), tzinfo=tz)
    return start, end


def encode_project(project: str) -> str:
    return project.replace("/", "%2F")


def parse_iid_from_web_url(web_url: str) -> int | None:
    m = re.search(r"/merge_requests/(\d+)(?:$|[/?#])", web_url or "")
    return int(m.group(1)) if m else None


def email_host(email: str) -> str:
    if not email or "@" not in email:
        return ""
    return email.rsplit("@", 1)[1].lower()


def email_matches_domains(email: str, domains: Iterable[str]) -> bool:
    """Match email host exactly or as subdomain (e.g. @kaihong.com), not substring."""
    host = email_host(email)
    if not host:
        return False
    for d in domains:
        domain = d.lower().lstrip("@")
        if host == domain or host.endswith("." + domain):
            return True
    return False


def _iter_commit_emails(commits: list[dict]) -> Iterable[str]:
    for commit in commits:
        for key in ("author_email", "committer_email"):
            value = commit.get(key)
            if value:
                yield value.lower()


def mr_has_employer_commits(commits: list[dict], domains: Iterable[str]) -> tuple[bool, list[str]]:
    emails = set(_iter_commit_emails(commits))
    matched_emails = {email for email in emails if email_matches_domains(email, domains)}
    return bool(matched_emails), sorted(matched_emails or emails)


# 匹配 git trailer `Co-Authored-By: <value>`（不区分大小写，容忍 CRLF 与前后空白）
CO_AUTHORED_BY_RE = re.compile(r"^[ \t]*co-authored-by[ \t]*:[ \t]*(.+)$", re.I | re.M)


def commit_has_agent_coauthor(commit: dict) -> bool:
    """判断单个 commit 是否带有 `Co-Authored-By: ...Agent...` trailer。

    规则（与用户约定一致）：
      - trailer 名 `Co-Authored-By` 不区分大小写；
      - 值里只要包含 `agent` 即命中（如 `Co-Authored-By: Agent`、
        `Co-Authored-By: Agent <noreply@example.com>`）；
      - 先看 commit `message`，再兜底看接口的 `co_authors` 字段（当前接口恒为空）。
    """
    message = commit.get("message") or ""
    for m in CO_AUTHORED_BY_RE.finditer(message):
        if "agent" in m.group(1).strip().lower():
            return True

    co_authors = commit.get("co_authors")
    candidates: list[str] = []
    if isinstance(co_authors, str):
        candidates = [co_authors]
    elif isinstance(co_authors, dict):
        candidates = [str(v) for v in co_authors.values()]
    elif isinstance(co_authors, list):
        for item in co_authors:
            if isinstance(item, dict):
                candidates.extend(str(v) for v in item.values())
            else:
                candidates.append(str(item))
    return any("agent" in s.strip().lower() for s in candidates)


@dataclass
class AgentCoauthorInfo:
    """一个 MR 的 `Co-Authored-By: Agent` 命中情况。"""

    matched: int = 0
    total: int = 0

    @property
    def any(self) -> bool:
        return self.matched > 0

    @property
    def all(self) -> bool:
        return self.total > 0 and self.matched == self.total


def scan_agent_coauthor(commits: list[dict]) -> AgentCoauthorInfo:
    """统计 commits 中带 `Co-Authored-By: Agent` 的数量与总数。"""
    matched = sum(1 for c in commits if commit_has_agent_coauthor(c))
    return AgentCoauthorInfo(matched=matched, total=len(commits))


def agent_flag_cell(matched: int, total: int) -> str:
    """`任一` 单元格：命中显示 `是 n/m`，否则 `否 0/m`。"""
    return f"{'是' if matched > 0 else '否'} {matched}/{total}"


def agent_all_cell(matched: int, total: int) -> str:
    """`全部` 单元格：全部命中显示 `是 m/m`，否则 `否 n/m`。"""
    if total > 0 and matched == total:
        return f"是 {matched}/{total}"
    return f"否 {matched}/{total}"


def _mr_iid(mr: dict) -> int | None:
    iid = mr.get("iid") or parse_iid_from_web_url(mr.get("web_url", ""))
    return int(iid) if iid else None


def _mr_summary(
    client: "GitCodeMrClient",
    mr: dict,
    domains: Iterable[str],
    date_key: str = "",
    include_emails: bool = True,
) -> MrSummary | None:
    iid = _mr_iid(mr)
    if iid is None:
        return None
    commits = client.fetch_mr_commits(iid)
    ok, emails = mr_has_employer_commits(commits, domains)
    if not ok:
        return None
    agent = scan_agent_coauthor(commits)
    return MrSummary(
        iid=iid,
        title=(mr.get("title") or "")[:120],
        web_url=mr.get("web_url") or "",
        added_lines=int(mr.get("added_lines") or 0),
        removed_lines=int(mr.get("removed_lines") or 0),
        emails=emails if include_emails else [],
        merged_at=(mr.get(date_key) or "")[:10] if date_key else "",
        agent_matched=agent.matched,
        commit_total=agent.total,
    )


def _mr_totals(matched: list[MrSummary]) -> dict:
    added = sum(m.added_lines for m in matched)
    removed = sum(m.removed_lines for m in matched)
    return {
        "added": added,
        "removed": removed,
        "change": added + removed,
        "agent_any": sum(1 for m in matched if m.agent_any),
        "agent_all": sum(1 for m in matched if m.agent_all),
    }


def _mr_payload(m: MrSummary, date_key: str = "", include_emails: bool = True) -> dict:
    data = {
        "iid": m.iid,
        "web_url": m.web_url,
        "title": m.title,
        "added_lines": m.added_lines,
        "removed_lines": m.removed_lines,
        "agent_coauthor_any": m.agent_any,
        "agent_coauthor_all": m.agent_all,
        "agent_coauthor_matched": m.agent_matched,
        "commit_total": m.commit_total,
    }
    if date_key:
        data[date_key] = m.merged_at
    if include_emails:
        data["emails"] = m.emails
    return data


class GitCodeMrClient:
    def __init__(self, project: str, repo_id: str | None = None, delay_sec: float = 0.05):
        self.project = project
        self.project_enc = encode_project(project)
        self.repo_id = repo_id or self.project_enc
        self.base = f"https://web-api.gitcode.com/issuepr/api/v1/projects/{self.project_enc}"
        self.delay_sec = delay_sec
        self.session = requests.Session()
        self.session.headers.update(BROWSER_HEADERS)

    def list_opened_mrs(self, per_page: int = 50) -> list[dict]:
        items: list[dict] = []
        page = 1
        while True:
            data = self._get(
                "isource/merge_requests",
                {
                    "sort": "desc",
                    "order_by": "created_at",
                    "scope": "all",
                    "state": "opened",
                    "page": page,
                    "repoId": self.repo_id,
                    "per_page": per_page,
                    "view": "basic",
                },
            )
            batch = data.get("content") or []
            items.extend(batch)
            page_count = int(data.get("page_count") or 1)
            if page >= page_count:
                break
            page += 1
        return items

    def list_merged_mrs(
        self,
        per_page: int = 50,
        merged_after: datetime | None = None,
    ) -> list[dict]:
        """List merged MRs newest first; stop when merged_at < merged_after."""
        items: list[dict] = []
        page = 1
        while True:
            data = self._get(
                "isource/merge_requests",
                {
                    "sort": "desc",
                    "order_by": "merged_at",
                    "scope": "all",
                    "state": "merged",
                    "page": page,
                    "repoId": self.repo_id,
                    "per_page": per_page,
                    "view": "basic",
                },
            )
            batch = data.get("content") or []
            if not batch:
                break
            stop = False
            for mr in batch:
                merged_at = parse_iso_dt(mr.get("merged_at") or "")
                if merged_after and merged_at and merged_at < merged_after:
                    stop = True
                    break
                items.append(mr)
            if stop:
                break
            page_count = int(data.get("page_count") or 1)
            if page >= page_count:
                break
            page += 1
        return items

    def list_mrs_by_created(
        self,
        state: str = "all",
        per_page: int = 50,
        created_after: datetime | None = None,
    ) -> list[dict]:
        """List MRs by created_at desc; stop when created_at < created_after."""
        items: list[dict] = []
        page = 1
        while True:
            data = self._get(
                "isource/merge_requests",
                {
                    "sort": "desc",
                    "order_by": "created_at",
                    "scope": "all",
                    "state": state,
                    "page": page,
                    "repoId": self.repo_id,
                    "per_page": per_page,
                    "view": "basic",
                },
            )
            batch = data.get("content") or []
            if not batch:
                break
            stop = False
            for mr in batch:
                created_at = parse_iso_dt(mr.get("created_at") or "")
                if created_after and created_at and created_at < created_after:
                    stop = True
                    break
                items.append(mr)
            if stop:
                break
            page_count = int(data.get("page_count") or 1)
            if page >= page_count:
                break
            page += 1
        return items

    def fetch_mr_commits(self, iid: int, per_page: int = 50) -> list[dict]:
        commits: list[dict] = []
        page = 1
        while True:
            data = self._get(
                f"merge_requests/{iid}/commits",
                {"repoId": self.repo_id, "iid": iid, "page": page, "per_page": per_page},
            )
            batch = data.get("content") or []
            commits.extend(batch)
            page_count = int(data.get("page_count") or 1)
            if page >= page_count:
                break
            page += 1
        return commits

    def fetch_mr_changes_trees(self, iid: int) -> list[dict]:
        data = self._get(
            f"merge_requests/{iid}/changes_trees",
            {
                "repoId": self.repo_id,
                "iid": iid,
                "view": "simple",
                "ignore_whitespace_change": "false",
            },
        )
        return data.get("tree") or []

    def _get(self, path: str, params: dict) -> dict:
        url = f"{self.base}/{path.lstrip('/')}"
        r = self.session.get(url, params=params, timeout=30)
        r.raise_for_status()
        if self.delay_sec:
            time.sleep(self.delay_sec)
        return r.json()


def collect_paths_from_tree(nodes: list[dict], depth: int = 2) -> set[str]:
    """Collect path prefixes up to ``depth`` segments from changes_trees."""
    paths: set[str] = set()

    def walk(node: dict) -> None:
        fp = (node.get("file_path") or "").replace("\\", "/").strip("/")
        if fp:
            parts = fp.split("/")
            for n in range(1, min(depth, len(parts)) + 1):
                paths.add("/".join(parts[:n]))
        for child in node.get("items") or []:
            walk(child)

    for node in nodes:
        walk(node)
    return paths


def resolve_domains(employer: str, extra_domains: list[str] | None) -> tuple[str, tuple[str, ...]]:
    key = employer.strip()
    domains = list(DEFAULT_DOMAINS.get(key, ()))
    if extra_domains:
        domains.extend(extra_domains)
    if not domains:
        raise SystemExit(f"❌ 未知雇主 '{employer}'，请用 --domain 指定邮箱后缀")
    return key, tuple(dict.fromkeys(domains))


def _collect_open_mrs(
    client: GitCodeMrClient,
    all_mrs: list[dict],
    domains: tuple[str, ...],
    limit: int | None,
    json_out: bool,
) -> list[MrSummary]:
    matched: list[MrSummary] = []
    for idx, mr in enumerate(all_mrs, 1):
        if limit is not None and len(matched) >= limit:
            break
        summary = _mr_summary(client, mr, domains)
        if summary is None:
            continue
        matched.append(summary)
        if not json_out and idx % 25 == 0:
            print(f"  …已扫描 {idx}/{len(all_mrs)} 个 opened MR，命中 {len(matched)}", flush=True)
    return matched


def _open_result(
    project: str,
    employer_name: str,
    domains: tuple[str, ...],
    all_mrs: list[dict],
    matched: list[MrSummary],
) -> dict:
    totals = _mr_totals(matched)
    return {
        "project": project,
        "employer": employer_name,
        "email_domains": list(domains),
        "state": "opened",
        "open_mr_total": len(all_mrs),
        "employer_open_mr_count": len(matched),
        "mr_with_agent_any": totals["agent_any"],
        "mr_with_agent_all": totals["agent_all"],
        "added_lines": totals["added"],
        "removed_lines": totals["removed"],
        "change_lines": totals["change"],
        "merge_requests": [_mr_payload(m) for m in matched],
    }


def _print_open_report(result: dict, matched: list[MrSummary]) -> None:
    print()
    print(f"仓库: {result.get('project')}")
    print(f"雇主: {result.get('employer')}（邮箱域: {', '.join(result.get('email_domains') or [])}）")
    print(f"GitCode opened MR 总数: {result.get('open_mr_total', 0)}")
    print(f"{result.get('employer')} 待合入 MR 数: {len(matched)}")
    print(
        f"待合入代码量: +{result.get('added_lines', 0):,} / "
        f"-{result.get('removed_lines', 0):,}（变更 {result.get('change_lines', 0):,} 行）"
    )
    print(
        f"含 Co-Authored-By: Agent: 任一 {result.get('mr_with_agent_any', 0)} 个 / "
        f"全部 {result.get('mr_with_agent_all', 0)} 个"
    )
    print()
    print(f"{'IID':<8} {'+行':<10} {'-行':<10} {'Agent任一':<10} {'Agent全部':<10} 标题")
    print("-" * 110)
    for m in sorted(matched, key=lambda x: x.iid, reverse=True)[:30]:
        print(
            f"{m.iid:<8} {m.added_lines:<10,} {m.removed_lines:<10,} "
            f"{agent_flag_cell(m.agent_matched, m.commit_total):<10} "
            f"{agent_all_cell(m.agent_matched, m.commit_total):<10} "
            f"{m.title[:45]}"
        )
    if len(matched) > 30:
        print(f"... 另有 {len(matched) - 30} 个 MR，完整列表请 --json")


def scan_open_mrs(
    project: str,
    employer: str,
    extra_domains: list[str] | None = None,
    limit: int | None = None,
    json_out: bool = False,
) -> int:
    employer_name, domains = resolve_domains(employer, extra_domains)
    client = GitCodeMrClient(project)
    all_mrs = client.list_opened_mrs()
    matched = _collect_open_mrs(client, all_mrs, domains, limit, json_out)
    result = _open_result(project, employer_name, domains, all_mrs, matched)
    if json_out:
        print(json.dumps(result, ensure_ascii=False, indent=2))
    else:
        _print_open_report(result, matched)
    return 0


def _count_paths(
    client: GitCodeMrClient, iid: int, path_mr_count: dict[str, int], path_depth: int
) -> None:
    try:
        tree = client.fetch_mr_changes_trees(iid)
    except Exception as exc:
        print(f"  warn MR {iid} changes_trees: {exc}", file=sys.stderr)
        return
    for path in collect_paths_from_tree(tree, depth=path_depth):
        path_mr_count[path] = path_mr_count.get(path, 0) + 1


def _scan_employer_dirs(
    client: GitCodeMrClient,
    all_mrs: list[dict],
    employer: str,
    extra: list[str] | None,
    path_depth: int,
) -> tuple[tuple[str, ...], list[MrSummary], dict[str, int]]:
    _, domains = resolve_domains(employer, extra)
    matched: list[MrSummary] = []
    path_mr_count: dict[str, int] = {}
    for mr in all_mrs:
        summary = _mr_summary(client, mr, domains)
        if summary is None:
            continue
        matched.append(summary)
        _count_paths(client, summary.iid, path_mr_count, path_depth)
    return domains, matched, path_mr_count


def _dir_block(
    label: str,
    domains: tuple[str, ...],
    matched: list[MrSummary],
    path_mr_count: dict[str, int],
) -> tuple[dict, list[tuple[str, int]]]:
    totals = _mr_totals(matched)
    top_paths = sorted(path_mr_count.items(), key=lambda x: (-x[1], x[0]))[:15]
    block = {
        "employer": label,
        "email_domains": list(domains),
        "mr_count": len(matched),
        "mr_with_agent_any": totals["agent_any"],
        "mr_with_agent_all": totals["agent_all"],
        "added_lines": totals["added"],
        "removed_lines": totals["removed"],
        "change_lines": totals["change"],
        "top_paths": [{"path": p, "mr_count": c} for p, c in top_paths],
    }
    return block, top_paths


def _print_dir_block(
    label: str,
    domains: tuple[str, ...],
    block: dict,
    top_paths: list[tuple[str, int]],
    path_depth: int,
) -> None:
    print(f"\n## {label}（{', '.join(domains)}）", flush=True)
    print(
        f"待合入 MR: {block.get('mr_count', 0)} | "
        f"+{block.get('added_lines', 0):,} / -{block.get('removed_lines', 0):,} | "
        f"变更 {block.get('change_lines', 0):,} 行"
    )
    print(
        f"含 Co-Authored-By: Agent: 任一 {block.get('mr_with_agent_any', 0)} 个 / "
        f"全部 {block.get('mr_with_agent_all', 0)} 个"
    )
    print(f"主要目录（按涉及 MR 数，depth={path_depth}):")
    for path, count in top_paths[:10]:
        print(f"  {count:>3} MR  {path}")


def scan_all_employers_dirs(project: str, json_out: bool = False, path_depth: int = 2) -> int:
    employers = [
        ("深开鸿", "深开鸿", None),
        ("开鸿智谷", "开鸿智谷", None),
        ("润开鸿", "润开鸿", None),
        ("软通动力", "软通动力", None),
    ]
    client = GitCodeMrClient(project)
    all_mrs = client.list_opened_mrs()
    results = []
    for label, employer, extra in employers:
        domains, matched, path_mr_count = _scan_employer_dirs(
            client, all_mrs, employer, extra, path_depth
        )
        block, top_paths = _dir_block(label, domains, matched, path_mr_count)
        results.append(block)
        if not json_out:
            _print_dir_block(label, domains, block, top_paths, path_depth)
    if json_out:
        print(json.dumps({"project": project, "employers": results}, ensure_ascii=False, indent=2))
    return 0


def _filter_mrs_by_created_range(
    mrs: list[dict], start: datetime, end: datetime
) -> list[dict]:
    out: list[dict] = []
    for mr in mrs:
        created_at = parse_iso_dt(mr.get("created_at") or "")
        if not created_at:
            continue
        if start <= created_at <= end:
            out.append(mr)
    return out


def _filter_mrs_by_merged_range(
    mrs: list[dict], start: datetime, end: datetime
) -> list[dict]:
    out: list[dict] = []
    for mr in mrs:
        merged_at = parse_iso_dt(mr.get("merged_at") or "")
        if not merged_at:
            continue
        if start <= merged_at <= end:
            out.append(mr)
    return out


def _collect_created_candidates(
    client: GitCodeMrClient,
    candidates: list[dict],
    domains: tuple[str, ...],
    json_out: bool,
) -> tuple[list[MrSummary], dict[str, int]]:
    matched: list[MrSummary] = []
    by_state: dict[str, int] = {}
    for idx, mr in enumerate(candidates, 1):
        summary = _mr_summary(client, mr, domains, date_key="created_at")
        if summary is None:
            continue
        state = (mr.get("state") or "unknown").lower()
        by_state[state] = by_state.get(state, 0) + 1
        matched.append(summary)
        if not json_out and idx % 30 == 0:
            print(f"  …已检查 {idx}/{len(candidates)} 个新建 MR，命中 {len(matched)}", flush=True)
    return matched, by_state


def _created_result(
    project: str,
    employer_name: str,
    domains: tuple[str, ...],
    start: datetime,
    end: datetime,
    candidates: list[dict],
    matched: list[MrSummary],
    by_state: dict[str, int],
) -> dict:
    totals = _mr_totals(matched)
    return {
        "project": project,
        "employer": employer_name,
        "email_domains": list(domains),
        "created_from": start.isoformat(),
        "created_to": end.isoformat(),
        "created_mr_in_range": len(candidates),
        "employer_created_mr_count": len(matched),
        "mr_with_agent_any": totals["agent_any"],
        "mr_with_agent_all": totals["agent_all"],
        "by_state": by_state,
        "added_lines": totals["added"],
        "removed_lines": totals["removed"],
        "change_lines": totals["change"],
        "merge_requests": [_mr_payload(m, date_key="created_at") for m in matched],
    }


def _print_created_report(result: dict, matched: list[MrSummary]) -> None:
    print()
    print(f"仓库: {result.get('project')}")
    print(f"雇主: {result.get('employer')}（邮箱域: {', '.join(result.get('email_domains') or [])}）")
    print(f"提交时间: {result.get('created_from', '')[:10]} ~ {result.get('created_to', '')[:10]}")
    print(f"范围内新建 MR: {result.get('created_mr_in_range', 0)}")
    print(f"{result.get('employer')} 提交 MR 数: {len(matched)}")
    by_state = result.get("by_state") or {}
    if by_state:
        print(f"按状态: {', '.join(f'{k}={v}' for k, v in sorted(by_state.items()))}")
    print(
        f"涉及代码量: +{result.get('added_lines', 0):,} / "
        f"-{result.get('removed_lines', 0):,}（变更 {result.get('change_lines', 0):,} 行）"
    )
    print(
        f"含 Co-Authored-By: Agent: 任一 {result.get('mr_with_agent_any', 0)} 个 / "
        f"全部 {result.get('mr_with_agent_all', 0)} 个"
    )
    print()
    print(f"{'IID':<8} {'创建日':<12} {'+行':<10} {'-行':<10} {'Agent任一':<10} {'Agent全部':<10} 标题")
    print("-" * 120)
    for m in sorted(matched, key=lambda x: x.merged_at, reverse=True):
        print(
            f"{m.iid:<8} {m.merged_at:<12} {m.added_lines:<10,} {m.removed_lines:<10,} "
            f"{agent_flag_cell(m.agent_matched, m.commit_total):<10} "
            f"{agent_all_cell(m.agent_matched, m.commit_total):<10} {m.title[:40]}"
        )


def scan_created_mrs(
    project: str,
    employer: str,
    start: datetime,
    end: datetime,
    extra_domains: list[str] | None = None,
    json_out: bool = False,
) -> int:
    """Count MRs created (submitted) in range with employer commits."""
    employer_name, domains = resolve_domains(employer, extra_domains)
    client = GitCodeMrClient(project)
    if not json_out:
        print(
            f"扫描 {project} 新建 MR（{start.date()} ~ {end.date()}）…",
            flush=True,
        )
    candidates = _filter_mrs_by_created_range(
        client.list_mrs_by_created(state="all", created_after=start), start, end
    )
    matched, by_state = _collect_created_candidates(client, candidates, domains, json_out)
    result = _created_result(
        project, employer_name, domains, start, end, candidates, matched, by_state
    )
    if json_out:
        print(json.dumps(result, ensure_ascii=False, indent=2))
    else:
        _print_created_report(result, matched)
    return 0


def _collect_merged_candidates(
    client: GitCodeMrClient,
    candidates: list[dict],
    domains: tuple[str, ...],
    json_out: bool,
    include_emails: bool = True,
) -> list[MrSummary]:
    matched: list[MrSummary] = []
    for idx, mr in enumerate(candidates, 1):
        summary = _mr_summary(
            client, mr, domains, date_key="merged_at", include_emails=include_emails
        )
        if summary is None:
            continue
        matched.append(summary)
        if not json_out and idx % 20 == 0:
            print(f"  …已检查 {idx}/{len(candidates)} 个 merged MR，命中 {len(matched)}", flush=True)
    return matched


def _merged_result(
    project: str,
    employer_name: str,
    domains: tuple[str, ...],
    start: datetime,
    end: datetime,
    candidates: list[dict],
    matched: list[MrSummary],
    include_emails: bool = True,
) -> dict:
    totals = _mr_totals(matched)
    return {
        "project": project,
        "employer": employer_name,
        "email_domains": list(domains),
        "state": "merged",
        "merged_from": start.isoformat(),
        "merged_to": end.isoformat(),
        "merged_mr_in_range": len(candidates),
        "employer_merged_mr_count": len(matched),
        "mr_with_agent_any": totals["agent_any"],
        "mr_with_agent_all": totals["agent_all"],
        "added_lines": totals["added"],
        "removed_lines": totals["removed"],
        "change_lines": totals["change"],
        "merge_requests": [
            _mr_payload(m, date_key="merged_at", include_emails=include_emails) for m in matched
        ],
    }


def _print_merged_report(result: dict, matched: list[MrSummary]) -> None:
    print()
    print(f"仓库: {result.get('project')}")
    print(f"雇主: {result.get('employer')}（邮箱域: {', '.join(result.get('email_domains') or [])}）")
    print(f"合入时间: {result.get('merged_from', '')[:10]} ~ {result.get('merged_to', '')[:10]}")
    print(f"范围内 merged MR: {result.get('merged_mr_in_range', 0)}")
    print(f"{result.get('employer')} 合入 MR 数: {len(matched)}")
    print(
        f"合入代码量: +{result.get('added_lines', 0):,} / "
        f"-{result.get('removed_lines', 0):,}（变更 {result.get('change_lines', 0):,} 行）"
    )
    print(
        f"含 Co-Authored-By: Agent: 任一 {result.get('mr_with_agent_any', 0)} 个 / "
        f"全部 {result.get('mr_with_agent_all', 0)} 个"
    )
    print()
    print(f"{'IID':<8} {'合入日':<12} {'+行':<10} {'-行':<10} {'Agent任一':<10} {'Agent全部':<10} 标题")
    print("-" * 120)
    for m in sorted(matched, key=lambda x: x.merged_at, reverse=True):
        print(
            f"{m.iid:<8} {m.merged_at:<12} {m.added_lines:<10,} {m.removed_lines:<10,} "
            f"{agent_flag_cell(m.agent_matched, m.commit_total):<10} "
            f"{agent_all_cell(m.agent_matched, m.commit_total):<10} {m.title[:40]}"
        )


def scan_merged_mrs(
    project: str,
    employer: str,
    start: datetime,
    end: datetime,
    extra_domains: list[str] | None = None,
    json_out: bool = False,
) -> int:
    employer_name, domains = resolve_domains(employer, extra_domains)
    client = GitCodeMrClient(project)
    if not json_out:
        print(
            f"扫描 {project} merged MR（{start.date()} ~ {end.date()}）…",
            flush=True,
        )
    candidates = _filter_mrs_by_merged_range(
        client.list_merged_mrs(merged_after=start), start, end
    )
    matched = _collect_merged_candidates(client, candidates, domains, json_out)
    result = _merged_result(project, employer_name, domains, start, end, candidates, matched)
    if json_out:
        print(json.dumps(result, ensure_ascii=False, indent=2))
    else:
        _print_merged_report(result, matched)
    return 0


def _merged_all_block(label: str, domains: tuple[str, ...], matched: list[MrSummary]) -> dict:
    totals = _mr_totals(matched)
    return {
        "employer": label,
        "email_domains": list(domains),
        "mr_count": len(matched),
        "mr_with_agent_any": totals["agent_any"],
        "mr_with_agent_all": totals["agent_all"],
        "added_lines": totals["added"],
        "removed_lines": totals["removed"],
        "change_lines": totals["change"],
    }


def _print_merged_all_block(label: str, block: dict) -> None:
    print(
        f"\n## {label} | 合入 MR {block.get('mr_count', 0)} | "
        f"+{block.get('added_lines', 0):,} / -{block.get('removed_lines', 0):,} | "
        f"变更 {block.get('change_lines', 0):,} 行"
    )
    print(
        f"含 Co-Authored-By: Agent: 任一 {block.get('mr_with_agent_any', 0)} 个 / "
        f"全部 {block.get('mr_with_agent_all', 0)} 个"
    )


def scan_merged_all_employers(
    project: str,
    start: datetime,
    end: datetime,
    json_out: bool = False,
) -> int:
    employers = list(DEFAULT_DOMAINS.keys())
    client = GitCodeMrClient(project)
    if not json_out:
        print(f"扫描 {project} merged MR（{start.date()} ~ {end.date()}）…", flush=True)
    candidates = _filter_mrs_by_merged_range(
        client.list_merged_mrs(merged_after=start), start, end
    )
    results = []
    for label in employers:
        _, domains = resolve_domains(label, None)
        matched = _collect_merged_candidates(
            client, candidates, domains, json_out, include_emails=False
        )
        block = _merged_all_block(label, domains, matched)
        results.append(block)
        if not json_out:
            _print_merged_all_block(label, block)
    if json_out:
        print(
            json.dumps(
                {
                    "project": project,
                    "merged_from": start.isoformat(),
                    "merged_to": end.isoformat(),
                    "employers": results,
                },
                ensure_ascii=False,
                indent=2,
            )
        )
    return 0


def resolve_merged_time_range(
    since: str | None,
    until: str | None,
    last_week: bool,
) -> tuple[datetime, datetime]:
    if last_week:
        return last_calendar_week_range()
    if not since:
        raise SystemExit("❌ 需 --since 或 --last-week（scan-created / scan-merged）")
    start = parse_date_arg(since)
    end = parse_date_arg(until, end_of_day=True) if until else datetime.now(start.tzinfo)
    return start, end


def _build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="GitCode MR 统计：按 commit 邮箱域识别雇主（opened 待合入 / merged 已合入）"
    )
    parser.add_argument(
        "command",
        nargs="?",
        default="scan",
        choices=["scan", "scan-all", "scan-created", "scan-merged", "scan-merged-all", "help"],
        help="scan=opened; scan-created=时间范围内提交; scan-merged=时间范围内合入",
    )
    parser.add_argument(
        "--project",
        default=DEFAULT_PROJECT,
        help=f"GitCode 项目 path_with_namespace（默认 {DEFAULT_PROJECT}）",
    )
    parser.add_argument(
        "--employer",
        default=DEFAULT_EMPLOYER,
        help=f"雇主名（内置域: {', '.join(DEFAULT_DOMAINS.keys())}）",
    )
    parser.add_argument(
        "--domain",
        action="append",
        dest="domains",
        help="额外邮箱域/substring，可重复指定",
    )
    parser.add_argument("--limit", type=int, default=None, help="最多输出命中 MR 数（调试用）")
    parser.add_argument("--json", action="store_true", help="JSON 输出")
    parser.add_argument("--path-depth", type=int, default=2, help="changes_trees 目录聚合深度（默认 2）")
    parser.add_argument("--since", default=None, help="merged 起始 YYYYMMDD 或 ISO（scan-merged*）")
    parser.add_argument("--until", default=None, help="merged 截止 YYYYMMDD 或 ISO（默认可到当前）")
    parser.add_argument(
        "--last-week",
        action="store_true",
        help="merged 统计上一自然周（周一~周日，UTC+8）",
    )
    return parser


def _dispatch_period(args: argparse.Namespace) -> int:
    start, end = resolve_merged_time_range(args.since, args.until, args.last_week)
    if args.command == "scan-created":
        return scan_created_mrs(
            project=args.project,
            employer=args.employer,
            start=start,
            end=end,
            extra_domains=args.domains,
            json_out=args.json,
        )
    if args.command == "scan-merged-all":
        return scan_merged_all_employers(args.project, start, end, json_out=args.json)
    return scan_merged_mrs(
        project=args.project,
        employer=args.employer,
        start=start,
        end=end,
        extra_domains=args.domains,
        json_out=args.json,
    )


def _dispatch(args: argparse.Namespace, parser: argparse.ArgumentParser) -> int:
    if args.command == "help":
        parser.print_help()
        return 0
    if args.command == "scan-all":
        return scan_all_employers_dirs(args.project, json_out=args.json, path_depth=args.path_depth)
    if args.command in ("scan-created", "scan-merged", "scan-merged-all"):
        return _dispatch_period(args)
    return scan_open_mrs(
        project=args.project,
        employer=args.employer,
        extra_domains=args.domains,
        limit=args.limit,
        json_out=args.json,
    )


def main(argv: list[str] | None = None) -> int:
    parser = _build_parser()
    return _dispatch(parser.parse_args(argv), parser)


if __name__ == "__main__":
    sys.exit(main())
