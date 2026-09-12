// Textförklaringar till högskoleprovet 28 mars 2015, provpass 4 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>${tex('\\frac{x}{3} + \\frac{x}{4} = \\frac{4x + 3x}{12} = \\frac{7x}{12}')}. Så ${tex('7x = 35')} och ${tex('x = 5')}.</p>
<p>Svar C.</p>`,

  2: `<p>Udda talpar med summan 16: 1 och 15, 3 och 13, 5 och 11, 7 och 9. Produkten är störst när talen ligger närmast varandra: ${tex('7 \\cdot 9 = 63')}.</p>
<p>Svar C.</p>`,

  3: `<p>${tex('\\frac{4}{7} \\approx 0{,}57')}, ${tex('\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6} \\approx 0{,}83')}, ${tex('\\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12} \\approx 0{,}58')} och ${tex('\\frac{2}{3} \\approx 0{,}67')}.</p>
<p>Svar B.</p>`,

  4: `<p>Eftersom AB är parallell med CD bildar den lodräta linjen samma vinkel, 40°, med AB som med CD, och vertikalvinkeln vid skärningen med AB är också 40°. I triangeln med hörn i A och i linjens skärningspunkter med AC och AB är vinklarna 30°, 40° och ${tex('x')}, så ${tex('x = 180° - 30° - 40° = 110°')}.</p>
<p>Svar C.</p>`,

  5: `<p>${tex('(2^2)^x = 4^x')}, så ${tex('4^x = 4^4')} ger ${tex('x = 4')}.</p>
<p>Svar B.</p>`,

  6: `<p>${tex('\\frac{24}{5} - \\frac{16}{3} = \\frac{72}{15} - \\frac{80}{15} = -\\frac{8}{15}')}.</p>
<p>Svar D.</p>`,

  7: `<p>Sidan är ${tex('\\frac{84}{6} = 14')} cm. I en regelbunden sexhörning är den längsta diagonalen, som går genom mittpunkten, dubbla sidan: ${tex('2 \\cdot 14 = 28')} cm.</p>
<p>Svar D.</p>`,

  8: `<p>${tex('8 \\cdot 20 = 160')} och ${tex('\\frac{4^3}{4} = 4^2 = 16')}. ${tex('\\sqrt{160 - 16} = \\sqrt{144} = 12')}.</p>
<p>Svar D.</p>`,

  9: `<p>Summan av de tre talen är ${tex('3x')}. Det tredje talet är summan minus de två andra: ${tex('3x - y - z')}.</p>
<p>Svar A.</p>`,

  10: `<p>${tex('x - w = -y')} ger ${tex('w = x + y')}. Om ${tex('x = 0')} blir ${tex('w = y')}, och om ${tex('y = 0')} blir ${tex('w = x')}, men talen ska vara olika. Alltså måste ${tex('z')} vara det tal som gör produkten ${tex('xyz')} till noll.</p>
<p>Svar C.</p>`,

  11: `<p>${tex('3 = 3k - 3')} ger ${tex('k = 2')}. För ${tex('x = -3')}: ${tex('y = 2 \\cdot (-3) - 3 = -9')}.</p>
<p>Svar A.</p>`,

  12: `<p>${tex('\\sqrt{x^5} \\cdot \\sqrt{x} = \\sqrt{x^6} = x^3')}. Så ${tex('\\frac{1}{x^3} = 8')}, alltså ${tex('x^3 = \\frac{1}{8}')} och ${tex('x = \\frac{1}{2}')}.</p>
<p>Svar A.</p>`,

  // KVA
  13: `<p>Utfallen krona-krona, krona-klave, klave-krona och klave-klave är lika sannolika. Två av dem har samma sida och två olika sidor, så båda sannolikheterna är ${tex('\\frac{1}{2}')}.</p>
<p>Svar C.</p>`,

  14: `<p>De 40 vänsterhänta kan fördela sig på många sätt: alla 30 flickor och 10 pojkar, eller 40 pojkar, eller något däremellan. Antalet vänsterhänta pojkar går inte att avgöra.</p>
<p>Svar D.</p>`,

  15: `<p>I: ${tex('9 + 144 - 25 = 128')}. II: ${tex('9 - 144 + 25 = -110')}. I är större.</p>
<p>Svar A.</p>`,

  16: `<p>${tex('x - y = y - x')} ger ${tex('2x = 2y')}, alltså ${tex('x = y')}, men det säger inget om värdet på ${tex('x')}. Det kan vara positivt, negativt eller noll.</p>
<p>Svar D.</p>`,

  17: `<p>${tex('h(3) = 15')} och ${tex('g(3) = -4')}. I: ${tex('15 - (-4) = 19')}. II: ${tex('15 + (-4) = 11')}. I är större.</p>
<p>Svar A.</p>`,

  18: `<p>Linjen från C bildar 80° med AB på A-sidan, så i triangeln med hörnen A, C och linjens fotpunkt är vinkeln vid C ${tex('180° - 60° - 80° = 40°')}. Höjden från A delar vinkeln A mitt itu, 30°. I triangeln med hörnen A, C och linjernas skärningspunkt är vinkeln vid skärningspunkten ${tex('180° - 30° - 40° = 110°')}, och ${tex('x')} är dess sidovinkel, ${tex('70°')}. Båda är större än 60°.</p>
<p>Svar A.</p>`,

  19: `<p>${tex('\\text{II} - \\text{I} = (x - y + z) - (x - y - z) = 2z')}, som är positivt eftersom ${tex('z > 0')}. II är större.</p>
<p>Svar B.</p>`,

  20: `<p>${tex('\\dfrac{x/z}{w/y} = \\frac{x}{z} \\cdot \\frac{y}{w} = \\frac{xy}{zw}')}, så de två rotuttrycken är lika.</p>
<p>Svar C.</p>`,

  21: `<p>Om de lika sidorna är 12 cm är den tredje ${tex('40 - 24 = 16')} cm, och den största sidan är 16 cm. Om den udda sidan är 12 cm är de lika sidorna 14 cm var. Båda trianglarna är möjliga, så det går inte att avgöra.</p>
<p>Svar D.</p>`,

  22: `<p>${tex('P^2 = 10Q + P')} ger ${tex('P(P - 1) = 10Q')}. Med ensiffriga tal fungerar ${tex('P = 5')} (${tex('25 = 10 \\cdot 2 + 5')}, Q = 2) och ${tex('P = 6')} (${tex('36 = 10 \\cdot 3 + 6')}, Q = 3). I båda fallen är P större än Q.</p>
<p>Svar A.</p>`,

  // NOG
  23: `<p>(1) ger summan av tre längder, ${tex('3 \\cdot 183 = 549')} cm, och (2) summan av de två andra, ${tex('2 \\cdot 165 = 330')} cm. Var för sig räcker de inte, men tillsammans blir medelvärdet ${tex('\\frac{549 + 330}{5} = 175{,}8')} cm.</p>
<p>Svar C.</p>`,

  24: `<p>(2): varje platta är ${tex('0{,}3 \\cdot 0{,}3 = 0{,}09')} m², så antalet är ${tex('\\frac{0{,}99}{0{,}09} = 11')}. (1) ger bara den totala vikten, inte vikten per platta. Endast (2) räcker.</p>
<p>Svar B.</p>`,

  25: `<p>Kalla summan ${tex('S')} och antalet ${tex('n')}. (1) ger ${tex('\\frac{S}{n - 8} = \\frac{S}{n} + 20')}, en ekvation med två obekanta. (2) ger bara ${tex('n = 20')}. Tillsammans: ${tex('\\frac{S}{12} - \\frac{S}{20} = 20')} ger ${tex('\\frac{2S}{60} = 20')}, alltså ${tex('S = 600')} kr.</p>
<p>Svar C.</p>`,

  26: `<p>(1): den normala tiden ${tex('t')} uppfyller ${tex('1{,}5t = t + 5')}, så ${tex('t = 10')} minuter. (2) ger sträckan men ingen hastighet. Endast (1) räcker.</p>
<p>Svar A.</p>`,

  27: `<p>(2): vatten och sand är 31,2 kg, så cementen är ${tex('40 - 31{,}2 = 8{,}8')} kg. (1) ger bara att vattnet är 3,2 kg, inte hur cement och sand fördelas. Endast (2) räcker.</p>
<p>Svar B.</p>`,

  28: `<p>${tex('20a + 5b = 125')} ger ${tex('b = 25 - 4a')}, alltså 25, 21, 17, 13, 9, 5 eller 1 femkronor beroende på antalet sedlar 0 till 6. (1): färre än 5 femkronor betyder 1 femkrona. (2): fler än 5 sedlar betyder 6 sedlar och 1 femkrona. Var för sig räcker.</p>
<p>Svar D.</p>`,

  // DTK
  29: `<p>Östergötlands län minskade från 285 till 90, alltså med 195. Blekinge minskade med 183, Stockholms län med 161 och Kronobergs län med 128.</p>
<p>Svar D.</p>`,

  30: `<p>1835: ${tex('433 + 200 = 633')} av totalt 2 879. ${tex('\\frac{633}{2\\,879} \\approx 0{,}22')}, alltså cirka 20 procent.</p>
<p>Svar B.</p>`,

  31: `<p>Kvinnornas andel: 1845 ${tex('\\frac{1\\,737}{6\\,526} \\approx 27')} procent, 1865 ${tex('\\frac{533}{3\\,184} \\approx 17')} procent, 1885 ${tex('\\frac{645}{4\\,219} \\approx 15')} procent och 1900 ${tex('\\frac{759}{2\\,330} \\approx 33')} procent.</p>
<p>Svar D.</p>`,

  32: `<p>25, 14 och 44 av 83 barn är cirka 30, 17 och 53 procent. Det stämmer med likformiga rektanglar, där den vita delen når 30 procent, den grå till 46 procent och den svarta utgör resten.</p>
<p>Svar B.</p>`,

  33: `<p>Antalet barn med 11 till 20 poäng: ${tex('3 + 3 + 6 + 2 + 11 + 5 + 4 + 8 + 4 + 6 = 52')}. ${tex('\\frac{52}{83} \\approx 0{,}63')}.</p>
<p>Svar B.</p>`,

  34: `<p>För uppgiften koordinater är både den grå och den svarta delen 20 procent. Helt rätt svarade 60 procent, ${tex('0{,}6 \\cdot 83 \\approx 50')} barn.</p>
<p>Svar B.</p>`,

  35: `<p>Skalan visar att 500 meter är ungefär lika långt som avståndet från kyrkan till kartans mitt. 500 meter rakt sydost om kyrkan, snett ned till höger, ligger ett område med pilar, alltså äng.</p>
<p>Svar D.</p>`,

  36: `<p>Vägen från Lindholmen (G) slingrar sig söderut till Edstorp (H). Mätt med skalan, där 500 meter är cirka 23 millimeter, är vägsträckan cirka 730 meter.</p>
<p>Svar C.</p>`,

  37: `<p>Västergården (C) ligger cirka 300 meter nordnordväst om Skattegården (F). Norre Sjöholm ligger öster om Västergården, och Berg och Skattegården ligger sydväst respektive sydsydväst om Östre Sjöholm.</p>
<p>Svar A.</p>`,

  38: `<p>Kvinnor 2001: cirka 565 fall per 100 000 i åldern 65–69 år och cirka 55 i åldern 45–49 år, alltså ungefär 10 gånger så många.</p>
<p>Svar B.</p>`,

  39: `<p>1997 var antalet fall i åldern 50–54 år knappt 400 per 100 000 bland män och cirka 100 bland kvinnor. Skillnaden är närmast 250 per 100 000.</p>
<p>Svar B.</p>`,

  40: `<p>1987: män cirka 1 350 och kvinnor cirka 375, tillsammans 1 725. 2006: cirka 780 och 250, tillsammans 1 030. ${tex('\\frac{1\\,725 - 1\\,030}{1\\,725} \\approx 0{,}40')}, alltså 40 procent.</p>
<p>Svar B.</p>`,
};
