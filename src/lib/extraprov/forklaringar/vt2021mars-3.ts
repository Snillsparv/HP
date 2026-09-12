// Textförklaringar till högskoleprovet 13 mars 2021, provpass 3 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Multiplicera in: ${tex('2x - 12 = 8 - 4x')}.</p>
<p>${tex('6x = 20')} ger ${tex('x = \\frac{20}{6} = \\frac{10}{3}')}.</p>
<p>Svar B.</p>`,

  2: `<p>${tex('3x^2 - 12 = 0')} ger ${tex('x^2 = 4')}, alltså ${tex('x = 2')} eller ${tex('x = -2')}.</p>
<p>Bland alternativen finns 2.</p>
<p>Svar B.</p>`,

  3: `<p>20 procent är ${tex('\\frac{1}{5}')}. ${tex('\\frac{1}{5} \\cdot \\frac{1}{5} = \\frac{1}{25}')}.</p>
<p>Svar C.</p>`,

  4: `<p>Femhörningen är en rektangel med sidorna 10 och 8 cm där det övre vänstra hörnet är avskuret.</p>
<p>Den avskurna biten är en rätvinklig triangel med kateterna ${tex('10 - 4 = 6')} cm och ${tex('8 - 4 = 4')} cm, alltså arean ${tex('\\frac{6 \\cdot 4}{2} = 12')} cm<sup>2</sup>.</p>
<p>Arean är ${tex('10 \\cdot 8 - 12 = 68')} cm<sup>2</sup>.</p>
<p>Svar C.</p>`,

  5: `<p>Talen 1 till 10 är tio stycken, så medianen är medelvärdet av de två mittersta, 5 och 6.</p>
<p>${tex('\\frac{5 + 6}{2} = 5{,}5')}.</p>
<p>Svar C.</p>`,

  6: `<p>${tex('4^y = (2^2)^y = 2^{2y}')}, så ${tex('2^x \\cdot 4^y = 2^{x + 2y}')}.</p>
<p>${tex('16 = 2^4')}, alltså ${tex('x + 2y = 4')}.</p>
<p>Svar B.</p>`,

  7: `<p>Vinkelsumman i en fyrhörning är 360°, så ${tex('x + z')} och ${tex('y + w')} är tillsammans 360°.</p>
<p>Om ${tex('x + z > 180^\\circ')} måste ${tex('y + w < 180^\\circ')}. Det gäller alltid.</p>
<p>A säger något om <i>y</i> och <i>w</i> var för sig, vilket inte kan avgöras. C och D har fel riktning: om ${tex('x + z < 180^\\circ')} är ${tex('y + w > 180^\\circ')}.</p>
<p>Svar B.</p>`,

  8: `<p>Täljaren: ${tex('\\frac{3}{4} + \\frac{4}{3} = \\frac{9}{12} + \\frac{16}{12} = \\frac{25}{12}')}.</p>
<p>${tex('\\frac{25}{12} \\div \\frac{12}{5} = \\frac{25}{12} \\cdot \\frac{5}{12} = \\frac{125}{144}')}.</p>
<p>Svar D.</p>`,

  9: `<p>Multiplicera ut: ${tex('a \\cdot a^2 - a \\cdot ab + a \\cdot b^2 + b \\cdot a^2 - b \\cdot ab + b \\cdot b^2')}.</p>
<p>${tex('= a^3 - a^2b + ab^2 + a^2b - ab^2 + b^3 = a^3 + b^3')}. Termerna i mitten tar ut varandra.</p>
<p>Svar D.</p>`,

  10: `<p>${tex('g(x) = 2\\left(\\frac{x}{2} - 1\\right) + 3 = x - 2 + 3 = x + 1')}.</p>
<p>Grafen har lutningen 1 och skär <i>y</i>-axeln i 1. Det stämmer med graf A, som går genom (0, 1) och (−1, 0).</p>
<p>Graf B har lutningen 1 men skär <i>y</i>-axeln i 2. Graf C och D är brantare än 1.</p>
<p>Svar A.</p>`,

  11: `<p>25 % större: ${tex('1{,}25x')}. 25 % mindre: ${tex('0{,}75y')}.</p>
<p>${tex('1{,}25x = 0{,}75y')} ger ${tex('x = \\frac{0{,}75}{1{,}25}y = \\frac{3}{5}y')}.</p>
<p>Svar B.</p>`,

  12: `<p>${tex('75 = 3 \\cdot 5^2')}. För att ${tex('75x')} ska vara en kvadrat måste varje primfaktor förekomma ett jämnt antal gånger, så det saknas en faktor 3.</p>
<p>${tex('x = 3')} ger ${tex('225 = 15^2')}. Mindre värden på <i>x</i> än 3 fungerar inte (1 ger 75 och 2 ger 150).</p>
<p>Svar A.</p>`,

  // KVA
  13: `<p>${tex('f\\left(-\\frac{1}{2}\\right) = -4 \\cdot \\left(-\\frac{1}{2}\\right) + 2 = 2 + 2 = 4')}, vilket är större än 0.</p>
<p>Svar A.</p>`,

  14: `<p>${tex('\\sqrt{9} + 1 = 3 + 1 = 4')}, så kvantitet I är ${tex('\\left(\\sqrt{x}\\right)^4')}, precis som kvantitet II.</p>
<p>Svar C.</p>`,

  15: `<p>0,97 är mindre än 1, och ett sådant tal blir bara mindre när det upphöjs till en positiv potens: ${tex('0{,}97^{97} < 1')}.</p>
<p>1,07 är större än 1, så ${tex('1{,}07^7 > 1')}.</p>
<p>Svar B.</p>`,

  16: `<p>Vinkelsumman är 180°. Om alla tre vinklar är olika kan den minsta inte vara 60° eller mer, för då skulle summan bli mer än 180°.</p>
<p>Den minsta vinkeln är alltså mindre än 60°, och därmed mindre än 75°.</p>
<p>Svar B.</p>`,

  17: `<p>De tvåsiffriga talen är 10 till 99, alltså 90 stycken av 190.</p>
<p>${tex('\\frac{90}{190} \\approx 0{,}47')}, mindre än 50 %.</p>
<p>Svar B.</p>`,

  18: `<p>Linjen A: ${tex('k_A = \\frac{3 - 2}{2 - 1} = 1')}.</p>
<p>En vinkelrät linje har riktningskoefficienten ${tex('k_B = -\\frac{1}{k_A} = -1')}.</p>
<p>Svar A.</p>`,

  19: `<p>1 liter = 1 dm<sup>3</sup> = 1 000 cm<sup>3</sup>, så 159 liter = 159 000 cm<sup>3</sup>.</p>
<p>Det är mycket mer än 15 900 cm<sup>3</sup>.</p>
<p>Svar A.</p>`,

  20: `<p>Produkten kan vara så liten som ${tex('100 \\cdot 10 = 1\\,000')} (fyrsiffrig) och så stor som ${tex('999 \\cdot 99 = 98\\,901')} (femsiffrig).</p>
<p>Ett fyrsiffrigt tal kan vara både mindre, lika stort och större, så jämförelsen kan inte avgöras.</p>
<p>Svar D.</p>`,

  21: `<p>${tex('\\pi r^2 = \\pi^3')} ger ${tex('r^2 = \\pi^2')}, alltså ${tex('r = \\pi')}.</p>
<p>Radien är π cm, lika med kvantitet II.</p>
<p>Svar C.</p>`,

  22: `<p>Kalla ${tex('t = \\frac{x}{y}')}, ett positivt tal. Villkoret säger ${tex('\\sqrt{t} = t')}, alltså ${tex('t = t^2')}, vilket för ett positivt tal bara gäller när ${tex('t = 1')}.</p>
<p>Då är ${tex('x = y')} och ${tex('\\frac{2y}{x} = 2')}.</p>
<p>Svar C.</p>`,

  // NOG
  23: `<p>(1) säger att 2 minuter motsvarar 1/5 av sträckan och 5 minuter hälften, men inget om hur långt hon kör per minut. (2) säger bara att hastigheten är konstant.</p>
<p>Även tillsammans saknas uppgift om hastigheten eller om någon sträcka i meter eller kilometer, så längden kan inte beräknas.</p>
<p>Svar E.</p>`,

  24: `<p>(1): ${tex('28 \\cdot 9 = 252')} knappar. Tillräcklig.</p>
<p>(2): 56 är 25 % av det som är kvar, så det finns ${tex('56 \\cdot 4 = 224')} kvar och ${tex('224 + 28 = 252')} totalt. Tillräcklig.</p>
<p>Svar D.</p>`,

  25: `<p>(1) ger sockrets vikt per volym men inte burkens volym. (2) ger volymen men inte vad sockret väger.</p>
<p>Tillsammans: 70 % av 1,5 liter är 1,05 liter = 10,5 dl socker, som väger ${tex('10{,}5 \\cdot 90 = 945')} g. Burken väger ${tex('1\\,250 - 945 = 305')} g.</p>
<p>Svar C.</p>`,

  26: `<p>Det finns 24 mörka och 36 ljusa stenar.</p>
<p>(1): ${tex('24 - 12 = 12')} mörka stenar är släta, men antalet ljusa släta är okänt. (2): lika många ljusa som mörka släta, men antalet är okänt.</p>
<p>Tillsammans: ${tex('12 + 12 = 24')} släta stenar.</p>
<p>Svar C.</p>`,

  27: `<p>(1): ${tex('a = b')} säger inget om <i>c</i>, så triangeln kan vara liksidig eller inte.</p>
<p>(2): ${tex('c \\neq a')} betyder att inte alla sidor är lika, så triangeln är inte liksidig. Frågan kan besvaras med nej.</p>
<p>Svar B.</p>`,

  28: `<p>(1): två på varandra följande udda heltal med summan 36 är 17 och 19, så ${tex('xy = 323')}. Tillräcklig.</p>
<p>(2): positiva heltal med summan 36 kan vara 1 och 35, 2 och 34 och så vidare, med olika produkter.</p>
<p>Svar A.</p>`,

  // DTK
  29: `<p>Kurvan stiger tydligt från 2009/10 till 2010/11 och sjunker sedan märkbart.</p>
<p>Örebro län: 486, 599 och 564. Gotlands län (115, 116, 143) och Västernorrlands län (393, 427, 475) ökade hela tiden, och Hallands län (335, 424, 420) låg nästan stilla det sista året.</p>
<p>Svar C.</p>`,

  30: `<p>Extra tillägg, män: ${tex('416 + 456 + 629 = 1\\,501')}. Kvinnor: ${tex('196 + 251 + 319 = 766')}.</p>
<p>Skillnaden är ${tex('1\\,501 - 766 = 735')}.</p>
<p>Svar C.</p>`,

  31: `<p>Östergötlands län: 2010/11 var det 290 kvinnor (fler än 250), och 2009/10 var det 408 män mot 201 kvinnor, mer än dubbelt.</p>
<p>Skåne (906 kvinnor, 1 435 män) och Västra Götaland (760 och 1 500) når inte dubbelt, och Västmanland hade bara 176 kvinnor 2010/11.</p>
<p>Svar A.</p>`,

  32: `<p>I pulsdiagrammet når fotbollsspelaren före träningsperioden maximal puls vid 20 km per timme, och den otränade personen vid 15 km per timme.</p>
<p>Skillnaden är 5 km per timme.</p>
<p>Svar B.</p>`,

  33: `<p>Vid medelhårt arbete omsätts ungefär 20 kJ per minut från fett (den mindre stapeln, 33 %).</p>
<p>På en timme: ${tex('20 \\cdot 60 = 1\\,200')} kJ.</p>
<p>Svar A.</p>`,

  34: `<p>Hårt arbete: ungefär ${tex('92 + 2 = 94')} kJ per minut. Lätt arbete: ${tex('17 + 17 = 34')} kJ per minut.</p>
<p>Skillnaden är ungefär 60 kJ per minut.</p>
<p>Svar B.</p>`,

  35: `<p>Den största sektorn i varje ring: antal fartyg Grekland (EL, ungefär en femtedel), tonnage Spanien (ES, ungefär en fjärdedel) och maskinkraft Italien (IT, knappt en femtedel).</p>
<p>Svar A.</p>`,

  36: `<p>I ringen för antal fartyg är Portugal (PT) ungefär 11 %, Storbritannien (UK) ungefär 7 % och Finland (FI) ungefär 3 %.</p>
<p>Tillsammans ungefär 21 %, närmast 1/5.</p>
<p>Svar C.</p>`,

  37: `<p>Maskinkraft: Frankrike (FR) har ungefär 15 % av 7 287 224 kW, alltså ungefär 1 090 000 kW. Portugal (PT) har ungefär 5 %, alltså ungefär 360 000 kW.</p>
<p>Skillnaden är ungefär 700 000 kW, närmast 685 000 kW.</p>
<p>Svar C.</p>`,

  38: `<p>I det första diagrammet, perioden 1751–60: 1–2 år ungefär 50 per tusen, 5–9 år ungefär 13 per tusen.</p>
<p>Skillnaden är ungefär 37 per tusen barn.</p>
<p>Svar B.</p>`,

  39: `<p>1931–40: flickornas kurva ligger under pojkarnas, städernas kurva ligger under landsbygdens (de korsade varandra omkring 1921–30), och de inomäktenskapliga barnens kurva ligger under de utomäktenskapligas.</p>
<p>Störst chans hade alltså en flicka född i staden inom äktenskapet.</p>
<p>Svar D.</p>`,

  40: `<p>I diagrammet över pojkar och flickor är spädbarnsdödligheten som högst 1761–70 (ungefär 225 respektive 205 per tusen).</p>
<p>Svar A.</p>`,
};
