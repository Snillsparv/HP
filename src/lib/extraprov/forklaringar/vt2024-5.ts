// Textförklaringar till högskoleprovet 13 april 2024, provpass 5 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  1: `<p>Samla <i>x</i> på ena sidan: ${tex('13 + 31 = 8x - 4x')}, alltså ${tex('44 = 4x')} och ${tex('x = 11')}.</p>
<p>Kontroll: ${tex('4 \\cdot 11 + 13 = 57')} och ${tex('8 \\cdot 11 - 31 = 57')}. Svar D.</p>`,

  2: `<p>Läs av linjen: den skär <i>y</i>-axeln i −3 och går två steg ner för varje steg åt höger, så ${tex('y = -2x - 3')}.</p>
<p>Sätt in punkterna. (1, −5): ${tex('-2 - 3 = -5')} stämmer. (−5, 1) skulle ge 7, (−3, −2) skulle ge 3 och (3, −3) skulle ge −9. Svar C.</p>`,

  3: `<p>Räkna ut parentesen först: ${tex('\\frac{1}{2} + \\frac{1}{6} = \\frac{3}{6} + \\frac{1}{6} = \\frac{4}{6} = \\frac{2}{3}')}.</p>
<p>${tex('\\frac{1}{3} - \\frac{2}{3} = -\\frac{1}{3}')}. Svar B.</p>`,

  4: `<p>Om medelvärdena är lika är också summorna lika, eftersom det är tre tal i båda grupperna. ${tex('17 + 21 + 44 = 82')}.</p>
<p>${tex('63 + 73 + x = 82')} ger ${tex('x = 82 - 136 = -54')}. Svar A.</p>`,

  5: `<p>Julia springer 2 km på 12 minuter, alltså ${tex('\\frac{1}{6}')} km per minut. Anna går 2 km på 24 minuter, alltså ${tex('\\frac{1}{12}')} km per minut. Tillsammans närmar de sig varandra med ${tex('\\frac{1}{6} + \\frac{1}{12} = \\frac{1}{4}')} km per minut.</p>
<p>12 km delat med ${tex('\\frac{1}{4}')} km per minut är 48 minuter. Svar C.</p>`,

  6: `<p>D: ${tex('\\left(\\frac{7}{\\sqrt{7}}\\right)^2 = \\frac{49}{7} = 7')}.</p>
<p>A är ungefär ${tex('5{,}4 + 4{,}5 = 9{,}9')}. B är ${tex('7 - 1 = 6')}. C är ${tex('2 + 3{,}5 = 5{,}5')}. Svar D.</p>`,

  7: `<p>18 procent är ${tex('\\frac{18}{100}')}. ${tex('\\frac{18}{100} \\cdot \\frac{2}{5} = \\frac{36}{500}')}.</p>
<p>Förkorta med 4: ${tex('\\frac{9}{125}')}. Svar C.</p>`,

  8: `<p>Kvadraten har arean ${tex('4 \\cdot 4 = 16')} cm². Den del av cirkeln som ligger inuti kvadraten är en fjärdedel av cirkeln, eftersom hörnet vid M är 90°: ${tex('\\frac{\\pi \\cdot 2^2}{4} = \\pi')} cm².</p>
<p>Skuggad area: ${tex('16 - \\pi')} cm². Svar D.</p>`,

  9: `<p>Sätt in ${tex('x = 3')} i varje ekvation och se om <i>y</i> blir 1.</p>
<p>A: ${tex('-3 + 4 = 1')} stämmer. B ger 5, C ger 7 och D ger 10. Svar A.</p>`,

  10: `<p>Korsmultiplicera ${tex('\\frac{a}{b} = \\frac{b}{c}')}: ${tex('b^2 = ac')}. Sätt in ${tex('c = 2a')}: ${tex('b^2 = 2a^2')}.</p>
<p>Eftersom talen är positiva är ${tex('b = \\sqrt{2a^2} = a\\sqrt{2}')}. Svar A.</p>`,

  11: `<p>Skriv ${tex('2x \\cdot 10^3')} som ${tex('0{,}2x \\cdot 10^4')}. Då blir vänsterledet ${tex('x \\cdot 10^4 - 0{,}2x \\cdot 10^4 = 0{,}8x \\cdot 10^4')}.</p>
<p>${tex('0{,}8x = 3{,}2')} ger ${tex('x = 4')}. Svar A.</p>`,

  12: `<p>K<sub>1</sub> har arean 4 cm², och 25 procent av den är 1 cm². Det överlappande området är alltså 1 cm², och det är 20 procent av K<sub>2</sub>.</p>
<p>K<sub>2</sub> har arean ${tex('\\frac{1}{0{,}2} = 5')} cm², så sidan är ${tex('\\sqrt{5}')} cm. Svar C.</p>`,

  13: `<p>Testa tal. ${tex('x = 1')}, ${tex('y = 2')} uppfyller ${tex('3 > 2')}, och då är II störst. ${tex('x = 1')}, ${tex('y = 0')} uppfyller ${tex('3 > 0')}, och då är I störst.</p>
<p>Informationen är otillräcklig. Svar D.</p>`,

  14: `<p>Dela den vita triangeln i tre delar från sexhörningens mittpunkt. Varje del är en likbent triangel med toppvinkeln 120° och två sidor lika med sexhörningens "radie", precis som var och en av de tre skuggade hörntrianglarna (vars toppvinkel är sexhörningens vinkel 120° och vars sidor är sexhörningens sida).</p>
<p>De sex trianglarna är alltså lika stora, och tre av dem är skuggade. Skuggat och oskuggat är vardera hälften. Svar C.</p>`,

  15: `<p>Dela med 2: ${tex('x - 4 = \\frac{1}{4}')}, alltså ${tex('x = 4{,}25')}.</p>
<p>Det är mindre än 5. Svar B.</p>`,

  16: `<p>${tex('f(a) = 4a + 8')}.</p>
<p>${tex('g(2a) = 2 \\cdot 2a + 4 = 4a + 4')}. Kvantitet I är alltid 4 större. Svar A.</p>`,

  17: `<p>Med tio värden i storleksordning är medianen medelvärdet av det femte och det sjätte värdet.</p>
<p>Tar man bort det största och det minsta återstår åtta värden, och medianen blir medelvärdet av det fjärde och det femte av dem. Det är exakt samma två tal som förut, så medianen är fortfarande 25. Svar C.</p>`,

  18: `<p>${tex('4 \\cdot 10^{-2} = \\frac{4}{100} = 0{,}04')}.</p>
<p>${tex('\\frac{1}{400} = 0{,}0025')}. Svar A.</p>`,

  19: `<p>Båda kvoterna är negativa, eftersom <i>x</i> är negativt och <i>y</i> positivt. Testa värden.</p>
<p>${tex('x = -0{,}5')}, ${tex('y = 0{,}5')} ger −1 och −1. ${tex('x = -0{,}5')}, ${tex('y = 0{,}25')} ger I = −0,5 och II = −2, så I är störst. ${tex('x = -0{,}25')}, ${tex('y = 0{,}5')} ger I = −2 och II = −0,5, så II är störst. Svar D.</p>`,

  20: `<p>Sidan CD bildar 20° med L<sub>1</sub>. Sidan AD är vinkelrät mot CD, så AD bildar ${tex('90° - 20° = 70°')} med L<sub>1</sub>. Eftersom L<sub>2</sub> är parallell med L<sub>1</sub> bildar AD samma vinkel med L<sub>2</sub>, alltså ${tex('x = 70°')}.</p>
<p>Kvantitet II: ${tex('70° - 50° = 20°')}. Lika. Svar C.</p>`,

  21: `<p>Multiplicera ut: I = ${tex('x^2 + 2x - 8')} och II = ${tex('x^2 - 2x - 8')}.</p>
<p>Skillnaden I − II är ${tex('4x')}, som är negativ eftersom ${tex('x < 0')}. II är större. Svar B.</p>`,

  22: `<p>Priset multipliceras med 1,2 varje år: ${tex('1{,}2^2 = 1{,}44')}, ${tex('1{,}2^3 \\approx 1{,}73')} och ${tex('1{,}2^4 \\approx 2{,}07')}.</p>
<p>Priset har fördubblats efter mindre än 4 år, alltså kortare tid än 5 år. Svar B.</p>`,

  23: `<p>(1): Apoteket före biblioteket, men cykelhandlaren kan komma först, i mitten eller sist. Räcker inte.</p>
<p>(2): Cykelhandlaren i mitten, men apoteket och biblioteket kan komma i vilken ordning som helst. Räcker inte.</p>
<p>Tillsammans: apotek, cykelhandlare, bibliotek. Svar C.</p>`,

  24: `<p>Vinkeln <i>v</i> och 130° bildar tillsammans en rak vinkel, så ${tex('v = 50°')} är känt redan från figuren.</p>
<p>(1): ${tex('u = 180° - 50° - 65° = 65°')}. Räcker. (2): Säger bara det vi redan vet. Räcker inte. Svar A.</p>`,

  25: `<p>(1): Det saknas ${tex('\\frac{3}{7}')} av tanken, och det är 1 200 liter. Hela tanken är ${tex('\\frac{1\\,200 \\cdot 7}{3} = 2\\,800')} liter. Räcker.</p>
<p>(2): ${tex('\\frac{4}{7}V - 200 = \\frac{1}{2}V')} ger ${tex('\\frac{1}{14}V = 200')} och ${tex('V = 2\\,800')}. Räcker.</p>
<p>Svar D.</p>`,

  26: `<p>(1): 150 jämna hus, varav 60 längs öst-västliga gator och 90 längs nord-sydliga. Inget om de udda. Räcker inte.</p>
<p>(2): En tredjedel av de udda husen ligger längs öst-västliga gator, lika många som de jämna där. Men inga antal. Räcker inte.</p>
<p>Tillsammans: 60 jämna längs öst-västliga gator betyder 60 udda där, och det är en tredjedel av de udda. Totalt 180 udda hus. Svar C.</p>`,

  27: `<p>(1): ${tex('A + 100 = 3A')} ger ${tex('A = 50')}. Räcker.</p>
<p>(2): ${tex('B = 4(A - 25)')} innehåller två obekanta. Räcker inte.</p>
<p>Svar A.</p>`,

  28: `<p>(1): ${tex('w = x + y')}. Om <i>x</i> och <i>y</i> är positiva är <i>w</i> störst, men om de är negativa är <i>w</i> minst. Räcker inte.</p>
<p>(2): <i>z</i> är medelvärdet av <i>x</i> och <i>y</i> och ligger mellan dem. Vi vet inte vilket av <i>x</i> och <i>y</i> som är störst. Räcker inte.</p>
<p>Tillsammans: ${tex('x = 1')}, ${tex('y = 3')} ger ${tex('z = 2')}, ${tex('w = 4')}, så <i>w</i> är störst. Men ${tex('x = -1')}, ${tex('y = -3')} ger ${tex('z = -2')}, ${tex('w = -4')}, så <i>x</i> är störst. Svar E.</p>`,

  29: `<p>Fritidsresor utrikes är det ljusgrå fältet. År 2016 är det cirka 15 miljoner av totalt cirka 49 miljoner resor, ungefär 30 procent.</p>
<p>År 2011 och 2012 är fältet ungefär lika brett men totalen är cirka 60 miljoner, och 2014 är fältet cirka 12 miljoner av 50. Svar D.</p>`,

  30: `<p>Jämför fältens bredd 2012 och 2013. Fritidsresor inrikes (mörkgrått) krymper från cirka 37 till cirka 34 miljoner, och både fritidsresor utrikes (ljusgrått) och affärsresor utrikes (svart) blir något smalare.</p>
<p>Det vita fältet, affärsresor inrikes, blir däremot något bredare, från cirka 4 till cirka 4,5 miljoner. Svar C.</p>`,

  31: `<p>År 2016: affärsresor utrikes cirka 3 miljoner och fritidsresor utrikes cirka 15 miljoner, tillsammans cirka 18 miljoner utrikesresor. Totalt cirka 49 miljoner resor.</p>
<p>${tex('\\frac{18}{49} \\approx 0{,}37')}, alltså ungefär 35 procent utrikes och 65 procent inrikes. Svar C.</p>`,

  32: `<p>En femtedel av 503 är ungefär 100. Illegal jakt 20 plus El 84 är 104.</p>
<p>De andra paren: 20 + 4 = 24, 84 + 4 = 88 och 4 + 16 = 20. Svar A.</p>`,

  33: `<p>I juni är stapeln 39 hög, varav den svarta delen (okänd dödsorsak) är 24. Känd dödsorsak: ${tex('39 - 24 = 15')}.</p>
<p>${tex('24 : 15 = 8 : 5')}. Svar D.</p>`,

  34: `<p>Totalt inkom 503 kungsörnar, och för 414 av dem angavs fyndmånad (totalen i det nedre diagrammet).</p>
<p>${tex('\\frac{414}{503} \\approx 0{,}82')}. Svar D.</p>`,

  35: `<p>Gävleborgs län: summa 4 434, därav jordbruk 1 774.</p>
<p>${tex('\\frac{1\\,774}{4\\,434} \\approx 0{,}40')}. Svar C.</p>`,

  36: `<p>Störst andel har Gotlands län med 6,44 procent. De 1 744 personerna inom sektorn är alltså 6,44 procent av alla förvärvsarbetande i länet.</p>
<p>${tex('\\frac{1\\,744}{0{,}0644} \\approx 27\\,000')}. Svar B.</p>`,

  37: `<p>Var femte är 20 procent. Räkna andelen kvinnor: Stockholm ${tex('\\frac{1\\,630}{4\\,353} \\approx 37\\,\\%')}, Södermanland ${tex('\\frac{665}{2\\,682} \\approx 25\\,\\%')}, Kalmar ${tex('\\frac{1\\,055}{4\\,965} \\approx 21\\,\\%')} och Skåne ${tex('\\frac{3\\,343}{12\\,458} \\approx 27\\,\\%')}.</p>
<p>Svar C.</p>`,

  38: `<p>Titta på Kockgård (E) längst upp till vänster. Rakt norr om den streckade gårdsplanen ligger byggnad 1 (byggning) och 2 (stuga), och rakt söder om den ligger raden 24, 17 (stall), 19 (stallslider) och 14.</p>
<p>På Ryssgård (D) ligger 17 och 19 söder om gårdsplanen, men norr om den ligger lada och bodar (8, 14, 25, 4). På Östra Flintgård (G) ligger stallet väster om gårdsplanen, och på den nordöstra Stamgården finns inget stall söder om planen. Svar A.</p>`,

  39: `<p>Torvhuset (20) ligger intill stugan (2) strax norr om den nordöstra Stamgårdens (F) gårdsplan, till höger om Ryssgård (D). Skalan visar att 30 meter är ungefär en fjortondel av kartans bredd.</p>
<p>Går man 40 meter rakt söderut hamnar man i den sydvästra Stamgården, vid byggnaden med nummer 4, ett loft. Svar B.</p>`,

  40: `<p>Fähusen har nummer 10. Måsgårds (Ba) fähus ligger vid kartans vänstra kant, Ammagårds (Ia) uppe till höger och Jerkgårds (X) sydligaste fähus nere till vänster.</p>
<p>Mät med skalan: sträckan mellan fähusen i Måsgård och Ammagård är ungefär 140 meter, och avståndet från den linjen ner till Jerkgårds fähus ungefär 90 meter. Arean är ungefär ${tex('\\frac{140 \\cdot 90}{2} \\approx 6\\,300')} m², närmast 6 500 m². Svar B.</p>`,
};
