# Överlämning: så här har arbetet i repot bedrivits

Skrivet 2026-09-17 när Jonas pausade på grund av credits, så att Jessica (eller
någon annan) kan fortsätta från ett annat konto utan att tappa sammanhang.

## Sajten i korthet

- Astro med SSR, Postgres, driftsatt på Railway som bygger automatiskt när
  `main` uppdateras. Domän hpakuten.se.
- Databasen skapar sina tabeller själv vid start (`src/lib/db.ts`). Lokalt
  behövs `DATABASE_URL`, t.ex. `postgres://postgres:hp@localhost:5432/postgres`.
- Starta lokalt: `DATABASE_URL=... npx astro dev --port 4321 --host 127.0.0.1`.

## Arbetssätt

- All utveckling har skett på grenen `claude/vocab-trainer-interface-g0knip`.
  Deploy = pusha grenen, sedan `git checkout main && git merge --ff-only
  <gren> && git push origin main`, tillbaka till grenen. Jonas laddar ibland
  upp filer direkt på GitHub ("Add files via upload"), så hämta `origin/main`
  och slå ihop innan deploy.
- Kontroll att en deploy är live: `curl -sL https://hpakuten.se/extra | grep
  "<något nytt>"`, bygget tar några minuter.
- Text på sajten: du-tilltal, Jonas som avsändare, aldrig tankstreck (– eller
  —) i text vi skriver själva. Originaltext från proven behåller sina
  tankstreck.
- Commit-meddelanden på svenska. Inga modellnamn i commits.

## Extraproven (Fler prov)

- Register: `src/lib/extraprov/register.ts` (lista `provtillfallen`, glob av
  `data/*.ts` och `forklaringar/*.ts`, `extraStatistik()` för antal).
- Data per pass: `src/lib/extraprov/data/<id>-<pass>.ts`. Kvantitativa pass är
  handskrivna (KaTeX via `tex()`, figurer via `figur()`, DTK-alt-texter med
  alla värden). Verbala pass byggs ur PDF med
  `verktyg/extraprov/extrahera_verbal.py` och `bygg_verbal_ts.py`.
- Förklaringar: `src/lib/extraprov/forklaringar/<id>-<pass>.ts`, en post per
  fråga, kvant slutar med `<p>Svar X.</p>`, LÄS slutar med "alternativ X."
- Bilder: `public/extraprov/<id>/*.webp`, klippta med
  `verktyg/extraprov/klipp_figurer.py`.
- Rätt svar kommer alltid från UHR:s officiella facit-PDF, aldrig från egna
  lösningar. Kontroll av alla 26 prov mot facit-PDF:erna:
  `python3 verktyg/extraprov/kolla_facit_alla.py` (laddar ned facit till
  `~/.cache/hp-facit` vid behov, senast "ALLT OK" för 3 640 uppgifter).
- Övriga verktyg i `verktyg/extraprov/`: `validera-tex.mjs <filer>` (KaTeX),
  `testa-pass.mjs <passid...>` (Playwright mot lokal server på 4321:
  klickar igenom alla frågor, kollar bilder och förklaringar),
  `prep_prov.py <utkatalog> <provsida-url> [<normsida-url>]` (laddar ned PDF:er,
  renderar sidor, dumpar text, tolkar normering).
- Serien är komplett: HT 2012 till HT 2025 utom HT 2021 (sajtens
  huvudmaterial) och VT 2016 (UHR har ingen provfrågesida). Före HT 2012
  publicerar studera.nu bara normeringstabeller.

## Svamp-Bob-temat (Otto)

- `src/lib/svampbob.ts` (konto och förhandsgranskning),
  `src/components/SvampBob.astro`, `public/svampbob/` (tema.css, tema.js,
  poser, skratt). Fullt tema på startsidan för kontot
  otto.oscar.seipel@gmail.com, lugn variant på övriga sidor via
  `src/layouts/Base.astro`. Förhandsgranskning: `/?svampbob=bikinibottom`
  (kaka i två timmar), `/?svampbob=av` stänger av.

## Uttalsverktyget

- Admin-sidan `/admin/uttal` väntar på att Jonas spelar in uttal. Nyckeln till
  ElevenLabs ligger utanför repot (på servern och i en lokal fil, inte i git);
  Jonas har rekommenderats att rotera den.

## Idé från Jonas: stjärnmarkera uppgifter i provläget

Jonas vill kunna stjärnmarkera uppgifter under ett pass för att komma tillbaka
till dem om det finns tid över när alla 40 är gjorda, precis som man gör på
det riktiga provet. Skiss:

- En stjärnknapp bredvid uppgiftsnumret i provlöparen (`src/pages/extra/[id].astro`
  och HT 2021-proven i `src/pages/prov/*.astro`), tangentbord: `s`.
- Stjärnorna sparas i samma `hp-progress-<testId>` i localStorage som svaren,
  så de överlever "Fortsätt där du var".
- Prickraden längst ned (`.pq-dot`) och översikten (`.pq-ov-btn`) visar en
  liten stjärna på markerade uppgifter, och när användaren når sista frågan
  och trycker Nästa hoppar löparen till första stjärnmarkerade i stället för
  till fråga 1. Knappen "Rätta" visar "2 markerade kvar" som påminnelse.
- I rättningen listas stjärnmarkerade uppgifter först ("Uppgifter du ville
  titta mer på"), och de behåller markeringen så att de kan hittas i
  profilens granskningsläge (`?review=1`).
- Steg 2: låt stjärnorna bli en ingång till fokuserad träning
  ("Träna fler av den här typen") när det verktyget finns.

## Pågående: fokuserad träning på svagheter

- Se `docs/svaghetstraning/README.md` för uppdrag, status, designriktning och
  nästa steg. Kartläggningen av koden finns i
  `docs/svaghetstraning/kartlaggning.md`.
