// Textförklaringar till högskoleprovet 28 mars 2015, provpass 2 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Ett tal är delbart med 3 om siffersumman är det. ${tex('8 + 1 + 9 = 18')} är delbart med 3, medan 13, 91 (siffersumma 10) och 455 (siffersumma 14) inte är det.</p>
<p>Svar D.</p>`,

  2: `<p>Bredden är ${tex('x')} och längden ${tex('3x')}, så arean är ${tex('3x \\cdot x = 3x^2')}. Att arean är mindre än 10 skrivs ${tex('3x^2 < 10')}.</p>
<p>Svar A.</p>`,

  3: `<p>${tex('\\sqrt{84} \\approx 9{,}2')} (eftersom ${tex('9^2 = 81')}) och ${tex('\\sqrt{10} \\approx 3{,}2')}. Skillnaden är ungefär 6.</p>
<p>Svar B.</p>`,

  4: `<p>Förhållandet 4:1 ger 40 vita och 10 svarta kulor. För att de 40 vita ska vara en fjärdedel av de svarta behövs 160 svarta, alltså ${tex('160 - 10 = 150')} till.</p>
<p>Svar B.</p>`,

  5: `<p>Konjugatregeln: ${tex('(x + 1)(x - 1) = x^2 - 1 = 121 - 1 = 120')}.</p>
<p>Svar C.</p>`,

  6: `<p>${tex('4^x = 4^{-x}')} kräver att ${tex('x = -x')}, alltså ${tex('x = 0')}. Kontroll: ${tex('4^0 - 4^0 = 1 - 1 = 0')}.</p>
<p>Svar D.</p>`,

  7: `<p>${tex('x^2 = k')} har två lösningar om ${tex('k > 0')}, ingen om ${tex('k < 0')} och exakt en (${tex('x = 0')}) om ${tex('k = 0')}. Så ${tex('4a - 8 = 0')}, vilket ger ${tex('a = 2')}.</p>
<p>Svar B.</p>`,

  8: `<p>Vertikalvinklar är lika stora: ${tex('a = c')} och ${tex('b = d')}. Vinklarna ${tex('a')} och ${tex('b')} bildar tillsammans en rak vinkel: ${tex('a + b = 180°')}. Då är ${tex('2a + b - c = 2a + b - a = a + b = 180°')}. De andra alternativen gäller bara om ${tex('a = 90°')}.</p>
<p>Svar A.</p>`,

  9: `<p>Medianen är 8, så det mellersta talet är 8. Med det minsta talet ${tex('m')} är det största ${tex('m + 10')}. Medelvärdet ger ${tex('m + 8 + m + 10 = 24')}, alltså ${tex('m = 3')} och det största talet är 13.</p>
<p>Svar B.</p>`,

  10: `<p>Kvartscirkeln har arean ${tex('\\frac{\\pi \\cdot 2^2}{4} = \\pi')} cm² och den rätvinkliga triangeln ${tex('\\frac{2 \\cdot 2}{2} = 2')} cm². Segmentet är skillnaden, ${tex('(\\pi - 2)')} cm².</p>
<p>Svar D.</p>`,

  11: `<p>0,25 % är ${tex('\\frac{0{,}25}{100} = \\frac{1}{400}')}. ${tex('\\frac{16}{400} = \\frac{4}{100}')}.</p>
<p>Svar C.</p>`,

  12: `<p>${tex('f(0) = C \\cdot a^0 = C = 4')}. Sedan ${tex('f(3) = 4a^3 = 500')} ger ${tex('a^3 = 125')}, så ${tex('a = 5')}.</p>
<p>Svar C.</p>`,

  // KVA
  13: `<p>0,99 upphöjt till något positivt är mindre än 1, medan 1,1 upphöjt till något positivt är större än 1. II är större.</p>
<p>Svar B.</p>`,

  14: `<p>Subtraktion av ekvationerna ger ${tex('x - w = w - x')}, alltså ${tex('x = w')}. Insatt: ${tex('y + z = 0')}, så ${tex('y = -z')}. Vilket av dem som är störst beror på tecknet, som inte är känt.</p>
<p>Svar D.</p>`,

  15: `<p>Trianglarna AED och EBC har samma höjd som rektangeln, och baserna AE och EB är tillsammans AB. Deras sammanlagda area är därför halva rektangelns area. Triangeln ECD har basen CD = AB och samma höjd, alltså också halva rektangeln. Lika.</p>
<p>Svar C.</p>`,

  16: `<p>${tex('(x^3)^2 = x^6')}. För ${tex('x > 1')} växer potenserna med exponenten, så ${tex('x^6 > x^5')}.</p>
<p>Svar A.</p>`,

  17: `<p>Stora men inte röda: ${tex('30 - 15 = 15')}. Röda men inte stora: ${tex('30 - 15 = 15')}. Lika.</p>
<p>Svar C.</p>`,

  18: `<p>${tex('0{,}13 \\cdot 55 = 7{,}15')} och ${tex('0{,}14 \\cdot 50 = 7')}. I är större.</p>
<p>Svar A.</p>`,

  19: `<p>Basen AB är 4 cm och höjden ${tex('x')}: ${tex('\\frac{4x}{2} = 4')} ger ${tex('x = 2')}, vilket är större än 1.</p>
<p>Svar A.</p>`,

  20: `<p>Medelvärdet är ${tex('\\frac{x + 3x + x/3}{3} = \\frac{13x}{9}')}, som är större än ${tex('x')} när ${tex('x > 0')}.</p>
<p>Svar B.</p>`,

  21: `<p>${tex('\\left(\\frac{1}{7}\\right)^{-2} = 7^2 = 49')}. Lika.</p>
<p>Svar C.</p>`,

  22: `<p>Q är (0, ${tex('m')}) med avståndet ${tex('|m|')} till origo. P fås av ${tex('0 = \\frac{3}{4}x + m')}, alltså ${tex('x = -\\frac{4m}{3}')}, med avståndet ${tex('\\frac{4|m|}{3}')}. I är större.</p>
<p>Svar A.</p>`,

  // NOG
  23: `<p>(1): morötterna står i fåra 3, och sallad och lök står intill varandra, men det finns flera platser. (2): salladen står i fåra 1 och ärtor och rädisor intill varandra, men löken kan stå i 2, 3, 4 eller 5. Tillsammans: salladen i 1, löken intill i 2, morötterna i 3 och ärtor och rädisor i 4 och 5.</p>
<p>Svar C.</p>`,

  24: `<p>(1): med ${tex('n')} jordgubbar är ${tex('n - \\frac{n}{2} - \\frac{1}{2} = 7')}, alltså ${tex('n = 15')}. (2): 6 jordgubbar per 30 sekunder i 75 sekunder ger ${tex('6 \\cdot 2{,}5 = 15')}. Var för sig räcker.</p>
<p>Svar D.</p>`,

  25: `<p>(1) ger sträckan: ${tex('30 \\cdot \\frac{14}{60} = 7')} km. (2) ger tiden: 35 minuter. Ingen räcker ensam, men tillsammans blir medelhastigheten ${tex('\\frac{7}{35/60} = 12')} km/h.</p>
<p>Svar C.</p>`,

  26: `<p>Den minsta dörren är blå eller grön. (1): den största är vit eller grön. (2): den mellanstora är vit eller blå. Även med båda finns två möjligheter: blå, vit, grön eller grön, blå, vit.</p>
<p>Svar E.</p>`,

  27: `<p>(1): ${tex('x')} är en multipel av 10, men 10 är inte delbart med 15 medan 30 är det. Räcker inte. (2): om ${tex('x^2')} är delbart med 30 innehåller ${tex('x^2')} primfaktorerna 2, 3 och 5, och då gör ${tex('x')} det också. Alltså är ${tex('x')} delbart med 15. Endast (2) räcker.</p>
<p>Svar B.</p>`,

  28: `<p>(1): 12 pojkar och 12 flickor. 6 pojkar har moped, så 10 elever har moped och 4 av dem är flickor. Räcker. (2): med ${tex('p')} pojkar har ${tex('p/2')} inte moped, ${tex('p/2 + 2')} flickor saknar moped och ${tex('p/2 - 2')} flickor har moped. Flickorna är då ${tex('p')} stycken, så ${tex('p = 12')} och 4 flickor har moped. Räcker också.</p>
<p>Svar D.</p>`,

  // DTK
  29: `<p>Pilen från wellpappretur går till liner och fluting för wellpapp, som sträcker sig från cirka 1 200 till 1 700 tusen ton, alltså cirka 500 000 ton.</p>
<p>Svar B.</p>`,

  30: `<p>Av 38,2 miljoner kubikmeter sågtimmer blev 11,2 flis. ${tex('\\frac{11{,}2}{38{,}2} \\approx 0{,}29')}, alltså cirka 30 procent.</p>
<p>Svar C.</p>`,

  31: `<p>Mjukpapper finns på två ställen i den högra stapeln: cirka 120 000 ton (930 till 1 050) och cirka 130 000 ton (1 750 till 1 880), tillsammans cirka 250 000 ton.</p>
<p>Svar A.</p>`,

  32: `<p>Traktorkort i åldrarna 25 år och äldre: ${tex('1\\,795 + 726 + 606 + 914 = 4\\,041')}.</p>
<p>Svar C.</p>`,

  33: `<p>B var vanligast bland 18-åringar, 19-åringar, 20–24-åringar och 25–47-åringar. Bland de yngsta var A1 vanligast, och från 48 år och uppåt var A B vanligast. Alltså 4 åldersgrupper.</p>
<p>Svar C.</p>`,

  34: `<p>${tex('\\frac{2\\,319\\,403}{5\\,781\\,911} \\approx 0{,}40')}, alltså 40 procent.</p>
<p>Svar B.</p>`,

  35: `<p>Skillnaden var störst 2010: cirka 3 250 ekonomstudenter mot cirka 500 på bild- och formprogram, alltså cirka 2 700 fler.</p>
<p>Svar C.</p>`,

  36: `<p>2010 var både ekonomutbildning (cirka 3 250) och läkarprogram (cirka 3 200) som störst, och ospecificerat låg kvar på cirka 2 000. Summan blir cirka 11 000, mer än 2002 (cirka 9 500) då läkarprogrammet bara hade cirka 750.</p>
<p>Svar D.</p>`,

  37: `<p>2007: ekonomi cirka 2 850, läkarprogram cirka 2 300, ospecificerat cirka 2 000 och de fem övriga cirka 400 till 550 var, totalt cirka 9 600. Det ger cirka 30, 24 och 21 procent samt fem ungefär lika små sektorer, vilket är diagram A.</p>
<p>Svar A.</p>`,

  38: `<p>1835 dödades flest: cirka 260 lodjur, 140 björnar, 590 vargar och 60 järvar, tillsammans cirka 1 050.</p>
<p>Svar C.</p>`,

  39: `<p>1895 dödades cirka 85 vargar mot cirka 35 lodjur, och cirka 110 järvar mot cirka 25 björnar. 1855 dödades fler björnar än järvar, och 1870 och 1880 fler lodjur än vargar.</p>
<p>Svar D.</p>`,

  40: `<p>1830 till 1850: cirka ${tex('490 + 590 + 445 + 300 + 215 = 2\\,040')} vargar på fem redovisade år, i genomsnitt cirka 400.</p>
<p>Svar C.</p>`,
};
