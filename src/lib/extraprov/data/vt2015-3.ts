// Högskoleprovet 28 mars 2015, provpass 3 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "vt2015-3",
 "tillfalle": "vt2015",
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
   22,
   0.2
  ],
  [
   25,
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
   37,
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
   50,
   1.1
  ],
  [
   53,
   1.2
  ],
  [
   56,
   1.3
  ],
  [
   59,
   1.4
  ],
  [
   62,
   1.5
  ],
  [
   65,
   1.6
  ],
  [
   68,
   1.7
  ],
  [
   70,
   1.8
  ],
  [
   72,
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
     "word": "signalement",
     "text": "<b>signalement</b>",
     "options": [
      "förklaring",
      "underrättelse",
      "varning",
      "stämpel",
      "beskrivning"
     ],
     "correct": 4
    },
    {
     "num": 2,
     "word": "uppsåtlig",
     "text": "<b>uppsåtlig</b>",
     "options": [
      "tänkbar",
      "överdriven",
      "trotsig",
      "förträfflig",
      "avsiktlig"
     ],
     "correct": 4
    },
    {
     "num": 3,
     "word": "talg",
     "text": "<b>talg</b>",
     "options": [
      "skal",
      "hud",
      "fett",
      "frö",
      "hår"
     ],
     "correct": 2
    },
    {
     "num": 4,
     "word": "kontrastera",
     "text": "<b>kontrastera</b>",
     "options": [
      "motarbeta",
      "dra ihop",
      "återkalla",
      "säga emot",
      "bilda motsats"
     ],
     "correct": 4
    },
    {
     "num": 5,
     "word": "eklips",
     "text": "<b>eklips</b>",
     "options": [
      "soluppgång",
      "omloppsbana",
      "stjärnfall",
      "förmörkelse",
      "spiralform"
     ],
     "correct": 3
    },
    {
     "num": 6,
     "word": "snart sagt",
     "text": "<b>snart sagt</b>",
     "options": [
      "så gott som",
      "som väntat",
      "vanligtvis",
      "återkommande",
      "i bästa fall"
     ],
     "correct": 0
    },
    {
     "num": 7,
     "word": "aktualitet",
     "text": "<b>aktualitet</b>",
     "options": [
      "information",
      "åsikt",
      "principfråga",
      "nyhet",
      "allmänbildning"
     ],
     "correct": 3
    },
    {
     "num": 8,
     "word": "inmundiga",
     "text": "<b>inmundiga</b>",
     "options": [
      "sucka",
      "äta",
      "andas",
      "bita",
      "tystna"
     ],
     "correct": 1
    },
    {
     "num": 9,
     "word": "krum",
     "text": "<b>krum</b>",
     "options": [
      "böjd",
      "svag",
      "grym",
      "hård",
      "kort"
     ],
     "correct": 0
    },
    {
     "num": 10,
     "word": "tirader",
     "text": "<b>tirader</b>",
     "options": [
      "övernaturliga händelser",
      "mångordiga yttranden",
      "förutfattade meningar",
      "genomskinliga lögner",
      "tråkiga nyheter"
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
     "title": "Hjärnskador och hjälmar",
     "html": "<p>Hans von Holst, chefsöverläkare för neurodivisionen på Karolinska institutet, besökte i mitten av 1990-talet Kungliga Tekniska högskolan (KTH) för att få hjälp att utveckla idéer om att förebygga hjärnskador. Han ville råda bot på konsekvenserna av olyckor, med eller utan hjälm.</p>\n<p>Många frågor krävde svar. Varför testas skyddshjälmar bara med vertikala fall? Sådana sker ytterst sällan i verkliga livet. Skulle man kunna mäta påverkan från vilka vinklar som helst? Skulle man kunna imitera hjärnans egen skyddsmekanism, att vätskan mellan hjärnan och skallbenet ger ett energiupptag innan hjärnan slår i skallbenet och de verkligt livshotande skadorna uppstår?</p>\n<p>Slumpen gjorde att forskaren Peter Halldin och Hans von Holst träffades i en korridor på KTH och började diskutera.</p>\n<p>– Jag blev så intresserad att jag ville forska på det här området inom biomekanik och Hans blev min handledare, berättar Peter.</p>\n<p>Det mötet blev starten på samverkan mellan olika tekniker och kompetenser där CAD (<i>computer-aided design</i>) utgör sista ledet i kedjan att utveckla en hjälm med högre energiupptag.</p>\n<p>Peter Halldin lyckades svara på frågorna och utvecklade MIPS-tekniken (<i>Multidirectional Impact Protection System</i>).</p>\n<p>– Det är Svein Kleiven här på KTH som skapat den FE-modell som mäter påverkan på hjärnan. Jag har arbetat mer med experimentella prover och med själva tillämpningen av teknologin i hjärnan.</p>\n<p>Geometrin till FE-modellen skapade Kleiven utifrån medicinska bilder från Visible Human Database i USA. Han har sedan 1997 arbetat med att beskriva en mängd biologiska vävnaders olika materialegenskaper i modellen och lagt ner mycket tid på att jämföra med experiment genomförda på universitet i USA. Detta är ett arbete som tagit cirka 15 år.</p>\n<p>Men hur kan man dra slutsatser från FE-modellen till verkliga livet?</p>\n<p>– En total olycksrekonstruktion kräver filmning av olyckan på plats och en skiktröntgen. Då vet vi i vilken hastighet fallet skedde och hur. Ett sådant tillfälle var en motocrossolycka 2004 då en person fanns på plats och filmade. Men energiupptagningen går lätt att mäta i modellen vilket gör att man kan dra säkrare slutsatser och jämföra olika hjälmar.</p>\n<p>Erfarenheterna används även i utbildningssyfte. Många som utbildar sig till traumaspecialister idag kommer i kontakt med Halldins och Kleivens forskning. Den har nog också bidragit till debatten om ett allmänt hjälmtvång.</p>\n<p class=\"forf\">Carina Wahlstedt Janson</p>"
    },
    {
     "title": "AD om fallet Praktikanten",
     "html": "<p>En praktikant gick ut gymnasiets elprogram i juni 2009, och sommaren därefter var han visstidsanställd hos Bravida. Efter det var han arbetslös. Senare på hösten blev han anvisad praktik enligt socialtjänstlagen på samma företag och arbetade där den 11/11 2009–29/1 2010. Han fick ingen lön utan i stället försörjningsstöd.</p>\n<p><b>ELEKTRIKERFÖRBUNDET:</b> Praktikanten utförde arbete inom installationsavtalets område på ett sådant sätt att han blev anställd. Han hade därför rätt till lön och semesterersättning, sammanlagt 34 895 kronor. Företaget bröt mot kollektivavtalet genom att inte betala lön och genom att inte följa avtalets regler om försäkring.</p>\n<p>Även om praktikanten inte skulle anses som arbetstagare på grund av socialtjänstlagens undantag, så har företaget ändå brutit mot kollektivavtalet. Avtalet tillåter inte att andra än anställda arbetar inom avtalets område.</p>\n<p>Företaget ska betala 200 000 kronor i allmänt skadestånd till förbundet för kollektivavtalsbrott.</p>\n<p><b>ARBETSGIVARPARTEN:</b> Praktikanten var inte arbetstagare. Installationsavtalet hindrar inte arbetsgivare att ta emot av kommunen anvisade arbetslösa som praktikanter.</p>\n<p><b>ARBETSDOMSTOLEN (AD):</b> I civilrättslig mening var praktikanten arbetstagare. Men socialtjänstlagens undantag för praktikanter gällde för honom. Enligt undantaget är praktiken till för att stärka de enskildas möjligheter till arbete. Praktiken i sig är inte arbete.</p>\n<p>Elektrikerförbundets andrahandsyrkande avslås också. Installationsavtalets bestämmelser om lärlingsanställningar gäller inte praktik enligt socialtjänstlagen. Arbetsgivaren har heller inte haft någon ekonomisk fördel av praktikantens arbete eftersom företaget inte fakturerat det arbete han utförde. Företaget har inte behövt fler anställda, utan accepterade att ta emot praktikanten på socialtjänstens initiativ.</p>\n<p>Fackförbundet hävdade också att sådana elinstallationer som praktikanten fick göra i princip bara får göras av anställda enligt elinstallatörsförordningen. Även om det är så, betyder det varken att praktikanvisningen inte gällde eller att praktikanten i själva verket blivit anställd.</p>\n<p><b>DOMSLUT:</b> Elektrikerförbundets talan avslås. Förbundet får betala motpartens rättegångskostnader på 257 000 kronor.</p>\n<p class=\"forf\">Ann Norrby</p>"
    },
    {
     "title": "Stressade lärare",
     "html": "<p>Lärare toppar med 70,9 procent listan över yrkesgrupper som uppger att de har svårt att koppla av från jobbet. 34,2 procent lider av sömnlöshet, enligt TCO-rapporten <i>Att sova med jobbet</i>. Arbetsmiljöforskningen har en del att säga om vad som orsakar sådan stress. ”Mycket att göra” är bara en del av förklaringen.</p>\n<p>Meningslöshet uppstår när lärare dras bort från den klassrumsnära praktiken och en lärarägd idé om elevernas bästa, och kraften i stället riktas mot transparens och anpassning av utbildningen till krav från föräldrar och statliga kontrollorgan.</p>\n<p>Läroplanen från 1994 medförde ett lokalt arbete som gjorde mål och processer mer synliga för eleven. Det handlade om att formulera lokala mål och kriterier framför att planera sin egen undervisning. Friskolereformen kom med krav på att lärarna skulle visa upp sin skola på marknaden. Lärare krävdes på timtals av arbete med skriftliga omdömen trots att både lärare och föräldrar upplevde att omdömet skrevs i en mall som gjorde att det nästan är obegripligt. Därmed fördes lärarna bort från relevans och sammanhang.</p>\n<p>Under 2000-talet har fler förändringar tillkommit där ansvar och insyn allt oftare utkrävs. Skärpt tillsyn med en skolinspektion som riktar direkt kritik mot lärare, ökad insyn där enskilda skolors resultat publiceras på nätet, krav på dokumentation med bland annat överklagningsbara åtgärdsprogram, kommunböter för problem med mobbning och lärarlegitimation som understryker ett personligt yrkesansvar.</p>\n<p>Det gemensamma för dessa förändringar är att det är lättare att utkräva ansvar men inte ett dugg lättare att ta ansvar. Det blir inte lättare att undervisa för att Skolinspektionen tittar på. Tvärtom riskerar en sådan förändring att underminera förtroendet för lärarna. Svag ledning och svaga institutioner medför att krav som riktas mot skolan i realiteten blir krav riktade mot den enskilda, ensamma läraren.</p>\n<p>Tillgången till information om allt som är fel inbjuder dessutom till en mediedebatt som signalerar en kris i förtroendet för lärarna. Varje gång som en politiker eller en ledarskribent kategoriskt och förnumstigt uttalar lösningar för skolan underminerar det samtidigt lärarnas mandat.</p>\n<p>Sammantaget har reformerna inte bara givit lärare för mycket att göra. De har också byggt upp pressen, plockat bort utrymme att ta stöd i varandra och skrapat bort relevansen och sammanhanget i yrkesutövningen samt underminerat förtroendet. Detta i stället för att freda det dagliga arbetet kring undervisningen och tilliten till lärarkåren. Tur att många lärare är kloka och gör praktiskt motstånd.</p>\n<p>De som vill vända utvecklingen måste konsekvent ställa frågan: Vad behöver du som ska göra jobbet för att kunna bli bättre och bättre? Och de måste lyssna på svaret. Det är inte bara ett grundläggande krav ur arbetsmiljösynpunkt, det är även en förutsättning för att nästa förändring också ska bli en förbättring.</p>\n<p class=\"forf\">Erik Hallsenius</p>"
    },
    {
     "title": "Ett steg mot en bättre värld",
     "html": "<p>Efter att länge ha varit borta ur det offentliga samtalet har ordet och begreppet ondska kommit tillbaka. ”Plötsligt var det som om alla talade om ondska: jurister, samhällsvetare, humanister, psykologer, skolelever, till och med politiker”, skriver Anders Johansson i början av sin bok <i>Göra ont: Litterär metafysik,</i> en av två nya böcker på svenska om ondska. Den andra är Ann Heberleins <i>En liten bok om ondska</i>.</p>\n<p>Huvudanledningen till den länge rådande motviljan mot att tala om ondska har varit en – ofta befogad – ovilja att peka ut enskilda individer som onda.</p>\n<p>Liksom Anders Johansson konstaterar Heberlein att det har skett ett paradigmskifte. Nu används beteckningen ond om en lång rad människor från gärningsmännen bakom folkmorden i Rwanda till Josef Fritzl, som i åratal höll sin dotter inlåst i villans källare och våldtog henne.</p>\n<p>Heberlein godtar uppfattningen att det finns onda människor, men hon har en snäv definition. Ond är ”en människa som medvetet gör ont för det ondas skull /.../ således en människa som njuter av att tillfoga andra varelser smärta”.</p>\n<p>Med den definitionen är ondska ofta en felaktig – och så gott som alltid otillräcklig – förklaring till handlingar som får onda konsekvenser. Vi måste söka orsakerna i annat än medfödd ondska. Det är dit Ann Heberlein vill komma. Hon skriver: ”Det där ’varför?’ som människan upplever när hon konfronteras med ondska lämnar mig ingen ro. Jag vill /.../ företa en undersökning angående ondskans natur och orsaker.” Syftet med hennes undersökning är reformatoriskt: ”Varje steg vi tar mot en förståelse av ondskans motiv är ett steg mot en bättre värld, en värld med mindre ondska.”</p>\n<p>Syftet med Anders Johanssons bok förblir oklart. Han för ett dialektiskt resonemang där varje påstående möts av ett motargument eller en reservation. Teser och antiteser staplas på varandra, men det blir sällan någon syntes.</p>\n<p>Ingen som studerar ondska kan komma förbi nazisternas förintelse av över fem miljoner judar och romer – och i det sammanhanget förbigå filosofen och författaren Hannah Arendt (1906–1975). Det gör inte heller Heberlein och Johansson.</p>\n<p>Arendt följde rättegången i Jerusalem 1961 mot förintelsens organisatör Adolf Eichmann och fann att han varken var en särskilt övertygad nazist eller en psykiskt sjuk mördare. Eichmann var en fantasilös byråkrat som ”bara lydde order”.</p>\n<p>Arendts slutsats är skrämmande: vem som helst kan, under vissa förutsättningar, utföra oerhört onda handlingar. Det bekräftas också av de amerikanska psykologerna Stanley Milgrams och Philip Zimbardos välkända experiment, som visar hur vanliga människor snabbt kan förvandlas till grymma torterare, respektive brutala fångvaktare, om de yttre förutsättningarna är ”de rätta”.</p>\n<p>Huvudorsaken till ondskan både i fallet Eichmann och i de psykologiska experimenten är inordnandet i ett kollektiv och lydnaden under auktoriteter. Alltså: mera olydnad – mindre ondska.</p>\n<p>Vid individuell ondska finns så gott som alltid onda erfarenheter från barndomen i bakgrunden. Josef Fritzl till exempel växte upp med en brutal, nazistisk far och en kall mor. Vid onda handlingar utförda av barn blir sambandet med egna onda erfarenheter närmast övertydligt. Med stöd av journalisten Gitta Serenys två böcker i ämnet redogör Herberlein för fallet Mary Bell, den elvaåriga flicka som 1968 i Newcastle dödade två små pojkar. Mary växte upp med en mentalsjuk och prostituerad mamma, som redan när flickan var fyra år började sälja henne till män.</p>\n<p>Även om omständigheterna bakom och konsekvenserna av barns våld sällan är så grymma som i fallet Mary Bell är mönstret nästan alltid detsamma. Förövarna är själva utsatta, misshandlade och kränkta.</p>\n<p>Både Heberlein och Johansson har många referenser till litteraturen, inte bara till vetenskapliga verk om ondska utan också till fiktionen. För Johansson är förhållandet mellan litteratur och ondska/godhet huvudtemat.</p>\n<p>Herberlein visar att senare tiders studier och diskussioner om ondska har föregripits i litterära klassiker som Dostojevskijs <i>Brott och straff</i> och <i>Bröderna Karamazov,</i> Joseph Conrads <i>Mörkrets hjärta</i> och William Goldings <i>Flugornas herre</i>. Men också populärlitteratur som kriminalromaner av Henning Mankell och Stieg Larsson har förklaringsvärde om ont och gott.</p>\n<p>Även Anders Johansson skriver om fiktionens roll i sammanhanget, men lyckas vrida också detta till något negativt: ”Det vanligaste svaret på frågan varför man överhuvudtaget ska diskutera litteratur i relation till ondska är alltså att litteraturen är särskilt bra på att gestalta ondskan, öka vår förståelse för den osv. Det är ett dåligt svar, bland annat för att det naglar fast litteraturen i den traditionella idealistiska position som istället borde synliggöras och ifrågasättas.”</p>\n<p>Visst är det bra att diskutera och ifrågasätta etablerade ”sanningar”, men då önskar man som läsare att resonemanget ska leda fram till något nytt. Eller – om det är för mycket begärt – att få behålla något av det gamla.</p>\n<p>Inte heller Ann Heberlein lägger fram några nya fakta eller slutsatser. Värdet av hennes bok ligger främst i tajmningen. I vår nybrutala tid, där människor framställs som onda av naturen och rop på vedergällning är enda svaret, behöver vi påminnas om den gamla sanningen: enda sättet att komma till rätta med onda gärningar är att blottlägga de bakomliggande orsakerna och göra något åt dem.</p>\n<p class=\"forf\">Karl-Olof Andersson</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vilket av följande har enligt texten varit huvudmålet med Peter Halldins forskning?",
     "options": [
      "Att undersöka från vilken fallvinkel de flesta av de livshotande olyckorna sker.",
      "Att studera filmupptagningar av verkliga fallolyckor.",
      "Att få hjälmar att ta upp en större mängd energi.",
      "Att rekonstruera omständigheterna bakom de verkliga fallolyckorna."
     ],
     "correct": 2,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Framgår det av texten vilken typ av fallolyckor Peter Halldin framför allt utgått från i sin forskning?",
     "options": [
      "Ja, filmade olyckor.",
      "Ja, MC-olyckor.",
      "Ja, alla sorters trafikolyckor.",
      "Nej, det framgår inte."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "I vilken av följande frågor hade Elektrikerförbundet och arbetsgivarparten tydligt motsatta åsikter?",
     "options": [
      "I frågan huruvida socialtjänstlagens undantag gällde för praktikanten.",
      "I frågan huruvida företaget Bravida omfattades av kollektivavtalet.",
      "I frågan huruvida det var Elektrikerförbundet eller Bravida som bröt mot kollektivavtalet.",
      "I frågan huruvida praktikanten utförde arbete i strid med kollektivavtalet."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vilket av Elektrikerförbundets argument hade AD inga invändningar mot?",
     "options": [
      "Argumentet att företaget inte hade något behov av praktikanter eftersom man redan hade tillräckligt med arbetskraft.",
      "Argumentet att praktik måste räknas som arbete eftersom företaget tillämpat kollektivavtalet.",
      "Argumentet att den typ av arbetsuppgifter som praktikanten utförde enligt reglerna bara får skötas av anställda.",
      "Argumentet att praktikanten borde ha anställts av företaget eftersom han inte fått lön och avtalade förmåner."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vilken samlad effekt av förändringarna i den svenska skolan lyfter textförfattaren särskilt fram?",
     "options": [
      "Att läraren har fått utökat ansvar för undervisningen och därmed en större arbetsbörda.",
      "Att läraren har getts ett större mandat och därmed en mindre entydig roll.",
      "Att lärarens insatser har blivit mer individanpassade och därmed svårare att mäta.",
      "Att lärarens arbete har blivit mer utsatt för kontroll och därmed lättare att ifrågasätta."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 16,
     "text": "Vad menar textförfattaren med att lärarna förts ”bort från relevans och sammanhang”?",
     "options": [
      "Att de påtvingats uppgifter som mot bakgrund av deras läraruppdrag uppfattas som mindre meningsfulla.",
      "Att det ständiga kravet på dokumentation inom skolan har inverkat negativt på deras undervisningskompetens.",
      "Att de haft alldeles för mycket att göra för att kunna uppfylla de krav som reformerna ställer på dem.",
      "Att friskolornas starka konkurrenskraft har tvingat dem att göra reklam för sina skolor i stället för att undervisa."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 17,
     "text": "Vad ligger, av texten att döma, bakom det numera allt vanligare talet om ondska?",
     "options": [
      "Ondskan har synliggjorts genom en rad fasansfulla händelser.",
      "Medierna och det offentliga samtalet har gjort ondskan i sig till en förklaringsmodell.",
      "Ondskan förekommer allt oftare som motiv inom litteratur och kultur.",
      "Medierna och det offentliga samtalet domineras i allt högre grad av sensationsnyheter."
     ],
     "correct": 1,
     "textIndex": 3
    },
    {
     "num": 18,
     "text": "Vad skiljer enligt recensenten Johanssons bok om ondska från Heberleins?",
     "options": [
      "I Johanssons bok kommenteras inte att synen på ondska förändrats.",
      "Johanssons bok är kritisk till hur ondskan hanterats i tidigare litteratur.",
      "I Johanssons bok framstår ondskan som mer av ett individuellt fenomen.",
      "Johanssons bok om ondska tycks sakna en uttalad avsikt."
     ],
     "correct": 3,
     "textIndex": 3
    },
    {
     "num": 19,
     "text": "Vilken kritik riktar recensenten mot såväl Johanssons som Heberleins bok?",
     "options": [
      "Ingen av böckerna vågar utmana den rådande individualiseringen av ondskan.",
      "Ingen av böckerna tillför någon ytterligare kunskap om ondska än den redan befintliga.",
      "Ingen av böckerna har noterat att begreppet ondska fått ett nytt användningsområde.",
      "Ingen av böckerna överskrider den vanliga tudelningen i ondska respektive godhet."
     ],
     "correct": 1,
     "textIndex": 3
    },
    {
     "num": 20,
     "text": "Hur förhåller sig, enligt recensenten, Heberlein och Johansson till skönlitteraturen i sina respektive böcker om ondska?",
     "options": [
      "Heberlein diskuterar både klassisk och nyare litteratur medan Johansson endast skriver om den klassiska.",
      "Heberlein hävdar att litteraturen kan besvara våra frågor om ondska medan Johansson anser att den endast kan ställa frågorna.",
      "Heberlein menar att litteraturen har mycket att säga om ondska medan Johansson misstror just den sortens påståenden om litteratur.",
      "Heberlein behandlar endast litteratur som handlar om ondska medan Johansson menar att all litteratur är relevant."
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
     "text": "Eleverna på gymnasieskolan har svårt att få _____ för önskemålet att dra ner på tempot, och motiveringen är ”det här behöver ni för att läsa vidare”.",
     "options": [
      "opinion",
      "gehör",
      "verkan",
      "utlopp"
     ],
     "correct": 1
    },
    {
     "num": 22,
     "text": "På landsvägen skrittar Jill oss till mötes på _____. Hon bjuder på ett honungsleende i prydliga flätor med citronfärgade rosetter som _____ den gula tröjan.",
     "options": [
      "en pinscher – passar",
      "en edamer – framhäver",
      "en skimmel – matchar",
      "en habanero – förgyller"
     ],
     "correct": 2
    },
    {
     "num": 23,
     "text": "Scenen utspelar sig en sommardag i San Francisco. En _____ gitarr ljuder i bakgrunden och två bollar, en röd och en gul, studsar nedför en sluttande gata. Snart följs de av fler _____ bollar. En mansröst sjunger en ballad, och en flodvåg av studsbollar, tvåhundratusen stycken, _____ fram längs gatan.",
     "options": [
      "klassisk – studsande – flanerar",
      "driven – anemiska – rullar",
      "akustisk – kulörta – väller",
      "basisk – färgglada – studsar"
     ],
     "correct": 2
    },
    {
     "num": 24,
     "text": "Vid sidan av den i Lettland _____ sovjetiska partieliten utgjorde särskilt de anställda i den unionellt ledda industrin en gynnad grupp, medan kollektivjordbrukens medlemmar däremot var de sista att _____ sociala förmåner.",
     "options": [
      "aktiva – gå i bräschen för",
      "verksamma – komma i åtnjutande av",
      "förverkade – bli föremål för",
      "existerande – vara i besittning av"
     ],
     "correct": 1
    },
    {
     "num": 25,
     "text": "Rent allmänt gäller att ju kortare ett lösenord är, desto mer _____ bör det vara eftersom ett kort lösenord har få permutationer.",
     "options": [
      "elementärt",
      "plausibelt",
      "veritabelt",
      "komplext"
     ],
     "correct": 3
    },
    {
     "num": 26,
     "text": "Ambulanssjuksköterskor ser _____ tillsammans med sin kollega som en naturlig del av arbetet. Denna gör att de bearbetar upplevelserna och utvecklar sin självkänsla och sin yrkesmässiga mognad. Bra baskunskaper och regelbundna _____ övningar underlättar rollen som medicinskt ansvarig.",
     "options": [
      "analys – triviala",
      "reflektion – realistiska",
      "observation – operativa",
      "förberedelse – avancerade"
     ],
     "correct": 1
    },
    {
     "num": 27,
     "text": "Somliga _____ menar att de lär sig åtskilligt om levnadsförhållandena för forntidens män och kvinnor genom att studera folk som fortfarande lever under omständigheter som liknar förhistoriska förhållanden.",
     "options": [
      "antropologer",
      "kardiologer",
      "geologer",
      "histologer"
     ],
     "correct": 0
    },
    {
     "num": 28,
     "text": "Alla delar av skelettet är _____, men styrketräning ökar bentätheten så att skelettet blir mer _____. Vad som sker rent konkret är att kroppen försvarar sig mot de belastningar som träningen ger genom att öka _____ av benmassa.",
     "options": [
      "porösa – massivt – produktionen",
      "rörliga – flexibelt – avsöndringen",
      "elastiska – uppbyggt – förtätningen",
      "hårda – komprimerat – destruktionen"
     ],
     "correct": 0
    },
    {
     "num": 29,
     "text": "Regeringens beslut att inte bygga ut Vindelälven för vattenkraft innebar _____ att svenska staten satte ett värde på älven motsvarande tiotals miljarder kronor. Beslutet att bevara älven _____ på dess rika natur- och kulturresurser, och det ekonomiska värdet understryker ytterligare älvens dignitet.",
     "options": [
      "i realiteten – grundades",
      "rent teoretiskt – syftade",
      "i genomsnitt – inverkade",
      "överraskande – fattades"
     ],
     "correct": 0
    },
    {
     "num": 30,
     "text": "Att det handlar om ett verkligt orsakssamband mellan genomförda besparingar och försämrad ekonomisk utveckling i dessa länder bekräftas när man jämför de prognoser som gjordes för några år sedan med _____.",
     "options": [
      "den statliga garantin",
      "tidigare orsaker",
      "det verkliga utfallet",
      "bankernas låneräntor"
     ],
     "correct": 2
    }
   ]
  }
 ]
};
