# Bygger Anki-kortlekar av ordträningens ordbank.
#
#   python3 verktyg/anki/bygg-kortlek.py alla   -> alla 4136 ord
#   python3 verktyg/anki/bygg-kortlek.py 50     -> de 50 utvalda TikTok-orden
#
# Framsidan visar ordet med etymologi och minnesregel bakom varsin klickbar
# flik. Baksidan visar betydelsen och en exempelmening (plus samma hjälptexter
# utfällda, så att man ser dem även om man inte klickade fram dem).
import json
import re
import sys
from pathlib import Path

import genanki
from PIL import Image

REPO = Path('/home/user/HP')
UT = Path('/tmp/claude-0/-home-user-HP/3c43ea54-e9ce-53f4-8b83-bbb79026c93d/scratchpad')
BILDCACHE = UT / 'anki-bilder'

# Fasta id:n så att en ny version av kortleken uppdaterar korten i stället för
# att skapa dubbletter vid import.
MODELL_ID = 1607392913
DECK_ID_ALLA = 2059400110
DECK_ID_50 = 2059400111

# De 50 orden ur verktyg/tiktok/tiktok-50-ord.md, i samma ordning.
URVAL_50 = [
    'lakonisk', 'decimera', 'trojansk häst', 'frilans', 'pionjär',
    'nemesis', 'ambrosia', 'entusiasmera', 'amorin', 'monetär',
    'symposium', 'metafysik', 'kategorisera', 'sofistikerad', 'agorafobi',
    'kasern', 'kadett', 'infanteri', 'logistik', 'härjad',
    'legio', 'apokalyps', 'epistel', 'genesis', 'metodism',
    'elixir', 'alkov', 'arabesk', 'palaver', 'arkipelag',
    'kolerisk', 'nostalgi', 'katarakt', 'fantomsmärta', 'amnesti',
    'negligé', 'krinolin', 'passepartout', 'carte blanche', 'pendang',
    'apanage', 'banal', 'vederhäftig', 'controller', 'etablissemang',
    'metafor', 'stereotyp', 'impressionistisk', 'rapsodi', 'koreografi',
]

CSS = """
.card {
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  font-size: 19px;
  text-align: center;
  color: #1a1a2e;
  background: #f8fafc;
  padding: 14px 10px;
}
.nightMode.card, .card.nightMode { color: #e2e8f0; background: #0f172a; }

.ord { font-size: 40px; font-weight: 800; line-height: 1.15; margin: 18px 0 6px; }
.ord.liten { font-size: 27px; margin: 4px 0 2px; opacity: 0.75; }
.skilje { width: 54px; height: 4px; border-radius: 2px; background: #2563eb; margin: 12px auto 18px; }
.nightMode .skilje { background: #3b82f6; }

/* Framsidans utfällbara hjälptexter. */
details.hjalp {
  max-width: 460px;
  margin: 9px auto;
  text-align: left;
  border-radius: 12px;
  overflow: hidden;
}
details.hjalp > summary {
  cursor: pointer;
  list-style: none;
  padding: 10px 15px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 1.4px;
  text-transform: uppercase;
}
details.hjalp > summary::-webkit-details-marker { display: none; }
details.hjalp > summary::after { content: ' ▾'; }
details.hjalp[open] > summary::after { content: ' ▴'; }
details.hjalp > .txt { padding: 0 15px 14px; font-size: 17px; line-height: 1.45; }

/* Baksidans rutor, samma färgspråk som ordträningen på hpakuten.se. */
.ruta {
  max-width: 460px;
  margin: 9px auto;
  padding: 12px 15px 14px;
  border-radius: 12px;
  text-align: left;
  font-size: 16.5px;
  line-height: 1.45;
}
.etikett {
  display: block;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.ety, details.ety { background: #eff6ff; color: #334155; }
.ety .etikett, details.ety > summary { color: #2563eb; }
.nightMode .ety, .nightMode details.ety { background: #17233d; color: #cbd5e1; }
.nightMode .ety .etikett, .nightMode details.ety > summary { color: #7aa5f7; }

.mne, details.mne { background: #faf5ff; color: #334155; }
.mne .etikett, details.mne > summary { color: #9333ea; }
.nightMode .mne, .nightMode details.mne { background: #241a35; color: #cbd5e1; }
.nightMode .mne .etikett, .nightMode details.mne > summary { color: #c084fc; }

.rot { background: #fffbeb; color: #334155; }
.rot .etikett { color: #b45309; }
.nightMode .rot { background: #2c2413; color: #cbd5e1; }
.nightMode .rot .etikett { color: #fbbf24; }

.betydelse {
  font-size: 32px;
  font-weight: 800;
  color: #14532d;
  background: #f0fdf4;
  border-radius: 12px;
  padding: 16px 18px;
  max-width: 460px;
  margin: 6px auto 12px;
}
.nightMode .betydelse { color: #86efac; background: #10251a; }

.exempel {
  max-width: 460px;
  margin: 0 auto 4px;
  font-size: 17px;
  line-height: 1.5;
  font-style: italic;
  color: #475569;
}
.nightMode .exempel { color: #94a3b8; }

.bild { margin: 14px auto 4px; }
.bild img { max-width: 260px; border-radius: 12px; }

.kalla { margin-top: 18px; font-size: 12px; color: #94a3b8; }
"""

FRAM = """
<div class="ord">{{Ord}}</div>
<div class="skilje"></div>
{{#Etymologi}}<details class="hjalp ety"><summary>Etymologi</summary><div class="txt">{{Etymologi}}</div></details>{{/Etymologi}}
{{#Minnesregel}}<details class="hjalp mne"><summary>Minnesregel</summary><div class="txt">{{Minnesregel}}</div></details>{{/Minnesregel}}
"""

BAK = """
<div class="ord liten">{{Ord}}</div>
<div class="betydelse">{{Betydelse}}</div>
<div class="exempel">{{Exempel}}</div>
{{#Bild}}<div class="bild">{{Bild}}</div>{{/Bild}}
{{#Etymologi}}<div class="ruta ety"><span class="etikett">Etymologi</span>{{Etymologi}}</div>{{/Etymologi}}
{{#Minnesregel}}<div class="ruta mne"><span class="etikett">Minnesregel</span>{{Minnesregel}}</div>{{/Minnesregel}}
{{#SammaRot}}<div class="ruta rot"><span class="etikett">Ord med samma rot</span>{{SammaRot}}</div>{{/SammaRot}}
<div class="kalla">hpakuten.se/ord</div>
"""

modell = genanki.Model(
    MODELL_ID,
    'HPAkuten ordträning',
    fields=[
        {'name': 'Ord'},
        {'name': 'Betydelse'},
        {'name': 'Etymologi'},
        {'name': 'Minnesregel'},
        {'name': 'Exempel'},
        {'name': 'SammaRot'},
        {'name': 'Bild'},
    ],
    templates=[{'name': 'Ord till betydelse', 'qfmt': FRAM, 'afmt': BAK}],
    css=CSS,
    sort_field_index=0,
)


def esc(s):
    return (s or '').replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')


def rotord_html(w):
    rel = (w.get('related') or {})
    ord_lista = rel.get('words') or []
    if not ord_lista:
        return ''
    delar = []
    if rel.get('root'):
        delar.append(f'<i>Roten: {esc(rel["root"])}</i><br>')
    delar.append(', '.join(
        f'<b>{esc(r["word"])}</b>' + (f' ({esc(r["gloss"])})' if r.get('gloss') else '')
        for r in ord_lista
    ))
    return ''.join(delar)


def bild_html(w, media):
    # Ordträningens bilder ligger som webp; Anki-klienterna är säkrast på jpeg.
    sokvag = w.get('image') or ''
    m = re.fullmatch(r'/minnesord/([\w-]+)\.webp', sokvag)
    if not m:
        return ''
    kalla = REPO / 'public' / 'minnesord' / f'{m.group(1)}.webp'
    if not kalla.exists():
        return ''
    BILDCACHE.mkdir(parents=True, exist_ok=True)
    namn = f'hpord-{m.group(1)}.jpg'
    mal = BILDCACHE / namn
    if not mal.exists():
        im = Image.open(kalla).convert('RGB')
        im.thumbnail((520, 520), Image.LANCZOS)
        im.save(mal, 'JPEG', quality=85)
    media.append(str(mal))
    return f'<img src="{namn}">'


def bygg(vilken):
    data = json.loads((REPO / 'src/lib/minnesord-seed.json').read_text())
    if vilken == '50':
        index = {w['word']: w for w in data}
        saknas = [o for o in URVAL_50 if o not in index]
        assert not saknas, f'saknas i ordbanken: {saknas}'
        urval = [index[o] for o in URVAL_50]
        deck = genanki.Deck(DECK_ID_50, 'HPAkuten ordträning (50 utvalda)')
        filnamn = 'hpakuten-ord-50-utvalda.apkg'
    else:
        urval = sorted(data, key=lambda w: w['word'].lower())
        deck = genanki.Deck(DECK_ID_ALLA, 'HPAkuten ordträning (alla ord)')
        filnamn = 'hpakuten-ord-alla.apkg'

    media = []
    for w in urval:
        deck.add_note(genanki.Note(
            model=modell,
            fields=[
                esc(w['word']),
                esc(w['definition']),
                esc(w.get('etymology')),
                esc(w.get('mnemonic')),
                esc(w.get('example')),
                rotord_html(w),
                bild_html(w, media),
            ],
            # Stabil identitet per ord: en ny version uppdaterar kortet i
            # stället för att lägga till en dubblett.
            guid=genanki.guid_for('hpakuten-ord', w['word']),
        ))

    UT.mkdir(parents=True, exist_ok=True)
    genanki.Package(deck, media_files=media).write_to_file(UT / filnamn)
    print(f'{filnamn}: {len(urval)} kort, {len(media)} bilder')


if __name__ == '__main__':
    bygg(sys.argv[1] if len(sys.argv) > 1 else 'alla')
