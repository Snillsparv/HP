// Högskoleprovet 6 april 2013, provpass 5 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "vt2013-5",
 "tillfalle": "vt2013",
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
     "word": "piccolo",
     "text": "<b>piccolo</b>",
     "options": [
      "skoputsare",
      "barnflicka",
      "mattknytare",
      "hotellpojke",
      "cykelbud"
     ],
     "correct": 3
    },
    {
     "num": 2,
     "word": "nyckfull",
     "text": "<b>nyckfull</b>",
     "options": [
      "lyckosam",
      "mångsidig",
      "fantasifull",
      "oberäknelig",
      "lömsk"
     ],
     "correct": 3
    },
    {
     "num": 3,
     "word": "förekomst",
     "text": "<b>förekomst</b>",
     "options": [
      "ursprung",
      "fenomen",
      "orsak",
      "möjlighet",
      "existens"
     ],
     "correct": 4
    },
    {
     "num": 4,
     "word": "äntra",
     "text": "<b>äntra</b>",
     "options": [
      "slingra sig runt",
      "få att välta",
      "hålla sig fast",
      "ta sig upp på",
      "gå och driva"
     ],
     "correct": 3
    },
    {
     "num": 5,
     "word": "in natura",
     "text": "<b>in natura</b>",
     "options": [
      "utan tillsatser",
      "med självklarhet",
      "i annat värde än pengar",
      "alltigenom äkta",
      "i det fria"
     ],
     "correct": 2
    },
    {
     "num": 6,
     "word": "makulatur",
     "text": "<b>makulatur</b>",
     "options": [
      "äldre upplaga",
      "manuskript",
      "ogranskat textmaterial",
      "kasserade trycksaker",
      "arkiverad årgång"
     ],
     "correct": 3
    },
    {
     "num": 7,
     "word": "förlikning",
     "text": "<b>förlikning</b>",
     "options": [
      "omvandling",
      "sammanbrott",
      "uppgörelse",
      "ursäkt",
      "nedläggning"
     ],
     "correct": 2
    },
    {
     "num": 8,
     "word": "derivera",
     "text": "<b>derivera</b>",
     "options": [
      "förstora",
      "härleda",
      "inskjuta",
      "tillägga",
      "överföra"
     ],
     "correct": 1
    },
    {
     "num": 9,
     "word": "allusion",
     "text": "<b>allusion</b>",
     "options": [
      "anpassning",
      "drömbild",
      "tillägg",
      "förvirring",
      "anspelning"
     ],
     "correct": 4
    },
    {
     "num": 10,
     "word": "försagd",
     "text": "<b>försagd</b>",
     "options": [
      "blyg",
      "förbisedd",
      "allvarlig",
      "kritiserad",
      "talför"
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
     "title": "Lärlingstid?",
     "html": "<p>Om alla elever trivdes i skolan, var motiverade och uppnådde acceptabel nivå i alla ämnen, så skulle saken vara enkel: då borde vi ha en minst tolvårig grundskola. En solid teoretisk kunskapsbas för alla ger förutsättningar för både jämlikhet och välstånd.</p>\n<p>Frågan är inte om största möjliga kunskap åt största möjliga antal medborgare är ett gott mål utan hur man når dit. Vad ska samhället göra när många elever hoppar av gymnasieskolan och andra har så låg motivation att de inte lär sig något?</p>\n<p>Även den som har en stark tro både på de positiva förväntningarnas makt och på möjligheterna att utveckla pedagogiken måste erkänna faktum: alla ungdomar vill inte. Alla är inte mottagliga för välmenande försök att få dem att förstå att de måste sitta tolv år i skolbänken, för sin egen skull.</p>\n<p>När utbildningsministern presenterade regeringens förslag till hur lärlingsutbildningen, som hittills bara drivits på försök, ska permanentas anförde han flera skäl. Han pekade på svårigheterna för företag att hitta personal med rätt yrkeskompetens. Han talade om yrkesskolornas svårigheter att hänga med i den tekniska utvecklingen och om bristen på yrkeslärare.</p>\n<p>Det var inga dåliga argument. Ändå var det viktigaste hans fjärde argument: att det är så många avhopp från gymnasieskolan.</p>\n<p>För ungdomar som lyckas få ett arbete direkt efter nian behöver det inte vara ett dåligt alternativ. Yrkeslivet har i alla tider varit en viktig skola.</p>\n<p>Men med bara grundskoleutbildning är det svårt att få jobb. Och även de som lyckas förblir sårbara på arbetsmarknaden eftersom de har en så svag kunskapsgrund.</p>\n<p>Som utredningen av försöksverksamheten visat är inte heller lärlingsutbildningen problemfri. Det blir ofta ett glapp mellan skolan och företagen som eleverna gör sin praktik på. För att utbildningen ska få kvalitet måste det finnas ett nära samarbete mellan skolan och företagen.</p>\n<p>Att finna former för denna samverkan blir inte enkelt och kommer att ta tid. Men att inte försöka skapa ett gott alternativ åt de elever som inte har motivation eller förmåga att klara en mer teoretisk gymnasieutbildning vore mycket värre.</p>\n<p class=\"forf\">Johannes Åman</p>"
    },
    {
     "title": "Litteraturläsning i förskolan",
     "html": "<p>De studenter som har svenska som sitt huvudämne på lärarutbildningen i Malmö läser en kurs som heter ”Globalt berättande”. I kursen ingår en uppgift där studenterna med hjälp av olika receptionsteorier ska försöka ta reda på hur barn förstår och tolkar en skönlitterär berättelse. Jag har nyss examinerat en grupp studenter som genomförde den här uppgiften på drygt tjugo olika förskolor i Skåne. Det här var ingen enkel uppgift. Kursen ligger tidigt i utbildningen, ingen av studenterna hade erfarenhet av att intervjua barn och dessutom hade studenterna inte hunnit lära känna barnen särskilt väl.</p>\n<p>Men det som vållade de allra största svårigheterna för studenterna var något som nog ingen av oss var riktigt förberedd på. Vi blev helt enkelt tagna på sängen! I text efter text konstaterar studenterna att litteraturläsning var en högst sporadiskt förekommande aktivitet i de aktuella förskolorna och att bokvalet skedde helt slumpmässigt när personalen någon enstaka gång läste för barnen. Några övergripande teman som bokläsningen var inbäddad i stod inte att finna. Det var däremot ganska vanligt att bokläsningen primärt hade ett disciplinerande syfte om personalen tyckte att barnen var alltför stimmiga eller okoncentrerade.</p>\n<p>Men det räcker inte med detta. Samtliga studenter konstaterar dessutom att några samtal kring det lästa aldrig tycktes förekomma. Fram växer bilden av en förskoleverksamhet där litteraturläsning och boksamtal är mycket lågt prioriterade. Det rimmar dåligt såväl med läroplanen som med vad aktuell forskning säger om bokläsningens och boksamtalets betydelse för barns kunskaps- och språkutveckling. Däremot tycks språklekar à la Bornholmsmodellen vara en relativt vanlig aktivitet i de besökta förskolorna. Man kan med fog ställa sig frågan vilket som mest gynnar förskolebarns språkutveckling – läsning av och samtal kring berättelser med ett begripligt och meningsfullt innehåll eller bollande med stavelser, rim och ramsor tömda på allt annat innehåll än ljud och språk.</p>\n<p>I Annette Ewalds avhandling <i>Läskulturer</i> (2007) växer en mycket dyster bild av litteraturläsningen i grundskolans mellanår fram. Även om man naturligtvis ska akta sig för att dra alltför generaliserande slutsatser med utgångspunkt från min högst ovetenskapliga undersökning verkar det vara dags att genomföra en liknande studie i förskolan.</p>\n<p class=\"forf\">Jan Nilsson</p>"
    },
    {
     "title": "Övertid",
     "html": "<p><b>Fråga:</b> Jag fick ett uppdrag som i korthet går ut på att se till att vi har vissa tjänster framme till ett visst datum.</p>\n<p>Det har medfört övertid. Nu säger ledningen att jag borde ha skött uppdraget på min ordinarie tid och de vill inte betala ut någon ersättning. Jag har säkert lagt ner motsvarande ett par veckors jobb för att ha en chans att hinna.</p>\n<p>Undrar också om en arbetsledare kan begära samma kväll att man ska jobba över. Jag kunde inte, men då sa han: ”Jag beordrar dig!” Hade han rätt till det?</p>\n<p class=\"forf\">Anton</p>\n<p><b>Svar:</b> Vad som gäller vid övertid finns delvis att utläsa ur kollektivavtalet – om något sådant gäller på arbetsplatsen – och ur det enskilda anställningsavtalet och ur arbetstidslagen. Jag utgår i mitt svar ifrån att det på din arbetsplats inte finns några kollektivavtalsregler som berör din fråga.</p>\n<p>Oftast finns det reglerat i anställningsavtalet huruvida övertidsersättning utbetalas eller ej. Det är ett viktigt anställningsvillkor, eftersom det berör både arbetstid och vederlag. Om man i anställningsavtalet har avtalat om att övertidsersättning inte betalas ut, så brukar detta kompenseras av fria arbetstider och/eller längre semester.</p>\n<p>Om det inte står något i ditt anställningsavtal så får man falla tillbaka på den gamla generalprincipen om att det är arbetsgivaren som leder och fördelar arbetet. Det är alltid bra att kontrollera med sina chefer innan man utför övertidsarbete, så att man är överens om att övertidsarbete kommer att utföras och på vilket sätt man ska kompenseras.</p>\n<p>Det rimliga vore, i brist på överenskommelse, att situationen tolkas som att du skall kompenseras för din nedlagda övertid, särskilt som det beordrats att arbetet måste vara klart en viss dag. Ta råd av ditt fack i frågan.</p>\n<p>En arbetsledare kan inte ”beordra” arbetstagare att jobba över med så kort varsel som samma kväll, annat än i alldeles särskilda fall. Enligt 12 § arbetstidslagen ska arbetsgivaren ge arbetstagarna besked om förändringar i arbetstiden minst två veckor i förväg om inte verksamhetens art eller oförutsedda händelser ger anledning till kortare varsel. Arbetsgivarens rätt att leda och fördela arbetet ger denne viss rätt att begära lite flexibilitet hos arbetstagarna, men det är också beroende av vad som utlöste behovet av övertidsarbete.</p>\n<p class=\"forf\">Stefan Flemström</p>"
    },
    {
     "title": "Transport av koldioxid",
     "html": "<p>Koldioxidens framtida roll inom växthusproblematiken röner stor uppmärksamhet och alla vill ha svar på hur utvecklingen kommer att gå. Hur mycket av den koldioxid som vi släpper ut från förbränning av fossila bränslen kommer att stanna i atmosfären? Hur mycket kommer att tas upp av hav och land? Detta är avgörande frågor som nu studeras.</p>\n<p>Man kan göra en ungefärlig uppskattning av dagens situation, men det blir mycket komplicerat när vi funderar om framtiden. Kommer vårt klimat att förändras är det ett flertal faktorer som ändras och dessa påverkar flödet mellan hav och atmosfär i olika riktningar. Koldioxidhalten i atmosfären avgörs alltså av skillnaden mellan två stora tal: flödet in och flödet ut.</p>\n<p>Kol förekommer i havet i flera olika former, som löst oorganiskt (bikarbonat, koldioxid och karbonatjoner) och löst organiskt (en mängd olika former, de flesta i låga koncentrationer) samt partikulärt oorganiskt (huvudsakligen kalkskal) och partikulärt organiskt (biologiskt producerat material). Omvandling mellan dessa olika former sker hela tiden, oftast orsakad av biologisk aktivitet. Likaså transporteras de olika formerna inom havet och även till viss del mellan hav och överliggande atmosfär samt från land till hav. Det är alla dessa aspekter man måste ta hänsyn till om man skall förstå havens betydelse för omhändertagandet av koldioxid.</p>\n<p>När det varma vattnet från Atlanten strömmar längs Skandinaviens västkust mot norr och in i Norra Ishavet, kyls det av och lämnar värmen till luften vilket gör vårt klimat varmare än på andra ställen vid samma breddgrad. Denna avkylning medför också att havet kan ta upp mer gas, däribland koldioxid, eftersom gasens löslighet ökar med minskad temperatur (jämför skillnaden mellan att öppna en varm och en kall sockerdricksflaska). Under sommarhalvåret sker även en stor primärproduktion (t.ex. algtillväxt) i samma vatten, något som fixerar koldioxid i organiskt material, vilket också medför att havet tar upp koldioxid från atmosfären. Båda dessa processer är speciellt viktiga i de enorma randhaven, som finns i den eurasiska delen, och som till stor del är isfria under sommarhalvåret.</p>\n<p>Vi har alltså två processer som båda driver ett flöde av koldioxid från atmosfären till ytvattnen som strömmar från Atlanten till Norra Ishavet. Samtidigt sker en djupvattenbildning i Arktis, vilken då kommer att transportera den lösta koldioxiden från ytvattnet ner till flera kilometers djup. Denna djupvattenbildning sker på olika sätt. Ett av dem beror på att det varma vattnet som strömmar norrut från Atlanten också är salt, och när detta kyls av ökar dess densitet. När vattnet efter några tiotal år strömmar tillbaka mot söder längs Grönlands östkust, är det tungt nog att sjunka ner under det varmare vatten som finns söder om Island. Detta gäller trots att dess salthalt har minskat något genom blandning med färskare vatten i Norra Ishavet. En del av det vatten som strömmar mot norr viker av mot Grönland innan det når Norra Ishavet och behåller därmed en större del av sin salthalt vilket innebär att det kan sjunka mot stora djup, något som har skett under vissa tidsperioder i Grönlandshavet (mellan Svalbard och Grönland). Slutligen sker bildning av vatten med hög salthalt när havsis bildas genom att saltet trängs bort och bildar en saltlake, som kan ge upphov till vatten med mycket hög salthalt i vissa områden i de grunda randhaven.</p>\n<p>Vid en ändring av klimatet påverkas en mängd faktorer av betydelse för transporten av koldioxid. Den mest uppenbara är att havsistäcket minskar under sommarhalvåret. Detta kommer att exponera en större havsyta när primärproduktionen är aktiv, vilket kommer att gynna ett upptag av koldioxid från atmosfären både för att primärproduktionen har större yta att verka över, men också för att mindre is dämpar kontakten mellan ytvatten och atmosfär.</p>\n<p>Däremot är det osäkert om tillgången på närsalter, som är en förutsättning för primärproduktionen, kommer att minska eller öka. Utan havsis finns möjlighet att mer vindenergi blandar ytvattnet så att vi kan få upp mer närsalter från djupet och därmed öka primärproduktionen. Å andra sidan kommer det att bildas ett färskare ytvatten från en smältande havsis vilken försvårar för närsalterna att blandas upp till ytvattnet från djupet, vilket då minskar primärproduktionen och havens förmåga att ta upp koldioxid. Mycket närsalter tillförs också med det vatten som transporteras upp från Atlanten. Om volymen av detta minskar eller ökar har således stor betydelse även för närsaltstillförseln och hur mycket primärproduktion som kan ske. Detta kan således både öka och minska koldioxidupptaget.</p>\n<p>En annan effekt, som kan vara av stor vikt för att transportera bort koldioxid från atmosfären till djupvattnet, är att med en stor isfri area under sommaren finns möjlighet till stor havsisproduktion under vinterhalvåret. Havsisen i sig isolerar ytvattnet från atmosfärens kyla på ett sätt som idag begränsar den istjocklek som maximalt kan bildas under en säsong till drygt en meter.</p>\n<p>Med ökad havsisproduktion kommer mer saltlake att frigöras. Saltlaken hjälper till att transportera bort ytvattnet med tillhörande koldioxid. Hur djupt detta vatten med hög salthalt (högsalint) kommer att sjunka beror på vattendjup och bottentopografi. Vid studier i Storfjorden vid södra Svalbard har det dock konstaterats att stora mängder högsalint vatten bildas under vissa år, ett vatten som kan följas nedför kontinentalsluttningen till flera kilometers djup. Här finns alltså en möjlighet att mer koldioxid kan transporteras bort om vi får ett minskat havsistäcke under sommaren.</p>\n<p>Samtidigt som saltlakemängden ökar med ökad isproduktion kommer dock den ökande issmältningen under sommaren att medföra att ytvattnet tillförs mer färskvatten. Detta färskare vatten blandas med vattnet från Nordatlanten vilket kan resultera i att de andra typerna av djupvattenbildning minskar och därmed också transporten av koldioxid från havets ytvatten till djupet.</p>\n<p>En viktig fråga för kolflödena vid ett varmare klimat, som jag inte diskuterat, är vad som händer med all den metan som finns i frusen form nere i sedimenten under vissa randhav. Den kunskap som finns idag kan inte förutspå mer än att om uppvärmningen blir tillräckligt stor så kommer stora delar att frigöras och tillföras atmosfären. Då metan är en mycket effektivare växthusgas än koldioxid blir resultatet en stor ökning av växthuseffekten under en kort tid. Dock oxideras metan till koldioxid med avtagande växthuseffekt, men detta tar ett antal år.</p>\n<p>Det finns alltså många olika processer och faktorer som påverkar atmosfärens framtida koldioxidhalt. Eftersom en del tillför koldioxid och en del tar bort koldioxid och vi inte vet vilka processer som kommer att påverkas mest, är det inte möjligt att dra en säker slutsats i denna fråga.</p>\n<p class=\"forf\">Leif Anderson</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vems intressen lyfter textförfattaren i huvudsak fram då han resonerar kring förslaget om en lärlingsutbildning?",
     "options": [
      "Samhällets",
      "Ungdomars",
      "Företagens",
      "Yrkesskolors"
     ],
     "correct": 1,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Har textförfattaren någonting att säga om pedagogikens roll i skolorna, och i så fall vad?",
     "options": [
      "Ja, valet av pedagogik är inte avgörande för de omotiverade elevernas prestationer.",
      "Ja, en utvecklad pedagogik ger bättre förutsättningar att uppnå kunskapsmålen.",
      "Ja, pedagogiska satsningar avgör skolans framtid.",
      "Nej, han tar över huvud taget inte upp skolornas pedagogik."
     ],
     "correct": 0,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Ger texten någon förklaring till varför bokläsning förekommer sparsamt i förskolorna?",
     "options": [
      "Ja, förskolans läroplan uppmuntrar inte läsning.",
      "Ja, förskolepersonalen prioriterar disciplin och ordning.",
      "Ja, barnen föredrar lekinriktad verksamhet.",
      "Nej, någon förklaring ges ej i texten."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vad är en rimlig slutsats utifrån textförfattarens resonemang?",
     "options": [
      "Litteraturläsningen i förskolan är mer försummad än vad forskningen tidigare visat.",
      "Det behövs en vetenskaplig studie av huruvida litteraturläsningen i förskolan motsvarar läroplanens krav.",
      "Forskningens dystra bild av litteraturläsningen i förskolan verkar i stort sett stämma.",
      "Det finns anledning att revidera några av läroplanens direktiv för litteraturläsningen."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vilket faktum kan enligt texten tala till Antons fördel i tvisten med arbetsledningen?",
     "options": [
      "Att ledningen inte specificerade innehållet i hans uppdrag.",
      "Att arbetsplatsen var underställd ett kollektivavtal.",
      "Att ledningen satte en bestämd deadline för hans uppdrag.",
      "Att arbetet i huvudsak skedde utanför ordinarie arbetstid."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 16,
     "text": "Svarande antar att det på frågeställarens arbetsplats ”inte finns några kollektivavtalsregler”. Anger han något skäl till detta antagande, och i så fall vilket?",
     "options": [
      "Ja, arbetsledaren på platsen skulle annars inte ha beordrat frågeställaren.",
      "Ja, eftersom det är uppenbart att arbetsgivaren ifråga leder och fördelar arbetet.",
      "Ja, frågeställaren har redan utfört det beordrade arbetet.",
      "Nej, något skäl till detta anger han inte."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 17,
     "text": "Mängden vatten som transporteras norrut från Atlanten har enligt texten betydelse för koldioxidupptagets storlek. Vad beror det på?",
     "options": [
      "Ju större mängd vatten, desto mer närsalter och större primärproduktion.",
      "Ju större mängd vatten, desto lägre yttemperatur och mindre primärproduktion.",
      "Ju större mängd vatten, desto större ishavstäcke och större primärproduktion.",
      "Ju större mängd vatten, desto färskare ytvatten och mindre primärproduktion."
     ],
     "correct": 0,
     "textIndex": 3
    },
    {
     "num": 18,
     "text": "Vilket svarsförslag anger två processer som bägge enligt texten har direkt betydelse för flödet av koldioxid mellan luften och havet?",
     "options": [
      "Primärproduktion och djupvattenbildning.",
      "Djupvattenbildning och isproduktion.",
      "Isproduktion och avkylning.",
      "Avkylning och primärproduktion."
     ],
     "correct": 3,
     "textIndex": 3
    },
    {
     "num": 19,
     "text": "Vilken funktion har liggande havsis framför allt i det sammanhang som texten beskriver?",
     "options": [
      "Avkylande",
      "Isolerande",
      "Nedbrytande",
      "Förmedlande"
     ],
     "correct": 1,
     "textIndex": 3
    },
    {
     "num": 20,
     "text": "Vad är det textförfattaren framför allt inriktar sig på i sin text?",
     "options": [
      "Att visa hur naturen själv motverkar utsläppen av växthusgaser.",
      "Att besvara en rad frågor som idag studeras av klimatforskarna.",
      "Att diskutera en rad processer som kan påverka växthuseffekten.",
      "Att visa att uppkomsten av koldioxid också har naturliga orsaker."
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
     "text": "För byggföretag som lämnar anbud på begäran av upphandlande myndighet är det viktigt att känna till följande: Vissa _____ som den upphandlande myndigheten anger i sitt förfrågningsunderlag måste finnas med, annars _____ anbudet utan beaktande av dess konkurrenskraft mot andra anbud.",
     "options": [
      "krav – förringas",
      "påståenden – underkänns",
      "omständigheter – accepteras",
      "kriterier – förkastas"
     ],
     "correct": 3
    },
    {
     "num": 22,
     "text": "Det var under upplysningstiden som begreppet geni fick den innebörd det än idag i stort sett har. Då uppstod uppfattningen att genialiteten är motsatt, men _____, till det sunda förnuftet och att det råder ett slags yin och yang-förhållande mellan dem.",
     "options": [
      "sekundär",
      "disparat",
      "komplementär",
      "adekvat"
     ],
     "correct": 2
    },
    {
     "num": 23,
     "text": "I år är boktitlarna något färre än året innan. Men den generella _____ är god, särskilt på svenskproducerade lite mer omfattande utgåvor. Och man kan skönja en _____ av fördjupning och soliditet. Jag tror att det är klokt; folk vill ha riktiga och _____ kokböcker.",
     "options": [
      "kvaliteten – trend – brukbara",
      "avkastningen – förväntan – påkostade",
      "indelningen – släng – inbundna",
      "viljan – utgivning – överskådliga"
     ],
     "correct": 0
    },
    {
     "num": 24,
     "text": "Enligt företagets vd är den nya samarbetsmodellen ett märkbart stöd, eftersom den förbättrar samtalen mellan medarbetarna. Att alla på arbetsplatsen genomgår samma utbildning ger också medarbetarna gemensamma _____, vilket underlättar diskussionerna.",
     "options": [
      "prospekt",
      "referenser",
      "utlåtanden",
      "förbehåll"
     ],
     "correct": 1
    },
    {
     "num": 25,
     "text": "Överallt i världen finns mitt ibland oss _____ människoplågare, krigsförbrytare och bödlar, människor som plötsligt flyter upp i ofärdstider och som behöver en speciell grogrund för att växa och verka. I ett vaket demokratiskt samhälle saknas en sådan grogrund, och dessa presumtiva människoplågare framlever här sina år i lugn och ro, kanske omedvetna om de mörka krafter som finns _____ inom dem.",
     "options": [
      "exceptionella – förskansade",
      "samvetslösa – stålsatta",
      "grymma – skrinlagda",
      "potentiella – förborgade"
     ],
     "correct": 3
    },
    {
     "num": 26,
     "text": "I vissa län hade nästan två tredjedelar av klamydiafallen undgått upptäckt, trots att de varit i kontakt med sjukvården och lämnat prov. Hela situationen pekar på att vi haft en _____ dålig uppfattning om smittans utbredning i Sverige. Det tog lång tid att upptäcka att det fanns en ny variant _____, och det är ännu okänt i vad mån utebliven diagnos fått _____ inverkan på de drabbades reproduktiva förmåga.",
     "options": [
      "märkbart – inom räckhåll – förödande",
      "synnerligen – i omlopp – menlig",
      "förbluffande – på gång – avsedd",
      "vedertagen – i antågande – nedsatt"
     ],
     "correct": 1
    },
    {
     "num": 27,
     "text": "Personalen på Zoo beskriver det som en chock när isbjörnen Knut hittades livlös i hägnet på söndagen, och stadens borgmästare såg sig _____ att göra ett uttalande.",
     "options": [
      "tillägnad",
      "påtvingad",
      "föranledd",
      "bemyndigad"
     ],
     "correct": 2
    },
    {
     "num": 28,
     "text": "När det gäller impressionismen har åtskilliga _____ givits, och överensstämmelsen är liten mellan stilhistorikerna. Ibland ser man termens innebörd _____ intill det meningslösa, ibland trängs den samman så starkt att knappast någon konstnär ryms innanför dess gränser.",
     "options": [
      "tolkningar – utstakad",
      "definitioner – vidgad",
      "konstarter – upplöst",
      "utmärkelser – förkrympt"
     ],
     "correct": 1
    },
    {
     "num": 29,
     "text": "Den nya teknikens intåg på redaktionen väckte förundran. När den första skrivmaskinen inköptes på 1890-talet _____ den närmast ha betraktats som _____.",
     "options": [
      "verkar – en relik",
      "tenderar – en gimmick",
      "tycks – en kuriositet",
      "ansågs – en dyrgrip"
     ],
     "correct": 2
    },
    {
     "num": 30,
     "text": "De medeltida universiteten utbildade också administratörer, vilket ibland _____ dem speciella privilegier och gåvor från landets ledare.",
     "options": [
      "renderade",
      "anstod",
      "förebådade",
      "kvalificerade"
     ],
     "correct": 0
    }
   ]
  }
 ]
};
