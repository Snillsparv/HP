// Högskoleprovet 6 april 2019, provpass 4 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "vt2019-4",
 "tillfalle": "vt2019",
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
   23,
   0.1
  ],
  [
   25,
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
   46,
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
   59,
   1.3
  ],
  [
   61,
   1.4
  ],
  [
   64,
   1.5
  ],
  [
   67,
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
     "word": "plagiat",
     "text": "<b>plagiat</b>",
     "options": [
      "draghjälp",
      "förändring",
      "missbruk",
      "efterapning",
      "tillägg"
     ],
     "correct": 3
    },
    {
     "num": 2,
     "word": "sparsmakad",
     "text": "<b>sparsmakad</b>",
     "options": [
      "vanlig",
      "okritisk",
      "inåtvänd",
      "omogen",
      "kräsen"
     ],
     "correct": 4
    },
    {
     "num": 3,
     "word": "mota",
     "text": "<b>mota</b>",
     "options": [
      "avstå",
      "bråka",
      "förbjuda",
      "stoppa",
      "välkomna"
     ],
     "correct": 3
    },
    {
     "num": 4,
     "word": "solidaritet",
     "text": "<b>solidaritet</b>",
     "options": [
      "starkt ledarskap",
      "aktivt motstånd",
      "uppskattad insats",
      "självvald isolering",
      "känsla av samhörighet"
     ],
     "correct": 4
    },
    {
     "num": 5,
     "word": "med råge",
     "text": "<b>med råge</b>",
     "options": [
      "framför allt",
      "i stort sett",
      "med eftertryck",
      "på rätt sätt",
      "väl tilltaget"
     ],
     "correct": 4
    },
    {
     "num": 6,
     "word": "elementa",
     "text": "<b>elementa</b>",
     "options": [
      "dammpartiklar",
      "grundkunskaper",
      "vågrörelser",
      "förenklingar",
      "väderfenomen"
     ],
     "correct": 1
    },
    {
     "num": 7,
     "word": "regenerera",
     "text": "<b>regenerera</b>",
     "options": [
      "återfinna",
      "återbilda",
      "återhämta",
      "återkalla",
      "återberätta"
     ],
     "correct": 1
    },
    {
     "num": 8,
     "word": "kognition",
     "text": "<b>kognition</b>",
     "options": [
      "motoriska egenskaper",
      "formuleringskonst",
      "känslomässiga uttryck",
      "överlevnadsinstinkt",
      "intellektuella funktioner"
     ],
     "correct": 4
    },
    {
     "num": 9,
     "word": "oförvanskad",
     "text": "<b>oförvanskad</b>",
     "options": [
      "oförbätterlig",
      "uppenbar",
      "ofördärvad",
      "innehållslös",
      "otvetydig"
     ],
     "correct": 2
    },
    {
     "num": 10,
     "word": "resning",
     "text": "<b>resning</b>",
     "options": [
      "diskussion",
      "varning",
      "omprövning",
      "domslut",
      "ställningstagande"
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
     "title": "PBL under förändring",
     "html": "<p>Det händer en hel del nu. I bostadsbristens spår är debatten om samhällsplaneringen brännhet. Alla verkar överens om att planering och byggande är krångligt och går långsamt. Nyligen kritiserades regeringen av Sveriges Arkitekter som menar att dagens byggpolitik dessutom gör Sverige fulare. De har granskat det tjugotal utredningar som regeringen initierat under de senaste åren och funnit att ordet arkitektur inte nämns en enda gång. Jag misstänker att ordet kultur inte heller nämns särskilt ofta, och frågan är: Hur klarar sig kulturhistoriska värden i dagens debattklimat?</p>\n<p>I början av maj kom skrällen. Då fick bostadsministern utredningen <i>En enklare plan- och bygglovsprocess</i>. I utredningen föreslås stora förändringar av den bara två år gamla, nya (!) plan- och bygglagen (PBL). Det räckte med valda delar av de 461 sidorna för att inse att här frustar effektiviteten och här räds vi inte de stora tagen.</p>\n<p>I korthet går det ut på att införa ett nytt planinstrument – områdesplan – i nivån mellan översiktsplan och detaljplan. Områdesplanen ska vara ett förtydligande av översiktsplanen, och när det finns områdesplan ska ett byggprojekt bara prövas med antingen detaljplan eller bygglov, aldrig både och. Eftersom detaljplaner idag oftast tas fram för ett visst projekt är de så detaljerade att det är onödigt med de efterföljande bygglovsprövningar som görs. Omvänt gäller att enklare projekt skulle kunna ges bygglov utan att föregås av detaljplan. Med områdesplaner finns möjligheter till ökat medborgarinflytande eftersom de, till skillnad från detaljplanerna, inte är knutna till särskilda projekt.</p>\n<p>Kan då kulturvärdena klara detta klimat? Javisst! Vi som arbetar med frågorna har kanske de starkaste motiven till förändringar i plan- och bygglagen, och vi har också bra lösningar. Är det något som varit ineffektivt så är det tillvaratagandet av bebyggelsens kulturvärden, trots PBL:s paragrafer och fina lydelser. Det vi måste förespråka i remissvaret är att områdesplanerna används för att enklare och snabbare än med nuvarande detaljplaneförfarande ge tydliga signaler om var det finns kulturvärden. Erfarenheterna från kommuner med sådana signalsystem talar sitt tydliga språk. Vi vet att fastighetsägare och planerare önskar denna förutsägbarhet. Vi vet att medborgarna vill vara delaktiga i vad som bevaras och utvecklas. Delaktigheten i den diskussionen ökar med områdesplanerna. I enlighet med utredningens förslag bör bevarandefrågorna behandlas i ett tidigare skede än då ett byggprojekt initieras. Enkla kulturmiljöanalyser kan vara tillräckliga, det handlar i detta skede bara om att signalera att det finns ett kulturvärde. Detaljfrågorna behöver bara fördjupas om och när ett byggprojekt ger upphov till prövning i detaljplan eller bygglov.</p>\n<p>Även för detta skede har vi ett utmärkt instrument: den antikvariska förundersökningen. Denna brukar vara en riktig ögonöppnare för samtliga inblandade vad gäller byggnadens egenskaper och kvaliteter. Den är billig i förhållande till övriga kostnader och ofta mycket användbar i den fortsatta projekteringen. En antikvarisk förundersökning bör därför krävas i inledningen av en detaljplane- eller bygglovsprocess i de fall där områdesplanen visat att det finns kulturvärden att ta hänsyn till.</p>\n<p class=\"forf\">Paul Hansson</p>"
    },
    {
     "title": "Almsjuka",
     "html": "<p>Almsjukan började uppträda i nordvästra Europa på 1910-talet. Almsjukan, orsakad av svampen <i>Ophiostoma ulmi,</i> spreds till Storbritannien där den snabba sjukdomsutvecklingen nådde sin kulmen redan 1930, då 10–40 procent av almarna i nordvästra Europa och Storbritannien hade dött. Angreppen avtog hastigt, och omkring 1950 hade de så liten omfattning att sjukdomen inte längre ansågs vara ett hot mot almarna i Europa. Almsjukan spreds också till Nordamerika. Senare utbröt en epidemi i USA, orsakad av en ny och mycket mer aggressiv form av almsjukesvampen. Den nya varianten spreds till Europa i slutet av 1960-talet. Efter det att man blåst faran över återkom således almsjukan i en mer aggressiv form, och mellan 1970 och 1990 dog mer än 25 miljoner av Storbritanniens uppskattningsvis 30 miljoner almar.</p>\n<p>Till Sverige kom den första vågen av almsjuka inte förrän omkring 1950. Den mer aggressiva almsjukan kom 1980, då Örups almskog i Tomelilla kommun drabbades svårt. Därefter har den aggressiva almsjukan spritt sig norrut och den finns nu i almens hela utbredningsområde i Sverige. På Gotland upptäcktes almsjukan så sent som 2005 och där angrips framför allt lundalmen, som är vanlig i de gotländska ängena. Almsjukan spreds till Sveriges fastland och till Gotland med almstockar eller almved som var angripna av almsjukesvampen. Det finns dock områden där almbestånd växer avståndsmässigt isolerade från andra almar och där det fortfarande inte är några angrepp. Någon uppskattning av skadornas omfattning finns för närvarande inte.</p>\n<p>Ännu känner vi inte till den första almsjukesvampens ursprung. Almarterna i Asien är resistenta mot almsjukesvamp och det kan betyda att det är därifrån den ursprungligen kommer. Men trots en hel del letande i Asien har man inte funnit svampen. I Europa pågår nu omfattande hybridisering mellan de olika almsjukesvamparterna. Detta leder troligen till ökad aggressivitet.</p>\n<p>Almsjukesvampen kan inte ta sig in i trädens ledningsbanor, kärlen, på egen hand utan får hjälp av almsplintborrar (skalbaggar i familjen vivlar). Mindre almsplintborre, <i>Scolytus laevis,</i> är den vanligaste arten och därefter kommer större almsplintborre, <i>Scolytus triarmatus</i>. Tandad almsplintborre, <i>Scolytus multistriatus</i>, finns i Skåne, på Öland och i någon mån i Mälardalen, och den är den enda almsplintborren på Gotland. <i>Scolytus scolytus,</i> vanlig på europeiska kontinenten, förekommer än så länge endast i Skåne och Halland men är på snabb spridning norrut.</p>\n<p>Almsplintborrarna lägger sina ägg i innerbarken i almar som håller på att dö eller som nyligen har dött, men där innerbarken ännu är frisk. Även almved som lagrats en tid kan fungera som yngelmaterial. Larverna övervintrar under barken, och på våren fullbildas skalbaggarna. Om trädet är nedsmittat med almsjuka kan svampsporer fastna på de nykläckta almsplintborrarna. De flyger till levande almar för att näringsgnaga i barken på grenar i almkronan och då överförs sporer till ledningsbanorna i almkvistar och grenar, som vissnar och får gula blad. Gula grenar här och där i kronan är det första tecknet på ett angrepp.</p>\n<p>Sporerna gror och bildar mycel som växer i almens kärlsträngar, och där bildas även stora mängder sporer som kan flyta med vätskeströmmar metervis per dygn. Den snabba spridningen sker i den yttersta årsringen. Svampen är en blånadssvamp och angrepp avslöjar sig som brunvioletta eller svarta stråk i vedens längsriktning. På tvärsnitt ser det ut som mörka eller svarta punkter eller en sammanhängande mörk rand i yttersta årsringen. Trädet försvarar sig bland annat genom att täppa till ledningsbanorna (tyllbildning) vilket förhindrar vätsketransporten. Genom att svampen lätt sprids i kärlen omfattas efter hand större grenpartier av angreppet och till sist hela kronan, och trädet kan dö redan samma säsong. Att almkronan inte drabbas regelbundet som vid torkstress är ett tydligt tecken på almsjuka.</p>\n<p>Träd med symptom bör avverkas så fort som möjligt. Almar som är boträd för almsplintborrar men som ännu inte visar symptom bör också avverkas. Att träden är boträd upptäcks under vintersäsongen då man kan se att fåglar letat insekter i barken. Åtgärder bör vidtas senast den 1 april. Därefter ökar risken för att det blir så varmt att almsplintborrarna kan flyga och sprida svampens sporer till nya träd. En effektiv saneringsavverkning kan kraftigt begränsa den årliga förlusten av almar till bara några procent.</p>\n<p>Utan bekämpningsåtgärder kan man förvänta sig en cirka 90-procentig förlust av almar i omgivningen inom de närmsta tio åren. Inom trettio år kan almbestånden inom stora områden vara reducerade till huvudsakligen buskar och unga träd.</p>\n<p>Rotkontakter med närstående träd är en annan spridningsväg, och för att hindra den spridningen ska avverkningen av det angripna trädet ske så fort som möjligt efter upptäckt. Dessutom är det lämpligt att skära av rötter som kan förmodas ha rotkontakt med närstående alm.</p>\n<p>Almved kan under ganska lång tid vara lämplig att yngla i. Det betyder att almved måste tas om hand och oskadliggöras senast i början av april. Observera att gammal död ved och träd som är helt barkfallna är ointressanta för almsplintborrar. Sådan ved bör därför alltid lämnas kvar till gagn för andra, harmlösa organismer.</p>\n<p>På grund av smittorisken ska särskild utrustning användas när man avverkar eller beskär träd som angripits. Rengör alla verktyg med starkt desinfektionsmedel eller genom upphettning med gaslåga.</p>\n<p>I Nederländerna, Tyskland, Schweiz och USA behandlas enstaka särskilt värdefulla almar med preparatet Dutch Trig <i>Verticillium</i> WCS850. Preparatet består av sporer från en <i>Verticillium</i>-svamp. Det är således fråga om biologisk bekämpning. Behandling leder till inducerad resistens, som varar i ett år. Metoden kan vara lämplig om vissa träd behöver skydd en kortare tid, till exempel för att almsjuketräd i närheten ska hinna tas bort.</p>\n<p class=\"forf\">Pia Barklund</p>"
    },
    {
     "title": "Det politiska äktenskapet",
     "html": "<p>De senaste 400 årens nordiska äktenskapshistoria innehåller såväl mökränkning och domkapitelförhör som kvinnlig myndighet, assisterad befruktning och haltande äktenskap. Förändringarna under denna långa period innefattar bland annat ett minskat inflytande för släkt, kyrka och i viss mån stat, men där finns även viktiga kontinuiteter varav regleringen av reproduktion är en av de främsta.</p>\n<p>De senaste åren har en rad böcker, avhandlingar och antologier publicerats som på olika sätt rör sig kring äktenskapets roll, historiskt såväl som i samtiden. Tidiga reformer av äktenskapslagen har utgjort fokus för en del av denna forskning, såväl som nyligen genomförda reformer, vilka spåras historiskt. Dessutom finns i ytterligare publikationer ett mer generellt intresse för hur vi kan förstå äktenskapets plats i en välfärdsstatlig utveckling och, kopplat till detta, även äktenskapets relation till familj i en bredare mening. Antologin <i>Det politiska äktenskapet. 400 års historia om familj och reproduktion</i> (red. Bente Rosenbeck &amp; Hanne Sanders) tillhör denna tredje kategori och tar ett brett grepp om äktenskapets plats i nordisk historia. Det är ett grepp som även innehåller ett ställningstagande. I tecknandet av de långa linjerna i äktenskapets historia gör antologideltagarna i <i>Det politiska äktenskapet</i> nämligen gemensam sak i att synliggöra de aspekter av äktenskapet som får det att handla om något <i>mer</i> än personliga relationer: en fråga om politik och makt. Genusperspektivet är starkt och genomgående, och kompletteras stundtals även med postkoloniala perspektiv och en blick för heterosexualiteten som norm.</p>\n<p>Det är förvisso ett omfattande grepp som tas om äktenskapshistorien, och en förpliktigande undertitel – 400 års historia om familj och reproduktion. Men läsningen av <i>Det politiska äktenskapet</i> uppfyller också många, om än inte riktigt alla, förväntningar. Mer om detta senare. Först något om antologins upplägg, för det är ovanligt genomtänkt. Kapitlen är sorterade under tre rubriker som är tematiska men också följer kronologiskt på varandra, och vi reser från 1600-talets Jämtland till samtida familjerättsliga krockar mellan en nordisk äktenskapsmodell och sharialagar. Antologin ramas vidare in av såväl en introduktion som en framåtblickande text på slutet, båda skrivna av Bente Rosenbeck, en av antologins redaktörer.</p>\n<p>Antologins första del är en historisk tillbakablick och problematiserar framförallt äktenskapets gränser genom att analysera förväntningar inför, och rätten att avsluta, ett äktenskap under 1600–1800-talet. I dessa bidrag framträder hushållsposition och ståndstillhörighet som avgörande för tolkningen av äktenskapets betydelse i dåtidens samhällen, och detta klassperspektiv, med dagens terminologi, kunde gärna lyfts fram mer tydligt som ett genomgående tema.</p>\n<p>I denna första del finns även flera olika tolkningar av kvinnans autonomi. Nina Koefoed betonar i sin analys av aktivitet/passivitet i konstruktioner av ogifta mäns och kvinnors sexualitet under 1700-talet kvinnans ofrihet vid ingående av äktenskap. Samtidigt finns i Hanne Sanders analys, som rör ungefär samma period, en helt annan betoning av kvinnors möjligheter att framföra sin önskan angående ett framtida äktenskap eller en skilsmässa, åtminstone i förhandlingar inför Lunds domkapitel. En dialog mellan dessa resultat hade berikat denna del av antologin, och tydliggjort vilka skillnader i material, teori eller analys som givit så pass skilda slutsatser angående kvinnans position i äktenskapsförhandlingar under denna period. Sanders bidrag tål att lyftas fram ytterligare då det på ett pedagogiskt sätt tydliggör för dem som inte är ”äldre-historiker” vikten av ett utarbetat religiöst perspektiv på perioder före sekulariseringen. Sanders för på detta sätt fram viktiga analytiska poänger om hur kyrkan och människorna tillsammans – inte i opposition mot varandra – stöttade synen på äktenskapet som en samhällsinstitution grundad i Gud.</p>\n<p>Skilsmässa och utomäktenskaplighet är viktiga teman i denna första del, och här följer antologin mönstret som ofta återfinns i forskning om äktenskapet. Det är, liksom med många andra sociala fenomen, lättare att säga var äktenskapet upphör eller var gränsen för icke-äktenskaplighet går, än att utforska det som finns innanför det som kallas äktenskap eller äktenskaplighet. Men texterna i antologin gör inte endast detta. Särskilt i antologins andra del lyckas kapitelförfattarna hålla ett fast grepp om äktenskapet och låter det inte uteslutande definieras av vad det <i>inte</i> är.</p>\n<p>Den andra delen handlar om gränser för och utvidgningar av jämställdhet när det gäller äktenskap, medborgarskap och önskan om att bilda familj. Jytte Larsen använder i sitt kapitel äktenskapet, eller snarare civilstånd, som en språngbräda för att problematisera att rösträtten gärna ses som det främsta måttet på ökad jämställdhet. Här lyfter Larsen istället fram de danska äktenskapsreformerna i början av 1920-talet som slutpunkten för en lång reformprocess mot ett gradvist avskaffande av könsdiskriminering som samhällsprincip. Även Zara Bersbos bidrag om kvinnans ekonomiska medborgarskap innehåller viktiga påpekanden om att reglerna för kvinnans ekonomiska myndighet så sent som 1950 var fulla av undantag och övergångsregler. Problematiseringen av heterosexualitet och preciseringen av dess historiska skiftning – mot att inbegripa lust och inte endast reproduktion – är ytterligare ett exempel på hur det som utgör en central del av konstruktionen av äktenskapet utforskas. Jens Rydströms bidrag om den nordiska modellen av registrerat partnerskap blir härvidlag viktigt för att i denna berättelse om äktenskapets historia synliggöra hur samkönade par successivt inkluderats i regleringen av parrelationer.</p>\n<p>I den tredje delen av antologin, som tar upp mångfaldsaspekter, relateras till fler geografiska kontexter än den nordiska. I undertiteln finns som tidigare nämnts en periodbestämning, men ingen geografisk inringning av antologins fokus. Antologin har tillkommit inom ramen för ett större projekt kring den nordiska välfärdsmodellen och äktenskapet. Alla bidrag utom Helene Carlbäcks kapitel om attityder till sovjetiska familjelagar utgår också från material kopplade till något eller flera av de nordiska länderna, och det hade gett ytterligare en analytisk dimension att i fler bidrag se en mer utvecklad diskussion om hur nordiskhet/norskhet/svenskhet/danskhet kunnat relateras till förändringarna av de nordiska äktenskapslagarna.</p>\n<p>I Gunlög Furs kapitel får vi den mest explicita diskussionen om nationen och koloniala ambitioner kopplade därtill. Furs kapitel är en av antologins höjdpunkter och förenar den detaljrikedom och empirinärhet som är central i antologin med den stora berättelsen – den om vad som ansetts vara så viktigt med äktenskapet. Ann-Sofie Roalds kapitel om muslimska kvinnors rätt till skilsmässa är grundligt och tydligt i utredningen av vilka aspekter som ställer till problem när muslimska skilsmässoregler möter den svenska äktenskapslagen. Tyvärr släpper Roald på slutet sitt starka fokus på hur reglerna påverkar muslimska kvinnors liv och gissar istället att problemen med haltande äktenskap kommer att minska i takt med ökad integration, vilket blir en något tandlös avslutning på en viktig analys.</p>\n<p class=\"forf\">Catrine Andersson</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vilket är det övergripande målet med de förändringar av PBL som utredningen föreslår, enligt texten?",
     "options": [
      "Att öka delaktigheten i och kunskapen om planfrågor.",
      "Att stärka skyddet för värdefulla miljöer.",
      "Att förenkla och förkorta planeringen av byggprojekt.",
      "Att främja ett långsiktigt bostadsbyggande."
     ],
     "correct": 2,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Textförfattaren är positiv till utredningens förslag. Vad framstår som huvudanledningen till det?",
     "options": [
      "Förslaget innebär en möjlighet att förverkliga just de ändringar i plan- och bygglovsprocessen som han själv uppfattar som mest angelägna.",
      "Förslaget utgör ett snabbt och uppriktigt försök att rätta till det som har kritiserats sedan PBL omarbetades senast.",
      "Förslaget visar på en medvetenhet om att bestämmelserna måste skärpas för att ge bebyggelsens kulturvärden fullgott skydd.",
      "Förslaget signalerar en tydlig kursändring som tar avstånd från detaljreglering i plan- och bygglagstiftningen."
     ],
     "correct": 0,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vilken omständighet gör almsjukan svårare att hantera i dag än i början av 1900-talet, enligt texten?",
     "options": [
      "Motståndskraften hos almarna har försämrats.",
      "Fler arter av almsplintborre sprider sjukdomen.",
      "Det har skett en kraftig tillväxt i almbeståndet.",
      "Svampen som orsakar sjukdomen har förändrats."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vilket av följande är ett synligt tecken på almsjuka, enligt texten?",
     "options": [
      "Fläckvisa områden med död ytterbark.",
      "Utebliven tillväxt av nya kvistar och löv i grenverket.",
      "Vissnade grenar i spridda delar av kronan.",
      "Blånad och mörka ränder i bladens kärlsträngar."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vad av följande är enligt texten en helt verkningslös åtgärd om man vill bekämpa almsjuka?",
     "options": [
      "Att sterilisera utrustning som har använts vid avverkning.",
      "Att beskära rötter på angripna träd.",
      "Att frakta bort gamla döda träd.",
      "Att använda biologiska bekämpningsmedel."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Kan, av texten att döma, en alm som har drabbats av almsjuka överleva, och i så fall hur?",
     "options": [
      "Ja, genom att man kapar de längsta rötterna.",
      "Ja, med hjälp av speciella bekämpningsmedel.",
      "Ja, om åtgärderna sätts in tidigt på våren.",
      "Nej, ett sådant träd tycks inte kunna räddas."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Vad förenar enligt texten de olika skribenternas bidrag till antologin?",
     "options": [
      "Att de behandlar äktenskapet i relation till politik och andra maktförhållanden.",
      "Att de tar ställning mot äktenskapet som institution.",
      "Att de behandlar äktenskapet som en religiös angelägenhet.",
      "Att de tar ställning mot statlig makt över äktenskapet."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Enligt recensenten innehåller antologin motstridiga synsätt i en viss fråga. Vilken?",
     "options": [
      "Hur stor roll mäns klasstillhörighet spelade för deras val av maka under 1600–1800-talet.",
      "Hur stort handlingsutrymme kvinnor hade i frågor kring äktenskap under 1700-talet.",
      "Hur stort det samhälleliga trycket att ingå äktenskap var i det gamla kristna Sverige.",
      "Hur stor påverkan religionen hade på människors levnadssätt före sekulariseringen."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Vilket svarsförslag anger ett av de forskningsresultat som recensenten hittar i antologins andra del?",
     "options": [
      "Att utvecklingen mot jämställdhet har tagit avgörande steg framåt också genom ändringar i äktenskapslagstiftningen.",
      "Att införandet av kvinnlig rösträtt påverkade lagstiftningen kring äktenskap till att bli mer jämställd.",
      "Att jämställdheten först blev lagstadgad inom äktenskapets ram och därifrån spred sig till andra samhällsområden.",
      "Att rösträtten blev åtkomlig för kvinnor tack vare de reformer av äktenskapslagarna som hade genomförts tidigare."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Vad skiljer antologins tredje del från den första och den andra, enligt texten?",
     "options": [
      "Kapitlen saknar ett samlande teoretiskt tema.",
      "Jämförelser sker inte geografiskt utan över tid.",
      "Innehållet avser inte någon särskilt angiven period.",
      "Perspektivet vidgas till att inte enbart omfatta Norden."
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
     "text": "Sedan 1996 finns Beredskapsmuseet på plats i Djuramossa, och både nostalgiker och skolklasser _____ hit varje år. Det hela bygger på Johans hobby samt på viljan att ta vara på mängder av historiska föremål och dokument som, om det velat sig illa, annars lätt hade _____ till soptippen.",
     "options": [
      "hänvisas – sonderats",
      "vallfärdar – förpassats",
      "skockas – lokaliserats",
      "flanerar – förmultnats"
     ],
     "correct": 1
    },
    {
     "num": 22,
     "text": "Vid empiriska studier har det visat sig att människor i skilda länder har en likartad uppfattning om olika yrkens anseende. _____ är således ungefär densamma världen över.",
     "options": [
      "Yrkesgemenskapen",
      "Yrkeshierarkin",
      "Yrkestillhörigheten",
      "Yrkesstoltheten"
     ],
     "correct": 1
    },
    {
     "num": 23,
     "text": "Läroverken och deras motsvarigheter fick en nyckelroll i fördelningen av det kulturella kapital som _____ i utbildning, eftersom vägen till högre utbildning och prestigefyllda _____ gick genom dessa skolor.",
     "options": [
      "favoriserats – producenter",
      "dompterats – prepositioner",
      "institutionaliserats – professioner",
      "adjungerats – prematurer"
     ],
     "correct": 2
    },
    {
     "num": 24,
     "text": "Denna _____ av bemötandet, det nära mötets nivå, rör den enskilda handläggarens etiska grunder och förmåga till _____ i det individuella mötet med den funktionsnedsatta människan. Hans eller hennes förhållningssätt avgör vilka förutsättningar som finns för att konkret förverkliga handikappolitikens _____.",
     "options": [
      "tolkning – fokus – praktik",
      "premiss – samspel – grundvalar",
      "vinkel – välvilja – principer",
      "aspekt – empati – intentioner"
     ],
     "correct": 3
    },
    {
     "num": 25,
     "text": "Borrelios är en bakteriell infektionssjukdom där bakterierna sprids med fästingar. Fästingbettet _____ ofta eftersom fästinglarver och fästingnymfer är mycket små och knappt synliga. Diagnos ställs genom att _____ påvisas i blod och hjärnhinnevätska. Någon undersökning som direkt påvisar bakterierna eller deras DNA har ännu inte kunnat genomföras.",
     "options": [
      "försvinner – fästingvirus",
      "förbises – antikroppar",
      "förringas – kromosomer",
      "förminskas – bakterier"
     ],
     "correct": 1
    },
    {
     "num": 26,
     "text": "Finlandssvenskarna utgör en grupp om cirka 300 000 finländska medborgare som har svenska som modersmål. Till många finlandssvenskars _____ har folk från Sverige ofta problem med att riktigt greppa detta, kanske beroende på att de är alltför snabba med att koppla språk till nation.",
     "options": [
      "förtret",
      "fördom",
      "förvirring",
      "försakelse"
     ],
     "correct": 0
    },
    {
     "num": 27,
     "text": "Det verkar finnas en outtalad ledarskapsteori som går ut på att man inte bör, knappt ens kan, agera _____ eftersom det inte är någon idé att _____ en katastrof som inte har uppstått.",
     "options": [
      "provokativt – förorsaka",
      "preventivt – förebygga",
      "progressivt – förkunna",
      "presumtivt – förebåda"
     ],
     "correct": 1
    },
    {
     "num": 28,
     "text": "Diskussionen som följde kändes mest som en upprepning av den så kallade Actumdebatten som drog genom spalterna för några år sedan. Ja, i själva verket som ett _____ på en serie andra pennfejder som rasat de senaste åren.",
     "options": [
      "da capo",
      "carpe diem",
      "status quo",
      "alter ego"
     ],
     "correct": 0
    },
    {
     "num": 29,
     "text": "Det framkom att cheferna _____ bidrar till att skapa en kultur som främjar implementering av så kallad evidensbaserad praktik inom fysioterapi. I stället tycks forskningsrelaterade frågor _____ vara beroende av enskilda engagerade fysioterapeuter som håller sig _____ med aktuell forskning och informerar sina kollegor om de senaste forskningsrönen.",
     "options": [
      "i enstaka fall – för det mesta – i schack",
      "i de flesta sammanhang – nästan aldrig – uppdaterade",
      "i alltför hög grad – alltför sällan – i framkant",
      "i mer begränsad utsträckning – till stor del – à jour"
     ],
     "correct": 3
    },
    {
     "num": 30,
     "text": "Att genomskåda _____ är ofta svårt, särskilt om personen uppger ett enkelt symtom som värk, vars _____ inte kan motbevisas genom läkarundersökning eller teknisk diagnostik.",
     "options": [
      "fobi – exponering",
      "placebo – varaktighet",
      "simulering – befintlighet",
      "hypokondri – argument"
     ],
     "correct": 2
    }
   ]
  }
 ]
};
