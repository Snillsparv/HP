// Högskoleprovet 19 oktober 2025, provpass 5 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "ht2025-5",
 "tillfalle": "ht2025",
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
   21,
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
   28,
   0.4
  ],
  [
   32,
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
   46,
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
   58,
   1.2
  ],
  [
   61,
   1.3
  ],
  [
   63,
   1.4
  ],
  [
   65,
   1.5
  ],
  [
   68,
   1.6
  ],
  [
   70,
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
     "word": "hereditär",
     "text": "<b>hereditär</b>",
     "options": [
      "smittsam",
      "ärftlig",
      "långvarig",
      "inbillad",
      "allvarlig"
     ],
     "correct": 1
    },
    {
     "num": 2,
     "word": "underrätta",
     "text": "<b>underrätta</b>",
     "options": [
      "stötta",
      "tona ner",
      "informera",
      "läxa upp",
      "förolämpa"
     ],
     "correct": 2
    },
    {
     "num": 3,
     "word": "huskur",
     "text": "<b>huskur</b>",
     "options": [
      "fönsternisch",
      "helrenovering",
      "spontan hyllning",
      "invigningsfest",
      "folklig behandlingsmetod"
     ],
     "correct": 4
    },
    {
     "num": 4,
     "word": "trångsynt",
     "text": "<b>trångsynt</b>",
     "options": [
      "glömsk",
      "pessimistisk",
      "ouppmärksam",
      "fördomsfull",
      "kritisk"
     ],
     "correct": 3
    },
    {
     "num": 5,
     "word": "möda",
     "text": "<b>möda</b>",
     "options": [
      "tvång",
      "stress",
      "motgång",
      "tröghet",
      "ansträngning"
     ],
     "correct": 4
    },
    {
     "num": 6,
     "word": "frekventera",
     "text": "<b>frekventera</b>",
     "options": [
      "besöka ofta",
      "variera",
      "justera noga",
      "gradera",
      "hålla koll på"
     ],
     "correct": 0
    },
    {
     "num": 7,
     "word": "raffinemang",
     "text": "<b>raffinemang</b>",
     "options": [
      "överflöd",
      "urskiljning",
      "komplikation",
      "uppskattning",
      "förfining"
     ],
     "correct": 4
    },
    {
     "num": 8,
     "word": "i paritet med",
     "text": "<b>i paritet med</b>",
     "options": [
      "med hänsyn till",
      "samtidig med",
      "medskyldig till",
      "likvärdig med",
      "med hjälp av"
     ],
     "correct": 3
    },
    {
     "num": 9,
     "word": "gondol",
     "text": "<b>gondol</b>",
     "options": [
      "mur",
      "kärra",
      "torn",
      "kruka",
      "båt"
     ],
     "correct": 4
    },
    {
     "num": 10,
     "word": "obemedlad",
     "text": "<b>obemedlad</b>",
     "options": [
      "hemlös",
      "fattig",
      "arbetslös",
      "ensam",
      "tanklös"
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
     "title": "Parkeringsavgiften",
     "html": "<p>Högsta domstolen (HD) meddelade den 8 oktober följande beslut och skäl till beslut.</p>\n<p><i>Bakgrund</i>. S.M. parkerade sin tyskregistrerade bil i Stockholm på en plats där avgiftsplikt gällde enligt lokala trafikföreskrifter. Hon betalade avgiften med en mobil betaltjänst. På den tyska registreringsskylten fanns två bokstäver följda av ett mellanrum, därefter två bokstäver också följda av ett mellanrum och slutligen fyra siffror. Vid registreringen av betalningen angav hon sitt registreringsnummer med bindestreck där det på registreringsskylten fanns mellanrum.</p>\n<p>En parkeringsanmärkning utfärdades. I den angavs att det inte hade visats att avgift var betald.</p>\n<p>S.M. bestred betalningsansvar för anmärkningen. Polismyndigheten lämnade bestridandet utan bifall med hänvisning till att hennes sätt att ange registreringsnumret hade medfört att det inte varit möjligt för parkeringsvakten att kontrollera att avgiften hade betalats.</p>\n<p>S.M. överklagade till tingsrätten som undanröjde betalningsansvaret för parkeringsanmärkningen. Polismyndigheten överklagade tingsrättens beslut men hovrätten har avslagit överklagandet.</p>\n<p>Polismyndigheten överklagade och yrkade att HD, med ändring av hovrättens beslut, skulle fastställa myndighetens beslut.</p>\n<p><i>Bedömningen i detta fall</i>. S.M:s fordon har parkerats på en plats där det enligt lokala trafikföreskrifter finns en skyldighet att betala avgift på det sätt som har angetts på platsen och enligt angiven taxa. Det är klarlagt att hon har betalat enligt gällande taxa men parkeringsvakten har vid den efterföljande kontrollen inte kunnat härleda betalningen till fordonet på grund av att registreringsnumret har angetts med bindestreck där det på registreringsskylten fanns mellanrum.</p>\n<p>Det är inte självklart hur ett registreringsnummer rätteligen ska anges i aktuellt hänseende. Det finns inte någon enhetlig ordning när det gäller om eller på vilket sätt avstånd mellan olika led i teckenkombinationer markeras. Vid angivande av svenska bilregistreringsnummer skrivs alla tecken ofta i en följd trots att det på skylten finns ett mellanrum efter de tre första bokstäverna. Olika varianter förekommer också när det gäller t.ex. personnummer, kontonummer och telefonnummer. Ibland skrivs alla siffror i en följd och ibland används mellanslag eller bindestreck.</p>\n<p>Såvitt framkommit har det inte i anslutning till parkeringen eller i den mobila betaltjänst som användes funnits några närmare anvisningar om hur registreringsnumret skulle anges. Varken vid utformningen av systemet för registrering eller vid den efterföljande kontrollen har någon hänsyn tagits till de variationer som det, i avsaknad av närmare anvisningar, finns anledning att räkna med när det gäller hur avstånd mellan olika led markeras vid angivande av i synnerhet utländska registreringsnummer. Förhållandena har heller inte varit sådana att det kan krävas att S.M. skulle ha vidtagit ytterligare åtgärder för att ta reda på hur registreringen rätteligen skulle göras.</p>\n<p>Mot denna bakgrund har S.M. gjort vad som vid en objektiv bedömning rimligen kan begäras av henne för att betala avgift på det sätt som har angetts på platsen. Hon får därmed anses ha fullgjort sin avgiftsskyldighet enligt 3 kap. 49 a § andra stycket i trafikförordningen. Det finns således förutsättningar att undanröja betalningsansvaret.</p>\n<p>HD avslår därför överklagandet.</p>"
    },
    {
     "title": "Skolmatematik",
     "html": "<p>Många tycker att all forskning om skolan ska ha som syfte att förbättra dess resultat. Men tänk om denna strävan efter resultatförbättring bygger på ett feltänkande? Sådant kan forskningen själv upptäcka – men bara om den också tillåts sträva efter en förståelse vars nytta kanske inte omedelbart framgår. Denna text är resultatet av sådan potentiellt onyttig forskning.</p>\n<p>För några år sedan höll Danmarks dåvarande statsminister Helle Thorning-Schmidt tal om att man borde förena matematikämnet med slöjd, eftersom det får Pythagoras sats ”att fastna bättre”. När tidningen <i>Ekstra Bladet</i> frågade henne vad Pythagoras sats innebär blev hon svaret skyldig.</p>\n<p>Thorning-Schmidt lyfte i sitt eget tal fram Pythagoras sats som ett exempel på matematik som är viktig att barn tar med sig från skolan. Hon föreslog att anknytningen till slöjd skulle användas för att befästa och förankra detta lilla stycke matematiskt vetande. Så uppstår, väntat nog, nyfikenhet om huruvida hon själv bär på detta vetande. Men trots att hon kunde ha anat att frågan skulle uppstå, ställs hon svarslös. Inte nog med att hon inte kommer ihåg Pythagoras sats från skolan – hon har inte ens bemödat sig om att lära sig den inför det tal där denna sats utgör en nyckelkomponent.</p>\n<p>På avstånd framstår förloppet som tämligen obegripligt. Men samtidigt känns det hela välbekant, för vi vet redan på förhand att Pythagoras sats inte är något som politiker förväntas kunna. Likväl förväntar vi oss att de ska insistera på matematikens nödvändighet. Det är denna märkliga motsägelse som jag är ute efter att förstå.</p>\n<p>Låt oss ta ytterligare ett exempel. I ett avsnitt av radioprogrammet Skolministeriet som handlade om matematikutbildning intervjuades den dåvarande generalsekreteraren för den ideella föreningen Mattecentrum, Hannah Pettersson. Syftet med Mattecentrum är bland annat att ”öka kunskapen i och stimulera intresset för matematik”. Pettersson förklarar först hur viktiga matematikkunskaper är för demokratin, för att människor ska klara sin privatekonomi och för att träna det logiska tänkandet, men också för människors ”problemlösningsförmåga”. När hon sedan får följdfrågan hur matematikkunskaper mer specifikt kan komma till nytta i människors vardag blir hon osäker. Hon trevar sig fram och kommer till slut på ett exempel: Om man hoppar mellan hustak så kan man ha nytta av matematik för att beräkna om man kommer att klara hoppet.</p>\n<p>Hur är det möjligt att företrädaren för en organisation vars syfte är att befrämja kunskaper i matematik inte kan förklara hur och varför sådana kunskaper är viktiga?</p>\n<p>För att förstå denna motsägelse kan man ta hjälp av den österrikiske filosofen Robert Pfallers begrepp <i>interpassivitet</i>. Han exemplifierar det med hjälp av de bönekvarnar som buddhistiska munkar i Tibet använder för att – enligt Pfaller – slippa det mödosamma arbetet att meditera. Kvarnarna fylls med remsor på vilka vissa mantran är nedskrivna. De placeras sedan så att det är enkelt att sätta snurr på dem med handen. Eller så konstrueras en anordning så att de får snurr med hjälp av vind eller vatten. I vissa fall kopplas de helt enkelt till en elmotor som genererar en konstant rotation.</p>\n<p>Enligt Pfaller tror inte munkarna på allvar att bönekvarnarna gör dem till bättre buddhister. De nöjer sig i stället med att en tänkt naiv betraktare tror det, ungefär på samma sätt som vi nöjer oss med att ett tänkt barn tror att det faktiskt är tomten och inte pappa som kommer med presenter på julafton. Den naiva betraktaren fungerar som ett praktiskt kulturellt arrangemang som gör det enkelt att ”göra något” för religionen. Snurrandet blir en bekräftelse på att allt är som det ska vara.</p>\n<p>Hur kan detta resonemang tillämpas på skolmatematiken?</p>\n<p>Matematiken skulle i så fall få rollen av vår religion, vår ”gud”. Detta passar, tycker jag, på så sätt att matematiken tillskrivs en fantastisk betydelse för människors vardag och yrkesliv, för vetenskap och teknik, för demokrati och tillväxt – sådant som vi moderna samhällsmedborgare tycker är viktigt. Å andra sidan är matematiken något som många fruktar. Det är välkänt att den kan skapa ångest för elever i skolan, och att den genom mattebetygen kan blockera vägen mot aktivt medborgarskap och attraktiva yrken. Kort sagt bär matematiken på precis den dubbelhet av beundran och fruktan som är karaktäristisk för det som en kultur eller ett samhälle håller för heligt. Hit hör för övrigt också att matematiken för de allra flesta framstår som helt obegriplig: otroligt viktig, men obegriplig.</p>\n<p>Vilken är då vår bönekvarn, som låter oss utöva religionen utan att behöva göra något själva?</p>\n<p>Vår bönekvarn är förstås skolmatematiken. Och våra böneremsor är kursplanerna. Eleverna i skolan snurrar inte bokstavligen, men de hålls i mer eller mindre konstant verksamhet. Det är inte alltför långsökt att se deras verksamhet som en ersättning för något som egentligen kunde krävas av oss vuxna: att tänka matematiskt, att använda matematik för att lösa alla möjliga sorters problem, att kommunicera med hjälp av matematik, att njuta av dess skönhet, att förstå dess bevis och så vidare. Med en annan term som Pfaller använder kan man säga att vi delegerar arbetet att försöka förstå matematik till barnen, på samma sätt som arbetet att upprepa mantran delegeras till bönekvarnar i det buddhistiska Tibet.</p>\n<p>Vi har här att göra med den sortens handling som psykoanalysens grundare Sigmund Freud kallade ett symptom. Handlingen sammanfattar vår ambivalenta hållning till den svårhanterliga matematiken. Å ena sidan vill vi hylla den för allt vi tror att den gör för oss. Därför placerar vi den i centrum för vår kultur. Å andra sidan skrämmer den oss med sin svårbegriplighet. Därför bygger vi in den i ett skal av skola, där den kan verka i det tysta. Det ofta jobbiga tragglandet med matematiken i skolan är priset vi måste betala för att stå fria som vuxna, som stolta försvarare av matematiken – trots att vi liksom Thorning-Schmidt inte ens har en aning om vad Pythagoras sats är, och att vi liksom Hannah Pettersson inte kan förklara vad kunskaper i matematik är bra för. Vi skapar med hjälp av skolan ett sken för den naiva betraktaren, av kunskapstillväxt och matematikkärlek, som gör det möjligt för oss som vuxna att slippa veta och att älska annat som vi väljer mer fritt och som vi egentligen tycker bättre om.</p>\n<p>Om det är detta som skolmatematiken gör för oss, hamnar förstås forskning som syftar till resultatförbättring i ett helt annat ljus.</p>\n<p class=\"forf\">Sverker Lundin</p>"
    },
    {
     "title": "När mangan kom till Sverige",
     "html": "<p>Idag är en stor del av alla medieprodukter som exporteras från Japan manga och anime. Exporten av serierna startade på allvar när den inhemska försäljningen började gå ner under nittiotalets finanskris. Manga fick snabbt en framträdande ekonomisk roll i exporten. Framför allt fick den rollen som kulturell ambassadör, och den japanska staten var snabb med att föreslå förändringar i fråga om vilket innehåll som var okej och vad som måste bort.</p>\n<p>Den svenska mangautgivningen har varit knuten till stora förlag på barnboks- och seriemarknaden. Först ut var Bonnier Carlsen, som gav ut <i>Dragon Ball</i> med start år 2000. Till en början sålde den inte så bra, men två år senare slog den igenom stort; då var det som om en dammlucka öppnats, och stora mängder asiatiska serier köptes in av såväl nya som etablerade förlag. Utgivningen av manga blev mycket lönsam och det fanns plats för både stora och små förlag att ge sig in i branschen. Enligt den rapport om läsvanor och förlagsstatistik som Åsa Warnqvist gjorde för Litteraturutredningen ökade antalet utgivna serieböcker med lite drygt 400 procent mellan åren 2002 och 2006, och 94 procent av ökningen utgjordes av manga.</p>\n<p>Mangaindustrin i Sverige växte oavbrutet fram till 2007, då det började gå utför. Marknaden mättades, vilket ställde till det för förlagen. De tvingades att antingen hitta nya lösningar eller sluta med utgivningen helt. Nästan samtliga förlag valde att trappa ner och i förlängningen sluta ge ut asiatiska serier.</p>\n<p>Flera marknadsfaktorer spelade in för att ta död på den svenska mangautgivningen. Den första var relationen mellan de japanska och de svenska förläggarna. De stora förlagen i Japan var från början skeptiska till mangautgivning i Sverige, dels för att språkregionen var så liten, dels för att man i allmänhet ville ha att göra med så få utlandsaktörer som möjligt. De japanska förlagen engagerade sig inte i vilka förutsättningar mangautgivningen hade i andra länder utan ville mest bara att den skulle flyta på och dra in pengar. Johan Andreasson, redaktör på Bonnier Carlsen vid den tiden, berättar att förlagen stundom kunde vara väldigt krävande i fråga om hur saker skulle skötas och hur mycket man skulle sälja. Enligt serieskaparen Natalia Batista blev det med tiden dock troligtvis ointressant för de japanska förlagen att lägga tid och energi på vad som måste ha tett sig som en underpresterande marknad.</p>\n<p>De svenska förlagen var dessutom inte så insatta i hur de skulle få mangautgivningen att fungera. När tillväxten avtog 2007, drog många förlag öronen åt sig angående hela konceptet. Konsensus bland dem jag talat med från branschen är att förlagen ville hålla på med manga mest för att den sålde bra. När den inte längre gjorde det, var man inte intresserad av att lägga ner tid och pengar på de omställningar som hade behövts för att få formatet att sälja igen, varför nedmonteringen startade.</p>\n<p>Det var dock inga små förändringar som hade krävts, och det hade troligtvis inte kunnat ske i en handvändning. Ett av förlagens största problem var att deras försäljningskanaler hade svårt att hantera formatet. Lagring av så stora mängder mangapocketar tar mycket plats, och den fria bokmarknaden i Sverige gör att de fysiska bokhandlarna ofta tvingas konkurrera med stora webbbokhandlar i fråga om pris, något som inte sker i Japan, där priset är fast och kunden kan gå till boklådan lika gärna som att handla på nätet.</p>\n<p>Attityden till serier spelade också in. I Sverige har serier historiskt ansetts mest lämpade för barn. Med tiden, och framför allt under senare år, har mediet dock breddat sig och som ett resultat av det fått högre kulturell status med tillhörande normalisering och fler läsare i högre åldrar.</p>\n<p>För mangautgivningen innebar det här dock att de grepp man tog till i den storskaliga mangaindustrin för att sälja och marknadsföra manga blev felriktade i det svenska sammanhanget. Eftersom mangan här betraktades som avsedd för barn, riktades utbudet enbart mot åldersgruppen 8–12 år. Det var den bild av mediet som förlagen hade och det fick en negativ inverkan på sådant som avvek. Då de mangaserier som aldrig varit menade för yngre målgrupper knappast kunde uppfylla de krav på barnvänlighet som ställdes, gavs de inte heller ut. Planer på att ge ut manga för vuxna förekom, men det blev aldrig av.</p>\n<p>För läsarna innebar detta att det utbud som fanns på svenska med tiden kom att rikta sig till en annan målgrupp än den de själva tillhörde. Eftersom de kommit i kontakt med engelskspråkiga utgåvor eller serier på internet visste de att manga inte uteslutande riktade sig till pojkar 8–12 år, men då de mötte det svenska utbudet såg de att manga på svenska gjorde det. Detta spädde på läsarmigrationen till internet, där man lättare kunde köpa eller olovligt läsa sådant man tyckte om, och den svenska mangaindustrin tappade då ännu mer i status och ekonomisk livskraft.</p>\n<p>Ett bredare utbud är vad den svenska marknaden hade behövt för att kunna locka läsarna att köpa och läsa mer asiatiska serier. Idag är det inte mycket kvar av mangautgivningen på svenska. De största förlagen har gått vidare till annat, och så även några av specialförlagen, men mangan i sig är knappast borta för det. På Science Fiction-bokhandeln ser man inga tecken på att det inte skulle gå bra att fortsätta sälja engelska utgåvor av asiatiska serier.</p>\n<p>Mangan ligger också bakom förändringen av serievärlden i övrigt och hur seriebranschen fungerar idag. För det första kan man inte överskatta hur viktigt mangans intåg på den svenska seriemarknaden faktiskt var. Seriehistorikern Fredrik Strömberg berättar att förläggarna i slutet på nittiotalet var nära att helt lägga ner serieutgivningen i Sverige. Serier sålde inte så bra längre och de yngre verkade inte intresserade av att läsa dem. Mangans succé bevisade att serier kan sälja, och den fick in yngre målgrupper i serieläsandet igen. En hel del förlag vågade nysatsa på serier under åren som följde, även om de slutade ge ut just manga. Detta hjälpte till att öppna för en seriemarknad som vågar ta risker och släppa in fler alternativ.</p>\n<p>För det andra blev kvinnor en betydelsefull målgrupp för serier, och de gav sig in i formatet även som skapare. Serieskaparen Natalia Batista berättar att mötet med mangan för många svenska tjejer innebar att de för första gången kunde läsa serier riktade specifikt till dem, vilket gjorde seriemediet mer intressant för dem än tidigare. Mangaboomen är långt ifrån det enda som ligger bakom kvinnornas intåg i den svenska serievärlden, men den hjälpte utan tvekan till.</p>\n<p class=\"forf\">Christian Johansson</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "<b>Vad av följande stämmer med textens beskrivning av rättsärendet?</b>",
     "options": [
      "S.M. överklagade tingsrättens beslut till hovrätten.",
      "Polismyndigheten ville att Högsta domstolen skulle döma som tingsrätten.",
      "Hovrätten var den enda av domstolarna som gav Polismyndigheten rätt.",
      "Tingsrättens beslut fastställdes i såväl hovrätten som Högsta domstolen."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "<b>Vad anger Högsta domstolen som skäl till sitt beslut?</b>",
     "options": [
      "Att registreringsnummer i allmänhet brukar anges utan mellanrum.",
      "Att det avgörande i trafikförordningen är att avgiften betalas, inte på vilket sätt det sker.",
      "Att den information som S.M. hade behövt inte fanns tillgänglig.",
      "Att utformningen av registreringsnummer ofrånkomligen skiljer sig åt mellan länder."
     ],
     "correct": 2,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "<b>Vad vill textförfattaren illustrera med Helle Thorning-Schmidts och Hannah Petterssons uttalanden?</b>",
     "options": [
      "Att många politiker och ledande samhällsdebattörer är obildade.",
      "Att det ställs högre krav på dagens skolungdomar än på tidigare generationer.",
      "Att matematikkunskaper inte har något samband med förmågan att lösa problem.",
      "Att de stora orden om matematikens värde klingar falskt."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "<b>Vad vill textförfattaren ha sagt när han jämför skolmatematik med bönekvarnar?</b>",
     "options": [
      "Att matematikundervisningen främjar mekaniskt räknande snarare än matematisk förståelse.",
      "Att vi genom skolmatematiken hedrar matematiken utan att själva behöva räkna.",
      "Att matematiklärare ofta är dåligt insatta i kursplanerna och att undervisningen går på rutin.",
      "Att elevers ångestfyllda relation till matematiken hindrar dem från att njuta av dess skönhet."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "<b>Vilken funktion fyller ”den naiva betraktaren”, enligt textförfattaren?</b>",
     "options": [
      "Den visar hur folk i allmänhet uppfattar verkligheten.",
      "Den stärker självförtroendet när man ställs inför något som känns svårt.",
      "Den håller liv i människors fruktan för det som anses heligt.",
      "Den ger mening åt en verksamhet som man egentligen har genomskådat."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "<b>Vilken alternativ rubrik skulle passa bäst till texten?</b>",
     "options": [
      "Sänk kunskapskraven i matematik!",
      "Matte på schemat – för vems skull?",
      "Matematik – vackert men obegripligt",
      "Matte inte viktigare än andra ämnen"
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "<b>Vad var enligt texten den japanska statens syfte med att blanda sig i innehållet i de mangaserier som landet exporterade?</b>",
     "options": [
      "Att väcka nyfikenhet hos serieläsare i andra länder.",
      "Att slå sig in på den globala seriemarknaden.",
      "Att påverka omvärldens bild av Japan.",
      "Att vända en negativ försäljningstrend."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "<b>Då manga började ges ut i Sverige var förutsättningarna enligt texten delvis andra än i Japan. Vilket svarsalternativ anger två förutsättningar som skilde länderna åt?</b>",
     "options": [
      "Förekomsten av webbokhandlar och kundkretsens köpkraft.",
      "Villkoren för prissättning och uppfattningen om läsaren.",
      "Böckernas fysiska format och behovet av barnvänlighet.",
      "Intresset för andra serier och konkurrensen i förlagsbranschen."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "<b>Vilken förklaring ger textförfattaren till att den svenska utgivningen av manga så småningom upphörde?</b>",
     "options": [
      "Förlagen erbjöd inte tillräcklig variation inom genren.",
      "Kvaliteten på den massproducerade mangan blev med tiden allt sämre.",
      "Publiceringen av manga flyttade successivt över till internet.",
      "Utgivningen riktade sig inte till någon tydlig målgrupp."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "<b>Vad ledde mangans framgångar i Sverige till, enligt textförfattaren?</b>",
     "options": [
      "Att färre serier översattes till svenska.",
      "Att seriebranschen fick mod att förnya sig.",
      "Att serietecknande blev mer ekonomiskt lönsamt.",
      "Att pojkar och flickor inte längre betraktades som skilda målgrupper."
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
     "text": "I slutänden finns det risk för det som filosofen Hanna Arendt kallade <i>banal ondska</i>, det vill säga att man _____ sig från ansvar och ”bara lyder order”.",
     "options": [
      "avråder",
      "utlämnar",
      "friskriver",
      "ursäktar"
     ],
     "correct": 2
    },
    {
     "num": 22,
     "text": "Enligt utredarens uppskattning hamnar minst 95 procent av hälsoapparna inom de _____ som kan betraktas som allmänt _____. Hit hör stegräkning, påminnelser om att det är dags för en bensträckare eller allmänna tillrop om positivt tänkande.",
     "options": [
      "kretsar – tävlingsinriktade",
      "regioner – medicinska",
      "marknader – rehabiliterande",
      "segment – livsstilsfrämjande"
     ],
     "correct": 3
    },
    {
     "num": 23,
     "text": "För att _____ kan man säga att hot om straff fungerar bäst när det gäller individer som har mycket att förlora på att _____ som brottsliga, således människor som har en stark _____ i det etablerade samhället.",
     "options": [
      "generalisera – ertappas – förankring",
      "provocera – tillskrivas – anknytning",
      "kompensera – utpekas – befattning",
      "rationalisera – avfärdas – position"
     ],
     "correct": 0
    },
    {
     "num": 24,
     "text": "Författarens sätt att leta efter data som genom en viss tolkning kan stödja hans hypotes om sammansvärjningen känns efter ett tag rätt tröttsamt och irriterande. Man anar en _____.",
     "options": [
      "missnöjespolitiker",
      "tvångsneurotiker",
      "samtidssatiriker",
      "konspirationsteoretiker"
     ],
     "correct": 3
    },
    {
     "num": 25,
     "text": "Evolutionsbiologin visar att viljan att hämnas kan vara inprogrammerad i våra gener. Men mår vi verkligen bättre av att _____ för våra _____ att hämnas om tillfälle ges?",
     "options": [
      "ge efter – impulser",
      "ta ställning – drifter",
      "ge upp – instinkter",
      "ta strid – känslor"
     ],
     "correct": 0
    },
    {
     "num": 26,
     "text": "Det ovanligt torra och varma vädret under framför allt våren och sommaren har lett till omfattande _____ av granbarkborre, med stora skador på skogen som följd.",
     "options": [
      "intrång",
      "beslag",
      "uppgång",
      "angrepp"
     ],
     "correct": 3
    },
    {
     "num": 27,
     "text": "Universitetsarkivarien ger råd om hur _____ bäst hanteras, hur de beskrivs och förtecknas, och är även universitetets _____ i arkivfrågor.",
     "options": [
      "rapporter – talskrivare",
      "handlingar – handläggare",
      "ansökningar – avsändare",
      "dokument – bibliotekarie"
     ],
     "correct": 1
    },
    {
     "num": 28,
     "text": "Artikelns _____ är som följer: först ges en historisk tillbakablick på forskning kring språk och tanke. Därefter _____ de _____ som har gjorts under de senaste årtiondenas forskning.",
     "options": [
      "metod – understryks – hypoteser",
      "konstruktion – urskiljs – utblickar",
      "målsättning – hänvisas till – teorier",
      "disposition – redogörs för – landvinningar"
     ],
     "correct": 3
    },
    {
     "num": 29,
     "text": "Producenten Billy Sherrill, känd för sina bombastiska ljudväggar, och Johnny Cash, känd för sitt avskalade <i>bom chicka bom</i>-driv, framstod på papperet som en osannolik _____. Men båda såg sig _____ att skaka liv i den en gång så vitala och lukrativa karriären.",
     "options": [
      "konstellation – nödgade",
      "hybrid – överens",
      "allians – ansatta",
      "symbios – tillstyrkta"
     ],
     "correct": 0
    },
    {
     "num": 30,
     "text": "Kursplaner ska ligga till grund för den undervisning eleverna får. Därför krävs att kursplanerna är begripliga för lärare och att de kan _____ i en undervisning av god kvalitet.",
     "options": [
      "avsättas",
      "försättas",
      "omsättas",
      "besättas"
     ],
     "correct": 2
    }
   ]
  }
 ]
};
