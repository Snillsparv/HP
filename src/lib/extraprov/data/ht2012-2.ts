// Högskoleprovet 27 oktober 2012, provpass 2 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "ht2012-2",
 "tillfalle": "ht2012",
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
   21,
   0.2
  ],
  [
   23,
   0.3
  ],
  [
   25,
   0.4
  ],
  [
   28,
   0.5
  ],
  [
   31,
   0.6
  ],
  [
   34,
   0.7
  ],
  [
   37,
   0.8
  ],
  [
   40,
   0.9
  ],
  [
   43,
   1.0
  ],
  [
   46,
   1.1
  ],
  [
   49,
   1.2
  ],
  [
   52,
   1.3
  ],
  [
   55,
   1.4
  ],
  [
   58,
   1.5
  ],
  [
   61,
   1.6
  ],
  [
   64,
   1.7
  ],
  [
   67,
   1.8
  ],
  [
   70,
   1.9
  ],
  [
   73,
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
     "word": "moderator",
     "text": "<b>moderator</b>",
     "options": [
      "mellanchef",
      "skulptör",
      "auktionsutropare",
      "debattledare",
      "kläddesigner"
     ],
     "correct": 3
    },
    {
     "num": 2,
     "word": "gråtmild",
     "text": "<b>gråtmild</b>",
     "options": [
      "ledsam",
      "tröstande",
      "sörjande",
      "medkännande",
      "sentimental"
     ],
     "correct": 4
    },
    {
     "num": 3,
     "word": "dragplåster",
     "text": "<b>dragplåster</b>",
     "options": [
      "häftmassa",
      "attraktion vid evenemang",
      "fiskeredskap",
      "påträngande person",
      "överdrag"
     ],
     "correct": 1
    },
    {
     "num": 4,
     "word": "subventionera",
     "text": "<b>subventionera</b>",
     "options": [
      "beställa",
      "stödja ekonomiskt",
      "meddela",
      "utse en ersättare",
      "beskatta"
     ],
     "correct": 1
    },
    {
     "num": 5,
     "word": "singel",
     "text": "<b>singel</b>",
     "options": [
      "grus",
      "metall",
      "gräsfrö",
      "mynt",
      "urdjur"
     ],
     "correct": 0
    },
    {
     "num": 6,
     "word": "veterligen",
     "text": "<b>veterligen</b>",
     "options": [
      "följaktligen",
      "möjligtvis",
      "såvitt känt",
      "absolut",
      "visserligen"
     ],
     "correct": 2
    },
    {
     "num": 7,
     "word": "aladåb",
     "text": "<b>aladåb</b>",
     "options": [
      "prydnadssten",
      "havslevande djur",
      "kall maträtt",
      "allvetande person",
      "prästdräkt"
     ],
     "correct": 2
    },
    {
     "num": 8,
     "word": "förfaras",
     "text": "<b>förfaras</b>",
     "options": [
      "bli oanvändbar",
      "ta slut",
      "upplösas",
      "få nog",
      "bli bortskämd"
     ],
     "correct": 0
    },
    {
     "num": 9,
     "word": "nihilist",
     "text": "<b>nihilist</b>",
     "options": [
      "en som vägrar bära vapen",
      "en som njuter av plågor",
      "en som förnekar normer",
      "en som lever i isolering",
      "en som inte vill äga något"
     ],
     "correct": 2
    },
    {
     "num": 10,
     "word": "endogen",
     "text": "<b>endogen</b>",
     "options": [
      "inifrån kommande",
      "tvåkönad",
      "tydligt avgränsad",
      "avsiktlig",
      "ofta förekommande"
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
     "title": "Ordkedjor",
     "html": "<p>På en liten skola någonstans i södra Sverige sitter en forskare och samtalar med eleverna i en tvåa. Ämnet som avhandlas är vad eleverna tycker om att läsa och vilka böcker de läst så här långt. Barnen är mycket aktiva och berättar ivrigt om sina läsefrukter. Den litterära dieten är varierad men flera av barnen har läst sådant som vi brukar benämna långserier, till exempel böckerna om LasseMaja. Barnen berättar utförligt om innehållet i det lästa och lyfter fram olika händelser i böckerna som de tycker är särskilt roliga och viktiga.</p>\n<p>Den lyssnande forskaren är imponerad av de här åttaåringarnas beläsenhet och hon kan konstatera att de inte bara kan läsa rent tekniskt utan att de också läser med god förståelse och att de kan förhålla sig till innehållet i det lästa. Eva, elevernas lärare, som är mycket erfaren, har lämnat den traditionella bokstavsinlärningen och den isolerade, formaliserade färdighetsträningen. Hon har insett vikten av ett holistiskt tänkande där svenskämnet integreras med andra ämnen och där olika språkliga uttryck går hand i hand. All färdighetsträning sker i funktionella sammanhang, det är innehållet i undervisningen som står i fokus och skönlitteraturen fyller en viktig funktion som källa till kunskap och upplevelse.</p>\n<p>På order från kommunledningen kommer så en dag en specialpedagog till klassen och genomför ett ordkedjetest. Resultatet får den erfarna specialpedagogen att blekna. Enligt testet skulle det nämligen förhålla sig så att de flesta eleverna i den här klassen kan beskrivas som analfabeter. De har nästan det sämsta resultatet i hela kommunen. Detta är, minst sagt, förbryllande och Eva börjar vackla i sin tro på vikten av att bedriva en undervisning där meningsfullhet, förståelse, innehåll, helheter och dialog utgör de didaktiska grundbultarna. Hon vet att hennes elever med flyt och god förståelse kan läsa både facklitteratur och skönlitteratur anpassad för deras ålder, och lika förbaskat visar testresultatet att eleverna inte kan läsa. Hur i hela friden ska man få den här ekvationen att gå ihop?</p>\n<p>Svaret på gåtan är sannolikt att det elever gör när de utsätts för ordkedjetest inte har något med läsning att göra. Det handlar enbart om rent teknisk ordavkodning, och testet är utformat så att innehållet i de ord som eleverna ska identifiera inte ska ge dem några som helst ledtrådar när de ”läser”. Evas elever är vana vid att de texter de läser ska vara intressanta och meningsfulla och att det viktiga är att de förstår vad de läser. När de genomförde ordkedjetestet letade de naturligtvis efter mening, innehåll, betydelse och förståelse, och när de inte hittade något av detta gav de sannolikt upp. Den enda slutsats man kan dra av detta är att ordkedjetest är oanvändbara om man vill få en uppfattning om elevers läsförmåga och läsförståelse. Och att kommunala beslutsfattare ska låta bli att fatta beslut på områden där de saknar kompetens.</p>\n<p class=\"forf\">Karin Jönsson och Jan Nilsson</p>"
    },
    {
     "title": "Sparvugglor",
     "html": "<p>Sparvugglor är mestadels stationära, särskilt hanarna. Men vid födobrist kan de flytta långa sträckor. I vår forskning beskriver vi en flyttningshöst vid Hammarö fågelstation 2005, då ett stort antal sparvugglor fångades och ringmärktes samt bestämdes till kön och ålder. Sparvugglorna fångades i spegelnät med hjälp av bandspelare med sparvugglesång och andra läten under september och oktober.</p>\n<p>Årsungar av sparvuggla genomgår en partiell ruggning i juli–oktober, medan adulta ugglor ruggar fullständigt under samma period. Ungfåglarna ruggar inte de yttre större täckarna utan bara ett varierande antal av de inre. Detta leder till en kontrast mellan de två fjädergenerationerna, en ålderskaraktär som är lätt att urskilja i fält. Även hand- och armpennorna är olika hos unga och gamla individer. Ungfåglarnas pennor var brunaktiga utan grått, och de ljusa fläckarna i spetsen av hand- och armpennorna var vitare och mera kontrasterande hos de gamla än hos de unga. Ruggningsstadiet är till hjälp vid åldersbestämningen ända till oktober eftersom många adulter ruggar färdigt först då.</p>\n<p>Ugglorna könsbestämdes med hjälp av vinglängden. Fåglar som hade en vinge som var längre än 101 mm ansågs vara honor och fåglar som hade en vinge som var kortare än 100 mm ansågs vara hanar.</p>\n<p>Vi fångade totalt 164 sparvugglor mellan 28 augusti och 31 oktober. Den första tidiga individen den 28 augusti var antagligen en lokal fågel. Flyttande ugglor började uppträda den 9 september. Flyttningen pågick nästan varje dag, men den intensivaste perioden var sista tredjedelen av september då 48 procent av ugglorna fångades. Toppen nåddes den 22 september, då 15 sparvugglor fångades. Ungfåglarna startade flyttningen elva dagar före de adulta. Ungfåglarnas topp inföll 26 september och de gamlas topp 7 oktober. Den sista fågeln var en adult den 31 oktober. Ungfåglarnas flyttning minskade kraftigt redan i början av oktober. Flyttningsmönstret 2005 liknade det som registrerats vid Hammarö tidigare år.</p>\n<p>En majoritet av de flyttande sparvugglorna var honor. Det fanns ingen tidsskillnad i sträckets förlopp mellan könen.</p>\n<p>Vi fick bara ett längre återfynd samma höst. Det var en ungfågel som kontrollerades vid Strömstad 123 km väster om märkplatsen. På märkplatsen fick vi 12 kontroller, bara en gång av varje fågel och vanligen bara ett fåtal dagar efter märkningen. Den längsta tiden mellan märkning och kontroll var 22 dagar. Ytterligare ett långåterfynd erhölls i mars 2008. Fågeln hade märkts som årsunge och återfanns i Nordre Osen, Hedmark i Norge, 247 km åt NNV.</p>\n<p>De flesta av de 163 sparvugglorna efter den första fångades i gryningen (86 %), de flesta av de övriga i skymningen och bara ett fåtal under natten eller dagen.</p>\n<p class=\"forf\">Michal Polakowski, Monika Broniszewska &amp; Michal Skierczynski</p>"
    },
    {
     "title": "Samtalston",
     "html": "<p>Sveriges Arkitekters Kritikerpris har just delats ut. Det gick till Jan Åman och hans Färgfabriken för ”deras sätt att driva och förnya arkitektur- och stadsbyggnadsdebatten i otraditionella former”. Börjar synen på diskussionen om arkitektur och samhällsplanering sakta förändras? Annars brukar det låta som när Ola Andersson fick kritikerpriset 2006, för att ha ”spridit arkitekturkritik och stadsbyggnadsdebatt till en bredare krets”. Eller som när Tomas Lewan fick det året efter för att juryn ville ”uppmuntra fler praktiserande arkitekter att delta i det offentliga samtalet om arkitektur”.</p>\n<p>Det finns något uppfordrande, otydligt och nästan rörande förhoppningsfullt i formuleringarna om det där ”offentliga samtalet”. Vad är målet – folkbildning, förståelse eller kanske förlåtelse? Vem ska man prata med, vem är egentligen intresserad – näringslivet eller det så kallade brukarledet? Nja, knappast. Panegyrisk självanalys har egentligen bara en målgrupp: andra arkitekter. Få debattörer är verkligt intresserade av dialog men däremot gärna av en prestigefylld monolog. Ska ett samtal lyfta över en propagandanivå måste det finnas ett intresse och en öppenhet för andras åsikter, fördomar och motsägelser. Dialogen har annars en tendens att förvandlas till någon sorts passivt aggressiv tävling, unket osande av testosteron.</p>\n<p>De som efterlyser offentlig debatt har ofta en (mer eller mindre) dold agenda. Det kan handla om att arkitekter borde bygga höga hus, värna hyresrätten, ägna sig mer åt socialt engagemang eller passivhus. Man kidnappar diskussionen för egna syften och vill slå fast arkitekturens uppgift. Hur angeläget det än är att rädda världen kan det aldrig automatiskt bli alla arkitekters uppgift. Se upp för skendebatt och smygtotalitära debattörer!</p>\n<p>Arkitektvärlden fortsätter att känna sig dålig för att den inte får igång det efterlängtade ”offentliga samtalet om arkitektur”. Kanske bygger denna desperata önskan på nostalgi. På drömmen om en tid när vi säkert visste vilket samhälle som skulle byggas och vilken stil det skulle byggas i. En tid när arkitekterna hade allmänhetens förtroende. Kåren var liten, homogen och säker på att man hade rätt. Kanske lever föreställningen om samtalet kvar där? I så fall är det förväntningarna det är fel på. Sverige är inte samma land i dag som på tjugo- eller sextiotalet. Arkitekter i dag är en större, mer diversifierad och globaliserad yrkesgrupp som kan och vill prata om många olika saker samtidigt.</p>\n<p>Vår fixering vid bristen på en bred debatt om arkitektur skymmer det faktum att det faktiskt pågår många olika diskussioner i en mängd olika grupperingar. Kanske dags att sluta drömma om det offentliga goda/uppbyggliga/ folkbildande samtalet? Och börja prata i stället, i normal samtalston.</p>\n<p class=\"forf\">Katarina Rundgren</p>\n<p class=\"dikt\"><b>panegyrisk</b> = egenkär, förhärligande</p>"
    },
    {
     "title": "Svår maternell sjuklighet",
     "html": "<p>Nyligen publicerade BMJ (<i>British Medical Journal</i>) en nationell kohortstudie från Storbritannien som visar att mycket svår maternell sjuklighet (eklampsi, peripartal hysterektomi, lung- eller fostervattensemboli samt akut fettlever) är vanligare bland vissa etniska minoritetsgrupper än bland den vita majoritetsbefolkningen.</p>\n<p>Högst risk hade kvinnor med afrikansk eller karibisk bakgrund, efter justering för socioekonomiska faktorer. Detta motsvarar fynd i tidigare studier om mödradödlighet och perinatal dödlighet. Författarna diskuterar skillnader i sjukdomsmönster som förklaring, men de berör inte interaktioner mellan variabler, suboptimal vård eller kommunikationsproblem som tänkbara alternativ.</p>\n<p>Svårigheterna att mäta mödramortalitet korrekt har diskuterats länge. Även i höginkomstländer finns problem med felklassificering och statistisk styrka, vilket försvårar möjligheterna att studera mödra- och förlossningsvård i ett etniskt perspektiv. I BMJ-artikeln har man försökt komma åt problemet genom att använda ”near miss”, dvs. att kvinnan nästan varit på väg att dö, som mått på svår maternell sjuklighet.</p>\n<p>Studier av svår maternell morbiditet baseras på kliniska kriterier för vanligt förekommande diagnoser, för organspecifik dysfunktion eller för handläggning och intervention av kritiska tillstånd. De flesta studierna har utförts på sjukhusmaterial i höginkomstländer, men några även i låginkomstländer.</p>\n<p>Introduktionen av begreppet svår maternell sjuklighet ska ses som ett komplement till att mäta kvaliteten på mödra- och förlossningsvården och som ett sätt att öka förståelsen för förloppet hos svårt sjuka kvinnor som överlever jämfört med dem som dör i samband med graviditet eller förlossning. Författarna påpekar att möjligheten att studera skillnader mellan grupper underlättas. Dessutom ger det bättre möjlighet till kunskaper i kliniska rutiner, eftersom morbiditet är vanligare än mödradödsfall. Ett annat argument för att använda svår maternell sjuklighet är att det anses som ett mindre dömande mått, och därmed är det lättare att dra lärdom av resultaten.</p>\n<p>Det är intressant att jämföra resultaten om ojämlikhet inom brittisk förlossningsvård med svensk vård, eftersom Sverige proportionellt sett har en högre andel invandrad befolkning än både Storbritannien och USA. Ett problem är dock att olika definitioner av invandrare används. I nordiska studier är kvinnans födelseland ofta utgångspunkt för definitionen, i de brittiska studierna den etniska gruppen.</p>\n<p>I Storbritannien anser man att verkligheten speglas bättre om individen själv definierar vilken etnisk grupp hon tillhör. Detta har en historisk förklaring, men det försvårar jämförelsen mellan länder: t.ex. klassificeras kvinnor från Afrika söder om Sahara som antingen vita afrikaner, indiska afrikaner eller svarta afrikaner. I BMJ-artikeln betyder det att många av de kvinnor som identifierades som högriskindivider för maternell sjuklighet i själva verket kan vara födda och uppvuxna i Storbritannien. Etnicitetsbegreppet kan tolkas som en socioekonomisk såväl som en biologisk variabel, men det är svårare att analysera samband med migration och sociokulturella traditioner.</p>\n<p>I BMJ-artikeln diskuteras olika sjukdomsmönster som bakomliggande orsak till skillnaderna mellan etniska grupper, men kvalitetsaspekten på vården tas inte upp. Dagens barnmorskor och läkare kanske inte är tillräckligt tränade för att diagnostisera och handlägga ovanliga sjukdomar som hjärtsjukdomar, tuberkulos, malaria eller HIV. Detta kan vara en orsak till försenad diagnos och behandling, och därmed ge ökad risk för svår maternell sjuklighet.</p>\n<p>När man studerar utfall som mödradödlighet eller svår maternell sjuklighet är det viktigt att beakta hur tillgänglig vården är. Tillgången till vård är mycket hög i Storbritannien, och man har länge haft en mycket liberal inställning till att akutsjukvård ska vara kostnadsfri för alla som befinner sig i landet oavsett legal status och medborgarskap. Mödra- och förlossningsvården är i detta avseende kanske mer ojämlik i Sverige med tanke på de oklarheter och regionala skillnader som råder för ”papperslösa” och gömda flyktingar.</p>\n<p>Det går ännu inte att dra slutsatser på individnivå, men beläggen ökar för att kvinnor med ursprung i afrikanska länder – på gruppnivå – är en riskgrupp inom mödra- och förlossningsvården efter invandring till Europa och Nordamerika. För de allra flesta utlandsfödda kvinnor som föder barn i Sverige går det dock bra, trots att de kommer från mycket fattiga länder med såväl hög paritet som hög sjuklighet.</p>\n<p class=\"forf\">Birgitta Essén</p>\n<p class=\"dikt\"><b>kohort</b> = grupp av personer med vissa gemensamma kännetecken<br><b>maternell</b> = mödra- (t.ex. maternell sjuklighet = mödrasjuklighet)<br><b>morbiditet</b> = sjuktal, sjuklighet<br><b>paritet</b> = antal förlossningar<br><b>perinatal död</b> = död inom 7 dagar efter förlossning</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vilket påstående om läsningens roll i de beskrivna barnens dagliga skolundervisning överensstämmer bäst med texten?",
     "options": [
      "Läsning ges särskild prioritet framför många andra områden.",
      "Barnen tränar läsning genom praktisk tillämpning i olika ämnen.",
      "Läsundervisningen individanpassas i takt med att barnen lär sig mer.",
      "Barnen får framför allt träna sin läsförmåga på texter som de själva valt ut."
     ],
     "correct": 1,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vad är det främsta problemet med ordkedjetest, enligt textförfattarna?",
     "options": [
      "Testen bortser från individuell läsförmåga.",
      "Testen saknar stöd i pedagogisk läsforskning.",
      "Testen mäter bara inlärning och inte kunskap.",
      "Testen är abstrakta och saknar sammanhang."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vad kan man allmänt säga om forskningsresultaten beträffande sparvugglor vid Hammarö fågelstation?",
     "options": [
      "De tycks med tiden inkludera allt färre hanar.",
      "De indikerar ökade skillnader över generationerna.",
      "De tycks vara likvärdiga från år till år.",
      "De varierar allteftersom mätmetoderna ändras."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vilken slutsats om sparvugglor är mest rimlig att dra av texten?",
     "options": [
      "Honor flyttar i större utsträckning än vad hanar gör.",
      "Det tycks bli allt svårare att könsbestämma fågelarten.",
      "Hanarna i olika generationer är mer lika varandra än honorna.",
      "Hanar och honor flyttar vid olika tidpunkter."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vilken sorts arkitektur drömmer en tongivande del av dagens arkitektkår om, enligt textförfattaren?",
     "options": [
      "En arkitektur som anpassar sig till arkitekternas breddade kompetens.",
      "En arkitektur som har en tydlig och självklar uppgift.",
      "En arkitektur som finner inspiration i äldre byggnadsstilar.",
      "En arkitektur som lyfter sig över tillfälliga trender och stilar."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 16,
     "text": "Vilket syfte har textförfattaren med sin text?",
     "options": [
      "Att bemöta en kritik.",
      "Att avsluta en debatt.",
      "Att formulera en yrkesroll.",
      "Att punktera en illusion."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 17,
     "text": "Vad är enligt texten en av vinsterna med att börja studera svår maternell sjuklighet?",
     "options": [
      "Fenomenet är vanligare i fattiga länder än i rika, vilket innebär att forskningsresurserna bör satsas där de behövs som bäst.",
      "Fenomenet speglar en växande ojämlikhet inom vården, vilket innebär att behovet av forskning enbart kommer att öka på sikt.",
      "Begreppet är gångbart och relevant i de allra flesta länder, vilket underlättar vårdinsatserna betydligt.",
      "Begreppet fångar in fler individer än mödradödlighet gör, vilket innebär att forskarna kan dra säkrare slutsatser."
     ],
     "correct": 3,
     "textIndex": 3
    },
    {
     "num": 18,
     "text": "Vilken omständighet kan enligt textförfattaren tala för att mödra- och förlossningsvården är mera jämlik i Storbritannien än i Sverige?",
     "options": [
      "Invandrare utgör en större andel av befolkningen i Storbritannien än i Sverige.",
      "Etnisk tillhörighet definieras annorlunda i Storbritannien än i Sverige.",
      "Vården är mera lättåtkomlig i Storbritannien än i Sverige.",
      "Svår maternell sjuklighet är mera utforskad i Storbritannien än i Sverige."
     ],
     "correct": 2,
     "textIndex": 3
    },
    {
     "num": 19,
     "text": "Vad anger textförfattaren som en möjlig orsak till att det kan vara svårt att hantera maternell morbiditet?",
     "options": [
      "Brister i klassificeringen av utsatta etniska grupper.",
      "Brist på studier av mödrar i låginkomstsituationer.",
      "Brister i utbildning och kompetens hos sjukhuspersonalen.",
      "Brist på jämförelser med förhållandena i andra länder."
     ],
     "correct": 2,
     "textIndex": 3
    },
    {
     "num": 20,
     "text": "Hur ser textförfattaren på begreppet ”svår maternell sjuklighet” som undersökningsmått?",
     "options": [
      "Som en lämplig utvidgning av det smalare ”near miss”-måttet.",
      "Som ett nytt oprövat mått av kvaliteten på mödra- och förlossningsvården.",
      "Som ett ytterligare bidrag till kunskapen om mödrasjuklighet och mortalitet.",
      "Som ett alltför allmänt begrepp utan precision i praktisk tillämpning."
     ],
     "correct": 2,
     "textIndex": 3
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
     "text": "Vårt rättskrivningssystem är långt ifrån _____, och även om språkvården har till uppgift att försöka göra det mer följdriktigt stöter den ofta på inre konflikter. Språkets snåriga historia är inte alltid lätt att ingripa i. En grundregel i det svenska _____ systemet är att kort vokal ska följas av två konsonanter: lapp, rulla, matta.",
     "options": [
      "konsekvent – ortografiska",
      "elementärt – monografiska",
      "flexibelt – kalligrafiska",
      "evident – stenografiska"
     ],
     "correct": 0
    },
    {
     "num": 22,
     "text": "Hon tar sig an de svåra fallen, människor som levt länge med smärtsamma arbetsskador, som har gått ut och in i jobb och åtgärder. Hon ser hur arbetsskadade ofta faller _____ och blir utan pengar; för sjuka för att kunna jobba eller få a-kassa, för friska för sjukersättning.",
     "options": [
      "på eget grepp",
      "mellan stolarna",
      "till föga",
      "i onåd"
     ],
     "correct": 1
    },
    {
     "num": 23,
     "text": "Intressant är att man i Italien, _____ vissa renässansläkares uppfattning om tuberkulosens smittsamhet, tidigt fick en lagstiftning med bland annat _____ att rapportera sjukdomsfall, sjukhustvång för de sjuka och bränning eller _____ av den sjukes bostad, kläder och husgeråd.",
     "options": [
      "i jämförelse med – tillstånd – kremering",
      "i enlighet med – plikt – desinficering",
      "i likhet med – uppsåt – sanering",
      "i samspråk med – påbud – karantän"
     ],
     "correct": 1
    },
    {
     "num": 24,
     "text": "Matematiken användes inte i antikens Grekland på samma sätt som i modern tid för att underlätta den industriella produktionen. Nej, den var en syssla för dåtidens gentlemän och värderades för sin egen skull såsom _____ för att uppnå den eviga sanningen och såsom en måttstock, upphöjd över sinnenas värld, med vars hjälp den synliga världen kunde fördömas såsom något _____.",
     "options": [
      "ett medel – sekunda",
      "ett mål – promiskuöst",
      "en metod – essentiellt",
      "ett medium – artificiellt"
     ],
     "correct": 0
    },
    {
     "num": 25,
     "text": "Landet är inte bara en internationell smältdegel. Även de ursprungliga belgarna bildar en kulturell mångfald, så _____ att landet bör splittras, enligt somliga.",
     "options": [
      "disparat",
      "förlegad",
      "etnologisk",
      "homogen"
     ],
     "correct": 0
    },
    {
     "num": 26,
     "text": "Visst vilar en stor del av modernismen på konstnärliga grupperingar av olika slag, men det har oftast varit fråga om ett slags skyddssökande i karriärens början som de medverkande författarna gärna tar avstånd ifrån sedan _____ blivit ett faktum.",
     "options": [
      "moderniteten",
      "genombrottet",
      "tillströmningen",
      "offentligheten"
     ],
     "correct": 1
    },
    {
     "num": 27,
     "text": "Från kontrollredskap till _____ verktyg; så skulle man kunna sammanfatta bedömningstraditionens utveckling fram till idag. Lundahl har gjort en historisk studie där han tittat på hur lärarkåren har betraktat och utvecklat kunskapsbedömningen, i förhållande till statens behov av att bedöma eleverna och _____ skolan. Han menar att det är ett delikat _____ att balansera mellan hur mycket inflytande skolan ska ha, och samtidigt upprätthålla någon form av socialpolitisk rättvisa.",
     "options": [
      "metodiskt – utvärdera – privilegium",
      "didaktiskt – kontrollera – dilemma",
      "pedagogiskt – rangordna – ändamål",
      "skolastiskt – utveckla – jämviktsproblem"
     ],
     "correct": 1
    },
    {
     "num": 28,
     "text": "Råttor som inte fått oxytocin men vistats i samma bur som råttor som fått det har också, visar studier, blivit lugnare och fått _____ av stresshormoner. Denna effekt försvinner om man tillfälligt bedövar luktsinnet på de obehandlade råttorna i buren. Därför tror forskarna att överföringen av oxytocin kan ske med hjälp av _____.",
     "options": [
      "minskat behov – luften",
      "dämpad effekt – buren",
      "lägre halter – lukten",
      "sänkt andel – pälsen"
     ],
     "correct": 2
    },
    {
     "num": 29,
     "text": "Det är inte många år sedan en släktforskare var tvungen att lägga pengar och tid på att resa runt i landet och leta efter sina _____ i kyrkoarkiv och andra källor.",
     "options": [
      "stamträd",
      "ättlingar",
      "släktklenoder",
      "anfäder"
     ],
     "correct": 3
    },
    {
     "num": 30,
     "text": "Detta visar att demokrati inte är något som man självklart bara har eller ärver, utan någonting av _____ värde man hela tiden måste försvara. Det betyder att ett kontinuerligt medborgerligt engagemang, och inte bara punktinsatser vid _____ situationer, är av nöden.",
     "options": [
      "omistligt – akuta",
      "dyrbart – seriösa",
      "egenmäktigt – hotande",
      "relativt – specifika"
     ],
     "correct": 0
    }
   ]
  }
 ]
};
