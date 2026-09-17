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
ok(nSnabb === 18, 'snabbkollen har 18 frågor');
ok(await page.locator('.fokus-knappar .fokus-start[data-lage="delprov"]').count() === 1, 'kvittot leder vidare till Fortsätt med ett delprov');
ok((await page.locator('.fokus-sammanf-rad').count()) >= 5, 'kvittot visar andel rätt per delprov');
console.log('  snabbkollskvitto:', (await page.locator('.fokus-knappar .btn-primary').textContent()).trim(), '|', (await page.locator('.fokus-sammanf-rad').first().textContent()).replace(/\s+/g, ' ').trim());

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
ok(await page.locator('.pq-res:has-text("XYZ algebra")').count() === 7, 'sju av typen i rundan');
ok(await page.locator('.pq-res').count() - 7 === 3, 'tre insprängda ur samma delprov');
console.log('  styrkerad:', (await page.locator('.fokus-sammanf-rad').first().textContent()).replace(/\s+/g, ' ').trim());
await page.locator('.pq-res').first().click();
ok(await page.locator('.pq-res-detail').first().isVisible(), 'detalj öppnas');
ok((await page.locator('.pq-res').first().getAttribute('aria-expanded')) === 'true', 'aria-expanded sätts');
console.log('  rekommendationer:', await page.locator('.fokus-rek a').evaluateAll(as => as.map(a => a.getAttribute('href'))));

// 4. Med historik: svagheter-knappen finns, kartan har rader, bannern på Träna-sidan.
await page.goto(BAS + '/trana/fokus');
console.log('  primär knapp:', (await page.locator('.fokus-block--svag .btn').textContent()).trim());
// Bygg underlag på tre typer med två typrundor till, sedan öppnas Mina svagheter.
for (const val of ['kva:algebra', 'mek:2']) {
  await page.goto(BAS + '/trana/fokus?lage=typ&val=' + val);
  await page.waitForSelector('.pq-card');
  await svaraAlla(i => i % 3);
}
await page.goto(BAS + '/trana/fokus');
ok(await page.locator('button[data-lage="svagheter"]').count() === 1, 'svagheter-knapp när tre typer har underlag');
console.log('  karta-rader:', await page.locator('.fokus-karta-rad').count(), '|', (await page.locator('.fokus-karta-rad').first().textContent()).replace(/\s+/g, ' ').trim());
ok(await page.locator('.fokus-karta-etikett').count() >= 1, 'de svagaste typerna är märkta på kartan');
await page.screenshot({ path: SC + '/fokus-val2.png', fullPage: true });
await page.goto(BAS + '/trana');
console.log('  banner:', (await page.locator('.ord-banner').first().textContent()).replace(/\s+/g, ' ').trim().slice(0, 90));

// 5. Mina svagheter: runda med insprängning efter fel svar (Vet inte).
await page.goto(BAS + '/trana/fokus?lage=svagheter');
await page.waitForSelector('.pq-card');
const nFore = Number((await page.locator('.pq-progress').textContent()).match(/av (\d+)/)[1]);
ok(await page.locator('.fokus-sett').count() >= 1, 'rundan berättar varför uppgiften kom');
console.log('  skäl:', (await page.locator('.fokus-sett').first().textContent()).trim());
await page.click('#btn-hoppa');
await page.waitForSelector('#btn-nasta');
ok(await page.locator('#btn-fler').count() === 0, 'ingen insprängning mitt i rundan');
if (await page.locator('#btn-mer').count()) {
  await page.click('#btn-mer');
  ok((await page.evaluate(() => localStorage.getItem('hp-fokus-nasta'))) !== null, 'Mer av det här nästa runda sparas');
} else console.log('  (ingen Mer-knapp på ORD eller LÄS)');
const nEfter = Number((await page.locator('.pq-progress').textContent()).match(/av (\d+)/)[1]);
ok(nEfter === nFore, 'rundan växer inte');

// 6. Återupptagning: ladda om utan parametrar och fortsätt där man var.
await page.click('#btn-nasta');
await page.waitForSelector('.pq-card');
const progFore = (await page.locator('.pq-progress').textContent()).trim();
await page.reload();
await page.waitForSelector('.pq-card');
ok((await page.locator('.pq-progress').textContent()).trim() === progFore, 'rundan återupptas efter omladdning av samma adress');
await page.goto(BAS + '/trana/fokus?lage=svagheter');
await page.waitForSelector('.pq-card');
ok((await page.locator('.pq-progress').textContent()).trim() === progFore, 'samma läge utan val återupptar också');
await page.click('#btn-avbryt');
await page.waitForSelector('#btn-avbryt-ja');
ok(await page.locator('.fokus-avbryt').count() === 1, 'inline-bekräftelse vid avbryt');
await page.click('#btn-avbryt-ja');
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
await page.click('#btn-avbryt');
await page.waitForSelector('#btn-avbryt-ja');
await page.click('#btn-avbryt-ja');
await page.waitForSelector('.pq-result-head');
ok(await page.locator('a:has-text("Tillbaka till rättningen")').count() === 0, 'ingen tillbaka-knapp utan provresultat');
// Gör provet som gäst, sedan finns knappen.
await page.goto(BAS + '/extra/ht2012-2');
await page.waitForSelector('#btn-start'); await page.click('#btn-start'); await page.waitForSelector('.pq-card');
const nProv = await page.locator('.pq-dot').count();
for (let i = 0; i < nProv; i++) { await page.locator('.pq-dot').nth(i).click(); await page.locator('.pq-opt').nth(0).click(); }
page.once('dialog', d => d.accept());
await page.click('#btn-submit');
await page.waitForSelector('.pq-result-head');
await page.waitForTimeout(500);
await page.locator('.pq-res--no').first().click();
const lankText = (await page.locator('.pq-res-trana a').first().textContent()).trim();
console.log('  knapp i rättningen:', lankText, await page.locator('.pq-res-trana a').first().getAttribute('href'));
ok(/^Fler (som den här|om|ORD|LÄS)/.test(lankText), 'knappens text följer läget');
await page.locator('.pq-res-trana a').first().click();
await page.waitForSelector('.pq-card');
await page.locator('.pq-opt').nth(0).click();
await page.waitForSelector('#btn-nasta');
await page.click('#btn-avbryt');
await page.waitForSelector('#btn-avbryt-ja');
await page.click('#btn-avbryt-ja');
await page.waitForSelector('.pq-result-head');
ok((await page.locator('a:has-text("Tillbaka till rättningen")').getAttribute('href')) === '/extra/ht2012-2?review=1', 'tillbaka till rättningen när provet finns');
await page.goto(BAS + '/trana/fokus?lage=typ&val=xyz:finnsinte');
await page.waitForSelector('#fokus-felruta');
ok((await page.locator('#fokus-felruta').textContent()).includes('inte finns'), 'ogiltig länk förklaras');
await page.goto(BAS + '/trana/fokus?lage=svagheter&val=%22%3E%3Cimg%20src%3Dx%20onerror%3D%22window.__xss%3D1%22%3E');
await page.waitForSelector('.pq-card, #fokus-felruta');
ok(!(await page.evaluate(() => window.__xss)), 'val från adressen körs aldrig som HTML');

// 9. Kategoriläget och ORD-kvittot.
await page.goto(BAS + '/trana/fokus?lage=kategori&val=sannolikhet');
await page.waitForSelector('.pq-card');
ok((await page.locator('.prov-section-tag').textContent()).trim() === 'Om sannolikhet', 'kategoriläget har rubrik');
await page.goto(BAS + '/trana/fokus?lage=typ&val=ord');
await page.waitForSelector('.pq-card');
await svaraAlla(i => i % 5);
ok((await page.locator('.fokus-knappar .btn-primary').textContent()).trim() === 'Kör ordträningen', 'efter ORD är ordträningen primär');

console.log('fel:', fel.length ? fel : 'inga');
await browser.close();
process.exit(fel.length ? 1 : 0);
