// Högskoleprovet 12 mars 2022, provpass 4 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "vt2022mars-4",
 "tillfalle": "vt2022mars",
 "passNr": 4,
 "kind": "verbal",
 "name": "Provpass 4 (verbalt)",
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
   25,
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
   64,
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
     "word": "vital",
     "text": "<b>vital</b>",
     "options": [
      "livskraftig",
      "hoppfull",
      "ombytlig",
      "fullvuxen",
      "uppmärksam"
     ],
     "correct": 0
    },
    {
     "num": 2,
     "word": "späck",
     "text": "<b>späck</b>",
     "options": [
      "vagn",
      "lukt",
      "hatt",
      "kruka",
      "fett"
     ],
     "correct": 4
    },
    {
     "num": 3,
     "word": "alternera",
     "text": "<b>alternera</b>",
     "options": [
      "bygga om",
      "ersätta",
      "förnya sig",
      "erbjuda",
      "turas om"
     ],
     "correct": 4
    },
    {
     "num": 4,
     "word": "falang",
     "text": "<b>falang</b>",
     "options": [
      "regelverk",
      "gruppering",
      "musikstycke",
      "utbyggnad",
      "klädesplagg"
     ],
     "correct": 1
    },
    {
     "num": 5,
     "word": "modstulet",
     "text": "<b>modstulet</b>",
     "options": [
      "envist",
      "sorglöst",
      "uppgivet",
      "bortglömt",
      "oförskräckt"
     ],
     "correct": 2
    },
    {
     "num": 6,
     "word": "prolog",
     "text": "<b>prolog</b>",
     "options": [
      "inledning",
      "beskrivning",
      "sammanfattning",
      "tillbakablick",
      "slutord"
     ],
     "correct": 0
    },
    {
     "num": 7,
     "word": "emanciperad",
     "text": "<b>emanciperad</b>",
     "options": [
      "frigjord",
      "nyfiken",
      "påhittig",
      "begåvad",
      "sällskaplig"
     ],
     "correct": 0
    },
    {
     "num": 8,
     "word": "spjuver",
     "text": "<b>spjuver</b>",
     "options": [
      "spejare",
      "luffare",
      "jägare",
      "skämtare",
      "lögnare"
     ],
     "correct": 3
    },
    {
     "num": 9,
     "word": "freda sig",
     "text": "<b>freda sig</b>",
     "options": [
      "ge sig",
      "isolera sig",
      "behärska sig",
      "vila upp sig",
      "skydda sig"
     ],
     "correct": 4
    },
    {
     "num": 10,
     "word": "bestörtning",
     "text": "<b>bestörtning</b>",
     "options": [
      "aggression",
      "livsfarlig manöver",
      "förskräckelse",
      "plötslig förändring",
      "missnöje"
     ],
     "correct": 2
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
     "title": "Vård vid hjärnskador",
     "html": "<p>Varje år vårdas 20 000 personer för traumatiska hjärnskador, efter exempelvis trafikolyckor och fall. Det är den vanligaste orsaken till dödsfall och funktionsnedsättning bland unga människor, och en stor andel har behov av livslång rehabilitering.</p>\n<p>Socialstyrelsens kartläggning av regionernas hjärnskaderehabilitering visade att resurserna generellt är uppseendeväckande knappa och ojämnt fördelade över landet. Samtidigt visar den på brister när det gäller att redovisa såväl en entydig organisation som en klar bild av vart man ska vända sig. Hjärnskadeförbundet Hjärnkraft och Personskadeförbundet RTP har undersökt hur personer med skada själva upplever omhändertagandet och hur de skattar sin hälsorelaterade livskvalitet. Den kartläggningen visar på omfattande problem, som är väl förenliga med Socialstyrelsens bild av resursbristen.</p>\n<p>Personer med traumatisk hjärnskada behöver livslång rehabilitering anpassad till deras kognitiva skador. Kartläggningarna pekar på behovet av nationella riktlinjer. Vi anser att man bör utreda möjligheten att knyta pengar till individen, så att medel avsätts från centralt håll till rehabiliteringsinsatser som täcker behovet av kontinuitet i vårdkedjan.</p>\n<p>Många vittnar om att det efter det akuta omhändertagandet saknas en sammanhållen vårdkedja och uppföljning. Det handlar inte bara om att tillföra mer pengar utan om att använda resurser på ett effektivt sätt, så att patienten inte skickas runt och belastar vården på fel ställen. Den patientnära kliniska forskningen behöver stärkas med riktade satsningar för att se vilka insatser som har bäst effekt.</p>\n<p>Det är nödvändigt med en nationell översyn av strukturen för att garantera tillgång till adekvat kompetens oavsett boendeort. Bygg en pyramid, med kunskapscentrum för svåra hjärnskador i toppen. Dessa knyts till universitetssjukhusen i varje region och utgör konsulter för nästa nivå, länssjukhusen, som i sin tur är konsulter för basnivån, alltså primärvård och kommunal rehabilitering.</p>\n<p>Kartläggningarna visar att rehabiliteringen inte samlats och därmed inte heller erbjuds som en specialiserad verksamhet med anpassad miljö för hjärnskaderehabilitering. Regionerna kan inte redogöra för hur många platser som finns i slutenvårdsrehabiliteringen. Många hänvisas till primärvården, där det saknas flera olika personalresurser med rätt kompetens.</p>\n<p>Brukarenkäten visar att personer med hjärnskador har låg hälsorelaterad livskvalitet jämfört med befolkningen i övrigt. Det borde enligt de prioriteringsdirektiv som finns inom hälso- och sjukvård innebära att de ska få den rehabilitering de behöver. Över 50 procent saknar arbete/sysselsättning, trots Arbetsförmedlingens förstärkta resurser och rätten till daglig verksamhet för denna grupp enligt LSS, lagen om stöd och service till vissa funktionshindrade.</p>\n<p>Det är svårt att värdera hur mycket systembristerna egentligen kostar den enskilde och samhället i stort. Men det är onekligen så att den ångest och oro som personer med hjärnskador känner förstärks av bristerna i rehabiliteringen. De tillfrågade berättade om depressioner, förtvivlan och utanförskap.</p>\n<p>Kostnaderna för att inte få diagnos i tid, och därmed inte tillräcklig rehabilitering och nödvändiga hjälpmedel, är troligen både omfattande och onödiga.</p>\n<p>Det mänskliga lidandet och försämringen av livskvaliteten blir därmed också betydande.</p>\n<p class=\"forf\">Meta Wiborgh, Pelle Kölhed &amp; Lena Haglund</p>"
    },
    {
     "title": "Snacka om slöjd",
     "html": "<p>– Slöjden är det enda skolämne där du använder alla sinnen samtidigt, och det är väl själva poängen med att vara människa?</p>\n<p>Slöjdläraren Marcus Vildir i Tyresö har just ställts inför frågan varför skolslöjden förtjänar att vara obligatorisk. I dagsläget är den det i de nordiska länderna, men på få andra håll i världen. Och när Skolverket för tre år sedan publicerade en stor utvärdering av ämnet, kritiserades slöjdlärarkåren för att inte ha något entydigt svar på frågan. ”Anmärkningsvärt”, menade rapportförfattarna.</p>\n<p>– Slöjden har allt, samtidigt, säger han lugnt. I slöjdsalen utmanas finmotorik, grovmotorik, känsel, syn och hörsel. Smaken också, om det vill sig illa.</p>\n<p>Men utöver handlag och utvidgade sinnen handlar det också om annat.</p>\n<p>– Här engageras tanken, fantasin och kreativiteten. Dessutom får eleverna uppleva vad de kan, känna att de kan lära sig nytt och veta att de hela tiden har nytta av sina erfarenheter. De får äga en process och får syn på sina kunskaper.</p>\n<p>Han beskriver helt enkelt en skolslöjd som på djupet lever upp till skollagens fjärde paragraf. I den står att skolan ska ”främja barns och elevers allsidiga personliga utveckling till aktiva, kreativa, kompetenta och ansvarskännande individer och medborgare”.</p>\n<p>Ändå hamnar skolslöjden idag återkommande i skottlinjen. Under senare år har både stora ledarsidor och somliga politiker på bästa opinionsbildande plats beskrivit den som utbytbar och gammaldags. ”Stenålders”, till och med.</p>\n<p>Forskaren Åsa Jeansson vid Umeå universitet ler lite. Efter att ha följt kritiken mot skolslöjden på nära håll misstänker hon att debattörerna inte besökt någon slöjdlektion på länge, utan egentligen ger sig på det som de tror är slöjden. Skolämnet har förändrats mycket på senare år, säger hon.</p>\n<p>År 2011 infördes en ny läroplan i grundskolan, Lgr11. Förra året disputerade Åsa Jeansson på hur läroplanens kursplan i skolslöjd påverkar det som händer på lektionerna. En hel del, visade det sig. Hon beskriver skillnaderna från tidigare styrdokument som en förskjutning från görande till lärande. Det kan låta som hårklyverier. Men med nytt fokus följer nytt innehåll. I det här fallet inte minst: längtan efter ord.</p>\n<p>Betygskriterierna är ganska talande. Till exempel ska en sjätteklassare som vill få högsta betyg ”på ett välutvecklat vis” formge och framställa enkla slöjdföremål i olika material. Hen ska kunna följa instruktioner och använda handverktyg, redskap och maskiner på ett säkert och vettigt sätt samt ha jobbat med olika hantverkstekniker. Men eleven ska dessutom – och det här är det nya – kunna ge välutvecklade motiveringar till sina val, formulera vägval under arbetet och ge välutvecklade omdömen om sin arbetsinsats.</p>\n<p>Det behöver i och för sig inte nödvändigtvis betyda att en elev med knapphändigt språk – eller kanske bristfällig svenska – inte kan få högsta betyg. Inför sitt avhandlingsarbete intervjuade Åsa Jeansson sjutton textilslöjdslärare. Flera av dem beskrev hur de lägger extra krut på ordknappa elever, hur de liksom lirkar fram ett samtal för att ge dem chans att leva upp till skolämnets mål.</p>\n<p>Dessutom kan slöjdlärarens hantverkskunskap spela roll, påpekar Åsa Jeansson. För även ett föremål i sig kan berätta om avvägningar, vägval, verktyg, material och teknik – för den som har förmåga att se det.</p>\n<p>Samtidigt är hantverkskunskap inte en självklarhet hos dagens slöjdlärare. Också det måste betraktas som en nyhet i skolslöjdens värld. Sedan något decennium tillbaka behöver den som söker in på lärarutbildningen inte längre ha några slöjdspecifika förkunskaper, och väl på plats på högskolan är hantverksstudierna rätt så begränsade.</p>\n<p>Åsa Jeansson talar också om ”mätbar kunskap”. En utveckling mot att koka ner kunskap i siffror och mätbara enheter präglar dagens skola, menar hon, slöjdämnet inkluderat. I sin forskning har hon sett att mätbarhetsivern då och då påverkar vilka tekniker som lärare väljer att undervisa i, trots att teknikurvalet egentligen står slöjdläraren fritt. En del av de lärare som Åsa Jeansson intervjuat lär varken ut stickning eller vävning längre, det vill säga de tekniker som är ursprung till det allra mesta som mänskligheten går klädd i. Skälet, säger Åsa Jeansson, är att eleverna sällan hinner bli så skickliga med stickor och maskor, bommar och inslag att de når fram till de i kursplanen och betygskriterierna efterfrågade momenten av reflektion.</p>\n<p>Utvecklingen mot en ordrikare skolslöjd är en vattendelare inom kåren. Slöjdläraren Elisabet Jagell i Uppsala hör till dem som ser utvecklingen som något i huvudsak bra.</p>\n<p>– Om vi ska kunna kommunicera i klassrummet behöver vi utveckla vårt språk för det. Och vi lär oss oerhört mycket genom språket. Det var först när jag var tvungen att sätta ord på vad jag gjorde som jag verkligen förstod allt jag kunde, säger hon.</p>\n<p>Men mycket av det som efterfrågas i betygskriterierna kan också fångas genom foto eller film, påpekar Elisabet Jagell. En elev kan ta bilder under hela arbetets gång och på så sätt upptäcka val, misstag och utveckling.</p>\n<p>– Min uppgift som lärare är att hjälpa eleven att få syn på sin process, inte att slaviskt få dem att skriva loggbok. Man kan till exempel låta eleverna intervjua varandra om vad de gjort och gör. Direktiven får inte bli en boja.</p>\n<p>Att ämnet skulle vara omodernt håller Elisabet Jagell inte med om. Det är ju precis tvärtom, säger hon. Aldrig har det varit viktigare att få nycklar till hur man kan reparera saker eller återanvända material. Också kunskap om kvaliteter och hantverk är avgörande i en hållbar värld. Liksom människor som är tränade i att lösa problem. Det stora hotet mot skolämnet är istället lärarbristen, menar hon. Den är akut redan nu, men värre kommer det att bli. Stora pensionsavgångar väntas framöver, utan att lika många nyutexaminerade lärare lämnar utbildningarna.</p>\n<p>– Vi måste få fler behöriga lärare. Annars ser det illa ut. Till slut håller det inte längre.</p>\n<p>Marcus Vildir i Tyresö känner sig kluven till kursplanens efterfrågan på välformulerade elever.</p>\n<p>– Ibland kan elever som vill ha höga betyg rikta in sig på att lägga orden rätt istället för att utveckla sitt hantverk. Ofta är det elever som redan har det lätt för sig i många andra ämnen, och då får de en fördel till. Det har jag lite problem med. Slöjd kan ju dessutom vara ett annat sätt att berätta, beskriva och gestalta. Bortom orden.</p>\n<p>Men också han tycker att det ligger i lärarens roll att lotsa eleverna så att de får syn på sina avvägningar och processer.</p>\n<p>– Jag har elever som, istället för att skriva, fått spela in sin röst på telefon eller helt enkelt redovisa muntligt inför mig. Det är ofta de där mikroredovisningarna som är allra viktigast. Men sådana stunder är svåra att få tid till. Jag har min slöjdlektion att tillgå och jag har upp till arton elever per klass.</p>\n<p>Och totalt har han trehundra elever. Samtidigt tycker han att man, innan man dömer ut formuleringsivern i slöjdsalen, måste fundera över vad syftet med skolämnet ska vara. – Vår uppgift är ju faktiskt inte att fostra hantverkare, utan handlande och tänkande människor. Då måste kanske hantverket stå tillbaka lite grand.</p>\n<p class=\"forf\">Malin Vessby</p>"
    },
    {
     "title": "Den tredje revolutionen",
     "html": "<p>Möjligtvis med undantag för Tyskland har mönstret varit liknande i de flesta utvecklade ekonomier i väst och norr under de senaste decennierna: en successiv avindustrialisering har ägt rum, med en sjunkande andel sysselsatta inom denna sektor. I stället har vi bevittnat en industriell revolution i synnerhet i Sydostasien och Kina. Men industrin har även varit på frammarsch i Latinamerika och i delar av Afrika. Håller detta mönster nu på att brytas? I Kina minskar den högt uppskruvade tillväxten; den exportledda industriella spurt som radikalt förändrat livsbetingelserna för hundratals miljoner kineser börjar mattas av. Samtidigt talas det i väst allmänt om en återindustrialisering – <i>Svenska Dagbladet</i> ägnade i somras fenomenet en hel artikelserie. Men hur realistiskt är ett sådant scenario?</p>\n<p>Det är mycket realistiskt, om man får tro Chris Anderson, en entusiastisk amerikansk företrädare för den nya ”makerrörelsen” som börjat växa fram i synnerhet i USA. Han visar i sin bok <i>Makers – Den nya industriella revolutionen</i> hur en rörelse av uppfinnarjockar, mekanopojkar och hantverksnördar har börjat uppstå. Det som förenar dem är utnyttjandet av den digitala teknikens och informationsteknologins möjligheter. Genom att använda sig av internet går det att finna såväl nya idéer och djärva applikationer som likasinnade runt jordklotet. Upphovsrättigheter och patent blir av allt mindre betydelse genom detta flöde.</p>\n<p>Utvecklingen av 3D-skrivare gör det möjligt att framställa prototyper, ja även färdiga produkter som kan sättas samman av kunden. Lyckas man hitta många sådana kan man låta prototypen gå vidare till en fabrik som med hjälp av de nya digitala teknikerna kan tillverka på beställning i större skala. Liksom när det gäller böcker kan man tillverka ”on demand”. Man kan till och med samla ett nödvändigt kapital från de potentiella beställarna genom förskottsinbetalningar eller insamlingar. De stora företagen med sina komplicerade distributionskedjor är på väg ut. Leve i stället den kluriga teknologinörden som fritt kopierar från nätet och utvecklar sina egna idéer! Med 3D-skrivare, CAD-teknologi och automatiserad tillverkning i fabrikerna kostar det i princip lika mycket per enhet att tillverka ett hundra som ett hundra tusen produkter av samma slag. Storföretagens skalfördelar gäller inte längre.</p>\n<p>Låter detta utopiskt? Inte nödvändigtvis. Anderson börjar med att sätta in makerrörelsen i ett större sammanhang. Många ekonomer och historiker har skildrat utvecklingen från en första industriell revolution under 1800-talet, till en andra i och med massproduktionens uppkomst runt förra sekelskiftet och vidare till en tredje industriell revolution från och med 1980-talet. Persondatorns ihopkoppling med internet var en förutsättning för denna revolution, som på allvar har fått fart först när informationsteknologin trängt in i produktionens värld. Det är nu det börjar hända saker.</p>\n<p>Anderson menar att frågan står och väger. Skall makerrörelsen våga ta språnget från en ”självförsörjningsmodell” där tekniknördarna lever i sina egna lyckliga skaparvärldar till en ”kommersiell nätmodell” där de blir entreprenörer och bildar företag? Att tillverka på beställning i medelstor skala utifrån internets förutsättningar tror han blir det vinnande konceptet som skall återindustrialisera väst. Inte bara det faktum att konsumenter blir allt kräsnare och skyr masskonsumtionen talar för detta, menar Anderson. Även stigande osäkerhet kring de globala distributionskedjornas förmåga att leverera ”just in time”, liksom stigande arbetskraftskostnader till exempel i Kina, leder till samma slutsats.</p>\n<p>Det är lätt att hänföras av hans ohejdade optimism. Och visst kan det ligga mycket i vad han säger om de nya digitala teknikernas möjlighet. Dessa gör det onekligen möjligt att i princip få till stånd ett arrangemang som förespråkats av socialister sedan 1800-talet: att arbetarna borde städsla kapitalet i stället för tvärtom. Med ens skulle behovet av kapitalisten försvinna och mer av produktionens frukter skulle tillfalla innovatören och arbetaren. Men det är förmodligen att underskatta kapitalismens förmåga till överlevnad. Kommer inte även fortsättningsvis smarta affärsmän att kunna skaffa sig fördelar på uppfinnarnas bekostnad? Är det ändå inte så att även den tredje industriella revolutionen premierar sådana som kan vara steget före alla andra och som utnyttjar storskalighet för att nå ut och konkurrera ihjäl de mindre lyckosamma?</p>\n<p>Sedan måste man också fråga sig vilken global ekonomi som byggs om Andersons vision om återindustrialisering i väst blir en realitet. Kommer det då att påverka relationerna mellan syd och nord? I så fall inte nödvändigtvis till fördel för syd. Även i fortsättningen kommer nord att stå för innovationerna, prototyperna och de nischade marknaderna. De stora fabrikerna som skall jobba på beställning kommer att ligga i Kina, Kambodja eller Afrika.</p>\n<p>Frågan är hur stor skillnaden blir mot förr. Redan i dag finns ett företag med över en miljon arbetare i Kina, Foxconn, som arbetar på beställning från Apple i USA. De tillverkar de delar och produkter som Apple behöver. Med Andersons modell kommer denna typ av arrangemang att utökas till att gälla allt fler företag i USA och Västeuropa. Visst kommer en del av tekniknördarnas nya produkter att tillverkas i garage och små anläggningar med hjälp av nya automatiska printrar och maskiner. Men när det gäller de stora fabrikerna i syd kommer även fortsättningsvis jakten på lägre kostnader att vara en realitet. Frågan är i så fall hur stor revolutionen är.</p>\n<p class=\"forf\">Lars Magnusson</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vilket svarsförslag överensstämmer bäst med den bild som texten ger av hur de två refererade kartläggningarna förhåller sig till varandra?",
     "options": [
      "Gemensamma utgångspunkter men skiftande svar.",
      "Likartade metoder men olika målsättningar.",
      "Skilda syften men samma frågeställningar.",
      "Olika perspektiv men samstämmiga resultat."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vad är svensk hjärnskaderehabilitering framför allt i behov av, enligt texten?",
     "options": [
      "Kompetens och kunnande.",
      "Finansiering och hjälpmedel.",
      "Struktur och samordning.",
      "Flexibilitet och nytänkande."
     ],
     "correct": 2,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Hur har skolämnet slöjd förändrats, av texten att döma?",
     "options": [
      "Allt mer vikt läggs vid kunskaper som inte går att mäta.",
      "Allt mer vikt läggs vid lärarens hantverkskunskap.",
      "Allt mer vikt läggs vid moderna hantverkstekniker.",
      "Allt mer vikt läggs vid färdigheter som redan bedöms i andra ämnen."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vad vill Elisabet Jagell säga med det resonemang som hon avslutar med orden ”Direktiven får inte bli en boja”?",
     "options": [
      "Att om lärarna är kreativa finns många möjligheter med läroplanen Lgr11.",
      "Att läroplanen Lgr11 kan få slöjd att handla mer om ord än om hantverk.",
      "Att om läroplanen Lgr11 ska fungera måste slöjdlärarna ha relativt små klasser.",
      "Att läroplanen Lgr11 har fått henne att upptäcka nya saker om sig själv som lärare."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vad tycks vara ett mål med betygskriterierna för skolslöjd, utifrån hur texten beskriver dem?",
     "options": [
      "Att eleverna i högre grad ska se slöjden som ett teoretiskt ämne.",
      "Att eleverna ska få lära sig fler sätt att dokumentera sina skolarbeten.",
      "Att eleverna ska utveckla ett bredare hantverkskunnande.",
      "Att eleverna ska bli mer medvetna om vad de gör."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "I texten används skollagens fjärde paragraf som stöd för en av följande åsikter. Vilken?",
     "options": [
      "Att den framtida lärarbristen är ett hot mot skolslöjden.",
      "Att slöjdlärarnas hantverkskunskap blir allt sämre.",
      "Att skolslöjden uppfyller syftet med dagens skola.",
      "Att språkligt svaga elever riskerar att missgynnas i skolslöjden."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Vilket av följande ifrågasätter textförfattaren vad gäller den framtidsvision som Chris Anderson beskriver?",
     "options": [
      "Huruvida den tar tillräcklig hänsyn till den tekniska förändringstakten.",
      "Huruvida den ser realistiskt på ”tekniknördarnas” ambitioner och räckvidd.",
      "Huruvida den kan få någon större effekt på den ekonomiska världsordningen.",
      "Huruvida den kommer att välkomnas av så många andra än industrinationerna."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Vilket av följande talar enligt texten emot den traditionella, stordriftsinriktade industritillverkningen?",
     "options": [
      "Det ständiga trycket att uppnå större lönsamhet.",
      "Konsumenternas förändrade attityder och krav.",
      "Råvarukostnadernas stora inverkan på prisnivån.",
      "Det växande behovet av resurskrävande teknik."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Vilken av följande fördelar med den nya tillverkningsprocessen lyfter texten framför allt fram?",
     "options": [
      "Att konsumenterna får större inflytande över tillverkningsmetoderna.",
      "Att produktutveckling och framställning kan bedrivas utan lönsamhetskrav.",
      "Att en och samma person kan vara både uppfinnare, tillverkare och användare.",
      "Att kostnaderna kan hållas nere också när tillverkningen sker i liten skala."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Vilket av följande rubrikförslag fångar bäst innehållet i Andersons bok, som den beskrivs i texten?",
     "options": [
      "Hantverkets återkomst",
      "Innovatören blir entreprenör",
      "Kapitalismens anpassningsförmåga",
      "Från innovatör till arbetare"
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
     "text": "Under första världskriget kom många fiskarter som tidigare hade _____ till användning som livsmedel.",
     "options": [
      "odlats",
      "uppskattats",
      "ratats",
      "importerats"
     ],
     "correct": 2
    },
    {
     "num": 22,
     "text": "Makt riskerar att korrumpera även den mest _____ individ, och inte heller kollektiv är _____ mot yttre, otillåten påverkan.",
     "options": [
      "känsliga – avgränsade",
      "inskränkta – stabila",
      "upplysta – immuna",
      "vaksamma – sårbara"
     ],
     "correct": 2
    },
    {
     "num": 23,
     "text": "Restaurangprofilen Tore Wretman var _____ i sina välsittande kostymer och sitt blondlockiga, bakåtkammade hår. Han hade en avväpnande _____, och trots att han var påfallande _____ uppfattades han inte som snobbig.",
     "options": [
      "stilig – charm – världsvan",
      "stilistisk – attityd – värdig",
      "stilbildande – mimik – världslig",
      "stilenlig – humor – värdefull"
     ],
     "correct": 0
    },
    {
     "num": 24,
     "text": "Lika länge som lagar och regler existerat har man på olika sätt kunnat kringgå dem. Som en följd av alltför sträng lagstiftning utvecklades till exempel möjligheten att få kunglig _____ i olika frågor.",
     "options": [
      "kurtis",
      "vakans",
      "eloge",
      "dispens"
     ],
     "correct": 3
    },
    {
     "num": 25,
     "text": "En återkommande fråga i debatten om de nya artskyddsreglerna i skogsvårdslagen är huruvida de arter som prioriteras verkligen är de som är _____ naturvårdsinsatser. Många arter bedöms exempelvis vara _____ ur ett europeiskt perspektiv, trots att de är livskraftiga och vanligt förekommande i Sverige.",
     "options": [
      "beroende av – begärliga",
      "föremål för – riskabla",
      "i störst behov av – skyddsvärda",
      "till mest nytta för – försumliga"
     ],
     "correct": 2
    },
    {
     "num": 26,
     "text": "Författarna till studien konstaterar att det finns mängder av forskning kring olika kostmetoders effektivitet när det gäller viktnedgång, men däremot ganska svag _____ i frågan om hur effektivt motion är för viktnedgång.",
     "options": [
      "evidens",
      "frekvens",
      "preferens",
      "konvergens"
     ],
     "correct": 0
    },
    {
     "num": 27,
     "text": "Håkan Nesser har en _____ blandning av integritet och distans till sin person och sitt yrke. Han _____ mot alla klichéer om författarrollen och, framför allt, om deckargenren.",
     "options": [
      "förställd – slår bakut",
      "diskret – tar parti",
      "säregen – värjer sig",
      "märklig – tar avstamp"
     ],
     "correct": 2
    },
    {
     "num": 28,
     "text": "I de nationella proven ska eleven läsa litterära texter, för att sedan _____ om dem i skrift. _____ som att skriva och analysera _____ framför kunskaper om exempelvis litteraturhistoria.",
     "options": [
      "reflektera – Egenskaper – åberopas",
      "rapportera – Lärdomar – värderas",
      "resonera – Färdigheter – premieras",
      "redogöra – Metoder – föredras"
     ],
     "correct": 2
    },
    {
     "num": 29,
     "text": "1800-talets romantiska epok har länge uppfattats som en _____ strömning, mer dominerad av filosofisk idealism än av reella samhällsfrågor. De senaste årens forskning har emellertid kunnat visa på mycket täta band mellan den tidens ekonomiska, politiska och estetiska _____.",
     "options": [
      "världsfrånvänd – diskurser",
      "poetisk – differenser",
      "radikal – dimensioner",
      "humanistisk – dispyter"
     ],
     "correct": 0
    },
    {
     "num": 30,
     "text": "Energiförbrukningen hos en organism är som lägst när organismen befinner sig i vila under _____ där värmeavgivningen till omvärlden är minimal.",
     "options": [
      "ingivelser",
      "betingelser",
      "tillfälligheter",
      "förevändningar"
     ],
     "correct": 1
    }
   ]
  }
 ]
};
