// Playwright-test av fokuserad träning och Din hjärnkarta mot lokal server på
// 4321 (mobilvy): kallstarten, snabbkollen, Träna härnäst, etiketterna och
// arket, rättningen med före och efter, rundorna och kvittot.
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

async function gorPass(id, valj = i => i % 4) {
  await page.goto(BAS + '/extra/' + id);
  await page.waitForSelector('#btn-start'); await page.click('#btn-start'); await page.waitForSelector('.pq-card');
  const n = await page.locator('.pq-dot').count();
  for (let i = 0; i < n; i++) { await page.locator('.pq-dot').nth(i).click(); await page.locator('.pq-opt').nth(valj(i)).click(); }
  page.once('dialog', d => d.accept());
  await page.click('#btn-submit');
  await page.waitForSelector('.pq-result-head');
  await page.waitForSelector('#karta-sektion .hk-karta, .pq-analysis', { timeout: 20000 });
  await page.waitForTimeout(800);
}
const text = async sel => ((await page.locator(sel).first().textContent()) || '').replace(/\s+/g, ' ').trim();

// 1. Utan historik: den tomma kartan, ett provpass eller snabbkollen som ingång.
await page.goto(BAS + '/trana/fokus');
await page.screenshot({ path: SC + '/fokus-val.png', fullPage: true });
ok(await page.locator('.hk-kallstart').count() === 1, 'tom karta utan svar');
ok(await page.locator('.hk-etk').count() === 7, 'sju etiketter på den tomma kartan');
ok((await page.locator('.hk-etk.hk-gra').count()) === 7, 'alla etiketter är grå med ?');
ok((await text('.hk-kallstart')).includes('Kartan är tom än så länge.'), 'kallstartens text');
ok((await page.locator('.hk-kallstart .hk-knapp').getAttribute('href')) === '/extra#forsta-pass', 'Välj ett provpass går till /extra#forsta-pass');
ok(await page.locator('.hk-kallstart a[href="/trana/fokus?lage=snabbkoll"]').count() === 1, 'snabbkollen finns som länk');
ok(await page.locator('.hk-harnast').count() === 0, 'inget Träna härnäst utan svar');
ok(await page.locator('.fokus-block--svag, .fokus-karta-rad').count() === 0, 'de gamla blocken är borta');
ok(await page.locator('details.fokus-details').count() === 1, 'Välj själv ligger hopfällt');
ok((await text('details.fokus-details summary')).startsWith('Välj själv'), 'rubriken Välj själv');
ok(await page.locator('.fokus-chip:not(.fokus-chip--typ)').count() === 7, 'sju delprovschips');
ok(await page.locator('.fokus-chip--typ[data-val$=":ovrigt"]').count() === 0, 'inga övrigt-chips');
await page.goto(BAS + '/extra');
ok(await page.locator('a.hk-kallrad[href="#forsta-pass"]').count() === 1, '/extra: kallstartsraden skrollar till första passet');
ok(await page.locator('#forsta-pass').count() === 1, '/extra: första provpasskortet har id forsta-pass');
ok(await page.locator('.stat-ruta').count() === 3, '/extra: de tre statistikrutorna finns kvar');

// 2. Snabbkollen från kallstarten: 18 frågor, kvitto och sedan gissningen på kartan.
await page.goto(BAS + '/trana/fokus');
await page.click('.hk-kallstart a[href="/trana/fokus?lage=snabbkoll"]');
await page.waitForSelector('.pq-card');
ok((await page.locator('.prov-section-tag').textContent()).trim().startsWith('Snabbkoll ·'), 'rubriken är Snabbkoll med antal');
const nSnabb = await svaraAlla(i => i % 2);
console.log('  snabbkoll frågor:', nSnabb);
ok(nSnabb === 18, 'snabbkollen har 18 frågor');
ok(await page.locator('.fokus-knappar .fokus-start[data-lage="delprov"]').count() === 1, 'kvittot leder vidare till ett delprov');
ok((await page.locator('.fokus-sammanf-rad').count()) >= 5, 'kvittot visar andel rätt per delprov');
await page.goto(BAS + '/trana/fokus');
const gissning = await text('.hk-harnast');
console.log('  efter snabbkollen:', gissning.slice(0, 160));
ok(gissning.includes('Snabbkollen ger en första riktning, inte en karta.'), 'snabbkollen ger gissningen');
ok(/Gör ett (kvantitativt|verbalt) provpass →/.test(await text('.hk-harnast .hk-knapp')), 'knappen pekar på ett provpass');
ok(await page.locator('.hk-etk.hk-vinnare').count() === 0, 'ingen vinnare när alla axlar är grå');
ok(await page.locator('.hk-pil').count() === 0, 'ingen pil på osäkra axlar');

// 3. Runda på XYZ algebra via Välj själv, med direkt rättning och kvitto.
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
ok(await page.locator('#btn-fler').count() === 0, 'ingen insprängning i läge typ');
await page.click('#btn-nasta');
await svaraAlla();
await page.screenshot({ path: SC + '/fokus-sammanf.png', fullPage: true });
ok(await page.locator('.pq-res').count() === 10, 'tio rader i kvittot');
ok(/Du tog \d+:\d\d på 10 uppgifter, på provet har du cirka/.test(await page.locator('.pq-result-head').textContent()), 'tid för hela rundan i kvittot');
ok(await page.locator('.fokus-knappar .btn').count() <= 2, 'högst två knappar i kvittot');
ok(await page.locator('.fokus-sammanf-rad').count() >= 1, 'styrkan före och efter visas per typ');
ok(await page.locator('.pq-res:has-text("XYZ algebra")').count() === 7, 'sju av typen i rundan');
ok(await page.locator('.pq-res').count() - 7 === 3, 'tre insprängda ur samma delprov');
await page.locator('.pq-res').first().click();
ok(await page.locator('.pq-res-detail').first().isVisible(), 'detalj öppnas');
ok((await page.locator('.pq-res').first().getAttribute('aria-expanded')) === 'true', 'aria-expanded sätts');

// 4. Ett kvantitativt provpass: rättningen visar hur passet flyttade kartan.
await gorPass('ht2012-1', i => i % 3);
await page.screenshot({ path: SC + '/fokus-rattning.png', fullPage: true });
ok((await text('#karta-sektion h2')) === 'Så flyttade passet din karta', 'rättningen: rubriken Så flyttade passet din karta');
ok(await page.locator('.pq-analysis').count() === 0, 'rättningen: det gamla analysblocket visas inte');
const mening = await text('#karta-sektion .hk-mening');
console.log('  meningen:', mening);
ok(mening.length > 10, 'rättningen: en mening om passet');
ok(await page.locator('.res-rutor > div').count() === 4, 'rättningen: en ruta per delprov');
ok(/^Gå igenom (dina \d+ fel|ditt fel)|^Alla rätt/.test(await text('.res-felrad')), 'rättningen: felraden');
const knappHref = await page.locator('#karta-sektion .hk-harnast .hk-knapp').getAttribute('href');
console.log('  Träna härnäst i rättningen:', await text('#karta-sektion .hk-harnast .hk-knapp'), knappHref);
ok(/^\/trana\/fokus\?lage=(delprov|typ)&val=[a-z0-9:]+.*&fran=extra-ht2012-1$/.test(knappHref), 'rättningen: knappen har &fran=');
await page.locator('#karta-sektion .hk-etk[data-dp="xyz"]').click();
await page.waitForSelector('dialog.hk-ark[open]');
ok((await text('dialog.hk-ark h2')) === 'XYZ', 'arket öppnas för XYZ');
ok(await page.locator('dialog.hk-ark .hk-typ').count() >= 3, 'arket listar uppgiftstyperna');
ok(await page.locator('dialog.hk-ark .hk-typ small').count() <= 1, 'högst en rad har Mest att hämta');
ok((await page.locator('dialog.hk-ark .hk-typ').first().getAttribute('href')).includes('&fran=extra-ht2012-1'), 'arkets rader har &fran=');
await page.screenshot({ path: SC + '/fokus-ark.png' });
await page.keyboard.press('Escape');
await page.waitForTimeout(400);
ok(await page.locator('dialog.hk-ark[open]').count() === 0, 'Escape stänger arket');
await page.goto(BAS + '/extra/ht2012-1?review=1');
await page.waitForSelector('#karta-sektion .hk-karta, .pq-analysis', { timeout: 20000 });
ok((await text('#karta-sektion h2')) === 'Din hjärnkarta', 'granskningsläget: kartan utan före och efter');
ok(await page.locator('#karta-sektion .hk-forklaring').count() === 0, 'granskningsläget: ingen förklaring av före');

// 5. Med ett säkert delprov: Träna härnäst, etiketterna och arket på /trana/fokus.
await page.goto(BAS + '/trana/fokus');
await page.screenshot({ path: SC + '/fokus-val2.png', fullPage: true });
ok(await page.locator('.hk-etk').count() === 7, 'sju etiketter');
ok(await page.locator('.hk-etk.hk-vinnare').count() === 1, 'en vinnande etikett');
const pott = await text('.hk-harnast .hk-pott');
ok(/^(ca \+\d+ rätt att hämta|nära målet)$/.test(pott), 'pillen visar talet');
const vinnare = await page.locator('.hk-etk.hk-vinnare').getAttribute('data-dp');
const harnastHref = await page.locator('.hk-harnast .hk-knapp').getAttribute('href');
console.log('  Träna härnäst:', await text('.hk-harnast .hk-rubrik'), '|', pott, '|', harnastHref);
ok(harnastHref.includes(`val=${vinnare}`), 'knappen tränar den vinnande axeln');
ok(/Kör 10 [A-ZÄ]+‑uppgifter →/.test(await text('.hk-harnast .hk-knapp')), 'knappens text med hårt bindestreck');
ok(await page.locator('.hk-gra-rad').count() === 1, 'grå rad för ett osäkert delprov med svar');
await page.locator('.hk-etk[data-dp="kva"]').click();
await page.waitForSelector('dialog.hk-ark[open]');
ok(await page.locator('dialog.hk-ark .hk-ark-fot .hk-knapp').count() === 1, 'arket har huvudknappen i botten');
await page.click('dialog.hk-ark [data-hk-stang]');
await page.waitForTimeout(400);
ok(await page.locator('dialog.hk-ark[open]').count() === 0, '✕ stänger arket');
await page.locator('.hk-etk[data-dp="xyz"]').click();
await page.waitForSelector('dialog.hk-ark[open]');
const typHref = await page.locator('dialog.hk-ark .hk-typ').first().getAttribute('href');
await page.locator('dialog.hk-ark .hk-typ').first().click();
await page.waitForSelector('.pq-card');
ok(page.url().includes('lage=typ'), 'en rad i arket startar en typrunda (' + typHref + ')');
// Avsluta utan svar, annars återupptas rundan på /trana/fokus.
await page.click('#btn-avbryt');
await page.waitForSelector('.hk-harnast .hk-knapp');
await page.click('.hk-harnast .hk-knapp');
await page.waitForSelector('.pq-card');
ok(new URL(page.url()).searchParams.get('lage') === new URL(BAS + harnastHref).searchParams.get('lage'), 'Träna härnäst startar rundan direkt');
await svaraAlla(i => i % 3);
await page.goto(BAS + '/trana');
const banner = await text('.fokus-banner');
console.log('  banner:', banner);
ok(banner.startsWith('Träna härnäst:'), 'bannern på Träna-sidan visar Träna härnäst');
ok((await page.locator('.fokus-banner').getAttribute('href')).startsWith('/trana/fokus?lage='), 'bannern startar rundan');
await page.goto(BAS + '/extra');
ok(await page.locator('.hk-kort .hk-karta').count() === 1, '/extra: kompakta kortet med kartan');
ok(await page.locator('.hk-kort a[href="/trana/fokus"]').count() === 1, '/extra: Öppna träningen');
// Underlag på fler typer, så att den gamla länken lage=svagheter fungerar.
for (const val of ['kva:algebra', 'mek:2']) {
  await page.goto(BAS + '/trana/fokus?lage=typ&val=' + val);
  await page.waitForSelector('.pq-card');
  await svaraAlla(i => i % 3);
}

// 6. Den gamla länken lage=svagheter: runda med insprängning efter fel svar (Vet inte).
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

// 7. Återupptagning: ladda om utan parametrar och fortsätt där man var.
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

// 8. DTK-runda: diagram hålls ihop; LÄS: texten kan fällas ihop.
await page.goto(BAS + '/trana/fokus?lage=delprov&val=dtk');
await page.waitForSelector('.pq-card');
console.log('  dtk:', (await page.locator('.pq-progress').textContent()).trim(), '| diagram:', await page.locator('.dtk-diagram-img').count());
await page.screenshot({ path: SC + '/fokus-dtk.png', fullPage: true });
await page.goto(BAS + '/trana/fokus?lage=delprov&val=las');
await page.waitForSelector('.pq-card');
ok(await page.locator('.las-box').count() === 1, 'LÄS-texten visas');
await page.click('#las-toggle');
ok(await page.locator('.las-box--closed').count() === 1, 'texten kan fällas ihop');

// 9. Direktlänk med fran leder tillbaka till rättningen; ogiltig länk ger tydligt fel.
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
await page.waitForSelector('#karta-sektion .hk-karta, .pq-analysis', { timeout: 20000 });
console.log('  verbalt pass:', await text('#karta-sektion .hk-mening'));
ok(await page.locator('#karta-sektion .hk-karta').count() === 1, 'rättningen av det verbala passet visar kartan');
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

// 10. Kategoriläget och ORD-kvittot.
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
