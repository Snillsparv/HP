// Högskoleprovet 21 oktober 2018, provpass 5 (verbalt, utan ELF).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och
// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.
import type { ExtraPass } from '../types.js';

export const pass: ExtraPass = {
 "id": "ht2018-5",
 "tillfalle": "ht2018",
 "passNr": 5,
 "kind": "verbal",
 "name": "Provpass 5 (verbalt)",
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
     "word": "febril",
     "text": "<b>febril</b>",
     "options": [
      "lugn",
      "envis",
      "målinriktad",
      "konstig",
      "hektisk"
     ],
     "correct": 4
    },
    {
     "num": 2,
     "word": "metabolism",
     "text": "<b>metabolism</b>",
     "options": [
      "blodcirkulation",
      "vitaminbrist",
      "immunförsvar",
      "ämnesomsättning",
      "livsduglighet"
     ],
     "correct": 3
    },
    {
     "num": 3,
     "word": "puritan",
     "text": "<b>puritan</b>",
     "options": [
      "filosof",
      "enstöring",
      "renlevnadsmänniska",
      "bedragare",
      "överstepräst"
     ],
     "correct": 2
    },
    {
     "num": 4,
     "word": "försumma",
     "text": "<b>försumma</b>",
     "options": [
      "lista ut",
      "missunna",
      "sammanfatta",
      "strunta i",
      "avlägsna"
     ],
     "correct": 3
    },
    {
     "num": 5,
     "word": "dubier",
     "text": "<b>dubier</b>",
     "options": [
      "glädjeämnen",
      "tvivel",
      "rikedomar",
      "sorger",
      "förhoppningar"
     ],
     "correct": 1
    },
    {
     "num": 6,
     "word": "blott",
     "text": "<b>blott</b>",
     "options": [
      "endast",
      "nästan",
      "öppet",
      "svagt",
      "enkelt"
     ],
     "correct": 0
    },
    {
     "num": 7,
     "word": "uppsjö",
     "text": "<b>uppsjö</b>",
     "options": [
      "positiv trend",
      "motstånd",
      "stor mängd",
      "variation",
      "oväntad ökning"
     ],
     "correct": 2
    },
    {
     "num": 8,
     "word": "kurant",
     "text": "<b>kurant</b>",
     "options": [
      "glad",
      "kraftig",
      "syrlig",
      "kvicktänkt",
      "frisk"
     ],
     "correct": 4
    },
    {
     "num": 9,
     "word": "inkonsekvens",
     "text": "<b>inkonsekvens</b>",
     "options": [
      "tveksamhet",
      "självmotsägelse",
      "taktlöshet",
      "missförhållande",
      "inblandning"
     ],
     "correct": 1
    },
    {
     "num": 10,
     "word": "kokettera",
     "text": "<b>kokettera</b>",
     "options": [
      "göra sig intressant",
      "skämma ut sig",
      "umgås förtroligt",
      "ta hand om sig",
      "göra upp planer"
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
     "title": "Vindar och stormar",
     "html": "<p>Storm är ett naturfenomen som uppkommer för att utjämna tryckskillnader mellan hög- och lågtryck. Ju tätare det är mellan isobarerna, desto våldsammare uttryck tar sig utjämningen, det vill säga vinden blir starkare. Vindstyrka tillhör de mätbara abiotiska faktorer som jämte de biotiska spelar en viktig roll för ett ekosystem i funktion. Vindstyrkor med betydelse för livet i ett ekosystem varierar från måttlig vind (&lt; 5 m/s) till i mer sällsynta fall full orkan (&gt; 32 m/s).</p>\n<p>Vindar ligger bakom totalcirkulationen i sjöar och hav. Syrerikt vatten transporteras mot djupet och näringsrikt vatten förs upp till ytan. Solljuset når en bit ner i vattnet och fotosyntesen tar fart hos växtplankton som finns i ytskiktet. God tillgång på näringsämnen i sjöars och havs ytskikt gynnar planktontillväxten. Från den planktonrika miljön utgår sedan livet i många av de limniska och marina näringskedjorna. Vindar driver även vatten till och från grunda områden och genom sund och andra passager.</p>\n<p>Den roll vinden spelar i landekosystemen är en annan. Uppenbart är att organismer är bättre skyddade mot vindars verkningar i tätt bevuxna ekosystem än i öppna, glest bevuxna ekosystem. Välbekant är också att vindpollen och en del lätta fröer kan spridas långt med vindens hjälp.</p>\n<p>Stormar, men även friska och hårda vindar, sätter all vegetation i rörelse. Vindarna rycker och sliter i träd, buskar, gräs och örter och får växtligheten att vaja fram och tillbaka. De rörelser som alstras fortplantar sig ner i marken, ibland ända ner till rötterna. En rotvälta är ett synligt bevis på hur stormar påverkar marken. Vid all vindpåverkan uppstår osynliga sprickor och springor i marken även på långt avstånd från ett träd. I den uppluckrade jorden sprider sig syrerik luft och ett för markandningen gynnsamt läge uppstår.</p>\n<p>Biprodukter från markandningen, liksom från all annan andning, är koldioxid och vatten. I marken reagerar koldioxiden med markvattnet och kolsyra bildas. Kolsyran, som är en svag syra, orsakar en lätt kemisk vittring. Från markpartiklarna (kolloiderna) vittrar näringsämnen, som tas upp av rothår hos gröna fotosyntetiserande växter. Vi skönjer här en koppling mellan vind, rörelser i marken och syretillförsel, ett samspel i den oorganiska världen som bildar grund för många terrestra näringskedjor.</p>\n<p>Vinden tar ibland i så våldsamt att stammar knäcks och träd slits upp med rötterna. Detta kan vara en god sida av stormar, eftersom de på så sätt medverkar till att fälla försvagade träd och rensa bort torra grenar. I stormens spår sker det därmed en selektion av det livskraftigaste. Samtidigt öppnas luckor i vegetationen och i dessa släpps ljus ner till uppväxande plantor. Av det material som faller till marken bildas förna. Den bryts så småningom ned och blir på sikt näring för både småplantor och växande träd.</p>\n<p>Vindar sätter också andra spår. Svåra stormar (orkaner) som till exempel stormen Gudrun i januari 2005 pekar på svagheterna hos planterade skogsmonokulturer. Dessa skogar faller i betydligt större utsträckning offer för stormars härjningar än vad mångformiga naturskogar gör.</p>\n<p class=\"forf\">Lars Ljunggren</p>\n<p><b>biotisk</b> = levande<br><b>abiotisk</b> = icke-levande<br><b>limnisk</b> = som hör till sötvatten<br><b>terrestra</b> = som har med jorden eller jordytan att göra</p>"
    },
    {
     "title": "Skolan och Strindberg",
     "html": "<p>”Ingen av Strindbergs efterföljare har uppnått så glänsande resultat som han själv, mästaren.”</p>\n<p>Så avslutade gymnasisten Albin Lind sin examensuppsats om författaren August Strindberg. Året var 1912, knappt ett halvår efter författarens död.</p>\n<p>Långt senare, år 1960, avslutar gymnasisten Lisbeth Hagman sin uppsats med: ”För mig och, som jag tror, för många andra, framstår han [Strindberg] som den oöverträfflige, ouppnåelige och sanne författaren.”</p>\n<p>Trots vissa skillnader i stil och innehåll är de båda uppsatserna väldigt lika, och beträffande uppfattningarna om August Strindberg och hans författarskap är de i stort sett identiska. Båda hyllar den store, stridbare och oerhört produktive ”titanen” i svensk litteratur.</p>\n<p>Ändå mottogs uppsatserna helt olika av sina respektive skolsystem. Albins lärare gav honom betyget stort C, medan Lisbeths beundran premierades med ett litet a.</p>\n<p>Det är uppenbart att stackars Albin uttryckte en bild som inte gillades av 1912 års litteraturlärare, medan samma funderingar fick beröm i 1960-talets skolkultur. För August Strindberg kan alltså 50 år innebära skillnaden mellan förkastlig och ”oöverträfflig”.</p>\n<p>Hur kan den offentliga skolbilden av en författare förskjutas så grovt? Vem bestämmer agendan för litteraturundervisningen, och hur påverkar det utbildningssystemet som sådant?</p>\n<p>Om detta handlar doktorsavhandlingen <i>Likt och olikt. Strindbergsbildens förvandlingar i gymnasiet</i>, skriven av litteraturforskaren och lärarutbildaren Sten-Olof Ullström. Avhandlingen bygger på ett stort material och ett synnerligen gediget arbete där Ullström har analyserat 300 gymnasieuppsatser om August Strindberg åren 1912–1960, och sedan jämfört deras Strindbergsbild med den i de samtida läroböckerna i litteratur.</p>\n<p>Resultatet blir en berättelse som sträcker sig långt utöver Strindbergs författarskap. I <i>Likt och olikt</i> lyckas Ullström synliggöra några av litteraturundervisningens kanske viktigaste problem, då såväl som nu, nämligen att skolans institutioner alltid upprätthåller den dominerande kulturens värderingar och attityder. Och att undervisning alltid är en fråga om makt.</p>\n<p>August Strindberg lyftes in i läroböckerna redan under 1880-talet, dock i all korthet och med väldigt stora reservationer. Några få och på den tiden helt dominerande litteraturforskare och läroboksförfattare tonade ned det satiriska och samhällskritiska i hans författarskap, liksom senare även hans naturalistiska och expressionistiska dramatik. I stället tog man fasta på verk som <i>Mäster Olof</i> och <i>Svenska öden och äventyr</i>, och framställde honom som en historisk författare.</p>\n<p>Denna bild går igen i gymnasisternas uppsatser från den tiden. Bilden rimmar också väldigt väl med den offentliga hållning och de litterära ideal som samtidigt odlades inom läroverkskulturen.</p>\n<p>Läroverket var redan från början en uttalat elitistisk och segregerande skolkultur vars syfte var att bilda medelklassen enligt rådande ideal. Litteraturundervisningen följde en starkt nationalromantisk estetik, där litteraturens uppgift ansågs vara att förmedla och stärka nationens självbild. I det sammanhanget hade Strindberg och andra moderna författare föga existensberättigande.</p>\n<p>Det skapades en så kallad skolbild av Strindberg, som konserverades i många årtionden framöver, trots att resten av samhället fortsatte att utvecklas.</p>\n<p>Ullström noterar att bland de knappt 300 gymnasieuppsatserna är det väldigt få som inte håller sig strikt till läroverkens bild av Strindberg. Det är mer eller mindre läroboksliknande texter som okritiskt återger skolans kulturella och litterära värderingar.</p>\n<p>Först vid 1960 händer det något. Hälften av det årets uppsatser visar upp ett betydligt mer personligt tilltal, och många elever uttrycker åsikter och värderingar som inte omedelbart kan spåras till kurslitteraturen.</p>\n<p>Uppenbarligen hade tidens samhällsklimat och de gryende revolterna börjat överrösta det gamla och stela läroverksidealet. Samtidigt var den vittrande bildningsborgen, som bara åtta år senare skulle reformeras i grunden, plågsamt medveten om sin kommande upplösning och hade kanske redan börjat släppa lite på tyglarna.</p>\n<p>År 1968 reformerades skolsystemet. Läroverken försvann och det bildades ”en skola för alla”. Läroböckerna visade under 1960-talet upp en mer nyanserad och komplex bild av Strindberg. Hans tidigare så kontroversiella texter lyftes fram och undervisningen var mer öppen.</p>\n<p>Men den tendensen fortsätter enligt Ullström tyvärr inte under resten av århundradet. Dagens utbildningsmiljöer påminner i vissa avseenden starkt om den äldre gymnasiekulturen, med slutna undervisningsmiljöer där eleverna läser, skriver och samtalar bara för att reproducera vissa allmänna litterära normer.</p>\n<p>Strindberg är numera en av klassikerna, och läroböckerna hyllar honom som nationalskald och den största författaren i svensk litteratur. Detta får paradoxalt nog till följd att eleverna läser honom på samma sätt som de läser en lärobok – ett nödvändigt ont som ska pluggas in och sedan rapas upp vid examinationen.</p>\n<p>”Önskar vi en mer öppen skola”, skriver Ullström, ”måste vi våga motarbeta en undervisning där konst och litteratur reproduceras som en fixerad uppsättning data eller som okritiskt upphöjer dominerande litterära normer och tolkningstraditioner till objektiv sanning.”</p>\n<p>Vid förra sekelskiftet var Strindberg en marginaliserad författare i skolan och i läroböckerna, en kvinnohatare och galning som ibland sträckte sig över medelmåttorna, men vars texter verkade moraliskt nedbrytande på tidens ungdom. Samtidigt hyllades han av samhället utanför skolans murar som en stor författare och en genialisk häcklare av överheten.</p>\n<p>I dag, 100 år senare, konstaterar Ullström att klyftan fortfarande är lika stor. Medan resten av världen fortsätter att omtolka och sätta upp Strindbergs stora dramer, måste dagens läroböcker och lärare truga eleverna att ens intressera sig för honom. Strindberg är bara en författare av många, liksom bilderna av honom. Den ”öppna” skolan förblir sluten i de skolor där respekten för läroböckerna kvarstår och där lärarna inte är medvetna om att förhärskande bilder bestäms av en liten klick människor med ett stort formuleringsföreträde.</p>\n<p>Bara genom insikt om detta, om varför olika bilder får likartade effekter, kan öppenheten åter finna vägen in i klassrummen. Sten-Olof Ullströms avhandling <i>Likt och olikt</i> är ett stort steg i rätt riktning.</p>\n<p>Den borde få följa med in i klassrummet och hamna på lärarnas katedrar.</p>\n<p>Det skulle litteraturundervisningen må bra av.</p>\n<p class=\"forf\">Henrik Hamrén</p>"
    },
    {
     "title": "Hälsa, vård och tillväxt",
     "html": "<p><b>Välfärdspolitiska rådets rapport 2004</b> Författare: Bengt Jönsson, Göran Arvidsson, Lars-Åke Levin, Claes Rehnberg. Stockholm, SNS Förlag, 2004.</p>\n<p>Värdet av sjukvårdens bidrag till samhällsekonomin nämns sällan i debatten om ekonomisk tillväxt. Sjukvården framställs snarare som ett kostnads- och finansieringsproblem och därmed som en tärande sektor som använder det utrymme som den ekonomiska tillväxten skapar. På ett tydligt och förklarande sätt analyseras i <i>Välfärdspolitiska rådets rapport 2004</i> det inte helt självklara sambandet mellan hälsa och tillväxt samt hälso- och sjukvårdens roll i detta sammanhang.</p>\n<p>Det genomgående temat i rapporten är hälso- och sjukvårdens förutsättningar, utveckling och framtida funktion. Frågor kring sjukvårdens finansiering, organisation, prioriteringar, produktivitet och kvalitet såväl som internationalisering, försäkringslösningar och ägarformer gås noggrant igenom och mynnar ut i en sammanfattning och ett förslag i tio punkter.</p>\n<p>I den första punkten pekar rådet på vikten av att utveckla system och metoder för kontinuerlig mätning och utvärdering av sjukvårdens resultat. Produktivitets- och effektivitetsförbättringar i sjukvården gör det möjligt att prestera mer och förbättra befolkningens hälsa inom ramen för en given resursinsats. Detta bidrar till ökad ekonomisk tillväxt eftersom en befolkning med god hälsa har god produktionsförmåga. För att sjukvården inte i första hand skall ses som ett kostnadsproblem måste, enligt rådet, värdet av den förbättrade hälsan inkluderas i nationalräkenskaperna för att på så vis skapa balans och likställighet med andra samhällssektorer.</p>\n<p>Den andra punkten handlar om sjukvårdens framtida finansiering. Rådet menar att det inte finns utrymme för några större skattehöjningar i framtiden. Alternativkostnaden för ökade resurser till sjukvården är minskade resurser till bland annat skola, barn- och äldreomsorg, högre utbildning och rättsväsende. En ökning av resurserna till sjukvården fordrar därför en annan finansiering. Genom bland annat fritt vårdsökande inom och utom landet går utvecklingen, enligt rådet, i riktning mot att sjukvården i ökande utsträckning blir en nationell angelägenhet. Som en konsekvens därav bör staten ansvara för sjukvårdens finansiering. Enligt rådet bör därför skatteutjämningssystemet och de specifika statsbidragen ersättas av ett generellt statsbidrag till landstingen för sjukvård.</p>\n<p>På grund av svårigheterna med att öka den offentliga finansieringen i takt med befolkningens behov, en åldrande befolkning och introduktionen av ny och dyr teknik anser rådet i punkt tre att möjligheten att finansiera primärvården genom en obligatorisk individuell försäkring bör övervägas. Rådet föreslår att den individuella försäkringen kombineras med en offentlig subvention. Försäkringen skulle, enligt rådet, också kunna omfatta kostnader för vissa basläkemedel.</p>\n<p>Rådet anser i den fjärde punkten att istället för att lagstifta om vilka ägarformer som skall tillåtas i sjukvården bör krav ställas på utförarna vad gäller kvalitet, tillgänglighet och kostnader. Rådet anser att förekomsten av kvalitativ, kostnadseffektiv och innovativ sjukvård borde vara viktigare för skattebetalare och patienter än vem som äger vårdföretagen, och betonar att mångfald och flexibilitet vad gäller ägarformer inom sjukvården stimulerar till konkurrens och utveckling.</p>\n<p>Den femte punkten handlar om prioriteringar. Grundläggande i ekonomisk teori är att resurser är begränsade. I sjukvården tar sig detta uttryck i att det alltid kommer att finnas behov av sjukvård som överstiger tillgängliga resurser. De medicinska möjligheterna att bota och lindra ökar ständigt, och i takt med införandet av nya kostsamma metoder i sjukvården ökar därför behovet av prioriteringar. Rådet ser som en mycket viktig fråga för framtiden att prioriteringsbesluten kopplas till sjukvårdspolitiken och till mekanismerna för resursfördelning på alla nivåer i sjukvården. Rådet föreslår därför att arbetet med öppna prioriteringar skall integreras med styrning och finansiering av sjukvården för att frågan om öppna prioriteringar skall kunna drivas framåt i framtiden.</p>\n<p>Rådet rekommenderar i den sjätte punkten att landstingens läkemedelskommittéer avskaffas i deras nuvarande form och att besluten om både läkemedelsanvändning och annan medicinsk teknologi integreras i landstingens generella verksamhets- och ekonomistyrning. Vidare rekommenderar rådet att läkemedelskostnaderna fullt ut integreras i den övergripande finansieringen av vården. Någon speciell läkemedelsbudget skulle därmed inte fastställas. Läkemedlens andel av kostnaderna för att behandla olika sjukdomar skulle istället bestämmas av läkemedlens kostnadseffektivitet. På så vis skulle Läkemedelsförmånsnämnden få rollen av ett kunskapscentrum, som förser landstingen med prioriteringsunderlag och beslut om vad som skall ingå i den förmån som landstingen har ansvaret för att finansiera inom ramen för de totala sjukvårdskostnaderna. Den överprövning av Läkemedelsförmånsnämndens beslut som läkemedelskommittéerna, enligt rådet, svarar för skulle genom ett sådant system elimineras. Rådet anser att läkemedelskommittéernas resurser istället bör överföras till terapikommittéer, med uppgift att implementera de riktlinjer som bland annat Läkemedelsförmånsnämnden, Statens beredning för medicinsk utvärdering och Socialstyrelsen utarbetar.</p>\n<p>I punkt sju lyfter rådet fram vikten av att sjukvård och sjukförsäkring samordnas. Den höga sjukfrånvaron är ett stort problem och innebär en stor belastning såväl på de offentliga finanserna som på arbetsgivarna. Rådet menar att bristande integration av finansieringssystem för ohälsa och sjukdom leder till att respektive huvudman använder sina resurser utifrån en bedömning av egna kostnader och effekter, vilket leder till risk för sådan suboptimering. Rådet konstaterar också att läkarnas roll i sjukskrivningsprocessen bör uppmärksammas och begränsas av de villkor som arbetsgivarna och Försäkringskassan ställer.</p>\n<p>Rådet poängterar att kunskaperna om nya läkemedel är begränsade innan dessa fått en större användning i relevanta patientgrupper och att det är viktigt att nya lovande läkemedel introduceras och utvärderas samt att de terapier som inte håller måttet tas bort. I punkt åtta menar rådet därför att introduktionen av läkemedelsinnovationer liksom andra nya medicinska teknologier i den kliniska verksamheten bör stimuleras.</p>\n<p>Punkterna nio och tio rör internationalisering av den svenska sjukvården. Rådet anser att sjukvårdens internationalisering bör utnyttjas genom ökad export av sjukvårdsprodukter och sjukvårdstjänster och att det internationella samarbetet vad gäller utvärdering av medicinska teknologier bör utvecklas.</p>\n<p>Rapporten utgör ett utmärkt kunskapsunderlag som öppnar för debatt och fortsatt forskning kring vårdens resursutnyttjande, finansiering och styrning samt sambandet mellan hälsa och välfärd.</p>\n<p class=\"forf\">Gina Bergström</p>"
    }
   ],
   "questions": [
    {
     "num": 11,
     "text": "Vilket av följande sker med vindens hjälp i både vatten- och landekosystem, enligt texten?",
     "options": [
      "Nedbrytning.",
      "Pollinering.",
      "Fotosyntes.",
      "Syresättning."
     ],
     "correct": 3,
     "textIndex": 0
    },
    {
     "num": 12,
     "text": "Vilka slags skogsmarker löper minst risk att drabbas av stormskador, enligt texten?",
     "options": [
      "De med varierat trädbestånd.",
      "De som upptar begränsade ytor.",
      "De med relativt unga träd.",
      "De som regelbundet gallras."
     ],
     "correct": 0,
     "textIndex": 0
    },
    {
     "num": 13,
     "text": "Vad har Sten-Olof Ullström i huvudsak gjort i sin avhandling, enligt texten?",
     "options": [
      "En analys av Strindbergs verk utifrån olika tiders litterära ideal.",
      "En jämförelse mellan elevuppsatser och läromedel i litteratur.",
      "En undersökning av syftet med gymnasieskolans litteraturundervisning.",
      "En dokumentation av gymnasieelevers kunskaper om Strindberg."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 14,
     "text": "Vilken bild av författaren August Strindberg framhävdes i läroböckerna i början av 1900-talet, enligt texten?",
     "options": [
      "Strindberg – dramatikern.",
      "Strindberg – expressionisten.",
      "Strindberg – historikern.",
      "Strindberg – samhällsdebattören."
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 15,
     "text": "Hur förändrades, enligt texten, läroböckernas bild av Strindberg från 1900-talets början till 1960-talets slut?",
     "options": [
      "Strindbergs påstådda kvinnohat gavs större utrymme.",
      "Fler sidor av Strindbergs författarskap lyftes fram.",
      "Det samhällskritiska i Strindbergs författarskap tonades ned.",
      "Den anpassades bättre till skolans värderingar."
     ],
     "correct": 1,
     "textIndex": 1
    },
    {
     "num": 16,
     "text": "Vilken av följande uppmaningar överensstämmer, utifrån texten, bäst med Sten-Olof Ullströms hållning?",
     "options": [
      "Vårda minnet av Strindberg!",
      "Experimentera inte med litteraturundervisningen!",
      "Tänk fritt om Strindberg!",
      "Låt eleverna bestämma över litteraturundervisningen!"
     ],
     "correct": 2,
     "textIndex": 1
    },
    {
     "num": 17,
     "text": "Vad rekommenderar Välfärdspolitiska rådet bland annat angående hanteringen av läkemedel inom sjukvården?",
     "options": [
      "Att det ekonomiska och administrativa ansvaret för läkemedel lyfts ut från landstingens åtaganden.",
      "Att kostnaden för läkemedel hädanefter ska ingå i landstingens totalbudget för sjukvården.",
      "Att nya så kallade terapikommittéer övertar landstingens beslutanderätt kring läkemedlen.",
      "Att landstingens åtaganden kring läkemedel främst inriktas på kunskaps- och teknologifrågor."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 18,
     "text": "Vilken åtgärd föreslår rapportförfattarna i syfte att öka sjukvårdens resurser?",
     "options": [
      "Omfördelning av anslag för barn- och äldreomsorg.",
      "Individuella sjukvårdsförsäkringar för medborgarna.",
      "Fortsatt skatteutjämning inom landsting med ansträngd ekonomi.",
      "Ökad patientfinansiering av konsumtionen av läkemedel."
     ],
     "correct": 1,
     "textIndex": 2
    },
    {
     "num": 19,
     "text": "Hur ser rapportförfattarna, enligt texten, på frågan om vilka som ska ha rätt att erbjuda sjukvård?",
     "options": [
      "De anser att vården som helhet bör stå under politisk kontroll och därför bedrivas enbart i offentlig regi.",
      "De föreslår att ett begränsat antal privata aktörer ska släppas in i vårdsektorn för konkurrensens skull.",
      "De välkomnar alla typer av vårdgivare som uppfyller de villkor samhället rimligen bör ställa.",
      "De menar att konkurrensen bör släppas fri och att sjukvården bör fungera som vilken annan oreglerad marknad som helst."
     ],
     "correct": 2,
     "textIndex": 2
    },
    {
     "num": 20,
     "text": "Hur sammanfattar man bäst Gina Bergströms text?",
     "options": [
      "Som ett referat av en publikation.",
      "Som en sammanfattning av vårdläget.",
      "Som ett vårdpolitiskt debattinlägg.",
      "Som en ekonomisk framtidsprognos."
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
     "text": "Om ni vill något annat än att tillgångarna ska delas lika i händelse av skilsmässa bör ni upprätta ett _____ som juridiskt gör all eller viss egendom enskild.",
     "options": [
      "samarbetsavtal",
      "fordringsbevis",
      "avlatsbrev",
      "äktenskapsförord"
     ],
     "correct": 3
    },
    {
     "num": 22,
     "text": "Historiskt sett har tillväxttakten _____ med ökningen av utsläpp av växthusgaser. Men detta är inte en naturlag. Vi ser nu exempel på länder och regioner där de två faktiskt kan _____.",
     "options": [
      "korrelerat – separeras",
      "konkurrerat – varieras",
      "kombinerats – jämkas",
      "korrigerats – filtreras"
     ],
     "correct": 0
    },
    {
     "num": 23,
     "text": "Med _____ stora som Duploklossar ser text-tv ut som en primitiv förlaga till internet. Men publiken är fortsatt envist trogen och _____ ökar. Hur kan svenska folkets kärleksaffär med text-tv vara så _____?",
     "options": [
      "fonter – utvecklingen – ömsesidig",
      "bilder – tillämpningen – långvarig",
      "symboler – utnyttjandet – populär",
      "pixlar – användningen – livskraftig"
     ],
     "correct": 3
    },
    {
     "num": 24,
     "text": "Analyser av bronset visar också att förhållandet mellan koppar och tenn i denna _____ är typiskt för perioden och för Egypten.",
     "options": [
      "lyster",
      "mixtur",
      "legering",
      "snittyta"
     ],
     "correct": 2
    },
    {
     "num": 25,
     "text": "Ofta söker konsthistoriker djupa svar i verken eller i konstnärens liv på varför dennes konst gestaltas på ett visst sätt. Det blir ibland alltför _____. En förändring i uttrycket kan lika gärna ha sin grund i högst _____ orsaker.",
     "options": [
      "fantasifullt – modala",
      "populariserat – vitala",
      "mönstergillt – normala",
      "spekulativt – triviala"
     ],
     "correct": 3
    },
    {
     "num": 26,
     "text": "Flera systemfel borde rättas till. Ett är att kommunens överförmyndare både utser och granskar de gode männen. Justitieministern har dundrat om att de sistnämnda missköter sina uppdrag, men problemet kommer att finnas kvar så länge överförmyndarna sitter på _____.",
     "options": [
      "dubbla stolar",
      "alla fakta",
      "höga hästar",
      "gamla meriter"
     ],
     "correct": 0
    },
    {
     "num": 27,
     "text": "Dessa journalister lever under ständig övervakning, och om de skriver fel sak om fel person – då smäller det, säger Merga, vars namn är _____ på grund av risken för _____.",
     "options": [
      "synonymt – förtryck",
      "fingerat – repressalier",
      "villkorat – fängelse",
      "inkognito – diskriminering"
     ],
     "correct": 1
    },
    {
     "num": 28,
     "text": "Sköterskan harklade sig för att få Marias uppmärksamhet. ”Han verkar ha fått en ordentlig hjärnskakning. Vi överväger att fortsätta hålla honom nedsövd. Strax ska vi skicka honom på en _____ så får vi se vad bilderna visar.”",
     "options": [
      "datortomografi",
      "kroppsskanning",
      "gastroskopi",
      "EKG-undersökning"
     ],
     "correct": 0
    },
    {
     "num": 29,
     "text": "Vetenskapliga tidskrifter vill hellre publicera studier med stort _____, det vill säga med positiva och oväntade resultat. Studier som misslyckas med att hitta någon intressant effekt eller bara upprepar gammal _____ löper större risk att bli _____.",
     "options": [
      "allmänintresse – formalia – returnerade",
      "nyhetsvärde – skåpmat – refuserade",
      "faktagenomslag – argumentation – redigerade",
      "överraskningsmoment – rappakalja – reviderade"
     ],
     "correct": 1
    },
    {
     "num": 30,
     "text": "Inget annat språk har _____ så många andraspråkstalare, och bara mandarin kommer ens i närheten när det gäller det totala antalet talare. Inget annat språk har heller lika stor geografisk spridning. Engelska spelar i en egen division, inte _____ om den saken, och det finns goda anledningar till att man i Sverige lär sig engelska redan från tidiga skolår.",
     "options": [
      "till synes – ett knyst",
      "tillnärmelsevis – tu tal",
      "till fullo – fy skam",
      "tillbörligen – en susning"
     ],
     "correct": 1
    }
   ]
  }
 ]
};
