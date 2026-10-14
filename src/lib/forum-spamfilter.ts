// Spamfiltret för forumet. Rena funktioner utan databas, så att samma regler
// används både när ett inlägg skickas och när gammal spam städas bort.
//
// Spammet som drabbade forumet i oktober 2026 var engelska apotekstexter med
// en länk till en extern sajt, postade från ett nytt konto per tråd.

// Ord som aldrig förekommer i en riktig diskussion om högskoleprovet, oavsett
// språk. Matchas som hela ord, oavsett skiftläge.
const HARDA_SPAMORD = [
  'viagra', 'cialis', 'levitra', 'tadalafil', 'sildenafil', 'vardenafil', 'avanafil', 'kamagra',
  'nizagara', 'fildena', 'vidalista', 'sildalis', 'vpxl', 'cenforce', 'malegra', 'suhagra', 'tadacip',
  'tadapox', 'tadalis', 'vigora', 'filagra', 'eriacta', 'erectafil', 'super p-force', 'priligy',
  'dapoxetine', 'lady era', 'ed sample pack', 'super active pack', 'sildalist', 'modvigil',
  'lasuna', 'evecare', 'menosan',
  'pharmacy', 'pharmacies', 'pharmaceuticals', 'erectile', 'impotence',
  'casino', 'casinos', 'porn', 'payday', 'backlinks',
];

// Läkemedelsnamn som spammet säljer men som en svensk pluggare skulle kunna
// nämna (t.ex. i en tråd om NPF eller provångest). Räknas bara som spam när
// texten inte är på svenska.
const MJUKA_SPAMORD = [
  'ozempic', 'wegovy', 'mounjaro', 'semaglutide', 'tirzepatide', 'saxenda', 'xenical', 'orlistat',
  'prednisone', 'prednisolone', 'doxycycline', 'amoxil', 'amoxicillin', 'zithromax', 'azithromycin',
  'cipro', 'ciprofloxacin', 'flagyl', 'metronidazole', 'keflex', 'cephalexin', 'bactrim', 'augmentin',
  'acyclovir', 'valtrex', 'valacyclovir', 'famvir', 'lasix', 'furosemide', 'propecia', 'finasteride',
  'pristiq', 'quibron', 'quibron-t', 'bentyl', 'zanaflex', 'tizanidine', 'hydroxychloroquine', 'plaquenil',
  'ivermectin', 'stromectol', 'clonidine', 'lisinopril', 'tamoxifen', 'nolvadex', 'clomid', 'clomiphene',
  'retin-a', 'tretinoin', 'accutane', 'isotretinoin', 'cytotec', 'misoprostol', 'arimidex', 'synthroid',
  'lexapro', 'zoloft', 'prozac', 'cymbalta', 'wellbutrin', 'neurontin', 'gabapentin', 'lyrica', 'pregabalin',
  'tramadol', 'xanax', 'alprazolam', 'valium', 'diazepam', 'oxycodone', 'hydrocodone', 'ambien',
  'diflucan', 'fluconazole', 'lipitor', 'crestor', 'nexium', 'celebrex', 'mobic', 'medrol', 'deltasone',
  'buspar', 'zyban', 'seroquel', 'abilify', 'symbicort', 'flomax', 'prazosin', 'sarafem', 'biktarvy',
  'tenvir', 'strattera', 'propranolol', 'meldonium', 'retin a',
];

// Vanliga svenska och engelska småord. Används för att skilja ett svenskt
// inlägg från ett engelskt utan att behöva en språkmodell.
const SV_ORD = new Set(`
  och att det som jag en ett inte har till av om kan man vad hur de den dem så men vi du ni mig dig
  min mitt mina din ditt dina sin sitt sina eller vill ska skulle bara nu tack hej någon något några
  finns blir bli varit vara gör göra mer mest också än efter innan sedan ju väl hade han hon hen
  vilken vilket vilka varför var när här där detta denna dessa samma alla allt andra annan annat
  provet prov ord plugga pluggar pluggat poäng delprov frågor fråga svar uppgifter uppgift
`.split(/\s+/).filter(Boolean));

const EN_ORD = new Set(`
  the and to of your you for with is are this that can it on by an be if or from our how what
  should more any about have has will was were their them they these those which who when where why
  would could there here into just than then also only my me we us its it's i'm don't do does
  get best online buy using use visit discover consider offers offering ensure looking anyone
`.split(/\s+/).filter(Boolean));

const ESC = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const helaOrd = (lista: string[]) =>
  new RegExp(`(^|[^\\p{L}\\p{N}])(${lista.map(ESC).join('|')})(?=$|[^\\p{L}\\p{N}])`, 'iu');
const HARDA_RE = helaOrd(HARDA_SPAMORD);
const MJUKA_RE = helaOrd(MJUKA_SPAMORD);

// Länkar och bara domännamn (example.com/...). Den egna sajten räknas inte.
const LANK_RE = /\bhttps?:\/\/[^\s<>"']+|\bwww\.[^\s<>"']+|\b[a-z0-9][a-z0-9-]*\.(?:com|net|org|info|biz|io|co|us|uk|ru|xyz|top|shop|online|site|store|club|live|pro|cc|me)\b(?:\/[^\s<>"']*)?/gi;
const EGEN_SAJT_RE = /^(?:https?:\/\/)?(?:www\.)?(?:hpakuten\.se|bbakuten\.se)(?:[/?#]|$)/i;

export function externaLankar(text: string): string[] {
  return (text.match(LANK_RE) || []).filter(l => !EGEN_SAJT_RE.test(l));
}

function rakna(text: string) {
  const utanLankar = text.replace(LANK_RE, ' ');
  const ord = utanLankar.toLowerCase().replace(/[’`]/g, "'").match(/[a-zåäöé][a-zåäöé']*/g) || [];
  let sv = 0, en = 0;
  for (const o of ord) {
    if (SV_ORD.has(o)) sv++;
    if (EN_ORD.has(o)) en++;
  }
  return { ord: ord.length, sv, en, aao: /[åäö]/i.test(utanLankar) };
}

// Engelsk text: tillräckligt många ord, inga å/ä/ö och klart fler engelska än
// svenska småord. Korta svar ("No", "what?") räknas aldrig.
export function serEngelskUt(text: string): boolean {
  const r = rakna(text);
  return !r.aao && r.ord >= 6 && r.en >= 3 && r.en > 2 * r.sv;
}

function serSvenskUt(text: string): boolean {
  const r = rakna(text);
  return r.aao || r.sv >= 2;
}

export function harSpamord(text: string): boolean {
  return HARDA_RE.test(text) || (MJUKA_RE.test(text) && !serSvenskUt(text));
}

// Länkmarkering i HTML eller BBCode. Forumet visar bara ren text, så en
// människa har ingen anledning att skriva sådant.
const LANKKOD_RE = /<a\s[^>]*href|\[url[\]=]|\[link[\]=]/i;

export type SpamOrsak =
  | 'spamord'         // läkemedel, kasino o.d.
  | 'lankkod'         // <a href=...> eller [url=...]
  | 'lankar'          // flera externa länkar i en text som inte är svensk
  | 'engelska_lank'   // engelsk text med extern länk
  | 'engelska'        // engelsk text utan länk (kan vara en riktig människa)
  | 'ny_lank';        // svensk text med extern länk från ett konto yngre än ett dygn

// Säkra fall: inlägget är spam oavsett vem som skrev det.
export const SAKER_SPAM: SpamOrsak[] = ['spamord', 'lankkod', 'lankar', 'engelska_lank'];

export function spamOrsak(text: string, opts: { nyttKonto?: boolean } = {}): SpamOrsak | null {
  if (harSpamord(text)) return 'spamord';
  const lankar = externaLankar(text);
  if (lankar.length && LANKKOD_RE.test(text)) return 'lankkod';
  if (lankar.length >= 2 && !serSvenskUt(text)) return 'lankar';
  const engelska = serEngelskUt(text);
  if (engelska && lankar.length) return 'engelska_lank';
  if (engelska) return 'engelska';
  if (lankar.length && opts.nyttKonto) return 'ny_lank';
  return null;
}

export const SPAM_MEDDELANDE: Record<SpamOrsak, string> = {
  spamord: 'Inlägget stoppades av spamfiltret.',
  lankkod: 'Inlägget stoppades av spamfiltret.',
  lankar: 'Inlägget stoppades av spamfiltret.',
  engelska_lank: 'Inlägget stoppades av spamfiltret.',
  engelska: 'Forumet är på svenska. Skriv gärna ditt inlägg på svenska.',
  ny_lank: 'Nya konton kan inte dela länkar till andra sidor under det första dygnet. Ta bort länken eller försök igen i morgon.',
};

// Dolda fält i formulären (se components/SpamSkydd.astro): ett fält som
// människor inte ser och därför lämnar tomt, och tidpunkten då formuläret
// visades. Botar fyller i allt och skickar direkt.
export function formularFel(form: FormData, minSekunder = 3): 'falla' | 'tid' | null {
  if ((form.get('website')?.toString() || '').trim()) return 'falla';
  const t = parseInt(form.get('t')?.toString() || '', 36);
  if (!Number.isFinite(t) || Date.now() - t < minSekunder * 1000) return 'tid';
  return null;
}
