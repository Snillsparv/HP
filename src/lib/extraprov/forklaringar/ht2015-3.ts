// Textförklaringar till högskoleprovet 24 oktober 2015, provpass 3 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Gemensam nämnare 21: ${tex('\\frac{3}{7} - \\frac{2}{3} = \\frac{9}{21} - \\frac{14}{21} = -\\frac{5}{21}')}.</p>
<p>Svar B.</p>`,

  2: `<p>Omkretsen är summan av sidorna: ${tex('x + (x + 1) + (x - 1) + 2x + (x - 2) = 6x - 2')}. Så ${tex('6x - 2 = 19')}, vilket ger ${tex('x = 3{,}5')}.</p>
<p>Svar D.</p>`,

  3: `<p>${tex('\\frac{7{,}50}{25} = 0{,}30')}, alltså 30 procent.</p>
<p>Svar B.</p>`,

  4: `<p>Mittpunkten har medelvärdet av koordinaterna: ${tex('\\left(\\frac{-3 + 7}{2}, \\frac{1 + (-3)}{2}\\right) = (2, -1)')}.</p>
<p>Svar C.</p>`,

  5: `<p>${tex('x^{-2} = \\left(x^{-1}\\right)^2 = \\left(\\frac{2}{7}\\right)^2 = \\frac{4}{49}')}.</p>
<p>Svar B.</p>`,

  6: `<p>Var Cesar än sitter finns tre lediga platser kvar, och exakt en av dem är mitt emot honom. Sannolikheten att David hamnar där är ${tex('\\frac{1}{3}')}.</p>
<p>Svar B.</p>`,

  7: `<p>Jämnt plus jämnt minus 2 är jämnt, jämnt gånger vad som helst är jämnt, och kvadraten på ett jämnt tal är jämn. Kvoten ${tex('(x + 1)/(y + 1)')} kan däremot vara udda, till exempel ${tex('x = 2')} och ${tex('y = 0')} ger ${tex('3/1 = 3')}.</p>
<p>Svar C.</p>`,

  8: `<p>AD och CB är lodräta radier, båda 3 cm, så ABCD är en parallellogram med basen 3 cm. Höjden är det vågräta avståndet mellan medelpunkterna, ${tex('3 + 3 = 6')} cm. Arean är ${tex('3 \\cdot 6 = 18')} cm².</p>
<p>Svar B.</p>`,

  9: `<p>${tex('f\\left(\\frac{3}{2}\\right) = 3')} och ${tex('g\\left(\\frac{3}{2}\\right) = \\frac{9}{4}')}. Skillnaden är ${tex('3 - \\frac{9}{4} = \\frac{3}{4}')}.</p>
<p>Svar C.</p>`,

  10: `<p>${tex('3 - 2x < 1')} ger ${tex('-2x < -2')}. Division med −2 vänder olikheten: ${tex('x > 1')}.</p>
<p>Svar B.</p>`,

  11: `<p>Förläng med ${tex('\\sqrt{2}')}: ${tex('\\frac{6}{\\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}')}.</p>
<p>Svar D.</p>`,

  12: `<p>Sätt in ${tex('x = -\\frac{1}{2}')}: vänsterledet blir ${tex('-p + p = 0')} och högerledet ${tex('-\\frac{12 - p}{2} + 1 = -6 + \\frac{p}{2} + 1')}. Så ${tex('\\frac{p}{2} - 5 = 0')}, det vill säga ${tex('p = 10')}.</p>
<p>Svar B.</p>`,

  // KVA
  13: `<p>För negativa ${tex('x')} är ${tex('x^2')} positivt och ${tex('x^3')} negativt. I är större.</p>
<p>Svar A.</p>`,

  14: `<p>Att medellängden är oförändrad betyder bara att Anna och Bosse tillsammans är lika långa som Christina och Daniel tillsammans. Hur Annas längd förhåller sig till Christinas går inte att avgöra.</p>
<p>Svar D.</p>`,

  15: `<p>AB och AC är radier, så triangeln ABC är likbent och vinkeln ACB är också ${tex('y')}. Vinkeln ${tex('x')} är yttervinkel till triangeln vid A och är därför summan av de två motstående vinklarna: ${tex('x = y + y = 2y')}. Lika.</p>
<p>Svar C.</p>`,

  16: `<p>I: första månaden har 40 av 400 dagar, sannolikhet ${tex('\\frac{1}{10}')}. II: var femte dag är första dagen i en vecka, sannolikhet ${tex('\\frac{1}{5}')}. II är större.</p>
<p>Svar B.</p>`,

  17: `<p>I: ${tex('\\frac{37}{-13} \\cdot \\frac{-3}{7} = \\frac{111}{91} \\approx 1{,}22')}. II: ${tex('1 + \\frac{4}{9} = \\frac{13}{9} \\approx 1{,}44')}. II är större.</p>
<p>Svar B.</p>`,

  18: `<p>${tex('f(-1) = -3 + 2 + 5 + 1 = 5')} och ${tex('f(0) = 1')}. I är större.</p>
<p>Svar A.</p>`,

  19: `<p>Kubens sida är ${tex('\\sqrt[3]{125} = 5')} cm. Sex sidoytor på ${tex('5 \\cdot 5 = 25')} cm² ger ${tex('150')} cm², mer än 125 cm².</p>
<p>Svar A.</p>`,

  20: `<p>${tex('7^3 = 343')} och ${tex('111\\pi \\approx 111 \\cdot 3{,}14 \\approx 348{,}7')}. II är större.</p>
<p>Svar B.</p>`,

  21: `<p>${tex('2x - 3 + y = y')} ger ${tex('2x = 3')}, alltså ${tex('x = 1{,}5')}. Om ${tex('y')} vet vi ingenting, så jämförelsen går inte att avgöra.</p>
<p>Svar D.</p>`,

  22: `<p>${tex('0{,}35x = 0{,}55x + 5{,}5')} ger ${tex('-0{,}2x = 5{,}5')}, alltså ${tex('x = -27{,}5')}, som är mindre än 0.</p>
<p>Svar B.</p>`,

  // NOG
  23: `<p>(1) säger bara att det bruna paketet väger mer än 15 kg. (2) ger vikten ${tex('3{,}8 \\cdot 5 = 19')} kg, alltså 14 kg mer än det vita. Endast (2) räcker.</p>
<p>Svar B.</p>`,

  24: `<p>Sidan HG motsvarar sidan DC, som är 6 cm, och FG motsvarar BC. (1) ger BC = 21 − 7 − 6 − 3 = 5 cm men ingen sida i EFGH. (2) ger FG = 10 cm men inte BC. Tillsammans är skalan ${tex('\\frac{10}{5} = 2')}, så ${tex('x = 2 \\cdot 6 = 12')} cm.</p>
<p>Svar C.</p>`,

  25: `<p>(1): tiden från A till B är 1,5 gånger tiden tillbaka, så hastigheten tillbaka är ${tex('1{,}5 \\cdot 60 = 90')} km/h. Med sträckan ${tex('d')} åt varje håll blir medelhastigheten ${tex('\\frac{2d}{d/60 + d/90} = 72')} km/h. (2) säger inget om hastigheten tillbaka. Endast (1) räcker.</p>
<p>Svar A.</p>`,

  26: `<p>(1) ger ${tex('z(x - y) > 0')} och (2) ger ${tex('y(x - z) > 0')}, men ingen av dem säger något säkert om tecknet på ${tex('z')}. Även tillsammans går det inte: ${tex('x = 2, y = 1, z = 1')} uppfyller båda med ${tex('z > 0')}, medan ${tex('x = 1, y = 2, z = -1')} uppfyller båda med ${tex('z < 0')}.</p>
<p>Svar E.</p>`,

  27: `<p>Kalla Fridas ålder ${tex('a')} och vänskapens längd ${tex('f')}. (1) ger ${tex('f = 4')} men inte åldern. (2) ger ${tex('f + 6 = \\frac{a + 6}{2}')}, en ekvation med två obekanta. Tillsammans: ${tex('10 = \\frac{a + 6}{2}')} ger ${tex('a = 14')}, så andelen är ${tex('\\frac{4}{14} = \\frac{2}{7}')}.</p>
<p>Svar C.</p>`,

  28: `<p>Med ${tex('g')} gäster och ${tex('p')} pajer ger (1) ${tex('p = 2g + 4')} och (2) ${tex('p = 3g - 1')}. Var för sig räcker de inte, men tillsammans: ${tex('2g + 4 = 3g - 1')} ger ${tex('g = 5')} och ${tex('p = 14')}.</p>
<p>Svar C.</p>`,

  // DTK
  29: `<p>Bland 12–16-åringarna angav 23 procent att de spelade datorspel 1–2 timmar, vilket är ungefär en fjärdedel. För TV var andelen 52, för internet 35 och för TV-spel 15 procent.</p>
<p>Svar C.</p>`,

  30: `<p>12–16-åringar som tittade på video/DVD minst 1 timme: ${tex('3 + 35 = 38')} procent. Föräldrar till 12–16-åringar: ${tex('2 + 22 = 24')} procent. Skillnaden är 14 procentenheter.</p>
<p>Svar B.</p>`,

  31: `<p>13 procent av 702 9–11-åringar är cirka 91, och 22 procent av 677 12–16-åringar är cirka 149. Tillsammans cirka 240.</p>
<p>Svar C.</p>`,

  32: `<p>Solna ligger vid ungefär +55 procent och +330 indexenheter, Värmdö vid ungefär +38 procent och +900 indexenheter. Skillnaden är knappt 20 procentenheter och drygt 550 indexenheter.</p>
<p>Svar A.</p>`,

  33: `<p>Nykvarn ligger längst ner i diagrammet vid cirka −95 procent och +700 indexenheter. Lidingös sysselsättning hade ökat, Huddinges index hade minskat med cirka 400, och Vaxholms index hade ökat.</p>
<p>Svar D.</p>`,

  34: `<p>Norrtälje ligger vid ungefär +12 procent och −1 100 indexenheter. Ekerö hade ökat med cirka 35 procent, Nynäshamn med cirka 28 procent, och Österåkers index hade bara minskat med cirka 850.</p>
<p>Svar B.</p>`,

  35: `<p>Grupp C 2004: ${tex('594 + 614 = 1\\,208')} miljoner DDD. Grupp J: ${tex('30 + 22 = 52')}. ${tex('\\frac{1\\,208}{52} \\approx 23')}.</p>
<p>Svar C.</p>`,

  36: `<p>2004: ${tex('12\\,275 + 10\\,224 = 22\\,499')} miljoner kronor. 2005: ${tex('12\\,215 + 10\\,325 = 22\\,540')}. Ökningen är 41 miljoner kronor.</p>
<p>Svar A.</p>`,

  37: `<p>Kvinnor plus män 2004: C 1 208, B 897, N 643 och D 580 miljoner DDD är de fyra största. Summan är ${tex('1\\,208 + 897 + 643 + 580 = 3\\,328')}.</p>
<p>Svar C.</p>`,

  38: `<p>Livsmedel: cirka 740 000 riksdaler 1789 och 550 000 år 1790, en minskning med 190 000. Textilråvaror: cirka 140 000 år 1789 och 100 000 år 1790, en minskning med 40 000.</p>
<p>Svar D.</p>`,

  39: `<p>1788 var den totala importen cirka 1 250 000 riksdaler och livsmedel cirka 560 000, mindre än hälften. 1756 och 1769 var livsmedel mer än hälften (cirka 820 000 av 1 330 000 respektive 860 000 av 1 500 000), och 1778 var totalen under 1,2 miljoner.</p>
<p>Svar D.</p>`,

  40: `<p>1755 var importvärdet cirka 1 040 000 riksdaler och 1795 cirka 880 000. ${tex('\\frac{880}{1\\,040} \\approx 0{,}85')}, en minskning med cirka 15 procent.</p>
<p>Svar A.</p>`,
};
