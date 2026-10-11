// Renderar filmen i film.html bildruta för bildruta. Animationen är
// deterministisk och styrs helt av window.SEEK(t), så varje ruta blir exakt
// densamma oavsett hur lång tid skärmdumpen tar.
//
//   node verktyg/film/render.mjs probe <utkatalog> 0.5 3.2 8.0 ...
//   node verktyg/film/render.mjs full <utkatalog> [fps] [från_s] [till_s]
//
// Sedan: verktyg/film/bygg.sh <utkatalog> <ut.mp4> (lägger på ljudet).
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// Playwright finns globalt i webbmiljön men inte i repots node_modules.
let chromium;
try { ({ chromium } = await import('playwright')); }
catch { ({ chromium } = await import('/opt/node22/lib/node_modules/playwright/index.mjs')); }

const HERE = dirname(fileURLToPath(import.meta.url));
const [mode, out, ...rest] = process.argv.slice(2);
if (!mode || !out) {
  console.error('användning: render.mjs probe <utkatalog> <t...> | full <utkatalog> [fps] [från] [till]');
  process.exit(1);
}
mkdirSync(out, { recursive: true });

const browser = await chromium.launch({
  executablePath: process.env.HP_CHROMIUM || '/opt/pw-browsers/chromium',
  // Utan checker-imaging väntar rastreringen på att stora bilder avkodas, i
  // stället för att lämna tomma rutor när sidan hoppar långt mellan bilderna.
  args: ['--font-render-hinting=none', '--disable-lcd-text', '--disable-checker-imaging'],
});
const page = await browser.newPage({ viewport: { width: 540, height: 960 }, deviceScaleFactor: 2 });
page.on('console', m => { if (m.type() === 'error') console.error('sidfel:', m.text()); });
page.on('pageerror', e => console.error('sidfel:', e.message));
await page.goto('file://' + join(HERE, 'film.html'));
await page.evaluate(() => window.READY);
const DURATION = await page.evaluate(() => window.DURATION);
// Skärmdump direkt via DevTools-protokollet: förlustfri PNG men med snabbare
// komprimering, ungefär sju gånger snabbare än page.screenshot.
const cdp = await page.context().newCDPSession(page);
async function bild(fil) {
  const { data } = await cdp.send('Page.captureScreenshot', { format: 'png', optimizeForSpeed: true, clip: { x: 0, y: 0, width: 540, height: 960, scale: 2 } });
  writeFileSync(fil, Buffer.from(data, 'base64'));
}

if (mode === 'probe') {
  for (const s of rest) {
    const t = parseFloat(s);
    await page.evaluate(tt => window.SEEK(tt), t);
    await bild(join(out, `probe-${t.toFixed(2)}.png`));
  }
  console.log('provbilder klara:', rest.join(', '));
} else {
  const fps = parseFloat(rest[0] || '60');
  const from = parseFloat(rest[1] || '0');
  const to = parseFloat(rest[2] || String(DURATION));
  const n0 = Math.round(from * fps), n1 = Math.round(to * fps);
  for (let i = n0; i < n1; i++) {
    await page.evaluate(tt => window.SEEK(tt), i / fps);
    await bild(join(out, `f${String(i).padStart(5, '0')}.png`));
    if (i % 120 === 0) console.log('ruta', i, 'av', n1);
  }
  console.log('rutor klara:', out);
}
await browser.close();
