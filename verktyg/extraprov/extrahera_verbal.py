# Läser ut ett verbalt provpass (utan ELF) ur UHR:s PDF till JSON.
#
#   python3 verktyg/extraprov/extrahera_verbal.py <provpass.pdf> <facit.pdf> <facit-kolumn 0-3> <normering-verb.pdf> <ut.json>
#
# Provhäftet är satt i två spalter. Vi läser textblocken med typsnitt och
# koordinater och ordnar dem spaltvis (vänster spalt uppifrån och ner, sedan
# höger). Typsnittet avgör vad som är vad:
#
#   Calibri 22        titel på en LÄS-text
#   Cambria           löptext i LÄS-texterna (kursiv, fet och dikter bevaras)
#   Calibri 11 fet    frågenummer och frågetext (ORD-ordet, LÄS-frågan)
#   Calibri 11        svarsalternativ och MEK-meningar
#
# Radslut hanteras så här:
#   mjukt bindestreck        avstavning, tas bort och raderna fogas ihop
#   hårt bindestreck utan    avstavning i frågetext ("gjor-" + "des"), tas bort
#     mellanslag efter
#   hårt bindestreck med     riktigt bindestreck ("kol-14-" + "metoden"), behålls
#     mellanslag efter
import html
import json
import re
import sys
from pathlib import Path

import pymupdf

MJUKT = '­'
SPALTGRANS = 300  # x-koordinat som skiljer vänster och höger spalt
FRAGA = re.compile(r'^(\d{1,2})\.\s*$')
ALTERNATIV = re.compile(r'^([A-E])\s*$')
SIDNUMMER = re.compile(r'^– \d+ –$')
SAMORDNING = ('och', 'eller', 'samt', 'respektive')


# ---------- text: från spann till HTML ----------

def fog(runs, nasta_text):
    """Justerar slutet på runs inför att texten nasta_text (nästa rad eller
    nästa stycke) ska fogas på. Returnerar runs, ev. med ett mellanslag sist."""
    if not runs:
        return runs
    forra, f, k = runs[-1]
    forsta_ord = nasta_text.replace(MJUKT, '').lstrip().split(' ')[0] if nasta_text.strip() else ''
    r = forra.rstrip()
    if r.endswith(MJUKT):
        runs[-1] = (r[:-1], f, k)
    elif r.endswith(MJUKT + '-'):
        # både mjukt och hårt bindestreck: avstavning
        runs[-1] = (r[:-2], f, k)
    elif r.endswith('-') and forsta_ord and forsta_ord[0].islower():
        if forsta_ord in SAMORDNING:
            runs[-1] = (r, f, k)
            runs.append((' ', f, k))
        else:
            # Hårt bindestreck vid radslut: avstavning ("gjor-" + "des"), utom
            # efter siffror ("kol-14-" + "metoden") och flerordiga egennamn
            # ("Science Fiction-" + "bokhandeln") där bindestrecket är äkta.
            ord_ = ''.join(t for t, _, _ in runs).rstrip()[:-1].split(' ')
            sista = ord_[-1] if ord_ else ''
            naest = ord_[-2] if len(ord_) > 1 else ''
            if sista[-1:].isdigit() or (sista[:1].isupper() and naest[:1].isupper()):
                runs[-1] = (r, f, k)
            else:
                runs[-1] = (r[:-1], f, k)
    else:
        runs.append((' ', f, k))
    return runs


def block_runs(lines):
    """Slår ihop raderna i ett block till en lista av (text, fet, kursiv)
    med korrekt hantering av avstavningar vid radslut."""
    runs = []
    for line in lines:
        spans = [sp for sp in line['spans'] if sp['text']]
        if not spans:
            continue
        if runs:
            fog(runs, spans[0]['text'])
        for sp in spans:
            runs.append((sp['text'], bool(sp['flags'] & 16), bool(sp['flags'] & 2)))
    return runs


def runs_text(runs):
    return ''.join(t for t, _, _ in runs)


def runs_html(runs, fet_ok=True):
    """Renderar runs till HTML. Mellanslag hamnar utanför taggarna."""
    # slå ihop intilliggande runs med samma stil
    ihop = []
    for t, f, k in runs:
        if ihop and ihop[-1][1] == f and ihop[-1][2] == k:
            ihop[-1] = (ihop[-1][0] + t, f, k)
        else:
            ihop.append((t, f, k))
    ut = ''
    for t, f, k in ihop:
        t = t.replace(MJUKT, '')
        m = re.match(r'^(\s*)(.*?)(\s*)$', t, re.S)
        led, karna, slap = m.groups()
        karna = html.escape(karna)
        if karna:
            if k:
                karna = f'<i>{karna}</i>'
            if f and fet_ok:
                karna = f'<b>{karna}</b>'
        ut += (' ' if led else '') + karna + (' ' if slap else '')
    ut = re.sub(r'\s+', ' ', ut).strip()
    ut = re.sub(r'\s+([,.;:!?])', r'\1', ut)
    return ut


def block_text(block):
    return ''.join(sp['text'] for l in block['lines'] for sp in l['spans']).replace(MJUKT, '')


def typsnitt(block):
    for l in block['lines']:
        for sp in l['spans']:
            if sp['text'].strip():
                return sp['font'], sp['size'], sp['flags']
    return '', 0, 0


def ar_dikt(block):
    """Diktstrofer: flera korta rader utan avslutande mellanslag och utan
    avstavning. Löptext har alltid ett mellanslag sist på raden."""
    rader = [''.join(sp['text'] for sp in l['spans']) for l in block['lines']]
    rader = [r for r in rader if r.strip()]
    if len(rader) < 3:
        return False
    return all(not r.endswith(' ') and not r.endswith(MJUKT) and len(r) < 60 for r in rader)


def sid_block(sida):
    """Textblock på sidan i läsordning: vänster spalt uppifrån och ner, sedan höger."""
    block = [b for b in sida.get_text('dict')['blocks'] if 'lines' in b and block_text(b).strip()]
    for b in block:
        b['spalt'] = 0 if b['bbox'][0] < SPALTGRANS else 1
    # Block på samma rad (bokstav och alternativtext i äldre häften) ordnas
    # från vänster till höger, därför avrundas y grovt.
    return sorted(block, key=lambda b: (b['spalt'], round(b['bbox'][1] / 4), b['bbox'][0]))


def ar_skrap(block):
    t = block_text(block).strip()
    if SIDNUMMER.match(t) or t == 'Uppgifter':
        return True
    if block['bbox'][1] < 40:  # sidhuvud: "ORD – Ordförståelse", "LÄS", "MEK – ..."
        return True
    return False


# ---------- frågor ----------

FRAGA_INLINE = re.compile(r'^(\d{1,2})\.\s+(\S.*)$', re.S)
ALTERNATIV_INLINE = re.compile(r'^([A-E])\s+(\S.*)$', re.S)


def rensa_rader(rader):
    """Tar bort tomma rader och tomma spann i början av ett block (äldre
    provhäften har ofta ett ensamt mellanslag som första rad)."""
    ut = []
    for l in rader:
        spans = [sp for sp in l['spans'] if sp['text'].strip() or ut]
        if spans:
            ut.append({**l, 'spans': spans})
    return ut


def tolka_fragor(block):
    """Frågor ur en lista block i läsordning. Ett frågeblock börjar med ett
    fett nummer ("21.\t"), alternativblock med en bokstav ("A\t"). I äldre
    häften (t.o.m. 2023) står numret ihop med frågetexten ("13. Vad anges...")
    och bokstaven i ett eget block följt av alternativtexten i nästa block."""
    fragor = []
    aktuell = None
    vantar = None  # bokstav vars alternativtext kommer i nästa block
    for b in block:
        if ar_skrap(b):
            continue
        rader = rensa_rader(b['lines'])
        if not rader:
            continue
        forsta_span = rader[0]['spans'][0]
        forsta = forsta_span['text']
        m = FRAGA.match(forsta)
        mi = FRAGA_INLINE.match(forsta) if not m else None
        if (m or mi) and (forsta_span['flags'] & 16):
            if aktuell:
                fragor.append(aktuell)
            if m:
                resten = [{'spans': rader[0]['spans'][1:]}] + rader[1:]
                num = int(m.group(1))
            else:
                resten = [{'spans': [{**forsta_span, 'text': mi.group(2)}] + rader[0]['spans'][1:]}] + rader[1:]
                num = int(mi.group(1))
            aktuell = {'num': num, 'runs': block_runs(resten), 'alt': {}}
            vantar = None
            continue
        a = ALTERNATIV.match(forsta)
        ai = ALTERNATIV_INLINE.match(forsta) if not a else None
        if (a or ai) and aktuell is not None:
            if a:
                resten = [{'spans': rader[0]['spans'][1:]}] + rader[1:]
                bokstav = a.group(1)
            else:
                resten = [{'spans': [{**forsta_span, 'text': ai.group(2)}] + rader[0]['spans'][1:]}] + rader[1:]
                bokstav = ai.group(1)
            text = runs_html(block_runs(resten), fet_ok=False)
            aktuell['alt'][bokstav] = text
            vantar = bokstav if not text else None
            continue
        if aktuell is not None and vantar is not None:
            aktuell['alt'][vantar] = runs_html(block_runs(rader), fet_ok=False)
            vantar = None
            continue
        if aktuell is not None and not aktuell['alt']:
            aktuell['runs'] = fog(aktuell['runs'], runs_text(block_runs(rader))) + block_runs(rader)
    if aktuell:
        fragor.append(aktuell)
    ut = []
    for f in fragor:
        bokstaver = sorted(f['alt'])
        if len(bokstaver) < 4:
            continue
        ut.append({'num': f['num'], 'text': runs_html(f['runs'], fet_ok=False), 'options': [f['alt'][b] for b in bokstaver]})
    return ut


def sidtyp(sida):
    t = sida.get_text()
    # Sidhuvudet ("ORD – Ordförståelse", "LÄS", "MEK") står högst upp på sidan
    # men kommer inte alltid först i textordningen, så titta på blockens läge.
    huvud = '\n'.join(block_text(b).strip() for b in sida.get_text('dict')['blocks'] if 'lines' in b and b['bbox'][3] < 50)
    huvud += '\n' + '\n'.join(t.splitlines()[:4])
    if 'Ordförståelse' in huvud or re.search(r'^ORD\b', huvud, re.M):
        return 'ord'
    if 'läsförståelse' in huvud or re.search(r'^LÄS\b', huvud, re.M):
        return 'las'
    if 'Meningskomplettering' in huvud or re.search(r'^MEK\b', huvud, re.M):
        return 'mek'
    return None


# ---------- LÄS ----------

def ar_lastext(block):
    """Löptexten är satt i ett annat typsnitt än frågorna (Cambria mot Calibri)."""
    font, size, _ = typsnitt(block)
    return not font.startswith('Calibri') or size >= 18


def text_item(block, spaltstart):
    """Ett block löptext till ett stycke: (slag, runs)."""
    font, size, flags = typsnitt(block)
    t = block_text(block).strip()
    x0 = block['bbox'][0]
    if (flags & 16) and len(t) < 80 and len(block['lines']) <= 2:
        return ('h4', [(t, False, False)])
    if ar_dikt(block):
        return ('dikt', [block_runs([l]) for l in block['lines']])
    if x0 - spaltstart > 60 and len(t) < 50 and len(block['lines']) == 1:
        return ('forf', [(t, False, False)])
    return ('p', block_runs(block['lines']))


SLUTTECKEN = ('.', '!', '?', '”', ':', ')', '…')


def stycken_html(items):
    """Renderar styckena och fogar ihop stycken som brutits av spalt- eller
    sidbyte: stycket saknar sluttecken och nästa börjar med liten bokstav."""
    ihop = []
    for slag, runs in items:
        if slag == 'p' and ihop and ihop[-1][0] == 'p':
            forra = ihop[-1][1]
            slut = runs_text(forra).rstrip()
            borjan = runs_text(runs).replace(MJUKT, '').lstrip()
            if slut.endswith(MJUKT) or slut.endswith('-') or (slut and not slut.endswith(SLUTTECKEN) and borjan[:1].islower()):
                fog(forra, borjan)
                ihop[-1] = ('p', forra + runs)
                continue
        ihop.append((slag, runs))
    ut = []
    for slag, runs in ihop:
        if slag == 'h4':
            ut.append(f'<h4>{html.escape(runs_text(runs))}</h4>')
        elif slag == 'forf':
            ut.append(f'<p class="forf">{html.escape(runs_text(runs))}</p>')
        elif slag == 'dikt':
            ut.append('<p class="dikt">' + '<br>'.join(r for r in (runs_html(x) for x in runs) if r) + '</p>')
        else:
            ut.append('<p>' + runs_html(runs) + '</p>')
    return '\n'.join(ut)


def las_las(sidor):
    """LÄS: texter i Cambria, frågor i Calibri. En text kan sträcka sig över
    flera sidor; frågorna som följer hör till den."""
    texter = []
    titel = None
    stycken = []
    for sida in sidor:
        block = [b for b in sid_block(sida) if not ar_skrap(b)]
        textblock = [b for b in block if ar_lastext(b)]
        fragblock = [b for b in block if not ar_lastext(b)]
        for b in textblock:
            font, size, flags = typsnitt(b)
            if size >= 18:
                if stycken and titel is not None:
                    texter.append({'titel': titel, 'html': stycken_html(stycken), 'fragor': []})
                    stycken = []
                titel = block_text(b).strip()
                continue
            spaltstart = 43 if b['spalt'] == 0 else 312
            stycken.append(text_item(b, spaltstart))
        if fragblock:
            fr = tolka_fragor(fragblock)
            if fr:
                texter.append({'titel': titel, 'html': stycken_html(stycken), 'fragor': fr})
                stycken, titel = [], None
    return texter


# ---------- facit och normering ----------

def las_facit(facit_pdf, kolumn):
    """Facit för en kolumn (0-3) i UHR:s facit-PDF. Sidhuvudet talar om vilka
    kolumner som är verbala och kvantitativa; rad 31-40 finns bara för de
    kvantitativa passen, så där är listan kortare. Om kolumnen i stället är
    en sträng med bokstäver ("EEBDB...") används den direkt som facit för
    uppgift 1, 2, 3 ... (för äldre facit-PDF:er vars text inte går att tolka)."""
    if isinstance(kolumn, str) and not kolumn.isdigit():
        return {i + 1: b for i, b in enumerate(kolumn.strip().upper())}
    kolumn = int(kolumn)
    t = pymupdf.open(facit_pdf)[0].get_text()
    slag = re.findall(r'(?m)^\s*(Verbal|Kvantitativ) del', t)
    kvant_kolumner = [i for i, s in enumerate(slag) if s == 'Kvantitativ']
    par = re.findall(r'(?m)^\s*(\d{1,2})\s+([A-E])\s*$', t)
    per_nr = {}
    for nr, bokstav in par:
        per_nr.setdefault(int(nr), []).append(bokstav)
    ut = {}
    for nr, lista in per_nr.items():
        if len(lista) == len(slag):
            ut[nr] = lista[kolumn]
        elif len(lista) == len(kvant_kolumner) and kolumn in kvant_kolumner:
            ut[nr] = lista[kvant_kolumner.index(kolumn)]
    return ut


def las_normering(norm_pdf):
    """Normeringstabellen: [lägsta råpoäng, normerad poäng]. Varje rad i
    tabellen består av fem värden: råpoäng, normerad, antal, andel, kumulativ."""
    t = pymupdf.open(norm_pdf)[0].get_text()
    rader = [r.strip() for r in t.splitlines() if r.strip()]
    tabell = []
    i = 0
    while i < len(rader):
        r = rader[i]
        m = re.match(r'^(\d+)\s*-\s*(\d+)$', r) or re.match(r'^(\d+)$', r)
        if m and i + 1 < len(rader) and re.match(r'^\d\.\d$', rader[i + 1]):
            lag = int(m.group(1))
            if lag <= 80 and (not tabell or lag > tabell[-1][0]):
                tabell.append([lag, float(rader[i + 1])])
                i += 5
                continue
        i += 1
    return tabell


def main():
    pdf, facit_pdf, kolumn, norm_pdf, ut = sys.argv[1:6]
    d = pymupdf.open(pdf)
    facit = las_facit(facit_pdf, kolumn)
    ord_sidor, las_sidor, mek_sidor = [], [], []
    typ = None
    for s in d:
        # Sidor utan sidhuvud (fortsättningssidor i äldre häften) hör till
        # samma del som sidan före.
        typ = sidtyp(s) or typ
        if typ == 'ord': ord_sidor.append(s)
        elif typ == 'las': las_sidor.append(s)
        elif typ == 'mek': mek_sidor.append(s)

    ord_fr = tolka_fragor([b for s in ord_sidor for b in sid_block(s)])
    ord_fr.sort(key=lambda f: f['num'])
    for f in ord_fr:
        f['word'] = re.sub(r'<[^>]+>', '', f['text']).strip()
        f['text'] = f"<b>{f['word']}</b>"

    texter = las_las(las_sidor)
    mek_fr = tolka_fragor([b for s in mek_sidor for b in sid_block(s)])
    mek_fr.sort(key=lambda f: f['num'])
    for f in mek_fr:
        f['text'] = re.sub(r'_{3,}', '_____', f['text'])

    def satt_facit(fr):
        for f in fr:
            b = facit.get(f['num'])
            f['correct'] = 'ABCDE'.index(b) if b else None

    satt_facit(ord_fr); satt_facit(mek_fr)
    for t in texter:
        satt_facit(t['fragor'])

    resultat = {
        'ord': ord_fr,
        'las': texter,
        'mek': mek_fr,
        'normering': las_normering(norm_pdf),
    }
    Path(ut).write_text(json.dumps(resultat, ensure_ascii=False, indent=1))
    print(f"ORD {len(ord_fr)} | LÄS {sum(len(t['fragor']) for t in texter)} i {len(texter)} texter | MEK {len(mek_fr)} | normering {len(resultat['normering'])} steg")
    saknar = [f['num'] for fr in [ord_fr, mek_fr] + [t['fragor'] for t in texter] for f in fr if f['correct'] is None]
    print('saknar facit:', saknar or 'inga')
    for t in texter:
        print(f"  LÄS '{t['titel']}': {len(t['html'])} tecken, frågor {[f['num'] for f in t['fragor']]}")


if __name__ == '__main__':
    main()
