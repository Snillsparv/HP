# Reklamfilmen "På bara ett par timmar"

Stående film (1080 x 1920, 60 bilder/s, 32 s) som visar sajten och följer
Jonas speakertext (`rost.mp3`). Den färdiga filmen ligger i `ut/hpakuten-film.mp4`
och omslagsbilden i `ut/omslag.jpg`. Allt i telefonen och ordkorten är riktiga
skärmbilder från sajten, och hjärnkartan ritas av sajtens egen kod.

## Filer

- `film.html`: själva filmen. Deterministisk animation som styrs av
  `window.SEEK(t)`; inga CSS-animationer och ingen text ur manuset (den läggs
  på som undertexter). Kamerans nyckelbilder står i `skapaKamera()`: telefonen
  syns i början och i slutet, däremellan är den i helskärm (`FS`) och zoomar
  bara in på ordkortets minnesregel. Telefonen flyttas bara med
  2D-transformer: med perspektiv ritar Chromium den suddigt. Skärmarna och deras
  scrollkurvor finns i `SCROLL` och `skarmar()`. Block som fälls ut på sajten
  (förklaringen, mattesvaret, frågan, regeln) visas som ett dragspel: det nya
  blocket vecklas ut vid en uppmätt linje (`vik` i `skarm()`) och resten
  glider ner. Hjärnkartan ritas live ovanpå skärmbilden (`kortHTML`,
  `ritaMek`). Ordkorten ligger i `kort()` och slutet i `insats()` och
  `slut()`. Snabba scrollningar får rörelseoskärpa.
- `bilder/`: skärmbilder fångade med `fanga.mjs` (390 px bred mobilvy, tre
  gånger upplösning), plus Vimeo-omslag och hjärnkartans data som JSON.
- `fanga.mjs`: fångar bilderna från en lokal server (se nedan).
- `bygg-karta.mjs`: bygger `hjarnkarta-vy.js` ur `src/lib/fokus/hjarnkarta-vy.ts`
  och `data.js` ur kartdatan. Båda filerna är genererade.
- `render.mjs`: renderar rutor med Playwright (`probe` för enstaka tider,
  `full` för alla).
- `ljud.py`: syntetiserar ljudeffekterna till `ljud.wav` (inte i git).
- `bygg.sh`: renderar i parallella delar och kodar till mp4 med rösten
  (normaliserad till ungefär -14 LUFS) och effekterna.

## Bygga om

```sh
# 1. Lokal server med databas (tabellerna skapas vid start)
DATABASE_URL=postgres://postgres:hp@localhost:5432/postgres npx astro dev --port 4321 --host 127.0.0.1

# 2. Skärmbilder. KaTeX serveras lokalt: packa upp katex-0.16.21 från npm.
#    HP_DATUM styr nedräkningarna ("Bara 7 dagar kvar"): sätt publiceringsdagen.
HP_DATUM=2026-10-11 HP_KATEX=/sökväg/till/katex/package/dist node verktyg/film/fanga.mjs

# 3. Hjärnkartans kod och data
node verktyg/film/bygg-karta.mjs

# 4. Provbilder, sedan hela filmen (ungefär sju minuter)
node verktyg/film/render.mjs probe /tmp/prov 1.5 8.6 17.2 30
verktyg/film/bygg.sh verktyg/film/rost.mp3 film.mp4 /tmp/hp-film-rutor 60 3
```

`fanga.mjs` registrerar admin-kontot i den lokala databasen och kör
`/api/admin/simulera` för att hjärnkartan ska få en ojämn profil, och kör sedan
en MEK-runda med bara rätt svar för kartan efteråt. Kör den mot en
lokal databas, aldrig mot produktion.

Startsidan och ordträningen visar dagar kvar till provet, fångat den
11 oktober ("7 dagar"). Publiceras filmen en annan dag: fånga om med
`HP_DATUM` och rendera igen.
