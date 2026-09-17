# Fokuserad träning på svagheter: designunderlag (pausat arbete)

Status 2026-09-17: designarbetet pausades på grund av begränsade credits. Det här
dokumentet samlar uppdraget, det som hann bli klart, min designriktning och vad
som återstår, så att arbetet kan tas upp av någon annan (t.ex. Jessica) utan att
börja om. Ingen kod för själva verktyget är skriven ännu.

## Uppdraget (Jonas)

"Nästa steg är att man ska kunna välja att träna på uppgifter av en viss typ.
Dels varje delprov för sig (så slumpas uppgifterna bland alla som finns) men
även mer specifikt. Det bästa vore att om man har fel på en viss uppgift så kan
man sedan få träna på fler uppgifter av just den typen. Jag vill ha det ultimata
och smartaste träningsverktyget som gör det så lätt som möjligt att fokusera
specifikt på sina svagheter."

## Vad som är klart

- Kartläggning av nuläget i tre delar (frågedata och taxonomi, tränings- och
  provflöden, resultat- och användardata). Se `kartlaggning.md`. Den fjärde
  delen (strategiinnehåll per delprov, för att koppla svaga typer till rätt
  video eller matterepetition) hann inte göras.
- Ett arbetsflöde för att ta fram designen med flera oberoende förslag som
  bedöms, syntetiseras och granskas: `workflow-designa.js`. Faserna
  "Designa", "Bedöm", "Syntes" och "Granska" har inte körts. Skriptet kan
  köras i Claude Code med Workflow-verktyget, eller användas som checklista
  för att göra samma sak för hand.

## Designriktning (mitt förslag så långt)

Det här är min egen sammanfattning, inte resultatet av bedömningsrundan. Den
bygger på kartläggningen och på att jag byggt extraproven och känner koden.

### Tre lägen, en knapp bort

1. **Delprov**: slumpade uppgifter ur alla 26 prov plus HT 2021 för ett valt
   delprov (XYZ, KVA, NOG, DTK, ORD, LÄS, MEK).
2. **Typ**: slumpade uppgifter av en vald typ, t.ex. XYZ algebra eller MEK med
   tre luckor.
3. **Mina svagheter**: verktyget väljer själv, viktat mot de typer där
   användaren är svagast, med lite blandning så att det inte blir ren drill.

Ingången från ett fel svar är det viktigaste flödet: i rättningen av varje prov
(både `/extra/[id]` och HT 2021-proven) får varje fel fråga en knapp
"Träna fler av den här typen" som startar läge 2 med rätt typ förvald.

### Uppgiftstyper

- Kvantitativa uppgifter har redan `category` i data (algebra 414, diagram 372,
  aritmetik 352, geometri 238, tabell 164, funktioner 129, logik 109, karta 88,
  procent 83, statistik 75, sannolikhet 40, enheter 16 i extraproven). Typ =
  delprov plus kategori, t.ex. "XYZ algebra" och "KVA geometri". DTK har
  diagram, tabell och karta.
- Verbala uppgifter saknar kategori. Grov typ i MVP: ORD, LÄS, MEK. Finare
  typer som går att härleda automatiskt ur data: antal luckor i MEK (räkna
  understreck i frågetexten), LÄS-frågans frågetyp (mönster i frågetexten:
  syfte, slutsats, påstående som stämmer, detalj), ordklass i ORD (kan
  härledas ur ordet med enkla regler eller taggas för hand, 260 ord är
  överkomligt). ELF finns inte alls.
- Stabilt fråge-id: `<passId>#<num>`, t.ex. `ht2012-1#17`. HT 2021-frågorna
  behöver motsvarande id (t.ex. `ht2021-kvant1#5`) och kategorin finns redan i
  `src/lib/questions-*.ts`.

### Svaghetsmodell

Styrka per typ = viktad andel rätt över användarens senaste svar på typen, där
nya svar väger mer än gamla (exponentiell avtagning med halveringstid omkring
tio svar). Lägg till en försiktig prior (t.ex. Beta(2, 2)) så att två fel av
två inte visas som 0 procent, och visa "för lite data" under fem svar. Svar
efter provtiden räknas, men markeras som "utan tid". Senare steg: tid per
fråga som andra signal (rätt men långsamt är också en svaghet).

Allt detta går att räkna ut redan i dag från `test_results.answers` (svar per
fråga som index-array) om man mappar index till fråge-id via passets
frågeordning; se kartläggningen. En ny tabell för händelser per fråga
(`question_events`: user_id, question_id, delprov, typ, rätt, tid_ms, källa,
tidsstämpel) gör det enklare och gör att träningsrundor och prov behandlas
lika. Gäster utan konto sparar samma händelser i localStorage och flyttar med
vid kontoskapande på samma sätt som ordträningens framsteg
(`migrateGuestToUser` i `src/lib/auth.ts`).

### Urval av nästa uppgift

- Pool = alla frågor av typen minus de användaren sett de senaste 30 dagarna
  (eller minus de senast sedda om poolen tar slut).
- DTK: välj ett diagram och ge dess 2 till 4 frågor i följd. LÄS: välj en text
  och ge dess frågor i följd. Annars blir varje fråga orimligt dyr.
- "Mina svagheter": 70 procent från de tre svagaste typerna, 30 procent
  blandat från övriga (interleaving), plus återbesök av frågor användaren
  hade fel på för minst tre dagar sedan (repetition, samma tanke som
  ordträningens Leitner-lådor).
- En runda är 10 uppgifter (DTK och LÄS räknar en grupp som en enhet), utan
  synlig timer men med tid per uppgift i bakgrunden, och med rättning och
  textförklaring direkt efter varje svar.

### Skärmar

- `/trana/fokus`: tre korta rader (Delprov, Typ, Mina svagheter) och en
  "Kör"-knapp. Under: en styrkekarta per typ (stapel per typ, färg efter
  styrka, grå för "för lite data"), varje stapel klickbar till läge 2.
- Rundan: samma frågekomponent som i `/extra/[id]` (KVA-par, NOG-påståenden,
  DTK-diagram med zoom, LÄS-text som kan fällas ihop), svar, rättning,
  förklaring, "Nästa". Efter tio: sammanfattning per typ och knappen
  "Kör tio till".
- Profilen: styrkekartan och de tre svagaste typerna med knapp "Träna".
- Träna-sidan: ett kort "Fokusera på dina svagheter" när det finns data.

### Leveransplan

1. **MVP (några dagar)**: stabila fråge-id:n, gemensam frågekomponent bruten ur
   `/extra/[id].astro`, sidan `/trana/fokus` med läge 1 och 2 (grov verbal
   typ), knappen "Träna fler av den här typen" i rättningen, tabellen
   `question_events` med backfyllning från `test_results`, styrkekarta på
   profilen.
2. **Steg 2**: läge "Mina svagheter", finare verbala typer, repetition av
   gamla fel, gäster via localStorage.
3. **Steg 3**: tid per fråga som signal, mål kopplat till normerad poäng,
   koppling från svag typ till rätt video på `/delprov/*` och till
   matterepetitionen.

### Öppna frågor till Jonas

- Ska huvudmaterialet HT 2021 ingå i poolen, eller ska det sparas till stegen
  på Träna-sidan så att man inte "bränner" det?
- Direkt rättning efter varje fråga i träningsläget, eller rättning efter tio?
- Vill du tagga ORD-orden med ordklass för hand, eller räcker grov typ?

## Hur man fortsätter

1. Läs `kartlaggning.md` (nuläget i koden med filhänvisningar).
2. Gör den fjärde kartläggningen (strategiinnehåll) om steg 3 i planen ska
   designas färdigt; annars kan den vänta.
3. Antingen kör `workflow-designa.js` i Claude Code (Workflow-verktyget) för
   att få fyra oberoende förslag, bedömning, syntes och granskning, eller
   bygg MVP:n direkt utifrån designriktningen ovan.
4. Följ `docs/OVERLAMNING.md` för arbetssätt, deploy och kontroller.
