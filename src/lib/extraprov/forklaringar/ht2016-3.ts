// Textförklaringar till högskoleprovet 29 oktober 2016, provpass 3 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Båda termerna innehåller faktorn ${tex('xy')}: ${tex('3xy^2 + 2x^2y = xy(3y + 2x)')}.</p>
<p>Svar A.</p>`,

  2: `<p>Vinkelsumman i en fyrhörning är 360°. Om A + C = 210° är B + D = 150°. Hur vinklarna fördelas inbördes går inte att veta.</p>
<p>Svar C.</p>`,

  3: `<p>En punkt ligger mellan linjerna om ${tex('x - 3 < y < x + 3')}. För (0, 0): ${tex('-3 < 0 < 3')}, vilket stämmer. (4, 0) ligger under ${tex('y = x - 3')}, (0, −4) också, och (4, −4) likaså.</p>
<p>Svar A.</p>`,

  4: `<p>${tex('11x - 11y = 11(x - y) = 42')} ger ${tex('x - y = \\frac{42}{11}')}.</p>
<p>Svar D.</p>`,

  5: `<p>A målar ${tex('\\frac{1}{6}')} av planket per timme, så efter två timmar återstår ${tex('\\frac{2}{3}')}. B målar ${tex('\\frac{1}{4}')} per timme och behöver ${tex('\\frac{2}{3} \\cdot 4 = \\frac{8}{3}')} timmar, alltså 160 minuter.</p>
<p>Svar C.</p>`,

  6: `<p>${tex('\\frac{1}{2} + \\frac{1}{10} = \\frac{5}{10} + \\frac{1}{10} = \\frac{6}{10} = \\frac{3}{5}')}.</p>
<p>Svar B.</p>`,

  7: `<p>${tex('\\frac{3}{12} = \\frac{1}{4}')}, så ${tex('5x = \\frac{1}{4} - 4 = -\\frac{15}{4}')} och ${tex('x = -\\frac{3}{4}')}.</p>
<p>Svar A.</p>`,

  8: `<p>Gruppens sammanlagda ålder är ${tex('10 \\cdot 18 = 180')} år. Efter att två lämnat är den ${tex('8 \\cdot 10 = 80')} år. De två som lämnade var tillsammans 100 år, så den andra personen är ${tex('100 - 80 = 20')} år.</p>
<p>Svar D.</p>`,

  9: `<p>${tex('6 - 5 \\cdot 5 - (3 - 2) = 6 - 25 - 1 = -20')}.</p>
<p>Svar B.</p>`,

  10: `<p>FECD och ABCD har samma bredd, så areornas förhållande är höjdernas: ${tex('\\frac{3}{x + 3} = \\frac{1}{9}')}. Det ger ${tex('x + 3 = 27')}, alltså ${tex('x = 24')} cm.</p>
<p>Svar D.</p>`,

  11: `<p>${tex('\\left(2\\sqrt{2}\\right)^2 = 2^2 \\cdot \\left(\\sqrt{2}\\right)^2 = 4 \\cdot 2 = 8')}.</p>
<p>Svar C.</p>`,

  12: `<p>Grafen skär x-axeln i ${tex('x = 2')}, så ${tex('a \\cdot 2^2 - \\frac{3}{2} = 0')}, vilket ger ${tex('4a = \\frac{3}{2}')} och ${tex('a = \\frac{3}{8}')}.</p>
<p>Svar B.</p>`,

  // KVA
  13: `<p>${tex('-7x - 7 = -8x')} ger ${tex('x = 7')}, vilket är större än 0.</p>
<p>Svar A.</p>`,

  14: `<p>I: ${tex('12^2 = 144')}. II: ${tex('\\frac{81}{9} \\cdot 4 = 36')}. I är större.</p>
<p>Svar A.</p>`,

  15: `<p>Vinkelsumman är 180°, så ${tex('x')} och den tredje vinkeln är tillsammans 83°. Eftersom den tredje vinkeln är större än 0 måste ${tex('x')} vara mindre än 83°.</p>
<p>Svar B.</p>`,

  16: `<p>${tex('x + y + z = w')} och ${tex('y + z + w = x')}. Subtraktion ger ${tex('x - w = w - x')}, alltså ${tex('x = w')} och därmed ${tex('y + z = 0')}. Det säger inte vilket av ${tex('y')} och ${tex('z')} som är störst.</p>
<p>Svar D.</p>`,

  17: `<p>I: ${tex('72 - 28 = 44')}. II: ${tex('(18 - 7) \\cdot 4 = 44')}. Lika.</p>
<p>Svar C.</p>`,

  18: `<p>Summan ${tex('1 + \\frac{1}{2} + \\dots + \\frac{1}{64}')} är ${tex('2 - \\frac{1}{64}')}, strax under 2. Multiplicerat med 2 blir det strax under 4, medan ${tex('2^2 = 4')}.</p>
<p>Svar B.</p>`,

  19: `<p>${tex('x - y = y - x')} ger ${tex('x = y')}. Då är I ${tex('\\frac{3x}{3x} = 1')} och II ${tex('\\frac{3y}{3y} = 1')}.</p>
<p>Svar C.</p>`,

  20: `<p>En rektangel med arean 40 cm² kan vara hur lång och smal som helst, och detsamma gäller en triangel med arean 20 cm². Ingen av sidorna är bestämd.</p>
<p>Svar D.</p>`,

  21: `<p>${tex('2x - 10 = -\\frac{x}{3} + 11')} ger ${tex('\\frac{7x}{3} = 21')}, alltså ${tex('x = 9')} och ${tex('y = 2 \\cdot 9 - 10 = 8')}. Så ${tex('a = 9')} och ${tex('b = 8')}.</p>
<p>Svar A.</p>`,

  22: `<p>${tex('210_{\\text{fem}} = 2 \\cdot 25 + 1 \\cdot 5 + 0 = 55')}. ${tex('110111_{\\text{två}} = 32 + 16 + 0 + 4 + 2 + 1 = 55')}. Lika.</p>
<p>Svar C.</p>`,

  // NOG
  23: `<p>(1): röd, grön och vit står intill varandra med röd i mitten, och blå står i någon ände. Ellas cykel kan vara vit, grön eller blå. (2) ensamt ger många möjligheter. Tillsammans: blå direkt till vänster om vit ger ordningen blå, vit, röd, grön. Ellas cykel är grön.</p>
<p>Svar C.</p>`,

  24: `<p>Varken (1) eller (2) ger något absolut antal elever. Även tillsammans går det bara att ställa upp samband mellan grupperna, inte bestämma totalen.</p>
<p>Svar E.</p>`,

  25: `<p>(1) ger ${tex('y = 20')} eller ${tex('y = -20')} men inget om ${tex('x')}. (2) ger inget om ${tex('y')}. Tillsammans: om ${tex('y = 20')} är ${tex('xy')} mellan 10 och 20, och om ${tex('y = -20')} är ${tex('xy')} negativt. I båda fallen är ${tex('xy < 25')}.</p>
<p>Svar C.</p>`,

  26: `<p>(1) ger bara diagonalen, (2) bara förhållandet mellan sidorna. Tillsammans: sidorna förhåller sig som 3:4 och diagonalen är 10, så sidorna är 6 och 8 (en 3-4-5-triangel) och arean 48 cm².</p>
<p>Svar C.</p>`,

  27: `<p>(1): ${tex('3x = 12')} ger ${tex('x = 4')}. (2): ${tex('x^2 = 4x')} ger ${tex('x = 4')} eftersom ${tex('x > 0')}. Var för sig räcker.</p>
<p>Svar D.</p>`,

  28: `<p>Sidorna är framsidan (1), uppslag 1 (sidorna 2 och 3), uppslag 2 (sidorna 4 och 5) och baksidan (6). (1): katten kan vara på sida 4 eller 5, så det räcker inte. (2): räven och älgen ligger efter katten, som ligger efter geten, som delar uppslag med fåret. Då måste katten vara på sida 4, geten och fåret på uppslag 1 och räven och älgen på sidorna 5 och 6. (2) räcker ensamt.</p>
<p>Svar B.</p>`,

  // DTK
  29: `<p>Kvinnor ägde 1 113 527 bilar och män 2 201 019, totalt cirka 3,3 miljoner. Kvinnornas andel är ${tex('\\frac{1{,}11}{3{,}31} \\approx 0{,}34')}, ungefär en tredjedel.</p>
<p>Svar C.</p>`,

  30: `<p>Bland kvinnornas tio vanligaste märken finns Nissan och Peugeot, som saknas i männens lista. Opel och Renault finns i båda listorna.</p>
<p>Svar D.</p>`,

  31: `<p>Kvinnornas index var cirka 245 år 2004, alltså 2,45 gånger antalet 1972. ${tex('\\frac{1\\,113\\,527}{2{,}45} \\approx 455\\,000')}.</p>
<p>Svar A.</p>`,

  32: `<p>Störst andel slutenvårdade kvinnor hade ridsport (18 procent) och minst löpning (2 procent). ${tex('\\frac{18}{2} = 9')} gånger så vanligt.</p>
<p>Svar B.</p>`,

  33: `<p>Gå och promenera: 48 000 vårddygn på ${tex('17\\,200 + 26\\,800 = 44\\,000')} skadade, alltså ${tex('\\frac{48\\,000}{44\\,000} \\approx 1{,}1')} vårddygn per skadad.</p>
<p>Svar B.</p>`,

  34: `<p>Gör det själv: 8 procent av 23 000 män är 1 840 och 10 procent av 4 000 kvinnor är 400. Tillsammans cirka 2 240, närmast 2 200.</p>
<p>Svar C.</p>`,

  35: `<p>24 000 av 73 000 skadade män inom sport och idrott skadades vid fotboll. ${tex('\\frac{24\\,000}{73\\,000} \\approx 0{,}33')}, ungefär 1/3.</p>
<p>Svar D.</p>`,

  36: `<p>Italiens cirkel motsvarar över 200 TWh och är helt mörk, alltså bara övriga energikällor. Grekland och Österrike hade under 100 TWh, och Nederländerna hade 4,3 procent kärnkraft.</p>
<p>Svar B.</p>`,

  37: `<p>Storbritanniens cirkel motsvarar ungefär 380 TWh och Sveriges ungefär 160 TWh. Skillnaden är cirka 200 TWh.</p>
<p>Svar C.</p>`,

  38: `<p>Helt mörka cirklar, utan kärnkraft, har Luxemburg, Irland, Danmark, Österrike, Italien, Grekland och Portugal. Det är sju länder.</p>
<p>Svar C.</p>`,

  39: `<p>Fältet för samtal till mobiltelefon var ungefär lika brett eller bredare 2012 än 2001 (cirka 4 000 mot cirka 2 700 miljoner minuter), medan nationell trafik, internet och övrigt minskade kraftigt.</p>
<p>Svar C.</p>`,

  40: `<p>2011 var det totala antalet trafikminuter från mobiltelefoner cirka 23 500 miljoner, varav samtal till fast telefon cirka 5 800 miljoner. ${tex('\\frac{5\\,800}{23\\,500} \\approx 0{,}25')}, en fjärdedel.</p>
<p>Svar B.</p>`,
};
