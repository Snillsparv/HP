// Playwright-test av fokuserad träning mot lokal server på 4321 (mobilvy).
// Kör: HP_SKARM_DIR=/tmp node verktyg/fokus/testa-fokus.mjs
import { chromium } from 'playwright';
const BAS = 'http://127.0.0.1:4321';
const SC = process.env.HP_SKARM_DIR || process.cwd();
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const ctx = await browser.newContext({ viewport: { width: 420, height: 860 }, isMobile: true, ignoreHTTPSErrors: true });
const page = await ctx.newPage();
const fel = [];
page.on('pageerror', e => fel.push('pageerror: ' + e.message));
page.on('console', m => { if (m.type() === 'error') fel.push('console: ' + m.text()); });

await page.goto(BAS + '/trana/fokus');
await page.screenshot({ path: SC + '/fokus-val.png', fullPage: true });
console.log('chips delprov:', await page.locator('.fokus-chip:not(.fokus-chip--typ)').count(), 'typchips:', await page.locator('.fokus-chip--typ').count());
console.log('svagheter-knapp disabled:', await page.locator('button[data-lage="svagheter"]').isDisabled());

// Runda på XYZ algebra
await page.click('.fokus-chip--typ[data-val="xyz:algebra"]');
await page.waitForSelector('.pq-card');
console.log('url:', page.url());
const n = Number((await page.locator('.pq-progress').textContent()).match(/av (\d+)/)[1]);
console.log('frågor i rundan:', n);
for (let i = 0; i < n; i++) {
  await page.waitForSelector('.pq-opt:not([disabled])');
  if (i === 1) await page.screenshot({ path: SC + '/fokus-fraga.png', fullPage: true });
  await page.locator('.pq-opt').nth(i % 4).click();
  await page.waitForSelector('#btn-nasta');
  if (i === 1) { await page.waitForTimeout(1500); await page.screenshot({ path: SC + '/fokus-svar.png', fullPage: true }); console.log('katex renderat:', await page.locator('.katex').count()); }
  const fb = await page.locator('.fokus-fb').textContent();
  const expl = await page.locator('.pq-res-expl').count();
  if (i < 2) console.log('feedback:', fb.trim().slice(0, 60), '| förklaring:', expl);
  await page.click('#btn-nasta');
}
await page.waitForSelector('.pq-result-head');
await page.screenshot({ path: SC + '/fokus-sammanf.png', fullPage: true });
console.log('resultat:', (await page.locator('.pq-score').textContent()).trim(), '| rader:', await page.locator('.pq-res').count());
console.log('rekommendationer:', await page.locator('.fokus-rek a').evaluateAll(as => as.map(a => a.getAttribute('href') + ' (' + a.textContent.trim() + ')')));
await page.locator('.pq-res').first().click();
console.log('detalj synlig:', await page.locator('.pq-res-detail').first().isVisible());

// DTK-runda: diagram och gruppinfo
await page.goto(BAS + '/trana/fokus');
await page.click('button.fokus-start[data-lage="delprov"][data-val="dtk"]');
await page.waitForSelector('.pq-card');
console.log('dtk progress:', (await page.locator('.pq-progress').textContent()).trim(), '| diagram:', await page.locator('.dtk-diagram-img').count());
await page.screenshot({ path: SC + '/fokus-dtk.png', fullPage: true });
await page.locator('.pq-opt').nth(0).click(); await page.waitForSelector('#btn-nasta');
page.once('dialog', d => d.accept());
await page.click('#btn-avbryt');
await page.waitForSelector('.pq-result-head');
console.log('avbrutet resultat:', (await page.locator('.pq-score').textContent()).trim());

// LÄS-runda: texten visas och kan fällas ihop
await page.goto(BAS + '/trana/fokus');
await page.click('button.fokus-start[data-lage="delprov"][data-val="las"]');
await page.waitForSelector('.pq-card');
console.log('las-box:', await page.locator('.las-box').count(), 'titel:', (await page.locator('.las-title').textContent()).trim().slice(0, 40));
await page.click('#las-toggle');
console.log('ihopfälld:', await page.locator('.las-box--closed').count());
await page.locator('.pq-opt').nth(1).click(); await page.waitForSelector('#btn-nasta'); await page.click('#btn-nasta');
await page.waitForSelector('.pq-card');
console.log('nästa fråga fortfarande ihopfälld:', await page.locator('.las-box--closed').count());

// Tillbaka: styrkekartan ska nu ha data (gästsession)
await page.goto(BAS + '/trana/fokus');
console.log('karta-rader:', await page.locator('.fokus-karta-rad').count(), '| svagheter-knapp disabled:', await page.locator('button[data-lage="svagheter"]').isDisabled());
console.log('kartatext:', (await page.locator('.fokus-karta-rad').first().textContent()).replace(/\s+/g, ' ').trim());
await page.screenshot({ path: SC + '/fokus-val2.png', fullPage: true });

// Direktlänk
await page.goto(BAS + '/trana/fokus?lage=typ&val=mek:2');
await page.waitForSelector('.pq-card');
console.log('direktlänk rubrik:', (await page.locator('.prov-section-tag').textContent()).trim());

// Mina svagheter efter tillräckligt med data
await page.goto(BAS + '/trana/fokus?lage=svagheter');
await page.waitForSelector('.pq-card, .tip-box.warning');
console.log('svagheter:', await page.locator('.pq-card').count() ? (await page.locator('.prov-section-tag').textContent()).trim() : (await page.locator('.tip-box.warning').textContent()).trim());

console.log('fel:', fel.length ? fel : 'inga');
await browser.close();
