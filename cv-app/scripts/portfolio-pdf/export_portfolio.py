#!/usr/bin/env python3
"""Render portfolio markdown -> CV-styled A4 PDF with real embedded fonts.

    python export_portfolio.py            # every  portfolio/*.md
    python export_portfolio.py wcai       # only   portfolio/wcai.md

Why WeasyPrint instead of the Chromium (npm run pdf) path: headless Chromium
embeds text into PDF as Type3 glyph-procedures, which render fuzzy/"broken" in
many real viewers (Acrobat, Preview, mobile). WeasyPrint embeds the font as a
proper subsetted Type0 TrueType, so the text is crisp everywhere and selectable.

The portfolio source markdown lives in ../../portfolio (gitignored — internal
metrics, must never reach this public repo). PDFs go to ../../exports/portfolio.
"""
import sys
from pathlib import Path

import markdown as md_lib
from fontTools.ttLib import TTFont
from weasyprint import HTML

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent                      # cv-app/
SRC_DIR = ROOT / "portfolio"
OUT_DIR = ROOT / "exports" / "portfolio"
WOFF2 = ROOT / "public" / "assets" / "fonts" / "PretendardVariable.woff2"
TTF_CACHE = HERE / ".cache" / "PretendardVariable.ttf"

CV_URL = "https://khlee369.github.io/CV/"
OWNER = "이광호 (Kwangho Lee)"
ACCENT = "#54b689"


def ensure_ttf() -> Path:
    """WeasyPrint needs an uncompressed OpenType file; derive it from the woff2
    once and cache it (keeps the big ttf out of the repo)."""
    if not TTF_CACHE.exists() or TTF_CACHE.stat().st_mtime < WOFF2.stat().st_mtime:
        TTF_CACHE.parent.mkdir(parents=True, exist_ok=True)
        f = TTFont(str(WOFF2))
        f.flavor = None
        f.save(str(TTF_CACHE))
    return TTF_CACHE


def styles(font_uri: str) -> str:
    return f"""
    @font-face {{
      font-family: 'Pretendard';
      src: url('{font_uri}') format('truetype');
    }}
    @page {{
      size: A4;
      margin: 16mm 14mm;
      @bottom-center {{
        content: counter(page) " / " counter(pages);
        font-family: 'Pretendard', sans-serif;
        font-size: 8px; color: #9ca3af;
      }}
    }}
    * {{ box-sizing: border-box; }}
    html, body {{ margin: 0; padding: 0; }}
    body {{
      font-family: 'Pretendard', sans-serif;
      color: #1f2937; font-size: 10.5pt; line-height: 1.7;
    }}

    .doc-head {{
      display: flex; justify-content: space-between; align-items: baseline;
      gap: 16px; margin: 0 0 22px; padding-bottom: 12px;
      border-bottom: 2px solid {ACCENT};
    }}
    .doc-head .owner {{ font-size: 12.5pt; font-weight: 700; color: #111827; }}
    .doc-head .owner .tag {{ font-weight: 500; color: #6b7280; }}
    .doc-head .meta {{ font-size: 8pt; color: #6b7280; text-align: right; }}
    .doc-head .meta a {{ color: {ACCENT}; font-weight: 600; text-decoration: none; }}

    h1, h2, h3, h4 {{ color: #111827; line-height: 1.35; }}
    h1 {{ font-size: 18pt; font-weight: 800; margin: 4px 0 14px; }}
    h2 {{
      font-size: 15pt; font-weight: 800; margin: 4px 0 16px;
      padding-bottom: 8px; border-bottom: 1px solid #e5e7eb;
    }}
    h3 {{
      font-size: 12pt; font-weight: 700; margin: 24px 0 10px;
      padding-left: 10px; border-left: 4px solid {ACCENT};
      break-after: avoid;
    }}
    h4 {{ font-size: 10.5pt; font-weight: 700; margin: 16px 0 8px; break-after: avoid; }}
    p {{ margin: 8px 0; }}
    strong {{ font-weight: 700; color: #111827; }}
    em {{ color: #4b5563; }}
    a {{ color: #2f8f5f; text-decoration: underline; }}

    ul, ol {{ margin: 8px 0; padding-left: 20px; }}
    li {{ margin: 5px 0; padding-left: 2px; }}
    li::marker {{ color: {ACCENT}; }}

    hr {{ border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0; }}
    code {{
      font-family: monospace; font-size: 0.9em;
      background: #f3f4f6; padding: 1px 5px; border-radius: 4px;
    }}
    blockquote {{
      margin: 12px 0; padding: 4px 14px; color: #4b5563;
      border-left: 3px solid #d1d5db;
    }}
    img {{ max-width: 100%; }}

    table {{
      width: 100%; border-collapse: collapse; margin: 14px 0; font-size: 9pt;
    }}
    thead {{ display: table-header-group; }}
    th, td {{
      border: 1px solid #e5e7eb; padding: 7px 9px; text-align: left;
      vertical-align: top;
    }}
    th {{ background: {ACCENT}; color: #fff; font-weight: 700; border-color: {ACCENT}; }}
    tbody tr:nth-child(even) {{ background: #f2faf6; }}
    tr {{ break-inside: avoid; }}
    td strong {{ color: #0f5132; }}
    """


def build_html(body_html: str, font_uri: str) -> str:
    return f"""<!doctype html><html lang="ko"><head><meta charset="utf-8">
<style>{styles(font_uri)}</style></head><body>
  <div class="doc-head">
    <div class="owner">{OWNER}<span class="tag"> · Portfolio</span></div>
    <div class="meta">원본 CV<br><a href="{CV_URL}">{CV_URL}</a></div>
  </div>
  <main>{body_html}</main>
</body></html>"""


def out_name(stem: str) -> str:
    return f"Kwangho_Lee_Portfolio_{stem.upper()}.pdf"


def main() -> int:
    wanted = {a[:-3] if a.lower().endswith(".md") else a for a in sys.argv[1:]}
    if not SRC_DIR.exists():
        print(f"No source dir: {SRC_DIR}", file=sys.stderr)
        return 1
    files = sorted(p for p in SRC_DIR.glob("*.md")
                   if not wanted or p.stem in wanted)
    if not files:
        print(f"No matching .md in {SRC_DIR}"
              + (f" for: {', '.join(sorted(wanted))}" if wanted else ""), file=sys.stderr)
        return 1

    font_uri = ensure_ttf().as_uri()
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    md = md_lib.Markdown(extensions=["tables", "fenced_code", "sane_lists", "attr_list"])

    for path in files:
        md.reset()
        html = build_html(md.convert(path.read_text(encoding="utf-8")), font_uri)
        out = OUT_DIR / out_name(path.stem)
        HTML(string=html, base_url=str(ROOT)).write_pdf(str(out))
        print("exported:", out.relative_to(ROOT))
    print("done ->", OUT_DIR.relative_to(ROOT))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
