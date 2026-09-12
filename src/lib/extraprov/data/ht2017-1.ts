// Högskoleprovet 21 oktober 2017, provpass 1 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "ht2017-1",
 "tillfalle": "ht2017",
 "passNr": 1,
 "kind": "verbal",
 "name": "Provpass 1 (verbalt)",
 "timeMinutes": 33,
 "extendedMinutes": 48,
 "normering": [
  [
   0,
   0.0
  ],
  [
   21,
   0.1
  ],
  [
   24,
   0.2
  ],
  [
   26,
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
   34,
   0.6
  ],
  [
   38,
   0.7
  ],
  [
   41,
   0.8
  ],
  [
   44,
   0.9
  ],
  [
   47,
   1.0
  ],
  [
   51,
   1.1
  ],
  [
   54,
   1.2
  ],
  [
   57,
   1.3
  ],
  [
   60,
   1.4
  ],
  [
   63,
   1.5
  ],
  [
   66,
   1.6
  ],
  [
   69,
   1.7
  ],
  [
   72,
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
     "word": "klimakterium",
     "text": "<b>klimakterium</b>",
     "options": [
      "befruktning",
      "höjdpunkt",
      "övergångsålder",
      "miljöpåverkan",
      "bakterieodling"
     ],
     "correct": 2
    },
    {
     "num": 2,
     "word": "insistera",
     "text": "<b>insistera</b>",
     "options": [
      "envisas",
      "opponera sig",
      "överbevisa",
      "låta påskina",
      "antyda"
     ],
     "correct": 0
    },
    {
     "num": 3,
     "word": "lektor",
     "text": "<b>lektor</b>",
     "options": [
      "medeltida musikant",
      "mått på acceleration",
      "pensionerad militär",
      "del av koordinatsystem",
      "lärare vid högskola"
     ],
     "correct": 4
    },
    {
     "num": 4,
     "word": "illustrativ",
     "text": "<b>illustrativ</b>",
     "options": [
      "idealisk",
      "händelserik",
      "skenbar",
      "uppmärksammad",
      "belysande"
     ],
     "correct": 4
    },
    {
     "num": 5,
     "word": "sömsmån",
     "text": "<b>sömsmån</b>",
     "options": [
      "osynlig söm",
      "mönsterpassning",
      "tygkant utanför söm",
      "löst sydda stygn",
      "valbar söm på symaskin"
     ],
     "correct": 2
    },
    {
     "num": 6,
     "word": "förlösa",
     "text": "<b>förlösa</b>",
     "options": [
      "reda ut",
      "befria",
      "skilja åt",
      "avhjälpa",
      "mjuka upp"
     ],
     "correct": 1
    },
    {
     "num": 7,
     "word": "oförrätt",
     "text": "<b>oförrätt</b>",
     "options": [
      "olycksfall",
      "kränkning",
      "osanning",
      "bestraffning",
      "missbedömning"
     ],
     "correct": 1
    },
    {
     "num": 8,
     "word": "tongivande",
     "text": "<b>tongivande</b>",
     "options": [
      "artig",
      "idérik",
      "pålitlig",
      "ledande",
      "övertygande"
     ],
     "correct": 3
    },
    {
     "num": 9,
     "word": "inte på långt när",
     "text": "<b>inte på långt när</b>",
     "options": [
      "för länge sedan",
      "långt ifrån",
      "längre fram",
      "långt senare",
      "inte på länge"
     ],
     "correct": 1
    },
    {
     "num": 10,
     "word": "superlativer",
     "text": "<b>superlativer</b>",
     "options": [
      "löften",
      "böner",
      "tillägg",
      "beröm",
      "argument"
     ],
     "correct": 3
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
     "title": "Förbindelsepunktens läge",
     "html": "<p>Tre fastighetsägare yrkade att VA-nämnden skulle fastställa en för dem gemensam förbindelsepunkt för dricksvatten och avlopp. Fastigheterna är belägna i ett verksamhetsområde där kommunen har för avsikt att införa kommunalt vatten och avlopp.</p>\n<p>Fastigheternas avlopp går sedan 1991 till egna trekammarbrunnar och därifrån vidare till en gemensam infiltrationsanläggning. Fastighetsägarna vill göra om detta till en gemensamhetsanläggning.</p>\n<p>Fastighetsägarna har egna dricksvattenbrunnar och de har kommunens tillstånd att inte ansluta sig till kommunalt dricksvatten. De vill dock ha en gemensam förbindelsepunkt för dricksvatten och avlopp. Avloppsledningar är redan framdragna från varje fastighet till en gemensam punkt, vilket enligt fastighetsägarna borde utgöra särskilda skäl för en gemensam förbindelsepunkt.</p>\n<p>Kommunen har bestritt yrkandena och anförde i huvudsak följande.</p>\n<p>De tre fastighetsägarna har önskat koppla in sig till den kommunala VA-anläggningen via en gemensam förbindelsepunkt eftersom de idag har en förening med en gemensam infiltrationsanläggning. Kommunen har redan upprättat förbindelsepunkter vid fastigheterna men inte informerat fastighetsägarna om läget.</p>\n<p>Huvudprincipen enligt vattentjänstlagen är att varje fastighetsägare ska ha en egen förbindelsepunkt i fastighetens omedelbara närhet om inte särskilda skäl föreligger. Kommunen anser inte att särskilda skäl föreligger; särskilda skäl handlar om var utefter tomtgränsen förbindelsepunkten ska förläggas. Huvudmannen har rätt att besluta om förbindelsepunktens läge och har valt att lägga den på bästa stället för fastighetsägaren och för huvudmannen.</p>\n<p>VA-nämnden konstaterade att huvudmannen enligt 12 § vattentjänstlagen ska bestämma förbindelsepunkt för en fastighets anslutning. Kravet på att förbindelsepunkten, om inte särskilda skäl föranleder annat, ska vara belägen i fastighetens omedelbara närhet innebär att den normalt ska ligga vid fastighetsgränsen. Särskilda skäl kan vara att en gemensamhetsanläggning eller samfällighet bildats som har ett eget gemensamt ledningsnät.</p>\n<p>VA-nämnden kan inte besluta om förbindelsepunktens läge utan endast bestämma om ett visst valt läge strider mot vattentjänstlagens bestämmelser och vilka konsekvenser det i så fall ska få.</p>\n<p>Det är huvudmannen som ensam, med iakttagande av 12 § vattentjänstlagen, har att bestämma förbindelsepunktens läge. Ingenting hindrar dock att en gemensam förbindelsepunkt bestäms för flera fastigheter. Kommunen har dock i detta fall efter många kontakter med fastighetsägarna i byn beslutat att förbindelsepunkt för varje fastighet ska förläggas i varje fastighets omedelbara närhet. På grund härav, och då det inte framkommit att de valda lägena i övrigt skulle föranleda några problem för sökandenas fastigheter som kan strida mot vattentjänstlagens bestämmelser, lämnar VA-nämnden sökandenas talan utan bifall.</p>\n<p class=\"forf\">Gilbert Nordenswan</p>\n<p><b>VA-nämnden</b> = statlig myndighet som avgör tvister om vatten och avlopp; upphörde 31/12 2015</p>"
    },
    {
     "title": "Bredda litteraturens fält",
     "html": "<p>Det fanns en tid då ordet ”litteratur” ägde en tydlig och avgränsad innebörd. Professorer, författare och läsande allmänhet kunde enas kring en snäv samling mästare – Sofokles, Shakespeare, Goethe – som var litteraturen, och som utgjorde den bakgrund mot vilken nya författare som Gunnar Ekelöf och Eyvind Johnson måste läsas. Det var ett välfungerande system. Kanon var tillräckligt begränsad för att kunna överblickas, tillräckligt rik för att ägnas en livstids möda och tillräckligt auktoritativ för att de som befann sig utanför litteraturens gemenskap ändå skulle respektera den.</p>\n<p>Men systemet vilade på en paradox. Medan den västerländska kanon i praktiken var en geografiskt och språkligt provinsiell affär, gjorde man samtidigt gällande att detta var litteraturen som sådan, en universell världslitteratur, och därmed den enda litteraturen värd att fördjupa sig i. (Möjligen med en <i>Mahabharata</i> eller några haikudikter inslängda som krydda.) Enskilda författare kunde vara mer oförutsägbara än så, men det akademiska studiet av litteratur vilade tveklöst på sådana premisser. Det svenska universitetsämnet litteraturhistoria, senare litteraturvetenskap, sades täcka in svensk och ”allmän” litteratur. Internationellt bar ”jämförande litteraturhistoria” – <i>littérature comparée</i>, <i>comparative literature</i> – på ett liknande löfte om att täcka in litteraturen i dess helhet.</p>\n<p>Som ung, invandrad akademiker i USA ville indiskan Gayatri Spivak tro på detta löfte. Hon var övertygad om att det vagt definierade ämnet jämförande litteraturhistoria måste innefatta möjligheten att ”studera alla litteraturer med språklig stringens och historisk överblick”. Det var en naiv förhoppning. Dels bortsåg hon från den institutionella tröghetens makt, dels utgick hon från en objektiverande idé om litteraturer (i pluralis) som fasta enheter snarare än processer. Hennes ambitiösa förslag till nya expansiva forskningsprojekt om kinesisk, koreansk, arabisk och afrikansk litteratur mottogs på 1970-talet av en veteran i ämnet med repliken: ”Min vän René Etiemble har sagt mig att det redan finns en fullt godtagbar historisk redogörelse för litteraturer på kinesiska.”</p>\n<p>Så beskriver Spivak saken själv. <i>Death of a Discipline</i>, hennes senaste och jämförelsevis lättlästa bok, är en uppgörelse med comparative literature. Inte i syfte att riva ned, utan för att låta det bästa inom denna bildningstradition leva vidare. Spivak, som skriver från amerikansk horisont, ser nämligen det historiska djupet och respekten för språkliga skillnader i comparative literature som ett värn mot vad hon menar är den enspråkiga ytligheten i <i>cultural studies</i>. Men för att nå dit måste comparative literature återuppstå i ny skepnad. Inom litteraturens fält, skriver hon, ”måste vi ta oss förbi engelska, portugisiska, tyska, franska, och så vidare. Vi måste se det södra halvklotets språk som aktiva kulturella media, snarare än som objekt att studeras av den okunnige migranten från metropolen”.</p>\n<p>Vad menas egentligen? Spivak, som ofta påtvingas etiketten ”postkolonial tänkare”, är ständigt vaksam mot bekväma ställningstaganden. Mångkulturalismen och cultural studies ser hon som exempel på hur ”tredje världen” görs konsumerbar. Cultural studies är en bred beteckning. Den kan omfatta allt från reklamanalys till queerteori, men det är inom dess ramar som mycket av den ”icke-kanoniska” litteraturen studeras i USA. Studenter läser allt i engelsk översättning i antologier som presenterar exempel på litteratur från ”icke-väst”. De serveras alltså en ganska trång och färdigpaketerad bild av världen.</p>\n<p>I Sverige är läget lite annorlunda. Litteraturtidskriften <i>Karavan</i> har faktiskt en unik bredd, och svenska förlag är något duktigare på att översätta skönlitteratur från Afrika, Mellanöstern och Latinamerika. Men också här finns det tendenser till att reducera ”tredje världen” till ett objekt för våra omsorger eller en färgklick i vår gråa högteknologiska vardag. Men Brasilien är inte bara karneval, det finns afrikaner som inte gillar att dansa och tredje världens litteratur måste inte vara revolutionär eller ”magisk”.</p>\n<p>Det Spivak vill ta sig förbi är själva objektiveringen. I litteraturen finns en möjlighet att möta ”den andres blick” utan garantier, utan bekvämlighet. Men då krävs att man kombinerar den respekt för läsandets arbete som finns hos comparative literature med en bredare uppfattning om vad litteratur består av. Språkkunskaperna ser hon som centrala. Den enskilde läsaren kan inte behärska tjogtals språk, utan det är fråga om att skifta fokus. Fler språk än de europeiska måste komma i omlopp i litteraturstudiet – i kombination med en förhöjd medvetenhet om <i>översättningens</i> roll i läsandet.</p>\n<p>Översättning hör till de praktiska nödvändigheterna: det handlar om att göra samma text tillgänglig på flera språk. Men översättning är också ett namn på aktiviteten att flytta en text – eller sig själv som läsare – mellan språken, i ett rum där inget av språken helt räcker till. Att översätta innebär att utmana de lokala, retoriska överenskommelserna om hur ord ska begripas. Ordet ”krig” låter annorlunda i den långa fredens Sverige än i Sudan, där man har levt i ett krigstillstånd i decennier. Och hur överför man den positiva klangen i begreppet ”osvensk” till andra språk? Att översätta är att förvränga.</p>\n<p>När Salman Rushdie väckte skandal med <i>Satansverserna</i> var det för att han ansågs förvränga en muslimskarabisk tradition kring Koranens tillkomst. Han översatte denna tradition till postmodern, anglosaxisk romanprosa. Men i samma stund ”översatte” han engelskan, förflyttade den till en muslimsk kontext där den inte normalt hörde hemma. En dubbel förvrängning men också ett dubbelt berikande. Denna närmast paradoxala rörelse är vad Spivak menar att studiet av litteratur på andra språk än de europeiska kan åstadkomma.</p>\n<p>Spivak är inte ute efter att störta litteraturen från någon piedestal. Däremot företräder hon en annan litteratursyn än den kanoniska. Litteratur är för henne inte en samling mästerverk, utan en säregen funktion hos språket. Litteratur uppstår när språket påstår en sak och menar en annan. Eller när meningen uteblir. Litteratur måste tillåtas att vara gåtfull, ty ”överallt hörs kravet på den rationella förstörelsen av [den retoriska] figuren, ett krav inte på klarhet utan på omedelbar begriplighet, mätt enligt normalideologins mått. Detta berövar litteraturen dess styrka som kulturell resurs”.</p>\n<p>På så vis får litteraturen en privilegierad roll i arbetet med att korsa gränser. När starka ideologiska intressen vill tvinga in klasskillnader och geografiska avstånd i ett globalt rutnät av produktion och konsumtion, kan litteraturens fiktion påminna oss om världens friktion.</p>\n<p>Budskapet är alltså: lär dig läsandets konst, läs långsamt och tro inte att du på förhand vet vad en text har att säga. Det är råd som kan applåderas av såväl svenska som amerikanska litteraturprofessorer.</p>\n<p class=\"forf\">Stefan Helgesson</p>\n<p><b>kanon</b> = ett urval av de litterära verk som av sin samtid anses vara de viktigaste</p>"
    },
    {
     "title": "Närmare skolans praktik",
     "html": "<p>Paradoxalt nog tycks det i många länder som om framväxten av en utbildningsforskning har inneburit en marginalisering av lärarnas roll i denna. Lärarna ses som forskningskonsumenter och förväntas implementera forskningens resultat. Dock handlar den universitetsbaserade akademiska forskningen sällan direkt om de frågor som lärarna arbetar med. Även om forskningen genomförs i klassrummen är forskningsfrågorna, och därmed resultaten, inte relaterade till lärares uppgifter och frågor. Det finns därför ett klart uttalat behov av att utveckla forskningsansatser som talar mer direkt till lärare och de professionella problem de har att hantera – forskning som kan ge lärare bättre teoretiska och praktiska redskap i sitt arbete.</p>\n<p>Det är mot en sådan bakgrund som den nya floran av praxisnära forskningsansatser kan förstås. De fyller det ”mellanrum” som har uppstått mellan forskningen och skolans verksamheter, och de utvecklas från två håll. Å ena sidan söker universitetsforskningen sig närmare skolpraktiken på olika sätt, å andra sidan börjar skolorna bli alltmer intresserade av olika former av forsknings- och utvecklingsprojekt (FoU).</p>\n<p>Beteckningen <i>praxisnära forskning</i> lanserades av Vetenskapsrådets utbildningsvetenskapliga kommitté som ett sätt att beteckna forskning som mer direkt skulle svara mot skolornas och lärarutbildningarnas behov. I USA används beteckningen <i>practitioner</i> <i>research</i> eller <i>teacher research</i> för forskning som bedrivs av lärare. Sådan praktikerforskning grundas i en kritik av synen på lärare som forskningskonsumenter och implementerare av andras kunskap. En viktig skillnad mellan termerna <i>praktikerforskning</i> och <i>praxisnära forskning</i> är att den förra riktar uppmärksamheten mot vem det är som utför forskningen – medan den senare fokuserar den verksamhet där forskningsfrågorna uppstår.</p>\n<p>I början av 1990-talet utvecklades så kallade <i>design experiments</i> av Ann Brown och Allan Collins. De flyttade ut forskningen från universitetets laboratorier till naturliga skolmiljöer där teoretiskt grundade undervisningsdesigner prövades och vidareutvecklades. Designforskningen har därefter expanderat kraftigt och Jan van der Akker har föreslagit begreppet <i>(design and) development research</i> som samlingsterm för en familj av närbesläktade forskningsansatser som designforskning, designexperiment, formativ forskning och ”engineering research”.</p>\n<p>Gemensamt för dessa ansatser är att de är <i>kollaborativa</i> (lärare och forskare i samverkan), <i>interventionistiska</i> (man studerar inte den praktik som är, utan prövar specifika teorigrundade utformningar av undervisningen) och <i>iterativa</i> (cykliska förlopp där teori och praktik ömsesidigt påverkar varandra). På olika sätt överbryggar de gapet mellan teori och praktik, involverar lärare och syftar till att utveckla klassrumspraktiken. I sådana forskningsansatser går förfiningen av de praktiska produkterna och undervisningens utformning hand i hand med förfiningen av teoriutvecklingen.</p>\n<p>Design- och utvecklingsforskningen har vuxit fram som ett praxisnära alternativ inom ramen för den akademiska forskningen. Praktikerforskningen har däremot utvecklats i kontrast till akademisk forskning och utgått från lärares behov av att förstå, och helst lösa, de praktiska problem man står inför.</p>\n<p>Det talas också om <i>klinisk forskning.</i> Vården brukar användas som förebild för utbildningsområdet när det gäller att få till stånd en forskningsbaserad verksamhet. Den övervägande delen av forskningen inom vårdområdet är så kallad klinisk forskning som, något förenklat, kan beskrivas som forskning i anslutning till sjukdomar och deras botande och förebyggande, till skillnad från icke-klinisk disciplinär forskning om till exempel grundläggande biokemiska processer. Det är framför allt forskningsobjekten, det vill säga <i>vad</i> man forskar om, och syftet med forskningen – att lösa ett problem, utveckla ett botemedel och förbättra verksamheten – som är det specifika med klinisk forskning.</p>\n<p>Beteckningen klinisk forskning används även i överförd betydelse inom olika verksamhetsområden för att tala om forskning som leder till kunskap som de inom yrket behöver för att förbättra sina professionella bedömningar. Anthony Kelly definierar <i>klinisk utbildningsvetenskaplig forskning</i> som forskning om lärande och undervisning ur ett lärarperspektiv. Det är därigenom en forskningsmodell med stora möjligheter att utveckla kunskaper som kan hjälpa lärarna i deras arbete. Kunskapen som genereras integreras i de professionella bedömningarna i de kliniska verksamheterna. Man kan se den kliniska forskningen som en brygga mellan grundläggande forskning och den professionella yrkesutövningen.</p>\n<p>Beteckningen klinisk forskning avser däremot <i>inte</i> de specifika metoder som används inom den medicinska kliniska forskningen i dag. Varje verksamhetsområde måste utveckla forskningsansatser som är relevanta i förhållande till de frågor och problem man har. För det mesta är lärarna hänvisade till sina egna erfarenheter och funderingar för att besvara sina frågor. Den forskning som bedrivs sysslar oftast med generella frågor om lärande och undervisning, medan studier av konkreta problem i lärandesituationen än så länge i stor utsträckning lyser med sin frånvaro.</p>\n<p>Det är mot den bakgrunden man ska förstå det stora intresset för den japanska <i>lesson study</i>-modellen, som är direkt utformad för att utveckla de pedagogiska verksamheterna i anslutning till konkreta lärandeproblem. Enligt James Hiebert, Ronald Gallimore och James Stigler erbjuder den japanska <i>lesson study</i>-traditionen en modell för utveckling av en kollektiv professionell kunskapsbas för lärare. Tillsammans utformar lärarna lektioner som prövas, observeras, analyseras och revideras. Genom detta lärarägda utvecklingsarbete görs lärarnas kunskaper publika – möjliga att dokumentera, diskutera och verifiera.</p>\n<p>Avslutningsvis vill jag betona att en forskningsgrundad skolutveckling förutsätter en balans mellan olika typer av forsknings- och utvecklingsarbete. Skolan behöver forskning av olika slag för att utvecklas. Den ena forskningsansatsen ska därför inte ställas mot den andra – det viktiga är att det finns rimliga proportioner mellan olika typer av forskningsansatser.</p>\n<p>Skolan behöver en motsvarighet till vårdens kliniska forskning. Begreppen <i>praxisnära forskning</i> och <i>utvecklingsforskning</i> är alternativ som förts fram för att beteckna en sådan forskning. Begreppen kan dock kritiseras för att vara alltför vida och för att inte ta fasta på den professionsutvecklande aspekten. En del använder därför <i>klinisk forskning</i> i överförd bemärkelse. En annan väg vore att försöka hitta ett nytt begrepp. Eftersom beteckningen <i>pedagogisk</i> i dag är knuten till disciplinen pedagogik, som är en samhällsvetenskaplig disciplin snarare än att vara de pedagogiska yrkenas kunskapsgrund, behövs ett begrepp som fångar kärnan i läraryrket. Ett begrepp som liksom klinisk har grekiskt ursprung, och som fokuserar lärarprofessionens bildningsuppdrag, är <i>paedeutisk</i>. I sin grekiska ursprungsbetydelse rymmer paedeutisk såväl det vi kallar bildning som det som skapar bildning.</p>\n<p class=\"forf\">Ingrid Carlgren</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vad hänvisade de tre fastighetsägarna till som stöd för sitt yrkande?",
     "options": [
      "Att kommunen hade låtit bli att informera dem om förbindelsepunkternas läge.",
      "Att deras fastigheter redan delade vissa installationer för avlopp.",
      "Att förbindelsepunkterna hade placerats utan hänsyn till deras tomtgränser.",
      "Att de hade egna dricksvattenbrunnar och ville avstå från kommunalt vatten."
     ],
     "correct": 1,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vad var enligt texten en anledning till att VA-nämnden inte biföll de tre fastighetsägarnas yrkande?",
     "options": [
      "Ärendet ansågs inte strikt juridiskt.",
      "De tre fastighetsägarna och huvudmannen hade redan kommit överens.",
      "Ärendet omfattades inte av vattentjänstlagen.",
      "De särskilda skäl som anfördes hade inte godkänts av kommunen."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vad var enligt texten en orsak till att Spivaks förhoppningar om ämnet <i>comparative literature</i> inte infriades?",
     "options": [
      "Spivak var inte tillräckligt känd och etablerad för att få stöd för sina idéer.",
      "Forskningstraditionerna i Indien och USA visade sig vara alltför olika.",
      "De områden Spivak ville studera hade redan kartlagts av andra forskare.",
      "Den akademiska miljön visade sig vara motståndskraftig mot förändring."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vilken förändring vill Spivak se inom <i>comparative literature</i>, enligt textförfattarens referat?",
     "options": [
      "En fördjupning så att området även innefattar allt som ryms inom cultural studies.",
      "Ett vidgat perspektiv som bryter den västerländska litteraturens dominans.",
      "En breddning som medger att även andra kulturformer än litteratur kan studeras.",
      "Ett ökat intresse för historiska perspektiv inom litteraturen."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Hur ser Spivak på översättning, enligt texten?",
     "options": [
      "Översättning mellan olika språk kan tillföra texten nya dimensioner.",
      "Översättning ställer extra stora krav på läsarens språkliga kunskaper.",
      "Översättning gör det svårt att infoga texten i en kanon.",
      "Översättning kan ses som ett uttryck för kravet på kulturell utjämning."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Hur anser Spivak att litteraturen i bästa fall kan fungera, enligt texten?",
     "options": [
      "Som ett vapen i kampen för demokrati.",
      "Som ett gränsöverskridande bildningsinstrument.",
      "Som ett redskap för förmedling av språkkunskaper.",
      "Som ett kvalitetsstämplat arv till nästa generation."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Vad har enligt texten föranlett framväxten av de nya forskningsansatser som diskuteras?",
     "options": [
      "Bristerna i den forskning som bedrivs av personer med lärarbakgrund.",
      "Skillnaden mellan den forskning som bedrivs på universiteten och den som bedrivs i skolan.",
      "Förväntningen att lärarna på egen hand ska lösa sina problem i undervisningen.",
      "Avsaknaden av forskning som har konkret koppling till lärarnas undervisningssituation."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Hur kan man, utifrån texten, bäst definiera ”praxisnära forskning”?",
     "options": [
      "Forskning som fokuserar verksamheters praktiska resultat.",
      "Forskning som bedrivs av de som själva arbetar inom en verksamhet.",
      "Forskning som riktar in sig på de frågor som uppstår i en verksamhet.",
      "Forskning som är av mer praktisk än teoretisk art."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Hur skulle man bäst kunna beskriva skillnaden mellan ”design experiments” och den japanska ”lesson study”-modellen, om man utgår från texten?",
     "options": [
      "Den förra är inriktad på undervisningen, den senare på lärarna.",
      "Den senare tar tydligare än den förra sin utgångspunkt i lärarnas praktik.",
      "Den förra bedrivs enbart av forskare, den senare i huvudsak av lärare.",
      "Den senare utförs i större utsträckning än den förra av forskarkollektiv."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Praxisnära forskning har uppkommit som ett svar på hur tidigare forskning betraktat lärarna. Hur kan man bäst beskriva den roll som denna tidigare forskning tilldelade lärarna?",
     "options": [
      "Överbryggande.",
      "Balanserande.",
      "Generaliserande.",
      "Verkställande."
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
     "text": "Benämningen _____ eller den äldre formen ”kultje” används när vindhastigheten till sjöss uppgår till minst 14 m/s.",
     "options": [
      "kutting",
      "kuling",
      "kulmen",
      "kulning"
     ],
     "correct": 1
    },
    {
     "num": 22,
     "text": "Om än läsandet av böcker i många avseenden är en subjektiv och _____ syssla så vill vi samtidigt gärna göra den till en del av _____; det jag nu sysslar med är bara ett exempel på denna strävan att sprida och dela med sig av sin läsning.",
     "options": [
      "solitär – en gemenskap",
      "litterär – vårt kulturarv",
      "populär – samhället",
      "linjär – ett spektrum"
     ],
     "correct": 0
    },
    {
     "num": 23,
     "text": "Medborgarnas syn på Posten som en del av samhällskroppen är långt ifrån _____. Posten har varit något av en infrastruktur, en statens _____ arm. Det lokala postkontoret är en plats där medborgare har kunnat rösta i allmänna val. I ett land där staten och Posten varit _____ är det inte så konstigt att stora förändringar alltid tagits emot med skepsis.",
     "options": [
      "odelad – tredje – vinstdrivande",
      "sann – ledande – privatiserade",
      "utredd – beväpnade – segregerade",
      "ogrundad – förlängda – oskiljaktiga"
     ],
     "correct": 3
    },
    {
     "num": 24,
     "text": "Att _____, som facktermen lyder, är inte att skjuta upp saker i största allmänhet, utan att _____ låta en uppgift vänta till senare, trots att vi vet att det kan få negativa konsekvenser.",
     "options": [
      "derangera – glatt",
      "prokrastinera – aktivt",
      "dekonstruera – spontant",
      "predestinera – slappt"
     ],
     "correct": 1
    },
    {
     "num": 25,
     "text": "Risken finns ju också att man som journalist på en liten ort _____, att man självcensurerar, när saker blir för känsliga eller kommer för nära.",
     "options": [
      "lägger band på sig",
      "sätter sig på höga hästar",
      "faller mellan stolarna",
      "tar bladet från munnen"
     ],
     "correct": 0
    },
    {
     "num": 26,
     "text": "Kapillärprov är ett blodprov som tas genom ett stick med en _____ i fingertoppen, i örsnibben eller, hos spädbarn, på hälens undersida.",
     "options": [
      "pipett",
      "sutur",
      "lansett",
      "kateter"
     ],
     "correct": 2
    },
    {
     "num": 27,
     "text": "I likhet med många andra experter på frågor om _____ är han förvånad, kanske till och med irriterad, över vanliga nätanvändares _____: ”Att skicka mejl är säkerhetsmässigt ungefär som att lägga ett vykort på gatan utanför huset det ska till och hoppas att rätt mottagare kommer förbi och hittar det först.”",
     "options": [
      "integritet – godtrogenhet",
      "infiltration – missunnsamhet",
      "identitet – opålitlighet",
      "interaktion – betänksamhet"
     ],
     "correct": 0
    },
    {
     "num": 28,
     "text": "Varje sort är en _____, det vill säga alla äppelträd av en viss sort härstammar från ett gemensamt ursprungsträd och förökningen sker genom något _____, vanligen okulering. I Sverige har man valt ut omkring 220 mandatsorter, alltså sådana som är avsedda att bevaras för _____ i genbanker.",
     "options": [
      "gen – meiosliknande – framtiden",
      "klon – ympningsförfarande – eftervärlden",
      "avfälling – pollenliknande – placering",
      "dottercell – delningsförfarande – donationer"
     ],
     "correct": 1
    },
    {
     "num": 29,
     "text": "Vi barn _____ länge och liksom bekymrat över Megan, en av byns udda existenser. Hon hade blommiga klänningar, men också synligt skägg och mustasch. När jag satt och iakttog henne i kyrkan framstod den _____ som betydligt mer fängslande än predikan.",
     "options": [
      "spankulerade – personligheten",
      "våndades – utstyrseln",
      "fantiserade – fascinationen",
      "grunnade – motsägelsen"
     ],
     "correct": 3
    },
    {
     "num": 30,
     "text": "I Arbetsmiljölagen står det att arbetsförhållandena ska vara anpassade till människans förutsättningar i fysiskt och psykiskt _____.",
     "options": [
      "välbefinnande",
      "samspel",
      "hänseende",
      "tillstånd"
     ],
     "correct": 2
    }
   ]
  }
 ]
};
