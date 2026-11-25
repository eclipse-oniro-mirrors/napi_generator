#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Generate Markdown PR report: titles, links, +/- lines, new test cases/files.

Usage (from napi_generator repo root):
  python src/skills/gitcode-mr/gitcode_mr_report.py \\
    --employer 深开鸿 --since 20260825 --until 20260831 \\
    --out src/skills/gitcode-mr/reports/skh_xts_acts_20260825-20260831.md

  python src/skills/gitcode-mr/gitcode_mr_report.py --employer 深开鸿 --last-week --out report.md
"""
from __future__ import annotations

import argparse
import re
import sys
import time
from datetime import datetime, timedelta, timezone
from pathlib import Path

try:
    import requests
except ImportError:
    print("❌ 需要 requests: pip install requests", file=sys.stderr)
    sys.exit(1)

DEFAULT_PROJECT = "openharmony/xts_acts"
DEFAULT_EMPLOYER = "深开鸿"
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
TEST_FILE_RE = re.compile(
    r"(\.test\.(ets|js|ts|cpp|c|py)|Test\.ets|/test/|/acts/|_test\.|/Acts)",
    re.I,
)
CASE_ADD_RE = re.compile(r"^\+\s*(it\s*\(|test\s*\(|@tc\b|OHOS_TEST\s*\(|describe\s*\()")


def parse_iso_dt(value: str) -> datetime | None:
    if not value:
        return None
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return None


def parse_date_arg(value: str, *, end_of_day: bool = False) -> datetime:
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
    tz = timezone(timedelta(hours=8))
    today = datetime.now(tz).date()
    this_monday = today - timedelta(days=today.weekday())
    last_monday = this_monday - timedelta(days=7)
    last_sunday = last_monday + timedelta(days=6)
    start = datetime.combine(last_monday, datetime.min.time(), tzinfo=tz)
    end = datetime.combine(last_sunday, datetime.max.time().replace(microsecond=0), tzinfo=tz)
    return start, end


def resolve_domains(employer: str, extra: list[str] | None) -> tuple[str, tuple[str, ...]]:
    domains = list(DEFAULT_DOMAINS.get(employer.strip(), ()))
    if extra:
        domains.extend(extra)
    if not domains:
        raise SystemExit(f"❌ 未知雇主 '{employer}'")
    return employer.strip(), tuple(dict.fromkeys(domains))


def email_matches(email: str, domains: tuple[str, ...]) -> bool:
    e = (email or "").lower()
    if "@" not in e:
        return False
    host = e.rsplit("@", 1)[1]
    for d in domains:
        domain = d.lower().lstrip("@")
        if host == domain or host.endswith("." + domain):
            return True
    return False


CO_AUTHORED_BY_RE = re.compile(r"^[ \t]*co-authored-by[ \t]*:[ \t]*(.+)$", re.I | re.M)


def commit_has_agent_coauthor(commit: dict) -> bool:
    """commit 是否带 `Co-Authored-By: ...Agent...` trailer（不区分大小写）。"""
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


def agent_any_cell(matched: int, total: int) -> str:
    """`任一` 单元格：命中显示 `是 n/m`，否则 `否 0/m`。"""
    return f"{'是' if matched > 0 else '否'} {matched}/{total}"


def agent_all_cell(matched: int, total: int) -> str:
    """`全部` 单元格：全部命中显示 `是 m/m`，否则 `否 n/m`。"""
    if total > 0 and matched == total:
        return f"是 {matched}/{total}"
    return f"否 {matched}/{total}"


class Client:
    def __init__(self, project: str):
        self.project = project
        self.enc = project.replace("/", "%2F")
        self.base = f"https://web-api.gitcode.com/issuepr/api/v1/projects/{self.enc}"
        self.s = requests.Session()
        self.s.headers.update(BROWSER_HEADERS)

    def get(self, path: str, params: dict) -> dict:
        r = self.s.get(f"{self.base}/{path.lstrip('/')}", params=params, timeout=90)
        r.raise_for_status()
        time.sleep(0.04)
        return r.json()

    def list_mrs(self, state: str, order_by: str, after: datetime | None) -> list[dict]:
        items, page = [], 1
        while True:
            data = self.get(
                "isource/merge_requests",
                {
                    "state": state,
                    "order_by": order_by,
                    "sort": "desc",
                    "scope": "all",
                    "page": page,
                    "repoId": self.enc,
                    "per_page": 50,
                    "view": "basic",
                },
            )
            batch = data.get("content") or []
            if not batch:
                break
            stop = False
            key = "merged_at" if order_by == "merged_at" else "created_at"
            for mr in batch:
                dt = parse_iso_dt(mr.get(key) or "")
                if after and dt and dt < after:
                    stop = True
                    break
                items.append(mr)
            if stop:
                break
            if page >= int(data.get("page_count") or 1):
                break
            page += 1
        return items

    def mr_commits(self, iid: int) -> list[dict]:
        commits, page = [], 1
        while True:
            data = self.get(
                f"merge_requests/{iid}/commits",
                {"repoId": self.enc, "iid": iid, "page": page, "per_page": 50},
            )
            batch = data.get("content") or []
            commits.extend(batch)
            if page >= int(data.get("page_count") or 1) or not batch:
                break
            page += 1
        return commits

    def count_tests(self, iid: int) -> tuple[int, int, int]:
        data = self.get(
            f"merge_requests/{iid}/changes",
            {"repoId": self.enc, "iid": iid},
        )
        touched = new_files = cases = 0
        for ch in data.get("changes") or []:
            fp = ch.get("new_path") or ch.get("file_path") or ""
            if not TEST_FILE_RE.search(fp):
                continue
            touched += 1
            if ch.get("new_file"):
                new_files += 1
            for line in (ch.get("diff") or "").splitlines():
                if CASE_ADD_RE.search(line):
                    cases += 1
        return touched, new_files, cases


def in_range(mr: dict, key: str, start: datetime, end: datetime) -> bool:
    dt = parse_iso_dt(mr.get(key) or "")
    return dt is not None and start <= dt <= end


def mr_url(project: str, iid: int) -> str:
    return f"https://gitcode.com/{project}/merge_requests/{iid}"


def _commit_emails(commits: list[dict]) -> set[str]:
    emails: set[str] = set()
    for commit in commits:
        for key in ("author_email", "committer_email"):
            value = commit.get(key)
            if value:
                emails.add(value.lower())
    return emails


def _enrich_row(
    client: Client,
    mr: dict,
    domains: tuple[str, ...],
    project: str,
    date_key: str,
) -> dict | None:
    iid = mr.get("iid")
    if not iid:
        return None
    commits = client.mr_commits(int(iid))
    emails = _commit_emails(commits)
    if not any(email_matches(email, domains) for email in emails):
        return None
    agent_matched = sum(1 for c in commits if commit_has_agent_coauthor(c))
    commit_total = len(commits)
    _, nf, nc = client.count_tests(int(iid))
    add = int(mr.get("added_lines") or 0)
    rem = int(mr.get("removed_lines") or 0)
    return {
        "iid": int(iid),
        "title": (mr.get("title") or "").replace("|", "\\|"),
        "url": mr.get("web_url") or mr_url(project, int(iid)),
        "state": (mr.get("state") or "").lower(),
        "date": (mr.get(date_key) or mr.get("created_at") or "")[:10],
        "added_lines": add,
        "removed_lines": rem,
        "change_lines": add + rem,
        "new_cases": nc,
        "new_test_files": nf,
        "agent_matched": agent_matched,
        "commit_total": commit_total,
    }


def enrich_rows(
    client: Client,
    mrs: list[dict],
    domains: tuple[str, ...],
    project: str,
    date_key: str,
    progress: bool,
) -> list[dict]:
    rows: list[dict] = []
    for mr in mrs:
        row = _enrich_row(client, mr, domains, project, date_key)
        if row is None:
            continue
        rows.append(row)
        if progress:
            print(
                f"  !{row.get('iid')} +{row.get('added_lines')} -{row.get('removed_lines')} "
                f"cases={row.get('new_cases')} "
                f"agent={row.get('agent_matched')}/{row.get('commit_total')}",
                flush=True,
            )
    return rows


def section_md(title: str, rows: list[dict], date_label: str) -> tuple[str, dict]:
    lines = [f"## {title}（{len(rows)} 个）", ""]
    lines.append(
        f"| MR | {date_label} | 状态 | +行 | -行 | 变更行 | Agent任一 | Agent全部 "
        f"| 新增用例 | 新测试文件 | 标题 |"
    )
    lines.append("|:--|:--|:--|--:|--:|--:|:--|:--|--:|--:|:--|")
    tot = {
        "add": 0,
        "rem": 0,
        "chg": 0,
        "cases": 0,
        "files": 0,
        "count": len(rows),
        "agent_any": 0,
        "agent_all": 0,
    }
    for r in sorted(rows, key=lambda x: x["date"], reverse=True):
        am, ct = r.get("agent_matched", 0), r.get("commit_total", 0)
        tot["add"] += r["added_lines"]
        tot["rem"] += r["removed_lines"]
        tot["chg"] += r["change_lines"]
        tot["cases"] += r["new_cases"]
        tot["files"] += r["new_test_files"]
        if am > 0:
            tot["agent_any"] += 1
        if ct > 0 and am == ct:
            tot["agent_all"] += 1
        lines.append(
            f"| [!{r['iid']}]({r['url']}) | {r['date']} | {r['state']} "
            f"| {r['added_lines']:,} | {r['removed_lines']:,} | {r['change_lines']:,} "
            f"| {agent_any_cell(am, ct)} | {agent_all_cell(am, ct)} "
            f"| {r['new_cases']} | {r['new_test_files']} | {r['title']} |"
        )
    lines.append("")
    lines.append(
        f"**小计**：+{tot['add']:,} / -{tot['rem']:,} / 变更 {tot['chg']:,} 行；"
        f"新增用例 **{tot['cases']}**，新测试文件 **{tot['files']}**；"
        f"含 `Co-Authored-By: Agent`：任一 **{tot['agent_any']}** 个、全部 **{tot['agent_all']}** 个"
    )
    lines.append("")
    return "\n".join(lines), tot


def _raw_mrs(
    client: Client, start: datetime, end: datetime, include_open: bool
) -> tuple[list[dict], list[dict], list[dict]]:
    merged_raw = [
        m for m in client.list_mrs("merged", "merged_at", start)
        if in_range(m, "merged_at", start, end)
    ]
    created_raw = [
        m for m in client.list_mrs("all", "created_at", start)
        if in_range(m, "created_at", start, end)
    ]
    open_raw = client.list_mrs("opened", "created_at", None) if include_open else []
    return merged_raw, created_raw, open_raw


def _enrich_all(
    client: Client,
    project: str,
    domains: tuple[str, ...],
    merged_raw: list[dict],
    created_raw: list[dict],
    open_raw: list[dict],
    include_open: bool,
    progress: bool,
) -> tuple[list[dict], list[dict], list[dict]]:
    if progress:
        print(f"统计 merged（{len(merged_raw)}）…", flush=True)
    merged = enrich_rows(client, merged_raw, domains, project, "merged_at", progress)
    if progress:
        print(f"统计 created（{len(created_raw)}）…", flush=True)
    created = enrich_rows(client, created_raw, domains, project, "created_at", progress)
    open_rows: list[dict] = []
    if include_open:
        if progress:
            print(f"统计 open（{len(open_raw)}）…", flush=True)
        open_rows = enrich_rows(client, open_raw, domains, project, "created_at", progress)
    return merged, created, open_rows


def _report_header(
    project: str,
    employer: str,
    domains: tuple[str, ...],
    start: datetime,
    end: datetime,
) -> list[str]:
    now = datetime.now(timezone(timedelta(hours=8))).strftime("%Y-%m-%d %H:%M:%S")
    return [
        f"# {employer} × {project} PR 统计报告",
        "",
        f"- **生成时间**：{now} (UTC+8)",
        f"- **统计区间**：{start.date()} ~ {end.date()}",
        f"- **雇主**：{employer}（邮箱域：{', '.join(domains)}）",
        f"- **仓库**：[{project}](https://gitcode.com/{project}/pulls)",
        "",
        "> 用例数：MR diff 中新增的 `it(` / `test(` / `@tc` 等；测试文件匹配 `*.test.ets` 等路径。",
        "",
    ]


def _empty_totals() -> dict:
    return {
        "add": 0,
        "rem": 0,
        "chg": 0,
        "cases": 0,
        "files": 0,
        "count": 0,
        "agent_any": 0,
        "agent_all": 0,
    }


def _summary_lines(tm: dict, tc: dict, to_: dict, include_open: bool) -> list[str]:
    lines = [
        "---",
        "## 汇总",
        "",
        "| 类别 | PR 数 | +行 | -行 | 变更行 | Agent任一 | Agent全部 | 新增用例 | 新测试文件 |",
        "|------|------:|----:|----:|------:|------:|------:|--------:|----------:|",
        f"| 合入（区间内） | {tm.get('count')} | {tm.get('add'):,} | {tm.get('rem'):,} | "
        f"{tm.get('chg'):,} | {tm.get('agent_any')} | {tm.get('agent_all')} | "
        f"{tm.get('cases')} | {tm.get('files')} |",
        f"| 提交（区间内） | {tc.get('count')} | {tc.get('add'):,} | {tc.get('rem'):,} | "
        f"{tc.get('chg'):,} | {tc.get('agent_any')} | {tc.get('agent_all')} | "
        f"{tc.get('cases')} | {tc.get('files')} |",
    ]
    if include_open:
        lines.append(
            f"| 当前 open | {to_.get('count')} | {to_.get('add'):,} | {to_.get('rem'):,} | "
            f"{to_.get('chg'):,} | {to_.get('agent_any')} | {to_.get('agent_all')} | "
            f"{to_.get('cases')} | {to_.get('files')} |"
        )
    lines.append("")
    lines.append(
        "> `Agent任一` = 该 PR 中至少 1 个 commit 带 `Co-Authored-By: Agent`；"
        "`Agent全部` = 该 PR 的**所有** commit 都带。"
    )
    lines.append("")
    return lines


def build_report(
    project: str,
    employer: str,
    domains: tuple[str, ...],
    start: datetime,
    end: datetime,
    include_open: bool,
    progress: bool,
) -> str:
    client = Client(project)
    if progress:
        print("拉取 MR …", flush=True)
    merged_raw, created_raw, open_raw = _raw_mrs(client, start, end, include_open)
    merged, created, open_rows = _enrich_all(
        client, project, domains, merged_raw, created_raw, open_raw, include_open, progress
    )
    parts = _report_header(project, employer, domains, start, end)
    sm, tm = section_md("上周合入 PR", merged, "合入日")
    sc, tc = section_md("上周提交 PR", created, "创建日")
    parts.append(sm)
    parts.append(sc)
    if include_open:
        so, to_ = section_md("当前待合入 open PR（快照）", open_rows, "创建日")
        parts.append(so)
    else:
        to_ = _empty_totals()
    parts.extend(_summary_lines(tm, tc, to_, include_open))
    return "\n".join(parts)


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="生成 GitCode MR Markdown 报告（含 +/- 行数与用例统计）")
    parser.add_argument("--project", default=DEFAULT_PROJECT)
    parser.add_argument("--employer", default=DEFAULT_EMPLOYER)
    parser.add_argument("--domain", action="append", dest="domains")
    parser.add_argument("--since", default=None)
    parser.add_argument("--until", default=None)
    parser.add_argument("--last-week", action="store_true")
    parser.add_argument(
        "--out",
        default=None,
        help="输出 MD 路径（默认 src/skills/gitcode-mr/reports/<employer>_<dates>.md）",
    )
    parser.add_argument("--no-open", action="store_true", help="不包含当前 open PR 快照")
    args = parser.parse_args(argv)

    if args.last_week:
        start, end = last_calendar_week_range()
    elif args.since:
        start = parse_date_arg(args.since)
        end = parse_date_arg(args.until, end_of_day=True) if args.until else datetime.now(start.tzinfo)
    else:
        raise SystemExit("❌ 需 --since/--until 或 --last-week")

    employer, domains = resolve_domains(args.employer, args.domains)
    md = build_report(
        args.project,
        employer,
        domains,
        start,
        end,
        include_open=not args.no_open,
        progress=True,
    )

    if args.out:
        out_path = Path(args.out)
    else:
        rep_dir = Path(__file__).resolve().parent / "reports"
        rep_dir.mkdir(parents=True, exist_ok=True)
        tag = f"{employer}_{args.project.replace('/', '_')}_{start.date()}_{end.date()}.md"
        out_path = rep_dir / tag.replace(" ", "")

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(md, encoding="utf-8")
    print(f"\n✓ 报告已写入: {out_path.resolve()}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
