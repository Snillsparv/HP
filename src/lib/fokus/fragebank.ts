// Frågebanken för fokuserad träning: alla uppgifter från extramaterialet och
// huvudmaterialet HT 2021 utplattade till en lista med stabilt id, delprov,
// uppgiftstyp och gruppnyckel (DTK-frågor som delar diagram, LÄS-frågor som
// delar text). Bara för servern: modulen drar in all frågedata.
import { allaPass, testId as extraTestId } from '../extraprov/register.js';
import type { DelprovTyp } from '../extraprov/types.js';
import { subTests as kvant1 } from '../questions-ht2021.js';
import { subTests as kvant2 } from '../questions-kvant2-ht2021.js';
import { verbalSubTests as verbal1 } from '../questions-verbal-ht2021.js';
import { verbalSubTests2 as verbal2 } from '../questions-verbal2-ht2021.js';
import type { Fraga } from '../fragor/render.js';
import { DELPROV, ANTAL_PER_PASS, frageId, typFor, typNamn, delprovForTyp, normaliseraDelprov } from './typer.js';

export { DELPROV, DELPROV_NAMN, DELPROV_LANGT, frageId, typFor, typNamn, delprovForTyp, antalLuckor } from './typer.js';

export type Kalla = 'extra' | 'ht2021';

export interface BankFraga extends Fraga {
  /** Stabilt id: test_id plus nummer i passet, t.ex. extra-ht2012-1#17 eller kvant-ht2021#5. */
  id: string;
  /** test_id som provet sparas under i test_results. */
  testId: string;
  kalla: Kalla;
  /** Provtillfälle, t.ex. ht2012 eller ht2021. */
  tillfalle: string;
  delprov: DelprovTyp;
  /** Uppgiftstyp, t.ex. xyz:algebra, dtk:tabell, mek:2, ord, las. */
  typ: string;
  /** Uppgifter som hänger ihop (samma diagram eller samma text) har samma grupp. */
  grupp: string | null;
  /** Position i passets platta frågelista, samma index som i test_results.answers. */
  index: number;
  /** LÄS i extramaterialet: texten som frågan hör till. */
  lasText?: { title: string; html: string };
  /** Kortnamn för delprovet, t.ex. XYZ. */
  shortName: string;
}

function byggBank(): BankFraga[] {
  const bank: BankFraga[] = [];

  // Extramaterialet: 26 provtillfällen, 104 pass.
  for (const p of allaPass) {
    const tid = extraTestId(p);
    let index = 0;
    for (const st of p.subTests) {
      for (const q of st.questions) {
        const delprov = st.type;
        const lasText = delprov === 'las' && q.textIndex !== undefined ? st.texts?.[q.textIndex] : undefined;
        const grupp = delprov === 'dtk' && q.diagram ? `${tid}|${q.diagram}`
          : delprov === 'las' && q.textIndex !== undefined ? `${tid}|text${q.textIndex}`
          : null;
        bank.push({
          ...q,
          id: frageId(tid, q.num),
          testId: tid,
          kalla: 'extra',
          tillfalle: p.tillfalle,
          delprov,
          typ: typFor(delprov, q),
          grupp,
          index,
          lasText,
          shortName: st.shortName,
        });
        index++;
      }
    }
  }

  // Huvudmaterialet HT 2021: fyra stegprov.
  const huvud: [string, { id: string; shortName: string; type: string; questions: Fraga[] }[]][] = [
    ['kvant-ht2021', kvant1 as any],
    ['verbal-ht2021', verbal1 as any],
    ['kvant2-ht2021', kvant2 as any],
    ['verbal2-ht2021', verbal2 as any],
  ];
  for (const [tid, sts] of huvud) {
    let index = 0;
    for (const st of sts) {
      const delprov = normaliseraDelprov(st.id);
      for (const q of st.questions) {
        const grupp = delprov === 'dtk' && q.diagram ? `${tid}|${q.diagram}`
          : delprov === 'las' && q.textTitle ? `${tid}|${q.textTitle}`
          : null;
        bank.push({
          ...q,
          id: frageId(tid, q.num),
          testId: tid,
          kalla: 'ht2021',
          tillfalle: 'ht2021',
          delprov,
          typ: typFor(delprov, q),
          grupp,
          index,
          shortName: st.shortName,
        });
        index++;
      }
    }
  }
  return bank;
}

/** Alla frågor, i passordning. */
export const bank: BankFraga[] = byggBank();

// Datafilernas ordning är ett kontrakt: test_results.answers[i] mappas till
// frågan med index i. Dubbla id:n stoppar starten, brutet nummerföljd varnar.
{
  const sedda = new Set<string>();
  for (const q of bank) {
    if (sedda.has(q.id)) throw new Error(`Frågebanken har dubbla id: ${q.id}`);
    sedda.add(q.id);
    if (q.num !== q.index + 1) console.warn(`Frågebanken: ${q.id} har num ${q.num} men index ${q.index}`);
  }
}

const perId = new Map(bank.map(q => [q.id, q]));
const perTest = new Map<string, BankFraga[]>();
for (const q of bank) {
  const lista = perTest.get(q.testId) || [];
  lista.push(q);
  perTest.set(q.testId, lista);
}

export function fragaMedId(id: string): BankFraga | undefined {
  return perId.get(id);
}

/** Frågorna i ett prov i samma ordning som test_results.answers. */
export function fragorForTest(testId: string): BankFraga[] {
  return perTest.get(testId) || [];
}

export interface TypInfo {
  typ: string;
  delprov: DelprovTyp;
  namn: string;
  antal: number;
}

/** Typer med färre uppgifter än så här visas inte för sig utan slås ihop
 * till "<delprov> övrigt". Händelserna behåller den fina typen. */
export const MINSTA_TYP = 20;

function raknaTyper(kallor: Kalla[]): Map<string, number> {
  const antal = new Map<string, number>();
  for (const q of bank) {
    if (!kallor.includes(q.kalla)) continue;
    antal.set(q.typ, (antal.get(q.typ) || 0) + 1);
  }
  return antal;
}

const underGolv = new Set([...raknaTyper(['extra']).entries()].filter(([, n]) => n < MINSTA_TYP).map(([typ]) => typ));

/** Typerna under golvet, t.ex. xyz:enheter. */
export function typerUnderGolv(): string[] {
  return [...underGolv];
}

/** Typen som visas för användaren: under golvet blir det "<delprov>:ovrigt". */
export function golvTyp(typ: string): string {
  return underGolv.has(typ) ? `${typ.split(':')[0]}:ovrigt` : typ;
}

/** Stämmer frågan med ett typval? Hanterar både fina typer och "<delprov>:ovrigt". */
export function matcharTyp(q: BankFraga, val: string): boolean {
  if (val.endsWith(':ovrigt')) return q.delprov === val.split(':')[0] && underGolv.has(q.typ);
  return q.typ === val;
}

/** Alla typer som finns i banken med antal uppgifter, i delprovsordning.
 * Typer under golvet slås ihop till "<delprov> övrigt" sist i sitt delprov. */
export function allaTyper(kallor: Kalla[] = ['extra', 'ht2021']): TypInfo[] {
  const antal = new Map<string, number>();
  for (const [typ, n] of raknaTyper(kallor)) {
    const visad = golvTyp(typ);
    antal.set(visad, (antal.get(visad) || 0) + n);
  }
  return [...antal.entries()]
    .map(([typ, n]) => ({ typ, delprov: delprovForTyp(typ)!, namn: typNamn(typ), antal: n }))
    .sort((a, b) => DELPROV.indexOf(a.delprov) - DELPROV.indexOf(b.delprov) || (a.typ.endsWith(':ovrigt') ? 1 : 0) - (b.typ.endsWith(':ovrigt') ? 1 : 0) || b.antal - a.antal);
}

/** Antal frågor som stämmer med ett typval eller delprov. */
export function antalForVal(lage: 'delprov' | 'typ', val: string, kallor: Kalla[] = ['extra']): number {
  return bank.filter(q => kallor.includes(q.kalla) && (lage === 'delprov' ? q.delprov === val : matcharTyp(q, val))).length;
}

/** Ungefärligt antal uppgifter av varje typ i ett provpass: typens andel av
 * delprovet i banken gånger delprovets antal i passet. Används för att
 * rangordna svagheter efter hur mycket de kan ge på provet. */
export function typVikter(kallor: Kalla[] = ['extra']): Map<string, number> {
  const typer = allaTyper(kallor);
  const perDelprov = new Map<string, number>();
  for (const t of typer) perDelprov.set(t.delprov, (perDelprov.get(t.delprov) || 0) + t.antal);
  const vikter = new Map<string, number>();
  for (const t of typer) vikter.set(t.typ, (t.antal / (perDelprov.get(t.delprov) || 1)) * ANTAL_PER_PASS[t.delprov]);
  return vikter;
}

export function finnsTyp(typ: string): boolean {
  return bank.some(q => matcharTyp(q, typ));
}
