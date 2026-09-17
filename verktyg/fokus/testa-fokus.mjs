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
page.on('console', m => { if (m.type() === 'error' && !/ERR_CERT|ERR_TOO_MANY|status of 400/.test(m.text())) fel.push('console: ' + m.text()); });
const ok = (villkor, text) => { if (!villkor) { fel.push('KONTROLL: ' + text); console.log('  FEL:', text); } else console.log('  ok:', text); };

async function svaraAlla(valjAlternativ = i => i % 4) {
  const m = (await page.locator('.pq-progress').textContent()).match(/Uppgift (\d+) av (\d+)/);
  const n = Number(m[2]);
  for (let i = Number(m[1]) - 1; i < n; i++) {
    await page.waitForSelector('.pq-opt:not([disabled])');
    await page.locator('.pq-opt').nth(valjAlternativ(i)).click();
    await page.waitForSelector('#btn-nasta');
    await page.click('#btn-nasta');
  }
  await page.waitForSelector('.pq-result-head');
  return n;
}

// 1. Utan historik: snabbkollen är ingången.
await page.goto(BAS + '/trana/fokus');
await page.screenshot({ path: SC + '/fokus-val.png', fullPage: true });
ok(await page.locator('button[data-lage="snabbkoll"]').count() === 1, 'snabbkoll-knapp visas utan historik');
ok(await page.locator('button[data-lage="svagheter"]').count() === 0, 'ingen svagheter-knapp utan historik');
ok(await page.locator('.fokus-chip:not(.fokus-chip--typ)').count() === 7, 'sju delprovschips');
ok(await page.locator('.fokus-chip--typ[data-val$=":ovrigt"]').count() === 0, 'inga övrigt-chips');
ok(await page.locator('details.fokus-details').count() === 1, 'typchipsen ligger hopfällda');

// 2. Snabbkollen: hela vägen till "Träna på mina svagheter".
await page.click('button[data-lage="snabbkoll"]');
await page.waitForSelector('.pq-card');
ok((await page.locator('.prov-section-tag').textContent()).trim().startsWith('Snabbkoll ·'), 'rubriken är Snabbkoll med antal');
const nSnabb = await svaraAlla(i => i % 2);
console.log('  snabbkoll frågor:', nSnabb);
ok(nSnabb >= 11 && nSnabb <= 14, 'snabbkollen har omkring tolv frågor');
ok(await page.locator('.fokus-knappar .fokus-start[data-lage="svagheter"]').count() === 1, 'kvittot leder vidare till Mina svagheter');

// 3. Runda på XYZ algebra med direkt rättning, styrkerad och kvitto.
await page.goto(BAS + '/trana/fokus');
await page.click('details.fokus-details summary');
await page.click('.fokus-chip--typ[data-val="xyz:algebra"]');
await page.waitForSelector('.pq-card');
ok(page.url().includes('lage=typ&val=xyz%3Aalgebra'), 'adressen speglar rundan');
const n1 = Number((await page.locator('.pq-progress').textContent()).match(/av (\d+)/)[1]);
ok(n1 === 10, 'tio frågor i rundan');
await page.locator('.pq-opt').nth(0).click();
await page.waitForSelector('#btn-nasta');
await page.waitForTimeout(1500);
await page.screenshot({ path: SC + '/fokus-svar.png', fullPage: true });
ok(await page.locator('.pq-res-expl').count() === 1, 'förklaring visas efter svar');
ok(await page.locator('.fokus-efter').count() === 0, 'ingen siffer- eller temporad per svar');
ok(await page.locator('#btn-fler').count() === 0, 'ingen insprängning i läge typ');
console.log('  katex renderat:', await page.locator('.katex').count());
await page.click('#btn-nasta');
await svaraAlla();
await page.screenshot({ path: SC + '/fokus-sammanf.png', fullPage: true });
ok(await page.locator('.pq-res').count() === 10, 'tio rader i kvittot');
ok(/Du tog \d+:\d\d på 10 uppgifter, på provet har du cirka/.test(await page.locator('.pq-result-head').textContent()), 'tid för hela rundan i kvittot');
ok(await page.locator('.fokus-knappar .btn').count() <= 2, 'högst två knappar i kvittot');
ok(await page.locator('a:has-text("Klar för idag")').count() === 0, 'ingen Klar för idag');
ok(await page.locator('.fokus-sammanf-rad').count() >= 1, 'styrkan före och efter visas per typ');
console.log('  styrkerad:', (await page.locator('.fokus-sammanf-rad').first().textContent()).replace(/\s+/g, ' ').trim());
await page.locator('.pq-res').first().click();
ok(await page.locator('.pq-res-detail').first().isVisible(), 'detalj öppnas');
ok((await page.locator('.pq-res').first().getAttribute('aria-expanded')) === 'true', 'aria-expanded sätts');
console.log('  rekommendationer:', await page.locator('.fokus-rek a').evaluateAll(as => as.map(a => a.getAttribute('href'))));

// 4. Med historik: svagheter-knappen finns, kartan har rader, bannern på Träna-sidan.
await page.goto(BAS + '/trana/fokus');
ok(await page.locator('button[data-lage="svagheter"]').count() === 1, 'svagheter-knapp med historik');
console.log('  karta-rader:', await page.locator('.fokus-karta-rad').count(), '|', (await page.locator('.fokus-karta-rad').first().textContent()).replace(/\s+/g, ' ').trim());
ok(await page.locator('.fokus-karta-etikett').count() >= 1, 'de svagaste typerna är märkta på kartan');
await page.screenshot({ path: SC + '/fokus-val2.png', fullPage: true });
await page.goto(BAS + '/trana');
console.log('  banner:', (await page.locator('.ord-banner').first().textContent()).replace(/\s+/g, ' ').trim().slice(0, 90));

// 5. Mina svagheter: runda med insprängning efter fel svar (Vet inte).
await page.goto(BAS + '/trana/fokus?lage=svagheter');
await page.waitForSelector('.pq-card');
const nFore = Number((await page.locator('.pq-progress').textContent()).match(/av (\d+)/)[1]);
await page.click('#btn-hoppa');
await page.waitForSelector('#btn-nasta');
ok(await page.locator('#btn-fler').count() === 1, 'Fler av den här typen efter fel');
await page.click('#btn-fler');
await page.waitForSelector('.fokus-nav-status:has-text("kommer strax")');
await page.click('#btn-nasta');
await page.waitForSelector('.pq-card');
const nEfter = Number((await page.locator('.pq-progress').textContent()).match(/av (\d+)/)[1]);
ok(nEfter > nFore, `rundan växte från ${nFore} till ${nEfter}`);
ok(await page.locator('.fokus-sett').count() >= 1, 'rundan berättar varför uppgiften kom');
await page.click('#btn-hoppa');
await page.waitForSelector('#btn-nasta');
ok(await page.locator('#btn-fler').count() === 0, 'högst en insprängning per runda');

// 6. Återupptagning: ladda om utan parametrar och fortsätt där man var.
await page.click('#btn-nasta');
await page.waitForSelector('.pq-card');
const progFore = (await page.locator('.pq-progress').textContent()).trim();
await page.goto(BAS + '/trana/fokus');
await page.waitForSelector('.pq-card');
ok((await page.locator('.pq-progress').textContent()).trim() === progFore, 'rundan återupptas efter omladdning');
page.once('dialog', d => d.accept());
await page.click('#btn-avbryt');
await page.waitForSelector('.pq-result-head');

// 7. DTK-runda: diagram hålls ihop; LÄS: texten kan fällas ihop.
await page.goto(BAS + '/trana/fokus?lage=delprov&val=dtk');
await page.waitForSelector('.pq-card');
console.log('  dtk:', (await page.locator('.pq-progress').textContent()).trim(), '| diagram:', await page.locator('.dtk-diagram-img').count());
await page.screenshot({ path: SC + '/fokus-dtk.png', fullPage: true });
await page.goto(BAS + '/trana/fokus?lage=delprov&val=las');
await page.waitForSelector('.pq-card');
ok(await page.locator('.las-box').count() === 1, 'LÄS-texten visas');
await page.click('#las-toggle');
ok(await page.locator('.las-box--closed').count() === 1, 'texten kan fällas ihop');

// 8. Direktlänk med fran leder tillbaka till rättningen; ogiltig länk ger tydligt fel.
await page.goto(BAS + '/trana/fokus?lage=typ&val=mek:2&fran=extra-ht2012-2');
await page.waitForSelector('.pq-card');
ok((await page.locator('.prov-section-tag').textContent()).trim() === 'MEK med två luckor', 'direktlänk till typ');
await page.locator('.pq-opt').nth(0).click();
await page.waitForSelector('#btn-nasta');
page.once('dialog', d => d.accept());
await page.click('#btn-avbryt');
await page.waitForSelector('.pq-result-head');
ok((await page.locator('a:has-text("Tillbaka till rättningen")').getAttribute('href')) === '/extra/ht2012-2?review=1', 'tillbaka till rättningen');
await page.goto(BAS + '/trana/fokus?lage=typ&val=xyz:finnsinte');
await page.waitForSelector('#fokus-felruta');
ok((await page.locator('#fokus-felruta').textContent()).includes('inte finns'), 'ogiltig länk förklaras');
await page.goto(BAS + '/trana/fokus?lage=svagheter&val=%22%3E%3Cimg%20src%3Dx%20onerror%3D%22window.__xss%3D1%22%3E');
await page.waitForSelector('.pq-card, #fokus-felruta');
ok(!(await page.evaluate(() => window.__xss)), 'val från adressen körs aldrig som HTML');

console.log('fel:', fel.length ? fel : 'inga');
await browser.close();
process.exit(fel.length ? 1 : 0);
