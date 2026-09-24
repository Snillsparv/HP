# Din hjärnkarta: design

Framtagen 2026-09-24 med fyra oberoende prototyper, tre domare, syntes och granskning. Det som byggdes och det som väntar står i avsnittet Hjärnkartan i docs/OVERLAMNING.md.


## Sammanfattning

Varje provpass och träningsrunda ritar om **Din hjärnkarta**: ett spindeldiagram med sju delprov, orange högerhalva (XYZ, KVA, NOG, DTK) och blå vänsterhalva (ORD, LÄS, MEK) som provpasskorten. En streckad målring visar hur stor formen kan bli, en gul pil pekar ut delprovet där flest rätt väntar och en enda knapp startar tio uppgifter där. Samma kort ligger på Fler prov, i rättningen, på /trana/fokus och i profilen. Ett tryck på ett delprov öppnar ett ark med uppgiftstyperna.

Ett tal styr allt: **delprovspotten**, hur många fler rätt per provpass du får när delprovet når målet. Spann, avrundning och slumpgränser gör kartan ärlig.

## Principer

1. **En regel, ett tal.** Träna härnäst räknas likadant överallt. Talet som visas är exakt det som rangordnades.
2. **Gult betyder "här finns rätten".** Gult finns bara på pilen, den vinnande etiketten och pillen på kortet. Rött används aldrig. Orange och blått betyder kvantitativt och verbalt, inte bra eller dåligt.
3. **Hela rätt, aldrig poäng om luckan.** "ca +4 rätt att hämta". Plustecknet reserveras för rätt; förändringar skrivs med pil (↑12).
4. **Kartan låtsas aldrig veta mer än den gör.** Spann på alla axlar, procent i femsteg när underlaget är tunt, ingen punkt på osäkra axlar.
5. **Samma ton upp och ned.** En uppgång firas inte mer än en nedgång förklaras bort.
6. **Ett tryck till träning.** Ingen mellansida.

## Diagrammet

**Geometri.** SVG i pixlar (`viewBox` = containerns bredd och höjd). Etiketterna är HTML-knappar ovanpå med fast storlek i px, så de krymper aldrig; kartan krymper i stället. Containern är kortets innerbredd plus 8 px per sida, W = 350 på en 400 px telefon. Axlar medurs från klockan tolv: XYZ, KVA, NOG, DTK, ORD, LÄS, MEK. `a = i · 2π/7`, `x = CX + R·v·sin a`, `y = CY − R·v·cos a`.

**Radien räknas ur etiketterna.** Etiketterna renderas och mäts först. `R = min(Rmax, (W/2 − bredd − 2)/|sin a| − 10)` över axlar med |sin a| ≥ 0,3. Blir R under 62 görs alla etiketter tvåradiga och R räknas om. Rmax är 74 kompakt och 88 fullt; etiketterna står på avståndet R + 10. På 400 px blir den kompakta kartan 350 × 218 px.

**Skala och rutnät.** Linjär, 0 i mitten. Yttersta sjuhörningen `#f8fafc` med kant `#e2e8f0`, ring vid 50 % i `#eef2f6`, ekrar `#e2e8f0` (streckade på osäkra axlar). Inga skalsiffror.

**Formen och färgerna.** Polygonen fylls två gånger, klippt med kilarna −π/7 till π (kvant) och π till 2π − π/7 (verbal). Jämn fyllning utan gradient, så att ytan inte överdriver framsteg där du redan är stark: `#fb923c` och `#60a5fa` med opacitet 0,42, kant `#ea580c`/`#2563eb` 2,3 px, vita ekrar till varje känd punkt och vita hörn (r 3,8) med kant i halvans färg.

**Målring.** Mål per delprov: 85 % för XYZ, KVA, DTK, ORD och LÄS, 75 % för NOG och 83 % för MEK (viktat snitt av en, två och tre luckor med 4, 4 och 2 uppgifter per pass och målen 85, 85 och 75). Kant `#334155` 1,3 px, opacitet 0,6, streck `4 3.5`. Ordet "mål" står vid XYZ-axelns målpunkt i 11 px `#475569` med vit halo (`paint-order: stroke`). Ingen förklaringsrad.

**Etiketter.** En vit pill per axel med kant `#e2e8f0`, 13 px: förkortningen i vikt 800 (`#c2410c` eller `#1d4ed8`), procenten i `#1a1a2e` och `›` i `#94a3b8`. Enradig ("XYZ 58 % ›") när |cos a| ≥ 0,5, annars tvåradig. Vinnarens etikett får `#fef3c7` och kant `#f59e0b`. Procenten visas i femsteg (58 → 60) tills effektivt antal är minst 15. Centrerad när |sin a| < 0,3, annars vänster- eller högerställd; ovanför punkten när cos a > 0,5, under när cos a < −0,5.

**Osäkerhetsspann på alla axlar.** `v ± 1,5·√(v(1−v)/(eff + 4))`, där eff är **effektivt** antal efter grupptak, repetitioner, rundvikt och tidsförfall, aldrig råantalet. Kända axlar får en linje på 6 px i halvans färg med opacitet 0,22 (XYZ med eff 17: 43 till 73 %). Inget stup vid gränsen: spannet är lika brett på 3,9 som på 4,0, bara punkten tillkommer.

**Osäkra axlar** (eff < 4):
- Ingen punkt och aldrig pilen. Bandet ritas 9 px brett i `#cbd5e1` med en streckad mittlinje `#94a3b8`. Saknas svar helt ritas inget band.
- Formen går via centrum vid varje osäker axel eller rad av osäkra axlar. Den färgade ytan påstår alltså inget om axeln.
- En ensam osäker axel mellan två kända får en randig grå kil (centrum, granne, axelns skattning, granne) med streckad kant `#94a3b8` 1,5 px. Ytan läses som okänd, inte som liten.
- Etiketten har streckad kant `#94a3b8` 1,5 px, bakgrund `#f8fafc` och texten "LÄS ?" i `#64748b` (4,8:1 mot vitt).

**Pilen.** Sitter på det vinnande delprovet, så dess längd är exakt den lucka som rangordnades. Linje från `R·v + 6` till `R·mål − 8` med spetsen på målringen: gul `#f59e0b` 5 px på en mörk kontur `#92400e` 8 px, så att den syns även på orange. Punkten blir gul (r 5,5, kant `#92400e`) med en pulsring (r 9, skala 0,6 till 1,9 på 1,6 s). Är `mål − v < 0,10` ritas bara punkten. Ingen pill i kartan; talet står en gång, på kortet.

**Före och efter** (rättningen och kvittot). Formen före passet är en prickad kontur `#475569` 1,8 px med små vita prickar där axeln flyttat sig minst 3 enheter. Ytan som växte fylls `#86efac`, ytan som krympte med grå ränder (SVG-masker). Förklaring: "····· före passet", "växte", "krympte". En siffra visas bara när `|Δ| > 2·seΔ` och minst 4 enheter, med `seΔ = √(v(1−v)·(1/(effFöre + 4) − 1/(effNu + 4)))`; efter ett pass krävs i praktiken 10 till 15 enheter. Den skrivs "↑12" i `#047857` eller "↓12" i `#475569`. Delprov utanför passet tonas ner i fyllning, kant och punkter, aldrig i texten och aldrig på pilens axel.

**Animation.** Formen växer från centrum på 600 ms (easeOutBack); i rättningen glider hörnen från före till nu på 650 ms. `prefers-reduced-motion` ritar slutläget direkt och stoppar pulsen.

**Tillgänglighet.** SVG:n har `role="img"` och en `aria-label` med alla sju värden och "Mest att hämta: MEK." Varje etikett är en `<button>` ("XYZ, 58 procent. Visa uppgiftstyperna.") med träffyta minst 44 × 44 px. All text är minst 11 px och klarar 4,5:1.

## Nästa steg (regel och texter)

**Regeln**, i `src/lib/fokus/hjarnkarta.ts`:
1. **Delprov.** Kandidater är delprov med eff ≥ 4. Varje kandidat får `pott = ANTAL_PER_PASS[dp] · max(0, malDelprov(dp) − styrka)`. Störst vinner. Exemplet: MEK 10 · 0,45 = 4,5, XYZ 12 · 0,27 = 3,2, DTK 2,5, NOG 2,0, KVA 1,4, ORD 0,5.
2. **Hysteres.** Förra vinnaren (regeln på händelserna före senaste pass eller runda) behålls tills en annan ger minst 0,5 rätt mer.
3. **Typ inom delprovet.** Bland delprovets typer (`golvTyp`) med eff ≥ 8 väljs den med störst `uppgifterPerPass(typ) · (malFor(typ) − styrka)`, om den är minst 0,5. Annars blir det hela delprovet blandat. ORD och LÄS har inga typer.
4. **Typstyrka.** När typen är hela delprovet (ORD, LÄS, sammanslagen MEK) används delprovsstyrkan rakt av. Övriga typer får sin prior ur delprovets **övriga** typer, så att samma svar inte räknas två gånger.
5. **Variation.** Efter tre rundor i rad på samma delprov blir knappen en blandad runda med tvåan: "Blanda MEK och XYZ →" (`lage=blandat&val=mek,xyz`, fem av varje).
6. **Tempo.** Tre eller fler obesvarade i rad sist i passet räknas inte i styrkan. De ger en egen rad i rättningen.
7. Inga säkra delprov men svar finns: gissningsregeln under Kallstart.

**Talet.** `n = Math.round(pott − 0,01)`, så att en exakt halva avrundas nedåt och vi hellre lovar för lite. `n < 1` ger "nära målet", annars "ca +n rätt att hämta". Samma n står i pillen, i arkets topp och i aria-texten. MEK 4,5 visas som "ca +4".

**Kortet Träna härnäst** (under kartan, efter en linje `#e2e8f0`):
- Överrad **TRÄNA HÄRNÄST** (11,5 px, vikt 800, versaler, `#b45309`) och till höger pillen "ca +4 rätt att hämta" (`#fef3c7`/`#92400e`).
- Rubrik **MEK** (20 px) med "Meningskomplettering" i grått.
- Mening 14 px: "Tio uppgifter per verbalt pass, och du ligger runt 40 %. Lågt hängande frukt." Mall: "{Tio/Tolv/Sex} uppgifter per {verbalt/kvantitativt} pass, och du ligger runt {p} %." Frukten läggs till när n ≥ 4. Med typ: "Mest att hämta i geometri."
- Knapp i full bredd, minst 56 px, `#2563eb`: "Kör 10 MEK‑uppgifter →" och "cirka 8 minuter, förklaring efter varje svar" (`round(TEMPO_SEK · 10 / 60)`). Med typ: "Kör 10 XYZ‑uppgifter →" och "mest geometri · cirka 10 minuter", eftersom typläget ger 7 av typen och 3 andra. Hårt bindestreck (U+2011) i "‑uppgifter".
- Länk `lage=delprov&val=mek`, med typ `lage=typ&val=xyz:geometri`; från rättningen plus `&fran=<resultatId>`.
- Grå axel, en rad under knappen: "LÄS är grå: 3 svar hittills." och **Kör 3 texter ›**, räknat med grupptaket: `ceil((4 − eff) / (GRUPPTAK · KALLVIKT_RUNDA))` texter (LÄS) eller diagram (DTK), annars "Testa 5 ›". Grå av ålder: "NOG är grå: dina svar är från i våras."

## Skärmar

**Fler prov (/extra, `src/pages/extra/index.astro`).**
- Ingress: "104 provpass, alla med rättning och förklaringar."
- **Tas bort:** de tre statistikrutorna. "Bra att veta" flyttas ner ovanför källtexten.
- **Läggs till** under ingressen: kompakta kortet. "Din hjärnkarta" med **Hela kartan ›** till höger, kartan (Rmax 74), Träna härnäst och den grå raden. Ingen förklaring eller tipsrad; `›` på etiketterna visar att de är tryckbara. Uppmätt på 400 × 700: knappens underkant 582 px ner, "Hösten 2025" syns ovanför vikningen.
- Kortet hämtas på klienten med ett skelett av samma höjd, så att sidan kan cachas.

**Rättningen (`src/pages/extra/[id].astro`).**
1. **Resultatkort:** pill och "Hösten 2012, provpass 1", "0,9" (50 px) med "normerad poäng" och "troligen 0,8 till 1,0" (±1 standardfel på antal rätt genom normeringstabellen), "23 av 40 rätt" och en ruta per delprov i passet (fyra eller tre). Hann eleven inte klart: "Du hann inte 6 uppgifter. Gissa alltid på slutet, det är ungefär +1 rätt gratis." Sist i kortet, i full bredd: "Gå igenom dina 17 fel ↓" (`#ecfdf5`, kant `#a7f3d0` upptill).
2. **Så flyttade passet din karta:** en mening, kartan med före och förklaringen. Meningen byggs så:
   - Ingen säker förändring: "**Passet bekräftade kartan.** XYZ, NOG och DTK växte lite och KVA stod still, men efter ett enda pass ryms det i slumpen."
   - Säker uppgång: "**NOG gick upp på riktigt**, från runt 35 till runt 50 %."
   - Säker nedgång: "**NOG gick ner mer än slumpen brukar.** Titta på felen i NOG nedan."
   - Halvan som inte ingick: "Verbalt mätte du inte i dag."
   - Första passet: "Nu finns XYZ, KVA, NOG och DTK på kartan. Det här är din startpunkt."
   - Omtag inom 24 timmar: "Det här passet gjorde du nyss, så det räknas inte igen." Ingen före-kontur.
   - Repetition inom 30 dagar: tillägget "Frågorna kändes igen, så de väger hälften."
3. **Träna härnäst** enligt regeln. Samma vinnare som före passet, annan halva: "Fortfarande MEK. Dagens pass var kvantitativt, men MEK är tio uppgifter på varje verbalt pass och där har du mest kvar." Samma halva: "Fortfarande MEK. Tio uppgifter per verbalt pass, och du ligger runt 40 %." Ny vinnare: "Nytt fokus: DTK." följt av mallen.
4. **Ur det här provet** (tryckbar rad med `›`): **Geometri i XYZ**, taggen "1 rätt av 4 i dag" och "nivå runt 30 % · ca +1 rätt att hämta per pass". Bara när typen fick minst hälften fel i passet och typpotten är minst 0,5, och aldrig samma som huvudkortet. Annars delprovet i passet med störst pott: "DTK · ca +3 rätt att hämta per pass".
5. Rättningslistan som i dag, yrkeskortet under den.
- `analysis.ts` rörs inte. `extra/[id].astro` slutar anropa `analyzeResults` och hämtar yrkeskortet med `getYrkeForScore`. De fyra HT2021-sidorna behåller analysblocket tills steg 9.

**Träningssidan (/trana/fokus).** Fulla kartan överst. **Tas bort:** "Så här ligger du till", "Mina svagheter", NASTA och "Mer av det här nästa runda". `tvaIRad` ersätts av regel 5, `efterOrd` blir kvar. "Ett delprov" och "En uppgiftstyp" fälls ihop under "Välj själv". `lage=svagheter` finns kvar för gamla länkar. `testa-fokus.mjs` skrivs om i samma steg.

**Kvittot efter en runda.** "7 av 10 rätt. Geometri 5 av 7." och en minikarta (220 px) där bara den tränade axeln har färg. Ingen förändringssiffra efter en runda; efter minst 30 svar, och bara om skillnaden är säker: "Sedan du började träna MEK: runt 40 → runt 55 %." Knapp "Kör 10 till", "Nästa: DTK" eller efter tre rundor "Blanda MEK och XYZ". Med `fran`: "Tillbaka till rättningen". Med `ejSparat` ingen minikarta.

**Profilen.** Den fulla kartan överst i stället för Styrkekarta, plus "Senast ritad efter Hösten 2012, provpass 1."

**Bannrar på /trana.** `.ord-banner` och `.extra-banner` blir grid (`72px 1fr`, knappen på egen rad i full bredd), så att Fokus-, Ord- och Extra-bannern slutar klämmas. Fokus-bannern: minikarta, "Träna härnäst: **MEK**", "ca +4 rätt att hämta" och "Kör 10 MEK‑uppgifter".

## Nedbrytning per delprov

En etikett öppnar ett bottenark (`<dialog>`, radie 22, dimma, handtag) som stängs med ✕, svep eller tryck utanför. "Hela kartan ›" öppnar ett ark med den fulla kartan, "streckad etikett = för lite data", "Byggd på 3 pass och 2 rundor" och Så räknar jag.

**Toppen:** pill, **XYZ** (28 px), "Matematisk problemlösning", "58 %" (40 px) och "din nivå just nu · målet 85 %". Spår på 12 px: fyllt i halvans färg till nivån, randigt till målet, svart målstreck. Under: "Byggt på dina senaste 20 svar" och pillen "ca +3 rätt att hämta". Sedan "Senaste passet: i linje med din nivå." eller vid säker förändring "Senaste passet: upp från runt 45 %."

**Var tappar du rätt?** (17 px) och "Mest att hämta överst. Tryck på en rad för tio uppgifter." Typerna (`golvTyp`, utan prefix) sorteras: säkra med typpott ≥ 0,5, säkra utan pott, osäkra sist. Hela raden är tryckbar med `›`: namn, procent och spår på 8 px. Bara översta raden har **MEST ATT HÄMTA** och "ca +1 rätt att hämta per pass"; övriga har bara spåret, eller "nära målet" i grönt. Osäkra rader: randigt spår utan målstreck och "För lite data · Testa 5 ›". Två likadana tal står aldrig bredvid varandra.

Under listan textlänken "eller 10 blandade XYZ‑uppgifter" (`#334155`, understruken) och **Så räknar jag**: "Antal uppgifter per provpass gånger avståndet till målet blir ungefär hur många fler rätt du får när du når dit. Procenten är din nivå just nu: nya svar väger mest, och med få svar drar jag mot mitten." Huvudknappen är klistrad i arkets botten (`position: sticky`, skugga upptill): "Kör 10 XYZ‑uppgifter →" och "mest geometri · cirka 10 minuter". Bara huvudknappen är blå; länkarna är grå.

**Per delprov:**
- XYZ, KVA och NOG: kategorierna. DTK: diagram, tabeller och kartor.
- MEK: "En lucka", "Två luckor" och "Tre luckor" räknade på en egen händelselista utan `rangTyp`, med vikterna 4, 4 och 2 och målen 85, 85 och 75 %.
- ORD och LÄS: ingen lista, bara toppen och "Kör 10 ORD‑uppgifter →" respektive "Kör LÄS, 3 texter →".
- Osäker axel: toppen visar "?" och ett randigt spår, texten "LÄS är grå: 3 svar hittills. Ett verbalt provpass gör den skarp." och knappen "Kör 3 texter →".

## Kallstart

**Inga svar alls.**
- /extra: en rad på 72 px med en grå minikarta, **Rita din hjärnkarta** och "Gör ett provpass nedan så ritar jag in halva kartan." Hela raden skrollar till `#forsta-pass`. Under den en liten länk: "eller en snabbkoll på tio minuter".
- /trana/fokus och profilen: rutnät, målring och sju "?"-etiketter. **Kartan är tom än så länge.** "Ge mig ett provpass så ritar jag in var dina rätt finns." Knapp "Välj ett provpass →", länk "eller en snabbkoll, cirka tio minuter".

**Bara en halva.** Regeln väljer bland det kända. Under knappen: "**Högra halvan är tom.** Gör ett kvantitativt pass så ritar jag in XYZ, KVA, NOG och DTK." med "Välj ett kvantitativt pass ›" till `/extra#forsta-kvant` från alla sidor. Omvänt för verbalt.

**Efter en snabbkoll.** Med 1 till 3 svar per delprov blir alla axlar grå. Gissningsregeln jämför halvorna (9 svar var): "**Snabbkollen ger en första riktning, inte en karta.** Kvantitativt gick trögare, 4 av 9 mot 7 av 9, så börja där." Knapp "Gör ett kvantitativt provpass →". Länk "eller 10 DTK‑uppgifter", där delprovet väljs på pott med priorn inräknad. `harnast` får typen `pass`, aldrig tomt.

## Data och API

- **`styrka.ts`:** `KALLVIKT_RUNDA` 0,7 → 0,5, eftersom rundor saknar klocka och visar förklaringar. Ny `malDelprov(dp)`. `beraknaTypStyrkor` enligt regel 4. `svarTillSiffra` räknar med grupptaket.
- **`historik.ts`:** flaggan `tempoSvans` (regel 6).
- **`fragebank.ts`:** ny `uppgifterPerPass()`, som `typVikter()` utan `VIKT_UTAN_UNDERTYP`.
- **`src/lib/fokus/hjarnkarta.ts`** (server): `byggHjarnkarta(handelser, { nu, pass? })` ger `{ axlar, harnast, forraVinnare, urProvet, forandring, typer, antalPass, antalRundor }`, där `Axel = { delprov, styrka, effektivt, osaker, mal, pott, spann, visadPct, fore?, effFore? }` och `typer` är raderna för alla sju ark. Före räknas på händelser före `pass.createdAt`, efter på händelser till och med passet plus övertidssvaren, båda vid tidpunkten `pass.createdAt`. Träna härnäst räknas på nu.
- **`src/lib/fokus/hjarnkarta-vy.ts`** (ren, utan frågedata): `ritaKarta()`, `potText()`, `deltaSynlig()`, `forandringsMening()`, `tranaHarnastHTML()`, för både Astro och klienten. Klientbundeln för `extra/[id]` får inte innehålla frågedata.
- **Komponenter:** `Hjarnkarta.astro`, `TranaHarnast.astro` och `DelprovArk.astro`, tunna omslag med `set:html`.
- **`src/pages/api/fokus/karta.ts`:** `GET` ger kartan för inloggade och gäster (gästsessionens händelser); `?resultat=<id>` lägger till före, förändring och urProvet för det försöket. Rättningen hämtar först när `persistResult` och övertidsanropen är klara.
- **`api/fokus/importera.ts`:** engångsimport av lokala `hp-results` som saknas på servern. Bara kända testId, svar med passets längd, datum krävs, högst 150 poster.
- **`hamtaHandelser`:** `runda_id` läggs till i SELECT, för "3 pass och 2 rundor".
- **`urval.ts` och `runda.ts`:** nytt `lage=blandat&val=mek,xyz`. Kvittot hämtar kartan när rundan startar och när den är klar.

## Byggordning

1. `styrka.ts`, `historik.ts`, `fragebank.ts` och `hjarnkarta.ts` med enhetstester: pillens tal är det största som syns; kortets procent är axelns för MEK, ORD och LÄS; ett kvantitativt plus ett verbalt pass låter kvantitativt vinna; snabbkollen ger icke-tomt `harnast`; hysteres; tempo-svans; första pass, omtag och `?review=1`.
2. `hjarnkarta-vy.ts` och komponenterna, testade mot exempeldatan på 320, 360 och 400 px. Kontroll av klientbundeln.
3. `api/fokus/karta.ts` och importen.
4. /extra: kompakta kortet, skelettet och kallstartsraden. Det största glappet i dag.
5. Rättningen i `extra/[id].astro`: resultatkortet med felraden, Så flyttade passet, Träna härnäst och Ur det här provet.
6. `DelprovArk.astro`, Hela kartan och tryckytorna.
7. /trana/fokus och det omskrivna `testa-fokus.mjs`.
8. Bannrarna på /trana.
9. Kvittot, profilen och de fyra HT2021-sidorna, som då byter analysblocket mot samma kort.
10. Senare: kalibrera målen per delprov ur andelen rätt per fråga i `question_events`, och en kvantitativ snabbkoll.
