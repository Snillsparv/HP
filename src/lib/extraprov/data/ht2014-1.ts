// Högskoleprovet 25 oktober 2014, provpass 1 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "ht2014-1",
 "tillfalle": "ht2014",
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
   47,
   1.0
  ],
  [
   50,
   1.1
  ],
  [
   53,
   1.2
  ],
  [
   55,
   1.3
  ],
  [
   58,
   1.4
  ],
  [
   61,
   1.5
  ],
  [
   64,
   1.6
  ],
  [
   67,
   1.7
  ],
  [
   69,
   1.8
  ],
  [
   72,
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
     "word": "konferera",
     "text": "<b>konferera</b>",
     "options": [
      "värdera",
      "bekräfta",
      "överlägga",
      "granska",
      "komma överens"
     ],
     "correct": 2
    },
    {
     "num": 2,
     "word": "centrifug",
     "text": "<b>centrifug</b>",
     "options": [
      "torkskåp",
      "plattform mitt i gatan",
      "kraftcentral",
      "roterande behållare",
      "tvättautomat"
     ],
     "correct": 3
    },
    {
     "num": 3,
     "word": "sömndrucken",
     "text": "<b>sömndrucken</b>",
     "options": [
      "i djup sömn",
      "som har stort sömnbehov",
      "pigg och utvilad",
      "som har försovit sig",
      "omtöcknad av sömn"
     ],
     "correct": 4
    },
    {
     "num": 4,
     "word": "oboe",
     "text": "<b>oboe</b>",
     "options": [
      "ödebygd",
      "pelare",
      "trädgårdsväxt",
      "ädelsten",
      "blåsinstrument"
     ],
     "correct": 4
    },
    {
     "num": 5,
     "word": "de facto",
     "text": "<b>de facto</b>",
     "options": [
      "för säkerhets skull",
      "i själva verket",
      "med ens",
      "till varje pris",
      "på inga villkor"
     ],
     "correct": 1
    },
    {
     "num": 6,
     "word": "spel för galleriet",
     "text": "<b>spel för galleriet</b>",
     "options": [
      "hemliga förhandlingar",
      "publikfrieri",
      "offentlig vadslagning",
      "repetition",
      "exklusiv underhållning"
     ],
     "correct": 1
    },
    {
     "num": 7,
     "word": "efterleva",
     "text": "<b>efterleva</b>",
     "options": [
      "förbättra",
      "ångra",
      "överta",
      "följa",
      "ersätta"
     ],
     "correct": 3
    },
    {
     "num": 8,
     "word": "förtrytelse",
     "text": "<b>förtrytelse</b>",
     "options": [
      "förargelse",
      "förskräckelse",
      "förakt",
      "förtvivlan",
      "förvirring"
     ],
     "correct": 0
    },
    {
     "num": 9,
     "word": "välsituerad",
     "text": "<b>välsituerad</b>",
     "options": [
      "rik",
      "känd",
      "tränad",
      "artig",
      "kunnig"
     ],
     "correct": 0
    },
    {
     "num": 10,
     "word": "domesticering",
     "text": "<b>domesticering</b>",
     "options": [
      "inavel",
      "uppfostran",
      "avvänjning",
      "inlärning",
      "tämjning"
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
     "title": "Skolalgebra",
     "html": "<p>För många elever i grundskolan är algebra ett förvirrande avsnitt i matematikundervisningen. Genom läroböckerna ställs de snabbt inför uppgifter som handlar om att <i>skriva</i> uttryck eller att <i>förenkla</i> uttryck, <i>formulera</i> ekvationer till problem och <i>lösa</i> ekvationer av typen 3x + 4 = 2x – 2. Detta ger få ledtrådar till vad algebra är. Det vore önskvärt att eleverna fick närma sig algebra mer strukturerat. Den algebra som vi arbetar med i grundskolan tycker jag kan delas in i tre delar. Första delen brukar jag benämna <i>algebraiskt tänkande.</i> Det handlar om att använda variabelbegreppet för att kunna lösa uppgifter där det finns relationer mellan objekt, t.ex. relationen i ålder mellan personer samt deras gemensamma ålder. Andra delen brukar jag benämna <i>algebraisk grammatik</i>. Den består av konventioner och notationer. Här ska eleverna exempelvis lära sig att 2x = 2 · x och att 2x + x = 3x. Tredje delen är <i>modellering</i>. Det innebär att kunna översätta en vardaglig händelse eller något utommatematiskt till ett algebraiskt uttryck.</p>\n<p>I artikeln ”Från Fibonacci till algebra” beskrev jag aktiviteter som hjälper elever att förstå <i>varför</i> algebra är ett effektivt verktyg i många problemlösningssituationer. Aktiviteternas enkla samband blir gradvis alltmer utmanande, mängden information och relationer överskrider det som vi kan hantera med huvudräkning och enkla stödanteckningar, och eleverna kommer till en punkt då de upplever att de behöver ett nytt verktyg för att kunna lösa problemet. För att kunna hantera de anteckningar som då görs, med hjälp av någon form av <i>algebraisk representation</i>, är nästa steg viktigt. I många läroböcker brukar detta vara lektion ett, men enligt mig är det självklart att detta avsnitt kommer <i>efter</i> uppgifter som kräver algebraiskt tänkande.</p>\n<p>Strävan att skriva uttryck i enklaste form ställer till problem för eleverna. För några år sedan började jag be mina elever att sätta ut de multiplikationstecken som inte syns och märkte att en väsentlig del av problem med notation och förståelse försvann. Skillnaden mellan hur uttrycken 2(3 + x) och 2 · (3 + x) uppfattas är gigantisk. För att träna detta använder vi bl.a. övningar som påminner om sudoku. I de första matriserna ska eleverna addera uttryck, och de kan bara fyllas i om algebraiska förenklingar görs. Matriserna går lätt att utveckla genom att antalet rader och kolumner ändras samt att addition byts till multiplikation. De som vill ta det ytterligare ett steg kan göra en matris med division och hamna i polynomdivision. Det finns möjligheter för alla att få utmaningar.</p>\n<p>Eleverna vill gärna göra egna matriser. Ge dem det i läxa, med tillägget: så få utsatta uttryck som möjligt – likt sudoku – men ändå lösbart. Låt dem sedan lösa varandras matriser.</p>\n<p class=\"forf\">Per Berggren</p>"
    },
    {
     "title": "Bakläxa i Arbetsdomstolen",
     "html": "<p>Arbetstagarskapet är tvingande till arbetstagarens förmån. Det har sin grund i den juridiska principen att en arbetsgivare och en arbetstagare inte kan avtala om att ett arbetsavtal inte är ett anställningsavtal.</p>\n<p>Trots att arbetstagarskapet är tvingande till arbetstagarens förmån kan den som är anställd förfoga över sitt arbetstagarskap genom att träffa avtal om att anställningsavtalet ska upphöra. Då gäller endast de allmänna avtalsrättsliga regler som återfinns i vår allmänna avtalslag. Av särskilt intresse är avtalslagens regel om svek, 30 § avtalslagen.</p>\n<p>Avtalslagens regel om ogiltighet vid svek innebär att om part har ”svikligen förlett” motparten så kan avtalet ogiltigförklaras. Vad menas då med svek i detta sammanhang?</p>\n<p>Svekregeln innehåller två kriterier. För det första ska det handla om en lögn. För det andra ska det vara fråga om en lögn som objektivt sett kan sägas ha haft betydelse för partens benägenhet att träffa avtal.</p>\n<p>I en aktuell dom (AD 2011 nr 92) har Arbetsdomstolen ogiltigförklarat ett avvecklingsavtal med stöd av 30 § avtalslagen. En kvinna, som träffat ett avtal om att hennes anställning skulle upphöra mot viss ersättning, kunde bevisa att arbetsgivaren hade uttalat en osanning (att arbetsbrist förelåg) och att osanningen objektivt sett hade haft betydelse för hennes träffande av avvecklingsavtalet. Svekregeln var därmed tillämplig och domstolen ogiltigförklarade avtalet.</p>\n<p>Bevisbördan vid tillämpning av ogiltighetsreglerna i avtalslagen ligger på den part som hävdar ogiltigheten. I det aktuella fallet kunde arbetstagaren bevisa att arbetsgivaren hade lämnat felaktig information om påstådd arbetsbrist, när det i själva verket förhöll sig så att arbetsgivaren avsåg att rekrytera.</p>\n<p>Domstolen bedömde att lögnen objektivt sett hade betydelse för arbetstagarens agerande. Om arbetstagaren vetat om de riktiga förhållandena skulle hon inte ha ingått avtalet, åtminstone inte på de aktuella villkoren.</p>\n<p>Regeln om svek i avtalslagen handlar om tillit. Parter i ett avtal ska kunna lita på varandra så att uttalade lögner eller förtiganden av väsentliga omständigheter i princip medför att träffat avtal är ogiltigt. Detta gäller alltså även i arbetsrättsliga sammanhang.</p>\n<p class=\"forf\">Tommy Iseskog</p>"
    },
    {
     "title": "Vårdcentraler och psykologer",
     "html": "<p>Sveriges Psykologförbund har kartlagt tillgången till psykologer vid landets samtliga vårdcentraler. <i>Patienters tillgång till psykologer – en kartläggning av landets vårdcentraler (</i>2009) visar att endast 260 av landets cirka 930 vårdcentraler har psykologer anställda. 151 vårdcentraler saknar helt tillgång till psykolog. Och mer än hälften av alla vårdcentraler har varken anställda psykologer eller vårdavtal med privatpraktiserande psykologer.</p>\n<p>Mahlin Olsson, utredare på Psykologförbundet, har gjort kartläggningen.</p>\n<p>– Kartläggningen visar en fördubbling av antalet anställda psykologer, jämfört med kartläggningen av tillgången på psykologer på vårdcentraler som Socialstyrelsen gjorde 2007, och det är ju bra. Men Psykologförbundet vill att det ska finnas psykologer på samtliga vårdcentraler i landet. Det ska vara samma vård för alla oavsett var man bor eller hur mycket pengar man har, säger Mahlin Olsson.</p>\n<p>Skillnaderna i landet är stora. Dalarna har inga psykologer anställda och heller inget vårdavtal. Örebro saknar anställda psykologer på sina vårdcentraler och i Östergötland har endast tre procent av vårdcentralerna anställda psykologer. I Stockholm saknar tre av fyra vårdcentraler anställda psykologer. Gotland är ensamt om att ha anställda psykologer på samtliga vårdcentraler.</p>\n<p>Majoriteten, 82 procent, av samtliga vårdcentraler drivs i offentlig regi. Skillnaderna mellan privata och offentliga vårdcentraler är stora. Endast två procent av de offentliga vårdcentralerna har avtal med privatpraktiserande psykologer, jämfört med 20 procent för de privata vårdcentralerna. 90 procent av fallen kommer via remiss.</p>\n<p>Av de offentliga vårdcentralerna är det endast 30 procent som har anställda psykologer, medan 43 procent av de privata har anställda psykologer.</p>\n<p>– Vi vill med denna kartläggning väcka opinion och debatt. Vi har lagt ut hela listan med landets samtliga vårdcentraler på Psykologförbundets hemsida så att alla kan gå in och läsa och se vilka vårdcentraler som har anställda psykologer och vilka som har avtal med privatpraktiserande psykologer, säger Mahlin Olsson.</p>\n<p>– Förbundet vill att människor ska kunna ringa direkt till en psykolog på sin vårdcentral, utan att behöva gå via en läkare. Enligt våra undersökningar vill de flesta ha psykologisk behandling, inte medicin i första hand, fortsätter Mahlin Olsson.</p>\n<p>I kartläggningen, som gjordes under fyra veckor i maj och juni 2009, har 894 av 930 vårdcentraler besvarat frågorna, vilket motsvarar 96 procent av samtliga vårdcentraler.</p>\n<p class=\"forf\">Kajsa Heinemann</p>"
    },
    {
     "title": "Förvildade hjärtan",
     "html": "<p>Selma Lagerlöfs debutroman <i>Gösta Berlings saga</i> (1891) mottogs av ett antal litteraturkritiker på ett förringande sätt. Lagerlöf ansågs vara en författare som skrev utifrån en muntlig tradition – en ”sagotant” – och betraktades som varken intellektuell eller nyskapande. Romanen fann man vara både enkel och naiv. (Ett fåtal kritiker gick mot strömmen och beskrev romanen som modern.) Senare studier har reviderat denna (läs: ålderdomliga) uppfattning om Lagerlöfs gärning, och Vivi Edström framhåller i sin biografi om Selma Lagerlöf (<i>Livets vågspel</i>, 2002) verket som ett paradigmskifte beträffande både konstfullhet och politisk medvetenhet.</p>\n<p>Det är ur detta varierade mottagande som Jenny Bergenmar hämtat inspiration till sin avhandling <i>Förvildade hjärtan. Livets estetik och berättandets etik i Selma Lagerlöfs Gösta Berlings saga</i>. Bergenmar betonar att verkets ställning, såväl ur ett samtidsperspektiv som ur ett litteraturhistoriskt perspektiv, kräver en studie av dess förhållande till samtidens filosofiska och estetiska strömningar, och att det är än mer nödvändigt eftersom författaren är en kvinna.</p>\n<p>Det är genom de olika romanfigurernas förhållande till omvärlden som tidens filosofiska diskussioner gestaltas. Detta förhållande är könsbundet: enligt Bergenmar bidrar den upproriska stämning som råder i romanen till att förändra de kvinnliga romanfigurernas status som medborgare. Den retoriska figur som Lagerlöf använder för att skildra tillståndet av samhällelig och mänsklig oordning är omkastningen. Framför allt ser Bergenmar omkastningen som ett sätt att rubba ”könsmaktsordningen i äktenskap, hem och förhållandet till fäderna”. En annan viktig aspekt av avhandlingen har varit att påvisa hur romanens idévärld byggs upp genom att växelvis anta och förkasta moraliska axiom och hur Lagerlöf, i tidens nihilistiska anda, undvikit att ge någon slutgiltig lösning på de frågor som de olika episoderna i romanen väcker.</p>\n<p>Bergenmar inleder med att beskriva 1890-talets påbörjade frigörelse från realismen samt hur det estetiska livsprojektet – nihilismen – utvecklas. På ett väl avlyssnat sätt jämför Bergenmar romanfiguren Gösta Berling och Heidenstams figur Hans Alienus (<i>Hans Alienus</i>, 1892), hos vilka man mycket riktigt kan finna många samstämmiga idéer och ideal. ”Främlingskapets stolthet och smärta” och det ”skönhetssvärmeri” (enligt Oscar Levertin) som Alienus uttrycker skulle likaväl kunna gälla Gösta Berling. Bergenmar har dock valt att betona livsglädjen, det högstämda tonläget, blandningen av stilarter samt försöken att frigöra sig från ett förljuget samhälle som gemensamma nämnare för de båda verken eftersom det är dessa drag som skiljer ut dem från övrig samtida litteratur.</p>\n<p>Lagerlöf hade förmodligen inte själv läst Nietzsche – det tycks forskningen vara överens om. Emellertid var författaren både intresserad av och känslig för tidens tendenser. Verkets spänning mellan det apolloniska och det dionysiska – skenet som gör livet meningsfullt och den hedonistiska, lustfyllda utlevelsen – är något Bergenmar framhåller, och hon menar att detta inte gestaltas genom någon enskild individ utan som en kollektiv stämning.</p>\n<p>Denna kollektiva stämning av uppbrott och kaos, som tematiskt framställs genom ett ”bejakande av kärleken”, är en kvinnornas sak där Gösta Berling inte har någon framskjuten position. Anledningen är, enligt Bergenmar, att Berling är ”lika mycket en Don Juan (som är namnet på hans häst, egen anm.) som en Faust”. Denna synvinkel är något skev eftersom nihilism, som jag förstår den, förutsätter en extrem subjektivism som i mina ögon bäst gestaltas av Gösta Berling själv genom hans ständiga pendlande mellan storhetsvansinne och leda orsakad av ett begär som är omöjligt att tillfredsställa. Därutöver bör man med tanke på ovan nämnda namnsymbolik påminna sig att Gösta Berling även flankeras av en hund – Tankred – vars namn leder i en helt annan riktning än mot en manlighet i kris.</p>\n<p>I avhandlingens fjärde kapitel beskriver Bergenmar hur Lagerlöfs verk kan sägas vara en hybrid mellan det muntliga berättandet och det skriftliga framställningssättet. Verket är en lyckad sammansmältning av saga och roman vilket skapar ett personligt tilltal och fängslar läsaren. Kapitlets inriktning mot berättarteknik kan i viss mån uppfattas som inkonsekvent för avhandlingen som helhet. Särskilt kan begreppsapparaten kritiseras för att vara godtycklig eftersom Bergenmar underlåter att informera läsaren om anledningen till sitt val.</p>\n<p>Det är i nästföljande kapitel Bergenmar låter sig engageras och för fram sitt credo med emfas: att moderniseringen innebär en konflikt mellan rationalitet och känsloliv och att Lagerlöf genom detta tema skriver in sig i litteraturhistorien genom att låta även kvinnor utvecklas och delta i samhällsförändringen. Omvälvningen är ett kvinnligt projekt, mannen står för förvildning. Med denna slutsats tycks avhandlingen till viss del sammanfalla med den senaste i raden av Lagerlöfavhandlingar: Maria Karlssons avhandling, <i>Känslans röst. Det melodramatiska i Selma Lagerlöfs romankonst</i> (2002), som delvis behandlar Gösta Berlings saga. I detta kapitel, som är både välskrivet och intressant, förs även en diskussion om förnuft ställt mot känsla samt erotik och etik. Hur ska människan kunna leva utan vare sig religiösa eller sociala lagar? Hur ska hon ensam kunna avgöra vad som är gott och ont?</p>\n<p>Romanens avslut tycks uttrycka ett avståndstagande från den erotiska utlevelsen till förmån för en altruistisk människokärlek, men sensmoralen är långt ifrån entydig. Bergenmar framhåller ett slut utan syntes vilket harmonierar med romanens genomgående strategi att låta det moraliska ställningstagandet pendla såväl genom tema som genom komposition, något som blir belyst på ett utmärkt sätt. Bergenmar har heller inte förbisett tidigare forskningsresultat samtidigt som hon tydligt redogjort för sina egna ståndpunkter. Möjligtvis hade avhandlingen tjänat på ytterligare sammanhållning; ibland är associationerna väl yviga och texten sveper därmed över alltför många infallsvinklar. Och kanske är jag inte fullt övertygad om den skarpa gräns som Bergenmar drar mellan konsekvenserna av kvinnornas respektive Gösta Berlings (samt de övriga kavaljerernas) handlingar – för mig framstår de samtliga som en skara desillusionerade varelser – men de iakttagelser som framförts är både intressanta och tänkvärda, och romanens nihilistiska tendens som Bergenmar redogjort för är en mycket intressant ståndpunkt och något för forskningen att gripa tag i framgent.</p>\n<p class=\"forf\">Maria Wahlström</p>\n<p class=\"dikt\"><b>nihilism</b> = ståndpunkt som förnekar att det existerar en objektiv grund för t.ex. kunskap eller moraliska värden</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vad menar textförfattaren att den sudokuliknande övningen ska träna eleverna i?",
     "options": [
      "Förmågan att hantera algebraiska uttryck.",
      "Förmågan att lösa avancerade algebraiska problem.",
      "Förmågan att uppfatta algebraiska relationer mellan objekt.",
      "Förmågan att översätta vardagsaktiviteter till algebraiska uttryck."
     ],
     "correct": 0,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vilken uppfattning har textförfattaren om de tre delarna i skolalgebran som han räknar upp?",
     "options": [
      "Eleverna bör lära sig algebrans grammatiska grunder först av allt.",
      "Eleverna bör behärska modellering innan de utför algebraiska aktiviteter.",
      "Eleverna bör öva sig i algebraiskt tänkande innan de lär sig algebrans konventioner.",
      "Eleverna bör få sin första introduktion i algebra via lustfyllda och gradvis allt svårare matriser."
     ],
     "correct": 2,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vad var innebörden av det avtal som kvinnan ingått och som diskuteras i texten?",
     "options": [
      "Hennes anställning skulle fortsätta under oklara villkor.",
      "Hennes anställning kunde upphöra om svekregeln var tillämpbar.",
      "Hennes anställning ansågs oberoende av reglerna i avtalslagen.",
      "Hennes anställning skulle upphöra på grund av arbetsbrist."
     ],
     "correct": 3,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vad bör AD:s utslag rimligen ha inneburit för den berörda kvinnan, om man följer textens resonemang?",
     "options": [
      "Att hennes anställningsavtal upphörde.",
      "Att hon fick ekonomisk kompensation.",
      "Att hennes anställning fortsatte.",
      "Att hon ersattes av en annan person."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vilken vision för vården har Psykologförbundet, enligt texten?",
     "options": [
      "Mer jämlikhet.",
      "Mer privatisering.",
      "Mer öppenhet.",
      "Mer konkurrens."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 16,
     "text": "Skillnaderna i tillgång till psykolog vid vårdcentral varierar inom landet. Ger texten någon förklaring till detta, och i så fall vilken?",
     "options": [
      "Ja, vårdcentralerna prioriterar medicinsk behandling framför psykologisk.",
      "Ja, en övervägande andel av alla vårdcentraler drivs i offentlig regi.",
      "Ja, det går oftast inte att få en direkt kontakt med psykolog i nuvarande system.",
      "Nej, texten ger ingen förklaring till detta."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 17,
     "text": "Vad är huvudinriktningen för den recenserade avhandlingen om <i>Gösta Berlings saga</i>?",
     "options": [
      "Att belysa kopplingarna mellan romanens innehåll och dåtidens idéer.",
      "Att utforska det blandade mottagande som romanen fick när den gavs ut.",
      "Att undersöka förhållandet mellan romangestalten Gösta Berling och dåtidens mansroll.",
      "Att klarlägga i vilken grad romanens motiv har stöd i Selma Lagerlöfs egen livssituation."
     ],
     "correct": 0,
     "textIndex": 3
    },
    {
     "num": 18,
     "text": "I en fråga ställer sig recensenten tveksam till Jenny Bergenmars resonemang om <i>Gösta Berlings saga</i>. Vilken fråga?",
     "options": [
      "Frågan om vilken nutida ställning romanen har.",
      "Frågan om vilken litterär genre romanen tillhör.",
      "Frågan om vilken roll tidsandan spelar i romanen.",
      "Frågan om vilken betydelse kön har i romanen."
     ],
     "correct": 3,
     "textIndex": 3
    },
    {
     "num": 19,
     "text": "Hur kan man utifrån texten bäst beskriva romanen <i>Gösta Berlings saga</i>?",
     "options": [
      "Traditionstyngd och med många symboler.",
      "Växlingsrik och utan svar.",
      "Koncentrerad och med klara ideal.",
      "Flyktig och utan budskap."
     ],
     "correct": 1,
     "textIndex": 3
    },
    {
     "num": 20,
     "text": "Hur betraktar recensenten sammanfattningsvis Jenny Bergenmars ståndpunkter?",
     "options": [
      "Som i huvudsak en bekräftelse av andra forskares slutsatser.",
      "Som väl värda att begrunda och dessutom utforska vidare.",
      "Som inspirerande för både andra forskare och vanliga läsare.",
      "Som alltför långtgående för att motivera till fortsatt forskning."
     ],
     "correct": 1,
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
     "text": "Ett centralt kapitel i boken är ett collage av _____ om ensamhet som hon har läst i böcker och artiklar och sedan _____ lite grann efter eget huvud.",
     "options": [
      "förvrängningar – beskurit",
      "uppfattningar – plagierat",
      "symboler – kopierat",
      "påståenden – förändrat"
     ],
     "correct": 3
    },
    {
     "num": 22,
     "text": "De tidiga avhoppen har många olika orsaker. Studenten kan till exempel ha upptäckt att han eller hon gjort ett felval. Men det kan också handla om svårigheter att klara av utbildningen. Matematiken anges som en _____ i flera självvärderingar.",
     "options": [
      "minnesbeta",
      "rotvälska",
      "stötesten",
      "tankenöt"
     ],
     "correct": 2
    },
    {
     "num": 23,
     "text": "Det var en tystlåten och kraftigt byggd man med så stubinkort hår att han _____ tycktes vara helt skallig. Svensson var 38 år gammal och hade nyligen kommit till roteln från Huddingepolisen där han ägnat många år åt utredningar om gängbrottslighet. Han hade rykte om sig att _____ ett häftigt humör och hårda nypor, vilket var en _____ för att han möjligen använde metoder gentemot klientelet som inte var helt förenliga med det polisiära reglementet.",
     "options": [
      "ibland – förena – analys",
      "till synes – uppbåda – tolkning",
      "på håll – besitta – omskrivning",
      "verkligen – anta – beskrivning"
     ],
     "correct": 2
    },
    {
     "num": 24,
     "text": "Idag har det ena minnet efter det andra _____ honom. Några av dem har varit beklagliga, några ganska bra; några har stämt ner hans humör och gjort honom _____.",
     "options": [
      "avlöst – disträ",
      "hemsökt – moloken",
      "påmint – yster",
      "svikit – lidelsefull"
     ],
     "correct": 1
    },
    {
     "num": 25,
     "text": "Efter omkring 3 veckors ruvning kläcks kycklingarna, som redan från början är ganska _____ och kan följa modern och under hennes ledning söka föda.",
     "options": [
      "försiktiga",
      "försigkomna",
      "förfördelade",
      "förtjänstfulla"
     ],
     "correct": 1
    },
    {
     "num": 26,
     "text": "Begränsningsåtgärder inom äldrevården får inte förekomma _____ och flera studier visar att åtgärderna inte har lett till ett minskat antal fallskador. Begränsningsåtgärder ska vara ordinerade, och i de fall de förekommer måste de _____ och regelbundet omprövas.",
     "options": [
      "rutinmässigt – beordras",
      "tidsmässigt – rapporteras",
      "slentrianmässigt – dokumenteras",
      "regelmässigt – åtgärdas"
     ],
     "correct": 2
    },
    {
     "num": 27,
     "text": "Naturalisterna drevs inte bara av ambitionen att fokusera på social misär och utsugning av arbetare. Orättvisa och korruption i alla dess former var som _____ för dem.",
     "options": [
      "vita fläckar",
      "blå dunster",
      "svarta får",
      "röda skynken"
     ],
     "correct": 3
    },
    {
     "num": 28,
     "text": "Vi kan se spåren av människors _____ arbete i äldre tid med att erövra och nyttja detta landskap för produktion av _____; här dikade man _____ för att få slåtter av gräs på så kallade översilningsängar, alltså naturlig ängsmark som genom grävda diken tillförs vatten.",
     "options": [
      "sträva – spannmål – åkermark",
      "idoga – djurfoder – myrar",
      "flitiga – träråvara – skogar",
      "kärva – energigrödor – sjöar"
     ],
     "correct": 1
    },
    {
     "num": 29,
     "text": "Hans vision var ett _____ Stockholm, en storstad i stil med New York, med nattöppna restauranger, affärer och teatrar. I den meningen var han en radikal modernist. Men han var ingen estet. Han såg på Stockholm med ingenjörens ögon, inte med _____.",
     "options": [
      "urbant – arkitektens",
      "provinsiellt – konstnärens",
      "kommersiellt – entreprenörens",
      "subkulturellt – regissörens"
     ],
     "correct": 0
    },
    {
     "num": 30,
     "text": "I en uppföljningsstudie fick studenterna göra en utvärdering av övningen. Många ogillade att de osjälviska fick de rättvisa, alltså de som hade tagit och gett ungefär lika mycket, att framstå som dåliga. Man kommenterade också att de osjälviska bröt mot _____ genom att hålla sig för goda för belöningssystemet.",
     "options": [
      "konvenansen",
      "legitimiteten",
      "diskrepansen",
      "generositeten"
     ],
     "correct": 0
    }
   ]
  }
 ]
};
