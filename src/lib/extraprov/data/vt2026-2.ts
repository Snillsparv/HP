// Högskoleprovet 18 april 2026, provpass 2 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "vt2026-2",
 "tillfalle": "vt2026",
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
   40,
   0.7
  ],
  [
   44,
   0.8
  ],
  [
   47,
   0.9
  ],
  [
   51,
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
   65,
   1.4
  ],
  [
   67,
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
     "word": "prognos",
     "text": "<b>prognos</b>",
     "options": [
      "besked",
      "utvärdering",
      "sammanfattning",
      "förutsägelse",
      "redovisning"
     ],
     "correct": 3
    },
    {
     "num": 2,
     "word": "slug",
     "text": "<b>slug</b>",
     "options": [
      "ivrig",
      "otäck",
      "girig",
      "envis",
      "listig"
     ],
     "correct": 4
    },
    {
     "num": 3,
     "word": "eftertrakta",
     "text": "<b>eftertrakta</b>",
     "options": [
      "ta reda på",
      "följa efter",
      "härma",
      "vilja ha",
      "fundera på"
     ],
     "correct": 3
    },
    {
     "num": 4,
     "word": "potential",
     "text": "<b>potential</b>",
     "options": [
      "stor skicklighet",
      "inneboende möjligheter",
      "sannolikt resultat",
      "betydande framgångar",
      "starka förhoppningar"
     ],
     "correct": 1
    },
    {
     "num": 5,
     "word": "utomordentlig",
     "text": "<b>utomordentlig</b>",
     "options": [
      "märklig",
      "förhastad",
      "oavsiktlig",
      "förträfflig",
      "noggrann"
     ],
     "correct": 3
    },
    {
     "num": 6,
     "word": "plombering",
     "text": "<b>plombering</b>",
     "options": [
      "avskärmning",
      "omledning",
      "försegling",
      "urgröpning",
      "återställning"
     ],
     "correct": 2
    },
    {
     "num": 7,
     "word": "miserabel",
     "text": "<b>miserabel</b>",
     "options": [
      "eländig",
      "vilsen",
      "bitter",
      "plågsam",
      "otrevlig"
     ],
     "correct": 0
    },
    {
     "num": 8,
     "word": "fadäs",
     "text": "<b>fadäs</b>",
     "options": [
      "elakt skämt",
      "kort vistelse",
      "påminnelse",
      "oförutsedd utgift",
      "pinsamt misstag"
     ],
     "correct": 4
    },
    {
     "num": 9,
     "word": "ingalunda",
     "text": "<b>ingalunda</b>",
     "options": [
      "inte alls",
      "i onödan",
      "undantagsvis",
      "otillräckligt",
      "ingenstans"
     ],
     "correct": 0
    },
    {
     "num": 10,
     "word": "erinra sig",
     "text": "<b>erinra sig</b>",
     "options": [
      "undersöka",
      "minnas",
      "lugna sig",
      "avvakta",
      "invänta"
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
     "title": "Medborgarkompetens",
     "html": "<p>I den offentliga debatten finns en tydlig förväntan på skolan att fungera som en arena för att utveckla unga människor till goda medborgare. När svensk utbildningspolitik har formulerats har medborgarperspektivet traditionellt haft en framträdande roll. Det finns emellertid ett avvägningsproblem mellan skolans medborgarfostrande, demokratiska uppdrag och uppdraget att förbereda elever för yrkeslivet.</p>\n<p>Traditionellt har SO-undervisningen haft ett stort ansvar för skolans demokratiska uppdrag, för att lära eleverna hur man deltar och agerar som medborgare i ett demokratiskt samhälle. Bland SO-ämnena är det framför allt i ämnet samhällskunskap som man brukar ta upp och diskutera de demokratiska värdena och utveckla elevernas förmåga att granska, värdera och ta ställning i samhällsfrågor och internationella utvecklingsfrågor.</p>\n<p>Reformen av gymnasieskolan (Gy 11) innebar en förändring så till vida att mindre fokus numera läggs på skolans medborgarfostrande uppdrag medan ett tydligare fokus läggs på att förbereda eleverna antingen för yrkeslivet och fortsatt yrkesutbildning eller för fortsatta studier. Detta kommer bland annat till uttryck i att ämnet samhällskunskap på gymnasieskolans yrkesprogram halverats från 100 till 50 poäng.</p>\n<p>Det övergripande syftet med vårt forskningsprojekt är att undersöka om reformen av gymnasieskolan påverkar yrkesprogramelevernas medborgarkompetens, det vill säga deras demokratiska värderingar, tillit till egna färdigheter och kommunikativa förmågor samt politiska kunskaper och politiska engagemang.</p>\n<p>I projektet fokuserar vi på två aspekter av samhällskunskapsundervisning. För det första undersöker vi effekter av undervisningsmängden (antalet undervisningstimmar). Här knyter vi an till en internationell diskussion om effekter av utbildning. Utbildningsreformen innebar dock inte enbart en minskning av antalet timmar utan också en viss förändring av formen för undervisningen i riktning mot mer traditionell katederundervisning. För det andra riktar vi därför in oss på typen av undervisning. Vi genomför ett empiriskt test där vi undersöker vilka effekter på medborgarkompetens så kallad deliberativ undervisning har jämfört med traditionell katederundervisning.</p>\n<p>Joakim Ekman, Pär Zetterberg, Mikael Persson &amp; Klas Andersson</p>\n<h4>deliberativ undervisning = undervisning som bygger på samtal</h4>"
    },
    {
     "title": "Två inlägg i debatten om ljudboken",
     "html": "<p><b>INLÄGG 1</b> I den senaste debatten om ljudböcker har det som vanligt handlat om pengar, branschen och de nya formaten. Den gamla floskeln att ljudboken vidgar det litterära formatet brukar följas av en ömsint men nedlåtande kommentar om boken som ålderdomlig, som om man vill hänga med i utvecklingen även när den leder mot botten.</p>\n<p>Mer sällan talar man om att det inte är samma sak att lyssna som att läsa. Vissa kritiker verkar inte ens reflektera över skillnaden, som exempelvis <i>Expressens</i> litteraturkritiker Jens Liljestrand som, utan att blygas, i en text om Lydia Sandgrens <i>Samlade verk</i> tillstår att han faktiskt inte har läst boken utan bara lyssnat till den: ”Själv slukade jag den under veckor av ensamma barnvagnspromenader med Ludvig Josephsons varma röst i hörlurarna, genom trivsamma 28 timmar och 35 minuter.” När till och med en känd kritiker som Liljestrand inte förstår att det är en väsentlig skillnad mellan att läsa och att lyssna så blir det ju svårt att övertyga oss andra om det tryckta ordets överlägsenhet jämfört med det inspelade ljudet när det kommer till litteratur.</p>\n<p>Läsning av en bok kräver ett pågående arbete som ljudböcker inte kräver. I boken finns nämligen ingen gravitation. Man kan inte läsa en bok och diska samtidigt, eller läsa en bok och surfa på nätet samtidigt. När du vänder tillbaka blicken efter att ha tittat på något annat så är du kvar på samma sida i boken, som inte rör sig framåt av sig själv. Ljudboken har gått vidare, men boken går bara vidare genom din läsning. Det är det som gör boken svårare och det kanske också är det som ligger bakom litteraturens särställning.</p>\n<p>Det ljudboken gör är att tala till människans urgamla vilja att få något utan att betala för det. Det är samma vilja som ligger bakom drömmarna om evighetsmaskiner, att kunna göra guld av gråsten eller vin av vatten – eller, som i fallet med ljudboken, att läsa utan att läsa. Jag har inget principiellt emot ljudboksformatet, bara man inte kallar det läsning, för det är det inte.</p>\n<p>Provocerande nog kommer sådana utsagor ofta från människor som arbetar med litteratur, och alltså borde kunna skilja på läsning och lyssning, och dessutom borde förstå att lyssningen aldrig kan ersätta den rikedom som läsandet av en bok ger. I <i>Expressen</i> skriver exempelvis Jakob Nilsson: ”Bland ljudbokslyssnarna finns såväl de som annars inte alls hittat fram till litteraturen som de som tidigare konsumerat i huvudsak deckare, bara bytt format.”</p>\n<p>Problemet är att det inte fungerar så. Man råder inte bot på oförmågan att läsa litteratur genom att ta bort läsandet, lika lite som man råder bot på okunskap genom att ta bort det som kallas lärandets smärta, nämligen den förvandling av människan som sker i läsningen och i lärandet, men som är mödosam – därav smärtan – precis som all förändring. Dit kommer man inte när man kör bil, diskar eller försöker somna, utan det kräver fokus och ansträngning.</p>\n<p>En annan sak man inte talar om är att digitaliseringen är en del av en helt ny marknadsekonomi som härstammar från Silicon Valley och som handlar om att teknikföretagen vill få så många människor på planeten som möjligt att streama och vara online för att dela med sig av information om sig själva, som i sin tur bearbetas för att skapa så kallade prediktionsprodukter som samma företag sedan säljer vidare till reklambyråerna så att de kan göra riktade annonser med så hög precision som möjligt.</p>\n<p>Med tanke på denna nya marknadslogik kan man faktiskt fråga sig om ljudboksföretaget Storytels affärsidé ens handlar om ljudböcker. Den gjorde säkert det från början, men numera handlar Storytels affärsidé sannolikt snarare om att få ut så mycket information som möjligt från sina kunder för att sedan tjäna nya pengar med hjälp av dessa data.</p>\n<p>För att detta ska bli så lönsamt som möjligt måste man ha många kanaler öppna mot användarna i form av streamingtjänster och enheter som samlar information. Man kan läsa om det i företagets integritetspolicy som finns på deras hemsida eftersom lagen kräver det, men som ändå ingen läser. Storytel hymlar inte heller med att man också vill komma åt allt innehåll från sina användares Facebook-konton. I sitt policydokument skriver man att man kommer ”att samla in och behandla sådana personuppgifter som du har givit Facebook”. Men som sagt, detta talar man aldrig om när man talar om ljudboken. Om debatten inte handlar om läsning, vilket den borde, så skulle den åtminstone kunna handla om detta.</p>\n<p class=\"forf\">Ola Nilsson</p>\n<p><b>INLÄGG 2</b> Författaren Ola Nilssons text i <i>Aftonbladet</i> i helgen blev en vattendelare. En högljudd debatt fördes snart i en mängd kommentarsfält, och sällan har det varit så tydligt hur diametralt olika människor ser på det växande ljudboksformatet och vad det betyder för litteraturen. Jag har vänner som i princip fastslog att den var det mest sanna som skrivits om litteraturens erbarmliga tillstånd på flera år, medan andra ansåg texten bestå enbart av billigt effektsökeri. Värt att notera – båda extremerna uttrycktes av människor som är professionellt verksamma i bokbranschen.</p>\n<p>Ola Nilssons påpekande att läsning till skillnad från lyssning kräver att man på egen hand för texten framåt är visserligen korrekt, men gör det verkligen att det blir svårare att läsa än att lyssna? Kan det inte lika gärna vara tvärtom? Att hänga med i ett skeende i en lyssnad text som någon annan styr över – är inte det svårare än att med sina egna ögon bestämma över tempo och pauser i sin läsning? Borde det inte vara en lika svår konst att bli en god lyssnare som en god läsare?</p>\n<p>Missförstå mig inte – läsning är livsviktigt, och jag tillhör inte dem som tycker att lyssning och läsning alltid går att likställa och skulle aldrig säga att jag läst en ljudbok (däremot lyssnar jag på ljudböcker dagligen). Men samtidigt – är sysslorna verkligen så väsensskilda som många vill göra gällande?</p>\n<p>Inte för hjärnan, vad det verkar. En ofta citerad forskare är amerikanen Daniel T Willingham, som studerat kognitiva processer vid läsning och lyssning. I en text i <i>New York Times</i> från 2018 beskriver han sysslorna som i stort sett identiska när hjärnan hanterar dem. Men i samma artikel citerar han även en empirisk jämförelsestudie där vissa studenter fick lyssna på en text och andra läsa den. När det sedan blev tentadags visade det sig att de som läst texten kom ihåg betydligt mer.</p>\n<p>Men... då är väl läsning trots allt bättre? Kanske, men inte nödvändigtvis. Skillnaden i prestation skulle också kunna bottna i att vi skolas betydligt mer i att lära oss läsa och tolka skriven text än vi lär oss att på allvar lyssna på och minnas det vi hör – studenterna saknade helt enkelt de rätta verktygen för att bäst komma ihåg och förstå vad de lyssnade på.</p>\n<p>Ja, nu spekulerar jag mest, men det tycker jag nog att Ola Nilsson gjorde i sin artikel också.</p>\n<p class=\"forf\">Daniel Åberg</p>"
    },
    {
     "title": "Fiskodling vid vattenkraftverk",
     "html": "<p>Data från miljöövervakning av svenska inlandsvatten visar att vi de senaste 30 åren har haft en kraftig nedgång av halten närsalter (främst fosfor och kväve). Denna oligotrofiering kan vara positiv i odlingslandskapet och urbana områden, där vi sedan nära 100 år har byggt upp ett stort näringsöverskott. För vatten som avvattnar skog och fjäll, det vill säga majoriteten av våra norrländska älvar, är situationen däremot kritisk. Här ser vi idag att näringshalterna bara fortsätter att minska och nu har nått kritiskt låga nivåer även i de vattendrag som är minst påverkade av människan, med den oreglerade Vindelälven som ett påtagligt exempel. Den förhärskande teorin idag är att denna generella nedgång i näringshalter kan knytas till ett ökat näringsbehov i våra skogar påskyndat av ett varmare klimat och till minskad erosion då allt mer av kalfjället täcks av växter.</p>\n<p>En annan möjlig faktor, som gör situationen än mer allvarlig, har att göra med de naturligt höga halter av aluminium och ökande mängder av järn som förekommer i våra norrländska vatten. Om det inte finns tillgängligt organiskt material i litoralen (strandzonen) som fosfor kan bindas in i, så kommer fosforn att reagera med detta aluminium och järn ute i pelagialen (den fria vattenmassan) och bli biologiskt otillgänglig. I en första pilotstudie i Ströms Vattudals vattenmagasin fann vi att bara en mindre del av fosforn i sedimentet är tillgänglig för biologisk produktion av just den anledningen. Detta var oberoende av om mätningen gjordes uppströms, nedströms eller direkt under den fiskodling som finns där, med den skillnaden att den totala mängden fosfor var större i sedimentprover tagna direkt under fiskodlingen. Denna pilotstudie indikerar att fosfor i sedimentet i dessa miljöer är betydligt hårdare bunden i aluminium och järn än den är i sediment under och nära fiskodlingar i Bottenhavet eller själva Östersjön.</p>\n<p>Hur den sedimentbundna fosforns tillgänglighet kan ändras över tid och med ändringar i miljön i dessa vatten är nu föremål för mer detaljerade studier av forskare vid Sveriges lantbruksuniversitet (SLU). Studierna syftar till att öka förståelsen av de underliggande mekanismerna bakom fosforns omsättning och kretslopp i dessa vatten, liksom av hur en ändrad tillförsel av biologiskt tillgänglig fosfor påverkar fosforns kretslopp och därmed också systemets förutsättningar för biologisk produktion.</p>\n<p>Från långtidsstudier vet vi att närsalterna lakas ut ur kraftverkens vattenmagasin efter en reglering och att de når en topp i pelagialen de första femton åren. Sedan sjunker näringshalterna och stabiliseras på en onaturligt oligotrof nivå, vilket beror på att upprepad och oregelbunden torrläggning av stränderna skadar eller helt slår ut litoralens vegetation och näringsväv. I en naturlig sjö utgör denna zon en viktig och mycket produktiv del av ekosystemet.</p>\n<p>I den produktiva litorala zonen fångas näring in av strandvegetationens bottenlevande alger som i sin tur utgör en födobas för bakterier och andra nedbrytare samt för bottenlevande insekter och kräftdjur som är en viktig födoresurs för många fiskarter.</p>\n<p>Vattenregleringen har med andra ord stöpt om födoväven från litoral till pelagial dominans, vilket annars bara brukar gälla för öppna hav eller mycket stora sjöar med liten landkontakt. Denna förändring i kombination med den generellt sjunkande halten av näringsämnen i alla våra inlandsvatten leder till att vi får en extrem näringsbrist i våra kraftverksdammar med minskad biologisk produktivitet och mångfald som följd. Detta begränsar i sin tur fiskens födotillgång och skapar populationer av tusenbröder, det vill säga små och långsamväxande individer.</p>\n<p>Ett undantag från sådana ekosystemeffekter i dessa onaturligt oligotrofa vatten tycks nu skönjas i magasin som länge har haft öppen fiskodling, med andra ord vatten där det kontinuerligt och under lång tid har tillförts organiskt tillgänglig näring. Detta stämmer väl överens med såväl svenska som nordamerikanska studier där man tillfört konstgödning till kraftverksdammar och fått en signifikant och positiv ökning av den biologiska produktionen. En central målsättning är därför att utvärdera om biologiskt tillgänglig näring från fiskodling kan öka ekosystemets produktivitet och därmed tillväxten hos de vilda fiskbestånden, kopplat till en ökning av pelagiska mikroalger och bakterier. Det skulle i så fall kunna utgöra ett alternativ till den föda som i en naturlig sjö kommer från litoralen, vilken i reglerade kraftverksdammar är permanent utslagen.</p>\n<p>Med andra ord skulle fiskodlingen kunna utföra en miljötjänst. Detta är speciellt intressant då ny forskning visar att fiskarnas gödsel utöver näringsämnen innehåller biologiskt aktiva metaboliter som producerats av deras tarmbakterier. Metaboliterna har en direkt påverkan på växters genetiska uttryck, stimulerar tillväxten och kan dessutom fungera som ”probiotika” för växterna. Detta tycks även gälla för mikroalger som utgör basen i den pelagiska födokedjan som vi ser dominera system med förstörd litoral. Det kanske inte är en slump att människan i många tusen år har kombinerat fisk- och växtodling, där kombinationen fisk- och risodling i Sydostasien kanske är det äldsta och mest välkända exemplet.</p>\n<p>Dagens kraftverksdammar är alla äldre och släpper inte längre ut betydande mängder näring nedströms, utan suger tvärtom girigt i sig den lilla mängd näring som finns för biologisk produktion. Historiskt återförde dåtidens stora populationer av vandringsfisk näring från havet till inlandet, men minskade vildpopulationer och kraftverksdammarnas vandringshinder begränsar i dagsläget detta.</p>\n<p>Fiskodling baserad på kretsloppsbaserade foderråvaror som till del hämtas från Östersjön och dess avrinningsområde skulle till viss del kunna återställa en sådan historisk näringstransport. Lars Ove Eriksson, tidigare professor i Akvakultur vid SLU, kallade detta för ”Robin Hood-effekten”, det vill säga att ta från de rika och ge till de fattiga. På senare tid har forskare vid SLU genomfört en rad större projekt, dels tillsammans med våra grannländer runt Östersjön, dels i nationella projekt som 5 ton grön fisk i disk (5TFiD). Dessa projekt har visat att det är fullt möjligt, både ekonomiskt och praktiskt, att ta fram ett konkurrenskraftigt fiskfoder av hög kvalitet från lokala foderråvaror, där varje kilo foder minskar näringsbelastningen i Östersjön.</p>\n<p class=\"forf\">Anders Kiessling och Martyn Futter</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vilket är det huvudsakliga målet med den studie som presenteras i texten?",
     "options": [
      "Att ta reda på vilken betydelse undervisningsformen har för ämnet samhällskunskap.",
      "Att ta reda på hur väl ämnet samhällskunskap lämpar sig för utbildning i så kallad medborgarkompetens.",
      "Att ta reda på hur mycket elevers engagemang påverkar deras kunskaper i samhällsfrågor.",
      "Att ta reda på om förändringen av gymnasieskolan påverkar elevers samhällsengagemang."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vad tycks ha stått i fokus vid utformningen av den skolreform som texten tar upp?",
     "options": [
      "Elevernas framtida arbetsliv.",
      "En stärkt demokrati.",
      "Kunskaperna i teoretiska ämnen.",
      "Skolans fostrande uppdrag."
     ],
     "correct": 0,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vilket påstående sammanfattar bäst vad Ola Nilsson signalerar med sin text?",
     "options": [
      "Ljudboksmarknaden behöver regleras.",
      "Ljudboksförlagen satsar inte på kvalitetslitteratur.",
      "Det är bättre att läsa böcker än att lyssna på dem.",
      "Det är meningslöst att debattera ljudboken."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Ola Nilsson menar att den tryckta boken saknar ”gravitation”. Hur kan man bäst sammanfatta Daniel Åbergs svar på detta?",
     "options": [
      "Ljudboken aktiverar andra sinnen vilket underlättar inlärningen.",
      "Att lyssna på en bok kräver också en arbetsinsats, inte helt olik den att läsa.",
      "Det viktiga är litteraturens innehåll, inte hur det presenteras.",
      "Att lyssna och att läsa är helt olika aktiviteter som inte kan jämföras."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vad vill Daniel Åberg få sagt angående resultatet i den empiriska jämförelsestudie som han refererar till?",
     "options": [
      "Att resultatet kan vara en följd av läsningens höga status i skolan.",
      "Att resultatet visar på studenters skilda förutsättningar.",
      "Att resultatet tyder på att läsning och lyssning är likartade processer.",
      "Att resultatet bevisar att läsning är den bästa inlärningsmetoden."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Vilken funktion fyller den sista meningen i Daniel Åbergs text?",
     "options": [
      "Den sammanfattar hans resonemang.",
      "Den nyanserar hans i övrigt ensidiga argumentation.",
      "Den synliggör att han och Ola Nilsson egentligen är ganska överens.",
      "Den skapar en viss distans till diskussionen som helhet."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Vad anges i texten som en orsak till att näringshalterna i Vindelälven och andra norrländska inlandsvatten har förändrats?",
     "options": [
      "En ökad mängd näring har tagits upp av skogens växtlighet.",
      "Anlagda kraftverksdammar har ökat mängden järn och aluminium i vattendragen.",
      "Fiskodlingar har krävt allt större mängder näring.",
      "Ett varmare klimat har ökat strandvegetationens utbredning."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Vad är enligt texten orsaken till att mycket av fosforn i Ströms Vattudal inte är tillgänglig för biologisk produktion?",
     "options": [
      "Avsaknaden av vegetation i litoralen.",
      "Den ökande halten aluminium i pelagialen.",
      "Att fosforn är bunden i organiskt material.",
      "Att fosforn har koncentrerats till bottenmiljön vid fiskodlingen."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Hur beskriver man bäst, utifrån texten, relationen mellan vattenreglering och fiskodling om man ser till näringsinnehållet i en kraftverksdamm?",
     "options": [
      "Vattenregleringen kan förvärra fiskodlingens negativa effekter.",
      "Vattenregleringen kan påskynda fiskodlingens positiva effekter.",
      "Fiskodlingen kan motverka vattenregleringens positiva effekter.",
      "Fiskodlingen kan kompensera för vattenregleringens negativa effekter."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Vilken frågeställning står i centrum för texten?",
     "options": [
      "Hur minskar vi Östersjöns näringsöverskott?",
      "Hur kan svenska inlandsvatten bli mer näringsrika?",
      "Hur utvecklas vilda fiskbestånd i näringsfattigt vatten?",
      "Hur kan näringen i svenska inlandsvatten utnyttjas bäst?"
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
     "text": "Precis som vanligt te är örtte en så kallad _____, vilket innebär att man låter blad eller andra växtdelar dra i varmt vatten för att få ut smakämnena.",
     "options": [
      "inkarnation",
      "infusion",
      "induktion",
      "inversion"
     ],
     "correct": 1
    },
    {
     "num": 22,
     "text": "Första gången landsnamnet Sverige förekommer i _____, stavat <i>Swerighe</i>, är i en _____ från Kalmar, daterad 1384.",
     "options": [
      "original – bikt",
      "klartext – kopia",
      "skrift – urkund",
      "citat – post"
     ],
     "correct": 2
    },
    {
     "num": 23,
     "text": "Sven Lindqvist bygger ett författarskap där varje ny bok tycks ta vid där den _____ slutade. Så upplever sig läsaren vara inbjuden till en resa, vars _____ tills vidare är oviss men med tiden kommer att framstå som självklar mot bakgrund av hur resan startade. Då uppstår den känsla av _____ som kanske utgör den verkliga nerven i Lindqvists författarskap, när man tar del av det i dess helhet.",
     "options": [
      "andra – färdriktning – framtidstro",
      "tidigare – utgångspunkt – tvetydighet",
      "dessförinnan – grundbetydelse – desperation",
      "föregående – slutdestination – kontinuitet"
     ],
     "correct": 3
    },
    {
     "num": 24,
     "text": "Ett klassiskt debattknep i politiken, som dock är ett brott mot vetenskaplig metod, är att ”_____”. Med uttrycket menas att man bara refererar utvalda delar av den samlade forskningen, i form av _____ citat som stöder den egna uppfattningen, medan övrigt förbises.",
     "options": [
      "låta udda vara jämnt – obetydliga",
      "koka soppa på en spik – påhittade",
      "blanda äpplen och päron – motsägelsefulla",
      "plocka russinen ur kakan – lösryckta"
     ],
     "correct": 3
    },
    {
     "num": 25,
     "text": "Namnförkortningar på företag, organisationer och _____ som uttalas som ord skrivs med versal begynnelsebokstav: Ikea, Jas, Nato, Sida.",
     "options": [
      "egenheter",
      "koncept",
      "dylikt",
      "dito"
     ],
     "correct": 2
    },
    {
     "num": 26,
     "text": "I Japan rekryteras ofta ny personal redan när de går i skolan, och de anställda stannar i regel i samma företag till pensionen. I tyst _____ mellan anställda och ledning har företagen _____ sig att behålla sin personal även under kärvare tider.",
     "options": [
      "förbindelse – ålagt",
      "medgivande – utfäst",
      "samförstånd – åtagit",
      "uppgörelse – utlyst"
     ],
     "correct": 2
    },
    {
     "num": 27,
     "text": "Det är _____ att många av pidginspråken har liknande grammatiska konstruktioner, trots att deras vokabulärer kan härröra från helt olika språk. Det finns ingen enig uppfattning om orsakerna till dessa likheter.",
     "options": [
      "påfallande",
      "oberäkneligt",
      "underförstått",
      "slumpmässigt"
     ],
     "correct": 0
    },
    {
     "num": 28,
     "text": "Den professionella lobbyismens expansion har skapat _____ för en ny typ av politisk _____ med mycket svaga band till vanliga medborgare. När politiskt förtroendekapital förvandlas till en vara på en marknad undergrävs _____ politikerna, partierna och demokratin.",
     "options": [
      "en grogrund – elit – tilliten till",
      "en hållhake – medelklass – föraktet för",
      "ett andrum – agenda – synen på",
      "en hävstång – ledning – avståndet till"
     ],
     "correct": 0
    },
    {
     "num": 29,
     "text": "Markförberedelserna inför omplantering inkluderar traditionellt att marken läggs i _____ eller används för andra _____ i flera år.",
     "options": [
      "odling – sysslor",
      "träda – grödor",
      "skifte – åkrar",
      "drift – bruk"
     ],
     "correct": 1
    },
    {
     "num": 30,
     "text": "Majoriteten av de nyinsjuknade psykospatienterna förbättras, men vissa får kvarstående restsymtom och sänkt funktionsnivå. För andra får sjukdomen ett episodiskt förlopp med restsymtom mellan _____.",
     "options": [
      "skoven",
      "avbrotten",
      "ingreppen",
      "tillstånden"
     ],
     "correct": 0
    }
   ]
  }
 ]
};
