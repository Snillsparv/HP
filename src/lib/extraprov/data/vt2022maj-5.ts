// Högskoleprovet 7 maj 2022, provpass 5 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "vt2022maj-5",
 "tillfalle": "vt2022maj",
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
     "word": "baxa",
     "text": "<b>baxa</b>",
     "options": [
      "tynga",
      "krossa",
      "förflytta",
      "hindra",
      "kasta"
     ],
     "correct": 2
    },
    {
     "num": 2,
     "word": "kadaver",
     "text": "<b>kadaver</b>",
     "options": [
      "död djurkropp",
      "missfoster",
      "rituellt offer",
      "rovdjur",
      "mänskligt vrak"
     ],
     "correct": 0
    },
    {
     "num": 3,
     "word": "villrådig",
     "text": "<b>villrådig</b>",
     "options": [
      "driven",
      "spontan",
      "obeslutsam",
      "krävande",
      "hjälpsam"
     ],
     "correct": 2
    },
    {
     "num": 4,
     "word": "textur",
     "text": "<b>textur</b>",
     "options": [
      "utfyllnad",
      "formbarhet",
      "innehåll",
      "ytbeskaffenhet",
      "tjocklek"
     ],
     "correct": 3
    },
    {
     "num": 5,
     "word": "substantiell",
     "text": "<b>substantiell</b>",
     "options": [
      "väsentlig",
      "överlägsen",
      "frikostig",
      "fördjupad",
      "omsorgsfull"
     ],
     "correct": 0
    },
    {
     "num": 6,
     "word": "arabesk",
     "text": "<b>arabesk</b>",
     "options": [
      "stjärnhimmel",
      "spritdryck",
      "aftonsång",
      "byggnad",
      "utsmyckning"
     ],
     "correct": 4
    },
    {
     "num": 7,
     "word": "implementera",
     "text": "<b>implementera</b>",
     "options": [
      "delta i",
      "avskaffa",
      "lägga sig i",
      "genomföra",
      "strunta i"
     ],
     "correct": 3
    },
    {
     "num": 8,
     "word": "nidbild",
     "text": "<b>nidbild</b>",
     "options": [
      "fantasifull skildring",
      "elak beskrivning",
      "lös sammansättning",
      "allmän uppfattning",
      "realistisk framställning"
     ],
     "correct": 1
    },
    {
     "num": 9,
     "word": "kopiöst",
     "text": "<b>kopiöst</b>",
     "options": [
      "likartat",
      "enormt",
      "overkligt",
      "överskattat",
      "exemplariskt"
     ],
     "correct": 1
    },
    {
     "num": 10,
     "word": "solitär",
     "text": "<b>solitär</b>",
     "options": [
      "stabil grund",
      "pålitlig källa",
      "hjälparbetare",
      "förmögen person",
      "ensamlevande växt"
     ],
     "correct": 4
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
     "title": "Probiotika mot psoriasis",
     "html": "<p>Nyligen kunde irländska forskare visa att en viss typ av probiotiskt kosttillskott kan ha goda effekter på psoriasis. Probiotika är nyttiga bakterier som verkar positivt på tarmfloran. Forskarna testade effekten hos olika former av probiotika, men det var inte förrän de studerade en särskild bakterie, <i>Bifidobacterium infantis</i>, som de upptäckte att patienterna verkligen blev bättre.</p>\n<p>I studien ingick 26 personer med psoriasis, varav hälften fick kosttillskott som innehöll den nyttiga bakterien och hälften fick sockerpiller. Två av tre psoriasispatienter som fått probiotikan hade därefter tydligt minskade halter av immunförsvarsproteinet TNF.</p>\n<p>– Majoriteten av patienterna visade minskade inflammatoriska nivåer, säger Liam O’Mahony, en av forskarna bakom studien.</p>\n<p>Det är alltså inte alla former av nyttiga bakterier som ger samma effekt.</p>\n<p>– Den här specifika mikroben har tidigare visat sig ha positiva effekter på tarmen. Vår studie är unik eftersom den tydligt visar att oral konsumtion av en enda nyttig bakterie kan påverka pågående inflammatorisk aktivitet även utanför magen, säger Liam O’Mahony.</p>\n<p>Om mängden psoriasis på huden minskade under behandlingen kan han inte svara på. Den här gången mätte forskarna bara nivåer av inflammation i kroppen.</p>\n<p>Det är också därför som det är för tidigt att gå ut med en rekommendation om den här formen av kosttillskott. Probiotikan i fråga är heller inte möjlig att köpa i Europa utan finns bara som kosttillskott på marknaden i USA och Kanada. Men den som får tag i probiotikan kan ändå prova själv hemma. Enligt Eamonn Quigley, en av de andra forskarna bakom studien, är det näst intill riskfritt.</p>\n<p>– Det finns väldigt få eller inga risker förutsatt att immunförsvaret inte är helt utslaget, säger han.</p>\n<p>Enligt Liam O’Mahony är det bra att ha en kritisk inställning till kosttillskott överlag.</p>\n<p>– Majoriteten av kosttillskotten på marknaden har väldigt lite forskning bakom och effekten av dem måste först bevisas. Det är väldigt viktigt att inse att olika probiotika har olika effekt. Majoriteten av den probiotika som vi har forskat på uppnår inte samma immunreglerande effekt som <i>Bifidobacterium infantis</i>. Det är viktigt att först tala med sin läkare innan man provar kosttillskott hemma, säger han.</p>\n<p class=\"forf\">Maja Lundbäck</p>"
    },
    {
     "title": "Kerstin Ekmans böcker",
     "html": "<p>Naturen spelar ofta huvudrollen i Kerstin Ekmans böcker. Just nu skriver hon en biografi om en naturens man, en botanist men framför allt entomolog – insektsforskare. På 1700-talet studerade han bland annat skadeinsekter på odlade grödor. Meningen är att boken ska bli en bred tidsskildring.</p>\n<p>– Clas Bjerkander, som han hette, skrev om sin tid, som var frihetstiden, även om han levde dryga tjugo år in i den gustavianska tiden: ”Då var allt levande och lustigt”. Jag använder denna fina lilla mening som titel på boken.</p>\n<p><i>Då var allt levande och lustigt</i> kommer ut till hösten. <i>Grand final i skojarbranschen</i>, från 2011, blev alltså inte den slutkläm på författarskapet som man kanske kunde tro av titeln att döma.</p>\n<p>Kerstin Ekmans författarskap började i deckargenren. Också då spelade naturen en avgörande roll, men med tiden har den fått ta om möjligt ännu större plats i hennes böcker. De jämtländska fjällen och dess människor är framträdande i romaner som <i>Händelser vid vatten</i> och trilogin ”Vargskinnet”. Och 2007 kom <i>Herrarna i skogen</i>. Med naturskildringarna följer en helt egen språkvärld.</p>\n<p>– Både skogen och botaniken har fått mig att skärpa uttrycken, vara saklig och benämna det som lever och växer med de speciella ord och namn som finns inom dessa områden. Det vidgar mitt språkområde men också min uppfattningsförmåga. Det har också betytt mycket sorg över det som exploateras för hårt och helt enkelt försvinner.</p>\n<p>Även språket försvinner, i sömlösa steg, med exploateringen. I <i>Herrarna i skogen</i> citerar Kerstin Ekman en tjänsteman som försöker döma ut ordet skog. Citatet av tjänstemannen väcker i sin tur tankar hos Ebba Lisberg Jensen, forskare i miljövetenskap. I en recension av Kerstin Ekmans bok skriver hon om de tyska filosoferna Theodor Adorno och Max Horkheimer, som i en ”svidande vidräkning” med moderniteten hävdade att språket har förvandlat promenaden till motion och maten till kalorier, ungefär som den levande skogen i franskt och engelskt vardagsspråk har blivit rätt och slätt ”trä”.</p>\n<p>”De enda ord som försvarar skogens värden mot avmystifieringen är vetenskapliga ord, som biologisk mångfald och biotop (ett ord som Ekman något syrligt menar att Naturskyddsföreningen ’släppt’ som namn på en skyddsvärd skog)”, skriver Ebba Lisberg Jensen.</p>\n<p>Redan när Kerstin Ekman skrev <i>Mörker och blåbärsris</i> 1972 var hon, som titeln antyder, helt beroende av landskapet och tiden, men även av människorna – och dialekten.</p>\n<p>– När människor talar sitt vardagsspråk och det är nytt för en, så sker det ett synskifte i hjärnan. Man ser dem på ett annat sätt. De är människor i en egen värld och man vill in i den världen.</p>\n<p><i>Mörker och blåbärsris</i> skrevs i den by i Ångermanland dit familjen hade flyttat. Där skrev hon också den uppmärksammade sviten ”Kvinnorna och staden”, som inspirerats av utvecklingen i Katrineholm. De fyra romanerna som ingår i serien berättar om hur staden växte fram i industrialiseringens Sverige, samtidigt som en ”inre stad” – kvinnornas och barnens – tar form.</p>\n<p>I Katrineholm växte Kerstin Ekman upp, men sörmländska har hon aldrig riktigt talat:</p>\n<p>– Mina föräldrar lärde sig att tala utan de tjocka l:en och de diftongerade vokalerna. Men jag har kvar många talesätt och uttryck efter min farmor.</p>\n<p>Dialekten är inte betydelsefull i ”Kvinnorna och staden”. Desto viktigare är den i de böcker som blev till i Jämtlands fjälltrakter. Till Valsjöbyn i nordvästra Jämtland flyttade Kerstin Ekman när maken inte längre var lektor vid dåvarande Mitthögskolan. Tidigare hade de varit där somrar och tidiga höstar. Här skrev hon, förutom <i>Händelser vid vatten</i>, de tre delarna i ”Vargskinnet”: <i>Guds barmhärtighet</i>, som utspelar sig i Jämtland i början av seklet, <i>Sista rompan</i> och <i>Skraplotter</i>.</p>\n<p>– Första gången jag hörde en riktigt gammal man tala i Valsjöbyn, sa han: ”Bjurn ha täji bra mä bjorsk för n’Börje.” Jag hade läst fornisländska så jag kunde översätta i huvudet: ”Bävern har tagit bra med björk för Börje.” Och det var ju rätt. Min man hade stora bäverfällningar på sina skogsmarker vid sjön.</p>\n<p>För tre år sedan kom <i>Grand final i skojarbranschen</i>. Där står inte naturen i fokus, utan läsaren får inblick i författarens splittrade personlighet. Lillemor Troj får representera den offentliga författaren, den som uppsminkad blir intervjuad av glättiga journalister i tv-soffor och som väljs in i Svenska Akademien. Men hon bär på en hemlighet: hon skriver inte sina böcker själv. Det gör i stället den vulgära men talangfulla Barbro ”Babba” Andersson, som döljer sig bakom kulisserna men hotar med att avslöja sanningen.</p>\n<p>Kerstin Ekman själv skyggar för offentligheten. <i>Språktidningen</i> har länge velat intervjua henne, och när hon nu, till vår glädje, vill ställa upp, är det bara via mejl. ”Skicka dina frågor så ska jag svara utan alltför stort dröjsmål”, skrev hon. Och svarade snabbt gjorde hon.</p>\n<p>I <i>Grand final i skojarbranschen</i> släppte Kerstin Ekman loss, och som läsare känner man att här har hon roat sig.</p>\n<p>– Den var faktiskt riktigt rolig att skriva. Sedan kommer ju allt efterarbete. Men jag tycker om att arbeta med text, inte bara i det inledande lite euforiska stadiet. Jag är ju hantverkare också.</p>\n<p>Framför allt är Kerstin Ekman en entusiastisk strykare. Det är rentav något av det hon uppskattar mest i skrivandet:</p>\n<p>– Jag tycker det är roligt att skriva för hand, skriva in och korrigera, men framför allt stryka.</p>\n<p>Kerstin Ekman kom i början av 1970-talet till en viktig insikt om sitt skrivande. Då förstod hon att det inte var henne det var fel på om hon tyckte att texten var dålig:</p>\n<p>– Det var ju texten som behövde göras om eller strykas ner. Att jag hade en kritisk fakultet i hjärnan som fungerade var ju egentligen en tillgång och ingenting att vara ledsen för.</p>\n<p>I övrigt har hon inte förändrat sitt sätt att skriva. – Det är detsamma som från början. Jag tror att det är som för en instrumentalist. Man har lust för musiken och fingrar på så gott man kan. Likadant med mitt skrivande. Det fordrar ju också mycket övning innan det blir något som kan tryckas och det betyder ju åratal innan tanken på det ens kommer upp.</p>\n<p>Efter <i>Grand final i skojarbranschen</i> har Kerstin Ekman också skrivit librettot till operan <i>Jorun orm i öga</i>, som uruppfördes 2013. Här har romanskrivande bytts ut mot något annat.</p>\n<p>– Operalibrettot var lyrik helt enkelt. Och det var väldigt roligt att återkomma till lyriken och få höra den sjungen i Marie Samuelssons tonsättning.</p>\n<p>Jag frågade vad som var det värsta med att skriva och hon svarade:</p>\n<p>– Något ”värsta” vet jag inte av. Som alla andra yrkesmänniskor börjar jag på morgonen och fortsätter framåt dagen.</p>\n<p>Så skrev Kerstin Ekman i sitt mejl. Några tillägg hade hon inte.</p>\n<p class=\"forf\">Cecilia Christner Riad</p>"
    },
    {
     "title": "En rättvisa byggd på vänskap",
     "html": "<p>När två parter ingår ett kontrakt eller avtal så förbinder de sig att agera i enlighet med det som bestäms i avtalet, varken mer eller mindre. Om en part bryter sina löften begår den avtalsbrott. Detta gäller även om avtalsbrottet beror på olyckliga omständigheter eller oförutsedda händelser. Så länge parterna inte bryter något löfte begår de däremot inget avtalsbrott, och alltså inget fel. Detta gäller även om avtalet är formulerat på ett sådant sätt att det ensidigt gynnar den ena parten. Den missgynnade parten får i sådana fall skylla sig själv, eftersom den av fri vilja ingått ett ofördelaktigt avtal.</p>\n<p>Ungefär så ser den moderna västerländska avtalsrätten ut. Men så har det inte alltid varit, och kanske är det inte heller så vi bör ha det i framtiden. Det hävdar Sacharias Votinius i sin doktorsavhandling <i>Varandra som vänner och fiender</i>. <i>En idékritisk undersökning om kontraktet och dess grund</i>. Enligt Votinius bygger dagens avtalsrätt på ett modernistiskt idéhistoriskt arv enligt vilket människor är skrupelfria egoister och varandras fiender. Detta synsätt vilar, menar han, på flera felaktiga föreställningar om människan och det mänskliga livet. Människor är inte egoister och varandras fiender, utan sociala varelser sammanvävda i ett nät av vänskapsrelationer. I dessa relationer är vi ibland egoistiska, men vi handlar också ofta av kärlek och medmänsklighet. Detta insåg de antika grekiska filosoferna i allmänhet, och Aristoteles i synnerhet. Votinius menar att vi borde lära av Aristoteles och återuppliva både hans människosyn och hans syn på kontraktet.</p>\n<p>Aristoteles människosyn återspeglas i hans etik. I denna så kallade dygdetik är det inte – som i mycket av den moderna etiken – handlingen och handlingens konsekvenser som står i centrum. I stället är det individen och individens karaktärsegenskaper som tilldrar sig intresse. För Aristoteles är en god människa den människa som har en god, eller dygdig, karaktär.</p>\n<p>Den aristoteliska kontraktsrelationen är utformad med vänskapsrelationen som förebild. Den ska vara båda parter till nytta och den inbegriper ömsesidig respekt. Det innebär att avtalsparterna bör bemöda sig om att formulera avtal som på bästa sätt gynnar båda parter, i stället för att i avtalet tillförsäkra sig själva största möjliga fördelar.</p>\n<p>Votinius menar, i enlighet med detta resonemang, att vi borde skapa ett rättssystem som i större utsträckning inriktar sig på att skipa moralisk rättvisa, i stället för att strikt tillämpa vissa ganska fyrkantiga rättsprinciper. Domstolarna skulle i sådana fall inte främst bli uttolkare av ett strikt bindande regelverk. I stället skulle de ha till uppgift att på ett hänsynsfullt och empatiskt sätt skipa rättvisa i enskilda fall. Detta innebär att lagen skulle tolkas flexibelt, eller som Aristoteles säger, rimligt (<i>epieikeia</i>). Den rimliga bedömningen är en bedömning som en god vän skulle göra. Domaren eller domstolen skulle givet en sådan rättsordning döma andra såsom de skulle döma en vän.</p>\n<p>Detta synsätt tillhör ett helt annat tankeparadigm än det nuvarande. Enligt det nuvarande rättspositivistiska paradigmet är ”fyrkantigheten” i juridiken nödvändig, eftersom den tryggar objektivitet och förutsägbarhet. Votinius argumenterar med emfas mot rättspositivismen, och menar att den varken är mer objektiv eller skapar större förutsägbarhet än den aristoteliska juridik han själv förespråkar. Anledningen till att så många ändå föreställer sig att så är fallet är enligt Votinius att positivismen fått en paradigmatisk ställning inom juridiken och samhället i stort. Detta innebär att uppfattningens moraliska och ideologiska värdebas tas för så självklar att den blir osynlig. En stor del av avhandlingen ägnas därför åt att åskådliggöra positivismens ideologi, och på så vis påvisa att den inte är värdeneutral.</p>\n<p>Positivismens ideologi är en modernitetens ideologi, och moderniteten genomsyrar stora delar av det västerländska samhällslivet. Den kan gestaltas med begrepp som positivism, liberalism, utilitarism och ekonomism. Positivismen är modernismens syn på kunskap och kunskapsinhämtning, liberalismen dess politiska ideologi, utilitarismen dess etik och ekonomismen dess praktiska politik. Rättspositivismen är denna ideologis juridik.</p>\n<p>I första hand koncentrerar Votinius sin analys på en kritik av liberalismens grundantaganden. Ett av dessa antaganden är synen på människan som en enhet i sig – en individ med en rad oavytterliga rättigheter. Denna individ är till sin natur en nyttomaximerande egoist. Det sistnämnda slogs fast av 1600-talsfilosofen Thomas Hobbes, som genom att vara en av den tidiga modernismens mest inflytelserika tänkare tilldrar sig Votinius särskilda intresse. Hobbes menade att människor ursprungligen levt i ett naturtillstånd där deras liv, i ett allas krig mot alla, var ”korta, obehagliga och våldsamma”. Den enda vägen ur detta miserabla tillstånd var enligt Hobbes att sluta ett slags fredsavtal, ett samhällskontrakt. Genom samhällskontraktet ger människorna upp en del av sin frihet till staten, i utbyte mot att staten skyddar dem som ingått samhällskontraktet från övergrepp. Detta kontrakt gynnar alla parters egenintresse, och maximerar alltså nyttan för alla inblandade.</p>\n<p>Samhällskontraktet och den grundläggande människosyn denna idé vilar på har sedan Hobbes, och senare den mycket inflytelserika upplysningsfilosofen John Locke, bildat norm inom både politisk filosofi av neoliberalt slag och inom nationalekonomin, modernismens paradvetenskap. Inom neoliberalismen yttrar sig denna norm i form av en nattväktarstat, i vilken staten endast har till uppgift att skydda medborgarens kropp och egendom. Inom nationalekonomin utgör <i>homo oeconomicus</i>, den genuint egoistiska och ekonomiskt nyttomaximerande människan, den vetenskapliga utgångspunkten.</p>\n<p>Denna bisarra människosyn har övertagits av rättspositivisterna, och på så sätt fått genomslag i juridiken. Juridiken har emellertid en betydligt längre historia än både liberalismen och nationalekonomin, och har sålunda formats av många andra influenser än de modernistiska. Votinius visar att inte minst Aristoteles tankar i perioder varit inflytelserika, och påtalar att dagens avtalsrätt präglas av både ett aristoteliskt rättviseideal, enligt vilket kontrakt bygger på vänskap, och ett ekonomistiskt tänkande, enligt vilket kontrakt är en form av bindande löfte mellan fiender. Men då domstolarna sällan är medvetna om den idéhistoriska och etiska grunden för sin argumentation blir denna, enligt Votinius, ofta inkonsekvent och förvirrande.</p>\n<p>Genom sitt arbete vill Votinius för det första blottlägga de underliggande ideologierna i juridiken, och för det andra göra klart att avtalsrätten borde bygga på det aristoteliska rättviseidealet. Hans huvudargument för det senare är att det finns starka empiriska bevis för att människan inte bara är egoistisk utan också medmänsklig, men också att rättssamhället måste motarbeta, i stället för att bekräfta och acceptera, människors egoistiska tendenser. Eller, som han skriver: ”En god rättsordning skapar förutsättningar för människor att behandla sina fiender som om de kunde komma att bli deras vänner”.</p>\n<p class=\"forf\">Joakim Molander</p>\n<p><b>paradigm</b> = system av allmänt erkända antaganden och tankemönster</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vad är, enligt texten, den stora nyheten med den beskrivna studiens resultat?",
     "options": [
      "Att probiotika minskar psoriasispatienters hudbesvär.",
      "Att försökspersonernas inflammationsnivåer var så individuella.",
      "Att den testade probiotikan hade så omfattande effekter.",
      "Att tarmarnas bakterieflora kan förbättras av probiotika."
     ],
     "correct": 2,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Hur mätte forskarna den beskrivna probiotikans effekt?",
     "options": [
      "De testade olika typer av bakterier.",
      "De studerade immunförsvarets aktivitet.",
      "De dokumenterade förändringar i huden.",
      "De undersökte tarmarnas bakterieflora."
     ],
     "correct": 1,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vad vill textförfattaren mest troligt säga med resonemanget om att ”språket har förvandlat promenaden till motion och maten till kalorier”?",
     "options": [
      "Att betoningen av nyttoaspekter har medfört att människan har förlorat kontakten med naturen.",
      "Att moderniseringen av språket kräver användning av nutida uttryck.",
      "Att användningen av vetenskapliga begrepp har avdramatiserat människans förhållande till naturen.",
      "Att ett mer komplext samhälle kräver större språklig precision i vardagen."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vilken fördel ser Kerstin Ekman framför allt med att lära sig nya ord och begrepp?",
     "options": [
      "Det ger en fylligare bild av världen.",
      "Det ger författaren större variationsmöjligheter.",
      "Det behövs för att förstå ovanliga dialekter.",
      "Det ger tillgång till fler litterära genrer."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vilken betydelse har dialekter för Kerstin Ekmans romanskrivande, enligt texten?",
     "options": [
      "Hon använder sin egen dialekt som ett verktyg i romanskrivandet.",
      "Hon använder sin makes dialektala ursprung som inspiration till romanerna.",
      "Hon använder dialekter för att synliggöra romanfigurernas verklighet.",
      "Hon använder dialekter som ett komplement till vetenskaplig terminologi."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Relativt tidigt i sitt yrkesliv lärde sig Kerstin Ekman något som har blivit avgörande för hennes författarskap. Vad?",
     "options": [
      "En mer avslappnad inställning till självkritik.",
      "Att ett gott hantverk inte garanterar ett originellt resultat.",
      "Hur lite den första idén betyder för slutprodukten.",
      "Betydelsen av ett disciplinerat arbetssätt."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Vilken av följande kvaliteter i ett avtal argumenterar Votinius framför allt för, enligt texten?",
     "options": [
      "Tydlighet.",
      "Hänsyn.",
      "Objektivitet.",
      "Konsekvens."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Vilket av följande påståenden om rättspositivismen överensstämmer bäst med Votinius uppfattning, om man utgår från texten?",
     "options": [
      "Rättspositivismen saknar historisk förklaring.",
      "Rättspositivismen skapar juridisk förutsägbarhet.",
      "Rättspositivismen är alltför öppen för tolkningar.",
      "Rättspositivismen bygger på värderingar."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Vad är enligt texten Votinius främsta invändning mot Thomas Hobbes idé om ”samhällskontraktet”?",
     "options": [
      "Att den utgår från att individens egenintresse omöjliggör fredligt samarbete.",
      "Att den överlåter åt staten att säkra människors trygghetsbehov.",
      "Att den sätter kollektivets intressen framför individens.",
      "Att den förutsätter att människor är fientligt inställda till varandra."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Vad anger Votinius som ett viktigt motiv till att förändra avtalsrätten?",
     "options": [
      "Det skulle göra människor mer lika inför lagen.",
      "Det skulle göra regelverket mindre omfattande.",
      "Det skulle kunna påverka människor till det bättre.",
      "Det skulle kunna minska den ekonomiska ojämlikheten."
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
     "text": "Preliminära resultat indikerar att de röda blodkropparna, som transporterar syre till kroppens vävnader, är förändrade vid diabetes och har en ökad _____ att fästa till blodkärlsväggen.",
     "options": [
      "förmodan",
      "benägenhet",
      "anspänning",
      "fallenhet"
     ],
     "correct": 1
    },
    {
     "num": 22,
     "text": "Kvävefixerande växter lever i _____ med bakterier som har förmågan att _____ kväve från atmosfären. Detta kväve tillgängliggörs för växterna i utbyte mot näringsämnen, till exempel i form av kolhydrater.",
     "options": [
      "harmoni – bryta ned",
      "allians – fånga upp",
      "interaktion – avge",
      "symbios – binda"
     ],
     "correct": 3
    },
    {
     "num": 23,
     "text": "Man kan jämföra med USA där många företagsledare har en bakgrund inom _____. Det beror i hög grad på att de första årens högre studier i USA ger en bra _____ inom ett flertal ämnen. Oftast är det först under de senare åren som man _____ sig, till skillnad mot i Sverige där de flesta väljer inriktning redan i gymnasiet.",
     "options": [
      "juridiken – fördjupning – breddar",
      "industrin – status – orienterar",
      "forskning – utgångspunkt – fokuserar",
      "humaniora – allmänbildning – specialiserar"
     ],
     "correct": 3
    },
    {
     "num": 24,
     "text": "Vid en akut räddningsinsats får utrustning och annan egendom, som till exempel fordon, maskiner eller fartyg, _____ av räddningsledaren.",
     "options": [
      "sättas åt sidan",
      "tas i anspråk",
      "ges vid handen",
      "ställas till rätta"
     ],
     "correct": 1
    },
    {
     "num": 25,
     "text": "Filmen börjar med att vi stiger in i en nedgången _____ i ett slitet cirkustält på den franska landsbygden. Det är sent 1890-tal och dags för cirkusdirektören att _____ nya begåvningar.",
     "options": [
      "entré – sikta",
      "manege – syna",
      "salong – sålla",
      "passage – skåda"
     ],
     "correct": 1
    },
    {
     "num": 26,
     "text": "1940-talets eftermiddagshem _____ barnen med läxläsning under ledning av förskollärare, och erbjöd dem möjligheter till lek och avkoppling.",
     "options": [
      "bistod",
      "upplyste",
      "omgav",
      "utfodrade"
     ],
     "correct": 0
    },
    {
     "num": 27,
     "text": "Nationers rätt att besluta om sin egen politiska status och utöva _____ inom gränserna för sin territoriella jurisdiktion är _____ av de flesta.",
     "options": [
      "intressen – frikänd",
      "mandat – underkänd",
      "suveränitet – erkänd",
      "påtryckningar – ökänd"
     ],
     "correct": 2
    },
    {
     "num": 28,
     "text": "Det är sedan tidigare känt att tilltron till vissa läkemedels effektivitet kan vara _____ till följd av så kallad publiceringsbias. Med det menas att studier som inte kan _____ effekt aldrig publiceras, vilket gör den sammantagna bedömningen alltför _____.",
     "options": [
      "begränsad – få – försiktig",
      "ensidig – motbevisa – partisk",
      "försvårad – ge – komplex",
      "överdriven – påvisa – positiv"
     ],
     "correct": 3
    },
    {
     "num": 29,
     "text": "Kontrabasen uppfanns i slutet av 1500-talet och tog knappt hundra år senare plats i den klassiska symfoniorkestern, men först under det sena 1700-talet uppmärksammades de första riktiga _____ på instrumentet.",
     "options": [
      "virtuoserna",
      "puritanerna",
      "kverulanterna",
      "amanuenserna"
     ],
     "correct": 0
    },
    {
     "num": 30,
     "text": "Om din _____ berörs av verksamhetens förändringsbehov behöver du som medarbetare vara beredd på att ta dig an nya arbetsuppgifter och delta i kompetensutveckling. I vissa fall kan dessa behov av förändring innebära att du blir _____.",
     "options": [
      "anställning – övergiven",
      "befattning – övertalig",
      "yrkesroll – överhängande",
      "arbetsförmåga – övermannad"
     ],
     "correct": 1
    }
   ]
  }
 ]
};
