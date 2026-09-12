// Textförklaringar till högskoleprovet 8 maj 2021, provpass 2 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>${tex('\\frac{x}{3} = \\frac{11}{12} - \\frac{1}{4} = \\frac{11}{12} - \\frac{3}{12} = \\frac{8}{12} = \\frac{2}{3}')}.</p>
<p>Då är ${tex('x = 3 \\cdot \\frac{2}{3} = 2')}.</p>
<p>Svar A.</p>`,

  2: `<p>${tex('f(x) = \\frac{3}{2}x - 2')} har positiv lutning ${tex('\\frac{3}{2}')} och skär <i>y</i>-axeln i −2.</p>
<p>Graf A lutar nedåt. Graf B har lutningen 1 (går genom (2, 0) och (0, −2)), graf C är brantare än 1,5 och skär <i>y</i>-axeln nära −1. Graf D skär <i>y</i>-axeln i −2 och stiger 3 steg på 2 steg åt höger.</p>
<p>Svar D.</p>`,

  3: `<p>${tex('\\sqrt{65} \\approx 8{,}1')} (eftersom ${tex('8^2 = 64')}) och ${tex('\\sqrt{35} \\approx 5{,}9')} (eftersom ${tex('6^2 = 36')}).</p>
<p>Summan är ungefär 14.</p>
<p>Svar C.</p>`,

  4: `<p>Nämnaren: ${tex('2 - \\frac{11}{10} = \\frac{20}{10} - \\frac{11}{10} = \\frac{9}{10}')}.</p>
<p>${tex('\\frac{3}{5} \\div \\frac{9}{10} = \\frac{3}{5} \\cdot \\frac{10}{9} = \\frac{30}{45} = \\frac{2}{3}')}.</p>
<p>Svar D.</p>`,

  5: `<p>Den vänstra lilla triangeln har vinklarna 20° och 130°, så vinkeln vid punkten på basen är ${tex('180^\\circ - 20^\\circ - 130^\\circ = 30^\\circ')}.</p>
<p>Den högra triangeln har vinklarna 60° och 70°, så dess vinkel vid samma punkt är ${tex('180^\\circ - 60^\\circ - 70^\\circ = 50^\\circ')}.</p>
<p>De tre vinklarna vid punkten bildar en rak linje: ${tex('x = 180^\\circ - 30^\\circ - 50^\\circ = 100^\\circ')}.</p>
<p>Svar C.</p>`,

  6: `<p>Sök två tal med produkten −12 och summan 1: det är 4 och −3.</p>
<p>${tex('(x - 3)(x + 4) = x^2 + 4x - 3x - 12 = x^2 + x - 12')}.</p>
<p>Svar B.</p>`,

  7: `<p>En potens av en potens: multiplicera exponenterna. ${tex('\\left(x^2\\right)^{\\frac{5}{7}} = x^{2 \\cdot \\frac{5}{7}} = x^{\\frac{10}{7}}')}.</p>
<p>Svar B.</p>`,

  8: `<p>91 = 7 · 13, 93 = 3 · 31 och 99 = 9 · 11 är inte primtal.</p>
<p>97 är inte delbart med 2, 3, 5 eller 7 (och ${tex('11^2 > 97')}), så 97 är ett primtal.</p>
<p>Svar C.</p>`,

  9: `<p>Sätt linjerna lika: ${tex('-2x + 2 = 2x + 4')}, alltså ${tex('-2 = 4x')} och ${tex('x = -\\frac{1}{2}')}.</p>
<p>Svar C.</p>`,

  10: `<p>Kalla den röda kvadratens sida <i>s</i>. Den gula har sidan ${tex('s + 6')}.</p>
<p>${tex('(s + 6)^2 - s^2 = 12s + 36 = 48')} ger ${tex('s = 1')}, så den röda kvadratens area är ${tex('1^2 = 1')} cm<sup>2</sup>.</p>
<p>Svar A.</p>`,

  11: `<p>Medelvikten 5,5 kg ger den totala vikten ${tex('4 \\cdot 5{,}5 = 22')} kg. Medianen är medelvärdet av de två mittersta lådorna, så de väger tillsammans 10 kg.</p>
<p>Den lättaste och den tyngsta väger då tillsammans 12 kg. Den tredje lådan väger minst 5 kg, så den tyngsta väger minst 5 kg, men den lättaste väger högst lika mycket som den näst lättaste, som väger högst 5 kg. Alltså väger den tyngsta minst ${tex('12 - 5 = 7')} kg, till exempel med vikterna 5, 5, 5 och 7.</p>
<p>Svar D.</p>`,

  12: `<p>1 m/s är 3 600 m per timme, alltså 3,6 km/h.</p>
<p>${tex('3{,}6x = \\frac{18x}{5}')}.</p>
<p>Svar C.</p>`,

  // KVA
  13: `<p>Villkoren säger bara att <i>x</i> är större än −7 och <i>y</i> större än 7. Med ${tex('x = 100')} och ${tex('y = 8')} är I större, med ${tex('x = 0')} och ${tex('y = 8')} är II större.</p>
<p>Svar D.</p>`,

  14: `<p>1 m<sup>3</sup> = 1 000 dm<sup>3</sup>, vilket är mer än 999 dm<sup>3</sup>.</p>
<p>Svar A.</p>`,

  15: `<p>30 personer cyklar, men vi vet inte hur de fördelar sig mellan verkstaden och kontoret. Alla 30 kan arbeta i verkstaden, eller så kan 20 av dem sitta på kontoret och bara 10 arbeta i verkstaden.</p>
<p>Antalet kan alltså vara allt från 10 till 30. Informationen är otillräcklig.</p>
<p>Svar D.</p>`,

  16: `<p>Rektangelns omkrets är ${tex('2x + 20')} och triangelns är ${tex('3x')}.</p>
<p>${tex('2x + 20 = 3x')} ger ${tex('x = 20')}, som är större än 15.</p>
<p>Svar A.</p>`,

  17: `<p>En fjärdedel av en femtedel är ${tex('\\frac{1}{4} \\cdot \\frac{1}{5} = \\frac{1}{20}')}, och en femtedel av en fjärdedel är ${tex('\\frac{1}{5} \\cdot \\frac{1}{4} = \\frac{1}{20}')}. Båda är ${tex('\\frac{x}{20}')}.</p>
<p>Svar C.</p>`,

  18: `<p>${tex('f(2) = 3 \\cdot 4 = 12')}, så ${tex('4 \\cdot f(2) = 48')}.</p>
<p>${tex('f(4) = 3 \\cdot 16 = 48')}.</p>
<p>Svar C.</p>`,

  19: `<p>Eftersom ${tex('x + 1 > x > 0')} är ${tex('\\frac{1}{x + 1} < \\frac{1}{x}')}. Kvantitet I är alltså negativ.</p>
<p>Kvantitet II är samma tal med omvänt tecken, alltså positiv. II är större.</p>
<p>Svar B.</p>`,

  20: `<p>Kvantitet I: ${tex('\\frac{5}{20} = 0{,}25')}. Kvantitet II: ${tex('\\frac{4}{18} \\approx 0{,}22')}.</p>
<p>I är större. Svar A.</p>`,

  21: `<p>Den nedre sidan 2<i>x</i> är hypotenusan i triangeln med kateterna 8 och 6 cm: ${tex('2x = \\sqrt{64 + 36} = 10')}, så ${tex('x = 5')}.</p>
<p>Den skuggade ytan är ett parallelltrapets med de parallella sidorna 5 och 10 cm och höjden 5 cm: ${tex('\\frac{5 + 10}{2} \\cdot 5 = 37{,}5')} cm<sup>2</sup>, vilket är mindre än 38.</p>
<p>Svar B.</p>`,

  22: `<p>${tex('x^2')} är positivt, så ${tex('x^2 y^3 > 0')} kräver ${tex('y^3 > 0')}, alltså ${tex('y > 0')}.</p>
<p>${tex('xy < 0')} med ${tex('y > 0')} ger ${tex('x < 0')}. Då är <i>y</i> större än <i>x</i>.</p>
<p>Svar B.</p>`,

  // NOG
  23: `<p>(1) Oskar är 5 cm längre än Felix och Albert 13 cm längre än Felix. Bara relationer, inga längder. Räcker inte.</p>
<p>(2) Summan av längderna är ${tex('3 \\cdot 181 = 543')} cm och Albert är längst, men hur lång vet vi inte. Räcker inte.</p>
<p>Tillsammans: med Felix längd <i>F</i> är ${tex('F + (F + 5) + (F + 13) = 543')}, så ${tex('F = 175')} och Albert är 188 cm.</p>
<p>Svar C.</p>`,

  24: `<p>(1) 15 % av 400 är 60, så ${tex('0{,}04x = 60')} och ${tex('x = 1\\,500')}. Räcker.</p>
<p>(2) Sätt in ${tex('y = -100')}: ${tex('3x - 500 = 4\\,000')}, så ${tex('x = 1\\,500')}. Räcker.</p>
<p>Var för sig räcker. Svar D.</p>`,

  25: `<p>(1) Kemiboken har nummer 2 och ligger intill både matematik- och fysikboken, som därför har nummer 1 och 3. Matematikboken har inte nummer 3, alltså nummer 1. Räcker.</p>
<p>(2) Engelska, biologi och fysik ligger i följd, men vi vet inte var raden ligger eller var matematikboken finns. Räcker inte.</p>
<p>Svar A.</p>`,

  26: `<p>(1) ${tex('xy = 1')} ger ${tex('xyz = z')}, som är okänt. Räcker inte.</p>
<p>(2) ${tex('yz = 1')} ger ${tex('xyz = x')}, som är okänt. Räcker inte.</p>
<p>Tillsammans: ${tex('x = z = \\frac{1}{y}')}, men <i>y</i> kan vara vad som helst. Med ${tex('y = 1')} är ${tex('xyz = 1')}, med ${tex('y = 2')} är ${tex('xyz = \\frac{1}{2}')}. Räcker inte ens tillsammans.</p>
<p>Svar E.</p>`,

  27: `<p>(1) Sophie bor över både Ylva och Ella, alltså på våning 3. Men Ella och Ylva kan bo på 1 och 2 i valfri ordning. Räcker inte.</p>
<p>(2) Sophie bor överst och Ella och Ylva på 1 och 2, men i vilken ordning? Räcker inte.</p>
<p>Tillsammans: samma information, ordningen mellan Ella och Ylva är fortfarande okänd.</p>
<p>Svar E.</p>`,

  28: `<p>(1) Berts hastighet är 1,5 gånger Antons, så Bert springer ${tex('\\frac{1{,}5}{2{,}5} = \\frac{3}{5}')} av sträckan: ${tex('\\frac{3}{5} \\cdot 3 = 1{,}8')} km. Räcker.</p>
<p>(2) Anton springer ${tex('8 \\cdot \\frac{9}{60} = 1{,}2')} km på 9 minuter, så Bert har sprungit ${tex('3 - 1{,}2 = 1{,}8')} km. Räcker.</p>
<p>Var för sig räcker. Svar D.</p>`,

  // DTK: Födelsetal
  29: `<p>Den kritiska nivån är 1,5. Under den ligger Portugal, Österrike, Italien, Spanien, Tyskland, Tjeckien, Slovakien och Polen, alltså 8 länder. Över ligger 9 länder (Frankrike, Irland, Storbritannien, Finland, Danmark, Sverige, Nederländerna, Belgien och Luxemburg).</p>
<p>${tex('\\frac{8}{17} \\approx 0{,}47')}, närmast 45 procent.</p>
<p>Svar B.</p>`,

  30: `<p>I det högra diagrammet har Danmark störst andel barn i barnomsorg, cirka 61 procent. Näst störst är Sverige med cirka 40 procent.</p>
<p>Skillnaden är cirka 20 procentenheter.</p>
<p>Svar A.</p>`,

  31: `<p>I det vänstra diagrammet: länder med födelsetal under 1,4 är Portugal, Italien, Spanien, Tyskland, Tjeckien, Slovakien och Polen. Av dessa har Portugal (cirka 10 år) och Italien (cirka 11,7 år) färre än 12 utbildningsår.</p>
<p>Kvar är Spanien, Tyskland, Tjeckien, Slovakien och Polen, alltså 5 länder.</p>
<p>Svar B.</p>`,

  // DTK: Efternamn
  32: `<p>${tex('251\\,621 + 251\\,495 + 223\\,151 + 171\\,360 + 147\\,514 = 1\\,045\\,141')}.</p>
<p>Svar C.</p>`,

  33: `<p>Sandström 10 828 + Nordin 10 777 + Lund 10 759 + Ström 10 669 = 43 033. Tillsammans med Bengtssons 34 302 blir det 77 335 personer.</p>
<p>Det är fler än Jonsson (73 869, plats 12) men färre än Pettersson (96 011, plats 11). Bengtsson hamnar alltså på plats 12.</p>
<p>Svar A.</p>`,

  34: `<p>Jansson har 50 170 personer. Viklund 11 377 och Axelsson 22 770 förhåller sig ungefär som 1:2, och summan 34 147 är mindre än 50 170.</p>
<p>Berg och Hansson är visserligen 1:2 men summan 65 489 är för stor. Hansen och Jakobsson är cirka 1:3 och Martinsson och Pettersson cirka 1:10.</p>
<p>Svar A.</p>`,

  // DTK: Jordbruksföretag
  35: `<p>Leta efter staplar som går åt höger (positiv förändring). Vall utöver eget behov ökade under alla tre perioderna, Får och getter ökade 2005 till 2007 och 2007 till 2010, och Småbruk ökade 2003 till 2005.</p>
<p>Övriga åtta driftsinriktningar har bara minskningar. Alltså 3.</p>
<p>Svar B.</p>`,

  36: `<p>Spannmål: cirka −7 procent 2003 till 2005, cirka −9 procent 2005 till 2007 och cirka −1 procent 2007 till 2010.</p>
<p>Skillnaden mellan −9 och −1 är 8 procentenheter.</p>
<p>Svar D.</p>`,

  37: `<p>Raden Totalt: cirka +6 procent 2003 till 2005, cirka −2 procent 2005 till 2007 och cirka −2 procent 2007 till 2010.</p>
<p>Bara alternativ D stämmer med det.</p>
<p>Svar D.</p>`,

  // DTK: Materialförbrukning
  38: `<p>Materialförbrukningen (tjock linje) ligger längst från 100 år 2012, index cirka 119, jämfört med cirka 115 år 2007.</p>
<p>Materialintensiteten ligger längst från 100 år 2009, index cirka 86, medan 2005 är cirka 97.</p>
<p>Svar D.</p>`,

  39: `<p>År 2007 är biomassa (svarta fältet) cirka 6 ton per capita. Fossila bränslen (prickiga fältet) går från cirka 20 till cirka 22, alltså cirka 2 ton per capita.</p>
<p>Biomassan var ungefär tre gånger så stor.</p>
<p>Svar C.</p>`,

  40: `<p>År 2008 är index för materialförbrukning cirka 115.</p>
<p>${tex('1{,}15 \\cdot 180 \\approx 207')} miljoner ton, närmast 205.</p>
<p>Svar C.</p>`,
};
