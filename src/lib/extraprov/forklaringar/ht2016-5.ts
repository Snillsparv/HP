// Textförklaringar till högskoleprovet 29 oktober 2016, provpass 5 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>${tex('13 - x = -24')} ger ${tex('x = 13 + 24 = 37')}.</p>
<p>Svar D.</p>`,

  2: `<p>Linjen skär y-axeln i 1 och x-axeln i −2, så den har ekvationen ${tex('y = \\frac{x}{2} + 1')}. För ${tex('x = -6')} blir ${tex('y = -3 + 1 = -2')}, så (−6, −2) ligger på linjen. De andra punkterna ger ${tex('y = 0')}, ${tex('y = 2{,}5')} respektive ${tex('y = 2')}.</p>
<p>Svar A.</p>`,

  3: `<p>Kalle har ${tex('18 \\cdot 35 = 630')} kulor. Med 30 i varje burk behövs ${tex('\\frac{630}{30} = 21')} burkar, alltså 3 fler.</p>
<p>Svar B.</p>`,

  4: `<p>${tex('\\frac{7x^2 + 91x}{7x} = \\frac{7x^2}{7x} + \\frac{91x}{7x} = x + 13')}.</p>
<p>Svar C.</p>`,

  5: `<p>${tex('4 \\cdot 10^6 \\cdot 2{,}5 \\cdot 10^{-6} = 4 \\cdot 2{,}5 = 10 = 10^1')}.</p>
<p>Svar A.</p>`,

  6: `<p>Dra en hjälplinje genom spetsen parallell med L<sub>1</sub> och L<sub>2</sub>. Vinkeln mellan hjälplinjen och den övre linjen är ${tex('\\frac{2x}{3}')} (alternatvinkel), så vinkeln mellan hjälplinjen och den nedre linjen är ${tex('x - \\frac{2x}{3} = \\frac{x}{3}')}. Den är i sin tur alternatvinkel till ${tex('v')}.</p>
<p>Svar C.</p>`,

  7: `<p>Kvoten mellan ett negativt och ett positivt tal är alltid negativ, så ${tex('\\frac{x}{y} < 0')}. B gäller inte om till exempel ${tex('x = -3')} och ${tex('y = 1')}, C gäller bara om ${tex('y = -x')}, och D är alltid falskt.</p>
<p>Svar A.</p>`,

  8: `<p>${tex('\\frac{1}{x} + \\frac{1}{y} = \\frac{x + y}{xy}')}, så uttrycket är ${tex('\\frac{(x - y)(x + y)}{xy} = \\frac{x^2 - y^2}{xy}')}.</p>
<p>Svar C.</p>`,

  9: `<p>Kvadratens area är ${tex('4^2 = 16')} cm². Cirkelsektorn är tre fjärdedelar av en cirkel med radien 4: ${tex('\\frac{3}{4} \\cdot \\pi \\cdot 4^2 = 12\\pi')} cm². Totalt ${tex('(12\\pi + 16)')} cm².</p>
<p>Svar D.</p>`,

  10: `<p>${tex('(-4)^{-1} = -\\frac{1}{4}')}, ${tex('(-2)^{-2} = \\frac{1}{4}')}, ${tex('(-1)^0 = 1')} och ${tex('3^2 = 9')}. Summan är ${tex('-\\frac{1}{4} + \\frac{1}{4} + 1 - 9 = -8')}.</p>
<p>Svar B.</p>`,

  11: `<p>${tex('\\frac{1 + 2x + 5 + 2}{4} = \\frac{y}{2}')} ger ${tex('8 + 2x = 2y')}, alltså ${tex('x = y - 4')}.</p>
<p>Svar C.</p>`,

  12: `<p>${tex('f(-5) = \\frac{-1}{-9} = \\frac{1}{9}')}, ${tex('f(-2) = \\frac{2}{-6} = -\\frac{1}{3}')}, ${tex('f(0) = -1')} och ${tex('f(3) = \\frac{7}{-1} = -7')}. Störst är ${tex('f(-5)')}.</p>
<p>Svar A.</p>`,

  // KVA
  13: `<p>${tex('x')} är 4 eller −4. ${tex('y = \\sqrt{25} = 5')}. II är större i båda fallen.</p>
<p>Svar B.</p>`,

  14: `<p>Den stora kvadratens sida är ${tex('x + y')} (en rektangels längd plus en rektangels bredd). Hålets sida är ${tex('z = (x + y) - 2y = x - y')}. Lika.</p>
<p>Svar C.</p>`,

  15: `<p>${tex('\\frac{7{,}56}{7} = 1{,}08')} och ${tex('\\frac{98{,}1}{90} = 1{,}09')}. II är större.</p>
<p>Svar B.</p>`,

  16: `<p>${tex('f(-1) = \\frac{3}{4}')}, ${tex('f(0) = 3')} och ${tex('f(1) = 12')}. I: ${tex('3 - \\frac{3}{4} = 2{,}25')}. II: ${tex('12 - 3 = 9')}. II är större.</p>
<p>Svar B.</p>`,

  17: `<p>${tex('V_k = 64')}. ${tex('V_s = \\frac{4 \\cdot \\pi \\cdot 27}{3} = 36\\pi')}, så ${tex('\\frac{V_s}{2} = 18\\pi \\approx 56{,}5')}. I är större.</p>
<p>Svar A.</p>`,

  18: `<p>Eftersom ${tex('x + 1 > x > 0')} är ${tex('\\frac{1}{x + 1} < \\frac{1}{x}')}. II är större.</p>
<p>Svar B.</p>`,

  19: `<p>Medianen är Q. Med 1, 2, 3 är medelvärdet 2, lika med medianen. Med 1, 2, 9 är medelvärdet 4, större än medianen. Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  20: `<p>${tex('x^2 - y = 7y - x^2')} ger ${tex('2x^2 = 8y')}, alltså ${tex('x^2 = 4y')}. Med ${tex('y = 1')} är ${tex('x = 2')} eller ${tex('x = -2')}, medan ${tex('2y = 2')}. Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  21: `<p>De ${tex('n')} små cirklarna har tillsammans omkretsen ${tex('n \\cdot 2\\pi r = 2\\pi nr')}. Den stora cirkeln har omkretsen ${tex('2\\pi R = 2\\pi nr')}. Lika.</p>
<p>Svar C.</p>`,

  22: `<p>Låt antalet pojkar vara ${tex('p')} och flickor ${tex('f')}. Varje pojke har ${tex('p - 1')} bröder och ${tex('f')} systrar, så ${tex('p - 1 = f')}. Varje flicka har ${tex('p')} bröder och ${tex('f - 1')} systrar, så ${tex('p = 2(f - 1)')}. Det ger ${tex('f = 3')} och ${tex('p = 4')}. I: 8. II: 9.</p>
<p>Svar B.</p>`,

  // NOG
  23: `<p>(1): den näst minsta är röd, så den minsta är grön eller blå. (2): den största är grön, så den minsta är röd eller blå. Tillsammans: den största är grön och den näst minsta röd, så den minsta är blå.</p>
<p>Svar C.</p>`,

  24: `<p>(1) ger antalen men inte hur många sorter som är gemensamma. (2) ger bara andelar. Tillsammans: Eva har 4 egna sorter och 2 gemensamma, Torsten 2 egna och 2 gemensamma. Totalt ${tex('4 + 2 + 2 = 8')} sorter.</p>
<p>Svar C.</p>`,

  25: `<p>(1): antalet före är ${tex('\\frac{10}{11}')} av antalet efter, så de 9 bilderna är ${tex('\\frac{1}{11}')} av antalet efter, som därmed är 99. (2): 9 bilder är ${tex('\\frac{1}{10}')} av antalet före, som är 90, så antalet efter är 99. Var för sig räcker.</p>
<p>Svar D.</p>`,

  26: `<p>(1): om ${tex('x = y')} är ${tex('x + y = 2x')}, så svaret är ja. (2): ${tex('x = 6')} säger inget om ${tex('y')}. Endast (1) räcker.</p>
<p>Svar A.</p>`,

  27: `<p>Triangeln AED har basen AD = BC = 4 cm och höjden lika med rektangelns bredd CD, oavsett var E ligger på BC. (1) ger CD = ${tex('\\frac{19}{8} \\cdot 4 = 9{,}5')} cm och arean ${tex('\\frac{4 \\cdot 9{,}5}{2} = 19')} cm². (2) säger inget om bredden.</p>
<p>Svar A.</p>`,

  28: `<p>Det finns 56 röda bollar, och låda B har ${tex('11 - 7 = 4')} gröna. (1): låda A har 21 röda, så låda B har ${tex('56 - 21 = 35')} röda. (2): lådorna har 28 respektive 39 bollar, så låda B har ${tex('39 - 4 = 35')} röda. Var för sig räcker.</p>
<p>Svar D.</p>`,

  // DTK
  29: `<p>Sammanboende män utan barn: 24 procent hade sömnbesvär och 6 procent var ständigt trötta. ${tex('\\frac{24}{6} = 4')} gånger så stor.</p>
<p>Svar C.</p>`,

  30: `<p>Bland kvinnorna har ensamstående med barn de högsta staplarna i nästan alla diagram. Bland männen har ensamstående med barn utanför hushållet de högsta staplarna för värk, ängslan, sömnbesvär, trötthet och rökning.</p>
<p>Svar D.</p>`,

  31: `<p>17 procent av de sammanboende kvinnorna med barn rökte dagligen. ${tex('0{,}17 \\cdot 500\\,000 = 85\\,000')}.</p>
<p>Svar A.</p>`,

  32: `<p>Flest sökande 2003 hade samhällsvetenskapsprogrammet med 22 955 av totalt 119 286, ${tex('\\frac{22\\,955}{119\\,286} \\approx 0{,}19')}, ungefär 1/5.</p>
<p>Svar B.</p>`,

  33: `<p>Intagna minus sökande: 2002 ${tex('129\\,742 - 114\\,131 = 15\\,611')}, 2003 12 663, 2005 14 915 och 2006 14 498. Störst skillnad 2002.</p>
<p>Svar A.</p>`,

  34: `<p>Flest intagna vid fristående skolor var det 2006 med 23 128, varav 54 procent män och 46 procent kvinnor. Skillnaden är 8 procent av 23 128, cirka 1 850.</p>
<p>Svar C.</p>`,

  35: `<p>Mängden var som störst 1986: cirka 9 700 ton till industrin, 5 700 till jordbruket och 500 till hushållen, sammanlagt ungefär 16 000 ton.</p>
<p>Svar C.</p>`,

  36: `<p>Från 1987 till 1988 ökade industrin från cirka 5 700 till 7 300 ton och jordbruket från 2 600 till 3 000, totalt cirka 2 000 ton. Från 2001 till 2002 var ökningen cirka 1 800 ton, och de andra åren mindre.</p>
<p>Svar A.</p>`,

  37: `<p>1999 såldes cirka 5 900 ton till industrin och hektardoserna var cirka 4,6 miljoner. 1987 och 1991 var doserna under 4 miljoner, och 2008 såldes över 6 000 ton till industrin.</p>
<p>Svar C.</p>`,

  38: `<p>Mängden verksamt ämne per hektar var cirka 1,1 kilo 1982 och cirka 0,32 kilo 2009. Minskningen är ${tex('\\frac{1{,}1 - 0{,}32}{1{,}1} \\approx 0{,}7')}, alltså 70 procent.</p>
<p>Svar D.</p>`,

  39: `<p>Den västligaste kolningsgropen ligger i det inhägnade området i nordväst, som enligt skalan är ungefär 110 gånger 80 meter. Omkretsen är då cirka 380 meter.</p>
<p>Svar B.</p>`,

  40: `<p>Den nordligaste gränsstenen ligger i norr nära vägen, den västligaste vid områdets västra spets och den ostligaste vid den östra kanten. Triangelns bas är ungefär 600 meter och höjden ungefär 150 meter, så arean är ${tex('\\frac{600 \\cdot 150}{2} = 45\\,000')} kvadratmeter.</p>
<p>Svar A.</p>`,
};
