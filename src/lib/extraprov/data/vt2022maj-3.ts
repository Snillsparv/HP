// Högskoleprovet 7 maj 2022, provpass 3 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "vt2022maj-3",
 "tillfalle": "vt2022maj",
 "passNr": 3,
 "kind": "verbal",
 "name": "Provpass 3 (verbalt)",
 "timeMinutes": 33,
 "extendedMinutes": 48,
 "normering": [
  [
   0,
   0.0
  ],
  [
   20,
   0.1
  ],
  [
   23,
   0.2
  ],
  [
   26,
   0.3
  ],
  [
   30,
   0.4
  ],
  [
   33,
   0.5
  ],
  [
   37,
   0.6
  ],
  [
   40,
   0.7
  ],
  [
   43,
   0.8
  ],
  [
   47,
   0.9
  ],
  [
   50,
   1.0
  ],
  [
   54,
   1.1
  ],
  [
   57,
   1.2
  ],
  [
   60,
   1.3
  ],
  [
   63,
   1.4
  ],
  [
   66,
   1.5
  ],
  [
   69,
   1.6
  ],
  [
   71,
   1.7
  ],
  [
   73,
   1.8
  ],
  [
   75,
   1.9
  ],
  [
   77,
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
     "word": "transparens",
     "text": "<b>transparens</b>",
     "options": [
      "översikt",
      "utsöndring",
      "öppenhet",
      "utbredning",
      "förvandling"
     ],
     "correct": 2
    },
    {
     "num": 2,
     "word": "bemöda sig",
     "text": "<b>bemöda sig</b>",
     "options": [
      "opponera sig",
      "utstå kritik",
      "behärska sig",
      "vägra lyda",
      "anstränga sig"
     ],
     "correct": 4
    },
    {
     "num": 3,
     "word": "marodör",
     "text": "<b>marodör</b>",
     "options": [
      "lögnare",
      "ensamvarg",
      "djurtämjare",
      "skadegörare",
      "ryttare"
     ],
     "correct": 3
    },
    {
     "num": 4,
     "word": "koherent",
     "text": "<b>koherent</b>",
     "options": [
      "begränsad",
      "föränderlig",
      "sammanhängande",
      "fördjupad",
      "användbar"
     ],
     "correct": 2
    },
    {
     "num": 5,
     "word": "besinning",
     "text": "<b>besinning</b>",
     "options": [
      "lugn",
      "nervositet",
      "tvivel",
      "känslighet",
      "obehag"
     ],
     "correct": 0
    },
    {
     "num": 6,
     "word": "slagkraftig",
     "text": "<b>slagkraftig</b>",
     "options": [
      "stabil",
      "uthållig",
      "impulsiv",
      "verkningsfull",
      "svårknäckt"
     ],
     "correct": 3
    },
    {
     "num": 7,
     "word": "konstellation",
     "text": "<b>konstellation</b>",
     "options": [
      "uppdrag",
      "gruppering",
      "påverkan",
      "förberedelse",
      "omflyttning"
     ],
     "correct": 1
    },
    {
     "num": 8,
     "word": "av hävd",
     "text": "<b>av hävd</b>",
     "options": [
      "av intresse",
      "av tradition",
      "av lojalitet",
      "av misstag",
      "av själviskhet"
     ],
     "correct": 1
    },
    {
     "num": 9,
     "word": "fordran",
     "text": "<b>fordran</b>",
     "options": [
      "krav",
      "förskott",
      "återbäring",
      "sparkapital",
      "inbetalning"
     ],
     "correct": 0
    },
    {
     "num": 10,
     "word": "varsko",
     "text": "<b>varsko</b>",
     "options": [
      "upptäcka",
      "beklaga",
      "förvarna",
      "inbilla",
      "bevara"
     ],
     "correct": 2
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
     "title": "Glömskan",
     "html": "<p>Det man kallar glömska är bara en mycket stor tid. Den är gränslös för att den egentligen är <i>hela</i> tiden, och därför är den också alltid närvarande på ett sätt som den lilla tiden inte klarar, för den lilla tiden är en å där det flyter kottar. Men glömskan är ett hav och om man kastar en kotte i havet driver den bara ut och försvinner. Till slut sjunker den.</p>\n<p>Glömskan är alltid här, och kan också uppsluka oss. Den kan uppsluka oss och spotta ut oss. Idag var jag i glömskan men sen kom jag tillbaka. Då hade katten fått ungar. Ibland är bara händerna där, i förströelse ovanpå duken stryker dom över en kniv medan dagen sakta grusas och faller i ett långsamt grått tumult hit in.</p>\n<p>När vi dör ska vi falla ur tiden och vara i den stora tiden. Det är sagt så. Vi ska vandra där likt strutsar, likt strutsars avkomma, eller likt strutsars ägg, i ultrarapid med halsar vajande i ett grågrönt dis, som i en film om en öken som man ser en vanlig vit onsdag eftermiddag.</p>\n<p>Glömskan finns också mellan människor i nästan varje ögonblink, ja bokstavligen för när människor blinkar är dom där, bakom ögonlocken pågår ett ingenting, en orgie, som dom inte kan slita sig ifrån, dom måste dit igen och igen. Men dom kämpar denna kamp var och en för sig, så ensamma, ty att älska glömskan är en skam bland människor, vi har alla lovat att ständigt finnas tillhands, och med det menas: <i>ständigt</i>.</p>\n<p class=\"forf\">Thomas Tidholm</p>"
    },
    {
     "title": "Kalvning i och utanför hägn",
     "html": "<p>Inom ramen för ett regeringsuppdrag genomför Viltskadecenter en studie av hur åtgärderna ”kalvning i hägn” och ”områdesriktad jakt” kan användas för att minska antalet rovdjursdödade renar. Studien görs i samarbete med Udtja sameby, Gällivare skogs sameby, Avdelningen för renskötsel vid Sveriges lantbruksuniversitet (SLU) och Skandinaviska björnprojektet, och kommer att pågå till 2016.</p>\n<p>2013 kalvade samtliga vajor i de båda samebyarna i hägn. Under första veckan i juli vägdes varje renkalv och individmärktes med öronbricka. 900 kalvar försågs också med proximity-sändare, som kommunicerar med sändare som sitter på märkta björnar i området. Om en kalv dör skickar kalvens sändare ut en mortalitetssignal.</p>\n<p>Under sommaren och hösten 2013 följde vi upp de tillfällen då sändarförsedda björnar varit nära sändarförsedda kalvar, för att se om kalvningen i hägn påverkat björnarnas predationstakt på renkalv. Vi flygpejlade även två gånger i veckan, för att lokalisera kalvsändare i mortalitetsläge. Dessa sändare hämtades sedan in från marken, och dödsorsaken bestämdes genom en enkel undersökning av resterna av kalven. I de fall rovdjur inte kunde dokumenteras vara dödsorsaken skickades kalvarna till Statens veterinärmedicinska anstalt (SVA) för obduktion.</p>\n<p>I korthet kan vi konstatera att kalvning i hägn (kalvarna släpptes ut i början av juni) resulterade i en björnpredation på renkalvar nära noll, vilket var ett förväntat resultat. Vi noterade dock en relativt hög kalvdödlighet i de två hägnen med flest renar. I Udtja konstaterades parasiten <i>nekrobacillos</i> (kraftig infektion i munnen) vara orsaken till stora kalvförluster. Under vintern samlade vi vid ytterligare några tillfällen ihop renar, och bland dessa förekom infektionen fortfarande och resulterade i dödlighet. En försöksgrupp antibiotikabehandlades av veterinär från Svenska Djurhälsovården. De stora förlusterna till följd av sjukdomar har resulterat i att vi kommer att lägga mer tid än planerat på att ta fram rekommendationer och rutiner som kan minska risken för liknande utbrott i framtiden.</p>\n<p>Första veckan i april 2014 var det hög aktivitet inom studien. De vajor som skulle ingå i studien under våren vägdes och dräktighetstestades av ett antal renskötare från de båda samebyarna, två veterinärer från Finland respektive SVA, forskare och studenter från Skandinaviska björnprojektet och Avdelningen för renskötsel samt Viltskadecenter.</p>\n<p>Två olika metoder användes för att säkerställa dräktigheten hos vajorna. Den finska veterinären Heikki Sirkkola, som har stor erfarenhet av dräktighetstester, utförde ett ultraljud på vajorna för att upptäcka eventuella foster. Dessutom utförde veterinär Erik Ågren från SVA en manuell genomgång av vajorna, där han kände på varje vajas mage efter en kalv. Eftersom kalvfostren vid den här årstiden är ganska stora går det bra att känna fostret utifrån. De båda veterinärerna var i de flesta fall helt överens. De vajor som konstaterats dräktiga i båda testerna delades slumpmässigt in i två olika grupper: en grupp som skulle fodras och kalva i hägn och en kontrollgrupp som skulle gå lös i skogen. Gamla halsband plockades av från vajor som varit märkta tidigare. Varje dräktig vaja försågs med ett nytt halsband med unikt idnummer, i en färg som visade vilken av grupperna hon tillhörde.</p>\n<p>Testen och märkningen av renarna hade förberetts noggrant och över 800 vajor hanterades under de dagar som arbetet pågick. När renarna senare under sommaren samlades ihop, och kalvarna märktes, kunde eventuella skillnader mellan kalvningsframgång och överlevnad jämföras mellan gruppen i hägn, som varit skyddad från björn, och kontrollgruppen.</p>\n<p>Sammanfattningsvis visar resultaten från 2013 och 2014 att björnpredation på renkalv kunde reduceras till noll då kalvningen skedde i hägn och renkalvarna släpptes ut ur kalvningshägnet efter första veckan i juni. Detta kan jämföras med resultaten från en tidigare studie, som gjorts i samma samebyar, där varje björnindivid i genomsnitt dödade 11 renkalvar per kalvningsperiod. Vi konstaterade dessutom att björnarna inte ”kompenserar”, alltså inte dödar fler kalvar, under sommar och höst om de inte haft tillgång till renkalvar under kalvningsperioden.</p>\n<p>Kalvning i hägn visade sig således ha en positiv effekt när det gällde skydd mot predation. Hägnvistelsen kan dock medföra andra risker för kalvarnas hälsa och överlevnad. År 2013 var dödligheten under kalvningsperioden hög (omkring 10 %) i de två största (av de totalt fyra) hägnen, men låg (1,5 %) i de andra två. År 2014 var antalet renar i samtliga fyra hägn lägre. Då låg kalvdödligheten mellan 1,7 % och 4,0 % och vi såg, till skillnad från under 2013, inget samband mellan kalvdödlighet och djurtätheten i hägnen. De vanligaste dödsorsakerna i hägnen var utmärgling, övergivna kalvar och olika typer av infektioner. Bland kalvarna från det största hägnet (med nästan 1 000 vajor) hittades efter utsläppet dessutom 39 kalvar som drabbats av <i>nekrobacillos</i>, en smitta som de med all säkerhet ådragit sig under hägnvistelsen.</p>\n<p>Resultaten tyder på att stort renantal och hög djurtäthet är riskfaktorer för såväl infektioner som dödlighet på grund av utmärgling eller att kalven blivit övergiven.</p>\n<p>Eftersom vajorna utfodrades i samband med kalvningen i hägn ställde vi oss frågan om överlevnaden hos kalvarna kunde betraktas som ”naturlig” eller om utfodringen påverkade kalvöverlevnaden positivt. För att kunna ta hänsyn till effekten av såväl hägnvistelse som utfodring delade vi, som nämnts, i början av april 2014 upp vajorna i grupper där vi kombinerade utfodring/icke utfodring och kalvning i hägn/icke hägn. Dödligheten var låg (1,0–2,4 %) från juni till augusti hos kalvar från samtliga grupper, vilket tyder på att varken utfodring eller hägnvistelse hade någon effekt på överlevnaden under den här perioden.</p>\n<p>De vajor som kalvade i hägn (skyddade från rovdjur under kalvningsperioden) hade en kalvöverlevnad på hösten på 95 %, oavsett grad av utfodring. Även bland de vajor som kalvade utanför hägnen var kalvöverlevnaden högre (75 %) 2014 jämfört med referensåren 2010–2012 (omkring 50 %). Eftersom resultatet bara gäller ett enskilt år kan vi i nuläget inte uttala oss om huruvida skillnaden beror på mellanårsvariation eller andra faktorer, till exempel en minskning av antalet björnar till följd av den ordinarie björnjakten.</p>\n<p><b>hägn</b> = med stängsel avgränsat område för boskap<br><b>vaja</b> = renko</p>"
    },
    {
     "title": "Ideologisk skoldebatt",
     "html": "<p>Gabriel Heller Sahlgren, doktorand vid London School of Economics och knuten till Institutet för näringslivsforskning, har på senare tid figurerat flitigt i medierna med uttalanden om hur man ska lösa ”skolans kris”, vilken ses som synonym med de fallande resultaten i internationella kunskapsmätningar som Pisa. Heller Sahlgren härleder delvis denna kris till 1990-talet och det han kallar ”individanpassade undervisningsmetoder”, men hävdar att förfallet startade långt tidigare än så: nämligen i och med progressiva pedagogiska idéers inflytande över svensk skola under efterkrigstiden.</p>\n<p>Som gymnasielärare, humanist och doktorand i litteraturvetenskap med didaktisk inriktning blir jag brydd av att läsa hans svepande förklaringsmodeller. I tidningen <i>Axess</i> skriver Heller Sahlgren: ”I den radikala tidsanda som rådde under efterkrigstiden sågs den traditionella skolan som en relik från ett auktoritetsstyrt samhälle som skulle brytas ner.” Det han inte nämner är att efterkrigstiden innebar den brytpunkt då den svenska skolan beslutade sig för att den, förutom kunskapsuppdraget, också skulle ha ett demokratiskt fostransuppdrag – ett beslut som tillkom som en direkt effekt av händelserna under andra världskriget.</p>\n<p>I <i>1946 års skolkommissions betänkande med förslag till riktlinjer för det svenska skolväsendets utveckling</i> står att läsa:</p>\n<p>Därvid bör tagas i sikte, att vissa egenskaper både ur samhällets och individens synpunkt är särskilt värdefulla och samtidigt möjliga att genom uppfostran utveckla. Självständigheten är en sådan egenskap. Dess värde har särskilt uppmärksammats i debatten om de totalitära regimernas psykologiska förutsättningar. Av medborgaren i ett folkstyrt samhälle bör man fordra ett kritiskt sinnelag, som ger motståndskraft mot andliga farsoter. Demokratin har ingen nytta av osjälvständiga massmänniskor.</p>\n<p>Vi talar alltså om en skola som bryter med en kristen värdeförmedling och en tydlig auktoritetsstyrning – företeelser som 1946 års skolkommission kallar för ”starkt medeltida inslag i nutida pedagogik” – för att på demokratisk grund sträva efter att utveckla elevers självständighet och kritiska tänkande. Att hävda att detta skulle vara början på allt elände inom den svenska skolan måste ses som ett anmärkningsvärt påstående.</p>\n<p>Heller Sahlgren avvisar också helt marknadiseringen av skolan som en möjlig, negativ påverkansfaktor på resultatutvecklingen. I en artikel i <i>Dagens Samhälle</i> skriver han: ”Debattörer hävdar fortfarande att New Public Management – ett diffust begrepp som ofta inkluderar konkurrens, resultatmätningar och ansvarsutkrävande – har förstört skolväsendet. Något forskningsstöd för denna idé har aldrig presenterats. Förklaringen är enkel: det finns inget.”</p>\n<p>Detta stämmer inte. Studien <i>Gymnasiet som marknad</i> från 2014 undersöker New Public Management på den svenska skolans område. Den visar att såväl lärare och rektorer som studie- och yrkesvägledare anser att nya arbetsuppgifter, såsom ökad dokumentation och marknadsföring, ökar arbetsbelastningen och tar tid från det centrala i arbetet, det vill säga pedagogisk ledning och undervisning.</p>\n<p>En annan slutsats som dras av studien är att betoningen av enkelt mätbara resultat innebär en devalvering av läraryrket. Uppgiften att bidra till elevernas allsidiga utveckling, till aktivt deltagande i yrkes- och samhällslivet samt till utvecklingen av ett demokratiskt samhälle, tonas ned och ersätts av rollen som effektiv leverantör av enkelt mätbara kunskaper.</p>\n<p>I rapporten <i>Betygsinflation</i> – <i>betygen och den faktiska kunskapsutvecklingen</i> från 2012 konstaterar Skolverket att ökad konkurrens mellan skolor skapar incitament för betygsinflation. När elevernas betyg blir en del av skolans marknadsföring kan det skapas ett tryck på betygssättningen från ledningshåll, samtidigt som det kan vara frestande för den enskilda läraren att sätta höga betyg för att framstå som en skicklig lärare med bra resultat. Kunskapsresultaten blir alltså ett starkt konkurrensmedel inte bara mellan skolor utan också mellan lärare, inte minst när det gäller möjligheten att söka mer välbetalda karriärtjänster som förstelärare eller lektor.</p>\n<p>Att mot bakgrund av detta avfärda marknadiseringen av skolan – som för övrigt påbörjades under 1990-talet, det vill säga under den period då Heller Sahlgren menar att skolan på allvar började förfalla – som en obetydlig faktor i utvecklingen är att inte ta sin vetenskapligt kritiska uppgift som doktorand på allvar.</p>\n<p>Mot detta kan argumenteras att en studie som <i>Gymnasiet som marknad</i> utgår ifrån <i>uppfattningar</i>, vad lärare <i>tycker</i> eller <i>tror</i>. Studien skulle kunna sägas handla om ”rent ideologiska ställningstaganden” från ”utbildningsintelligentian världen över”, som Gabriel Heller Sahlgren uttrycker det i <i>Axess</i>. Lustigt nog ställer sådana formuleringar honom själv utanför den ”utbildningsintelligentia” som han beskriver.</p>\n<p>Detta för mig in på det allvarligaste problemet med Heller Sahlgrens sätt att argumentera. Jag har svårt att avgöra om han medvetet försöker hymla med sina marknadsfundamentalistiska premisser eller om han på allvar inte ser att många av hans ställningstaganden är lika ideologiska som dem han kritiserar. I <i>Axess</i> skriver han:</p>\n<p>Skolan bör inte sträva efter att efterlikna samhället i stort. Dess natur kräver auktoritet och traditioner, som paradoxalt minskar i betydelse utanför dess väggar.</p>\n<p>Elever är inte vuxna människor och vi bör heller inte behandla dem som sådana. Den frihet vi åtnjuter i samhället är alltså inte alltid önskvärd inom skolsystemet.</p>\n<p>Utbildningens paradox i det postindustriella samhället är kanske snarare att det i dag är än viktigare att upprätthålla auktoritativa strukturer och traditionella relationer i skolan. Nu när liknande strukturer och relationer har rämnat i världen utanför. För ingen offentlig institution har så stor möjlighet att påverka elevers normer och värderingar i rätt riktning som just skolan. Med alltför egalitära relationer mellan elever och vuxna riskerar den dock i stället att driva på utvecklingen mot mindre acceptans för institutionen och dess auktoriteter ytterligare.</p>\n<p>Jag ska försöka föregå med gott exempel: Mina egna synpunkter på skolan har en ideologisk grund. Jag anser att skolan inte enbart ska utformas efter ekonomiska kalkyler och jag anser att det är relevant vad lärare upplever, tror och tänker samt hur elever mår.</p>\n<p>Gabriel Heller Sahlgren och jag kan säkert enas om att en sten som släpps från handen med stor sannolikhet kommer att färdas nedåt, men det förblir en gåta för mig hur en diskussion om utbildning skulle kunna vara renons på ideologiska ställningstaganden. Är det inte bättre då att vi är öppna med vår ideologi? Så kanske vi kan ha en ideologisk debatt om vad som bör vara målet med utbildning, i stället för att förklä våra egna värdeomdömen till självklarheter och sunt förnuft.</p>\n<p class=\"forf\">Gustav Borsgård</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "I texten står det om strutsar som vandrar ”med halsar vajande i ett grågrönt dis”. Vad symboliserar den bilden?",
     "options": [
      "Naturens läkande kraft.",
      "Hoppet om en framtid.",
      "Hur det är att vara död.",
      "Att vardagen skapar trygghet."
     ],
     "correct": 2,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vilket av svarsalternativen stämmer bäst överens med hur texten beskriver människans förhållande till glömskan?",
     "options": [
      "Människan försöker besegra glömskan för att hålla liv i minnena.",
      "Människan vill till glömskan för att slippa vara ensam.",
      "Människan bekämpar glömskan men är rädd för minnena.",
      "Människan lockas av glömskan men måste stå emot den."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Den studie som texten handlar om sökte svar på en av nedanstående frågor. Vilken?",
     "options": [
      "Hur många renkalvar dödar en björn i genomsnitt per kalvningsperiod?",
      "Hur stor blir dödligheten hos renkalvar som skyddas från rovdjur?",
      "Hur många fler kalvar föds då vajor vistas i hägn jämfört med utanför hägn?",
      "Hur stor andel av de rovdjursdödade renkalvarna dödas av björnar?"
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vad framstår utifrån texten som viktigt för att fler kalvar födda i hägn ska överleva?",
     "options": [
      "Att kalvarna släpps ut tidigare på sommaren.",
      "Att antalet renar i hägnen begränsas.",
      "Att kalvarna utfodras under hela sommaren.",
      "Att enbart dräktiga vajor vistas i hägnen."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vilket övergripande resultat visade den aktuella studien, enligt texten?",
     "options": [
      "Färre kalvar smittades av infektioner jämfört med tidigare år.",
      "Fler kalvar dog i hägn jämfört med tidigare år.",
      "Färre kalvar dödades av björnar jämfört med tidigare år.",
      "Fler kalvar överlevde tack vare utfodring jämfört med tidigare år."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Vilken oförutsedd konsekvens har studiens resultat fått, enligt texten?",
     "options": [
      "Att projektet i högre grad kommer att inriktas på förebyggande insatser mot infektioner.",
      "Att samebyarna kommer att minska storleken på sina hägn.",
      "Att nya enhetliga rutiner för att konstatera dräktighet kommer att utformas.",
      "Att utfodringen av lösgående renar kommer att utökas."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Textförfattaren kritiserar Heller Sahlgrens beskrivning av den svenska skolan på flera punkter. Vad av följande tycks de vara oeniga om?",
     "options": [
      "Vilka krafter som drev fram marknadstänkandet i skolsektorn.",
      "I vilken omfattning elevernas kunskaper har försämrats sedan 1990-talet.",
      "Värdet av skolans tydliga kursändring vid 1900-talets mitt.",
      "I vilken grad det politiska styret har påverkat skolväsendets utveckling."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Textförfattaren refererar till en studie av gymnasiet från 2014. I vilket huvudsakligt syfte gör han det?",
     "options": [
      "Han vill stärka sin egen ståndpunkt att skolresultaten har försämrats.",
      "Han vill understryka gymnasiets centrala men klart förändrade roll.",
      "Han vill betona att få studier har belyst skolsystemets nedmontering.",
      "Han vill visa att det finns belägg för hans syn på marknadiseringens effekter."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "I vilken utsträckning uttrycks ideologiskt färgade uppfattningar i den förda diskussionen, enligt textförfattaren?",
     "options": [
      "Sådana uppfattningar framförs av textförfattaren själv men inte av Heller Sahlgren.",
      "Sådana uppfattningar framförs av Heller Sahlgren men inte av textförfattaren själv.",
      "Sådana uppfattningar framförs både av textförfattaren själv och av Heller Sahlgren.",
      "Sådana uppfattningar framförs varken av textförfattaren själv eller av Heller Sahlgren."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Hur betraktar textförfattaren sammanfattningsvis ideologiska inslag i skoldebatten?",
     "options": [
      "Som ofrånkomliga.",
      "Som efterfrågade.",
      "Som ignorerade.",
      "Som överflödiga."
     ],
     "correct": 0,
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
     "text": "1700-talet brukar ibland kallas känslans århundrade. Under detta sekel hyllade man _____: ett slags mottaglighet för känslor och en förmåga att beröras.",
     "options": [
      "rationaliteten",
      "harmonin",
      "sensibiliteten",
      "nostalgin"
     ],
     "correct": 2
    },
    {
     "num": 22,
     "text": "Vinterbeskärning lämpar sig för att forma buskar och trädkronor samt för att _____ ut döda eller skadade grenar. En fördel med att beskära på vintern är att man kan se trädens _____ lättare än när kronorna omges av grönska.",
     "options": [
      "glesa – rötter",
      "gräva – skepnad",
      "gyttra – grenar",
      "gallra – struktur"
     ],
     "correct": 3
    },
    {
     "num": 23,
     "text": "<i>Diabetes mellitus</i> är en endokrin sjukdom som medför att blodets innehåll av socker, _____, är förhöjt. Liksom vid andra autoimmuna sjukdomar är _____ (sjukdomsorsaken) oklar. Tvillingstudier har visat att ärftlighet existerar, men resultaten är inte _____.",
     "options": [
      "glukos – etiologin – entydiga",
      "aspartam – kausaliteten – påvisbara",
      "insulin – patologin – relevanta",
      "glykogen – diagnosen – påverkbara"
     ],
     "correct": 0
    },
    {
     "num": 24,
     "text": "Kemisk pappersmassa ger ett starkt papper, som används till _____ och mjukpapper samt till skriv- och tryckpapper.",
     "options": [
      "emballage",
      "slitage",
      "ensilage",
      "montage"
     ],
     "correct": 0
    },
    {
     "num": 25,
     "text": "En person som är utsatt för allvarliga hot kan få en ny identitet i form av _____ personuppgifter. Det innebär att personen kan få nytt namn och nytt personnummer, och det är endast polisen som har _____ till uppgifter om den tidigare identiteten.",
     "options": [
      "anonyma – angivelser",
      "hypotetiska – behörighet",
      "fingerade – tillgång",
      "provisoriska – befogenheter"
     ],
     "correct": 2
    },
    {
     "num": 26,
     "text": "Krisen i landet utgjorde _____ på den stadiga försämring av det politiska klimatet som hade pågått i flera år.",
     "options": [
      "zenit",
      "kulmen",
      "spetsen",
      "krönet"
     ],
     "correct": 1
    },
    {
     "num": 27,
     "text": "Våra _____ är beroende av våra tidigare erfarenheter och hur vi implicit lärt oss att kategorisera världen. Det är omöjligt att dra en skarp _____ mellan det förnumna och det härledda.",
     "options": [
      "upplevelser – diagonal",
      "förnimmelser – skiljelinje",
      "slutsatser – kontur",
      "egenskaper – avgränsning"
     ],
     "correct": 1
    },
    {
     "num": 28,
     "text": "Det moderna välfärdssamhället lämnar utrymme för _____ grubblerier och en inre stress. Psykisk ohälsa har ett tydligt samband med vår stora frihet, alla valmöjligheter och den materiella tryggheten som ger utrymme att fundera över identitet och _____. Ett sätt att beskriva det är att vi är stressade därför att vi _____.",
     "options": [
      "invärtes – självkänsla – inte kommer framåt",
      "existentiella – mening – har det så bra",
      "allvarliga – ursprung – vill för mycket",
      "nervösa – framtidstro – lider av sömnbrist"
     ],
     "correct": 1
    },
    {
     "num": 29,
     "text": "En skoldag kan mattelektionen hållas på italienska och historietimmen på ladinska, som är ett av Europas minsta språk och talas av ungefär 30 000 personer i Sydtyrolen. Nästa dag gör man en _____ och kör matte på ladinska och historia på italienska.",
     "options": [
      "rekyl",
      "rundgång",
      "roulett",
      "rockad"
     ],
     "correct": 3
    },
    {
     "num": 30,
     "text": "Ta följande exempel: En tjänsteman har begärt en muta, utan att få något gehör. Att någon muta då inte har tagits emot kan betraktas som _____, eftersom tjänstemannens _____ har varit att bryta mot principen om opartiskhet.",
     "options": [
      "ovidkommande – uppsåt",
      "otillbörligt – anledning",
      "oklanderligt – strävan",
      "oacceptabelt – inställning"
     ],
     "correct": 0
    }
   ]
  }
 ]
};
