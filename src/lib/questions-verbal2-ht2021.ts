// Verbal question data for HT 2021 — Provpass 5 (Verbal 2, utan ELF)

export interface VQuestion {
  num: number;
  text: string;
  options: string[];
  correct: number;
  category?: string;
  word?: string;
  images?: string[];
  textTitle?: string;
}

export interface VSubTest {
  id: string;
  name: string;
  shortName: string;
  type: 'ord' | 'las' | 'mek';
  timeMinutes: number;
  questions: VQuestion[];
}

export const verbalSubTests2: VSubTest[] = [
  {
    id: 'ord2', name: 'ORD — Ordförståelse', shortName: 'ORD',
    type: 'ord', timeMinutes: 3,
    questions: [
      { num: 1, word: 'insinuera', text: '<b>insinuera</b>', options: ['antyda', 'gissa', 'berömma', 'ljuga', 'misstänka'], correct: 0 },
      { num: 2, word: 'mellanting', text: '<b>mellanting</b>', options: ['samspel', 'anknytning', 'uppehåll', 'motsvarighet', 'blandning'], correct: 4 },
      { num: 3, word: 'otjänlig', text: '<b>otjänlig</b>', options: ['otydlig', 'orättvis', 'oanvändbar', 'obegriplig', 'otillgänglig'], correct: 2 },
      { num: 4, word: 'parkas', text: '<b>parkas</b>', options: ['tält', 'jacka', 'målarduk', 'bäddsoffa', 'draghund'], correct: 1 },
      { num: 5, word: 'obstinat', text: '<b>obstinat</b>', options: ['trotsig', 'okunnig', 'nyfiken', 'slarvig', 'högljudd'], correct: 0 },
      { num: 6, word: 'upptakt', text: '<b>upptakt</b>', options: ['inledning', 'markering', 'refräng', 'anvisning', 'förslag'], correct: 0 },
      { num: 7, word: 'stävja', text: '<b>stävja</b>', options: ['påstå', 'mjuka upp', 'uppmuntra', 'röra ihop', 'motverka'], correct: 4 },
      { num: 8, word: 'pådrag', text: '<b>pådrag</b>', options: ['sensationell nyhet', 'oönskad publicitet', 'rättslig följd', 'insättning av resurser', 'oväntat motstånd'], correct: 3 },
      { num: 9, word: 'hänryckt', text: '<b>hänryckt</b>', options: ['i kris', 'i fred', 'i konflikt', 'i extas', 'i fara'], correct: 3 },
      { num: 10, word: 'ämbete', text: '<b>ämbete</b>', options: ['karriär', 'tillfälligt uppdrag', 'fin utmärkelse', 'högre befattning', 'administration'], correct: 3 },
    ]
  },
  {
    id: 'las2', name: 'LÄS — Läsförståelse', shortName: 'LÄS',
    type: 'las', timeMinutes: 22,
    questions: [
      { num: 11, text: '<b>Vilken är den mest sannolika innebörden av författarens uttryck "rycka dagen i skägget", att döma av hur det används i texten?</b>', options: ['Att vara avspänd och spontan.', 'Att våga trotsa omgivningen.', 'Att vara uppmärksam och noggrann.', 'Att våga vara motsägelsefull.'], correct: 0, textTitle: 'Text 1: 40 (Pär Hansson)', images: ['/prov-las2-text1.png'] },
      { num: 12, text: '<b>Vilket av följande påståenden beskriver bäst hur textens jag ser på sitt skrivande?</b>', options: ['Han ändrar mer i sina texter än han skriver nytt.', 'Han skriver mycket och tror att det ska bli ännu mer så småningom.', 'Han vill skriva mycket men ger sig själv tillåtelse att ibland låta bli.', 'Han betraktar sin nuvarande ålder som en tillgång i skrivandet.'], correct: 2, textTitle: 'Text 1: 40 (Pär Hansson)', images: ['/prov-las2-text1.png'] },
      { num: 13, text: '<b>Vilket påstående om akademin skulle Hartmut Rosa sannolikt hålla med om, utifrån hur hans tankar presenteras i texten?</b>', options: ['Tekniska landvinningar har svårt att få fäste i akademin.', 'Den globala konkurrensen hotar forskningens samhällsnytta.', 'Anställningsvillkoren i akademin är dåligt anpassade till vår tid.', 'Den ökade kvantiteten forskning har ingen positiv inverkan på kvaliteten.'], correct: 3, textTitle: 'Text 2: Långsammare (Jörn Hammarfelt)', images: ['/prov-las2-text2a.png', '/prov-las2-text2b.png'] },
      { num: 14, text: '<b>Vad är enligt texten viktigt för att forskare ska trivas med ett högt tempo i arbetet?</b>', options: ['Att de själva har möjlighet att påverka situationen.', 'Att de får tid över till återkommande utvärderingar.', 'Att de upplever sitt arbete som personligt givande.', 'Att de uppfattar den direkta nyttan med sitt arbete.'], correct: 0, textTitle: 'Text 2: Långsammare (Jörn Hammarfelt)', images: ['/prov-las2-text2a.png', '/prov-las2-text2b.png'] },
      { num: 15, text: '<b>Vilken av följande personer tycks av texten att döma ha ett förslag som tydligt skiljer sig från de övrigas, när det gäller att hantera det höga tempot inom akademin?</b>', options: ['Filip Vostal.', 'Hartmut Rosa.', 'Donald Hall.', 'Maggie Berg.'], correct: 2, textTitle: 'Text 2: Långsammare (Jörn Hammarfelt)', images: ['/prov-las2-text2a.png', '/prov-las2-text2b.png'] },
      { num: 16, text: '<b>Vad kan man inom akademin göra för att värja sig mot det alltmer uppskruvade tempot, menar textförfattaren?</b>', options: ['Bedriva opinionsbildning för ett "långsammare universitet".', 'Skapa trygghet genom tydligt definierade förväntningar.', 'Hålla sig till etablerade forskningsområden där det delas ut externa medel.', 'Skapa utrymme för möten som inte måste leda till omedelbara resultat.'], correct: 3, textTitle: 'Text 2: Långsammare (Jörn Hammarfelt)', images: ['/prov-las2-text2a.png', '/prov-las2-text2b.png'] },
      { num: 17, text: '<b>Om man ser till hur Torgny Nordin beskriver Gisela Kaplans bok finns det en likhet mellan hans text och hennes sätt att skriva. Vilken?</b>', options: ['I båda fallen har författaren gått igenom en stor mängd vetenskapliga källor.', 'I båda fallen spelar egna erfarenheter en avgörande roll för de slutsatser som dras.', 'I båda fallen förmedlas budskapet delvis med hjälp av målande berättelser ur vardagen.', 'I båda fallen är författaren såväl sakligt redogörande som kritiskt granskande.'], correct: 2, textTitle: 'Text 3: Klok som en flöjtkråka (Torgny Nordin)', images: ['/prov-las2-text3a.png', '/prov-las2-text3b.png'] },
      { num: 18, text: '<b>Vad är boken <i>Bird minds</i> i huvudsak inriktad på, enligt texten?</b>', options: ['Att redogöra för den historiska forskningen om fåglar.', 'Att skildra och diskutera fåglars intelligenta beteende.', 'Att etablera ett nytt fält för forskningen om fåglar.', 'Att visa på fåglars speciella roll i natur och miljö.'], correct: 1, textTitle: 'Text 3: Klok som en flöjtkråka (Torgny Nordin)', images: ['/prov-las2-text3a.png', '/prov-las2-text3b.png'] },
      { num: 19, text: '<b>I texten antyds att ny kunskap om bland annat flöjtkråkan ifrågasätter ett traditionellt synsätt inom biologin. Vilket?</b>', options: ['Att norra halvklotets djurliv är rikare än södra halvklotets.', 'Att det är hjärnans kapacitet som avgör en arts möjligheter att överleva.', 'Att fåglars sång i huvudsak ska betraktas som meningslösa ljud.', 'Att det främst är rivalitet som driver utvecklingen framåt i djurriket.'], correct: 3, textTitle: 'Text 3: Klok som en flöjtkråka (Torgny Nordin)', images: ['/prov-las2-text3a.png', '/prov-las2-text3b.png'] },
      { num: 20, text: '<b>Vilket av följande framhåller textförfattaren som en av kvaliteterna i Gisela Kaplans bok?</b>', options: ['Att den vänder sig både till särskilt intresserade och till läsare utan specialkunskaper.', 'Att den avstår från att diskutera frågor där forskningen ännu saknar svar.', 'Att den inte gör en åtskillnad mellan vardagliga betraktelser och seriös vetenskap.', 'Att den tar upp även sådana ståndpunkter som går emot Kaplans egna.'], correct: 3, textTitle: 'Text 3: Klok som en flöjtkråka (Torgny Nordin)', images: ['/prov-las2-text3a.png', '/prov-las2-text3b.png'] },
    ]
  },
  {
    id: 'mek2', name: 'MEK — Meningskomplettering', shortName: 'MEK',
    type: 'mek', timeMinutes: 8,
    questions: [
      { num: 21, text: 'De allra flesta som insjuknar i influensa och som inte tillhör en riskgrupp klarar oftast att _____ på egen hand.', options: ['isolera sig', 'gardera sig', 'kurera sig', 'reparera sig'], correct: 2 },
      { num: 22, text: 'I Vetenskapsrådets rapport <i>Forskningsbasering av lärarutbildningen</i> visar författarna att dagens forskning är tolkande och beskrivande, samt att klassrumsnära studier nästan helt _____. Det måste bli en bättre balans så att de problem lärare och elever upplever i sin vardag _____.', options: ['lyser med sin frånvaro – identifieras', 'fyller sin funktion – reformeras', 'lämnas i sticket – fokuseras', 'faller mellan stolarna – formaliseras'], correct: 0 },
      { num: 23, text: 'Under 1700-talet började adeln _____ monumentala barockträdgårdar. För exotiska växter byggdes orangerier, och i _____ experimenterade man med grönsaker. Köksväxterna var fortfarande viktiga eftersom _____ var ett statligt mål och adelsmännen satte en ära i att bli dugliga hushållare.', options: ['anlägga – drivbänkar – självförsörjning', 'förlägga – plantager – export', 'belägga – krukor – växtproduktion', 'frilägga – rabatter – kosthållning'], correct: 0 },
      { num: 24, text: 'Valet av betong som byggmaterial är så självklart att få ifrågasätter det. Miljökraven är _____ eller lämnas till marknaden att själv formulera.', options: ['oantastliga', 'obefintliga', 'oegentliga', 'obehindrade'], correct: 1 },
      { num: 25, text: 'En smärtlindring som gör hästens smärta _____ kan förkorta klinikvistelsen, förbättra hästens välfärd samt ha en positiv effekt på dess _____.', options: ['tolerabel – konvalescens', 'distinkt – kondoleans', 'foglig – koncentration', 'neutral – kontamination'], correct: 0 },
      { num: 26, text: 'Genom historien har skvaller inte sällan behandlats på ett _____ sätt. Men idag hävdar forskare att skvaller snarare bör ses som en social färdighet som är avgörande för att skapa relationer.', options: ['uppbyggligt', 'nedlåtande', 'underordnat', 'föredömligt'], correct: 1 },
      { num: 27, text: 'När man diskuterar betydelsen av att läsa skönlitteratur i skolan nämns ofta att det är bra för träning av läsfärdigheter och empatisk _____ eller för demokratisk fostran. Mer sällan talar man om skönlitteraturens _____, det vill säga de estetiska kvaliteter som skönlitteraturen är bärare av.', options: ['övning – ansvar', 'inlärning – genre', 'medkänsla – mångfald', 'inlevelse – egenvärde'], correct: 3 },
      { num: 28, text: 'Vad enskilda personers insatser ger för _____ i form av ekonomiska resurser beror i _____ hög grad på yttre omständigheter, alltså det sammanhang och den plats i det ekonomiska systemet vi har haft turen eller oturen att _____ in i.', options: ['återkoppling – obetydligt – växa', 'resultat – sällsynt – reformeras', 'utdelning – utomordentligt – socialiseras', 'avtryck – måttligt – väljas'], correct: 2 },
      { num: 29, text: 'Tonläget i regionen har _____ och många oroar sig nu för att en väpnad konflikt i området kan vara _____.', options: ['sänkts – i antågande', 'slipats upp – inom räckhåll', 'skärpts – nära förestående', 'skalats ned – under uppsegling'], correct: 2 },
      { num: 30, text: 'Hyresnämnden kan lämna tillstånd till uthyrning i andra hand om förstahandshyresgästen på grund av ålder, sjukdom, tillfälligt arbete eller studier på annan ort har _____ skäl för att upplåta lägenheten i andra hand.', options: ['omistliga', 'avsiktliga', 'uppdagade', 'beaktansvärda'], correct: 3 },
    ]
  }
];
