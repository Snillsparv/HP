// Textförklaringar till högskoleprovet 21 oktober 2017, provpass 5 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>${tex('0{,}75x = 48')} ger ${tex('x = \\frac{48}{0{,}75} = 64')}.</p>
<p>Svar A.</p>`,

  2: `<p>Linjerna är parallella om likbelägna vinklar är lika, alltså om ${tex('x = 105')}. Eftersom ${tex('x + y = 180')} alltid gäller är det samma sak som ${tex('y + 105 = 180')}. Alternativ C gäller alltid och säger inget, och A och B ger fel värden.</p>
<p>Svar D.</p>`,

  3: `<p>${tex('3 \\diamond 4 = 3 \\cdot 4 - 3 + 4 = 12 - 3 + 4 = 13')}.</p>
<p>Svar C.</p>`,

  4: `<p>Med nämnaren 20: ${tex('\\frac{15}{20} + \\frac{10}{20} + \\frac{24}{20} = \\frac{49}{20}')}.</p>
<p>Svar B.</p>`,

  5: `<p>Triangelolikheten: en sida är alltid kortare än summan av de andra två och längre än deras skillnad. Alltså ${tex('c < a + b')} och ${tex('c > a - b')}.</p>
<p>Svar A.</p>`,

  6: `<p>Tre på varandra följande heltal ${tex('n - 1')}, ${tex('n')} och ${tex('n + 1')} har summan ${tex('3n')}, som är delbar med 3. Av alternativen är bara 45 delbart med 3 (${tex('14 + 15 + 16')}).</p>
<p>Svar A.</p>`,

  7: `<p>${tex('350 + 700 + 1400 + 2800 = 5250')}.</p>
<p>Svar C.</p>`,

  8: `<p>${tex('\\frac{x_1}{y_1} = \\frac{2x_2}{2y_2} = \\frac{x_2}{y_2}')}. Täljare och nämnare är lika, så kvoten är 1.</p>
<p>Svar C.</p>`,

  9: `<p>I basen åtta betyder 50 fem åttor och noll ettor: ${tex('5 \\cdot 8 + 0 = 40')}.</p>
<p>Svar B.</p>`,

  10: `<p>${tex('\\frac{1}{9} = 3^{-2}')}, så ${tex('-3x + 4 = -2')}, vilket ger ${tex('x = 2')}.</p>
<p>Svar B.</p>`,

  11: `<p>${tex('g(2) = 2(2 - 1) = 2')} och ${tex('h(2) = 3(1 - 2) = -3')}. Skillnaden är ${tex('2 - (-3) = 5')}.</p>
<p>Svar D.</p>`,

  12: `<p>Summan är ${tex('5 \\cdot 13 = 65')} och det mittersta talet är 15. För att det största talet ska bli så stort som möjligt väljs de andra så små som möjligt: 1, 2, 15 och 16. Det största talet blir ${tex('65 - 1 - 2 - 15 - 16 = 31')}.</p>
<p>Svar C.</p>`,

  // KVA
  13: `<p>${tex('x - y = y - x')} ger ${tex('2x = 2y')}, alltså ${tex('x = y')}.</p>
<p>Svar C.</p>`,

  14: `<p>Medelvärdet är ${tex('\\frac{38}{10} = 3{,}8')}. Medianen är medelvärdet av de två mittersta värdena, ${tex('\\frac{4 + 4}{2} = 4')}. II är större.</p>
<p>Svar B.</p>`,

  15: `<p>Den stora cirkelns omkrets är ${tex('2\\pi R')}. De tre små har tillsammans ${tex('3 \\cdot 2\\pi \\cdot \\frac{R}{3} = 2\\pi R')}. Kvantiteterna är lika.</p>
<p>Svar C.</p>`,

  16: `<p>${tex('f(0) = m')} och ${tex('f(1) = k + m')}. Vilken som är störst beror på om ${tex('k')} är positivt eller negativt.</p>
<p>Svar D.</p>`,

  17: `<p>I: ${tex('\\frac{8 + 4 + 2 + 1}{16} = \\frac{15}{16} = 0{,}9375')}. II: ${tex('\\frac{14}{15} \\approx 0{,}933')}. I är större.</p>
<p>Svar A.</p>`,

  18: `<p>Med ${tex('x = 4')} och ${tex('y = 2')} är I = 2 och II = 8. Med ${tex('x = 1')} och ${tex('y = \\frac{1}{2}')} är I = 2 och II = ${tex('\\frac{1}{2}')}. Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  19: `<p>Mer än 20 lappar är röda och 17 är gröna, så antalet blå är mindre än ${tex('60 - 20 - 17 = 23')}. II är större.</p>
<p>Svar B.</p>`,

  20: `<p>${tex('x = -y')} ger ${tex('x^3 + y^3 = -y^3 + y^3 = 0')}, medan ${tex('x^2 + y^2 = 2y^2 > 0')} eftersom ${tex('y \\neq 0')}. II är större.</p>
<p>Svar B.</p>`,

  21: `<p>${tex('\\frac{17}{4} = 4{,}25')} och ${tex('4{,}25^2 = 18{,}06 > 17')}, så ${tex('\\frac{17}{4} > \\sqrt{17}')}. I är större.</p>
<p>Svar A.</p>`,

  22: `<p>Den markerade vinkeln 270° ligger utanför hörnet A, så vinkeln DAB är ${tex('360° - 270° = 90°')}. Både AD och BC är då vinkelräta mot AB, alltså parallella. Diagonalen AC skär två parallella linjer, och ${tex('x')} och ${tex('y')} är alternatvinklar. De är lika stora.</p>
<p>Svar C.</p>`,

  // NOG
  23: `<p>(1) ger AB = 24 − 7 = 17 men inget om CD. (2) ger CD = 20 − 7 = 13 men inget om AB. Tillsammans: AD = 17 + 7 + 13 = 37.</p>
<p>Svar C.</p>`,

  24: `<p>(1) ger bara andelar av hinken, inte mängden. (2) säger hur mycket som blev över, men inte hur mycket som fanns från början. Även tillsammans saknas den totala mängden hallon.</p>
<p>Svar E.</p>`,

  25: `<p>(1): 43 procent av gemen i den vita kartongen är stora, så ${tex('0{,}57 \\cdot 800 = 456')} är små. (2) ger bara det totala antalet små gem i båda kartongerna, inte fördelningen. (1) räcker ensamt.</p>
<p>Svar A.</p>`,

  26: `<p>(1) säger inget om Beas hastighet, så Annas tid är okänd. (2) ger bara att Bea cyklat 22,5 km när Anna cyklat 30 km, alltså hastighetsförhållandet. Tillsammans: Bea cyklar 7,5 km på 30 minuter, alltså 15 km/h, och tar 2 timmar. Anna tar 1,5 timmar och håller 20 km/h.</p>
<p>Svar C.</p>`,

  27: `<p>(1): ${tex('x + y + z = (x - y - z) + 2(y + z)')} är udda plus jämnt, alltså udda. Svaret är nej. (2): produkten är udda bara om alla tre talen är udda, och summan av tre udda tal är udda. Svaret är nej. Var för sig räcker.</p>
<p>Svar D.</p>`,

  28: `<p>Från ${tex('b + c = a + d')} och (1) och (2) tillsammans fås ${tex('a = b - 2')}, ${tex('c = 11 - b')} och ${tex('d = 13 - b')}. Både ${tex('b = 3')} (a = 1, c = 8, d = 10) och ${tex('b = 4')} (a = 2, c = 7, d = 9) fungerar, så ${tex('d')} är inte bestämt.</p>
<p>Svar E.</p>`,

  // DTK
  29: `<p>I Trännöfjärden minskade nitrat-kväve från cirka 95 vid ytan till 35 på 20 meters djup. I Sandsänkan ökade det från cirka 5 till 35. Salthalt, fosfat-fosfor och total-fosfor ökade med djupet på båda platserna.</p>
<p>Svar D.</p>`,

  30: `<p>I Trännöfjärden var temperaturen cirka 13,5 grader närmast ytan och cirka 8,5 grader vid den djupaste mätpunkten. Skillnaden är ungefär 5 grader.</p>
<p>Svar B.</p>`,

  31: `<p>På 20 meters djup i Sandsänkan var salthalten cirka 7 promille, total-fosfor cirka 23 mikrogram per liter och total-kväve cirka 250 mikrogram per liter (avläst på den övre skalan).</p>
<p>Svar D.</p>`,

  32: `<p>Norr om polcirkeln finns fem symboler för natur- eller nationalpark: två i Norge, en i Sverige och två i Finland. Söder om polcirkeln finns färre än sju massa- och pappersindustrier och färre än sex gruvor, och lagren för kärnavfall är två.</p>
<p>Svar C.</p>`,

  33: `<p>Vid Bodø är ankaret litet, vilket betyder under 1 000 ton, och tecknet visar att importen var större än exporten.</p>
<p>Svar A.</p>`,

  34: `<p>Cirka 16 procent av männen hade varit på bio mer än fem gånger och cirka 45 procent en till fem gånger, sammanlagt cirka 61 procent. Ungefär 39 procent hade inte varit på bio, alltså cirka 2/5.</p>
<p>Svar B.</p>`,

  35: `<p>Bland männen når tidskrift högst, cirka 71 procent, mot cirka 69 procent för bokläsning. Bland kvinnorna når bokläsning högst, cirka 87 procent, mot cirka 83 procent för skönlitteratur.</p>
<p>Svar C.</p>`,

  36: `<p>Cirka 8 procent av männen deltog i studiecirkel mer än fem gånger. ${tex('0{,}08 \\cdot 3{,}6')} miljoner är ungefär 290 000, närmast 300 000.</p>
<p>Svar B.</p>`,

  37: `<p>Cirka 8 procent av kvinnorna ägnade sig åt musik en till fem gånger, och cirka 43 procent var på konsert en till fem gånger. Förhållandet 8:43 är ungefär 1:5.</p>
<p>Svar A.</p>`,

  38: `<p>Lärare i praktiskt/estetiskt ämne med lärarexamen i musik: 1 087 varav 607 kvinnor, alltså 480 män. Med lärarexamen i idrott och hälsa: 1 717 varav 830 kvinnor, alltså 887 män. Tillsammans ${tex('480 + 887 = 1\\,367')}.</p>
<p>Svar B.</p>`,

  39: `<p>Fler än 500 skolledare hade låg-/mellanstadielärarexamen (1 350) eller ämneslärarexamen (687). Av dem med ämneslärarexamen arbetade 6 430 av 8 221 som grundskollärare 4–9, medan de med låg-/mellanstadielärarexamen främst arbetade som låg-/mellanstadielärare.</p>
<p>Svar D.</p>`,

  40: `<p>Andel som saknade pedagogisk högskoleexamen: grundskollärare 4–9 ${tex('\\frac{5\\,679}{24\\,018} \\approx 24')} procent, modersmålslärare ${tex('\\frac{1\\,141}{2\\,149} \\approx 53')} procent, övrig pedagogisk personal ${tex('\\frac{4\\,398}{9\\,381} \\approx 47')} procent och studie- och yrkesvägledare ${tex('\\frac{482}{776} \\approx 62')} procent.</p>
<p>Svar D.</p>`,
};
