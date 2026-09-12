// Högskoleprovet 7 maj 2022, provpass 1 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/vt2022maj/';

const DTK1 = 'Dopingprov och bestraffningsärenden inom svensk idrott: stapeldiagram över antalet dopingprov och kurva över antalet bestraffade fall 2004 till 2013, cirkeldiagram över de bestraffade fallens fördelning på dopingförseelser 2003 till 2012, samt stapeldiagram över antalet dopingprov 2013 inom olika idrottsförbund uppdelat på kvinnor och män';
const DTK2 = 'Saltsjöfisket 1915 till 1955: tabell över mängden infångad saltsjöfisk i ton för hela riket och per län vart femte år 1915 till 1955, samt tabell över fångsten av olika fiskslag på ostkusten, sydkusten och västkusten 1935, 1945 och 1955';
const DTK3 = 'I och utanför arbetsmarknaden: principskiss över olika former av förankring på arbetsmarknaden, samt kartläggning av tio individers förankring dag för dag under ett år, exempelvis arbete hos privat eller offentlig arbetsgivare, arbetslöshet, studier och sjukskrivning';
const DTK4 = 'Anmälningar om bilstöld i Uppsala 2013: stapeldiagram månad för månad över det totala antalet anmälningar, antalet fullbordade bilstölder och antalet försök till bilstöld';

export const pass: ExtraPass = {
  id: 'vt2022maj-1',
  tillfalle: 'vt2022maj',
  passNr: 1,
  kind: 'kvant',
  name: 'Provpass 1 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [18, 0.1], [21, 0.2], [23, 0.3], [25, 0.4], [27, 0.5], [29, 0.6], [32, 0.7], [36, 0.8], [40, 0.9], [43, 1.0], [47, 1.1], [51, 1.2], [54, 1.3], [58, 1.4], [61, 1.5], [64, 1.6], [67, 1.7], [70, 1.8], [72, 1.9], [74, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `${tex('5(3 - x) = (4 + x) \\cdot 2')}<br><br><b>Vilket värde har <i>x</i>?</b>`, options: ['0', '1', tex('\\frac{7}{2}'), tex('\\frac{11}{3}')], correct: 1, category: 'algebra' },
        { num: 2, text: `Linjen ${tex('y = kx + m')} är inritad i koordinatsystemet nedan. <b>Vad är riktningskoefficienten <i>k</i> för linjen?</b>${figur(B + 'p1-xyz2.webp', 'Koordinatsystem med rutnät där linjen y = kx + m lutar svagt uppåt. Den skär y-axeln i −1 och x-axeln i 3.', 380)}`, options: [tex('-\\frac{1}{3}'), tex('\\frac{1}{3}'), '3', '1'], correct: 1, category: 'funktioner' },
        { num: 3, text: `<b>Vad är ${tex('\\frac{4}{9} \\cdot \\frac{1}{3} - \\frac{1}{3} + \\frac{4}{9}')}?</b>`, options: [tex('\\frac{4}{9}'), tex('\\frac{7}{27}'), tex('\\frac{7}{33}'), tex('\\frac{16}{81}')], correct: 1, category: 'aritmetik' },
        { num: 4, text: `Cirkeln i figuren har radien 1 cm. Punkten M är cirkelns medelpunkt. <b>Vad är <i>x</i>?</b>${figur(B + 'p1-xyz4.webp', 'En cirkel med medelpunkt M. Från M går en vågrät linje åt höger till en rätvinklig triangel: sträckan från cirkelns kant till triangelns räta vinkel är 3 cm och den lodräta kateten är 3 cm. Hypotenusan går från M upp till triangelns topp, och x är hypotenusans del utanför cirkeln.', 380)}`, options: ['3 cm', '4 cm', tex('\\sqrt{7}') + ' cm', tex('3\\sqrt{2}') + ' cm'], correct: 1, category: 'geometri' },
        { num: 5, text: `<b>I vilket av följande intervall ligger <i>x</i> om ${tex('x = \\sqrt{\\sqrt{4}}')}?</b>`, options: [tex('1{,}2 < x \\leq 1{,}6'), tex('1{,}6 < x \\leq 2{,}0'), tex('2{,}0 < x \\leq 4{,}0'), tex('4{,}0 < x \\leq 6{,}0')], correct: 0, category: 'aritmetik' },
        { num: 6, text: `<b>Vad är medelvärdet av ${tex('\\frac{1}{3}')} och ${tex('\\frac{1}{5}')}?</b>`, options: [tex('\\frac{1}{8}'), tex('\\frac{10}{75}'), tex('\\frac{1}{4}'), tex('\\frac{4}{15}')], correct: 3, category: 'statistik' },
        { num: 7, text: `En kvadrat har lika stor area som en rektangel med basen <i>x</i> cm och höjden 3<i>x</i>/4 cm. <b>Vilket svarsalternativ motsvarar kvadratens sidlängd?</b>`, options: [tex('\\sqrt{\\frac{3}{2}}\\,x') + ' cm', tex('\\frac{3x}{2}') + ' cm', tex('\\frac{\\sqrt{3}\\,x}{2}') + ' cm', tex('\\frac{9x}{16}') + ' cm'], correct: 2, category: 'geometri' },
        { num: 8, text: `${tex('xy^2 = 18')}<br>${tex('xy = 3')}<br><br><b>Vad är <i>x</i>?</b>`, options: [tex('\\frac{1}{2}'), tex('\\frac{3}{2}'), '2', tex('\\sqrt{6}')], correct: 0, category: 'algebra' },
        { num: 9, text: `<b>Vilket svarsalternativ är lika med ${tex('5 \\cdot 5^0 \\cdot 5^{-2} + 5')}?</b>`, options: ['5', '5,2', '6', '10'], correct: 1, category: 'aritmetik' },
        { num: 10, text: `${tex('x \\neq 0')}<br><br><b>Vilket svarsalternativ motsvarar uttrycket ${tex('\\dfrac{\\frac{x - 3}{x}}{\\frac{1}{x}} + 3')}?</b>`, options: ['0', '1', '<i>x</i>', tex('\\frac{x}{x^2}')], correct: 2, category: 'algebra' },
        { num: 11, text: `Ekvationen för linjen L kan skrivas ${tex('y = \\frac{2}{3}x + \\frac{4}{3}')}. Linjen L går genom punkten (1, 2). <b>Vilket svarsalternativ anger en punkt på L?</b>`, options: ['(−2, 0)', '(0, 1)', '(2, 3)', '(3, 3)'], correct: 0, category: 'funktioner' },
        { num: 12, text: 'Det tar 11 sekunder för Oscar att springa <i>y</i> meter. <b>Hur många sekunder tar det för honom att springa <i>x</i> meter med samma medelhastighet?</b>', options: [tex('\\frac{x}{11y}'), tex('\\frac{y}{11x}'), tex('\\frac{11x}{y}'), tex('\\frac{11y}{x}')], correct: 2, category: 'algebra' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: '', q1: '4 % av 200', q2: 'En fjärdedel av 20', options: KVA_ALTERNATIV, correct: 0, category: 'procent' },
        { num: 14, text: figur(B + 'p1-kva14.webp', 'Fyra linjer som bildar en fyrhörning. Vid varje hörn är en yttervinkel markerad: w uppe till vänster, z uppe till höger, y nere till höger och x nere till vänster.', 340), q1: '<i>x</i> + <i>y</i> + <i>z</i> + <i>w</i>', q2: '360°', options: KVA_ALTERNATIV, correct: 2, category: 'geometri' },
        { num: 15, text: tex('f(x) = 10 - 3x'), q1: tex('f(2) - f(5)'), q2: tex('f(0) - f(4)'), options: KVA_ALTERNATIV, correct: 1, category: 'funktioner' },
        { num: 16, text: '', q1: tex('\\frac{1}{5} + \\frac{1}{10} + \\frac{1}{15}'), q2: tex('\\frac{1}{3}'), options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 17, text: tex('\\frac{x}{16} = \\frac{3}{12x}'), q1: '<i>x</i>', q2: '4', options: KVA_ALTERNATIV, correct: 1, category: 'algebra' },
        { num: 18, text: figur(B + 'p1-kva18.webp', 'En L-formad sexhörning ABCDEF med räta vinklar i alla hörn. Sidan AF är 5 cm och sidan AB är 7 cm. Hörnet D är ett inåtgående hörn.', 260), q1: 'Omkretsen av sexhörningen ABCDEF', q2: '24 cm', options: KVA_ALTERNATIV, correct: 2, category: 'geometri' },
        { num: 19, text: `${tex('x < 0')}<br>${tex('y < 1')}`, q1: tex('x^2'), q2: tex('x^2 y'), options: KVA_ALTERNATIV, correct: 0, category: 'algebra' },
        { num: 20, text: 'En burk innehåller endast enfärgade röda och svarta kulor. Antalet svarta kulor är fem gånger så stort som antalet röda kulor.', q1: 'Sannolikheten att en slumpmässigt vald kula ur burken är röd', q2: '1/5', options: KVA_ALTERNATIV, correct: 1, category: 'sannolikhet' },
        { num: 21, text: `<i>x</i> och <i>y</i> är heltal sådana att<br>${tex('16 < x < 25')}<br>${tex('16 < y < 25')}<br><br><i>x</i> är inte jämnt delbart med vare sig 3 eller 5.<br><i>y</i> är jämnt delbart med 2.`, q1: 'Antalet olika tal som <i>x</i> kan vara', q2: 'Antalet olika tal som <i>y</i> kan vara', options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 22, text: tex('\\sqrt{5} \\cdot \\sqrt{9} = 45^x'), q1: '<i>x</i>', q2: '0,5', options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'På väg till skolan mötte Anton ett antal bilar. Var och en av bilarna var antingen vit eller röd. <b>Hur många fler vita bilar än röda bilar mötte Anton?</b>', s1: 'Anton mötte 10 vita bilar. Antalet röda bilar var hälften av antalet vita bilar.', s2: 'Anton mötte 5 röda bilar. Antalet vita bilar var dubbelt så stort som antalet röda bilar.', options: NOG_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 24, text: 'De tre burfåglarna Betty, Fanny och Polly lyckas rymma från sin bur. <b>Vilken fågel rymmer först?</b>', s1: 'Fanny rymmer inte först. Betty rymmer efter Polly.', s2: 'Polly rymmer före Fanny. Betty rymmer före Fanny. Polly rymmer före Betty.', options: NOG_ALTERNATIV, correct: 3, category: 'logik' },
        { num: 25, text: 'Patrik stryker sina skjortor. Han arbetar utan avbrott och varje skjorta tar sju minuter. <b>Hur mycket är klockan när Patrik har strukit alla sina skjortor?</b>', s1: 'När Patrik börjar stryka är klockan 17.00.', s2: 'När klockan är 18.10 har Patrik strukit två tredjedelar av sina skjortor.', options: NOG_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 26, text: '<b>Är medelvärdet av <i>x</i> och <i>y</i> mindre än 50?</b>', s1: 'Medelvärdet av 3<i>x</i> och 3<i>y</i> är 147.', s2: tex('x + y > 50'), options: NOG_ALTERNATIV, correct: 0, category: 'statistik' },
        { num: 27, text: 'En låda innehåller endast enfärgade röda och gröna bollar. Var och en av bollarna är också märkt med antingen ett kryss eller en stjärna. Karin tar upp en slumpmässigt vald boll ur lådan. <b>Vad är sannolikheten att bollen är röd och märkt med ett kryss?</b>', s1: 'Sannolikheten att bollen är grön och märkt med ett kryss är 20 %.', s2: 'Sannolikheten att bollen är märkt med en stjärna är 40 %.', options: NOG_ALTERNATIV, correct: 2, category: 'sannolikhet' },
        { num: 28, text: 'Anna och Bertil har båda en månadslön på mer än 25 000 kr. <b>Vem av dem har högst månadslön?</b>', s1: 'Annas månadslön är närmare 30 000 kr än vad Bertils är.', s2: 'Annas månadslön är närmare 25 000 kr än vad Bertils är.', options: NOG_ALTERNATIV, correct: 1, category: 'logik' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: '<b>Hur många färre dopingprov togs 2012 jämfört med 2004?</b>', options: ['400', '600', '3 500', '3 700'], correct: 0, diagram: B + 'p1-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 30, text: '<b>Hur stor andel av samtliga dopingprov 2013 togs inom förbunden för fotboll och ishockey?</b>', options: ['5 procent', '10 procent', '20 procent', '25 procent'], correct: 2, diagram: B + 'p1-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 31, text: 'Anta att de bestraffade dopingfallen hade samma procentuella fördelning på de olika dopingförseelserna varje år som under hela perioden 2003–2012. <b>Hur många av de bestraffade dopingfallen 2011 gällde i så fall AAS och andra anabola substanser?</b>', options: ['10', '15', '100', '1 500'], correct: 1, diagram: B + 'p1-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 32, text: '<b>Hur många fler ton torsk fångades i Sverige 1945 än 1935?</b>', options: ['1 300 ton', '6 600 ton', '9 700 ton', '45 800 ton'], correct: 2, diagram: B + 'p1-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 33, text: `Kurvan nedan visar mängden infångad saltsjöfisk i ett av länen 1920–1950. <b>Vilket län?</b>${figur(B + 'p1-dtk33.webp', 'Kurva över ton fisk 1920 till 1950: nästan oförändrad låg nivå 1920 till 1940, därefter kraftig ökning till 1945 och ännu kraftigare till 1950.', 300)}`, options: ['Blekinge län', 'Göteborgs och Bohus län', 'Hallands län', 'Kristianstads län'], correct: 3, diagram: B + 'p1-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 34, text: '<b>Hur stor var Västkustens sammanlagda fångst av skarpsill, kolja och makrill 1955?</b>', options: ['26 840 ton', '27 030 ton', '28 143 ton', '29 433 ton'], correct: 1, diagram: B + 'p1-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 35, text: '<b>Vilken individ hade flest dagar i arbete hos privat arbetsgivare under året?</b>', options: ['Individ 3', 'Individ 4', 'Individ 6', 'Individ 10'], correct: 1, diagram: B + 'p1-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 36, text: '<b>Hur många av de tio individerna var i arbete hos privat eller offentlig arbetsgivare vid årets slut?</b>', options: ['3', '4', '5', '6'], correct: 2, diagram: B + 'p1-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 37, text: '<b>Hur stor del av året var individ 1 i arbete?</b>', options: ['1/2', '2/5', '3/4', '3/5'], correct: 3, diagram: B + 'p1-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 38, text: '<b>Vilken månad avses?</b><br><br>Antalet anmälda försök till bilstöld utgjorde 35–45 procent av det totala antalet anmälningar om bilstöld den månaden, och det anmäldes fler än tio fullbordade bilstölder.', options: ['Mars', 'April', 'Juni', 'September'], correct: 1, diagram: B + 'p1-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: '<b>Hur många fullbordade bilstölder anmäldes sammanlagt under juni, juli och augusti?</b>', options: ['11', '23', '32', '43'], correct: 2, diagram: B + 'p1-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: '<b>För vilken tvåmånadersperiod gällde att antalet fullbordade bilstölder var mindre än två tredjedelar av det totala antalet anmälningar om bilstölder?</b>', options: ['Februari–mars', 'Mars–april', 'April–maj', 'Maj–juni'], correct: 1, diagram: B + 'p1-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
