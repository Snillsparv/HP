// Spamfiltret för forumet. Rena funktioner utan databas, så att samma regler
// används både när ett inlägg skickas och när gammal spam städas bort.
//
// Spammet som drabbade forumet i oktober 2026 var engelska apotekstexter med
// en länk till en extern sajt, postade från ett nytt konto per tråd.
//
// Grundprincip: ett inlägg som liknar spam stoppas med ett meddelande som
// säger vad som är fel, men ett konto raderas bara när signalen är entydig
// (se arEntydigSpam). En svensk pluggare som nämner sin ADHD-medicin, citerar
// en engelsk ELF-text eller delar länkar till Quizlet ska aldrig råka illa ut.

// Varumärken för potensmedel o.d. Förekommer aldrig i en riktig diskussion om
// högskoleprovet. Matchas som hela ord, oavsett skiftläge.
const HARDA_SPAMORD = [
  'viagra', 'cialis', 'levitra', 'tadalafil', 'sildenafil', 'vardenafil', 'avanafil', 'kamagra',
  'nizagara', 'fildena', 'vidalista', 'sildalis', 'sildalist', 'vpxl', 'cenforce', 'malegra', 'suhagra',
  'tadacip', 'tadapox', 'tadalis', 'vigora', 'filagra', 'eriacta', 'erectafil', 'super p-force',
  'priligy', 'dapoxetine', 'lady era', 'ed sample pack', 'super active pack', 'modvigil',
  'lasuna', 'evecare', 'menosan',
];

// Läkemedel som spammet säljer men som en svensk pluggare kan nämna (t.ex. i
// en tråd om NPF eller provångest). Räknas tillsammans med en länk till en
// okänd sajt, eller i engelsk text.
const MJUKA_SPAMORD = [
  'ozempic', 'wegovy', 'mounjaro', 'semaglutide', 'tirzepatide', 'saxenda', 'xenical', 'orlistat',
  'prednisone', 'prednisolone', 'doxycycline', 'amoxil', 'amoxicillin', 'zithromax', 'azithromycin',
  'cipro', 'ciprofloxacin', 'flagyl', 'metronidazole', 'keflex', 'cephalexin', 'bactrim', 'augmentin',
  'acyclovir', 'valtrex', 'valacyclovir', 'famvir', 'lasix', 'furosemide', 'propecia', 'finasteride',
  'pristiq', 'quibron', 'bentyl', 'zanaflex', 'tizanidine', 'hydroxychloroquine', 'plaquenil',
  'ivermectin', 'stromectol', 'clonidine', 'lisinopril', 'tamoxifen', 'nolvadex', 'clomid', 'clomiphene',
  'tretinoin', 'accutane', 'isotretinoin', 'cytotec', 'misoprostol', 'arimidex', 'synthroid',
  'lexapro', 'zoloft', 'prozac', 'cymbalta', 'wellbutrin', 'neurontin', 'gabapentin', 'lyrica', 'pregabalin',
  'tramadol', 'xanax', 'alprazolam', 'valium', 'diazepam', 'oxycodone', 'hydrocodone', 'ambien',
  'diflucan', 'fluconazole', 'lipitor', 'crestor', 'nexium', 'celebrex', 'mobic', 'medrol', 'deltasone',
  'buspar', 'zyban', 'seroquel', 'abilify', 'symbicort', 'flomax', 'prazosin', 'sarafem', 'biktarvy',
  'tenvir', 'strattera', 'propranolol', 'meldonium',
];

// Vanliga engelska ord som också dyker upp i ELF-texter och spelnamn
// ("political impotence", "Payday 2"). Räknas bara tillsammans med en länk
// till en okänd sajt.
const VANLIGA_SPAMORD = [
  'pharmacy', 'pharmacies', 'pharmaceuticals', 'erectile', 'impotence', 'casino', 'casinos',
  'casinon', 'casinot', 'porn', 'payday', 'backlinks',
];

// Vanliga svenska och engelska småord. Används för att skilja ett svenskt
// inlägg från ett engelskt utan att behöva en språkmodell. De svenska orden
// finns även utan å/ä/ö, för den som skriver på ett engelskt tangentbord.
const SV_ORD = new Set(`
  och att det som jag en ett inte har till av om kan man vad hur de den dem så men vi du ni mig dig
  min mitt mina din ditt dina sin sitt sina eller vill ska skulle bara nu tack hej någon något några
  finns blir bli varit vara gör göra mer mest också än efter innan sedan ju väl hade han hon hen
  vilken vilket vilka varför var när här där detta denna dessa samma alla allt andra annan annat
  provet prov ord plugga pluggar pluggat poäng delprov frågor fråga svar uppgifter uppgift
  ar pa nagon nagot nagra fran nar varfor fraga fragor forsta forstar fattar betyder menas tolkar
  hjalp hjalper bast mycket ocksa kanske tycker tror vet ocksa sa har tips
`.split(/\s+/).filter(Boolean));

// Engelska ord som inte också är svenska ord skrivna utan å/ä/ö (därför
// saknas t.ex. "in", "at", "all" och "so").
const EN_ORD = new Set(`
  the and to of your you for with is are this that can it on by an be if or from our how what
  should more any about have has will was were their them they these those which who when where why
  would could there here into just than then also only my me we us its it's i'm don't do does
  get best online buy using use visit discover consider offers offering ensure looking anyone
  a not but as up out after before during through while some many most other such very too now
  been being had may might must need help take make find try trying people patients users
  treatment health effective effectively symptoms doctor quickly easily side effects experience
  recommend reduce without prescription options solution purchase obtain acquire secure explore
  affordable cheap price prices cost save today click please
`.split(/\s+/).filter(Boolean));

// Kyrilliska och grekiska bokstäver som ser ut som latinska (t.ex. "viagra"
// skrivet med ett kyrilliskt a, U+0430).
const LIKNANDE: Record<string, string> = {
  '\u0430': 'a', '\u0435': 'e', '\u043E': 'o', '\u0440': 'p', '\u0441': 'c', '\u0445': 'x',
  '\u0443': 'y', '\u0456': 'i', '\u0458': 'j', '\u0455': 's', '\u0501': 'd', '\u04BB': 'h',
  '\u04CF': 'l', '\u0410': 'A', '\u0412': 'B', '\u0415': 'E', '\u041A': 'K', '\u041C': 'M',
  '\u041D': 'H', '\u041E': 'O', '\u0420': 'P', '\u0421': 'C', '\u0422': 'T', '\u0425': 'X',
  '\u0406': 'I', '\u03B1': 'a', '\u03B5': 'e', '\u03B9': 'i', '\u03BA': 'k', '\u03BD': 'v',
  '\u03BF': 'o', '\u03C1': 'p', '\u03C4': 't', '\u03C5': 'u', '\u0391': 'A', '\u0392': 'B',
  '\u0395': 'E', '\u0399': 'I', '\u039A': 'K', '\u039C': 'M', '\u039D': 'N', '\u039F': 'O',
  '\u03A1': 'P', '\u03A4': 'T', '\u03A7': 'X',
};

// Tar bort osynliga tecken (mjukt bindestreck, nollbreddsmellanslag) och
// byter ut lånade bokstäver, så att "vi\u00ADagra" och "american-longevity\u200B.com"
// känns igen. Används bara för att bedöma texten; inlägget sparas som det skrevs.
export function normalisera(text: string): string {
  return text
    .normalize('NFKC')
    .replace(/\p{Cf}/gu, '')
    .replace(/[\u0370-\u03FF\u0400-\u04FF]/g, c => LIKNANDE[c] ?? c);
}

// "vi-agra", "o.z.e.m.p.i.c": skiljetecken mellan bokstäver tas bort när
// läkemedelsnamn letas.
const hopdra = (s: string) => s.replace(/(?<=\p{L})[-_.·*'’`]+(?=\p{L})/gu, '');

const ESC = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const helaOrd = (lista: string[]) =>
  new RegExp(`(^|[^\\p{L}\\p{N}])(${[...new Set(lista.map(hopdra))].map(ESC).join('|')})(?=$|[^\\p{L}\\p{N}])`, 'iu');
const HARDA_RE = helaOrd(HARDA_SPAMORD);
const MJUKA_RE = helaOrd(MJUKA_SPAMORD);
const VANLIGA_RE = helaOrd(VANLIGA_SPAMORD);
const ALLA_SPAMORD = [...HARDA_SPAMORD, ...MJUKA_SPAMORD, ...VANLIGA_SPAMORD]
  .map(o => o.replace(/[^a-z]/g, '')).filter(o => o.length >= 5);

const traff = (re: RegExp, text: string) => re.test(text) || re.test(hopdra(text));

// Länkar: med https:// eller www., och bara domännamn (exempel.com/sida).
// Ett bart domännamn måste ha en känd toppdomän skriven med gemener, så att
// ett glömt mellanslag ("provet.Info", "delen.det") inte räknas som länk.
const SCHEMA_RE = /\bhttps?:\/\/[^\s<>"']+|\bwww\.[^\s<>"']+/gi;
const TOPPDOMANER = `com net org info biz edu gov int io co app dev xyz top shop store online site
  website space club live life pro me tv cc ws icu fun world today news blog tech link click buzz
  health care clinic doctor fit beauty lol vip win bid loan work cloud digital agency email guru ltd
  company group market sale deals best plus page wiki host press network center zone social media
  tk ml ga cf gq pw su ru ua cn eu nl fr es pl uk us ca au br se dk fi ee lv lt`
  .split(/\s+/).filter(Boolean).join('|');
const DOMAN_RE = new RegExp(
  `(?<![\\w@.\\-/])(?:[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]\\.)+(?:${TOPPDOMANER})\\b(?!\\.\\w)(?:\\/[^\\s<>"']*)?`, 'g'
);
// E-postadresser är inga länkar.
const EPOST_RE = /[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g;

const varden = (lank: string) =>
  lank.replace(/^https?:\/\//i, '').replace(/^www\./i, '').split(/[/?#:]/)[0].toLowerCase();

// Den egna sajten är aldrig en extern länk.
const egen = (v: string) => /(^|\.)(hpakuten|bbakuten)\.se$/.test(v);

// Sajter som pluggare länkar till. Länkar hit räknas aldrig som okända.
const KANDA_SAJTER = [
  'youtube.com', 'youtu.be', 'quizlet.com', 'memrise.com', 'ankiweb.net', 'reddit.com', 'redd.it',
  'docs.google.com', 'drive.google.com', 'wikipedia.org', 'wiktionary.org', 'discord.com', 'discord.gg',
  'khanacademy.org', 'studera.nu', 'imgur.com', 'instagram.com', 'tiktok.com', 'facebook.com',
  'spotify.com', 'notion.so', 'bbc.com', 'bbc.co.uk', 'theguardian.com', 'nytimes.com', 'economist.com',
  'britannica.com', 'merriam-webster.com', 'cambridge.org', 'oxfordlearnersdictionaries.com',
  'dictionary.com', 'wolframalpha.com', 'desmos.com', 'geogebra.org', 'github.com', 'chatgpt.com',
  'flashback.org',
];
const kand = (v: string) => KANDA_SAJTER.some(d => v === d || v.endsWith('.' + d));

export function externaLankar(text: string): string[] {
  const t = normalisera(text).replace(EPOST_RE, ' ');
  const lankar = [...(t.match(SCHEMA_RE) || []), ...(t.replace(SCHEMA_RE, ' ').match(DOMAN_RE) || [])];
  return lankar.filter(l => !egen(varden(l)));
}

// Externa länkar till sajter som inte är svenska (.se) och inte är kända
// pluggsajter.
export function okandaLankar(text: string): string[] {
  return externaLankar(text).filter(l => { const v = varden(l); return !v.endsWith('.se') && !kand(v); });
}

// Citat ("...", “...”, rader som börjar med >) räknas inte när språket
// bedöms, så att en svensk fråga om en engelsk ELF-mening förblir svensk.
const CITAT_RE = /"[^"\n]{15,}"|“[^”\n]{15,}”|”[^”\n]{15,}”|«[^»\n]{15,}»|^\s*>.*$/gm;

function rakna(text: string) {
  const t = normalisera(text).replace(EPOST_RE, ' ').replace(SCHEMA_RE, ' ').replace(DOMAN_RE, ' ');
  const ord = t.toLowerCase().replace(/[’`]/g, "'").match(/[a-zåäöé][a-zåäöé']*/g) || [];
  let sv = 0, en = 0;
  for (const o of ord) {
    if (SV_ORD.has(o)) sv++;
    if (EN_ORD.has(o)) en++;
  }
  return { ord: ord.length, sv, en, aao: /[åäö]/i.test(t) };
}

// Engelsk text: tillräckligt många ord, inga å/ä/ö och klart fler engelska än
// svenska småord. Korta svar ("No", "what?") och citat räknas inte.
export function serEngelskUt(text: string): boolean {
  const r = rakna(text.replace(CITAT_RE, ' '));
  return !r.aao && r.ord >= 6 && r.en >= 3 && r.en > 2 * r.sv;
}

// Mest engelska ord, även om ett å/ä/ö finns någonstans ("... Mvh Björn").
function mestEngelska(text: string): boolean {
  const r = rakna(text.replace(CITAT_RE, ' '));
  return r.en >= 3 && r.en > 2 * r.sv;
}

function serSvenskUt(text: string): boolean {
  const r = rakna(text);
  return r.aao || r.sv >= 2;
}

// Länkmarkering i HTML eller BBCode. Forumet visar bara ren text, så en
// människa har ingen anledning att skriva sådant.
const LANKKOD_RE = /<a\s[^>]*href|\[url[\]=]|\[link[\]=]/i;

// Ett spamord i själva domännamnet (buyviagra.com, casinoutanlicens.nu).
const spamdoman = (lankar: string[]) =>
  lankar.some(l => { const v = varden(l).replace(/[^a-z]/g, ''); return ALLA_SPAMORD.some(o => v.includes(o)); });

function harSpamord(text: string, lankar: string[], okanda: string[], engelska: boolean): boolean {
  if (traff(HARDA_RE, text)) return true;
  if (spamdoman(lankar.filter(l => !kand(varden(l))))) return true;
  if (traff(MJUKA_RE, text) && (okanda.length > 0 || engelska)) return true;
  if (traff(VANLIGA_RE, text) && okanda.length > 0) return true;
  return false;
}

export type SpamOrsak =
  | 'spamord'         // läkemedel, kasino o.d. (se harSpamord)
  | 'lankkod'         // <a href=...> eller [url=...] tillsammans med en länk
  | 'engelska_lank'   // engelsk text med länk till en okänd sajt
  | 'lankar'          // flera länkar till okända sajter i en text som inte är svensk
  | 'ny_lank';        // länk till en okänd sajt från ett konto som är nytt i forumet

// Skäl som städningen av spamperioden tar bort inlägg för (alla kräver en
// länk till en annan sajt).
export const STADA_SPAM: SpamOrsak[] = ['spamord', 'lankkod', 'engelska_lank', 'lankar'];

export function spamOrsak(text: string, opts: { nyttKonto?: boolean } = {}): SpamOrsak | null {
  const lankar = externaLankar(text);
  const okanda = okandaLankar(text);
  const engelska = serEngelskUt(text);
  if (harSpamord(normalisera(text), lankar, okanda, engelska)) return 'spamord';
  if (lankar.length && LANKKOD_RE.test(text)) return 'lankkod';
  if (engelska && okanda.length) return 'engelska_lank';
  if (okanda.length >= 2 && !serSvenskUt(text)) return 'lankar';
  if (okanda.length && opts.nyttKonto) return 'ny_lank';
  return null;
}

// Entydig spam: länk till en okänd sajt tillsammans med ett varumärke för
// potensmedel, länkmarkering, ett spamord i domännamnet eller ett läkemedel i
// en text som inte är svensk. Bara då raderas ett helt nytt konto direkt.
export function arEntydigSpam(text: string): boolean {
  const okanda = okandaLankar(text);
  if (!okanda.length) return false;
  const t = normalisera(text);
  return traff(HARDA_RE, t) || LANKKOD_RE.test(t) || spamdoman(okanda)
    || ((traff(MJUKA_RE, t) || traff(VANLIGA_RE, t)) && (!serSvenskUt(t) || mestEngelska(t)));
}

// Användarnamn visas vid varje inlägg, så de får inte innehålla reklam. Längden
// kontrolleras bara när namnet väljs (befintliga konton kan inte byta namn).
export function namnArSpam(namn: string, { kollaLangd = true } = {}): boolean {
  const n = normalisera(namn);
  return (kollaLangd && n.length > 40) || externaLankar(n).length > 0
    || traff(HARDA_RE, n) || traff(MJUKA_RE, n) || traff(VANLIGA_RE, n);
}

export const SPAM_MEDDELANDE: Record<SpamOrsak, string> = {
  spamord: 'Inlägget publicerades inte eftersom spamfiltret stoppade det.',
  lankkod: 'Inlägget publicerades inte eftersom spamfiltret stoppade det.',
  engelska_lank: 'Inlägget publicerades inte. Forumet är på svenska, och engelska inlägg med länkar stoppas av spamfiltret.',
  lankar: 'Inlägget publicerades inte. Inlägg med flera länkar till andra sidor behöver vara skrivna på svenska. Skriv några meningar om länkarna eller ta bort några av dem.',
  ny_lank: 'Inlägget publicerades inte. Konton som är nya i forumet kan inte dela länkar till andra sidor än. Ta bort länken så går det bra.',
};

export const RADERAT_MEDDELANDE = 'Inlägget stoppades av spamfiltret och kontot togs bort. Är du en riktig person? Skriv till oss via formuläret längst ner på sidan, så hjälper vi dig.';

// Dolda fält i formulären (se components/SpamSkydd.astro): ett fält som
// människor inte ser och därför lämnar tomt, och tidpunkten då formuläret
// visades. Botar fyller i allt och skickar direkt.
export function formularFel(form: FormData, minSekunder = 3): 'falla' | 'tid' | null {
  if ((form.get('website')?.toString() || '').trim()) return 'falla';
  const t = parseInt(form.get('t')?.toString() || '', 36);
  if (!Number.isFinite(t) || Date.now() - t < minSekunder * 1000) return 'tid';
  return null;
}
