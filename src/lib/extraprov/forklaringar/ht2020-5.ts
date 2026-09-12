// Textförklaringar till högskoleprovet 25 oktober 2020, provpass 5 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Multiplicera in: ${tex('6x + 15 + 14 - 6x')}.</p>
<p>Termerna med <i>x</i> tar ut varandra: ${tex('15 + 14 = 29')}.</p>
<p>Svar A.</p>`,

  2: `<p>Funktionen är positiv där grafen ligger ovanför <i>x</i>-axeln. Grafen skär <i>x</i>-axeln i ${tex('x = 1')} och ${tex('x = 5')} och ligger ovanför mellan dessa.</p>
<p>${tex('1 < x < 5')}.</p>
<p>Svar D.</p>`,

  3: `<p>${tex('\\pi r^2 = 27')} ger ${tex('r^2 = \\frac{27}{\\pi} \\approx 8{,}6')}.</p>
<p>${tex('r \\approx 2{,}9')}, närmast 3 cm.</p>
<p>Svar B.</p>`,

  4: `<p>${tex('2a')} % av ${tex('0{,}5x')} är ${tex('\\frac{2a}{100} \\cdot 0{,}5x = \\frac{a}{100} \\cdot x')}, alltså <i>a</i> % av <i>x</i>, vilket är <i>y</i>.</p>
<p>Svar B.</p>`,

  5: `<p>Medianen av fem värden är det mittersta värdet. Om alla värden är heltal är medianen ett av dem, alltså ett heltal (D).</p>
<p>A och B: värdena 0,5 och 1,5 ger medelvärde och median som är heltal utan att värdena är det. C: 1, 1, 1, 1, 2 har medelvärdet 1,2.</p>
<p>Svar D.</p>`,

  6: `<p>Bryt ut <i>x</i>: ${tex('x(a + b) = 1')}.</p>
<p>${tex('x = \\frac{1}{a + b}')}.</p>
<p>Svar D.</p>`,

  7: `<p>Antalet pärlor måste vara delbart med 7.</p>
<p>${tex('245 = 7 \\cdot 35')}. 241, 247 och 249 är inte delbara med 7 (${tex('7 \\cdot 34 = 238')}, ${tex('7 \\cdot 36 = 252')}).</p>
<p>Svar B.</p>`,

  8: `<p>Addera exponenterna i täljaren och subtrahera nämnarens.</p>
<p>A: ${tex('10^{2 - 5 + 3} = 10^0 = 1')}. B: ${tex('10^{-3 - 5 - 2} = 10^{-10}')}. C: ${tex('10^{2 - 3 + 5} = 10^4')}. D: ${tex('10^{-5 - 2 + 3} = 10^{-4}')}.</p>
<p>Svar C.</p>`,

  9: `<p>Den stora kvadratens area är 100 cm<sup>2</sup>, så ${tex('x^2 = 50')}.</p>
<p>${tex('x = \\sqrt{50}')}.</p>
<p>Svar D.</p>`,

  10: `<p>Multiplikation först: ${tex('\\frac{3}{2} \\cdot \\frac{1}{5} = \\frac{3}{10} = \\frac{6}{20}')}.</p>
<p>${tex('\\frac{7}{20} - \\frac{6}{20} = \\frac{1}{20}')}.</p>
<p>Svar B.</p>`,

  11: `<p>Grafen skär <i>x</i>-axeln där ${tex('f(x) = 0')}: ${tex('\\frac{x}{4} = \\frac{3}{2}')} ger ${tex('x = 6')}.</p>
<p>Punkten är (6, 0).</p>
<p>Svar D.</p>`,

  12: `<p>${tex('a^{-2} = \\frac{1}{a^2} = 16')} ger ${tex('a^2 = \\frac{1}{16}')}, alltså ${tex('a = \\frac{1}{4}')} eller ${tex('a = -\\frac{1}{4}')}.</p>
<p>Svar C.</p>`,

  // KVA
  13: `<p>Samma procentsats ger 73 av <i>y</i> men bara 37 av <i>z</i>, så <i>y</i> måste vara större än <i>z</i>.</p>
<p>Svar A.</p>`,

  14: `<p>Omkretsen är summan av de tre sidorna. Summan delad med 3 är precis medelvärdet av sidlängderna.</p>
<p>Svar C.</p>`,

  15: `<p>I: ${tex('\\frac{1}{6} \\div 6 = \\frac{1}{36}')}. II: ${tex('6 \\div \\frac{1}{6} = 36')}.</p>
<p>Svar B.</p>`,

  16: `<p>Albin = 2(Edvin + Levi) = 2 · Edvin + 2 · Levi. Jämfört med 3 · Edvin beror det på om 2 · Levi är större än Edvin.</p>
<p>Om Edvin är 10 och Levi 1 är Albin 22, mindre än 30. Om Levi är 10 är Albin 40, större än 30.</p>
<p>Svar D.</p>`,

  17: `<p>Ett tal större än 1 upphöjt till något blir 1 bara när exponenten är 0.</p>
<p>${tex('y + 1 = 0')} ger ${tex('y = -1')}, vilket är mindre än 0.</p>
<p>Svar B.</p>`,

  18: `<p>Den överlappande ytan är samma yta för båda kvadraterna: ${tex('0{,}25 \\cdot K_1 = 0{,}20 \\cdot K_2')}.</p>
<p>Då är ${tex('K_1 = 0{,}8 \\cdot K_2')}, så K<sub>2</sub> är större.</p>
<p>Svar B.</p>`,

  19: `<p>I: ${tex('3{,}13\\pi + 3{,}13 \\cdot 3{,}15')}. II: ${tex('3{,}15 \\cdot 3{,}13 + 3{,}15\\pi')}.</p>
<p>Produkten ${tex('3{,}13 \\cdot 3{,}15')} finns i båda, och ${tex('3{,}15\\pi > 3{,}13\\pi')}.</p>
<p>Svar B.</p>`,

  20: `<p>${tex('x^2 + y^2 + 2xy = (x + y)^2 = 0^2 = 0')}.</p>
<p>${tex('x^2 + y^2')} är positivt eftersom varken <i>x</i> eller <i>y</i> är 0.</p>
<p>Svar A.</p>`,

  21: `<p>En rät linje genom origo har formen ${tex('f(x) = kx')}, så ${tex('f(a) = ka')} och ${tex('f(-a) = -ka')}.</p>
<p>Om <i>k</i> är positivt är I störst, om <i>k</i> är negativt är II störst.</p>
<p>Svar D.</p>`,

  22: `<p>Summan av de fyra värdena är ${tex('4 \\cdot (-1) = -4')}.</p>
<p>${tex('-5 + x + y + 3 = -4')} ger ${tex('x + y = -2')}, vilket är mindre än −1.</p>
<p>Svar B.</p>`,

  // NOG
  23: `<p>(1): ben = 7 · huvud, men huvudets vikt är okänd.</p>
<p>(2): huvud = 5 kg, men benens vikt är okänd.</p>
<p>Tillsammans: huvud 5 kg, ben 35 kg, mage 20 kg, totalt 60 kg.</p>
<p>Svar C.</p>`,

  24: `<p>(1): A1 + B1 = 30 och B2 = 23, men A2 är okänt.</p>
<p>(2): A2 + B1 = 36 och A1 = 13, men B2 är okänt.</p>
<p>Tillsammans: A1 = 13 ger B1 = 17, sedan A2 = 19, och summan är ${tex('13 + 17 + 19 + 23 = 72')}.</p>
<p>Svar C.</p>`,

  25: `<p>(1): summan av <i>x</i> och <i>z</i> är störst, men det största enskilda talet kan finnas i vilket par som helst.</p>
<p>(2): <i>x</i> eller <i>y</i> är störst, men vilket är okänt.</p>
<p>Tillsammans: med 10, 1, 9, 1 (för <i>x</i>, <i>z</i>, <i>y</i>, <i>w</i>) är <i>x</i> störst, men med 5, 4, 8, 0 är <i>y</i> störst.</p>
<p>Svar E.</p>`,

  26: `<p>(1): överst ligger blå eller grå, och blå ligger under grå, så grå ligger överst. Tillräcklig.</p>
<p>(2): röd och vit ligger inte längst ner, så blå eller grå ligger längst ner. Ordningen nerifrån kan vara blå, röd, vit, grå (grå överst) eller grå, blå, röd, vit (vit överst).</p>
<p>Svar A.</p>`,

  27: `<p>Vinkeln vid B är rät, så A ligger på samma höjd som B: ${tex('A = (a,\\ 3)')}. Kateten BC är 5.</p>
<p>(1): arean ${tex('\\frac{AB \\cdot 5}{2} = 30')} ger ${tex('AB = 12')}, så ${tex('a = 4 - 12 = -8')}. Tillräcklig.</p>
<p>(2): ${tex('AB^2 + 5^2 = 13^2')} ger ${tex('AB = 12')} och samma punkt (−8, 3). Tillräcklig.</p>
<p>Svar D.</p>`,

  28: `<p>(1): ${tex('x^4 = \\sqrt{x}')} gäller för positiva heltal bara när ${tex('x = 1')}. Tillräcklig.</p>
<p>(2): ${tex('\\frac{k}{x} = k')} ger ${tex('x = 1')}. Tillräcklig.</p>
<p>Svar D.</p>`,

  // DTK
  29: `<p>Indien var vanligast 1975 och 1978–1979, och antalet var ungefär 320 år 1979 mot 240 år 1977.</p>
<p>Sydkorea och Thailand var vanligast vissa år men hade färre 1979 än 1977, och Sri Lanka var aldrig vanligast.</p>
<p>Svar A.</p>`,

  30: `<p>Totalt: ungefär 1 220 (1975), 1 530 (1976), 1 350 (1977), 1 220 (1978) och 1 250 (1979).</p>
<p>Summan är ungefär 6 570, närmast 6 500.</p>
<p>Svar D.</p>`,

  31: `<p>2011: totalt ungefär 11 700 miljoner kronor, varav investeringar ungefär 4 800 och löpande kostnader ungefär 6 900.</p>
<p>${tex('\\frac{6\\,900}{11\\,700} \\approx 0{,}59')}, ungefär 60 procent.</p>
<p>Svar C.</p>`,

  32: `<p>1 900 miljoner per år under 11 år är ungefär 21 000 miljoner totalt.</p>
<p>Luft (den svarta delen) ligger på 1 400 till 3 200 per år, ungefär 21 000 sammanlagt. Vatten ligger på ungefär 1 000 per år, avfall och övrigt betydligt lägre.</p>
<p>Svar D.</p>`,

  33: `<p>2007: luft ungefär 800, vatten 1 500, avfall 1 900 och övrigt 2 300, alltså i stigande ordning.</p>
<p>2003 och 2005 var övrigt mindre än avfall, och 2009 var vatten större än avfall.</p>
<p>Svar C.</p>`,

  34: `<p>Löpande kostnader över 6 000: 2007 till 2012.</p>
<p>Av dessa år var investeringarna under 4 000 bara 2007, 2008 och 2009 (2010 till 2012 låg de över 4 000).</p>
<p>Svar A.</p>`,

  35: `<p>Bredare än 3 m och längre än 17 m är bara båt 17 (21 m, 5,5 till 6 m) och båt 19 (20 m, 5,5 m).</p>
<p>Gråmunkebrons östra fäste ligger vid Gråmunketornet. Båt 17 ligger ungefär 55 m därifrån enligt skalan, båt 19 ligger längre bort.</p>
<p>Svar B.</p>`,

  36: `<p>De prickade strandlinjerna från år 1300 ligger på ömse sidor om kanalen. Mät det kortaste avståndet mellan dem med skalan (100 meter är ungefär 3 cm på kartan).</p>
<p>Där sundet är som smalast, i höjd med Gråmunkebron, är avståndet ungefär 80 meter.</p>
<p>Svar C.</p>`,

  37: `<p>50 meter är ungefär hälften av skalstrecket. Från Tottska husets nordligaste punkt når en sådan radie båtarna 7, 8, 9, 10, 11, 12, 13, 14, 15 och 16.</p>
<p>Båtarna 6 och 18 ligger utanför.</p>
<p>Svar B.</p>`,

  38: `<p>1998 ökade alla fem: nationella 866 694 till 931 987, regionala 1 573 780 till 1 574 438, övriga 30 451 till 32 575, fria teatergrupper 158 780 till 176 216 och fria dansgrupper 13 568 till 23 434.</p>
<p>2000, 2002 och 2004 minskade minst en typ.</p>
<p>Svar A.</p>`,

  39: `<p>Fria teatergrupper gav flest föreställningar 1999: 8 151. Samma år hade de 676 019 besök.</p>
<p>${tex('\\frac{676\\,019}{8\\,151} \\approx 83')}.</p>
<p>Svar A.</p>`,

  40: `<p>Cirkeln har en sektor på ungefär en fjärdedel, en på ungefär 60 procent, en på ungefär 10 procent och två mycket små.</p>
<p>Årsverken 2003: 1 081, 2 582, 62, 422 och 61 av 4 208, alltså 26, 61, 1, 10 och 1 procent. Intäkterna ger 30 procent för nationella institutioner, besöken 25 och 49 procent, och antalet grupper 49 procent för fria teatergrupper.</p>
<p>Svar C.</p>`,
};
