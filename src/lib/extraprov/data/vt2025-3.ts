// Högskoleprovet 5 april 2025, provpass 3 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/vt2025/';
const graf = (bokstav: string) => `<img src="${B}p3-xyz9${bokstav}.webp" alt="Graf ${bokstav.toUpperCase()}" data-fadein style="max-width:170px;width:100%;vertical-align:middle;" />`;

export const pass: ExtraPass = {
  id: 'vt2025-3',
  tillfalle: 'vt2025',
  passNr: 3,
  kind: 'kvant',
  name: 'Provpass 3 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [18, 0.1], [21, 0.2], [23, 0.3], [25, 0.4], [28, 0.5], [31, 0.6], [35, 0.7], [38, 0.8], [41, 0.9], [45, 1.0], [48, 1.1], [52, 1.2], [56, 1.3], [60, 1.4], [63, 1.5], [66, 1.6], [69, 1.7], [71, 1.8], [73, 1.9], [75, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `${tex('4x + 16 = 6x - 8')}<br><br><b>Vad är <i>x</i>?</b>`, options: ['−12', '−4', '4', '12'], correct: 3, category: 'algebra' },
        { num: 2, text: 'Ett rätblock är 2 meter långt, 2 decimeter brett och 2 millimeter högt.<br><b>Hur stor är volymen av rätblocket?</b>', options: ['8 cm³', '80 cm³', '800 cm³', '8 000 cm³'], correct: 2, category: 'enheter' },
        { num: 3, text: `${tex('3^{2x} = 27')}<br><br><b>Vad är <i>x</i>?</b>`, options: [tex('\\frac{2}{3}'), tex('\\frac{3}{2}'), '2', '3'], correct: 1, category: 'algebra' },
        { num: 4, text: 'Arne är 7 år äldre än Bertil. Tillsammans är Arne och Bertil 33 år. Arnes ålder är <i>x</i> år och Bertils ålder är <i>y</i> år. <b>Vad är produkten <i>xy</i>?</b>', options: ['228', '231', '260', '266'], correct: 2, category: 'algebra' },
        { num: 5, text: `<b>Vad är ${tex('\\dfrac{\\frac{6}{25}}{\\frac{36}{5}}')}?</b>`, options: [tex('\\frac{1}{30}'), tex('\\frac{5}{6}'), tex('\\frac{125}{216}'), tex('\\frac{216}{125}')], correct: 0, category: 'aritmetik' },
        { num: 6, text: '<i>x</i> är ett heltal. <b>Vilket svarsalternativ är ett möjligt värde på <i>x</i>(<i>x</i> + 1)?</b>', options: ['37', '42', '54', '81'], correct: 1, category: 'aritmetik' },
        { num: 7, text: `${tex('a \\neq 0')}<br><br><b>För vilket svarsalternativ gäller med säkerhet att ${tex('f(a) = a')}?</b>`, options: [tex('f(x) = \\frac{x}{a} + a'), tex('f(x) = 2x - a'), tex('f(x) = ax'), tex('f(x) = -ax + a^3')], correct: 1, category: 'funktioner' },
        { num: 8, text: `<b>Vad är ${tex('\\frac{2{,}1 \\cdot 10^6}{3 \\cdot 10^4}')}?</b>`, options: ['7', '70', '700', '7 000'], correct: 1, category: 'aritmetik' },
        { num: 9, text: `Linjen L har ekvationen ${tex('y + 2x - 2 = 0')}. <b>Vilket svarsalternativ visar linjen L?</b>`, options: [graf('a'), graf('b'), graf('c'), graf('d')], correct: 2, category: 'funktioner' },
        { num: 10, text: `${tex('b \\neq 0')}<br><br><b>Vilket svarsalternativ är lika med uttrycket ${tex('\\frac{a + b}{b} + \\frac{b - a}{b}')}?</b>`, options: ['0', '1', '2', tex('\\frac{2a}{b}')], correct: 2, category: 'algebra' },
        { num: 11, text: 'Mätserien 3, 5, 6, 6, 8 utökas med ett slumpmässigt valt ensiffrigt positivt heltal.<br><b>Hur stor är sannolikheten att mätseriens median blir större?</b>', options: ['0', tex('\\frac{1}{3}'), tex('\\frac{1}{2}'), '1'], correct: 0, category: 'sannolikhet' },
        { num: 12, text: `${figur(B + 'p3-xyz12.webp', 'Triangel med en cirkel i varje hörn, delarna av cirklarna utanför triangeln är skuggade', 260)}De tre cirklarna har radien 1 cm. Cirklarnas medelpunkter ligger i triangelns hörn.<br><b>Hur stor är den sammanlagda arean av de skuggade områdena?</b>`, options: ['2π cm²', '2,25π cm²', '2,5π cm²', '2,75π cm²'], correct: 2, category: 'geometri' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: '', q1: '4 procent av 40', q2: '5 procent av 35', options: KVA_ALTERNATIV, correct: 1, category: 'procent' },
        { num: 14, text: `${tex('x > y')}<br>${tex('y < z')}`, q1: '<i>x</i>', q2: '<i>z</i>', options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 15, text: '', q1: 'Riktningskoefficienten för den räta linje som går genom punkterna (0, 0) och (−1, −3)', q2: 'Riktningskoefficienten för den räta linje som går genom punkterna (0, 0) och (1, 3)', options: KVA_ALTERNATIV, correct: 2, category: 'funktioner' },
        { num: 16, text: `${tex('x - y = \\frac{1}{3}')}<br>${tex('x = -\\frac{1}{3}')}`, q1: '<i>y</i>', q2: '2<i>x</i>', options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 17, text: `${figur(B + 'p3-kva17.webp', 'Rätvinklig triangel ABC med kateten AB = 2 cm och hypotenusan BC = roten ur 5 cm, samt kvadraten DEFG med sidan 1 cm', 340)}`, q1: 'Arean av den rätvinkliga triangeln ABC', q2: 'Arean av kvadraten DEFG', options: KVA_ALTERNATIV, correct: 2, category: 'geometri' },
        { num: 18, text: tex('x \\neq 0'), q1: tex('\\frac{y}{x^2}'), q2: tex('\\frac{y^2}{x}'), options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 19, text: '', q1: `Medelvärdet av ${tex('\\frac{5}{7}')}, ${tex('\\frac{5}{2}')} och ${tex('\\frac{5}{6}')}`, q2: '1', options: KVA_ALTERNATIV, correct: 0, category: 'statistik' },
        { num: 20, text: 'Adam och David tog varsin cykeltur.<br>Adam cyklade 45 km med medelhastigheten 27 km/h.<br>David cyklade 40 km med medelhastigheten 25 km/h.', q1: 'Den tid som Adams cykeltur tog', q2: 'Den tid som Davids cykeltur tog', options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 21, text: `I triangeln ABC är DE parallell med AB.${figur(B + 'p3-kva21.webp', 'Triangel ABC med sträckan DE parallell med AB, vinkeln x vid C, 85 grader vid D, 40 grader vid E och vinkeln y vid B', 300)}`, q1: '<i>x</i>', q2: '<i>y</i>', options: KVA_ALTERNATIV, correct: 0, category: 'geometri' },
        { num: 22, text: '<i>x</i> och <i>y</i> är positiva heltal.<br>När <i>x</i> divideras med <i>y</i> blir kvoten 1 och resten 1.', q1: '<i>x</i>', q2: '<i>y</i>', options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'I ett cykelställ står tre cyklar parkerade: en damcykel, en herrcykel och en barncykel. <b>Vilken cykel står längst till höger i cykelstället?</b>', s1: 'Barncykeln står längre till vänster än damcykeln. Herrcykeln står varken längst till vänster eller längst till höger.', s2: 'Herrcykeln står längre till vänster än damcykeln. Barncykeln står längst till vänster.', options: NOG_ALTERNATIV, correct: 3, category: 'logik' },
        { num: 24, text: 'Mia och Nellie ska träffas på en lekplats. De bor på olika platser och går hemifrån, var och en med sin egen konstanta hastighet. <b>Vem av dem går med högst hastighet?</b>', s1: 'Mia går hemifrån fem minuter tidigare än Nellie och är framme vid lekplatsen tio minuter tidigare än Nellie.', s2: 'Nellie har längre väg än Mia till lekplatsen.', options: NOG_ALTERNATIV, correct: 4, category: 'logik' },
        { num: 25, text: 'När Emelie ska gå ut en vinterdag tar hon på sig mössa, vantar, jacka och skor. <b>I vilken ordning tar hon på sig de olika klädesplaggen?</b>', s1: 'När Emelie tar på sig vantarna har hon redan tagit på sig skorna. Hon tar inte på sig mössan sist.', s2: 'Emelie tar på sig jackan först. Hon tar på sig skorna innan hon tar på sig mössan.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 26, text: `För de positiva heltalen <i>x</i> och <i>y</i> gäller att ${tex('\\frac{x}{y} = 5')}. <b>Vad är <i>x</i> − <i>y</i>?</b>`, s1: tex('x + y = 24'), s2: tex('xy = 80'), options: NOG_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 27, text: 'Camilla och Stefan delar kontor. De har varsin bokhylla där de förvarar böcker och pärmar. <b>Hur många pärmar finns det i Camillas bokhylla?</b>', s1: 'Sammanlagt finns det 30 pärmar och 73 böcker i bokhyllorna. I Stefans bokhylla står det 21 böcker.', s2: 'I Camillas bokhylla står det sammanlagt 65 böcker och pärmar. Det står 39 fler böcker än pärmar i Camillas bokhylla.', options: NOG_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 28, text: 'På en cirkus är antalet clowner 60 procent av antalet akrobater. <b>Hur många akrobater finns det på cirkusen?</b>', s1: 'Om det hade funnits dubbelt så många clowner och hälften så många akrobater, så hade det funnits 7 fler clowner än akrobater på cirkusen.', s2: 'Det finns 4 fler akrobater än clowner på cirkusen.', options: NOG_ALTERNATIV, correct: 3, category: 'procent' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>För vilken verksamhet förändrades omsättningen minst från 2019 till 2020, i kronor räknat?</b>', options: ['Skidsportanläggningar', 'Sporthallar, idrottsplatser och andra sportanläggningar', 'Sportklubbar och idrottsföreningar', 'Tävlingsstall'], correct: 1, diagram: B + 'p3-dtk1.webp', diagramAlt: 'Omsättning inom kultur, nöje och fritid: tabell över omsättningen för olika verksamheter 2019 och 2020, miljoner kronor', category: 'tabell' },
        { num: 30, text: '<b>Hur stor andel av den totala omsättningen inom Kultur, nöje och fritid 2019 stod Spel- och vadhållningsföretag för?</b>', options: ['1/5', '1/4', '1/3', '2/5'], correct: 2, diagram: B + 'p3-dtk1.webp', diagramAlt: 'Omsättning inom kultur, nöje och fritid: tabell över omsättningen för olika verksamheter 2019 och 2020, miljoner kronor', category: 'tabell' },
        { num: 31, text: 'Jämför Artistisk verksamhet och Litterärt och konstnärligt skapande med avseende på minskningen i omsättning från 2019 till 2020. <b>Hur stor var skillnaden mellan de två verksamheternas minskningar?</b>', options: ['1 229 miljoner kr', '1 262 miljoner kr', '1 353 miljoner kr', '1 378 miljoner kr'], correct: 0, diagram: B + 'p3-dtk1.webp', diagramAlt: 'Omsättning inom kultur, nöje och fritid: tabell över omsättningen för olika verksamheter 2019 och 2020, miljoner kronor', category: 'tabell' },
        { num: 32, text: '<b>Hur många av ejdrarna som räknades 1997 fanns på de två platser där det räknades flest ejdrar?</b>', options: ['3 700', '4 500', '6 200', '8 400'], correct: 1, diagram: B + 'p3-dtk2.webp', diagramAlt: 'Ejder i Stockholms skärgård: stapeldiagram över antalet räknade ejdrar per plats 1997 till 2015', category: 'diagram' },
        { num: 33, text: 'Antalet räknade ejdrar minskade totalt sett år 2000 jämfört med året innan. <b>På vilken av följande platser räknades dock fler ejdrar?</b>', options: ['Nåttaröfladen', 'Bullerö', 'Svenska Högarna', 'Söderarm'], correct: 1, diagram: B + 'p3-dtk2.webp', diagramAlt: 'Ejder i Stockholms skärgård: stapeldiagram över antalet räknade ejdrar per plats 1997 till 2015', category: 'diagram' },
        { num: 34, text: 'Beräkna hur många färre de räknade ejdrarna var periodens sista år jämfört med periodens första år. <b>Vilket av nedanstående år var det totala antalet räknade ejdrar lika stort som denna minskning?</b>', options: ['2001', '2003', '2005', '2007'], correct: 1, diagram: B + 'p3-dtk2.webp', diagramAlt: 'Ejder i Stockholms skärgård: stapeldiagram över antalet räknade ejdrar per plats 1997 till 2015', category: 'diagram' },
        { num: 35, text: '<b>Hur stor andel av provdeltagarna var 20 år eller yngre?</b>', options: ['30 procent', '50 procent', '60 procent', '70 procent'], correct: 2, diagram: B + 'p3-dtk3.webp', diagramAlt: 'Högskoleprovsresultat för olika åldersgrupper våren 2019: råpoäng, normerad poäng och antal provdeltagare per åldersgrupp', category: 'diagram' },
        { num: 36, text: '<b>Hur stor var skillnaden mellan åldersgruppen med högst poäng och åldersgruppen med lägst poäng?</b>', options: ['Råpoäng 27 och normerad poäng 0,42', 'Råpoäng 27 och normerad poäng 0,49', 'Råpoäng 32 och normerad poäng 0,42', 'Råpoäng 32 och normerad poäng 0,49'], correct: 3, diagram: B + 'p3-dtk3.webp', diagramAlt: 'Högskoleprovsresultat för olika åldersgrupper våren 2019: råpoäng, normerad poäng och antal provdeltagare per åldersgrupp', category: 'diagram' },
        { num: 37, text: '<b>Vilket svarsförslag stämmer bäst?</b>', options: ['Råpoängen ökade med stigande ålder.', 'Åldersfördelningen bland provdeltagarna var jämn.', 'Den normerade poängen ökade med stigande ålder.', 'Antalet provdeltagare minskade med stigande ålder.'], correct: 3, diagram: B + 'p3-dtk3.webp', diagramAlt: 'Högskoleprovsresultat för olika åldersgrupper våren 2019: råpoäng, normerad poäng och antal provdeltagare per åldersgrupp', category: 'diagram' },
        { num: 38, text: '<b>Hur många fall av dödligt våld inträffade 1990?</b>', options: ['70', '85', '95', '100'], correct: 1, diagram: B + 'p3-dtk4.webp', diagramAlt: 'Dödligt våld 1990 till 2010: linjediagram över antalet fall per kategori och procentuell fördelning efter brottsrubricering', category: 'diagram' },
        { num: 39, text: `Studera brottsrubriceringarna vid dödligt våld. <b>Vilket år var de fördelade som i diagrammet nedan?</b>${figur(B + 'p3-dtk39.webp', 'Cirkeldiagram med sektorerna Mord (drygt hälften), Dråp (ungefär en tredjedel) och Vållande till annans död (en liten sektor)', 220)}`, options: ['1992', '1995', '1996', '2003'], correct: 0, diagram: B + 'p3-dtk4.webp', diagramAlt: 'Dödligt våld 1990 till 2010: linjediagram över antalet fall per kategori och procentuell fördelning efter brottsrubricering', category: 'diagram' },
        { num: 40, text: '<b>Hur stor andel av det totala antalet fall av dödligt våld år 2000 inträffade i samband med spontanbråk och dispyter?</b>', options: ['20 procent', '30 procent', '65 procent', '75 procent'], correct: 1, diagram: B + 'p3-dtk4.webp', diagramAlt: 'Dödligt våld 1990 till 2010: linjediagram över antalet fall per kategori och procentuell fördelning efter brottsrubricering', category: 'diagram' },
      ],
    },
  ],
};
