#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Rewrite Signed-off-by in commit messages (used by git filter-branch --msg-filter).

Env (set by gitlog.py fix-signoff):
  GITLOG_FIX_SIGNOFF_GREP   optional substring; only rewrite if present in message
  GITLOG_FIX_SIGNOFF_NAME   signer display name
  GITLOG_FIX_SIGNOFF_EMAIL  signer email
"""
from __future__ import annotations

import os
import re
import sys


def rewrite_signoff_message(
    msg: str,
    grep: str | None,
    name: str,
    email: str,
) -> str:
    if grep and grep not in msg:
        return msg
    new_sign = f"Signed-off-by: {name} <{email}>"
    lines = msg.splitlines()
    out: list[str] = []
    replaced = False
    for line in lines:
        if re.match(r"^Signed-off-by:\s", line):
            out.append(new_sign)
            replaced = True
        else:
            out.append(line)
    if not replaced:
        while out and out[-1] == "":
            out.pop()
        out.append("")
        out.append(new_sign)
    text = "\n".join(out)
    if not text.endswith("\n"):
        text += "\n"
    return text


def main() -> int:
    grep = os.environ.get("GITLOG_FIX_SIGNOFF_GREP") or None
    name = os.environ.get("GITLOG_FIX_SIGNOFF_NAME") or ""
    email = os.environ.get("GITLOG_FIX_SIGNOFF_EMAIL") or ""
    if not email:
        print("GITLOG_FIX_SIGNOFF_EMAIL required", file=sys.stderr)
        return 1
    if not name:
        name = email.split("@", 1)[0]
    msg = sys.stdin.read()
    sys.stdout.write(rewrite_signoff_message(msg, grep, name, email))
    return 0


if __name__ == "__main__":
    sys.exit(main())
