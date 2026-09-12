// Högskoleprovet 22 oktober 2023, provpass 3 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "ht2023-3",
 "tillfalle": "ht2023",
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
     "word": "proper",
     "text": "<b>proper</b>",
     "options": [
      "stolt",
      "måttfull",
      "allvarlig",
      "förmögen",
      "välvårdad"
     ],
     "correct": 4
    },
    {
     "num": 2,
     "word": "galosch",
     "text": "<b>galosch</b>",
     "options": [
      "filthatt",
      "slipsnål",
      "högtidsdräkt",
      "slängkappa",
      "gummisko"
     ],
     "correct": 4
    },
    {
     "num": 3,
     "word": "dementera",
     "text": "<b>dementera</b>",
     "options": [
      "sörja",
      "förneka",
      "ljuga",
      "förbjuda",
      "störa"
     ],
     "correct": 1
    },
    {
     "num": 4,
     "word": "medaljens baksida",
     "text": "<b>medaljens baksida</b>",
     "options": [
      "orsaken",
      "undantaget",
      "motståndet",
      "nackdelen",
      "resultatet"
     ],
     "correct": 3
    },
    {
     "num": 5,
     "word": "cerebral",
     "text": "<b>cerebral</b>",
     "options": [
      "som orsakar smärta",
      "som gäller hjärnan",
      "som rör synen",
      "som beror på kosten",
      "som sker reflexmässigt"
     ],
     "correct": 1
    },
    {
     "num": 6,
     "word": "hemsökelse",
     "text": "<b>hemsökelse</b>",
     "options": [
      "utbredd plåga",
      "rastlöshet",
      "formell begäran",
      "uppståndelse",
      "personligt erbjudande"
     ],
     "correct": 0
    },
    {
     "num": 7,
     "word": "tjänlig",
     "text": "<b>tjänlig</b>",
     "options": [
      "lärorik",
      "begriplig",
      "användbar",
      "tillgänglig",
      "lättskött"
     ],
     "correct": 2
    },
    {
     "num": 8,
     "word": "vara avhängig av",
     "text": "<b>vara avhängig av</b>",
     "options": [
      "stå ut med",
      "räknas in i",
      "bero på",
      "utsättas för",
      "ha tilltro till"
     ],
     "correct": 2
    },
    {
     "num": 9,
     "word": "klander",
     "text": "<b>klander</b>",
     "options": [
      "orimligt antagande",
      "osann uppgift",
      "ogillande anmärkning",
      "omild behandling",
      "olyckligt misstag"
     ],
     "correct": 2
    },
    {
     "num": 10,
     "word": "omsorgsfull",
     "text": "<b>omsorgsfull</b>",
     "options": [
      "noggrann",
      "trevlig",
      "bekymrad",
      "tankfull",
      "inställsam"
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
     "title": "Övningskörning",
     "html": "<p>Falu kommun driver boendet Klarbo. Där bor ungdomar i åldrarna 18–21 år som kommit utan föräldrar till Sverige. På Klarbo får de allmänt boendestöd och erbjuds bland annat hjälp med att ta körkort. Personalen fungerar i dessa fall som handledare och övningskörningen sker på deras arbetstid. Boendet har också avtal med en trafikskola om startpaket där det ingår teori, riskutbildning och körlektioner.</p>\n<p>I fjol bedömde Transportstyrelsen att det i åtminstone fem till tio svenska kommuner förekom så omfattande övningskörningsverksamhet vid boenden för ensamkommande flyktingbarn att det krävde tillstånd enligt lagen om trafikskolor.</p>\n<p>Myndigheten hävdade också att de varit i kontakt med flera av boendena, som då ska ha upphört med övningskörningsverksamheten.</p>\n<p>Men det stämmer inte i samtliga fall. Efter det att Transportstyrelsen förra våren genomfört en tillsyn vid Klarbo surnade Falu kommun till. Detta sedan myndigheten i en rapport konstaterat att boendet sysslade med tillståndspliktig förarutbildningsverksamhet enligt lagen om trafikskolor. I rapporten krävde myndigheten att verksamheten utan dröjsmål skulle upphöra.</p>\n<p>Falu kommun ansåg att det var ett beslut, som gått dem emot, och överklagade. Kommunen nekade också till att verksamheten var yrkesmässig, eftersom den kunde jämföras med ideellt handledarskap så som det till exempel fungerar i en familj.</p>\n<p>Transportstyrelsen menar att rapporten inte är ett beslut utan ska uppfattas som en bedömning och därför inte kan överklagas. Förvaltningsrätten anser dock att det handlar om ett beslut, som drabbar Klarbo. Därmed ska det gå att överklaga, skriver rätten.</p>\n<p>Förvaltningsrätten i Falun tar dessutom ställning till om övningskörningsverksamheten på Klarbo är att betrakta som yrkesmässig. Även här går rätten emot Transportstyrelsen och konstaterar att lagtexten inte definierar vad ”yrkesmässig” avser, men att begreppet inom andra områden betyder att pengar byts mot tjänster. Även syftet med och omfattningen av verksamheten har betydelse, menar rätten, som skriver att personer som tidigare har dömts för att utan tillstånd bedriva yrkesmässig trafikskoleverksamhet har tagit betalt för sina tjänster. I dessa fall har syftet varit att tjäna pengar.</p>\n<p>Rätten säger också att verksamheten på Klarbo är skattefinansierad och därmed finns inget vinstintresse. Inga pengatransaktioner har skett mellan handledare och elev. Domen avslutas: ”Övningskörningen är dessutom inte istället för de lektioner som bedrivs av trafikskola, utan utöver denna verksamhet.”</p>\n<p class=\"forf\">Johan Granath</p>"
    },
    {
     "title": "Mindfulnessbaserad kognitiv terapi",
     "html": "<p>Var femte person blir svårt deprimerad vid någon tidpunkt i livet. 20–25 % av alla kvinnor drabbas och 7–12 % av alla män. Efter ett depressionstillfälle löper man 50 % risk att drabbas igen. Efter två eller flera depressioner ökar den risken till 70–80 %. Dessa fakta leder fram till insikten att behovet av återfallsförebyggande terapi är stort. Farmakologisk behandling med antidepressiva SSRI-preparat förebygger återfall, men den förebyggande effekten försvinner snabbt när medicinen tas bort. Därför rekommenderas ofta patienter att medicinera länge om tillgången till psykoterapi är dålig – och det fortsätter den att vara.</p>\n<p>Två sårbarhetsfaktorer har identifierats vid depression:</p>\n<p class=\"dikt\">• lättaktiverade negativa tankar vid nedstämdhet<br>• tendens att hantera nedstämdhet genom att älta.</p>\n<p>Grunden till MBKT (mindfulnessbaserad kognitiv terapi) ligger i frågorna om vad det är i kognitiv terapi som är förebyggande för återfall i depression och huruvida detta går att plocka ut och använda separat som återfallsprevention. Förebyggande kognitiv terapi hjälper patienten att lösgöra sig från den sorts ältande och de negativa tanke- och känslospiraler som kan leda till depression. Vad är det då som fungerar förebyggande i traditionell kognitiv psykoterapi? Följande brukar nämnas:</p>\n<p class=\"dikt\">• decentrering, att förhålla sig till tankar som bara tankar, inte sanningar, och att inte agera ut sina tankar<br>• den metakognitiva förmågan.</p>\n<p>Just decentrering är centralt i mindfulness; man kan också formulera det som att ”kliva ur autopiloten”. Mindfulness översätts oftast med begreppet medveten närvaro.</p>\n<p>Inom mindfulnesstraditionen förekommer två begrepp som kastar ljus över vad det är som den deprimerade, liksom i stort sett alla människor, kämpar med. Man tänker sig två olika mentala stilar, ”modes of mind”, i mänskligt fungerande som bör befinna sig i harmonisk balans. Dessa i grunden ändamålsenliga strategier benämns ”doing mode” och ”being mode”. ”Doing mode” är ovärderligt vid problemlösning och alldeles nödvändigt för vår överlevnad. Men i vår prestationsinriktade kultur tenderar ”doing mode” att bli alltför dominerande på bekostnad av ”being mode”. Denna överaktivering av ”doing mode” uppstår när vi upplever skillnader i hur vår livssituation faktiskt är och hur vi önskar att den vore. Negativa tankar och känslor aktiveras, liksom invanda strategier för att minska diskrepansen. När detta inte lyckas fortsätter processandet i ”doing mode” och systemet går på rundgång för att finna lösningar.</p>\n<p>Den subjektiva upplevelsen av ”doing mode” är en ihållande känsla av otillfredsställelse och frustration. Tankarna kretsar kring ”måsten” och ”borden” och att man inte duger som man är. Lösningen antas ligga i att prestera mer på ett eller annat sätt. Tillståndet karaktäriseras av ältande, liksom av en ohälsosam benägenhet att värdera egna upplevelser som bra eller dåliga.</p>\n<p>”Being mode” är på många sätt raka motsatsen och kännetecknas av direkt, omedelbart upplevande. ”Being mode” möjliggör en direkt och rik upplevelse av nuet och ett accepterande och tillåtande av det som är. Eftersom ”being mode” inte strävar efter att minska glappen mellan det som är och det som önskas, triggas inte med automatik gamla tanke- och handlingsmönster. Detta gör det lättare att tolerera och vara kvar i smärtsamma känslotillstånd, hanteringsmöjligheterna ökar. När vi under meditation är uppmärksamt närvarande befinner vi oss i ”being mode”. Den stillhet vi då kan uppleva ger en känsla av tillhörighet och trygghet som det är upp till var och en att bestämma betydelsen av.</p>\n<p>”Doing mode” och ”being mode” kan liknas vid två olika växlingslägen. Liksom bilen som kontinuerligt byter växlingslägen utifrån vad trafiksituationen kräver, behöver den som är depressiv lära sig att känna igen och byta mentala växlar. Vid potentiella återfall ligger lösningen i att känna igen och frigöra sig från ”doing mode”; mindfulnessmeditationen tillhandahåller således både en metod för att öka medvetenheten om dessa växellägen och en alternativ växel att slå över till.</p>\n<p>Man utgår från en multifaktoriell förklaringsmodell där den första depressionen ofta utlöses av negativa livshändelser, vanligen kopplade till förlust och separation. Det depressiva tillståndet karaktäriseras av ett samspel av negativa tankar, känslor, kroppsupplevelser och beteenden, vilket vidmakthåller och förstärker tillståndet. Efter tillfrisknandet kvarstår en inlärd association mellan låg sinnesstämning och negativt tänkande vilket ger en emotionell sårbarhet för nedstämdhet. Kopplingen mellan naturlig nedstämdhet och negativa tankar aktiveras lätt även när personen mår bra igen. Detta innebär att naturlig nedstämdhet ”triggar igång” negativa tankar vilket gör att depressionen återkommer. Varje depression ökar risken för ny depression. De psykologiska processer som genererar depression blir alltmer autonoma. Depressionerna blir med tiden allt mindre kopplade till yttre livshändelser – processen blir alltmer automatiserad.</p>\n<p>Jon Kabat-Zinn, verksam vid University of Massachusetts Medical School, utformade ett program kallat <i>Mindfulness-based Stress Reduction</i>. Det är ett åtta veckor långt program som hjälper patienten att förhålla sig till den stress som smärta eller sjukdom i sig genererar.</p>\n<p>Det MBKT-program som skapats och bedrivs av psykologen Eva Hedenstedt i Umeå följer Kabat-Zinns modell men är något utvidgat och förlängt. Gruppen består av 8–12 deltagare. Patienter som ingår i gruppen kan inte befinna sig i akut kris, vara suicidala, ha ett aktivt missbruk eller ha obearbetade trauman bakom sig. Patienter som har endast en enstaka depression bakom sig exkluderas.</p>\n<p>Programmets inledande sessioner handlar om att öva uppmärksamhet i nuet medan den senare delen av programmet mer handlar om acceptans. Programmet avslutas med att man utarbetar en individuell återfallsförebyggande plan.</p>\n<p>MBKT har utvärderats i en randomiserad multicenterstudie, innefattande 145 patienter med tidigare diagnos ”egentlig depression”, som mått bra de senaste tre månaderna. Patienterna följdes i 14 månader. I referensgruppen, som bestod av patienter som fått sedvanlig behandling, låg återfallsfrekvensen på 66 % medan den för dem som fått MBKT låg på 37 %. Hos patienter med fler än tre tidigare depressioner halverades återfallsfrekvensen. Skillnaderna är signifikanta. Något oväntat framgick ingen skillnad hos patienter med endast två tidigare depressioner som fått MBKT jämfört med referensgruppen. En hypotes är att patienter med endast två tidigare depressioner är upptagna av att bearbeta de negativa levnadshändelser som utlöst depression och att MBKT därför inte är vad de i första hand behöver. För de som haft tre eller flera depressioner kan man tänka sig att de återkommande depressionerna är mer automatiserade reaktioner, och då svarar MBKT väl mot patientens behov.</p>\n<p class=\"forf\">Christina Reslegård</p>"
    },
    {
     "title": "Universitetets idé",
     "html": "<p>Universitetet är den av våra samhällsinstitutioner som åtnjuter högst förtroende hos allmänheten. Idag är högskolan en av de största statliga sektorerna med över 70 000 anställda och hundratusentals studenter. Förhoppningarna som knyts till forskningens och den högre utbildningens bastioner är skyhöga. De förväntas förmedla och frambringa avancerad kunskap, vara motorer i en regional och nationell ekonomi, tjäna som kritiska instanser och forum för nytänkande. Världen över satsas det följaktligen enorma belopp varje år på universitet.</p>\n<p>Ändå tornar orons moln upp sig. Det finns starka röster, rentav i styrelser för vårt lands största lärosäten, som vill snäva in universitetens uppdrag genom att förvandla dem till lokaler för lönsamma patentmakare. Samtidigt hotar ett än mer radikalt ifrågasättande. En motrörelse, anförd av världens allra mäktigaste, underkänner rationell argumentation och själva den vetenskapliga metoden. I ett postfaktiskt tillstånd har universitetet ingen uppgift.</p>\n<p>Eller också är det just i ett sådant tillstånd som universiteten behövs som mest. Om så är fallet handlar det inte bara om att slipa argumenten för förnuft och vetenskap, utan om att formulera övertygande argument för universitetets mål och mening. Kan det vara så att universitetet alltför länge har tagit sig självt – sin uppgift, sin status, sin finansiering – för givet? Att det har varit alltför omhuldat och välförsett för att behöva rättfärdiga sin existens?</p>\n<p>Den som anfäktas av sådant tvivel kan söka stöd i den rikhaltiga akademiska reflexionslitteraturen. Här finns många insikter att hämta. Historiskt sett växte denna genre fram under det sena 1700-talet, en period när universitetet av upplysningsfilosofer, naturforskare och andra progressiva krafter dömdes ut som en sömnig och antikverad inrättning. Men i stället för att helt lägga ned den medeltida lärdomsanstalten – det var ett alternativ som faktiskt övervägdes – fanns det ett antal tänkare, huvudsakligen tyskar, som föresatte sig att omdefiniera universitetets grunduppdrag. Enligt dem skulle universitetet hädanefter inte bara vidareföra de gamla sanningarna; det skulle frambringa nya. Här föddes det moderna universitetet. Redan från början fanns det olika uppfattningar om hur det skulle utformas, och diskussionen har fortsatt sedan dess.</p>\n<p>I <i>Universitetets idé</i> har idéhistorikern Thomas Karlsohn fångat denna fortlöpande reflexion i 16 nyckeltexter från de senaste tvåhundra åren. Karlsohn står själv för urval och översättning, och har därtill skrivit en lång och kunskapsrik introduktion till universitetet och dess historia.</p>\n<p>Karlsohn har hämtat sina källtexter ur de två tongivande intellektuella traditionerna på området, den tyska och den anglosaxiska. Eftersom de nyare texterna, direkt eller indirekt, refererar till de äldre blir antologin också till ett långt samtal som spänner över epokerna. Det är fascinerande att följa hur universitetets kardinalfrågor ständigt återkommer, samtidigt som varje tid har sina speciella problem. Urvalet är alltså välmotiverat men innebär också en begränsning. Romanska röster, från José Ortega y Gasset till Jacques Derrida, får vi exempelvis inte ta del av.</p>\n<p>Antologin inleds med två urtexter från 1800-talet: Wilhelm von Humboldts ”Om den inre och yttre organisationen av de högre vetenskapliga läroanstalterna i Berlin” (1808/1810) och John Henry Newmans ”Idén om ett universitet” (1852). Humboldts memorandum har kallats för det mest diskuterade dokumentet i universitetets historia. I denna korta text satte Humboldt sina akademiska principer på pränt. Universitetet ska vara en plats där vetenskapen i dess djupaste, vidaste och renaste mening har sin hemvist, menade Humboldt. Det innebar att universitetets centrala uppgifter måste vara forskning och bildning, inte endast kunskapstradering och yrkesutbildning. Därutöver framhävde han nödvändigheten av akademisk frihet och föreningen av forskning och undervisning.</p>\n<p>Den anglosaxiska traditionen har löpt i delvis andra spår. Den har sitt ursprung i kyrkomannen Newmans idéer. Universitetet utgör, skrev han, ”en plats för undervisning om den universella kunskapen”. I likhet med Humboldt tog han parti för bildningen och studiet av klassiska texter. I motsats till den tyska traditionen saknades det dock hos honom en elaborerad tanke om forskningens roll i kunskapens dynamik. Inte heller drog Newman i härnad för den akademiska friheten. För honom var kunskapstillägnelsens fostrande och formande aspekt överordnad.</p>\n<p>Newmans betydelse består i att han lade grunden för den tradition av <i>liberal education</i> som så länge har varit ett viktigt inslag i högre utbildning i framför allt Nordamerika. Med detta förstås de breda inledande studier som föregår specialisering och yrkesinriktning och i stället har som syfte att främja intellektuell mognad och personlighetsdaning. Vad detta innebär mer precist, och hur denna bildningsmission ska kombineras med universitetets andra uppdrag, har varit föremål för omfattande diskussioner under mer än hundra år.</p>\n<p>Att det har rört sig om meningsutbyten kan två exempel illustrera. År 1930 pläderade Abraham Flexner för att universitetet skulle vara en institution med det rena sanningssökandet i högsätet. Drygt tre decennier senare, 1963, menade Berkeley-rektorn Clark Kerr att Flexners vision var överspelad och att efterkrigstidens massuniversitet bäst beskrevs som ett antal löst sammanfogade enheter med olika funktioner – ett ”multiversitet”. En annan stridsfråga har gällt själva innebörden av <i>liberal education</i>, i synnerhet under det ”culture war” som tog sin början under 1980-talet. Allan Bloom förordade fördjupade studier av en begränsad uppsättning hallstämplade västerländska klassiker. Han fick mothugg av en annan filosof, Martha Nussbaum. Hon argumenterade för att pensumet måste breddas och att en förmåga att leva sig in i det främmande var avgörande för en allsidig medborgerlig fostran.</p>\n<p>Frågan är om vi redan nu kan få en skymt av framtidens universitet. Kanske är det inte alls den amerikanska eller den europeiska utvecklingen som kommer att bli den mest angelägna att följa. Antologin <i>The transnational politics of higher education</i> öppnar ett vidare perspektiv. Ett grundbudskap i den boken är att universitet världen över har dragits in i den globala konkurrensen. Det har underlättat studentutbyte, stimulerat forskningssamarbete och drivit på den vetenskapliga produktiviteten. På samma gång har universiteten blivit kraftcentraler i en innovationsdriven ekonomi. Ämnen och kunskapsfält som inte anses kunna bidra till den ekonomiska tillväxten för en alltmer tynande tillvaro.</p>\n<p>Det finns tendenser som är än mer bekymmersamma. Några av de mest framgångsrika universiteten har kunnat frodas i djupt auktoritära stater, som Ulrika Björkstén nyligen skildrade i en serie avslöjande reportage i radions <i>Vetandets värld</i>. Nanyang Technological University i Singapore och King Abdullah University of Science and Technology i Saudiarabien är bara två exempel på lärosäten som de senaste åren har klättrat snabbt på de internationella rankningslistorna. Där triumferar den hårda upplysningens teknisk-instrumentella nytta över den mjuka upplysningens demokratiska och humanitära värden. Och det kan mycket väl vara där som det tjugoförsta århundradets idé om universitetet tar form i detta nu.</p>\n<p class=\"forf\">Johan Östling</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "I vilken av följande frågor var Transportstyrelsen och Falu kommun oense?",
     "options": [
      "Frågan om Klarbo skulle ha rätt att ta betalt för övningskörningen eller inte.",
      "Frågan hur snabbt övningskörningsverksamheten skulle upphöra.",
      "Frågan om verksamheten skulle betraktas som övningskörning eller inte.",
      "Frågan hur Transportstyrelsens rapport skulle uppfattas."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vilka kan betraktas som vinnare i den tvist som beskrivs i texten?",
     "options": [
      "Rättsinstanserna.",
      "Kommunerna.",
      "Trafikskolorna.",
      "Trafikmyndigheterna."
     ],
     "correct": 1,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vad anges i texten som förklaring till att den som har tillfrisknat från depression riskerar att drabbas igen?",
     "options": [
      "Att invanda tankebanor lätt förstärker relativt svaga känslor av nedstämdhet.",
      "Att personen fortfarande har en nedsatt förmåga att vara lösningsfokuserad.",
      "Att de automatiserade processer som reglerar känslolivet inte längre fungerar.",
      "Att personen fortfarande är upptagen av att bearbeta tidigare livshändelser."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Hur beskrivs MBKT i texten?",
     "options": [
      "Som ett sätt att göra psykoterapeutisk behandling mer tillgänglig.",
      "Som en behandling som rekommenderas när medicinering inte längre har effekt.",
      "Som en vidareutveckling av en redan etablerad behandlingsmetod.",
      "Som en effektiv metod för den som försöker ta sig igenom en djup depression."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "För den som har varit deprimerad innebär MBKT något av följande. Vad?",
     "options": [
      "Att bli uppmärksam på sitt eget mentala förhållningssätt och även kunna bryta det.",
      "Att bearbeta de yttre händelser som ursprungligen utlöste depression.",
      "Att undvika känslor av nedstämdhet genom att aktivt söka stimulans på andra områden.",
      "Att acceptera sin sjukdom och undvika växlingarna mellan ”doing mode” och ”being mode”."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "För vilken typ av patienter fungerar MBKT bäst, enligt texten?",
     "options": [
      "Patienter som redan har prövat och blivit hjälpta av metoden.",
      "Patienter med relativt få tidigare depressioner.",
      "Patienter som har fått diagnosen ”egentlig depression”.",
      "Patienter för vilka återfallsprocessen har blivit självgående."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Vad tycks vara Johan Östlings främsta syfte med att göra en historisk tillbakablick utifrån antologin <i>Universitetets idé</i>?",
     "options": [
      "Att formulera ett mer modernt uppdrag för universitetet.",
      "Att öka kunskapen om universitetets rika historia.",
      "Att kritiskt granska universitetets faktiska samhällsnytta.",
      "Att skapa perspektiv på universitetets situation i dag."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Vad stod i centrum för 1980-talets ”culture war”, av texten att döma?",
     "options": [
      "Frågan om vilka texter som ska läsas på universitetet.",
      "Frågan om den akademiska frihetens betydelse.",
      "Frågan om vilka studenter som ska läsa på universitetet.",
      "Frågan om universitetets samhällsnytta."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "I texten jämförs två olika idétraditioner. Vad av följande stämmer bäst överens med det som sägs i texten?",
     "options": [
      "Både Humboldt och Newman betonar vikten av ny kunskap.",
      "Både Humboldt och Newman betonar yrkesutbildningens betydelse.",
      "Humboldt betonar till skillnad från Newman vikten av oberoende forskning.",
      "Newman betonar till skillnad från Humboldt bildningens betydelse."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Vad av följande ser Johan Östling som ett problem vad gäller universitetets framtid?",
     "options": [
      "Att statens intresse av att finansiera verksamheten vid universiteten minskar.",
      "Att universitetens verksamhet riskerar att framför allt styras av ekonomiska hänsynstaganden.",
      "Att kontrollen och styrningen av universitetens undervisning förändras allt snabbare.",
      "Att forskningen uteblir när universiteten blir alltmer specialiserade som läroanstalter."
     ],
     "correct": 1,
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
     "text": "Syntetfibrer framställs av petroleum, det vill säga råolja, i kemiska processer som kan _____ med plasttillverkning. En stor del av klädbutikernas koftor, mössor och halsdukar tillverkas idag av syntetmaterial som akryl och polyester.",
     "options": [
      "likställas",
      "avyttras",
      "föregripas",
      "tillfogas"
     ],
     "correct": 0
    },
    {
     "num": 22,
     "text": "Ett arkitektoniskt mästerverk utses inte bara av arkitekter, utan även av folk i allmänhet. Om inte annat är turistströmmarna till historiska _____ ett bevis på det. Människor har i alla tider _____ arkitektur, som på många sätt kan sägas vara en konstform.",
     "options": [
      "byggnader – genomskådat",
      "ruiner – ringaktat",
      "monument – uppskattat",
      "evenemang – betraktat"
     ],
     "correct": 2
    },
    {
     "num": 23,
     "text": "Redan när vi föds är vi kognitivt disponerade att se _____ och kategorier, vilket styr hur vi värderar _____. När vi lär oss nya saker försöker vi foga samman nya fakta med vår _____ av världen, vilket leder till att vi gradvis omformar vår världsbild.",
     "options": [
      "detaljer – varandra – minnesbild",
      "nyanser – samhället – bearbetning",
      "skillnader – berättelser – vision",
      "sammanhang – information – förförståelse"
     ],
     "correct": 3
    },
    {
     "num": 24,
     "text": "En viktig princip i GATT (Allmänna tull- och handelsavtalet) är reciprocitet, alltså att medlemsländerna _____ förbinder sig att avveckla handelshinder.",
     "options": [
      "tveklöst",
      "ömsesidigt",
      "eftertryckligt",
      "självständigt"
     ],
     "correct": 1
    },
    {
     "num": 25,
     "text": "Prästen, som först ser förbluffad ut, sänker sedan hakan och _____ en djupsinnig min. ”Jag är inte så _____ i Dostojevskij”, säger han. ”Vill ni förklara er närmare?”",
     "options": [
      "antar – bevandrad",
      "tillstår – rutinerad",
      "invänder – införlivad",
      "uppger – förbunden"
     ],
     "correct": 0
    },
    {
     "num": 26,
     "text": "Till skillnad från äldre tiders hospital var 1700-talets lasarett inte bara inriktade på _____ vård, utan här förväntades även en viss förbättring av patienternas tillstånd eller åtminstone någon lindring av deras lidande.",
     "options": [
      "livsduglig",
      "livshotande",
      "livsbejakande",
      "livsuppehållande"
     ],
     "correct": 3
    },
    {
     "num": 27,
     "text": "Att döma av enkätsvaren upplevde de flesta av hobbyodlarna att den direkta ekonomiska förlusten som följde av de invasiva spanska skogssniglarnas _____ trots allt var förhållandevis _____.",
     "options": [
      "nedslag – väsentlig",
      "frosseri – måttlig",
      "girighet – stagnerad",
      "tillbakagång – överdriven"
     ],
     "correct": 1
    },
    {
     "num": 28,
     "text": "Med tanke på den långa tid som har _____ sedan Norrmalmstorgsdramat, och det faktum att såväl rånarna som gisslan och polisen _____ under stor psykisk press, är det närmast omöjligt att _____ vad som egentligen skedde i varje enskild situation.",
     "options": [
      "utspelats – uppehöll sig – avgöra",
      "avlagts – agerade – fastställa",
      "förflutit – befann sig – utröna",
      "passerat – utsattes – försäkra"
     ],
     "correct": 2
    },
    {
     "num": 29,
     "text": "Funktionärerna ledde bort de svettiga, utmattade hästarna som nyss hade tävlat, samtidigt som nya _____ samlades inför det _____ loppet.",
     "options": [
      "ekipage – förestående",
      "ensilage – tillträdande",
      "emballage – innevarande",
      "entourage – uppbyggande"
     ],
     "correct": 0
    },
    {
     "num": 30,
     "text": "I avsaknad av riktlinjer hade folkskolans och läroverkens lärare varit relativt _____ i sin bedömningspraktik, som till stor del byggde på läxförhör och examinationer utformade av lärarna själva.",
     "options": [
      "autonoma",
      "vårdslösa",
      "monotona",
      "frisinnade"
     ],
     "correct": 0
    }
   ]
  }
 ]
};
