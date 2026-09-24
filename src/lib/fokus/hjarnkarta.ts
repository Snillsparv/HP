// Din hjärnkarta, datan: styrka per delprov, regeln för Träna härnäst, typerna
// i varje delprovs ark, före och efter ett pass och alla färdiga texter.
// Bara för servern (drar in frågebanken). Vyn i hjarnkarta-vy.ts gör HTML av
// resultatet, både här och i webbläsaren.
//
// Ett tal styr allt: delprovspotten, ANTAL_PER_PASS · max(0, mål − styrka),
// ungefär hur många fler rätt per provpass delprovet ger när det når målet.
import type { DelprovTyp } from '../extraprov/types.js';
import type { Handelse, Styrka } from './styrka.js';
import { beraknaDelprovStyrkor, beraknaTypStyrkor, delprovVikter, forandringsOsakerhet, malFor, malDelprov, MINSTA_ANTAL } from './styrka.js';
import { forStyrka } from './historik.js';
import { allaTyper, fragorForTest, golvTyp, uppgifterPerPass } from './fragebank.js';
import { ANTAL_PER_PASS, DELPROV, DELPROV_LANGT, DELPROV_NAMN, TEMPO_SEK, typNamn } from './typer.js';
import {
  HALVA, deltaSynlig, lista, nFor, potText, tomHarnast, visadProcent,
  type Forandring, type Harnast, type HjarnkartaData, type KartAxel, type KartTyp, type Trana, type UrProvet,
} from './hjarnkarta-vy.js';

export type { HjarnkartaData, KartAxel, KartTyp, Harnast } from './hjarnkarta-vy.js';

/** Typer med minst så här stort effektivt antal kan väljas till knappen. */
export const MINSTA_TYP_EFF = 8;
/** Minsta typpott för att en typ ska väljas framför hela delprovet. */
export const MINSTA_TYPPOTT = 0.5;
/** Svar på andra frågor så här långt efter passet räknas till passet. Övertidssvaren
 * på passets egna frågor räknas alltid dit (overtidForPass). */
export const OVERTID_MINUTER = 15;
/** Så här många enheter måste en axel flytta sig för att "växa" eller "krympa". */
const LITEN_FORANDRING = 3;

export interface PassIn {
  createdAt: Date;
  testId: string;
  answers: unknown[];
}

export interface HjarnkartaAlt {
  nu?: Date;
  pass?: PassIn | null;
}

const NBSP = ' ';
const HB = '‑';
const ANTAL_ORD: Record<number, string> = { 6: 'sex', 10: 'tio', 12: 'tolv' };
const versal = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const halvAdj = (h: 'kvant' | 'verbal') => (h === 'kvant' ? 'kvantitativt' : 'verbalt');
const minuter = (dp: DelprovTyp, antal = 10) => Math.max(1, Math.round((TEMPO_SEK[dp] * antal) / 60));

/** Typens korta namn i löptext: "geometri", "övrigt", "två luckor". */
export function kortTypNamn(typ: string): string {
  const mek: Record<string, string> = { 'mek:1': 'en lucka', 'mek:2': 'två luckor', 'mek:3': 'tre luckor' };
  if (mek[typ]) return mek[typ];
  return typNamn(typ).replace(/^\S+\s/, '');
}

// ---------- Axlarna ----------

function axlarFor(handelser: Handelse[], nu: Date): Map<DelprovTyp, Styrka | undefined> {
  const st = beraknaDelprovStyrkor(forStyrka(handelser), nu);
  return new Map(DELPROV.map(dp => [dp, st.get(dp)]));
}

function tranaFor(dp: DelprovTyp, osaker: boolean, typ: KartTyp | null): Trana {
  const namn = DELPROV_NAMN[dp];
  if (osaker) {
    return {
      lage: 'delprov', typ: null, kort: null,
      knapp: `Testa 5 ${namn}${HB}uppgifter →`,
      under: `cirka ${minuter(dp, 5)} minuter, förklaring efter varje svar`,
      href: `/trana/fokus?lage=delprov&val=${dp}&antal=5`,
    };
  }
  if (typ) {
    return {
      lage: 'typ', typ: typ.typ, kort: typ.kort,
      knapp: `Kör 10 ${namn}${HB}uppgifter →`,
      under: `mest ${typ.kort} · cirka ${minuter(dp)} minuter`,
      href: `/trana/fokus?lage=typ&val=${typ.typ}`,
    };
  }
  return {
    lage: 'delprov', typ: null, kort: null,
    knapp: `Kör 10 ${namn}${HB}uppgifter →`,
    under: `cirka ${minuter(dp)} minuter, förklaring efter varje svar`,
    href: `/trana/fokus?lage=delprov&val=${dp}`,
  };
}

function byggAxel(dp: DelprovTyp, s: Styrka | undefined, typ: KartTyp | null): KartAxel {
  const styrka = s?.styrka ?? 0.5;
  const effektivt = s?.effektivt ?? 0;
  const osaker = effektivt < MINSTA_ANTAL;
  const mal = malDelprov(dp);
  const pott = ANTAL_PER_PASS[dp] * Math.max(0, mal - styrka);
  return {
    delprov: dp,
    namn: DELPROV_NAMN[dp],
    langt: DELPROV_LANGT[dp],
    del: HALVA[dp],
    styrka,
    effektivt,
    antal: s?.antal ?? 0,
    ratt: s?.ratt ?? 0,
    osaker,
    mal,
    pott,
    n: nFor(pott),
    visadPct: visadProcent(styrka, effektivt),
    trana: tranaFor(dp, osaker, osaker ? null : typ),
  };
}

// ---------- Typerna i arket ----------

/** Typerna per delprov (golvTyp, MEK som en, två och tre luckor). */
function typlistor(): Record<DelprovTyp, string[]> {
  const typer = allaTyper(['extra']);
  const ut = {} as Record<DelprovTyp, string[]>;
  for (const dp of DELPROV) {
    if (dp === 'ord' || dp === 'las') ut[dp] = [];
    else if (dp === 'mek') ut[dp] = ['mek:1', 'mek:2', 'mek:3'];
    else ut[dp] = typer.filter(t => t.delprov === dp && t.typ !== dp).map(t => t.typ);
  }
  return ut;
}
let typlistorCache: Record<DelprovTyp, string[]> | null = null;

/** Raderna i varje delprovs ark. MEK räknas på en egen händelselista utan
 * rangTyp, så att en, två och tre luckor får var sin styrka. */
export function raknaTyper(handelser: Handelse[], nu: Date): Record<DelprovTyp, KartTyp[]> {
  typlistorCache ??= typlistor();
  const bas = forStyrka(handelser);
  const typStyrkor = beraknaTypStyrkor(bas, nu);
  const mekLista = handelser.filter(h => !h.omforsok && h.delprov === 'mek').map(h => ({ ...h, typ: golvTyp(h.typ) }));
  const mekStyrkor = beraknaTypStyrkor(mekLista, nu);
  const delprov = beraknaDelprovStyrkor(bas, nu);
  const ut = {} as Record<DelprovTyp, KartTyp[]>;
  for (const dp of DELPROV) {
    ut[dp] = typlistorCache[dp].map(typ => {
      const s = (dp === 'mek' ? mekStyrkor : typStyrkor).get(typ);
      const styrka = s?.styrka ?? delprov.get(dp)?.styrka ?? 0.5;
      const effektivt = s?.effektivt ?? 0;
      const osaker = effektivt < MINSTA_ANTAL;
      const mal = malFor(typ);
      const perPass = uppgifterPerPass(typ);
      const pott = perPass * Math.max(0, mal - styrka);
      const kort = kortTypNamn(typ);
      return {
        typ, namn: versal(kort), kort, styrka, effektivt, antal: s?.antal ?? 0, ratt: s?.ratt ?? 0, osaker,
        visadPct: visadProcent(styrka, effektivt), mal, perPass, pott, n: nFor(pott),
        href: `/trana/fokus?lage=typ&val=${typ}${osaker ? '&antal=5' : ''}`,
      };
    });
  }
  return ut;
}

/** Typen inom delprovet: störst uppgifterPerPass · (mål − styrka) bland typer
 * med eff ≥ 8, om den är minst 0,5. Annars null (hela delprovet). */
export function valjTyp(rader: KartTyp[]): KartTyp | null {
  const bast = rader
    .filter(t => !t.osaker && t.effektivt >= MINSTA_TYP_EFF)
    .map(t => ({ t, p: t.perPass * (t.mal - t.styrka) }))
    .sort((a, b) => b.p - a.p)[0];
  return bast && bast.p >= MINSTA_TYPPOTT ? bast.t : null;
}

/** Vinnaren: säkra delprov (eff ≥ 4), störst pott. */
export function valjVinnare(axlar: KartAxel[]): KartAxel | null {
  return axlar
    .filter(a => !a.osaker)
    .sort((a, b) => b.pott - a.pott || (b.mal - b.styrka) - (a.mal - a.styrka) || DELPROV.indexOf(a.delprov) - DELPROV.indexOf(b.delprov))[0] ?? null;
}

function byggAxlar(handelser: Handelse[], nu: Date, typer: Record<DelprovTyp, KartTyp[]>): KartAxel[] {
  const st = axlarFor(handelser, nu);
  return DELPROV.map(dp => byggAxel(dp, st.get(dp), valjTyp(typer[dp])));
}

// ---------- Träna härnäst ----------

function mall(a: KartAxel): string {
  const antal = versal(ANTAL_ORD[ANTAL_PER_PASS[a.delprov]] || String(ANTAL_PER_PASS[a.delprov]));
  const bas = `${antal} uppgifter per ${halvAdj(a.del)} pass, och du ligger runt ${a.visadPct}${NBSP}%.`;
  if (a.trana.lage === 'typ' && a.trana.kort) return `${bas} Mest att hämta i ${a.trana.kort}.`;
  return a.n >= 4 ? `${bas} Lågt hängande frukt.` : bas;
}

function halvaRad(axlar: KartAxel[]): Harnast['halva'] {
  const har = (h: 'kvant' | 'verbal') => axlar.some(a => a.del === h && a.antal > 0);
  if (!har('kvant') && har('verbal')) {
    return { fet: 'Högra halvan är tom.', text: 'Gör ett kvantitativt pass så ritar jag in XYZ, KVA, NOG och DTK.', lank: 'Välj ett kvantitativt pass ›', href: '/extra#forsta-kvant' };
  }
  if (!har('verbal') && har('kvant')) {
    return { fet: 'Vänstra halvan är tom.', text: 'Gör ett verbalt pass så ritar jag in ORD, LÄS och MEK.', lank: 'Välj ett verbalt pass ›', href: '/extra#forsta-verbal' };
  }
  return null;
}

function graRad(axlar: KartAxel[]): Harnast['gra'] {
  const a = axlar.find(x => x.osaker && x.antal > 0);
  if (!a) return null;
  return { text: `${a.namn} är grå: ${a.antal} svar hittills.`, lank: 'Testa 5 ›', href: `/trana/fokus?lage=delprov&val=${a.delprov}&antal=5` };
}

/** Svar finns men inget delprov är säkert: jämför halvorna. */
function gissning(axlar: KartAxel[]): Harnast {
  const summa = (h: 'kvant' | 'verbal') => axlar.filter(a => a.del === h).reduce((s, a) => ({ ratt: s.ratt + a.ratt, antal: s.antal + a.antal }), { ratt: 0, antal: 0 });
  const k = summa('kvant'), v = summa('verbal');
  let halva: 'kvant' | 'verbal';
  let fet: string;
  let mening: string;
  if (k.antal > 0 && v.antal > 0) {
    const kAndel = k.ratt / k.antal, vAndel = v.ratt / v.antal;
    halva = kAndel <= vAndel ? 'kvant' : 'verbal';
    fet = 'Snabbkollen ger en första riktning, inte en karta.';
    const [a, b] = halva === 'kvant' ? [k, v] : [v, k];
    mening = kAndel === vAndel
      ? `Kvantitativt och verbalt gick lika, ${k.ratt} av ${k.antal} mot ${v.ratt} av ${v.antal}, så börja med kvantitativt.`
      : `${versal(halvAdj(halva))} gick trögare, ${a.ratt} av ${a.antal} mot ${b.ratt} av ${b.antal}, så börja där.`;
  } else {
    halva = k.antal > 0 ? 'kvant' : 'verbal';
    fet = 'Kartan behöver ett helt pass.';
    mening = halva === 'kvant'
      ? 'Gör ett kvantitativt provpass så ritar jag in XYZ, KVA, NOG och DTK.'
      : 'Gör ett verbalt provpass så ritar jag in ORD, LÄS och MEK.';
  }
  // Länken: delprovet i den svagare halvan med störst pott, priorn inräknad.
  const dp = axlar.filter(a => a.del === halva && a.antal > 0).sort((a, b) => b.pott - a.pott)[0] ?? axlar.find(a => a.del === halva)!;
  return {
    lage: 'pass', delprov: null, typ: null, n: -1, pottText: '',
    rubrik: '', underrubrik: '', fet, mening,
    knapp: `Gör ett ${halvAdj(halva)} provpass →`, knappUnder: '', href: halva === 'kvant' ? '/extra#forsta-kvant' : '/extra#forsta-verbal',
    lank: { text: `eller 10 ${dp.namn}${HB}uppgifter`, href: `/trana/fokus?lage=delprov&val=${dp.delprov}` },
    gra: null, halva: null,
  };
}

/** Regeln för Träna härnäst. forra: vinnaren före passet, passHalva: halvan
 * passet mätte (för texterna i rättningen). */
export function byggHarnast(axlar: KartAxel[], antalSvar: number, forra?: KartAxel | null, passHalva?: 'kvant' | 'verbal' | null): Harnast {
  if (antalSvar === 0) return tomHarnast();
  const v = valjVinnare(axlar);
  if (!v) return gissning(axlar);
  let fet = '';
  let mening = mall(v);
  if (forra) {
    if (forra.delprov === v.delprov) {
      fet = `Fortfarande ${v.namn}.`;
      if (passHalva && passHalva !== v.del) {
        const antal = ANTAL_ORD[ANTAL_PER_PASS[v.delprov]] || String(ANTAL_PER_PASS[v.delprov]);
        mening = `Dagens pass var ${halvAdj(passHalva)}, men ${v.namn} är ${antal} uppgifter på varje ${halvAdj(v.del)} pass och där har du mest kvar.`;
      }
    } else {
      fet = `Nytt fokus: ${v.namn}.`;
    }
  }
  return {
    lage: v.trana.lage,
    delprov: v.delprov,
    typ: v.trana.typ,
    n: v.n,
    pottText: potText(v.n),
    rubrik: v.namn,
    underrubrik: v.langt,
    fet,
    mening,
    knapp: v.trana.knapp,
    knappUnder: v.trana.under,
    href: v.trana.href,
    lank: null,
    gra: graRad(axlar),
    halva: halvaRad(axlar),
  };
}

// ---------- Passet: före och efter, Ur det här provet ----------

interface PassSvar {
  delprov: DelprovTyp[];
  /** Per golvTyp (MEK per luckor) och per delprov: antal och rätt i passet. */
  perTyp: Map<string, { antal: number; ratt: number }>;
  perDelprov: Map<DelprovTyp, { antal: number; ratt: number }>;
}

function passSvar(pass: PassIn): PassSvar {
  const fragor = fragorForTest(pass.testId);
  const perTyp = new Map<string, { antal: number; ratt: number }>();
  const perDelprov = new Map<DelprovTyp, { antal: number; ratt: number }>();
  const svar = Array.isArray(pass.answers) ? pass.answers : [];
  fragor.forEach((q, i) => {
    const a = svar[i];
    const ratt = a !== null && a !== undefined && Number(a) === q.correct;
    const t = golvTyp(q.typ);
    const pt = perTyp.get(t) || { antal: 0, ratt: 0 };
    pt.antal++; if (ratt) pt.ratt++;
    perTyp.set(t, pt);
    const pd = perDelprov.get(q.delprov) || { antal: 0, ratt: 0 };
    pd.antal++; if (ratt) pd.ratt++;
    perDelprov.set(q.delprov, pd);
  });
  return { delprov: DELPROV.filter(dp => perDelprov.has(dp)), perTyp, perDelprov };
}

/** Raden "Ur det här provet": en typ i passet med minst hälften fel, minst två
 * frågor och typpott ≥ 0,5. Annars delprovet i passet med störst pott. Aldrig
 * huvudkortets delprov (varken hela eller en typ i det), så att kortet inte
 * ger två nästan likadana handlingar. Har raden samma tal som pillen skrivs den
 * utan tal: två likadana tal står aldrig bredvid varandra. */
export function byggUrProvet(ps: PassSvar, axlar: KartAxel[], typer: Record<DelprovTyp, KartTyp[]>, harnast: Harnast): UrProvet | null {
  const kand: { t: KartTyp; dp: DelprovTyp; antal: number; ratt: number }[] = [];
  const talText = (visadPct: number, n: number) =>
    n === harnast.n ? `nivå runt ${visadPct}${NBSP}%` : `nivå runt ${visadPct}${NBSP}% · ${potText(n)} per pass`;
  for (const dp of ps.delprov) {
    if (dp === harnast.delprov) continue;
    for (const t of typer[dp] || []) {
      const s = ps.perTyp.get(t.typ);
      if (!s || s.antal < 2 || s.antal - s.ratt < s.antal / 2) continue;
      if (t.osaker || t.pott < MINSTA_TYPPOTT) continue;
      kand.push({ t, dp, ...s });
    }
  }
  kand.sort((a, b) => b.t.pott - a.t.pott);
  const b = kand[0];
  if (b) {
    return {
      rubrik: `${b.t.namn} i ${DELPROV_NAMN[b.dp]}`,
      tagg: `${b.ratt} rätt av ${b.antal} i dag`,
      text: talText(b.t.visadPct, b.t.n),
      href: `/trana/fokus?lage=typ&val=${b.t.typ}`,
    };
  }
  // Reserv: ett delprov i passet som faktiskt gick trögt i dag (minst två fel
  // och minst 40 procent fel), så att raden aldrig pekar på något man just klarade.
  const trogt = (d: DelprovTyp) => {
    const s = ps.perDelprov.get(d);
    return !!s && s.antal - s.ratt >= Math.max(2, 0.4 * s.antal);
  };
  const dp = axlar
    .filter(a => ps.delprov.includes(a.delprov) && !a.osaker && a.pott >= MINSTA_TYPPOTT)
    .filter(a => a.delprov !== harnast.delprov && trogt(a.delprov))
    .sort((a, b2) => b2.pott - a.pott)[0];
  if (!dp) return null;
  const s = ps.perDelprov.get(dp.delprov)!;
  return {
    rubrik: dp.namn,
    tagg: `${s.ratt} rätt av ${s.antal} i dag`,
    text: talText(dp.visadPct, dp.n),
    href: `/trana/fokus?lage=delprov&val=${dp.delprov}`,
  };
}

/** Meningen om hur passet flyttade kartan. Sätter fore och delta på axlarna.
 * vikterFore och vikterEfter är svarens vikter i delprovsstyrkan före och
 * efter passet, för osäkerheten i förändringen. */
function byggForandring(
  axlar: KartAxel[], fore: KartAxel[], ps: PassSvar, passHandelser: Handelse[],
  vikterFore: Map<string, Map<Handelse, number>>, vikterEfter: Map<string, Map<Handelse, number>>,
): Forandring {
  const passDp = axlar.filter(a => ps.delprov.includes(a.delprov));
  const omtag = passHandelser.length > 0 && passHandelser.every(h => h.omforsok);
  if (omtag) return { fet: '', text: 'Det här passet gjorde du nyss, så det räknas inte igen.', foreKontur: false };
  const foreAv = new Map(fore.map(a => [a.delprov, a]));
  const forsta = passDp.every(a => foreAv.get(a.delprov)!.osaker);
  const annan = ps.delprov.every(dp => HALVA[dp] === 'kvant') ? 'Verbalt' : ps.delprov.every(dp => HALVA[dp] === 'verbal') ? 'Kvantitativt' : null;
  const repetition = passHandelser.length > 0 && passHandelser.filter(h => h.repetition).length * 2 >= passHandelser.length;
  const tillagg = repetition ? ' Frågorna kändes igen, så de väger hälften.' : '';
  // Delprov i passet som fortfarande är för osäkra för en punkt.
  const graa = passDp.filter(a => a.osaker).map(a => a.namn);
  const graText = graa.length ? ` ${lista(graa)} behöver fler svar.` : '';
  if (forsta) {
    const sakra = passDp.filter(a => !a.osaker).map(a => a.namn);
    if (!sakra.length) {
      return { fet: '', text: `${lista(graa)} behöver fler svar innan de hamnar på kartan.${tillagg}`, foreKontur: false };
    }
    return { fet: '', text: `Nu finns ${lista(sakra)} på kartan. Det här är din startpunkt.${graText}${tillagg}`, foreKontur: false };
  }
  for (const a of axlar) {
    const f = foreAv.get(a.delprov)!;
    a.fore = f.styrka;
    a.effFore = f.effektivt;
    a.osakerFore = f.osaker;
    if (!a.osaker && !f.osaker) {
      const { se, forvantad } = forandringsOsakerhet(vikterFore.get(a.delprov), vikterEfter.get(a.delprov), a.styrka);
      a.delta = deltaSynlig(a.styrka, f.styrka, se, forvantad);
    } else {
      a.delta = null;
    }
  }
  const kanda = passDp.filter(a => !a.osaker && !a.osakerFore);
  const nya = passDp.filter(a => !a.osaker && a.osakerFore);
  const upp = kanda.filter(a => (a.delta ?? 0) > 0).sort((x, y) => y.delta! - x.delta!);
  const ned = kanda.filter(a => (a.delta ?? 0) < 0).sort((x, y) => x.delta! - y.delta!);
  let fet = '';
  let text = '';
  if (upp.length === 1) {
    const a = upp[0];
    fet = `${a.namn} gick upp på riktigt`;
    text = `, från runt ${visadProcent(a.fore!, a.effFore!)} till runt ${a.visadPct}${NBSP}%.`;
  } else if (upp.length > 1) {
    fet = `${lista(upp.map(a => a.namn))} gick upp på riktigt.`;
  }
  if (ned.length) {
    // Samma ton upp och ned: en säker nedgång nämns även när något annat gick upp.
    const nedText = `${lista(ned.map(a => a.namn))} gick ner mer än slumpen brukar.`;
    const titta = ` Titta på felen i ${ned[0].namn} nedan.`;
    if (fet) text += ` ${nedText}${titta}`;
    else { fet = nedText; text = titta; }
  }
  if (!fet) {
    fet = 'Passet bekräftade kartan.';
    const d = (a: KartAxel) => Math.round((a.styrka - a.fore!) * 100);
    const vaxte = kanda.filter(a => d(a) >= LITEN_FORANDRING).map(a => a.namn);
    const krympte = kanda.filter(a => d(a) <= -LITEN_FORANDRING).map(a => a.namn);
    const still = kanda.filter(a => Math.abs(d(a)) < LITEN_FORANDRING).map(a => a.namn);
    const delar: string[] = [];
    if (vaxte.length) delar.push(`${lista(vaxte)} växte lite`);
    if (krympte.length) delar.push(`${lista(krympte)} krympte lite`);
    if (still.length) delar.push(`${lista(still)} stod still`);
    text = delar.length ? ` ${lista(delar)}, men efter ett enda pass ryms det i slumpen.` : '';
  }
  if (nya.length) text += ` ${lista(nya.map(a => a.namn))} finns nu på kartan.`;
  text += graText;
  if (annan) text += ` ${annan} mätte du inte i dag.`;
  text += tillagg;
  return { fet, text, foreKontur: true };
}

/** Övertidssvaren på passets frågor: de sparas när eleven är klar med
 * övertiden, alltså efter passets created_at, och räknas till passet oavsett
 * hur lång övertiden blev. Nästa försök på samma prov (nya provsvar på någon
 * av passets frågor) avslutar passet. */
function overtidForPass(handelser: Handelse[], pass: PassIn): Set<Handelse> {
  const t = pass.createdAt.getTime();
  const ids = new Set(fragorForTest(pass.testId).map(q => q.id));
  let nasta = Infinity;
  for (const h of handelser) {
    const x = h.createdAt.getTime();
    if (h.kalla === 'prov' && x > t && x < nasta && ids.has(h.questionId)) nasta = x;
  }
  const ut = new Set<Handelse>();
  for (const h of handelser) {
    const x = h.createdAt.getTime();
    if (h.utanTid && x >= t && x < nasta && ids.has(h.questionId)) ut.add(h);
  }
  return ut;
}

/** Hela kartan. Med pass: formen efter passet (händelser till och med passet
 * plus övertidssvaren), konturen före passet och raden Ur det här provet.
 * Träna härnäst räknas alltid på alla händelser vid tidpunkten nu. */
export function byggHjarnkarta(handelser: Handelse[], alt: HjarnkartaAlt = {}): HjarnkartaData {
  const nu = alt.nu ?? new Date();
  const typer = raknaTyper(handelser, nu);
  const axlarNu = byggAxlar(handelser, nu, typer);
  const antalSvar = forStyrka(handelser).length;
  const pass = alt.pass ?? null;

  if (!pass) {
    const harnast = byggHarnast(axlarNu, antalSvar);
    return {
      tom: antalSvar === 0,
      antalSvar,
      axlar: axlarNu,
      vinnare: harnast.lage === 'delprov' || harnast.lage === 'typ' ? harnast.delprov : null,
      harnast,
      typer,
      pass: null,
      forandring: null,
      urProvet: null,
    };
  }

  const t = pass.createdAt.getTime();
  const foreH = handelser.filter(h => h.createdAt.getTime() < t);
  const overtid = overtidForPass(handelser, pass);
  const efterH = handelser.filter(h => h.createdAt.getTime() <= t + OVERTID_MINUTER * 60_000 || overtid.has(h));
  const typerFore = raknaTyper(foreH, pass.createdAt);
  const typerEfter = raknaTyper(efterH, pass.createdAt);
  const axlarFore = byggAxlar(foreH, pass.createdAt, typerFore);
  const axlarEfter = byggAxlar(efterH, pass.createdAt, typerEfter);
  // Arkens knappar följer regeln på nu, som Träna härnäst.
  axlarEfter.forEach((a, i) => { if (!a.osaker && !axlarNu[i].osaker) a.trana = axlarNu[i].trana; });
  const ps = passSvar(pass);
  if (!ps.delprov.length) {
    // Okänt prov (t.ex. borttaget ur banken): kartan som vanligt, utan passet.
    return byggHjarnkarta(handelser, { nu });
  }
  const passHandelser = handelser.filter(h => h.createdAt.getTime() === t && h.kalla === 'prov');
  const forandring = byggForandring(axlarEfter, axlarFore, ps, passHandelser, delprovVikter(foreH, pass.createdAt), delprovVikter(efterH, pass.createdAt));

  const antalFore = forStyrka(foreH).length;
  const forra = antalFore > 0 ? valjVinnare(axlarFore) : null;
  const passHalva = ps.delprov.length && ps.delprov.every(dp => HALVA[dp] === 'kvant') ? 'kvant'
    : ps.delprov.length && ps.delprov.every(dp => HALVA[dp] === 'verbal') ? 'verbal' : null;
  const harnast = byggHarnast(axlarNu, antalSvar, forra, passHalva);
  const vinnare = harnast.lage === 'delprov' || harnast.lage === 'typ' ? harnast.delprov : null;
  // Kartan visar läget efter passet; pilen står på vinnaren så länge axeln är känd där.
  const urProvet = byggUrProvet(ps, axlarNu, typer, harnast);
  return {
    tom: antalSvar === 0,
    antalSvar,
    axlar: axlarEfter,
    vinnare: vinnare && !axlarEfter.find(a => a.delprov === vinnare)!.osaker ? vinnare : null,
    harnast,
    typer,
    pass: { testId: pass.testId, delprov: ps.delprov },
    forandring,
    urProvet,
  };
}
