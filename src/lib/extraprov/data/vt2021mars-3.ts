// Högskoleprovet 13 mars 2021, provpass 3 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/vt2021mars/';
const graf = (bokstav: string) => `<img src="${B}p3-xyz10${bokstav}.webp" alt="Graf ${bokstav.toUpperCase()}" data-fadein style="max-width:170px;width:100%;vertical-align:middle;" />`;

const DTK1 = 'Indragen studiehjälp: två tabeller över antalet gymnasieelever i Sverige som fått sin studiehjälp indragen på grund av ogiltig frånvaro läsåren 2009/10, 2010/11 och 2011/12. Den första tabellen visar totalt antal samt kvinnor och män fördelat på bidragsformerna studiebidrag, inackorderingstillägg och extra tillägg. Den andra tabellen visar antalet per län och läsår, fördelat på kvinnor, män och totalt, med hela riket överst.';
const DTK2 = 'Fysisk aktivitet och träning: ett stapeldiagram över energiförbrukningen i kJ per minut vid vila, lätt arbete, medelhårt arbete och hårt arbete, uppdelad på socker och fett med andelarna i procent, samt ett linjediagram över pulsfrekvensen (slag per minut) vid olika löphastigheter (km per timme) för en otränad person och för en fotbollsspelare före respektive efter en träningsperiod, med den maximala pulsen markerad.';
const DTK3 = 'Europeiska unionens fiskeflotta: tre ringdiagram över medlemsstaternas andel av EU:s fiskeflotta den 31 december 2005 vad avser antal fartyg (totalt 89 666), tonnage (totalt 2 034 389) och maskinkraft i kW (totalt 7 287 224), med länderna angivna med landskoder.';
const DTK4 = 'Barnadödligheten sedan 1700-talet: fyra linjediagram över antal döda per tusen barn i Sverige. Det första visar dödligheten i åldrarna 1–2, 3–4, 5–9 och 10–14 år 1751–1970, det andra spädbarnsdödligheten för pojkar respektive flickor 1751–1970, det tredje spädbarnsdödligheten på landsbygden respektive i städerna 1811–1960 och det fjärde spädbarnsdödligheten bland utomäktenskapliga respektive inomäktenskapliga barn 1801–1966.';

export const pass: ExtraPass = {
  id: 'vt2021mars-3',
  tillfalle: 'vt2021mars',
  passNr: 3,
  kind: 'kvant',
  name: 'Provpass 3 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [18, 0.1], [20, 0.2], [22, 0.3], [25, 0.4], [28, 0.5], [32, 0.6], [35, 0.7], [39, 0.8], [43, 0.9], [46, 1.0], [50, 1.1], [54, 1.2], [58, 1.3], [62, 1.4], [65, 1.5], [68, 1.6], [70, 1.7], [72, 1.8], [74, 1.9], [76, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `${tex('2(x - 6) = 4(2 - x)')}<br><br><b>Vilket värde har <i>x</i>?</b>`, options: ['2', tex('\\frac{10}{3}'), tex('\\frac{14}{3}'), '5'], correct: 1, category: 'algebra' },
        { num: 2, text: `${tex('f(x) = 3x^2 - 12')}<br><br><b>Vilket svarsalternativ anger ett <i>x</i>-värde för vilket ${tex('f(x) = 0')}?</b>`, options: ['0', '2', '4', '12'], correct: 1, category: 'funktioner' },
        { num: 3, text: `<b>Vad är 20 procent av ${tex('\\frac{1}{5}')}?</b>`, options: [tex('\\frac{5}{20}'), tex('\\frac{1}{20}'), tex('\\frac{1}{25}'), tex('\\frac{1}{100}')], correct: 2, category: 'procent' },
        { num: 4, text: `<b>Hur stor är arean av femhörningen nedan?</b>${figur(B + 'p3-xyz4.webp', 'En femhörning med räta vinklar i det nedre vänstra, det nedre högra och det övre högra hörnet. Bottensidan är 10 cm, den högra sidan 8 cm, den övre sidan 4 cm och den vänstra sidan 4 cm. Det övre vänstra hörnet är avskuret av en sned sida.', 460)}`, options: ['60 cm<sup>2</sup>', '66 cm<sup>2</sup>', '68 cm<sup>2</sup>', '80 cm<sup>2</sup>'], correct: 2, category: 'geometri' },
        { num: 5, text: '<b>Vad är medianen av alla heltal från och med 1 till och med 10?</b>', options: ['4,5', '5', '5,5', '6'], correct: 2, category: 'statistik' },
        { num: 6, text: `${tex('2^x \\cdot 4^y = 16')}<br><br><b>Vad är ${tex('x + 2y')}?</b>`, options: ['2', '4', '6', '8'], correct: 1, category: 'algebra' },
        { num: 7, text: `${figur(B + 'p3-xyz7.webp', 'En fyrhörning med vinklarna w i det övre vänstra hörnet, z i det övre högra, x i det nedre vänstra och y i det nedre högra hörnet.', 300)}<b>Vilket svarsalternativ är med säkerhet korrekt?</b>`, options: ['Om <i>x</i> + <i>z</i> > 180° så är <i>y</i> > 90° och <i>w</i> < 90°', 'Om <i>x</i> + <i>z</i> > 180° så är <i>y</i> + <i>w</i> < 180°', 'Om <i>x</i> + <i>z</i> < 180° så är <i>y</i> > 90° och <i>w</i> > 90°', 'Om <i>x</i> + <i>z</i> < 180° så är <i>y</i> + <i>w</i> < 180°'], correct: 1, category: 'geometri' },
        { num: 8, text: `<b>Vad är ${tex('\\dfrac{\\frac{3}{4} + \\frac{4}{3}}{\\frac{12}{5}}')}?</b>`, options: ['5', tex('\\frac{5}{12}'), tex('\\frac{49}{60}'), tex('\\frac{125}{144}')], correct: 3, category: 'aritmetik' },
        { num: 9, text: `<b>Vilket svarsalternativ motsvarar uttrycket ${tex('(a + b)(a^2 - ab + b^2)')}?</b>`, options: [tex('a^2 - 2ab + b^2'), tex('a^3 + 2a^2b + 2ab^2 + b^3'), tex('a^3 + 2ab^2 + b^3'), tex('a^3 + b^3')], correct: 3, category: 'algebra' },
        { num: 10, text: `${tex('f(x) = \\frac{x}{2} - 1')}<br><br><b>Vilket svarsalternativ visar grafen till funktionen ${tex('g(x) = 2f(x) + 3')}?</b>`, options: [graf('a'), graf('b'), graf('c'), graf('d')], correct: 0, category: 'funktioner' },
        { num: 11, text: '<i>x</i> och <i>y</i> är positiva tal. Om <i>x</i> var 25 % större och <i>y</i> var 25 % mindre så skulle talen vara lika stora. <b>Hur förhåller sig <i>x</i> till <i>y</i>?</b>', options: [tex('x = \\frac{y}{2}'), tex('x = \\frac{3y}{5}'), tex('x = \\frac{2y}{3}'), tex('x = \\frac{4y}{5}')], correct: 1, category: 'procent' },
        { num: 12, text: '<i>x</i> är ett heltal större än 0. <b>Vilket är det minsta värde som <i>x</i> kan ha för att 75<i>x</i> ska vara kvadraten på ett heltal?</b>', options: ['3', '5', '25', '75'], correct: 0, category: 'aritmetik' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: tex('f(x) = -4x + 2'), q1: tex('f\\left(-\\frac{1}{2}\\right)'), q2: '0', options: KVA_ALTERNATIV, correct: 0, category: 'funktioner' },
        { num: 14, text: tex('x > 0'), q1: tex('\\left(\\sqrt{x}\\right)^{\\sqrt{9} + 1}'), q2: tex('\\left(\\sqrt{x}\\right)^4'), options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 15, text: '', q1: tex('0{,}97^{97}'), q2: tex('1{,}07^{7}'), options: KVA_ALTERNATIV, correct: 1, category: 'aritmetik' },
        { num: 16, text: 'I triangeln T är alla vinklar olika stora.', q1: 'Den minsta vinkeln i triangeln T', q2: '75°', options: KVA_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 17, text: 'I en burk finns det 190 kulor som är numrerade med heltalen 1, 2, 3, …, 189, 190. En kula plockas slumpmässigt ur burken.', q1: 'Sannolikheten att numret på kulan är ett tvåsiffrigt heltal', q2: '50 %', options: KVA_ALTERNATIV, correct: 1, category: 'sannolikhet' },
        { num: 18, text: 'Linjen A går genom punkterna (1, 2) och (2, 3). Linjen B är vinkelrät mot linjen A.', q1: 'Riktningskoefficienten för linjen A', q2: 'Riktningskoefficienten för linjen B', options: KVA_ALTERNATIV, correct: 0, category: 'funktioner' },
        { num: 19, text: '', q1: '159 liter', q2: '15 900 cm<sup>3</sup>', options: KVA_ALTERNATIV, correct: 0, category: 'enheter' },
        { num: 20, text: '', q1: 'Produkten av ett tresiffrigt positivt heltal och ett tvåsiffrigt positivt heltal', q2: 'Ett fyrsiffrigt positivt heltal', options: KVA_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 21, text: `Arean av en cirkel är ${tex('\\pi^3')} cm<sup>2</sup>.`, q1: 'Cirkelns radie', q2: `${tex('\\pi')} cm`, options: KVA_ALTERNATIV, correct: 2, category: 'geometri' },
        { num: 22, text: `${tex('x > 0')}<br>${tex('y > 0')}<br><br>${tex('\\sqrt{\\frac{x}{y}} = \\frac{x}{y}')}`, q1: '2', q2: tex('\\frac{2y}{x}'), options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'Emma kör bil på en väg som har en sträcka där ett vägarbete pågår. <b>Hur lång är sträckan med vägarbete?</b>', s1: 'När Emma har kört längs sträckan med vägarbete i 2 minuter har hon kört 1/5 av hela sträckan med vägarbete. Efter ytterligare 3 minuter har hon kört halva sträckan med vägarbete.', s2: 'Emma kör med konstant hastighet.', options: NOG_ALTERNATIV, correct: 4, category: 'aritmetik' },
        { num: 24, text: 'Hugo har en låda med knappar. <b>Hur många knappar har Hugo i lådan?</b>', s1: '28 knappar utgör 1/9 av alla knappar i lådan.', s2: 'Om 28 knappar plockas upp ur lådan, så utgör 56 knappar 25 % av antalet knappar som är kvar i lådan.', options: NOG_ALTERNATIV, correct: 3, category: 'aritmetik' },
        { num: 25, text: 'En burk som är fylld till 70 % med socker väger 1 250 g. <b>Hur mycket väger burken när den är tom?</b>', s1: '1 dl socker väger 90 g.', s2: 'Burken rymmer 1,5 liter.', options: NOG_ALTERNATIV, correct: 2, category: 'enheter' },
        { num: 26, text: 'Lea har en stensamling som består av 60 stenar. Varje sten är antingen slät eller inte slät. Varje sten är dessutom antingen ljus eller mörk. Lea har 24 mörka stenar. <b>Hur många släta stenar har Lea i sin samling?</b>', s1: '12 av de mörka stenarna är inte släta.', s2: 'Lea har lika många ljusa släta stenar som mörka släta stenar.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 27, text: 'Sidlängderna i en triangel är <i>a</i>, <i>b</i> och <i>c</i>. <b>Är triangeln liksidig?</b>', s1: tex('a = b'), s2: tex('c \\neq a'), options: NOG_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 28, text: `${tex('x + y = 36')}<br><br><b>Vilket värde har <i>xy</i>?</b>`, s1: '<i>x</i> och <i>y</i> är två på varandra följande udda heltal.', s2: '<i>x</i> och <i>y</i> är två positiva heltal.', options: NOG_ALTERNATIV, correct: 0, category: 'algebra' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: `Kurvan nedan illustrerar hur antalet fall av indragen studiehjälp förändrades i ett specifikt län under de tre redovisade läsåren. <b>Vilket är länet?</b>${figur(B + 'p3-dtk29.webp', 'Ett litet linjediagram med antal elever på y-axeln och läsåren 2009/10, 2010/11 och 2011/12 på x-axeln. Kurvan stiger tydligt från 2009/10 till 2010/11 och sjunker sedan något till 2011/12.', 320)}`, options: ['Gotlands län', 'Hallands län', 'Örebro län', 'Västernorrlands län'], correct: 2, diagram: B + 'p3-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 30, text: '<b>Hur många fler män än kvinnor fick sitt extra tillägg indraget under den redovisade treårsperioden?</b>', options: ['205', '310', '735', '1 501'], correct: 2, diagram: B + 'p3-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 31, text: '<b>Vilket län avses?</b><br><br>Läsåret 2010/11 fick fler än 250 kvinnor sin studiehjälp indragen. Läsåret 2009/10 fick mer än dubbelt så många män som kvinnor sin studiehjälp indragen.', options: ['Östergötlands län', 'Skåne län', 'Västra Götalands län', 'Västmanlands län'], correct: 0, diagram: B + 'p3-dtk1.webp', diagramAlt: DTK1, category: 'tabell' },
        { num: 32, text: 'Jämför den löphastighet som ger en fotbollsspelare maximal puls före en träningsperiod med den löphastighet som ger en otränad person maximal puls. <b>Hur stor är skillnaden?</b>', options: ['2 km per timme', '5 km per timme', '7 km per timme', '10 km per timme'], correct: 1, diagram: B + 'p3-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 33, text: '<b>Hur mycket energi från fett omsätts under en timmes medelhårt arbete?</b>', options: ['1 200 kJ', '1 600 kJ', '2 000 kJ', '2 400 kJ'], correct: 0, diagram: B + 'p3-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 34, text: '<b>Hur mycket större är den totala energiförbrukningen vid hårt arbete än vid lätt arbete?</b>', options: ['45 kJ per minut', '60 kJ per minut', '75 kJ per minut', '90 kJ per minut'], correct: 1, diagram: B + 'p3-dtk2.webp', diagramAlt: DTK2, category: 'diagram' },
        { num: 35, text: '<b>Vilket land hade den största fiskeflottan vad avser antal fartyg, tonnage respektive maskinkraft?</b>', options: ['Grekland, Spanien respektive Italien', 'Grekland, Frankrike respektive Spanien', 'Spanien, Spanien respektive Frankrike', 'Spanien, Frankrike respektive Italien'], correct: 0, diagram: B + 'p3-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 36, text: '<b>Sammanlagt hur stor andel av fartygen inom EU:s fiskeflotta kom från något av länderna Portugal, Finland eller Storbritannien?</b>', options: ['1/10', '1/6', '1/5', '1/3'], correct: 2, diagram: B + 'p3-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 37, text: 'Jämför Frankrike och Portugal vad avser den maskinkraft som respektive lands fiskeflotta hade. <b>Hur mycket mer maskinkraft hade Frankrike?</b>', options: ['106 000 kW', '325 000 kW', '685 000 kW', '1 032 000 kW'], correct: 2, diagram: B + 'p3-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 38, text: '<b>Hur många fler barn dog bland 1–2-åringar än bland 5–9-åringar under perioden 1751–60?</b>', options: ['28 per tusen barn', '37 per tusen barn', '44 per tusen barn', '51 per tusen barn'], correct: 1, diagram: B + 'p3-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: 'Studera tioårsperioden 1931–40. <b>Vilka betingelser gav störst chanser att överleva spädbarnsåldern?</b>', options: ['Att vara pojke, att vara född i staden och att vara född inom äktenskapet.', 'Att vara flicka, att vara född på landsbygden och att vara född inom äktenskapet.', 'Att vara pojke, att vara född på landsbygden och att vara född utom äktenskapet.', 'Att vara flicka, att vara född i staden och att vara född inom äktenskapet.'], correct: 3, diagram: B + 'p3-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: '<b>Vilken av de redovisade tioårsperioderna var spädbarnsdödligheten som störst?</b>', options: ['1761–70', '1771–80', '1801–10', '1811–20'], correct: 0, diagram: B + 'p3-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
