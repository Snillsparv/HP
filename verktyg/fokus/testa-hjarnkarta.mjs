// Enhetstester av hjärnkartan: regeln för Träna härnäst, talen, texterna,
// kallstartsfallen, före och efter ett pass och vyns etiketter.
// Kör: node verktyg/fokus/testa-hjarnkarta.mjs
import * as esbuild from 'esbuild';
import { mkdtempSync, readFileSync, readdirSync, statSync } from 'fs';
import { tmpdir } from 'os';
import { dirname, join } from 'path';
import { pathToFileURL } from 'url';
import assert from 'assert';

// Frågebanken läser proven med import.meta.glob (Vite). Här skrivs anropen om
// till vanliga importer, och databasen byts mot en stubbe.
const vite = {
  name: 'vite-glob-och-db',
  setup(b) {
    b.onResolve({ filter: /(^|\/)db\.js$/ }, a => (a.importer.includes('/src/lib/') ? { path: 'db', namespace: 'stubbe' } : undefined));
    b.onLoad({ filter: /.*/, namespace: 'stubbe' }, () => ({ contents: 'export default { query: async () => ({ rows: [] }) };', loader: 'js' }));
    b.onLoad({ filter: /extraprov\/register\.ts$/ }, a => {
      let src = readFileSync(a.path, 'utf8');
      const imp = [];
      let k = 0;
      src = src.replace(/import\.meta\.glob<[^(]*>\(\s*'([^']+)'\s*,\s*\{\s*eager:\s*true\s*\}\s*\)/g, (_, monster) => {
        const mapp = dirname(monster);
        const slut = monster.split('*')[1];
        const filer = readdirSync(join(dirname(a.path), mapp)).filter(f => f.endsWith(slut)).sort();
        const delar = filer.map((fil, i) => {
          const namn = `__glob${k}_${i}`;
          imp.push(`import * as ${namn} from './${mapp}/${fil}';`);
          return `'./${mapp}/${fil}': ${namn}`;
        });
        k++;
        return `{ ${delar.join(', ')} }`;
      });
      return { contents: `${imp.join('\n')}\n${src}`, loader: 'ts' };
    });
  },
};

const ut = mkdtempSync(join(tmpdir(), 'hp-hjarnkarta-'));
await esbuild.build({
  entryPoints: ['src/lib/fokus/hjarnkarta.ts', 'src/lib/fokus/fragebank.ts'],
  bundle: true, format: 'esm', platform: 'node', outdir: ut, logLevel: 'error', plugins: [vite],
});
// Vyn byggs för sig, som i webbläsaren: den får inte dra in frågedata.
await esbuild.build({
  entryPoints: ['src/lib/fokus/hjarnkarta-vy.ts'],
  bundle: true, format: 'esm', platform: 'browser', outfile: join(ut, 'vy.js'), logLevel: 'error',
});
const H = await import(pathToFileURL(join(ut, 'hjarnkarta.js')).href);
const F = await import(pathToFileURL(join(ut, 'fragebank.js')).href);
const V = await import(pathToFileURL(join(ut, 'vy.js')).href);

let antalTester = 0;
function test(namn, fn) {
  fn();
  antalTester++;
  console.log(`ok  ${namn}`);
}

const nu = new Date('2026-09-20T12:00:00Z');
const dag = 24 * 3600 * 1000;
let lopnr = 0;
/** Svar på en typ: ratt av antal, spridda över dagar bakåt. */
function svar(typ, ratt, antal, { dagar = 1, kalla = 'runda', grupp = null } = {}) {
  const dp = typ.split(':')[0];
  return Array.from({ length: antal }, (_, i) => ({
    questionId: `syn-${typ}-${lopnr++}`,
    delprov: dp,
    typ,
    correct: i < ratt,
    kalla,
    grupp,
    createdAt: new Date(nu.getTime() - (dagar + i * 0.01) * dag),
  }));
}
/** Händelserna ett sparat provpass ger, som hamtaHandelser bygger dem. */
function passHandelser(testId, answers, nar) {
  return F.fragorForTest(testId).map((q, i) => ({
    questionId: q.id, delprov: q.delprov, typ: q.typ, grupp: q.grupp, kalla: 'prov',
    obesvarad: answers[i] === null, correct: answers[i] !== null && answers[i] === q.correct, createdAt: nar,
  }));
}
/** Svar på ett pass med en viss andel rätt per delprov. */
function passSvarMed(testId, andel) {
  const perDp = {};
  return F.fragorForTest(testId).map(q => {
    perDp[q.delprov] = (perDp[q.delprov] || 0) + 1;
    const n = perDp[q.delprov];
    const a = andel[q.delprov] ?? 0.5;
    // Rätt på de första a·antal frågorna i delprovet.
    const antalDp = F.fragorForTest(testId).filter(x => x.delprov === q.delprov).length;
    return n <= Math.round(a * antalDp) ? q.correct : (q.correct + 1) % q.options.length;
  });
}
const axel = (d, dp) => d.axlar.find(a => a.delprov === dp);
const ingaTankstreck = (s, var_) => assert.ok(!/[–—]/.test(s), `tankstreck i ${var_}: ${s.match(/.{0,30}[–—].{0,30}/)?.[0]}`);

// Ett fullt underlag: alla sju säkra, MEK svagast i pott.
const FULL = [
  ...svar('xyz:algebra', 9, 14), ...svar('xyz:geometri', 3, 10), ...svar('xyz:aritmetik', 10, 13),
  ...svar('kva:algebra', 10, 13), ...svar('kva:aritmetik', 9, 12),
  ...svar('nog:logik', 6, 12), ...svar('nog:aritmetik', 5, 10),
  ...svar('dtk:diagram', 14, 22),
  ...svar('ord', 20, 25),
  ...svar('mek:1', 4, 9), ...svar('mek:2', 3, 8), ...svar('mek:3', 1, 5),
  ...svar('las', 1, 2),
];

// ---------- Hjälpare ----------

test('nFor avrundar en exakt halva nedåt och potText säger nära målet under 1', () => {
  assert.strictEqual(V.nFor(4.5), 4);
  assert.strictEqual(V.nFor(4.52), 5);
  assert.strictEqual(V.nFor(0.5), 0);
  assert.strictEqual(V.potText(0), 'nära målet');
  assert.strictEqual(V.potText(4), 'ca +4 rätt att hämta');
});

test('procenten visas i femsteg tills effektivt antal är minst 15', () => {
  assert.strictEqual(V.visadProcent(0.58, 10), 60);
  assert.strictEqual(V.visadProcent(0.58, 15), 58);
  assert.strictEqual(V.visadProcent(0.42, 3), 40);
});

test('malDelprov: 85 %, NOG 75 %, MEK 83 %', () => {
  const d = H.byggHjarnkarta(FULL, { nu });
  assert.strictEqual(axel(d, 'xyz').mal, 0.85);
  assert.strictEqual(axel(d, 'nog').mal, 0.75);
  assert.strictEqual(axel(d, 'mek').mal, 0.83);
});

test('uppgifterPerPass: andel av delprovet gånger antal per pass, utan halvering för ORD och LÄS', () => {
  assert.ok(Math.abs(F.uppgifterPerPass('xyz:algebra') - 3.63) < 0.05, F.uppgifterPerPass('xyz:algebra'));
  assert.ok(Math.abs(F.uppgifterPerPass('ord') - 10) < 1e-9);
  assert.ok(Math.abs(F.uppgifterPerPass('las') - 10) < 1e-9);
  const mek = ['mek:1', 'mek:2', 'mek:3'].reduce((s, t) => s + F.uppgifterPerPass(t), 0);
  assert.ok(mek > 9.9 && mek <= 10.001, `MEK:s luckor summerar till ungefär 10, fick ${mek}`);
  const xyz = F.allaTyper(['extra']).filter(t => t.delprov === 'xyz').reduce((s, t) => s + F.uppgifterPerPass(t.typ), 0);
  assert.ok(Math.abs(xyz - 12) < 1e-9, `XYZ summerar till 12, fick ${xyz}`);
});

// ---------- Regeln ----------

test('vinnaren är delprovet med störst pott bland säkra axlar', () => {
  const d = H.byggHjarnkarta(FULL, { nu });
  const sakra = d.axlar.filter(a => !a.osaker);
  const storst = [...sakra].sort((a, b) => b.pott - a.pott)[0];
  assert.strictEqual(d.harnast.delprov, storst.delprov);
  assert.strictEqual(d.vinnare, storst.delprov);
  for (const a of d.axlar) {
    assert.ok(Math.abs(a.pott - (({ xyz: 12, kva: 10, nog: 6, dtk: 12, ord: 10, las: 10, mek: 10 })[a.delprov]) * Math.max(0, a.mal - a.styrka)) < 1e-9, `pott för ${a.delprov}`);
  }
  assert.strictEqual(d.harnast.delprov, 'mek', 'MEK är svagast i exemplet');
});

test('talet i pillen är round(pott − 0,01) och samma i kortet och arket', () => {
  const d = H.byggHjarnkarta(FULL, { nu });
  const v = axel(d, d.harnast.delprov);
  assert.strictEqual(d.harnast.n, Math.round(v.pott - 0.01));
  assert.strictEqual(d.harnast.pottText, `ca +${v.n} rätt att hämta`);
  assert.ok(V.tranaHarnastHTML(d).includes(`ca +${v.n} rätt att hämta`));
  assert.ok(V.arkHTML(d, v.delprov).includes(`ca +${v.n} rätt att hämta`));
  // Pillens tal är det största som syns bland delproven.
  assert.ok(d.axlar.filter(a => !a.osaker).every(a => a.n <= d.harnast.n));
});

test('kortets texter följer mallen', () => {
  const d = H.byggHjarnkarta(FULL, { nu });
  const h = d.harnast;
  const mek = axel(d, 'mek');
  assert.strictEqual(h.rubrik, 'MEK');
  assert.strictEqual(h.underrubrik, 'Meningskomplettering');
  assert.ok(h.mening.startsWith(`Tio uppgifter per verbalt pass, och du ligger runt ${mek.visadPct} %.`), h.mening);
  if (h.lage === 'delprov') {
    assert.strictEqual(h.knapp, 'Kör 10 MEK‑uppgifter →');
    assert.strictEqual(h.knappUnder, 'cirka 8 minuter, förklaring efter varje svar');
    assert.strictEqual(h.href, '/trana/fokus?lage=delprov&val=mek');
  }
  const html = V.tranaHarnastHTML(d, { fran: 'extra-ht2012-1' });
  assert.ok(html.includes('Träna härnäst'));
  assert.ok(/href="\/trana\/fokus\?lage=(delprov|typ)&amp;val=mek[^"]*&amp;fran=extra-ht2012-1"/.test(html), 'fran läggs till på knappen');
});

test('typ inom delprovet: störst uppgifterPerPass · (mål − styrka) bland typer med eff ≥ 8', () => {
  // XYZ svagast, geometri tydligt svagast bland typerna.
  const h = [
    ...svar('xyz:algebra', 10, 14), ...svar('xyz:aritmetik', 11, 14), ...svar('xyz:geometri', 2, 18),
    ...svar('kva:algebra', 11, 13), ...svar('nog:logik', 9, 12), ...svar('dtk:diagram', 19, 22),
    ...svar('ord', 22, 25), ...svar('las', 9, 11), ...svar('mek:1', 8, 10), ...svar('mek:2', 8, 10),
  ];
  const d = H.byggHjarnkarta(h, { nu });
  assert.strictEqual(d.harnast.delprov, 'xyz');
  assert.ok(d.typer.xyz.find(t => t.typ === 'xyz:geometri').effektivt >= 8);
  assert.strictEqual(d.harnast.lage, 'typ');
  assert.strictEqual(d.harnast.typ, 'xyz:geometri');
  assert.strictEqual(d.harnast.href, '/trana/fokus?lage=typ&val=xyz:geometri');
  assert.strictEqual(d.harnast.knapp, 'Kör 10 XYZ‑uppgifter →');
  assert.strictEqual(d.harnast.knappUnder, 'mest geometri · cirka 10 minuter');
  assert.ok(d.harnast.mening.endsWith('Mest att hämta i geometri.'), d.harnast.mening);
  const ark = V.arkHTML(d, 'xyz');
  assert.ok(ark.includes('eller 10 blandade XYZ‑uppgifter'));
  assert.strictEqual((ark.match(/Mest att hämta<\/small>/g) || []).length, 1, 'bara översta raden har etiketten');
  assert.ok(ark.indexOf('>Geometri<') < ark.indexOf('>Algebra<'), 'geometri överst');
  // Typer med eff under 8 väljs inte: med färre geometrisvar blir det hela delprovet.
  const h2 = h.filter(x => x.typ !== 'xyz:geometri').concat(svar('xyz:geometri', 0, 5));
  const d2 = H.byggHjarnkarta(h2, { nu });
  if (d2.harnast.delprov === 'xyz') assert.notStrictEqual(d2.harnast.typ, 'xyz:geometri');
});

test('ORD och LÄS har inga typer, MEK har en, två och tre luckor', () => {
  const d = H.byggHjarnkarta(FULL, { nu });
  assert.deepStrictEqual(d.typer.ord, []);
  assert.deepStrictEqual(d.typer.las, []);
  assert.deepStrictEqual(d.typer.mek.map(t => t.namn), ['En lucka', 'Två luckor', 'Tre luckor']);
  assert.ok(!V.arkHTML(d, 'ord').includes('Var tappar du rätt?'));
  const mek = V.arkHTML(d, 'mek');
  assert.ok(mek.includes('Var tappar du rätt?') && mek.includes('Tre luckor'));
  assert.ok(d.typer.mek.find(t => t.typ === 'mek:3').mal === 0.75);
});

// ---------- Osäkra axlar ----------

test('osäkra axlar ritas utan punkt, med streckad etikett, och får aldrig pilen', () => {
  // LÄS har bara två svar, alla fel: lägst styrka men osäker.
  const h = [...FULL.filter(x => x.delprov !== 'las'), ...svar('las', 0, 2)];
  const d = H.byggHjarnkarta(h, { nu });
  const las = axel(d, 'las');
  assert.ok(las.osaker);
  assert.notStrictEqual(d.harnast.delprov, 'las');
  const html = V.ritaKarta(d, { storlek: 'kompakt' });
  assert.ok(!/class="hk-punkt" data-dp="las"/.test(html), 'ingen punkt på LÄS');
  assert.ok(/class="hk-etk hk-gra[^"]*" data-dp="las"[^>]*>(<span class="hk-r1">)?<b>LÄS<\/b>(<\/span>)?<span>\?/.test(html), 'etiketten LÄS ?');
  assert.strictEqual(d.harnast.gra.text, 'LÄS är grå: 2 svar hittills.');
  assert.strictEqual(d.harnast.gra.href, '/trana/fokus?lage=delprov&val=las&antal=5');
  // Även om någon pekade ut LÄS ritas ingen pil på en osäker axel.
  const tvingad = { ...d, vinnare: 'las' };
  assert.ok(!V.ritaKarta(tvingad, { storlek: 'kompakt' }).includes('hk-pil'));
  // Formen går via centrum vid den osäkra axeln (ingen punkt längs LÄS).
  const g = V.kartGeometri(d, { storlek: 'kompakt' });
  const form = V.formSVG(g, d.axlar, V.slutVarden(d), V.formOpt(d, { storlek: 'kompakt' }));
  assert.ok(form.includes(`${Math.round(g.CX * 10) / 10},${Math.round(g.CY * 10) / 10}`), 'centrum ingår i formen');
});

test('pilen ritas på vinnaren när den har minst 10 enheter kvar till målet', () => {
  const d = H.byggHjarnkarta(FULL, { nu });
  const html = V.ritaKarta(d, { storlek: 'full' });
  assert.ok(html.includes('hk-pil'));
  assert.ok(html.includes('hk-vinnare') && /hk-vinnare" data-dp="mek"/.test(html));
  assert.ok(html.includes('hk-puls'));
});

// ---------- Före och efter ----------

test('deltaSynlig: bara vid säker förändring och minst 4 enheter', () => {
  assert.strictEqual(V.deltaSynlig(0.5, 0.45, 0.04), null, 'fem enheter med standardfel 4 ryms i slumpen');
  assert.strictEqual(V.deltaSynlig(0.6, 0.3, 0.05), 30);
  assert.strictEqual(V.deltaSynlig(0.3, 0.6, 0.05), -30);
  assert.strictEqual(V.deltaSynlig(0.6, 0.3, 0), null, 'inget standardfel: ingen siffra');
  assert.strictEqual(V.deltaSynlig(0.53, 0.5, 0.001), null, 'under 4 enheter');
  // Den förväntade förskjutningen (priorn drar olika mycket) räknas bort.
  assert.strictEqual(V.deltaSynlig(0.62, 0.55, 0.02, 0.05), null, 'sju enheter varav fem väntade');
  assert.strictEqual(V.deltaSynlig(0.56, 0.5, 0.01, 0.1), null, 'åt andra hållet än det väntade: ingen uppåtpil');
});

const T1 = 'extra-ht2012-1';
// Ett annat kvantitativt pass än T1.
const T3 = [...new Set(F.bank.filter(q => q.kalla === 'extra').map(q => q.testId))]
  .find(t => t !== T1 && F.fragorForTest(t).every(q => ['xyz', 'kva', 'nog', 'dtk'].includes(q.delprov)));
test('ett kvantitativt pass ger startpunkten och "Vänstra halvan är tom"', () => {
  const nar = new Date(nu.getTime() - 3600_000);
  const answers = passSvarMed(T1, { xyz: 0.6, kva: 0.7, nog: 0.5, dtk: 0.5 });
  const h = passHandelser(T1, answers, nar);
  assert.ok(new Set(h.map(x => x.delprov)).size === 4 && h.every(x => ['xyz', 'kva', 'nog', 'dtk'].includes(x.delprov)), 'passet är kvantitativt');
  const d = H.byggHjarnkarta(h, { nu, pass: { createdAt: nar, testId: T1, answers } });
  assert.strictEqual(d.forandring.text, 'Nu finns XYZ, KVA, NOG och DTK på kartan. Det här är din startpunkt.');
  assert.strictEqual(d.forandring.foreKontur, false);
  assert.strictEqual(d.harnast.halva.fet, 'Vänstra halvan är tom.');
  assert.strictEqual(d.harnast.halva.text, 'Gör ett verbalt pass så ritar jag in ORD, LÄS och MEK.');
  assert.strictEqual(d.harnast.halva.href, '/extra#forsta-verbal');
  assert.ok(['xyz', 'kva', 'nog', 'dtk'].includes(d.harnast.delprov), 'regeln väljer bland det kända');
  // Utan pass samma halva-rad.
  assert.strictEqual(H.byggHjarnkarta(h, { nu }).harnast.halva.fet, 'Vänstra halvan är tom.');
});

test('andra passet: prickad före-kontur, siffra bara vid säker förändring', () => {
  const nar1 = new Date(nu.getTime() - 20 * dag);
  const a1 = passSvarMed(T1, { xyz: 0.5, kva: 0.7, nog: 0.2, dtk: 0.6 });
  const nar2 = new Date(nu.getTime() - 3600_000);
  const a2 = passSvarMed(T3, { xyz: 0.55, kva: 0.7, nog: 1, dtk: 0.6 });
  const h = [...passHandelser(T1, a1, nar1), ...passHandelser(T3, a2, nar2), ...svar('ord', 18, 22, { dagar: 10 })];
  const d = H.byggHjarnkarta(h, { nu, pass: { createdAt: nar2, testId: T3, answers: a2 } });
  assert.ok(d.forandring.foreKontur);
  const nog = axel(d, 'nog');
  assert.ok(nog.fore < nog.styrka);
  assert.ok(nog.delta > 0, `NOG gick upp säkert, delta ${nog.delta}`);
  assert.ok(d.forandring.fet.startsWith('NOG gick upp på riktigt'), d.forandring.fet);
  assert.ok(d.forandring.text.includes('Verbalt mätte du inte i dag.'));
  for (const a of d.axlar) {
    if (a.delta === null || a.delta === undefined) continue;
    assert.ok(Math.abs(a.delta) >= 4 && a.delta === Math.round((a.styrka - a.fore) * 100), `${a.delprov} delta ${a.delta}`);
  }
  const html = V.blockHTML(d, { storlek: 'full', fran: T3 });
  assert.ok(html.includes('class="hk-fore"'), 'före-konturen ritas');
  assert.ok(/<span class="hk-upp">↑\d+<\/span>/.test(html), 'uppåtpil i etiketten');
  assert.ok(html.includes('före passet') && html.includes('växte') && html.includes('krympte'));
  // KVA stod still: ingen siffra.
  assert.ok(axel(d, 'kva').delta === null);
  // Granskningsläget: samma data utan före.
  const granska = V.blockHTML(d, { storlek: 'full', fore: false });
  assert.ok(!granska.includes('class="hk-fore"') && !granska.includes('hk-upp'));
  // Ur det här provet finns och är inte samma som huvudkortet.
  if (d.urProvet) assert.notStrictEqual(d.urProvet.href, d.harnast.href);
});

test('passet bekräftade kartan när ingen förändring är säker', () => {
  const nar1 = new Date(nu.getTime() - 10 * dag);
  const a1 = passSvarMed(T1, { xyz: 0.5, kva: 0.7, nog: 0.5, dtk: 0.6 });
  const nar2 = new Date(nu.getTime() - 3600_000);
  const a2 = passSvarMed(T3, { xyz: 0.58, kva: 0.7, nog: 0.5, dtk: 0.6 });
  const h = [...passHandelser(T1, a1, nar1), ...passHandelser(T3, a2, nar2)];
  const d = H.byggHjarnkarta(h, { nu, pass: { createdAt: nar2, testId: T3, answers: a2 } });
  assert.strictEqual(d.forandring.fet, 'Passet bekräftade kartan.');
  assert.ok(/men efter ett enda pass ryms det i slumpen\./.test(d.forandring.text), d.forandring.text);
  assert.ok(d.axlar.every(a => a.delta === null || a.delta === undefined));
});

// ---------- Kalibrering av förändringssiffran ----------

/** Slumptal med frö, så att testet ger samma utfall varje gång. */
function slump(fro) {
  let a = fro >>> 0;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
const PER_PASS = { xyz: 12, kva: 10, nog: 6, dtk: 12 };
/** Tidigare provsvar: antal per delprov på nivån p, i pass om 12, 10, 6 och 12
 * frågor med tre dagar mellan. DTK i diagram om fyra frågor (grupptaket). */
function historik(antal, p, r, dagar0 = 3) {
  const ut = [];
  for (const dp of Object.keys(PER_PASS)) {
    for (let k = 0; k < antal; k++) {
      const pass = Math.floor(k / PER_PASS[dp]);
      ut.push({
        questionId: `hist-${dp}-${lopnr++}`, delprov: dp, typ: `${dp}:${dp === 'dtk' ? 'diagram' : 'aritmetik'}`,
        correct: r() < p, kalla: 'prov', grupp: dp === 'dtk' ? `hist-g-${pass}-${Math.floor((k % 12) / 4)}` : null,
        createdAt: new Date(nu.getTime() - (dagar0 + pass * 3) * dag),
      });
    }
  }
  return ut;
}
function slumpSvar(testId, p, r) {
  return F.fragorForTest(testId).map(q => (r() < (typeof p === 'number' ? p : p[q.delprov]) ? q.correct : (q.correct + 1) % q.options.length));
}

test('kalibrering: med oförändrad nivå visas förändringssiffran sällan', () => {
  const r = slump(20260924);
  const nar = new Date(nu.getTime() - 3600_000);
  const rader = [];
  for (const [antal, p] of [[12, 0.6], [40, 0.55], [40, 0.65], [80, 0.6], [80, 0.8]]) {
    const N = 120;
    const med = { xyz: 0, kva: 0, nog: 0, dtk: 0 };
    let upp = 0, ned = 0;
    for (let k = 0; k < N; k++) {
      const answers = slumpSvar(T1, p, r);
      const h = [...historik(antal, p, r), ...passHandelser(T1, answers, nar)];
      const d = H.byggHjarnkarta(h, { nu, pass: { createdAt: nar, testId: T1, answers } });
      for (const dp of Object.keys(med)) if (axel(d, dp).delta !== null && axel(d, dp).delta !== undefined) med[dp]++;
      if (/gick upp på riktigt/.test(d.forandring.fet + d.forandring.text)) upp++;
      if (/gick ner mer än slumpen brukar/.test(d.forandring.fet + d.forandring.text)) ned++;
    }
    const andel = Object.fromEntries(Object.entries(med).map(([dp, n]) => [dp, n / N]));
    rader.push(`${antal} svar, ${Math.round(p * 100)} %: ${Object.entries(andel).map(([dp, a]) => `${dp} ${Math.round(a * 100)} %`).join(', ')}, upp ${Math.round(upp / N * 100)} %, ned ${Math.round(ned / N * 100)} %`);
    // Nominellt cirka 5 % per axel (två standardfel åt något håll), och kravet
    // på minst 4 enheter drar ner det. Förr låg det på 40 till 80 %.
    for (const [dp, a] of Object.entries(andel)) assert.ok(a <= 0.12, `${dp} visar siffra i ${Math.round(a * 100)} % av passen (${antal} svar, ${p})`);
    assert.ok(upp / N <= 0.25 && ned / N <= 0.25, `meningen: upp ${upp}, ned ${ned} av ${N}`);
  }
  console.log(`    ${rader.join('\n    ')}`);
});

test('en verklig nedgång syns även när grupptaket minskar det effektiva antalet', () => {
  const nar = new Date(nu.getTime() - 3600_000);
  for (const antal of [12, 40, 80]) {
    const r = slump(antal);
    const fragor = F.fragorForTest(T1);
    // 80 % rätt före, sedan 0 av 12 på DTK och 80 % på resten.
    const answers = fragor.map(q => (q.delprov === 'dtk' ? (q.correct + 1) % q.options.length : r() < 0.8 ? q.correct : (q.correct + 1) % q.options.length));
    const h = [...historik(antal, 0.8, slump(antal + 1)), ...passHandelser(T1, answers, nar)];
    const d = H.byggHjarnkarta(h, { nu, pass: { createdAt: nar, testId: T1, answers } });
    const dtk = axel(d, 'dtk');
    assert.ok(dtk.delta < 0, `DTK har en nedåtsiffra med ${antal} tidigare svar (från ${Math.round(dtk.fore * 100)} till ${Math.round(dtk.styrka * 100)}, eff ${dtk.effFore.toFixed(1)} till ${dtk.effektivt.toFixed(1)})`);
    const mening = d.forandring.fet + d.forandring.text;
    assert.ok(/DTK gick ner mer än slumpen brukar/.test(mening), mening);
    assert.ok(!/DTK krympte lite/.test(mening), mening);
  }
});

test('första passet: bara säkra delprov räknas upp, osäkra behöver fler svar', () => {
  const nar = new Date(nu.getTime() - 3600_000);
  const fragor = F.fragorForTest(T1);
  // Tiden tog slut: alla NOG obesvarade (halv vikt, osäker efter passet).
  const answers = fragor.map(q => (q.delprov === 'nog' ? null : q.correct));
  const d = H.byggHjarnkarta(passHandelser(T1, answers, nar), { nu, pass: { createdAt: nar, testId: T1, answers } });
  assert.ok(axel(d, 'nog').osaker, 'NOG är osäker');
  assert.strictEqual(d.forandring.text, 'Nu finns XYZ, KVA och DTK på kartan. Det här är din startpunkt. NOG behöver fler svar.');
  // Inget delprov blev säkert: ingen startpunkt.
  const tomma = fragor.map(() => null);
  const d2 = H.byggHjarnkarta(passHandelser(T1, tomma, nar).filter(x => x.delprov === 'nog'), { nu, pass: { createdAt: nar, testId: T1, answers: tomma } });
  assert.ok(!/startpunkt/.test(d2.forandring.text), d2.forandring.text);
});

test('övertidssvar räknas till passet även efter mer än 15 minuter', () => {
  const nar = new Date(nu.getTime() - 3600_000);
  const fragor = F.fragorForTest(T1);
  // Tiden tog slut med hela DTK obesvarat; DTK görs klart på övertid och sparas efter 20 minuter.
  const answers = fragor.map(q => (q.delprov === 'dtk' ? null : q.correct));
  const prov = passHandelser(T1, answers, nar).filter(x => x.delprov !== 'dtk');
  const overtid = fragor.filter(q => q.delprov === 'dtk').map((q, i) => ({
    questionId: q.id, delprov: q.delprov, typ: q.typ, grupp: q.grupp, kalla: 'runda', utanTid: true,
    correct: i % 2 === 0, createdAt: new Date(nar.getTime() + 20 * 60_000),
  }));
  const d = H.byggHjarnkarta([...prov, ...overtid], { nu, pass: { createdAt: nar, testId: T1, answers } });
  assert.ok(axel(d, 'dtk').antal === overtid.length, `DTK har ${axel(d, 'dtk').antal} svar på kartan`);
  assert.ok(!axel(d, 'dtk').osaker, 'DTK är ritad');
  // Ett senare försök på samma prov avslutar passet: dess övertid räknas inte hit.
  const senare = overtid.map(x => ({ ...x, createdAt: new Date(nar.getTime() + 3 * dag) }));
  const nytt = passHandelser(T1, answers, new Date(nar.getTime() + 3 * dag - 60_000)).filter(x => x.delprov !== 'dtk');
  const d2 = H.byggHjarnkarta([...prov, ...nytt, ...senare], { nu: new Date(nar.getTime() + 4 * dag), pass: { createdAt: nar, testId: T1, answers } });
  assert.strictEqual(axel(d2, 'dtk').antal, 0, 'nästa försöks övertid hör inte till passet');
});

test('Ur det här provet pekar aldrig på huvudkortets delprov och upprepar inte pillens tal', () => {
  const r = slump(7);
  const nar = new Date(nu.getTime() - 3600_000);
  let medRad = 0;
  for (let k = 0; k < 60; k++) {
    const p = { xyz: 0.3 + r() * 0.5, kva: 0.3 + r() * 0.5, nog: 0.3 + r() * 0.4, dtk: 0.3 + r() * 0.5 };
    const answers = slumpSvar(T1, p, r);
    const h = [...historik(24, 0.6, r), ...passHandelser(T1, answers, nar)];
    const d = H.byggHjarnkarta(h, { nu, pass: { createdAt: nar, testId: T1, answers } });
    const u = d.urProvet;
    if (!u) continue;
    medRad++;
    const dp = new URLSearchParams(u.href.split('?')[1]).get('val').split(':')[0];
    assert.notStrictEqual(dp, d.harnast.delprov, `raden ${u.rubrik} gäller huvudkortets delprov`);
    if (d.harnast.n >= 1) assert.ok(!u.text.includes(`ca +${d.harnast.n} rätt`), `samma tal som pillen: ${u.text}`);
  }
  assert.ok(medRad > 10, `raden visades ${medRad} gånger`);
});

test('Ur det här provet pekar aldrig på ett delprov som gick bra i passet', () => {
  const r = slump(11);
  const nar = new Date(nu.getTime() - 3600_000);
  for (let k = 0; k < 60; k++) {
    const p = { xyz: 0.3 + r() * 0.7, kva: 0.3 + r() * 0.7, nog: 0.3 + r() * 0.7, dtk: 0.3 + r() * 0.7 };
    const answers = slumpSvar(T1, p, r);
    const h = [...historik(24, 0.55, r), ...passHandelser(T1, answers, nar)];
    const d = H.byggHjarnkarta(h, { nu, pass: { createdAt: nar, testId: T1, answers } });
    const u = d.urProvet;
    if (!u) continue;
    const m = u.tagg.match(/^(\d+) rätt av (\d+) i dag$/);
    assert.ok(m, u.tagg);
    const fel = Number(m[2]) - Number(m[1]);
    assert.ok(fel >= 2 && fel >= 0.4 * Number(m[2]) || fel >= Number(m[2]) / 2, `raden pekar på något som gick bra: ${u.rubrik} ${u.tagg}`);
  }
});

test('omtag inom ett dygn räknas inte igen', () => {
  const nar1 = new Date(nu.getTime() - 5 * 3600_000);
  const nar2 = new Date(nu.getTime() - 3600_000);
  const a = passSvarMed(T1, { xyz: 0.5 });
  const h = [...passHandelser(T1, a, nar2), ...passHandelser(T1, a, nar1)];
  h.sort((x, y) => y.createdAt - x.createdAt);
  // Som markeraRepetitioner: det senare svaret på samma fråga inom ett dygn är ett omförsök.
  for (const x of h) if (x.createdAt.getTime() === nar2.getTime()) x.omforsok = true;
  const d = H.byggHjarnkarta(h, { nu, pass: { createdAt: nar2, testId: T1, answers: a } });
  assert.strictEqual(d.forandring.text, 'Det här passet gjorde du nyss, så det räknas inte igen.');
  assert.strictEqual(d.forandring.foreKontur, false);
});

test('Ur det här provet: typ med minst hälften fel och typpott ≥ 0,5, annars delprovet', () => {
  const nar1 = new Date(nu.getTime() - 10 * dag);
  const nar2 = new Date(nu.getTime() - 3600_000);
  const fragor = F.fragorForTest(T3);
  // Allt rätt utom geometri i XYZ.
  const a2 = fragor.map(q => (q.typ === 'xyz:geometri' ? (q.correct + 1) % q.options.length : q.correct));
  const a1 = passSvarMed(T1, { xyz: 0.8, kva: 0.8, nog: 0.7, dtk: 0.8 });
  const h = [...passHandelser(T1, a1, nar1), ...passHandelser(T3, a2, nar2), ...svar('xyz:geometri', 2, 8, { dagar: 20 }), ...svar('mek:1', 3, 12, { dagar: 2 })];
  const d = H.byggHjarnkarta(h, { nu, pass: { createdAt: nar2, testId: T3, answers: a2 } });
  const geo = fragor.filter(q => q.typ === 'xyz:geometri').length;
  if (geo >= 2) {
    assert.ok(d.urProvet, 'raden finns');
    assert.strictEqual(d.urProvet.rubrik, 'Geometri i XYZ');
    assert.strictEqual(d.urProvet.tagg, `0 rätt av ${geo} i dag`);
    assert.ok(/^nivå runt \d+ % · (ca \+\d+ rätt att hämta|nära målet) per pass$/.test(d.urProvet.text), d.urProvet.text);
    assert.strictEqual(d.urProvet.href, '/trana/fokus?lage=typ&val=xyz:geometri');
  }
  assert.ok(V.tranaHarnastHTML(d, { fran: T3 }).includes('Ur det här provet'));
});

// ---------- Kallstart ----------

test('inga svar: tom karta med sju frågetecken och kallstartsraden', () => {
  const d = H.byggHjarnkarta([], { nu });
  assert.strictEqual(d.tom, true);
  assert.strictEqual(d.harnast.lage, 'tom');
  assert.strictEqual(d.vinnare, null);
  const rad = V.blockHTML(d, { storlek: 'kompakt' });
  assert.ok(rad.includes('Rita din hjärnkarta') && rad.includes('Gör ett provpass nedan så ritar jag in halva kartan.'));
  assert.ok(rad.includes('href="#forsta-pass"') && rad.includes('/trana/fokus?lage=snabbkoll'));
  const full = V.blockHTML(d, { storlek: 'full' });
  assert.ok(full.includes('Kartan är tom än så länge.') && full.includes('Ge mig ett provpass så ritar jag in var dina rätt finns.'));
  assert.ok(full.includes('Välj ett provpass →') && full.includes('eller en snabbkoll, cirka tio minuter'));
  assert.strictEqual((full.match(/<span>\?/g) || []).length, 7, 'sju ?');
  // API:t utan session svarar { tom: true }: vyn klarar tomData().
  assert.ok(V.blockHTML(V.tomData(), { storlek: 'full' }).includes('Kartan är tom än så länge.'));
});

test('bara verbalt: "Högra halvan är tom"', () => {
  const h = [...svar('ord', 18, 22), ...svar('las', 6, 11, { grupp: null }), ...svar('mek:1', 4, 10)];
  const d = H.byggHjarnkarta(h, { nu });
  assert.strictEqual(d.harnast.halva.fet, 'Högra halvan är tom.');
  assert.strictEqual(d.harnast.halva.text, 'Gör ett kvantitativt pass så ritar jag in XYZ, KVA, NOG och DTK.');
  assert.strictEqual(d.harnast.halva.lank, 'Välj ett kvantitativt pass ›');
  assert.strictEqual(d.harnast.halva.href, '/extra#forsta-kvant');
  assert.ok(['ord', 'las', 'mek'].includes(d.harnast.delprov));
  assert.ok(V.tranaHarnastHTML(d).includes('Högra halvan är tom.'));
});

test('snabbkollen: alla axlar grå, gissningen jämför halvorna', () => {
  const h = [
    ...svar('xyz:algebra', 1, 2), ...svar('kva:algebra', 1, 2), ...svar('nog:logik', 1, 2), ...svar('dtk:diagram', 1, 3),
    ...svar('ord', 3, 3), ...svar('mek:1', 2, 3), ...svar('las', 2, 3),
  ];
  const d = H.byggHjarnkarta(h, { nu });
  assert.ok(d.axlar.every(a => a.osaker), 'alla grå');
  assert.strictEqual(d.harnast.lage, 'pass');
  assert.strictEqual(d.vinnare, null);
  assert.strictEqual(d.harnast.fet, 'Snabbkollen ger en första riktning, inte en karta.');
  assert.strictEqual(d.harnast.mening, 'Kvantitativt gick trögare, 4 av 9 mot 7 av 9, så börja där.');
  assert.strictEqual(d.harnast.knapp, 'Gör ett kvantitativt provpass →');
  assert.strictEqual(d.harnast.href, '/extra#forsta-kvant');
  assert.ok(d.harnast.lank && /^eller 10 (XYZ|KVA|NOG|DTK)‑uppgifter$/.test(d.harnast.lank.text));
  const html = V.ritaKarta(d, { storlek: 'kompakt' });
  assert.ok(!html.includes('hk-pil') && !html.includes('hk-punkt'));
  // Omvänt när verbalt gick trögare.
  const h2 = [...svar('xyz:algebra', 2, 2), ...svar('kva:algebra', 2, 2), ...svar('nog:logik', 2, 2), ...svar('dtk:diagram', 2, 3), ...svar('ord', 1, 3), ...svar('mek:1', 1, 3), ...svar('las', 1, 3)];
  const d2 = H.byggHjarnkarta(h2, { nu });
  assert.strictEqual(d2.harnast.mening, 'Verbalt gick trögare, 3 av 9 mot 8 av 9, så börja där.');
  assert.strictEqual(d2.harnast.knapp, 'Gör ett verbalt provpass →');
  assert.strictEqual(d2.harnast.href, '/extra#forsta-verbal');
});

// ---------- Vyn ----------

test('vyn drar inte in frågedata', () => {
  const kalla = readFileSync('src/lib/fokus/hjarnkarta-vy.ts', 'utf8');
  assert.ok(!/from '\.\/fragebank|questions-|extraprov\/register|extraprov\/data/.test(kalla), 'otillåten import i vyn');
  const storlek = statSync(join(ut, 'vy.js')).size;
  assert.ok(storlek < 80_000, `vyns bundle är ${storlek} byte`);
});

test('inga tankstreck i texterna', () => {
  for (const d of [H.byggHjarnkarta(FULL, { nu }), H.byggHjarnkarta([], { nu })]) {
    ingaTankstreck(V.blockHTML(d, { storlek: 'full' }), 'blocket');
    ingaTankstreck(V.blockHTML(d, { storlek: 'kompakt' }), 'blocket');
    for (const a of d.axlar) ingaTankstreck(V.arkHTML(d, a.delprov), `arket ${a.delprov}`);
  }
});

test('etiketter: minst en tryckyta, aria-text och ingen överlappning på 320 px', () => {
  const d = H.byggHjarnkarta(FULL, { nu });
  const html = V.ritaKarta(d, { storlek: 'kompakt' });
  assert.strictEqual((html.match(/<button type="button" class="hk-etk/g) || []).length, 7);
  assert.ok(html.includes('aria-label="MEK, '), 'aria-text på etiketten');
  assert.ok(/role="img" aria-label="Din hjärnkarta: XYZ \d+ procent/.test(html));
  assert.ok(html.includes('Mest att hämta: MEK.'));
  // Innerbredd på en 320 px telefon: 320 − sidans 2·16 − kortets 2·17 + 2·8.
  for (const [bredd, storlek] of [[270, 'kompakt'], [270, 'full'], [310, 'kompakt'], [350, 'kompakt'], [350, 'full'], [600, 'full']]) {
    for (const data of [d, H.byggHjarnkarta([], { nu })]) {
      const g = V.kartGeometri(data, { storlek, bredd });
      const rutor = g.etk.map(e => {
        const x = g.CX + e.x - (e.tx === '-50%' ? e.w / 2 : e.tx === '-100%' ? e.w : 0);
        const y = e.y - (e.ty === '-100%' ? e.h : e.ty === '-50%' ? e.h / 2 : 0);
        return { x, y, w: e.w, h: e.h };
      });
      for (const r of rutor) {
        assert.ok(r.x >= 0 && r.x + r.w <= g.W + 0.5, `etikett utanför bredden ${bredd}`);
        assert.ok(r.y >= 0 && r.y + r.h <= g.H, `etikett utanför höjden ${bredd}`);
        // Ytterringen (100 %) får inte gå in i etiketten.
        for (let k = 0; k < 7 * 20; k++) {
          const i = Math.floor(k / 20), t = (k % 20) / 20;
          const a1 = i * 2 * Math.PI / 7, a2 = (i + 1) * 2 * Math.PI / 7;
          const px = g.CX + g.R * ((1 - t) * Math.sin(a1) + t * Math.sin(a2));
          const py = g.CY - g.R * ((1 - t) * Math.cos(a1) + t * Math.cos(a2));
          assert.ok(!(px > r.x && px < r.x + r.w && py > r.y && py < r.y + r.h), `kartan går in i en etikett vid bredd ${bredd}`);
        }
      }
      for (let i = 0; i < rutor.length; i++) for (let j = i + 1; j < rutor.length; j++) {
        const a = rutor[i], b = rutor[j];
        const over = a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;
        assert.ok(!over, `etikett ${i} och ${j} överlappar vid bredd ${bredd}`);
      }
      assert.ok(g.R >= 34);
    }
  }
  const smal = V.kartGeometri(d, { storlek: 'kompakt', bredd: 270 });
  const bred = V.kartGeometri(d, { storlek: 'kompakt', bredd: 600 });
  assert.ok(smal.R < bred.R && bred.R === 93, 'kartan krymper, etiketterna inte');
  assert.strictEqual(V.kartGeometri(d, { storlek: 'full', bredd: 540 }).R, 88);
  // I en bred container (en spalt på datorn) får kartan växa lite.
  assert.strictEqual(V.kartGeometri(d, { storlek: 'full', bredd: 600 }).R, 110);
});

test('etiketter med förändringssiffra krockar inte, inte ens på 320 px', () => {
  // Rättningen efter ett starkt pass: tre kvantitativa axlar med ↑ och före-konturen.
  const d0 = H.byggHjarnkarta(FULL, { nu });
  const d = { ...d0, forandring: { ...(d0.forandring || {}), fet: '', text: 'x', foreKontur: true },
    axlar: d0.axlar.map(a => ['xyz', 'kva', 'nog'].includes(a.delprov) ? { ...a, fore: Math.max(0.05, a.styrka - 0.25), delta: 24 } : { ...a, fore: a.styrka }) };
  for (const bredd of [262, 300, 334, 385]) {
    const g = V.kartGeometri(d, { storlek: 'full', bredd });
    const rutor = g.etk.map(e => ({
      x: g.CX + e.x - (e.tx === '-50%' ? e.w / 2 : e.tx === '-100%' ? e.w : 0),
      y: e.y - (e.ty === '-100%' ? e.h : e.ty === '-50%' ? e.h / 2 : 0), w: e.w, h: e.h,
    }));
    for (const r of rutor) assert.ok(r.x >= 0 && r.x + r.w <= g.W + 0.5 && r.y >= 0 && r.y + r.h <= g.H, `etikett utanför kartan vid ${bredd}`);
    for (let i = 0; i < 7; i++) for (let j = i + 1; j < 7; j++) {
      const a = rutor[i], b = rutor[j];
      assert.ok(!(a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h), `etikett ${i} och ${j} överlappar vid ${bredd} med förändringssiffror`);
    }
  }
  // Tvåradig etikett: siffran står på namnraden.
  const g334 = V.kartGeometri(d, { storlek: 'full', bredd: 334 });
  assert.ok(g334.allaTva && g334.medDelta && g334.R >= 50, `400 px: tvåradigt med siffror, R ${g334.R}`);
  const html = V.ritaKarta(d, { storlek: 'full', bredd: 334 });
  assert.ok(/<span class="hk-r1"><b>XYZ<\/b> <span class="hk-upp">↑24<\/span><\/span>/.test(html), 'XYZ ↑24 på namnraden');
  // På 320 px skulle siffrorna krympa kartan under 50: de stryks och kartan behåller sin storlek.
  const g262 = V.kartGeometri(d, { storlek: 'full', bredd: 262 });
  assert.ok(!g262.medDelta && g262.R >= 50, `320 px: utan siffror, R ${g262.R}`);
  assert.ok(!V.ritaKarta(d, { storlek: 'full', bredd: 262 }).includes('hk-upp'), 'inga siffror på 320 px');
});

test('arket: toppen, spåret, raderna och huvudknappen', () => {
  const d = H.byggHjarnkarta(FULL, { nu });
  const x = axel(d, 'xyz');
  const ark = V.arkHTML(d, 'xyz', { fran: 'extra-ht2012-1' });
  assert.ok(ark.includes('Kvantitativt') && ark.includes('>XYZ<') && ark.includes('Matematisk problemlösning'));
  assert.ok(ark.includes(`${x.visadPct}&nbsp;%`) && ark.includes('din nivå just nu · målet 85&nbsp;%'));
  assert.ok(ark.includes(`Byggt på ${x.antal} svar`));
  assert.ok(ark.includes('data-hk-stang'));
  // Osäkra typer: råsiffran och Testa 5; typer utan svar samlas på en rad.
  const d3 = H.byggHjarnkarta([...FULL, ...svar('xyz:funktioner', 1, 3)], { nu });
  const ark3 = V.arkHTML(d3, 'xyz', { fran: 'extra-ht2012-1' });
  assert.ok(ark3.includes('1 rätt av 3 hittills · <u>Testa 5 ›</u>'), 'osäker typ med råsiffran');
  assert.ok(/lage=typ&amp;val=xyz:funktioner&amp;antal=5&amp;fran=extra-ht2012-1/.test(ark3), 'osäker rad testar 5');
  const utan = d3.typer.xyz.filter(t => t.antal === 0);
  assert.ok(utan.length >= 2, 'minst två typer utan svar');
  assert.strictEqual((ark3.match(/class="hk-typ-tom"/g) || []).length, 1, 'en enda rad för typer utan svar');
  assert.ok(ark3.includes(`<b>Inga svar än:</b> ${utan.map(t => t.namn).slice(0, -1).join(', ')} och ${utan[utan.length - 1].namn}`));
  for (const t of utan) assert.ok(!ark3.includes(`val=${t.typ}&amp;`), `ingen egen rad för ${t.typ}`);
  assert.ok(ark.includes('Så räknar jag'));
  assert.ok(ark.includes('class="hk-ark-fot"'));
  // Osäker axel: frågetecken och randigt spår.
  const las = V.arkHTML(H.byggHjarnkarta([...FULL.filter(q => q.delprov !== 'las'), ...svar('las', 1, 3)], { nu }), 'las');
  assert.ok(las.includes('<b>?</b>') && las.includes('hk-osaker') && las.includes('LÄS är grå: 3 svar hittills. Ett verbalt provpass gör den skarp.'));
});

test('arket: Mest att hämta sitter på samma typ som knappen', () => {
  const d = H.byggHjarnkarta(FULL, { nu });
  const x = axel(d, 'xyz');
  const rader = d.typer.xyz.filter(t => !t.osaker);
  assert.ok(rader.length >= 2, 'minst två säkra typer i XYZ');
  // Knappen tränar den typ som har minst pott; raden och knappen ska ändå peka på samma.
  const knappTyp = [...rader].sort((p, q) => p.pott - q.pott)[0];
  const typer = { ...d.typer, xyz: d.typer.xyz.map(t => ({ ...t, pott: Math.max(t.pott, 0.6) })) };
  const trana = { ...x.trana, lage: 'typ', typ: knappTyp.typ, kort: 'x' };
  const d2 = { ...d, typer, axlar: d.axlar.map(a => a.delprov === 'xyz' ? { ...a, trana } : a) };
  const ark = V.arkHTML(d2, 'xyz');
  const forsta = ark.match(/<a class="hk-typ" href="([^"]+)"[^>]*>.*?<\/a>/)[0];
  assert.ok(forsta.includes(`val=${knappTyp.typ}`) && forsta.includes('Mest att hämta'), 'knappens typ står överst med Mest att hämta');
  assert.strictEqual((ark.match(/Mest att hämta</g) || []).length, 1);
});

test('arket: "nära målet" bara nära målet, annars "under 1 rätt per pass"; spridd lucka förklaras', () => {
  const d = H.byggHjarnkarta(FULL, { nu });
  const x = axel(d, 'xyz');
  const bas = d.typer.xyz.find(t => !t.osaker);
  const rad = (typ, styrka, perPass) => ({ ...bas, typ, namn: typ, kort: typ, styrka, visadPct: Math.round(styrka * 100), perPass, pott: perPass * (0.85 - styrka), n: 0, href: `/trana/fokus?lage=typ&val=${typ}` });
  const typer = { ...d.typer, xyz: [rad('xyz:a', 0.7, 3), rad('xyz:b', 0.81, 3)] };
  const d2 = { ...d, typer, axlar: d.axlar.map(a => (a.delprov === 'xyz' ? { ...a, n: 2, pott: 2, trana: { ...x.trana, lage: 'delprov', typ: null } } : a)) };
  const ark = V.arkHTML(d2, 'xyz');
  const radA = ark.match(/<a class="hk-typ" href="[^"]*val=xyz:a"[^>]*>.*?<\/a>/)[0];
  const radB = ark.match(/<a class="hk-typ" href="[^"]*val=xyz:b"[^>]*>.*?<\/a>/)[0];
  assert.ok(radA.includes('under 1 rätt per pass') && !radA.includes('nära målet'), '70 % mot 85 % är inte nära målet');
  assert.ok(radB.includes('nära målet'), '81 % mot 85 % är nära målet');
  assert.ok(ark.indexOf('val=xyz:a') < ark.indexOf('val=xyz:b'), 'störst lucka först');
  assert.ok(ark.includes('Luckan är spridd: ingen typ ger 1 rätt per pass för sig.'));
});

test('arket för MEK: osäkra luckor i ordningen en, två, tre', () => {
  const h = [...FULL.filter(q => q.delprov !== 'mek'), ...svar('mek:1', 2, 2), ...svar('mek:2', 0, 3), ...svar('mek:3', 1, 2)];
  const d = H.byggHjarnkarta(h, { nu });
  const ark = V.arkHTML(d, 'mek');
  const i1 = ark.indexOf('>En lucka<'), i2 = ark.indexOf('>Två luckor<'), i3 = ark.indexOf('>Tre luckor<');
  assert.ok(i1 > 0 && i1 < i2 && i2 < i3, 'En, Två, Tre');
  assert.ok(ark.includes('0 rätt av 3 hittills'));
});

console.log(`\n${antalTester} tester gick igenom.`);
