// Textförklaringar till högskoleprovet 26 oktober 2013, provpass 5 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>${tex('\\frac{2}{3} \\cdot \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}')}.</p>
<p>Svar A.</p>`,

  2: `<p>Täljarna är lika, så nämnarna måste vara lika: ${tex('a + x = 2x')} ger ${tex('x = a')}.</p>
<p>Svar D.</p>`,

  3: `<p>Kvoten av tal med olika tecken är negativ, så A stämmer. B är fel av samma skäl, och produkten av ett negativt och ett positivt tal är negativ (C fel) medan produkten av två negativa tal är positiv (D fel).</p>
<p>Svar A.</p>`,

  4: `<p>Vinkelsumman: ${tex('90 + (x + 30) + y = 180')} ger ${tex('y = 60 - x')}.</p>
<p>Svar B.</p>`,

  5: `<p>${tex('1 \\cdot 10^{10} \\cdot 4 \\cdot 10^{-8} = 4 \\cdot 10^{10 - 8} = 4 \\cdot 10^2')} cm.</p>
<p>Svar B.</p>`,

  6: `<p>Triangeln ABD är rätvinklig med kateterna 1 cm, så ${tex('BD = \\sqrt{2}')} cm. Eftersom BCD är liksidig är ${tex('BC = CD = \\sqrt{2}')}. Omkretsen är ${tex('1 + 1 + \\sqrt{2} + \\sqrt{2} = 2 + 2\\sqrt{2}')} cm.</p>
<p>Svar C.</p>`,

  7: `<p>${tex('a + b > a - 2b')} ger ${tex('3b > 0')}, alltså ${tex('b > 0')}.</p>
<p>Svar A.</p>`,

  8: `<p>${tex('3^4 = 81')}, ${tex('(x^3)^4 = x^{12}')}, ${tex('(y^2)^4 = y^8')} och ${tex('z^4')}.</p>
<p>Svar D.</p>`,

  9: `<p>${tex('-x + 7 = \\frac{2}{3}x - \\frac{4}{3}')} ger ${tex('\\frac{25}{3} = \\frac{5}{3}x')}, alltså ${tex('x_1 = 5')} och ${tex('y_1 = -5 + 7 = 2')}. Båda är positiva.</p>
<p>Svar A.</p>`,

  10: `<p>På 7 minuter hinner han ${tex('\\frac{7}{m}')} sidor.</p>
<p>Svar C.</p>`,

  11: `<p>Vänsterledet är ${tex('x\\left(\\frac{1}{5} - \\frac{1}{10} + \\frac{1}{15} - \\frac{1}{20}\\right) = \\frac{7}{60}x')} och högerledet ${tex('\\frac{12 - 6 + 4 - 3}{12} = \\frac{7}{12}')}. ${tex('\\frac{7}{60}x = \\frac{7}{12}')} ger ${tex('x = 5')}. Snabbare: högerledet är ${tex('\\frac{1}{5}')} av vänsterledet med ${tex('x = 1')} bytt mot 5.</p>
<p>Svar D.</p>`,

  12: `<p>Kalla sannolikheten för flicka <i>f</i>. Då är ${tex('\\frac{2}{3}f + f = 1')}, alltså ${tex('f = \\frac{3}{5}')} och sannolikheten för pojke ${tex('\\frac{2}{5}')}, som är kvoten mellan antalet pojkar och antalet elever.</p>
<p>Svar B.</p>`,

  // KVA
  13: `<p>${tex('-\\frac{7}{4}x = -1{,}75x')} och ${tex('-\\frac{3}{2}x = -1{,}5x')}. Eftersom <i>x</i> är positivt är ${tex('-1{,}75x < -1{,}5x')}. II är större.</p>
<p>Svar B.</p>`,

  14: `<p>Vinklarna bildar en rak vinkel: ${tex('5x + 4x = 180°')} ger ${tex('x = 20°')}. Lika.</p>
<p>Svar C.</p>`,

  15: `<p>Med ${tex('x = 1')} är ${tex('\\frac{1}{x} + x = 2')}, lika med II, men med ${tex('x = 2')} är det ${tex('2{,}5')}, större än II. Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  16: `<p>${tex('a(b - 2a) = ab - 2a^2')}, exakt samma uttryck som I. Lika.</p>
<p>Svar C.</p>`,

  17: `<p>En halvcirkel med diametern <i>d</i> har båglängden ${tex('\\frac{\\pi d}{2}')}. Eftersom ${tex('AB + BC = AC')} är ${tex('\\frac{\\pi \\cdot AB}{2} + \\frac{\\pi \\cdot BC}{2} = \\frac{\\pi \\cdot AC}{2}')}. Lika.</p>
<p>Svar C.</p>`,

  18: `<p>II ${tex('= \\frac{x^b}{b^b}')}. Eftersom ${tex('b > 1')} är ${tex('b^b > b')}, så II har större nämnare än I med samma positiva täljare. I är större.</p>
<p>Svar A.</p>`,

  19: `<p>Talen är ${tex('x, x + 1, x + 2, x + 3')}. Medelvärdet av <i>x</i> och <i>w</i> är ${tex('x + 1{,}5')}, och medelvärdet av <i>y</i> och <i>z</i> är också ${tex('x + 1{,}5')}. Lika.</p>
<p>Svar C.</p>`,

  20: `<p>Ett varv är ${tex('18 / 3 = 6')} meter, alltså omkretsen. Diametern är ${tex('\\frac{6}{\\pi} \\approx 1{,}9')} meter, mindre än 2. II är större.</p>
<p>Svar B.</p>`,

  21: `<p>I ${tex('= xy + xz + x^2 + yz')}. II ${tex('= (x + z)(y + x) = xy + x^2 + zy + zx')}. Samma termer. Lika.</p>
<p>Svar C.</p>`,

  22: `<p>Punkterna (2, 2) och (2, 4) ligger lodrätt över varandra. Om den räta vinkeln ligger vid (2, 2) måste (−1, <i>a</i>) ligga på samma höjd, ${tex('a = 2')}; om den ligger vid (2, 4) är ${tex('a = 4')}. (Rät vinkel vid (−1, <i>a</i>) är omöjligt.) Det går inte att avgöra.</p>
<p>Svar D.</p>`,

  // NOG
  23: `<p>(2) ger att damcyklarna är röd och blå, och (1) att de tre herrcyklarna har tre olika färger. Eftersom bara ett par har samma färg är herrcyklarna antingen svart, grön och röd (paret rött) eller svart, grön och blå (paret blått). Inte ens tillsammans går det att avgöra.</p>
<p>Svar E.</p>`,

  24: `<p>(1): värdet före köpet var 12 miljoner, alltså 15 miljoner efter, men de nya skulpturernas värde är okänt. (2): 300 000 kr per skulptur efter köpet, men antalet är okänt. Tillsammans: ${tex('15\\,000\\,000 / 300\\,000 = 50')} skulpturer efter köpet, alltså 10 nya.</p>
<p>Svar C.</p>`,

  25: `<p>Koppar, zink och nickel väger tillsammans ${tex('0{,}004 \\cdot 1\\,000 = 4')} gram. (1): nickel är 500 ppm, alltså 0,5 gram. (2): zink 1 gram. Tillsammans: koppar ${tex('4 - 0{,}5 - 1 = 2{,}5')} gram. Var för sig räcker uppgifterna inte.</p>
<p>Svar C.</p>`,

  26: `<p>Kalla första och tredje kastet <i>a</i>. (1): andra kastet är ${tex('\\frac{2a}{3}')}, men <i>a</i> förblir okänt. (2): ${tex('a = 33 + \\frac{a}{3}')} ger ${tex('\\frac{2a}{3} = 33')}, alltså ${tex('a = 49{,}5')} meter. Endast (2) räcker.</p>
<p>Svar B.</p>`,

  27: `<p>(1): gröna är ${tex('1 - 0{,}7 = 0{,}3')}. (2): blå är ${tex('1 - 0{,}9 = 0{,}1')}. Tillsammans: röda är ${tex('1 - 0{,}3 - 0{,}1 = 0{,}6')}. Var för sig räcker uppgifterna inte.</p>
<p>Svar C.</p>`,

  28: `<p>Tillsammans planterar de ${tex('120 / 6 = 20')} träd per timme. (1): A och B planterar i förhållandet 3 till 2, så B planterar 8 träd per timme och behöver ${tex('120 / 8 = 15')} timmar. (2): A planterar 12 träd per timme, så B planterar 8 per timme och behöver 15 timmar. Var för sig räcker.</p>
<p>Svar D.</p>`,

  // DTK
  29: `<p>I stapeldiagrammet över export, import och inrikes hantering var exporten cirka 9 av 21 miljoner ton 1920, alltså cirka 40 procent. 1930 var andelen cirka en tredjedel, och 1970 och 1980 endast cirka en fjärdedel.</p>
<p>Svar A.</p>`,

  30: `<p>Skogsgodset låg på cirka 9 till 11 miljoner ton från 1920 till 1960 och nådde sin topp, cirka 18 miljoner ton, 1980. Oljan ökade kraftigt efter 1960, malmen varierade och stenen ökade fram till 1990.</p>
<p>Svar D.</p>`,

  31: `<p>1920: cirka 21 miljoner ton på cirka 240 hamnar, ${tex('\\frac{21}{240} \\approx 0{,}1')}. 1995: cirka 117 miljoner ton på cirka 88 hamnar, ${tex('\\frac{117}{88} \\approx 1{,}3')}.</p>
<p>Svar A.</p>`,

  32: `<p>1900 var 40 838 av 210 048 kvinnor i åldern 20–24 år gifta. ${tex('\\frac{40\\,838}{210\\,048} \\approx 0{,}19')}, alltså ungefär en femtedel.</p>
<p>Svar B.</p>`,

  33: `<p>Totalt: 5 136 441 år 1900, 7 041 829 år 1950 och 8 854 322 år 1998. ${tex('\\frac{7\\,041\\,829}{5\\,136\\,441} \\approx 1{,}37')}, ${tex('\\frac{8\\,854\\,322}{7\\,041\\,829} \\approx 1{,}26')} och ${tex('\\frac{8\\,854\\,322}{5\\,136\\,441} \\approx 1{,}72')}, alltså 37, 25 och 72 procent.</p>
<p>Svar C.</p>`,

  34: `<p>1950: ${tex('4\\,795 + 6\\,981 = 11\\,776')} frånskilda av 488 506, cirka 2,4 procent. 1998: ${tex('45\\,873 + 55\\,386 = 101\\,259')} av 600 919, cirka 16,9 procent. Skillnaden är cirka 14,5 procentenheter.</p>
<p>Svar A.</p>`,

  35: `<p>Drängstugan är byggd 1845 av timmer och mäter cirka 7,5 gånger 5,5 meter, ungefär 40 m². Ladugården (timmer) är ungefär 100 m², vedboden (timmer) ungefär 20 m² och visthusboden är byggd av stolpvirke.</p>
<p>Svar A.</p>`,

  36: `<p>Den senast daterade byggnaden är motorhuset från 1922, byggt av bräder. Köksväxterna ligger ovanför bostadshuset, alltså åt söder (kompassen visar söder snett uppåt). Ladan är från 1845 (ladugården från 1884), och svinhuset av timmer är från 1913.</p>
<p>Svar D.</p>`,

  37: `<p>Med skalstocken (40 meter) blir sträckan ungefär: 8 meter från förstun till husets högra (sydvästra) gavel, 5 meter runt gaveln, 25 meter längs vägen mellan fruktträden och ärt- och kållanden upp till trädgårdens bortre ände, 13 meter längs den övre vägen fram till vinbären, 25 meter rakt tillbaka till salen, 8 meter runt den vänstra (nordostliga) gaveln och 9 meter tillbaka till förstun. Sammanlagt cirka 95 meter, alltså närmast 100 meter.</p>
<p>Svar A.</p>`,

  38: `<p>Övriga: 2000 cirka ${tex('0{,}075 \\cdot 45\\,710 + 0{,}085 \\cdot 47\\,806 \\approx 7\\,500')}, 2001 cirka ${tex('0{,}09 \\cdot 45\\,467 + 0{,}10 \\cdot 48\\,342 \\approx 8\\,900')} och 2002 cirka ${tex('0{,}095 \\cdot 45\\,812 + 0{,}105 \\cdot 49\\,258 \\approx 9\\,500')}. Flest 2002, minst 2000.</p>
<p>Svar C.</p>`,

  39: `<p>Andningsorganen låg på cirka 7 procent för män och 6,5 procent för kvinnor alla tre åren. Varje år dog alltså cirka ${tex('0{,}07 \\cdot 45\\,700 + 0{,}065 \\cdot 48\\,000 \\approx 6\\,300')} personer, tillsammans cirka 19 000 på tre år.</p>
<p>Svar D.</p>`,

  40: `<p>2002: cirkulationsorganen cirka 45,5 procent av kvinnorna mot matsmältningsorganen cirka 3,5 procent. ${tex('\\frac{45{,}5}{3{,}5} \\approx 13')}.</p>
<p>Svar C.</p>`,
};
