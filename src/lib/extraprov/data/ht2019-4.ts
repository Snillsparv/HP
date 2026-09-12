// Högskoleprovet 20 oktober 2019, provpass 4 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/ht2019/';

const DTK1 = 'Mat och dryck i avloppet: två stapeldiagram över den totala mängden mat och dryck från svenska hushåll som hamnar i avloppet, fördelad på kategorierna kaffe och te, mejeriprodukter, övriga drycker, fast matavfall, sås och soppa, övrigt flytande matavfall samt sötsaker. Det övre diagrammet anger ton per år (skala 0 till 100 000) och det nedre kilogram per person och år (skala 0 till 10).';
const DTK2 = 'Skadefall bland barn 0–3 år: två tabeller över antalet rapporterade skadefall bland barn 0 till 3 år vid Norrlands universitetssjukhus, Hälsinglands sjukhus och Skaraborgs sjukhus 2003, fördelat på pojkar, flickor och totalt, samt skattat antal i hela Sverige och per 1 000 invånare. Den vänstra tabellen är indelad efter skadeplats (transportområde, bostadsområde, produktions- och verkstadsområde, butiks- och serviceområde, skola/offentlig lokal/institutionsområde med underkategorier, idrottsområde, fri natur, hav/sjö/älv, annat) och den högra efter skademekanism (fallolycka, kontakt med föremål/person/djur, klämning/skärning/stick, främmande föremål, kvävning, kemisk påverkan, termisk påverkan, elektricitet, akut överansträngning, annat).';
const DTK3 = 'Telefonapparater i några länder: linjediagram över antalet telefoner per 1 000 invånare (promille) åren 1925 till 1939 i Förenta staterna, Canada, Nya Zeeland, Danmark, Sverige, Schweiz, Australien, Norge, Storbritannien, Tyskland, Nederländerna, Belgien, Finland och Frankrike.';
const DTK4 = 'Berggrund i Skaraborg: geologisk karta över Skaraborg med bergarterna diabaser, överordoviciska–siluriska siltstenar, ordoviciska kalkstenar, kambriska sandstenar och skiffrar samt urberg, tätorter som Mariestad, Götene, Skara, Axvall, Skövde, Skultorp, Falköping, Floby och Tidaholm, vägar med nummer samt de provtagna lokalerna Hällekis, Nord-Skagen, Österplana, Karlsfors, Gullhögen, Skultorp, Uddagården, Tiarp, Varv, Stora/Lilla Backor och Bestorp. Skala 0 till 20 km.';

export const pass: ExtraPass = {
  id: 'ht2019-4',
  tillfalle: 'ht2019',
  passNr: 4,
  kind: 'kvant',
  name: 'Provpass 4 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [18, 0.1], [21, 0.2], [23, 0.3], [25, 0.4], [27, 0.5], [30, 0.6], [34, 0.7], [37, 0.8], [41, 0.9], [45, 1.0], [48, 1.1], [52, 1.2], [55, 1.3], [58, 1.4], [61, 1.5], [64, 1.6], [67, 1.7], [69, 1.8], [72, 1.9], [74, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: '<b>Vilket svarsalternativ motsvarar 8 500 000 mm?</b>', options: [`${tex('8{,}5 \\cdot 10^3')} cm`, `${tex('8{,}5 \\cdot 10^5')} dm`, '8,5 km', '8,5 mil'], correct: 2, category: 'enheter' },
        { num: 2, text: `<b>Vilket svarsalternativ motsvarar ekvationen för linjen L?</b>${figur(B + 'p4-xyz2.webp', 'Ett koordinatsystem med rutnät där 1 är markerat på båda axlarna. Linjen L faller åt höger, skär y-axeln i 3 och x-axeln i 2.', 320)}`, options: [tex('y = -1{,}5x - 3'), tex('y = -1{,}5x + 3'), tex('y = 1{,}5x - 3'), tex('y = 1{,}5x + 3')], correct: 1, category: 'funktioner' },
        { num: 3, text: `<i>x</i> och <i>y</i> är positiva tal sådana att ${tex('\\frac{x}{y} = z')}.<br><br><b>Vilket av följande svarsalternativ är med säkerhet korrekt?</b>`, options: ['Om <i>x</i> är mindre än <i>y</i> så är <i>z</i> mindre än 0.', 'Om <i>x</i> är lika med <i>y</i> så är <i>z</i> lika med <i>x</i>.', 'Om <i>x</i> inte är lika med <i>y</i> så är <i>z</i> mindre än 1.', 'Om <i>x</i> är större än <i>y</i> så är <i>z</i> större än 1.'], correct: 3, category: 'algebra' },
        { num: 4, text: 'Emils och Stures sammanlagda ålder är 31 år. Sture är 3 år äldre än Emil. <b>Om Emil är <i>x</i> år gammal, vilket svarsalternativ motsvarar då en ekvation för att räkna ut hans ålder?</b>', options: [tex('\\frac{31 - x}{2} = 3'), tex('2x = 31'), tex('x + x + 3 = 31'), tex('x + 3 = 31')], correct: 2, category: 'algebra' },
        { num: 5, text: `<b>Vilket värde har <i>x</i> om ${tex('7^{\\left(7 + \\frac{x}{3}\\right)} = 49')}?</b>`, options: ['−15', '−7', '7', '15'], correct: 0, category: 'algebra' },
        { num: 6, text: 'I en klass är 65 % av eleverna längre än Ida, och 32 % av eleverna är längre än Albert. <b>Ungefär hur stor andel av eleverna är längre än Ida men kortare än Albert?</b>', options: [tex('\\frac{1}{4}'), tex('\\frac{1}{3}'), tex('\\frac{1}{2}'), tex('\\frac{2}{3}')], correct: 1, category: 'procent' },
        { num: 7, text: 'På en parkeringsplats finns det fyra bilar med fyra hjul vardera och två motorcyklar med två hjul vardera. <b>Hur stor är sannolikheten att ett slumpmässigt valt hjul på parkeringsplatsen tillhör en motorcykel?</b>', options: [tex('\\frac{1}{5}'), tex('\\frac{1}{4}'), tex('\\frac{1}{3}'), tex('\\frac{1}{2}')], correct: 0, category: 'sannolikhet' },
        { num: 8, text: `<b>Vilket svarsalternativ motsvarar en punkt på linjen ${tex('y = 3x - 5')}?</b>`, options: ['(−2, −10)', '(0, 3)', '(3, 5)', '(5, 10)'], correct: 3, category: 'funktioner' },
        { num: 9, text: `Förhållandet mellan den långa och den korta sidan på ett A4-papper är ${tex('\\sqrt{2} : 1')}. <b>Vilket är förhållandet mellan den långa sidan och diagonalen på ett A4-papper?</b>`, options: [tex('1 : \\sqrt{3}'), tex('2 : 3'), tex('\\sqrt{2} : 2'), tex('\\sqrt{2} : \\sqrt{3}')], correct: 3, category: 'geometri' },
        { num: 10, text: `${tex('10^3 \\;\\square\\; 100 = x')}<br>${tex('x \\;\\square\\; 10^{-1} = y')}<br>${tex('y \\;\\square\\; 0{,}0001 = z')}<br><br><b>Vad är det största värde som <i>z</i> kan få om rutorna i ekvationerna var för sig ersätts med antingen multiplikation eller division?</b>`, options: [tex('10^0'), tex('10^5'), tex('10^{10}'), tex('10^{15}')], correct: 2, category: 'aritmetik' },
        { num: 11, text: `<b>Vad är ${tex('\\dfrac{\\frac{1}{2} + 3}{4 + \\frac{1}{5}}')}?</b>`, options: [tex('\\frac{3}{5}'), tex('\\frac{2}{3}'), tex('\\frac{4}{5}'), tex('\\frac{5}{6}')], correct: 3, category: 'aritmetik' },
        { num: 12, text: 'Omkretsen av en rektangel är 360 m, och längden av en av sidorna är <i>x</i> m.<br><b>Hur stor är arean av rektangeln?</b>', options: [`${tex('x^2')} m<sup>2</sup>`, `${tex('90x')} m<sup>2</sup>`, `${tex('(90x + x^2)')} m<sup>2</sup>`, `${tex('(180x - x^2)')} m<sup>2</sup>`], correct: 3, category: 'geometri' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: tex('\\frac{4}{x} - \\frac{1}{2} = 2'), q1: '<i>x</i>', q2: '1', options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 14, text: 'En varas ordinarie pris är 500 kr.<br>Kupong A ger 100 kr rabatt.<br>Kupong B ger 20 % rabatt.', q1: 'Den totala rabatten om kupong A används först och därefter, på det rabatterade priset, kupong B', q2: 'Den totala rabatten om kupong B används först och därefter, på det rabatterade priset, kupong A', options: KVA_ALTERNATIV, correct: 1, category: 'procent' },
        { num: 15, text: `M är mittpunkten på sträckan AB.${figur(B + 'p4-kva15.webp', 'En triangel ABC med basen AB. M är mittpunkten på AB, och en sträcka går från M upp till C.', 400)}`, q1: 'Arean av triangeln AMC', q2: 'Arean av triangeln MBC', options: KVA_ALTERNATIV, correct: 2, category: 'geometri' },
        { num: 16, text: tex('x < -1'), q1: tex('1 - x'), q2: tex('x - 1'), options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 17, text: `${tex('x > 0')}<br>${tex('\\sqrt{x} = x')}`, q1: '<i>x</i>', q2: '1', options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 18, text: tex('f(x) = -3x + 5'), q1: tex('\\frac{f(1)}{f(-1)}'), q2: tex('\\frac{f(-1)}{f(1)}'), options: KVA_ALTERNATIV, correct: 1, category: 'funktioner' },
        { num: 19, text: '', q1: tex('3^3 + 3^3 + 3^3'), q2: tex('3^4'), options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 20, text: 'Kalle cyklar med hastigheten 22 km/h.<br>Bosse cyklar med hastigheten 18 km/h.', q1: 'Den tid det tar för Kalle att cykla 60 km', q2: 'Den tid det tar för Bosse att cykla 54 km', options: KVA_ALTERNATIV, correct: 1, category: 'aritmetik' },
        { num: 21, text: '', q1: 'Omkretsen av en regelbunden åttahörning med sidlängden <i>x</i> cm', q2: 'Omkretsen av en rätvinklig triangel där den längsta sidan är 5<i>x</i> cm', options: KVA_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 22, text: `<i>x</i>, <i>y</i> och <i>z</i> är tre tal sådana att ${tex('x < y < z')}.<br>Medianen av <i>x</i> och <i>y</i> är 2.<br>Medianen av <i>y</i> och <i>z</i> är 9.`, q1: '<i>y</i>', q2: '6', options: KVA_ALTERNATIV, correct: 3, category: 'statistik' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'Magnus ska vattna sin trädgård med vatten från en tunna. <b>Hur mycket vatten finns det i tunnan innan Magnus tar något vatten ur den?</b>', s1: 'När Magnus har vattnat färdigt finns det 42 liter vatten kvar i tunnan.', s2: 'Magnus tar först 20 procent av vattnet i tunnan. Sedan tar han 1/4 av den återstående vattenmängden och därefter har han vattnat färdigt.', options: NOG_ALTERNATIV, correct: 2, category: 'procent' },
        { num: 24, text: 'Hillevi har en ask med enfärgade pärlor: rosa och vita. Varje pärla är dessutom antingen stor eller liten. Hillevi plockar slumpmässigt en pärla ur asken. <b>Hur stor är sannolikheten att pärlan är rosa?</b>', s1: 'Hälften av de stora pärlorna är vita. Hälften av de vita pärlorna är stora.', s2: 'I asken finns det 100 pärlor, varav 20 pärlor är stora.', options: NOG_ALTERNATIV, correct: 2, category: 'sannolikhet' },
        { num: 25, text: 'Medelvärdet av fem tal är 30. <b>Vad är talens median?</b>', s1: 'Ett av talen är 3.', s2: 'Ett av talen är 30.', options: NOG_ALTERNATIV, correct: 4, category: 'statistik' },
        { num: 26, text: 'Anna, David, Harald och Marie springer ikapp. <b>I vilken ordning kommer de i mål?</b>', s1: 'Harald kommer före Anna, men efter Marie. Marie kommer inte först.', s2: 'David kommer före Anna och Marie. Harald kommer inte sist.', options: NOG_ALTERNATIV, correct: 0, category: 'logik' },
        { num: 27, text: 'På ett djurhem finns det enbart katter och hundar. <b>Hur stor andel av djuren på djurhemmet är katter?</b>', s1: 'Det finns 4 gånger så många katter som hundar på djurhemmet.', s2: '20 % av djuren på djurhemmet är hundar.', options: NOG_ALTERNATIV, correct: 3, category: 'procent' },
        { num: 28, text: `<i>n</i> är ett positivt heltal sådant att ${tex('1 \\leq n \\leq 9')}.<br><b>Vilket värde har <i>n</i>?</b>`, s1: '29 + <i>n</i> är jämnt delbart med 9.', s2: '29 + <i>n</i> är jämnt delbart med 3.', options: NOG_ALTERNATIV, correct: 0, category: 'aritmetik' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>Hur stor är den totala mängden mat och dryck som hamnar i avloppet per person och år?</b>', options: ['20 kg', '25 kg', '30 kg', '35 kg'], correct: 1, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 30, text: '<b>Hur stor är mängden mejeriprodukter som hamnar i avloppet jämfört med mängden övrigt flytande matavfall?</b>', options: ['3 gånger så stor', '6 gånger så stor', '9 gånger så stor', '12 gånger så stor'], correct: 1, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 31, text: '<b>Hur mycket mat och dryck hamnar i avloppet under en vecka?</b>', options: ['2 200 ton', '3 400 ton', '4 300 ton', '5 500 ton'], correct: 2, diagram: B + 'p4-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 32, text: `Studera hur det totala antalet rapporterade skadefall i kategorin skola, offentlig lokal, institutionsområde var fördelat på skadeplatser. <b>Vilken av cirklarna visar den korrekta fördelningen?</b>${figur(B + 'p4-dtk32.webp', 'Fyra cirkeldiagram A till D med sektorer för daghem/fritidshem/ungdomsgård (vit), skolgård (grå), lekplats på institution (prickig), offentlig lokal (rutig), sjukhus/vårdcentral (svart) och annat offentligt område (randig). I A är den vita sektorn ungefär 60 procent, den prickiga ungefär 25 procent och den grå ungefär 5 procent. I B och C är den grå sektorn större, och i D är den prickiga sektorn nästan lika stor som den vita.', 520)}`, options: ['Cirkel A', 'Cirkel B', 'Cirkel C', 'Cirkel D'], correct: 0, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 33, text: '<b>Vilken skademekanism stod för en femtedel av de rapporterade skadefallen?</b>', options: ['Annat fall i samma plan', 'Fall på eller från trappa', 'Fall/hopp från låg höjd', 'Kontakt med person, t.ex. spark/drag/knuff'], correct: 2, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 34, text: 'Notera hur antalet rapporterade skadefall av typen hugg/skärning/sågning mot skarp yta/kant var fördelat på flickor och pojkar. Anta att könsfördelningen var densamma för det skattade antalet skadefall av denna typ i Sverige. <b>Hur många flickor i åldern 0–3 år skadades i så fall på detta sätt?</b>', options: ['110', '180', '250', '300'], correct: 1, diagram: B + 'p4-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 35, text: '<b>Vilket av följande länder avses?</b><br><br>Antalet telefoner per 1 000 invånare ökade samtliga redovisade år jämfört med närmast föregående år och ökningen var som störst mellan 1928 och 1929.', options: ['Storbritannien', 'Nederländerna', 'Belgien', 'Frankrike'], correct: 3, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 36, text: 'Under perioden 1925–1939 uppgick Sveriges folkmängd till omkring 6 miljoner invånare. <b>Hur många telefoner fanns det i Sverige 1928?</b>', options: ['48 000', '80 000', '480 000', '800 000'], correct: 2, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 37, text: '<b>Vilket av följande år var skillnaden mellan Tyskland och Belgien störst respektive minst vad avser antalet telefoner per 1 000 invånare?</b>', options: ['1926 respektive 1932', '1926 respektive 1933', '1930 respektive 1932', '1930 respektive 1933'], correct: 1, diagram: B + 'p4-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 38, text: '<b>På vilket avstånd och i vilken riktning från provtagningslokalen Gullhögen ligger provtagningslokalen Hällekis?</b>', options: ['30 km, nordostlig riktning', '30 km, nordvästlig riktning', '35 km, nordostlig riktning', '35 km, nordvästlig riktning'], correct: 3, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'karta' },
        { num: 39, text: 'Följ väg 193 från Falköping till Tidaholm. <b>I vilken ordning passeras bergarterna om man startar i Falköping?</b>', options: ['Diabaser, ordoviciska kalkstenar, kambriska sandstenar/skiffrar, urberg, kambriska sandstenar/skiffrar, ordoviciska kalkstenar, kambriska sandstenar/skiffrar, urberg', 'Diabaser, kambriska sandstenar/skiffrar, ordoviciska kalkstenar, kambriska sandstenar/skiffrar, urberg, ordoviciska kalkstenar', 'Ordoviciska kalkstenar, kambriska sandstenar/skiffrar, urberg, ordoviciska kalkstenar, kambriska sandstenar/skiffrar, urberg', 'Ordoviciska kalkstenar, kambriska sandstenar/skiffrar, urberg, kambriska sandstenar/skiffrar, ordoviciska kalkstenar, kambriska sandstenar/skiffrar, urberg'], correct: 3, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'karta' },
        { num: 40, text: 'Provtagningslokalerna Karlsfors, Stora/Lilla Backor och Varv utgör hörnen i ett triangelformat område. <b>Hur stort är detta område?</b>', options: ['380 km<sup>2</sup>', '540 km<sup>2</sup>', '760 km<sup>2</sup>', '1 400 km<sup>2</sup>'], correct: 0, diagram: B + 'p4-dtk4.webp', diagramAlt: DTK4, category: 'karta' },
      ],
    },
  ],
};
