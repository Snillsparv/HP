// Fångar riktiga skärmbilder från sajten till filmen (verktyg/film/bilder).
// Kräver en lokal server på 4321 med databas:
//   DATABASE_URL=... npx astro dev --port 4321 --host 127.0.0.1
//   HP_KATEX=<katalog med katex-0.16.21/dist> node verktyg/film/fanga.mjs [namn ...]
// Utan namn fångas allt. Mobilvy 390 px bred med tre gånger upplösning.
import { mkdirSync, readFileSync, existsSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname } from 'node:path';

let chromium;
try { ({ chromium } = await import('playwright')); }
catch { ({ chromium } = await import('/opt/node22/lib/node_modules/playwright/index.mjs')); }

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, 'bilder');
const BASE = process.env.HP_BAS || 'http://127.0.0.1:4321';
const KATEX = process.env.HP_KATEX;
mkdirSync(OUT, { recursive: true });

// Döljer utvecklarverktygsfältet och stänger av övergångar så att varje
// bild visar sluttillståndet.
const STAD = `
  astro-dev-toolbar, astro-dev-overlay { display: none !important; }
  html { scroll-behavior: auto !important; }
  *, *::before, *::after { transition: none !important; animation-duration: 0s !important;
    animation-delay: 0s !important; caret-color: transparent !important; }
  img[data-fadein] { opacity: 1 !important; }
`;

// Ett fast klockslag, som styr nedräkningarna på startsidan och i
// ordträningen ("Bara 7 dagar kvar"). Sätt HP_DATUM till publiceringsdagen.
const KLOCKA = new Date(`${process.env.HP_DATUM || '2026-10-11'}T10:00:00+02:00`);

const browser = await chromium.launch({ executablePath: process.env.HP_CHROMIUM || '/opt/pw-browsers/chromium' });

async function nyttKontext() {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 797 }, deviceScaleFactor: 3,
    locale: 'sv-SE', timezoneId: 'Europe/Stockholm' });
  await ctx.route(/plausible\.io|vimeo\.com|youtube\.com|ytimg\.com/, r => r.abort());
  // KaTeX hämtas från jsdelivr på sajten; här serveras en lokal kopia.
  await ctx.route(/cdn\.jsdelivr\.net\/npm\/katex@[^/]+\/dist\/(.*)$/, async r => {
    const fil = r.request().url().replace(/^.*\/dist\//, '').split('?')[0];
    const p = KATEX && join(KATEX, fil);
    if (!p || !existsSync(p)) return r.abort();
    const typ = { '.js': 'application/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf' }[extname(p)] || 'application/octet-stream';
    await r.fulfill({ body: readFileSync(p), contentType: typ });
  });
  return ctx;
}

async function oppna(ctx, url, init) {
  const p = await ctx.newPage();
  await p.clock.install({ time: KLOCKA });
  if (init) await p.addInitScript(init);
  p.on('dialog', d => d.accept());
  await p.goto(BASE + url, { waitUntil: 'networkidle' });
  await stada(p);
  return p;
}

async function stada(p) {
  await p.addStyleTag({ content: STAD });
  await p.evaluate(() => document.fonts.ready);
  await p.evaluate(() => document.querySelectorAll('img[data-fadein]').forEach(i => i.classList.add('loaded')));
  await p.waitForTimeout(300);
}

async function vantaTex(p) {
  // Extraproven märker färdiga formler med data-done, matterepetitionen inte.
  await p.waitForFunction(() => [...document.querySelectorAll('.tex')].every(e => e.dataset.done === '1' || e.querySelector('.katex')), null, { timeout: 15000 });
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(200);
}

// Helsidesbild från toppen, valfritt beskuren till höjden h (CSS-px).
async function helsida(p, namn, h) {
  const full = await p.evaluate(() => document.documentElement.scrollHeight);
  const hojd = Math.min(full, h || full);
  await p.evaluate(() => window.scrollTo(0, 0));
  await p.screenshot({ path: join(OUT, namn + '.png'), clip: { x: 0, y: 0, width: 390, height: hojd }, fullPage: true });
  console.log('fångad', namn, '390x' + hojd);
}

// Ett enskilt element, med marginal runt om och transparent bakgrund.
async function element(p, sel, namn, pad = 0, bakgrund = false) {
  const el = p.locator(sel).first();
  await el.scrollIntoViewIfNeeded();
  await p.waitForTimeout(100);
  const b = await el.boundingBox();
  await p.screenshot({ path: join(OUT, namn + '.png'), omitBackground: !bakgrund,
    clip: { x: b.x - pad, y: b.y - pad, width: b.width + 2 * pad, height: b.height + 2 * pad } });
  console.log('fångad', namn, Math.round(b.width) + 'x' + Math.round(b.height));
}

// Läget för ett element i sidans koordinater (CSS-px från sidans topp).
async function lage(p, sel) {
  return p.evaluate(s => {
    const r = document.querySelector(s).getBoundingClientRect();
    return { x: r.x + scrollX, y: r.y + scrollY, w: r.width, h: r.height };
  }, sel);
}

const lagen = {};

// Vimeo spärras i fångsten (tomma rutor i huvudlöst läge). I stället visas
// videons riktiga omslagsbild, som i en vanlig webbläsare innan man trycker play.
async function vimeoOmslag(p) {
  const bilder = {};
  for (const id of ['1181837285', '1183659193']) {
    const fil = join(OUT, `vimeo-${id}.jpg`);
    if (existsSync(fil)) bilder[id] = 'data:image/jpeg;base64,' + readFileSync(fil).toString('base64');
  }
  await p.evaluate(bilder => {
    document.querySelectorAll('.video-embed iframe').forEach(f => {
      const id = (f.getAttribute('src') || '').match(/vimeo\.com\/video\/(\d+)/)?.[1];
      const box = f.parentElement;
      box.style.background = '#0f172a';
      box.style.borderRadius = '8px';
      box.style.overflow = 'hidden';
      if (id && bilder[id]) {
        f.outerHTML = `<img src="${bilder[id]}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">
          <span style="position:absolute;left:50%;top:50%;width:64px;height:44px;margin:-22px 0 0 -32px;border-radius:10px;background:rgba(15,23,42,.78);display:flex;align-items:center;justify-content:center">
          <svg width="20" height="22" viewBox="0 0 20 22"><path d="M2 1.5v19l17-9.5z" fill="#fff"/></svg></span>`;
      }
    });
  }, bilder);
  await p.waitForTimeout(300);
}

// Admin-kontot (hårdkodat i api/admin/simulera.ts) i den lokala databasen,
// med tre simulerade provpass så att hjärnkartan får en ojämn profil.
const ADMIN = { name: 'Elev', email: 'snillsparv@gmail.com', password: 'hpakuten-film-2026' };
async function adminKontext() {
  const ctx = await nyttKontext();
  const r = await ctx.request.post(BASE + '/api/auth/register', { form: { ...ADMIN, password2: ADMIN.password, redirect: '/' }, maxRedirects: 0 });
  if (!/session=/.test(r.headers()['set-cookie'] || '')) {
    await ctx.request.post(BASE + '/api/auth/login', { form: { email: ADMIN.email, password: ADMIN.password, redirect: '/' }, maxRedirects: 0 });
  }
  return ctx;
}

// Svaren i provpass 1 hösten 2025 (A = 0). Facit enligt UHR med sex fel:
// fråga 9, 12, 18, 26, 33 och 37. Fråga 9 är den vi visar förklaringen till.
const FACIT = [1,1,0,3,2,1,0,1,3,2,2,3,1,2,3,2,3,0,0,0,1,2,4,2,0,4,1,3,2,1,3,0,1,2,0,2,2,1,1,3];
const SVAR  = [1,1,0,3,2,1,0,1,0,2,2,0,1,2,3,2,3,1,0,0,1,2,4,2,0,2,1,3,2,1,3,0,0,2,0,2,0,1,1,3];

const JOBB = {
  async hem() {
    const ctx = await nyttKontext();
    const p = await oppna(ctx, '/');
    await p.waitForTimeout(800);
    await vimeoOmslag(p);
    // Ned till planens sista ruta ("Lycka till!!"), som filmens slut scrollar igenom.
    const sista = await lage(p, '.steps + .tip-box');
    await helsida(p, 'hem', Math.ceil(sista.y + sista.h + 140));
    await element(p, '.site-header', 'sidhuvud', 0, true);
    // Lägena som film.html räknar med (L i skriptet).
    lagen.hem = { logo: await lage(p, '.site-logo'), hero: await lage(p, '#hero-img'), tagg: await lage(p, '.hero-tag'),
      nyhet: await lage(p, '.nyhet-banner'), visaPlanen: await lage(p, 'a[href="#guide"]'),
      rubrik: await lage(p, '.steps'), sista,
      steg: await p.evaluate(() => [...document.querySelectorAll('.steps > .step')].map(e => {
        const r = e.getBoundingClientRect(), n = e.querySelector('.step-number').getBoundingClientRect();
        return { y: r.y + scrollY, h: r.height, nr: { x: n.x + n.width / 2, y: n.y + scrollY + n.height / 2 } };
      })) };
    await ctx.close();
  },

  async extra() {
    const ctx = await nyttKontext();
    const p = await oppna(ctx, '/extra');
    await helsida(p, 'extra', 3200);
    lagen.extra = { forsta: await lage(p, '#forsta-pass') };
    await element(p, '#forsta-pass', 'extra-kort', 0);
    await ctx.close();
  },

  async rattning() {
    const ctx = await nyttKontext();
    const score = SVAR.filter((v, i) => v === FACIT[i]).length;
    const init = `localStorage.setItem('hp-results', ${JSON.stringify(JSON.stringify({ 'extra-ht2025-1': {
      testId: 'extra-ht2025-1', score, total: 40, answers: SVAR, timeSeconds: 2843, date: '2026-10-11T08:00:00Z' } }))});`;
    const p = await oppna(ctx, '/extra/ht2025-1?review=1', init);
    await p.waitForSelector('.pq-res');
    await p.waitForTimeout(1500);
    await stada(p);
    await helsida(p, 'rattning');
    lagen.rattning = { rad9: await lage(p, '.pq-res[data-toggle="res-9"]'), lista: await lage(p, '.pq-results') };
    await p.click('.pq-res[data-toggle="res-9"]');
    await vantaTex(p);
    await stada(p);
    await helsida(p, 'rattning-9');
    await element(p, '#res-9 .pq-res-expl', 'rattning-9-forklaring', 0);
    await element(p, '#res-9 .pq-res-options', 'rattning-9-alternativ', 0);
    await ctx.close();
  },

  async matte() {
    // Matterepetitionen, geometri uppgift 8 (Pythagoras), före och efter svaret.
    const ctx = await nyttKontext();
    const init = `localStorage.setItem('hp-exercise-progress', ${JSON.stringify(JSON.stringify({
      answered: { geometri: { 0: 1, 1: 1, 2: 2, 3: 1, 4: 1, 5: 1, 6: 1 } }, currentIdx: { geometri: 7 }, mastered: [] }))});`;
    const p = await oppna(ctx, '/ovningsuppgifter#geometri', init);
    await p.waitForSelector('.pq-card');
    await vantaTex(p);
    await vimeoOmslag(p);
    await stada(p);
    await helsida(p, 'matte');
    lagen.matte = { video: await lage(p, '#exercise-video'), kort: await lage(p, '.pq-card'),
      alt: await lage(p, '.pq-opt[data-oi="0"]') };
    await element(p, '#exercise-video .video-embed', 'matte-video', 0);
    await p.click('.pq-opt[data-oi="0"]');
    await p.waitForSelector('.ex-fb');
    await vantaTex(p);
    await stada(p);
    await helsida(p, 'matte-svar');
    lagen.matte.fb = await lage(p, '.ex-fb');
    await element(p, '.ex-fb', 'matte-forklaring', 0);
    await ctx.close();
  },

  async fokus() {
    // Admin med simulerade pass: kartan före, en MEK-runda, kvittot, kartan efter.
    const ctx = await adminKontext();
    await ctx.request.post(BASE + '/api/admin/simulera', { data: { atgard: 'ta-bort' } });
    const sim = await (await ctx.request.post(BASE + '/api/admin/simulera', { data: { atgard: 'skapa' } })).json();
    console.log('simulerat:', JSON.stringify(sim.skapade));
    const kartaFore = await (await ctx.request.get(BASE + '/api/fokus/karta')).json();
    writeFileSync(join(OUT, 'karta-fore.json'), JSON.stringify(kartaFore));
    const init = `localStorage.removeItem('hp-fokus-runda');`;
    const p = await oppna(ctx, '/trana/fokus', init);
    await p.waitForSelector('.hk-karta .hk-svg');
    await p.waitForTimeout(1300);
    await stada(p);
    await helsida(p, 'fokus', 1800);
    lagen.fokus = { kort: await lage(p, '.fokus-karta-kort'), knapp: await lage(p, '.hk-harnast .hk-knapp') };
    await element(p, '.fokus-karta-kort', 'fokus-karta', 0);
    // Rundan: rätt svar slås upp hos rättaren utan kaka (sparar inget).
    const rattare = await (await import('/opt/node22/lib/node_modules/playwright/index.mjs')).request.newContext();
    const ratt = async id => (await (await rattare.post(BASE + '/api/fokus/svar', { data: { questionId: id, chosen: 0 } })).json()).correct;
    await p.goto(BASE + '/trana/fokus?lage=delprov&val=mek', { waitUntil: 'networkidle' });
    await p.waitForSelector('.pq-opt:not([disabled])');
    await vantaTex(p).catch(() => {});
    await stada(p);
    await helsida(p, 'fokus-fraga');
    let forsta = true;
    for (;;) {
      const { platta, idx } = await p.evaluate(() => JSON.parse(localStorage.getItem('hp-fokus-runda')));
      const r = await ratt(platta[idx].id);
      await p.locator(`.pq-opt[data-oi="${r}"]`).click();
      await p.waitForSelector('#btn-nasta');
      if (forsta) {
        await stada(p);
        await helsida(p, 'fokus-fraga-svar');
        lagen.fokus.alt = await lage(p, `.pq-opt[data-oi="${r}"]`);
        lagen.fokus.sett = await lage(p, '.fokus-sett').catch(() => null);
        forsta = false;
      }
      const sista = (await p.textContent('#btn-nasta')).trim() === 'Visa resultat';
      await p.click('#btn-nasta');
      if (sista) break;
      await p.waitForSelector('.pq-opt:not([disabled])');
    }
    await p.waitForSelector('.pq-result-head');
    // Tidsraden räknas från riktiga klick; i filmen ser den ut som ett lugnt pass.
    await p.evaluate(() => document.querySelectorAll('.pq-result-head p, .pq-result-head div').forEach(e => {
      if (/^Du tog /.test(e.textContent.trim())) e.textContent = e.textContent.replace(/Du tog [0-9:]+/, 'Du tog 7:12');
    }));
    await stada(p);
    await helsida(p, 'fokus-kvitto', 1400);
    await element(p, '.pq-result-head', 'fokus-kvitto-kort', 0);
    const kartaEfter = await (await ctx.request.get(BASE + '/api/fokus/karta')).json();
    writeFileSync(join(OUT, 'karta-efter.json'), JSON.stringify(kartaEfter));
    await rattare.dispose();
    await ctx.close();
  },

  async ord() {
    const ctx = await nyttKontext();
    const init = `localStorage.setItem('ordtraning-install', 'dolj'); localStorage.setItem('ot-intro-v1', '1');
      localStorage.setItem('ot-nudge-done', '1'); localStorage.setItem('ot-passprompt-done', '1');`;
    const p = await oppna(ctx, '/ord', init);
    await p.waitForSelector('#go');
    await p.waitForTimeout(1500);
    await stada(p);
    await helsida(p, 'ord', 1800);
    lagen.ord = { go: await lage(p, '#go'), ring: await lage(p, '.ring-row') };
    await p.click('#go');
    await p.waitForSelector('.learn-card');
    await p.waitForTimeout(800);
    await stada(p);
    await helsida(p, 'ord-kort', 1800);
    lagen.ord.knapp = await lage(p, '.help-toggle[data-target="pic-body"]');
    await p.click('.help-toggle[data-target="pic-body"]');
    await p.waitForTimeout(500);
    await stada(p);
    await helsida(p, 'ord-kort-regel', 1800);
    lagen.ord.regel = await lage(p, '#pic-body .mnemo');
    lagen.ord.ordrad = await lage(p, '.w-word');
    await element(p, '#pic-body .mnemo', 'ord-regel', 0);
    await element(p, '.w-img', 'ord-bild', 0).catch(() => {});
    await ctx.close();
  },
};

const valda = process.argv.slice(2);
for (const [namn, fn] of Object.entries(JOBB)) {
  if (valda.length && !valda.includes(namn)) continue;
  await fn();
}
await browser.close();
console.log(JSON.stringify(lagen));
