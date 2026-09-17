# Fokuserad träning på svagheter: slutförslag

Slutförslaget bygger på vinnaren "Fokus: bygg vidare på grunden som redan ligger i repot" med det domarna lyfte ur de andra tre: rangordning efter poäng att hämta, en knapp direkt under felet, inga inställningar innan man börjar, snabbkoll för kallstart. Nuläget är läst ur huvudgrenen vid commit 259145d plus det okommitterade arbetsträdet vid skrivtillfället (`src/lib/fokus`, `src/pages/api/fokus`, `db.ts`, provlöparna, `render.ts`, `analysis.ts`, `fokus.astro`, testfilerna). Där dokumentet skiljer sig från arbetsträdet gäller dokumentet.

## 1. Sammanfattning

Du kan träna på riktiga högskoleprovsuppgifter i fyra lägen: ett helt delprov (slumpat bland de 3 640 uppgifterna i extramaterialet), en uppgiftstyp som XYZ algebra, en matematisk kategori över delproven (sannolikhet i XYZ, KVA och NOG tillsammans), eller "Mina svagheter" där verktyget väljer de typer som ger flest poäng att hämta. Varje fel svar i rättningen av ett prov har en knapp som startar tio nya uppgifter av samma typ utan mellansida, och rundan slutar med en väg tillbaka till rättningen. Efter varje svar kommer rätt eller fel direkt med Jonas textförklaring, och kvittot visar hur styrkan per typ flyttade sig. Styrkekartan har en rad per typ, och varje rad är en knapp till en runda. Allt fungerar utan konto via en gästsession som skapas när man startar ett prov eller en runda. Motorn finns i repot; det som återstår är modellens sista regler, kategoriläget, kvittot och gästflödet i proven.

## 2. Principer

1. **Bygg på det som finns.** `src/lib/fokus`, `question_events`, `/api/fokus/*`, `/trana/fokus`, `Styrkekarta.astro` och `render.ts` behålls med sina namn. Inga parallella moduler.
2. **Ett tryck från felet.** Knappen under ett fel svar startar rundan direkt. Ingen landningssida, inget val.
3. **Inga val innan man börjar.** Fokussidan har en primär knapp, kartan, sju delprovsknappar och hopfällda typchips. Kvittot har högst två knappar.
4. **Poäng att hämta, inte lägst siffra.** Typer rangordnas efter antal uppgifter per provpass gånger gapet till målnivån. DTK diagram (7 av 12 per pass) går före XYZ procent (0,6 av 12).
5. **Ärliga siffror.** Under fyra effektiva svar visas ingen procent och typen rangordnas inte. Procenten står i kvittot, aldrig efter varje svar. Antal i text är alltid råantalet svar.
6. **En källa per svar.** Tidsatta provsvar läses ur `test_results`; händelser skrivs för rundor och för övertidssvar på frågor som saknar svar i `test_results`.
7. **Att minnas facit är inte styrka.** Samma fråga inom ett dygn räknas inte alls, inom 30 dagar med halv vikt, oavsett källa.
8. **Blandat slår blockat.** Även en typrunda innehåller tre uppgifter ur samma delprov men annan kategori, och verktyget byter till blandad träning efter två typrundor i rad.

## 3. Uppgiftstyper

Typen är `delprov` eller `delprov:undertyp`, exakt som `typFor()` i `typer.ts` räknar ut den. Styrka räknas på båda nivåerna (`beraknaStyrkor`, `beraknaDelprovStyrkor`). Extramaterialet ger 35 typer.

| Delprov | Typer (antal i extramaterialet) | Härledning |
|---|---|---|
| XYZ (624) | algebra 189, aritmetik 163, geometri 105, funktioner 81, statistik 33, procent 30, sannolikhet 13, enheter 7, logik 3 | `category` |
| KVA (520) | algebra 168, aritmetik 111, geometri 109, funktioner 47, statistik 28, procent 22, sannolikhet 18, logik 10, enheter 7 | `category` |
| NOG (312) | logik 96, aritmetik 78, algebra 57, procent 31, geometri 24, statistik 14, sannolikhet 9, enheter 2, funktioner 1 | `category` (HT 2021 taggar NOG enbart logik) |
| DTK (624) | diagram 372, tabell 164, karta 88 | `category`; 209 diagramgrupper, 7 blandade |
| ORD (520), LÄS (520) | ord, las | ingen undertyp i MVP |
| MEK (520) | mek:1 206, mek:2 210, mek:3 104 | `antalLuckor()` |

**Golv för små typer** (finns i arbetsträdet: `MINSTA_TYP = 20`, `golvTyp`, `matcharTyp`). De tio typerna under golvet (nog:funktioner 1, nog:enheter 2, xyz:logik 3, xyz:enheter 7, kva:enheter 7, nog:sannolikhet 9, kva:logik 10, xyz:sannolikhet 13, nog:statistik 14, kva:sannolikhet 18) visas inte som chips. I modellen och på kartan slås de ihop till `xyz:ovrigt`, `kva:ovrigt` och `nog:ovrigt` (`forStyrka` via `golvTyp`); kartraden "XYZ övrigt" länkar till `lage=typ&val=xyz:ovrigt` (finns). Knappen i rättningen breddar däremot till **kategorin över delproven**, eftersom sannolikhet är samma färdighet i XYZ, KVA och NOG: `lage=kategori&val=sannolikhet` filtrerar på `q.category` i de tre kvantitativa delproven och ger sannolikhet 40, statistik 75, logik 109, funktioner 129, enheter 16. Knappen säger "Fler om sannolikhet (40 uppgifter)"; för enheter säger rundans första rad "Det finns 16 sådana, sedan kommer de äldsta igen". `tranaFor` i löparna byter till `lage: 'kategori'`.

**ORD och LÄS** har ingen undertyp; knappen under ett fel svar säger "Fler ORD-uppgifter" respektive "Fler LÄS-texter" och startar delprovsläget.

**Härleds automatiskt:** typ, luckor, grupp för DTK (`test_id|diagram`) och LÄS (`test_id|textIndex`), id `test_id#num`. De sju blandade DTK-grupperna följer med som hela enheter, så en typrunda på dtk:tabell kan innehålla en diagramfråga; händelsen sparas som dtk:diagram och kvittot visar den raden för sig. **Taggas manuellt:** ingenting i MVP. Steg 2 härleder `ord:uttryck` (44) mot `ord:ord` (476) och `las:kort` (80 texter med två frågor) mot `las:lang` (90) i sidofilen `undertyper.json`; de blir chips, inte rader i rangordningen. **ELF** finns inte i frågedatan. **HT 2021** räknas i historiken men ingår inte i poolen (`q.kalla === 'extra'` i `runda.ts`).

## 4. Svaghetsmodellen

Arbetsträdets `styrka.ts` har halveringstid tio svar, kalenderhalveringstid 90 dagar, prior Beta(2, 2) mot effektivt antal, gemensam vikt för svar med samma tidsstämpel (ett provpass), halv vikt på repetition, `osaker = effektivt < 4`, och `prioritet()` som ger 0 över `MAL_STYRKA` och annars `vikt * (mål - s) + 0.05 / sqrt(n_eff + 1)`. Det som ändras: halveringstid 20, prior på delprovsstyrkan, lägre vikt för rundsvar, tak per grupp, målnivå per delprov, och att osäkra typer aldrig rangordnas (`inkluderaOsakra` tas bort).

```
för varje typ t, svar sorterade nyast först, i = 0 för det senaste:
  w_i = 0.5^(i / 20) * 0.5^(dagar_i / 90) * k_i
        k_i = 1,0 för tidsatt provsvar, 0,7 för rundsvar och övertidssvar
  svar med samma tidsstämpel (ett provpass) får platsen mitt i gruppen
  frågor i samma grupp vid samma tillfälle: w_i = w_i * min(1, 2 / k), k = gruppens storlek
  repetition (samma fråga inom 30 dagar, alla källor): w_i = 0.5 * w_i
  omförsök (samma fråga inom 24 h, alla källor): hoppa över helt

  n_eff = sum(w_i)                          // högst cirka 29
  s_dp  = delprovsstyrkan ur beraknaDelprovStyrkor (Beta(2, 2))
  s_t   = (sum(w_i * ratt_i) + 4 * s_dp) / (n_eff + 4)
  osaker_t = n_eff < 4

  mål_t = 0,75 för nog:* och mek:3, annars 0,85
  prio_t = 0 om osaker_t eller s_t >= mål_t
         = vikt_t * (mål_t - s_t) + 0.05 / sqrt(n_eff + 1)   // exakt som prioritet() i dag
  vikt_t = typVikter(), halverad för ord och las (5,0) tills undertyperna finns
  mek:1, mek:2 och mek:3 rangordnas som en typ mek (vikt 10); luckorna är chips
```

Skäl. Halveringstid 20 gör att en runda på tio inte skriver om halva skattningen. Priorn på delprovsstyrkan gör att en ny undertyp startar där användaren ligger i delprovet, så två fel i en svår typ inte ser ut som en personlig svaghet förrän det finns underlag. Målnivån 0,75 för NOG och treluckor speglar att de är svårare för alla. Rundsvar väger 0,7 eftersom provsvar under tid ligger närmare det som mäts. Taket per grupp gör att ett missförstått diagram med fyra frågor räknas som två svar. Utan halvering skulle ORD och LÄS (vikt 10) toppa listan för nästan alla under 80 procent; med 5,0 hamnar ORD på 75 procent (prio 0,5) under KVA geometri på 45 procent (prio 0,84).

**Räkneexempel.** xyz:algebra med tio svar på 30 procent i ett pass, delprovsstyrka 0,55: alla tio får platsen 4,5, w = 0,855, n_eff 8,6, s = (2,57 + 2,2) / 12,6 = 0,38, gap 0,47, vikt 12 gånger 189/624 = 3,63, prio 1,72. dtk:diagram med ett enda fel: n_eff 1, osäker, prio 0; typen får plats i rundan som "utforska" i stället. ord med 30 svar på 75 procent: prio 0,51. Algebran går först.

**Gaten för "Mina svagheter":** minst tre typer med n_eff ≥ 4. Före det visar fokussidan snabbkollen (ingen historik) eller "Fortsätt med NOG", det delprov som har n_eff ≥ 4 på delprovsnivå och störst `ANTAL_PER_PASS * (mål - s_dp)`. `MINSTA_SVAR_SVAGHETER` tas bort.

**Provsvar.** `hamtaHandelser` räknar `null` i ett inlämnat prov som fel med halv vikt och markerar frågan som sedd. Övertidssvar från "Gör klart resten (utan tid)" sparas med `source = 'overtid'` bara för frågor som är `null` i `test_results`, och ersätter då null-regeln. Typen för varje händelse hämtas ur banken via `fragaMedId(question_id)` (finns i arbetsträdet); kolumnen `question_events.typ` är bara fallback, så golvet och undertyperna kan ändras utan migrering.

**Rätt efter fel.** Ett fel gör frågans typ till kandidat för återbesök efter tre dagar (`attRepetera`). Återbesöket är en annan osedd fråga av samma typ; samma fråga tas bara om typen har färre än tre osedda. Omförsök och repetition markeras i `markeraRepetitioner` över båda källorna (finns i arbetsträdet), så ett omgjort extraprov dagen efter räknas noll gånger.

**Visning.** Råantal < 4: "för lite data (3 svar) · testa 5". Råantal ≥ 4 men n_eff < 4 (paus): "senast i maj, var 62 % · testa 5 för att uppdatera". Annars "45 % (9 svar)". Färger på avrundad procent (finns): röd under 40, gul till 59, blå till 79, grön från 80, med textetikett "svag", "på väg", "bra", "sitter" för skärmläsare. Kartan sorteras efter prio, de tre översta får etiketten "mest att hämta", gröna och osäkra sist, och en rad förklarar: "Jag räknar också hur vanliga uppgifterna är på provet."

## 5. Urvalsalgoritmen

Grunden är `valjRunda()` i `urval.ts`: enheter (`tillEnheter`), `RUNDA = 10` frågor fyllda med `taTillAntal`, osedda först och därefter äldst sedda, högst två enheter från samma pass. `antal` är antal frågor, inte enheter. Sedd betyder besvarad de senaste 30 dagarna; `sett: { antal, av }` räknar frågor i poolen som matchar valet (per fråga, även i blandade grupper) mot `antalForVal`, så HT 2021 räknas inte.

**Enheter.** XYZ, KVA, NOG, ORD, MEK: en fråga. DTK: ett diagram med 2 till 4 frågor. LÄS: en text med 2 eller 4 frågor. `taTillAntal` tar enheter tills frågorna når tio, så en DTK- eller LÄS-runda blir 10 till 13 frågor i två till fem enheter; rubriken visar det faktiska antalet ("4 diagram · 11 frågor").

**Läge delprov och läge kategori.** Ren slump inom valet, osedda först. Kategori tar `q.category === val` i xyz, kva och nog.

**Läge typ.** Sju frågor av typen plus tre ur samma delprov med annan kategori på slumpade platser; rubriken är "XYZ algebra" och `skal`-raden säger "Insprängt: XYZ geometri". DTK: två diagram av typen och ett annat. MEK: sju med valt luckantal och tre andra. ORD och LÄS är hela delprovet. Efter två typrundor i rad på samma typ byter "Kör tio till" till läge svagheter med typen som `svaga[0]`, och kvittot säger "Du har nu 20 algebra i rad, nu blandar jag."

**Läge svagheter** (finns, ändras i hinkarna):

```
svaga  = tre typer med högst prio_t (svagasteTyper med typVikter, aldrig osäkra)
1. återbesök: upp till 2 enheter, en annan osedd fråga av samma typ som ett fel för ≥ 3 dagar sedan
2. svaga typer: 5 enheter växelvis från svaga[0..2], osedda först
3. utforska: 1 enhet ur den osäkra eller orörda typ i extramaterialet som har högst vikt
4. blandning: 1 enhet ur samma delprov som svaga men annan kategori, annars ur hela poolen
5. kontroll: 1 osedd fristående fråga ur den gröna typ vars senaste svar är äldst (över 21 dagar),
   annars ur starkaste typen i samma område (kvant/verbal) som svaga[0]
blanda 1 till 4, lägg 5 sist, fyll på från svaga om frågorna inte når 10
```

Varje enhet får fältet `skal` (finns i arbetsträdet; får `utforska`, `kontroll`, `insprangt`) som visas under räknaren: "KVA geometri, en av dina tre svagaste", "Du hade fel på en sådan för fem dagar sedan", "Ny för dig: DTK tabeller", "Kontroll: XYZ aritmetik, grön sedan i augusti".

**Läge snabbkoll.** En runda på exakt 18 frågor: XYZ 3 (algebra, aritmetik, geometri), KVA 3 (samma), NOG 2 (logik, aritmetik), ett DTK-diagram med två frågor, ORD 3, MEK 3 (en per luckantal), en LÄS-text med två frågor. Diagram och text väljs på gruppstorlek två i banken (18 diagram, 80 texter), inte på typ. `SNABBKOLL` i `urval.ts` skrivs om till den listan. Den ger en grov bild per delprov, inte per typ.

**Fler av samma typ mitt i rundan.** Ingen insprängning. Efter ett fel i läge svagheter eller delprov finns textlänken "Mer av det här nästa runda" som sparar typen i `hp-fokus-nasta`; nästa svaghetsrunda tar den som `svaga[0]`. `utom` och `sprangIn` i arbetsträdet tas bort. Vid `tomt_urval` (tom pool) visar klienten "Det finns inga sådana uppgifter, välj något annat".

## 6. Flöden

**A. Fel svar i rättningen.** Gäller `/extra/[id]` och de fyra HT 2021-löparna, som anropar `tranaLankHTML` med `fran` (finns i arbetsträdet). Under förklaringen på en utfälld röd rad står **Fler som den här: XYZ algebra** (`btn-primary btn-sm`, full bredd; rätt svar får ingen knapp); under golvet **Fler om sannolikhet (40 uppgifter)**. Klick går till `/trana/fokus?lage=typ&val=xyz:algebra&fran=extra-ht2019-1` och rundan startar direkt. Kvittot har **Tillbaka till rättningen** via `franUrl()`: `extra-*` till `/extra/<id>?review=1`, `*-ht2021` till `/prov/<id>?review=1`, och visas bara när `runda.ts` hittat ett `test_results`-resultat för `fran` (`franFinns`) eller klienten hittar `hp-results[fran]`; annars landar `review=1` på ett tomt prov. `trackCategories` i `analysis.ts` får `nog` och `nog2` så att analysknappen kan peka på NOG-typer.

**B. Träna-sidan.** Bannern finns; med historik: "Just nu ger DTK diagram dig mest att hämta." och knappen **Träna på mina svagheter**. **C. Profilen.** Kortet och kartan finns; kartan får prio-sorteringen och etiketterna. **D. Extraproven.** Rörs inte i MVP; steg 2: "Du har sett 8 av 40 uppgifter i det här passet". **E. Navigering.** Ingen ändring; steg 2: knappar på strategisidorna, snabbguiden och 8-veckorsplanen.

**F. Rundan.** 1. Gästsession skapas vid start (`sakraSession`, finns). Misslyckas den (blockerade kakor) rättas svaren ändå och kvittot säger "Svaren kunde inte sparas den här gången, så kartan uppdateras inte. Kolla att webbläsaren tillåter kakor." 2. Tryck på ett alternativ låser och postar `svar`; rätt grönt, valt fel rött, förklaring, ingen styrkerad och ingen temporad per svar; "Rätt!" eller "Inte rätt" ligger i ett `aria-live="polite"`-element. 3. **Nästa** i en sticky list under 640 px med `safe-area-inset-bottom` och räknaren "3 rätt av 5"; rundan får `padding-bottom` lika med listens höjd, fokus flyttas till Nästa (finns). 4. Efter fel: textlänken "Mer av det här nästa runda" (ej i läge typ). 5. Rundan sparas i `hp-fokus-runda` (finns) och återupptas bara om sparad runda har samma `lage`, `val` och `fran` och är yngre än två timmar; annars startar en ny. `startaRunda` byter till `pushState`, så bakåt går till valsidan och en delad runda-URL ger en ny runda. Nyckeln kastas vid kvittot. 6. Avsluta (✕) visar en inline-bekräftelse, hoppas över när alla frågor är besvarade, och landar på kvittot för det som hanns. 7. Nätfel: "Kunde inte rätta just nu" med försök igen (finns); vid start "Kunde inte hämta uppgifter, försök igen".

**G. Gäster och prov.** De fem provlöparna anropar `POST /api/auth/guest` vid **Starta provet** (en aktiv handling, som kommentaren i `guest.ts` kräver), och `persistResult` postar alltid till `/api/test/results`, inte bara när `window.__isLoggedIn`. Då når gästers extraprov modellen, kartan och "Tillbaka till rättningen". Övertidssvaren postas efter "Gör klart resten" en och en till `/api/fokus/svar` med `lage = 'overtid'`. Gästkakan lever 30 dagar och `db.ts` raderar gästkonton utan aktiv session efter 60 dagar (`ON DELETE CASCADE`), så kontotipset i kvittot säger "Utan konto sparas träningen i en månad. Skapa ett konto så sparas den för alltid." `upgradeGuestToUser` behåller samma användarrad; loggar man in mitt i en runda laddas sidan om, rundan återupptas och `migrateGuestToUser` kopierar `test_results` och `question_events`. Gamla `hp-results` från tiden före gästsessionen importeras i steg 2.

## 7. Skärmar och texter

Mobil först: 16 px sidmarginal, tryckytor minst 44 px, alternativ i full bredd, kartan är en lista. `.fokus-chip--typ` får `padding: 0.6rem 0.9rem` och `min-height: 44px` (i dag 0,4 rem, cirka 34 px). Jag-form överallt, som resten av sajten.

**Fokussidan `/trana/fokus`**, ordning på mobil: intro "Tio uppgifter i taget från tidigare högskoleprov, utan timer och med förklaring direkt. Jag väljer, du kör."; primär knapp **Träna på mina svagheter** (före gaten **Fortsätt med NOG** eller **Snabbkoll, cirka tio minuter**) med raden "DTK diagram först: 7 av 12 DTK-uppgifter på provet är diagram."; kartan; sju delprovschips; typchipsen i ett hopfällt `<details>` ("Visa alla 25 uppgiftstyper"). Utan historik: "Sedan vet jag ungefär var du står. Ett helt pass på 40 uppgifter ger en bättre bild."

**Kvittot** (finns som sammanfattning, byggs om): "7 av 10 rätt · XYZ algebra", tonrad, temporaden "Du tog 14 minuter på tio uppgifter, på provet har du cirka 10 (utan tidspress här)" summerad ur `TEMPO_SEK` per delprov, sedan en rad per typ: "XYZ algebra 38 % → 46 %", "XYZ geometri inga svar än → 3 svar till så får du en siffra". Raderna bygger på händelsernas typ, så en blandad DTK-grupp ger både "DTK tabeller" och "DTK diagram". Förändringen visas bara om beloppet är minst 3 punkter, annars "oförändrat"; "N svar till" är `ceil((4 - n_eff) / 0,7)`. Saknas `styrkaEfter` utelämnas raderna. Knappar: primär **Kör tio till**, sekundär **Tillbaka till rättningen** när `fran` finns, annars **Byt till KVA geometri** (typen som gick sämst), och textlänken "Välj något annat". "Klar för idag" tas bort. Därunder rutan "Vill du ha hjälp med algebra?" och för gäster kontotipset. Tonvarianter på rundans faktiska antal: alla rätt "Snyggt! 12 av 12. Byt typ, det här kan du."; från 70 procent "Bra jobbat! Kör tio till så ser du om det lossnar."; under 70 "Inget fel att ha fel, det är så man lär sig. Läs förklaringarna nedan och kör tio till :)". "Precis sådana du brukar missa" bara när styrkan före rundan var under 60 procent med n_eff ≥ 4, annars "Bra start på XYZ algebra." Efter ORD är den primära knappen **Kör ordträningen** till `/ord`.

**Efter snabbkollen:** andel rätt per delprov ("XYZ 2 av 3, NOG 0 av 2"), ingen typkarta, texten "Det här ger en grov bild per delprov; ett helt pass på 40 uppgifter ger en bättre." Typerna med fel listas som knappar: "Du hade fel på NOG logik och MEK med två luckor. Börja där." Primär knapp **Fortsätt med NOG** (svagaste delprovet), textlänk "Eller gör ett helt pass under tid" till `/extra`.

## 8. Datamodell och API

**Stabila fråge-id:n.** `test_id#num` (`frageId()`): `extra-ht2012-1#17`, `kvant-ht2021#5`. Händelserna bygger på `num`, men `test_results.answers` mappas på `BankFraga.index`, alltså arrayposition. Datafilernas ordning är därför ett kontrakt: `byggBank` stoppar starten vid dubbla id och varnar vid `num != index + 1` (finns i arbetsträdet; i dag stämmer det för alla 3 780). Typen för en händelse härleds alltid ur banken vid läsning.

**Tabeller.** `question_events (id, user_id, question_id, delprov, typ, chosen, correct, time_ms, source, created_at)` finns med `source` i `fokus`, `omforsok`, `snabbkoll`, och får `overtid`. Arbetsträdet lägger till `lage` och `runda_id`; dokumentet lägger till `position` och tabellen `fokus_rundor (id, user_id, lage, val, fran, antal, created_at)`. Med dem mäts hur ofta "Fler som den här" klickas (rundor med `fran`), hur många rundor som fullföljs (händelser per `runda_id` = `antal`), hur många som går från snabbkoll till svagheter, och det centrala måttet: andel rätt per typ i nästa provpass, före mot efter träning. `test_results` rörs inte. Steg 2: `fokus_activity` för streak. Steg 3: `task_progress`.

`GET /api/fokus/runda?lage=delprov|typ|kategori|svagheter|snabbkoll&val=&antal=&fran=` (finns; får `kategori`, `franFinns`, `rundaId`, `skal`; `utom` tas bort) svarar med enheter utan facit, `rubrik`, `antalFragor`, `styrkorFore` och `sett`. `POST /api/fokus/svar { questionId, chosen, timeMs, lage, rundaId, position }` (finns; får `overtid` och `position`) rättar på servern, sparar händelsen och svarar med facit, förklaring, `videoId`, `sparad` och `styrkaEfter` för frågans typ; `styrkaEfter` kostar ett fullt `hamtaHandelser` per svar, vilket accepteras tills det märks. `POST /api/auth/guest` anropas nu även av löparna och `POST /api/test/results` tar emot gästsessioner. `POST /api/fokus/import` (steg 2) tar emot `hp-results` (validerar `testId` mot banken) och `hp-fokus-lokal` (bara `questionId`, `chosen`, `timeMs`, tidpunkt; rättas på servern, max 500). Klienten får aldrig `correct` eller `explanation` före svar.

**localStorage.** `hp-fokus-runda` (rundan utan facit, kastas vid kvittot eller efter två timmar), `hp-fokus-nasta` (typ från "Mer av det här nästa runda"), `hp-fokus-senaste` (styrka före och efter per typ, steg 2), `hp-fokus-lokal` (händelser som inte kunde sparas, max 500, steg 2). Gästsessionen är primär lagring. `hp-results` och `hp-progress-<testId>` rörs inte i MVP.

## 9. Kopplingar till strategiinnehållet

`rekommendationer.ts` finns och mappar kategori till matterepetitionens avsnitt och strategisidan `/delprov/<dp>`; kvittot visar det i rutan "Vill du ha hjälp med X?" för rundans svagaste typ. Steg 2 lägger `ankare` per typ med `id` på delprovsidornas avsnitt (`kva:algebra` till `/delprov/kva#testa-varden`, `dtk:*` till `#enheter`, `nog:*` till `#trestegsmetoden`, `las` till `#las-fragorna-forst`, `mek` och `ord` till `/minnestekniker#association`), kopplar de dolda matterepetitionskategorierna och lägger samma ruta i analysblocket. Regeln "se genomgången först" (steg 2): om styrkan för fokustypen inte stigit över två rundor i rad visas rutan ovanför **Kör tio till** med "Fler uppgifter hjälper inte om metoden saknas. Se min genomgång av ekvationer först." Frivilliga felchips är steg 3 och styr bara texten.

## 10. Leveransplan

**Ocommittat men klart i arbetsträdet:** golvet, `HALVERINGSTID_DAGAR`, `markeraRepetitioner` över alla källor, gemensam vikt per provpass, typ ur banken, byggkontrollen, `styrkorFore`, `sett`, `skal`, `styrkaEfter`, `lage` och `runda_id`, `fran` i `tranaLankHTML` och löparna, `hp-fokus-runda`, sticky Nästa, `TEMPO_SEK`, analysknappen och tester. Det committas efter att testerna körts; listan nedan byggs ovanpå, i den ordning den står om tiden inte räcker.

**MVP, dag 1: modellen.** `styrka.ts`: `HALVERINGSTID = 20`, `KALLVIKT_RUNDA = 0.7`, grupptak, prior på delprovsstyrkan, målnivå per typ, `prioritet()` 0 för osäkra, `svagasteTyper` utan `inkluderaOsakra`, mek som en prio-typ. `historik.ts`: `null` som fel med halv vikt och sedd, `overtid`. `fragebank.ts`: kategoriläge, halverad vikt för ord och las. `testa-modell.mjs`: testfall som låser formeln (oviktat påslag, noll över målet), att ett rätt på dtk:diagram aldrig slår tio svar på 30 procent i xyz:algebra, null räknas som sett, samma fråga i två `test_results`-rader inom ett dygn räknas en gång, grupptaket.

**MVP, dag 2: urval, API och prov.** `urval.ts`: läge kategori, 7 + 3 i läge typ, hinkarna utforska och kontroll, återbesök på typ, `SNABBKOLL` på 18, `utom` bort. `runda.ts`: kategori, `franFinns`, `rundaId`, gaten tre typer med n_eff ≥ 4, "Fortsätt med <delprov>". `svar.ts` och `db.ts`: `overtid`, `position`, `fokus_rundor`. Löparna: `sakraSession` vid Starta provet, `persistResult` postar alltid, övertidssvar postas, `tranaFor` till kategori. `analysis.ts`: `nog`, `nog2`. Tester för snabbkoll, kategori, 7 + 3, gaten, och gästflödet i `testa-fokus.mjs` (gäst gör runda och prov, `upgradeGuestToUser` respektive `migrateGuestToUser`, kartan visar samma rader efteråt).

**MVP, dag 3: sidan.** `fokus.astro`: ordningen på mobil med `<details>`, chippadding, primär knapp i tre lägen, kvittot med två knappar och textlänk, tonvarianter, före och efter per typ, temposumma, ORD-knapp, snabbkollskvittot, `skal`-raden, `hp-fokus-nasta`, återupptagning med `pushState`, inline-bekräftelse, `aria-live`, texten vid `sparad: false`; styrkerad, temporad och `sprangIn` per svar tas bort. `karta.ts` och `Styrkekarta.astro`: prio-sortering, etiketter. `trana.astro`: bannern med en typ. Slutförslaget läggs in som `docs/svaghetstraning/design.md` och README:s parametrar uppdateras.

Efter MVP:n kan en gymnasist utan konto göra ett extraprov, trycka "Fler som den här" på ett fel svar, träna tio, se styrkan röra sig i kvittot, komma tillbaka till rättningen, och utan prov börja med en snabbkoll och sedan öppna "Mina svagheter".

**Steg 2 (en vecka senare).** `undertyper.json` som chips; `hp-fokus-lokal`, import av `hp-results`; `fokus_activity` och egen streak; "se genomgången först"; ankare och rutan i analysblocket; "Gör om de du hade fel på"; knappar på strategisidorna, snabbguiden och 8-veckorsplanen; "sett 8 av 40" på passkorten; första utvärderingen på verklig data av halveringstid, prior och golv.

**Steg 3.** `task_progress` med tre lådor i stället för `attRepetera`; svårighetsordning och målnivå ur lösningsfrekvens över alla användare; frivilliga felchips; mål i normerad poäng som brett intervall; gemensam streak med ordträningen om Jonas vill; manuell taggning.

## 11. Öppna frågor till Jonas

1. **Ska HT 2021 ingå i poolen?** Standard: nej, det sparas till stegen på Träna-sidan. Ändras med en rad i `runda.ts`, aldrig som en inställning.
2. **Ska streaken vara gemensam med ordträningen?** Standard: egen räknare i steg 2, `learn_activity` rörs inte.
3. **Ska NOG i HT 2021 taggas om till matteområde (tolv frågor)?** Standard: nej; `nog:logik` betyder tills vidare "NOG utan matteområde".
4. **Är målnivån 0,75 för NOG och treluckor rimlig?** Standard: ja tills lösningsfrekvens över användarna finns i steg 3.
5. **Ska kvittot visa en uppskattad normerad poäng och ett mål?** Standard: nej förrän steg 3, och då som intervall.
6. **Ska "Fokus" bli en egen menypunkt?** Standard: nej, sidan nås från bannern, profilen och varje fel svar.