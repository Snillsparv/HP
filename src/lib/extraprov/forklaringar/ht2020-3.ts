// Textförklaringar till högskoleprovet 25 oktober 2020, provpass 3 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Sätt in ${tex('y = 12x')}: ${tex('5x + 66 = \\frac{12x}{2} = 6x')}.</p>
<p>Då är ${tex('x = 66')}.</p>
<p>Svar C.</p>`,

  2: `<p>En maskin producerar ${tex('150 / 6 = 25')} enheter per minut, så 10 maskiner producerar 250 per minut.</p>
<p>På 4 minuter: ${tex('4 \\cdot 250 = 1\\,000')} enheter.</p>
<p>Svar B.</p>`,

  3: `<p>Vinkeln 3<i>x</i> och vinkeln som ligger till höger om den sneda linjen ovanför L<sub>1</sub> bildar tillsammans en rak vinkel, 180°. Den högra vinkeln vid L<sub>1</sub> är likbelägen med 6<i>y</i> vid L<sub>2</sub>, eftersom linjerna är parallella.</p>
<p>Alltså ${tex('3x + 6y = 180^\\circ')}, och halvering ger ${tex('1{,}5x + 3y = 90^\\circ')}.</p>
<p>Svar B.</p>`,

  4: `<p>${tex('f\\left(\\frac{1}{3}\\right) = 3 \\cdot \\frac{1}{3} + 1 = 1 + 1 = 2')}.</p>
<p>Bland alternativen är ${tex('\\frac{6}{3} = 2')}.</p>
<p>Svar D.</p>`,

  5: `<p>Bråken har samma nämnare: ${tex('\\frac{a - b}{a} + \\frac{b}{a} = \\frac{a - b + b}{a} = \\frac{a}{a} = 1')}.</p>
<p>Svar B.</p>`,

  6: `<p>Kvadratens area är ${tex('6 \\cdot 6 = 36')} cm<sup>2</sup>.</p>
<p>Triangelns area är ${tex('\\frac{4 \\cdot h}{2} = 2h = 36')}, så ${tex('h = 18')} cm.</p>
<p>Svar D.</p>`,

  7: `<p>Linjen skär <i>y</i>-axeln i 3, så ${tex('m = 3')}. Den går ner 3 steg för varje steg åt höger (från (0, 3) till (1, 0)), så lutningen är −3.</p>
<p>${tex('y = -3x + 3')}.</p>
<p>Svar C.</p>`,

  8: `<p>${tex('\\frac{x + 6x}{2} = \\frac{7x}{2} = y')} ger ${tex('7x = 2y')} och ${tex('x = \\frac{2y}{7}')}.</p>
<p>Svar B.</p>`,

  9: `<p>${tex('\\frac{3x}{30} = \\frac{x}{10}')} och ${tex('\\frac{4x}{40} = \\frac{x}{10}')}, så summan är ${tex('\\frac{2x}{10} = \\frac{x}{5}')}.</p>
<p>En femtedel är 20 procent.</p>
<p>Svar C.</p>`,

  10: `<p>Använd konjugatregeln bakifrån: ${tex('(2^2 + 1)(2^2 - 1) = 2^4 - 1')}.</p>
<p>Sedan ${tex('(2^4 + 1)(2^4 - 1) = 2^8 - 1')}.</p>
<p>Svar A.</p>`,

  11: `<p>${tex('(x - 7)^2 = 144')} ger ${tex('x - 7 = 12')} eller ${tex('x - 7 = -12')}, alltså ${tex('x = 19')} eller ${tex('x = -5')}.</p>
<p>Eftersom ${tex('x < 0')} är ${tex('x = -5')}.</p>
<p>Svar D.</p>`,

  12: `<p>${tex('1^{-1} = \\frac{1}{1} = 1')}, ${tex('1^0 = 1')} och ${tex('1^1 = 1')}.</p>
<p>Summan är 3.</p>
<p>Svar D.</p>`,

  // KVA
  13: `<p>${tex('\\frac{3}{7} + \\frac{5}{8} = \\frac{24}{56} + \\frac{35}{56} = \\frac{59}{56}')}, vilket är större än 1.</p>
<p>(Snabbare: ${tex('\\frac{5}{8}')} är mer än en halv och ${tex('\\frac{3}{7}')} är nästan en halv, men tillsammans mer än 1 eftersom ${tex('\\frac{5}{8} - \\frac{1}{2} = \\frac{1}{8}')} är större än ${tex('\\frac{1}{2} - \\frac{3}{7} = \\frac{1}{14}')}.)</p>
<p>Svar A.</p>`,

  14: `<p>Tre femmor kan bara fås på ett sätt av ${tex('6^3 = 216')} utfall.</p>
<p>Summan 15 kan fås på flera sätt: 5+5+5 (1 sätt), 6+6+3 (3 sätt) och 6+5+4 (6 sätt), totalt 10 av 216.</p>
<p>Svar B.</p>`,

  15: `<p>D är mittpunkten, så ${tex('ED = DC = 2')} cm, lika med höjden 2 cm. Triangeln ADE är alltså likbent och rätvinklig, så vinkeln vid D i den är 45°. Samma sak gäller triangeln DBC.</p>
<p>${tex('v = 180^\\circ - 45^\\circ - 45^\\circ = 90^\\circ')}.</p>
<p>Svar C.</p>`,

  16: `<p>${tex('-7(x + 3) = 21')} ger ${tex('x + 3 = -3')}, alltså ${tex('x = -6')}, vilket är mindre än 0.</p>
<p>Svar B.</p>`,

  17: `<p>Räkna i kryddmått: 1 matsked = 3 teskedar = 15 kryddmått.</p>
<p>I: ${tex('8 + 15 = 23')} kryddmått. II: ${tex('2 \\cdot 5 + 10 = 20')} kryddmått.</p>
<p>Svar A.</p>`,

  18: `<p>I är medelvärdet av det minsta och det största talet. II är medelvärdet av alla tre.</p>
<p>Om <i>y</i> ligger nära <i>x</i> (till exempel 1, 2, 10) är I = 5,5 och II ≈ 4,3, men om <i>y</i> ligger nära <i>z</i> (1, 9, 10) är I = 5,5 och II ≈ 6,7.</p>
<p>Svar D.</p>`,

  19: `<p>Omkretsen är ${tex('2\\pi r = 25\\pi')}, så ${tex('r = 12{,}5')} cm, vilket är mer än 10 cm.</p>
<p>Svar A.</p>`,

  20: `<p>${tex('27^{\\frac{1}{3}}')} är kubikroten ur 27, alltså 3, eftersom ${tex('3^3 = 27')}.</p>
<p>3 är mindre än 9.</p>
<p>Svar B.</p>`,

  21: `<p>Punkten (<i>a</i>, <i>b</i>) ligger till vänster om <i>y</i>-axeln och under <i>x</i>-axeln, så både <i>a</i> och <i>b</i> är negativa och ${tex('ab > 0')}.</p>
<p>Punkten (<i>c</i>, <i>d</i>) har ${tex('c > 0')} och ${tex('d < 0')}, så ${tex('cd < 0')}.</p>
<p>Svar A.</p>`,

  22: `<p>${tex('\\left(\\frac{x}{4}\\right)^2 = \\frac{x^2}{16}')}. Jämför med ${tex('\\frac{x}{2}')}: de är lika när ${tex('x = 8')}.</p>
<p>För ${tex('x = 1')} är I = 0,5 och II = 1/16, men för ${tex('x = 16')} är I = 8 och II = 16.</p>
<p>Svar D.</p>`,

  // NOG
  23: `<p>(1): Cecilia är äldre än Alvar som är äldre än Benjamin, men Dessi och Elina är okända.</p>
<p>(2): Benjamin är äldre än Dessi som är äldre än Elina, men Alvar och Cecilia är okända.</p>
<p>Tillsammans: Cecilia > Alvar > Benjamin > Dessi > Elina, så Cecilia är äldst.</p>
<p>Svar C.</p>`,

  24: `<p>(1) och (2) ger var för sig bara summor av två andelar.</p>
<p>Tillsammans: ekar + almar = 50 % och ekar + lönnar = 70 %. Summan av alla tre är 100 %, så lönnarna är 50 %, almarna 30 % och ekarna 20 %.</p>
<p>Svar C.</p>`,

  25: `<p>Medianen är det fjärde talet i storleksordning.</p>
<p>(1) säger något om de tre minsta och (2) om de tre största, men inget av dem, inte ens tillsammans, säger något om det mittersta talet.</p>
<p>Svar E.</p>`,

  26: `<p>(1): Lisa har sett 25 och Thea 30, men hur många de sett gemensamt är okänt.</p>
<p>(2): 25 gemensamma, men inte hur många var och en sett.</p>
<p>Tillsammans: sedda av minst en är ${tex('25 + 30 - 25 = 30')}, så ${tex('40 - 30 = 10')} filmer är osedda av båda.</p>
<p>Svar C.</p>`,

  27: `<p>Man är tillbaka vid startpunkten efter varje jämnt antal längder.</p>
<p>(1): Viktor är tillbaka var 72:e sekund och Tomas var 90:e. Första gemensamma tidpunkten är 360 sekunder, då Viktor simmat 10 längder = 250 m. Tillräcklig.</p>
<p>(2): Viktor är 25 % snabbare, så tiderna förhåller sig som 4:5. Viktor gör 5 vändor på samma tid som Tomas gör 4, alltså 10 längder = 250 m. Tillräcklig.</p>
<p>Svar D.</p>`,

  28: `<p>(1): <i>n</i> kan vara 30, 90, 150 och så vidare, <i>m</i> kan vara 60, 120 och så vidare. ${tex('n = 30')} ger ${tex('m > n')}, men ${tex('n = 90')}, ${tex('m = 60')} ger motsatsen.</p>
<p>(2): säger inget om storleksordningen.</p>
<p>Tillsammans: <i>n</i> kan vara 390 eller 1 170, <i>m</i> kan vara 780, så frågan kan fortfarande inte besvaras.</p>
<p>Svar E.</p>`,

  // DTK
  29: `<p>Staplarna sjunker två gånger: 1886 (från ungefär 3 200 till 3 050) och 1897 (från ungefär 5 800 till 5 500).</p>
<p>Svar D.</p>`,

  30: `<p>1892: ungefär 4 000 medlemmar. 1905: ungefär 10 000.</p>
<p>Ökningen är ungefär 6 000, alltså ${tex('\\frac{6\\,000}{4\\,000} = 1{,}5')}, 150 procent.</p>
<p>Svar B.</p>`,

  31: `<p>2012: 155 av 398 njurtransplantationer från levande donator.</p>
<p>${tex('\\frac{155}{398} \\approx 0{,}39')}, närmast 2/5.</p>
<p>Svar B.</p>`,

  32: `<p>Från 2001 till 2009: bukspottkörtel 10 till 20 (+100 %), lever 102 till 146 (+43 %), hjärta 25 till 55 (+120 %) och lungor 20 till 50 (+150 %).</p>
<p>Svar D.</p>`,

  33: `<p>${tex('603 + 594 + 620 + 681 + 671 + 651 = 3\\,820')}.</p>
<p>${tex('3\\,820 / 6 \\approx 637')}.</p>
<p>Svar C.</p>`,

  34: `<p>Levande donatorer (njure + lever): 2014: 157, 2011: 188, 2005: 175, 2004: 151.</p>
<p>Av 2011 och 2005 är det bara 2011 där tarmtransplantationerna ökade (2 mot 1 året innan). 2005 minskade de (1 mot 2).</p>
<p>Svar B.</p>`,

  35: `<p>Befolkningstillväxt över riksgenomsnittet betyder över den vågräta linjen, inkomsttillväxt under riksgenomsnittet betyder till vänster om den lodräta linjen.</p>
<p>Bara två punkter ligger i det övre vänstra området (Stockholm, Göteborg och Halmstad ligger till höger om linjen).</p>
<p>Svar A.</p>`,

  36: `<p>Högst befolkningstillväxt har Stockholm, ungefär 0,0085. Lägst har regionen längst ner, ungefär −0,0185.</p>
<p>${tex('0{,}0085 - (-0{,}0185) = 0{,}0270')}.</p>
<p>Svar C.</p>`,

  37: `<p>Gruppen med lägst tillväxt är den nedre högra ellipsen (med Filipstad, Överkalix, Haparanda, Vilhelmina och Dorotea). Den innehåller ungefär 32 punkter.</p>
<p>${tex('\\frac{32}{72} \\approx 0{,}44')}, ungefär 45 procent.</p>
<p>Svar C.</p>`,

  38: `<p>Jordbruksarbetet är den vita ytan ovanför de skuggade fälten, så det utgör mer än hälften när de skuggade fälten tillsammans ligger under 50 %.</p>
<p>I Gävleborgs län är fälten under 50 % från mitten av mars till årets slut och även i januari, alltså mer än nio månader. I de andra länen ligger fälten över 50 % under flera vintermånader.</p>
<p>Svar C.</p>`,

  39: `<p>På banden ligger höskörden (prickat) runt augusti och första snön (svart) i oktober till december.</p>
<p>Det längsta avståndet finns i Gävleborgs län, där höskörden i Gästrikland slutade i början av september och första snön kom i början av december, ungefär 3 månader. I Norrbotten är avståndet bara ungefär 1,5 månad.</p>
<p>Svar B.</p>`,

  40: `<p>Vårsådden ligger runt mitten av maj. Skogsarbetet (det lodrätt streckade fältet längst ner) är då ungefär 4 % bara i Jämtlands län; i de andra länen är det ungefär 8 till 12 %.</p>
<p>I Jämtlands län når de skuggade fälten tillsammans ungefär 25 % vid vårsådden, så jordbruksarbetet är ungefär 75 %.</p>
<p>Svar D.</p>`,
};
