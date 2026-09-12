// Högskoleprovet 1 april 2017, provpass 3 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "vt2017-3",
 "tillfalle": "vt2017",
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
   21,
   0.1
  ],
  [
   24,
   0.2
  ],
  [
   27,
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
   36,
   0.6
  ],
  [
   39,
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
   48,
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
   71,
   1.8
  ],
  [
   73,
   1.9
  ],
  [
   75,
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
     "word": "kurage",
     "text": "<b>kurage</b>",
     "options": [
      "respekt",
      "ärlighet",
      "disciplin",
      "tapperhet",
      "stolthet"
     ],
     "correct": 3
    },
    {
     "num": 2,
     "word": "abrupt",
     "text": "<b>abrupt</b>",
     "options": [
      "oklart",
      "konstigt",
      "plötsligt",
      "onormalt",
      "kortvarigt"
     ],
     "correct": 2
    },
    {
     "num": 3,
     "word": "torgföra",
     "text": "<b>torgföra</b>",
     "options": [
      "förnedra",
      "öppet uttrycka",
      "sammanträda",
      "kraftigt protestera",
      "underhålla"
     ],
     "correct": 1
    },
    {
     "num": 4,
     "word": "preferenser",
     "text": "<b>preferenser</b>",
     "options": [
      "något förutbestämt",
      "förhoppningar",
      "något man förmodar",
      "förberedelser",
      "något man föredrar"
     ],
     "correct": 4
    },
    {
     "num": 5,
     "word": "nischad",
     "text": "<b>nischad</b>",
     "options": [
      "övertygad",
      "nivågrupperad",
      "instängd",
      "specialiserad",
      "nekad tillträde"
     ],
     "correct": 3
    },
    {
     "num": 6,
     "word": "domän",
     "text": "<b>domän</b>",
     "options": [
      "nivå",
      "område",
      "rättighet",
      "församling",
      "ledarskap"
     ],
     "correct": 1
    },
    {
     "num": 7,
     "word": "svulstig",
     "text": "<b>svulstig</b>",
     "options": [
      "drömmande och poetisk",
      "behaglig",
      "alltför utsmyckad",
      "högljudd",
      "enformig och ointressant"
     ],
     "correct": 2
    },
    {
     "num": 8,
     "word": "celiaki",
     "text": "<b>celiaki</b>",
     "options": [
      "glutenintolerans",
      "syrebrist",
      "blodförgiftning",
      "halsinfektion",
      "ryggmärgsskada"
     ],
     "correct": 0
    },
    {
     "num": 9,
     "word": "försitta",
     "text": "<b>försitta</b>",
     "options": [
      "nöta",
      "förbereda",
      "dröja",
      "gå över",
      "missa"
     ],
     "correct": 4
    },
    {
     "num": 10,
     "word": "såta vänner",
     "text": "<b>såta vänner</b>",
     "options": [
      "nära vänner",
      "rika vänner",
      "falska vänner",
      "hemliga vänner",
      "gemensamma vänner"
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
     "title": "D som i Diameter",
     "html": "<p>Ibland kommer man som lärare på ett bra knep för att förklara något som gör att eleverna förhoppningsvis minns eller förstår något bättre. Jag tror att de flesta av oss som undervisar helst inte använder ”genvägar” utan vill att eleverna ska <i>förstå</i> och kunna använda kunskapen, men det här är ett knep för att skilja termer åt som annars kan vara svåra för många elever att hålla isär och förstå härledningen till.</p>\n<p>I årskurs 7 möter många elever återigen begreppen omkrets och area, och nyheten för flera är att beräkna omkrets och area på cirklar. Många läroböcker använder numera bara termen <i>radie,</i> och i beräkningar av omkrets används då <i>2r</i>. Min erfarenhet är att elever har med sig termen <i>diameter</i>. Och det är väl inte så dumt att våra elever lär sig både diameter och radie – och dessutom att säkert skilja dem åt?</p>\n<p>För en del elever är det helt självklart vilken term som hör till vilket mått i cirkeln. Från andra elever kommer frågan: Är det den eller den som är diameter? Eleven pekar i en figur men har svårigheter med att skilja på radie och diameter. Om eleverna söker efter en förklaring på internet så kan de hitta följande:</p>\n<p>En rät linje dragen från medelpunkten till en punkt på cirkeln kallas <i>radie</i>. Även längden av en sådan sträcka kallas radie. En rät linje dragen mellan två punkter på periferin genom cirkelns centrum kallas <i>diameter</i>. Även diameterns längd kallas diameter.</p>\n<p>Eller:</p>\n<p><i>Diameter</i>, den räta linje som går mellan två punkter på en cirkel och passerar genom cirkelns mittpunkt. Diametern är dubbelt så lång som radien. <i>Radie</i>, inom geometrin avståndet från en cirkels eller ett klots mittpunkt till dess periferi. Radien är exakt hälften så lång som diametern.</p>\n<p>Under en lektion ritade jag en cirkel på tavlan och gjorde sedan som de flesta gör – jag ritade ut diametern. Plötsligt insåg jag att det var ett versalt D jag hade markerat. En enkel minnesregel under grundskolans geometriavsnitt skulle kunna vara att diametern blir ett stort D i cirkeln.</p>\n<p>Jag har själv aldrig brytt mig om att ta reda på varför den ena sträckan heter radie och den andra diameter, men jag vet vilken som är vilken. För skojs skull slog jag nu upp det i <i>Matematiktermer för skolan</i> och läste de etymologiska förklaringarna:</p>\n<p>Ordet <i>radie</i> kommer, liksom ordet <i>radian</i>, av det latinska ordet <i>radius</i> (liten stav, eker, stråle, radie).</p>\n<p>Ordet <i>diameter</i> kommer av grekiska <i>diámetros</i>, sammansatt av <i>diá</i> (genom) och <i>métron</i> (mått).</p>\n<p>Så nu vet jag det också!</p>\n<p class=\"forf\">Teresia Brzokoupil</p>"
    },
    {
     "title": "Den osynliga kroken",
     "html": "<p>Vad kan pirater lära oss om ekonomi? En hel del – menar Peter T Leeson, professor vid George Mason University. Hans bok <i>The Invisible Hook: The Hidden Economics of Pirates</i> är en originell kombination av sjörövarhistoria och populärvetenskaplig nationalekonomi.</p>\n<p>Perioden 1716–1726 kan betraktas som något av en guldålder för de klassiska piraterna. Relativt trovärdiga källor talar för att 1 000–3 000 pirater hemsökte Karibiska havet, Atlanten och Indiska oceanen under denna period. Trots att upplysningen stod för dörren råder det ingen tvekan om att det dåtida civila samhället i stor utsträckning kännetecknades av ojämlikhet och förtryck. Enligt Leeson präglades däremot livet ombord på piratskeppen något överraskande av jämlikhet och långtgående maktdelning. Hur kunde sådana demokratiska institutioner uppstå i den bokstavligen laglösa miljö som piratskeppen utgjorde – mer än 50 år innan den konstitutionella demokratin fick sitt genombrott i USA?</p>\n<p>Piraterna var självfallet inte mer moraliskt sinnade än andra sjöfarare. Det var i stället just avsaknaden av formella regler, kombinerad med piraternas individuella strävan efter att maximera sin egen vinst, som gjorde det rationellt för dem att samarbeta. Författaren kallar denna mekanism ”den osynliga kroken” – piraternas motsvarighet till Adam Smiths teori om den ”osynliga handen”.</p>\n<p>Peter T Leeson är en företrädare för den österrikiska nationalekonomiska skolan. Ett av denna skolas utmärkande drag är den starka tron på den fria marknadens förmåga att överbrygga informationsproblem och därigenom vara den mest effektiva ”organisationsformen” för samhällsekonomin. Friedrich Hayek beskriver till exempel i sin klassiska artikel <i>The Use of Knowledge in Society</i> (1945) hur individer med begränsad information tack vare prismekanismen agerar <i>som om</i> de hade fullständig information om marknadens förutsättningar. På ett liknande sätt fick den osynliga kroken piraterna att eftersträva den organisationsform varigenom de bäst kunde bedriva ett så effektivt ”plundringsföretag” som möjligt. Piraterna blev tvungna att samarbeta för att nå framgång, men det var deras individuella vinstintresse som fick dem att göra det.</p>\n<p>Varför var demokrati det mest effektiva styrelseskicket när det gällde att maximera vinsten? För att nå framgång i strid fordras att en auktoritär makt kan fatta snabba, militäriska beslut. Det krävdes således att kaptenen hade fullständig makt över skeppet i strid. Å andra sidan var man ense om att denna makt på något sätt måste hållas tillbaka. Eftersom många pirater hade flytt från reguljära fartyg just på grund av att de behandlats illa av sadistiska kaptener ville man till varje pris undvika att den nye kaptenen fick för stor makt att utnyttja och trakassera sin besättning. I en sådan situation skulle det vara omöjligt att samarbeta och därmed också omöjligt att maximera vinsten. Lösningen på problemet blev att hålla demokratiska val där kaptenen röstades fram bland besättningen. Om denne misskötte sig kunde han avsättas och ersättas med en annan. För att hindra rovgiriga kaptener delades makten mellan kaptenen och kvartersmästaren, där den senare hade befäl över all icke-taktisk verksamhet.</p>\n<p>Relationen mellan befäl och besättning, såväl som den enskilde piratens förhållningsregler, sammanfattades i en sorts ”grundlag”. Väldokumenterade källor visar intressant nog att beslut rörande denna grundlag krävde enhällighet hos besättningen. Även detta kan förklaras som ett resultat av ekonomisk rationalitet. Enligt Buchanan och Tullock (1962) finns det två typer av kostnader förknippade med politiskt styre: kostnader för att fatta kollektiva beslut samt ”externa kostnader”, det vill säga kostnader för dem som motsätter sig det faktiska resultatet av det kollektiva beslutsfattandet. Graden av medbestämmande avgörs genom en avvägning mellan dessa två kostnader. I piraternas fall var de externa kostnaderna avsevärda: de regler man beslutade om skulle i mycket stor utsträckning komma att påverka de enskilda piraternas liv ombord på skeppet. Man var därför benägen att undvika att tvingas leva under en oönskad grundlag. I kombination med dödsstraff för piratverksamhet skapade risken för att åsidosatta pirater skulle frestas att gå bakom ryggen på den övriga besättningen dessutom starka incitament att undvika att göra vissa besättningsmedlemmar alltför missnöjda.</p>\n<p>Valet att överhuvudtaget bli pirat kan förklaras på ett liknande sätt. Lönen på de konventionella handelsskeppen var ofta usel. Även om sannolikheten att erövra en större skatt som pirat var relativt liten, var ändå den <i>förväntade vinsten</i> av att bli pirat stor. Detta kan jämföras med Gary Beckers (1968) revolutionerande analys av brott som rationell nyttomaximering från brottslingarnas sida. Självfallet förekom det även att tillfångatagna besättningsmän från handelsflottan tvingades att bli pirater, men detta var ett undantag snarare än en regel – den förväntade nyttan av pirater som i strid snarast hade incitament att bidra till en förlust var naturligtvis inte speciellt stor.</p>\n<p>Även bakom användandet av piraternas kanske mest stereotypa kännetecken – piratflaggan Jolly Roger – finns en ekonomisk förklaring: signalering. En av de största kostnaderna förknippad med sjöröveri bestod i att med våld nedkämpa de handelsfartyg som inte frivilligt valde att ge upp lasten. Därför gällde det att snabbt signalera att motstånd är lönlöst. Det var nämligen inte bara pirater som kunde ha intresse av att attackera handelsskepp – rivaliserande länders kustbevakningsfartyg drog sig inte för att attackera sina fienders handelsskepp. Eftersom dessa kustbevakningsfartyg emellertid inte var lika tungt beväpnade som många piratskepp kunde det ofta vara rationellt att försöka kämpa emot. Genom att hissa Jolly Roger kunde piraterna snabbt signalera att det är bäst att ge upp. De var även noga med att etablera ett rykte om sig själva som resonliga gentemot besättningar som inte bjöd motstånd.</p>\n<p><i>The Invisible Hook</i> innehåller kanske inte några direkt revolutionerande idéer. Boken skiljer sig däremot från andra populärekonomiska böcker genom att inte bara tillämpa ekonomiska teorier om hur incitament påverkar människors handlande, utan även erbjuda intressant läsning om några av de mest mytomspunna brottslingarna i historien.</p>\n<p class=\"forf\">Daniel Hedblom</p>"
    },
    {
     "title": "Socialisation och utveckling",
     "html": "<p>Frågan om fostran av individen är en gammal filosofisk och pedagogisk fråga som sysselsatte redan antikens grekiska tänkare. Den kan relateras till föreställningar om människans natur och idéer om hur världen <i>är</i> eller kanske snarare <i>borde vara</i> beskaffad. Sålunda har socialisation länge betraktats som en fråga om att forma, i betydelsen fostra, människor till att fungera i en given social kontext på ett förutbestämt sätt. Målet har varit givet – att forma och upprätthålla den (moraliska) kod och de normativa värden som kulturen vilar på och som antagits vara sanna och riktiga. Med målet givet har intresset fokuserats på medlet – att utforma strategier för att forma och fostra det växande barnet på önskat sätt. Detta har varit en uppgift för föräldrar och samhälleliga inrättningar.</p>\n<p>I detta ljus kan vi se en hel rad handlingar/beteenden som ingår i en <i>medveten</i> fostran. Som barn får man lära sig hur man ska hälsa, äta, klä sig och uppträda. Man får också lära sig att vissa saker talar man inte om och att olika handlingar kan vara tillåtna för vuxna respektive barn. Barn tillägnar sig också på ett mer subtilt och omedvetet sätt föreställningar om hur man är och ser ut när man är pojke respektive flicka och vad som är åldersadekvata beteenden. Det är tillåtet att gråta ohejdat när man är liten, men är man större ska man kunna kontrollera sina känslor, särskilt som pojke. Exemplen skulle kunna mångfaldigas. Tillsammans uttrycker de något som skulle kunna beskrivas som ett normativt tvång. Man kan med visst fog hävda att <i>skolan</i> till en inte oväsentlig del präglas av en normativ grundsyn.</p>\n<p>Det normativt-pedagogiska perspektivet på socialisation är i grunden behavioristiskt. I botten finns föreställningar om människans stora potential till formbarhet och om det lilla barnet som ett oskrivet blad där den yttre verkligheten ristar sina intryck. Föreställningen att människan blir vad hon blir genom miljöns påträngande inverkan sätter studiet av livsmiljö i forskningens fokus, liksom nödvändigheten att forma på rätt sätt. I en behavioristisk tradition är socialisation till stor del ett tekniskt problem, där det centrala är att finna och utforma de villkor som ger förutsägbara resultat, det vill säga önskade beteenden.</p>\n<p>Eftersom barnet i denna ansats ses som den passiva parten (barnet som objekt) har liten uppmärksamhet ägnats åt själva <i>processen,</i> det vill säga <i>hur</i> människan formas som social varelse, hur det kommer sig att människor utvecklas på olika sätt, och vilken roll barnets egna val och preferenser har, beroende på den historia barnet har med sig (barnet som subjekt). Den grundläggande frågan i denna tradition, som uttrycker hur man bör vara, bör bete sig, bör tänka etc. är i stället: <i>Hur får vi människor att handla på ett önskat sätt?</i></p>\n<p>Aaron Cicourel har i sin forskning kunnat konstatera att vuxna lägger på barn sina egna kunskaper, normer och värderingar och på så sätt delvis hindrar barn från att själva och i sin egen takt stegvis utveckla sin sociala kompetens. Han menar att vuxna rutinmässigt för barnen in i den sociala vuxenvärlden. Genom denna överföring, menar Cicourel, förenklar man för barn så att deras känsla för hur den sociala strukturen är uppbyggd och fungerar går förlorad. Det första barnet lär sig är att det finns två grupper, barn och vuxna. Efter hand lär sig barnet att skillnaden ligger i storlek, makt och ansvar, vilket framledes för barn blir betydande kännetecken på social struktur.</p>\n<p>Ett annat förhållningssätt finner man i utvecklingspsykologin (till exempel Piaget, Vygotsky) och socialpsykologin (till exempel Mead) där mänskliga relationer studeras utifrån begrepp som identitet, roll, status samt etnisk och social klasstillhörighet. Det vetenskapliga fokuset är här vanligen deskriptivt: man försöker förstå hur människan blir den hon blir (kognitivt, moraliskt och socialt) utifrån de sociala verkligheter eller kontexter hon formas i. Fokus ligger här inte bara på individen utan också på den omgivande sociala kontexten. Socialisationsprocessen beskrivs i termer av hur individen formas beroende på till exempel kulturtillhörighet i en faktiskt existerande social ordning. I detta perspektiv är harmonin, eller disharmonin, mellan individen och samhället i fokus medan den moraliska och normativa aspekten av fostran är underordnad. Den grundläggande frågan är här inte hur man får människor att bete sig på ett visst sätt utan <i>hur det kommer sig att människor tänker och handlar som de gör</i>.</p>\n<p>I litteraturen finner man att socialisation i denna tradition definieras i vidare termer – till exempel som en adaptionsprocess till rådande strukturer och värderingar i en given social verklighet.</p>\n<p>När vi som vuxna ikläder oss en viss yrkesroll, till exempel börjar arbeta på en förskola eller i en skola, kommer vi till en kultur med traditioner, normer och värderingar. Dessa finns på en generell nivå för hela yrkesområdet, oberoende av arbetsplats, och på en specifik nivå på den enskilda arbetsplatsen. Oavsett vad vi själva har med oss för föreställningar kommer vi att möta föreställningar som utgör <i>socialiserande faktorer</i>. Vi kommer att utsättas för ett tryck i form av förväntningar på att tänka, vara och uppträda i enlighet med den kod som finns. Vi är dock inte bara objekt utan kan också som subjekt inom vissa ramar påverka och utveckla, bland annat beroende på den sociala status vi får eller tilldelas.</p>\n<p>Vi tänker oss exemplet att en ny förskola ska öppnas. Rätt mycket energi kommer i ett inledningsskede att läggas på att bestämma hur saker och ting ska vara mellan de vuxna aktörerna, vilka rutiner och regler som ska gälla och hur man vill arbeta med barnen. Av detta kan vi se att vi i sociala sammanhang behöver en rad olika överenskommelser och konventioner som reglerar såväl våra inbördes relationer som hur vi ser på den gemensamma verksamhet vi ska arbeta i. Då de inblandade aktörerna kommer med <i>olika</i> erfarenheter måste de socialiseras i förhållande till varandra och med avseende på hur man uppfattar målen med verksamheten.</p>\n<p>I vid mening innebär alla nya mänskliga möten en form av konfrontationer där kontrahenternas egen socialisation</p>\n<p>(i betydelsen vilka normer, värderingar och uppfattningar man bär på) prövas. Man kan välja att anpassa sig eller att <i>se ut som om</i> man anpassar sig. I det första fallet kan det vara så att man låter sig socialiseras för att man anser de idéer, attityder och föreställningar som finns där vara sanna och riktiga fullt ut. Det kan emellertid också handla om en skenbar anpassning – en överlevnadsstrategi. Man gör det som förväntas och uppvisar ett beteende som visar att man i värderingsfrågor inte avviker från andra, fast man egentligen inte delar deras värderingar. I olika diskussioner där man inte delar majoritetens uppfattning håller man en låg profil. Alla skenbara former av anpassning kan dock leda till senare svårigheter, yrkesmässigt och/eller personligt.</p>\n<p class=\"forf\">Anders Hill &amp; Tullie Rabe</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vad framstår som författarens huvudsakliga syfte med texten?",
     "options": [
      "Att förklara skillnaden mellan termerna radie och diameter.",
      "Att förmedla en egen pedagogisk erfarenhet.",
      "Att argumentera för fler minnesregler i undervisningen.",
      "Att föreslå en metod för att undvika genvägar i undervisningen."
     ],
     "correct": 1,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vad av följande tycks enligt textförfattaren bidra till elevernas problem med termerna diameter och radie?",
     "options": [
      "Att eleverna förväntas använda termerna på helt nya sätt.",
      "Att eleverna oftast har svårt att växla mellan två termer som betyder samma sak.",
      "Att eleverna är vana vid den ena termen medan läroböckerna använder endast den andra.",
      "Att eleverna sällan hittar entydiga förklaringar till termerna när de själva söker efter dem."
     ],
     "correct": 2,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vad är, av texten att döma, kärnan i Leesons resonemang kring piraternas sätt att organisera sin verksamhet?",
     "options": [
      "Att den ekonomiska framgången var beroende av piraternas individuella förutsättningar.",
      "Att de enskilda piraternas strävan naturligt gav upphov till en gemensam ordning.",
      "Att maktdelningen ombord övergick i auktoritärt styre när piraterna befann sig i strid.",
      "Att piraternas egenartade demokrati uppstod till följd av att deras aktiviteter var olagliga."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Hur, i huvudsak, har Leeson valt att studera 1700-talets pirater?",
     "options": [
      "Som banbrytande strateger.",
      "Som demokratiska förkämpar.",
      "Som ekonomiska aktörer.",
      "Som kriminella element."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vad framhålls i texten som en viktig orsak till den höga graden av medbestämmande ombord?",
     "options": [
      "Strävan att minimera de externa kostnaderna.",
      "Strävan att minimera antalet kostsamma strider.",
      "Strävan att minimera kostnaderna av ett kollektivt beslutsfattande.",
      "Strävan att minimera antalet kostsamma felbeslut."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Vilket av följande påståenden fångar, av texten att döma, bäst det budskap som Leeson vill förmedla med sin bok?",
     "options": [
      "En fri marknad leder till fria individer.",
      "En fri marknad leder till effektiva arbetsformer.",
      "En fri marknad leder till solidariska handlingar.",
      "En fri marknad leder till organiserad brottslighet."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Enligt textförfattarna kan det vara så att ett och samma beteende är accepterat då man är barn men inte då man är äldre. Vad ligger bakom denna skillnad?",
     "options": [
      "Den undervisning som ges i den moderna skolan.",
      "Vuxnas omedvetenhet om barns utveckling.",
      "Trycket från samhällets normer.",
      "De värderingar som bygger på människors faktiska utveckling."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Vad menar textförfattarna med att behavioristerna uppfattar socialisation som ett ”tekniskt problem”?",
     "options": [
      "Behavioristerna anser att barnet glöms bort när den perfekta skolmiljön ska utformas.",
      "Behavioristerna anser att samhället måste börja tillgodose det enskilda barnets behov.",
      "Behavioristerna ser människor som individer som har rätt att utvecklas på skilda sätt.",
      "Behavioristerna ser människor som objekt som kan styras i en given riktning."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Vad är i grunden kännetecknande för vuxnas socialisationsprocesser, enligt texten?",
     "options": [
      "De uttrycker individens önskan att tillägna sig gruppens normer och värderingar.",
      "De utgör möten mellan egna och andras normer och värderingar.",
      "De syftar till att nå enighet om vad som är bäst för majoriteten.",
      "De leder till yrkesmässiga och/eller personliga svårigheter."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Vari består, enligt texten, den mest väsentliga skillnaden mellan behavioristisk (B) och utvecklingspsykologisk (U) tradition när det gäller synen på barnet och dess utveckling?",
     "options": [
      "B betonar olikheterna, U betonar likheterna.",
      "B ser barnet som process, U ser det som identitet.",
      "B ser barnet som subjekt, U ser det som objekt.",
      "B vill ingripa och påverka, U vill förstå."
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
     "text": "Enligt vissa teorier finns det en _____ bakgrund till reumatism; ett starkt och aktivt immunsystem har varit en överlevnadsfördel i tider när många människor dukat under i infektioner.",
     "options": [
      "evolutionär",
      "rudimentär",
      "supplementär",
      "reaktionär"
     ],
     "correct": 0
    },
    {
     "num": 22,
     "text": "Efter att tillfälligt ha slutat med måleri arbetade han i sitt konstnärskap med två motsatta spår. Samtidigt som han gjorde sina mest abstrakta bilder arbetade han i andra teckningar alltmer _____. Det abstrakta kunde bli för mycket ”konst”, och han uppskattade därför _____ i det föreställande som gav honom en nödvändig näring i arbetet.",
     "options": [
      "metaforiskt – provokationen",
      "förskönande – surrealismen",
      "figurativt – direktheten",
      "imaginärt – perceptionen"
     ],
     "correct": 2
    },
    {
     "num": 23,
     "text": "En av montessoripedagogens främsta uppgifter är att observera eleverna för att ge dem _____ handledning i relation till deras mognad.",
     "options": [
      "disparat",
      "intrikat",
      "obstinat",
      "adekvat"
     ],
     "correct": 3
    },
    {
     "num": 24,
     "text": "Att minnet av Förintelsen försvagas _____ är oundvikligt. Dokumenten gulnar, vittnena dör och levande erfarenhet blir _____ historia. Förintelsen har efter hand också kommit att jämföras med andra historiska händelser och blivit föremål för ständigt nya beskrivningar och tidvis rentav _____ förklaringar.",
     "options": [
      "med tiden – inlärd – motstridiga",
      "i tid och otid – avdankad – vinklade",
      "över tid – förfluten – belysande",
      "i sinom tid – vissnad – traditionella"
     ],
     "correct": 0
    },
    {
     "num": 25,
     "text": "En för landet gemensam vårdgaranti _____ den 1 november 2005. Målet med vårdgarantin var att öka tillgängligheten till planerad vård samt att _____ köer och förkorta väntetider.",
     "options": [
      "fastslogs – definiera",
      "infördes – avveckla",
      "tillämpades – kringgå",
      "grundades – effektuera"
     ],
     "correct": 1
    },
    {
     "num": 26,
     "text": "Vid arbetsrotation kan rotationstiden variera från några minuter, när det är frågan om _____ och rutinbetonade arbetsuppgifter, till månader, när det gäller mer omväxlande och intellektuellt krävande arbete.",
     "options": [
      "oansenliga",
      "senfärdiga",
      "vanskliga",
      "enahanda"
     ],
     "correct": 3
    },
    {
     "num": 27,
     "text": "Att _____ i kultur- och fritidsnämnden vill ge en miljon kronor till socialnämnden beror inte på att kultur- och fritidsnämnden har för mycket pengar. Anledningen är i stället att den miljon som projektanställningen av Ale Möller och världsmusikensemblen skulle ha kostat var _____ för just det projektet. Då kan pengarna inte användas för att fylla andra hål i nämndens verksamhet.",
     "options": [
      "ordföranden – hårdragen",
      "styrelsen – knäsatt",
      "oppositionen – öronmärkt",
      "motionen – fingervisad"
     ],
     "correct": 2
    },
    {
     "num": 28,
     "text": "Om vi nu inte kan se eller med vårt eget förstånd bevisa _____ av till exempel elektroner, innebär då detta att de inte finns? Nej, naturligtvis inte. Men vi människor _____ förbluffande ofta som om det vore så; som om var och en av oss med just våra kunskaper, erfarenheter och _____ skulle gälla som någon slags universell mall för existensens villkor.",
     "options": [
      "existensen – verkar – proportioner",
      "närvaron – framträder – bevis",
      "definitionen – resonerar – upplysningar",
      "förekomsten – agerar – insikter"
     ],
     "correct": 3
    },
    {
     "num": 29,
     "text": "I Majgull Axelssons uppgörelsepjäs med folkhemmet, <i>Helgonlegender,</i> finns en intressant _____ där en hemlös kvinna berättar att hon föredrar att tigga på Östermalm, för där köper sig folk fria från skuld genom att demonstrativt lägga pengar i den framsträckta muggen.",
     "options": [
      "passad",
      "passage",
      "passopp",
      "passning"
     ],
     "correct": 1
    },
    {
     "num": 30,
     "text": "De heliga templen rivs vart tjugonde år och byggs sedan upp igen, exakt likadana. Det är tempel som ständigt förnyas, precis som allt i naturen, vars _____ är det enda som _____.",
     "options": [
      "obeständighet – består",
      "tidlöshet – förlöper",
      "harmoni – återfinns",
      "cirkulation – bibehålls"
     ],
     "correct": 0
    }
   ]
  }
 ]
};
