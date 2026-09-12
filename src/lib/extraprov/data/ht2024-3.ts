// Högskoleprovet 20 oktober 2024, provpass 3 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "ht2024-3",
 "tillfalle": "ht2024",
 "passNr": 3,
 "kind": "verbal",
 "name": "Provpass 3 (verbalt)",
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
   37,
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
   60,
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
   70,
   1.7
  ],
  [
   72,
   1.8
  ],
  [
   74,
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
     "word": "hysa agg",
     "text": "<b>hysa agg</b>",
     "options": [
      "vara spydig",
      "kritisera",
      "vara fientligt inställd",
      "irritera",
      "göra någon illa"
     ],
     "correct": 2
    },
    {
     "num": 2,
     "word": "kontinuum",
     "text": "<b>kontinuum</b>",
     "options": [
      "upplösning",
      "evigt liv",
      "motsatsförhållande",
      "obruten följd",
      "förlängning"
     ],
     "correct": 3
    },
    {
     "num": 3,
     "word": "vimmelkantig",
     "text": "<b>vimmelkantig</b>",
     "options": [
      "yr",
      "trött",
      "osäker",
      "klumpig",
      "hjälplös"
     ],
     "correct": 0
    },
    {
     "num": 4,
     "word": "krill",
     "text": "<b>krill</b>",
     "options": [
      "korall",
      "sjögräs",
      "parasit",
      "kräftdjur",
      "grodyngel"
     ],
     "correct": 3
    },
    {
     "num": 5,
     "word": "restriktiv",
     "text": "<b>restriktiv</b>",
     "options": [
      "bestämd",
      "ordentlig",
      "påfrestande",
      "motvillig",
      "återhållsam"
     ],
     "correct": 4
    },
    {
     "num": 6,
     "word": "särdrag",
     "text": "<b>särdrag</b>",
     "options": [
      "avvikande åsikt",
      "skiljelinje",
      "klokt agerande",
      "diskriminering",
      "utmärkande egenskap"
     ],
     "correct": 4
    },
    {
     "num": 7,
     "word": "osökt",
     "text": "<b>osökt</b>",
     "options": [
      "rättvist",
      "naturligt",
      "intressant",
      "hoppfullt",
      "viktigt"
     ],
     "correct": 1
    },
    {
     "num": 8,
     "word": "empati",
     "text": "<b>empati</b>",
     "options": [
      "hjälpsamhet",
      "uppskattning",
      "tillgivenhet",
      "inlevelseförmåga",
      "ömsesidighet"
     ],
     "correct": 3
    },
    {
     "num": 9,
     "word": "bordlägga",
     "text": "<b>bordlägga</b>",
     "options": [
      "tilltala",
      "intyga",
      "motstå",
      "förevisa",
      "uppskjuta"
     ],
     "correct": 4
    },
    {
     "num": 10,
     "word": "taktfull",
     "text": "<b>taktfull</b>",
     "options": [
      "snabb",
      "högljudd",
      "finkänslig",
      "noggrann",
      "uthållig"
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
     "title": "Gäss",
     "html": "<p>Generellt gäller för gäss och andra simfåglar i tempererat klimat att en andra kull kan läggas endast de fåtal gånger då den första omgången ägg/ungar förloras tidigt under häckningssäsongen. Hos vilda gäss i arktiskt klimat har omläggning däremot inte kunnat påvisas. Och med undantag för några exempel gällande vitkindad gås (<i>Branta leucopsis</i>) som hållits i parker förekommer andrakullar normalt inte någonstans. Orsaken till detta är tudelad. Dels förlorar honan förhållandevis mycket i vikt under ruvningsperioden och det tar tid att återfå denna vikt efteråt, och då är det alltför sent på säsongen. Dels skulle de hormonella förändringar som uppstår hos de vuxna fåglarna också kunna medverka till att förhindra omläggning. Dock har ett fall av andrakull hos kanadagås (<i>Branta canadensis</i>) rapporterats tidigare. Föreslagna förklaringar i det fallet var lång häckningssäsong, god födotillgång samt att fåglarna var icke-migrerande och därför inte förlorade energi i samband med flytt. Den allmänt vedertagna uppfattningen torde dock likväl vara att kanadagäss egentligen inte kan få mer än en kull gässlingar per år.</p>\n<p>I det tempererade klimatet på ön Nidingen, belägen ungefär 8 km utanför Hallands nordligaste kust, tycks dock ett par kanadagäss framgångsrikt ha fött upp en tidig kull ungar på våren (två ungar 2011 respektive åtta ungar 2012). Samma par har sedan, ungefär 35–40 dagar efter det att den första kullen kläckts, lagt en andra omgång ägg i samma bo. På ön ligger Nidingens fågelstation (Göteborgs ornitologiska förening), vilken är bemannad från mars till november. Nidingen är ett naturreservat och besökare får under häckningstid endast beträda en mycket begränsad del av ön. Fågelstationens personal gör dagligen anteckningar och rapporteringar både genom artvisa rapporter på Artportalen och i form av mer allmänt hållna dagboksanteckningar i samma forum.</p>\n<p>Eftersom ön är lättövervakad och endast ett fåtal par häckar på ön är data relativt säkra. Då inga tecken på adoption av andras ungar eller byte av partner kunnat ses kvarstår en stark hypotes om att det rör sig om äkta andrahäckningar.</p>\n<p>De nämnda fallen av andrahäckning hos <i>Branta</i>-gäss ska samtliga ha inträffat i tempererade områden. Tänkbara förklaringar till att en andrakull är möjlig är att tempererade områden till skillnad från arktiska uppvisar en längre häckningssäsong samt god tillgång till föda. För att i framtiden kunna säkerställa förekomsten av andrakullar hos gäss torde det vara lämpligt att studera dem i tempererade områden, med individuell märkning kombinerat med dna-analyser.</p>\n<p class=\"forf\">Charlotte Berg &amp; Henrik Lerner</p>"
    },
    {
     "title": "Social problemlösning",
     "html": "<p>– I korridoren ser du en stor kille som heter Petter. Han har fått tag på en uppsats skriven av Sven. Petter hånar uppsatsen och Sven. Några andra står bredvid och skrattar. Sven försöker få tillbaka uppsatsen, men ingen hjälper honom. Vad gör du?</p>\n<p>Det är SO-lärare Anders Josefsson som ställer frågan till eleverna i klass 9D på Rudsskolan i Karlstad. Ämnet är religion och eleverna ska ägna lektionen åt att skärskåda ett dilemma om mobbning.</p>\n<p>Vilka problem finns i situationen som läraren beskriver? Hur borde det vara i stället och vilket alternativ är bäst för att nå dit? Frågorna kräver eftertanke, men efter bara en kvart sätter Anders Josefsson punkt för det individuella skrivarbetet och delar in eleverna i grupper.</p>\n<p>– Gruppdiskussionerna ger eleverna möjligheten att utveckla sina egna resonemang. Eleverna tränar på att fokusera och blir mer aktiva i diskussionerna eftersom de förbereder sig på egen hand först, säger Anders Josefsson.</p>\n<p>För att närma sig svåra etiska och moraliska dilemman – som exempelvis mobbning, otrohet eller sexuella trakasserier – testar klassen en särskild problemlösningsmodell. I korthet går den ut på att bryta ner och definiera problemen för att sedan diskutera alternativa lösningar enskilt och i grupp. Arbetssättet är rätt nytt för den här klassen – men inte för Anders Josefsson. Under tre år fick han möjlighet att djupdyka i modellen tack vare ett forskningsprojekt vid Karlstads universitet som leddes av Alireza Moula, docent i socialt arbete.</p>\n<p>– Jag kallar det för <i>empowerment</i> eftersom alla redan har den här kraften i sin hjärna, men för att utveckla konsten att fokusera, reflektera, ta välgrundade beslut och lösa problem måste man träna aktivt, säger Alireza Moula.</p>\n<p>Hans forskning spänner över så vitt skilda discipliner som sociologi, filosofi, psykologi – och neurovetenskap. Att modellen har sin grund i kunskapen om hur hjärnan fungerar är viktigt, menar Alireza Moula. För att lösa komplexa, sociala problem som inte har ett enkelt svar aktiveras nämligen den del av hjärnan som kallas pannloben. Om barn lär sig en systematisk modell för problemlösning blir det lättare för dem att stanna upp och tänka efter i stället för att agera känslostyrt i socialt laddade situationer.</p>\n<p>– Alla elever kommer att behöva hantera svåra sociala dilemman i livet, men endast ett fåtal kommer att ställas inför avancerade matematiska eller tekniska problem i vuxen ålder. Ändå prioriteras det ämnesorienterade tänkandet och skolämnen som är viktiga för ett teknologiskt avancerat samhälle. Skolan måste också ge eleverna redskap för livet, säger han.</p>\n<p>Social problemlösning är en kognitiv förmåga som kan stärkas genom övning – precis som läs- och skrivinlärning eller matematiskt tänkande. Därför är det individuella momentet i modellen centralt. Målet med forskningsprojektet var att skapa tillfällen i skolan att träna social problemlösning systematiskt, genom en konkret metod som arbetats fram tillsammans med Anders Josefsson. En klass fick ägna en timme i veckan under hela högstadietiden åt den här typen av problemlösning. I sjuan fick eleverna lära sig modellen genom att fokusera på komplexa sociala frågor som de själva skulle kunna stöta på i vardagen. I åttan och nian användes samma modell, men då handlade problemlösningen snarare om ämnesrelaterade frågor som fattigdomsbekämpning.</p>\n<p>Individuella skriftliga tester som Alireza Moula gjorde visade att elevernas förmåga att arbeta fokuserat med ett problem ökade från 10 till 60 minuter under de tre åren. Reflektionerna kring och lösningarna på de olika problemen blev också mer utvecklade och nyanserade.</p>\n<p>– Eleverna i den klassen fick lättare att fokusera på svåra uppgifter som kräver att man stannar upp och reflekterar. Det påverkade alla ämnen och eleverna fick goda resultat och höga meritpoäng, säger Anders Josefsson.</p>\n<p>Nu använder Anders Josefsson modellen när den passar in i ämnesundervisningen, som under dagens religionslektion med exemplet om Petter och Sven i korridoren.</p>\n<p>– Det är kanske inte så troligt, men man kan ju faktiskt ha missförstått situationen och då är det ju rätt oskönt att göra något, säger eleven Gabriel.</p>\n<p>– Men om vi tar för givet att Sven är obekväm i situationen och vill ha tillbaka uppsatsen, inflikar Anders Josefsson.</p>\n<p>– Man kan springa förbi snabbt och sno tillbaka uppsatsen åt Sven, säger Leah.</p>\n<p>– Om vi fokuserar på det som ni själva sa att ni ville ha – en tryggare skola – ska vi se vad som händer, säger Anders Josefsson diplomatiskt och drar ett streck mellan två av alternativen på tavlan där elevernas samlade tankar finns på pränt.</p>\n<p>Han försöker undvika att moralisera. Det är viktigt att eleverna inte censurerar sig själva under processen. De måste våga dela med sig av även mindre genomtänkta idéer, förklarar han. Tillsammans kan de sedan diskutera och reflektera över vilka handlingsalternativ som bäst överensstämmer med det som eleverna själva definierat som det önskvärda läget. Eleverna inser snart att våld och hämnd kanske inte är ett särskilt bra alternativ för att lösa problemen och för att nå det övergripande målet en tryggare skola.</p>\n<p>– Det viktigaste är att eleverna känner att de äger diskussionen från start till mål, inte minst för att de ska behålla engagemanget. Min roll är att hjälpa dem på vägen. Förhoppningen är så klart att de ska komma fram till bra lösningar själva, säger Anders Josefsson.</p>\n<p>Alireza Moula hoppas att hans forskning ska bidra till att fostra fler ansvarsfulla samhällsmedborgare, som i samspel med andra kan lösa världens små och stora problem. Problemlösningsmodellen och pedagogiken bakom den är ett steg på vägen, menar han. Idealen är svåra att invända mot och nyttan är faktiskt mer direkt än så. Sedan 2012 har det fjärde delprovet i den internationella kunskapsmätningen Pisa testat just social problemlösning.</p>\n<p>– Enligt FN tränas inte den här förmågan systematiskt i skolan, trots att skolan enligt barnkonventionen är skyldig att forma reflekterande och ansvarstagande medborgare. Jag hoppas att min forskning inspirerar fler lärare att börja, säger Alireza Moula.</p>\n<p>Just frågan om ansvar diskuteras även av klass 9D. Eleven Anna lyfter fram risken att själv bli utsatt om man som elev väljer att gå in i en konfliktsituation som den mellan Sven och Petter. Då är fler närvarande vuxna som kan ingripa en bättre lösning, förklarar hon.</p>\n<p>– Vem har ansvar för att elever inte mobbas på en skola? frågar Anders Josefsson.</p>\n<p>– Rektorn, svarar flera av eleverna snabbt. – Alla, skulle jag vilja säga, protesterar Tuva. En kommentar som just i dag drunknar i sorlet av röster och ljudet från skrapande stolar som uppstått under lektionens sista skälvande minuter. Men på papperet på bänken framför henne finns den tanken nedtecknad.</p>\n<p class=\"forf\">Ellen Larsson</p>"
    },
    {
     "title": "Lantmäteriutredningen",
     "html": "<p>Det statliga lantmäteriet ansvarar för att förse landet med grundläggande geografisk information och fastighetsinformation, framställning av allmänna kartor samt fastighetsregistrering och fastighetsbildning i de fall då den sistnämnda inte utförs av kommuner.</p>\n<p>Lantmäteriutredningen har haft till uppgift att utvärdera den omfattande omstrukturering av lantmäteriet som ägde rum i mitten av 1990-talet samt att lämna förslag om det statliga lantmäteriets framtida roll i samhället, hur det offentliga åtagandet bör avgränsas och utföras, hur verksamheten bör organiseras och hur den bör finansieras.</p>\n<p>Utredningen konstaterar att verksamheten har karaktär av grundläggande infrastruktur med mycket goda samhällsekonomiska effekter. Den har stor betydelse för samhällsplaneringen, den offentliga sektorns och näringslivets utveckling och därmed för tillväxten i landet. Detta utgör det grundläggande motivet för det offentliga åtagandet på området. Den tekniska utvecklingen möjliggör ökade samhällsekonomiska effekter i positiv bemärkelse.</p>\n<p>Utvecklingen internationellt, där Sverige genom Lantmäteriverket har en stark ställning, går mot ökad enhetlighet när det gäller teknikutnyttjande, standarder, geodetiska referenssystem m.m. Omvärlden ser ett ökat behov i framtiden av grundläggande geografisk information och fastighetsinformation.</p>\n<p>År 1996 sammanfördes 290 olika myndigheter till en central myndighet, Lantmäteriverket, och en lantmäterimyndighet i varje län. De mål och riktlinjer som statsmakterna satte upp för omstruktureringen har med ett par undantag uppfyllts. Integreringen av geografisk information och fastighetsinformation var framsynt och ger möjligheter till fortsatt utveckling och effektivisering. När målen inte helt har uppfyllts har det sin förklaring i oförutsedda omvärldsförändringar och bristande finansiering. Undantagen i måluppfyllelsen gäller kraven på tydlighet i organisationen, organisatorisk och ekonomisk åtskillnad av den uppdragsverksamhet Lantmäteriverket utför i konkurrens på marknaden samt konkurrensneutralitet.</p>\n<p>Utvärderingen av omstruktureringen ligger till grund för den målbild för det framtida lantmäteriet som utredningen föreslår. Målbilden utgår från begrepp som identifierats som centrala i den nuvarande och framtida lantmäteriverksamheten: förtroende, rättssäkerhet, kvalitet, kompetens och kostnadseffektivitet. Utvärderingen och målbilden är utgångspunkt för en rad konkreta förslag:</p>\n<p>• För att den grundläggande informationens samhällsnytta ska kunna bibehållas och öka behövs bättre samverkan mellan olika producenter av informationen och bättre samordning för t.ex. ajourhållning av de digitala databaserna. Utredningen föreslår därför att Lantmäteriverket får en uttalad roll som samordnare av grundläggande geografisk information och fastighetsinformation.</p>\n<p>• Utredningen har inte funnit belägg för att den uppdragsverksamhet som lantmäterimyndigheterna i länen bedriver i nära anslutning till förrättningsverksamheten är förtroendeskadlig eller ifrågasatt ur konkurrenssynpunkt. Men bl.a. Lantmäteriverkets planer på att expandera denna uppdragsverksamhet föranleder att utredningen föreslår att den ska begränsas och preciseras. Då bortfaller t.ex. mättekniska uppdrag.</p>\n<p>• Utredningen föreslår att Lantmäteriverket och de 21 länsvisa lantmäterimyndigheterna förs samman till en myndighet, benämnd Lantmäteriet. Syftet med detta är att ge bättre möjligheter till styrning, effektivisering och resursutnyttjande.</p>\n<p>• Utredningen har funnit att en stor del av Lantmäteriverkets konkurrensutsatta uppdragsverksamhet är konkurrenssnedvridande, skadar förtroendet för myndigheten och medför otydlighet i omvärlden när det gäller det offentliga åtagandet. Detta strider mot de grundläggande principer som riksdagen fastslagit när det gäller renodling av den statliga verksamheten och statliga myndigheters agerande på marknaden. Utredningen föreslår därför att en stor del av den konkurrensutsatta uppdragsverksamheten upphör eller avskiljs från verket och överlåts till marknadens aktörer. Avskiljandet gäller enbart externa uppdrag och berör den kartografiska uppdragsverksamheten, direktförsäljningen av kartor, flygfoto och fotogrammetri, geodetisk mätning, geografisk informationsteknik samt mätservice och detaljkartor. Kvarvarande extern uppdragsverksamhet preciseras och följs upp av statsmakterna.</p>\n<p>• Utredningen anser att Lantmäteriverkets roll gentemot marknaden ska vara att genom t.ex. öppenhet främja utvecklingen av och kunskapsmässigt stödja företag inom området, och inte att konkurrera med företagen. Utredningen föreslår därför att ett marknads- och konkurrensråd inrättas vid verket för att behandla frågor av särskilt intresse för privata aktörer. Lantmäteriverket bör också utarbeta en marknads- och konkurrenspolicy.</p>\n<p>• Utredningens omvärldsanalys visar bl.a. att användarna anser att priset på den grundläggande informationen är ett betydande hinder för ökad användning. Användarna ställer också krav på ökad kvalitet, flexibilitet, aktualitet och tillgänglighet när det gäller informationen. En ny höjddatabas efterlyses, liksom en objektorientering av de digitala databaserna. Detta innebär att Lantmäteriverket behöver ekonomiska medel för utveckling och nyinvesteringar, och att myndigheten bör vara restriktiv vad gäller användarfinansieringen. Utredningen föreslår att användarbidrag och expeditionsavgifter får ett gemensamt kostnadsunderlag samt att expeditionsavgifterna höjs för lagfart, pantbrev m.m. Utredningen anser att en sådan modell ger bättre förutsättningar för utveckling och samhällsnytta än om sakägarkollektivet eller användarna av fastighetsinformationen belastas med ytterligare kostnader. När det gäller den geografiska informationen skulle gynnsammare finansiering möjliggöra en snabbare utveckling och därmed större samhällsnytta. De kvarvarande anslagsmedlen bör användas för prissänkning av den geografiska informationen och för utveckling av densamma.</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vilket påstående om gäss stämmer överens med vad som sägs i texten?",
     "options": [
      "Det är lättare att studera vilda gäss i tempererade områden än i arktiska.",
      "För alla typer av gäss gäller att de normalt får en kull per säsong.",
      "Gäss som flyttar har längre häckningssäsong än andra gäss.",
      "Gäss i reservat får generellt fler ungar än gäss i andra områden."
     ],
     "correct": 1,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vad är, enligt texten, syftet med den fortsatta forskning som textförfattarna föreslår?",
     "options": [
      "Att försöka knyta andrahäckning till specifika arvsanlag hos fåglar.",
      "Att ta reda på om andrahäckning förekommer även i arktiska områden.",
      "Att närmare dokumentera sambandet mellan andrahäckning och födotillgång.",
      "Att hitta fler belägg för andrahäckningar som den på Nidingen."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vad av följande framhålls i texten som en av fördelarna med den beskrivna problemlösningsmodellen?",
     "options": [
      "Att den ger träning i förmågor som är till nytta i alla skolämnen.",
      "Att den märkbart förbättrar arbetsmiljön i skolan.",
      "Att den också intresserar elever med låg motivation.",
      "Att den är flexibel och ständigt vidareutvecklas av eleverna."
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vilken aspekt av den beskrivna modellen anspelar textens sista mening mest troligt på?",
     "options": [
      "Betydelsen av ett känslomässigt engagemang.",
      "Vikten av ett individuellt tankearbete.",
      "Betydelsen av att arbeta med vardagssituationer.",
      "Vikten av att få andras uppmärksamhet."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Vilket påstående om dagens skola håller Alireza Moula mest sannolikt med om, utifrån vad som framkommer i texten?",
     "options": [
      "Undervisningen utgår från en tradition där eleverna ges en alltför passiv roll.",
      "Undervisningen utgår från en begränsad syn på vad som är viktig kunskap.",
      "Undervisningen utgår i alltför liten utsträckning från varje elevs särskilda problem.",
      "Undervisningen utgår från idén att alla föds med samma förmåga till problemlösning."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Vilken alternativ rubrik sammanfattar bäst texten som helhet?",
     "options": [
      "Redo för livets utmaningar",
      "Samarbete löser problemet",
      "Modellen som höjer betygen",
      "Trygghet i skolan allas ansvar"
     ],
     "correct": 0,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Utredningen föreslår förändringar av lantmäteriverksamheten. Vilket är det överordnade målet med dessa förändringar, av texten att döma?",
     "options": [
      "Att öka antalet användare av tjänsterna.",
      "Att bli ledande på området.",
      "Att öka samhällsnyttan.",
      "Att hindra privatiseringen."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Utredningen anser att Lantmäteriverket bör upphöra med en del av sin uppdragsverksamhet. Vad anges som ett skäl till detta?",
     "options": [
      "Verksamheten saknar affärsmässig karaktär.",
      "Verksamheten är kostnadskrävande och olönsam.",
      "Verksamheten saknar tillräcklig konkurrenskraft.",
      "Verksamheten skadar verkets anseende."
     ],
     "correct": 3,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Vilket svarsförslag anger två åtgärder som föreslås i utredningen?",
     "options": [
      "Höjda expeditionsavgifter och sänkta priser på geografisk information.",
      "Kostnadseffektivisering och ökade vinstkrav.",
      "Minskade statliga anslag och större försäljningsvolymer.",
      "Mindre centralstyrning och enklare regler."
     ],
     "correct": 0,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Hur framställer texten 1990-talets omorganisering av lantmäteriet?",
     "options": [
      "Den var förhastad och tog inte hänsyn till verkets alltmer skiftande uppgifter.",
      "Den såg bra ut på papperet men det praktiska genomförandet uteblev.",
      "Den var inkonsekvent och alltför försiktig men hade vissa positiva inslag.",
      "Den blev i grunden lyckad och bristerna bör kunna åtgärdas."
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
     "text": "Med hjälp av _____ för vidareutbildning från bland annat Överstyrelsen för rikets allmänna läroverk reste teckningsläraren Maja Beskow 1914 till Danmark, Holland och Italien.",
     "options": [
      "dispenser",
      "seminarier",
      "optioner",
      "stipendier"
     ],
     "correct": 3
    },
    {
     "num": 22,
     "text": "1951 års statliga skoutredning var ett _____ dokument på 350 sidor som vred och vände på alla tänkbara aspekter av dåtidens skoindustri och garverinäring i Sverige. Utredningen landade i en lång rad _____, dels till näringen och forskningsinstituten, dels till staten och myndigheterna.",
     "options": [
      "knapert – propositioner",
      "rymligt – innovationer",
      "påvert – klassifikationer",
      "mastigt – rekommendationer"
     ],
     "correct": 3
    },
    {
     "num": 23,
     "text": "Lite i _____, på randen till skogen, har den lerhaltiga markplätten tagits i _____ av så kallade gerillaodlare. Ett område som tidigare dominerades av älgört och gräs har förvandlats till en _____ trädgård med ätbara växter, bär och frukter.",
     "options": [
      "sänder – förvaltning – storslagen",
      "gränslandet – pant – rikhaltig",
      "skymundan – besittning – frodig",
      "marginalen – förvar – fridsam"
     ],
     "correct": 2
    },
    {
     "num": 24,
     "text": "Den som inte följer reglerna till punkt och pricka blir _____ diskvalificerad.",
     "options": [
      "tämligen",
      "obönhörligen",
      "synbarligen",
      "huvudsakligen"
     ],
     "correct": 1
    },
    {
     "num": 25,
     "text": "Mellan de båda romantiska _____ inom ”den nya skolan”, fosforisterna och polyfemisterna, _____ under 1800-talets början en viss rivalitet när det gällde att komma först med sina nystartade litterära tidskrifter.",
     "options": [
      "positionerna – verkade",
      "fraktionerna – rådde",
      "divisionerna – framkom",
      "versionerna – skedde"
     ],
     "correct": 1
    },
    {
     "num": 26,
     "text": "Vad vi äter och hur vi tillagar maten är något som ständigt förändras. På väg ut just nu är till exempel böckling, omelett och dillkött. Den enda mat som tycks trotsa _____ är sådant vi äter vid högtidliga tillfällen. Tårtan på födelsedagen och skinkan på julafton återkommer till exempel år efter år i många hem.",
     "options": [
      "tidens tand",
      "vanans makt",
      "tingens ordning",
      "traditionens bojor"
     ],
     "correct": 0
    },
    {
     "num": 27,
     "text": "I slutet av 1970-talet stod det klart att det inte gick att följa älgpopulationens utveckling enbart med hjälp av avskjutningssiffrorna. Då _____ arbetet med att ta fram flera av de _____ som idag används i modifierad form.",
     "options": [
      "intensifierades – inventeringsmetoder",
      "digitaliserades – jaktregleringar",
      "prioriterades – vandringsmönster",
      "rationaliserades – populationsstammar"
     ],
     "correct": 0
    },
    {
     "num": 28,
     "text": "Studien beskriver omvända _____ mellan risk för Parkinsons sjukdom och rökning, snusande eller kaffekonsumtion. Detta _____ att det är _____ att personer som har rökt, snusat eller druckit kaffe får sjukdomen.",
     "options": [
      "resultat – uppvisar – risk",
      "samband – innebär – ovanligare",
      "relationer – betyder – farligare",
      "förbindelser – motsvarar – sannolikt"
     ],
     "correct": 1
    },
    {
     "num": 29,
     "text": "Med sekretess menas att det är förbjudet att _____ en uppgift, vare sig det sker muntligen eller genom att en handling lämnas ut.",
     "options": [
      "hävda",
      "dölja",
      "kräva",
      "röja"
     ],
     "correct": 3
    },
    {
     "num": 30,
     "text": "Numera är det inte bara vana klättrare som kan uppleva _____ och njuta av _____ utsikt i världens högsta bergsområden.",
     "options": [
      "äventyr – diametral",
      "bedrifter – perifer",
      "strapatser – vidunderlig",
      "dramatik – förskönande"
     ],
     "correct": 2
    }
   ]
  }
 ]
};
