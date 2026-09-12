// Textförklaringar till högskoleprovet 13 mars 2021, provpass 5 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>${tex('a + a = 2a')}, så ${tex('a(a + a) = a \\cdot 2a = 2a^2')}.</p>
<p>Svar C.</p>`,

  2: `<p>I den högra deltriangeln är vinklarna 102° och 46°, så vinkeln vid toppen till höger om linjen är ${tex('180^\\circ - 102^\\circ - 46^\\circ = 32^\\circ')}.</p>
<p>Hela toppvinkeln är ${tex('64^\\circ + 32^\\circ = 96^\\circ')}, och i den stora triangeln är ${tex('v = 180^\\circ - 96^\\circ - 46^\\circ = 38^\\circ')}.</p>
<p>Svar C.</p>`,

  3: `<p>I butik B kostar ett äpple ${tex('0{,}8 \\cdot 5 = 4')} kr.</p>
<p>För 100 kr: ${tex('100 / 5 = 20')} äpplen i A och ${tex('100 / 4 = 25')} i B, alltså 5 fler.</p>
<p>Svar B.</p>`,

  4: `<p>${tex('2(p + 150) = 400')} ger ${tex('p + 150 = 200')}, alltså ${tex('p = 50')}.</p>
<p>${tex('4 \\cdot 50 - 200 = 0')}.</p>
<p>Svar A.</p>`,

  5: `<p>Mittpunkten är medelvärdet av ändpunkternas koordinater. Om ${tex('Q = (a;\\ b)')} gäller ${tex('\\frac{-1 + a}{2} = 3')} och ${tex('\\frac{0 + b}{2} = 3')}.</p>
<p>${tex('a = 7')} och ${tex('b = 6')}.</p>
<p>Svar D.</p>`,

  6: `<p>${tex('\\sqrt{50} \\approx 7{,}1')}, ${tex('2\\sqrt{25} = 10')}, ${tex('5\\sqrt{10} = \\sqrt{250} \\approx 15{,}8')} och ${tex('10\\sqrt{5} = \\sqrt{500} \\approx 22{,}4')}.</p>
<p>Svar D.</p>`,

  7: `<p>${tex('\\frac{1}{x + 1} + \\frac{1}{x + 1} = \\frac{2}{x + 1} = 3')} ger ${tex('x + 1 = \\frac{2}{3}')}.</p>
<p>${tex('x = \\frac{2}{3} - 1 = -\\frac{1}{3}')}.</p>
<p>Svar B.</p>`,

  8: `<p>Två lika termer: ${tex('3 \\cdot 10^5 + 3 \\cdot 10^5 = 2 \\cdot 3 \\cdot 10^5 = 6 \\cdot 10^5')}.</p>
<p>Exponenten ändras inte vid addition.</p>
<p>Svar A.</p>`,

  9: `<p>${tex('\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} = \\frac{4}{8} + \\frac{2}{8} + \\frac{1}{8} = \\frac{7}{8}')}.</p>
<p>Medelvärdet är ${tex('\\frac{7}{8} \\div 3 = \\frac{7}{24}')}.</p>
<p>Svar D.</p>`,

  10: `<p>${tex('f(x) - 1 = 8x')} måste vara delbart med 8.</p>
<p>${tex('-31 - 1 = -32 = 8 \\cdot (-4)')}, så −31 fås för ${tex('x = -4')}. För −17, 15 och 32 blir ${tex('f(x) - 1')} lika med −18, 14 och 31, som inte är delbara med 8.</p>
<p>Svar A.</p>`,

  11: `<p>${tex('13 \\cdot 19 = 247')} och ${tex('13 \\cdot 20 = 260')}. 254 ligger 7 från 247 och 6 från 260, alltså närmast 260.</p>
<p>${tex('\\frac{254}{13} \\approx 19{,}5')}, vilket avrundas till 20.</p>
<p>Svar C.</p>`,

  12: `<p>Pythagoras sats steg för steg: ${tex('AC^2 = 4^2 + 3^2 = 25')}, ${tex('AD^2 = AC^2 + 3^2 = 25 + 9 = 34')} och ${tex('AE^2 = AD^2 + 3^2 = 34 + 9 = 43')}.</p>
<p>${tex('AE = \\sqrt{43}')} cm.</p>
<p>Svar A.</p>`,

  // KVA
  13: `<p>${tex('a + 8 = b + 4')} ger ${tex('b = a + 4')}, så <i>b</i> är 4 större än <i>a</i>.</p>
<p>Svar B.</p>`,

  14: `<p>Minst ${tex('8 \\cdot 5 = 40')} kritor och högst ${tex('9 \\cdot 7 = 63')}. 58 ligger inom intervallet, så antalet kan vara både mindre än, lika med och större än 58.</p>
<p>Svar D.</p>`,

  15: `<p>${tex('\\frac{4 - 3{,}14}{3} = \\frac{0{,}86}{3} \\approx 0{,}29')}, vilket är större än ${tex('\\frac{1}{4} = 0{,}25')}.</p>
<p>Svar A.</p>`,

  16: `<p>Linjen stiger ungefär ett steg för varje två steg åt höger, så ${tex('k \\approx \\frac{1}{2}')}. Det är mindre än 2.</p>
<p>(Det är <i>m</i>, skärningen med <i>y</i>-axeln, som är ungefär 2.)</p>
<p>Svar B.</p>`,

  17: `<p>Oscar: ${tex('\\frac{x}{y/3} = \\frac{3x}{y}')} km per timme. Peter: ${tex('\\frac{6x}{2y} = \\frac{3x}{y}')} km per timme.</p>
<p>Medelhastigheterna är lika.</p>
<p>Svar C.</p>`,

  18: `<p>Båda trianglarna har kateten <i>z</i>. Den andra kateten är ${tex('\\sqrt{x^2 - z^2}')} i ABC och ${tex('\\sqrt{y^2 - z^2}')} i DEF.</p>
<p>Eftersom ${tex('x > y')} är ABC:s andra katet längre, och arean (halva produkten av kateterna) större.</p>
<p>Svar A.</p>`,

  19: `<p>Summan av fyra tal med medelvärdet 12 är ${tex('4 \\cdot 12 = 48')}.</p>
<p>${tex('10 + 15 + 25 = 50')}, så ${tex('x = 48 - 50 = -2')}, vilket är mindre än 0.</p>
<p>Svar B.</p>`,

  20: `<p>Grafen till <i>f</i> skär <i>x</i>-axeln där ${tex('2x + \\frac{1}{5} = 0')}, alltså ${tex('x = -\\frac{1}{10}')}.</p>
<p>Grafen till <i>g</i>: ${tex('\\frac{1}{2}x + 5 = 0')} ger ${tex('x = -10')}.</p>
<p>${tex('-\\frac{1}{10} > -10')}.</p>
<p>Svar A.</p>`,

  21: `<p>I den nedre deltriangeln är vinklarna 40° och 95°, så ${tex('y = 180^\\circ - 40^\\circ - 95^\\circ = 45^\\circ')}.</p>
<p>Vinkeln <i>x</i> beror på hur stor den vänstra hörnvinkeln ovanför linjen är, och den är okänd. Ju större den är, desto mindre blir <i>x</i>, som kan vara både större och mindre än 45°.</p>
<p>Svar D.</p>`,

  22: `<p>${tex('\\frac{1}{x} = 1 + \\frac{1}{y}')}, så ${tex('\\frac{1}{x} > \\frac{1}{y}')}. För positiva tal betyder det att ${tex('x < y')}.</p>
<p>Exempel: ${tex('y = 1')} ger ${tex('\\frac{1}{x} = 2')}, alltså ${tex('x = \\frac{1}{2}')}.</p>
<p>Svar B.</p>`,

  // NOG
  23: `<p>(1): Carl står trea. Sist står Alf, Bea eller Dinah, så färgen är okänd.</p>
<p>(2): Dinah står mellan Bea och Carl, men vem som står sist är okänt.</p>
<p>Tillsammans: Carl står trea och Dinah intill honom mellan Bea och Carl, så Bea står först, Dinah tvåa, Carl trea och Alf sist. Alfs mössa är gul.</p>
<p>Svar C.</p>`,

  24: `<p>(1): ${tex('F = 3M')} ger skillnaden ${tex('2M')}, som är okänd.</p>
<p>(2): ${tex('F + 9 = 2(M + 9)')} ger ${tex('F = 2M + 9')} och skillnaden ${tex('M + 9')}, som är okänd.</p>
<p>Tillsammans: ${tex('3M = 2M + 9')} ger ${tex('M = 9')}, ${tex('F = 27')} och skillnaden 18 år.</p>
<p>Svar C.</p>`,

  25: `<p>(1): ${tex('\\frac{2x}{5} - 1 = 5')} ger ${tex('\\frac{2x}{5} = 6')} och ${tex('x = 15')}. Tillräcklig.</p>
<p>(2): ${tex('y = 2z')} ger ${tex('x = 2z - z = z')}, men <i>z</i> är okänt.</p>
<p>Svar A.</p>`,

  26: `<p>(1): Carolina deltar inte i höjdhopp, längdhopp eller tresteg, så hon tävlar i stavhopp. Hur de andra tre fördelar sig är okänt.</p>
<p>(2): Daniella och Carolina har stavhopp och tresteg, Anton och Bengt höjdhopp och längdhopp, men vem som har vad är okänt.</p>
<p>Tillsammans: Carolina stavhopp och Daniella tresteg, men Anton och Bengt kan fortfarande inte skiljas åt.</p>
<p>Svar E.</p>`,

  27: `<p>(1): med <i>k</i> knivar finns ${tex('\\frac{k}{2}')} skedar och ${tex('k - 2')} gafflar. ${tex('k + \\frac{k}{2} + k - 2 = 23')} ger ${tex('2{,}5k = 25')} och ${tex('k = 10')}. Tillräcklig.</p>
<p>(2): ${tex('23 - 13 = 10')} knivar. Tillräcklig.</p>
<p>Svar D.</p>`,

  28: `<p>(1): det största och minsta talet säger inget om det mittersta.</p>
<p>(2): om tre av fem tal är 20 måste det mittersta talet vara 20, oavsett de övriga två. Medianen är 20.</p>
<p>Svar B.</p>`,

  // DTK
  29: `<p>2001 fastställdes faderskapet genom bekräftelse för 54 % av födslarna.</p>
<p>För resten, ${tex('100 - 54 = 46')} %, blev det inte fastställt genom bekräftelse.</p>
<p>Svar B.</p>`,

  30: `<p>Nedlagda utredningar 2005 till 2010: ${tex('446 + 597 + 738 + 851 + 982 + 1\\,120 = 4\\,734')}.</p>
<p>${tex('4\\,734 / 6 = 789')} per år.</p>
<p>Svar B.</p>`,

  31: `<p>2013 fastställdes 60 955 faderskap genom bekräftelse, vilket var 54 % av födslarna.</p>
<p>${tex('60\\,955 / 0{,}54 \\approx 112\\,900')}, närmast 113 000.</p>
<p>Svar B.</p>`,

  32: `<p>Diket (en tunn heldragen linje enligt teckenförklaringen) går tvärs över Byängen från övre vänstra delen till nedre högra delen av ängen, alltså från nordväst till sydost.</p>
<p>Svar A.</p>`,

  33: `<p>Kungsgårdarnas rutmönstrade åkrar finns både rakt norr om gården (i Norra gärdet) och rakt öster om den (i Östra gärdet). Prästgårdens mörka åkrar finns också både rakt norr om gården och rakt österut.</p>
<p>Klockargårdens ljusgrå åkrar ligger väster och sydväst om byn, och Backegårdens snedstreckade åkrar ligger inte rakt öster om gården.</p>
<p>Svar D.</p>`,

  34: `<p>Prästgårdens sydligaste åker är den mörka remsan i Stora gärdet, söder om byn. Mätt med skalan är den ungefär 100 m bred och 200 m lång.</p>
<p>${tex('100 \\cdot 200 = 20\\,000')} m<sup>2</sup>.</p>
<p>Svar C.</p>`,

  35: `<p>2009: ungefär ${tex('5 + 18 = 23')} %. 2016: ungefär ${tex('17 + 40 = 57')} %.</p>
<p>Ökningen är ${tex('\\frac{57 - 23}{23} \\approx 1{,}5')}, alltså ungefär 150 procent.</p>
<p>Svar B.</p>`,

  36: `<p>Cirkeldiagrammet visar ungefär 8 % mycket troligt, 28 % ganska troligt, 46 % inte speciellt troligt, 16 % inte alls troligt och 2 % ingen åsikt.</p>
<p>Det stämmer med stapeln för 2014. 2011 och 2013 har ganska troligt omkring 40 respektive 20 %, och 2012 har bara omkring 3 % mycket troligt.</p>
<p>Svar D.</p>`,

  37: `<p>Inte speciellt troligt: ungefär 59 % 2012, 52 % 2013, 46 % 2014, 34 % 2015 och 31 % 2016, alltså minskning fyra år i rad.</p>
<p>Mycket troligt och ganska troligt ökade 2013 till 2016, och inte alls troligt ökade 2016.</p>
<p>Svar C.</p>`,

  38: `<p>Zink är det översta fältets tjocklek. Ungefär 80 000 ton 1965, 90 000 ton 1970, 110 000 ton 1975 och 180 000 ton 1980.</p>
<p>Först 1980 översteg mängden 150 000 ton.</p>
<p>Svar D.</p>`,

  39: `<p>1995: koppar ungefär 90 000 ton, bly ungefär 90 000 ton och zink ungefär 170 000 ton, totalt ungefär 350 000 ton.</p>
<p>${tex('\\frac{90}{350} \\approx 0{,}26')}, närmast 1/4.</p>
<p>Svar C.</p>`,

  40: `<p>Zink är störst alla år. Koppar är större än bly (det mörka fältet tjockare än det vita) bara 1985, 1995, 2005 och 2010.</p>
<p>Det ger 4 årtal.</p>
<p>Svar A.</p>`,
};
