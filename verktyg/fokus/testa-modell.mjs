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
  assert.ok(Math.abs(s.styrka - 2 / 6) < 1e-9, `två fel av två ger prior 2/6, fick ${s.styrka}`);

  const allaRatt = Array.from({ length: 10 }, (_, i) => h('kva:geometri', true, i));
  const s2 = S.beraknaStyrkor(allaRatt).get('kva:geometri');
  assert.ok(!s2.osaker && s2.styrka > 0.85 && s2.styrka < 1, `tio rätt ger hög styrka, fick ${s2.styrka}`);

  // Nya svar väger mer: fem gamla rätt och fem nya fel ska ge under 50 procent.
  const bland = [...Array.from({ length: 5 }, (_, i) => h('nog:logik', false, i)), ...Array.from({ length: 5 }, (_, i) => h('nog:logik', true, 20 + i))];
  const s3 = S.beraknaStyrkor(bland).get('nog:logik');
  assert.ok(s3.styrka < 0.5, `nya fel väger mer än gamla rätt, fick ${s3.styrka}`);
  const bland2 = [...Array.from({ length: 5 }, (_, i) => h('nog:logik', true, i)), ...Array.from({ length: 5 }, (_, i) => h('nog:logik', false, 20 + i))];
  assert.ok(S.beraknaStyrkor(bland2).get('nog:logik').styrka > 0.5, 'nya rätt väger mer än gamla fel');

  assert.strictEqual(S.styrkeNiva(s), 'gra');
  assert.strictEqual(S.styrkeNiva(s2), 'gron');
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
  const q = (delprov, typ, grupp) => ({ id: `f${n++}`, delprov, typ, grupp: grupp || null, options: ['a', 'b'], correct: 0, num: n, text: '' });
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
  const r4 = U.valjRunda({ lage: 'svagheter', pool, sedda: new Set(), attRepetera, styrkor, antal: 10, slump });
  const antalFragor4 = r4.reduce((a, e) => a + e.fragor.length, 0);
  assert.ok(antalFragor4 >= 10 && antalFragor4 <= 13, `ungefär tio frågor, fick ${antalFragor4}`);
  const typer = r4.map(e => e.fragor[0].typ);
  const svaga = typer.filter(t => t === 'xyz:geometri' || t === 'mek:1' || t === 'xyz:algebra').length;
  assert.ok(svaga >= Math.floor(r4.length * 0.6), `mest från de tre svagaste, fick ${svaga} av ${r4.length}: ${typer.join(',')}`);
  assert.ok(r4.some(e => attRepetera.has(e.fragor[0].id)), 'gamla fel återbesöks');
  assert.strictEqual(new Set(r4.flatMap(e => e.fragor.map(f => f.id))).size, r4.reduce((a, e) => a + e.fragor.length, 0), 'inga dubbletter');

  const r5 = U.valjRunda({ lage: 'svagheter', pool, sedda: new Set(), attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  assert.strictEqual(r5.length, 0, 'utan historik inget urval');
  console.log('urval: ok');
}
console.log('ALLT OK');
