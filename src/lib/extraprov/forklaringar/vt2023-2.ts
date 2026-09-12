// Textförklaringar till högskoleprovet 25 mars 2023, provpass 2 (kvantitativt).
import { tex } from '../types.js';

export const forklaringar: Record<number, string> = {
  1: `<p>Förenkla parentesen först: ${tex('3x - 2x = x')}. Multiplicera sedan in: ${tex('x(y - z) = xy - xz')}.</p>
<p>Svar C.</p>`,

  2: `<p>Vinkeln 119° är en yttervinkel, så triangelns vinkel i det hörnet är ${tex('180° - 119° = 61°')}.</p>
<p>Vinkelsumman ger ${tex('v = 180° - 70° - 61° = 49°')}. Svar B.</p>`,

  3: `<p>Multiplicera båda leden med 7: ${tex('4x = \\frac{7}{14} = \\frac{1}{2}')}.</p>
<p>Dela med 4: ${tex('x = \\frac{1}{8}')}. Svar A.</p>`,

  4: `<p>${tex('f(4) - f(2) = (4k + m) - (2k + m) = 2k')}. Konstanten <i>m</i> försvinner.</p>
<p>${tex('2k = 6')} ger ${tex('k = 3')}. Svar C.</p>`,

  5: `<p>Låda 8 får kulor varje gång <i>k</i> är en delare till 8, alltså för ${tex('k = 1, 2, 4')} och ${tex('8')}.</p>
<p>Sammanlagt ${tex('1 + 2 + 4 + 8 = 15')} kulor. Svar D.</p>`,

  6: `<p>Medelvärdet av <i>y</i> och 0 är ${tex('\\frac{y}{2} = 5')}, så ${tex('y = 10')}.</p>
<p>Då är ${tex('x = 10 - y = 0')}. Svar B.</p>`,

  7: `<p>På 3 gula går 7 röda, så av varje 10 bollar är 3 gula. Andelen gula är ${tex('\\frac{3}{10}')}.</p>
<p>${tex('\\frac{3}{10} \\cdot 21\\,000 = 6\\,300')}. Svar A.</p>`,

  8: `<p>${tex('\\sqrt{22}')} ligger mellan ${tex('\\sqrt{16} = 4')} och ${tex('\\sqrt{25} = 5')}, närmare 5 (ungefär 4,7).</p>
<p>${tex('2 \\cdot 4{,}7 \\approx 9{,}4')}, alltså närmast 9. Man kan också skriva ${tex('2\\sqrt{22} = \\sqrt{88}')}, som ligger mellan ${tex('\\sqrt{81} = 9')} och ${tex('\\sqrt{100} = 10')}. Svar B.</p>`,

  9: `<p>Kvadreringsregeln: ${tex('(x + 2)^2 = x^2 + 4x + 4')}.</p>
<p>Dra bort ${tex('x^2')}: differensen är ${tex('4x + 4')}. Svar D.</p>`,

  10: `<p>Areorna förhåller sig som 1:4, så K<sub>2</sub> har arean ${tex('4 \\cdot 9 = 36')} cm<sup>2</sup>.</p>
<p>Sidlängden är ${tex('\\sqrt{36} = 6')} cm. Svar B.</p>`,

  11: `<p>Lös ut <i>y</i>: ${tex('2y = -x - 1')} ger ${tex('y = -\\frac{1}{2}x - \\frac{1}{2}')}. Lutningen är ${tex('-\\frac{1}{2}')}: linjen sjunker en ruta för varje två rutor åt höger.</p>
<p>A och B lutar uppåt. C lutar nedåt men brant (ungefär två rutor ner per ruta åt höger). D sjunker en ruta per två rutor åt höger och är alltså parallell. Svar D.</p>`,

  12: `<p>Skriv bråken med den gemensamma nämnaren ${tex('xyz')}: ${tex('\\frac{1}{x} = \\frac{yz}{xyz}')}, ${tex('\\frac{1}{y} = \\frac{xz}{xyz}')} och ${tex('\\frac{1}{z} = \\frac{xy}{xyz}')}.</p>
<p>Summan blir ${tex('\\frac{xy + xz + yz}{xyz}')}. Svar D.</p>`,

  13: `<p>Vi vet bara att <i>x</i> är negativt, ingenting om <i>y</i> och <i>z</i>. Med ${tex('x = -1')}, ${tex('y = 0')} och ${tex('z = 0')} är I ${tex('= -1')} och II ${tex('= 1')}, så II är störst.</p>
<p>Med ${tex('x = -1')}, ${tex('y = 10')} och ${tex('z = 0')} är I ${tex('= 99')} och II ${tex('= 1')}, så I är störst. Svar D.</p>`,

  14: `<p>Bil A: ${tex('\\frac{50}{20} = 2{,}5')} liter.</p>
<p>Bil B: ${tex('\\frac{50}{25} = 2')} liter. Svar A.</p>`,

  15: `<p>Rita in punkterna. A och B ligger på linjen ${tex('x = 1')} med avståndet 4 mellan sig. C och D ligger på linjen ${tex('x = -2')}, också med avståndet 4. Fyrhörningen är alltså en parallellogram med två lodräta sidor av längden 4.</p>
<p>Avståndet mellan de lodräta sidorna är 3, så arean är ${tex('4 \\cdot 3 = 12')} areaenheter. Det är mindre än 20. Svar B.</p>`,

  16: `<p>I: ${tex('\\frac{4}{12} + \\frac{1}{12} = \\frac{5}{12}')}.</p>
<p>II: ${tex('\\frac{3}{12} + \\frac{2}{12} = \\frac{5}{12}')}. Svar C.</p>`,

  17: `<p>Tre lika termer: ${tex('\\frac{3}{x} = 15')}.</p>
<p>${tex('3 = 15x')} ger ${tex('x = \\frac{3}{15} = \\frac{1}{5}')}. Svar C.</p>`,

  18: `<p>I en parallellogram är motstående vinklar lika och två vinklar intill varandra har summan 180°. Vinklarna ${tex('11x')} och ${tex('4x')} kan inte vara lika (det skulle ge ${tex('x = 0')}), så de ligger intill varandra.</p>
<p>${tex('11x + 4x = 180°')} ger ${tex('x = 12°')}, vilket är mindre än 15°. Svar B.</p>`,

  19: `<p>I: ${tex('\\frac{10^3}{10^2} = 10^{3 - 2} = 10')}.</p>
<p>II: ${tex('\\frac{10^{-2}}{10^{-3}} = 10^{-2 - (-3)} = 10^1 = 10')}. Svar C.</p>`,

  20: `<p>${tex('\\frac{x + y + z}{3} = x')} ger ${tex('x + y + z = 3x')}.</p>
<p>Dra bort <i>x</i> från båda leden: ${tex('y + z = 2x')}. Svar C.</p>`,

  21: `<p>Kalla BC för <i>a</i>, så att AB ${tex('= 2a')}. Triangelolikheten säger att AC måste vara längre än ${tex('2a - a = a')} och kortare än ${tex('2a + a = 3a')}.</p>
<p>AC kan alltså vara både kortare och längre än AB, till exempel ${tex('1{,}5a')} eller ${tex('2{,}5a')}. Svar D.</p>`,

  22: `<p>${tex('a^{-1} = \\frac{1}{a}')}. När <i>a</i> ligger mellan 0 och 1 blir ${tex('\\frac{1}{a}')} större än 1, till exempel ${tex('a = \\frac{1}{2}')} ger ${tex('\\frac{1}{a} = 2')}.</p>
<p>Svar A.</p>`,

  23: `<p>(1): Matematik, kemi, fysik och engelska ligger i den ordningen i följd (eller spegelvänt), med biologiboken i någon ände. Matematikboken kan ha nummer 1, 2, 4 eller 5. Otillräckligt.</p>
<p>(2): Biologi har nummer 5 och engelska ligger mellan fysik och biologi, så engelska är 4 och fysik 3. Matematik och kemi är 1 och 2, men i okänd ordning. Otillräckligt.</p>
<p>Tillsammans: fysik 3, engelska 4, biologi 5, och kemi intill fysik ger kemi 2 och matematik 1. Svar C.</p>`,

  24: `<p>(1): ${tex('x + y = 1')} ger ${tex('x + z = 17')}, men <i>x</i> är okänt. Otillräckligt.</p>
<p>(2): ${tex('(x - 4)(x + z) = 17')} med två okända. Otillräckligt.</p>
<p>Tillsammans: ${tex('y = -4')} och ${tex('x + y = 1')} ger ${tex('x = 5')}. Då är ${tex('5 + z = 17')} och ${tex('z = 12')}. Svar C.</p>`,

  25: `<p>(1): 15 oljemålningar och 30 litografier, alltså ${tex('45 + A')} konstverk där <i>A</i> är antalet akvareller. Att summan är delbar med 5 betyder bara att <i>A</i> är en multipel av 5. Otillräckligt.</p>
<p>(2): Bara en ordning, inga antal. Otillräckligt.</p>
<p>Tillsammans: <i>A</i> ligger mellan 15 och 30 och är en multipel av 5, alltså 20 eller 25. Fortfarande två möjligheter. Svar E.</p>`,

  26: `<p>(1): Hälften är stjärnor och hälften hjärtan, hälften stora och hälften små, men inget antal. Otillräckligt.</p>
<p>(2): 24 stjärnor varav 10 stora och 14 små, men inget om hjärtan. Otillräckligt.</p>
<p>Tillsammans: 24 hjärtan och 48 kakor totalt, varav 24 små. Av de små är 14 stjärnor, så ${tex('24 - 14 = 10')} är små hjärtan. Svar C.</p>`,

  27: `<p>(1): Maria sitter mitt emot Ove, så Nils och Petra sitter mitt emot varandra. Personen till höger om Nils är då Maria eller Ove. Ove har inte glasögon, alltså är det Maria. Tillräckligt.</p>
<p>(2): Ordningen runt bordet är Maria, Petra, Ove och Nils. Varken Petra eller Nils har glasögon, så det är Maria eller Ove, men vi vet inte vem. Otillräckligt. Svar A.</p>`,

  28: `<p>50 liter är 20 % av vad tank B innehöll från början, så B hade ${tex('\\frac{50}{0{,}2} = 250')} liter och har efteråt 300 liter.</p>
<p>(1): Totalt 450 liter, så A hade ${tex('450 - 250 = 200')} liter. Tillräckligt.</p>
<p>(2): Efteråt har A hälften av 300, alltså 150 liter, och hade från början ${tex('150 + 50 = 200')} liter. Tillräckligt. Svar D.</p>`,

  29: `<p>Kurvan visar den totala produktionen 2007, ungefär 360 miljoner ton. Stapeln visar de hälsofarliga kemikalierna, ungefär 218 miljoner ton.</p>
<p>${tex('360 - 218 \\approx 142')}, närmast 145 miljoner ton. Svar A.</p>`,

  30: `<p>450 miljoner ton på 9 år är i genomsnitt 50 miljoner ton per år.</p>
<p>Hälsoskadlig (prickig del överst) är ungefär 50 varje år, till exempel ${tex('203 - 155 = 48')} år 2002 och ${tex('216 - 163 = 53')} år 2004. Giftig är omkring 70 per år, mycket giftig omkring 40 och kroniskt giftig bara några få. Svar A.</p>`,

  31: `<p>2010 var totalproduktionen ungefär 338 miljoner ton. De tre klasserna giftig, mycket giftig och kroniskt giftig sträcker sig från toppen av CMR-delen (ungefär 40) till toppen av den grå delen (ungefär 153), alltså ungefär 113 miljoner ton.</p>
<p>${tex('\\frac{113}{338} \\approx 0{,}33')}, alltså en tredjedel. Svar B.</p>`,

  32: `<p>Sverige totalt hade 7,21 fall per 100 000 invånare 2014. Län med högre värde: Dalarna 17,92, Gotland 17,46, Gävleborg 14,64, Halland 10,94, Jämtland 8,67, Jönköping 12,49, Skåne 8,92, Västerbotten 10,67, Västernorrland 9,87 och Östergötland 10,17.</p>
<p>Det är 10 län. Svar C.</p>`,

  33: `<p>2009 rapporterades totalt 280 fall.</p>
<p>${tex('0{,}7 \\cdot 280 = 196')}. Svar C.</p>`,

  34: `<p>Fall 2011 i Svealand: Dalarna 6, Stockholm 45, Södermanland 5, Uppsala 2, Värmland 0, Västmanland 0 och Örebro 4, tillsammans 62. Totalt i Sverige 177.</p>
<p>${tex('\\frac{62}{177} \\approx 0{,}35')}, alltså 35 procent. Svar A.</p>`,

  35: `<p>Chile ligger ovanför den vågräta axeln (resultatet har förbättrats, ungefär +9) och till höger om den lodräta axeln. Eftersom den vågräta axeln är omvänd betyder höger att betydelsen av socioekonomisk bakgrund har minskat.</p>
<p>Svar D.</p>`,

  36: `<p>Störst försämring har landet längst ner i diagrammet: Finland, ungefär −32 skalsteg.</p>
<p>Finland ligger långt till vänster på den vågräta axeln, vid ungefär 9,5. Vänster betyder att betydelsen av socioekonomisk bakgrund har ökat. Svar A.</p>`,

  37: `<p>Vi söker ett land mellan −1 och −10 på den lodräta axeln och till höger om −5 på den vågräta. Storbritannien ligger vid ungefär −5 i resultat och −8 i betydelse.</p>
<p>Turkiet ligger i höjd med den vågräta axeln (ingen försämring), Sverige till vänster (betydelsen har ökat) och Tyskland vid ungefär −4,7 på den vågräta axeln, alltså inte mer än 5. Svar D.</p>`,

  38: `<p>Kvinnor är den mörka kurvan i invandringsdiagrammet. Som störst var antalet ungefär 60 000 (2015) och som minst ungefär 12 000 (i början av 1960-talet).</p>
<p>${tex('\\frac{60\\,000}{12\\,000} = 5')}. Svar B.</p>`,

  39: `<p>Invandring 2010: män ungefär 52 000 och kvinnor ungefär 46 000, tillsammans ungefär 98 000. Utvandring 2010: män ungefär 27 000 och kvinnor ungefär 22 000, tillsammans ungefär 49 000.</p>
<p>Skillnaden är ungefär 49 000, närmast 50 000. Svar C.</p>`,

  40: `<p>Under 1995–2005 låg både män och kvinnor mellan ungefär 20 000 och 33 000 per år, alltså totalt mellan ungefär 40 000 och 66 000. De flesta åren ligger kring 50 000–60 000.</p>
<p>Genomsnittet är ungefär 55 000. Svar C.</p>`,
};
