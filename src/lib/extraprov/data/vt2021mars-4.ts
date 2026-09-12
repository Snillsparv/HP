// Högskoleprovet 13 mars 2021, provpass 4 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "vt2021mars-4",
 "tillfalle": "vt2021mars",
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
   38,
   0.7
  ],
  [
   41,
   0.8
  ],
  [
   45,
   0.9
  ],
  [
   48,
   1.0
  ],
  [
   52,
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
   62,
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
     "word": "norm",
     "text": "<b>norm</b>",
     "options": [
      "förslag",
      "skala",
      "regel",
      "lärdom",
      "handling"
     ],
     "correct": 2
    },
    {
     "num": 2,
     "word": "lyhörd",
     "text": "<b>lyhörd</b>",
     "options": [
      "förbisedd",
      "mottaglig",
      "tondöv",
      "oresonlig",
      "tålmodig"
     ],
     "correct": 1
    },
    {
     "num": 3,
     "word": "föranleda",
     "text": "<b>föranleda</b>",
     "options": [
      "orsaka",
      "övertyga",
      "tillföra",
      "godkänna",
      "senarelägga"
     ],
     "correct": 0
    },
    {
     "num": 4,
     "word": "manifestation",
     "text": "<b>manifestation</b>",
     "options": [
      "provokation",
      "stridsrop",
      "motsättning",
      "avslöjande",
      "opinionsyttring"
     ],
     "correct": 4
    },
    {
     "num": 5,
     "word": "således",
     "text": "<b>således</b>",
     "options": [
      "dessförinnan",
      "motsvarande",
      "visserligen",
      "däromkring",
      "följaktligen"
     ],
     "correct": 4
    },
    {
     "num": 6,
     "word": "tillämpning",
     "text": "<b>tillämpning</b>",
     "options": [
      "kontroll",
      "grund för bedömning",
      "justering",
      "praktisk användning",
      "bestämmelse"
     ],
     "correct": 3
    },
    {
     "num": 7,
     "word": "vedertagen",
     "text": "<b>vedertagen</b>",
     "options": [
      "åsidosatt",
      "tagen på allvar",
      "tvingande",
      "allmänt accepterad",
      "förutbestämd"
     ],
     "correct": 3
    },
    {
     "num": 8,
     "word": "sejour",
     "text": "<b>sejour</b>",
     "options": [
      "ögonblick",
      "kortare vistelse",
      "omloppsbana",
      "historisk epok",
      "rundvandring"
     ],
     "correct": 1
    },
    {
     "num": 9,
     "word": "låta undslippa sig",
     "text": "<b>låta undslippa sig</b>",
     "options": [
      "kasta bort",
      "vägra ta ställning",
      "ivrigt förneka",
      "tanklöst råka säga",
      "dra sig tillbaka"
     ],
     "correct": 3
    },
    {
     "num": 10,
     "word": "farsot",
     "text": "<b>farsot</b>",
     "options": [
      "riskfylld aktivitet",
      "giftutsläpp",
      "vilseledande information",
      "missbruk",
      "smittsam sjukdom"
     ],
     "correct": 4
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
     "title": "Istider",
     "html": "<p><b>Fråga:</b> Känner man till varför det blir istider? Kan det vara ändringar i jordaxelns vinkel mot solen eller är det solens aktivitet som ändras?</p>\n<p class=\"forf\">Uno Wictorsson</p>\n<p><b>Svar:</b> Det globala klimatet styrs av planetens strålningsbalans, det vill säga hur mycket strålning som träffar respektive utgår från jordklotet. Det är tre saker som styr: hur mycket solstrålning som träffar jordytan, hur mycket av solstrålningen som reflekteras samt hur mycket strålning från jorden som reflekteras tillbaka till jordytan (växthuseffekt).</p>\n<p>Hur istider kommer och går styrs framför allt av periodiska variationer i den inkommande solstrålningen. Sådana variationer kallas Milanković-cykler och styrs av formen på jordens bana runt solen, hur mycket jordaxeln lutar och åt vilket håll den lutar. Detta styr inte bara hur mycket solstrålning som träffar jorden, utan också hur solstrålningen fördelas mellan säsonger och delar av jordklotet.</p>\n<p>Det är inte helt klart vad som startar en istid, men forskningen talar för att det är sommartemperaturen som styr. Om vinterns snö inte hinner smälta bort under sommaren så kommer snömängden att öka från år till år. När snötäcket väl har börjat växa så förstärks avkylningen av så kallade återkopplingsmekanismer i strålningsbalansen: En snötäckt yta reflekterar mer solljus än barmark och koldioxidhalten i atmosfären sjunker i ett kallare klimat, vilket minskar växthuseffekten och gör att det blir ännu kallare. På samma sätt, fast tvärtom, fungerar det när en istid tar slut. Naturligtvis tar det lång tid att bygga upp och smälta bort stora landisar – den senaste istiden kulminerade för cirka 21 000 år sedan och tog slut för cirka 10 000 år sedan. Nästa istid beräknas starta om cirka 30 000 år.</p>\n<p class=\"forf\">Gustav Strandberg</p>"
    },
    {
     "title": "Vård för samhällets bästa",
     "html": "<p>Det vilar en mild ironi över historikern Jenny Björkmans avhandlingstitel, <i>Vård för samhällets bästa</i>. Underrubriken ger besked om att det inte handlar om vilken vård som helst utan om tvångsvård såsom den legitimerats och debatterats i svensk lagstiftning 1850–1970.</p>\n<p>Vad är samhällets bästa? Och vilket pris kan anses rimligt för individen att betala i form av ofrivillig isolering och behandling? Ja, det är svåra frågor att besvara för alla samhällen som säger sig värna demokratiska värden och rättssäkerhet. Jenny Björkman anger att syftet med hennes studie är att undersöka ”var gränserna för statliga ingripanden i det privata har gått i Sverige, samt om och hur dessa gränser har förändrats”. Tidsligt omfattar studien 1850 till 1970. Det är alltså, som Björkman skriver, idéerna och argumentationen kring tvångsvård som står i centrum för avhandlingen.</p>\n<p>Det här är en rejäl avhandling på över 300 sidor, disponerade kronologiskt med utgångspunkt i en periodisering av det moderna samhället: den klassiskt liberala staten, den socialliberala staten samt välfärdsstaten. Med den klassiskt liberala staten avses idéerna om en svag, icke-ingripande stat från 1800-talets mitt till cirka 1890. Perioden 1890-talet till 1930-talet benämns en socialliberal stat och kännetecknas av ett allt större statligt ingripande. Tiden från 1930 och fram till 1970-talet benämns välfärdsstaten och beskrivs i termer av participatorisk kapitalism. Denna disposition har fördelen att den är saklig och lättöverskådlig. Den tycks också väl ämnad för framställningen som återkommande behandlar synen på tvångsvård av veneriskt, epidemiskt och psykiskt sjuka samt missbrukare.</p>\n<p>Avhandlingen bygger framför allt på statliga utredningar men också propositioner, riksdagsdebatter och lagtexter. Inledningsvis redovisas hur tvångsvården var organiserad och vilka aktörer som omgav den. Redan här introduceras ett tema som leder rakt igenom problemfältet, det vill säga förhållandet mellan jurister och medicinare. Björkman visar hur läkarna under den studerade perioden fick stort inflytande över tvångsvården, liksom över många andra frågor som rörde samhälleliga missförhållanden och deras åtgärdande. Björkman ser läkarnas ökade inflytande som ett tecken på en generell medikaliseringsprocess. Först i välfärdssamhällets utredningar skulle läkarnas inflytande minska.</p>\n<p>I de fyra materialredovisande kapitlen påvisar Björkman hur staten från mitten av 1800-talet visade allt större benägenhet att gripa in i privatpersoners liv. Hon uppmärksammar det faktum att flera nya tvångslagar tillkom under samma period som många liberala och individuella rättigheter formulerades. Hon understryker dock att tvångsingripanden vid denna tid inte var någon nyhet. Det var argumenten för åtgärderna som ändrade karaktär och fick en medicinsk gemensam nämnare.</p>\n<p>Mellan 1890 och 1930 genomfördes i Sverige en serie demokratiska reformer. Samtidigt stiftades flera lagar som medgav tvångsåtgärder. 1913 års alkoholistlag, 1918 års Lex veneris och 1919 års epidemilag är exempel som alla innebar möjligheter till tvångsvård. Björkman uppmärksammar sociala aspekter på tvångsvården och hur fattigdom och klasstillhörighet gavs stor betydelse i bedömningen av vem som ansågs i behov av tvångsvård. Inte minst alkoholism framställdes som ett underklassproblem. Här framgår också hur argumenten för tvång kopplades till försörjningsdugligheten. Lösdriveri och fattigvård var tydligt relaterade till alkoholproblematiken. Anstaltsbehandlingens innehåll kretsade också kring arbete och frisk luft, det vill säga två företeelser som verkade saknas i alkoholistens liv. Lättja ansågs inte bara omoraliskt utan också hälsofarligt eftersom den ansågs ha menlig inverkan på nervsystemet och hjärnans utveckling.</p>\n<p>Jenny Björkman konstaterar att det var kombinationen av argument som syftar på sjuklighet och samhällsfarlighet som motiverade tvångsvården. Samtidigt underströks under 1900-talets första decennier interneringen som en förmån för individen, liksom det samhälleliga behovet av att säkerställa fullgoda framtida generationer.</p>\n<p>Vad läsaren börjar skönja är en lagstiftande verksamhet som i ganska låg grad skiftar karaktär men vars argument möjligen förändras. Farlighet, sjuklighet och samhällsskydd är parametrar som återkommer under hela den studerade perioden. Skyddsobjektets namn förändras från nationen och folket till att under folkhemmets dagar framför allt få benämningen samhället.</p>\n<p>Rättfärdigandet av tvångsvård har, skriver Björkman, karakteriserats av samsyn och kontinuitet, som det tycks oberoende av samhällsskick och politiska vindar. En grundläggande förändring finner Björkman först på 1960-talet, som innebar ett brott med synen på statliga ingrepp mot individen. Vilka konsekvenser detta fick för tvångsvården ligger dock utanför studiens ram. Avhandlingens intressantaste resultat återfinns, som jag ser det, i kontinuiteten och samsynen i fråga om tvångsvården.</p>\n<p>Björkman återkommer istället till andra fenomen som skär igenom detta tvångsvårdens spår i industrisamhället. Så argumenterar hon för att tvångsvården vilade på en medikaliserad världsbild, konstruerad på 1800-talet. Vid flera tillfällen återkommer hon till begreppet medikalisering och sätter det som en stämpel på vissa företeelser. Jag har ingen orsak att tvivla på relevansen av att göra det, men skulle ändå gärna ha sett en mer problematiserande användning. Vad innebär egentligen medikalisering? Och på vilket sätt förändras innebörden av begreppet under den studerade perioden?</p>\n<p>Sådana tveksamheter inför analysen får mig att återkomma till avhandlingens disposition. Det tycks mig som om den inte bara har en fördel i att vara tydlig och rak. Kronologi och periodisering lämpar sig visserligen väl för beskrivning och resultatredovisning. Men i det här fallet undrar jag om inte dispositionen har hämmat analysen och de oväntade associationsbanorna utanför det mest uppenbara socialpolitiska och medicinska fältet. Som alternativ hade jag föredragit att analyserna följde deskriptionen i hälarna. Dels för att analysen blir effektivare och mer pedagogisk, dels för att tydligare visa att redovisningen av källmaterialet inte står fri från teoretiska antaganden.</p>\n<p>Ibland är det besvärligt att förhålla sig till Björkmans text. För mig gäller det främst frågan om när hon skriver själv och när hon återger någon källas uppfattning. Redan i inledningen understryker Björkman att fokus är ställt på den inställning till tvångsvård som kommer till uttryck i lagstiftningen och inte hur den praktiserades. Det är viktigt att denna begränsning uttalas. Möjligen är jag väl fyrkantig i min läsning av vissa passager, och kanske menar Jenny Björkman att somt bör kunna förstås som en historisk företeelse med ledning av orimligheten att hon själv skulle vara källan. Men det skapar ändå osäkerhet hos läsaren när det inte står klart vem som talar, forskaren eller de historiska källorna.</p>\n<p>Sådana synpunkter förtar emellertid inte förtjänsterna med avhandlingen, som är resultatet av en imponerande empirisk undersökning.</p>\n<p class=\"forf\">Lars-Eric Jönsson</p>"
    },
    {
     "title": "Rent mjöl i påsen",
     "html": "<p>Den 29 april 1978 parkerade snickaren Torsten Leander sin bil på Djäkneparksskolans gård i Norrköping. Det visade sig vara ett ödesdigert misstag. Inte så att det rådde parkeringsförbud på platsen, snarast tvärtom. Skolgården var nämligen reserverad för deltagarna i vänsterföreningen Folket i Bild/Kulturfronts årsstämma. Men årsstämman var en begivenhet som inte bara lockade till sig föreningsmedlemmar. Ute på skolgården gick en spanare från den lokala Säpo-sektionen och antecknade bilnumren. Leander hade inte begått något brott, inte ens en parkeringsförseelse. Han hade bara oturen att fastna i ett av det kalla krigets otaliga osynliga övervaknings- och söksystem.</p>\n<p>Idag, i post-Snowden-erans begynnande digitala baksmälla, tvingas vi alla åtminstone börja fundera på konsekvenserna av det nya globaliserade övervakningssamhälle vi tämligen motståndslöst låtit oss byggas in i. Här behövs inga spanare som går runt och antecknar bilnumren. Dagens Leander skulle redan ha fastnat på dussintals övervakningskameror på sin färd från Stockholm till Norrköping, hans statusuppdateringar skulle fortlöpande vara redovisade på Facebook, lunchbrickan vara avbildad och mejl till vänner och bekanta i rotation ute på det globala nätet.</p>\n<p>Men varför bry sig? Öppenheten är tidens melodi. Om det är stångkorv och stuvad potatis till lunch i Djäkneparksskolans matsal – so what? Vi ler åt våra trivialiteter, de kan ju inte skada oss. De är helt enkelt för många och för obetydliga. Och dessutom: den som har rent mjöl i påsen har ju inget att vara orolig för.</p>\n<p>Där om inte förr borde vi stanna upp. Inget argument för massövervakningens harmlöshet upprepas så ofta och med sådant eftertryck som just detta. Vi bryr oss inte om vanliga medborgares mejl och telefonsamtal, försäkrar president Obama när han ska försvara kommunikationsspaningens kosmiska dimensioner. Samma sak bedyrar ministrar, generaler och myndighetschefer. Men ingen medborgerlig eller parlamentarisk kontrollinstans som hittills sett dagens ljus kan verifiera att det förhåller sig så. Snarare visar den samlade erfarenheten från 1900-talets analoga övervakningssystem att det förhåller sig tvärtom, att övervakningssystemens inneboende logik gång på gång riskerar att gå ut över just dessa vanliga medborgare.</p>\n<p>Det finns utifrån dessa erfarenheter tre huvudsakliga fel i argumentet om rent mjöl i påsen.</p>\n<p>Det första och vanligaste felet är antagandet att rent mjöl per definition rinner rakt igenom systemet. Ingen förväntas vara intresserad av den triviala informationen och den oskyldige förblir oskyldig till dess motsatsen bevisats. I den bästa av världar är det kanske så, men övervakningssystem fungerar enligt en annan logik där också små avvikelser och slumpmässiga sammanträffanden blir intressanta. Utifrån denna logik spelade det ingen roll om Leander varit på Djäkneparksskolan för att delta i årsmötet eller, som nu var fallet, för att snickra upp en mellanvägg.</p>\n<p>Ju större datamängder som flödar genom systemet och ju fler olika kategorier av information som läggs in, desto fler kommer de misstänkta sambanden att bli. Eller annorlunda uttryckt: ju mer mjölet siktas, desto mindre blir sannolikheten att det visar sig vara entydigt rent. Kategorin ”vanlig medborgare” krymper därmed ihop för att i lägen av extrem vaksamhet till sist helt försvinna.</p>\n<p>Det andra felet är att underskatta kraften i det konspirativa tänkandet. De som tillräckligt intensivt söker efter misstänkta avvikelser kommer förr eller senare att börja hitta dem, vare sig de finns eller inte. Leander hamnade i registret därför att Säpo sökte efter subversiva element i allt vidare kretsar. Information samlades in och registrerades för att hotbilderna krävde det, och ju mer registren svällde, desto mer bekräftades hotbilden. Om de misstänkta mönstren började avta var också detta något oroande: det bevisade bara att fiendens undergrävande verksamhet hade blivit alltmer sofistikerad. Övervakaren lägger inte bara pussel utan bestämmer också i hög grad vad bilden ska föreställa.</p>\n<p>Det tredje felet är att betrakta frågan om mjölets renhet som något objektivt och konstant. Om mitt mjöl är rent idag, så är det också rent imorgon och någon annanstans. Vanliga medborgare tenderar att ta vanligheten för given men det borde de inte göra. Plötsliga skiften i hotbilden kan spä på det konspirativa tänkandet och få mjölet att hastigt skifta färg. 1940 blev praktiskt taget alla utlänningar i Sverige per definition misstänkta för statsfientlig verksamhet. Det spelade inte minsta roll om mjölet var rent eller inte, det var påsen som var fel. Det räckte med att svenska myndigheter kunde anta att en persons blotta existens kunde misshaga främmande makt (gissa vilken) för att de skulle interneras.</p>\n<p>Efter den 11 september 2001 drabbades i ett slag tusentals människor runt om i världen av en våg av repression. I många fall bottnade denna i att tidigare triviala förhållanden som etnicitet, resemönster och släktrelationer uppgraderats till potentiella larmsignaler. Andra som redan var under misstanke framstod nu som akuta hot, något som drabbade de två egyptierna Mohammed Alzery och Ahmed Agiza som senare samma år hastigt avvisades från Sverige till Egypten med amerikansk handräckning.</p>\n<p>Men Leander då? I början hände ingenting, i enlighet med ordspråket att det man inte känner till har man heller inte ont av. Sedan började saker hända. Han träffade en gammal bekant som var intendent på Marinmuseet i Karlskrona och som kunde ordna ett snickarjobb. Museet låg utanför örlogsbasen men personalen brukade gå till marketenteriet inne på basen och dricka kaffe. Den nitiske säkerhetschefen lade märke till detta förhållande och drev på frågan om att kontrollera vad som fanns i Säpos register om den nye snickaren. Året var 1979 och man kunde inte veta i vilka nya och skenbart oförargliga former fienden bedrev sin infiltration.</p>\n<p>Så en dag fick Leander sparken med omedelbar verkan. Hans bekant intendenten förklarade att han inget kunde göra, att det här låg högre upp. Leander besvärade sig men fick avslag. Han skrev till regeringen som lämnade hans inlaga utan åtgärd. Han klagade hos Europadomstolen varpå regeringen hänvisade till skyddet av rikets säkerhet. Först 1997 gav regeringen upp, lät Leander se sin akt och betalade skadestånd.</p>\n<p>Den stora hemlighet som de ansvariga skyddat i alla år var inte några hemliga belastande uppgifter, att Leander minsann inte haft rent mjöl i påsen. Det var att påsen var tom. Fast inte riktigt, för nere i hängmappen låg ju den lilla lappen med texten ”Angående PB GSC 645, som ägs av L. stod nämligen under förstnämnda tid parkerad inne på skolgården”.</p>\n<p class=\"forf\">Wilhelm Agrell</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vilket påstående är korrekt, utifrån vad som anges i texten?",
     "options": [
      "En ökad snömängd förstärker växthuseffekten.",
      "Det tar längre tid för en landis att byggas upp än att smälta bort.",
      "Förändringar i jordaxelns lutning är ett slags återkopplingsmekanism.",
      "Under en Milanković-cykel sker både uppvärmning och avkylning."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Frågeställaren föreslår själv två tänkbara orsaker till att det blir istider. Får han stöd för dem i svaret?",
     "options": [
      "Ja, han får stöd för den första men inte den andra.",
      "Ja, han får stöd för den andra men inte den första.",
      "Ja, han får stöd för båda.",
      "Nej, han får inte stöd för någon."
     ],
     "correct": 0,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vilken motsättning i den klassiskt liberala statens agerande nämner Jenny Björkman, enligt textförfattaren?",
     "options": [
      "Motsättningen mellan anstaltsbehandling och frivillig vård.",
      "Motsättningen mellan kapitalism och socialism.",
      "Motsättningen mellan tvångslagar och ökade medborgerliga rättigheter.",
      "Motsättningen mellan politiska och medicinska lösningar."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vilket av följande lyfter texten fram som en bakomliggande orsak till åtgärden tvångsvård?",
     "options": [
      "Överklassens dominans i det politiska och sociala livet.",
      "Tendensen att göra sociala missförhållanden till medicinska problem.",
      "Övergången från socialliberalt samhälle till välfärdsstat.",
      "Samhällets allt starkare betoning av individens eget ansvar."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vilken invändning har textförfattaren mot hur avhandlingen är upplagd?",
     "options": [
      "Dess svårgenomträngliga struktur motverkar försöken att tränga djupare in i ämnet.",
      "Dess tidsindelningar är visserligen pedagogiska men alltför godtyckligt valda.",
      "Dess strikta indelning i tidsperioder kan ha begränsat analysens möjligheter.",
      "Dess tidsindelning försvårar möjligheten att förstå sambandet mellan individ och samhälle."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Vilket av Jenny Björkmans forskningsresultat ser textförfattaren som det viktigaste?",
     "options": [
      "Att stödet för tvångsvården under den studerade perioden var anmärkningsvärt stabilt.",
      "Att förespråkarna för tvångsvård var knutna till ett visst politiskt läger.",
      "Att effektiviteten hos tvångsvården aldrig ifrågasattes av politikerna.",
      "Att de styrandes syn på tvångsvård skilde sig från medborgarnas."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Vad innebär begreppet ”konspirativt tänkande”, om man utgår från texten?",
     "options": [
      "Att i princip alla misstänks vara skyldiga tills motsatsen bevisats.",
      "Att en hotbild alltid bygger på en oändlig mängd triviala iakttagelser.",
      "Att saker tenderar att tolkas som bekräftelser på en förutbestämd uppfattning.",
      "Att övervakning alltid sker utifrån enkla uppfattningar om ”gott” och ”ont”."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Vad bekräftades 1997 angående Torsten Leander?",
     "options": [
      "Att han var den ende som blev registrerad i samband med årsstämman.",
      "Att Säpo regelbundet hade övervakat honom.",
      "Att hans vänskap med militärer aldrig utgjorde någon säkerhetsrisk.",
      "Att uppsägningen av honom var felaktig."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Textförfattaren invänder mot argumentet att den som har rent mjöl i påsen inte behöver oroa sig för den digitala massövervakningen. Vilken invändning har han?",
     "options": [
      "Ju mer systematisk övervakningen är, desto större risk att den politiska makten missbrukas.",
      "Ju mer omfattande övervakningen blir, desto fler kommer att framstå som misstänkta.",
      "Ju mer genomtänkt övervakningen är, desto större risk att vanliga medborgare drabbas.",
      "Ju mer detaljerad övervakningen blir, desto färre slutsatser kommer att dras."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Hur sammanfattar man bäst texten som helhet?",
     "options": [
      "Som en misstroendeförklaring mot den digitala teknikens utvecklingsmöjligheter.",
      "Som en förklaring till övervakningssamhällets uppkomst.",
      "Som en varning för det digitaliserade samhällets potentiella följder.",
      "Som en argumentation för behovet av en statligt kontrollerad övervakning."
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
     "text": "Forskarna intresserar sig för så kallade socialekologiska system, det vill säga system där människa och natur studeras som en _____ helhet. I fokus står systemens _____, alltså deras förmåga att klara av förändring och vidareutvecklas.",
     "options": [
      "integrerad – resiliens",
      "manipulativ – ambition",
      "retorisk – modellering",
      "kreativ – konkurrens"
     ],
     "correct": 0
    },
    {
     "num": 22,
     "text": "Under det sena 1980- och tidiga 1990-talet såg man det som visades på tv just då, eller så såg man ingenting alls. Ett missat avsnitt kunde inte ses igen, vilket gjorde det närmast omöjligt att skapa de djupa, invecklade berättelser som _____ nutidens hyllade serier.",
     "options": [
      "indikerar",
      "rymmer",
      "summerar",
      "präglar"
     ],
     "correct": 3
    },
    {
     "num": 23,
     "text": "Det blir lättare att _____ arbete och fritid om man själv får bestämma när arbetet ska utföras, men det finns också hälsorisker med ständig tillgänglighet. Kraven på _____ ser olika ut på olika arbetsplatser, och därför behövs det ett aktivt lokalt arbete för att _____ eventuella problem, hitta lösningar och komma överens på arbetsplatsen.",
     "options": [
      "inkludera – närvaro – undanröja",
      "separera – anpassning – dämpa",
      "urskilja – flexibilitet – bemöta",
      "kombinera – nåbarhet – identifiera"
     ],
     "correct": 3
    },
    {
     "num": 24,
     "text": "Det är rimligt att anta att amningen, som är ett barns första och oftast positiva erfarenhet av mat och ätande, utgör grunden för en initial _____ mot fast föda.",
     "options": [
      "skepsis",
      "distans",
      "influens",
      "arrogans"
     ],
     "correct": 0
    },
    {
     "num": 25,
     "text": "Olja, kol och gas måste bli kvar i marken, annars är klimatkollapsen ofrånkomlig. De båda forskarna diskuterar sakligt och prövande olika förslag på lösningar, till exempel utsläppstak som efterhand _____ för att en gradvis _____ av fossila bränslen ska bli möjlig.",
     "options": [
      "säkras – avknoppning",
      "sänks – utfasning",
      "skärps – frånkoppling",
      "släpps – inlagring"
     ],
     "correct": 1
    },
    {
     "num": 26,
     "text": "Eftersom betyg i gymnasieskolan sätts efter varje avslutad kurs och många av dessa kurser är relativt korta kan undervisningen upplevas som _____, det vill säga att helheten går förlorad och att progressionen i lärandet blir svår att se.",
     "options": [
      "abstrakt",
      "omotiverad",
      "ambivalent",
      "fragmenterad"
     ],
     "correct": 3
    },
    {
     "num": 27,
     "text": "Jag vill i detta sammanhang även passa på att rikta ett varmt tack till redaktören, som med _____ slagit ner på _____ formuleringar och andra oklarheter i texten.",
     "options": [
      "järngrepp – betänksamma",
      "falkblick – svävande",
      "spjutspets – obestyrkta",
      "glosögon – vankelmodiga"
     ],
     "correct": 1
    },
    {
     "num": 28,
     "text": "För femtio år sedan _____ den totala mängden utestående krediter i USA till 3 000 miljarder dollar. Idag är siffran 58 000 miljarder och stigande. Skuldbördan i USA har kommit att utvecklas till ett svårartat _____. Det har krävts en ständigt ökad _____ av nya lån samtidigt som utväxlingen i form av ekonomisk tillväxt blivit allt svagare.",
     "options": [
      "tilltog – dilemma – omfattning",
      "sattes – komplex – kvantitet",
      "uppgick – beroende – tillförsel",
      "värderades – förlopp – nedskrivning"
     ],
     "correct": 2
    },
    {
     "num": 29,
     "text": "_____ till våra tiders breda vaccinationsprogram är de smittkoppsepidemier som _____ i Europa under 1700-talet och dödade uppemot 60 miljoner människor. Många överlevande blev vanställda med fula koppärr och inte sällan blindhet som följd.",
     "options": [
      "Tillkomsten – chockerade",
      "Förstadiet – frapperade",
      "Upprinnelsen – grasserade",
      "Anslaget – frotterade"
     ],
     "correct": 2
    },
    {
     "num": 30,
     "text": "Det är en historiens ironi att Sydeuropa nu verkar vara på väg tillbaka till sin klassiska roll i modern tid: som utvandrings- och gästarbetarregion. Bara de gamla och _____ blir kvar hemma.",
     "options": [
      "anfäktade",
      "bortklemade",
      "umbärliga",
      "klentrogna"
     ],
     "correct": 2
    }
   ]
  }
 ]
};
