// Högskoleprovet 25 mars 2023, provpass 5 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "vt2023-5",
 "tillfalle": "vt2023",
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
   19,
   0.1
  ],
  [
   21,
   0.2
  ],
  [
   23,
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
   48,
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
   60,
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
     "word": "ihärdig",
     "text": "<b>ihärdig</b>",
     "options": [
      "snabb och explosiv",
      "hård och okänslig",
      "envis och uthållig",
      "ivrig och hoppfull",
      "erfaren och duktig"
     ],
     "correct": 2
    },
    {
     "num": 2,
     "word": "hereditet",
     "text": "<b>hereditet</b>",
     "options": [
      "ensamhet",
      "vänlighet",
      "fromhet",
      "sjuklighet",
      "ärftlighet"
     ],
     "correct": 4
    },
    {
     "num": 3,
     "word": "begrunda",
     "text": "<b>begrunda</b>",
     "options": [
      "tillägna sig",
      "instämma i",
      "ta itu med",
      "fundera på",
      "besluta sig för"
     ],
     "correct": 3
    },
    {
     "num": 4,
     "word": "klädsam",
     "text": "<b>klädsam</b>",
     "options": [
      "blyg",
      "ytlig",
      "modern",
      "enkel",
      "passande"
     ],
     "correct": 4
    },
    {
     "num": 5,
     "word": "med nöd och näppe",
     "text": "<b>med nöd och näppe</b>",
     "options": [
      "av tvång",
      "till slut",
      "nästan inte",
      "på pricken",
      "utan problem"
     ],
     "correct": 2
    },
    {
     "num": 6,
     "word": "utfall",
     "text": "<b>utfall</b>",
     "options": [
      "minskning",
      "avvikelse",
      "sannolikhet",
      "resultat",
      "överskott"
     ],
     "correct": 3
    },
    {
     "num": 7,
     "word": "cementera",
     "text": "<b>cementera</b>",
     "options": [
      "slutföra",
      "jämna till",
      "göra avtryck",
      "stänga inne",
      "göra beständig"
     ],
     "correct": 4
    },
    {
     "num": 8,
     "word": "trollbunden",
     "text": "<b>trollbunden</b>",
     "options": [
      "inbillad",
      "fascinerad",
      "grundlurad",
      "förvirrad",
      "överraskad"
     ],
     "correct": 1
    },
    {
     "num": 9,
     "word": "lasyr",
     "text": "<b>lasyr</b>",
     "options": [
      "finslipad yta",
      "genomskinlig färg",
      "stilfull dekoration",
      "oönskad beläggning",
      "förgrenat mönster"
     ],
     "correct": 1
    },
    {
     "num": 10,
     "word": "vag",
     "text": "<b>vag</b>",
     "options": [
      "obestämd",
      "avlägsen",
      "betydelselös",
      "tillfällig",
      "ostadig"
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
     "title": "Videfuksens återkomst",
     "html": "<p>Det kan gå snabbt i fjärilarnas värld. Videfuksen <i>Nymphalis xanthomelas</i> sågs inte alls i Sverige från 1960-talet fram till år 2004, då en individ observerades i Östergötland och en i Småland. Åren därpå kunde man konstatera att videfuks faktiskt hade reproducerande populationer – om än mycket små och fåtaliga – vid gränsen mellan Småland och Blekinge samt på mellersta Öland. Kanske var den förbisedd ditintills, men det var fortfarande få förunnat att få syn på denna vackra, stora fjäril. Detta var läget fram till andra veckan i juli 2012.</p>\n<p>Då uppträdde plötsligt osedvanligt många videfuksar i Sverige. Främst sågs de på Öland och Gotland samt i Södermanland och Uppland. Först kustnära, sedan allt längre in i landet. Fjärilarna kom av allt att döma över Östersjön från Baltikum. Några dagar efter midsommar 2013 upprepades samma fenomen. När jag själv åkte hem från Runmarö i Stockholms skärgård strax efter midsommar hade jag inte sett en enda videfuks, men ett par dagar senare satt drygt 30 individer på en savande ek. Vanligtvis ser man knappt videfuks alls på sommaren. Likt den snarlika och närbesläktade körsbärsfuksen <i>Nymphalis polychloros</i> söker fjärilen upp en plats för vintervilan strax efter det att den har kläckts ur puppan. Men dessa videfuksar flög istället över havet till Sverige, vilket verkar ha varit en framgångsrik strategi.</p>\n<p>Under våren 2014 har allt fler fått upp ögonen för den ”stora och lite märkligt färgade nässelfjärilen”. Dessa individer är avkomlingar till migrationsvågorna under de senaste två somrarna. Nu är videfuksen bofast och mer än så. Videfuksen är ungefär lika vanlig som till exempel sorgmantel i år, även om man kan räkna med att exklusiva arter rapporteras oftare än vanliga arter. I Artportalen fördelar sig observationer av övervintrande dagfjärilar på 1 396 observationer av citronfjäril, 800 påfågelöga, 763 nässelfjäril, 541 vinbärsfuks, 510 videfuks, 506 sorgmantel och endast 68 körsbärsfuks från februari till maj 2014.</p>\n<p>Med undantag för Mälardalen verkar arten vara starkt kustbunden i södra Sverige. Kanske är de fåtaliga fynden på småländska höglandet en följd av ett mindre gynnsamt mikroklimat. Och Skåne har knappt alls berörts av migrationsvågorna under 2012–2013; följaktligen är antalet observationer där försvinnande litet i år. Videfuksen blev den hundrade dagfjärilsarten för Norge när den observerades för första gången den 23 april 2014 i Vestfold. Fram till mitten av maj har 13 observationer gjorts i Norge, de allra flesta nära gränsen till Värmland.</p>\n<p class=\"forf\">Bo Söderström</p>"
    },
    {
     "title": "Hår",
     "html": "<p>Av någon anledning tappade våra anfäder sin päls. Varför är en olöst gåta, men flera försök till förklaringar har gjorts. En går ut på att våra förfäder skulle ha blivit väldigt svettiga av att röra sig på savannen och då skulle det ha varit en fördel att slippa päls. En annan teori handlar om energisvinnet i att producera något vi klarar oss utan; om vi kan värma och skydda oss utan päls är det slöseri med energi att skapa stora mängder hår. För vi klarar oss nämligen utan kroppshår. Ett totalt håravfall påverkar inte i sig den fysiska hälsan.</p>\n<p>Det hår vi ändå har fått behålla har klarat sig igenom evolutionens frisering av olika skäl. Behåring på armar och ben är att betrakta som en rest, ungefär som en blindtarm. Näshår och ögonfransar fyller en praktisk funktion och ger skydd åt lungor och ögon. Det är svårare att förstå varför vi har hår under armarna och kring könsorganen, men en teori går ut på att det samlar doft för att attrahera en partner.</p>\n<p>Håret på huvudet skyddar mot gassande sol, men skägget fyller inte någon uppenbar praktisk funktion. Det är också svårt att förstå varför ett skyddande huvudhår skulle behöva växa så snabbt och kunna bli så långt.</p>\n<p>Enligt Lars Norlén, docent vid hudkliniken på Karolinska universitetssjukhuset i Solna, talar det för att huvudhår och skägg har fyllt andra funktioner för oss, troligen signaleringsfunktioner.</p>\n<p>– De funktionerna har sannolikt varit väldigt viktiga eftersom vi har bevarat långt hår på huvudet. Det förklarar också varför skalphåret är kopplat till vår identitet och varför en hårsjukdom kan vara så psykiskt belastande, säger Lars Norlén.</p>\n<p>Det går såklart inte att säga vad våra förfäder kommunicerade med sina hårmanar, men under de senaste årtusendena har huvudhåret omgärdats av mängder med starka uppfattningar, ofta kopplade till föreställningar om sexualitet, religion och makt.</p>\n<p>I Romarriket klipptes kvinnor som begått äktenskapsbrott korthåriga. Inom judisk, muslimsk och kristen kultur har det ansetts viktigt att gifta, ibland även ogifta, kvinnor täcker sitt hår vid vistelse utanför hemmet. Buddhistiska munkar och nunnor rakar av sig sitt hår för att visa sig hängivna inför det heliga livet, men inom sikhismen uttrycks samma sak precis tvärtom; vild hårväxt, där varken huvudhår eller skägg får klippas, symboliserar andlighet.</p>\n<p>Det är i skuggan av dessa kulturella föreställningar som lidande vid ofrivillig hårförlust ska förstås, anser Lars Norlén.</p>\n<p>Den vanligaste hårsjukdomen är <i>alopecia areata</i>, fläckvis håravfall, där hår faller av i runda fläckar som kan sitta över hela kroppen. Sjukdomen förekommer i alla åldrar och den tros vara ett autoimmunt angrepp på hårsäckarna.</p>\n<p>– Hårsjukdomar är styvmoderligt behandlade och kopplas ofta till kosmetik. Det har påverkat synen på hårforskning och därför saknar vi många grundkunskaper om hår. Vi känner till exempel inte till mekanismerna vid hårtillväxt och håravfall, på molekylär nivå.</p>\n<p>Men det är klart att manliga könshormoner, androgener, spelar en stor roll i sammanhanget. Hos kvinnor bromsas utvecklingen av kvinnliga könshormoner, östrogener, så det är ett skäl till att kvinnor är mindre behårade. Sannolikt är det också förändrade hormonnivåer under graviditeten som ligger bakom att många kvinnor då får tjockare kalufs. Att många kvinnor upplever ett stort håravfall några månader efter förlossningen antas bero på att hormonnivåerna då åter har ändrats, och på den stora kroppsliga stress det innebär att föda barn.</p>\n<p>– Det är ofta fysisk stress, som en operation eller en kraftig infektion med hög feber, som kan orsaka håravfall, men även emotionell stress kan ha påverkan. Att tappa håret till följd av stress är så vanligt att det kan betraktas som en normal stressreaktion, säger Lars Norlén.</p>\n<p>Håret på huvudet växer 11 till 16 millimeter i månaden, vilket är snabbare än annat kroppshår.</p>\n<p>– Tillväxttakten för hår på skalpen är relativt väl beskriven. Det innebär att vi ganska exakt kan säga när olika segment av ett hårstrå bildades. Det kan räcka med drygt tolv centimeter hår för att vi ska kunna säga något om hur en person har levt under det senaste året, säger Henrik Druid, rättsmedicinare och professor vid Institutionen för onkologi-patologi vid Karolinska institutet.</p>\n<p>Väldigt mycket, i princip allt, av det vi får i oss lämnar spår i vårt hår. Via blod eller svett sker inlagringen i hårstrået i hårsäcken eller mycket nära skalpen. När hårstrået sedan växer följer inlagrade ämnen med. Det går att se vilka proteinkällor kosten har haft, och även bakgrundsstrålning lämnar spår vilket ger en hint om var personen kan ha vistats rent geografiskt.</p>\n<p>Hårceller har ingen blodcirkulation eller annan ämnesomsättning, så cellerna i ett hårstrå är döda när de har lämnat hårsäcken. Ett hårprov bryts därför ned mycket långsamt – och är lika användbart oavsett om det kommer från en död eller en levande person.</p>\n<p>Henrik Druid arbetar med så kallad sekventiell håranalys, där man klipper en liten hårtofs i halvcentimeterlånga avsnitt. Sedan undersöks förekomsten av olika ämnen i respektive håravsnitt. Då kan man se till exempel om någon använt narkotika, konsumerat alkohol eller tagit läkemedel – och man kan säga när detta har skett och om intaget har varierat över tid. Ett blod- eller urinprov kan endast ge en ögonblicksbild från provtillfället.</p>\n<p>Hårsäcken, eller hårfollikeln, är ett av få mänskliga organ som följer en cyklisk rytm, där tillväxten av hårstrået pågår i två till åtta år och följs av en kortare fas på två till fyra veckor, då hårsäcken krymper. Slutligen följer en vilofas, där håret inte växer men vanligen sitter kvar i hårsäcken. När hårstrået till sist faller av går hårsäcken åter in i tillväxtfas. Vad som driver denna cykel intresserar Maria Kasper, forskare vid Institutionen för biovetenskaper och näringslära vid Karolinska institutet. Hon undersöker keratinocyter, en celltyp som kan få flera olika slags roller. Keratinocyter kan till exempel ingå i vårt yttersta hudlager eller ta plats i en hårsäck och så småningom ingå i ett hårstrå. Maria Kasper vill ta reda på vad som får en keratinocyt att bli antingen en hudcell eller en hårcell – och vad som händer när en sådan cell i stället omvandlas till en cancercell.</p>\n<p>Hon och hennes kollegor följer enskilda celler i hårsäckar hos möss som är antingen friska eller framavlade för att alltid utveckla hudcancer. Med en särskild teknik, enkelcellssekvensering, kan de se exakt vilka gener som är aktiva i enskilda keratinocyter.</p>\n<p>– Vi undersöker mikromiljön för dessa celler. Med det menar vi till exempel närheten till blod- och lymfkärl, men också närhet till andra celler, som nervceller, fibroblaster eller immunceller. De är inte jämnt utspridda i huden utan förekommer ofta gruppvis. Vi vill ta reda på hur olika celler påverkar varandra. Syftet är att förstå vad som styr cellers förmåga att ersätta celler i frisk vävnad – och vad som får dem att bilda tumörer i stället. Vi vill också förstå vad som hjälper en nyetablerad tumör att växa sig större, säger hon.</p>\n<p class=\"forf\">Annika Lund</p>"
    },
    {
     "title": "Bebyggelse och befolkning i 1500-talets Norrbotten",
     "html": "<p>Det är ingen lätt uppgift att studera utvecklingen inom bebyggelse och demografi under tidigmodern tid. Källorna, som huvudsakligen består av kameralt material som skattemantal, jordeböcker, tiondelängder och liknande, är oftast otillräckliga för att möjliggöra någorlunda exakta beräkningar och uppskattningar. Materialet är dessutom svårt för den icke initierade; så svårt att det tycks ha en avskräckande effekt på dagens svenska historikerskrå, som inte gärna ägnar sin tid åt befolknings- och bebyggelseundersökningar i det förindustriella samhället. Man får gå tillbaka till 1970-talets samnordiska Ödegårdsprojekt för att hitta de stora ambitionerna inom genren. Istället är det forskare inom andra discipliner som tagit upp den tappade tråden. Därför känns Mats Berglunds avhandling <i>Gårdar och folk i norr. Bebyggelse, befolkning och jordbruk i Norrbotten under 1500-talet</i> som ett välkommet trendbrott. Berglund analyserar de fyra norrbottniska socknarna Torneå, Kalix, Luleå och Piteå (som tillsammans utgjorde det norra fögderiet av det historiska landskapet Västerbotten) under perioden 1520–1610. Syftet är att utifrån det kamerala materialet studera frågor kring bebyggelse, jordbruk, demografi och sociala förhållanden. Detta lokalhistoriska arbete omfattar beskrivning och analys, och kompletteras med breda jämförelser med det övriga dåvarande Sverige.</p>\n<p>Inledningsvis redogörs för tidigare forskning och teoretiska utgångspunkter. Här presenteras bland annat Slicher van Bath och Thomas Robert Malthus, som i sina beskrivningar av det förindustriella agrarsamhället båda kan sägas representera en pessimistisk syn. De såg en mer eller mindre lagbunden utveckling, där expansionsperioder följdes av regressioner till följd av olika mättnadsfaktorer. Stort utrymme får också Janken Myrdals och Johan Söderbergs tresektorsmodell för den svenska samhällsproduktionen under 1500-talet. Häri ingår jordbruk, handel/bergsbruk samt staten med kyrkan och militären som komponenter. Det är mot denna modell och mot van Baths empiriskt underbyggda orsaksmodell som Berglund säger sig vilja pröva utvecklingen i Norrbotten.</p>\n<p>Diskussioner kring källmaterial och metod ägnas stort utrymme. Det är viktiga frågor som kan påverka undersökningens validitet, men Berglund visar att han kan materialet och vet dess begränsningar och vilka feltolkningar det inbjuder till. Problemet återkommer ständigt i avhandlingen och blir tydligt inte minst i den komparativa redovisningen av jordskattemantalet kontra det faktiska gårdetalet. Med tiden ökade de skattebefriade hemmanen så kraftigt att en beräkning av antalet gårdar enbart på jordskattemantalen ger en hög felprocent. En annan försvårande omständighet vid undersökningar av bebyggelsetillväxt är huruvida det rörde sig om inre eller yttre expansion, det vill säga om gårdsdelningar/avskiljningar eller fristående nybyggen. Dessa samt ytterligare svårigheter hindrar dock inte Berglund från att se klara utvecklingslinjer och trender.</p>\n<p>Vilka är då resultaten som presenteras när alla tveksamheter i källmaterialet har utretts, alla komparationer med det övriga dåvarande Sverige har redovisats och inte minst analysen av de fyra Norrbottenssocknarna har genomförts? Bebyggelseutvecklingen är positiv fram till 1560-talet; därefter följer en regression åtföljd av en ny tillväxtperiod. Befolkningsutvecklingen korrelerar i stort med bebyggelsens upp- och nedgångar, medan jordbruket kännetecknas av en genomgående tillväxt med tyngdpunkten förlagd till mitten av 1500-talet. Socialt sker det en (svag) utjämning av samhällsklyftorna, vilket pekar på en svensk särväg jämfört med utvecklingen i övriga Europa.</p>\n<p>Berglund presenterar en övertygande kvantitativ studie av de fyra Norrbottenssocknarnas bebyggelse- och befolkningsutveckling. Hans kunskap om källmaterialet medverkar också till att förhöja kvaliteten på avhandlingens rent deskriptiva framställning. Lite sämre blir det när det gäller den analytiska biten, det vill säga hur resultaten i undersökningen används för att analysera och dra slutsatser. Kanske hade avhandlingen tjänat på att inskränkas till den beskrivande, kvantitativa delen och det utförliga resonemanget om källmaterialet; att resultaten hade presenterats som en form av grundforskning och satts i relief till den tidigare forskningen. Det är ju egentligen vad Berglund gör då han presenterar ett gediget material som omfattar hela Sverige. Att detta material dessutom till stora delar finns i huvudtexten och inte kategoriskt som bilagor förstärker detta intryck.</p>\n<p>En svaghet med Berglunds slutsatser är att de ofta bygger på mer eller mindre generaliserbara orsakssammanhang (missväxt, pest, knektutskrivningar, högt skattetryck) och inte alltid är direkt påvisbara för undersökningsområdet. Här anar man påverkan från en tidigare forskargenerations alltjämt mycket tungt vägande argument. Inte desto mindre presenteras flera intressanta orsakssammanhang, såsom sambandet mellan bebyggelse- och befolkningsutveckling, följderna av regression respektive expansion och så vidare. Dock saknar jag en diskussion om ytterligare faktorer som var med och påverkade utvecklingen. Det handlar närmast om de icke-sociala strukturernas påverkan. Berglund redovisar utifrån tidigare forskning i ett ganska tidigt skede av avhandlingen de topografiska och miljörelaterade faktorer som utmärkte undersökningsområdet, kort sagt de naturgeografiska förutsättningarna. Han följer dock inte upp denna viktiga aspekt.</p>\n<p>Mot slutet återknyter Berglund till den inledningsvis presenterade teoretisk-empiriska modellen för 1500talet. Prövningen av denna faller inte särskilt väl ut. Modellen integreras inte nämnvärt i analysen och kontentan blir närmast att Myrdal/Söderbergs tresektorsmodell inte är applicerbar på undersökningen, eftersom hela den andra sektorn (handel m.m.) inte uppmärksammas av Berglund. van Baths ”konjunkturdeterminism” blir till viss del falsifierad, men har ändå relevans för norrbottniska förhållanden.</p>\n<p>Oaktat min kritik har Berglund skrivit en avhandling av mycket hög kvalitet som förhoppningsvis kan medverka till en renässans för bebyggelse- och befolkningshistoria med tonvikten på det förindustriella samhället. Det är angeläget, inte minst för att utmana det rådande forskningsläget som är gammalt, om än alltjämt gångbart.</p>\n<p class=\"forf\">Stefan Persson</p>\n<p><b>kameral</b> = som rör statens finansförvaltning, särskilt jordegendom <b>hemman</b> = äldre benämning på jordbruksfastighet</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vad talar för att författaren har rätt i att videfuksens förflyttning från Baltikum till Sverige har varit en ”framgångsrik strategi”?",
     "options": [
      "Att artens utbredningsmönster numera liknar andra fjärilars.",
      "Att förflyttningen skedde vid en för arten kritisk tidpunkt.",
      "Att mikroklimatet längs den svenska östkusten har blivit mer gynnsamt för arten.",
      "Att arten på kort tid har lyckats etablera sig i Sverige."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Om man följer textens resonemang, vilket antagande är då mest rimligt vad gäller Artportalens noteringar för videfuks och sorgmantel?",
     "options": [
      "Videfuks är underrapporterad i relation till sorgmantel.",
      "Videfuks är överrapporterad i relation till sorgmantel.",
      "Videfuks och sorgmantel är båda underrapporterade i relation till övriga arter.",
      "Videfuks och sorgmantel är båda överrapporterade i relation till övriga arter."
     ],
     "correct": 1,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vad anges i texten som förklaring till att våra kunskaper om människans hår är begränsade?",
     "options": [
      "Att det generellt forskas mindre på områden som anses vara typiskt kvinnliga.",
      "Att hår har ansetts vara ointressant ur ett medicinskt perspektiv.",
      "Att det finns en mängd olika faktorer som kan påverka hårväxten.",
      "Att hår har förknippats med kulturellt känsliga frågor."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Textavsnittet om religioner kan sägas stödja en av de teorier om människans hår som presenteras i texten. Vilken?",
     "options": [
      "Att håret har varit en viktig förmedlare av dofter.",
      "Att håret har påverkat människans behov av andlighet.",
      "Att håret har representerat viktiga värden.",
      "Att håret har fungerat som skydd mot solen."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vilket av följande syften har Maria Kaspers forskning om keratinocyter, enligt texten?",
     "options": [
      "Att förstå varför sådana celler söker sig till varandra.",
      "Att beskriva vad hudceller och hårceller har gemensamt.",
      "Att förstå varför sådana celler utvecklas i olika riktningar.",
      "Att beskriva hårsäckens cykliska rytm."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Vad av följande förklarar enligt texten att analyser av hårstrån kan ge mer information än ett blodprov?",
     "options": [
      "Att hårceller har högre hormonnivåer än blodceller.",
      "Att hårceller bevaras längre än blodceller.",
      "Att hårceller kan ta upp fler typer av ämnen än blodceller.",
      "Att hårceller lever längre än blodceller."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Vad var enligt Slicher van Baths teori utmärkande för agrarsamhället, menar recensenten?",
     "options": [
      "Oförutsägbara svängningar mellan tillväxt och tillbakagång.",
      "En stor osäkerhet om samhällsutvecklingens riktning.",
      "Delvis minskade ekonomiska skillnader mellan olika samhällsgrupper.",
      "En hög grad av förutsägbarhet vad gäller konjunkturens växlingar."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Vad anser recensenten att Mats Berglund inte har uppmärksammat tillräckligt i sin avhandling?",
     "options": [
      "Källmaterialets bristande tillförlitlighet och tveksamma värde.",
      "De teoretiska modeller som beskriver det förindustriella agrarsamhället.",
      "Agrarsamhällets unika sociala och ekonomiska struktur.",
      "De naturgeografiska förhållandena i Norrbotten under 1500-talet."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Vad kan man utläsa av jordskattemantalet från 1500-talets Norrbotten, av texten att döma?",
     "options": [
      "Hur många gårdar som beskattades.",
      "Hur stor andel av gårdarna som var hemman.",
      "Hur många gårdar som var avskiljningar.",
      "Hur stor andel av gårdarna som var nybyggen."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Vad hoppas recensenten att Mats Berglunds avhandling ska leda fram till?",
     "options": [
      "Ett större mod att forska på omfattande källmaterial.",
      "En omvärdering av äldre forskningsmaterial.",
      "Ett ökat intresse för forskningsområdet i fråga.",
      "En återgång till en mer källkritisk historieforskning."
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
     "text": "Redan i forntiden utnyttjade människor mikroorganismer vid produktion av jästa drycker, vid jäsning av deg och för produktion av till exempel surkål. Under denna tid använde man den _____ av mikroorganismer som spontant fanns _____.",
     "options": [
      "uppsjö – aktuell",
      "odling – befintlig",
      "kaskad – upptänklig",
      "flora – tillgänglig"
     ],
     "correct": 3
    },
    {
     "num": 22,
     "text": "Enligt lag ska vårdpersonal utföra sitt arbete i överensstämmelse med vetenskap och beprövad erfarenhet. Den vårdansvarige bär ensam ansvaret för hur arbetsuppgifterna fullgörs. En arbetsuppgift får överlåtas till någon annan om det är _____ med en god och säker vård.",
     "options": [
      "förenligt",
      "gångbart",
      "införlivat",
      "hanterbart"
     ],
     "correct": 0
    },
    {
     "num": 23,
     "text": "Den grekiske filosofen Sokrates vägrade _____ som allkunnig eller lärare. Han _____ ofta att han saknade kunskap och ifrågasatte ständigt sina egna _____.",
     "options": [
      "biträda – påstod – tillgångar",
      "tillträda – fruktade – fördomar",
      "framträda – insåg – baktankar",
      "uppträda – framhöll – slutsatser"
     ],
     "correct": 3
    },
    {
     "num": 24,
     "text": "Det finns flera studier som visar att _____ mellan medborgare _____ med förtroendet för politiker och samhälleliga institutioner.",
     "options": [
      "vänskapen – koordinerar",
      "misstron – kompletterar",
      "tilliten – korrelerar",
      "sambanden – kontrasterar"
     ],
     "correct": 2
    },
    {
     "num": 25,
     "text": "Narcissism är ett psykoanalytiskt begrepp som innebär kärlek till det egna jaget. Ordet _____ från myten om den unge Narkissos, som förälskade sig i sin egen spegelbild.",
     "options": [
      "erhålls",
      "härrör",
      "betingas",
      "uppstiger"
     ],
     "correct": 1
    },
    {
     "num": 26,
     "text": "Många av dagens nyskapande forskningsresultat inom matematiken kan komma till _____ användning i framtiden. Men vi kan inte i förväg veta exakt vilka resultat som kommer att bli betydelsefulla. Det kan mycket väl bli några av dem som idag ter sig mest _____.",
     "options": [
      "oväntad – marginella",
      "allmän – fruktbara",
      "begränsad – vilseledande",
      "experimentell – förutseende"
     ],
     "correct": 0
    },
    {
     "num": 27,
     "text": "Riksarkivet är en av Sveriges äldsta myndigheter. Arkivet grundades 1618 men har _____ från slutet av 1200-talet.",
     "options": [
      "arv",
      "börd",
      "anor",
      "påbrå"
     ],
     "correct": 2
    },
    {
     "num": 28,
     "text": "Ofta bygger samhällsplaneringen på en _____ om oss människor – som om vi alla kunde se och höra bra, röra oss obehindrat, förstå olika signaler från omvärlden och reagera snabbt och _____ på dessa. Nästan dagligen ser vi exempel på hur tillgänglighetsperspektivet _____ även i den svenska samhällsutvecklingen.",
     "options": [
      "fiktion – initierat – tillämpas",
      "illusion – adekvat – åsidosätts",
      "definition – kompetent – hörsammas",
      "kategorisering – propert – försummas"
     ],
     "correct": 1
    },
    {
     "num": 29,
     "text": "Här diskuteras 1920-talets ekonomiska kris när barnen, och i _____ hela befolkningen, skulle lära sig hålla ordning på pengarna, med serien ”Spara och Slösa” i tidningen <i>Lyckoslanten</i> som _____.",
     "options": [
      "synnerhet – draghjälp",
      "realiteten – tumregel",
      "extremfallet – förebild",
      "förlängningen – rättesnöre"
     ],
     "correct": 3
    },
    {
     "num": 30,
     "text": "Den internationellt uppmärksammade kvinnoläkaren och nobelpristagaren Denis Mukwege _____ inte orden när han skildrar det motstånd han ofta mött i sitt hemland.",
     "options": [
      "skarvar",
      "skräder",
      "skingrar",
      "skonar"
     ],
     "correct": 1
    }
   ]
  }
 ]
};
