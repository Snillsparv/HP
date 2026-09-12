// Högskoleprovet 6 april 2013, provpass 3 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "vt2013-3",
 "tillfalle": "vt2013",
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
   25,
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
   36,
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
   68,
   1.8
  ],
  [
   71,
   1.9
  ],
  [
   74,
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
     "word": "naiv",
     "text": "<b>naiv</b>",
     "options": [
      "påhittig",
      "rådlös",
      "busig",
      "godtrogen",
      "motsträvig"
     ],
     "correct": 3
    },
    {
     "num": 2,
     "word": "högaktning",
     "text": "<b>högaktning</b>",
     "options": [
      "sorg",
      "högtid",
      "salighet",
      "högmod",
      "vördnad"
     ],
     "correct": 4
    },
    {
     "num": 3,
     "word": "kandera",
     "text": "<b>kandera</b>",
     "options": [
      "skära upp kött",
      "pryda med ljus",
      "överdra med socker",
      "steka på båda sidor",
      "hälla upp vin"
     ],
     "correct": 2
    },
    {
     "num": 4,
     "word": "förbehåll",
     "text": "<b>förbehåll</b>",
     "options": [
      "villkor",
      "ursäkt",
      "misstanke",
      "omvärdering",
      "ställningstagande"
     ],
     "correct": 0
    },
    {
     "num": 5,
     "word": "oavvänt",
     "text": "<b>oavvänt</b>",
     "options": [
      "igenkännande",
      "oupphörligt",
      "från rätt sida",
      "överlägset",
      "fientligt"
     ],
     "correct": 1
    },
    {
     "num": 6,
     "word": "karoten",
     "text": "<b>karoten</b>",
     "options": [
      "grundämne",
      "protein",
      "giftämne",
      "växtfiber",
      "färgämne"
     ],
     "correct": 4
    },
    {
     "num": 7,
     "word": "profan",
     "text": "<b>profan</b>",
     "options": [
      "världslig",
      "förenklad",
      "obetydlig",
      "sorglös",
      "angenäm"
     ],
     "correct": 0
    },
    {
     "num": 8,
     "word": "brukare",
     "text": "<b>brukare</b>",
     "options": [
      "ledamot",
      "vårdtagare",
      "medlare",
      "hantlangare",
      "trädgårdsmästare"
     ],
     "correct": 1
    },
    {
     "num": 9,
     "word": "genmäla",
     "text": "<b>genmäla</b>",
     "options": [
      "återge",
      "hindra",
      "svara",
      "anklaga",
      "ersätta"
     ],
     "correct": 2
    },
    {
     "num": 10,
     "word": "kanon",
     "text": "<b>kanon</b>",
     "options": [
      "utvald samling",
      "miniminivå",
      "grundkurs",
      "storgrupp",
      "ouppnåeligt ideal"
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
     "title": "Har vi läkarbrist?",
     "html": "<p>Många har uppfattningen att Sverige har läkarbrist. Den statistiska sanningen är dock att vi har flest läkare per invånare av alla världens länder: en läkare per ca 250 invånare och totalt mer än 40 000. På slutet av 1960-talet var totalantalet ca 10 000. Antalet har alltså fyrfaldigats på 40 år.</p>\n<p>I <i>Läkartidningen</i> 46/2009 söker en klinik två läkare för specialistutbildning (ST-läkare). I beskrivningen av kliniken i annonsen står det: ”... har 30 slutenvårdsplatser. Kliniken bemannas för närvarande av 15 specialistläkare och 5 ST-läkare.” 20 läkare på 30 vårdplatser motsvarar alltså 1,5 vårdplats per läkare. Samma klinik hade på 1960-talet 72 vårdplatser och 3 läkartjänster, dvs. 24 platser per läkare!</p>\n<p>Med dagens mått mätt var samtidigt arbetsförhållandena helt omänskliga med t.ex. jour, visserligen i hemmet, varannan dag och helg utan jourkompensation. Läkarna accepterade förhållandena eftersom de hade inkomst av öppen mottagning inklusive jour som ett slags ackord. Ju mera mottagning, desto högre inkomster. Man var helt nödvändig för verksamheten, och klarade man kraven gav arbetet märkligt stor tillfredsställelse.</p>\n<p>Sjukfrånvaron per år var på ensiffrig nivå och lägst bland alla yrkeskategorier. Beprövad erfarenhet fick man samtidigt i stora mått. Det var sämre med tid för vetenskaplig skolning.</p>\n<p>1970-talets läkarreformer, med 40-timmarsvecka, jourkompensation och borttagande av prestationslön, har sedan, vad jag förstår, bidragit till stora förändringar av läkararbetet. Alla läkare på lika utbildningsnivå har väsentligen haft lika lön. Extrauppdrag, arbete i andra landsting och i grannländer under ledighet har ökat inkomsterna. Motivationen för arbete på klinik har avtagit.</p>\n<p>Projekt, utvecklingsarbete och ”forskning” har uppvärderats på bekostnad av kliniskt arbete. Det har återgett status åt läkarna, till glädje också för sjukhuset/landstinget. Även den ovan refererade kliniken har deltagit i denna utvecklingsframgång genom många doktorander och avhandlingsarbeten.</p>\n<p>Är den här utvecklingen enbart av godo? Används resurserna rätt? Gör läkarna rätt saker? Att de administrativa kraven ökat är oomtvistligt med allt omständligare intyg och dokumentation trots datorisering.</p>\n<p>De många läkarna, framför allt på de stora sjukhusen, får vetenskaplig skolning, men får de erforderlig beprövad erfarenhet? Ger de sig tid för vanlig patientvård och uppföljning av sina patienter eller återremitteras dessa alltför snabbt till en redan överlastad primärvård?</p>\n<p>Åter till ursprungsfrågan: Har vi läkarbrist? Eller har vi motivationsbrist och systemfel som bidragit till obalans i fördelningen av läkarresurser från kliniskt arbete till förmån för utvecklingsarbete?</p>\n<p>För att förekomma missförstånd vill jag tillägga att jag uppskattar den utveckling som möjliggjort ökad jämställdhet i både hem och arbete.</p>\n<p class=\"forf\">Göran Lindé</p>"
    },
    {
     "title": "Livsformer",
     "html": "<p>Återigen händer det att en konstkritiker i <i>Dagens Nyheter</i> naggar sitt anseende i kanten, den här gången genom att låta marknadsföra höstens utställning ”Livsformer” på Bonniers Konsthall. Tanken går till den senaste skandalen inom Formel 1, där andreföraren i Renault pressades att krascha sin bil under tävling för att gynna stallkamratens vinnande strategi. Det kanske kan tyckas långsökt. Men jämför tidningens redaktionella muskler med en ensam frilans längst ut på grenen. På mig gör det ett liknande intryck när <i>Dagens Nyheters</i> frilansande konstkritiker gång efter annan lånar sina namn till att stort uppslaget puffa för tidningsägarens konsthall någon dag efter utställningens öppning. Det sker på bekostnad av den uppmärksamhet som annars kunde ha visats övriga konstlivet i Stockholm och Sverige.</p>\n<p>Den aktuella utställningen ”Livsformer” knyter an till årets kuratoriella tema att sträcka sig efter nya eller andra världar och utopier. Biennalerna ”Making Worlds” i Venedig och den nyligen öppnade ”What a Wonderful World” i Göteborg kan nämnas som exempel. ”Livsformer” på Bonniers Konsthall klättrar kanske ännu högre på den konstpolitiska rankningen med den ekologiska knorren – ”i en tid av miljöförstöring och klimatförändringar”. Som brukligt i den här typen av idébaserade utställningar prioriteras mångfalden av infall och buketten av välrenommerade namn framför att skapa en väl sammanhållen utställning.</p>\n<p>Utställningsrummen i Bonniers Konsthall underlättar inte heller uppgiften. Efter ett antal år är det påfallande hur ledningen för dessa rum ständigt återskapar utställningar som närmast skulle kunna sammanfattas under etiketten ”beröringsskräck”. Konsten hanteras med skyddshandskar och späds ut med blodförtunnande medel.</p>\n<p>Tänk om ”Livsformer” hade koncentrerats till att omfatta Henrik Håkanssons märkliga skog av parasiterande orkidéer, Andreas Erikssons målningar och exempelvis Tue Greenforts ”slutna biosfärer”, algodlingar i plastflaskor samt videofilmade uppförstoringar av detta mikrokosmos.</p>\n<p>Jag kan även tänka mig en separatutställning av Henrik Håkansson, vars konstnärliga språk effektivt krockar med dessa anemiska rum. Men då utgångspunkten i utställningsbygget går att härleda till övergången mellan 1960- och 1970-tal, med fokus på konceptet och dokumentationen framför verket, är det styvmoderliga intresset för konstnärlig gestaltning knappast förvånande.</p>\n<p>Som publik kan man därmed i många fall tryggt hålla sig till de små bruksanvisningarna placerade på väggen. Smakproven som flera av konstnärerna bjuder på räcker knappast självständigt för att förmedla bakomliggande tankar och idéer. Ta exempelvis Micol Assaëls verk ”untitled/dielectric”, vars elektrifierade vindfenomen ger mersmak men knappast en rättvisande ingång till konstnärskapet. Jag kan heller inte förstå de rent utställningstekniska missarna. Utställningsarkitekternas solballonger skapar ljuskällor som får publiken att hålla för ögonen, vilket i och för sig skulle kunna vara intressant om inte ”ljussättningen” slog ihjäl Andreas Erikssons målning. Varför tonades spinnakerväven exempelvis inte in i grått?</p>\n<p class=\"forf\">Susanna Slöör</p>"
    },
    {
     "title": "Miljöförändringar och evolution",
     "html": "<p>En forskargrupp, under ledning av professor Anders Forsman vid Linnéuniversitetet, har upptäckt att evolutionen under vissa förhållanden kan gå oerhört snabbt, vilket främjar överlevnaden i föränderliga miljöer.</p>\n<p>Torngräshoppor är små insekter som uppvisar en enorm variation i färgteckning. Individer från samma område varierar från ljusgrå eller brunspräcklig, via randig till helsvart. De olika färgvarianterna skiljer sig åt i storlek, beteende och en rad andra egenskaper. Forskarna upptäckte i en fältstudie att sammansättningen av olika färgvarianter varierar kraftigt mellan områden och förändras över tid inom områden som varit utsatta för skogsbränder.</p>\n<p>Forskarna fångade gräshoppor på tjugo olika platser i Sverige. Andelen svarta gräshoppor var mycket högre i områden som nyligen härjats av bränder än i obrända kontrollområden. I eldhärjade områden blev de svarta gräshopporna dessutom mindre vanliga ju längre tid som passerat efter branden.</p>\n<p>– Eftersom samma mönster upprepas i många populationer och under en lång tidsperiod är vi säkra på att det beror på att skogsbränderna förändrar gräshoppornas livsmiljö, säger Anders Forsman. För att kontrollera om skillnaderna i färgteckning mellan populationerna var ärftliga födde forskarna upp gräshoppor i laboratorium under standardiserade förhållanden. Avkomlingar till gräshoppor som fångats in på eldhärjade platser blev svarta i högre utsträckning än de som härstammade från obrända områden.</p>\n<p>– Olikheterna i andelen svarta gräshoppor mellan platser och år beror således på förändringar av populationernas genetiska sammansättning. Individerna blir alltså inte svartare som ett resultat av exempelvis den tillgängliga födan eller andra faktorer i uppväxtmiljön, ungefär som när vi människor blir mörkare i hyn om vi vistas i solen. Det handlar istället om oerhört snabba evolutionära förändringar, säger Anders Forsman.</p>\n<p>Resultaten visar att de variationsrika torngräshopporna genom naturligt urval anpassas genetiskt till en överlevnad i de karga och föränderliga förhållanden som följer efter skogsbränder. Den svarta färgteckningen gör det svårare för fåglar och andra rovdjur att upptäcka gräshopporna mot en sotsvart bakgrund. Det innebär förmodligen en överlevnadsfördel för svarta gräshoppor i nybrända områden. Något år efter en brand, när marken återigen börjar täckas av mossa och andra växter, erbjuder den svarta färgen inte längre ett överlägset skydd.</p>\n<p>Resultaten stödjer teorin om att populationer och arter där individerna har olika egenskaper har en högre anpassningsförmåga och löper mindre risk att dö ut när livsmiljön förändras.</p>"
    },
    {
     "title": "Arbetslösa i rörelse",
     "html": "<p><b>Recension:</b> Ulf Andréasson. <i>Arbetslösa i rörelse. Organisationssträvanden och politisk kamp inom arbetslöshetsrörelsen i Sverige, 1920–34.</i></p>\n<p>Mellankrigstidens depressioner under tidigt 1920- och 1930-tal förde med sig de högsta arbetslöshetstalen någonsin i svensk historia. 1920-talskrisen var kortvarig men djup, medan 1930-talskrisen var långvarigare utan att nå fullt lika höga arbetslöshetstal. Inte någon gång under perioden understeg arbetslösheten tio procent, enligt fackförbundens statistik. Trots att uppskattningarna av arbetslöshetens omfattning är omstridda och osäkra är forskningen enig om att arbetslösheten präglade mångas liv i mellankrigstidens svenska samhälle. Detta faktum har inspirerat till forskning om den ekonomiska politiken, om partipolitiska ståndpunkter och återverkningar samt om den sociala politiken och situationen för män och kvinnor i arbetslöshetens Sverige. Vad Ulf Andréasson har gjort i sin avhandling, <i>Arbetslösa i rörelse</i>, är att för första gången, i ett i övrigt ganska välutforskat fält, mer konsekvent belysa arbetslösheten ur de arbetslösas perspektiv.</p>\n<p>Avhandlingens utgångspunkt tas i att arbetslöshet inte nödvändigtvis passiviserar (vilket somliga forskare menat), utan att dess effekter snarare kan verka identitetsskapande och underlätta kollektivt handlande mot den förda arbetslöshetspolitiken. Andréassons fokus ligger på de arbetslösa som, trots sin situation, organiserat sig med just arbetslösheten som plattform i vad som ofta kallades för De arbetslösas förening. Intresseföreningar för arbetslösa uppstod i hundratal under mellankrigstiden och engagerade tusentals arbetslösa män.</p>\n<p>Det är denna rörelse, huvudsakligen på den centrala nationella nivån, som är föremål för undersökning. Syftet med avhandlingen är mot bakgrund av detta tvåfalt: för det första att kartlägga arbetslöshetsrörelsen under den aktuella perioden, för det andra att förklara varför den utvecklades på det sätt som den gjorde.</p>\n<p>Ett viktigt tema i avhandlingen, som på många sätt präglar hur syftet kan uppnås, är arbetslöshetsrörelsens relation till arbetarrörelsens reformistiska och revolutionära grenar. Temat är välfunnet och motiverat av den teoretiska modell som valts för att generera frågor och tolkningsramar. Enligt Frances Fox Pivens och Richard A. Clowards arbete <i>Poor People’s Movements</i> (1977) bestäms handlingsutrymmet för sociala rörelser, som arbetslöshetsrörelsen, av mer socialt och ekonomiskt privilegierade gruppers agerande – i detta fall av den etablerade arbetarrörelsen. Något som Andréasson också finner starka belägg för i avhandlingens empiriska underlag.</p>\n<p>Arbetarrörelsens agerande i förhållande till arbetslöshetsrörelsen dominerar dock såväl framställningen som analysen i sådan utsträckning att man kan resa frågan huruvida arbetslöshetsrörelsen verkligen var en social rörelse, i den meningen att den underifrån försökte påverka arbetslöshetspolitiken. Enligt studien var det ofta den etablerade arbetarrörelsen, såväl kommunistisk som socialistisk, som initierade bildandet av föreningarna. Det var fackföreningsrörelsen som till stora delar avgjorde huruvida oorganiserade arbetslösa fick vara medlemmar eller ej samt om blockadaktioner och dylikt skulle vidtas eller ej. Kommunister och socialister använde arbetslöshetsföreningarna som ett slagträ i den arbetslöshetspolitiska debatten eller som ett verktyg för att ta initiativet i politiken. Studien visar också att de arbetslösa under en period betraktades som en väsentlig revolutionär energi att antingen släppa lös eller tygla, beroende på betraktarens ambitioner.</p>\n<p>Eftersom den etablerade arbetarrörelsen så kraftigt beskar arbetslöshetsrörelsens möjligheter till mobilisering och dess handlingsutrymme kan man också ställa sig frågan om den bör betraktas som en rörelse vars primära mål var att verka politiskt. Man kan inte låta bli att undra om den utgångspunkten är ett resultat av den nivå på vilken undersökningen lagts. Andréasson har valt att lägga tyngdpunkten för den empiriska undersökningen på den centrala nationella nivån, medan det enligt honom var på den lokala nivån som tyngdpunkten för organiseringen och verksamheten hela tiden fanns. Vid flera tillfällen framkommer att den sporadiskt verksamma centralorganisationen/-organisationerna inte upplevdes representera hela rörelsen, att den inte hade mandat att slå fast hur föreningarna skulle utformas och att den inte heller kunde tvinga lokalföreningarna att agera på ett visst sätt. Det motsträviga källmaterialet har förmodligen tvingat fram urvalet, men det sätter också gränser för generaliserbarheten i slutsatserna. Trots Andréassons imponerande arbete med att samla källmaterial beskriver han det som ”ofullständigt”, ”av skiftande omfattning” och med ”stoffmässiga tillkortakommanden”. Detta sagt om rörelsen, som karakteriseras som ”svåröverblickbar” och ”flyktig”.</p>\n<p>Ironiskt nog utgör de ovan beskrivna förhållandena både ett problem, om man vill dra generaliserbara slutsatser, och vad jag betraktar som avhandlingens viktigaste och mest värdefulla resultat. Andréassons studie visar nämligen med all önskvärd tydlighet att arbetslöshet som minsta gemensamma nämnare för organisering inte höll för en varaktig, välstrukturerad och nationellt omfattande organisering. Därtill var de potentiella medlemmarnas sociala och yrkesmässiga erfarenheter för olika, varaktigheten i det gemensamma tillståndet för varierande och målet med det individuella deltagandet för splittrat. Dessutom överskuggades den erfarenhet som förde medlemmarna samman – arbetslösheten – av en annan gemensam erfarenhet: drömmen om att få anledning att gå ur föreningen – om att få ett jobb.</p>\n<p>Utöver att äntligen rikta ljuset mot arbetslöshetsrörelsen och bidra till förståelsen av förutsättningarna för de arbetslösas mobilisering av handlingsutrymme under mellankrigstiden visar Andréasson hur arbetslösa kunde betraktas av etablissemanget: att det upplevdes som utmanande att man bildade föreningar <i>av</i> arbetslösa i stället för att gå med i föreningar <i>för</i> arbetslösa, att massarbetslöshet är en het potatis i ett samhälle som är uppbyggt kring lönearbete och att de som var i behov av samhällets hjälp inte skulle ställa krav, de skulle vara tacksamma.</p>\n<p class=\"forf\">Lena Eriksson</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Hur svarar textförfattaren på frågan ”Har vi läkarbrist”?",
     "options": [
      "Med att hänvisa till patientbehovet.",
      "Med ett klart nej.",
      "Med att ställa motfrågor.",
      "Med ett tvetydigt ja."
     ],
     "correct": 2,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vilka faktorer lyfter textförfattaren fram som orsaker till dagens läkarsituation?",
     "options": [
      "Förändringar i forskningsarbetet samt ökad datorisering.",
      "Förändringar i läkarkompetensen samt besvärlig lönebildning.",
      "Förändringar i jourverksamheten samt nedtoning av klinisk forskning.",
      "Förändringar i yrkesgruppens villkor samt nedtoning av praktiskt vårdarbete."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vad är enligt recensenten positivt med utställningen ”Livsformer”?",
     "options": [
      "Helhetsgreppet",
      "Några enskilda konstnärskap",
      "Mångfalden",
      "Förankringen i dagspolitiken"
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Hur sammanfattar man bäst utställningen ”Livsformer”, om man ser till recensentens resonemang?",
     "options": [
      "Som spretig och utan klart fokus.",
      "Som ensidig och smal i sitt konsturval.",
      "Som otidsenlig och svårtillgänglig.",
      "Som självgod och insmickrande."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vad var syftet med det laboratorieförsök som beskrivs i texten?",
     "options": [
      "Att ta reda på hur stor genvariationen faktiskt var inom den aktuella gräshoppsarten.",
      "Att undersöka vilka övriga egenskaper som skilde de olika färgvarianterna från varandra.",
      "Att utesluta att variationen i gräshoppornas färgteckning orsakades enbart av miljöfaktorer.",
      "Att bekräfta att den iakttagna variationsrikedomen enbart fanns i vissa populationer."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 16,
     "text": "Vilket svarsförslag sammanfattar bäst textens huvudpoäng?",
     "options": [
      "Urval skapar olikheter.",
      "Evolutionen formar livsmiljön.",
      "Anpassning främjar förändring.",
      "Variation ökar överlevnaden."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 17,
     "text": "Hur kan man utifrån texten bäst sammanfatta arbetslöshetsrörelsens utveckling?",
     "options": [
      "Rörelsen förlorade sitt berättigande i takt med att situationen på arbetsmarknaden stabiliserades.",
      "Rörelsen blev aldrig mer än ett bihang till arbetarrörelsens fackföreningar och partipolitiska organisationer.",
      "Rörelsen innebar att den annars så kluvna arbetarrörelen lyckades ena sig under en särskilt kritisk period.",
      "Rörelsen blev kortlivad men hann förverkliga åtminstone vissa av sina politiska målsättningar."
     ],
     "correct": 1,
     "textIndex": 3
    },
    {
     "num": 18,
     "text": "Vilken central slutsats kan utläsas ur Ulf Andréassons avhandling, enligt recensenten?",
     "options": [
      "Att arbetslösheten var otillräcklig som grund att bygga en fungerande riksorganisation på.",
      "Att arbetslöshet var alltför provocerande för att kunna ge legitimitet åt en nationell rörelse.",
      "Att arbetarrörelsen saknade resurser för att motverka 1920- och 1930-talets arbetslöshet.",
      "Att arbetslöshetsrörelsen uppstod till följd av fackföreningsrörelsens passivitet."
     ],
     "correct": 0,
     "textIndex": 3
    },
    {
     "num": 19,
     "text": "Hur kan man bäst sammanfatta den påverkan som de politiska och fackliga arbetarorganisationerna utövade på arbetslöshetsrörelsen, enligt texten?",
     "options": [
      "Avlastande",
      "Överbryggande",
      "Splittrande",
      "Begränsande"
     ],
     "correct": 3,
     "textIndex": 3
    },
    {
     "num": 20,
     "text": "Vilket av följande ser recensenten som en svaghet i Ulf Andréassons avhandling?",
     "options": [
      "Motsägelserna i källornas beskrivningar av arbetslöshetsrörelsen.",
      "Svårigheten att dra allmängiltiga slutsatser av forskningsmaterialet.",
      "Det dubbla syftet som skapar återkommande gränsdragningsproblem.",
      "Det faktum att två separata tidsperioder bildar grund för en och samma analys."
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
     "text": "Många skådespelare har nog ett _____ drag inom sig, då de tycks vilja bli sedda och uppmärksammade och gillar att stå i rampljuset.",
     "options": [
      "altruistiskt",
      "introvert",
      "ambivalent",
      "exhibitionistiskt"
     ],
     "correct": 3
    },
    {
     "num": 22,
     "text": "Denna handbok i statskonst var en beskrivning av furstemakten i en stark, centraliserad stat. Den nya tidens statsöverhuvud var en person, som med statens bästa _____ skulle hävda sin och statens makt, utåt och inåt, och som inte _____ för att nå sitt mål.",
     "options": [
      "för handen – satte sig på tvären",
      "om bakfoten – hyste några betänkligheter",
      "för ögonen – skydde några medel",
      "på sina axlar – kom till korta"
     ],
     "correct": 2
    },
    {
     "num": 23,
     "text": "Från Ammarnäs välkända potatisbacke ner till de _____ älvsedimentsjordarna vid sammanflödet med Umeälven, bjuder Vindelälven på unika och variationsrika värden. Eftersom de värden som bevaras är av stor _____, är det betydelsefullt att de vidmakthålls och förädlas på ett _____ och strategiskt sätt för framtiden.",
     "options": [
      "leriga – rondör – långsiktigt",
      "näriga – kvalitet – miljömässigt",
      "frodiga – valör – realiserbart",
      "bördiga – dignitet – hållbart"
     ],
     "correct": 3
    },
    {
     "num": 24,
     "text": "Om man ska använda sig av de här nya mätinstrumenten måste de _____ ordentligt: har eleverna blivit bättre när de plötsligt får högre resultat, eller har de bara blivit mer vana att skriva prov?",
     "options": [
      "justeras",
      "utvärderas",
      "balanseras",
      "observeras"
     ],
     "correct": 1
    },
    {
     "num": 25,
     "text": "Som vi kan se är det inte lätt att kategorisera dessa begrepp. Därför är det en fördel om man, när man talar om andlig utveckling, inkluderar alla _____ av själslivet; psykologiska såväl som religiösa, vilka alla är utvecklingsbara och en realitet i människolivet. Börjar man sortera bort delar av det som människan består av får man snart problem. Det låter sig liksom inte _____.",
     "options": [
      "faser – graderas",
      "skikt – föreställas",
      "undertoner – sorteras",
      "aspekter – göras"
     ],
     "correct": 3
    },
    {
     "num": 26,
     "text": "Lars Larsson, doktorand i kulturvård, talade om kulturarvet som en låda med ett visst innehåll. Vad vi uppfattar som vårt kulturarv är _____ av vad vi lägger i lådan.",
     "options": [
      "avhängigt",
      "beslutat",
      "angivet",
      "omslutet"
     ],
     "correct": 0
    },
    {
     "num": 27,
     "text": "Tyranniet skulle inte kunna existera och de onda gärningarna skulle inte kunna ske om det inte fanns rader av till synes _____ människor som bistod tyranniet med sina talanger, med sitt stöd eller kanske bara med det besynnerliga men utomordentligt avgörande _____ som finns i den bortvända blicken.",
     "options": [
      "motvilliga – motstånd",
      "anständiga – samtycke",
      "illvilliga – ställningstagande",
      "godhjärtade – maktspel"
     ],
     "correct": 1
    },
    {
     "num": 28,
     "text": "Den naturliga vägen är inte alltid självklart den bästa. Vaccin, transplantationer och läkemedel är inte något som naturen har erbjudit på egen hand, men är numera likväl _____ inslag i sjukvården.",
     "options": [
      "oaktade",
      "oskäliga",
      "omistliga",
      "oklanderliga"
     ],
     "correct": 2
    },
    {
     "num": 29,
     "text": "Fransmännen skrev långsamt och sirligt och satte ut grava och _____ accenter, feminina och plurala ändelser samt _____.",
     "options": [
      "akuta – apostrofer",
      "indirekta – paustecken",
      "lätta – apokryfer",
      "upphöjda – särtecken"
     ],
     "correct": 0
    },
    {
     "num": 30,
     "text": "Denne visionär såg på sig själv som en som byggde upp snarare än som en som rev ned. Han kände bara avsmak inför kritiken och inför den ”småborgerliga esteticism som _____, utövad av _____ och känslotyckare, som alla har det så förbannat mycket bättre än de människor för vilka vi bygger och skapar”. Med facit i hand kan man dock undra vem som _____ av att man ersatte gamla bostadskvarter i Stockholms innerstad med kontor och departementsbyggnader.",
     "options": [
      "grasserar – dilettanter – hjälptes",
      "distraherar – spekulanter – berördes",
      "florerar – aspiranter – tog skada",
      "intrigerar – konspiratörer – provocerades"
     ],
     "correct": 0
    }
   ]
  }
 ]
};
