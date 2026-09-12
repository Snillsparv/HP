// Textförklaringar till högskoleprovet 1 april 2017, provpass 4 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>${tex('\\frac{4x}{12} = \\frac{x}{3}')}, så ${tex('\\frac{x}{3} + \\frac{5x}{3} = \\frac{6x}{3} = 2x = 8')}, alltså ${tex('x = 4')}.</p>
<p>Svar B.</p>`,

  2: `<p>Vinkeln 6x vid L<sub>2</sub> motsvarar vinkeln till vänster om linjen vid L<sub>1</sub>, som tillsammans med 4y bildar en rak vinkel. Alltså ${tex('6x + 4y = 180°')}, och delat med 2 ger ${tex('3x + 2y = 90°')}.</p>
<p>Svar B.</p>`,

  3: `<p>Summan ska vara ${tex('5 \\cdot 15 = 75')}. ${tex('7 + 13 + 18 + 20 = 58')}, så ${tex('x = 17')}.</p>
<p>Svar C.</p>`,

  4: `<p>Det största värdet är ${tex('2 \\cdot 6 + 3 = 15')}, som inte är ett primtal, liksom 14. 13 fås med ${tex('x = 5')} och ${tex('y = 3')}.</p>
<p>Svar B.</p>`,

  5: `<p>B och C ligger båda på höjden ${tex('y = 2')}, så BC är en vågrät bas med längden 5. Höjden från A är ${tex('2 - (-4) = 6')}. Arean är ${tex('\\frac{5 \\cdot 6}{2} = 15')}.</p>
<p>Svar C.</p>`,

  6: `<p>${tex('(3a)^2 = 9a^2 = 9 \\cdot 7 = 63')}.</p>
<p>Svar C.</p>`,

  7: `<p>Termerna med A och B är lika i P och Q och tar ut varandra. ${tex('P - Q = (7 - 4) \\cdot 1000 + (4 - 8) \\cdot 10 = 3000 - 40 = 2960')}.</p>
<p>Svar B.</p>`,

  8: `<p>${tex('3 = \\sqrt{3} \\cdot \\sqrt{3}')}, så ${tex('\\frac{\\sqrt{3}}{3} = \\frac{\\sqrt{3}}{\\sqrt{3} \\cdot \\sqrt{3}} = \\frac{1}{\\sqrt{3}}')}.</p>
<p>Svar A.</p>`,

  9: `<p>Om ${tex('zw > xy')} och båda leden multipliceras med −1 vänds olikheten: ${tex('-zw < -xy')}, det vill säga ${tex('-xy > -zw')}. De andra alternativen kan vara falska, till exempel med ${tex('x = -1')}, ${tex('y = -1')}, ${tex('z = -2')} och ${tex('w = -2')}.</p>
<p>Svar D.</p>`,

  10: `<p>${tex('f(1) = 2 \\cdot 5 = 10')} och ${tex('f(0) = 2 \\cdot 1 = 2')}. Skillnaden är 8.</p>
<p>Svar B.</p>`,

  11: `<p>${tex('\\frac{2}{6x + 6} = \\frac{2}{6(x + 1)} = \\frac{1}{3(x + 1)}')} och ${tex('\\frac{1}{2x + 2} = \\frac{1}{2(x + 1)}')}. Med nämnaren ${tex('6(x + 1)')}: ${tex('\\frac{3 - 2}{6(x + 1)} = \\frac{1}{6x + 6}')}.</p>
<p>Svar D.</p>`,

  12: `<p>Kvadratens diagonal är cirkelns diameter, 10 cm. Kvadratens area är halva produkten av diagonalerna, ${tex('\\frac{10 \\cdot 10}{2} = 50')} cm². Cirkelns area är ${tex('\\pi \\cdot 5^2 = 25\\pi')}. Andelen är ${tex('\\frac{50}{25\\pi} = \\frac{2}{\\pi}')}.</p>
<p>Svar B.</p>`,

  // KVA
  13: `<p>I: ${tex('\\frac{10}{3} \\approx 3{,}33')}. II: ${tex('\\frac{3 \\cdot 5 \\cdot 26}{13 \\cdot 15} = \\frac{390}{195} = 2')}. I är större.</p>
<p>Svar A.</p>`,

  14: `<p>Vinkeln till vänster om 75° vid basen är ${tex('180° - 75° = 105°')}. I den vänstra triangeln: ${tex('x = 180° - 45° - 105° = 30°')}. I den högra: ${tex('y = 180° - 70° - 75° = 35°')}. II är större.</p>
<p>Svar B.</p>`,

  15: `<p>6 är delbart med bara 3 av de fem talen, sannolikhet ${tex('\\frac{1}{5}')}. 39 är delbart med 3 och 13, sannolikhet ${tex('\\frac{2}{5}')}. II är större.</p>
<p>Svar B.</p>`,

  16: `<p>${tex('x^4 = (x^2)^2 = 16')}. ${tex('(x + x)(x + x) = 2x \\cdot 2x = 4x^2 = 16')}. Lika.</p>
<p>Svar C.</p>`,

  17: `<p>I: ${tex('\\frac{2}{5}')}. II: ${tex('\\frac{5}{15} + \\frac{1}{15} = \\frac{6}{15} = \\frac{2}{5}')}. Lika.</p>
<p>Svar C.</p>`,

  18: `<p>Funktionen är avtagande (lutningen −10), så ett större x ger ett mindre funktionsvärde. Eftersom ${tex('x_1 > x_2')} är ${tex('f(x_1) < f(x_2)')}.</p>
<p>Svar B.</p>`,

  19: `<p>Kvadratens sida är ${tex('x + y')}. Triangeln ABF har basen AB och höjden y, arean ${tex('\\frac{(x + y)y}{2}')}. Triangeln CDE har basen DE och höjden x, arean ${tex('\\frac{(x + y)x}{2}')}. Summan är ${tex('\\frac{(x + y)^2}{2}')}, halva kvadraten. Resten, BCEF, är den andra halvan.</p>
<p>Svar C.</p>`,

  20: `<p>Det finns 26 bläckpennor och 13 andra pennor. Av de 19 trasiga kan som mest 13 vara andra pennor, så minst 6 bläckpennor är trasiga, men det kan vara upp till 19.</p>
<p>Svar D.</p>`,

  21: `<p>Ett av talen måste vara 0. Talen kan vara −2, −1, 0 (z = 0), −1, 0, 1 (z = 1) eller 0, 1, 2 (z = 2).</p>
<p>Svar D.</p>`,

  22: `<p>${tex('xz > yz')} ger ${tex('z(x - y) > 0')}. Eftersom ${tex('x - y > 0')} måste ${tex('z > 0')}.</p>
<p>Svar A.</p>`,

  // NOG
  23: `<p>(1): grisar = 2(hästar + kor) ger hästar + kor = 21, men inte fördelningen. (2) ger bara förhållandet mellan hästar och kor. Tillsammans: kor + kor/2 = 21, så det finns 14 kor.</p>
<p>Svar C.</p>`,

  24: `<p>(1) och (2) säger samma sak: Ida är 0,5 timmar snabbare än Albert. Ingen faktisk tid anges, så det går inte att beräkna hur lång tid de behöver tillsammans.</p>
<p>Svar E.</p>`,

  25: `<p>(1): talen är ${tex('3k')}, ${tex('5k')} och ${tex('7k')} med summan ${tex('15k')}, men k är okänt. (2) ensamt räcker inte. Tillsammans: ${tex('7k - 3k = 28')} ger ${tex('k = 7')} och summan 105.</p>
<p>Svar C.</p>`,

  26: `<p>(1): talgoxen sitter direkt till vänster om bofinken, och eftersom bofinken inte sitter längst till höger och gråsparven inte får sitta bredvid domherren är ordningen domherre, talgoxe, bofink, gråsparv eller gråsparv, talgoxe, bofink, domherre. (2) ensamt ger många möjligheter. Tillsammans utesluts den senare ordningen (talgoxen bredvid gråsparven), så domherren sitter längst till vänster.</p>
<p>Svar C.</p>`,

  27: `<p>(1) säger inget om hur många som blev godkända. (2): 12 godkända elever (y = 12) och 12 flickor (x = 12), så ${tex('\\frac{y}{x} = 1')}. Endast (2) räcker.</p>
<p>Svar B.</p>`,

  28: `<p>(1): produkten av ett udda antal negativa tal är negativ. (2): produkten av alla talen är produkten av de två strukna (positiv) gånger produkten av de övriga (negativ), alltså negativ. Var för sig räcker.</p>
<p>Svar D.</p>`,

  // DTK
  29: `<p>Flest läkarbesök inom specialiserad somatisk vård hade Stockholm (3 281,7), Skåne (1 803,0) och Västra Götaland (1 781,5) tusen. Summan är cirka 6 866 tusen, ungefär 6,9 miljoner.</p>
<p>Svar B.</p>`,

  30: `<p>Läkarbesöken var 27 442,1 tusen av totalt 63 882,4 tusen, cirka 43 procent. Det motsvarar cirkeldiagram C, där den svarta sektorn är drygt 40 procent.</p>
<p>Svar C.</p>`,

  31: `<p>Gotland: 62,7 tusen besök inom specialiserad somatisk vård, och 24,1 tusen inom psykiatrisk vård mot 4,6 tusen inom handikapp-/hjälpmedelsverksamhet, ungefär fem gånger. Jämtland har under 100 000 somatiska besök men förhållandet 29,9 mot 8,9 är bara drygt tre gånger.</p>
<p>Svar D.</p>`,

  32: `<p>Halland: 523,2 tusen läkarbesök i primärvården av totalt 2 028,1 tusen besök, ${tex('\\frac{523}{2028} \\approx 0{,}26')}, alltså cirka 25 procent.</p>
<p>Svar B.</p>`,

  33: `<p>Tillverkningsindustri: EU 15 var 7,6, Luxemburg 1,2 (6,4 under) och Tyskland 11,2 (3,6 över). Kunskapsintensiv tjänstesektor: EU 15 var 32,9, Portugal 19,1 (13,8 under) och Sverige 45,7 (12,8 över). Luxemburg respektive Portugal.</p>
<p>Svar A.</p>`,

  34: `<p>Sveriges genomsnitt inom kunskapsintensiv tjänstesektor var 45,7 procent. ${tex('0{,}457 \\cdot 4\\,223\\,000 \\approx 1\\,930\\,000')}.</p>
<p>Svar C.</p>`,

  35: `<p>Under EU 15-genomsnittet 32,9 låg Irland (31,9), Tyskland (31,0), Österrike (29,3), Italien (26,9), Spanien (24,9), Grekland (22,8) och Portugal (19,1), alltså sju länder.</p>
<p>Svar B.</p>`,

  36: `<p>Plogfårorna i Norra hagen löper från nordnordost till sydsydväst. Den längsta är enligt skalan (50 meter) ungefär 70 meter.</p>
<p>Svar A.</p>`,

  37: `<p>90 meter väster om den resta stenen hamnar man väster om körvägen, ovanför Södra hagens norra del. 290 meter rakt söderut därifrån ligger en grav (R) i Södra hagens södra del.</p>
<p>Svar D.</p>`,

  38: `<p>Den sydligaste inhägnaden av stenmur och staket, längst ner i Södra hagen, är ungefär 45 meter lång och 30 meter bred. Omkretsen är då ungefär 150 meter.</p>
<p>Svar B.</p>`,

  39: `<p>Havstensfjorden ökade från cirka 1 (2003) till 7 (2004) och 125 (2005). Inre Gullmarsfjorden, Brofjordenområdet och Hakefjorden minskade från 2004 till 2005.</p>
<p>Svar B.</p>`,

  40: `<p>2004 var medelfångsten i Yttre Gullmarsfjorden cirka 20 kg per tråltimme och i Norra Bohuslän cirka 3,3. Det är ungefär sex gånger så stort.</p>
<p>Svar C.</p>`,
};
