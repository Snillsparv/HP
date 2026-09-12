// Högskoleprovet 25 mars 2023, provpass 2 (kvantitativt).
// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu.
import { tex, figur, KVA_ALTERNATIV, NOG_ALTERNATIV } from '../types.js';
import type { ExtraPass } from '../types.js';

const B = '/extraprov/vt2023/';
const graf = (bokstav: string) => `<img src="${B}p2-xyz11${bokstav}.webp" alt="Graf ${bokstav.toUpperCase()}" data-fadein style="max-width:170px;width:100%;vertical-align:middle;" />`;

const DTK1 = 'Kemikalieproduktion inom EU: kurva över EU-ländernas totala produktion av kemikalier 2002 till 2010 i miljoner ton samt staplar över produktionen av hälsofarliga kemikalier uppdelade i klasserna hälsoskadlig, giftig, mycket giftig, kroniskt giftig och CMR-kemikalie';
const DTK2 = 'Kikhosta: tabell över antalet rapporterade fall av kikhosta samt antalet fall per 100 000 invånare i Sverige 2007 till 2016, uppdelat på län och år';
const DTK3 = 'Förändringar i 15-åringars kunskaper i naturvetenskap: punktdiagram över förändringen av resultat i naturvetenskap (vertikal axel) och förändringen av den betydelse socioekonomisk bakgrund har haft (horisontell axel, omvänd) i ett antal länder, PISA 2015 jämfört med 2006';
const DTK4 = 'Utvandring och invandring 1960 till 2015: två linjediagram över antalet män och kvinnor som utvandrade från respektive invandrade till Sverige varje år';

export const pass: ExtraPass = {
  id: 'vt2023-2',
  tillfalle: 'vt2023',
  passNr: 2,
  kind: 'kvant',
  name: 'Provpass 2 (kvantitativt)',
  timeMinutes: 55,
  extendedMinutes: 80,
  normering: [[0, 0.0], [17, 0.1], [20, 0.2], [22, 0.3], [24, 0.4], [27, 0.5], [30, 0.6], [35, 0.7], [38, 0.8], [42, 0.9], [46, 1.0], [50, 1.1], [54, 1.2], [59, 1.3], [63, 1.4], [66, 1.5], [69, 1.6], [71, 1.7], [73, 1.8], [75, 1.9], [77, 2.0]],
  subTests: [
    {
      id: 'xyz', name: 'XYZ – Matematisk problemlösning', shortName: 'XYZ', type: 'xyz',
      questions: [
        { num: 1, text: `<b>Vilket svarsalternativ motsvarar uttrycket ${tex('(3x - 2x)(y - z)')}?</b>`, options: [tex('x + y - z'), tex('3x - 2xy - z'), tex('xy - xz'), tex('3xy + 2xz')], correct: 2, category: 'algebra' },
        { num: 2, text: `<b>Hur stor är vinkeln <i>v</i>?</b>${figur(B + 'p2-xyz2.webp', 'Triangel med vinkeln v i toppen, vinkeln 70° nere till vänster och yttervinkeln 119° nere till höger', 320)}`, options: ['39°', '49°', '51°', '61°'], correct: 1, category: 'geometri' },
        { num: 3, text: `${tex('\\frac{4x}{7} = \\frac{1}{14}')}<br><br><b>Vilket värde har <i>x</i>?</b>`, options: [tex('\\frac{1}{8}'), tex('\\frac{1}{7}'), tex('\\frac{1}{4}'), tex('\\frac{1}{2}')], correct: 0, category: 'algebra' },
        { num: 4, text: `För ${tex('f(x) = kx + m')} gäller att ${tex('f(4) - f(2) = 6')}. <b>Vilket värde har <i>k</i>?</b>`, options: [tex('\\frac{3}{2}'), '2', '3', '4'], correct: 2, category: 'funktioner' },
        { num: 5, text: 'Albert har tio tomma lådor som är numrerade med heltalen 1–10. Först lägger Albert en kula i varje låda vars nummer är jämnt delbart med 1. Sedan lägger han två kulor i varje låda vars nummer är jämnt delbart med 2, och så vidare ända upp till 10. Albert lägger alltså <i>k</i> stycken kulor i varje låda vars nummer är jämnt delbart med <i>k</i> för varje heltal <i>k</i> från 1 till 10. <b>Hur många kulor ligger det i lådan som har nummer 8 när Albert är klar?</b>', options: ['7', '9', '11', '15'], correct: 3, category: 'aritmetik' },
        { num: 6, text: `${tex('x + y = 10')}<br><br>Medelvärdet av <i>y</i> och 0 är lika med 5. <b>Vilket värde har <i>x</i>?</b>`, options: ['−5', '0', '5', '10'], correct: 1, category: 'algebra' },
        { num: 7, text: 'Ett lekland har ett bollhav med 21 000 enfärgade bollar i två olika färger: gul och röd. På tre gula bollar går det sju röda bollar. <b>Hur många gula bollar finns det i bollhavet?</b>', options: ['6 300', '7 000', '7 300', '9 000'], correct: 0, category: 'aritmetik' },
        { num: 8, text: `<b>Vilket av svarsalternativen är närmast ${tex('2\\sqrt{22}')}?</b>`, options: ['7', '9', '11', '22'], correct: 1, category: 'aritmetik' },
        { num: 9, text: `<b>Vad är differensen mellan ${tex('(x + 2)^2')} och ${tex('x^2')}?</b>`, options: ['2', '4', tex('2x + 4'), tex('4x + 4')], correct: 3, category: 'algebra' },
        { num: 10, text: `Areorna av kvadraterna K<sub>1</sub> och K<sub>2</sub> förhåller sig som 1:4. Arean av K<sub>1</sub> är 9 cm<sup>2</sup>.<br><b>Vilken sidlängd har K<sub>2</sub>?</b>`, options: ['3 cm', '6 cm', '9 cm', '12 cm'], correct: 1, category: 'geometri' },
        { num: 11, text: `<b>Vilket svarsalternativ visar en linje som är parallell med linjen ${tex('2y + x = -1')}?</b>`, options: [graf('a'), graf('b'), graf('c'), graf('d')], correct: 3, category: 'funktioner' },
        { num: 12, text: `<b>Vilket svarsalternativ motsvarar uttrycket ${tex('\\frac{1}{x} + \\frac{1}{y} + \\frac{1}{z}')}?</b>`, options: [tex('\\frac{3}{x + y + z}'), tex('\\frac{xy + xz + yz}{x + y + z}'), tex('\\frac{x + y + z}{xyz}'), tex('\\frac{xy + xz + yz}{xyz}')], correct: 3, category: 'algebra' },
      ],
    },
    {
      id: 'kva', name: 'KVA – Kvantitativa jämförelser', shortName: 'KVA', type: 'kva',
      questions: [
        { num: 13, text: tex('x < 0'), q1: tex('x^3 + y^2'), q2: tex('x^2 + z^3'), options: KVA_ALTERNATIV, correct: 3, category: 'algebra' },
        { num: 14, text: 'De två bilarna A och B kör 50 km vardera. För bil A räcker en liter bensin till att köra 20 km, och för bil B räcker en liter bensin till att köra 25 km.', q1: 'Mängden bensin som bil A förbrukar', q2: 'Mängden bensin som bil B förbrukar', options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
        { num: 15, text: `Hörnen i fyrhörningen ABCD har koordinaterna:<br>A = (1, 1)<br>B = (1, 5)<br>C = (−2, 1)<br>D = (−2, −3)${figur(B + 'p2-kva15.webp', 'Tomt koordinatsystem med rutnät', 300)}<i>Koordinatsystemet kan användas för att lösa uppgiften.</i>`, q1: 'Arean av fyrhörningen ABCD', q2: '20 areaenheter', options: KVA_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 16, text: '', q1: tex('\\frac{1}{3} + \\frac{1}{12}'), q2: tex('\\frac{1}{4} + \\frac{1}{6}'), options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 17, text: tex('\\frac{1}{x} + \\frac{1}{x} + \\frac{1}{x} = 15'), q1: '<i>x</i>', q2: tex('\\frac{1}{5}'), options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 18, text: 'I en parallellogram gäller att en av vinklarna är 11<i>x</i> och en annan av vinklarna är 4<i>x</i>.', q1: '<i>x</i>', q2: '15°', options: KVA_ALTERNATIV, correct: 1, category: 'geometri' },
        { num: 19, text: '', q1: tex('\\frac{10^3}{10^2}'), q2: tex('\\frac{10^{-2}}{10^{-3}}'), options: KVA_ALTERNATIV, correct: 2, category: 'aritmetik' },
        { num: 20, text: 'Medelvärdet av de tre talen <i>x</i>, <i>y</i> och <i>z</i> är lika med <i>x</i>.', q1: '2<i>x</i>', q2: '<i>y</i> + <i>z</i>', options: KVA_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 21, text: 'I triangeln ABC är sidan AB dubbelt så lång som sidan BC.', q1: 'Längden av sidan AC', q2: 'Längden av sidan AB', options: KVA_ALTERNATIV, correct: 3, category: 'geometri' },
        { num: 22, text: tex('0 < a < 1'), q1: tex('a^{-1}'), q2: '1', options: KVA_ALTERNATIV, correct: 0, category: 'aritmetik' },
      ],
    },
    {
      id: 'nog', name: 'NOG – Kvantitativa resonemang', shortName: 'NOG', type: 'nog',
      questions: [
        { num: 23, text: 'På ett bord ligger fem läroböcker på rad: en biologibok, en engelskabok, en fysikbok, en kemibok och en matematikbok. Böckerna är numrerade 1–5 från vänster till höger. <b>Vilket nummer har matematikboken?</b>', s1: 'Matematikboken ligger intill kemiboken, kemiboken ligger intill fysikboken, och fysikboken ligger intill engelskaboken.', s2: 'Engelskaboken ligger mellan fysikboken och biologiboken. Biologiboken har nummer 5.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 24, text: `För talen <i>x</i>, <i>y</i> och <i>z</i> gäller att ${tex('(x + y)(x + z) = 17')}. <b>Vilket värde har <i>z</i>?</b>`, s1: tex('x + y = 1'), s2: tex('y = -4'), options: NOG_ALTERNATIV, correct: 2, category: 'algebra' },
        { num: 25, text: 'I en konsthall finns det tre olika slags konstverk: oljemålningar, akvareller och litografier. <b>Hur många akvareller finns det i konsthallen?</b>', s1: 'I konsthallen finns det 15 oljemålningar, vilket är hälften av antalet litografier. Det totala antalet konstverk är jämnt delbart med 5.', s2: 'I konsthallen finns det fler litografier än akvareller, och fler akvareller än oljemålningar.', options: NOG_ALTERNATIV, correct: 4, category: 'aritmetik' },
        { num: 26, text: 'En kakburk innehåller endast pepparkakor i form av stjärnor och hjärtan. Var och en av pepparkakorna är antingen stor eller liten. <b>Hur många små hjärtan finns det i burken?</b>', s1: 'Det finns lika många stjärnor som hjärtan i burken. Det finns lika många stora som små pepparkakor i burken.', s2: 'Det finns 24 stjärnor i burken. 10 av stjärnorna är stora.', options: NOG_ALTERNATIV, correct: 2, category: 'logik' },
        { num: 27, text: 'Maria, Nils, Ove och Petra sitter vid varsin sida kring ett kvadratiskt bord. <b>Endast en av personerna har glasögon, vem?</b>', s1: 'Maria sitter mitt emot Ove. Det är personen som sitter till höger om Nils som har glasögon. Ove har inte glasögon.', s2: 'Petra sitter till höger om Maria och till vänster om Ove. Varken Petra eller Nils har glasögon.', options: NOG_ALTERNATIV, correct: 0, category: 'logik' },
        { num: 28, text: '50 liter vatten fördes över från tank A till tank B. Volymen vatten i tank B ökade då med 20 %. <b>Hur mycket vatten fanns det från början i tank A?</b>', s1: 'Den sammanlagda volymen vatten i tankarna var 450 liter.', s2: 'Efter överföringen var det hälften så mycket vatten i tank A som i tank B.', options: NOG_ALTERNATIV, correct: 3, category: 'procent' },
      ],
    },
    {
      id: 'dtk', name: 'DTK – Diagram, tabeller och kartor', shortName: 'DTK', type: 'dtk',
      questions: [
        { num: 29, text: 'Studera kemikalieproduktionen 2007. <b>Hur stor var mängden kemikalier som inte klassades som hälsofarliga?</b>', options: ['145 miljoner ton', '165 miljoner ton', '215 miljoner ton', '360 miljoner ton'], correct: 0, diagram: B + 'p2-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 30, text: 'Studera produktionen av hälsofarliga kemikalier. <b>För vilken farlighetsklass var den sammanlagda produktionen under den redovisade perioden 450 miljoner ton?</b>', options: ['Hälsoskadlig', 'Giftig', 'Mycket giftig', 'Kroniskt giftig'], correct: 0, diagram: B + 'p2-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 31, text: '<b>Hur stor andel av den totala kemikalieproduktionen 2010 utgjordes av de tre farlighetsklasserna giftig, mycket giftig och kroniskt giftig?</b>', options: ['1/5', '1/3', '1/2', '3/5'], correct: 1, diagram: B + 'p2-dtk1.webp', diagramAlt: DTK1, category: 'diagram' },
        { num: 32, text: '<b>Hur många län hade år 2014 fler fall av kikhosta per 100 000 invånare än Sverige totalt?</b>', options: ['8', '9', '10', '11'], correct: 2, diagram: B + 'p2-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 33, text: 'År 2009 stod åldersgruppen 0–19 år för 70 procent av det totala antalet rapporterade fall av kikhosta. <b>Hur många fall av kikhosta rapporterades i åldersgruppen 0–19 år?</b>', options: ['66', '86', '196', '216'], correct: 2, diagram: B + 'p2-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 34, text: 'Svealand består av Dalarnas, Stockholms, Södermanlands, Uppsala, Värmlands, Västmanlands och Örebro län. <b>Hur stor andel av det totala antalet rapporterade fall av kikhosta 2011 fanns i Svealand?</b>', options: ['35 procent', '40 procent', '45 procent', '50 procent'], correct: 0, diagram: B + 'p2-dtk2.webp', diagramAlt: DTK2, category: 'tabell' },
        { num: 35, text: '<b>Vilket svarsförslag beskriver de förändringar som skett i Chile?</b>', options: ['Kunskaperna i naturvetenskap hade försämrats samtidigt som socioekonomisk bakgrund hade fått minskad betydelse.', 'Kunskaperna i naturvetenskap hade försämrats samtidigt som socioekonomisk bakgrund hade fått ökad betydelse.', 'Kunskaperna i naturvetenskap hade förbättrats samtidigt som socioekonomisk bakgrund hade fått ökad betydelse.', 'Kunskaperna i naturvetenskap hade förbättrats samtidigt som socioekonomisk bakgrund hade fått minskad betydelse.'], correct: 3, diagram: B + 'p2-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 36, text: 'Identifiera det land där resultaten i naturvetenskap hade försämrats mest. <b>Hur hade betydelsen av socioekonomisk bakgrund förändrats i detta land?</b>', options: ['Den hade ökat med 9,5 skalsteg.', 'Den hade ökat med 13 skalsteg.', 'Den hade minskat med 4,5 skalsteg.', 'Den hade minskat med 13 skalsteg.'], correct: 0, diagram: B + 'p2-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 37, text: 'Resultaten i naturvetenskap hade försämrats med 1–10 skalsteg samtidigt som betydelsen av socioekonomisk bakgrund hade minskat med mer än 5 skalsteg. <b>Vilket land avses?</b>', options: ['Turkiet', 'Sverige', 'Tyskland', 'Storbritannien'], correct: 3, diagram: B + 'p2-dtk3.webp', diagramAlt: DTK3, category: 'diagram' },
        { num: 38, text: '<b>Hur stort var antalet kvinnor som invandrade till Sverige det år då antalet var som störst jämfört med det år då antalet var som minst?</b>', options: ['Tre gånger så stort', 'Fem gånger så stort', 'Sju gånger så stort', 'Nio gånger så stort'], correct: 1, diagram: B + 'p2-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 39, text: '<b>Hur många fler var de som invandrade till Sverige än de som utvandrade från Sverige 2010?</b>', options: ['25 000', '35 000', '50 000', '60 000'], correct: 2, diagram: B + 'p2-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
        { num: 40, text: '<b>Hur många invandrade till Sverige i genomsnitt per år under perioden 1995–2005?</b>', options: ['35 000', '45 000', '55 000', '65 000'], correct: 2, diagram: B + 'p2-dtk4.webp', diagramAlt: DTK4, category: 'diagram' },
      ],
    },
  ],
};
