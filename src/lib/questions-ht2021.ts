// Shared question data for HT 2021 quantitative subtests
export const tex = (latex: string) => `<span class="tex">${latex}</span>`;

const stdKvaOpts = [
  'I är större än II',
  'II är större än I',
  'I är lika med II',
  'informationen är otillräcklig'
];

const stdNogOpts = [
  'i (1) men ej i (2)',
  'i (2) men ej i (1)',
  'i (1) tillsammans med (2)',
  'i (1) och (2) var för sig',
  'ej genom de båda påståendena'
];

export interface Question {
  num: number;
  text: string;
  options: string[];
  correct: number;
  category?: string;
  // KVA fields
  q1?: string;
  q2?: string;
  // NOG fields
  s1?: string;
  s2?: string;
  // DTK fields
  diagram?: string;
  diagramAlt?: string;
  rotate?: boolean;
}

export interface SubTest {
  id: string;
  name: string;
  shortName: string;
  type: 'standard' | 'kva' | 'nog' | 'dtk';
  timeMinutes: number;
  questions: Question[];
}

export const subTests: SubTest[] = [
  {
    id: 'xyz', name: 'XYZ — Matematisk problemlösning', shortName: 'XYZ',
    type: 'standard', timeMinutes: 12,
    questions: [
      { num: 1, text: `<b>Vilket värde har <i>x</i></b> om ${tex('\\frac{1}{2} + \\frac{1}{3} + x = 1')}?`, options: [tex('\\frac{1}{6}'), tex('\\frac{1}{5}'), tex('\\frac{1}{4}'), tex('\\frac{1}{3}')], correct: 0, category: 'algebra' },
      { num: 2, text: 'En blombukett består av endast vita och röda rosor. Antalet röda rosor är tre gånger så stort som antalet vita rosor. <b>Vilket svarsalternativ kan motsvara antalet rosor i blombuketten?</b>', options: ['25', '26', '27', '28'], correct: 3, category: 'aritmetik' },
      { num: 3, text: '<b>Vad är</b> 5 + 3 · 5 − 4 + 8 · 2?', options: ['0', '16', '32', '88'], correct: 2, category: 'aritmetik' },
      { num: 4, text: `<b>Vilket svarsalternativ motsvarar ekvationen</b> ${tex('y = 4x - 5')}?`, options: [tex('x = y + \\frac{5}{4}'), tex('x = \\frac{y}{4} + 5'), tex('x = \\frac{5-y}{4}'), tex('x = \\frac{y+5}{4}')], correct: 3, category: 'algebra' },
      { num: 5, text: 'Fyra linjer skär varandra i samma punkt. <b>Vad är <i>x</i>?</b><div style="text-align:center;margin:1.2rem 0;"><img src="/prov-xyz1-5.png" alt="Vinklar" data-fadein style="max-width:280px;aspect-ratio:371/396;" /></div>', options: ['15°', '20°', '22,5°', '25°'], correct: 2, category: 'geometri' },
      { num: 6, text: '<b>Vilket svarsalternativ är lika med</b> 3<i>x</i>(2 − 5<i>y</i>)?', options: ['6<i>x</i> − 5<i>y</i>', '(6<i>x</i> − 15)<i>y</i>', '−5<i>x</i>(2 + 3<i>y</i>)', '−(15<i>y</i> − 6)<i>x</i>'], correct: 3, category: 'algebra' },
      { num: 7, text: '<b>Vilket svarsalternativ är ett intervall där <i>g</i>(<i>x</i>) &gt; <i>f</i>(<i>x</i>) för alla <i>x</i> i intervallet?</b><div style="text-align:center;margin:1.2rem 0;"><img src="/prov-xyz1-7.png" alt="Graf" data-fadein style="max-width:300px;aspect-ratio:335/300;" /></div>', options: ['<i>x</i> &gt; <i>a</i>', '<i>b</i> &lt; <i>x</i> &lt; <i>e</i>', '<i>c</i> &lt; <i>x</i> &lt; <i>e</i>', '<i>a</i> &lt; <i>x</i> &lt; <i>d</i>'], correct: 3, category: 'funktioner' },
      { num: 8, text: 'I en påse finns det 28 enfärgade kulor: 10 röda, 7 vita och 11 svarta. <b>Om man drar en kula slumpmässigt, hur stor är då sannolikheten att den inte är vit?</b>', options: [tex('\\frac{1}{3}'), tex('\\frac{1}{4}'), tex('\\frac{2}{3}'), tex('\\frac{3}{4}')], correct: 3, category: 'sannolikhet' },
      { num: 9, text: `<b>Vilket svarsalternativ är lika med</b> ${tex('\\frac{0{,}36}{3 \\cdot 0{,}024}')} ?`, options: ['0,05', '0,5', '5', '50'], correct: 2, category: 'aritmetik' },
      { num: 10, text: 'Rektangeln ABCD är sammansatt av 12 lika stora kvadrater. Area = 300 cm². <b>Hur lång är AB?</b><div style="text-align:center;margin:1.2rem 0;"><img src="/prov-xyz1-10.png" alt="Rektangel" data-fadein style="max-width:200px;aspect-ratio:372/160;" /></div>', options: [tex('\\sqrt{300}') + ' cm', '20 cm', tex('\\frac{4}{3}\\sqrt{300}') + ' cm', '25 cm'], correct: 1, category: 'geometri' },
      { num: 11, text: `${tex('5x^2 + 3x = 0')}<br><br><b>Vilket av svarsalternativen är ett möjligt värde på <i>x</i>?</b>`, options: [tex('-\\frac{3}{5}'), tex('\\sqrt{\\frac{3}{5}}'), tex('-\\frac{5}{3}'), tex('\\sqrt{\\frac{5}{3}}')], correct: 0, category: 'algebra' },
      { num: 12, text: 'En rektangel är inritad i ett koordinatsystem. <b>Vilken linje delar rektangeln i två lika stora delar?</b><div style="text-align:center;margin:1.2rem 0;"><img src="/prov-xyz1-12.png" alt="Koordinatsystem" data-fadein style="max-width:240px;aspect-ratio:301/345;" /></div>', options: ['<i>y</i> = −<i>x</i> + 6', '<i>y</i> = −<i>x</i> + 4', '<i>y</i> = <i>x</i> − 1', '<i>y</i> = <i>x</i> − 2'], correct: 2, category: 'funktioner' },
    ]
  },
  {
    id: 'kva', name: 'KVA — Kvantitativa jämförelser', shortName: 'KVA',
    type: 'kva', timeMinutes: 18,
    questions: [
      { num: 13, text: 'Medelvärdet av de tre talen <i>x</i>, <i>y</i> och <i>z</i> är 12. Summan av <i>y</i> och <i>z</i> är 30.', q1: '<i>x</i>', q2: '9', options: stdKvaOpts, correct: 1, category: 'aritmetik' },
      { num: 14, text: '', q1: tex('1 + \\frac{1}{4}'), q2: tex('\\frac{10}{8}'), options: stdKvaOpts, correct: 0, category: 'aritmetik' },
      { num: 15, text: `${tex('x > 0')}<br>${tex('y < 0')}<br>${tex('z > 0')}<br>${tex('w < 0')}`, q1: tex('x^2 + y^2'), q2: tex('z^2 + w^2'), options: stdKvaOpts, correct: 3, category: 'algebra' },
      { num: 16, text: '', q1: 'Arean av en rektangel med sidorna 12 cm och 25 cm', q2: 'Arean av en rätvinklig triangel med kateterna 8 cm och 64 cm', options: stdKvaOpts, correct: 0, category: 'geometri' },
      { num: 17, text: tex('2(2x + 4) = 2x + 4'), q1: tex('x'), q2: '0', options: stdKvaOpts, correct: 1, category: 'algebra' },
      { num: 18, text: tex('f(x) = x^2 - 2x - 3'), q1: tex('f(3)'), q2: tex('f(-1)'), options: stdKvaOpts, correct: 2, category: 'funktioner' },
      { num: 19, text: '', q1: '70 procent av 105', q2: '73', options: stdKvaOpts, correct: 0, category: 'procent' },
      { num: 20, text: '<i>F</i>(<i>n</i>) = summan av alla positiva heltal &lt; <i>n</i>.<br><i>G</i>(<i>n</i>) = summan av alla jämna positiva heltal &lt; <i>n</i>.', q1: '<i>F</i>(5)', q2: tex('\\frac{G(11)}{2}'), options: stdKvaOpts, correct: 2, category: 'aritmetik' },
      { num: 21, text: '', q1: 'Kvoten mellan en cirkels omkrets och dess diameter', q2: 'Kvoten mellan en kvadrats omkrets och dess sidlängd', options: stdKvaOpts, correct: 0, category: 'geometri' },
      { num: 22, text: tex('x > 1'), q1: tex('x^{7 + \\frac{2}{3}}'), q2: tex('\\left(x^{23}\\right)^{\\frac{1}{3}}'), options: stdKvaOpts, correct: 2, category: 'algebra' },
    ]
  },
  {
    id: 'nog', name: 'NOG — Kvantitativa resonemang', shortName: 'NOG',
    type: 'nog', timeMinutes: 12,
    questions: [
      { num: 23, text: 'I ett pennskrin finns det endast blyertspennor och tuschpennor. <b>Hur många tuschpennor finns det i pennskrinet?</b>', s1: 'Hälften av antalet tuschpennor är lika med en tredjedel av antalet blyertspennor.', s2: 'Det finns sammanlagt 15 pennor i pennskrinet.', options: stdNogOpts, correct: 2, category: 'logik' },
      { num: 24, text: '<i>x</i>, <i>y</i>, <i>z</i> och <i>w</i> är positiva tal. <b>Vilket av talen är störst?</b>', s1: tex('x + y = w'), s2: tex('\\frac{x+y}{2} = z'), options: stdNogOpts, correct: 2, category: 'logik' },
      { num: 25, text: 'Anna och Berit springer till mötesplatsen C. De startar samtidigt med egen konstant hastighet. <b>Vem springer fortast?</b>', s1: 'Berit anländer till C före Anna.', s2: 'C ligger närmare Annas hem än Berits.', options: stdNogOpts, correct: 2, category: 'logik' },
      { num: 26, text: 'I en låda finns vita, svarta och gula kulor. <b>Hur många svarta kulor?</b>', s1: '100 vita kulor = en tredjedel av svarta + gula.', s2: '100 gula kulor = hälften så många som svarta.', options: stdNogOpts, correct: 3, category: 'logik' },
      { num: 27, text: `M är cirkelns medelpunkt. <b>Vilken radie har cirkeln?</b><div style="text-align:center;margin:1.2rem 0;"><img src="/prov-nog1-27.png" alt="Cirkel" data-fadein style="max-width:250px;aspect-ratio:226/177;" /></div>`, s1: `Cirkelbågen AB = ${tex('\\pi')} cm.`, s2: `Sträckan AB = ${tex('2\\sqrt{2}')} cm.`, options: stdNogOpts, correct: 3, category: 'logik' },
      { num: 28, text: '<i>x</i> och <i>y</i> är heltal. <b>Är <i>x</i> mindre än 25?</b>', s1: '<i>y</i> är mindre än 25.', s2: '<i>x</i> + <i>y</i> är mindre än 25.', options: stdNogOpts, correct: 4, category: 'logik' },
    ]
  },
  {
    id: 'dtk', name: 'DTK — Diagram, tabeller och kartor', shortName: 'DTK',
    type: 'dtk', timeMinutes: 18,
    questions: [
      { num: 29, text: 'Vilket år: betalningsförelägganden > 40 000 och andelen män > 55%?', options: ['2007', '2009', '2012', '2014'], correct: 2, diagram: '/prov-dtk1-diagram1.png', diagramAlt: 'Betalningsförelägganden', rotate: true, category: 'diagram' },
      { num: 30, text: 'Procentuell ökning av betalningsförelägganden 2014 jämfört med 2007?', options: ['45%', '125%', '155%', '215%'], correct: 2, diagram: '/prov-dtk1-diagram1.png', diagramAlt: 'Betalningsförelägganden', rotate: true, category: 'diagram' },
      { num: 31, text: 'Hur många betalningsförelägganden 2013 avsåg kvinnor?', options: ['19 676', '22 136', '24 596', '27 056'], correct: 1, diagram: '/prov-dtk1-diagram1.png', diagramAlt: 'Betalningsförelägganden', rotate: true, category: 'diagram' },
      { num: 32, text: 'Skillnaden mellan de två största behandlingstyperna?', options: ['1 130 000 ton', '1 222 000 ton', '1 352 000 ton', '1 444 000 ton'], correct: 1, diagram: '/prov-dtk1-diagram2.png', diagramAlt: 'Hushållsavfall', rotate: false, category: 'diagram' },
      { num: 33, text: 'Vilken cirkel visar <i>Övrigt från återvinningscentral</i>?<div style="text-align:center;margin:1rem 0;"><img src="/prov-dtk1-33.png" alt="Cirkeldiagram" data-fadein style="max-width:450px;aspect-ratio:730/116;" /></div>', options: ['A', 'B', 'C', 'D'], correct: 1, diagram: '/prov-dtk1-diagram2.png', diagramAlt: 'Hushållsavfall', rotate: false, category: 'diagram' },
      { num: 34, text: 'Hur stor del av avfallet gick till <i>Energiåtervinning</i>?', options: ['1/2', '3/5', '3/4', '4/5'], correct: 1, diagram: '/prov-dtk1-diagram2.png', diagramAlt: 'Hushållsavfall', rotate: false, category: 'diagram' },
      { num: 35, text: 'Andel omhändertagna elever 1967 som var 15–16 år?', options: ['1/6', '1/5', '1/4', '1/3'], correct: 2, diagram: '/prov-dtk1-diagram3.png', diagramAlt: 'Ungdomsvårdsskolor', rotate: true, category: 'tabell' },
      { num: 36, text: 'Vilken orsak (flickor) förändrades mest 1965–1968 i procentenheter?', options: ['Biltillgrepp', 'Andra egendomsbrott', 'Sexuell vanart', 'Alkoholmissbruk'], correct: 2, diagram: '/prov-dtk1-diagram3.png', diagramAlt: 'Ungdomsvårdsskolor', rotate: true, category: 'tabell' },
      { num: 37, text: 'Hur länge hade en flicka från yrkesskola 1966 varit omhändertagen?', options: ['1 år 10 mån', '2 år 5 mån', '2 år 7 mån', '2 år 9 mån'], correct: 1, diagram: '/prov-dtk1-diagram3.png', diagramAlt: 'Ungdomsvårdsskolor', rotate: true, category: 'tabell' },
      { num: 38, text: 'Pojkar/misshandel minskade 8,8 procentenheter 1966–1968. Hur många pojkar?', options: ['30', '100', '180', '250'], correct: 1, diagram: '/prov-dtk1-diagram3.png', diagramAlt: 'Ungdomsvårdsskolor', rotate: true, category: 'tabell' },
      { num: 39, text: 'Andel medier i Stockholm, Skåne och Västra Götaland?', options: ['50%', '55%', '60%', '65%'], correct: 1, diagram: '/prov-dtk1-diagram4.png', diagramAlt: 'Biblioteksbestånd', rotate: true, category: 'diagram' },
      { num: 40, text: 'Skillnaden i medier: Jämtland vs Västerbotten?', options: ['545 000', '763 000', '925 000', '1 202 000'], correct: 2, diagram: '/prov-dtk1-diagram4.png', diagramAlt: 'Biblioteksbestånd', rotate: true, category: 'diagram' },
    ]
  }
];
