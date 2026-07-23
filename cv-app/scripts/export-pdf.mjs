// Generate print-ready CV PDFs (EN + KO) from the built site.
//
//   npm run pdf   →   vite build && node scripts/export-pdf.mjs
//
// Why headless render instead of browser Ctrl+P: at A4 width Bootstrap's
// responsive grid collapses to its mobile layout (huge images, broken
// alignment). We render the DESKTOP layout in headless Chromium at a fixed
// width so the columns stay intact, hide screen-only chrome + videos,
// inject a clickable "original CV" link at the top, and write two files per
// language into ./exports (gitignored):
//   *.pdf     — single continuous page (matches the on-screen layout)
//   *_A4.pdf  — A4-aspect multipage (for printing on paper)
//
// One-time setup (downloads the browser):  npx playwright install chromium
import { preview } from 'vite';
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.resolve(root, 'exports');
const PUBLIC_URL = process.env.PUBLIC_URL || 'https://khlee369.github.io/CV/';

const W = 1180; // desktop paper width (px)
const H = Math.round((W * 297) / 210); // A4 aspect at desktop scale

const cleanupCSS = `
  .resume-lang-toggle, .footer { display: none !important; }
  video { display: none !important; }
  div:has(> .webtoonme-mediabox > video) { display: none !important; }
  .resume-wrapper { box-shadow: none !important; }
  html, body, .theme-bg-light, .resume-wrapper { background: #fff !important; }
  .item, .resume-intro { break-inside: avoid; page-break-inside: avoid; }
`;

const langs = [
  { code: 'en', button: 'English', file: 'Kwangho_Lee_CV_EN' },
  { code: 'ko', button: '한국어', file: 'Kwangho_Lee_CV_KO' },
];

let server;
let browser;
try {
  server = await preview({ root, preview: { port: 4173, strictPort: false } });
  const base = server.resolvedUrls.local[0];
  console.log('preview:', base);

  await mkdir(outDir, { recursive: true });
  browser = await chromium.launch();

  for (const { button, file } of langs) {
    const page = await browser.newPage({
      viewport: { width: W, height: 1500 },
      deviceScaleFactor: 2,
    });
    await page.goto(base, { waitUntil: 'networkidle', timeout: 60000 });

    try {
      await page.getByRole('button', { name: button }).click({ timeout: 3000 });
    } catch {
      /* default language already shown */
    }

    await page.addStyleTag({ content: cleanupCSS });
    await page.emulateMedia({ media: 'screen' }); // keep desktop CSS, not print CSS
    await page.evaluate(async () => {
      await document.fonts.ready; // ensure the web font is loaded before capture
    });

    // Clickable "original CV" link at the very top (PDF only).
    await page.evaluate((url) => {
      const wrap = document.querySelector('.resume-wrapper');
      if (!wrap) return;
      const bar = document.createElement('div');
      bar.style.cssText =
        'font-size:11.5px;text-align:right;margin:0 0 14px;color:#6b7280;';
      bar.innerHTML =
        '원본 CV 링크: <a href="' +
        url +
        '" style="color:#54b689;font-weight:600;text-decoration:underline;">' +
        url +
        '</a>';
      wrap.insertBefore(bar, wrap.firstChild);
    }, PUBLIC_URL);

    await page.waitForTimeout(500);

    const fullHeight = await page.evaluate(() => document.documentElement.scrollHeight);

    // single continuous page — matches the on-screen layout exactly
    await page.pdf({
      path: path.join(outDir, `${file}.pdf`),
      printBackground: true,
      width: `${W}px`,
      height: `${fullHeight}px`,
      margin: { top: '0', bottom: '0', left: '0', right: '0' },
    });

    // A4-aspect multipage — for printing on paper
    await page.pdf({
      path: path.join(outDir, `${file}_A4.pdf`),
      printBackground: true,
      width: `${W}px`,
      height: `${H}px`,
      margin: { top: '40px', bottom: '40px', left: '24px', right: '24px' },
    });

    await page.close();
    console.log('exported:', `${file}.pdf`, '+', `${file}_A4.pdf`);
  }
} catch (err) {
  console.error(err);
  process.exitCode = 1;
} finally {
  if (browser) await browser.close().catch(() => {});
  if (server) await new Promise((resolve) => server.httpServer.close(resolve));
}
console.log('done →', outDir);
process.exit(process.exitCode ?? 0);
