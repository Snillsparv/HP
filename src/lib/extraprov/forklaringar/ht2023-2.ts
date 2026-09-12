// Textförklaringar till högskoleprovet 22 oktober 2023, provpass 2 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  1: `<p>Gemensam nämnare är 21: ${tex('\\frac{14}{21} + \\frac{12}{21} - \\frac{5}{21} = \\frac{21}{21} = 1')}.</p>
<p>Svar C.</p>`,

  2: `<p>Vinklarna förhåller sig som 1:2:6, alltså ${tex('1 + 2 + 6 = 9')} delar. Vinkelsumman 180° delat med 9 är 20° per del.</p>
<p>Den största vinkeln är ${tex('6 \\cdot 20° = 120°')}. Svar C.</p>`,

  3: `<p>Sätt in ${tex('x = -2')}: ${tex('(-2)^3 + b \\cdot (-2) - 4 = 0')}, alltså ${tex('-8 - 2b - 4 = 0')}.</p>
<p>${tex('-2b = 12')} ger ${tex('b = -6')}. Svar A.</p>`,

  4: `<p>${tex('\\frac{3x}{4} - \\frac{1}{2} = 0')} ger ${tex('\\frac{3x}{4} = \\frac{1}{2}')}.</p>
<p>Multiplicera med 4: ${tex('3x = 2')}, så ${tex('x = \\frac{2}{3}')}. Svar B.</p>`,

  5: `<p>${tex('x = \\frac{5}{8} - \\frac{3}{5}')}. Gemensam nämnare 40: ${tex('\\frac{25}{40} - \\frac{24}{40} = \\frac{1}{40}')}.</p>
<p>Svar D.</p>`,

  6: `<p>Medelvärdet 16 av två tal betyder att ${tex('x + y = 32')}. Medelvärdet av 20 och <i>z</i> är 30, så ${tex('20 + z = 60')} och ${tex('z = 40')}.</p>
<p>${tex('x + y + z = 32 + 40 = 72')}. Svar D.</p>`,

  7: `<p>Multiplicera in: ${tex('-5x \\cdot 7 = -35x')} och ${tex('-5x \\cdot (-3y) = 15xy')}. Uttrycket är ${tex('-35x + 15xy')}.</p>
<p>Bryt ut <i>x</i>: ${tex('x(15y - 35) = (15y - 35)x')}. Svar C.</p>`,

  8: `<p><i>k</i> är lutningen och <i>m</i> är där linjen skär <i>y</i>-axeln. A går genom origo, så ${tex('m = 0')} och produkten är 0. B är vågrät, så ${tex('k = 0')} och produkten är 0.</p>
<p>C lutar nedåt (${tex('k = -1')}) och skär <i>y</i>-axeln under origo (${tex('m = -1')}), så produkten är ${tex('(-1) \\cdot (-1) = 1')}. D lutar nedåt (${tex('k = -1')}) men skär <i>y</i>-axeln i 2, så produkten är −2. Störst är C. Svar C.</p>`,

  9: `<p>10 procent av 20 är 2. Alltså är ${tex('0{,}08y = 2')}.</p>
<p>${tex('y = \\frac{2}{0{,}08} = 25')}. Svar D.</p>`,

  10: `<p>Kvadratens area är ${tex('s^2')}. Rektangelns area är korta sidan gånger långa sidan: ${tex('0{,}7s \\cdot L = s^2')}.</p>
<p>Dela med ${tex('0{,}7s')}: ${tex('L = \\frac{s}{0{,}7}')}. Svar C.</p>`,

  11: `<p>Primtalen mellan 4 och 10 är 5 och 7. Eftersom ${tex('35 = 5 \\cdot 7')} är ${tex('\\frac{35m}{p}')} lika med ${tex('7m')} om ${tex('p = 5')} och ${tex('5m')} om ${tex('p = 7')}, alltid ett heltal.</p>
<p>A: ${tex('\\frac{5}{2}')} är inget heltal. B: ${tex('\\frac{36}{5}')} är inget heltal. C: ${tex('m < p')}, så kvoten är mindre än 1. Svar D.</p>`,

  12: `<p>Vid T var systrarnas sammanlagda ålder ${tex('3 \\cdot 24 = 72')} år. Tre år senare är den ${tex('72 + 9 = 81')} år.</p>
<p>Bianca och Cecilia var då tillsammans ${tex('2 \\cdot 25 = 50')} år, så Annica var ${tex('81 - 50 = 31')} år. Svar D.</p>`,

  13: `<p>${tex('(2x)^2 = 4x^2')}, och ${tex('x^2')} är positivt eftersom ${tex('x \\neq 0')}.</p>
<p>${tex('4x^2')} är större än ${tex('2x^2')}. Svar A.</p>`,

  14: `<p>${tex('f(-1) = 1 + 3 + 2 = 6')}.</p>
<p>${tex('f(3) = 9 - 9 + 2 = 2')}. Svar A.</p>`,

  15: `<p>Vid division av potenser med samma bas subtraheras exponenterna: ${tex('\\frac{5^5}{5^3} = 5^2 = 25')}.</p>
<p>${tex('\\frac{5^{28}}{5^{26}} = 5^2 = 25')}. Lika. Svar C.</p>`,

  16: `<p>Rektangelns area är ${tex('6x \\cdot 0{,}5x = 3x^2')} cm².</p>
<p>Cirkelns area är ${tex('\\pi x^2 \\approx 3{,}14x^2')} cm², som är lite större. Svar B.</p>`,

  17: `<p>Flytta in talen under rottecknet: ${tex('3\\sqrt{6} = \\sqrt{9 \\cdot 6} = \\sqrt{54}')} och ${tex('6\\sqrt{3} = \\sqrt{36 \\cdot 3} = \\sqrt{108}')}.</p>
<p>II är större. Svar B.</p>`,

  18: `<p>${tex('x^2 = 25')} ger ${tex('x = 5')} eller ${tex('x = -5')}, så <i>y</i> är 3 eller −7.</p>
<p>${tex('\\sqrt{16} = 4')} är större än båda. Svar B.</p>`,

  19: `<p>Kalla Elsas ålder idag för <i>E</i>. ${tex('E - 6 = \\frac{E}{3}')} ger ${tex('3E - 18 = E')}, alltså ${tex('E = 9')}.</p>
<p>Om 6 år är hon 15 år, vilket är mindre än 18. Svar B.</p>`,

  20: `<p>${tex('\\frac{x}{y} = -1')} betyder att ${tex('x = -y')}.</p>
<p>Då är ${tex('x + y = -y + y = 0')}. Lika. Svar C.</p>`,

  21: `<p>Talparen med produkten 12 är 1 och 12 (medelvärde 6,5), 2 och 6 (medelvärde 4) samt 3 och 4 (medelvärde 3,5).</p>
<p>Medelvärdet kan alltså vara större än, lika med eller mindre än 4. Svar D.</p>`,

  22: `<p>En likbent triangel har två lika vinklar, men vi vet inte vilka och inte hur stora de är. Om ${tex('C = 90°')} är ${tex('A + B = 90°')}, men om alla vinklar är 60° är ${tex('A + B = 120°')}.</p>
<p>Informationen är otillräcklig. Svar D.</p>`,

  23: `<p>(1): Komedin visas i salong 1 eller 3, och skräckfilmen i salong 1 eller 3. Antingen komedi 1 och skräck 3, eller komedi 3 och skräck 1. Räcker inte.</p>
<p>(2): Komedin i salong 1, skräckfilmen i 2 eller 3. Räcker inte.</p>
<p>Tillsammans: komedin i salong 1, skräckfilmen i salong 3 och dramat i salong 2. Svar C.</p>`,

  24: `<p>(1): Minst 43 kulor är röda och minst 43 är stora, men vi vet inte hur många som är både och. Räcker inte.</p>
<p>(2): Fem små röda, men inget om de stora. Räcker inte.</p>
<p>Tillsammans vet vi fortfarande inte hur många röda kulor det finns totalt. Svar E.</p>`,

  25: `<p>(1): Bara hastigheten, ingen tid. Räcker inte.</p>
<p>(2): Dubbel hastighet halverar tiden, så halva tiden är 7,5 minuter och hela resan tog 15 minuter. Men ingen hastighet. Räcker inte.</p>
<p>Tillsammans: 15 km/h i en kvart ger ${tex('15 \\cdot 0{,}25 = 3{,}75')} km. Svar C.</p>`,

  26: `<p>(1): Förhållandet 6:5 mellan blå och gröna säger inget om hur många som är röda. Räcker inte.</p>
<p>(2): Blå: ${tex('\\frac{3}{7} \\cdot 56 = 24')}. Gröna: ${tex('\\frac{5}{14} \\cdot 56 = 20')}. Röda: ${tex('56 - 24 - 20 = 12')}. Räcker.</p>
<p>Svar B.</p>`,

  27: `<p>(1): Den femte siffran kan vara 1, 2 eller 3 (första siffran 2, 4 eller 6, andra siffran 5, 3 eller 1). Tredje siffran är 7, men fjärde siffran är okänd. Räcker inte.</p>
<p>(2): Säger bara att fjärde siffran är dubbla första. Räcker inte.</p>
<p>Tillsammans: 25 7 4 1 och 43 7 8 2 fungerar båda (61 7 ? 3 går inte eftersom 12 inte är en siffra). Två tal återstår. Svar E.</p>`,

  28: `<p>${tex('AC = 3 \\cdot AB')} ger ${tex('BC = AC - AB = 2 \\cdot AB')}. M är mittpunkten, så ${tex('CM = \\frac{AC}{2}')}.</p>
<p>(1): ${tex('CM = 6')} ger ${tex('AC = 12')}, ${tex('AB = 4')} och ${tex('BC = 8')}. Räcker. (2): ${tex('AB = 4')} ger ${tex('BC = 8')} direkt. Räcker.</p>
<p>Svar D.</p>`,

  29: `<p>Vintern 2007/08 dog cirka 100 lodjur (nedre diagrammet). Antalet familjegrupper var cirka 208, så det totala antalet lodjur uppskattas till ${tex('208 \\cdot 6 \\approx 1\\,250')}.</p>
<p>${tex('\\frac{100}{1\\,250} = \\frac{1}{12{,}5}')}, ungefär 1:13. Svar B.</p>`,

  30: `<p>2008/09 dog cirka 215 lodjur. Övrig dödlighet (grått) var cirka 50, så jakten (skyddsjakt plus licensjakt) stod för cirka 165.</p>
<p>${tex('\\frac{165}{215} \\approx 0{,}77')}, alltså ungefär 75 procent. Svar C.</p>`,

  31: `<p>Flest familjegrupper fanns 2008/09, cirka 290. En familjegrupp är en hona med i genomsnitt två ungar, alltså tre individer.</p>
<p>${tex('290 \\cdot 3 = 870')}. Svar C.</p>`,

  32: `<p>De tre största orsakerna är Fallolycka 73 618, Kirurgiska och medicinska åtgärder som orsak till onormal reaktion 24 977 och Ogynnsam effekt av droger och läkemedel 10 928. Tillsammans 109 523.</p>
<p>${tex('\\frac{109\\,523}{166\\,119} \\approx 0{,}66')}, alltså ungefär två tredjedelar. Svar C.</p>`,

  33: `<p>Exponering för rök och öppen eld: 217 kvinnor och 413 män, totalt 630. Kvinnornas andel är ${tex('\\frac{217}{630} \\approx 0{,}34')}, ungefär en tredjedel.</p>
<p>Den grå sektorn ska alltså vara ungefär en tredjedel av cirkeln, som i diagram A. I B är den cirka 40 procent, i C cirka 60 och i D cirka 70. Svar A.</p>`,

  34: `<p>Kvinnor: ${tex('1\\,799 + 554 = 2\\,353')}. Män: ${tex('1\\,081 + 672 = 1\\,753')}.</p>
<p>Skillnaden är ${tex('2\\,353 - 1\\,753 = 600')}. Svar B.</p>`,

  35: `<p>De tre sista åren: ${tex('59{,}6 + 55{,}5 + 80{,}3 = 195{,}4')} tusen hektar. De tre första: ${tex('24{,}3 + 20{,}6 + 13{,}8 = 58{,}7')} tusen hektar.</p>
<p>Skillnaden är cirka 136,7 tusen hektar, närmast 135 000 hektar. Svar B.</p>`,

  36: `<p>Norrbotten 10,6 och Jämtland 16,5 tusen hektar, tillsammans 27,1. Hela landet 2010: 80,3 tusen hektar (stapeldiagrammet).</p>
<p>${tex('\\frac{27{,}1}{80{,}3} \\approx 0{,}34')}, ungefär en tredjedel. Svar A.</p>`,

  37: `<p>Lägg ihop länen söder om Jämtland och Västernorrland på kartan: Gävleborg 7,7, Dalarna 9,4, Värmland 2,0, Västmanland 1,3, Uppsala 1,6, Örebro 0,7, Södermanland 0,2, Östergötland 2,7, Kronoberg 0,3, Kalmar 0,2 och Skåne 0,2. Övriga län har 0,0.</p>
<p>Summan är 26,3 tusen hektar, alltså 26 300 hektar. Svar B.</p>`,

  38: `<p>Titta i det övre diagrammet där den nedre streckade linjen (förstföderskor) ligger strax under 25 år och den övre (omföderskor) på 29 år.</p>
<p>Det stämmer för 1980. År 1985 och 1990 var medelåldrarna cirka 25,5 och 29,7 år, och 1995 cirka 26,5 och 30. Svar A.</p>`,

  39: `<p>Andelen 30–34-åriga förstföderskor (den grå heldragna linjen i det mellersta diagrammet) var cirka 15 procent 1990.</p>
<p>Den når 30 procent ungefär 2004, alltså 14 år senare. Svar D.</p>`,

  40: `<p>Läs av det nedre diagrammet vid 2010: −19 år cirka 0,5 procent, 20–24 år cirka 7, 25–29 år cirka 24, 35+ år cirka 30 och 30–34 år cirka 39 procent.</p>
<p>Ordningen är −19 < 20–24 < 25–29 < 35+ < 30–34. Svar D.</p>`,
};
