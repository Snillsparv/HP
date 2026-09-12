// Högskoleprovet 23 oktober 2022, provpass 2 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "ht2022-2",
 "tillfalle": "ht2022",
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
   29,
   0.4
  ],
  [
   32,
   0.5
  ],
  [
   36,
   0.6
  ],
  [
   39,
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
   72,
   1.7
  ],
  [
   74,
   1.8
  ],
  [
   76,
   1.9
  ],
  [
   78,
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
     "word": "signifikans",
     "text": "<b>signifikans</b>",
     "options": [
      "undantag",
      "skillnad",
      "måluppfyllelse",
      "uppfattning",
      "betydelse"
     ],
     "correct": 4
    },
    {
     "num": 2,
     "word": "blottlagd",
     "text": "<b>blottlagd</b>",
     "options": [
      "känslosam",
      "värdelös",
      "synliggjord",
      "övergiven",
      "undanröjd"
     ],
     "correct": 2
    },
    {
     "num": 3,
     "word": "mitos",
     "text": "<b>mitos</b>",
     "options": [
      "celldelning",
      "uttorkning",
      "blödning",
      "sårläkning",
      "befruktning"
     ],
     "correct": 0
    },
    {
     "num": 4,
     "word": "revidera",
     "text": "<b>revidera</b>",
     "options": [
      "påpeka",
      "hindra",
      "ersätta",
      "ändra",
      "förneka"
     ],
     "correct": 3
    },
    {
     "num": 5,
     "word": "heterogen",
     "text": "<b>heterogen</b>",
     "options": [
      "hållbar",
      "olikartad",
      "i fast form",
      "naturell",
      "dubbelsidig"
     ],
     "correct": 1
    },
    {
     "num": 6,
     "word": "framsynthet",
     "text": "<b>framsynthet</b>",
     "options": [
      "förhoppning",
      "upplysning",
      "övertygelse",
      "utveckling",
      "förutseende"
     ],
     "correct": 4
    },
    {
     "num": 7,
     "word": "blidka",
     "text": "<b>blidka</b>",
     "options": [
      "ångra sig bittert",
      "lämna i fred",
      "göra mer vänligt inställd",
      "inge förtroende",
      "be om en tjänst"
     ],
     "correct": 2
    },
    {
     "num": 8,
     "word": "galax",
     "text": "<b>galax</b>",
     "options": [
      "himlakropp",
      "spiralform",
      "tidsrymd",
      "stjärnsystem",
      "planetformation"
     ],
     "correct": 3
    },
    {
     "num": 9,
     "word": "modest",
     "text": "<b>modest</b>",
     "options": [
      "snäll",
      "pålitlig",
      "utmanande",
      "populär",
      "blygsam"
     ],
     "correct": 4
    },
    {
     "num": 10,
     "word": "som en osalig ande",
     "text": "<b>som en osalig ande</b>",
     "options": [
      "naiv och godtrogen",
      "orolig och rastlös",
      "sviken och olycklig",
      "hård och känslokall",
      "hatisk och hämndlysten"
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
     "title": "Luther, Cranach och Twitter",
     "html": "<p>När Martin Luther i oktober 1517 spikade upp sina 95 berömda teser på kyrkporten i Wittenberg kunde han inte ha valt en lämpligare stad. Wittenberg var inte bara känt för sina många boktryckerier, som gjorde det möjligt att mångfaldiga och sprida Luthers texter, utan här bodde också Lucas Cranach som förutom boktryckare, apotekare och borgmästare även var en duktig målare. Luther och Cranach blev nära vänner och Cranach kom med tiden att bli reformationens art director. Hans verkstad producerade på löpande band idolporträtt av Martin Luther och andra för reformationen viktiga personer och hjälpte på så sätt till att sprida reformationens budskap.</p>\n<p>Till en början var dock Luther ganska fientligt inställd till konst, och reformationen har därför förknippats med ikonoklasm, det vill säga medveten förstörelse av religiösa konstverk och symboler. Det är kanske inte så underligt, eftersom all konst i kyrkorna på den här tiden var producerad av katolikerna med syftet att sprida och förhärliga deras syn på kristendomen. Företrädarna för reformationen ville naturligtvis att deras budskap skulle finnas i kyrkorna istället för den katolska propagandan. Med tiden luckrades Luthers konstsyn upp och han insåg att konst kunde vara ett viktigt redskap för att sprida reformationens budskap. Han lät även Cranach skapa en del reformvänliga altarmålningar, bland annat den från 1547 som finns i Wittenbergs stadskyrka. Att Luther och reformationen haft en stor betydelse för hur konsten utvecklades efter 1500-talet i Europa är uppenbart, men har Luther något inflytande på dagens sekulariserade samtidskonst?</p>\n<p>Boktryckarkonsten var en relativt ny teknik för att sprida och massproducera tryckt text på Luthers tid. Om Luther hade levt idag skulle han förmodligen ha använt sig av dagens teknik för att sprida sitt budskap. Kanske hade han twittrat sina 95 teser istället för att spika upp dem på en kyrkport? En som använt Twitter för att ”spika upp” sina teser i Luthers efterföljd är den amerikanska konstnären Marcin Ramocki. Till grupputställningen <i>Future Is Not What It Used To Be</i> som visades under 2010 på galleriet CSW Zamek Ujazdowski i Warszawa, och som handlade om hur Web 2.0 och sociala medier har påverkat samtidskonsten, skapade Ramocki en utställningstext på Twitter bestående av 59 teser. Ramocki beskriver sin text som en lättsam konversation om konstnärens roll i en tid präglad av sociala medier. Vad passar då bättre, fortsätter han, än att begränsa sina uttalanden till 140 tecken på Twitter?</p>\n<p>I en av de 59 teserna citerar Ramocki konstkritikern Boris Groys som säger att det traditionella förhållandet mellan producenter och konsumenter, såsom det yttrade sig i 1900-talets masskultur, har inverterats. Det vill säga då det tidigare var en liten grupp som producerade allt material som vi konsumerade, kan idag vem som helst producera texter och bilder och på så sätt också bli en konstnär. Groys menar att konstnären idag inte längre är någon exklusiv person, utan en vardaglig utövare som delar sin konst direkt med sin publik på ett icke-hierarkiskt sätt, där institutionerna spelar allt mindre roll och där internet får allt större betydelse.</p>\n<p class=\"forf\">Mathias Jansson</p>"
    },
    {
     "title": "Skolbiblioteken",
     "html": "<p>Trots att det sedan 2011 står i skollagen att alla elever ska ha tillgång till ett skolbibliotek går utvecklingen långsamt. Mer än var tionde elev saknar helt bibliotek på sin skola och hälften av landets elever saknar tillgång till ett bemannat skolbibliotek.</p>\n<p>Det är en ständig kamp om vem som ska ta ansvar för att driva utvecklingen. Rektorer tycker att de saknar ekonomiska resurser medan politiker och huvudmän anser att det är rektorernas skyldighet att se till att det finns ett skolbibliotek. En viktig del av problematiken är också att skolbiblioteket på många håll inte har någon klar plattform. Skolbiblioteken hör inte alltid till utbildningsförvaltningen, utan ingår ibland i kultur- och fritidsförvaltningens verksamhet. Det förekommer att skolbibliotekarier arbetar på tre, fyra olika skolor och att de inte har någon rektor som chef.</p>\n<p>Den största utmaningen för att få igång utvecklingen ligger i att ändra synsätt på vad ett skolbibliotek med en utbildad bibliotekarie kan innebära för elevernas lärande. Att analysera och kritiskt värdera olika typer av texter samt söka, välja och hantera information är förhållandevis nya och viktiga förmågor som är lätta att få syn på i läroplanen och som behöver ges större utrymme i undervisningen. Lärare är inte per automatik utbildade i detta. Det är däremot bibliotekarier, som därför kan bidra med undervisning i medie- och informationskunnighet (MIK).</p>\n<p>Skolbibliotekarien ska inte behöva marknadsföra sig själv, utan ska ses som en naturlig resurs i skolan. För att det ska lyckas är den viktigaste förutsättningen att bibliotekarien får mandat från en intresserad och kunnig skolledare.</p>\n<p>I Växjö kommun, som fått utmärkelsen ”Skolbibliotek i världsklass” av fackförbundet DIK, har man satsat på att anställa skolbibliotekarier som finansieras direkt av förvaltningen och inte ingår som en del av skolans budget. Skolbibliotekarierna arbetar med läsning och läsfrämjande, med bokprat och boksamtal. De arbetar med MIK för att eleverna ska bli ifrågasättande och kritiska informationskonsumenter. Det har inneburit att både rektorer och pedagoger insett att skolbiblioteket kan medföra mycket positivt för elevers lärande. Det ska inte bara vara ett rum dit man går för att få tips på böcker som man kan låna.</p>\n<p>Det är viktigt att få tid till gemensam planering, även om det pågår en ständig kamp om tiden i skolan. Det är en förutsättning att skolbibliotekarier och lärare får mötas med sina respektive kompetenser. Skolbibliotekarien kan med sin kompetens ge stöd till ett undervisningsområde och arbeta med analysförmåga, begrepp, informationssökning och källkritik. Det ger goda förutsättningar för en ökad måluppfyllelse och är lika betydelsefullt från de första skolåren till de sista. Vi lever i digitaliseringens tidevarv och det finns ett stort behov att ta med många infallsvinklar i skolämnena.</p>\n<p>Det kan uppstå en del svårigheter i samarbetet mellan lärare och bibliotekarier. Lärare är vana att vara ensamma med eleverna i deras lärsituationer. Att vara flera inblandade i undervisningen, till exempel vid en planering med svensk- och SO-lärare om en historisk epok, är en utmaning för både pedagoger och bibliotekarier.</p>\n<p>Lärare slänger sig gärna med pedagogiska termer, som till exempel LPP (Lokal pedagogisk planering) och ELK (En läsande klass). Även bibliotekarier har med sig sina termer från biblioteksvärlden. För ett gott samarbete är det viktigt att man skaffar sig gemensamma begrepp.</p>\n<p>Bibliotekarien har sin utmaning i att vara med i ”skolpulsen”, allt ska gå ganska snabbt och göras inom bestämda tidsramar. Att komma från folkbiblioteket till ett skolbibliotek kan vara ganska omruskande och pulshöjande. Här råder dessutom inte frivillighetens lag, utan elever ska göra, läsa, skriva och undersöka, pang på! Det gör att man får en förändrad roll, man ska kunna säga till elever som inte gör riktigt vad som är tänkt. De hoppar, studsar, svär och klättrar på väggarna i värsta fall. Hur gör man då? Klart att man kan säga till, men ska man ”skvallra” för de lärare som har eleven? Ska man bli arg? Vad ska man använda för tilltal? Problemen med ordning finns förstås på folkbiblioteken också, men inte i samma utsträckning. Att förmedla litteratur och mediekunskap bygger på förtroende och det behöver man förankra genom att vara en naturlig del av arbetet på skolorna.</p>\n<p>Det har alltid varit en utmaning att få barn och ungdomar att läsa. All den lättillgängliga underhållningen som finns på internet gör utmaningen ännu större. Barn och ungdomar är vana att byta aktiviteter i den takt de själva väljer, medan skolan vill få eleverna att läsa och bearbeta det som händer i boken, skriva, läsa och skriva igen. Det kräver målmedvetet och engagerat arbete. Högläsning i början på en bok är ett bra sätt att få igång engagemanget och lusten att fortsätta. Boksamtalet, helst i smågrupper, kan därefter hjälpa eleverna att hitta sina inre bilder och bli intresserade av att läsa vidare, förstå mer och kunna ställa frågor till texten.</p>\n<p>Skolbibliotekarier vill bli tillfrågade om förslag på böcker vars genretillhörighet och teman kan passa det läraren är ute efter. Men det är viktigt att också läraren har god kunskap om vilken litteratur som finns, svensklärare måste hänga med i bokutgivningen och vad som dyker upp på film och rör sig i barnens och ungdomarnas värld. Utgivningen är riklig och det gäller att tillsammans vaska fram det bästa så att eleverna kan lotsas till det de vill och behöver. Det är klart att det är de vuxna i skolan som ska vara de bästa förebilderna – att man visar och pratar om böcker man själv läser för att få alla elever att förstå att det är så spännande, intressant och underhållande att läsa.</p>\n<p class=\"forf\">Ann Löwbeer</p>"
    },
    {
     "title": "Utsatta gruppers hälsa",
     "html": "<p>Vid ett sektionssymposium anordnat av Svensk socialmedicinsk förening diskuterades hur man kan förbättra hälsan bland utsatta grupper. Presentationerna tog sin utgångspunkt i hälso- och sjukvårdslagen och berörde strukturella hinder, och hinder i bemötande, för god vård och bättre hälsa bland utsatta grupper. Eftersom dessa frågor kan vara av övergripande intresse för läkarkåren summeras symposiet här. I presentationen om hälsa och vårdkonsumtion i socialt och ekonomiskt utsatta områden inom Stockholms läns landsting (SLL) poängterades betydelsen av att fördela resurser efter behov. Nuvarande ersättningssystem i primärvården ger inga extra resurser till dessa områden. Systemet avser att skapa lika villkor för vårdgivare, men vad händer då med förutsättningarna för att bedriva vård i områden med högre sjuklighet och större behov och en befolkning som i stor utsträckning inte talar svenska?</p>\n<p>Det vårdsökande beteendet och ”health literacy”, på svenska ungefär ”hälsoförståelse”, varierar mellan olika grupper. Olika steg där sociala skillnader kan uppstå och förstärkas i kedjan från hälsans bestämningsfaktorer till vårdkonsumtion belystes. Enligt hälso- och sjukvårdslagens intentioner ska de med större behov prioriteras framför dem med mindre behov, vilket kräver en omfördelning av resurser på ett sätt som i dag inte sker. Presentationen om hemlösas vårdbehov i SLL utgick bland annat från en intervjuundersökning bland 155 hemlösa och belyste olika hinder för vård i denna grupp. En fjärdedel av de hemlösa hade avstått från att söka vård och köpa ut ordinerade läkemedel på grund av dålig ekonomi (jämfört med cirka 5 procent i befolkningen som helhet). Närmare 70 procent hade avstått från tandvård. De hinder som identifierades fanns i vårdens organisation och i samarbetet mellan verksamheter, men berodde även på individens egen hälsoförståelse och dennes upplevelser av dåligt bemötande. De hemlösa rapporterade bäst bemötande från frivilligorganisationer. Sjukvården fick hyggligt betyg, även om en stor andel ansåg sig ha blivit dåligt bemötta i sjukvården.</p>\n<p>I SLL finns flera specifika vårdverksamheter för hemlösa. Trots detta har landstingsrevisorerna funnit problem som har att göra med bristande samordning och med att vården som erbjuds ser olika ut beroende på var man bor. Presentationen om hälsa och vård bland asylsökande, papperslösa och gömda flyktingar utgick också från hälso- och sjukvårdslagen, där uttrycket ”hela befolkningen” kommit att gälla endast dem med fullständigt personnummer. Det finns en lag från 1 juli 2008 om hälso- och sjukvård respektive tandvård till asylsökande med flera. Vuxna asylsökande, gömda och papperslösa har tillgång till akutvård och vård som inte kan anstå, men gömda och papperslösa har inte rätt till subventionerad akut vård utan måste betala vården själva. Sverige har i detta avseende mer restriktiva regler än många andra EU-länder. Asylsökande har ofta svåra traumatiska upplevelser bakom sig som resulterar i posttraumatiskt stressyndrom, depression och andra behandlingskrävande tillstånd. Till detta kommer statusförlust, diskriminering, isolering och oro för anhöriga i samband med ankomsten till Sverige, sammanfattat under begreppet postmigrationsstress. Hälsoinformation från sjuksköterska till asylsökande i grupp kan öka tryggheten och förmågan till stresshantering, och handledningen och utbildningen av studenter och personal i att möta utrikesfödda i vården måste utökas. Avslutningsvis betonades att rätten till vård ska omfatta alla, oberoende av juridisk status. Presentationen av ett tolkat vårdsamtal utgick från en masteruppsats, baserad på intervjuer med vårdgivare engagerade i tbc-vård bland somalier, samt opublicerade intervjuer med tolkar. Tbc uppfattas som en stigmatiserande sjukdom och vårdmönstret är komplext. Vårdgivares och patienters kommunikationsfärdigheter är centrala i tolksamtal. Förtroende är svårt att förmedla via tolk, vilket också kan påverka vårdens kvalitet och resultat. Tolksamtalet kräver mer tid, och kulturella olikheter försvårar för vårdgivare, tolk och patient. Bland annat kan vårdgivares besked uppfattas som alltför direkta och okänsliga.</p>\n<p>Studien gav exempel på hur tolksystemet påverkas av ett upphandlingsförfarande som betonar låg kostnad, urholkar kvaliteten, påverkar vården negativt och är rättsosäkert för patienten. Ett gemensamt tema i presentationerna var avvikelser från hälso- och sjukvårdslagens intentioner, med konsekvenser för vården bland utsatta grupper. En viktig intention i hälso- och sjukvårdslagen är att vården ska ske på lika villkor. De med störst behov ska ges företräde. Om detta ska uppnås påverkar det fördelningen av resurser. Alla ska inte ha lika mycket vård, vissa med större behov ska ha mer resurser än andra. Resurser måste prioriteras till dem med större behov.</p>\n<p>Upphandling av vård (primärvård, psykiatri, hälsosamtal och hälsoundersökning för asylsökande) och tolkresurser tillämpas på flera håll. Upphandlingarna betonar ofta låga kostnader men ger inte tillräcklig vägledning om vilka kvalitetsindikatorer som ska gälla. Vid symposiet framhölls att utsatta grupper ofta har andra och större behov än befolkningen i genomsnitt och att en ensidig betoning av låga kostnader vid upphandling knappast ger en god vård för dessa grupper. I stället för en ersättningsmodell som premierar många korta besök förespråkades ett tydligare fokus på kvalitet. Om marknadsmodeller och upphandling av vård ska tillämpas i dessa sammanhang måste särskilda kvalitetsindikatorer utformas för att säkerställa att verksamhetens mål uppfylls.</p>\n<p>I diskussionerna bekräftade åhörare det som tidigare presenterats: ökande problem med allvarlig psykisk sjukdom hos asylsökande, att resurser och behov inte följs åt, svårigheter och möjliga lösningar vid tolksamtal, behov av ökad utbildning och så vidare. Frågor väcktes bland annat om fördelning av resurser efter behov, vårdens värdegrund, patienten som objekt eller subjekt, personalens kompetens och etik, upphandling som lösning på problemen och om kvalitetsindikatorer för god vård. Deltagarna var överens om att vårdens värdegrund och etik, personalens kompetens och respekt för de människor vården tjänar måste komma först.</p>\n<p class=\"forf\">Bo Burström, Solvig Ekblad, Robert Irestig och</p>\n<p class=\"forf\">Maissa al-Adhami</p>\n<p><b>landsting</b> = självstyrande organisation som föregick dagens regioner <b>stigmatisera</b> = socialt stämpla</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vad utmärkte konsten i 1900-talets masskultur, enligt Boris Groys?",
     "options": [
      "Den hade folklig förankring.",
      "Den angrep kulturen.",
      "Den var reformatorisk.",
      "Den utövades av ett fåtal."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vad har Martin Luther och Marcin Ramocki gemensamt, enligt texten?",
     "options": [
      "Kritiken av stelnade strukturer.",
      "Viljan att förändra masskulturen.",
      "Nyttjandet av ny teknik.",
      "Synen på konstnärens uppgift."
     ],
     "correct": 2,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Textförfattaren lyfter särskilt fram en funktion som hon önskar att skolbibliotekarierna ska ha. Vilken?",
     "options": [
      "De ska ha en samtalsledande funktion.",
      "De ska ha en värderande funktion.",
      "De ska vara pedagogiska resurser.",
      "De ska vara läsande förebilder."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vad av följande lyfter textförfattaren fram som orsak till att inte alla skolor har ett bibliotek?",
     "options": [
      "Att skolbibliotekarier ofta har ansvar för flera skolor.",
      "Att de som har utformat skollagen inte klarar av att följa den.",
      "Att skolorna har skilda ekonomiska förutsättningar.",
      "Att de som har i uppgift att lösa problemet skjuter det ifrån sig."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vad krävs enligt textförfattaren för att skolorna bättre ska dra nytta av de skolbibliotekarier som de har tillgång till?",
     "options": [
      "En tydligare ansvarsfördelning mellan rektorer och huvudmän.",
      "Ett ökat mandat för bibliotekarierna att tillrättavisa elever.",
      "En samordning av lärarnas och bibliotekariernas arbetsplanering och språkbruk.",
      "Ett samarbete som utgår från att lärarna och bibliotekarierna har samma kompetens."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Vad är det som gör att behovet av skolbibliotekarier är särskilt stort i dag, enligt texten?",
     "options": [
      "Det nya medielandskapet.",
      "De alltmer detaljerade läroplanerna.",
      "De ökade kraven på snabba resultat.",
      "De tuffare ekonomiska villkoren inom utbildningsområdet."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Vilket av följande påståenden har tydligt stöd i texten?",
     "options": [
      "Asylsökande söker inte vård på eget initiativ i den utsträckning som de skulle behöva.",
      "Hemlösa tycker sig bli förhållandevis väl behandlade av frivilligorganisationer.",
      "Textförfattarna menar att sjukvårdens riktlinjer för vård av papperslösa och gömda är relativt generösa.",
      "Textförfattarna hävdar att hälso- och sjukvårdslagen borde vara tydligare i sina krav på tolksystemet."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Vilket övergripande problem återkom i de presentationer som texten behandlar?",
     "options": [
      "Att den vård som utsatta grupper erbjuds inte motsvarar den vård som de enligt lagen borde få.",
      "Att den nuvarande överkonsumtionen av vård omöjliggör viktiga prioriteringar.",
      "Frågan hur man ska förklara för allmänheten att utsatta grupper kan behöva gå före i vårdköerna.",
      "Frågan hur man ska behålla det goda samarbetet mellan de olika aktörerna inom vård- och hälsosektorn."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Vad borde enligt texten vara en viktig princip när vård upphandlas?",
     "options": [
      "Att man i första hand upphandlar vårdlösningar som riktar sig till allmänheten.",
      "Att de vårdlösningar som processen resulterar i verkligen håller tillräcklig kvalitet.",
      "Att vårdens resurser delas lika mellan alla grupper i samhället.",
      "Att upphandlingarna betonar allas lika stora behov av vård."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Hur kan man bäst karaktärisera den text som Bo Burström och hans medförfattare har skrivit?",
     "options": [
      "Som en sammanfattning.",
      "Som en utvärdering.",
      "Som en kritisk granskning.",
      "Som en utskrift av flera föredrag."
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
     "text": "I förhandlingarna om förslaget är EU-domstolens dom ett trumfkort för de medlemsländer som vill täppa till vad de uppfattar som ett _____ i förordningen.",
     "options": [
      "sidospår",
      "lönnfack",
      "kryphål",
      "skyddsnät"
     ],
     "correct": 2
    },
    {
     "num": 22,
     "text": "Det material som används vid murningen styr oftast också valet av verktyg, men för slutbearbetning av putsen gäller ofta att man tar vad man har i verktygsväg. Det är snarare _____ än verktygen som måste anpassas till materialet om det ska bli _____ konstruktioner.",
     "options": [
      "magkänslan – anständiga",
      "tålamodet – behändiga",
      "ögonmåttet – fullständiga",
      "handlaget – beständiga"
     ],
     "correct": 3
    },
    {
     "num": 23,
     "text": "Språkrådet anser inte att flödet av lånord från engelska till svenska är _____. Mer problematiskt är i stället en företeelse som många språkbrukare kanske inte uppfattar, nämligen _____. Det innebär att man inom vissa verksamhetsområden väljer att använda engelska uttryck i stället för svenska, och därmed inte utvecklar en svensk _____ inom området.",
     "options": [
      "betydande – översättningslån – tradition",
      "tvetydigt – tolkningsföreträden – samtalston",
      "oroväckande – domänförluster – terminologi",
      "gränslöst – betydelseglidningar – förståelse"
     ],
     "correct": 2
    },
    {
     "num": 24,
     "text": "Håligheten i stenflisan rymmer spår av tre olika sorters mikroorganismer, ett slags miniatyrsamhälle vars medlemmar antagligen levde i _____ för 48 miljoner år sedan.",
     "options": [
      "kollektiv",
      "treenighet",
      "polygami",
      "symbios"
     ],
     "correct": 3
    },
    {
     "num": 25,
     "text": "Om uppgifterna stämmer sneglar Kroatien åt samma håll som Ungern, Polen och framför allt Ryssland har gjort. Efter en period av öppenhet och demokrati kommer en _____ där länderna kantrar mot mer _____ lösningar.",
     "options": [
      "boom – sekulära",
      "trigger – diktatoriska",
      "peak – suspekta",
      "backlash – auktoritära"
     ],
     "correct": 3
    },
    {
     "num": 26,
     "text": "Kan man vara beroende av socker? Frågan har debatterats i flera decennier utan att få något _____ svar.",
     "options": [
      "ensidigt",
      "envetet",
      "enskilt",
      "entydigt"
     ],
     "correct": 3
    },
    {
     "num": 27,
     "text": "Regissören Ingmar Bergmans _____ över en symfoniorkesters förmåga att verka som en organism, sammansmält och samspelt, för att förmedla musiken under dirigentens taktpinne, är äkta och _____.",
     "options": [
      "förundran – oförställd",
      "fantasi – oförarglig",
      "förtjusning – oförutsägbar",
      "fundering – oförbehållsam"
     ],
     "correct": 0
    },
    {
     "num": 28,
     "text": "Med det moderna projektet skulle individen bli sin egen lyckas _____. Och visst har vi vunnit en _____ som mänskligheten aldrig tidigare upplevt, men när vi ställde siktet mot framtiden och kapade banden bakåt blev många av oss _____.",
     "options": [
      "ost – kunskap – rådlösa",
      "lott – rikedom – arvlösa",
      "smed – frihet – rotlösa",
      "dräng – standard – maktlösa"
     ],
     "correct": 2
    },
    {
     "num": 29,
     "text": "Ångestens medicinska historia präglas av tillfälligheter och slumpmässiga upptäckter, vilket delvis förklarar _____ vilka diagnoser som förekommer.",
     "options": [
      "meningen med",
      "godtyckligheten i",
      "rangordningen av",
      "sannolikheten för"
     ],
     "correct": 1
    },
    {
     "num": 30,
     "text": "Omkring 1910 gick det för första gången att _____ en realexamen per korrespondens i utbildningsföretaget Hermods regi, vilket ledde till att verksamheten expanderade kraftigt. Grundaren Hans Svensson Hermods vision var att alla svenskar, även landsbygdsbefolkningen, skulle kunna läsa kurser som de hade _____ för.",
     "options": [
      "avlägga – fallenhet",
      "beställa – utbildning",
      "tillämpa – resurser",
      "utfärda – befogenhet"
     ],
     "correct": 0
    }
   ]
  }
 ]
};
