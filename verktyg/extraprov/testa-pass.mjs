import { chromium } from 'playwright';
const BAS = 'http://127.0.0.1:4321';
const SC = process.env.HP_SKARM_DIR || process.cwd();
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await (await browser.newContext({ viewport: { width: 1100, height: 900 } })).newPage();
const fel = [];
page.on('pageerror', e => fel.push('pageerror: ' + e.message));
const skarmar = { 'ht2023-2': [7, 32], 'ht2023-4': [1, 34] };
for (const id of process.argv.slice(2)) {
  await page.goto(BAS + '/extra/' + id);
  await page.waitForSelector('#btn-start');
  await page.click('#btn-start');
  await page.waitForSelector('.pq-card');
  const n = await page.locator('.pq-dot').count();
  const trasiga = [];
  for (let i = 0; i < n; i++) {
    await page.locator('.pq-dot').nth(i).click();
    await page.waitForTimeout(60);
    const b = await page.evaluate(() => [...document.querySelectorAll('#prov-root img')].map(im => ({ src: im.getAttribute('src'), ok: im.complete && im.naturalWidth > 0 })));
    for (const x of b) if (!x.ok) trasiga.push((i + 1) + ':' + x.src);
    if ((skarmar[id] || []).includes(i)) await page.screenshot({ path: SC + `/skarm-${id}-q${i + 1}.png`, fullPage: true });
    await page.locator('.pq-opt').nth(0).click();
  }
  page.once('dialog', d => d.accept());
  await page.click('#btn-submit');
  await page.waitForSelector('.pq-result-head');
  await page.waitForTimeout(400);
  const expl = await page.locator('.pq-res-expl:not(.pq-res-expl--saknas)').count();
  const saknas = await page.locator('.pq-res-expl--saknas').count();
  console.log(id, 'frågor:', n, 'förklaringar:', expl, 'saknas:', saknas, 'trasiga bilder:', trasiga.length ? trasiga : 'inga');
}
await page.goto(BAS + '/extra');
console.log('rubriker på /extra:', await page.locator('h2').allTextContents());
console.log('fel:', fel.length ? fel : 'inga');
await browser.close();
