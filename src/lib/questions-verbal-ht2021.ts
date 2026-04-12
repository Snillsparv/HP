export interface VQuestion {
  num: number;
  text: string;
  options: string[];
  correct: number;
  category?: string;
  word?: string; // ORD
  images?: string[]; // LÄS
  textTitle?: string; // LÄS
}

export interface VSubTest {
  id: string;
  name: string;
  shortName: string;
  type: 'ord' | 'las' | 'mek';
  timeMinutes: number;
  questions: VQuestion[];
}

export const verbalSubTests: VSubTest[] = [
  {
    id: 'ord', name: 'ORD — Ordförståelse', shortName: 'ORD',
    type: 'ord', timeMinutes: 3,
    questions: [
      { num: 1, word: 'anekdot', text: '<b>anekdot</b>', options: ['gissning', 'diskret gest', 'noggrann redogörelse', 'kort berättelse', 'motsättning'], correct: 3 },
      { num: 2, word: 'reklamera', text: '<b>reklamera</b>', options: ['prata om', 'intyga', 'märka ut', 'återvinna', 'anmärka på'], correct: 4 },
      { num: 3, word: 'avsevärt', text: '<b>avsevärt</b>', options: ['ganska', 'korrekt', 'betydligt', 'välriktat', 'fullständigt'], correct: 2 },
      { num: 4, word: 'koffert', text: '<b>koffert</b>', options: ['sybord', 'lång rock', 'lastpall', 'klädförråd', 'stor resväska'], correct: 4 },
      { num: 5, word: 'gastkramande', text: '<b>gastkramande</b>', options: ['farlig', 'smärtsam', 'kallsinnig', 'spännande', 'livrädd'], correct: 3 },
      { num: 6, word: 'korrespondens', text: '<b>korrespondens</b>', options: ['inbjudan', 'brevväxling', 'enkätsvar', 'summering', 'överenskommelse'], correct: 1 },
      { num: 7, word: 'sargad', text: '<b>sargad</b>', options: ['lurad', 'straffad', 'upprörd', 'skadad', 'trängd'], correct: 3 },
      { num: 8, word: 'affekt', text: '<b>affekt</b>', options: ['stor glädje', 'nyfikenhet', 'stark sinnesrörelse', 'känslokyla', 'total förvirring'], correct: 2 },
      { num: 9, word: 'åtnjuta', text: '<b>åtnjuta</b>', options: ['ha', 'be', 'nå', 'ge', 'ta'], correct: 0 },
      { num: 10, word: 'näsbränna', text: '<b>näsbränna</b>', options: ['tillrättavisning', 'besvikelse', 'felbedömning', 'svårighet', 'förolämpning'], correct: 0 },
    ]
  },
  {
    id: 'las', name: 'LÄS — Läsförståelse', shortName: 'LÄS',
    type: 'las', timeMinutes: 22,
    questions: [
      { num: 11, text: '<b>Vad bör kritiserade företag undvika, enligt Peter Norbergs resonemang?</b>', options: ['Att öka insynen i företaget.', 'Att direkt ge kritikerna rätt.', 'Att redovisa sina motiv.', 'Att utlova ekonomisk kompensation.'], correct: 1, images: ['/prov-las1-text1.png'], textTitle: 'Text 1: Ursäktens betydelse' },
      { num: 12, text: '<b>Vad framhåller texten som orsak till de så kallade köttskandalerna?</b>', options: ['Företagens risktagande i jakten på lönsamhet.', 'Företagens underskattning av kundernas värderingar och krav.', 'Företagens tilltro till amerikanska metoder för krishantering.', 'Företagens rutiner vid hantering av oförutsedda händelser.'], correct: 0, images: ['/prov-las1-text1.png'], textTitle: 'Text 1: Ursäktens betydelse' },
      { num: 13, text: '<b>Vilket påstående om svenska läkares hälsa stämmer överens med det som framkommer i texten?</b>', options: ['Även om läkarna själva uppger att deras hälsa försämrats, så är den på en godtagbar nivå.', 'Psykiska besvär leder sällan till att läkare sjukskriver sig.', 'Trots en viss negativ utveckling säger sig läkarna mår rätt bra.', 'Läkarna uppger bättre hälsa än män och kvinnor i övrigt.'], correct: 0, images: ['/prov-las1-text2a.png', '/prov-las1-text2b.png'], textTitle: 'Text 2: Läkares hälsa' },
      { num: 14, text: '<b>Vad har Ann Fridner studerat, enligt texten?</b>', options: ['Attityderna till läkares psykiska ohälsa bland sjukvårdsanställda.', 'Sambandet mellan läkaryrkets krav och sjukskrivning.', 'Förekomsten av sjukskrivning bland tjänstegrupper.', 'Konsekvenserna av psykisk ohälsa bland sjukvårdsanställda.'], correct: 2, images: ['/prov-las1-text2a.png', '/prov-las1-text2b.png'], textTitle: 'Text 2: Läkares hälsa' },
      { num: 15, text: '<b>Vilken av följande till synes motsägelsefulla förhållanden nämns i texten?</b>', options: ['Att läkare trots sin utbildning ofta har sämre hälsa än allmänheten.', 'Att läkare trots en sunding livsstil drabbas av psykisk ohälsa.', 'Att det trots en allmän sammantagen minskning skett en positiv trend.', 'Att det trots allt att fler läkare mår bra.'], correct: 0, images: ['/prov-las1-text2a.png', '/prov-las1-text2b.png'], textTitle: 'Text 2: Läkares hälsa' },
      { num: 16, text: '<b>Vilken av följande alternativa rubriker har mest med texten att göra?</b>', options: ['Effekterna av vårdreformer bland läkare.', 'Bristande kunskap om läkares arbetsförhållanden.', 'Läkare borde lära av andra yrkesgrupper.', 'Sjukfrånvaron förklarar läkares arbetssituation.'], correct: 1, images: ['/prov-las1-text2a.png', '/prov-las1-text2b.png'], textTitle: 'Text 2: Läkares hälsa' },
      { num: 17, text: '<b>Vilket påstående överensstämmer bäst med hur texten beskriver barnlitteraturens nuvarande ställning?</b>', options: ['Barnlitteraturen är ännu i huvudsak ett nationellt fenomen.', 'Barnlitteraturen har fått en global giltighet som enskild uppfattning.', 'Barnlitteraturen har vuxit till en utbredning som gör en beskrivning av dess globala sammanhang nödvändig.', 'Barnlitteraturen bedöms fortfarande enligt akademiska kriterier.'], correct: 2, images: ['/prov-las1-text3a.png', '/prov-las1-text3b.png'], textTitle: 'Text 3: Barnlitteratur' },
      { num: 18, text: '<b>Boken Kinderlitteratur har den tyska barnlitteraturens relevans som utgångspunkt. Hur kommenterar författaren detta?</b>', options: ['Den poängterar att utvecklingen i Tyskland typiskt speglar förhållanden i andra länder.', 'Den hävder att den tyska klassiska barnboken har fått fotfäste utanför landets gränser.', 'Den konstaterar att Tysklands roll har förblivit central i den globala barnlitteraturen.', 'Den menar att syftet framför allt är att lyfta fram förbisedda aspekter.'], correct: 0, images: ['/prov-las1-text3a.png', '/prov-las1-text3b.png'], textTitle: 'Text 3: Barnlitteratur' },
      { num: 19, text: '<b>Vad sägs i texten om litterära verk som börjar bli ålderstigna?</b>', options: ['De tillhör inte alltid de verk som man inte längre läser.', 'De har goda förutsättningar att leva upp till de krav som Kümmerling-Meibauer ställer på en klassiker.', 'De är estetiskt likvärdsfulla men överträffas av modernare verk.', 'De kan vara ursprungliga men saknar barnlitteraturens originalitet.'], correct: 1, images: ['/prov-las1-text3a.png', '/prov-las1-text3b.png'], textTitle: 'Text 3: Barnlitteratur' },
      { num: 20, text: '<b>Vilka barnlitteratörer är det i första hand boken behandlar som klassiker, enligt Bettina Kümmerling?</b>', options: ['De som är mest originella.', 'De som har genererat mest forskning.', 'De som har bidragit med pedagogiska innovationer.', 'De som har fått en global utbredning.'], correct: 3, images: ['/prov-las1-text3a.png', '/prov-las1-text3b.png'], textTitle: 'Text 3: Barnlitteratur' },
    ]
  },
  {
    id: 'mek', name: 'MEK — Meningskomplettering', shortName: 'MEK',
    type: 'mek', timeMinutes: 8,
    questions: [
      { num: 21, text: 'Utfodring påverkar i regel inte älgarnas _____ att vandra till sina vinterhemområden. Men utfodringen kan styra dem inom de områden där de befinner sig, och därigenom minskas risken för trafikolyckor.', options: ['inriktning', 'benägenhet', 'åtagande', 'ansträngning'], correct: 1 },
      { num: 22, text: 'Efter att full betalning _____ och kommit oss _____ är du välkommen att hämta dina föremål hos oss på Auktionsverket.', options: ['erlagts – till handa', 'avsatts – till godo', 'bifogats – till rätta', 'utförts – till pass'], correct: 0 },
      { num: 23, text: 'Av 6 kap. 29 § högskoleförordningen _____ att det för varje doktorand ska upprättas en individuell studieplan. Denna ska innehålla högskolans respektive doktorandens _____ och därutöver en tidsplan för doktorandens utbildning. Studieplanen ska fastställas efter _____ med doktoranden och handledaren.', options: ['visas – underskrifter – samtal', 'uppges – godkännande – inrådan', 'säkerställs – inlägg – överläggningar', 'framgår – åtaganden – samråd'], correct: 3 },
      { num: 24, text: 'Den mindre bemedlade arbetarbefolkningen i glesbygden kunde långt in på 1900-talet utnyttja insjöfisket som en möjlighet att _____ kosten.', options: ['muntra upp', 'duka fram', 'lägga till', 'dryga ut'], correct: 3 },
      { num: 25, text: 'Dansare måste träna sig i kroppsmedvetenhet och i _____ för ordlös kommunikation. Det är färdigheter som är särskilt viktiga idag, då många tillbringar så mycket tid stillasittande och i virtuella verkligheter. Vår livsstil för oss allt längre bort från våra kroppsliga _____ och från att ta till oss andra ordlösa känslobudskap.', options: ['öppenhet – föraningar', 'lyhördhet – förnimmelser', 'synlighet – föreställningar', 'känslighet – företeelser'], correct: 1 },
      { num: 26, text: 'Senvuxen gran har täta årsringar och är rik på kåda, vilket ökar virkets hårdhet och gör det _____ mot fukt och röta.', options: ['skyddsvärt', 'förhärdat', 'tålmodigt', 'motståndskraftigt'], correct: 3 },
      { num: 27, text: 'I svensk debatt har förslag om medborgarlön med få undantag spelat en _____ roll och inte sällan _____ då det setts som något stolligt, verklighetsfrämande och arbetsfientligt.', options: ['befintlig – framhållits', 'reducerad – förnekats', 'ansenlig – formulerats', 'perifer – förlöjligats'], correct: 3 },
      { num: 28, text: 'Fyndet av människoben ger en sällsynt ögonblicksbild av komplexa _____ knutna till jägar- och samlarsamhället under äldre stenåldern, vilket _____ också låter oss få en inblick i den tidens _____.', options: ['skeenden – undermedvetet – kosthållning', 'mönster – oavsiktligt – ursprungsbefolkning', 'ritualer – indirekt – föreställningsvärld', 'relationer – omvänt – maktförhållanden'], correct: 2 },
      { num: 29, text: 'Kroppen har både ett yttre och ett inre infektionsförsvar. Till det yttre försvaret hör bland annat huden och slemhinnorna samt olika typer av _____, till exempel saliv, tårar, svett och magsaft.', options: ['plasma', 'serum', 'körtlar', 'sekret'], correct: 3 },
      { num: 30, text: 'Efter det att afroamerikanen Michael Brown sköts till döds av poliser i delstaten Missouri har protesterna blivit fler och allt bättre organiserade. Det lär dock ta lång tid att förändra den rasism, _____ eller _____, som finns i det amerikanska samhället.', options: ['sakral – profan', 'flagrant – subtil', 'kongruent – apart', 'intrikat – extrovert'], correct: 1 },
    ]
  }
];
