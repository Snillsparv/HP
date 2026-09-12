// Högskoleprovet 12 mars 2022, provpass 2 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "vt2022mars-2",
 "tillfalle": "vt2022mars",
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
     "word": "proviant",
     "text": "<b>proviant</b>",
     "options": [
      "ryggsäck",
      "färdkost",
      "reskassa",
      "planering",
      "regnskydd"
     ],
     "correct": 1
    },
    {
     "num": 2,
     "word": "reflektera",
     "text": "<b>reflektera</b>",
     "options": [
      "betvivla",
      "säga ifrån",
      "motbevisa",
      "tänka igenom",
      "återberätta"
     ],
     "correct": 3
    },
    {
     "num": 3,
     "word": "foajé",
     "text": "<b>foajé</b>",
     "options": [
      "matsal",
      "arbetsrum",
      "entréhall",
      "klädkammare",
      "vindsrum"
     ],
     "correct": 2
    },
    {
     "num": 4,
     "word": "sekundär",
     "text": "<b>sekundär</b>",
     "options": [
      "avvikande",
      "stödjande",
      "försämrad",
      "omedelbar",
      "underordnad"
     ],
     "correct": 4
    },
    {
     "num": 5,
     "word": "inrådan",
     "text": "<b>inrådan</b>",
     "options": [
      "erbjudande",
      "uppmaning",
      "bestämmelse",
      "medverkan",
      "påstående"
     ],
     "correct": 1
    },
    {
     "num": 6,
     "word": "hålla låda",
     "text": "<b>hålla låda</b>",
     "options": [
      "stå stadigt",
      "prata oavbrutet",
      "bjuda på fest",
      "behärska sig",
      "invänta svar"
     ],
     "correct": 1
    },
    {
     "num": 7,
     "word": "hänförd",
     "text": "<b>hänförd</b>",
     "options": [
      "utvisad",
      "tankspridd",
      "bedragen",
      "tillfredsställd",
      "förtjust"
     ],
     "correct": 4
    },
    {
     "num": 8,
     "word": "premiss",
     "text": "<b>premiss</b>",
     "options": [
      "förutsättning",
      "försäkran",
      "förteckning",
      "föraning",
      "förbindelse"
     ],
     "correct": 0
    },
    {
     "num": 9,
     "word": "naturtroget",
     "text": "<b>naturtroget</b>",
     "options": [
      "enkelspårigt",
      "oskuldsfullt",
      "mycket likt",
      "hälsosamt",
      "variationsrikt"
     ],
     "correct": 2
    },
    {
     "num": 10,
     "word": "hedonist",
     "text": "<b>hedonist</b>",
     "options": [
      "sällskapsmänniska",
      "ordningsmänniska",
      "njutningsmänniska",
      "vanemänniska",
      "idealmänniska"
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
     "title": "Språk",
     "html": "<h4>SOLEN GÅR ALDRIG NER ÖVER DET SPRÅK SOM LJUGER.</h4>\n<p class=\"dikt\">När döden skrämmer, kalla den ”frid”.<br>När den ensamma våningen skrämmer, kalla den ”hem”.<br>När trängseln på gatorna skrämmer, kalla den ”gemenskap”.<br>När det globala ockret skrämmer, kalla det ”handel”.<br>När elitstyret skrämmer, kalla det ”folkstyre”.<br>När staten skrämmer, kalla den ”samhälle”.<br>När kaos skrämmer, kalla det ”frihet”.<br>När våldet skrämmer, kalla det ”lag”.<br>När natten skrämmer, kalla den ”dag”.</p>\n<p class=\"dikt\">Kalla den söndag eller måndag.<br>Mitt i natten byter dagarna namn<br>som om solen aldrig gick ner.</p>\n<p class=\"forf\">Göran Palm, 1971</p>\n<h4>FRÅN MARS -79</h4>\n<p class=\"dikt\">Trött på alla som kommer med ord, ord men inget språk<br>for jag till den snötäckta ön.<br>Det vilda har inga ord.<br>De oskrivna sidorna breder ut sig åt alla håll!<br>Jag stöter på spåren av rådjursklövar i snön.<br>Språk men inga ord.</p>\n<p class=\"forf\">Tomas Tranströmer, 1983</p>\n<h4>BJÖRKENS SPRÅK</h4>\n<p class=\"dikt\">Stammen som ett papper<br>som har tunnats ut med tiden<br>som ett brev som någon nuddat<br>tills det blivit siden<br>som ett ark med svarta tecken:<br>prickar, linjer, skåror<br>gamla ord som gömmer sig<br>i björkens mörka fåror</p>\n<p class=\"dikt\">Bara fingertoppar vet det,<br>hur man läser spåren<br>av ett hemligt språk som björken<br>skrivit under åren</p>\n<p class=\"forf\">Hanna Lundström, 2015</p>"
    },
    {
     "title": "Heterotrofa bakterier",
     "html": "<p>Tillgången på organiskt kol i naturliga vatten varierar. Under vissa perioder av året, som under och strax efter algblomning, är tillgången på denna typ av näring stor. Perioder däremellan är tillgången på organiskt kol mycket låg och de heterotrofa bakterierna, det vill säga de som lever på organiskt material, utsätts för perioder av svält. Dessa encelliga bakterier måste därför kunna stänga av ämnesomsättningen under perioder av svält och samtidigt ha en metabolisk beredskap för näringsupptag när organiskt material finns närvarande.</p>\n<p>Några bakteriearter har utvecklat speciella strategier för att klara perioderna av svält. Caulobacterna, till exempel, har utvecklat ett stjälklikt utskott för att öka cellytan så att mer näring kan tas upp. De kan också ackumulera näringsreserver. De flesta bakteriearter kan dock inte differentiera. Hur klarar då dessa icke-differentierande, heterotrofa bakterier svält och den stress som uppstår under perioder av näringsbrist? När uppstår svältlika förhållanden för bakterier?</p>\n<p>Man har gjort försök att dela in den heterotrofa bakteriepopulationen i två kategorier: oligotrofa och eutrofa organismer. Oligotrofa organismer skulle vara bakterier som kan leva och dela sig i näringsfattiga vatten med mindre än 15 mg organiskt kol per liter, och eutrofa organismer skulle bara kunna leva och dela sig under näringsrika förhållanden. Det visade sig att samtliga undersökta bakteriearter kunde leva och dela sig i näringsfattigt vatten förutsatt att lämplig kolkälla var tillgänglig. Alltså kan alla bakterier leva under mycket näringsfattiga förhållanden förutsatt att små mängder av rätt kolkälla finns närvarande.</p>\n<p>Naturligtvis måste heterotrofa, icke-differentierande bakterier reagera på näringsbrist, men hur? Man har studerat morfologiska förändringar, endogena metaboliska och genetiska förändringar samt reaktioner på flera stressmoment som till exempel svält, värme och UV-ljus, svält och oxidativ stress med mera. Reaktioner på flera stressmoment är speciellt intressanta, för om svältande bakterier inte reagerar som bakterier i tillväxt, hur fungerar då våra desinfektionsmetoder för till exempel dricksvatten, sjukvården och livsmedelsindustrin? Dessutom är det intressant då det kan tala om hur stressgener regleras.</p>\n<p><b>Morfologiska förändringar under svält</b> När heterotrofa bakterier har brist på organiskt kol blir cellytan mer hydrofob och sammansättningen av fettsyror i cellmembranet ändras. Detta tror man är bakteriens strategi för att nå ytor där det ansamlats fettsyror som ej är vattenlösliga, till exempel vattenytan eller fasta ytor. Den svultna hydrofoba bakterien dras fysiskt till den hydrofoba ytan och där äter den av fettsyrorna. Bakterien kommer då att öka i storlek, cellmembranets fettsyrasammansättning ändras, bakterien blir mer hydrofil och stöts bort från ytan. När den sedan får brist på kol igen, ändras cellytan och bakterien når ytfilmen av fettsyror, äter av den, stöts bort och så vidare.</p>\n<p><b>Fysiologiska förändringar under svält</b> De metaboliska reaktionerna på svält kan delas in i tre faser:</p>\n<p><b>Fas 1</b> är bakteriens omedelbara reaktion (0–30 minuter) på kolbrist. Syntesen av RNA, proteiner och cellvägg minskar snabbt. Nedbrytningen av proteiner (proteolysen) i cellen ökar.</p>\n<p><b>Fas 2</b> är en anpassningsfas som varierar i längd beroende på organism och tidigare kolkälla. Sammansättningen av fettsyrorna i cellmembranet ändras, syntesen av makromolekyler ökar för att sedan minska igen, halveringstiden på mRNA ökar och rRNA bryts ej ner. Detta betyder att cellen är beredd på proteinsyntes så fort organiskt kol finns närvarande.</p>\n<p><b>Fas 3</b> är en fortsättning på fas 2 där syntesen av makromolekyler fortsätter att sjunka. Cellmaterial som DNA, RNA, ribosomer, kolhydrater, proteiner och lipider bryts långsamt ner.</p>\n<p>Det är absolut nödvändigt att svältande bakterier kan sänka/stänga av ämnesomsättningen för att överleva. Svältande bakterier stänger inte av sin metabolism helt, utan går på sparlåga. Bakteriens anpassning till svältlika förhållanden verkar vara både en aktiv process och en avstängningsprocess. Genom att studera förändringar i proteinsammansättningen kan man identifiera vilka gener som aktiveras vid svält och vilka som stängs av.</p>\n<p>När man kom på att bakterier i stationärfas egentligen var bakterier som levde under näringsbrist tog svältforskningen fart. Man visste att bakterier som var i stationärfas var mer motståndskraftiga mot sekundär stress som värme, UV-ljus och exponering för väteperoxid. Detta visade sig gälla även för svältande bakterier. Man fann att olika typer av stress gav upphov till syntes av samma proteiner. Detta behöver dock inte betyda att dessa proteiner styrs av samma reglerande gener.</p>\n<p>Idag har svältforskningen utvecklats till allmän forskning om hur celler överlever och hur celler klarar olika typer av stress, hur gammal en cell kan bli och vad som skyddar cellen mot åldrande.</p>\n<p class=\"forf\">Åsa Jouper-Jaan</p>\n<p><b>metabolism</b> = ämnesomsättning<br><b>differentiera</b> = ombilda eller förändra sin ursprungliga form och struktur<br><b>morfologisk</b> = som avser kroppens, organens, vävnadernas, cellernas m.m. strukturella uppbyggnad och form<br><b>endogen</b> = inifrån kommande<br><b>stationärfas</b> = period av oförändrat tillstånd</p>"
    },
    {
     "title": "Stilla natt",
     "html": "<p>Visste ni att det finns ett ”Stilla natt”-museum i Salzburg? Där visas det enda bevarade manuskriptet som textförfattaren Joseph Mohr själv signerat. Denna klenod från 1822 eller 1823, som hade tonsatts några år tidigare, överlämnades till allmänheten av en familj i Salzburg så sent som 1995.</p>\n<p>Det finns många legender kring tillkomsten, men det man med säkerhet vet är att ”Stilla natt” föddes i byn Oberndorf just på en julafton och att den skrevs och tonsattes av bykyrkans eget folk. Den 24 december 1818 gav den 26-årige hjälpprästen Joseph Mohr en dikt till organisten Franz Xaver Gruber och bad honom skriva en passande melodi för två solostämmor, kör och gitarr. Redan samma kväll överräckte Gruber ”sin enkla komposition, som med stort bifall framfördes under den heliga natten”.</p>\n<p>Melodi och text spreds bland folket och fann snart vägen ut i världen. ”Stilla natt” blev en av 1800-talets mest populära melodier, inte minst sedan bruket införts att sjunga ”refrängen” en ters högre. Och så har det förblivit.</p>\n<p>Historiskt sett är ”Stilla natt” en sen företeelse. Medan protestantismen tidigt bemödade sig om lära och abstraktion i sina kyrkliga sånger gick katolska kyrkan andra vägar. De sceniska och dramatiska inslagen ökade, de bibliska berättelserna historiserades. Vad som under barocken fortfarande var ett evigt nu blev under det sena 1700-talet till ett förklarat då. Lite som i sagan: Det var en gång. Ett rum målas upp där mörker och tystnad råder. Ensamheten hos det vakande paret är kompakt – men stjärnan och barnet lyser. Maria vyssar den nyfödda.</p>\n<p>I den svenska översättningen, med sina tre strofer, tonas dramatiken ner och draget av vaggsång försvinner. Man har bråttom att förkunna budskapet.</p>\n<p>Stilla natt, heliga natt! Allt är frid. Stjärnan blid skiner på barnet i stallets strå, och de vakande fromma två. Kristus till jorden är kommen, oss är en frälsare född.</p>\n<p>I andra strofen vidgar sig perspektivet. Herdarna träder till med sin hjord, änglarna ”slår sin rund” och ”glädjens ord” förkunnas: ”Eder är Frälsaren född”. I den sista strofen ställs gryningen mot natten. Löftet om frälsning gäller alla människor: ”Räddningstimman för världen slår”.</p>\n<p>Vad säger det dagens människa? Inom ramen för ett större forskningsprojekt om liturgiska sånger vid universitetet i Mainz har litteraturprofessorn Hermann Kurzke tagit initiativet till en bok – <i>Geistliches Wunderhorn. Grosse deutsche Kirchenlieder</i> – om 50 tyska psalmer. ”Stilla natt” är en av dem. Artiklarna är skrivna av ett forskarlag bestående av främst teologer.</p>\n<p>Psalmerna röner nu samma öde som den världsliga sångskatten, menar redaktörerna. Därför vill man lyfta fram detta kulturarv och belysa det i god antikvarisk anda. I centrum för deras bemödanden står själva texterna, deras tillkomst, betydelse och vidare öden. Den poetiska och musikaliska kvaliteten har fått bestämma urvalet.</p>\n<p>”Stilla natt” anses av många vara höjden av kitsch. Med viss rätt, menar Kurzke, på vars lott det fallit att berätta om denna psalm. Dess ”terssalighet”, högstämt vaggande 6/8-takt, njutningsfulla glissando och ”lockiga gossebarn” trycker på alla knappar i det sentimentala registret. Fortfarande ackompanjerar de pastoralt klingande ackorden sången. Och ändå. Vari ligger dess magi? Hur kan det komma sig att människor från New York till Tokyo, från Haparanda till Kapstaden blir gripna av något som skrevs i en benådad stund av två enkla kyrkans tjänare?</p>\n<p>Kurzke närmar sig världens mest spelade julsång från dess estetiska sida. Som historisk genre är ”Stilla natt” en idyll och idyllen lever av längtan, inte av det som är. Den är satirens motsats, iscensätter den brist som satiren gisslar och målar upp som närvarande det som elegin sörjer som något förlorat. Under rokokon var herdeidyllen en oändligt populär genre som spreds från hoven till de borgerliga hemmen. ”Stilla natt” hör hemma i den sentimentala traditionen. Också den skrevs för att framkalla en känsla, ursprungligen stark och intensiv, måhända, men utan relation till livet. Rörelsen stannar i det rum som vigts åt den så kallade upplevelsekulturen.</p>\n<p>Idyllen ger hjärtat näring men inte anden, säger författaren och filosofen Friedrich Schiller strängt i sin estetiska lära. Den har stor verkan men förpliktigar till ingenting. ”Därför kan vi bara älska den och uppsöka den när vi söker frid, inte när vi strävar efter rörelse och handling. Idyllen kan stävja hjärtats oro men den ger ingen näring åt den friska viljan.” I ”Stilla natt”, hakar Kurzke på, försvinner det oerhörda vid Guds människoblivande bakom julkrubbans rörande ensemble. Den nakna nöd som Lukasevangeliet talar om får vika för en bokmärkesidyll. Tog man budskapet på allvar skulle man inte bara låta tårarna rinna utan leva därefter, säger Kurzke. Som det nu är kan man gripas av stundens högtid och sedan gå hem och leva som förut.</p>\n<p>Den moderna människan vill inte frälsas från synd utan från melankoli. Hon vill inte skakas av undret utan lugnas av en stämning. Den som plågas av grubbleriets ekorrhjul, sömnbesvär och utbrändhet har ett ständigt sug efter att själv bli som de ”fromma två”, eller rentav som barnet i krubban. Såtillvida är ”Stilla natt” en text för vår tid. Mor, far och barn, himmelsk ro och jordisk frid, så ser det moderna hoppet om saligheten ut. Ord som ”vakande” och ”vaktande” stillar sinnet. Vem vill inte skyddas i tre koncentriska ringar av föräldrar, goda herdar och en här av änglar? Och svepas in i orgelns mäktiga mantel och en gemenskap av röster?</p>\n<p>Vad berättar källorna om ”Stilla natt” och dess väg ut i världen? I början på 1830-talet tog en orgelbyggare text och melodi från Salzburg till Zillertal, där en sånggrupp inlemmade den i sin repertoar och turnerade med den till Leipzig. I de borgerliga salongerna hänfördes man av denna ”folkvisa från Tyrol”. 1833 trycktes den för första gången. Oräkneliga nytryck följde. Snart blev ”Stilla natt” en julklassiker, och under 1900-talet spreds den över världen.</p>\n<p>Här måste något stort föreligga, menar Kurzke. Sångens konstnärliga svaghet tycks samtidigt vara dess styrka. Inget rår på dess magi. Kanske just därför var kyrkan länge kallsinnig, inte minst den katolska. Detta var ingen psalm. Men i sånghäften för kolonierna och för soldater i fält dög den. Första världskriget innebar både en höjdpunkt och en kris. Ingen jul i skyttegravarna utan ”Stilla natt”! Nu rann tårarna för det bittra avståndet mellan verkligheten och barndomens fromma hänförelse. Visan från Salzburg fick status av psalm. Men bara hos protestanterna. 1945 försvann den ur psalmboken igen – för att återinföras 1993. Nu har även katolska kyrkan insett att en så populär julpsalm kan vara bra att ha. På svenska lanserades ”Stilla natt” 1889 i <i>Sionstoner</i>, och från 1921 finns den med i psalmboken i översättning av O. Mannerström.</p>\n<p class=\"forf\">Synnöve Clason</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vilket svarsförslag beskriver bäst vad Göran Palms respektive Hanna Lundströms dikt handlar om?",
     "options": [
      "Att sanningen är oåtkomlig respektive hemliga signaler i naturen.",
      "Ett språk som förskönar verkligheten respektive naturens eget språk.",
      "Att världen styrs av lögner respektive åldrandets spår i naturen.",
      "Ett språk som aldrig tystnar respektive naturens obegripliga språk."
     ],
     "correct": 1,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vilket av följande motsvarar bäst ”språk” i Tomas Tranströmers dikt?",
     "options": [
      "De språkliga upprepningarna i Göran Palms dikt.",
      "Uttrycket ”det språk som ljuger” i titeln till Göran Palms dikt.",
      "”Prickar, linjer, skåror” i Hanna Lundströms dikt.",
      "”Fingertoppar” i Hanna Lundströms dikt."
     ],
     "correct": 2,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vad av följande nämns i texten som argument för att kunskapen om heterotrofa bakteriers svälttillstånd är viktig?",
     "options": [
      "Bakteriers motståndskraft kan komma till användning i kampen mot vissa närings- och åldersrelaterade sjukdomar.",
      "Bakteriers reaktioner kan ge kunskap om hur man minskar stress i allmänhet.",
      "Bakterier kan utnyttjas för att rena vatten i olika sammanhang.",
      "Bakterier kan visa sig överleva behandlingar som man tidigare trott vara bakteriedödande."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vad har forskningen visat när det gäller antagandet att man kan dela upp icke-differentierande bakterier i olika kategorier?",
     "options": [
      "Att uppdelningen är för odetaljerad.",
      "Att antagandet är korrekt.",
      "Att uppdelningen är omotiverad.",
      "Att antagandet sannolikt stämmer, men att fler studier behövs."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vilken ny insikt blev enligt texten ett viktigt steg för den fortsatta forskningen kring cellers överlevnad?",
     "options": [
      "Att näringsbrist kan göra bakterier mer stresståliga.",
      "Att svält egentligen bör ses som sekundär stress.",
      "Att bakteriers reaktion på näringsbrist kan delas in i tre faser.",
      "Att svält kan leda till att bakterier blir mer aktiva."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Vilken av följande rubriker sammanfattar bäst vad texten handlar om?",
     "options": [
      "Svält – naturligt tillstånd hos bakterier",
      "Olika bakterier, samma överlevnadsstrategi",
      "Organiskt kol avgörande för bakteriens liv",
      "Så hanterar bakterier näringsbrist"
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Vad skiljer enligt texten idyllen från satiren och elegin?",
     "options": [
      "Att den skildrar ett religiöst motiv.",
      "Att den främst verkar via musiken.",
      "Att den avbildar något positivt.",
      "Att den bygger på symbolik."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Vad är enligt texten förklaringen till att ”Stilla natt” får gensvar ännu i vår tid?",
     "options": [
      "Att den bär på ett löfte om förlåtelse.",
      "Att den ger en känsla av lugn och trygghet.",
      "Att den har ett oförklarligt budskap om frälsning.",
      "Att den bejakar allmänmänskliga värden."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Vad kan utifrån texten sägas om ”Stilla natts” spridning och popularitet?",
     "options": [
      "Sången betraktades som en psalm ända fram till första världskriget då den ströks ur psalmboken.",
      "Trots sitt protestantiska ursprung blev sången tidigt accepterad i den katolska traditionen.",
      "Sången kom att få störst genomslag utanför de tysktalande länderna.",
      "Trots sina kyrkliga rötter uppskattades sången länge främst i icke-kyrkliga sammanhang."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Hur kan Synnöve Clasons text bäst karaktäriseras?",
     "options": [
      "Som beskrivande och analyserande.",
      "Som kåserande och underhållande.",
      "Som teoretiserande och spekulerande.",
      "Som granskande och ifrågasättande."
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
     "text": "Skolfrånvaro är inte sällan ett tecken på en _____ kombination av olika slags problem, vilket gör att barn och ungdomar som skolkar ofta är i behov av samordnad hjälp från flera typer av _____ inom skilda verksamheter.",
     "options": [
      "konkret – tjänster",
      "komplex – professioner",
      "konstant – behandlingar",
      "komplett – utbildningar"
     ],
     "correct": 1
    },
    {
     "num": 22,
     "text": "Nästan alla kompositmaterial _____ med ljus. Det innebär att materialet stelnar när tandläkaren lyser på det med blått ljus.",
     "options": [
      "härdas",
      "stimuleras",
      "mättas",
      "plomberas"
     ],
     "correct": 0
    },
    {
     "num": 23,
     "text": "Den optimala trädgårdsstaden var tänkt att _____ cirka 2 400 _____ och ge plats för 30 000 invånare som kunde både bo och arbeta i staden. Den omgivande _____ skulle kunna hysa ytterligare 2 000 personer.",
     "options": [
      "omfatta – hektar – landsbygden",
      "utrymma – familjer – förorten",
      "motsvara – meter – bebyggelsen",
      "anlägga – hushåll – miljön"
     ],
     "correct": 0
    },
    {
     "num": 24,
     "text": "Precis som människor lär sig hundar saker hela tiden, men därmed inte sagt att allt de lär sig enbart är _____. Man bör vara _____ för hur hunden mår i stunden och undvika att utsätta den för dåliga erfarenheter.",
     "options": [
      "för evigt – känslig",
      "med flit – vaksam",
      "till gagn – resolut",
      "av godo – lyhörd"
     ],
     "correct": 3
    },
    {
     "num": 25,
     "text": "Den vanligaste behandlingen vid pollenallergi är symtomlindrande läkemedel, som till exempel _____, kortison, ögondroppar och nässpray.",
     "options": [
      "antioxidanter",
      "antiperspirant",
      "antikroppar",
      "antihistaminer"
     ],
     "correct": 3
    },
    {
     "num": 26,
     "text": "Hyperrealismen, den närmast fotografiska _____ av människan, dök upp på 1960-talet. Den var en skulptural, verklighetsnära _____ den abstrakta expressionismen.",
     "options": [
      "förvandlingen – förlängning av",
      "uppfattningen – hyllning till",
      "återgivningen – reaktion mot",
      "tillblivelsen – inspiration för"
     ],
     "correct": 2
    },
    {
     "num": 27,
     "text": "Något som har präglat Norrland är arbete och mobilitet. Det norrländska samhället är inte ett resultat av långsamma dynamiska processer, utan tvärtom har städer och mindre orter uppstått kring _____, i sin tur styrda av centralmaktens eller kapitalets råvarubehov.",
     "options": [
      "deformeringar",
      "interventioner",
      "exploateringar",
      "reproduktioner"
     ],
     "correct": 2
    },
    {
     "num": 28,
     "text": "Läromedlen i litteraturkunskap, med sina korta utdrag ur böcker och sin fokusering på symboler och _____, hackar sönder läsningen och förhindrar att eleverna sugs in i läsupplevelsen. Många hakar upp sig, fastnar vid orden och når inte fram till det väsentliga, _____, den röda tråden som gör att man håller sig kvar i _____ värld. Dessa elever riskerar att aldrig bli läsare av skönlitteratur.",
     "options": [
      "satsdelar – kärnan – didaktikens",
      "stilarter – intrigen – fiktionens",
      "formuleringar – avgörandet – dramatikens",
      "motiv – kontentan – peripetins"
     ],
     "correct": 1
    },
    {
     "num": 29,
     "text": "Förändringarna går i dag så fort att upplevelsen av samtiden krymper. Med samtid menas här den tidsrymd under vilken handlingsbetingelserna är så pass _____ att vi kan _____ konsekvenserna av våra handlingar.",
     "options": [
      "stabila – förutse",
      "tvingande – acceptera",
      "föränderliga – förstå",
      "abstrakta – missuppfatta"
     ],
     "correct": 0
    },
    {
     "num": 30,
     "text": "Arbetsplatsen ska erbjuda kontinuerlig utbildning i ämnet för att säkerställa att personalgrupperna har _____ kunskaper för att utföra sina arbetsuppgifter.",
     "options": [
      "adekvata",
      "balanserade",
      "cementerade",
      "definitiva"
     ],
     "correct": 0
    }
   ]
  }
 ]
};
