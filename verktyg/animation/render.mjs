// Renderar animationen bildruta för bildruta. Använd:
//   node verktyg/animation/render.mjs probe   -> sex provbilder
//   node verktyg/animation/render.mjs full    -> alla 570 rutor till frames/
import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';

const SC = '/tmp/claude-0/-home-user-HP/3c43ea54-e9ce-53f4-8b83-bbb79026c93d/scratchpad';
const FPS = 30, DURATION = 19.0;
const mode = process.argv[2] || 'probe';

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await browser.newPage({ viewport: { width: 540, height: 960 }, deviceScaleFactor: 2 });
await page.goto('file:///home/user/HP/verktyg/animation/anim.html');
await page.evaluate(() => window.READY);

if (mode === 'probe') {
  for (const t of [0.5, 2.6, 6.0, 12.0, 15.3, 17.6]) {
    await page.evaluate(tt => window.SEEK(tt), t);
    await page.screenshot({ path: `${SC}/probe-${t.toFixed(1)}.png` });
  }
  console.log('provbilder klara');
} else {
  mkdirSync(`${SC}/frames`, { recursive: true });
  const n = Math.round(DURATION * FPS);
  for (let i = 0; i < n; i++) {
    await page.evaluate(tt => window.SEEK(tt), i / FPS);
    await page.screenshot({ path: `${SC}/frames/f${String(i).padStart(4, '0')}.png` });
    if (i % 60 === 0) console.log('ruta', i, 'av', n);
  }
  console.log('alla rutor klara');
}
await browser.close();
