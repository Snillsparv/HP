// Textförklaringar till högskoleprovet 22 oktober 2023, provpass 4 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  1: `<p>Förkorta först: ${tex('\\frac{2(x + 4)}{2} = x + 4')}.</p>
<p>${tex('x + 4 + 8 = x + 12')}. Svar B.</p>`,

  2: `<p>Vinkeln mellan den stigande linjen och L<sub>1</sub> är ${tex('180° - 131° = 49°')}, och samma linje bildar samma vinkel med L<sub>2</sub> eftersom linjerna är parallella. Vinkeln mellan den fallande linjen och L<sub>2</sub> är ${tex('180° - 113° = 67°')}.</p>
<p>I triangeln under skärningspunkten är ${tex('v = 180° - 49° - 67° = 64°')}. Svar C.</p>`,

  3: `<p>Multiplicera in: ${tex('3x - 12 = 2x + 4')}.</p>
<p>Dra bort ${tex('2x')} och lägg till 12: ${tex('x = 16')}. Svar D.</p>`,

  4: `<p>Fyra heltal i följd med medelvärdet 4,5 är 3, 4, 5 och 6 (summan 18).</p>
<p>Medianen är medelvärdet av de två mittersta, ${tex('\\frac{4 + 5}{2} = 4{,}5')}. För tal med jämna avstånd är medianen alltid lika med medelvärdet. Svar B.</p>`,

  5: `<p>Vid ${tex('x = 1')} har den andra linjen ${tex('y = 2 - 1 = 1')}. Den första linjen ska ha samma värde där: ${tex('k + 3 = 1')}.</p>
<p>${tex('k = -2')}. Svar A.</p>`,

  6: `<p>${tex('\\frac{1\\,000}{50} = 20')} meter per sekund. En timme är 3 600 sekunder, så det blir ${tex('20 \\cdot 3\\,600 = 72\\,000')} meter per timme.</p>
<p>72 km/h. Svar B.</p>`,

  7: `<p>Nämnaren: ${tex('\\frac{2}{5} - \\frac{5}{6} = \\frac{12}{30} - \\frac{25}{30} = -\\frac{13}{30}')}.</p>
<p>${tex('1')} delat med ${tex('-\\frac{13}{30}')} är ${tex('-\\frac{30}{13}')}. Svar A.</p>`,

  8: `<p>I den lilla triangeln ABD ger Pythagoras sats ${tex('BD = \\sqrt{3^2 + 4^2} = 5')} cm.</p>
<p>I triangeln BDC är BD och DC kateter: ${tex('BC = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13')} cm. Svar A.</p>`,

  9: `<p>${tex('x - y = 0')} betyder att ${tex('x = y')}. Då är ${tex('xy = y \\cdot y = y^2')}.</p>
<p>0, 1 och <i>x</i> stämmer bara för vissa värden. Svar D.</p>`,

  10: `<p>Ett negativt tal upphöjt till ett jämnt tal blir positivt, till exempel ${tex('(-2)^2 = 4')}. Upphöjt till ett udda tal blir det negativt, till exempel ${tex('(-2)^3 = -8')} eller ${tex('(-2)^{-1} = -\\frac{1}{2}')}.</p>
<p>Alltså måste <i>n</i> vara udda, men det kan vara både positivt och negativt. Svar C.</p>`,

  11: `<p>Myran hamnar i punkten ${tex('(5 + 3,\\ 6) = (8, 6)')}.</p>
<p>Avståndet till origo är ${tex('\\sqrt{8^2 + 6^2} = \\sqrt{100} = 10')}. Svar B.</p>`,

  12: `<p>${tex('\\sqrt{12} = \\sqrt{4 \\cdot 3} = 2\\sqrt{3}')} och ${tex('\\sqrt{48} = \\sqrt{16 \\cdot 3} = 4\\sqrt{3}')}.</p>
<p>Summan är ${tex('6\\sqrt{3}')}. Svar C.</p>`,

  13: `<p>${tex('\\sqrt{x} \\cdot \\sqrt{x} = (\\sqrt{x})^2 = x')}.</p>
<p>Lika. Svar C.</p>`,

  14: `<p>Det finns 36 lika sannolika utfall. En fyra och en femma: (4, 5) och (5, 4), alltså ${tex('\\frac{2}{36}')}.</p>
<p>Summan 3: (1, 2) och (2, 1), alltså ${tex('\\frac{2}{36}')}. Lika. Svar C.</p>`,

  15: `<p>${tex('\\frac{5}{13} \\approx 0{,}38')} och ${tex('\\frac{4}{15} \\approx 0{,}27')}, så kvantitet I är positiv.</p>
<p>Kvantitet II är samma skillnad med omvänt tecken, alltså negativ. Svar A.</p>`,

  16: `<p>De fyra vinklarna ovanför linjen L bildar tillsammans en rak vinkel: ${tex('x + x + y + y = 180°')}.</p>
<p>${tex('2(x + y) = 180°')} ger ${tex('x + y = 90°')}. Lika. Svar C.</p>`,

  17: `<p>${tex('z^2 = x^2 + y^2')}, och eftersom ${tex('x^2')} är positivt är ${tex('z^2 > y^2')}.</p>
<p>Talen är positiva, så ${tex('z > y')}. Svar B.</p>`,

  18: `<p>Låt priset i butik B vara 100 kr. Då är priset i butik A 80 kr.</p>
<p>Kvantitet I: ${tex('80 \\cdot 0{,}95 = 76')} kr. Kvantitet II: ${tex('100 \\cdot 0{,}75 = 75')} kr. Svar A.</p>`,

  19: `<p>Cirkelns area är ${tex('\\pi \\cdot 5^2 = 25\\pi \\approx 78{,}5')} cm².</p>
<p>Det är mer än 75 cm². Svar A.</p>`,

  20: `<p>Dela ${tex('xy = z')} med <i>y</i>: ${tex('x = \\frac{z}{y}')}. (<i>y</i> kan inte vara 0 eftersom produkten är större än 1.)</p>
<p>Lika. Svar C.</p>`,

  21: `<p>Riktningskoefficienten för L<sub>1</sub> är ${tex('\\frac{7 - 1}{-3 - 2} = \\frac{6}{-5} = -1{,}2')}.</p>
<p>För en vinkelrät linje är produkten av riktningskoefficienterna −1, så L<sub>2</sub> har ${tex('k = \\frac{5}{6}')}. Ett positivt tal är större än ett negativt. Svar B.</p>`,

  22: `<p>Testa värden. ${tex('x = 1')}: ${tex('2 \\cdot 10 = 20')} och ${tex('20^1 = 20')}, lika. ${tex('x = 2')}: ${tex('2 \\cdot 100 = 200')} och ${tex('20^2 = 400')}, II störst. ${tex('x = 0')}: ${tex('2')} och ${tex('1')}, I störst.</p>
<p>Informationen är otillräcklig. Svar D.</p>`,

  23: `<p>(1) och (2) ger antalen var för sig, men inte hur många som spelar båda sporterna. Tillsammans: 20 spelar fotboll och 10 innebandy i en klass med 30 elever. Det kan vara noll som spelar båda (20 + 10 = 30) eller upp till 10.</p>
<p>Svar E.</p>`,

  24: `<p>(1) och (2) ger var för sig bara en punkt på linjen, och oändligt många linjer går genom en punkt. Räcker inte.</p>
<p>Tillsammans: linjen genom (4, 6) och (6, 4) har riktningskoefficienten ${tex('\\frac{4 - 6}{6 - 4} = -1')} och ekvationen ${tex('y = -x + 10')}. Punkten (5, 5) uppfyller den, så svaret på frågan är ja. Svar C.</p>`,

  25: `<p>(1): ${tex('100 = 4 \\cdot 25')}, så ett tal som är delbart med 100 är också delbart med 5. Räcker.</p>
<p>(2): ${tex('15 = 3 \\cdot 5')}, så ett tal som är delbart med 15 är också delbart med 5. Räcker.</p>
<p>Svar D.</p>`,

  26: `<p>(1): Alen är högre än björken, och rönnen är inte högst. Då är alen högst. Räcker.</p>
<p>(2): Rönnen är lägst, men vi vet inte om alen eller björken är högst. Räcker inte.</p>
<p>Svar A.</p>`,

  27: `<p>(1): De 10 långärmade barntröjorna är 25 procent av barntröjorna, så det finns 40 barntröjor. Men vi vet inte hur många långärmade vuxentröjor det finns. Räcker inte.</p>
<p>(2): De 10 är 20 procent av de långärmade, så det finns 50 långärmade tröjor, varav 40 i vuxenstorlek. Men vi vet inte hur många barntröjor det finns. Räcker inte.</p>
<p>Tillsammans: ${tex('100 - 40 - 40 = 20')} kortärmade tröjor i vuxenstorlek. Svar C.</p>`,

  28: `<p>(1): Om ${tex('y = 7')} är ${tex('x = 14')}, men om ${tex('x = 7')} är ${tex('y = 3{,}5')}. Två möjligheter. Räcker inte.</p>
<p>(2): ${tex('2y + y = 21')} ger ${tex('y = 7')}. Räcker.</p>
<p>Svar B.</p>`,

  29: `<p>Renar per renägare i Norrbotten 2016: N:a fjällsamebyar 50, S:a fjällsamebyar 52, skogssamebyar 26 och koncessionssamebyar 13. Bara de två sista har under 30.</p>
<p>Kvinnor bland renägarna: skogssamebyar ${tex('\\frac{304}{830} \\approx 37\\,\\%')}, koncessionssamebyar ${tex('\\frac{187}{795} \\approx 24\\,\\%')}. Bara skogssamebyarna har mer än en tredjedel. Svar C.</p>`,

  30: `<p>Kvinnor som var renägare: 1 603 år 1995 och 1 843 år 2016.</p>
<p>${tex('\\frac{1\\,843}{1\\,603} \\approx 1{,}15')}, alltså en ökning med cirka 15 procent. Svar B.</p>`,

  31: `<p>Jämtlands fjällsamebyar: ${tex('\\frac{49\\,241}{12} \\approx 4\\,100')} renar per sameby. Västerbottens samebyar: ${tex('\\frac{48\\,945}{7} \\approx 6\\,990')}.</p>
<p>Skillnaden är cirka 2 900. Svar C.</p>`,

  32: `<p>Läs av staplarna. Stor-Stockholm: årsavgift cirka 600 och årshyra cirka 1 700, skillnad 1 100. Stor-Göteborg: cirka 600 och 1 650, skillnad 1 050. Kommuner med fler än 75 000 invånare: cirka 600 och 1 500, skillnad 900, och insatsen cirka 1 850 tkr. Kommuner med färre än 75 000: cirka 650 och 1 350, skillnad 700, men insatsen bara cirka 1 400 tkr.</p>
<p>Bara kommuner med fler än 75 000 invånare uppfyller båda kriterierna. Svar C.</p>`,

  33: `<p>Större kommuner: årsavgift cirka 600, årshyra cirka 1 500, insats cirka 1 850 tkr. Mindre kommuner: cirka 650, 1 350 och 1 400 tkr.</p>
<p>Mindre kommuner hade alltså lägre årshyra, alternativ B. A är fel (större hade lägre årsavgift), C är fel (mindre hade lägre insats) och D är fel eftersom årsavgiften var lägre i större kommuner. Svar B.</p>`,

  34: `<p>Insatsen i kommuner med färre än 75 000 invånare var cirka 1 400 tkr.</p>
<p>${tex('\\frac{1\\,400}{2\\,616} \\approx 0{,}54')}, ungefär hälften. Svar D.</p>`,

  35: `<p>Det skuggade bandet runt Uppsala visar vad som nås inom en halvtimme. Brunna (11), Marielund (30) och Vattholma (18) ligger inom skuggningen från Uppsala.</p>
<p>Örsundsbro (8) på linjen mot sydväst ligger utanför den. Svar D.</p>`,

  36: `<p>Följ spåret från Uppsala österut: förbi 29 och 30 till Faringe (33), vidare via Knutby (56) och 55 till Rimbo (48), och därifrån norrut via 53, Edsbro (52), 51, 50 och 49 till Hallstavik.</p>
<p>Hargshamn (62) och Gimo (59) ligger på en annan linje, norrut från Alunda. Svar A.</p>`,

  37: `<p>Skuggningen visar halvtimmesavstånd från större orter. Bandet från Tierp söderut når precis fram till station 20, Knypplan, så resan tar 30 minuter.</p>
<p>Med kartans skala är sträckan ungefär 20 km. 20 km på en halvtimme är 40 km/h. Svar B.</p>`,

  38: `<p>I det nedre diagrammet är den totala energianvändningen cirka 440 TWh 1970 och cirka 580 TWh 2017.</p>
<p>${tex('\\frac{580}{440} \\approx 1{,}32')}, alltså en ökning med cirka 30 procent. Svar A.</p>`,

  39: `<p>1984 var den totala användningen cirka 440 TWh, och 15 procent av det är cirka 65 TWh.</p>
<p>Inrikes transporter (fältet från cirka 140 till cirka 205 TWh) är cirka 65 TWh. Industrin och bostäderna är båda cirka 140 TWh, och förlusterna i kärnkraften cirka 45 TWh. Svar D.</p>`,

  40: `<p>I det övre diagrammet är kärnbränslefältet 2010 cirka 180 TWh brett (från cirka 320 till cirka 500 TWh). I det nedre diagrammet är förlusterna i kärnkraften 2010 cirka 120 TWh (från cirka 460 till cirka 580).</p>
<p>Skillnaden är cirka 60 TWh. Svar A.</p>`,
};
