// Högskoleprovet 29 oktober 2016, provpass 4 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "ht2016-4",
 "tillfalle": "ht2016",
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
   19,
   0.1
  ],
  [
   21,
   0.2
  ],
  [
   24,
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
   40,
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
     "word": "i ottan",
     "text": "<b>i ottan</b>",
     "options": [
      "i morgon",
      "tidigt",
      "för det mesta",
      "snart",
      "i enrum"
     ],
     "correct": 1
    },
    {
     "num": 2,
     "word": "förlägga",
     "text": "<b>förlägga</b>",
     "options": [
      "påverka",
      "inleda",
      "erbjuda",
      "placera",
      "utföra"
     ],
     "correct": 3
    },
    {
     "num": 3,
     "word": "selektion",
     "text": "<b>selektion</b>",
     "options": [
      "omval",
      "förstahandsval",
      "tillval",
      "valbarhet",
      "urval"
     ],
     "correct": 4
    },
    {
     "num": 4,
     "word": "otidsenlig",
     "text": "<b>otidsenlig</b>",
     "options": [
      "konstant",
      "otraditionell",
      "försenad",
      "omodern",
      "evig"
     ],
     "correct": 3
    },
    {
     "num": 5,
     "word": "resonans",
     "text": "<b>resonans</b>",
     "options": [
      "missljud",
      "omtagning",
      "återklang",
      "motstånd",
      "taktfasthet"
     ],
     "correct": 2
    },
    {
     "num": 6,
     "word": "futilitet",
     "text": "<b>futilitet</b>",
     "options": [
      "nödvändighet",
      "förebild",
      "utfyllnad",
      "misstag",
      "obetydlighet"
     ],
     "correct": 4
    },
    {
     "num": 7,
     "word": "röja",
     "text": "<b>röja</b>",
     "options": [
      "utlösa",
      "avslöja",
      "förstöra",
      "avfärda",
      "undersöka"
     ],
     "correct": 1
    },
    {
     "num": 8,
     "word": "simpa",
     "text": "<b>simpa</b>",
     "options": [
      "ﬁskart",
      "svampsort",
      "blåsinstrument",
      "huvudbonad",
      "maträtt"
     ],
     "correct": 0
    },
    {
     "num": 9,
     "word": "gångbar",
     "text": "<b>gångbar</b>",
     "options": [
      "trolig",
      "stadig",
      "rörlig",
      "säker",
      "giltig"
     ],
     "correct": 4
    },
    {
     "num": 10,
     "word": "ﬁlantrop",
     "text": "<b>ﬁlantrop</b>",
     "options": [
      "människovän",
      "hästtämjare",
      "predikant",
      "konstsamlare",
      "växtförädlare"
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
     "title": "Papegojsjuka",
     "html": "<p>Papegojsjuka är det svenska namnet för ornithos eller psittakos. Sjukdomen orsakas av bakterien <i>Chlamydophila psittaci</i> och är en så kallad zoonos, vilket innebär att den kan smitta mellan djur och människor.</p>\n<p>Första gången sjukdomen påvisades hos människor var efter kontakt med papegojor, därav namnet psittakos (papegojfåglar = <i>Psittaciformes</i>). Eftersom smittämnet är vanligt förekommande bland vilda fåglar av olika arter, är namnet papegojsjuka inte särskilt relevant. En mer korrekt benämning bör således vara ornithos (grekiskans <i>ornis</i> = fågel). Praxis har blivit att benämna sjukdomen ornithos då den drabbar människor (eller andra däggdjur), och psittakos då den drabbar fåglar.</p>\n<p>Smittade människor får influensaliknande symtom med hög feber, huvudvärk och symtom från luftvägarna, i värsta fall lunginflammation. Hos fåglar varierar sjukdomsbilden från fullständig symtomfrihet till en allmän infektion, som kan leda till döden. Även en till synes helt frisk fågel kan bära på den bakterie som orsakar sjukdomen. När fågeln blir stressad kan symtomen börja uppträda, vilket får fågelns utsöndring av bakterier till omgivningen att öka betydligt. Vanligtvis orsakar psittakos luftvägssymtom hos fåglar, och i samband med dem ses ofta trötthet, dålig aptit, vätska från ögon (ibland bara det ena) och näsborrar, och emellanåt diarré. Psittakos överförs framför allt genom inandning av smittämnet, men det kan också ske via avföringen.</p>\n<p>Smittan överlever länge i torr miljö och är av bland annat den orsaken svårbekämpad. Bland våra sällskapsfåglar är det främst papegojor, parakiter och duvor som riskerar att drabbas, men även andra arter ligger i riskzonen. Infektionen är i princip omöjlig att utrota eftersom smittan finns hos både vilda och tama fåglar. Det saknas idag pålitliga testmetoder för att upptäcka smittbärare bland fåglar. Störst chans att ställa diagnos har man vid obduktion.</p>\n<p>Papegojsjuka hos djur är en anmälningspliktig sjukdom enligt smittskyddslagen. Under åren 2004–2008 rapporterades 2 till 8 psittakosfall varje år. Det innebar en åttioprocentig minskning jämfört med 1990-talet. I början av 2013 rapporterades det dock in 20 fall av ornithos hos människa i Sverige. Smittvägarna i dessa fall har i huvudsak gått via vilda fåglars avföring.</p>\n<p>Hygienåtgärder är därför av yttersta vikt vid misstänkt eller konstaterad smitta. Sjuka fåglar kan behandlas med antibiotika, men en del fåglar förblir kroniska smittbärare, trots att de kliniskt tillfrisknar. Av det skälet rekommenderas ofta fågelägare att låta avliva drabbade eller misstänkt drabbade fåglar.</p>\n<p class=\"forf\">Sten Wiechel</p>"
    },
    {
     "title": "En annan ekonomi",
     "html": "<p><i>Sharing economy</i> är ett fenomen som kan få såväl liberala som socialistiska och konservativa ekonomiska världsbilder att börja slira i riktning diket.</p>\n<p>Men först: Hur ska det översättas till svenska? Jag har stött på en rad varianter – delningsekonomi (direktöversättningen), poolekonomi, kollaborativ ekonomi, tillgänglighetsekonomi, självorganiserande konsumtion, gemensam konsumtion, samverkanskonsumtion. Alla goda försök, som tillsammans, men inte var för sig, fångar fenomenets dynamik och nyanser.</p>\n<p>I grunden handlar sharing economy om modeller där människor via nätverk kan i första hand hyra, ibland även dela, låna eller byta, exempelvis bilar, tillfälligt boende, arbetsytor, verktyg och andra egendomar av varandra, istället för att var och en äger sitt.</p>\n<p>Rachel Botsman, en av de mest uppmärksammade förespråkarna för den här utvecklingen, har kallat det för ”en stor kulturell och ekonomisk kraft som förändrar inte bara vad vi konsumerar, utan hur vi konsumerar”. Det är en bra sammanfattning av idén.</p>\n<p>På många områden är tillgängligheten under ordnade former det viktiga för människor, inte ägandet. Genom att förbli inom ramen för ett system av marknadsekonomi, inte statskontroll, kan sharing economy – i teorin – tilllämpa den principen utan en baksida av politisk likriktning, maktkorruption och toppstyre.</p>\n<p>Delningsekonomins effektiva resursanvändning kan frigöra medel för annat. De flesta kommer att använda dem för meningsfullare former av konsumtion, en del för att minska på sin totalkonsumtion. Men det blir i båda fallen en miljö- och hållbarhetsvinst. Resursslöseriet minskar. Konsumismens avarter dämpas. Livskvaliteten fördjupas.</p>\n<p>Fenomenet är inte nytt förstås. Sharing-begreppets sammanlödning av ekonomiska, sociala och kulturella aspekter spelade en viktig roll inte minst i fildelningsdebatten för ett antal år sedan. Och vägg i vägg med sharing economy-trenden finns den växande betydelsen av det som på engelska kallas <i>crowdfunding</i>, på svenska gräsrotsfinansiering, av olika projekt eller satsningar som skulle ha svårt att få tillräckligt stöd på etablerade vägar.</p>\n<p>Denna ”många bäckar små”-modell är nära släkting till sharing economy. Båda har blivit möjliga att genomföra storskaligt och högeffektivt tack vare den tekniska utvecklingen – framför allt genom internet.</p>\n<p>Sharing economy kan i idealfallet förena ekonomisk effektivisering med skonad miljö, ökad individuell frihet med starkare social och kollektiv samverkan, ett nyttjande av marknadsekonomins bästa sidor för att tygla ett par av kapitalismens sämsta instinkter. Hur bra låter inte det?</p>\n<p>Men det är, förstås, som alla begriper, för bra för att vara helt sant.</p>\n<p>Många kritiker påpekar att det även finns stora praktiska och principiella problem med ett sådant system.</p>\n<p>Vad händer med skatteintäkterna i samhället när gråzonerna i ekonomin ökar? Vad händer med arbetsrätt och kollektivavtal när etablerade branscher, vars förhållanden åtminstone någorlunda reglerats och kontrollerats, kan gå under till förmån för helt oreglerade arbetsförhållanden där människor lättare kan utnyttjas och där miljö- och hälsoregler kringgås? Hur ser den rättsliga relationen ut mellan de som äger egendomen och de som hyr den i en sådan ekonomisk modell? Det är frågor utan givna svar i dag. De sociala följderna är oklara.</p>\n<p>Några av de ledande sharing economy-organisatörerna har också snabbt, som <i>Der Spiegel</i> skrev i förra veckan i en stor artikel om sharing economy med rubriken ”Kalifornisk kapitalism”, visat sig vara knallhårda, affärsinriktade lobbyister med få skrupler. Det finns fasader och baksidor.</p>\n<p>Sharing economy hotar alltså – med sina fördelar och nackdelar – att förvirra många gamla trogna, beprövade kartor och kompasser gällande konsumtion, ägande, företagande, fackföreningar, lönebildning, skattesystem, arbetsmarknad, arbetsrätt, kollektivavtal, statliga regleringar, miljölagstiftningar och ekonomisk riskfördelning.</p>\n<p>Det kommer, när euforin klingar ut i eftertanke, att bli ett djupt kontroversiellt och omstritt fenomen, på tvärs mot invanda konfliktlinjer och över hela den politiska skalan. Vänster kommer att debattera med vänster, liberaler med liberaler, höger med höger. Kapitalismen, som vi känner den, nyttjar den och reglerar den, kommer att förändras av det. Men inte på något ensidigt eller lättolkat sätt.</p>\n<p>I sharing economy-modellen finns mycket konstruktivt att skörda för flera idériktningar. Men också åtskilligt att bränna sig på för godtrogna och lättbländade. Den har parallella inslag av progressiv möjlighet och reaktionär fälla.</p>\n<p>Fullt ut genomfört skulle sharing economy i praktiken innebära ett systemskifte som kan mötas av lika högt jubel från utvecklings-, konsumtions- och tillväxtkritiska vänsterrörelser som från lätt anarkistiska, reglerings- och statskritiska nyliberaler.</p>\n<p>Men som ett inslag bland flera i en marknadsekonomisk helhet kan idéerna också framstå som en tilltalande metod för ekonomisk effektivitet, social sammanhållning och miljöhänsyn – en bra kompromiss i mitten.</p>\n<p>Eftersom delnings-, självorganiserings- och kollaborationstrenderna – stimulerade av nya tekniska möjligheter och livsmönster i samhället – är här för att stanna, talar allt för att även denna mer organiserade form av sharing economy kommer att öka i betydelse inom fler branscher på 2000-talet.</p>\n<p>Det kommer att ställa politik och medborgare inför svåra avvägningar, överraskande målkonflikter och intrikata dilemman.</p>\n<p>Ett gott råd: Gå inte på hela hajpen. Var inte naiv. Inse farorna. Men bejaka trots det möjligheterna som finns i sharing economy om balansen blir rätt.</p>\n<p>Och oavsett om stämningen blir euforisk eller kritisk, behöver vi en snillrik svensk översättning. Kommer någon på något bra – dela gärna.</p>\n<p class=\"forf\">Ola Nordebo</p>"
    },
    {
     "title": "Samtidsarkeologi",
     "html": "<p>I februari 2007 utkom en mycket intressant, välskriven och nydanande lärobok i en alltmer uppmärksammad arkeologisk forskningsgren, nämligen samtidsarkeologi. Det är professor Mats Burström vid Södertörns högskola som har författat skriften. Vid högskolans arkeologiska institution bedrivs samtidsarkeologiska utgrävningar. Författaren har vidare aktivt engagerat sig i sådana grävningar i bland annat TV-programmet <i>Utgrävarna</i>. Jämte några kollegor undersöker Burström också en raketbas på Kuba – en av dem som förstördes efter Kubakrisen 1962.</p>\n<p>Samtidsarkeologi är enligt Burström arkeologi i det nära förflutna. Ämnet är gränsöverskridande och mångvetenskapligt. Det lånar teorier och metoder från en rad olika akademiska discipliner. Ämnet bygger på att grävningar av nutidsnära objekt knyts till personliga minnen och individuella erfarenheter. Samtidsarkeologi knyter an till historisk arkeologi, alltså sådan arkeologi som studerar samhällen som också har efterlämnat texter.</p>\n<p>Kan någon tidpunkt fastställas från vilken vi kan säga att arkeologin kan rubriceras som samtidsarkeologi? Burström diskuterar den frågan. Han menar att det är klokt att ha en öppen attityd till samtidsarkeologins gränser eftersom den utgör ett nytt forskningsfält. Varje försök att med precisa årtalsangivelser definiera det samtidsarkeologiska forskningsfältet möter svårigheter. Dock finner Burström det lämpligt att sätta gränsen vid år 1850. Dessförinnan är arkeologin historisk, och därefter rör den samtiden.</p>\n<p>Varför? Jo, menar Burström, inkluderar vi minnen som rör sådant som nu levande människor hört andra berätta om egna upplevelser av, så sträcker sig minnena ungefär 150 år bakåt, under förutsättning att de berättas av en mycket gammal person som i sin tur hört dem av en likaledes gammal människa.</p>\n<p>Varför ägnar man sig åt samtidsarkeologi? En oerhörd mängd källor finns från perioden efter 1850. Genom att närma oss det förflutna från ett mera jordnära perspektiv kan samtidsarkeologin, menar Burström, visa hur den stora historien yttrade sig och påverkade människor i deras dagliga liv. Han erinrar om att den historiska arkeologin övertygande har visat att arkeologiska källor inte sällan ger andra vittnesbörd om ett specifikt förhållande än vad de skriftliga källorna gör.</p>\n<p>Föremål och materiella lämningar från det nära förflutna har en emotionell och reflexiv dimension. Tingen berör oss, de väcker minnen och tankar. Lämningar från det nära förflutna väcker tankar om den mänskliga tillvaron i stort. Burström framhåller att samtidsarkeologin inbjuder till den sortens existentiella reflexion som länge varit en viktig grund till människors intresse för lämningar från det förflutna.</p>\n<p>Samtidsarkeologin samlar företrädare från en lång rad akademiska discipliner. Burström nämner olika grenar inom samtidsarkeologin, till exempel soparkeologi, torparkeologi, industriarkeologi, bunkerarkeologi, forensisk arkeologi, förlista fartyg, störtade flygplan, ölburkar, dansbanor samt fotbollsplaner. Exempel lämnas på utförda studier.</p>\n<p>Burström framhåller att i Sverige förknippas samtidsarkeologiska utgrävningar i första hand med torpundersökningar. Det beror på att ganska många sådana utgrävningar har genomförts, över hundra stycken. De flesta har gett fynd från 1800- och 1900-talet. Många torp står också kvar som hus. Hos allmänhet och hembygdsrörelse är intresset för torplämningar stort. Burström påpekar att torplämningar inte automatiskt är skyddade av kulturminneslagen. Den offentliga kulturmiljövårdens intresse för dem har varit svagt. Stig Welinders ofta refererade undersökning från tidigt 1990-tal av stuggrunden Granströms vid Nyberget i södra Dalarna nämns som exempel på en torputgrävning. Welinders tolkning var att avfallet som kastats utanför stugan avspeglar tidens könsroller. Det finns, menar Burström, ett uppenbart behov av att utveckla såväl frågeställningar som metoder för arkeologiska undersökningar av torp och andra sentida bebyggelselämningar.</p>\n<p>Stockholms universitet grävde för några år sedan ut ett flyktingläger på Lovön där estniska och rumänska flyktingar bott på 1940-talet. Här påträffades på ett gravfält från bronsåldern förutom betongplintar efter husen också prydligt anlagda gångar, nu övervuxna i skogen. En liten myntdepå bestående av tyska pfennigmynt med hakkors och örn påträffades, jämte en hel del personliga föremål som tillhört flyktingarna. Även denna grävning är ett exempel på samtidsarkeologi.</p>\n<p>Burström nämner också undersökningar av de oräkneliga bunkrar som finns kvar sedan andra världskriget i Europa, inte minst vid den svenska kusten, i synnerhet i Skåne. Forensisk arkeologi använder arkeologiska metoder för att hitta, dokumentera och tolka lämningar som är viktiga för att utreda brott av olika slag.</p>\n<p>En fallstudie rör inspelningsplatsen för den amerikanske regissören Cecil B. DeMilles storfilm <i>De tio budorden</i> från 1920-talet. Efter inspelningen lät DeMille riva ner den egyptiska stad som byggts upp med statyer och allt. Lämningarna begravdes i all hemlighet och övertäcktes med sand i den kaliforniska öknen. Nu grävs de upp, och platsen har av delstaten Kalifornien fått officiell status som fornlämningsplats!</p>\n<p>Samtidsarkeologins viktigaste kännetecken är, menar Burström, studiet av hur föremål och andra materiella lämningar från det nära förflutna på olika sätt berör människan. De enklaste vardagsföremål kan i kraft av sin historia väcka en nyfikenhet på att få veta mera om de sammanhang som föremålen ingick i. Samtidsarkeologin är ett effektivt sätt att aktualisera en historia som det annars inte funnes någon omedelbar anledning att uppmärksamma och diskutera. Känslan att möta ett ting som man vet vad det representerar berör iakttagaren, till exempel en sardinburksnyckel på polarfararen Andrées sista lägerplats. Föremål från det nära förflutna får oss att minnas och tänka tillbaka.</p>\n<p>Burström påpekar att det kan vara känsligt att gräva i det nära förflutna och att det därför finns anledning till etiska överväganden. Samtidsarkeologin rör ibland lämningar där det finns kvarlevor av personer som har nära efterlevande.</p>\n<p>Den offentliga kulturmiljövården borde ta större hänsyn till det intresse som många människor har för lämningar från det nära förflutna. Samtidsarkeologin visar hur föremål och andra materiella lämningar har en förunderlig förmåga att beröra människor och väcka tankar om både smått och stort i tillvaron. Det är dessa emotionella och reflexiva dimensioner som är själva grunden för människors intresse för det förflutna och dess lämningar. Genom att närma sig det förflutna utifrån en annan typ av källor än de vedertagna kan samtidsarkeologin, anser Burström, bidra till en mer mångstämmig historia.</p>\n<p>Burström har lättfattligt och konkret åskådliggjort vad samtidsarkeologi är. Forskningsfältet skildras övertygande och engagerat. Visserligen har flera samtidsarkeologiska undersökningar genomförts i Sverige. Det är dock först genom denna lärobok som forskningsfältet beskrivs och tydliggörs. De exempel som lämnas åskådliggör också samtidsarkeologins bredd.</p>\n<p class=\"forf\">Nils Ringstedt</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vilket av följande påståenden om spridningen av ornithos/psittakos har stöd i texten?",
     "options": [
      "En fågel som uppvisar symtom sprider sjukdomen lättare än en symtomfri fågel.",
      "Sjukdomens smittväg går oftare från vilda till tama fåglar än tvärtom.",
      "Sjuka tamfåglar innebär en större smittorisk för fåglar än för människor.",
      "Sjukdomen tas upp och sprids via redan försvagade individer."
     ],
     "correct": 0,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vilken omständighet gör det svårt att bekämpa psittakos, av texten att döma?",
     "options": [
      "Att korrekt sjukdomsdiagnos kan ställas endast efter det att individen har dött.",
      "Att bakterien som orsakar sjukdomen är spridd bland många individer och arter.",
      "Att sjukdomssymtomen skiljer sig åt mellan olika fågelarter.",
      "Att smittan som orsakar sjukdomen sprids på oförutsägbara sätt."
     ],
     "correct": 1,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Hur skulle man utifrån texten bäst kunna beskriva delningsekonomi?",
     "options": [
      "Som ett sätt att protestera mot politiska beslut.",
      "Som ett sätt att bättre utnyttja existerande resurser.",
      "Som ett sätt att utveckla nya ideologier.",
      "Som ett sätt att utradera kapitalismens negativa sidor."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vilka politiska konsekvenser kommer delningsekonomin att få, enligt textförfattaren?",
     "options": [
      "Den kommer att utmana etablerade politiska tolkningsmodeller.",
      "Den kommer successivt att få stöd från alla politiska läger.",
      "Den kommer att ge upphov till en ny syn på politik.",
      "Den kommer att visa sig ligga utom räckhåll för politiska åtgärder."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Varför har textförfattaren svårt att hitta en bra svensk översättning till ”sharing economy”?",
     "options": [
      "Det är så oklart vad sharing economy egentligen står för.",
      "Sharing economy saknar en tydlig politisk förankring.",
      "Ingen vet vad sharing economy kommer att utvecklas till.",
      "Sharing economy har så många olika sidor."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Hur tror textförfattaren själv att delningsekonomin kommer att fungera i framtiden?",
     "options": [
      "Som en lösning på dagens konsumtions- och miljökris.",
      "Som ett första steg mot en helt ny ekonomisk modell.",
      "Som ett tillskott inom ramen för marknadsekonomin.",
      "Som ett intressant experiment utan bredare tillämpning."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Lämningar från det nära förﬂutna kan, enligt texten, påverka människors intresse för historien. Vad beror det på?",
     "options": [
      "Att lämningarna främst synliggör så kallat vanligt folks historia.",
      "Att lämningarna dokumenterar vad nu levande människor själva upplevt.",
      "Att lämningarna undersöks också av andra än professionella arkeologer.",
      "Att lämningarna utlöser känslor och tankar hos betraktaren."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Vad tycks, av texten att döma, vara huvudsyftet med Mats Burströms bok?",
     "options": [
      "Att presentera samtidsarkeologin som forskningsfält och verksamhetsområde.",
      "Att sammanfatta resultaten av hittills gjorda samtidsarkeologiska undersökningar.",
      "Att argumentera för ökade satsningar på samtidsarkeologi från kulturmiljövårdens sida.",
      "Att utifrån hittills gjorda utgrävningar ge en bild av samtidsarkeologins fortsatta utveckling."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Hur tycks Mats Burström anse att den offentliga kulturmiljövården agerar i de frågor som texten beskriver?",
     "options": [
      "Uppenbart okunnigt.",
      "Alltför passivt.",
      "Överdrivet kritiskt.",
      "Onödigt försiktigt."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Vilken blir den logiska konsekvensen av Mats Burströms resonemang kring tidsgränsen mellan historisk arkeologi och samtidsarkeologi?",
     "options": [
      "Att tidsgränsen efter hand kommer att förﬂyttas framåt.",
      "Att tidsgränsen efter hand kommer att bli svårare att urskilja.",
      "Att den historiska arkeologin med tiden kommer att trängas tillbaka av samtidsarkeologin.",
      "Att den historiska arkeologin med tiden kommer att bli en konkurrent till samtidsarkeologin."
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
     "text": "Kommunen ska på ett miljömässigt hållbart sätt förse medborgarna med ett gott dricksvatten, ta hand om avloppsvatten och _____ avfall. Kommunen ska därutöver, genom information och kommunikation med omvärlden, arbeta aktivt och målmedvetet för att minska miljöpåverkan och skapa förutsättningar för ett _____ hållbart kretsloppssamhälle.",
     "options": [
      "debitera – framtida",
      "deportera – alternativt",
      "denaturalisera – resursstarkt",
      "deponera – långsiktigt"
     ],
     "correct": 3
    },
    {
     "num": 22,
     "text": "I ﬂertalet länder begränsades möjligheten att bilda nätverk där många stationer kunde sända samma program. Här i Sverige var detta tillåtet. I praktiken hade Sverige därmed den förmodligen mest _____ lagstiftningen i västvärlden på detta område.",
     "options": [
      "innovativa",
      "relevanta",
      "liberala",
      "detaljerade"
     ],
     "correct": 2
    },
    {
     "num": 23,
     "text": "Vilken bild är den första som dyker upp i huvudet när du hör ordet tango? _____ av en man och en kvinna tätt omslingrade i en dramatisk _____? En nätstrumpklädd kvinnofot i en omöjligt hög stilettklack? En mörk främling med en ros mellan tänderna? Denna den mest mytomspunna av danser omges av många kända _____.",
     "options": [
      "Sinnebilden – piruett – visioner",
      "Närvaron – miljö – symboler",
      "Silhuetten – pose – klichéer",
      "Kombinationen – förening – emblem"
     ],
     "correct": 2
    },
    {
     "num": 24,
     "text": "Den tekniska utvecklingen i världen har gått i en rasande fart, men vår hjärna fungerar likadant som för 40 000 år sedan. Våra stenålderskopplingar i hjärnan gör att vi i vissa situationer kan agera _____ fastän agerandet _____ förnuftigt där och då.",
     "options": [
      "slumpmässigt – påstås",
      "irrationellt – ter sig",
      "gammalmodigt – inverkar",
      "aggressivt – anses"
     ],
     "correct": 1
    },
    {
     "num": 25,
     "text": "Huvudpersonen P är en ytterst excentrisk medicine studerande. Trots sin cyniska _____, som ständigt kretsar kring människokroppens inre, tycks han inte kunna vänja sig vid operationer och _____.",
     "options": [
      "karaktär – stetoskop",
      "humor – mediciner",
      "egenhet – skalpeller",
      "jargong – obduktioner"
     ],
     "correct": 3
    },
    {
     "num": 26,
     "text": "Gruvområdena _____ sommaren 1993 som ett led i ett forskningsprojekt vid Ájtte, Svenskt fjäll- och samemuseum, varvid ett ﬂertal dittills okända gruvor och provbrytningar, så kallade skärpningar, påträffades.",
     "options": [
      "inventerades",
      "exploaterades",
      "initierades",
      "projekterades"
     ],
     "correct": 0
    },
    {
     "num": 27,
     "text": "Ett liknande mönster syns när man tittar på ungdomars parbildning över _____ och nationella gränser, en viktig men förbisedd _____ på olika gruppers integration i ett samhälle. De svenska gymnasieelever som har en partner med bakgrund utanför Norden _____ att i större utsträckning än andra ha en positiv syn på invandrare.",
     "options": [
      "internationella – trend – förefaller",
      "relationella – faktor – kommer",
      "religiösa – prognos – föredrar",
      "etniska – indikator – tenderar"
     ],
     "correct": 3
    },
    {
     "num": 28,
     "text": "Jag tror inte att någon egentligen drömmer om en _____ arbetsplats; det skulle förmodligen vara lika ointressant att jobba på en kvinnodominerad arbetsplats som på en mansdominerad.",
     "options": [
      "homosocial",
      "ekvivalent",
      "heterosexuell",
      "androgyn"
     ],
     "correct": 0
    },
    {
     "num": 29,
     "text": "Vid läsningen av <i>Skogsliv vid Walden</i> framgår att Thoreau är medveten om att det inte är alla människor _____ att ha de materiella förutsättningarna att _____ sitt oberoende, även om ﬂer än man tror har möjligheten.",
     "options": [
      "ålagt – bejaka",
      "förunnat – odla",
      "beviljat – kanalisera",
      "uppgivet – tillgodose"
     ],
     "correct": 1
    },
    {
     "num": 30,
     "text": "Att helt slippa reklam är i princip omöjligt. Men reklamen uppfattas inte heller alltid som en objuden gäst. Ibland fungerar den närmast som en konstform, en populärkulturell _____ som människor aktivt söker upp, i stället för tvärtom.",
     "options": [
      "genre",
      "tendens",
      "bransch",
      "norm"
     ],
     "correct": 0
    }
   ]
  }
 ]
};
