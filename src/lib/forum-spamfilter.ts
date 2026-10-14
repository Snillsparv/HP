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
// ("political impotence", "Payday 2"), och typiska fraser i svensk spam.
// Räknas bara tillsammans med en länk.
const VANLIGA_SPAMORD = [
  'pharmacy', 'pharmacies', 'pharmaceuticals', 'erectile', 'impotence', 'casino', 'casinon', 'casinot',
  'porn', 'payday', 'backlinks', 'no prescription', 'without prescription', 'without a prescription',
  'utan recept', 'snabblån', 'smslån', 'utan uc', 'utan svensk licens', 'utan spelpaus',
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
  hjalp hjalper bast mycket ocksa kanske tycker tror vet sa har tips
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

// Kyrilliska, grekiska och andra bokstäver som ser ut som latinska (t.ex.
// "viagra" skrivet med ett kyrilliskt a, U+0430).
const LIKNANDE: Record<string, string> = {
  '\u0430': 'a', '\u0435': 'e', '\u043E': 'o', '\u0440': 'p', '\u0441': 'c', '\u0445': 'x',
  '\u0443': 'y', '\u0456': 'i', '\u0458': 'j', '\u0455': 's', '\u0501': 'd', '\u04BB': 'h',
  '\u04CF': 'l', '\u0410': 'A', '\u0412': 'B', '\u0415': 'E', '\u041A': 'K', '\u041C': 'M',
  '\u041D': 'H', '\u041E': 'O', '\u0420': 'P', '\u0421': 'C', '\u0422': 'T', '\u0425': 'X',
  '\u0406': 'I', '\u03B1': 'a', '\u03B5': 'e', '\u03B9': 'i', '\u03BA': 'k', '\u03BD': 'v',
  '\u03BF': 'o', '\u03C1': 'p', '\u03C4': 't', '\u03C5': 'u', '\u0391': 'A', '\u0392': 'B',
  '\u0395': 'E', '\u0399': 'I', '\u039A': 'K', '\u039C': 'M', '\u039D': 'N', '\u039F': 'O',
  '\u03A1': 'P', '\u03A4': 'T', '\u03A7': 'X', '\u0131': 'i', '\u0251': 'a', '\u0585': 'o',
};

// Tar bort osynliga tecken (mjukt bindestreck, nollbreddsmellanslag) och
// accenter (utom de som gör å, ä och ö), och byter ut lånade bokstäver, så att
// "vi\u00ADagra", "vi\u00E1gra" och "american-longevity\u200B.com" känns igen.
// Används bara för att bedöma texten; inlägget sparas som det skrevs.
export function normalisera(text: string): string {
  return text
    .normalize('NFKC')
    .replace(/\p{Cf}/gu, '')
    .normalize('NFD')
    .replace(/(?<![aoAO])\u0308|(?<![aA])\u030A/g, '')
    .replace(/(?![\u0308\u030A])\p{M}/gu, '')
    .normalize('NFC')
    .replace(/[\u3002\uFF61]/g, '.')
    .replace(/[\u0131\u0251\u0370-\u052F\u0585]/g, c => LIKNANDE[c] ?? c);
}

// Varianter av texten som läkemedelsnamn letas i: skiljetecken mellan
// bokstäver bort ("vi-agra", "vi/agra", "o.z.e.m.p.i.c"), siffror som bokstäver
// ("v1agra", "0zempic") och ord som skrivits ihop ("BuyViagraOnline").
const hopdra = (s: string) => s.replace(/(?<=\p{L})[-_.·*'’`/+|~^\u2010-\u2015\u2022]+(?=\p{L})/gu, '');
const LEET: Record<string, string> = { '0': 'o', '1': 'i', '3': 'e', '4': 'a', '5': 's', '@': 'a', '$': 's' };
const avkoda = (s: string) => s
  .replace(/(?<=\p{L})[013457@$]|[013457@$](?=\p{L})/gu, c => LEET[c])
  .replace(/(?<=\p{Ll})(?=\p{Lu})/gu, ' ');
const varianter = (s: string) => [s, hopdra(s), avkoda(hopdra(s))];

const ESC = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// Hela ord, men siffror direkt efter ("viagra100mg") och plural ("viagras") är tillåtna.
const helaOrd = (lista: string[]) =>
  new RegExp(`(^|[^\\p{L}\\p{N}])(${[...new Set(lista.map(hopdra))].map(ESC).join('|')})(?:e?s)?(?=$|[^\\p{L}])`, 'iu');
const HARDA_RE = helaOrd(HARDA_SPAMORD);
const MJUKA_RE = helaOrd(MJUKA_SPAMORD);
const VANLIGA_RE = helaOrd(VANLIGA_SPAMORD);
const traff = (re: RegExp, text: string) => varianter(text).some(v => re.test(v));

// Länkar: med https:// (eller hxxps://) eller www., och bara domännamn
// (exempel.com/sida). Ett bart domännamn utan sökväg måste ha en vanlig
// toppdomän skriven med gemener, så att ett glömt mellanslag ("provet.Info",
// "augusti.ca 2h") inte räknas som länk. Med en sökväg efter, eller med
// .com/.net/.org, räknas alla toppdomäner och alla skiftlägen.
const SCHEMA_RE = /\b(?:https?|hxxps?):\/\/[^\s<>"']+|\bwww\.[^\s<>"']+/gi;
const TOPPDOMANER = `com net org info biz edu gov int io co app dev xyz top shop store online site
  website space club live life pro me tv cc ws icu fun world today news blog tech link click buzz
  health care clinic doctor fit beauty lol vip win bid loan work cloud digital agency email guru ltd
  company group market sale deals best plus page wiki host press network center zone social media
  cyou sbs cfd bond bet casino poker pharmacy
  tk ml cf gq pw su ru ua cn eu nl fr es pl uk us au br se dk fi ee lv lt`
  .split(/\s+/).filter(Boolean).join('|');
const ETIKETT = '(?:[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]\\.)+';
const FORE = '(?<![\\p{L}\\p{N}@.\\-])';
const DOMAN_RE = new RegExp(`${FORE}${ETIKETT}(?:${TOPPDOMANER})(?![\\p{L}\\p{N}])(?!\\.\\w)(?:\\/[^\\s<>"']*)?`, 'gu');
const DOMAN_SOKVAG_RE = new RegExp(`${FORE}${ETIKETT}(?:[a-zA-Z]{2,24}\\/[^\\s<>"']+|(?:com|net|org)(?![\\p{L}\\p{N}])(?!\\.\\w))`, 'giu');
// Domännamn som skrivits för att inte se ut som länkar ("sajt .com/x",
// "sajt[.]com", "sajt(dot)com"). Det gör bara den som vill komma runt ett filter.
const DOLD_RE = /(?<![\w@.\-])([a-z0-9][a-z0-9-]*[a-z0-9])(?:\s+\.\s*|\s*\[\.\]\s*|\s*\(\.\)\s*|\s*\[dot\]\s*|\s*\(dot\)\s*)(com|net|org|info|biz|xyz|shop|online|site|store|health|top|icu)(?![\w-])(\/[^\s<>"']*)?/gi;
// Korta länkar (bit.ly/abc) har för korta namn för reglerna ovan.
const KORTLANK_RE = /(?<![\w@.\-/])(?:bit\.ly|t\.co|x\.co|x\.com|tinyurl\.com|goo\.gl|cutt\.ly|is\.gd|rb\.gy|ow\.ly|tiny\.cc|shorturl\.at)\/[^\s<>"']+/gi;
// E-postadresser är inga länkar (de tas bort efter riktiga länkar, så att
// https://namn@sajt.com inte försvinner).
const EPOST_RE = /[\w.+-]+@[\w-]+(?:\.[\w-]+)+/g;

const varden = (lank: string) => lank
  .replace(/^(?:https?|hxxps?):\/\//i, '')
  .replace(/^[^/?#]*@/, '')
  .replace(/^www\./i, '')
  .split(/[/?#:[\]]/)[0]
  .toLowerCase()
  .replace(/[^a-z0-9]+$/, '');
// En länk med användarnamn före sajten (https://youtube.com@spam.com) är
// alltid ett försök att lura.
const medAnvandarnamn = (lank: string) => /^(?:https?|hxxps?):\/\/[^/?#\s]*@/i.test(lank);

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
  'flashback.org', 'theatlantic.com', 'newyorker.com', 'scientificamerican.com', 'aeon.co', 'npr.org',
  'washingtonpost.com', 'time.com', 'nature.com', 'newscientist.com',
  'gmail.com', 'hotmail.com', 'outlook.com', 'live.com', 'icloud.com', 'yahoo.com',
  'vocabulary.com', 'duolingo.com', 'brilliant.org', 'ted.com', 'studocu.com', 'wordwall.net',
  'quizizz.com', 'kahoot.it', 'canva.com', 'mathsisfun.com', 'purplemath.com', 'hogskoleprov.nu',
  'prnt.sc', 'prntscr.com', 'gyazo.com', 'ibb.co', '1drv.ms', 'steampowered.com',
];

// Svenska vårdsajter: där får läkemedel nämnas tillsammans med en länk.
const VARDSAJTER = ['1177.se', 'fass.se', 'lakemedelsverket.se', 'janusinfo.se', 'internetmedicin.se',
  'apoteket.se', 'apotea.se', 'kronansapotek.se', 'apohem.se', 'socialstyrelsen.se', 'folkhalsomyndigheten.se'];
const vard = (v: string) => VARDSAJTER.some(d => v === d || v.endsWith('.' + d));
const kand = (v: string) => KANDA_SAJTER.some(d => v === d || v.endsWith('.' + d));

// Sajter där vem som helst kan lägga upp en sida (och omdirigeringar). De
// räknas som kända för länkreglerna, men inte för spamord och engelsk text.
const OPPNA_SAJTER = [
  'docs.google.com', 'drive.google.com', 'sites.google.com', 'github.com', 'github.io', 'notion.so',
  'notion.site', 'discord.gg', 'discord.com', 'imgur.com', 'chatgpt.com', 'blogg.se', 'bloggplatsen.se',
  'webnode.se', 'wordpress.com', 'blogspot.com', 'medium.com', 'telegra.ph', 'linktr.ee',
];
const oppen = (l: string) => {
  const v = varden(l);
  return OPPNA_SAJTER.some(d => v === d || v.endsWith('.' + d)) || /[?&](?:q|url|u|target|redirect)=(?:https?|www)/i.test(l);
};

export function externaLankar(text: string): string[] {
  const t = normalisera(text);
  const rest = t.replace(SCHEMA_RE, ' ').replace(EPOST_RE, ' ').replace(KORTLANK_RE, ' ');
  const bara = rest.match(DOMAN_RE) || [];
  const sokvag = rest.replace(DOMAN_RE, ' ').match(DOMAN_SOKVAG_RE) || [];
  const dolda = [...t.matchAll(DOLD_RE)].map(m => `${m[1]}.${m[2]}${m[3] || ''}`);
  const lankar = [...(t.match(SCHEMA_RE) || []), ...(t.match(KORTLANK_RE) || []), ...bara, ...sokvag, ...dolda];
  return lankar.filter(l => !egen(varden(l)) || medAnvandarnamn(l));
}

const harDoldLank = (text: string) => [...normalisera(text).matchAll(DOLD_RE)].some(m => !egen(`${m[1]}.${m[2]}`.toLowerCase()));

// Externa länkar till sajter som inte är svenska (.se) och inte är kända
// pluggsajter.
export function okandaLankar(text: string): string[] {
  return externaLankar(text).filter(l => {
    const v = varden(l);
    return medAnvandarnamn(l) || (!v.endsWith('.se') && !kand(v));
  });
}

// Citat ("...", “...”, '...', ‘...’, rader som börjar med >) räknas inte när
// språket bedöms, så att en svensk fråga om en engelsk ELF-mening förblir svensk.
const CITAT_RE = /"[^"\n]{15,}"|“[^”\n]{15,}”|”[^”\n]{15,}”|«[^»\n]{15,}»|(?<![A-Za-zÅÄÖåäö])['‘’][^\n]{15,}?['’](?![A-Za-zÅÄÖåäö])|^\s*>.*$/gm;

function rakna(text: string) {
  const t = normalisera(text).replace(SCHEMA_RE, ' ').replace(EPOST_RE, ' ').replace(KORTLANK_RE, ' ')
    .replace(DOMAN_RE, ' ').replace(DOMAN_SOKVAG_RE, ' ');
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

// Engelsk text med på sin höjd en hälsning på svenska ("... Mvh Björn"). En
// svensk fråga runt ett inklistrat engelskt stycke räknas inte.
function mestEngelska(text: string): boolean {
  const r = rakna(text.replace(CITAT_RE, ' '));
  return r.en >= 3 && r.en > 2 * r.sv && r.sv <= 1;
}

// Länkmarkering i HTML eller BBCode. Forumet visar bara ren text, så en
// människa har ingen anledning att skriva sådant.
const LANKKOD_RE = /<a\s[^>]*href|\[url[\]=]/i;

// Ett spamord i själva domännamnet (buyviagra.com, casinoutanlicens.nu).
// Vanliga ord som råkar innehålla ett spamord tas bort först.
const OSKYLDIGA_RE = /specialis|socialis|commercialis|ambien[ct]|lyrical|recipro|princip|mobicard|paydaythegame/g;
const ALLA_SPAMORD = [...HARDA_SPAMORD, ...MJUKA_SPAMORD, ...VANLIGA_SPAMORD]
  .map(o => o.replace(/[^a-z]/g, '')).filter(o => o.length >= 5);
const spamdoman = (lankar: string[]) => lankar.some(l => {
  const v = varden(l).replace(/[^a-z]/g, '').replace(OSKYLDIGA_RE, '');
  return ALLA_SPAMORD.some(o => v.includes(o));
});

export type SpamOrsak =
  | 'spamord'         // varumärke för potensmedel, spamord i domännamnet, läkemedel i engelsk text
  | 'spamord_lank'    // läkemedel eller t.ex. casino tillsammans med en länk
  | 'lankkod'         // <a href=...>, [url=...] eller https://namn@sajt tillsammans med en länk
  | 'ny_lank'         // länk till en okänd sajt från ett konto som är nytt i forumet
  | 'engelska_lank';  // engelsk text med länk till en okänd eller öppen sajt

function spamordOrsak(text: string, lankar: string[], okanda: string[], engelska: boolean): SpamOrsak | null {
  if (traff(HARDA_RE, text)) return 'spamord';
  if (spamdoman(lankar.filter(l => !kand(varden(l))))) return 'spamord';
  const mjuka = traff(MJUKA_RE, text);
  // Öppna sajter (Google Docs, bloggar) och .se ursäktar inte spamord, utom
  // svenska vårdsajter.
  const tveksamma = lankar.filter(l => {
    const v = varden(l);
    return oppen(l) || (v.endsWith('.se') && !egen(v) && !vard(v));
  });
  if (mjuka && (okanda.length || tveksamma.length)) return 'spamord_lank';
  if (traff(VANLIGA_RE, text) && (okanda.length || tveksamma.length)) return 'spamord_lank';
  if (mjuka && engelska) return 'spamord';
  return null;
}

export function spamOrsak(text: string, opts: { nyttKonto?: boolean } = {}): SpamOrsak | null {
  const t = normalisera(text);
  const lankar = externaLankar(text);
  const okanda = okandaLankar(text);
  const engelska = serEngelskUt(text);
  const ord = spamordOrsak(t, lankar, okanda, engelska);
  if (ord) return ord;
  if (okanda.length && LANKKOD_RE.test(t)) return 'lankkod';
  if (lankar.some(medAnvandarnamn) || harDoldLank(text)) return 'lankkod';
  if (okanda.length && opts.nyttKonto) return 'ny_lank';
  if (engelska && (okanda.length || lankar.some(oppen))) return 'engelska_lank';
  return null;
}

// Skäl som städningen av spamperioden tar bort inlägg för. Städningen kräver
// dessutom en länk till en okänd sajt (se stadaSpam i forum-spam.ts).
export const STADA_SPAM: SpamOrsak[] = ['spamord', 'spamord_lank', 'lankkod', 'engelska_lank'];

// Entydig spam: länk till en okänd sajt tillsammans med ett varumärke för
// potensmedel, länkmarkering (eller en länk med användarnamn), ett spamord i
// domännamnet, eller ett läkemedel i engelsk text eller med en dold länk. Bara då raderas ett helt nytt konto direkt.
export function arEntydigSpam(text: string): boolean {
  const okanda = okandaLankar(text);
  if (!okanda.length) return false;
  const t = normalisera(text);
  const mjuka = traff(MJUKA_RE, t) || traff(VANLIGA_RE, t);
  return traff(HARDA_RE, t) || LANKKOD_RE.test(t) || okanda.some(medAnvandarnamn) || spamdoman(okanda)
    || (mjuka && (mestEngelska(t) || harDoldLank(t)));
}

// Användarnamn visas vid varje inlägg, så de får inte vara reklam. Vid
// registrering: högst 40 tecken, inga länkar och inga varumärken för potensmedel.
export function namnArSpam(namn: string): boolean {
  const n = normalisera(namn);
  return n.length > 40 || externaLankar(n).length > 0 || traff(HARDA_RE, n);
}

// Befintliga konton kan inte byta namn, så där stoppas bara entydig reklam.
export function namnArReklam(namn: string): boolean {
  const n = normalisera(namn);
  const lankar = externaLankar(n);
  return traff(HARDA_RE, n) || lankar.some(l => /^(?:https?|hxxps?):\/\//i.test(l)) || spamdoman(lankar);
}

export const SPAM_MEDDELANDE: Record<SpamOrsak, string> = {
  spamord: 'Inlägget publicerades inte eftersom spamfiltret stoppade det.',
  spamord_lank: 'Inlägget publicerades inte. Inlägg som nämner läkemedel eller till exempel casino kan inte länka till andra sidor. Ta bort länken så går det bra.',
  lankkod: 'Inlägget publicerades inte eftersom spamfiltret stoppade det.',
  ny_lank: 'Inlägget publicerades inte. Konton som är nya i forumet kan inte dela länkar till andra sidor än. Ta bort länken så går det bra.',
  engelska_lank: 'Inlägget publicerades inte. Forumet är på svenska, och engelska inlägg med länkar stoppas av spamfiltret.',
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
