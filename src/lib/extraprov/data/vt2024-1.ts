// Högskoleprovet 13 april 2024, provpass 1 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "vt2024-1",
 "tillfalle": "vt2024",
 "passNr": 1,
 "kind": "verbal",
 "name": "Provpass 1 (verbalt)",
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
   26,
   0.4
  ],
  [
   29,
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
   43,
   0.9
  ],
  [
   46,
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
     "word": "dispyt",
     "text": "<b>dispyt</b>",
     "options": [
      "brist",
      "gräl",
      "tvekan",
      "besvikelse",
      "undantag"
     ],
     "correct": 1
    },
    {
     "num": 2,
     "word": "angeläget",
     "text": "<b>angeläget</b>",
     "options": [
      "tydligt",
      "utmanande",
      "informativt",
      "noggrant",
      "viktigt"
     ],
     "correct": 4
    },
    {
     "num": 3,
     "word": "supplement",
     "text": "<b>supplement</b>",
     "options": [
      "överskott",
      "urval",
      "innehåll",
      "tillägg",
      "understöd"
     ],
     "correct": 3
    },
    {
     "num": 4,
     "word": "aktad",
     "text": "<b>aktad</b>",
     "options": [
      "respekterad",
      "högtidlig",
      "artig",
      "försiktig",
      "undanskymd"
     ],
     "correct": 0
    },
    {
     "num": 5,
     "word": "rata",
     "text": "<b>rata</b>",
     "options": [
      "granska",
      "avvisa",
      "fastställa",
      "ifrågasätta",
      "samordna"
     ],
     "correct": 1
    },
    {
     "num": 6,
     "word": "illa åtgången",
     "text": "<b>illa åtgången</b>",
     "options": [
      "helt uttorkad",
      "nästan slut",
      "mycket ledsen",
      "svårt angripen",
      "lämnad utanför"
     ],
     "correct": 3
    },
    {
     "num": 7,
     "word": "bärkraft",
     "text": "<b>bärkraft</b>",
     "options": [
      "avlagring",
      "prestation",
      "tryck",
      "hållbarhet",
      "försörjning"
     ],
     "correct": 3
    },
    {
     "num": 8,
     "word": "vegetera",
     "text": "<b>vegetera</b>",
     "options": [
      "tala gåtfullt",
      "vara generös",
      "leva i overksamhet",
      "besvära i onödan",
      "sprida oro"
     ],
     "correct": 2
    },
    {
     "num": 9,
     "word": "egalitär",
     "text": "<b>egalitär</b>",
     "options": [
      "jämlik",
      "tillfällig",
      "obekymrad",
      "välvillig",
      "ursprunglig"
     ],
     "correct": 0
    },
    {
     "num": 10,
     "word": "kavalkad",
     "text": "<b>kavalkad</b>",
     "options": [
      "kort historia",
      "utvald grupp",
      "lång rad",
      "tapper skara",
      "begränsad mängd"
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
     "title": "Vesiklars betydelse",
     "html": "<p>De blodkärlsinflammationer som kallas vaskuliter leder oftast till ett relativt milt sjukdomsförlopp, men de kan i vissa fall vara livshotande. Denna ovanliga grupp av autoimmuna sjukdomar brukar behandlas med kortison och olika typer av cellhämmande läkemedel, men kanske kan ny kunskap om vesiklar öppna nya möjligheter.</p>\n<p>– Genom att blockera vesiklarnas aktivitet har vi sett att inflammationsprocessen bromsas upp, säger Maria Mossberg, forskare vid Lunds universitet.</p>\n<p>I sin forskning har Maria Mossberg, som också arbetar som barnläkare vid Skånes universitetssjukhus i Lund, kunnat visa att vesiklar kan sprida inflammationen vidare i kroppen.</p>\n<p>– Kroppens immunceller skickar iväg vesiklarna i blodcirkulationen, och dessa fungerar då som budbärare och signalerar till övriga delar av kroppen att dra igång immunförsvaret.</p>\n<p>För att studera vesiklarnas effekt odlade Maria Moss-berg i ett laboratorium celler från blodkärl och fäste dem på ett konstgjort blodkärl. Blodplasma från människor med vaskulit passerade genom dessa blodkärl och cellerna producerade då fler vesiklar. Hon identifierade också receptorer, mottagare, på vesiklarnas yta.</p>\n<p>– När vi tillförde substanser för att blockera vesiklarnas receptorer bildades färre vesiklar och den inflammatoriska processen bromsades upp, förklarar Maria Mossberg.</p>\n<p>Substanserna som hon har testat är läkemedel som redan används vid andra sjukdomar.</p>\n<p>– Det krävs mer forskning för att ytterligare studera effekt och säkerhet, men det skulle kunna bli ett nytt sätt att behandla vaskulitsjukdomar, säger hon.</p>\n<p>Vesiklar finns normalt i kroppen och är inblandade i kommunikation och transporter inom och mellan celler. De kan också fungera som sopbilar och frakta ut avfall från cellen. Gemensamt för dem alla är att de skapas genom en avknoppning av cellmembranet. Innehållet kan dock vara olika; cellen vill bli av med något (ett slags rengöring), eller så vill den sprida något till en annan cell.</p>\n<p>– För cellen är det ett sätt att överleva. Maria Mossberg beskriver vesiklarna som en joker i kroppen. Forskarna har känt till dem länge, men de är väldigt små och svåra att mäta, så kunskapen om dem är liten.</p>\n<p>– Allteftersom den tekniska utrustningen blir bättre får vi också mer kunskap om dem. På flera håll pågår nu forskning om vesiklar och hur dessa är inblandade i bland annat cancersjukdomar och hiv.</p>\n<p class=\"forf\">Fredrik Hed</p>"
    },
    {
     "title": "Skogsbruk på villovägar",
     "html": "<p>Skogsindustrins företrädare framhåller ofta att svenskt skogsbruk är miljövänligt och bedrivs på ett ekologiskt hållbart sätt. Detta trots att den naturhänsyn som tas i skogsbruket är starkt fragmenterad med endast spridda hänsynsträd kvarlämnade på hyggen, små hänsynsytor och till viss del frivilligt avsatt areal (inte officiellt kvalitetssäkrad). Ett sådant skogsbruk är inte långsiktigt hållbart utan tvärtom starkt utarmande. Något som bekräftas av forskningen, som entydigt visat att många hotade skogslevande arter behöver större sammanhängande naturskogar med naturliga störningar. Skogsbrukets påverkan genom avverkning av naturskogar och miljöer för missgynnade och hotade arter minskar våra skogars biologiska mångfald. Dessutom sker avverkningen ofta ända inpå nyckelbiotoper och naturreservat, trots att skyddszoner behövs för att motverka de ”kanteffekter” som kan uppstå intill hyggen.</p>\n<p>Att vissa arter gynnas av att små hänsynsytor och hänsynsträd lämnas är självklart och inget bevis på ett hållbart skogsbruk. Den kritiska frågan är istället hur den långsiktiga överlevnaden för de hotade och missgynnade arterna ser ut vid olika skogsbruksmodeller. I Sverige saknas till stor del forskning på detta område. Detta gäller framför allt i de södra delarna av landet, där läget är särskilt allvarligt då många hotade arter endast finns kvar i små fragmenterade populationer. Teoretiska modeller och empiriska fakta visar att den starkt fragmenterade hänsynen i dagens skogsbruk är sämre på att bevara den biologiska mångfalden än modeller med mer koncentrerad hänsyn. Forskning har dessutom visat att hänsynsnivån i svenskt skogsbruk är alltför låg, vilket gäller även för det certifierade skogsbruket.</p>\n<p>Grunden för dagens skogsbruk, ”den svenska skogsbruksmodellen”, lades år 1975. Då lagstiftades det om att storskaligt skogsbruk ska bedrivas i nästan alla våra skogar, samtidigt som en generell hänsyn ska tas till enstaka träd och vissa naturmiljöer. Under 1990-talet förstärktes modellen genom politiska beslut och genom frivilliga miljömärkningssystem (FSC och PEFC). Större delen av de skogar som omger oss och som kommer att växa upp är präglade av denna storskaliga modell med kalhyggesskogsbruk och en mycket schablonartad naturhänsyn. Dagens skogslandskap styrs i stort sett enbart av skogsindustrin, den gamla skogsvårdslagstiftningen och av myndigheten Skogsstyrelsen.</p>\n<p>Målet med skogspolitiken är hög virkesproduktion samtidigt som den biologiska mångfalden ska bevaras. Den svenska modellen antogs dock utan vetenskaplig grund och bygger på att hänsynen till naturen ska ske på frivillig bas. Virkesproduktionen däremot styrs genom tydligare lagkrav. Påståendena att modellen ur miljösynpunkt har fungerat kan nog ses som ett önsketänkande och en politisk förhoppning. En starkt bidragande orsak är skogsindustrins krav på ett rationellt skogsbruk med stora arealer ”industriskogar” anpassade till pappersindustrins behov. Detta står i motsatsförhållande till bevarandet av biologiskt rika skogar.</p>\n<p>Det är illa att modellen antogs utan vetenskaplig grund. Än värre är att det under den långa tid modellen funnits inte har bedrivits någon omfattande forskning eller miljöövervakning av dess effekter på naturen. Den forskning som trots allt har gjorts visar dock, i likhet med miljömässiga expertbedömningar och utvärderingar av situationen för den biologiska mångfalden, att det råder en allvarlig utarmningssituation. Över 2 000 skogsarter är rödlistade eller saknar gynnsam bevarandestatus. Många värdefulla naturskogsmiljöer är hotade och minskande. Särskilt allvarligt är det för många av de skogsnaturtyper som finns utpekade i EU:s naturvårdsdirektiv. Skogsavverkningar gör att de nu minskar i areal trots att detta står i strid med EU:s miljölagstiftning.</p>\n<p>I en av Sveriges lantbruksuniversitet och forskningsinstitutet Skogforsk nyligen publicerad sammanställning av forskning kring skogsbrukets effekter framkommer att det svenska skogsbruket är utarmande och att dagens schablonartade hänsyn är alltför bristfällig. Det går inte att med de skogsbruksmetoder som används idag klara miljömålen och kraven på bevarande av skogens biologiska mångfald. Trots detta har utvärderingen tagits till intäkt, av exempelvis skogsnäringen, för att den svenska modellen fungerar då den visar att vissa skogslevande arter klarar skogsbruket. Att en stor mängd arter missgynnas och hotas och att det saknas långsiktig forskning talar man dock tyst om. Istället fortsätter man att måla upp en bild av svenskt skogsbruk som hållbart och ett internationellt föredöme. En verklighetsbild som växt sig stark genom bland annat en stark kollegialitet.</p>\n<p>För att det svenska skogsbruket ska bli långsiktigt hållbart anser vi att det måste förändras i grunden, samtidigt som avverkningstrycket på skogslandskapet måste minska. Ett nytt skogsbruk, varierat och byggt på metoder och inriktningar som präglas av en stark och specifik artinriktad miljöhänsyn, måste utvecklas och införas. Arealen produktiv skogsmark som långsiktigt används enbart för naturvård måste öka betydligt, särskilt nedan fjällskogarna. En omfattande naturvårdsinriktad forskning och en nationell miljöövervakning måste upprättas i syfte att övervaka och utvärdera skogsbrukets effekter. Det gäller inte minst vad som händer med de rödlistade arterna; idag kan vi för de flesta bara använda expertbedömningar.</p>\n<p>Skogsnäringen har haft över 40 år på sig och ännu inte lyckats nå ett hållbart skogsbruk. Istället har man skapat ett biologiskt starkt fragmenterat skogslandskap. I den konsekvensanalys (SKA 15) som Skogsstyrelsen tagit fram redovisas en än mer biologiskt skrämmande framtid med sänkta avverkningsåldrar och ökad areal med täta granplanteringar. Det brukade skogslandskapet verkar bli alltmer ensartat i framtiden. Skog över 80 år kommer att saknas utanför reservat, åtminstone i södra Sverige. De täta virkesplantagerna gör också att bär- och svamprik skog blir en bristvara.</p>\n<p>Det är dags att skogsindustrins monopol i skogen bryts upp och att ett gemensamt samhällsansvar tas för vår skog, vår gemensamma naturresurs. Detta genom att naturvårdens företrädare, miljölagstiftningen och Naturvårdsverket ges ett betydligt större inflytande över skogen än vad man har idag. De sista kvarvarande skogarna med höga naturvärden måste bevaras, arterna skyddas och skogslandskapet restaureras.</p>\n<p>Michael Nilsson, Sven G Nilsson, Per Petersson</p>"
    },
    {
     "title": "Det finns ett hem dit stormens brus",
     "html": "<p>Jag var ju inte precis van att ha slips så det kändes ju. Trångt. Som om morsan försökt knyta helt halsen av mig för att stoppa alla svärorden från att komma ut just idag. Och nysvartkostymen också. En med kuddar inuti som skulle vara axelbreda och fylla ut tomtyget lite. En kostym att växa i, med upplagda byxor. Att ha till konfirmationen min, sen i sommar, också. Så. Fast det var bara februari och jag var inte precis på god fot med nån gud, för min morfar var död.</p>\n<p>Men hon satt där i kapellet, morsan, på första bänk och rättade till filten över mormor, och dalta, fast tanten skulle ha haft det bättre om hon fått stanna på sjukhemmet över det hela. Inte sådär bli utdragen genom snön för att sitta med rullstolen i mittgången och inte förstå vem som. Vad som. Att det ju var morfar. I lådan där frammanför henne nu. En Arnt Adolf Moström, pojken från Vargträsk. Han som mormor slösat bort sig på, som morsan sa. En som la hela förtjänsten från sin första vinter i skogen på en svartblank nygitarr, skokrämsgitarren kallad, och for runt med den på varenda dans och missionsmöte som fanns.</p>\n<p>Och förbannat trångt i halsen är det. Nästan en gråtklump. Som när jag var en lillunge bara. Och jävla skit som, för alltihop. Och för morsan som, sådär hur hon håller på. Torkar med vitnäsduken där underläppen mormors hänger lite, som på en häst nästan. Jo. Morsan torkar hela hakan denna. Duttar på. Och daltar.</p>\n<p>Så. Men dirigerar minsann också. Inte ens farsan fick ha bruna skor idag, fast de svarta var:</p>\n<p>– Lika små nu som vid bröllope! Enligt honom. Nej. Det ska vara. Som gitarrsvart. Fast alla vet att hon tycker bättre om cerise själv.</p>\n<p>Noga. Fast ingen jävel ser oss. Utom han därframme och hon, morfars flamma, därbak. Vi är inga här, utom dom, och familjen. Hela familjen i och för sig, för moster Iris är utsläppt från dårhuset också. Farsan och jag var till Ume och hämta hem henne i morse. Och jag fick ta mig väntrumskaffe i en vit plastmugg och nyåkerskakor, medan farsan stod invid glasluckan och förklara, först för en, och sedan för nästa kärring som blev inringd av den första på nåt vis. Men dagpermission ändå. Ett okej till slut. Och farsan fick skriva på papper innan vi kunde åka också. Lånepapper sådär. Vi har henne till klockan sju.</p>\n<p>Min mosters hår har lång ljus utväxt innerst, men mest är det färgat rödbrunt och flätat som på en flicka, i två flätor. Hon har en stor blåmönstrad ylletröja under den prassliga sommarkappan i bilen, men sedan svart linne och svarta byxor bara, i kapellet. Inte någon kjol eller nåt som morsan. Ingen bh heller. Och Iris röker sina Camel var-hon-vill, även under tiden andakten pågår.</p>\n<p>Dom hade en brorsa förut, systrarna, en som liknade mig. Men han gick inte att behålla. Han placerades som fosterbarn i Bastuträsk och blidde påkörd av tåget. På bilder ser han ut som en jävla Elvis. Med skokrämsgitarren morfars och den där frisyren, på gräsmattan bakom deras hus. Mormor kallade oss båda bara för pajken, förut:</p>\n<p>– Men hur ä de me pajken då? Så. Och hon menade då alltså honom, sonen sin, eller mig, dottersonen, vilken som. Fram till sista hjärnblödningen. Nu kan hon säga några ord bara. Sådanadär ord från när hon var barn i Umbyn. Från innan n’Arnt och före teveservicen med guldkant och läskflaskorna jag brukade få hämta mig i källartrappan hemma hos dom. Hos mormorn min, och han, morfar Arnt.</p>\n<p>Men bara dumord nu, från en idiottid utan el. Och morsan är en idiot. Broderar skitfula korsstygnsrenar och kåtor och sätter upp det i gummiramar av rött, och ibland grönt, under väggklockan i köket. Vill vara särskild på nåt vis. Vika ut det där gamla.</p>\n<p>Och jag vill faan inte föreställa mig morfar i den där lådan. Och prästen bara säger, och säger, och säger, saker:</p>\n<p>– Jesus. Bla, bla. – Vila. Yttersta dagen. Han försöker låta allvarlig, som om han talar om en nära vän, en viktig man, och. Slipsen! Den måste lös snart. Dessutom fryser vi alla. Moster Iris sitter och håller om sig själv. Farsan har ett ben som darrar. Mormor gråter. Och morsan duttar sin morsa i ansiktet med näsduken än, det bara håller på.</p>\n<p>I psalmerna hörs mest morfars flamma. Det enda nöjet här är att småglo på henne, för hon rödnar i hela ansiktet och tittar ner då. Skäms väl. På byn säger folk att det hände i sängen hos henne. Som under tiden dom låg med varann då. Att morfar dog av kåthet. Utmattad. Men sådana synder nämner inte prästen. Bara omtänksam far och saknad make. Annan smörja. Inte en lista på spänningar precis.</p>\n<p>Inte ens musiken morfars. Så att. Som inget. Men till slut är det över. Vi har ganska bråttom. Morsan har gjort älgsteken med rönnbärsgelé och mandelpotatis hemma. Vi ska äta. Sen till både hemmet och dårhuset också, i lagom tider.</p>\n<p>Men ändå. Flamman, Gun, går fram till morsan med plastkassen hon håller i. Och dom står där, ett par meter från kapelldörren i skenet av utelampan. Dom två. Och flamman försöker säga något. Att Zündappen är till besvär, eller kanske att. Tja, i alla fall nåt. Nåt som gjorde att morsan skulle ha flugit på na, om morsan nu varit en sån som visa nåt ibland.</p>\n<p>Men farsan sa bara: – Åk me na du Tommy och hämt’an. Så att. Och jag fick stå en bit ifrån och hålla plastkassen hennes medan flamman skrapa alla rutorna på sin hundraförtitvåa. Jag fick stå över älgsteken, och bara se på när hon rörde sig sådär runt bilen. Stå och undra. Och inte så värst gammal var hon, eller så. Vad jag kunde se. Som moster Iris kanske, fast med lite mera kropp och hud och så. Större.</p>\n<p>Sen satte vi oss i bilen och frös en stund, för skiten ville inte starta så hon fick pumpa på gasen och ha sig. Men sen så. Och varmluften kom igång efter ett tag. Svetten bara rakt genom min vitskjorta, och nykavajen också, faktiskt. Fick loss slipsen i alla fall och så ner i fickan med den. Lite luft ändå. Och bilradion också. Men hon var som tyst. Och jag med.</p>\n<p>Självklart skulle Zündappen bli min nu. Och den var ju som van. Hittade nästan själv hem till henne, om, ifall att.</p>\n<p>Och när vi hade kört förbi tågstation där i Nyåker sa jag:</p>\n<p>– Du? Men hon var som blyg av sig och sa inget. Snön föll. Och flingorna var vita i strålkastarljuset men syntes inte alls i mörkret bredvid oss. Jag stack fingret genom plasten i kassen hennes. Alltså först en seg slags grop i handtaget bara, men sen flera fingerhål, utan att det var meningen riktigt, utan bara, ändå, som blev.</p>\n<p>Och det var vid Ledusjön hon bodde. I ett vitputsat hus med farstubro av järn.</p>\n<p>Stina Stoor <b>Zündapp</b> = mopedmärke</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vad av följande är vesiklar ett exempel på, om man följer textens resonemang?",
     "options": [
      "Att ett kroppsligt förlopp kan rubbas utan egentlig orsak.",
      "Att cellerna kan använda en och samma process för olika syften.",
      "Att kroppsegna ämnen kan bromsa en pågående sjukdomsprocess.",
      "Att främmande ämnen kan både skada och stärka cellerna."
     ],
     "correct": 1,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vad skulle kunna bli användbart vid behandling av vaskulit, enligt Maria Mossbergs forskningsresultat?",
     "options": [
      "Ökad aktivitetsgrad hos vesiklar.",
      "Speciellt odlad blodplasma.",
      "Redan tillgängliga mediciner.",
      "Vesiklars rengörande funktion."
     ],
     "correct": 2,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vad påpekar textförfattarna om de hänsynsytor som av naturvårdsskäl undantas från avverkning?",
     "options": [
      "De är alltför olika och inte tillräckligt artrika.",
      "De är inte unika nog att klassas som nyckelbiotoper.",
      "De är inte placerade där hotet mot skogen är som störst.",
      "De är alltför utspridda och inte tillräckligt stora."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vad kritiserar textförfattarna när det gäller ”den svenska skogsbruksmodellen”?",
     "options": [
      "Att modellen har en otydlig målsättning.",
      "Att det råder obalans mellan skogsnäringens och naturvårdens intressen.",
      "Att modellen bygger på otidsenlig forskning.",
      "Att det saknas visioner om skogslandskapets framtid."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Textförfattarna anser att den svenska skogen inte brukas på ett hållbart sätt i dag. Vad uppfattar de som det huvudsakliga problemet?",
     "options": [
      "Produktionstakten, som ständigt minskar den totala skogsarealen i Sverige.",
      "Skogsindustrins utsläpp, som sprider farliga ämnen i ett ömtåligt landskap.",
      "Sättet att avverka, vilket allvarligt skadar den biologiska mångfalden i skogen.",
      "Avsaknaden av oberoende forskning, vilket leder till ett ensidigt skogsbruk."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Vilken av följande förändringar av det svenska skogsbruket efterlyser textförfattarna?",
     "options": [
      "Att EU:s naturvårdsdirektiv anpassas till svenska förhållanden.",
      "Att forskningen inriktas på att utveckla alternativ till skogsråvara.",
      "Att den produktiva skogsmarken utökas och blir mer enhetlig.",
      "Att skogsbolagens påverkan begränsas och att andra samhällsintressen ges större utrymme."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Hur förhåller sig Tommy till sin morfar, att döma av hans tankar under begravningen?",
     "options": [
      "Han dömer morfadern för dennes livsval och begravningen väcker hans ilska.",
      "Han är ointresserad av morfadern och drömmer sig bort under begravningen.",
      "Han tänker på sin morfar och känner att begravningen inte gör honom rättvisa.",
      "Han beundrar sin morfar och tänker under begravningen på hans liv."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Vilket svarsförslag överensstämmer bäst med hur Tommy uppfattar sin mor?",
     "options": [
      "Hon är svartsjuk och tänker mest på sig själv.",
      "Hon är dominant och noga med detaljerna.",
      "Hon är självuppoffrande och döljer sina egna behov.",
      "Hon är nonchalant och vill framstå som finare än hon är."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Vilken mening sammanfattar begravningen bäst, om man utgår från textens beskrivning?",
     "options": [
      "Det är en enkel ceremoni med endast närmast sörjande och en opersonlig präst.",
      "Det är en högtidlig begravning med uppklädda besökare och en värdig präst.",
      "Det är en stillsam ceremoni utan musik med en kortfattad präst.",
      "Det är en sorgtyngd begravning med gråtande deltagare och en empatisk präst."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Vilken är den rimligaste tolkningen av Tommys tankar och beteenden efter begravningsceremonins slut?",
     "options": [
      "Att han är nyfiken på Gun.",
      "Att han struntar i Gun.",
      "Att han tycker synd om Gun.",
      "Att han är sur på Gun."
     ],
     "correct": 0,
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
     "text": "Flera av berättelserna i Eva Adolfssons essäsamling <i>Till skilda orter</i> (1998) tycks vara självbiografiskt _____.",
     "options": [
      "engagerade",
      "beroende",
      "sammanhållna",
      "förankrade"
     ],
     "correct": 3
    },
    {
     "num": 22,
     "text": "Det nya med detta sätt att ta fram en översiktsplan är att innehållet ska vara baserat på uppdaterade och relevanta _____. Dessutom fungerar planen som ett verktyg för att _____ de lokala aktörerna, och därmed fånga upp medborgarperspektivet.",
     "options": [
      "kartor – moderera",
      "fakta – reglera",
      "data – involvera",
      "studier – exkludera"
     ],
     "correct": 2
    },
    {
     "num": 23,
     "text": "Förslaget till _____ av den gamla trädgården utgick från de rådande förutsättningarna, och _____ de möjligheter till _____ och bevarande som ändå fanns.",
     "options": [
      "odling – bortsåg från – gårdsförsäljning",
      "restaurering – tog fasta på – återställande",
      "uthyrning – gav näring åt – arbetstillfällen",
      "skötsel – fann tröst i – nyskapande"
     ],
     "correct": 1
    },
    {
     "num": 24,
     "text": "Hur en röst _____ rent akustiskt beror på en mängd olika faktorer. Därför är det svårt att hitta allmängiltiga och objektiva _____ för röststatus som skulle kunna användas kliniskt och pedagogiskt.",
     "options": [
      "ter sig – kriterier",
      "gör sig – valörer",
      "står sig – nyanser",
      "rör sig – normer"
     ],
     "correct": 0
    },
    {
     "num": 25,
     "text": "1842 års folkskolestadga medförde att nästan alla svenska barn lärde sig läsa, skriva och räkna, vilket var _____ i modernitetsbygget.",
     "options": [
      "omvittnat",
      "bristfälligt",
      "ovärderligt",
      "framställt"
     ],
     "correct": 2
    },
    {
     "num": 26,
     "text": "Innan resan kunde _____ måste segelfartyget <i>Endeavour</i> föras till den nederländska kolonin Batavia för en reparation som tog två månader _____.",
     "options": [
      "utformas – i beslag",
      "återupptas – i anspråk",
      "genomdrivas – i retur",
      "avhandlas – i beredskap"
     ],
     "correct": 1
    },
    {
     "num": 27,
     "text": "Lewi Pethrus fungerade som representant för Pingströrelsen, och hans fysiska närvaro blev ett tecken på att den nya församlingen tillhörde rörelsen. Pethrus symboliska kapital var med andra ord så starkt att han personligen _____ Pingströrelsen.",
     "options": [
      "besjälade",
      "frammanade",
      "ledsagade",
      "förkroppsligade"
     ],
     "correct": 3
    },
    {
     "num": 28,
     "text": "Varje språk uttrycker en egen _____. Det ger inte en avbildning punkt för punkt av den utomspråkliga verkligheten, utan lägger ett _____ över verkligheten, vilken alltså inte avbildas, utan _____.",
     "options": [
      "tidsanda – lager – förvrängs",
      "världsbild – raster – tolkas",
      "livsstil – filter – beskrivs",
      "synvinkel – mönster – nyanseras"
     ],
     "correct": 1
    },
    {
     "num": 29,
     "text": "Allt som du och jag vet är inte _____ i den meningen att vi kan formulera vad vi vet. Mycket av vår vardagskunskap är _____ eller så kallad tyst kunskap.",
     "options": [
      "aktuellt – inaktuell",
      "aktivt – retroaktiv",
      "explicit – implicit",
      "ordinärt – extraordinär"
     ],
     "correct": 2
    },
    {
     "num": 30,
     "text": "Åklagarens besked var oväntat och ledde till spontant jubel hos många Baltimorebor, som _____ hade väntat sig ännu ett frikännande av våldsamma poliser.",
     "options": [
      "luttrat",
      "kaxigt",
      "prompt",
      "ivrigt"
     ],
     "correct": 0
    }
   ]
  }
 ]
};
