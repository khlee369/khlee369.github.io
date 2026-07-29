#!/usr/bin/env bash
# Render portfolio markdown -> CV-styled PDF (WeasyPrint, real vector fonts).
#
#   npm run pdf:portfolio            # every  portfolio/*.md
#   npm run pdf:portfolio -- wcai    # only   portfolio/wcai.md
#
# First run creates a local .venv and installs requirements.txt (one-time,
# ~30s). Subsequent runs reuse it. The venv + font cache are gitignored.
set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VENV="$HERE/.venv"

if [ ! -x "$VENV/bin/python" ]; then
  echo "[portfolio-pdf] first run — creating venv + installing WeasyPrint…"
  python3 -m venv "$VENV"
  "$VENV/bin/pip" install --quiet --upgrade pip
  "$VENV/bin/pip" install --quiet -r "$HERE/requirements.txt"
fi

exec "$VENV/bin/python" "$HERE/export_portfolio.py" "$@"
