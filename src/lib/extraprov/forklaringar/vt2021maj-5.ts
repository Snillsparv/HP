// Textförklaringar till högskoleprovet 8 maj 2021, provpass 5 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Multiplicera ut: ${tex('4x - 8 = -2x - 8')}.</p>
<p>${tex('6x = 0')} ger ${tex('x = 0')}.</p>
<p>Svar A.</p>`,

  2: `<p>Fyra tal med medelvärdet 16 har summan 64.</p>
<p>${tex('13 + 14 + 26 = 53')}, så ${tex('x = 64 - 53 = 11')}.</p>
<p>Svar A.</p>`,

  3: `<p>Parentesen: ${tex('\\frac{1}{2} + \\frac{1}{6} = \\frac{3}{6} + \\frac{1}{6} = \\frac{4}{6} = \\frac{2}{3}')}.</p>
<p>${tex('\\frac{1}{3} \\cdot \\frac{2}{3} = \\frac{2}{9}')}.</p>
<p>Svar D.</p>`,

  4: `<p>${tex('f(2) = 8 - 4 = 4')}.</p>
<p>${tex('g(2) = -3 \\cdot 4 - 12 = -24')}.</p>
<p>Svar A.</p>`,

  5: `<p>${tex('0{,}4x = 54')} ger ${tex('x = \\frac{54}{0{,}4} = 135')}.</p>
<p>Svar C.</p>`,

  6: `<p>Talen är ${tex('x, x + 1, x + 2, x + 3')}.</p>
<p>${tex('(z + w) - (x + y) = (2x + 5) - (2x + 1) = 4')}.</p>
<p>Svar D.</p>`,

  7: `<p>Täljaren: ${tex('a^5 \\cdot a^{-3} = a^2')}. Nämnaren: ${tex('a^{-8} \\cdot a^2 = a^{-6}')}.</p>
<p>${tex('\\frac{a^2}{a^{-6}} = a^{2 - (-6)} = a^8')}.</p>
<p>Svar D.</p>`,

  8: `<p>Korsmultiplicera: ${tex('4 \\cdot 6 = 5x')}, så ${tex('x = \\frac{4 \\cdot 6}{5}')}.</p>
<p>Svar A.</p>`,

  9: `<p>Burkens volym är ${tex('\\pi \\cdot 2^2 \\cdot 5 = 20\\pi \\approx 63')} cm<sup>3</sup>, alltså cirka 0,063 liter.</p>
<p>${tex('\\frac{0{,}6}{0{,}063} \\approx 9{,}5')}, så det behövs 10 burkar.</p>
<p>Svar B.</p>`,

  10: `<p>Kvadraten med arean 9 cm<sup>2</sup> har sidan 3 cm, och kvadraten med arean 25 cm<sup>2</sup> har sidan 5 cm. Triangeln har alltså en katet på 3 cm och hypotenusan 5 cm.</p>
<p>Den andra kateten är ${tex('\\sqrt{25 - 9} = 4')} cm, och arean är ${tex('\\frac{3 \\cdot 4}{2} = 6')} cm<sup>2</sup>.</p>
<p>Svar A.</p>`,

  11: `<p>${tex('\\sqrt{36 \\cdot 10^{36}} = \\sqrt{36} \\cdot \\sqrt{10^{36}} = 6 \\cdot 10^{18}')}.</p>
<p>Svar B.</p>`,

  12: `<p>En punkt ligger i den undre halvan om dess <i>y</i>-värde är mindre än linjens värde ${tex('\\frac{x}{2}')} i samma punkt.</p>
<p>För (23, 0): linjen ger ${tex('y = 11{,}5')}, och 0 är mindre. För (−23, 23), (−23, 0) och (0, 23) ligger punkten ovanför linjen.</p>
<p>Svar B.</p>`,

  // KVA
  13: `<p>25 promille är 25 tusendelar: ${tex('0{,}025 \\cdot 40\\,000 = 1\\,000')}, mindre än 1 600.</p>
<p>Svar B.</p>`,

  14: `<p>Villkoret betyder att det finns högst 3 blå kulor (annars kunde man plocka fyra blå). Antalet röda kan vara hur stort som helst.</p>
<p>Påsen kan innehålla 1 röd och 3 blå (4 kulor) eller 100 röda och 3 blå. Informationen är otillräcklig.</p>
<p>Svar D.</p>`,

  15: `<p>Kvantitet I: ${tex('2x^2')}. Kvantitet II: ${tex('\\frac{3}{4}\\pi x^2 \\approx 2{,}36x^2')}.</p>
<p>II är större. Svar B.</p>`,

  16: `<p>Lös ut <i>y</i>: ${tex('2y = 3 + 4x')}, så ${tex('y = 1{,}5 + 2x')}.</p>
<p>Svar C.</p>`,

  17: `<p>Det andra talet är ${tex('70 - x')}. Om ${tex('x = 40')} är I större, om ${tex('x = 30')} är II större.</p>
<p>Informationen är otillräcklig. Svar D.</p>`,

  18: `<p>Kvantitet I: ${tex('\\frac{3}{8} \\cdot \\frac{6}{11} = \\frac{18}{88}')}.</p>
<p>Kvantitet II: att dela med ${tex('\\frac{11}{6}')} är att multiplicera med ${tex('\\frac{6}{11}')}, så det blir också ${tex('\\frac{18}{88}')}.</p>
<p>Svar C.</p>`,

  19: `<p>Ett negativt tal upphöjt till ett jämnt tal är positivt, så ${tex('(-7)^x > 0')}.</p>
<p>${tex('x + 1')} är udda, så ${tex('(-7)^{x+1} < 0')}. I är större.</p>
<p>Svar A.</p>`,

  20: `<p>Linjen går genom origo och (−3, 3), så den har ekvationen ${tex('y = -x')}.</p>
<p>För varje punkt på linjen är ${tex('y_1 = -x_1')}, alltså ${tex('x_1 + y_1 = 0')}.</p>
<p>Svar C.</p>`,

  21: `<p>Förhållandet 1:5:9 ger ${tex('1 + 5 + 9 = 15')} delar, och ${tex('\\frac{180^\\circ}{15} = 12^\\circ')} per del.</p>
<p>Den minsta vinkeln är 12°, mindre än 15°.</p>
<p>Svar B.</p>`,

  22: `<p>${tex('(x - 3)(x + 2) = 0')} har lösningarna 3 och −2, den positiva är 3.</p>
<p>${tex('(x + 3)(x - 2) = 0')} har lösningarna −3 och 2, den positiva är 2. I är större.</p>
<p>Svar A.</p>`,

  // NOG
  23: `<p>(1) Cilla är fladdermus och varulven är Allan eller Billy, så Dolly är spöke eller zombie. Räcker inte.</p>
<p>(2) Allan är spöke och zombien är Billy eller Dolly, så Dolly är zombie, fladdermus eller varulv. Räcker inte.</p>
<p>Tillsammans: det enda som finns i båda listorna är zombie.</p>
<p>Svar C.</p>`,

  24: `<p>(1) Vi vet att 15 vita knappar har fyra hål och att de vita är dubbelt så många som de svarta, men inte hur många vita som har två hål. Räcker inte.</p>
<p>(2) Samma förhållande mellan färgerna och att alla svarta har fyra hål. Inga antal. Räcker inte.</p>
<p>Tillsammans: antalet vita knappar med två hål är fortfarande okänt, så totalen kan inte bestämmas.</p>
<p>Svar E.</p>`,

  25: `<p>(1) Totalt 50 näckrosor men ingen fördelning. Räcker inte.</p>
<p>(2) Med <i>g</i> gula och <i>v</i> vita: ${tex('\\frac{g + v/2}{g + v} = 0{,}86')} ger ${tex('g + 0{,}5v = 0{,}86g + 0{,}86v')}, alltså ${tex('0{,}14g = 0{,}36v')}. Det ger bara förhållandet mellan gula och vita. Räcker inte.</p>
<p>Tillsammans: förhållandet ${tex('g = \\frac{36}{14}v')} och ${tex('g + v = 50')} ger ${tex('v = 14')} och ${tex('g = 36')}.</p>
<p>Svar C.</p>`,

  26: `<p>(1) Röd är uppe till vänster. Den gula ligger direkt till höger om den blå, så de två ligger i samma rad, vilket måste vara den nedre raden: blå nere till vänster och gul nere till höger. Grön blir då uppe till höger. Räcker.</p>
<p>(2) Röd över blå och grön över gul ger två kolumner, men vi vet inte vilken kolumn som är till vänster. Räcker inte.</p>
<p>Svar A.</p>`,

  27: `<p>(1) ${tex('\\sqrt{26} > \\sqrt{25} = 5')}, så ${tex('x > 5')}. Ja. Räcker.</p>
<p>(2) ${tex('\\sqrt{x} > 2{,}5')} ger ${tex('x > 6{,}25')}, alltså ${tex('x > 5')}. Ja. Räcker.</p>
<p>Var för sig räcker. Svar D.</p>`,

  28: `<p>(1) Fyra ettor och tre tvåor där två ettor aldrig står intill varandra: ettorna måste vara åtskilda av tvåorna, vilket bara ger 1212121. Räcker.</p>
<p>(2) Varje tvåa följs direkt av en etta. Det ger flera möjligheter, till exempel 1212121, 2121211 och 2112121. Räcker inte.</p>
<p>Svar A.</p>`,

  // DTK: Kulturmedel
  29: `<p>Stockholms län: 188 kronor per invånare 2006 och 776 kronor per invånare 2012.</p>
<p>${tex('\\frac{776}{188} \\approx 4{,}1')}, alltså ungefär fyra gånger så stort.</p>
<p>Svar B.</p>`,

  30: `<p>2007 fick Västra Götalands län mest, 437 710 tkr, och Kronobergs län minst, 40 375 tkr.</p>
<p>${tex('437\\,710 - 40\\,375 = 397\\,335')} tkr, alltså 397 335 000 kronor.</p>
<p>Svar D.</p>`,

  31: `<p>2009: Stockholm 1 434 185 + Skåne 313 000 + Västra Götaland 486 030 = 2 233 215 tkr av totalt 3 688 491 tkr.</p>
<p>${tex('\\frac{2\\,233\\,215}{3\\,688\\,491} \\approx 0{,}61')}, närmast 60 procent.</p>
<p>Svar C.</p>`,

  // DTK: Månen
  32: `<p>Halvmåne är 50 procent på den tjocka kurvan. Kurvan stiger från cirka 28 procent den 21 augusti till 100 procent den 30 augusti, och passerar 50 procent ungefär den 23 augusti. Den passerar 50 procent igen på väg ner omkring den 6 september.</p>
<p>Av alternativen ligger 23 augusti närmast halvmåne. 29 augusti är nära fullmåne, 3 september cirka 80 procent och 7 september cirka 40 procent.</p>
<p>Svar A.</p>`,

  33: `<p>Den tunna kurvan svänger upp och ner varje dygn. Som mest når den cirka 48 grader över horisonten (omkring 7 september) och som lägst cirka 60 grader under (omkring 26 augusti), men frågan gäller skillnaden inom ett dygn.</p>
<p>Omkring 13 september går kurvan från cirka +38 till cirka −27 grader under samma dygn, en skillnad på cirka 65 grader. Inget alternativ närmare passar.</p>
<p>Svar D.</p>`,

  34: `<p>Läs av den tjocka kurvan (fas) och den tunna kurvans lägsta punkt för varje datum. 25 augusti: fas cirka 60 procent men lägsta läge cirka −50 grader. 10 september: fas cirka 25 procent. 16 september: fas cirka 5 procent.</p>
<p>4 september: fasen är cirka 65–70 procent och den tunna kurvans lägsta punkt ligger cirka 20 grader under horisonten.</p>
<p>Svar B.</p>`,

  // DTK: Arbetsinkomst
  35: `<p>Nedersta diagrammet, 2007. Män: 20–29 år cirka 262 000 mot 152 000 (skillnad 110 000), 30–39 år cirka 52 000, 40–49 år cirka 108 000, 50–64 år cirka 330 000 mot 190 000 (skillnad 140 000). Störst för 50–64 år.</p>
<p>Kvinnor: 20–29 år cirka 224 000 mot 154 000 (skillnad 70 000), 30–39 år cirka 63 000, 40–49 år cirka 58 000, 50–64 år cirka 62 000. Störst för 20–29 år.</p>
<p>Svar C.</p>`,

  36: `<p>Arbetare män 2007: cirka 285 000 mot 190 000, skillnad 95 000. Tjänstemän män 2002: cirka 350 000 mot 205 000, skillnad 145 000. Tjänstemän 2005: cirka 362 000 mot 257 000, skillnad 105 000. Tjänstemän 2007: cirka 382 000 mot 268 000, skillnad 114 000.</p>
<p>Störst är tjänstemän 2002.</p>
<p>Svar B.</p>`,

  37: `<p>Bland 30–39-åringar är skillnaden för män bara cirka 52 000 kronor (317 000 mot 265 000), medan den för kvinnor är cirka 63 000 kronor (240 000 mot 177 000).</p>
<p>I de andra åldersgrupperna är männens skillnad mer än 100 000 kronor mot kvinnornas 58 000 till 70 000.</p>
<p>Svar B.</p>`,

  38: `<p>Från 2002 till 2007: arbetare män tillsvidare cirka 257 000 till 285 000 (+28 000), arbetare män tidsbegränsat cirka 170 000 till 190 000 (+20 000), tjänstemän män tillsvidare cirka 350 000 till 382 000 (+32 000), tjänstemän män tidsbegränsat cirka 205 000 till 268 000 (+63 000).</p>
<p>Svar D.</p>`,

  // DTK: Hästskjutsar
  39: `<p>Jämför cirklarnas storlek med teckenförklaringen. Rödå har en cirkel som motsvarar cirka 200 skjutsar. Flest skjutsar utgick från Umeå, vars cirkel motsvarar cirka 1 000.</p>
<p>Skillnaden är cirka 800.</p>
<p>Svar C.</p>`,

  40: `<p>Dorotea ligger längst ner till vänster på kartan och Norsjö i den övre mitten. Dorotea ligger alltså väster och något söder om Norsjö, i västsydvästlig riktning.</p>
<p>Mät med skalstrecket (50 km): fågelvägen är drygt tre skalstreck, cirka 165 km.</p>
<p>Svar D.</p>`,
};
