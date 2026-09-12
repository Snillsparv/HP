// Textförklaringar till högskoleprovet 20 oktober 2024, provpass 4 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  1: `<p>Fem tal med medelvärdet 7 har summan ${tex('5 \\cdot 7 = 35')}. De fyra kända talen har summan ${tex('1 + 2 + 5 + 7 = 15')}.</p>
<p>Då är ${tex('x = 35 - 15 = 20')}. Svar D.</p>`,

  2: `<p>Elsa börjar med 10 klistermärken och får 3 nya varje dag. Efter <i>t</i> dagar har hon fått ${tex('3t')} nya, så totalt ${tex('K(t) = 3t + 10')}.</p>
<p>Kontroll: dag 0 ger 10 och dag 1 ger 13. Svar A.</p>`,

  3: `<p>Sätt in ${tex('x = 2')}. Täljaren blir ${tex('\\frac{2}{2} = 1')}. Nämnaren blir ${tex('\\frac{1}{2} + \\frac{2}{1} = 2{,}5')}.</p>
<p>Uttrycket är ${tex('\\frac{1}{2{,}5} = \\frac{2}{5}')}. Svar B.</p>`,

  4: `<p>Dra bort ${tex('2b')} från båda leden: ${tex('a = -b')}.</p>
<p>Då är ${tex('a - b = -b - b = -2b')}. Svar C.</p>`,

  5: `<p>Tåget har kört ${tex('6 \\cdot 90 = 540')} km när det stannar vid T. Räkna ut avståndet från varje station till T.</p>
<p>P: ${tex('245 + 295 = 540')} km. Q: ${tex('155 + 295 = 450')} km. R: ${tex('270 + 260 = 530')} km. S: ${tex('300 + 260 = 560')} km. Tåget startade från P. Svar A.</p>`,

  6: `<p>En punkt ligger mellan linjerna om ${tex('x - 2 < y < x + 2')}. Sätt in punkterna.</p>
<p>(3, 3): ${tex('1 < 3 < 5')} stämmer. (3, −3): −3 är mindre än 1. (3, 0): 0 är mindre än 1. (0, −3): −3 är mindre än −2. Svar D.</p>`,

  7: `<p>Cirkelns area är ${tex('\\pi \\cdot 2^2 = 4\\pi')} cm². Kvadraten med sidan <i>s</i> har arean ${tex('s^2')}, så ${tex('s^2 = 4\\pi')}.</p>
<p>${tex('s = \\sqrt{4\\pi} = \\sqrt{4} \\cdot \\sqrt{\\pi} = 2\\sqrt{\\pi}')} cm. Svar B.</p>`,

  8: `<p>Multiplicera ut alla parenteser: ${tex('xy + xb - xy + ya - xy + ab - ay - bx + xy')}.</p>
<p>Termerna ${tex('xy')} tar ut varandra (två plus och två minus), ${tex('xb')} och ${tex('-bx')} tar ut varandra, liksom ${tex('ya')} och ${tex('-ay')}. Kvar blir ${tex('ab')}. Svar A.</p>`,

  9: `<p>Förkorta det första bråket: ${tex('10 \\cdot \\frac{3 - x}{15} = \\frac{2(3 - x)}{3} = \\frac{6 - 2x}{3}')}.</p>
<p>Lägg ihop med ${tex('\\frac{5x}{3}')}: ${tex('\\frac{6 - 2x + 5x}{3} = \\frac{6 + 3x}{3} = 2 + x')}. Svar C.</p>`,

  10: `<p>Förenkla parenteserna först: ${tex('2\\sqrt{3} + 3\\sqrt{3} = 5\\sqrt{3}')} och ${tex('4\\sqrt{3} - \\sqrt{3} = 3\\sqrt{3}')}.</p>
<p>Produkten är ${tex('5\\sqrt{3} \\cdot 3\\sqrt{3} = 15 \\cdot 3 = 45')}. Svar C.</p>`,

  11: `<p>Den övre triangeln är rätvinklig med kateterna <i>x</i> och <i>x</i>, så dess hypotenusa är ${tex('\\sqrt{x^2 + x^2} = \\sqrt{2}\\,x')}.</p>
<p>Den sträckan är katet i den nedre triangeln, tillsammans med kateten <i>x</i> och hypotenusan ${tex('\\sqrt{3}')}. Pythagoras sats: ${tex('x^2 + 2x^2 = 3')}, alltså ${tex('3x^2 = 3')} och ${tex('x = 1')}. Svar A.</p>`,

  12: `<p>20 procent är 0,2: ${tex('0{,}2 \\cdot 10^{10} = 2 \\cdot 10^9')}.</p>
<p>Alternativ B stämmer. ${tex('2^{10} = 1\\,024')} och ${tex('10^2 = 100')} är alldeles för små, och ${tex('20^9 = 2^9 \\cdot 10^9')} är för stort. Svar B.</p>`,

  13: `<p>Kvantitet I: ${tex('\\frac{1}{2} - \\frac{1}{3} = \\frac{3}{6} - \\frac{2}{6} = \\frac{1}{6}')}.</p>
<p>Kvantitet II: ${tex('\\frac{2}{3} - \\frac{1}{2} = \\frac{4}{6} - \\frac{3}{6} = \\frac{1}{6}')}. Lika. Svar C.</p>`,

  14: `<p>Triangelns area är basen gånger höjden delat med 2: ${tex('\\frac{5h}{2} = 20')} ger ${tex('h = 8')} cm.</p>
<p>Rektangelns area är basen gånger höjden: ${tex('2h = 17')} ger ${tex('h = 8{,}5')} cm. Svar B.</p>`,

  15: `<p>Samla <i>x</i> på ena sidan: ${tex('2{,}8 + 6 = 5x - x')}, alltså ${tex('8{,}8 = 4x')} och ${tex('x = 2{,}2')}.</p>
<p>2,2 är större än 2. Svar A.</p>`,

  16: `<p>Kvantitet I: ${tex('1{,}25 \\cdot 4 = 5')}.</p>
<p>Kvantitet II: ${tex('0{,}8 \\cdot 6 = 4{,}8')}. Svar A.</p>`,

  17: `<p>${tex('f(-2) = (-2)^2 + 2 \\cdot (-2) - 2 = 4 - 4 - 2 = -2')}.</p>
<p>${tex('f(0) = 0 + 0 - 2 = -2')}. Lika. Svar C.</p>`,

  18: `<p>Vid upphöjning av en potens multipliceras exponenterna: ${tex('\\left(47^{\\frac{x}{2}}\\right)^{\\frac{2}{3}} = 47^{\\frac{x}{2} \\cdot \\frac{2}{3}} = 47^{\\frac{x}{3}}')}.</p>
<p>Ekvationen blir ${tex('47^{\\frac{x}{3}} = 47^{\\frac{y}{3}}')}, så ${tex('\\frac{x}{3} = \\frac{y}{3}')} och ${tex('x = y')}. Svar C.</p>`,

  19: `<p>Den inre triangeln har vinklarna <i>x</i>, <i>x</i> och 120°: ${tex('2x + 120° = 180°')} ger ${tex('x = 30°')}.</p>
<p>Den yttre triangeln har basvinklarna ${tex('x + y')} och toppvinkeln 100°: ${tex('2(x + y) + 100° = 180°')} ger ${tex('x + y = 40°')}, alltså ${tex('y = 10°')}. <i>x</i> är större. Svar A.</p>`,

  20: `<p>Kvantitet I: förkorta med ${tex('a - b')}, så blir det ${tex('a - b')}.</p>
<p>Kvantitet II: ${tex('(b - a)^2 = (a - b)^2')}, så bråket är ${tex('\\frac{(a - b)^2}{-(a - b)} = -(a - b) = b - a')}.</p>
<p>Kvantiteterna är varandras motsatser. Vilken som är störst beror på om <i>a</i> eller <i>b</i> är störst, och det vet vi inte. Svar D.</p>`,

  21: `<p>Tid är sträcka delat med hastighet. Med 100 km/h tar 120 km ${tex('1{,}2')} timmar, alltså 72 minuter. Med 80 km/h tar det ${tex('1{,}5')} timmar, alltså 90 minuter.</p>
<p>Tiden ligger någonstans mellan 72 och 90 minuter, och 85 minuter ligger inuti det intervallet. Det går inte att avgöra vilken kvantitet som är störst. Svar D.</p>`,

  22: `<p>Det första villkoret ger ${tex('x + y = 2')}, alltså ${tex('y = 2 - x')}. Det andra ger ${tex('\\frac{x + 4}{2} = y')}, alltså ${tex('x + 4 = 2y')}.</p>
<p>Sätt in: ${tex('x + 4 = 2(2 - x) = 4 - 2x')} ger ${tex('3x = 0')} och ${tex('x = 0')}. Kvantiteterna är lika. Svar C.</p>`,

  23: `<p>(1): Den vita är mindre än den röda, och den svarta är i mitten. Då är den röda störst. Räcker.</p>
<p>(2): Den vita är minst och den svarta är mindre än den röda, så den röda är störst. Räcker.</p>
<p>Svar D.</p>`,

  24: `<p>(1): Mössan kostar 120 kr, vilket är 150 procent av halsduken, så halsduken kostar ${tex('\\frac{120}{1{,}5} = 80')} kr. Jackan kostar tio gånger så mycket, 800 kr. Räcker.</p>
<p>(2): Vi vet bara ett förhållande, inga belopp. Räcker inte.</p>
<p>Svar A.</p>`,

  25: `<p>(1): 1 121 romaner, och ${tex('2\\,285 - 2\\,253 = 32')} böcker ligger i förrådet. Men vi vet inte hur många av de 32 som är romaner. Räcker inte.</p>
<p>(2): ${tex('2\\,285 - 1\\,164 = 1\\,121')} romaner och 32 böcker i förrådet. Det är exakt samma uppgifter som i (1). Räcker inte.</p>
<p>Tillsammans tillför de ingenting nytt. Svar E.</p>`,

  26: `<p>(1): Samma hastighet, men inga tider eller sträckor. Räcker inte.</p>
<p>(2): Agnes cyklar 20 minuter och Eva 12 minuter, men utan hastigheter vet vi inga sträckor. Räcker inte.</p>
<p>Tillsammans: med samma hastighet förhåller sig sträckorna som tiderna, 20 till 12, alltså 5 till 3. Skillnaden 2 delar motsvarar 2 km, så en del är 1 km och Agnes cyklar 5 km. Svar C.</p>`,

  27: `<p>Tre olika udda tal där största minus minsta är 4 måste vara tre udda tal i följd: <i>n</i>, <i>n</i> + 2 och <i>n</i> + 4.</p>
<p>(1): 19 kan vara det minsta (19, 21, 23), det mellersta (17, 19, 21) eller det största (15, 17, 19). Summan blir olika. Räcker inte. (2): På samma sätt för 21. Räcker inte.</p>
<p>Tillsammans: 19 och 21 ingår, men det tredje talet kan vara 17 eller 23, med summan 57 eller 63. Svar E.</p>`,

  28: `<p>(1): Om ringen låg i den gröna asken skulle både den rosa och den vita vara tomma, men bara en av dem är tom. Ringen ligger alltså i den rosa asken. Räcker.</p>
<p>(2): Att minst en av grön och vit är tom gäller alltid, eftersom bara en ask har ringen. Att högst en av grön och rosa är tom betyder att ringen ligger i en av dem, men vi vet inte vilken. Räcker inte.</p>
<p>Svar A.</p>`,

  29: `<p>Lägg ihop raden för Riksförbundet Hälsofrämjandet: 225 + 300 + 300 + 350 + 350 + 350 + 350 + 335 + 300 + 220 + 200.</p>
<p>De fyra 350-posterna ger 1 400, de tre 300-posterna ger 900, och 225 + 335 + 220 + 200 = 980. Totalt 3 280 tkr. Svar C.</p>`,

  30: `<p>År 2015 fick Friluftsfrämjandet 8 600 tkr av totalt 18 660 tkr.</p>
<p>${tex('\\frac{8\\,600}{18\\,660} \\approx 0{,}46')}, alltså ungefär 45 procent. Svar C.</p>`,

  31: `<p>Jämför Summa beviljat år för år: 2006, 2007 och 2008 ökade summan (11 525, 15 360, 16 260, 16 590). 2009 minskade den till 16 420. 2010, 2011 och 2012 ökade den igen (16 970, 19 355, 19 438). 2013, 2014 och 2015 minskade den.</p>
<p>Summan ökade sex gånger. Svar C.</p>`,

  32: `<p>Skalan längst ner visar 15 km, så 5 km är en tredjedel av skalstrecket. Tänk dig en cirkel med den radien runt mitten av Flenberget och räkna fäbodarna (de fyllda fyrkanterna) innanför.</p>
<p>Innanför ligger N. Flenarna och S. Flenarna, de två fäbodarna vid Lövberg, Gottland, Råberg, Sollerö-åsen och fäboden vid stigkorsningen strax söder om Flenberget. Det är 8 stycken. Björka, Mångberg och Borberg ligger utanför. Svar A.</p>`,

  33: `<p>Mät med skalan. N. Vika och Nusnäs ligger nästan rakt öster om varandra på cirka 9 km avstånd, och Mora ligger cirka 5 km norr om linjen mellan dem.</p>
<p>Triangelns area är ungefär ${tex('\\frac{9 \\cdot 5}{2} \\approx 23')} km². Svar A.</p>`,

  34: `<p>Ridstigar och buförsvägar är de prickade linjerna. Följ dem från Oratjärn/Berg norrut till Arberg, vidare österut till Råberg, förbi fäboden söder om Flenberget till Flenarna och sedan norrut till Björka.</p>
<p>Mät sträckan bit för bit med skalan: ungefär 4 + 3 + 3 + 2 + 6 km, sammanlagt cirka 18 km. Svar D.</p>`,

  35: `<p>Läskedrycker och mineralvatten är den heldragna linjen i det mellersta diagrammet. År 1965 låg den på cirka 30 liter och år 2010 på cirka 97 liter.</p>
<p>${tex('\\frac{97}{30} \\approx 3{,}2')}, alltså ungefär tre gånger så stor. Svar B.</p>`,

  36: `<p>Titta i det nedre diagrammet. År 1985 var starkölen cirka 13 liter, vinet cirka 12 liter och spriten cirka 6 liter, alltså hälften av vinet.</p>
<p>År 1968 var spriten större än vinet, år 1972 var starkölen bara cirka 3 liter mot vinets 7,5, och år 1978 var spriten cirka 7,5 liter, betydligt mer än hälften av vinets cirka 9,5. Svar D.</p>`,

  37: `<p>Standardmjölk gick från cirka 116 liter år 1960 till cirka 22 liter år 2016, en minskning med cirka 94 liter, vilket är ${tex('\\frac{94}{116} \\approx 0{,}81')}, alltså cirka 80 procent.</p>
<p>Gårdsförsäljningen minskade från cirka 35 liter till nästan 0, nära 100 procent. Lättmjölk ökade från cirka 5 till 15 liter, cirka 200 procent, och mellanmjölk från cirka 15 till 40 liter, cirka 170 procent. Svar D.</p>`,

  38: `<p>Samtliga nyregistrerade bilar är den mörka stapeln. För Kalmar län går den svarta linjen från cirka 136 g/km (kommunen med lägst utsläpp) till cirka 158 g/km (kommunen med högst).</p>
<p>Skillnaden är cirka 22 g/km. Svar C.</p>`,

  39: `<p>Hallands län: samtliga bilar cirka 151 g/km och bensin- och dieselbilar cirka 168, skillnad cirka 17. Den ljusa stapelns linje når upp till cirka 178, över 175. Båda kriterierna uppfylls.</p>
<p>Uppsala: skillnaden är cirka 18, men linjen når bara till cirka 174. Östergötland: skillnaden är cirka 23. Södermanland: skillnaden är cirka 19, men linjen når bara till cirka 173. Svar D.</p>`,

  40: `<p>Stapeln för riket, samtliga bilar, ligger på cirka 150 g/km. Cirkeldiagrammet anger 250 620 bilar.</p>
<p>${tex('250\\,620 \\cdot 150 \\approx 37\\,600\\,000')} gram, alltså cirka 37,6 ton. Svar B.</p>`,
};
