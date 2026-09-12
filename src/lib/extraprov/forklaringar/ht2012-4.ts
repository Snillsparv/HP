// Textförklaringar till högskoleprovet 27 oktober 2012, provpass 4 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  // XYZ
  1: `<p>Om <i>n</i> är udda är ${tex('n + 3')} jämnt, och produkten ${tex('n(n + 3)')} blir jämn. I B är ${tex('2n')} jämnt men plus 3 ger udda, i C är ${tex('3n')} udda plus 2 ger udda, och i D är ${tex('n^2')} udda plus 2 ger udda.</p>
<p>Svar A.</p>`,

  2: `<p>Varje nämnare förkortas mot nästa täljare: ${tex('\\dfrac{1}{2} \\cdot \\dfrac{2}{3} \\cdots \\dfrac{9}{10} = \\dfrac{1}{10}')}. Multiplicerat med ${tex('\\dfrac{10}{1}')} blir produkten 1.</p>
<p>Svar A.</p>`,

  3: `<p>Medianen av tio värden är medelvärdet av det femte och sjätte värdet i storleksordning. Typvärdet 100 måste förekomma bland värdena. Om det femte värdet vore under 100 och det sjätte över 100 skulle 100 inte kunna finnas med alls, så femte och sjätte värdet är båda 100. Då är minst sex värden 100 eller högre, alltså mer än hälften.</p>
<p>Svar C.</p>`,

  4: `<p>${tex('(3x)^2 = 9x^2')}, så ${tex('3x^2 + 9x^2 = 12x^2')}.</p>
<p>Svar C.</p>`,

  5: `<p>Linjerna skär <i>y</i>-axeln i ${tex('y = 2')} respektive ${tex('y = -5')}. Avståndet är ${tex('2 - (-5) = 7')} längdenheter.</p>
<p>Svar D.</p>`,

  6: `<p>${tex('\\dfrac{1}{y} > -\\dfrac{1}{y}')} kräver att ${tex('y > 0')}. För positiva <i>y</i> är ${tex('y > \\dfrac{1}{y}')} detsamma som ${tex('y^2 > 1')}, alltså ${tex('y > 1')}.</p>
<p>Svar D.</p>`,

  7: `<p>Vart och ett av de fem största talen är 5 större än motsvarande tal bland de fem minsta. Summan blir ${tex('420 + 5 \\cdot 5 = 445')}.</p>
<p>Svar D.</p>`,

  8: `<p>I den stora triangeln är ${tex('30° + 2x + 2y = 180°')}, så ${tex('x + y = 75°')}. I den lilla triangeln är ${tex('z = 180° - x - y = 105°')}.</p>
<p>Svar A.</p>`,

  9: `<p>Punkterna (6, 3) och (6, 7) ligger på samma lodräta linje och ger en sida av längd 4. Höjden mot den sidan är avståndet från ${tex('x = 1')} till ${tex('x = 6')}, alltså 5. Arean är ${tex('\\dfrac{4 \\cdot 5}{2} = 10')}.</p>
<p>Svar A.</p>`,

  10: `<p>${tex('x = x^{-2} = \\dfrac{1}{x^2}')} ger ${tex('x^3 = 1')}, så ${tex('x = 1')}.</p>
<p>Svar B.</p>`,

  11: `<p>${tex('\\dfrac{8}{20} = 0{,}4')} och ${tex('\\sqrt{0{,}4} \\approx 0{,}63')}. Alternativen: A ${tex('0{,}4^2 = 0{,}16')}, B ${tex('0{,}4')}, C ${tex('0{,}6')}, D ${tex('\\sqrt{\\sqrt{0{,}4}} \\approx 0{,}8')}. Närmast är 0,6.</p>
<p>Svar C.</p>`,

  12: `<p>Hastigheten är ${tex('\\dfrac{x}{y}')} km per minut. Tiden för <i>z</i> km är sträckan delad med hastigheten: ${tex('\\dfrac{z}{x/y} = \\dfrac{yz}{x}')} minuter.</p>
<p>Svar C.</p>`,

  // KVA
  13: `<p>Positiva heltal med ${tex('xy = 42')} och ${tex('x^2 + y^2 = 85')} är 6 och 7, eftersom ${tex('36 + 49 = 85')}. Men <i>x</i> kan vara 6 och <i>y</i> 7 eller tvärtom, så det går inte att avgöra vilken som är störst.</p>
<p>Svar D.</p>`,

  14: `<p>Triangeln är likbent med toppvinkeln 60°, så basvinklarna är ${tex('(180° - 60°)/2 = 60°')} vardera. Triangeln är liksidig med sidan 9 cm och omkretsen ${tex('3 \\cdot 9 = 27')} cm, vilket är mindre än 30 cm.</p>
<p>Svar B.</p>`,

  15: `<p>Eftersom ${tex('x \\neq 0')} kan båda leden divideras med <i>x</i>: ${tex('\\dfrac{1}{13} = \\dfrac{1}{y + 2}')}, så ${tex('y + 2 = 13')} och ${tex('y = 11')}, mindre än 13.</p>
<p>Svar B.</p>`,

  16: `<p>Med ${tex('x = 2y')} blir kvantitet I ${tex('2y - y = y')}, som är positivt. Kvantitet II blir ${tex('4y - 4y = 0')}. Kvantitet I är större.</p>
<p>Svar A.</p>`,

  17: `<p>Medelpunktsvinklarna i en cirkel har alltid summan 360°. Medelvärdet av sju sektorers vinklar är ${tex('360°/7 \\approx 51{,}4°')}, vilket är mer än 50°.</p>
<p>Svar A.</p>`,

  18: `<p>L<sub>1</sub> har lutningen ${tex('\\dfrac{3 - (-3)}{5 - (-3)} = \\dfrac{3}{4}')} och skär <i>y</i>-axeln i ${tex('y_1 = -3 + 3 \\cdot \\dfrac{3}{4} = -0{,}75')}. Om L<sub>2</sub> vet vi bara att den korsar L<sub>1</sub> mellan A och B; den kan ha vilken lutning som helst och därmed skära <i>y</i>-axeln var som helst.</p>
<p>Svar D.</p>`,

  19: `<p>Kvantitet I: ${tex('\\dfrac{k/2}{3} \\cdot 6 = \\dfrac{k}{6} \\cdot 6 = k')}. Kvantitet II: ${tex('\\dfrac{6k}{6} = k')}. Kvantiteterna är lika.</p>
<p>Svar C.</p>`,

  20: `<p><i>x</i> är triangelns yttervinkel vid A. En yttervinkel är lika med summan av de två motstående inre vinklarna, så ${tex('x = y + \\angle B')}. Eftersom vinkeln vid B är positiv är ${tex('x > y')}.</p>
<p>Svar A.</p>`,

  21: `<p>Enligt potensreglerna är ${tex('\\dfrac{3^x}{3^{x-1}} = 3^{x - (x - 1)} = 3^1 = 3')} och ${tex('\\dfrac{3^{x-1}}{3^{x-2}} = 3^1 = 3')}. Kvantiteterna är lika.</p>
<p>Svar C.</p>`,

  22: `<p>Var och en av de sju personerna skakar hand med sex andra, men varje handskakning räknas då två gånger: ${tex('\\dfrac{7 \\cdot 6}{2} = 21')}. Kvantiteterna är lika.</p>
<p>Svar C.</p>`,

  // NOG
  23: `<p>(1) En sjundedel av 126 är 18 tomma platser efter att fyra bilder tagits bort, så albumet innehåller ${tex('126 - 18 + 4 = 112')} bilder. Tillräckligt. (2) En fjortondel av 126 är 9 tomma platser efter att fem bilder satts in, alltså ${tex('126 - 9 - 5 = 112')} bilder. Tillräckligt.</p>
<p>Svar D.</p>`,

  24: `<p>(1) ger bara ${tex('V = F + 25')}. (2) ger ${tex('G = V/3 = F/2')}, alltså ${tex('F = 2V/3')}, men inga belopp. Tillsammans: ${tex('V = \\dfrac{2V}{3} + 25')}, så ${tex('V/3 = 25')} och Viktor får 75 kronor.</p>
<p>Svar C.</p>`,

  25: `<p>(1) Vi vet inte hur mycket två länkar väger, så andelen 30 procent kan inte omräknas. Otillräckligt. (2) Det nya halsbandet väger ${tex('275 - 50 = 225')} gram och kedjan utgör ${tex('\\dfrac{8}{9} \\cdot 225 = 200')} gram. Ädelstenen väger ${tex('275 - 200 = 75')} gram. Tillräckligt.</p>
<p>Svar B.</p>`,

  26: `<p>(1) Om A:C = 25:2 och B:C = 5:1 = 10:2 så är A:B = 25:10 = 5:2. Tillräckligt. (2) A = 50 säger ingenting om B. Otillräckligt.</p>
<p>Svar A.</p>`,

  27: `<p>(1) Att hon med 20 procent högre hastighet hinner 1 800 m i stället för 1 500 m på samma tid gäller oavsett vilken hastigheten är; ingen tid anges. (2) ger bara förhållandet mellan två deltider. Inte heller tillsammans får man reda på hur lång tid promenaden tar, så medelhastigheten kan inte bestämmas.</p>
<p>Svar E.</p>`,

  28: `<p>(1) Efter 114 trappsteg återstår två trappor med okänt antal steg. (2) ger att den sista trappan har 38 steg. Även tillsammans är antalet steg i den näst sista trappan, mellan tredje och sista avsatsen, okänt, eftersom inget säger att trapporna är lika långa.</p>
<p>Svar E.</p>`,

  // DTK
  29: `<p>Ejdern minskade fem år i rad från 1994 till 1999 (cirka 2 020 till 1 050 par) och svärtan från 1992 till 1997 (cirka 205 till 157 par). Gravand, gräsand, småskrake och tobisgrissla bröt sina nedgångar tidigare. Två arter.</p>
<p>Svar B.</p>`,

  30: `<p>Småskrake 1990–1994: cirka ${tex('39 + 64 + 70 + 61 + 58 = 292')} par. 2001–2005: cirka ${tex('23 + 24 + 21 + 30 + 41 = 139')} par. Skillnaden är cirka 153, närmast 155 par.</p>
<p>Svar C.</p>`,

  31: `<p>Ejdern minskade från cirka 1 790 till 1 510 par, alltså med ungefär 280 par. Gravanden minskade med cirka 17 par, småskraken med cirka 20 och svärtan med cirka 5.</p>
<p>Svar A.</p>`,

  32: `<p>Gräsanden ökade från cirka 6 par 1995 till cirka 24 par 1996. Ökningen är 18 par, det vill säga ${tex('18/6 = 3')}, alltså 300 procent.</p>
<p>Svar C.</p>`,

  33: `<p>Andelen "varken ökat eller minskat" för bokläsning 2003: män 73 procent, 50–59-åringar 72 procent, 80–85-åringar 47 procent och medellåg utbildning 69 procent.</p>
<p>Svar A.</p>`,

  34: `<p>Bokköp 2003, ökat mycket plus ökat något: kvinnor ${tex('4 + 18 = 22')} procent, män ${tex('2 + 11 = 13')} procent. Skillnaden är 9 procentenheter.</p>
<p>Svar C.</p>`,

  35: `<p>För 40–49-åringar 2002 (siffrorna inom parentes) hade bokläsningen ökat mycket för 3 procent och ökat något för 19 procent, sammanlagt 22 procent. ${tex('0{,}22 \\cdot 1\\,200\\,000 = 264\\,000')}.</p>
<p>Svar D.</p>`,

  36: `<p>Räkna tornsymbolerna (fyrkanter, ringar och fyllda ringar) innanför den streckade strandlinjen från 1624; det blir ungefär 18 torn. Väster om en nord-sydlig linje genom Bykyrkan ligger tornen längs den västra muren, bland andra Inre Norretorn, Lejontornet, Draktornet, Gråmunketornet, Pulvertornet och Bocktornet, ungefär 8 stycken. ${tex('8/18 \\approx 0{,}45')}, alltså cirka 45 procent.</p>
<p>Svar B.</p>`,

  37: `<p>Med skalstocken (200 meter) är avståndet fågelvägen från Vågen vid Järntorget till Draktornet ungefär 500 meter. Det motsvarar ${tex('500/0{,}6 \\approx 830')} alnar.</p>
<p>Svar C.</p>`,

  38: `<p>Mät från Yttre Norretorn med skalstocken. Slottet ligger bara cirka 200 meter bort och Draktornet cirka 250 meter. Nya runda tornet och Pulvertornet ligger cirka 350 meter bort. Själagården och Birger Jarls torn ligger båda ungefär 440 meter från Yttre Norretorn.</p>
<p>Svar C.</p>`,

  39: `<p>Från 1996 till 2003: Kalmar cirka 308 till 403 (+31 procent), Nybro 100 till 163 (+63 procent), Oskarshamn 97 till 125 (+29 procent) och Vimmerby 55 till 88 (+60 procent) ökade alla med mer än 10 procent. Västervik ökade bara från 253 till 257, och Hultsfred minskade. Fyra kommuner.</p>
<p>Svar D.</p>`,

  40: `<p>2003: Borgholm cirka 87, Emmaboda 81 och Mörbylånga 73, tillsammans 241. Övriga tre: Mönsterås 62, Torsås 31 och Högsby 29, så totalt cirka 363. ${tex('241/363 \\approx 0{,}66')}, alltså ungefär två av tre.</p>
<p>Svar B.</p>`,
};
