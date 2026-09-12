// Högskoleprovet 25 oktober 2020, provpass 2 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "ht2020-2",
 "tillfalle": "ht2020",
 "passNr": 2,
 "kind": "verbal",
 "name": "Provpass 2 (verbalt)",
 "timeMinutes": 33,
 "extendedMinutes": 48,
 "normering": [
  [
   0,
   0.0
  ],
  [
   18,
   0.1
  ],
  [
   20,
   0.2
  ],
  [
   23,
   0.3
  ],
  [
   27,
   0.4
  ],
  [
   30,
   0.5
  ],
  [
   33,
   0.6
  ],
  [
   37,
   0.7
  ],
  [
   40,
   0.8
  ],
  [
   44,
   0.9
  ],
  [
   48,
   1.0
  ],
  [
   52,
   1.1
  ],
  [
   56,
   1.2
  ],
  [
   59,
   1.3
  ],
  [
   62,
   1.4
  ],
  [
   65,
   1.5
  ],
  [
   67,
   1.6
  ],
  [
   69,
   1.7
  ],
  [
   71,
   1.8
  ],
  [
   74,
   1.9
  ],
  [
   76,
   2.0
  ]
 ],
 "subTests": [
  {
   "id": "ord",
   "name": "ORD – Ordförståelse",
   "shortName": "ORD",
   "type": "ord",
   "questions": [
    {
     "num": 1,
     "word": "gourmand",
     "text": "<b>gourmand</b>",
     "options": [
      "munter person",
      "kunnig person",
      "argsint person",
      "omtyckt person",
      "matglad person"
     ],
     "correct": 4
    },
    {
     "num": 2,
     "word": "bojkotta",
     "text": "<b>bojkotta</b>",
     "options": [
      "tala illa om",
      "göra sig fri från",
      "vägra befatta sig med",
      "göra slut på",
      "förstöra för"
     ],
     "correct": 2
    },
    {
     "num": 3,
     "word": "framstöt",
     "text": "<b>framstöt</b>",
     "options": [
      "planering",
      "initiativ",
      "uppvisning",
      "tillfälle",
      "yttrande"
     ],
     "correct": 1
    },
    {
     "num": 4,
     "word": "kognitiv",
     "text": "<b>kognitiv</b>",
     "options": [
      "intetsägande",
      "som gäller kroppen",
      "angelägen",
      "som rör intellektet",
      "fantasieggande"
     ],
     "correct": 3
    },
    {
     "num": 5,
     "word": "seminarium",
     "text": "<b>seminarium</b>",
     "options": [
      "inledande dialog",
      "kort presentation",
      "individuell undervisning",
      "större sammanträdesrum",
      "kunskapshöjande diskussion"
     ],
     "correct": 4
    },
    {
     "num": 6,
     "word": "trollbinda",
     "text": "<b>trollbinda</b>",
     "options": [
      "förhindra",
      "fascinera",
      "bluffa",
      "förvirra",
      "överraska"
     ],
     "correct": 1
    },
    {
     "num": 7,
     "word": "jargong",
     "text": "<b>jargong</b>",
     "options": [
      "en positiv stämning",
      "ett vänligt bemötande",
      "en grupps språkbruk",
      "ett trångt utrymme",
      "en välljudande klang"
     ],
     "correct": 2
    },
    {
     "num": 8,
     "word": "väsensskild",
     "text": "<b>väsensskild</b>",
     "options": [
      "innehållslös",
      "overklig",
      "motbjudande",
      "obetydlig",
      "annorlunda"
     ],
     "correct": 4
    },
    {
     "num": 9,
     "word": "resiliens",
     "text": "<b>resiliens</b>",
     "options": [
      "framgång",
      "nedrustning",
      "återhämtningsförmåga",
      "bakåtsträvan",
      "avståndstagande"
     ],
     "correct": 2
    },
    {
     "num": 10,
     "word": "ymnigt",
     "text": "<b>ymnigt</b>",
     "options": [
      "rikligt",
      "fuktigt",
      "virrigt",
      "ljudligt",
      "smakligt"
     ],
     "correct": 0
    }
   ]
  },
  {
   "id": "las",
   "name": "LÄS – Svensk läsförståelse",
   "shortName": "LÄS",
   "type": "las",
   "texts": [
    {
     "title": "Kopplingen till Medelhavet",
     "html": "<p>Forskare från Uppsala universitet har tidigare visat att jordbruket spreds till norra Europa med migranter från södra Europa. Resultaten var baserade på en individ från en bondekultur i Västergötland. I doktorsavhandlingen <i>Reconstructing the human past using ancient and modern genomes</i> visar Pontus Skoglund nu resultat från ytterligare tre västgötska individer från stenåldern. Resultaten stärker kopplingen till Medelhavet och visar att de fyra bönderna delar DNA-profil med personer som idag lever på Sardinien.</p>\n<p>På samma sätt som människans rika historia har lämnat spår i form av arkeologiskt material och språks utbredning över världen, så har historien också lämnat spår i DNA-variationen hos dagens individer. Svårigheterna med att analysera DNA direkt från arkeologiskt skelettmaterial har dock inneburit att storskaliga DNA-studier av populationshistoria länge har varit begränsade till att tolka mönster av variation i nu levande människor, utan tillgång till direkta historiska observationer. I sin avhandling i evolutionär genetik vid Uppsala universitet har Pontus Skoglund tillsammans med kollegor utarbetat nya metoder som möjliggör analys av stora mängder genetiska data från forntida människor för att kartlägga historiska händelser.</p>\n<p>En delstudie som publicerades förra året blev uppmärksammad för att den presenterade storskaliga DNAbevis för att cirka 5 000 år gamla individer associerade med jordbrukskulturer respektive jägar–samlar-kulturer i Skandinavien representerade två skilda grupper. Denna studie var baserad på tre jägar–samlar-individer från Gotland och en individ från en bondekultur i Gökhem i Västergötland. Bondeindividens DNA matchade DNA-profilen hos människor som nu lever i södra Europa, medan de andra individerna var mest lika nordeuropeiska grupper. Detta tydde på att invandring varit drivande för jordbrukets utbredning över Europa.</p>\n<p>Nya resultat som presenteras i avhandlingen visar nu att den så kallade Gökhemsindividen inte var ensam om sin oväntade genetiska profil: tre andra individer från samma plats visar samma typ av signatur. DNA-profilen hos alla dessa fyra individer matchar den hos personer som idag lever på Sardinien, trots att de alltså är funna i Västergötland. Detta fastslår att grupper med väldigt olika härkomst levde i dagens Skandinavien för 5 000 år sedan, men var de kom ifrån och vad som hände med deras ättlingar är inte helt klart. Eftersom jägar–samlarindividerna på Gotland inte heller passar in i dagens genetiska variation är det sannolikt att dagens variation är ett resultat av genflöde mellan en mångfald av grupper under efterföljande årtusenden.</p>\n<p>– Vad vi behöver göra nu är att kombinera informationen från dessa grupper med andra stenåldersindivider för att rekonstruera de historiska händelser som ligger bakom detta mönster, säger Pontus Skoglund.</p>"
    },
    {
     "title": "Hemtjänstens historia",
     "html": "<p>Kyrkans ansvar och tanken om den barmhärtiga gärningen var länge normgivande för fattigvården i Sverige. En brytning med dessa äldre doktriner skedde under 1800-talet genom att samhällsnyttan till en del identifierades med den enskildes välfärd. Det som skilde fattigvården och därmed åldringsvården från tidigare förhållanden var sekulariseringen.</p>\n<p>I 1847 års fattigvårdsförordning ålades socknen att ansvara för alla arbetsoförmögna: äldre, barn, sinnesslöa, handikappade, ensamstående mödrar och tiggare utan anhöriga och husbonde. Varje socken eller stad skulle utgöra ett fattigvårdssamhälle med fattigvårdsstyrelse. Vem som skulle få hjälp bestämdes av prästen, läkaren och sockenstämman. Förordningen innebar möjlighet att yttra sig om fattigvårdsnämndens beslut. Denna liberala inställning sågs som alltför kostnadskrävande för socknarna. I 1871 års fattigvårdsförordning togs yttranderätten bort och obligatorisk fattigvård ändrades till ”nödtorftig bärgning”. Ansvaret för arbetsoförmögna lades åter på det storhushåll där de tjänat eller på anhöriga. Människor som inte kunde få hjälp på detta vis blev nu som tidigare hänvisade till sporadisk och oreglerad fattigvård i form av hjälppaket och liknande.</p>\n<p>I 1918 års fattigvårdslag gavs de första riktlinjerna till en humanare och mer differentierande fattigvård. Lagen innehöll bestämmelser om vård på anstalt, ålderdomshem, försörjningshem, vårdhem och arbetshem. Kommunerna ålades att under en tioårsperiod bygga ut ålderdomshemmen. Det framhölls att ålderdomshemmen skulle vara till för ”normalt åldrande” personer, och vikten av att skapa en trivsam hemmiljö och undvika anstaltsprägel poängterades. Ansvariga för vården på ålderdomshemmet var prästen och läkaren samt kommunpolitiker i fattigvårdsnämnden.</p>\n<p>Lagen från 1918 innehöll också förslag om att skilja sinnesvård och kronikervård från fattigvården. En differentiering påbörjades och olika institutioner så som barnhem, sinnessjukhus, kronikersjukhus och vårdhem växte fram. Institutionsboendet, slutenvården, kom sedan att dominera vården och omsorgen om äldre fram till 1900-talets senare hälft.</p>\n<p>Hemmaboendets ideologi var hämtad från den engelska hemtjänsten. I Sverige startade Röda korset på frivillig bas hemtjänst i Uppsala 1950. Farhågor framfördes att hemtjänsten kunde leda till en generell standardhöjning, något som samhället inte hade resurser till. Andra ansåg att kostnaderna kunde hållas nere med hjälp av den billiga arbetskraft som hemmafruarna utgjorde.</p>\n<p>Debatten ledde till att åldringsvården uppmärksammades i 1950 års valmanifest. Förbättringarna utlovades dock först när de ekonomiska förutsättningarna blivit bättre. Ett förslag om statsbidrag avslogs med hänsyn till den frivilliga verksamhetens positiva utveckling. Men den verkliga orsaken var den statsfinansiella situationen och den obligatoriska sjukförsäkringens genomförande. Vad som hände mellan 1940 och 1955 var att en ny åldringsvårdsideologi växte fram i teorin, men ej i praktiken. En färdväg var utstakad. Riktlinjer från år 1947 visade en väg bort från ”fattig-Sverige”, och de äldres väg in i välfärdsstaten påbörjades. Bidragande orsaker var långsiktiga strukturella förändringar så som ekonomisk tillväxt, fortgående urbanisering samt en växande andel kvinnor i förvärvslivet och därmed minskade möjligheter till informell omsorg.</p>\n<p>Att hemtjänsten vände sig till äldre i allmänhet var ett uttryck för strävan att komma bort från ålderdomshemmens fattigvårdsprägel. Titeln på 1956 års lag – lagen om socialhjälp – visade att det nu inte längre var frågan om godtycklig välgörenhet utan om en socialpolitisk grundsyn, där social och ekonomisk trygghet var viktiga mål. Lagen följdes av 1957 års riktlinjer för åldringsvården, där respekten för de äldres integritet, intressen och individuella önskemål fastslogs. Äldre var inte längre en diffus grupp utan sågs som enskilda människor med individuella behov, och alla öppna vård- och hjälpinsatser skulle prövas innan vård på ålderdomshem bestämdes. Dock fanns fattigvårdsprägeln kvar och de boende på ålderdomshemmen var fortfarande en sammansatt grupp med olika handikapp och sjukdomar.</p>\n<p>Under 1950- och 1960-talet rådde ett förmyndarperspektiv och tilltron till expertisen var stark. Nya professioner så som psykologer och socionomer började växa fram. Tillsammans kom dessa att allt mer definiera människornas behov. Prästen och läkaren var fortfarande ledamöter i socialnämnden och kunde härigenom påverka socialhjälpens utformning, men nu i mindre omfattning.</p>\n<p>Debatten om förmyndarskap och tvångsintagningar kontra människors lika värde tog fart i slutet på 1960-talet. Detta gällde framför allt socialvården, mentalsjukvården och handikappomsorgen. De stora institutionerna ifrågasattes och det ställdes krav på en humanare vård och omsorg. En offentlig utredning tillsattes hösten 1967 för att se över socialhjälpslagen, men synen på de äldre och deras rättigheter glömdes bort i debatten. Många äldre som inte kunde klara sig själva vårdades fortfarande inom slutenvård på geriatriska och psykogeriatriska sjukavdelningar. I slutet på 1960-talet kom ett tillägg till socialhjälpslagen om kommunens skyldighet att genom uppsökande verksamhet skaffa sig kännedom om de äldre kommuninvånarnas behov av hjälp. Hemmaboendets ideologi fick nu ordentligt fäste.</p>\n<p>Under slutet på 1960-talet förändrades attityden. Äldre sågs inte längre som vårdobjekt utan betraktades allt mer som en grupp i samhället vars behov inte skilde sig nämnvärt från övriga medborgares. Eventuella åldersmässiga funktionsnedsättningar kunde kompenseras genom olika former av stöd från samhällets sida. De äldres rätt att delta i samhällslivet och respekten för den personliga integriteten framhölls allt tydligare och inriktningen mot de öppna vårdinsatserna förstärktes ytterligare.</p>\n<p>Den sociala hemhjälpen växte så småningom fram som ett komplement till institutionsvården. Röda korsets verksamhet i Uppsala följdes i början av 1950-talet av liknande verksamheter i andra städer. År 1960 var det bara 26 kommuner i landet som inte hade hemtjänst. Den snabba utvecklingen ansågs bero på att de äldre var nöjda med hjälpformen. Behovet av ålderdomshem minskade. Det var dessutom relativt enkelt att rekrytera arbetskraft eftersom medelålders hemmafruar som tidigare inte stått till arbetsmarknadens förfogande nu fanns att tillgå.</p>\n<p>År 1975 hade hemtjänsten vuxit ut och blivit tre gånger så omfattande som institutionsvården, och i slutet på 1970-talet var hemtjänsten som mest omfattande mätt i andel personer med hjälp. Därefter vände utvecklingen såväl för hemtjänst som för institutionsboende. Mellan 1982 och 1992 minskade andelen äldre som fick hemtjänst från var sjätte till var tionde, och för de över 80 år minskade andelen som fick hjälp i form av institutionsboende eller hemtjänst från två tredjedelar till drygt hälften. Allt färre äldre har idag offentlig omsorg och det har medfört att anhörigas hjälpinsatser ökat. Äldreomsorgen har inte bara avinstitutionaliserats utan även blivit mer informell; det pågår en förskjutning från avlönad offentlig omsorg till oavlönad omsorg inom familjen.</p>\n<p class=\"forf\">Monica Nordström</p>"
    },
    {
     "title": "Hat och kärlek på nätet",
     "html": "<p>Nätet förändrar oss som använder det och gör vårt sätt att uttrycka oss mer extremt. Men vi har också ett delvis förändrat debattklimat, där nätet kanske varit en katalysator men inte på något sätt är det enda som påverkat. Det har alltid funnits hat mot den som uttalar sig offentligt. Innan vi fick internet klagades och hatades det via telefonsamtal, insändare och brev, men de flesta behöll sitt hat inom en mindre krets. I och med internet har fler chansen att snabbt få iväg sitt hat till någon man ogillar. Det är en stor förändring.</p>\n<p>En annan stor förändring är att fler ser det som en rättighet att få berätta om sitt missnöje. Yttrandefriheten har under de senaste åren kommit att användas för att få uttrycka sitt ogillande eller hat. Även här kan internet ha spelat en roll, som katalysator och möjliggörande teknik. Detta erbjudande från internet har ofta lyfts fram som en positiv utveckling i demokratisk mening, att allt fler kan säga vad de vill på fler arenor än tidigare. Det är i grunden en viktig utveckling, men det finns också risker med den. När fler får möjlighet att delta i det offentliga samtalet, ökar riskerna att bli utsatt för angrepp. Vi vet inget om hur denna utveckling påverkar personerna som hatar – den kan mycket väl vara positiv för dem – men vi kan se negativa effekter både för individerna som utsätts för hat och för det demokratiska samtalet.</p>\n<p>Den andra sidan av myntet är nätkärleken; samma mekanismer som gör uttrycken för hat så starka på nätet framkallar också varma kärleksförklaringar. När jag började studera ungas nätkulturer i slutet av 1990-talet, var det en av de saker jag slogs av: att kärleken flödade på ungas mötesplatser på nätet. Då tänkte jag att vi vuxna borde hitta sätt att få denna kärlek att flytta sig vidare ut i rummet. I dag ser sociala mötesplatser på nätet annorlunda ut och även vuxna visar sin kärlek till sina vänner väldigt öppet på nätet. Det är främst vänskaplig kärlek jag avser här. För den romantiska kärleken finns delvis andra forum på nätet. Kärlek och vänskap är en så central del av nätet, även om denna sida inte får lika mycket uppmärksamhet i media. De kärleksfulla uttrycken flödar på många mötesplatser och många har erfarenhet av att den som vågar blotta sig får värme och kärlek tillbaka.</p>\n<p>Det är dock inte så att alla bidrar med kärleksfulla uttryck när någon blottar sig. Det kan i själva verket vara en liten del av alla ens kontakter som reagerar med peppning, men upplevelsen kan likafullt vara att många stöttar och peppar. Och här har vi något som skiljer nätet från rummet. Nätet gör att du når ut till många och bland dessa finns oftast någon som har något vänligt att säga. Det finns i de flesta nätmiljöer inte heller något krav på att gilla eller ens uppmärksamma ett uttalande. Många mötesplatser på nätet erbjuder användarna att ignorera det som framförs, att låtsas som om de inte har hört. Att inte uppmärksamma någons berättelse på nätet behöver inte betyda ett aktivt avståndstagande. Berättelsen kan ses som ett erbjudande att ta eller ignorera. Till skillnad från i rummet, alltså. Om en person ignorerar en öppenhjärtig berättelse när två personer ses öga mot öga, uppfattas det ofta som ett fördömande. Det är svårt att ignorera någon i rummet utan att sända signaler om ogillande.</p>\n<p>Ganska tidigt uppstod kritik mot nätkärleken. Den uppfattades som ytlig och till och med destruktiv. Ungefär så här gick resonemangen: ”En vän på nätet kan aldrig vara lika mycket värd som en vän i rummet, eftersom ingen kan ha flera hundra vänner. Att ha så många vänner urholkar vänskapsbegreppet och snart har ingen några verkliga vänskapsband.” Det här som uppfattades som ett urholkande av vänbegreppet kallades lite nedsättande för ”gillakulturen” med referens till gillaknappen på bland annat Facebook. I min forskning använder jag ordet gillakulturen mer neutralt för att beskriva det språkbruk, de tankar och de handlingar som går ut på att stötta andra över nätet. Gillakulturen kan sägas ha vuxit fram som en följd av den öppenhet man kan iaktta på mötesplatser på nätet, där användarna delar med sig av sina liv och tankar på ett sätt som vi normalt inte känner igen från rummet. Jag tror att vi kan se denna utveckling som en förlängning av människans behov av social närhet, av uppskattning från omgivningen och av att spegla sig i andra i sitt relations- och identitetsarbete.</p>\n<p>Hur man tolkar uttrycken, både den öppna publiceringen och gillandet av densamma, beror sannolikt på hur man tolkar världen i övrigt. Även om det finns studier som sökt samband mellan användning av sociala medier och utvecklande av depression, finns det inga belägg för att sociala medier skulle skapa nedstämdhet, varken i klinisk eller i populär mening. Det viktiga är istället att fundera på hur de som tar illa vid sig när någon berättar något positivt tänker generellt, både på och utanför nätet. På många arbetsplatser och skolor leder normtänkandet till en hets att passa in och det är lätt hänt att individerna dras med. Det uppstår en skrytkultur som kan bli destruktiv därför att den inte tillåter samtal om svåra sidor av livet. Denna skrytkultur är alltså inte unik för nätet utan återigen måste vi tänka på hur vi uppför oss utanför nätet om vi vill förbättra samtalsklimatet på nätet.</p>\n<p>Gillakulturen har alltså fått mycket negativ uppmärksamhet och ordet används mest i nedsättande syfte. Då lyfter man ofta fram en idé om devalvering av positiva känslor – om man använder positivt laddade ord som vän, kärlek, älska, gilla onödigt ofta, riskerar begreppen att urvattnas och i förlängningen leda till mindre vänskap, mindre kärlek och så vidare. Dessa resonemang förs dock inte när det gäller hatiska uttryck och känslor. I de sammanhangen framstår riskerna som helt andra än att fenomen skulle urvattnas. Risken med att barn spelar mycket våldsspel är knappast att våldet devalveras och att barnen plötsligt inte längre förmår känna hat eller avsky. I de sammanhangen tänker vi mer i påverkanstermer. Det är dock fullt möjligt att detsamma gäller kärleksfulla uttryck och känslor.</p>\n<p class=\"forf\">Elza Dunkels</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vad framstår som det mest intressanta resultatet i Pontus Skoglunds avhandling?",
     "options": [
      "Att man har kunnat klarlägga att den skandinaviska befolkningen för 5 000 år sedan inte var genetiskt homogen.",
      "Att dagens invånare på Sardinien uppvisar samma genetiska profil som de som föds i Västergötland.",
      "Att man har kunnat komplettera arkeologiskt skelettmaterial med andra historiska individdata.",
      "Att flera genetiska skillnader nu kan förklaras med förändringar i jordbruket."
     ],
     "correct": 0,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vad av följande ligger till grund för de nya slutsatser som Pontus Skoglund har kommit fram till?",
     "options": [
      "Säkrare bestämningar av individernas genetiska utveckling.",
      "Mer precisa jämförelser mellan nutida människors DNA.",
      "Mer omfattande analyser av befintligt arkeologiskt material.",
      "Pålitligare sätt att kombinera gener från skilda geografiska områden."
     ],
     "correct": 2,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vilka invändningar fanns enligt texten mot det första exemplet på hemtjänst i Sverige?",
     "options": [
      "Det befarades att bristen på arbetskraft skulle leda till problem.",
      "Det bedömdes vara ohållbart att finansiera hemtjänsten via välgörenhet.",
      "Det uppfattades som felaktigt att låta frivilliga krafter utföra uppgifter som egentligen var statens.",
      "Det ansågs kunna medföra alltför stora kostnader för samhället."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vad var enligt texten en av förklaringarna till att den offentliga välfärden i Sverige under 1950-talet vidgades till att omfatta också de äldre?",
     "options": [
      "En liknande utveckling pågick i flera andra västeuropeiska länder.",
      "Den vård som kommunerna erbjöd räckte inte åt alla.",
      "Den grupp som tidigare förmodades vårda de äldre fanns nu ute i arbetslivet.",
      "Ett allt större antal yrkesspecialister växte fram i det svenska vårdsystemet."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vilka fick från 1950-talet och framåt i allt högre grad formulera vad medborgarna ansågs behöva?",
     "options": [
      "Kommunpolitiker.",
      "Specialister och sakkunniga.",
      "Statliga myndigheter.",
      "Omsorgstagare och deras anhöriga."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Vilket generellt samband visar texten som helhet på?",
     "options": [
      "Sambandet mellan omfattande välgörenhet och hög vårdkvalitet.",
      "Sambandet mellan hög arbetslöshet och utbyggd hemtjänst.",
      "Sambandet mellan samhälleliga strukturförändringar och utbudet av vårdformer.",
      "Sambandet mellan efterfrågan från vårdtagarna och vårdens utformning."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Vilket av följande har enligt textförfattaren en helt annan innebörd i rummet än på nätet?",
     "options": [
      "Hatiska uttryck.",
      "Personliga bekännelser.",
      "Social närhet.",
      "Utebliven respons."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Textförfattaren är skeptisk till den kritik som har riktats mot känsloyttringar på nätet. I vilket avseende?",
     "options": [
      "Hon menar att uttryckt kärlek aldrig kan vara något negativt.",
      "Hon menar att den nedstämdhet som gillakulturen leder till är oundviklig.",
      "Hon menar att det demokratiska samtalet gynnas av att även negativa känslor uttrycks.",
      "Hon menar att argumentationen kring de olika känslouttrycken är inkonsekvent."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Enligt textförfattaren har det offentliga samtalet förändrats. Vilken betydelse har nätet haft för denna förändring, av texten att döma?",
     "options": [
      "Nätet har varit en utlösande och förstärkande faktor.",
      "Nätet har väckt känslor som tidigare inte har kunnat uttryckas.",
      "Nätet har gett upphov till ett större missnöje.",
      "Nätet har varit en dominerande och likriktande faktor."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Vilken av följande meningar är mest rimlig som fortsättning på textens nuvarande avslutning?",
     "options": [
      "Kanske är det så att ju mer hat och avsky man sprider, desto mer hat och avsky blir det i världen.",
      "Kanske är det så att ju mer hat och avsky man sprider, desto mer kärlek och gillande blir det i världen.",
      "Kanske är det så att ju mer kärlek och gillande man sprider, desto mer kärlek och gillande blir det i världen.",
      "Kanske är det så att ju mer kärlek och gillande man sprider, desto mer hat och avsky blir det i världen."
     ],
     "correct": 2,
     "textIndex": 2
    }
   ]
  },
  {
   "id": "mek",
   "name": "MEK – Meningskomplettering",
   "shortName": "MEK",
   "type": "mek",
   "questions": [
    {
     "num": 21,
     "text": "För en etta eller tvåa i innerstaden blir månadskostnaden högre om man hyr i andra hand än om man belånar och köper motsvarande lägenhet. Ett bostadsköp förutsätter dock en _____ på flera hundra tusen kronor. Samtidigt består halva boendekostnaden av _____, vilket kan ses som ett sparande.",
     "options": [
      "låneskuld – ränta",
      "skattereduktion – kapital",
      "avdragsrätt – reavinst",
      "kontantinsats – amortering"
     ],
     "correct": 3
    },
    {
     "num": 22,
     "text": "Det arrangeras ett särskilt spåranlagsprov för blodhundar, där hundens förmåga att följa även mycket svag _____ av människa bedöms.",
     "options": [
      "vittring",
      "impuls",
      "prägling",
      "indikation"
     ],
     "correct": 0
    },
    {
     "num": 23,
     "text": "Redaktionen var _____ i en stil som bäst beskrivs som kolonial: väggarna pryddes av foton från _____ i regnskogen, och ovanpå bokhyllan stod inramade bilder av legendariska _____ i kostym och fluga tillsammans med mystiska träföremål av olika slag.",
     "options": [
      "ekiperad – utflykter – arkeologer",
      "belägen – reportage – äventyrare",
      "garnerad – utgrävningar – storviltsjägare",
      "inredd – expeditionsresor – upptäcktsresande"
     ],
     "correct": 3
    },
    {
     "num": 24,
     "text": "Människor tar en mängd beslut såväl i den egna vardagen som i sina arbeten. Ofta sker detta grundat på magkänsla och _____. Men om man har ambitionen att fatta kloka och _____ beslut i affärsvärlden, så kan magkänslan skapa problem.",
     "options": [
      "instinkt – universella",
      "intelligens – formella",
      "intuition – rationella",
      "idealism – kontroversiella"
     ],
     "correct": 2
    },
    {
     "num": 25,
     "text": "Att _____ betesmark är en syssla som ger mycket tillbaka: ett vackert landskap, bra bete till djuren, ett ekonomiskt tillskott och en artrikare närmiljö.",
     "options": [
      "korrigera",
      "skandera",
      "makulera",
      "restaurera"
     ],
     "correct": 3
    },
    {
     "num": 26,
     "text": "Han _____ vidsträckta turnéer i Europa och Amerika och _____ sitt rykte som violinist genom sin aristokratiska stil och fina artistiska smak, samt genom sina mycket personliga Mozarttolkningar.",
     "options": [
      "tillbringade – ombesörjde",
      "utarbetade – förverkligade",
      "företog – befäste",
      "arrangerade – förvandlade"
     ],
     "correct": 2
    },
    {
     "num": 27,
     "text": "Nageltrång kan vålla en smärtsam inflammation som kan sprida sig in under tåns nagelplatta. Orsaken kan vara _____ nagelklippning i förening med för trånga skor.",
     "options": [
      "förfallen",
      "fördragen",
      "försummad",
      "förbehållen"
     ],
     "correct": 2
    },
    {
     "num": 28,
     "text": "En dominerande inställning bland såväl författarna själva _____ många forskare är att modernismen, den moderna litteraturens _____, alltsedan krigsförklaringen mot den borgerliga publiken har levt i ett inte bara _____ utan rent av antagonistiskt förhållande till den modernitet som rörelsen själv är oupplösligt förbunden med.",
     "options": [
      "som – flaggskepp – kluvet",
      "dels – parhäst – kärt",
      "och – ledstjärna – trivialt",
      "samt – moder – stört"
     ],
     "correct": 0
    },
    {
     "num": 29,
     "text": "Presidentens retorik är alltför osaklig och övertydlig för att han ska kunna betraktas som en skicklig talare. Samtidigt är han utan tvekan karismatisk. Han är den värsta _____ jag sett, och samtidigt den bästa.",
     "options": [
      "pedagog",
      "demagog",
      "mykolog",
      "dermatolog"
     ],
     "correct": 1
    },
    {
     "num": 30,
     "text": "Sedan slutet av 1990-talet används begreppet _____ särskilt om bedömning och utvärdering av en persons kompetens och kunskaper, oavsett hur dessa har _____.",
     "options": [
      "kvalificering – utvecklats",
      "validering – förvärvats",
      "relativisering – kategoriserats",
      "vidimering – dokumenterats"
     ],
     "correct": 1
    }
   ]
  }
 ]
};
