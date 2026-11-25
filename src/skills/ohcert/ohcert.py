#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""OpenHarmony 测评结果统计（ohcert）。

数据源页面：https://www.openharmony.cn/testResult
数据接口：POST https://www.openharmony.cn/api/website/external/certificationApply/queryList

口径说明：
- 产品（product）：接口返回的一条 certificationApply 记录，页面口径“产品数”。
- 测评记录（record）：产品下 deviceCertificationList 的每一项，页面口径“测评数”。
  一个产品可能有多条测评记录（例如同一产品多个系统版本/类型）。
- certificationType（评测类型）是产品级字段；
  systemVersion / systemType 是测评记录级字段。

用法示例：
    python src/skills/ohcert/ohcert.py
    python src/skills/ohcert/ohcert.py --group exact --sort count
    python src/skills/ohcert/ohcert.py --version 6.1 --os-type 标准 --cert-type 商用
    python src/skills/ohcert/ohcert.py --cert-type 商用
    python src/skills/ohcert/ohcert.py --category 手机
    python src/skills/ohcert/ohcert.py --cert-type 商用 --category 车载 --keyword "@两轮车"
    python src/skills/ohcert/ohcert.py --json > result.json
    python src/skills/ohcert/ohcert.py --csv detail.csv
"""

from __future__ import annotations

import argparse
import csv
import json
import re
import sys
import time
import urllib.error
import urllib.request
from collections import Counter
from datetime import datetime

API_URL = "https://www.openharmony.cn/api/website/external/certificationApply/queryList"
SOURCE_URL = "https://www.openharmony.cn/testResult"
PAGE_LIMIT = 500

OS_TYPES = ["轻量系统", "小型系统", "标准系统"]
CERT_TYPES = ["模组/开发板", "商用设备", "发行版"]

# 商用设备“产品大类”关键词规则（接口没有官方品类字段，按产品名 + 描述推断）。
# 顺序即同分优先级；关键词为 ASCII 时按单词边界匹配，前缀 "re:" 表示正则。
CATEGORY_RULES = [
    ("手机", ["手机", r"re:(?<![a-z0-9])mate(?!pad|book)(?![a-z0-9])", "pura", "pocket",
             "nova", "畅享", "麦芒", "折叠屏"]),
    ("平板/电脑", ["matepad", "matebook", "平板", "笔记本", "台式机", "一体机电脑", "显示器",
                 "擎云", "触控笔", "键盘", "鼠标", "dongle", "迷你主机", "主机"]),
    ("智能穿戴", ["watch", "band", "手表", "手环", "耳机", "freebuds", "earbuds", "headphone", "眼镜", "腕表", "穿戴"]),
    ("影音娱乐", ["电视", "智慧屏", "vision", "音箱", "sound", "投影", "音响", "功放",
                 "机顶盒", "播放器", "麦克风", "microphone", "speaker", "录音笔"]),
    ("智能家电", ["空调", "冰箱", "洗衣机", "洗烘", "热水器", "油烟机", "净水", "净化器",
                 "吹风机", "微波炉", "电磁炉", "电饭煲", "扫地", "风扇", "加湿器", "窗帘",
                 "晾衣", "浴霸", "燃气灶", "洗碗机", "吸尘器", "取暖器", "电暖", "线控器"]),
    ("智能家居", ["开关面板", "智能开关", "中控屏", "照明", "灯具", "灯带", "射灯", "吸顶灯",
                 "台灯", "插座", "面板", "knx", "mesh", "presence", "毫米波", "人体存在",
                 "魔镜", "强光灯", "防爆灯"]),
    ("教育", ["实验箱", "学习机", "学习本", "点读", "教育", "考试", "教室", "教学", "套件",
             "实训", "experiment kit"]),
    ("环境监测", ["水质", "浊度", "液位", "扬尘", "气体", "压力监测", "压力表", "流量计",
                 "雨量", "气象", "监测仪", "监测终端", "分析仪", "安全监测", "大坝", "ph",
                 "orp"]),
    ("商用办公", ["打印机", "复印机", "扫描仪", "会议", "广告机", "查询机", "自助终端",
                 "自助", "叫号", "桌牌", "工作站", "价签", "标签打印", "一体机", "复印",
                 "碎纸机", "信息发布", "导览", "录播", "签到", "用印", "视讯"]),
    ("视频监控", ["摄像机", "摄像头", "录像机", "监控", "球机", "筒机", "半球", "枪机",
                 "nvr", "dvr", "re:camera", "ptz", "抓拍", "视频", "执法记录仪", "执法仪",
                 "记录仪", "执法"]),
    ("网络通信", ["路由器", "网关", "交换机", "光猫", "cpe", "无线ap", "光模块", "基站",
                 "通信单元", "天线", "wifi", "wi-fi", "以太网", "onu", "光终端", "电话机",
                 "airengine", "optixstar", "gateway", "mifi", "fttr", "宽带", "星闪适配器",
                 "communication", "通信终端", "base station", "communication terminal", "通讯终端"]),
    ("能源表计", ["电表", "水表", "燃气表", "热量表", "集中器", "采集器", "充电桩", "充电机",
                 "储能", "逆变器", "光伏", "配电", "断路器", "碳表", "能耗", "用电",
                 "变压器", "meter", "体积修正仪", "电参"]),
    ("安防门禁", ["门禁", "闸机", "通道闸", "考勤", "对讲", "报警", "电子哨兵", "门锁",
                 "智能锁", "门铃", "猫眼", "安检", "人脸识别", "摆闸", "翼闸", "探测器",
                 "可燃气体", "re:leak", "人脸通行"]),
    ("金融支付", ["pos", "收银", "支付", "柜员", "atm", "金融", "存折", "票据打印",
                 "读卡器", "扫码", "收款", "点钞"]),
    ("医疗健康", ["医疗", "血压", "血糖", "监护", "输液", "制氧", "呼吸机", "cpap", "体温",
                 "成分分析", "尿酸", "心电", "超声", "医护", "病房", "病区", "健康", "血氧",
                 "诊断", "微生物", "检测仪", "thermometer", "blood pressure", "glucose", "oximeter", "护士站"]),
    ("车载交通", ["车载", "车机", "汽车", "交通", "隧道", "驾考", "自行车", "电动车",
                 "二轮车", "两轮车", "助力车", "座舱", "tbox", "obd", "行车记录仪", "后视镜",
                 "停车", "高速公路", "riding", "车牌", "道闸", "关道机", "云交科", "信号机"]),
    ("机器人/无人机", ["机器人", "无人机", "清扫车", "巡检车", "穿梭车", "飞控"]),
    ("工业控制", ["plc", "工控", "工业控制", "控制器", "控制仪", "传感器", "执行器",
                 "边缘计算", "数采", "测控", "变频器", "伺服", "驱动器", "工业平板",
                 "工业相机", "采集终端", "遥测终端", "控制单元", "dtu", "rtu", "黑匣子",
                 "主控板", "组态屏", "智控", "edge computing", "ddc", "算力盒", "工业质检",
                 "司钻", "边缘控制", "data collector"]),
    ("行业终端", ["手持终端", "pda", "行业终端", "三防", "移动终端", "智能终端", "交互终端",
                 "服务终端", "终端机", "安全帽", "作业终端", "物联网终端", "数传终端",
                 "条码扫描", "operation terminal"]),
]

CATEGORY_NEGATIVE = {
    "平板/电脑": ["洗烘一体机", "热泵一体机", "医护"],
    "商用办公": ["洗烘一体机", "热泵一体机"],
    "视频监控": ["会议", "行车"],
}

# 这些大类只按产品名判断（描述里的品牌词/品类词歧义太大）。
CATEGORY_NAME_ONLY = {"手机"}

# --keyword 的预设别名：`@两轮车` 会展开成下面这组词（OR 关系）。
KEYWORD_PRESETS = {
    "两轮车": ["两轮车", "电动自行车", "电动车", "二轮车", "电动二轮车", "助力车",
             "单车", "bike", "bicycle", "scooter", "moped", "e-bike", "ebike", "riding"],
}

# 这些词在“描述”里过于宽泛（常作为应用场景出现），只在产品名中生效。
DESC_IGNORED = {
    "手机", "平板", "主机", "穿戴", "视频", "监控", "wifi", "wi-fi", "以太网",
    "宽带", "通信终端", "communication", "控制器", "传感器", "执行器", "报警",
    "探测器", "支付", "金融", "扫码", "收款", "医疗", "健康", "交通", "高速",
    "照明", "灯具", "面板", "会议", "自助", "一体机", "工作站", "复印",
    "记录仪", "执法仪", "智能终端", "交互终端", "服务终端", "终端机",
    "行业终端", "移动终端", "物联网终端", "控制单元", "采集终端", "主控板",
    "智控", "天线", "显示器",
}

_ASCII_KW_RE = re.compile(r"^[a-z0-9 _\-]+$")

BASE_FILTERS = {
    "certificationType": [0, 1, 2],
    "systemVersion": [3, 4, 5, 6, "master"],
    "systemType": OS_TYPES,
    "companyNameList": [],
    "searchCondition": "",
}

_VERSION_RE = re.compile(r"OpenHarmony\s+(\d+)\.(\d+)", re.IGNORECASE)
_MAJOR_RE = re.compile(r"^(\d+)\.(\d+)$")


class FetchError(RuntimeError):
    """接口抓取失败。"""


def _post(page: int, limit: int, timeout: float, retries: int) -> dict:
    payload = dict(BASE_FILTERS, page=page, limit=limit)
    data = json.dumps(payload).encode("utf-8")
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) ohcert/1.0",
        "Referer": SOURCE_URL,
    }
    last_error: Exception | None = None
    for attempt in range(1, retries + 1):
        req = urllib.request.Request(API_URL, data=data, headers=headers)
        try:
            with urllib.request.urlopen(req, timeout=timeout) as resp:
                body = json.loads(resp.read().decode("utf-8"))
            if body.get("code") != 200 or not body.get("success", True):
                raise FetchError(
                    f"接口返回异常: code={body.get('code')} msg={body.get('msg')}"
                )
            return body.get("body") or {}
        except (urllib.error.URLError, TimeoutError, json.JSONDecodeError, FetchError) as exc:
            last_error = exc
            if attempt < retries:
                time.sleep(1.5 * attempt)
    raise FetchError(f"请求第 {page} 页失败（重试 {retries} 次）: {last_error}")


def fetch_all(limit: int = PAGE_LIMIT, timeout: float = 30.0,
              retries: int = 3, verbose: bool = False) -> tuple[list[dict], dict]:
    """分页抓取全部产品，返回 (products, meta)。"""
    products: list[dict] = []
    meta: dict = {}
    page = 1
    while True:
        body = _post(page, limit, timeout, retries)
        meta = body
        result = body.get("result") or []
        products.extend(result)
        total = int(body.get("total") or 0)
        if verbose:
            print(f"[fetch] page {page}: +{len(result)} ({len(products)}/{total})",
                  file=sys.stderr)
        if not result or len(products) >= total:
            break
        page += 1

    expected_records = meta.get("resultCount")
    actual_records = sum(len(p.get("deviceCertificationList") or []) for p in products)
    if expected_records is not None and actual_records != int(expected_records):
        print(f"[warn] 测评记录数与接口统计不一致: 抓取 {actual_records} / 接口 {expected_records}",
              file=sys.stderr)
    return products, meta


def major_version(version: str | None) -> str:
    """OpenHarmony 6.1 LTS -> 6.1；master -> master；无法识别则原样返回。"""
    text = (version or "").strip()
    if not text:
        return "未知"
    match = _VERSION_RE.search(text)
    if match:
        return f"{match.group(1)}.{match.group(2)}"
    if "master" in text.lower():
        return "master"
    return text


def _keyword_hit(text: str, keyword: str) -> bool:
    if keyword.startswith("re:"):
        return re.search(keyword[3:], text) is not None
    if _ASCII_KW_RE.match(keyword):
        pattern = r"(?<![a-z0-9])" + re.escape(keyword) + r"(?![a-z0-9])"
        return re.search(pattern, text) is not None
    return keyword in text


def _expand_keywords(raw: str) -> list[str]:
    """拆分 --keyword，并展开 `@预设` 别名；返回小写关键词列表。"""
    result: list[str] = []
    for item in re.split(r"[,，、;；]+", raw or ""):
        item = item.strip()
        if not item:
            continue
        if item.startswith("@"):
            result.extend(KEYWORD_PRESETS.get(item[1:], [item[1:]]))
        else:
            result.append(item)
    return [item.lower() for item in result]


def categorize(name: str, desc: str) -> str:
    """按产品名 + 描述推断商用设备大类；无命中返回“其他”。

    名称命中权重 10，描述命中权重 1，避免描述里的应用场景词抢走分类。
    """
    name_text = (name or "").lower()
    desc_text = (desc or "").lower()
    for phrase in ("不含摄像头", "无摄像头", "不带摄像头", "不含摄像"):
        desc_text = desc_text.replace(phrase, "")
    best, best_score = "其他", 0
    for category, keywords in CATEGORY_RULES:
        if any(neg in name_text for neg in CATEGORY_NEGATIVE.get(category, [])):
            continue
        name_only = category in CATEGORY_NAME_ONLY
        score = 0
        for keyword in keywords:
            if _keyword_hit(name_text, keyword):
                score += 10
            elif (not name_only and keyword not in DESC_IGNORED
                  and _keyword_hit(desc_text, keyword)):
                score += 1
        if score > best_score:
            best, best_score = category, score
    return best


def build_records(products: list[dict]) -> list[dict]:
    """展开为测评记录级明细。"""
    records: list[dict] = []
    for index, product in enumerate(products):
        devices = product.get("deviceCertificationList") or []
        name = product.get("name") or ""
        desc_all = " ".join((device.get("desc") or "") for device in devices)
        category = categorize(name, desc_all)
        for device in devices:
            version = device.get("systemVersion") or "未知"
            records.append({
                "product_id": index,
                "name": name,
                "company": product.get("companyName") or "",
                "cert_type": product.get("certificationType") or "未知",
                "category": category,
                "desc": desc_all,
                "os_type": device.get("systemType") or "未知",
                "os_version": version,
                "major": major_version(version),
                "software_version": device.get("softwareVersion") or "",
                "approval_date": (device.get("approvalTime") or "")[:10],
                "province": product.get("province") or "",
                "city": product.get("city") or "",
                "device_model": product.get("deviceModel") or "",
                "chip_model": product.get("chipModel") or "",
            })
    return records


def apply_filters(records: list[dict], args: argparse.Namespace) -> list[dict]:
    keywords = _expand_keywords(args.keyword) if args.keyword else []

    def keep(rec: dict) -> bool:
        if args.version:
            arg = args.version.strip()
            if arg.lower() == "master":
                if rec["major"] != "master":
                    return False
            elif not (
                rec["major"] == arg
                or rec["major"].startswith(arg + ".")
                or arg in rec["os_version"]
            ):
                return False
        if args.os_type and args.os_type not in rec["os_type"]:
            return False
        if args.cert_type and args.cert_type not in rec["cert_type"]:
            return False
        if args.category and args.category not in rec["category"]:
            return False
        if keywords:
            haystack = (rec["name"] + " " + rec.get("desc", "")).lower()
            if not any(item in haystack for item in keywords):
                return False
        if args.since and rec["approval_date"] < args.since:
            return False
        if args.until and rec["approval_date"] > args.until:
            return False
        return True

    return [rec for rec in records if keep(rec)]


def version_sort_key(version: str):
    """按版本号降序：7.0, 6.1, 6.0, ...；master 与未知排最后。"""
    match = _MAJOR_RE.match(version)
    if match:
        return (0, -int(match.group(1)), -int(match.group(2)))
    if version == "master":
        return (1, 0, 0)
    return (2, 0, 0)


def group_products(records: list[dict]) -> list[dict]:
    """把记录按产品去重，合并 OS 版本与通过日期（用于关键词结果清单）。"""
    grouped: dict[int, dict] = {}
    for rec in records:
        slot = grouped.setdefault(rec["product_id"], {
            "name": rec["name"],
            "company": rec["company"],
            "category": rec["category"],
            "device_model": rec["device_model"],
            "os_versions": set(),
            "approval_dates": set(),
        })
        slot["os_versions"].add(rec["os_version"])
        if rec["approval_date"]:
            slot["approval_dates"].add(rec["approval_date"])
    result = []
    for slot in grouped.values():
        result.append({
            "name": slot["name"],
            "company": slot["company"],
            "category": slot["category"],
            "device_model": slot["device_model"],
            "os_versions": sorted(slot["os_versions"], key=version_sort_key),
            "approval_dates": sorted(slot["approval_dates"], reverse=True),
        })
    return sorted(result, key=lambda item: (item["category"], item["name"]))


def aggregate(records: list[dict], group: str) -> dict:
    key_func = (lambda r: r["major"]) if group == "major" else (lambda r: r["os_version"])
    by_version: dict[str, dict] = {}
    for rec in records:
        key = key_func(rec)
        slot = by_version.setdefault(key, {"total": 0, "os_type": Counter(), "cert_type": Counter()})
        slot["total"] += 1
        slot["os_type"][rec["os_type"]] += 1
        slot["cert_type"][rec["cert_type"]] += 1

    by_os_type = Counter(rec["os_type"] for rec in records)
    by_cert_type = Counter(rec["cert_type"] for rec in records)
    cross = Counter((rec["os_type"], rec["cert_type"]) for rec in records)

    commercial = [rec for rec in records if rec["cert_type"] == "商用设备"]
    by_category = Counter(rec["category"] for rec in commercial)
    category_products: dict[str, set[int]] = {}
    for rec in commercial:
        category_products.setdefault(rec["category"], set()).add(rec["product_id"])

    return {
        "by_version": by_version,
        "by_os_type": by_os_type,
        "by_cert_type": by_cert_type,
        "cross": cross,
        "by_category": by_category,
        "category_products": category_products,
        "commercial_products": len({rec["product_id"] for rec in commercial}),
    }


def md_table(headers: list[str], rows: list[list], right_cols: set[int] | None = None) -> str:
    right_cols = right_cols or set()
    lines = ["| " + " | ".join(headers) + " |"]
    lines.append("| " + " | ".join("---:" if i in right_cols else "---"
                                   for i in range(len(headers))) + " |")
    for row in rows:
        lines.append("| " + " | ".join(str(cell) for cell in row) + " |")
    return "\n".join(lines)


def _print_report_header(products: list[dict], meta: dict,
                         stats: dict, args: argparse.Namespace, total: int,
                         matched_products: dict) -> None:
    by_version = stats["by_version"]
    print("=" * 72)
    print("OpenHarmony 测评结果统计")
    print(f"数据源  : {SOURCE_URL}")
    print(f"抓取时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"产品数  : {len(matched_products):,} 命中 / {len(products):,} 全量    "
          f"测评记录: {total:,}    厂商数: {int(meta.get('companyCount') or 0):,}    "
          f"版本数({args.group}): {len(by_version)}")
    has_filter = any((args.version, args.os_type, args.cert_type, args.category,
                      args.keyword, args.since, args.until))
    if has_filter:
        print(f"过滤条件: version={args.version or '-'} os_type={args.os_type or '-'} "
              f"cert_type={args.cert_type or '-'} category={args.category or '-'} "
              f"keyword={args.keyword or '-'} "
              f"since={args.since or '-'} until={args.until or '-'}")
    print("=" * 72)


def _print_version_os_table(versions: list[str], stats: dict, total: int,
                            args: argparse.Namespace) -> None:
    print(f"\n【1】OS 版本（{'大版本' if args.group == 'major' else '原始版本'}） × OS 类型")
    by_version = stats["by_version"]
    rows = []
    for version in versions:
        slot = by_version.get(version) or {}
        count = slot["total"]
        rows.append([
            version,
            slot["os_type"].get("轻量系统", 0),
            slot["os_type"].get("小型系统", 0),
            slot["os_type"].get("标准系统", 0),
            count,
            f"{count / total * 100:.1f}%" if total else "-",
        ])
    rows.append([
        "合计",
        stats["by_os_type"].get("轻量系统", 0),
        stats["by_os_type"].get("小型系统", 0),
        stats["by_os_type"].get("标准系统", 0),
        total,
        "100.0%" if total else "-",
    ])
    print(md_table(["版本", "轻量系统", "小型系统", "标准系统", "合计", "占比"],
                   rows, right_cols={1, 2, 3, 4, 5}))


def _print_version_cert_table(versions: list[str], stats: dict, total: int,
                              args: argparse.Namespace) -> None:
    print(f"\n【2】OS 版本（{'大版本' if args.group == 'major' else '原始版本'}） × 评测类型")
    by_version = stats["by_version"]
    rows = []
    for version in versions:
        slot = by_version.get(version) or {}
        rows.append([
            version,
            slot["cert_type"].get("模组/开发板", 0),
            slot["cert_type"].get("商用设备", 0),
            slot["cert_type"].get("发行版", 0),
            slot["total"],
        ])
    rows.append([
        "合计",
        stats["by_cert_type"].get("模组/开发板", 0),
        stats["by_cert_type"].get("商用设备", 0),
        stats["by_cert_type"].get("发行版", 0),
        total,
    ])
    print(md_table(["版本", "模组/开发板", "商用设备", "发行版", "合计"],
                   rows, right_cols={1, 2, 3, 4}))


def _print_os_cert_table(stats: dict, total: int) -> None:
    print("\n【3】OS 类型 × 评测类型")
    rows = []
    for os_type in OS_TYPES:
        row = [os_type]
        row_total = 0
        for cert_type in CERT_TYPES:
            value = stats["cross"].get((os_type, cert_type), 0)
            row_total += value
            row.append(value)
        row.append(row_total)
        rows.append(row)
    rows.append(["合计"] + [stats["by_cert_type"].get(c, 0) for c in CERT_TYPES] + [total])
    print(md_table(["OS 类型"] + CERT_TYPES + ["合计"], rows,
                   right_cols={1, 2, 3, 4}))


def _print_cert_summary(stats: dict, matched_products: dict, total: int) -> None:
    print("\n【4】评测类型汇总（产品维度）")
    product_by_cert = Counter(matched_products.values())
    product_total = len(matched_products)
    rows = []
    for cert_type in CERT_TYPES:
        count = product_by_cert.get(cert_type, 0)
        rec_count = stats["by_cert_type"].get(cert_type, 0)
        rows.append([
            cert_type,
            count,
            f"{count / product_total * 100:.1f}%" if product_total else "-",
            rec_count,
            f"{rec_count / total * 100:.1f}%" if total else "-",
        ])
    rows.append(["合计", product_total, "100.0%" if product_total else "-", total,
                 "100.0%" if total else "-"])
    print(md_table(["评测类型", "产品数", "产品占比", "测评记录", "记录占比"],
                   rows, right_cols={1, 2, 3, 4}))


def _print_category_table(stats: dict, commercial_total: int) -> None:
    print("\n【5】商用设备大类（关键词推断，非官方字段）")
    rows = []
    for category, count in stats["by_category"].most_common():
        product_count = len(stats["category_products"].get(category, ()))
        rows.append([
            category,
            product_count,
            count,
            f"{count / commercial_total * 100:.1f}%",
        ])
    rows.append(["合计", stats["commercial_products"], commercial_total, "100.0%"])
    print(md_table(["大类", "产品数", "测评记录", "占比"], rows,
                   right_cols={1, 2, 3}))


def _print_keyword_table(records: list[dict], keyword: str) -> None:
    matched = group_products(records)
    expanded = _expand_keywords(keyword)
    print(f"\n【6】关键词匹配产品（{keyword}）")
    if keyword.strip().startswith("@"):
        print(f"预设展开: {', '.join(expanded)}")
    rows = []
    for item in matched:
        rows.append([
            item["name"],
            item["company"],
            item["category"],
            item["device_model"] or "-",
            "、".join(item["os_versions"]) or "-",
            "、".join(item["approval_dates"]) or "-",
        ])
    print(md_table(["产品", "厂商", "大类", "型号", "OS版本", "通过日期"], rows))
    print(f"\n匹配产品 {len(matched)} 个 / 测评记录 {len(records)} 条"
          "（关键词按产品名+描述子串匹配，OR 关系）")


def print_report(products: list[dict], records: list[dict], meta: dict,
                 stats: dict, args: argparse.Namespace) -> None:
    total = len(records)
    matched_products = {rec["product_id"]: rec["cert_type"] for rec in records}
    by_version = stats["by_version"]
    versions = sorted(by_version, key=version_sort_key)
    if args.sort == "count":
        versions.sort(key=lambda v: by_version[v]["total"], reverse=True)

    _print_report_header(products, meta, stats, args, total, matched_products)
    _print_version_os_table(versions, stats, total, args)
    _print_version_cert_table(versions, stats, total, args)
    _print_os_cert_table(stats, total)
    _print_cert_summary(stats, matched_products, total)

    commercial_total = sum(stats["by_category"].values())
    if commercial_total:
        _print_category_table(stats, commercial_total)
    if args.keyword:
        _print_keyword_table(records, args.keyword)

    print("\n说明：占比以测评记录数为分母；一个产品可对应多条测评记录"
          "（不同系统版本/类型），故测评记录数 ≥ 产品数。")
    if commercial_total:
        print("      商用设备大类由产品名与描述关键词推断，规则见 ohcert.py 的 "
              "CATEGORY_RULES，仅作分布参考。")


def build_json(products: list[dict], records: list[dict], meta: dict,
               stats: dict, args: argparse.Namespace) -> dict:
    by_version = {}
    for version, slot in stats["by_version"].items():
        by_version[version] = {
            "total": slot["total"],
            "os_type": dict(slot["os_type"]),
            "cert_type": dict(slot["cert_type"]),
        }
    cross = {
        os_type: {cert_type: stats["cross"].get((os_type, cert_type), 0)
                  for cert_type in CERT_TYPES}
        for os_type in OS_TYPES
    }
    return {
        "source": SOURCE_URL,
        "api": API_URL,
        "fetched_at": datetime.now().isoformat(timespec="seconds"),
        "group": args.group,
        "filters": {
            "version": args.version,
            "os_type": args.os_type,
            "cert_type": args.cert_type,
            "category": args.category,
            "keyword": args.keyword,
            "keyword_expanded": _expand_keywords(args.keyword) if args.keyword else [],
            "since": args.since,
            "until": args.until,
        },
        "totals": {
            "products": len({rec["product_id"] for rec in records}),
            "products_total": len(products),
            "records": len(records),
            "records_total": int(meta.get("resultCount") or 0),
            "companies": int(meta.get("companyCount") or 0),
        },
        "by_version": by_version,
        "by_os_type": dict(stats["by_os_type"]),
        "by_cert_type": dict(stats["by_cert_type"]),
        "cross_os_type_cert_type": cross,
        "by_category": dict(stats["by_category"]),
        "category_products": {
            category: len(product_ids)
            for category, product_ids in stats["category_products"].items()
        },
        "keyword_products": group_products(records) if args.keyword else [],
    }


def write_csv(path: str, records: list[dict]) -> None:
    fields = ["name", "company", "cert_type", "category", "os_type", "os_version", "major",
              "software_version", "approval_date", "province", "city",
              "device_model", "chip_model", "desc"]
    with open(path, "w", newline="", encoding="utf-8-sig") as handle:
        writer = csv.DictWriter(handle, fieldnames=fields, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(records)


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="统计 OpenHarmony 官网测评结果（版本 / OS 类型 / 评测类型 / 商用设备大类）")
    parser.add_argument("--group", choices=["major", "exact"], default="major",
                        help="版本聚合方式：major=按大版本（默认），exact=按原始版本字符串")
    parser.add_argument("--version", help="筛选版本，如 6.1、6、master")
    parser.add_argument("--os-type", help="筛选 OS 类型，支持子串：轻量 / 小型 / 标准")
    parser.add_argument("--cert-type", help="筛选评测类型，支持子串：模组 / 商用 / 发行")
    parser.add_argument("--category",
                        help="筛选产品大类，支持子串：手机 / 车载 / 医疗 / 视频监控 ..."
                             "（商用设备生效）")
    parser.add_argument("--keyword",
                        help="关键词过滤：匹配产品名+描述，多个关键词用逗号分隔（OR）")
    parser.add_argument("--since", help="起始通过日期（含），格式 YYYY-MM-DD")
    parser.add_argument("--until", help="结束通过日期（含），格式 YYYY-MM-DD")
    parser.add_argument("--sort", choices=["version", "count"], default="version",
                        help="版本排序：version=按版本号降序（默认），count=按数量降序")
    parser.add_argument("--limit-per-page", type=int, default=PAGE_LIMIT,
                        help=f"每页条数（默认 {PAGE_LIMIT}，接口上限 500）")
    parser.add_argument("--timeout", type=float, default=30.0, help="单次请求超时秒数")
    parser.add_argument("--retries", type=int, default=3, help="单页重试次数")
    parser.add_argument("--json", action="store_true", help="输出 JSON（不打印表格）")
    parser.add_argument("--csv", metavar="PATH", help="把明细导出为 CSV")
    parser.add_argument("--verbose", action="store_true", help="打印抓取进度")
    args = parser.parse_args(argv)

    if args.limit_per_page < 1 or args.limit_per_page > 500:
        parser.error("--limit-per-page 取值范围 1-500")
    for name in ("since", "until"):
        value = getattr(args, name)
        if value:
            try:
                datetime.strptime(value, "%Y-%m-%d")
            except ValueError:
                parser.error(f"--{name} 需要 YYYY-MM-DD 格式")
    if args.since and args.until and args.since > args.until:
        parser.error("--since 不能晚于 --until")
    return args


def main(argv: list[str] | None = None) -> int:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")

    args = parse_args(argv)
    try:
        products, meta = fetch_all(limit=args.limit_per_page, timeout=args.timeout,
                                   retries=args.retries, verbose=args.verbose)
    except FetchError as exc:
        print(f"❌ {exc}", file=sys.stderr)
        return 2

    records = build_records(products)
    filtered = apply_filters(records, args)
    if not filtered:
        print("⚠️ 没有匹配的测评记录，请检查过滤条件。", file=sys.stderr)
        return 1

    stats = aggregate(filtered, args.group)
    if args.csv:
        write_csv(args.csv, filtered)

    if args.json:
        print(json.dumps(build_json(products, filtered, meta, stats, args),
                         ensure_ascii=False, indent=2))
    else:
        print_report(products, filtered, meta, stats, args)
        if args.csv:
            print(f"\n明细已写入: {args.csv}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
