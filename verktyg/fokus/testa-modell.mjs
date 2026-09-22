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
  assert.ok(s.styrka > 0.30 && s.styrka < 0.36, `två fel av två ger ungefär prior 2/6, fick ${s.styrka}`);

  const allaRatt = Array.from({ length: 10 }, (_, i) => h('kva:geometri', true, i));
  const s2 = S.beraknaStyrkor(allaRatt).get('kva:geometri');
  assert.ok(!s2.osaker && s2.styrka > 0.8 && s2.styrka < 1, `tio rätt ger hög styrka, fick ${s2.styrka}`);
  const s2b = S.beraknaStyrkor(Array.from({ length: 30 }, (_, i) => h('kva:geometri', true, i))).get('kva:geometri');
  assert.ok(s2b.styrka > 0.85, `trettio rätt ger över 85 procent, fick ${s2b.styrka}`);

  // Nya svar väger mer: fem gamla rätt och fem nya fel ska ge under 50 procent.
  const bland = [...Array.from({ length: 5 }, (_, i) => h('nog:logik', false, i)), ...Array.from({ length: 5 }, (_, i) => h('nog:logik', true, 40 + i))];
  assert.ok(S.beraknaStyrkor(bland).get('nog:logik').styrka < 0.5, 'nya fel väger mer än gamla rätt');
  const bland2 = [...Array.from({ length: 5 }, (_, i) => h('nog:logik', true, i)), ...Array.from({ length: 5 }, (_, i) => h('nog:logik', false, 40 + i))];
  assert.ok(S.beraknaStyrkor(bland2).get('nog:logik').styrka > 0.5, 'nya rätt väger mer än gamla fel');

  // Halveringstid 20: en runda på tio skriver inte om halva skattningen.
  const forst = Array.from({ length: 20 }, (_, i) => ({ ...h('xyz:aritmetik', true, 10 + i), kalla: 'prov' }));
  const sedan = Array.from({ length: 10 }, (_, i) => ({ ...h('xyz:aritmetik', false, i), kalla: 'runda' }));
  const fore = S.beraknaStyrkor(forst).get('xyz:aritmetik').styrka;
  const efter = S.beraknaStyrkor([...forst, ...sedan]).get('xyz:aritmetik').styrka;
  assert.ok(fore - efter < 0.45 && fore - efter > 0.15, `tio fel i en runda sänker måttligt, från ${fore} till ${efter}`);

  // Rundsvar väger 0,7 mot tidsatta provsvar.
  const provRatt = S.beraknaStyrkor([...Array.from({ length: 6 }, (_, i) => ({ ...h('ord', true, i), kalla: 'prov' })), ...Array.from({ length: 6 }, (_, i) => ({ ...h('ord', false, 6 + i), kalla: 'runda' }))]).get('ord').styrka;
  const rundaRatt = S.beraknaStyrkor([...Array.from({ length: 6 }, (_, i) => ({ ...h('ord', true, i), kalla: 'runda' })), ...Array.from({ length: 6 }, (_, i) => ({ ...h('ord', false, 6 + i), kalla: 'prov' }))]).get('ord').styrka;
  assert.ok(provRatt > rundaRatt, 'provsvar väger tyngre än rundsvar');

  // Grupptak: fyra fel på samma diagram samma dag räknas som två svar.
  const grupp = Array.from({ length: 4 }, (_, i) => ({ ...h('dtk:tabell', false, 0, 'g' + i), grupp: 'dia1' }));
  assert.ok(S.beraknaStyrkor(grupp).get('dtk:tabell').effektivt < 2.1, 'ett diagram bidrar med högst två svar');
  assert.ok(S.beraknaStyrkor(grupp).get('dtk:tabell').osaker, 'ett diagram räcker inte för en siffra');

  // Obesvarad provfråga räknas som fel med halv vikt.
  const obesv = S.beraknaStyrkor([...Array.from({ length: 4 }, (_, i) => ({ ...h('kva:algebra', true, i), kalla: 'prov' })), { ...h('kva:algebra', false, 0, 'ob'), kalla: 'prov', obesvarad: true }]).get('kva:algebra');
  const fel = S.beraknaStyrkor([...Array.from({ length: 4 }, (_, i) => ({ ...h('kva:algebra', true, i), kalla: 'prov' })), { ...h('kva:algebra', false, 0, 'ob'), kalla: 'prov' }]).get('kva:algebra');
  assert.ok(obesv.styrka > fel.styrka, 'obesvarad drar ner mindre än ett riktigt fel');

  // Prior på delprovsstyrkan: en ny undertyp startar där användaren ligger i delprovet.
  const medPrior = S.beraknaTypStyrkor([...Array.from({ length: 12 }, (_, i) => h('xyz:algebra', true, i)), h('xyz:procent', false, 0)]);
  assert.ok(medPrior.get('xyz:procent').styrka > 0.5, `ett fel i procent startar från stark XYZ-nivå, fick ${medPrior.get('xyz:procent').styrka}`);
  const utanPrior = S.beraknaTypStyrkor([...Array.from({ length: 12 }, (_, i) => h('xyz:algebra', false, i)), h('xyz:procent', false, 0)]);
  assert.ok(utanPrior.get('xyz:procent').styrka < 0.35, 'ett fel i procent startar från svag XYZ-nivå');

  // Effektivt antal växer inte obegränsat: 200 svar väger som cirka 29.
  const langt = Array.from({ length: 200 }, (_, i) => h('ord', i % 3 !== 0, i));
  const s4 = S.beraknaStyrkor(langt).get('ord');
  assert.ok(s4.effektivt > 20 && s4.effektivt < 30, `effektivt antal cirka 29, fick ${s4.effektivt}`);
  assert.strictEqual(s4.antal, 200);

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
  // Typer som redan sitter (över målnivån) rankas aldrig som svagheter, hur vanliga de än är.
  const stark = S.beraknaStyrkor(Array.from({ length: 30 }, (_, i) => h('kva:algebra', true, i)));
  assert.strictEqual(S.svagasteTyper(stark, 3).length, 0, 'en behärskad typ ger ingen prioritet');
  const blandat = S.beraknaStyrkor([
    ...Array.from({ length: 30 }, (_, i) => h('ord', true, i)),
    ...Array.from({ length: 8 }, (_, i) => h('xyz:sannolikhet', false, i)),
  ]);
  const rank = S.svagasteTyper(blandat, 3, new Map([['ord', 5], ['xyz:sannolikhet', 0.27]])).map(x => x.typ);
  assert.deepStrictEqual(rank, ['xyz:sannolikhet'], `30 av 30 rätt på ORD är ingen svaghet, fick ${rank}`);
  // Osäkra typer rangordnas aldrig: ett rätt på DTK slår inte tio svar på 30 procent i algebra.
  const tunn = S.beraknaStyrkor([h('dtk:diagram', false, 0), ...Array.from({ length: 10 }, (_, i) => h('xyz:algebra', i % 3 === 0, i))]);
  assert.deepStrictEqual(S.svagasteTyper(tunn, 3, new Map([['dtk:diagram', 7.2], ['xyz:algebra', 3.6]])).map(x => x.typ), ['xyz:algebra'], 'ett enda svar ger ingen plats i rangordningen');
  // Målnivå per typ: NOG på 76 procent sitter, XYZ på 76 procent har lite kvar.
  const mal = S.beraknaStyrkor([...Array.from({ length: 40 }, (_, i) => h('nog:logik', i % 7 !== 0, i)), ...Array.from({ length: 40 }, (_, i) => h('xyz:algebra', i % 7 !== 0, i))]);
  const malRank = S.svagasteTyper(mal, 3).map(x => x.typ);
  assert.ok(!malRank.includes('nog:logik') && malRank.includes('xyz:algebra'), `målnivån är lägre för NOG, fick ${malRank}`);
  assert.strictEqual(S.antalSakraTyper(mal), 2);
  // Delprov att fortsätta med före gaten.
  const dpStyrkor = S.beraknaDelprovStyrkor([...Array.from({ length: 8 }, (_, i) => h('xyz:algebra', false, i)), ...Array.from({ length: 8 }, (_, i) => h('ord', true, i))]);
  assert.strictEqual(S.delprovAttFortsattaMed(dpStyrkor, { xyz: 12, ord: 10 }).delprov, 'xyz', 'fortsätt med det delprov som ger mest');

  // Svar med samma tidsstämpel (ett provpass) väger lika oavsett ordning i passet.
  const sitt = (ordning) => S.beraknaStyrkor(ordning.map((c, i) => ({ questionId: 'p' + i, delprov: 'ord', typ: 'ord', correct: c, createdAt: new Date(nu) }))).get('ord').styrka;
  const a1 = sitt([true, true, true, true, true, false, false, false, false, false]);
  const a2 = sitt([false, false, false, false, false, true, true, true, true, true]);
  assert.ok(Math.abs(a1 - a2) < 1e-9, `samma sittning ger samma styrka, fick ${a1} och ${a2}`);

  // Kalenderavtagning: åtta svar för ett halvår sedan väger som två färska och blir "för lite data".
  const gamla = S.beraknaStyrkor(Array.from({ length: 8 }, (_, i) => h('las', true, 180 + i)));
  assert.ok(gamla.get('las').osaker, 'gamla svar ger för lite data');
  const farska = S.beraknaStyrkor(Array.from({ length: 8 }, (_, i) => h('las', true, i)));
  assert.ok(!farska.get('las').osaker, 'åtta färska svar räcker');

  // Repetition (samma fråga igen inom en månad) väger hälften; omförsök räknas inte alls.
  const rep = S.beraknaStyrkor([{ ...h('mek:2', true, 0, 'r1'), repetition: true }, h('mek:2', false, 1, 'r2'), h('mek:2', false, 2, 'r3'), h('mek:2', false, 3, 'r4'), h('mek:2', false, 4, 'r5')]).get('mek:2');
  const utanRep = S.beraknaStyrkor([h('mek:2', true, 0, 'r1'), h('mek:2', false, 1, 'r2'), h('mek:2', false, 2, 'r3'), h('mek:2', false, 3, 'r4'), h('mek:2', false, 4, 'r5')]).get('mek:2');
  assert.ok(rep.styrka < utanRep.styrka, 'ett rätt som är repetition lyfter styrkan mindre');
  const omf = S.beraknaStyrkor([{ ...h('mek:2', true, 0, 'r1'), omforsok: true }, h('mek:2', false, 1, 'r2')]).get('mek:2');
  assert.strictEqual(omf.antal, 1, 'omförsök räknas inte');

  // Färgnivån följer den avrundade procenten.
  const mk = (st) => ({ typ: 't', delprov: 'xyz', styrka: st, antal: 10, effektivt: 8, ratt: 5, osaker: false, senast: null });
  assert.strictEqual(S.styrkeNiva(mk(0.796)), 'gron');
  assert.strictEqual(S.styrkeNiva(mk(0.794)), 'bla');
  assert.strictEqual(S.svarTillSiffra({ effektivt: 1.2 }), 4, 'svar till siffra räknas på rundvikten');
  console.log('styrkemodell: ok');
}

// Typer
{
  assert.strictEqual(T.typFor('mek', { text: 'a _____ b _____ c', options: [], correct: 0, num: 1 }), 'mek:2');
  assert.strictEqual(T.typFor('xyz', { text: '', options: [], correct: 0, num: 1, category: 'algebra' }), 'xyz:algebra');
  assert.strictEqual(T.typFor('ord', { text: '', options: [], correct: 0, num: 1 }), 'ord');
  assert.strictEqual(T.typNamn('mek:2'), 'MEK med två luckor');
  assert.strictEqual(T.typNamn('dtk:tabell'), 'DTK tabeller');
  assert.strictEqual(T.typNamn('xyz:ovrigt'), 'XYZ övrigt');
  assert.strictEqual(T.rangTyp('mek:3'), 'mek');
  assert.strictEqual(T.rangTyp('xyz:algebra'), 'xyz:algebra');
  assert.strictEqual(T.normaliseraDelprov('xyz2'), 'xyz');
  assert.strictEqual(T.frageId('extra-ht2012-1', 17), 'extra-ht2012-1#17');
  console.log('typer: ok');
}

// Urval
{
  const slump = (() => { let x = 12345; return () => { x = (x * 1103515245 + 12345) % 2147483648; return x / 2147483648; }; })();
  const pool = [];
  let n = 0;
  const q = (delprov, typ, grupp, category) => ({ id: `f${n++}`, testId: 't', delprov, typ, grupp: grupp || null, category: category || (typ.includes(':') ? typ.split(':')[1] : undefined), options: ['a', 'b'], correct: 0, num: n, text: '' });
  for (let i = 0; i < 40; i++) pool.push(q('xyz', i % 2 ? 'xyz:algebra' : 'xyz:geometri'));
  for (let d = 0; d < 6; d++) for (let i = 0; i < 3; i++) pool.push(q('dtk', 'dtk:diagram', `dia${d}`));
  for (let i = 0; i < 20; i++) pool.push(q('mek', 'mek:1'));
  const st = (typ, styrka, extra = {}) => [typ, { typ, delprov: typ.split(':')[0], styrka, antal: 8, effektivt: 8, ratt: Math.round(styrka * 8), osaker: false, senast: new Date(), ...extra }];

  const enheter = U.tillEnheter(pool.filter(x => x.delprov === 'dtk'));
  assert.strictEqual(enheter.length, 6, 'sex diagram blir sex enheter');
  assert.ok(enheter.every(e => e.fragor.length === 3));

  // Läge delprov: tio frågor, inga dubbletter.
  const r1 = U.valjRunda({ lage: 'delprov', val: 'xyz', pool, sedda: new Set(), attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  assert.strictEqual(r1.length, 10);
  assert.ok(r1.every(e => e.fragor[0].delprov === 'xyz'));
  assert.strictEqual(new Set(r1.map(e => e.fragor[0].id)).size, 10, 'inga dubbletter');

  // Läge typ: sju av typen och tre insprängda ur samma delprov, osedda först.
  const r2 = U.valjRunda({ lage: 'typ', val: 'xyz:algebra', pool, sedda: new Set(), attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  assert.strictEqual(r2.length, 10);
  assert.strictEqual(r2.filter(e => e.fragor[0].typ === 'xyz:algebra').length, 7, 'sju av typen');
  assert.strictEqual(r2.filter(e => e.skal === 'insprangt').length, 3, 'tre insprängda');
  assert.ok(r2.filter(e => e.skal === 'insprangt').every(e => e.fragor[0].typ === 'xyz:geometri'), 'insprängda ur samma delprov');
  const sedda = new Set(pool.filter(x => x.typ === 'xyz:algebra').slice(0, 15).map(x => x.id));
  const r2a = U.valjRunda({ lage: 'typ', val: 'xyz:algebra', pool, sedda, attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  assert.strictEqual(r2a.filter(e => e.fragor[0].typ === 'xyz:algebra' && !sedda.has(e.fragor[0].id)).length, 5, 'osedda först (5 osedda finns), sedan sedda som utfyllnad');
  // ORD utan annan kategori: hela delprovet.
  const poolOrd = [...pool, ...Array.from({ length: 12 }, () => q('ord', 'ord'))];
  const r2b = U.valjRunda({ lage: 'typ', val: 'ord', pool: poolOrd, sedda: new Set(), attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  assert.strictEqual(r2b.length, 10);
  assert.ok(r2b.every(e => e.fragor[0].typ === 'ord' && !e.skal));

  // Utfyllnad med sedda tar de äldst sedda först.
  const allaAlg = pool.filter(x => x.typ === 'xyz:algebra');
  const seddaAlla = new Set(allaAlg.map(x => x.id));
  const senastSedd = new Map(allaAlg.map((x, i) => [x.id, new Date(nu - (i + 1) * dag)]));
  const r2c = U.valjRunda({ lage: 'delprov', val: 'mek', pool: pool.map((x, i) => x.delprov === 'mek' ? { ...x, testId: `p${i}` } : x), sedda: new Set(pool.filter(x => x.delprov === 'mek').map(x => x.id)), senastSedd: new Map(pool.filter(x => x.delprov === 'mek').map((x, i) => [x.id, new Date(nu - (i + 1) * dag)])), attRepetera: new Set(), styrkor: new Map(), antal: 5, slump });
  const mekIds = pool.filter(x => x.delprov === 'mek').map(x => x.id);
  assert.ok(r2c.every(e => mekIds.slice(-5).includes(e.fragor[0].id)), 'när allt är sett kommer de äldst sedda först');
  void seddaAlla; void senastSedd;

  // Läge kategori: alla tre kvantitativa delproven.
  const poolKat = [...pool, q('kva', 'kva:sannolikhet'), q('nog', 'nog:sannolikhet'), q('xyz', 'xyz:sannolikhet')];
  const r3k = U.valjRunda({ lage: 'kategori', val: 'sannolikhet', pool: poolKat, sedda: new Set(), attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  assert.deepStrictEqual(r3k.map(e => e.fragor[0].delprov).sort(), ['kva', 'nog', 'xyz'], 'kategorin tar frågor ur xyz, kva och nog');

  // Läge delprov DTK: diagram hålls ihop och rundan blir omkring tio frågor.
  const r3 = U.valjRunda({ lage: 'delprov', val: 'dtk', pool, sedda: new Set(), attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  assert.strictEqual(r3.length, 4, 'fyra diagram ger tolv frågor, minst tio');
  assert.ok(r3.every(e => e.fragor.length === 3 && e.fragor.every(f => f.grupp === e.grupp)), 'diagram hålls ihop');

  // Mina svagheter: hinkarna.
  const styrkor = new Map([st('xyz:geometri', 0.3), st('mek:1', 0.4), st('xyz:algebra', 0.9), st('dtk:diagram', 0.95)]);
  const attRepetera = new Set([pool[0].id, pool[2].id]);
  const svaga = [styrkor.get('xyz:geometri'), styrkor.get('mek:1')];
  const r4 = U.valjRunda({ lage: 'svagheter', pool, sedda: new Set(), attRepetera, styrkor, svaga, antal: 10, slump, allaTyper: ['xyz:geometri', 'mek:1', 'xyz:algebra', 'dtk:diagram', 'kva:algebra'], vikter: new Map([['kva:algebra', 4], ['dtk:diagram', 7]]) });
  const antalFragor4 = r4.reduce((a, e) => a + e.fragor.length, 0);
  assert.ok(antalFragor4 >= 10 && antalFragor4 <= 13, `ungefär tio frågor, fick ${antalFragor4}`);
  const skal = r4.map(e => e.skal);
  assert.ok(skal.filter(x => x === 'svag').length >= 4, `mest från de svaga typerna, fick ${skal}`);
  assert.ok(skal.includes('repetera'), 'återbesök av typer med gamla fel');
  assert.ok(r4.filter(e => e.skal === 'repetera').every(e => !attRepetera.has(e.fragor[0].id)), 'återbesöket är en annan fråga av samma typ');
  assert.ok(skal.includes('blandning'), 'en blandning ur samma delprov');
  assert.strictEqual(r4[r4.length - 1].skal, 'kontroll', 'rundan slutar med en kontroll');
  assert.strictEqual(r4[r4.length - 1].fragor[0].typ, 'xyz:algebra', 'kontrollen tas ur den starkaste typen i samma område med fristående frågor');
  assert.strictEqual(new Set(r4.flatMap(e => e.fragor.map(f => f.id))).size, antalFragor4, 'inga dubbletter');
  // Utforska: en orörd typ med högst vikt om den finns i poolen.
  const poolUt = [...pool, q('kva', 'kva:algebra')];
  const r4u = U.valjRunda({ lage: 'svagheter', pool: poolUt, sedda: new Set(), attRepetera: new Set(), styrkor, svaga, antal: 10, slump, allaTyper: ['xyz:geometri', 'mek:1', 'xyz:algebra', 'dtk:diagram', 'kva:algebra'], vikter: new Map([['kva:algebra', 4]]) });
  assert.ok(r4u.some(e => e.skal === 'utforska' && e.fragor[0].typ === 'kva:algebra'), 'en orörd typ utforskas');
  // Kontroll ur en grön typ som inte setts på tre veckor går före.
  const r4k = U.valjRunda({ lage: 'svagheter', pool, sedda: new Set(), attRepetera: new Set(), styrkor, svaga, antal: 10, slump, senastPerTyp: new Map([['xyz:algebra', new Date(nu - 30 * dag)]]) });
  assert.strictEqual(r4k[r4k.length - 1].fragor[0].typ, 'xyz:algebra', 'grön typ som inte setts på länge kontrolleras');

  // Diagram vars frågor har olika kategori hålls ihop och kommer aldrig två gånger.
  const poolBland = [...pool];
  for (let d = 0; d < 6; d++) for (let i = 0; i < 4; i++) poolBland.push(q('dtk', i === 3 ? 'dtk:diagram' : 'dtk:tabell', `bland${d}`));
  const r7 = U.valjRunda({ lage: 'typ', val: 'dtk:tabell', pool: poolBland, sedda: new Set(), attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  assert.ok(r7.filter(e => e.skal !== 'insprangt').every(e => e.fragor.length === 4), 'hela diagrammet följer med även om en fråga har annan kategori');
  const styrkorD = new Map([st('dtk:tabell', 0.3), st('dtk:diagram', 0.35), st('mek:1', 0.9)]);
  const r8 = U.valjRunda({ lage: 'svagheter', pool: poolBland, sedda: new Set(), attRepetera: new Set(), styrkor: styrkorD, svaga: [styrkorD.get('dtk:tabell'), styrkorD.get('dtk:diagram')], antal: 10, slump });
  const grupper8 = r8.map(e => e.grupp).filter(Boolean);
  assert.strictEqual(new Set(grupper8).size, grupper8.length, `samma diagram får inte komma två gånger: ${grupper8}`);

  // Osedda kommer alltid före sedda, även när de osedda ligger i samma pass.
  const poolMek = pool.filter(x => x.delprov === 'mek').map((x, i) => ({ ...x, testId: i < 5 ? 'samma' : `p${i}` }));
  const seddaMek = new Set(poolMek.slice(5).map(x => x.id));
  const r9 = U.valjRunda({ lage: 'delprov', val: 'mek', pool: poolMek, sedda: seddaMek, attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  assert.strictEqual(r9.filter(e => !seddaMek.has(e.fragor[0].id)).length, 5, 'alla fem osedda är med fast de ligger i samma pass');
  assert.ok(r9.slice(0, 5).every(e => !seddaMek.has(e.fragor[0].id)), 'osedda först');

  // Högst två enheter från samma pass i läge delprov.
  const poolPass = pool.map((x, i) => ({ ...x, testId: `pass${Math.floor(i / 6)}` }));
  const r6 = U.valjRunda({ lage: 'delprov', val: 'xyz', pool: poolPass, sedda: new Set(), attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  const perPass = {};
  for (const e of r6) perPass[e.fragor[0].testId] = (perPass[e.fragor[0].testId] || 0) + 1;
  assert.ok(Object.values(perPass).every(n => n <= 2), `högst två per pass, fick ${JSON.stringify(perPass)}`);

  // Snabbkollen: fast blandning över delproven, diagram och text med två frågor.
  const poolSnabb = [...pool];
  for (const t of ['kva:algebra', 'kva:aritmetik', 'kva:geometri', 'nog:logik', 'nog:aritmetik', 'ord', 'mek:2', 'mek:3', 'xyz:aritmetik']) for (let i = 0; i < 5; i++) poolSnabb.push(q(t.split(':')[0], t));
  for (let i = 0; i < 2; i++) poolSnabb.push(q('dtk', 'dtk:tabell', 'tva'));
  for (let i = 0; i < 2; i++) poolSnabb.push(q('las', 'las', 'text1'));
  for (let i = 0; i < 4; i++) poolSnabb.push(q('las', 'las', 'text2'));
  const r11 = U.valjRunda({ lage: 'snabbkoll', pool: poolSnabb, sedda: new Set(), attRepetera: new Set(), styrkor: new Map(), slump });
  const antal11 = r11.reduce((a, e) => a + e.fragor.length, 0);
  assert.strictEqual(antal11, 18, `snabbkollen har 18 frågor, fick ${antal11}`);
  assert.ok(r11.filter(e => e.fragor[0].delprov === 'dtk').every(e => e.fragor.length === 2 && e.grupp === 'tva'), 'diagram med två frågor');
  assert.ok(r11.filter(e => e.fragor[0].delprov === 'las').every(e => e.fragor.length === 2), 'text med två frågor');
  assert.strictEqual(r11.filter(e => e.fragor[0].typ === 'ord').length, 3, 'tre ORD i snabbkollen');

  // Matcharen från frågebanken: "<delprov>:ovrigt" täcker typerna under golvet.
  const matchar = (x, v) => v.endsWith(':ovrigt') ? x.delprov === v.split(':')[0] && ['xyz:enheter', 'xyz:logik'].includes(x.typ) : v === 'mek' ? x.delprov === 'mek' : x.typ === v;
  const poolGolv = [...pool, ...Array.from({ length: 6 }, (_, i) => q('xyz', i % 2 ? 'xyz:enheter' : 'xyz:logik'))];
  const r12 = U.valjRunda({ lage: 'typ', val: 'xyz:ovrigt', pool: poolGolv, sedda: new Set(), attRepetera: new Set(), styrkor: new Map(), antal: 10, matchar, slump });
  assert.strictEqual(r12.filter(e => e.skal !== 'insprangt').length, 6, 'övrigt-rundan tar alla sex under golvet');
  assert.ok(r12.filter(e => e.skal !== 'insprangt').every(e => ['xyz:enheter', 'xyz:logik'].includes(e.fragor[0].typ)));

  const r5 = U.valjRunda({ lage: 'svagheter', pool, sedda: new Set(), attRepetera: new Set(), styrkor: new Map(), antal: 10, slump });
  assert.strictEqual(r5.length, 0, 'utan historik inget urval');
  console.log('urval: ok');
}
console.log('ALLT OK');
