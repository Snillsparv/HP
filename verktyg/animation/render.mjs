// Renderar en deterministisk animation (styrd av window.SEEK) bildruta för
// bildruta. Använd:
//   node verktyg/animation/render.mjs <fil.html> <längd_s> probe
//   node verktyg/animation/render.mjs <fil.html> <längd_s> full <utnamn>
// Exempel:
//   node verktyg/animation/render.mjs anim.html 19 full ordtraning-animation
import { chromium } from '@playwright/test';
import { mkdirSync, rmSync } from 'node:fs';

const SC = '/tmp/claude-0/-home-user-HP/3c43ea54-e9ce-53f4-8b83-bbb79026c93d/scratchpad';
const FPS = 30;
const [file, durArg, mode, outname] = process.argv.slice(2);
const DURATION = parseFloat(durArg);
if (!file || !DURATION || !mode) { console.error('användning: render.mjs <fil> <längd> probe|full [utnamn]'); process.exit(1); }

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 540, height: 960 }, deviceScaleFactor: 2 });
await page.goto('file:///home/user/HP/verktyg/animation/' + file);
await page.evaluate(() => window.READY);

if (mode === 'probe') {
  const times = [0.4, 0.25 * DURATION, 0.5 * DURATION, 0.75 * DURATION, 0.9 * DURATION, DURATION - 0.3];
  for (const t of times) {
    await page.evaluate(tt => window.SEEK(tt), t);
    await page.screenshot({ path: `${SC}/probe-${t.toFixed(2)}.png` });
  }
  console.log('provbilder klara:', times.map(t => t.toFixed(2)).join(', '));
} else {
  const dir = `${SC}/frames-${outname}`;
  rmSync(dir, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });
  const n = Math.round(DURATION * FPS);
  for (let i = 0; i < n; i++) {
    await page.evaluate(tt => window.SEEK(tt), i / FPS);
    await page.screenshot({ path: `${dir}/f${String(i).padStart(4, '0')}.png` });
    if (i % 60 === 0) console.log('ruta', i, 'av', n);
  }
  console.log('alla rutor klara:', dir);
}
await browser.close();
