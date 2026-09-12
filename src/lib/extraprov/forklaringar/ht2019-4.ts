// Textförklaringar till högskoleprovet 20 oktober 2019, provpass 4 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>8 500 000 mm = 850 000 cm = 8 500 m = 8,5 km.</p>
<p>${tex('8{,}5 \\cdot 10^3')} cm är bara 85 m, ${tex('8{,}5 \\cdot 10^5')} dm är 85 km och 8,5 mil är 85 km.</p>
<p>Svar C.</p>`,

  2: `<p>Linjen skär <i>y</i>-axeln i 3, så ${tex('m = 3')}. Den faller åt höger och går från (0, 3) till (2, 0), alltså 3 steg ner på 2 steg åt höger: ${tex('k = -1{,}5')}.</p>
<p>${tex('y = -1{,}5x + 3')}.</p>
<p>Svar B.</p>`,

  3: `<p>Kvoten av två positiva tal är större än 1 precis när täljaren är större än nämnaren, så D stämmer alltid.</p>
<p>A: <i>z</i> är alltid positivt. B: då är <i>z</i> = 1, inte <i>x</i>. C: om <i>x</i> är större än <i>y</i> är <i>z</i> större än 1.</p>
<p>Svar D.</p>`,

  4: `<p>Emil är <i>x</i> år och Sture ${tex('x + 3')} år. Tillsammans: ${tex('x + x + 3 = 31')}.</p>
<p>Svar C.</p>`,

  5: `<p>${tex('49 = 7^2')}, så ${tex('7 + \\frac{x}{3} = 2')}.</p>
<p>${tex('\\frac{x}{3} = -5')} ger ${tex('x = -15')}.</p>
<p>Svar A.</p>`,

  6: `<p>65 % är längre än Ida och 32 % är längre än Albert, så Albert är längre än Ida. De som är längre än Ida men kortare än Albert är ${tex('65 - 32 = 33')} %.</p>
<p>Det är ungefär en tredjedel.</p>
<p>Svar B.</p>`,

  7: `<p>Bilarna har ${tex('4 \\cdot 4 = 16')} hjul och motorcyklarna ${tex('2 \\cdot 2 = 4')}, totalt 20.</p>
<p>${tex('\\frac{4}{20} = \\frac{1}{5}')}.</p>
<p>Svar A.</p>`,

  8: `<p>Pröva: ${tex('3 \\cdot 5 - 5 = 10')}, så (5, 10) ligger på linjen.</p>
<p>(−2, −10) ger −11, (0, 3) ger −5 och (3, 5) ger 4.</p>
<p>Svar D.</p>`,

  9: `<p>Låt den korta sidan vara 1 och den långa ${tex('\\sqrt{2}')}. Diagonalen är ${tex('\\sqrt{(\\sqrt{2})^2 + 1^2} = \\sqrt{3}')}.</p>
<p>Förhållandet är ${tex('\\sqrt{2} : \\sqrt{3}')}.</p>
<p>Svar D.</p>`,

  10: `<p>Välj det som ger störst tal i varje steg: multiplicera med 100 (${tex('10^3 \\cdot 10^2 = 10^5')}), dividera med ${tex('10^{-1}')} (${tex('10^5 / 10^{-1} = 10^6')}) och dividera med 0,0001 (${tex('10^6 / 10^{-4} = 10^{10}')}).</p>
<p>Svar C.</p>`,

  11: `<p>Täljaren: ${tex('\\frac{1}{2} + 3 = \\frac{7}{2}')}. Nämnaren: ${tex('4 + \\frac{1}{5} = \\frac{21}{5}')}.</p>
<p>${tex('\\frac{7}{2} \\cdot \\frac{5}{21} = \\frac{35}{42} = \\frac{5}{6}')}.</p>
<p>Svar D.</p>`,

  12: `<p>Två sidor är <i>x</i> och de andra två är tillsammans ${tex('360 - 2x')}, alltså ${tex('180 - x')} var.</p>
<p>Arean är ${tex('x(180 - x) = 180x - x^2')}.</p>
<p>Svar D.</p>`,

  // KVA
  13: `<p>${tex('\\frac{4}{x} = 2 + \\frac{1}{2} = \\frac{5}{2}')} ger ${tex('x = \\frac{8}{5} = 1{,}6')}, större än 1.</p>
<p>Svar A.</p>`,

  14: `<p>I: först ${tex('500 - 100 = 400')}, sedan 20 % av 400 = 80. Total rabatt 180 kr.</p>
<p>II: först 20 % av 500 = 100, sedan 100 kr till. Total rabatt 200 kr.</p>
<p>Svar B.</p>`,

  15: `<p>Trianglarna AMC och MBC har lika långa baser (AM = MB) och samma höjd (avståndet från C till linjen AB).</p>
<p>Areorna är lika.</p>
<p>Svar C.</p>`,

  16: `<p>När <i>x</i> är mindre än −1 är ${tex('1 - x')} större än 2 och ${tex('x - 1')} mindre än −2.</p>
<p>Kvantiteterna är varandras motsatser, och I är den positiva.</p>
<p>Svar A.</p>`,

  17: `<p>${tex('\\sqrt{x} = x')} med ${tex('x > 0')} ger efter kvadrering ${tex('x = x^2')}, alltså ${tex('x = 1')}.</p>
<p>Svar C.</p>`,

  18: `<p>${tex('f(1) = -3 + 5 = 2')} och ${tex('f(-1) = 3 + 5 = 8')}.</p>
<p>I: ${tex('\\frac{2}{8} = \\frac{1}{4}')}. II: ${tex('\\frac{8}{2} = 4')}.</p>
<p>Svar B.</p>`,

  19: `<p>${tex('3^3 + 3^3 + 3^3 = 3 \\cdot 3^3 = 3^4')}.</p>
<p>Svar C.</p>`,

  20: `<p>Kalle: ${tex('\\frac{60}{22} \\approx 2{,}7')} timmar. Bosse: ${tex('\\frac{54}{18} = 3')} timmar.</p>
<p>Svar B.</p>`,

  21: `<p>Åttahörningen har omkretsen ${tex('8x')}.</p>
<p>I triangeln är de två kortare sidorna tillsammans längre än den längsta sidan, så omkretsen är mer än ${tex('5x + 5x = 10x')}, vilket är mer än ${tex('8x')}.</p>
<p>Svar B.</p>`,

  22: `<p>Medianen av två tal är deras medelvärde: ${tex('x + y = 4')} och ${tex('y + z = 18')}.</p>
<p>${tex('y = 3')} ger ${tex('x = 1')} och ${tex('z = 15')}, vilket uppfyller ${tex('x < y < z')}. Men ${tex('y = 7')} ger ${tex('x = -3')} och ${tex('z = 11')}, vilket också fungerar. <i>y</i> kan alltså vara både mindre och större än 6.</p>
<p>Svar D.</p>`,

  // NOG
  23: `<p>(1): 42 liter kvar, men inget om hur mycket som togs.</p>
<p>(2): efter 20 % återstår 80 %, och efter ytterligare en fjärdedel av det återstår ${tex('0{,}75 \\cdot 0{,}8 = 0{,}6')}, alltså 60 %. Men mängden är okänd.</p>
<p>Tillsammans: ${tex('0{,}6 \\cdot V = 42')} ger ${tex('V = 70')} liter.</p>
<p>Svar C.</p>`,

  24: `<p>(1): hälften av de stora är vita och hälften av de vita är stora, så antalet stora vita är både halva antalet stora och halva antalet vita. Alltså är antalet stora lika med antalet vita, men andelen rosa är okänd.</p>
<p>(2): 100 pärlor varav 20 stora, men inget om färgerna.</p>
<p>Tillsammans: 20 vita pärlor, alltså 80 rosa, och sannolikheten är 0,8.</p>
<p>Svar C.</p>`,

  25: `<p>Summan av talen är 150, men medianen (det mittersta talet) beror på hur de fördelar sig.</p>
<p>Varken att ett tal är 3 eller att ett tal är 30, eller båda, låser de andra talen. Till exempel 3, 30, 30, 30, 57 (median 30) och 3, 4, 30, 50, 63 (median 30) men också 3, 10, 20, 30, 87 (median 20).</p>
<p>Svar E.</p>`,

  26: `<p>(1): Marie före Harald före Anna, och Marie är inte först, så David är först: David, Marie, Harald, Anna. Tillräcklig.</p>
<p>(2): David före Anna och Marie, Harald inte sist. Ordningen mellan Anna och Marie och Haralds plats är öppen.</p>
<p>Svar A.</p>`,

  27: `<p>(1): 4 katter på varje hund ger andelen ${tex('\\frac{4}{5}')}, 80 %. Tillräcklig.</p>
<p>(2): 20 % hundar ger 80 % katter. Tillräcklig.</p>
<p>Svar D.</p>`,

  28: `<p>${tex('29 + n')} ligger mellan 30 och 38.</p>
<p>(1): det enda talet i intervallet som är delbart med 9 är 36, så ${tex('n = 7')}. Tillräcklig.</p>
<p>(2): 30, 33 och 36 är delbara med 3, så <i>n</i> kan vara 1, 4 eller 7.</p>
<p>Svar A.</p>`,

  // DTK
  29: `<p>Nedre diagrammet: ungefär ${tex('10 + 6{,}4 + 2{,}8 + 2{,}6 + 2{,}5 + 1{,}0 + 0{,}6 \\approx 26')} kg per person och år.</p>
<p>Närmast 25 kg.</p>
<p>Svar B.</p>`,

  30: `<p>Mejeriprodukter ungefär 55 000 ton mot ungefär 9 000 ton övrigt flytande matavfall (eller 6,4 mot 1,0 kg per person).</p>
<p>Ungefär 6 gånger så mycket.</p>
<p>Svar B.</p>`,

  31: `<p>Övre diagrammet: ungefär ${tex('87\\,000 + 55\\,000 + 24\\,000 + 22\\,000 + 21\\,000 + 9\\,000 + 5\\,000 = 223\\,000')} ton per år.</p>
<p>${tex('\\frac{223\\,000}{52} \\approx 4\\,300')} ton per vecka.</p>
<p>Svar C.</p>`,

  32: `<p>Kategorin har 211 fall: daghem/fritidshem 130 (62 %), lekplats på institution 53 (25 %), offentlig lokal 11 (5 %), skolgård 10 (5 %), sjukhus 5 (2 %) och annat 2 (1 %).</p>
<p>Cirkel A har en vit sektor på drygt hälften, en prickig på en fjärdedel och små sektorer för resten. I B och C är den grå skolgårdssektorn för stor, och i D är den prickiga sektorn för stor.</p>
<p>Svar A.</p>`,

  33: `<p>En femtedel av 1 815 rapporterade fall är 363.</p>
<p>Fall/hopp från låg höjd hade 372 fall, nära en femtedel. Annat fall i samma plan hade 205, fall på eller från trappa 118 och kontakt med person 98.</p>
<p>Svar C.</p>`,

  34: `<p>Hugg/skärning/sågning mot skarp yta/kant: 21 pojkar och 9 flickor, totalt 30. Skattat antal i Sverige: 600.</p>
<p>${tex('\\frac{9}{30} \\cdot 600 = 180')}.</p>
<p>Svar B.</p>`,

  35: `<p>Frankrikes kurva stiger varje år, med det största steget från ungefär 22 till 27 mellan 1928 och 1929.</p>
<p>Storbritannien, Nederländerna och Belgien har år då kurvan planar ut eller sjunker, eller större ökningar andra år.</p>
<p>Svar D.</p>`,

  36: `<p>Sverige 1928: ungefär 80 telefoner per 1 000 invånare.</p>
<p>${tex('6\\,000\\,000 \\cdot \\frac{80}{1\\,000} = 480\\,000')}.</p>
<p>Svar C.</p>`,

  37: `<p>Tyskland minus Belgien: 1926 ungefär ${tex('43 - 21 = 22')}, 1930 ungefär ${tex('49 - 32 = 17')}, 1932 ungefär ${tex('45 - 36 = 9')} och 1933 ungefär ${tex('46 - 39 = 7')}.</p>
<p>Störst 1926 och minst 1933.</p>
<p>Svar B.</p>`,

  38: `<p>Hällekis ligger uppe till vänster (nordväst) om Gullhögen vid Skövde.</p>
<p>Med skalan (20 km) blir avståndet ungefär 35 km.</p>
<p>Svar D.</p>`,

  39: `<p>Falköping ligger på ordoviciska kalkstenar. Väg 193 österut går sedan över kambriska sandstenar/skiffrar, urberg, kambriska sandstenar/skiffrar och upp på ordoviciska kalkstenar, ner över kambriska sandstenar/skiffrar och slutligen urberg fram till Tidaholm.</p>
<p>Svar D.</p>`,

  40: `<p>Karlsfors ligger norr om Skövde, Stora/Lilla Backor väster om Falköping och Varv öster om Falköping. Triangeln har en bas mellan Backor och Varv på ungefär 24 km och en höjd upp till Karlsfors på ungefär 33 km.</p>
<p>${tex('\\frac{24 \\cdot 33}{2} \\approx 400')} km<sup>2</sup>, närmast 380 km<sup>2</sup>.</p>
<p>Svar A.</p>`,
};
