// Textförklaringar till högskoleprovet 20 oktober 2024, provpass 1 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  1: `<p>Samla <i>x</i>-termerna på ena sidan: dra bort ${tex('6x')} från båda leden, så blir det ${tex('6x - 54 = 18')}. Lägg till 54: ${tex('6x = 72')}, alltså ${tex('x = 12')}.</p>
<p>Kontroll: ${tex('12 \\cdot 12 - 54 = 90')} och ${tex('6 \\cdot 12 + 18 = 90')}. Svar D.</p>`,

  2: `<p>Dela båda leden med ${tex('\\sqrt{3}')}: ${tex('x = \\frac{6}{\\sqrt{3}}')}. Förläng med ${tex('\\sqrt{3}')} för att bli av med roten i nämnaren: ${tex('\\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}')}.</p>
<p>Kontroll: ${tex('\\sqrt{3} \\cdot 2\\sqrt{3} = 2 \\cdot 3 = 6')}. Svar C.</p>`,

  3: `<p>Skriv bråken med samma nämnare: ${tex('\\frac{x}{15} + \\frac{x}{30} = \\frac{2x}{30} + \\frac{x}{30} = \\frac{3x}{30} = \\frac{x}{10}')}.</p>
<p>En tiondel av <i>x</i> är 10 procent av <i>x</i>. Svar B.</p>`,

  4: `<p>Vinkeln till vänster om skärningspunkten, mellan de två flacka linjerna, är vertikalvinkel till vinkeln ${tex('x + 10°')} och därför lika stor.</p>
<p>De tre vinklarna på vänster sida om den branta linjen bildar tillsammans en rak vinkel: ${tex('(3x + 30°) + (x + 10°) + (2x + 20°) = 180°')}. Det ger ${tex('6x + 60° = 180°')}, alltså ${tex('x = 20°')}. Svar B.</p>`,

  5: `<p>Skriv alla bråk med nämnaren 32: ${tex('\\frac{3}{4} = \\frac{24}{32}')}, ${tex('\\frac{7}{8} = \\frac{28}{32}')}, ${tex('\\frac{13}{16} = \\frac{26}{32}')} och ${tex('\\frac{25}{32}')}.</p>
<p>Storleksordningen är alltså ${tex('\\frac{3}{4} < \\frac{25}{32} < \\frac{13}{16} < \\frac{7}{8}')}. Alternativ D stämmer med den ordningen. I A och C står ${tex('\\frac{7}{8}')} före ett mindre bråk, och i B står ${tex('\\frac{13}{16}')} före ${tex('\\frac{25}{32}')}. Svar D.</p>`,

  6: `<p>Sätt in <i>f</i> i <i>g</i>: ${tex('g(x) = -\\frac{1}{2}(2x - 4) = -x + 2')}. Linjen lutar nedåt (riktningskoefficient −1), skär <i>y</i>-axeln i 2 och <i>x</i>-axeln i 2.</p>
<p>Alternativ D visar en linje som går genom (0, 2) och (2, 0) och lutar nedåt. B lutar också nedåt men skär <i>y</i>-axeln under origo. A och C lutar uppåt. Svar D.</p>`,

  7: `<p>Diagonalen i en kvadrat är hypotenusa i en rätvinklig triangel med kateterna <i>s</i> och <i>s</i>, så Pythagoras sats ger ${tex('d^2 = s^2 + s^2 = 2s^2')}.</p>
<p>Då är ${tex('2s^2 + d^2 = 2s^2 + 2s^2 = 4s^2 = 64')}, alltså ${tex('s^2 = 16')} och ${tex('s = 4')}. Svar B.</p>`,

  8: `<p>Multiplicera in i täljaren: ${tex('3(x + y) - 5(y - x) = 3x + 3y - 5y + 5x = 8x - 2y')}.</p>
<p>Dela med 2: ${tex('\\frac{8x - 2y}{2} = 4x - y')}. Svar C.</p>`,

  9: `<p>Skriv om sambandet som ${tex('y = x - 7')}. Om <i>x</i> är negativt är ${tex('x - 7')} ännu mindre, alltså också negativt. Alternativ A stämmer alltid.</p>
<p>De andra kan man motbevisa med exempel. B: ${tex('x = 3')} ger ${tex('y = -4')}. C: ${tex('y = -10')} ger ${tex('x = -3')}. D: ${tex('y = 1')} ger ${tex('x = 8')}. Svar A.</p>`,

  10: `<p>Punkten ligger på linjen, så koordinaterna uppfyller ekvationen. Sätt in ${tex('x = a')} och ${tex('y = 2a')}: ${tex('2a = 3a - 60')}.</p>
<p>Det ger ${tex('a = 60')}. Kontroll: punkten (60, 120) ligger på linjen eftersom ${tex('3 \\cdot 60 - 60 = 120')}. Svar D.</p>`,

  11: `<p>Bollarna är sex stycken, ett jämnt antal. Om exakt en låda innehåller ett udda antal bollar blir summan udda + jämnt + jämnt, vilket är udda. Men summan är alltid 6.</p>
<p>Antalet lådor med udda antal måste därför vara jämnt: noll lådor eller två lådor. Exakt en låda är omöjligt, så sannolikheten är 0. Svar A.</p>`,

  12: `<p>Skriv allt som potenser av 2: ${tex('8^x = (2^3)^x = 2^{3x}')}. Produkten måste alltså vara en tvåpotens med en exponent som är delbar med 3.</p>
<p>${tex('16 \\cdot 16 = 2^4 \\cdot 2^4 = 2^8')}, ${tex('16 \\cdot 32 = 2^4 \\cdot 2^5 = 2^9 = 8^3')}, ${tex('32 \\cdot 32 = 2^{10}')} och ${tex('32 \\cdot 64 = 2^{11}')}. Bara 9 är delbart med 3. Svar B.</p>`,

  13: `<p>Eftersom ${tex('\\sqrt{5} > \\sqrt{4} = 2')} är ${tex('\\sqrt{5} + 1 > 3')}. Samtidigt är ${tex('\\sqrt{6} < \\sqrt{9} = 3')}.</p>
<p>Kvantitet I är större än 3 och kvantitet II är mindre än 3. Med närmevärden: ${tex('2{,}24 + 1 = 3{,}24')} mot ${tex('2{,}45')}. Svar A.</p>`,

  14: `<p>Dra bort ${tex('\\frac{1}{2} = \\frac{4}{8}')} från båda leden: ${tex('\\frac{x}{4} = \\frac{5}{8} - \\frac{4}{8} = \\frac{1}{8}')}.</p>
<p>Multiplicera med 4: ${tex('x = \\frac{4}{8} = \\frac{1}{2}')}. Det är mindre än 2. Svar B.</p>`,

  15: `<p>Jämför genom att ta skillnaden: ${tex('(x + 2y) - (2x + y) = y - x')}.</p>
<p>Eftersom ${tex('y > x')} är skillnaden positiv, så kvantitet I är större. Svar A.</p>`,

  16: `<p>Räkna ut parentesen med gemensam nämnare 35: ${tex('\\frac{3}{5} - \\frac{4}{7} = \\frac{21}{35} - \\frac{20}{35} = \\frac{1}{35}')}.</p>
<p>Kvantitet I är då ${tex('\\frac{32}{35}')}, som är lite mindre än 1. Svar B.</p>`,

  17: `<p>Olle får ${tex('\\frac{x}{2}')} kulor av Kalle och ${tex('\\frac{y}{2}')} av Pelle, sammanlagt ${tex('\\frac{x + y}{2}')}.</p>
<p>Medelvärdet av det Kalle och Pelle hade från början är också ${tex('\\frac{x + y}{2}')}. Kvantiteterna är lika. Svar C.</p>`,

  18: `<p>Triangeln DAC har en rät vinkel vid A, så Pythagoras sats ger ${tex('AD^2 + AC^2 = DC^2')}. Triangeln DBC har en rät vinkel vid B, så ${tex('BD^2 + BC^2 = DC^2')}.</p>
<p>Båda kvantiteterna är lika med ${tex('DC^2')}, alltså lika stora. Svar C.</p>`,

  19: `<p>Linjen skär <i>x</i>-axeln där ${tex('y = 0')}: ${tex('0 = -\\frac{x}{2} + 4')} ger ${tex('x = 8')}.</p>
<p>Den skär <i>y</i>-axeln där ${tex('x = 0')}: ${tex('y = 4')}. 8 är större än 4. Svar A.</p>`,

  20: `<p>Ordna talen i storleksordning. De fyra största är större än 12, så det tredje minsta talet är minst 13. De fyra minsta är mindre än 15, så det fjärde minsta talet är högst 14.</p>
<p>Medianen är medelvärdet av det tredje och fjärde talet, som båda är 13 eller 14. Medianen kan alltså vara 13, 13,5 eller 14, beroende på talen. Informationen är otillräcklig. Svar D.</p>`,

  21: `<p>Rektangeln har sidorna ${tex('AB = 2r')} och ${tex('AD = \\frac{r}{2}')}, så arean är ${tex('2r \\cdot \\frac{r}{2} = r^2')}. Multiplicerat med 1,5 blir det ${tex('1{,}5r^2')}.</p>
<p>Halvcirkelns area är ${tex('\\frac{\\pi r^2}{2} \\approx 1{,}57r^2')}, vilket är större än ${tex('1{,}5r^2')}. Svar A.</p>`,

  22: `<p>${tex('\\frac{x}{y} = -1')} betyder att ${tex('x = -y')}. Då är ${tex('x - y = -y - y = -2y')}.</p>
<p>Om <i>y</i> är positivt är det negativt, och om <i>y</i> är negativt är det positivt. Vi vet inte tecknet på <i>y</i>, så informationen är otillräcklig. Svar D.</p>`,

  23: `<p>(1): 25 procent fler ger ${tex('1{,}25x = 100')}, alltså ${tex('x = 80')} magneter. Räcker.</p>
<p>(2): En femtedel är alltid 20 procent, oavsett hur många magneter Eskil har. Påståendet säger ingenting. Räcker inte.</p>
<p>Svar A.</p>`,

  24: `<p>(1): I skafferiet ligger 30 bullar, så i frysen ligger 50. Men vi vet inte hur många av dem som är vaniljbullar. Räcker inte.</p>
<p>(2): Tre fjärdedelar av 80 är 60 kanelbullar, så det finns 20 vaniljbullar. Men vi vet inte var de ligger. Räcker inte.</p>
<p>Tillsammans: 20 vaniljbullar totalt, varav 10 i skafferiet, så 10 ligger i frysen. Svar C.</p>`,

  25: `<p>Vinkelsumman ger ${tex('u + v + w = 180°')}.</p>
<p>(1): ${tex('u + v = 93°')} ger ${tex('w = 87°')}, men inte <i>u</i>. Räcker inte. (2): ${tex('u + w = 123°')} ger ${tex('v = 57°')}, men inte <i>u</i>. Räcker inte.</p>
<p>Tillsammans: ${tex('u = 180° - 57° - 87° = 36°')}. Svar C.</p>`,

  26: `<p>Fem personer med medellängden 172 cm har den sammanlagda längden ${tex('5 \\cdot 172 = 860')} cm.</p>
<p>(1): Flickorna är tillsammans ${tex('4 \\cdot 170 = 680')} cm, så pojken är ${tex('860 - 680 = 180')} cm. Räcker.</p>
<p>(2): Vi vet inte hur lång den längsta flickan är. Räcker inte. Svar A.</p>`,

  27: `<p>(1): Kaffet finns i den svarta eller den vita termosen, och chokladen finns inte i den vita. Den vita kan alltså innehålla kaffe eller te. Räcker inte.</p>
<p>(2): Teet finns i den grå termosen. Kaffet finns inte i den svarta och inte i den grå, alltså i den vita. Räcker.</p>
<p>Svar B.</p>`,

  28: `<p>(1): Alla heltal från 51 till 74 är möjliga. Räcker inte.</p>
<p>(2): 8, 16, 32, 40, 56, 64, 80 och många fler är delbara med 8 men inte med 3. Räcker inte.</p>
<p>Tillsammans: Talen mellan 50 och 75 som är delbara med 8 är 56, 64 och 72. Av dem är 72 delbart med 3, så både 56 och 64 återstår. Svar E.</p>`,

  29: `<p>Läs av stapeln för 1982. Fåborstmasken (ljusgrått fält) sträcker sig från ungefär 25 procent till ungefär 58 procent, alltså cirka 33 procent.</p>
<p>Det är ungefär en tredjedel. Svar A.</p>`,

  30: `<p>Uppskatta de två största arterna varje år. 1920: vitmärla cirka 84 procent och östersjömussla cirka 10, skillnad cirka 74. 1982: fåborstmask cirka 33 och östersjömussla cirka 24, skillnad cirka 9. 1987: östersjömussla cirka 68 och vitmärla cirka 20, skillnad cirka 48.</p>
<p>2007: östersjömussla cirka 44 och sandborstmask cirka 41, skillnad bara cirka 3 procentenheter. Svar D.</p>`,

  31: `<p>Sandborstmasken är det vita fältet. Andelen var cirka 5 procent 1920, 76 procent 1977, 20 procent 1982, 6 procent 1987 och 41 procent 2007.</p>
<p>A: ökningen 1920 till 1977 var cirka 71 procentenheter, inte 60. B: minskningen 1977 till 1982 var cirka 56, inte 45. C: minskningen 1982 till 1987 var cirka 14, inte 20. D: ökningen 1987 till 2007 var cirka 35 procentenheter. Svar D.</p>`,

  32: `<p>Titta på raderna under Fristående i den övre tabellen. Internationell: 192 elever, varav 88 femåringar (46 procent) och 103 sexåringar (54 procent). Det stämmer med drygt hälften och knappt hälften.</p>
<p>I de andra inriktningarna är nästan alla elever 6 år: Allmän 9 421 av 9 723, Konfessionell 889 av 1 585 (många är 7 år) och Waldorf 290 av 304. Svar D.</p>`,

  33: `<p>Den nedre tabellen visar att 58 elever gick i förskoleklass i statlig regi, varav 42 pojkar.</p>
<p>${tex('\\frac{42}{58} \\approx 0{,}72')}, alltså 72 procent. Svar C.</p>`,

  34: `<p>Läsåret 2013/14 fanns 109 943 elever på 3 640 skolenheter: ${tex('\\frac{109\\,943}{3\\,640} \\approx 30{,}2')} elever per skolenhet.</p>
<p>Det är ungefär 6 fler än 24. (Kontroll för 2007/08: ${tex('\\frac{93\\,390}{3\\,905} \\approx 23{,}9')}.) Svar C.</p>`,

  35: `<p>Lågkvalificerade yrken är de svarta punkterna. Läs av de fyra länderna: Schweiz ligger nästan exakt på 0, Irland på cirka +1, Japan på cirka +2,5 och Ungern på cirka −2,5.</p>
<p>Minst förändring hade Schweiz. Svar A.</p>`,

  36: `<p>Börja med högkvalificerade yrken (ljusgrå punkter) under 5 procentenheter: Grekland, Italien, Tyskland, Kanada, Slovakien och Japan, sex länder.</p>
<p>Kontrollera sedan att mellankvalificerade (mörkgrå punkter) ligger mellan −10 och 0. Grekland ligger på cirka −13 och faller bort. De övriga fem (Italien cirka −9, Tyskland −8, Kanada −6, Slovakien −5,5 och Japan −5) klarar båda villkoren. Svar B.</p>`,

  37: `<p>OECD-genomsnittet (den grå raden) ligger på cirka −9,5 för mellan, +1,5 för låg och +7,5 för hög.</p>
<p>Mellan: Finland ligger på cirka −9,5, närmare än Italien (cirka −9). Låg: Kanada ligger på cirka +1,5, medan Tyskland ligger på cirka +3,5. Hög: Ungern ligger på cirka +7,5, medan Nederländerna ligger på cirka +5,5. Svar B.</p>`,

  38: `<p>Psykiska sjukdomar är det mörkaste fältet längst ner i det vänstra diagrammet. Läs av var övre kanten på fältet passerar 50 procent.</p>
<p>2009 ligger det på cirka 46 procent, 2010 på cirka 48, 2011 på cirka 50 och 2012 på cirka 52. Första gången andelen når 50 procent är 2011. Svar C.</p>`,

  39: `<p>Läs av det övre diagrammet för åldrarna 5 till 10 och lägg ihop. Pojkar: cirka 1 500 + 1 900 + 2 100 + 2 400 + 2 700 + 3 000 ≈ 13 600. Flickor: cirka 800 + 850 + 1 000 + 1 050 + 1 300 + 1 350 ≈ 6 350.</p>
<p>Sammanlagt ungefär 20 000. Svar B.</p>`,

  40: `<p>Läs av 2008 i det högra diagrammet. Psykiska sjukdomar når upp till cirka 55 procent, och därefter kommer endokrina systemets sjukdomar upp till cirka 65 procent. Det fältet är alltså cirka 10 procentenheter, en tiondel.</p>
<p>Sjukdomar i nervsystemet och medfödda missbildningar är bara några procent vardera, och övriga sjukdomar är cirka 25 procent. Svar A.</p>`,
};
