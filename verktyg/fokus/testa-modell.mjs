// Fristående test av svaghetsmodellen och urvalet i src/lib/fokus.
// Kör: node verktyg/fokus/testa-modell.mjs
import * as esbuild from 'esbuild';
import { mkdtempSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import { pathToFileURL } from 'url';
import assert from 'assert';

const ut = mkdtempSync(join(tmpdir(), 'hp-fokus-'));
await esbuild.build({
  entryPoints: ['src/lib/fokus/styrka.ts', 'src/lib/fokus/urval.ts', 'src/lib/fokus/typer.ts'],
  bundle: true, format: 'esm', platform: 'node', outdir: ut, logLevel: 'error',
});
const S = await import(pathToFileURL(join(ut, 'styrka.js')).href);
const U = await import(pathToFileURL(join(ut, 'urval.js')).href);
const T = await import(pathToFileURL(join(ut, 'typer.js')).href);

const dag = 24 * 3600 * 1000;
const nu = Date.now();
const h = (typ, correct, dagarSedan, id) => ({ questionId: id || `q-${typ}-${dagarSedan}-${correct}`, delprov: typ.split(':')[0], typ, correct, createdAt: new Date(nu - dagarSedan * dag) });

// Styrkemodellen
{
  const s = S.beraknaStyrkor([h('xyz:algebra', false, 0), h('xyz:algebra', false, 1)]).get('xyz:algebra');
  assert.ok(s.osaker, 'två svar är för lite data');
  assert.ok(s.styrka > 0.33 && s.styrka < 0.35, `två fel av två ger ungefär prior 2/6, fick ${s.styrka}`);

  const allaRatt = Array.from({ length: 10 }, (_, i) => h('kva:geometri', true, i));
  const s2 = S.beraknaStyrkor(allaRatt).get('kva:geometri');
  assert.ok(!s2.osaker && s2.styrka > 0.8 && s2.styrka < 1, `tio rätt ger hög styrka, fick ${s2.styrka}`);

  // Nya svar väger mer: fem gamla rätt och fem nya fel ska ge under 50 procent.
  const bland = [...Array.from({ length: 5 }, (_, i) => h('nog:logik', false, i)), ...Array.from({ length: 5 }, (_, i) => h('nog:logik', true, 20 + i))];
  const s3 = S.beraknaStyrkor(bland).get('nog:logik');
  assert.ok(s3.styrka < 0.5, `nya fel väger mer än gamla rätt, fick ${s3.styrka}`);
  const bland2 = [...Array.from({ length: 5 }, (_, i) => h('nog:logik', true, i)), ...Array.from({ length: 5 }, (_, i) => h('nog:logik', false, 20 + i))];
  assert.ok(S.beraknaStyrkor(bland2).get('nog:logik').styrka > 0.5, 'nya rätt väger mer än gamla fel');

  assert.strictEqual(S.styrkeNiva(s), 'gra');
  assert.strictEqual(S.styrkeNiva(s2), 'gron');
  const s2b = S.beraknaStyrkor(Array.from({ length: 20 }, (_, i) => h('kva:geometri', true, i))).get('kva:geometri');
  assert.ok(s2b.styrka > 0.85, `tjugo rätt ger över 85 procent, fick ${s2b.styrka}`);

  // Effektivt antal växer inte obegränsat: 100 svar väger som cirka 15.
  const langt = Array.from({ length: 100 }, (_, i) => h('ord', i % 3 !== 0, i));
  const s4 = S.beraknaStyrkor(langt).get('ord');
  assert.ok(s4.effektivt > 13 && s4.effektivt < 16, `effektivt antal cirka 15, fick ${s4.effektivt}`);
  assert.strictEqual(s4.antal, 100);

  // Prioritet: en vanlig typ med måttlig svaghet går före en ovanlig typ med stor svaghet.
  const styrkorP = S.beraknaStyrkor([
    ...Array.from({ length: 8 }, (_, i) => h('dtk:diagram', i % 2 === 0, i)),
    ...Array.from({ length: 8 }, (_, i) => h('xyz:enheter', false, i)),
  ]);
  const vikter = new Map([['dtk:diagram', 7.2], ['xyz:enheter', 0.13]]);
  const ordning = S.svagasteTyper(styrkorP, 3, vikter).map(x => x.typ);
  assert.deepStrictEqual(ordning, ['dtk:diagram', 'xyz:enheter'], `vikt styr ordningen, fick ${ordning}`);
  const utanVikt = S.svagasteTyper(styrkorP, 3).map(x => x.typ);
  assert.deepStrictEqual(utanVikt, ['xyz:enheter', 'dtk:diagram'], 'utan vikter är det lägst styrka först');
  // Typer som redan sitter (över målstyrkan) rankas aldrig som svagheter, hur vanliga de än är.
  const stark = S.beraknaStyrkor(Array.from({ length: 20 }, (_, i) => h('kva:algebra', true, i)));
  assert.strictEqual(S.svagasteTyper(stark, 3).length, 0, 'en behärskad typ ger ingen prioritet');
  const blandat = S.beraknaStyrkor([
    ...Array.from({ length: 20 }, (_, i) => h('ord', true, i)),
    ...Array.from({ length: 8 }, (_, i) => h('xyz:sannolikhet', false, i)),
  ]);
  const rank = S.svagasteTyper(blandat, 3, new Map([['ord', 10], ['xyz:sannolikhet', 0.27]])).map(x => x.typ);
  assert.deepStrictEqual(rank, ['xyz:sannolikhet'], `20 av 20 rätt på ORD är ingen svaghet, fick ${rank}`);

  // Svar med samma tidsstämpel (ett provpass) väger lika oavsett ordning i passet.
  const sitt = (ordning) => S.beraknaStyrkor(ordning.map((c, i) => ({ questionId: 'p' + i, delprov: 'ord', typ: 'ord', correct: c, createdAt: new Date(nu) }))).get('ord').styrka;
  const a1 = sitt([true, true, true, true, true, false, false, false, false, false]);
  const a2 = sitt([false, false, false, false, false, true, true, true, true, true]);
  assert.ok(Math.abs(a1 - a2) < 1e-9, `samma sittning ger samma styrka, fick ${a1} och ${a2}`);

  // Färgnivån följer den avrundade procenten.
  const mk = (st) => ({ typ: 't', delprov: 'xyz', styrka: st, antal: 10, effektivt: 8, ratt: 5, osaker: false, senast: null });
  assert.strictEqual(S.styrkeNiva(mk(0.796)), 'gron');
  assert.strictEqual(S.styrkeNiva(mk(0.794)), 'bla');
  console.log('styrkemodell: ok');
}

// Typer
{
  assert.strictEqual(T.typFor('mek', { text: 'a _____ b _____ c', options: [], correct: 0, num: 1 }), 'mek:2');
  assert.strictEqual(T.typFor('xyz', { text: '', options: [], correct: 0, num: 1, category: 'algebra' }), 'xyz:algebra');
  assert.strictEqual(T.typFor('ord', { text: '', options: [], correct: 0, num: 1 }), 'ord');
  assert.strictEqual(T.typNamn('mek:2'), 'MEK med två luckor');
  assert.strictEqual(T.typNamn('dtk:tabell'), 'DTK tabeller');
  assert.strictEqual(T.normaliseraDelprov('xyz2'), 'xyz');
  assert.strictEqual(T.frageId('extra-ht2012-1', 17), 'extra-ht2012-1#17');
  console.log('typer: ok');
}

// Urval
{
  const slump = (() => { let x = 12345; return () => { x = (x * 1103515245 + 12345) % 2147483648; return x / 2147483648; }; })();
  const pool = [];
  let n = 0;
  const q = (delprov, typ, grupp) => ({ id: `f${n++}`, testId: 't', delprov, typ, grupp: grupp || null, options: ['a', 'b'], correct: 0, num: n, text: '' });
  for (let i = 0; i < 40; i++) pool.push(q('xyz', i % 2 ? 'xyz:algebra' : 'xyz:geometri'));
  for (let d = 0; d < 6; d++) for (let i = 0; i < 3; i++) pool.push(q('dtk', 'dtk:diagram', `dia${d}`));
  for (let i = 0; i < 20; i++) pool.push(q('mek', 'mek:1'));

  const enheter = U.tillEnheter(pool.filter(x => x.delprov === 'dtk'));
  assert.strictEqual(enheter.length, 6, 'sex diagram blir sex enheter');
  assert.ok(enheter.every(e => e.fragor.length === 3));

  const r1 = U.valjRunda({ lage: 'delprov', val: 'xyz', pool, sedda: new Set(), attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  assert.strictEqual(r1.length, 10);
  assert.ok(r1.every(e => e.fragor[0].delprov === 'xyz'));
  assert.strictEqual(new Set(r1.map(e => e.fragor[0].id)).size, 10, 'inga dubbletter');

  const sedda = new Set(pool.filter(x => x.typ === 'xyz:algebra').slice(0, 15).map(x => x.id));
  const r2 = U.valjRunda({ lage: 'typ', val: 'xyz:algebra', pool, sedda, attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  assert.strictEqual(r2.length, 10);
  assert.ok(r2.filter(e => sedda.has(e.fragor[0].id)).length === 5, 'osedda först (5 osedda finns), sedan sedda som utfyllnad');

  // Utfyllnad med sedda tar de äldst sedda först.
  const allaAlg = pool.filter(x => x.typ === 'xyz:algebra');
  const seddaAlla = new Set(allaAlg.map(x => x.id));
  const senastSedd = new Map(allaAlg.map((x, i) => [x.id, new Date(nu - (i + 1) * dag)]));
  const r2b = U.valjRunda({ lage: 'typ', val: 'xyz:algebra', pool, sedda: seddaAlla, senastSedd, attRepetera: new Set(), styrkor: new Map(), antal: 5, slump });
  const aldst = allaAlg.slice(-5).map(x => x.id);
  assert.ok(r2b.every(e => aldst.includes(e.fragor[0].id)), 'när allt är sett kommer de äldst sedda först');

  const r3 = U.valjRunda({ lage: 'delprov', val: 'dtk', pool, sedda: new Set(), attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  assert.strictEqual(r3.length, 4, 'fyra diagram ger tolv frågor, minst tio');
  assert.ok(r3.every(e => e.fragor.length === 3 && e.fragor.every(f => f.grupp === e.grupp)), 'diagram hålls ihop');

  const styrkor = new Map([
    ['xyz:geometri', { typ: 'xyz:geometri', delprov: 'xyz', styrka: 0.3, antal: 8, ratt: 2, osaker: false, senast: new Date() }],
    ['mek:1', { typ: 'mek:1', delprov: 'mek', styrka: 0.4, antal: 8, ratt: 3, osaker: false, senast: new Date() }],
    ['xyz:algebra', { typ: 'xyz:algebra', delprov: 'xyz', styrka: 0.9, antal: 8, ratt: 7, osaker: false, senast: new Date() }],
    ['dtk:diagram', { typ: 'dtk:diagram', delprov: 'dtk', styrka: 0.95, antal: 8, ratt: 8, osaker: false, senast: new Date() }],
  ]);
  const attRepetera = new Set([pool[0].id, pool[2].id]);
  for (const st of styrkor.values()) st.effektivt = st.antal;
  const r4 = U.valjRunda({ lage: 'svagheter', pool, sedda: new Set(), attRepetera, styrkor, antal: 10, slump });
  const antalFragor4 = r4.reduce((a, e) => a + e.fragor.length, 0);
  assert.ok(antalFragor4 >= 10 && antalFragor4 <= 13, `ungefär tio frågor, fick ${antalFragor4}`);
  // Avslutning från starkaste typen: dtk:diagram har bara grupper, så det blir xyz:algebra
  // (när den inte själv räknas som svag).
  const r4c = U.valjRunda({ lage: 'svagheter', pool, sedda: new Set(), attRepetera: new Set(), styrkor, svaga: [styrkor.get('xyz:geometri'), styrkor.get('mek:1')], antal: 10, slump });
  assert.strictEqual(r4c[r4c.length - 1].fragor[0].typ, 'xyz:algebra', 'rundan slutar med en fristående uppgift från den starkaste typen');
  assert.ok(r4c.slice(0, -1).filter(e => e.fragor[0].typ === 'xyz:algebra').length <= 3, 'starka typen mest som avslutning');
  const typer = r4.map(e => e.fragor[0].typ);
  const svaga = typer.filter(t => t === 'xyz:geometri' || t === 'mek:1' || t === 'xyz:algebra').length;
  // Med svaga-listan inskickad från svagasteTyper används den i stället för lägst styrka.
  const r4b = U.valjRunda({ lage: 'svagheter', pool, sedda: new Set(), attRepetera: new Set(), styrkor, svaga: [styrkor.get('mek:1')], antal: 10, slump });
  assert.ok(r4b.filter(e => e.fragor[0].typ === 'mek:1').length >= 6, 'inskickad svaga-lista styr urvalet');

  // Högst två enheter från samma pass i läge delprov.
  const poolPass = pool.map((q, i) => ({ ...q, testId: `pass${Math.floor(i / 6)}` }));
  const r6 = U.valjRunda({ lage: 'delprov', val: 'xyz', pool: poolPass, sedda: new Set(), attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  const perPass = {};
  for (const e of r6) perPass[e.fragor[0].testId] = (perPass[e.fragor[0].testId] || 0) + 1;
  assert.ok(Object.values(perPass).every(n => n <= 2), `högst två per pass, fick ${JSON.stringify(perPass)}`);
  assert.ok(svaga >= Math.floor(r4.length * 0.6), `mest från de tre svagaste, fick ${svaga} av ${r4.length}: ${typer.join(',')}`);
  assert.ok(r4.some(e => attRepetera.has(e.fragor[0].id)), 'gamla fel återbesöks');
  assert.strictEqual(new Set(r4.flatMap(e => e.fragor.map(f => f.id))).size, r4.reduce((a, e) => a + e.fragor.length, 0), 'inga dubbletter');

  // Diagram vars frågor har olika kategori hålls ihop och kommer aldrig två gånger.
  const poolBland = [...pool];
  for (let d = 0; d < 6; d++) for (let i = 0; i < 4; i++) poolBland.push(q('dtk', i === 3 ? 'dtk:diagram' : 'dtk:tabell', `bland${d}`));
  const r7 = U.valjRunda({ lage: 'typ', val: 'dtk:tabell', pool: poolBland, sedda: new Set(), attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  assert.ok(r7.every(e => e.fragor.length === 4), 'hela diagrammet följer med även om en fråga har annan kategori');
  const styrkorD = new Map([
    ['dtk:tabell', { typ: 'dtk:tabell', delprov: 'dtk', styrka: 0.3, antal: 8, effektivt: 8, ratt: 2, osaker: false, senast: new Date() }],
    ['dtk:diagram', { typ: 'dtk:diagram', delprov: 'dtk', styrka: 0.35, antal: 8, effektivt: 8, ratt: 3, osaker: false, senast: new Date() }],
    ['mek:1', { typ: 'mek:1', delprov: 'mek', styrka: 0.9, antal: 8, effektivt: 8, ratt: 7, osaker: false, senast: new Date() }],
  ]);
  const r8 = U.valjRunda({ lage: 'svagheter', pool: poolBland, sedda: new Set(), attRepetera: new Set(), styrkor: styrkorD, antal: 10, slump });
  const grupper8 = r8.map(e => e.grupp).filter(Boolean);
  assert.strictEqual(new Set(grupper8).size, grupper8.length, `samma diagram får inte komma två gånger: ${grupper8}`);

  // Osedda kommer alltid före sedda, även när de osedda ligger i samma pass.
  const poolOrd = pool.filter(x => x.delprov === 'mek').map((x, i) => ({ ...x, testId: i < 5 ? 'samma' : `p${i}` }));
  const seddaOrd = new Set(poolOrd.slice(5).map(x => x.id));
  const r9 = U.valjRunda({ lage: 'delprov', val: 'mek', pool: poolOrd, sedda: seddaOrd, attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  assert.strictEqual(r9.filter(e => !seddaOrd.has(e.fragor[0].id)).length, 5, 'alla fem osedda är med fast de ligger i samma pass');
  assert.ok(r9.slice(0, 5).every(e => !seddaOrd.has(e.fragor[0].id)), 'osedda först');

  const r5 = U.valjRunda({ lage: 'svagheter', pool, sedda: new Set(), attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  assert.strictEqual(r5.length, 0, 'utan historik inget urval');
  console.log('urval: ok');
}
console.log('ALLT OK');
