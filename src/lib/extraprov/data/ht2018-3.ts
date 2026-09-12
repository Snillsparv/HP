// Högskoleprovet 21 oktober 2018, provpass 3 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "ht2018-3",
 "tillfalle": "ht2018",
 "passNr": 3,
 "kind": "verbal",
 "name": "Provpass 3 (verbalt)",
 "timeMinutes": 33,
 "extendedMinutes": 48,
 "normering": [
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
   43,
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
     "word": "moralisera",
     "text": "<b>moralisera</b>",
     "options": [
      "ta ställning för något",
      "uppmuntra",
      "följa regler",
      "godkänna",
      "predika rätt och fel"
     ],
     "correct": 4
    },
    {
     "num": 2,
     "word": "okular",
     "text": "<b>okular</b>",
     "options": [
      "stativ",
      "lins",
      "platta",
      "lock",
      "kapsel"
     ],
     "correct": 1
    },
    {
     "num": 3,
     "word": "på måfå",
     "text": "<b>på måfå</b>",
     "options": [
      "oaktsamt",
      "vanemässigt",
      "fumligt",
      "slumpmässigt",
      "tankspritt"
     ],
     "correct": 3
    },
    {
     "num": 4,
     "word": "mausoleum",
     "text": "<b>mausoleum</b>",
     "options": [
      "gravbyggnad",
      "kyrkoarkiv",
      "slottsruin",
      "pelargång",
      "vapenförråd"
     ],
     "correct": 0
    },
    {
     "num": 5,
     "word": "inskränkt",
     "text": "<b>inskränkt</b>",
     "options": [
      "fokuserad",
      "utesluten",
      "begränsad",
      "ihopslagen",
      "invecklad"
     ],
     "correct": 2
    },
    {
     "num": 6,
     "word": "skenrättegång",
     "text": "<b>skenrättegång</b>",
     "options": [
      "utdragen rättegång",
      "rättegång utan domare",
      "direktsänd rättegång",
      "rättegång avgjord på förhand",
      "snabb rättegång"
     ],
     "correct": 3
    },
    {
     "num": 7,
     "word": "vara under uppsegling",
     "text": "<b>vara under uppsegling</b>",
     "options": [
      "närma sig",
      "vara bevakad",
      "vänta på sin tur",
      "vara på sin vakt",
      "lära sig"
     ],
     "correct": 0
    },
    {
     "num": 8,
     "word": "signum",
     "text": "<b>signum</b>",
     "options": [
      "framtoning",
      "klartecken",
      "särmärke",
      "föreskrift",
      "täcknamn"
     ],
     "correct": 2
    },
    {
     "num": 9,
     "word": "avart",
     "text": "<b>avart</b>",
     "options": [
      "orättvis kritik",
      "falskt rykte",
      "tung börda",
      "snabbt slut",
      "sämre variant"
     ],
     "correct": 4
    },
    {
     "num": 10,
     "word": "enahanda",
     "text": "<b>enahanda</b>",
     "options": [
      "ensam",
      "enväldig",
      "enig",
      "enformig",
      "enkel"
     ],
     "correct": 3
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
     "title": "Fördomar om fetma",
     "html": "<p>Stigmatisering anses vara en starkt bidragande faktor till hälsoskillnader i en befolkning. Det skulle kunna innebära att fetmans hälsokonsekvenser inte bara är orsakade av fetman som sådan utan också av den stigmatisering som personer med fetma ofta får utstå. Det övergripande syftet med avhandlingen <i>Obesity and stigma: studies on children, adults and health care professionals</i> var att undersöka fetma och stigmatisering utifrån barns, vuxnas och vårdpersonals perspektiv.</p>\n<p>Avhandlingen består av fyra delstudier, vilka inkluderar populationsbaserade material bestående av en grupp 10-åriga barn i sällskap med en förälder (n=1 400), en grupp vuxna (n=2 600) samt ett strategiskt urval av allmänläkare och distriktssköterskor (n=20).</p>\n<p>Studie I visade att det är signifikant större sannolikhet att barn har fördomar om fetma än om normalvikt eller undervikt. Variationen i barns fördomar kunde förklaras av barnets kön samt kroppsstorlek och kön på den figur som bedömdes. Barn från socioekonomiskt goda förhållanden rapporterade i större utsträckning fördomar om fetma än barn från socioekonomiskt sämre förhållanden.</p>\n<p>Studie II visade att ju mer negativ kroppsuppfattning 10-åringarna har, desto fler stereotyper har de om fetma. Styrkan i sambandet varierade dock med kön på den som bedömde och kön på den som blev bedömd. Om föräldern hade en stark tro på personligt ansvar för fetma så angav barnet fler stereotyper om fetma, medan större kroppsstorlek hos föräldern betydde att barnet angav färre stereotyper. Barnets egen vikt hade inget samband med antalet stereotyper.</p>\n<p>Studie III visade att kvinnor med svår fetma (BMI &gt; 35) rapporterade upplevd diskriminering oftare än kvinnor med normalvikt. Detta samband fanns i alla undersökta sammanhang, det vill säga i arbetslivet, i hälso- och sjukvården och i interpersonella möten. Hur graden av fetma påverkade diskriminering bland män var mer beroende av sammanhang. Till exempel rapporterade män med moderat fetma (BMI 30–34,9) oftare upplevd diskriminering i arbetslivet än vad män med normalvikt eller svår fetma gjorde.</p>\n<p>Studie IV visade att allmänläkare och distriktssköterskor beskrev mötet med patienter med fetma utifrån ett organisatoriskt perspektiv samt ur personal- och patientperspektiv. Utfallsrummet bestod av fem distinkt skilda beskrivningskategorier: Adekvat primärvård, Främja livsstilsförändring, Behov av kompetens, Hålla fast vid nya vanor samt Patientens förhållningssätt. Det sistnämnda var något vårdpersonalen ansåg var speciellt problematiskt att hantera i mötet med patienten.</p>\n<p>Resultaten i denna avhandling visar att fetma är ett stigmatiserande attribut i det svenska samhället, men att den sociala kontexten och den sociala identiteten har betydelse. Resultaten kan ge nya idéer om hur stereotyper om barns fetma kan mildras. Kunskapen om vårdpersonals skilda uppfattningar om mötet med patienter med fetma kan användas för att förbättra bemötandet i vården.</p>\n<p class=\"forf\">Lena M. Hansson</p>"
    },
    {
     "title": "Det Bästa",
     "html": "<p>En av de största tidskriftsframgångarna i USA, <i>Reader’s Digest</i>, utkom redan 1943 på svenska som <i>Det Bästa</i>. Framgångsreceptet var inte eskapism, än mindre mode och sex, utan i stället moral och politik.</p>\n<p>I USA utkom <i>Reader’s Digest</i> redan 1922. Tidskriften vände sig till den växande medelklassen och marknadsfördes som ett ”fickuniversitet”.</p>\n<p>Grundaren DeWitt Wallace förkroppsligar den amerikanska drömmen om den fattige pojken som blir miljonär. Han och hans fru Lila Bell Wallace producerade det första numret av tidskriften i sitt hem i Pleasantville. Var annars, är det frestande att säga. Namnet Pleasantville står som symbol för en idyllisk amerikansk småstadslivsstil. I sin bok <i>Condensing the Cold War. Reader’s Digest and American Identity</i> skriver Joanne P. Sharp att om inte Pleasantville existerat hade <i>Reader’s Digest</i> uppfunnit staden.</p>\n<p>Tidskriftens innehåll är förutsägbart, menar Sharp. I varje nummer finns artiklar om aktuella händelser, där den enskilda människans öde sätts i fokus. Artiklarna handlar om mod i farofyllda situationer, osjälviska handlingar, försakelser och vedermödor. Resebeskrivningar, humor och noveller ingår också. Konceptet är genialt enkelt, nämligen sammanfattningar. Artiklar från andra tidningar förkortas och koncentreras. Timmar ägnas åt att skära ned en text till ett minimum. När tidskriften introducerades i Sverige presenterades den som en läsetjänst, ”som väljer ut det bästa ur den störtflod av artiklar och böcker som översvämmar världen”. Kunskap skulle göras lättillgänglig för den som inte hade intresse av att ägna sig åt mer intellektuella resonemang. DeWitt Wallace betraktade traditionell journalistik som mångordig och svamlig. Den moderna konsumenten behövde enligt honom bara objektiva fakta.</p>\n<p>Objektivitet, eller rättare sagt känslan av objektivitet, åstadkommer man enligt Sharp dels genom att använda ett faktaspråk, dels genom att skapa en illusion av att redaktörerna omsorgsfullt väljer ut ”det bästa” från andra tidskrifter utan att ta politiska hänsyn. I tidskriften refereras till ett omfattande material, vilket ger intryck av att båda sidor får komma till tals. Begreppet sanning har stor auktoritet. Men <i>Reader’s Digest</i> befinner sig långt från det objektivistiska idealet. I stället genomsyras den av ett envetet försvar av amerikanska värderingar. USA är politiskt och moraliskt normerande. Den klassiska amerikanska historien om heroiska pionjärer omgivna av vilda indianer får i <i>Reader’s Digests</i> värld en ny utformning. Kommunister ersätter indianer.</p>\n<p>Hotet mot den fria världen utgjordes av Sovjetunionen och kommunismen, även om hotbildens intensitet var beroende av politiska konjunkturer. Under större delen av mellankrigstiden visade <i>Reader’s Digest</i> stor förståelse för utvecklingen i Sovjetunionen. Den ryska revolutionen betraktades som en naturlig reaktion mot tsardömet. Enligt Sharp hyllades Stalin för sin hängivenhet och sitt hårda arbete. Utrensningarna av motståndare förklarades med att han försvarade ett djärvt politiskt program.</p>\n<p>I mitten av 1930-talet växte kritiken av Sovjetunionen. Stalin jämfördes med Hitler och Mussolini. Under andra världskrigets senare hälft fick Sovjetunionen som allierad i kampen mot nazismen förvisso en renässans. Den ryske soldatens mod hyllades. Men efter krigsslutet förbyttes hyllningarna snabbt i en inbiten och oförsonlig antikommunism. Beskrivningar av svält, Gulag och terror dominerade. Sovjetunionen anklagades för att ha dolt sina grymheter och sin brutalitet för granskning utifrån. Samtidigt fanns det motsägelser i beskrivningarna. Sovjetunionen betraktades som både militärt överlägset och hopplöst ineffektivt. Sjukdomsbilder var vanligt förekommande i tidskriftens metaforik. Kommunismen beskrevs som en cancersvulst. Motstånd mot kommunismen jämfördes med kroppens naturliga reaktion mot virusinfektioner.</p>\n<p><i>Reader’s Digest</i> såg blott två politiska alternativ – demokrati och kommunism. I det kalla krigets scenario fanns det ingen tredje väg. Och endast en kunde segra. Sharp menar att redaktörerna försökte förstå Sovjetunionen, men att de inte förmådde göra det utanför den rådande diskursen i västvärlden. Sovjetunionen var totalitärt och USA stod för frihet i en bipolär värld där det inte fanns grå zoner.</p>\n<p><i>Reader’s Digest</i> byggde sin världsbild på det kalla krigets föreställningsvärld. Allt sedan Berlinmurens fall 1989 har tidskriften liksom USA försökt att omdefiniera sin roll. USA:s globala moraliska ledarskap för den fria världen är enligt <i>Reader’s Digest</i> inte längre lika självklart. Det amerikanska folket anses ha övergett sin historiska roll. Knarkmissbruk, terrorism, islamisk fundamentalism och kärnfamiljens upplösning ingår i tidskriftens nya hotbilder.</p>\n<p>Det antikommunistiska budskapet i <i>Reader’s Digest</i> går inte att ta miste på. Formuleringarna är övertydliga. Men Sharp uppmärksammar också tidskriftens mer grundläggande retoriska strategier. Med begrepp som sunt förnuft, individualism och optimism delas världen upp i ont och gott. Det får världen att verka enkel och kontrollerbar. Komplexitet ryms inte i <i>Reader’s Digests</i> definition av sunt förnuft. Samhälleliga förhållanden tolkas med hjälp av tankefigurerna naturlig och onaturlig för att låta läsarna förstå vad som är rätt och fel.</p>\n<p>Individualismen är också framträdande. I tidskriften är det individer som triumferar i den amerikanska demokratin. Att det skulle finnas strukturella hinder för individens handlande avfärdas. Utgångspunkten är den amerikanska myten där den enskilda individens framgång bygger på sunt förnuft och hårt arbete. Misslyckande förknippas med dåliga råd, håglöshet och lathet – typiska företeelser i det sovjetiska samhället. <i>Reader’s Digest</i> genomsyras likaledes av ett optimistiskt tänkande. Pessimism och kritik avfärdas som destruktiva krafter. Tidskriftens dyrkan av den amerikanska livssynen handlar inte minst om optimismen i denna livssyn.</p>\n<p>I sin analys av <i>Reader’s Digest</i> identifierar Sharp tankemönster som ger mening i människors liv och styr deras handlande. Med utgångspunkt i tidskriftens politiska och moraliska budskap frilägger hon meningsskapande förlopp i västvärldens politiska kultur under efterkrigstiden.</p>\n<p>Värderingar som accepteras som naturliga, oproblematiska och självklara i den populärkulturella sfären utnyttjas mer eller mindre manipulativt av politiska ledare. President Ronald Reagan citerade flitigt <i>Reader’s Digest</i>. Kommunismen utgjorde förstås med sina internationella ambitioner ett reellt hot mot västvärldens liberal-demokratiska system. Sovjetunionen var aggressivt och imperialistiskt. Det är en verklighet som vi inte får bortse från. Men för Sharp handlar det också om hur antikommunismen kunde bli till masshysteri i ett land där kommunisterna aldrig fick mer än en halv procent av rösterna.</p>\n<p><i>Reader’s Digest</i> utgör en sinnebild för västvärldens moraliska och politiska mission. Tidskriften skapade förvisso inte det kalla kriget. Men dess iscensättning av efterkrigstidens moraliska och politiska debatt var framgångsrik.</p>\n<p class=\"forf\">Kim Salomon</p>"
    },
    {
     "title": "Tio år eller livstid",
     "html": "<p>Några funderingar med anledning av en dom i Högsta domstolen den 30 mars 2007.</p>\n<p>Det straffrättsliga påföljdssystemet och påföljdsbestämningsreglerna i svensk rätt vilar på två disparata bestraffningsideologier. Påföljdssystemet som sådant formades under ett tydligt inflytande av förespråkarna för den s.k. behandlingsideologin, som i Sverige, jämfört med närliggande länder, fick ett mycket starkt genomslag. Däremot infördes vid brottsbalkens tillkomst inga påföljdsbestämningsregler att tala om, med undantag av en allmänt hållen och numera upphävd bestämmelse i brottsbalkens 1 kap. 7 §. Regeln gav uttryck för en i första hand individualpreventiv syn på påföljdsbestämningen.</p>\n<p>Vid påföljdsreformen år 1989 infördes proportionalitetsprincipen som den styrande principen för påföljdsbestämningen. Principen innebär att straff i grunden skall bestämmas i relation till brottets straffvärde, dvs., något förenklat uttryckt, i relation till brottets svårhet och klandervärdhet, inom ramen för den straffskala som lagstiftaren försett brottstypen i fråga med. Reformen har, efter en initial osäkerhet, slagit igenom väl, trots att den har tillämpats och tillämpas inom ramen för ett påföljdssystem som egentligen grundas på helt andra utgångspunkter.</p>\n<p>En förutsättning för att kunna tillämpa proportionalitetsprincipen vid påföljdsbestämningen är att straffskalorna för de enskilda kriminaliserade handlingarna har en spännvidd som möjliggör en differentiering av den straffrättsliga reaktionen i relation till brottets svårhet i det enskilda fallet (det konkreta straffvärdet). Detta krav är i allmänhet uppfyllt tvärs igenom hela straffrätten även om man i och för sig kan diskutera hur väl motiverade eller vettiga straffskalorna för vissa brottstyper är.</p>\n<p>Proportionalitetsprincipen kan alltså beaktas vid i princip alla brott – med ett undantag. Det straff som lagstiftaren föreskriver för mord är antingen tio års fängelse eller fängelse på livstid. Detta innebär att utrymmet för att bestämma straff för mord i förhållande till brottets konkreta straffvärde är starkt begränsat. Domstolarna har enbart två alternativ att välja mellan, samtidigt som gapet mellan de två alternativen känns mycket stort. Ytterligare en aspekt som bör nämnas är att tio års fängelse (eller ett snäpp lägre fängelsestraff) inte så sällan döms ut för andra brott än mord, som narkotikabrott, vissa grova sexualbrott etc. Även om det rör sig om grov brottslighet är det ändå svårt att jämföra de värden som står på spel vid t.ex. narkotikabrottslighet med att ett liv oåterkalleligt upphört samt med det lidande som anhöriga till offret skall gå igenom.</p>\n<p>Vad jag vill komma fram till är att även om domstolarna har att döma inom ramen för den tillämpliga straffskalan (som i detta fall reduceras till två alternativ), och även om jämförelse mellan olika brottstyper i första hand är lagstiftarens sak, är det svårt att undvika att man vid bedömningen av vilket straff för mord som kan anses proportionerligt beaktar också hur stränga straff som döms ut för andra brottstyper. Ytterligare en aspekt av betydelse i detta sammanhang torde vara att en domare som dömer ut fängelse på livstid vet att det i själva verket är ett straff på (numera) 18–25 år, ej på livstid.</p>\n<p>Det är mot bakgrund av dessa tankar jag läser Högsta domstolens avgörande. Den tilltalade i målet dömdes för uppsåtligt dödande av sin sambo. Gärningen bedömdes i alla instanser som mord. Hovrätten dömde mannen till tio års fängelse. Åklagaren överklagade domen och yrkade att mannen skulle dömas till fängelse på livstid. Högsta domstolen fastställer hovrättens dom. Högsta domstolen konstaterar, med hänvisning till tidigare praxis, att livstidsstraff inte kan betraktas som den normala påföljden för mord, utan att en samlad bedömning av omständigheterna i varje särskilt fall skall göras. En sådan bedömning i detta fall ger inte anledning att döma till livstidsstraff.</p>\n<p>Hade Högsta domstolen stannat vid detta skulle man kunna undra varför fallet tagits upp till prövning. Det är dock i en annan del av domen som man hittar svaret. Med utgångspunkt i statistiska uppgifter sammanfattar Högsta domstolen utvecklingen när det gäller tillämpning av livstidsstraff. För det första konstateras att antalet livstidsdömda ökat från början av 1990-talet och att de som döms till livstid numera är fler än de som döms till tidsbestämt straff, dvs. tio år. För det andra konstaterar Högsta domstolen att medan längden på de livstidsstraff som regeringen tidsbestämde efter nådeansökan under tiden före 1993 uppgick till mellan 12 och 16 år, så är praxis efter 1994 sådan att straffen bestäms till mellan 18 och 25 år.</p>\n<p>Domen kan inte missförstås. Vad Högsta domstolen uppenbarligen har i sikte är att bromsa den utveckling som man redogör för. Det är en klar signal riktad till de domstolar som har att bestämma påföljd för mord.</p>\n<p>Men kanske är det också en signal till Örebro tingsrätt, som sedan slutet av förra året handlägger ärenden enligt lag (2006:45) om omvandling av fängelse på livstid, att tingsrätten vid tillämpningen av den lagen inte så noga behöver följa regeringens nådepraxis från senare år.</p>\n<p>När det gäller den skärpta påföljdspraxis som kan iakttas vid påföljdsbestämningen i domstolarna, och som nämns i den nu aktuella domen, menar jag att den förekomst av två disparata bestraffningsideologier som jag berört inledningsvis ger en delförklaring till praxisändringen. Det kanske var något lättare att bortse från det egendomliga i att döma till samma straff för mord och, låt oss säga, narkotikabrott, om man ensidigt var inriktad på gärningsmannens förutsättningar till återanpassning samt på andra individrelaterade omständigheter. Fokuserar man i stället på brottets svårhet, vikten av de intressen som angrips och de konsekvenser som brottet fått, förändras bilden. Med andra ord har troligen det fördjupade proportionalitetstänkandet sedan påföljdsreformen 1989 lett till att domstolarna upplever det som otillfredsställande, kanske orättvist, att döma till samma eller liknande straff för mord och andra i ett visst perspektiv mindre ödesdigra brott. Det är möjligen därför som man nu oftare väljer livstidsstraff än förr. Straff på tio års fängelse upplevs som för lågt i jämförelse med straff för andra brott.</p>\n<p>I detta sammanhang kan påpekas att när Högsta domstolen i det aktuella fallet tar upp frågan huruvida ett normalt straff för mord skall vara livstidsstraff eller fängelse på viss tid (tio år) nämns inte ett uttalande i propositionen som kan anses relevant i detta sammanhang. Det framgår av propositionen att man räknade med att de som begått grova brott och var ”oemottagliga eller föga mottagliga för straff” kunde dömas till internering enligt dåvarande kap. 30 och på det sättet hållas inne längre tid än tio år (prop. 1962:10 C vol. 1, s. 238). Man utgick alltså från att det fanns något mellan tio års fängelse och livstidsstraff i de fall där brotten var grova men ändå inte motiverade livstidsstraff. Sedan 1980 har denna möjlighet inte funnits.</p>\n<p>Det går alltså att hitta möjliga förklaringar till att domstolarna efter reformen 1989 i större omfattning började tillämpa livstidsstraff. Varför regeringen utvecklat en strängare praxis för beviljande av nåd är svårare att säga. Kanske måste svaret sökas på andra områden än inom rättsskipningen.</p>\n<p class=\"forf\">Josef Zila</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vilket av följande motiv till att studera fördomar om fetma nämns i texten?",
     "options": [
      "Personer med fetma upplever vårdens bemötande som fördomsfullt.",
      "Fördomar kan bidra till att försämra hälsan hos personer med fetma.",
      "Stigmatisering kan få personer med fetma att acceptera diskriminering.",
      "Den ökande fetman leder till ökad diskriminering av personer med fetma."
     ],
     "correct": 1,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vilket av följande framkommer i avhandlingen, enligt texten?",
     "options": [
      "Att föräldrar ser mindre fördomsfullt på fetma om de själva har överviktiga barn.",
      "Att barn i större utsträckning än vuxna har förutfattade meningar om personer med fetma.",
      "Att det finns skillnader mellan hur män med fetma och kvinnor med fetma upplever diskriminering.",
      "Att vårdpersonal anser sig behöva mer kunskap om hur patienters fetma ska behandlas."
     ],
     "correct": 2,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vad är enligt texten utmärkande för artiklarna i <i>Reader’s Digest</i>?",
     "options": [
      "Opartiskhet och tillförlitlighet.",
      "Koncentration och förenkling.",
      "Granskning och analys.",
      "Humor och lättsamhet."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Hur kan man utifrån texten bäst beskriva den bild som <i>Reader’s Digest</i> gav av Sovjetunionen under mellankrigstiden?",
     "options": [
      "Sympatin följdes efter hand av en mer kritisk hållning.",
      "Kritiken avtog när nazismen började framstå som en gemensam fiende.",
      "Kritiken bestod även om argumenten förändrades.",
      "Den första misstron ersattes av en större förståelse."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Hur kan man, enligt texten, bäst beskriva den världsbild som <i>Reader’s Digest</i> har gett uttryck för?",
     "options": [
      "Objektiv.",
      "Osammanhängande.",
      "Svartvit.",
      "Nyansrik."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Hur kan man, utifrån Kim Salomons referat, bäst karakterisera Joanne P. Sharps studie av <i>Reader’s Digest</i>?",
     "options": [
      "Som en neutral bearbetning.",
      "Som en vinklad betraktelse.",
      "Som en välvillig presentation.",
      "Som en kritisk analys."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Vilken förändring innebar den reform från 1989 som beskrivs i texten?",
     "options": [
      "Att behandlingsideologin fick större inflytande över bestämningen av rättsliga påföljder.",
      "Att alla gamla riktlinjer för bestämning av rättsliga påföljder avskaffades.",
      "Att bestämningen av rättsliga påföljder anpassades till en proportionalitetsprincip.",
      "Att bestämningen av rättsliga påföljder blev mindre reglerad och mer fri."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Hur tolkar textförfattaren Högsta domstolens dom i det aktuella fallet?",
     "options": [
      "Som en invändning mot att påföljdspraxis vid mord har förändrats på senare år.",
      "Som en uppmaning till rättsväsendet att återuppliva den gamla behandlingsideologin.",
      "Som en invändning mot att det saknas en bestämd nådepraxis vid livstidsdomar.",
      "Som en uppmaning till regeringen att avskaffa proportionalitetsprincipen."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Vad ser textförfattaren som ett grundproblem när påföljden för mord ska bestämmas?",
     "options": [
      "Variationen i straffskalan för mord är för liten för att proportionalitetsprincipen ska kunna tillämpas vid påföljdsbestämningen.",
      "Bestämningen av påföljd sker genom att mord jämförs med varandra – inte med andra, närliggande brott.",
      "Bristen på alternativ till den gamla straffskalan för mord gör påföljdsbestämningen godtycklig och inkonsekvent.",
      "Domstolarna bortser från den dömdes chans till återanpassning och bestämmer påföljd enbart utifrån brottets svårighetsgrad."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Hur kunde påföljden internering fungera fram till 1980, av texten att döma?",
     "options": [
      "Som en tillfällig nödlösning.",
      "Som ett längre livstidsstraff.",
      "Som en praktisk medelväg.",
      "Som ett alternativ till behandling."
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
     "text": "I skafferiet stod också separatorn, som separerade mjölken så att det blev grädde och skummjölk. Av grädden _____ man smör, och till julen gjorde mamma sötost av oskummad sötmjölk, berättar Maj-Len, född 1947.",
     "options": [
      "kärnade",
      "skummade",
      "ystade",
      "pastöriserade"
     ],
     "correct": 0
    },
    {
     "num": 22,
     "text": "Min musik har en _____ och en ärlighet. I Nashville är det idag _____ att försöka se ut som tjugo eller tjugofem. Själv är jag trettiosex och vill inte låtsas som något annat.",
     "options": [
      "skönjbarhet – utmanande",
      "kollektivitet – anständigt",
      "autenticitet – kutym",
      "generositet – absolut"
     ],
     "correct": 2
    },
    {
     "num": 23,
     "text": "De mest gynnsamma förhållandena för bildandet av snörullar är hård vind över nysnö, gärna i töväder och med _____ som underlag. Rullar bildas alltså när _____ får tag i en liten flik av snön som sedan rullas vidare. Det bör också vara plana ytor. Vinden kan dessutom _____ ett sluttande underlag.",
     "options": [
      "is – regnet – hindras av",
      "snö – snöfallet – byta riktning på",
      "skare – vinden – få hjälp av",
      "barmark – nederbörden – öka i styrka på"
     ],
     "correct": 2
    },
    {
     "num": 24,
     "text": "En bedömare tror att det kan bli svårt för _____ banker att möta utmaningen från _____; ett problem som är vanligt inom andra oligopolbranscher, det vill säga branscher med relativt få aktörer.",
     "options": [
      "etablerade – uppstickarna",
      "monetära – tillskyndarna",
      "nystartade – underhuggarna",
      "konkurrerande – belackarna"
     ],
     "correct": 0
    },
    {
     "num": 25,
     "text": "Boken fokuserar på de sajter och forum där den så kallade counterjihad-rörelsen regerar. I denna till stora delar nätbaserade rörelse har den centrala _____ mellan religionskritik och konspiratorisk rasism suddats ut.",
     "options": [
      "funktionen",
      "trossatsen",
      "motpolen",
      "distinktionen"
     ],
     "correct": 3
    },
    {
     "num": 26,
     "text": "En av anledningarna till att bipolär sjukdom så ofta feldiagnostiseras är att läkaren bara har fått halva sanningen. Personer med bipolär sjukdom kanske inte alls mår dåligt under perioder av _____, så de söker läkarhjälp endast när de är deprimerade. Läkaren ser bara hälften av sjukdomen och kan ge fel diagnos. Detta kan fördröja _____ behandling.",
     "options": [
      "skov – profylaktisk",
      "eufori – adekvat",
      "dysterhet – primär",
      "självkänsla – analytisk"
     ],
     "correct": 1
    },
    {
     "num": 27,
     "text": "Underleverantören har under sommaren tvingats minska sin elförbrukning med cirka 15 procent. Denna på förhand icke tidsbestämda _____ upphörde till slut i början av september, men de japanska myndigheterna vädjar fortfarande till samtliga företag att vara sparsamma med elen.",
     "options": [
      "reservation",
      "stagnation",
      "ransonering",
      "sanering"
     ],
     "correct": 2
    },
    {
     "num": 28,
     "text": "Det är av yttersta _____ för företaget att _____ en strikt lösenordspolicy och att lära sina anställda knepen för säkra lösenord.",
     "options": [
      "ambition – säkerställa",
      "värde – anhålla",
      "ansvar – bedriva",
      "vikt – upprätta"
     ],
     "correct": 3
    },
    {
     "num": 29,
     "text": "På sin målning av ett balsällskap fångar Adolf von Menzel dekadensen och den _____ glansen i det förklingande 1800-talet.",
     "options": [
      "brinnande",
      "falnande",
      "porlande",
      "växande"
     ],
     "correct": 1
    },
    {
     "num": 30,
     "text": "I tarmslemhinnan finns ett barriärsystem för att förhindra _____ av främmande antigener, såsom bakterier och födoämnesproteiner, i större omfattning. _____ kan små mängder av dessa makromolekyler normalt passera _____.",
     "options": [
      "infektion – I det avseendet – indirekt",
      "penetration – Emellertid – intakta",
      "kultivering – På motsatt sätt – okontrollerat",
      "sondering – Däribland – obemärkta"
     ],
     "correct": 1
    }
   ]
  }
 ]
};
