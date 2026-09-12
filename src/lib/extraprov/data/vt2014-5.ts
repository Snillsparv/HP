// Högskoleprovet 5 april 2014, provpass 5 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "vt2014-5",
 "tillfalle": "vt2014",
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
   20,
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
   26,
   0.4
  ],
  [
   29,
   0.5
  ],
  [
   32,
   0.6
  ],
  [
   35,
   0.7
  ],
  [
   39,
   0.8
  ],
  [
   42,
   0.9
  ],
  [
   45,
   1.0
  ],
  [
   48,
   1.1
  ],
  [
   51,
   1.2
  ],
  [
   53,
   1.3
  ],
  [
   56,
   1.4
  ],
  [
   59,
   1.5
  ],
  [
   62,
   1.6
  ],
  [
   65,
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
     "word": "kaki",
     "text": "<b>kaki</b>",
     "options": [
      "bränt lergods",
      "modellteckning",
      "turkisk maträtt",
      "kortbyxor",
      "sandfärgat tyg"
     ],
     "correct": 4
    },
    {
     "num": 2,
     "word": "illustrera",
     "text": "<b>illustrera</b>",
     "options": [
      "försköna",
      "bevisa",
      "markera",
      "belysa",
      "påpeka"
     ],
     "correct": 3
    },
    {
     "num": 3,
     "word": "reminiscens",
     "text": "<b>reminiscens</b>",
     "options": [
      "svag minnesbild",
      "avkoppling",
      "försynt anmärkning",
      "tillåtelse",
      "upprepad tillsägelse"
     ],
     "correct": 0
    },
    {
     "num": 4,
     "word": "som en löpeld",
     "text": "<b>som en löpeld</b>",
     "options": [
      "ivrigt",
      "smidigt",
      "oavbrutet",
      "livligt",
      "snabbt"
     ],
     "correct": 4
    },
    {
     "num": 5,
     "word": "delirium",
     "text": "<b>delirium</b>",
     "options": [
      "raseriutbrott",
      "svimningsanfall",
      "förvirringstillstånd",
      "besatthet",
      "handlingsförlamning"
     ],
     "correct": 2
    },
    {
     "num": 6,
     "word": "innevarande",
     "text": "<b>innevarande</b>",
     "options": [
      "omgiven",
      "pågående",
      "tillhörande",
      "modern",
      "vilande"
     ],
     "correct": 1
    },
    {
     "num": 7,
     "word": "konventioner",
     "text": "<b>konventioner</b>",
     "options": [
      "sociala regler",
      "nedskärningar",
      "frågeställningar",
      "svårigheter",
      "oväntade effekter"
     ],
     "correct": 0
    },
    {
     "num": 8,
     "word": "avpollettera",
     "text": "<b>avpollettera</b>",
     "options": [
      "avrunda",
      "skicka iväg",
      "undvika",
      "glömma bort",
      "avråda"
     ],
     "correct": 1
    },
    {
     "num": 9,
     "word": "förorättad",
     "text": "<b>förorättad</b>",
     "options": [
      "angiven",
      "bekymrad",
      "missförstådd",
      "sårad",
      "tillrättavisad"
     ],
     "correct": 3
    },
    {
     "num": 10,
     "word": "antologi",
     "text": "<b>antologi</b>",
     "options": [
      "textsamling",
      "motsägelse",
      "kulturstudie",
      "folklivsforskning",
      "kunskapsteori"
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
     "title": "Översättning",
     "html": "<p>EU:s översättare gör ett jättejobb. Man får dock inte glömma att deras frihet att göra tunga och komplicerade EU-texter ”svenska” är begränsad. Rättsakter, som förordningar och direktiv, speglar en kompromiss mellan medlemsstaternas juridiska behov – och syn på språk. Och eftersom översättningen måste ligga mycket nära grundtexten, blir även den svenska texten tung och komplicerad. Språklagens krav på ”vårdat, enkelt och begripligt” kan tyckas långt borta.</p>\n<p>Men det svenska språkarbetet bör inte ses som avslutat i och med EU-översättningen. I synnerhet gäller detta direktiven, som när de införs i medlemsstaternas lagstiftning bara är bindande ”med avseende på det resultat som ska uppnås”. Medlemsstaterna är således fria att bestämma formen. Det betyder bland annat att direktivens juridiska system, terminologi och språkliga utformning kan bearbetas till en mer hanterlig form i svenska lagar och föreskrifter, så länge deras mål och mening består. Införlivandet är alltså ytterligare ett ”översättningsarbete”; direktivet anpassas till svenska förhållanden och överförs till ett begripligt regelverk som fungerar i Sverige.</p>\n<p>Bäst blir det förstås om jurister, ämnesexperter, språkexperter och terminologer samarbetar i denna andra översättning. Ett bra exempel är arbetet med Socialstyrelsens vävnadsföreskrifter, som kom i en ny version årsskiftet 2009/2010. Samarbetet mellan de olika professionerna har banat väg för ett svenskt regelverk som är betydligt mer begripligt och tillämpbart än den svenska översättningen av direktivet. Dessutom är det förankrat bland användarna redan innan det träder i kraft. Visserligen kunde man som språkkonsult önska sig ett ännu klarare språk i föreskrifterna, men framför allt bör det tvärprofessionella arbetssättet bli mönsterbildande. Mycket arbete har lagts ned på vävnadsdirektivet, men resultatet – ett användbart svenskt regelverk – är mödan värt och arbetssättet något att dra lärdom av för andra myndigheter.</p>\n<p class=\"forf\">Helena Palm</p>\n<p><b>vävnadsföreskrifterna</b> = hanteringen av vävnader och celler som ska användas för transplantation, assisterad befruktning och tillverkning av läkemedel</p>"
    },
    {
     "title": "Invandring bygger landet",
     "html": "<p>Invandring är inget nytt fenomen, om nu någon trodde det, och om man hårdrar det hela är väl alla människor invandrare i någon mån. Mitt eget efternamn är troligen en försvenskning och förkortning av ortnamnet Hoyesworth i norra Tyskland, varifrån mina anfäder ska ha flyttat eller flytt under trettioåriga kriget. Jag skulle tro att om man letar sig några generationer tillbaka och skrapar lite på ytan så har många liknande historier.</p>\n<p>Författaren Anders Johnson har i boken <i>Garpar, gipskatter och svartskallar</i> mer än skrapat på ytan. Han har via befintlig historisk forskning och litteratur grävt sig tillbaka genom seklerna och hittat invandrare som byggt katedraler, startat utrikeshandel, effektiviserat förvaltningen och så vidare. Boken gestaltar verkligen hur modern den nationella identiteten är. Det svenska riket före 1809 var, liksom så gott som alla förmoderna välden, ett mångnationellt mischmasch av olika landområden med folk med skilda språk, traditioner och ibland religioner. Därför var det för några hundra år sedan självklart att det ofta talades tyska i Stockholm, att det vetenskapliga språket var latin, att en avsevärd del av rikets befolkning talade finska. Först efter 1809 blev svenskan det nationella språket. Under den period som storsvenskt sinnade personer i efterhand brukade kalla ”fornstora dar” – 1600-talet – byggdes den svenska armén upp av invandrade holländska, franska, tyska, italienska, spanska och ungerska officerare, ja paradoxerna är många när man ser förbi efterhandskonstruktionerna.</p>\n<p><i>Garpar, gipskatter och svartskallar</i> är en lättläst och översiktlig bok – kul att bläddra och läsa i här och där. Den är full av bilder, intressanta faktarutor, korta personporträtt och konkret information. En värdefull sammanfattning av hur det vi brukar kalla ”svenskt” har formats genom invandring och kulturmöten.</p>\n<p class=\"forf\">Henrik Höjer</p>"
    },
    {
     "title": "Hotade arter",
     "html": "<p>Redan under 1990-talet arbetade Naturvårdsverket med åtgärdsprogram för vissa hotade arter, exempelvis fjällräv, vissa grodarter och några fiskar. Men det dröjde in på 2000-talet innan det blev ordentlig fart och systematik i arbetet. Då kom vissa konkreta åtaganden. Exempelvis skulle förlusten av biologisk mångfald hejdas till år 2010 (ett delmål i konventionen för biologisk mångfald) och andelen hotade arter skulle ha minskat med 30 procent år 2015 (enligt de svenska miljömålen). – Det fanns plötsligt beslutade mål som gjorde att statsmakterna kände att man måste göra något, säger Per Johansson, Naturvårdsverkets samordnare.</p>\n<p>Artdatabanken gjorde på verkets uppdrag en analys av landets hotade arter och kom fram till en lista över vilka som var i störst behov av åtgärder. Listan omfattar ungefär 400 arter, uppdelade på drygt 200 åtgärdsprogram. De flesta av dessa program handlar bara om en enda art, men det finns också program för naturtyper och grupper av arter, till exempel sydvästsvenska ljunghedar och björklevande skalbaggar.</p>\n<p>Den digra listan delades upp på de respektive länsstyrelserna, så att de fick ansvar för att skriva några åtgärdsprogram vardera. I skrivande stund är cirka 115 åtgärdsprogram skrivna och godkända av Naturvårdsverket, och runtom i landet pågår arbetet för fullt med att dels skriva resten av programmen, dels förverkliga de åtgärder som föreslagits.</p>\n<p>För att finansiera arbetet får länsstyrelserna en särskild pott pengar från Naturvårdsverket varje år, en summa som ökade årligen från 2004 för att plana ut på 87 miljoner om året under 2007 och 2008. ÅGP-pengarna, som de kallas på miljötjänstemannaslang, har blivit ett viktigt komplement där anslagen för vård av naturreservat och annan skyddad natur inte räcker till.</p>\n<p>– I åtgärdsprogrammet kan man fokusera på sådant som man inte klarar på andra sätt. Pengarna kan användas överallt i landskapet, inte bara i reservat, säger Per Johansson.</p>\n<p>Därför finns det bland åtgärdsprogrammen en överrepresentation av arter som kräver att man åtgärdar brister i landskapet i stort. Det kan till exempel handla om blomrika marker och tillgången till öppna sand- och grusmarker, eller om bränder och död ved i skogen.</p>\n<p>Somliga åtgärdsprogram har redan visat sig vara framgångsrika. Åtgärderna för mnemosynefjäril, mosippa och nålginst har gett snabba resultat. Skräntärnorna har återvänt till sin restaurerade koloni. Kornsparv och flera grodarter tillhör också framgångsexemplen. Arbetet med lövgrodor är en verklig succé. Men det finns också exempel på motsatsen. Man har exempelvis inte lyckats knäcka koden till den grönfläckiga paddans behov. Den har inte svarat på åtgärderna. Endast paddorna själva vet varför.</p>\n<p class=\"forf\">Mats Ottosson</p>"
    },
    {
     "title": "Lättillgängligt om Bellman",
     "html": "<p>Carl Michael Bellman och hans diktning har gett upphov till en mängd studier genom åren, men trots detta har det varit ont om lättillgängliga och övergripande beskrivningar av författarskapet. Denna brist har Lars Lönnroth rått bot på genom sin bok <i>Ljuva karneval! Om Carl Michael Bellmans diktning</i>.</p>\n<p>Författarens uttalade mål med detta verk är att sammanfatta tidigare forskning om Bellmans diktning. Det finns dock vissa grundläggande teman och tankar som genomsyrar boken och gör att den känns som en helhet, trots de många olika områden som berörs. Ett sådant tema är, som titeln antyder, karnevalen – maskeraden och maskspelet. Lönnroth framhåller hur diktarrollen under Bellmans tid inte hade något att göra med romantikens idéer kring det ”genuina” och ”uppriktiga”, utan mer kan betraktas som en uppsättning masker för olika tillfällen. När det gäller diktare från den tiden är det därför särskilt vanskligt att försöka leta efter författarens egna ståndpunkter och känslor i verken. Man bör istället tänka sig författaren som en skådespelare, som spelar de roller som passar bäst för stunden. I samband med detta framhåller Lönnroth hur Bellman ofta själv framförde sina verk, och då bokstavligen spelade dikternas olika rollgestalter i en sprudlande enmansföreställning.</p>\n<p>I mångas efterföljd vill Lönnroth se Bellmans förmåga att foga ihop helt olika typer av genrer, eller masker, och skapa nya upplevelser som utmärkande för hans diktning. Just denna genreblandning blir skälet till att även sådana delar av författarskapet som Lönnroth själv inte uppskattar, exempelvis den rojalistiska diktningen, får en plats i boken. Argumentet lyder att vi kan nå större kunskap om Bellmans mästerverk genom att studera hans mer traditionsbundna prestationer, eftersom just hans kunskap om olika disparata genrer utgjorde grunden för de starka effekterna i exempelvis epistlarna. Genom att studera hur Bellman behandlar etablerade genrer kan vi alltså enligt Lönnroth nå större kunskap om hur strukturen i de blandade verken fungerar. Detta är inte en särskilt kontroversiell åsikt idag, men poängen tål att upprepas.</p>\n<p>Överlag är framställningen i <i>Ljuva karneval!</i> mycket lättläst, samtidigt som den vilar på en stabil kunskapsgrund. Den ger en god överblick över Bellmans diktning och Bellmanforskningen, och kan rekommenderas till alla som vill ha en introduktion till ett av vårt lands viktigaste författarskap. Som akademiker hade man dock uppskattat en fylligare notapparat och en källförteckning. Å andra sidan kan man tänka sig att boken lockar till sig fler ur den intresserade allmänheten i sitt nuvarande skick.</p>\n<p>Som läsare av ett sammanfattande verk av detta slag bör man dock hålla i minnet att det är omöjligt att ge en heltäckande bild av de senaste två seklernas rika Bellmanforskning. Författaren har gjort ett urval, ofta baserat på sin egen litteratur- och vetenskapssyn. Grunderna i just Lönnroths litteratursyn framträder tydligast i de avsnitt där han formulerar egna analyser av Bellmans verk. Där blir det uppenbart att han skriver inom en tradition som värdesätter komplexa och mångtydiga texter och försöker blottlägga spänningar och mångtydigheter i texten.</p>\n<p>Ett bra exempel på detta är hans analys av epistel nr 82, ”Vila vid denna källa”. Där hävdar Lönnroth att dödens ankomst i slutet av episteln förbereds genom vissa ”mörka stråk” och ”lätt störande element” i de tidigare stroferna. De exempel han anför är bland andra den nyss skjutna beckasinen, den vrålande tjuren, hönans loppor, den skrattande skatan, de svarta skuggorna under träden och den nyss kallnade kyckling som får sin vinge avriven av Ulla. För en forskare som hellre vill se episteln i dess samtida kontext kan hans kommentar förefalla anakronistisk. För Bellman borde till exempel det faktum att beckasinen nyss skjutits ha indikerat att den var färsk och att det var en läcker frukost som dukats upp.</p>\n<p>Överhuvudtaget känns det ur ett 1700-talsperspektiv mer naturligt att istället fokusera på överflödet i denna epistelsamlingens grande finale. Precis som var brukligt vid operaföreställningar samlas här alla i en ståtlig final, med både visuellt och musikaliskt överdåd. Innan Fredman stiger fram och tar sitt slutliga avsked av publiken ägnas de fem första stroferna åt att måla upp den ståtliga scenen för oss. Här finns ett överflöd av dyr mat och vin, musik och ljud och rörelse; här finns människor och djur.</p>\n<p>Bellman målar upp bilden av en välmående landsbygd med en mängd djur. Tillsammans med den skrattande skatan, den vrålande tjuren och hönan som loppar sin vinge finns svalor, hästar och lamm, och det beskrivs upprepade gånger hur de ”prägtigt på fältet pråla”. Till detta hör alla de ljud som gör scenen än mer levande. Skatan skrattar och tjuren vrålar, precis som lammet bräker, musikanterna spelar, de ”små kärlekspanterna” sjunger, de gamla mostrarna tjattrar och löven susar. Även skuggorna under träden kan ses som en del i detta överflöd. De rör sig över hela skalan från ”svarta” till ”grå och ljusa”; ett exempel på den variation som utmärker beskrivningarna av sceneriet. Ett nyckelord är ”ljufligt”, spetsställt i början av strofen:</p>\n<p><i>Ljufligt där löfven susa I svarta hvirflar grå och ljusa,</i></p>\n<p><i>Träden en skugga krusa, Inunder skyars fläkt och drag.</i></p>\n<p>Lönnroth anser att läsaren inte är helt oförberedd på Fredmans ”envoi” i strof sex, på grund av de ”enstaka mörka stråk” som återfinns i de tidigare stroferna. En forskare som försöker se texten ur ett mer samtida perspektiv kanske snarare skulle säga att läsaren inte är helt oförberedd på avskedet på grund av de drag av operafinal som återfinns i de tidigare stroferna.</p>\n<p>Därmed inte sagt att Lönnroths tolkning här, och annorstädes i boken, är felaktig, men att den står för enbart en av många infallsvinklar. Så länge man håller detta i åtanke kan <i>Ljuva karneval!</i> fungera som en välbehövlig, användbar och roande skildring av ett författarskap som aldrig slutar att fascinera.</p>\n<p class=\"forf\">Annie Mattsson</p>\n<p class=\"dikt\"><b>anakronistisk</b> = som hör hemma i en annan tid än den skildrade<br><b>envoi</b> = kort avslutningsstrof i en längre dikt</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vad gör den svenska EU-översättarens uppgift särskilt besvärlig, enligt texten?",
     "options": [
      "Det tidskrävande i att anpassa originaltexten till svensk lagstiftning.",
      "Det komplicerade i att vara trogen originalet och samtidigt skriva förståeligt.",
      "Det tvivelaktiga i att offra originalets exakthet av språkliga hänsyn.",
      "Det svåra i att förena de olika experternas motstridiga intressen."
     ],
     "correct": 1,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vad är det textförfattaren särskilt uppskattar med den nya versionen av Socialstyrelsens vävnadsföreskrifter?",
     "options": [
      "Att den anpassats till svenska lagar.",
      "Att den bättre motsvarar förordningens ursprungliga ambitioner.",
      "Att den är språkligt enkel och begriplig.",
      "Att den tillkommit genom ämnesövergripande expertmedverkan."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Har Anders Johnson, enligt texten, någon uttalad avsikt med sin bok, och i så fall vilken?",
     "options": [
      "Ja, att undersöka och berätta en försummad invandrarhistoria.",
      "Ja, att motverka myten om en modern svensk identitet.",
      "Ja, att bemöta invandrarfientliga attityder och strömningar.",
      "Nej, någon uttalad avsikt framgår ej av texten."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vad uppskattar recensenten särskilt med boken?",
     "options": [
      "Författarens egen historia och bakgrund.",
      "De oväntade slutsatserna.",
      "Den lättillgängliga framställningen.",
      "Ämnet och dess aktualitet."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Hur skiljer sig arbetet med de listade arterna från övrig naturvård, enligt texten?",
     "options": [
      "De ekonomiska resurserna för det är större och mer riktade mot klart definierade miljöer.",
      "Det har generellt varit mer framgångsrikt än det övriga naturvårdsarbetet.",
      "Det innebär att övergripande levnadsmiljöåtgärder genomförs i fler områden.",
      "Det sköts i huvudsak av länsstyrelserna medan övrig naturvård sköts av Naturvårdsverket."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 16,
     "text": "Vad var anledningen till att det dröjde innan Naturvårdsverkets arbete med hotade arter kom igång på allvar?",
     "options": [
      "Man hade inte tillräckligt kartlagt artförlusterna.",
      "Man saknade länge konkreta beslut uppifrån.",
      "Man avvaktade besked från länsstyrelserna.",
      "Man saknade tillgång till ÅGP-pengarna."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 17,
     "text": "Vilken av följande ambitioner har Lönnroth, enligt recensenten, när han analyserar Bellmans diktning?",
     "options": [
      "Att hitta kopplingar mellan motiven i dikterna och händelser i Bellmans egen tid.",
      "Att klarlägga vilka inspirationskällor och litterära förebilder Bellman haft.",
      "Att tolka mer svårfångade dimensioner och djupliggande betydelser i dikterna.",
      "Att beskriva hur dikterna konstruerats i formmässigt och tekniskt avseende."
     ],
     "correct": 2,
     "textIndex": 3
    },
    {
     "num": 18,
     "text": "Vad av följande saknar recensenten i Lönnroths bok?",
     "options": [
      "Tydligare hänvisningar till annan forskning.",
      "Ett källkritiskt förhållningssätt.",
      "Högre grad av vetenskaplig komplexitet.",
      "Mer textnära tolkningar."
     ],
     "correct": 0,
     "textIndex": 3
    },
    {
     "num": 19,
     "text": "Hur kan man enligt Lönnroth bäst beskriva 1700-talsdiktningen?",
     "options": [
      "Som känsloneutral.",
      "Som samhällstillvänd.",
      "Som oförutsägbar.",
      "Som situationsanpassad."
     ],
     "correct": 3,
     "textIndex": 3
    },
    {
     "num": 20,
     "text": "Vilken begränsning ser recensenten i Lönnroths tolkning av Bellmans epistel nr 82?",
     "options": [
      "Lönnroth förlorar sig i alltför många detaljer.",
      "Lönnroth bortser från det historiska sammanhanget.",
      "Lönnroth förankrar inte tolkningen vetenskapligt.",
      "Lönnroth intresserar sig inte för textens mångbottnade karaktär."
     ],
     "correct": 1,
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
     "text": "Ett exempel på sådan forskning är en svensk studie där unga kvinnors och mäns föräldraidentifikation och yrkesval följts över flera decennier och bland annat _____ till politiska förändringar i omvärlden.",
     "options": [
      "resignerats",
      "refererats",
      "relaterats",
      "reformerats"
     ],
     "correct": 2
    },
    {
     "num": 22,
     "text": "Till presskonferensen kommer hon försenad och jetlaggad, men _____ och professionell. När vi sedan träffas i ett så _____ som på stolarna tomt, vitmålat rum säger hon generat att hon inte vet om hon har varit i Sverige förut.",
     "options": [
      "skärpt – där",
      "seriös – gott",
      "artig – när",
      "stel – ovanligt"
     ],
     "correct": 2
    },
    {
     "num": 23,
     "text": "Det är känt att _____ fler länder som skaffar sig massförstörelsevapen, desto större är risken att något går snett. Det finns flera tänkbara _____ som förr eller senare riskerar att göra sig påminda, såsom missförstånd, statskupper, terrorism och brist på _____.",
     "options": [
      "ju – faktorer – omdöme",
      "desto – möjligheter – resurser",
      "när – problem – förnuft",
      "ifall – scenarier – kunskap"
     ],
     "correct": 0
    },
    {
     "num": 24,
     "text": "Som elvaåring gjorde jag ett allvarligt försök att åstadkomma moralisk och _____ uppväckelse i mitt förslappade och sekulariserade grannskap. Påsken närmade sig och jag upprördes mycket över att ingen verkade _____ påskens egentliga budskap en tanke.",
     "options": [
      "religiös – ägna",
      "profan – skänka",
      "andlig – delge",
      "politisk – hedra"
     ],
     "correct": 0
    },
    {
     "num": 25,
     "text": "Stephen Jay Goulds resonemang mynnar i ett kraftfullt avvisande av all _____, av alla påståenden om att utvecklingen och historien bara kan ta en väg och finna ett mål.",
     "options": [
      "determinism",
      "nihilism",
      "idealism",
      "elitism"
     ],
     "correct": 0
    },
    {
     "num": 26,
     "text": "Statskuppen i juni 2009 var viktig eftersom det var första gången på många år som en statschef _____ av militär i Latinamerika. Demokratin har förvisso förankrats i regionen det senaste decenniet, men kuppen blottlade hur _____ denna utveckling är och att det finns kvar en spänning mellan demokratiförespråkare och representanter för gamla tiders _____ oligarkier.",
     "options": [
      "störtades – skör – koloniala",
      "tillsattes – långsam – pluralistiska",
      "undanröjdes – stark – matriarkala",
      "erkändes – viktig – parlamentariska"
     ],
     "correct": 0
    },
    {
     "num": 27,
     "text": "Bourdieus inträngande teoretiska diskussioner angående denna fråga löper genom hela boken _____ med de _____ undersökningarna.",
     "options": [
      "växelvis – implicita",
      "kontrasterande – primära",
      "tillsammans – disponibla",
      "parallellt – empiriska"
     ],
     "correct": 3
    },
    {
     "num": 28,
     "text": "Många av våra fjällväxter löser detta problem genom att fortplanta sig _____, genom groddknoppar, utlöpare eller sidoskott.",
     "options": [
      "geologiskt",
      "homogent",
      "sporadiskt",
      "vegetativt"
     ],
     "correct": 3
    },
    {
     "num": 29,
     "text": "Utbudet av högre utbildning och övriga kompetensinsatser behöver stimuleras i Vindelälvdalen för att skapa stärkta förutsättningar, _____ och innovationer för det småskaliga näringslivets utveckling och i utbudet av samhällsservice. Detta ger i sin tur förutsättningar för _____ på så sätt att ortens invånare väljer att inte flytta därifrån eller att människor utifrån ser möjligheter att bosätta sig i området.",
     "options": [
      "sysselsättning – minskad arbetslöshet",
      "kunskap – ökat medborgarinflytande",
      "utbyggnad – minskad utlokalisering",
      "nytänkande – ökat befolkningsunderlag"
     ],
     "correct": 3
    },
    {
     "num": 30,
     "text": "Det är precis detta fenomen som ligger bakom alla de motionsgrupper som under senare år bildats för _____ som haft hjärtinfarkt.",
     "options": [
      "respondenter",
      "konvalescenter",
      "anförvanter",
      "simulanter"
     ],
     "correct": 1
    }
   ]
  }
 ]
};
