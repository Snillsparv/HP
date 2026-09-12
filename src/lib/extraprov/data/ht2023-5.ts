// Högskoleprovet 22 oktober 2023, provpass 5 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "ht2023-5",
 "tillfalle": "ht2023",
 "passNr": 5,
 "kind": "verbal",
 "name": "Provpass 5 (verbalt)",
 "timeMinutes": 33,
 "extendedMinutes": 48,
 "normering": [
  [
   0,
   0.0
  ],
  [
   19,
   0.1
  ],
  [
   22,
   0.2
  ],
  [
   24,
   0.3
  ],
  [
   28,
   0.4
  ],
  [
   31,
   0.5
  ],
  [
   35,
   0.6
  ],
  [
   38,
   0.7
  ],
  [
   42,
   0.8
  ],
  [
   45,
   0.9
  ],
  [
   49,
   1.0
  ],
  [
   53,
   1.1
  ],
  [
   56,
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
     "word": "löpa amok",
     "text": "<b>löpa amok</b>",
     "options": [
      "gå vilse",
      "få raserianfall",
      "vara försenad",
      "bli överlycklig",
      "ramla omkull"
     ],
     "correct": 1
    },
    {
     "num": 2,
     "word": "påtaglig",
     "text": "<b>påtaglig</b>",
     "options": [
      "bekant",
      "särskild",
      "passande",
      "hastig",
      "märkbar"
     ],
     "correct": 4
    },
    {
     "num": 3,
     "word": "uppsåtligen",
     "text": "<b>uppsåtligen</b>",
     "options": [
      "med avsikt",
      "av välvilja",
      "i förtroende",
      "på rätt sätt",
      "utan tvekan"
     ],
     "correct": 0
    },
    {
     "num": 4,
     "word": "biopsi",
     "text": "<b>biopsi</b>",
     "options": [
      "blodgivning",
      "ärrbildning",
      "röntgenbild",
      "vävnadsprov",
      "transplantation"
     ],
     "correct": 3
    },
    {
     "num": 5,
     "word": "detronisera",
     "text": "<b>detronisera</b>",
     "options": [
      "utmana",
      "avsätta",
      "förakta",
      "avböja",
      "utvisa"
     ],
     "correct": 1
    },
    {
     "num": 6,
     "word": "fruktlös",
     "text": "<b>fruktlös</b>",
     "options": [
      "mager",
      "utan innehåll",
      "som inte ger resultat",
      "utan anledning",
      "ofullständig"
     ],
     "correct": 2
    },
    {
     "num": 7,
     "word": "kvintessensen",
     "text": "<b>kvintessensen</b>",
     "options": [
      "medelvägen",
      "det synliga",
      "den större delen",
      "det väsentliga",
      "avbildningen"
     ],
     "correct": 3
    },
    {
     "num": 8,
     "word": "enveten",
     "text": "<b>enveten</b>",
     "options": [
      "exakt",
      "erfaren",
      "envis",
      "egoistisk",
      "enkelriktad"
     ],
     "correct": 2
    },
    {
     "num": 9,
     "word": "ombesörja",
     "text": "<b>ombesörja</b>",
     "options": [
      "ångra",
      "tillåta",
      "tvivla",
      "upprepa",
      "ordna"
     ],
     "correct": 4
    },
    {
     "num": 10,
     "word": "ingivelse",
     "text": "<b>ingivelse</b>",
     "options": [
      "oväntad gåva",
      "plötslig impuls",
      "tillfällig lättnad",
      "snabb förändring",
      "positivt besked"
     ],
     "correct": 1
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
     "title": "Tre sekunders minne",
     "html": "<p>Den 12 juni på eftermiddagen avled guldfisken Gunnar efter ett förhållandevis långt och enformigt liv.</p>\n<p>Ensam i en liten vattenfylld glaskula, ibland var det mörkt utanför, ibland ljust, ibland kom några matkorn nedsinglande.* Vilket ömkligt liv!</p>\n<p>Det hände att jag blev stående framför glaskulan och tittade in i Gunnars uttryckslösa ögon, innan han gjorde en snabb sväng för att se om något hunnit hända på andra sidan. Vilken meningslöshet!</p>\n<p>Men Matti, Gunnars andlige far, försäkrade att Gunnar inte led eftersom han, liksom alla guldfiskar, endast hade tre sekunders minne.</p>\n<p>Tre sekunder! Hur avundsvärd var han inte! Ständigt nya upptäckter, nytt mörker och nytt ljus! Vilken överraskning när de tre matkornen plötsligt kom neddalande!</p>\n<p>Nu var Gunnar emellertid död och låg och flöt upp och ned i glaskulan.</p>\n<p>Matti lät förstämd i telefonen. Han hade en liten kista på limning i källaren.</p>\n<p>Det han nu tyckte kändes mest plågsamt var tanken på Gunnars torftiga liv, trots tresekundersminnet. Hur han varje morgon med något slags glad förväntan simmat emot honom, när han närmade sig med de tre kornen.</p>\n<p>Gunnar väntade på honom! Han hade bara honom. Nu var Gunnar död och i det närmaste begraven.</p>\n<p>Det kändes mycket vemodigt. Han hade förlorat en vän. Farväl Gunnar!</p>\n<p class=\"dikt\"><i>I minnet Du lever<br>Du finns alltid kvar<br>I minnet vi ser Dig<br>Precis som Du var</i></p>\n<p>* Högst tre om dagen, annars åt han ihjäl sig.</p>\n<p class=\"forf\">Barbro Lindgren</p>"
    },
    {
     "title": "Flickboken och yrkeslivet",
     "html": "<p>Vuxna har länge använt litteratur för att roa och inspirera, bilda eller avskräcka den yngre generationen. Skildringar av yrkesdrömmar och faktiskt förvärvsarbete har därför utgjort en självklar del av ungdomslitteraturen. I studien <i>Till arbetet! Yrkesdrömmar och arbetsliv i flickboken 1920–65</i> (2017) undersöker Birgitta Theander hur dessa drömmar och arbeten gestaltas i flickboken.</p>\n<p>Theander disputerade 2006 på en kvantitativ motivstudie om flickboken i Sverige 1945–1965. Syftet med avhandlingen var att visa på genrens bredd och bestrida föreställningar om flickboken som insmickrande och misogyn. Avhandlingen visade att flickböckerna var fyllda av aktiva och ofta också yrkesarbetande subjekt. I <i>Till arbetet!</i> har Theander återvänt till flickbokens förvärvsarbetande unga kvinnor i syfte att visa att intresset för yrkesliv var typiskt även före efterkrigstiden.</p>\n<p><i>Till arbetet!</i> består av två delar. Den första utgör två tredjedelar av studien och är tematiskt upplagd. Nedslag görs i många olika yrken; här finns allt från sjuksköterskor och lärarinnor till missionärer och keramiker. Theander visar ofta på intressanta utvecklingslinjer i hur gestaltningen av olika yrken förändras, till exempel hur barnavårdsskildringar går från tyskinspirerade kindergarten och barnkrubbor till barnkolonier, daghem och lekskolor. Särskilt tankeväckande i detta sammanhang är att se hur nära sin samtid flickboken ständigt befinner sig. Protagonisterna går med i försvarsorganisationen Blå stjärnan på 1940-talet, blir fotomodeller på 1950-talet för att sedan bli alltmer villrådiga och håglösa på 1960-talet. I den andra delen söker Theander ge en mer övergripande bild av flickbokens yrkesskildringar genom att sammanfatta sina iakttagelser. Hon redogör för yrkesromanen som genre och diskuterar vilka personliga egenskaper som premierats i arbetsskildringar från olika tider. Hon närmar sig även en definition av arbetets funktion i flickbokens uppväxtskildringar. Efter den verkliga kavalkad av yrken som den första delen presenterat är det bra att få alla de spridda iakttagelserna samlade i ett större sammanhang. De fördelar som finns med kvantitativa studier blir tydliga. Yttranden som med ett mindre undersökningsmaterial hade riskerat att framstå som generaliseringar blir här sanningar om genren.</p>\n<p>De två delarna kompletterar varandra på ett bra sätt. För den student eller forskare som vill fördjupa sig i ett specifikt yrkesmotiv eller flickboksförfattarskap är den första delen en guldgruva. För den som är på jakt efter referenser utgör den andra delen en bra källa. Genom att läsa <i>Till arbetet!</i> kan man bespara sig många timmars letande i bibliotekens magasin. Jag kan inte annat än imponeras av det arbete som ligger bakom att hitta alla dessa arbetsskildringar. Jag tänker mig att de flesta humanister som idag använder sig av en kvantitativ metod arbetar med digitaliserat material, vilket gör det betydligt enklare att hitta specifika motiv.</p>\n<p><i>Till arbetet!</i> innehåller en förteckning över primärmaterialet, vilket är till god hjälp under läsningen, särskilt om man vill veta vilka böcker som är översatta. Ibland saknas nämligen uppgift i den löpande texten om huruvida det analyserade verket är en översättning eller ej, och när originalupplagan i så fall gavs ut. Många gånger har tio–tjugo år passerat mellan originalet och den svenska utgåvan. Eftersom ett delsyfte i <i>Till arbetet!</i> är att genom flickboken undersöka ”flickors och kvinnors tankegångar och ideal” under olika decennier, hade det emellertid varit klokare att enbart diskutera svenska originalutgåvor. Till exempel framhåller Theander att ett moderlighetsideal framträder i flickboken under 1930-talet och att antalet flickböcker med protagonister som är förtjusta i barn således ökar under detta decennium. Ökningen förklaras med hänvisning till samtida antimoderna strömningar. Ingenstans i den löpande texten står det emellertid hur många av dessa flickböcker som översatts från andra språk samt när originalutgåvan i så fall publicerats.</p>\n<p>Theanders undersökning är trevligt skriven och tonen sympatisk, men den dras likväl med problem. Samtidigt som Theander säger sig vilja slå hål på äldre vanföreställningar om flickboken, reproducerar hon fördomar om andra genrer. Till exempel skriver hon: ”i pojkböckerna tycks våldsamma äventyr ha varit regel och ha uppfyllt böckerna till brädden”. Den bilden av pojkboken är hämtad från samma forskning som beskrivit flickbokens flickor som passiva, det vill säga den forskning som Theander polemiserar mot. Mer samtida pojkboksforskning har visat att litteratur för pojkar rymmer såväl äventyr som vardag. Yrkesskildringar och yrkesdrömmar är en viktig del också av den litteraturens motivsfär.</p>\n<p>Vidare generaliserar Theander om vuxenlitteraturen. Hon skriver: ”Rent allmänt tycks vuxenromaner inte ha fokuserat på kvinnors yrkesarbete.” Sedan står det: ”Arbete förekom, men skildrades sällan i detalj.” Jag frågar mig om det inte snarare är så att kvinnors arbete stått i fokus i en stor del av undersökningsperiodens skönlitteratur, inte minst den som skrivits av kvinnor? Västvärldens 1900-talsromaner är fyllda av kvinnliga författare, journalister och konstnärer eller för den delen fabriksarbeterskor, kontorsflickor och prostituerade. Vi hittar uttömmande skildringar av kvinnors arbete i klassiker av författare som Elin Wägner, Moa Martinson och Birgitta Trotzig. Inom mer populärkulturell litteratur utvecklas verk om kontorsflickor mer eller mindre till en egen genre kring andra världskriget. Nu ingår ju varken pojkböcker eller vuxenromaner i studiens primärmaterial, men det finns en genomgående tendens att plocka slutsatser eller citat kring specifika ämnen från tidigare forskning och använda dem för att säga något om litteraturens allmänna tillstånd.</p>\n<p>I <i>Till arbetet!</i> finns även en benägenhet att blanda äpplen och päron. Theander frågar sig till exempel hur den yrkesarbetande unga kvinnan gestaltades i veckopressen. Därefter hänvisar hon till en studie av 1950-talets <i>Året Runt</i> och jämför tidskriften med flickboken. Det visar sig att <i>Året Runt</i>, till skillnad från flickboken, främst skriver om hemmafruar. Samma år som 18 av 59 flickböcker har huvudpersoner som förvärvsarbetar pryds enbart ett av 52 nummer av tidskriften av en yrkesarbetande kvinna. Theander använder denna iakttagelse som argument för flickbokens betydelse: ”Man undrar varifrån de unga flickorna skulle fått sin inspiration att satsa på yrkesarbete om inte flickböckerna hade funnits”.</p>\n<p>Eftersom <i>Året Runt</i> var en familjetidning riktad till just hemmafruar är det emellertid föga förvånande att dessa står i fokus. Ser man till samtida tidskrifter riktade till en annan publik blir bilden en helt annan. Jag har själv undersökt två årgångar av <i>Damernas värld</i> från sent 1940-tal och då förvånats över hur progressivt magasinet var. Artiklarna om yrkesarbetande kvinnor var många och där fanns även en pågående diskussion om mannens roll i hemmet. Innehållet låg överlag nära flickbokens motivsfär så som den beskrivs av Theander.</p>\n<p>Bristerna till trots vill jag avslutningsvis återigen poängtera att <i>Till arbetet!</i> utgör ett värdefullt bidrag till flickboksforskningen. Studien är rik på uppslag och det är svårt att inte ryckas med av Theanders stora entusiasm inför sitt material.</p>\n<p class=\"forf\">Lydia Wistisen</p>\n<h4>misogyn = kvinnofientlig, kvinnohatande<br>protagonist = huvudperson</h4>"
    },
    {
     "title": "Krig och fred i myrornas värld",
     "html": "<p>De flesta stora myrstackar är resultatet av ett grovt bedrägeri. Allting börjar med att en ung, befruktad skogsmyredrottning ger sig ut på jakt efter ett eget hem. Hon kan inte själv bygga en stack för sig och sina framtida larver. I stället smyger hon diskret runt vid ett bo som tillhör en annan art, av undersläktet slavmyror. När hon stöter på en slavmyra uppstår handgemäng, och eftersom drottningen är mer än dubbelt så stor brottar hon lätt ner slavmyran. Varje gång hon möter en myra av den andra arten tar hon upp lite av dess lukt. Till sist luktar hon så mycket slavmyra att hon kan ta sig in i deras bo. Där lyckas hon manipulera arbetarna att tro att hon är en av dem och får dem att börja tjäna henne. Samtidigt skriver slavmyrorna under sin egen dödsdom, eftersom stacken snart fylls upp av skogsmyrelarver. Slavmyrorna trängs sakta men säkert ut ur sitt eget bo.</p>\n<p>Skogsmyredrottningens döttrar bygger vidare på stacken och skapar sin egen gemensamma stackdoft. Om en myra som doftar annorlunda förirrar sig hit blir den raskt avrättad. Stackens invånare upprättar ett revir som de försvarar stenhårt mot andra stackar.</p>\n<p>Men vissa myror löser saken på ett mer diplomatiskt sätt. I schweiziska Jurabergen har forskare upptäckt att miljontals myror har gått samman i en väldig union, en superkoloni, och behandlar varandra som systrar fastän de är helt obesläktade. När arbetare från två stackar möts börjar de inte slåss utan stryker varandra vänligt med antennerna, och den ena matar gärna den andra. Här behöver en ny drottning inte mygla sig in i ett slavmyrebo, för hon är välkommen att flytta in i vilken stack som helst i superkolonin. En enda stack kan hysa över tusen drottningar.</p>\n<p>Att samarbeta fredligt över släktgränserna utan omedelbar egen vinning brukar annars lyftas fram som något unikt för människan. Att myror gör det ifrågasätter evolutionens grundlagar − att var och en bara kämpar för att föra sina egna gener vidare.</p>\n<p>Den schweiziska arten som bildar superkolonier, hårig skogsmyra, finns även i Finland. Där finns dessutom en lång myrforskartradition. På forskningsstationen i Tvärminne, tio mil väster om Helsingfors, har samma myrstackar studerats sedan 1960-talet.</p>\n<p>I en stor labbsal arbetar ett myller av myrforskare sida vid sida. På hyllor längs väggarna står fyrkantiga plastlådor, alla fulla med myror som ilar hit och dit. Jason Rissanen sitter djupt koncentrerad vid en bondbönsplanta full av ljusgröna bladlöss. Längs stjälken klättrar också små svarta myror som mjölkar bladlössen på växtsaft genom att kittla dem. Det som inte syns är att plantan försvarar sig mot bladlössen med hjälp av gifter. Jason Rissanen förklarar att myrorna verkar använda de här gifterna som medicin när de själva drabbas av infektioner. Det skulle i så fall inte vara första gången som så sker. Förra året upptäckte schweiziska myrforskare att en blandning av kåda och myrsyra som myrorna framställer är ett effektivt medel för att hålla ägg och puppor rena från svampinfektioner.</p>\n<p>Labbet ligger granne med verkligheten. Huvudforskare Jonna Kulmuni tar oss med ut i skogen utanför stationen, till stackarna hon följer som tredje generationens myrforskare. Vi behöver inte gå länge förrän vi står framför den första superkolonin. Den liknar en vanlig, lite knölig myrstack, men den är en del av ett unionsbygge, förklarar Jonna Kulmuni.</p>\n<p>− Om man hittar myrstackar inom 100 meters radie från varandra kan man vara ganska säker på att de ingår i en superkoloni. Annars skulle de aldrig tolerera att ha varandra så nära. Här har vi dessutom kollat dem genetiskt, så vi vet att de hör ihop.</p>\n<p>Jonna Kulmuni visar hur myrstigarna går från stack till stack. Myrkollektivet rör sig mellan stackarna som mellan olika rum i sitt hem. En nykläckt drottning behöver inte flyga i väg för att para sig, utan kan stanna kvar i stacken och hitta en hanne. Hon har goda chanser att hitta någon som inte är hennes egen bror, eftersom det finns många drottningar i stacken. Men varför tillåter den första drottningen att det kommer fler? Hos många myrarter dödas den nya drottningen, för på så sätt får urdrottningen större chanser att sprida sina gener. Hur kan de här skogsmyrorna ha hittat en mer fredlig väg? Är de på väg mot ett altruistiskt samhällsbygge?</p>\n<p>De schweiziska myrforskarna har ingen romantisk bild av det fredliga unionsbygget.</p>\n<p>− Vi tror inte att systemet är stabilt. Kanske varar de här unionerna i 100 år, kanske i 100 000, ingen vet, men troligen inte i miljoner år. Om ett beteende inte hjälper dig eller dina nära släktingar så överlever det inte i längden. Det gäller för alla organismer, säger professor Laurent Keller vid universitetet i Lausanne på telefon.</p>\n<p>Superkolonimyrorna riskerar dessutom inavelsproblem. Det har Jonna Kulmuni och hennes kolleger upptäckt i genetiska studier. Ett friare kärleksliv med många drottningar gör att inte alla i stacken är systrar, men de flesta är ändå släkt, eftersom drottningarna parar sig hemmavid i stället för att flyga i väg och träffa hannar från andra stackar. Detta till skillnad från myrstackar med endast en drottning, där alla är avkommor till samma drottning och den främmande hanne som hon träffade.</p>\n<p>Men forskarna har också sett att myrorna kanske håller på att lösa detta på ett kreativt sätt: genom att para sig med andra arter. Problemen med ett fritt kärleksliv skulle i så fall lösas med ett ännu mer lössläppt kärleksliv – över artgränserna.</p>\n<p>Alla myror i stacken framför oss är hybrider mellan nordskogsmyra och kal skogsmyra, berättar Jonna Kulmuni. Detta ställer begreppet ”art” på ända. I skolan fick man lära sig att om en häst och en åsna parar sig blir deras avkomma en mulåsna som är steril, och därför är hästen och åsnan olika arter. Men myrhybriderna är fertila. De senaste decennierna har forskare kunnat titta på många arters arvsmassa i detalj, och plötsligt blir det tydligt att korsningar över artgränserna är mycket vanligare än man tidigare trott. Ibland leder det till sterila avkommor men inte alltid. En hybrid kan också vara bättre anpassad till sin miljö än föräldraarterna och ge upphov till en ny art. Eller så kan hybriden para sig med föräldraarten och komma med en injektion av nya gener. Ungefär som när neandertalgener blandades in i våra <i>Homo sapiens</i>-gener.</p>\n<p>Men vad blir i så fall kvar av begreppet art, om man inte längre kan luta sig mot den gamla skolboksregeln?</p>\n<p>Svaret är nog att gränserna mellan olika arter har blivit mer och mer otydliga sedan Linnés tid, i takt med att vår kunskap har ökat. Evolution och artbildning är ständigt pågående processer.</p>\n<p>Hybridiseringen skulle alltså kunna vara en framgångsrik strategi i längden, eftersom myrorna på så sätt kan få in ny arvsmassa. Att hybridmyrorna framför oss är så väl kartlagda beror förstås på att de bor granne med en forskningsstation, men även på många andra platser som Jonna och hennes kolleger studerat har det visat sig att hybrider är mycket vanliga. Det nya är att vi kan se det i detalj.</p>\n<p>− Vi kan inte veta om det här är början till slutet för en art, födelsen av en ny eller bara lite genetiskt inflöde. Men det är väldigt spännande att se artbildning medan den pågår, säger Jonna Kulmuni.</p>\n<p class=\"forf\">Anna Froster</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Utifrån resonemanget om Gunnars tillvaro verkar det troligt att textens jag vill undvika något av följande. Vad?",
     "options": [
      "Att leva ett liv i glömska.",
      "Att leva ett liv utan krav.",
      "Att livet ska kännas oberäkneligt.",
      "Att livet ska bli förutsägbart."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vilken var den främsta orsaken till Mattis förstämdhet, enligt texten?",
     "options": [
      "Han insåg för sent att han i Gunnar hade förlorat sin bästa vän.",
      "Han förstod hur olycklig Gunnar faktiskt hade varit.",
      "Han kände att han inte hade uppskattat Gunnars vänskap tillräckligt mycket.",
      "Han tänkte på hur få glädjeämnen Gunnar måste ha haft i sitt liv."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vilken ambition har Birgitta Theander haft med sina studier av flickböcker, enligt texten?",
     "options": [
      "Att undersöka hur verklighetstroget kvinnors situation skildrades i böckerna.",
      "Att visa hur böckerna förändrade bilden av yrkesarbetande kvinnor.",
      "Att analysera varför kvinnor ofta tilldelades en viss typ av yrken i böckerna.",
      "Att ge en mer nyanserad bild av hur kvinnor framställdes i böckerna."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vad av följande lyfter recensenten fram som värdefullt med Birgitta Theanders studie?",
     "options": [
      "Att hon har en tydlig utgångspunkt för sina resonemang.",
      "Att hon sammanställer ett omfattande material som enbart finns i fysisk form.",
      "Att hon så ingående presenterar olika yrken.",
      "Att hon skildrar flickböckernas samtid genom hänvisningar till andra genrer."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Varför hade det, enligt recensenten, varit bättre om översatta verk inte hade ingått i studien?",
     "options": [
      "Man hade sluppit undra om texterna verkligen representerar den studerade tidsperioden.",
      "Man hade fått ett värdefullt samband mellan studiens register och den löpande texten.",
      "Man hade tydligare kunnat se på vilket sätt förhållandena i Sverige skilde sig från de i utlandet.",
      "Man hade kunnat avgöra vilka texter som egentligen ingår i studien."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Vad anser recensenten om Birgitta Theanders användning av tidningen <i>Året runt</i>?",
     "options": [
      "Att tidningens innehåll bekräftar Theanders tes att flickboken var en spegel av sin samtid.",
      "Att Theanders fokus på hemmafrun gör att tidningens mer radikala ämnen glöms bort.",
      "Att Theander felaktigt behandlar tidningen som om dess innehåll var representativt för tidsperioden.",
      "Att Theanders fokus på omslagen gör att tidningens egentliga inriktning hamnar i bakgrunden."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Vilket observerat beteende bland myror framställs i texten som mest uppseendeväckande?",
     "options": [
      "Beteendet att fördela tillgängliga resurser på ett rättvist sätt.",
      "Beteendet att anpassa sig till en stor social gemenskap.",
      "Beteendet att agera osjälviskt mot andra individer än släktingar.",
      "Beteendet att para sig med en individ från en annan stack."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Vad konstaterar texten om det faktum att nordskogsmyra och kal skogsmyra kan få fertil avkomma?",
     "options": [
      "Det strider mot det traditionella sättet att definiera begreppet art.",
      "Det signalerar att artrikedomen förmodligen är kraftigt underskattad.",
      "Det bekräftar att evolutionen ständigt ger upphov till mer komplexa livsformer.",
      "Det är ett exempel på något som tycks bli allt vanligare i djurriket."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Vad av följande tvivlar de schweiziska forskarna på, enligt texten?",
     "options": [
      "Att superkolonier förekommer bland andra myrarter än hårig skogsmyra.",
      "Att superkolonier är en bra strategi för att säkra de egna genernas överlevnad.",
      "Att superkolonier är ett ständigt återkommande evolutionärt fenomen.",
      "Att superkolonierna i Schweiz och Finland är unika fenomen."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Vad säger Jonna Kulmuni om de superkolonimyror som hon visar för textförfattaren?",
     "options": [
      "Att de är på väg att utvecklas till en ny art.",
      "Att de tillhör en art som är på väg mot sin egen undergång.",
      "Att deras genetiska förändring saknar betydelse på lång sikt.",
      "Att de är i början av en oförutsägbar evolutionär process."
     ],
     "correct": 3,
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
     "text": "Handläggaren är noga med att poängtera att offentlig upphandling tar tid. I bästa fall, om ingen _____ valet av leverantör, kan de första leveranserna ske i november–december, bedömer han.",
     "options": [
      "överklagar",
      "underblåser",
      "överväger",
      "undervärderar"
     ],
     "correct": 0
    },
    {
     "num": 22,
     "text": "Inom populärkulturen avbildas vikingar inte sällan med hornprydda hjälmar, trots att vi idag vet att hornen är en _____. Varken skriftliga källor eller arkeologiska fynd från denna period i Skandinaviens historia _____ om några krigare med stora horn på sina hjälmar.",
     "options": [
      "sägen – intygar",
      "fabel – upplyser",
      "legend – antyder",
      "myt – vittnar"
     ],
     "correct": 3
    },
    {
     "num": 23,
     "text": "Länge fanns det inom forskningen en _____ uppfattning om att vuxna skulle ha svårt att lära sig nya språk. Att snabbt få grepp om ett främmande språk troddes främst vara _____ barn. Men senare forskning har visat att det inte finns några _____ hinder för vuxna att lära sig nya språk.",
     "options": [
      "godtycklig – undantaget – praktiska",
      "samlad – omfattat – genetiska",
      "utbredd – förbehållet – kognitiva",
      "grundad – inbegripet – pedagogiska"
     ],
     "correct": 2
    },
    {
     "num": 24,
     "text": "Orsaken till astmaanfall är förträngning i bronkerna. Det är främst flödet av utandningsluft som försvåras. Om det inte finns någon annan sjuklig process i luftrören eller lungorna är förträngningen fullt _____, det vill säga återgång sker till normal funktion.",
     "options": [
      "resistent",
      "reaktionär",
      "reversibel",
      "reformerad"
     ],
     "correct": 2
    },
    {
     "num": 25,
     "text": "Under sensommaren och hösten uppfattar svamparna att vintern är _____, och de börjar utveckla fruktkroppar. På fruktkropparna bildas sporer, som vi kan tänka på som svamparnas _____.",
     "options": [
      "i beredskap – blad",
      "i antågande – frön",
      "på fallrepet – nerver",
      "på upphällningen – rötter"
     ],
     "correct": 1
    },
    {
     "num": 26,
     "text": "Handarbetstrenden märks tydligt även i bokhandeln och på biblioteken, där hyllorna _____ av böcker om stickning, virkning och sömnad.",
     "options": [
      "bågnar",
      "segnar",
      "raglar",
      "stupar"
     ],
     "correct": 0
    },
    {
     "num": 27,
     "text": "På 1600-talet var kärlek och erotik viktiga inslag på teaterscenerna. Musikdramatikens _____, det vill säga texterna, kunde vara riktigt _____, rentav vulgära.",
     "options": [
      "oktaver – svårsmälta",
      "libretton – grovkorniga",
      "ballader – högljudda",
      "intermezzon – finslipade"
     ],
     "correct": 1
    },
    {
     "num": 28,
     "text": "I debatten ställs ofta lärarcentrerad undervisning, allmänt benämnt _____, mot elevcentrerad undervisning där elever ges ett större eget ansvar för sitt lärande. Men lärar- och elevcentrering behöver inte betraktas som två _____ som lärare måste välja mellan. Undervisning av hög kvalitet kännetecknas snarare av lärarens väl _____ blandning av de två perspektiven.",
     "options": [
      "klassundervisning – kriterier – uttryckta",
      "stödundervisning – moment – medvetna",
      "ämnesundervisning – paralleller – beprövade",
      "katederundervisning – ytterligheter – avvägda"
     ],
     "correct": 3
    },
    {
     "num": 29,
     "text": "Materialet <i>grafen</i> består av kolatomer i ett tunt lager. Det är 200 gånger starkare än stål och kan tänjas ut kraftigt utan _____ deformation.",
     "options": [
      "framsynt",
      "bristfällig",
      "kvarstående",
      "försumbar"
     ],
     "correct": 2
    },
    {
     "num": 30,
     "text": "I sitt slutgiltiga testamente från 1895 var Alfred Nobel både mer _____ och mer tydlig än i tidigare versioner: han var obestämd i fråga om vem som skulle förvalta den stora fonden, men desto mer _____ när det gällde vad som skulle belönas.",
     "options": [
      "specifik – generell",
      "utförlig – kortfattad",
      "angelägen – tveksam",
      "diffus – explicit"
     ],
     "correct": 3
    }
   ]
  }
 ]
};
