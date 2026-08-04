# Bygger uttalsnotation för alla ord i ordbanken från två öppna källor:
#
#   1. Lexin (Isof, CC BY 4.0): färdig, människogranskad notation. Vinner alltid.
#   2. NST-lexikonet (Nasjonalbiblioteket, öppna data): SAMPA-transkription som
#      konverteras till en läsbar notation i Lexin-stil.
#
# Resultatet skrivs till verktyg/uttal/notation.json som { ord: {n, kalla} }.
import json
import re
from pathlib import Path

SC = Path('/tmp/claude-0/-home-user-HP/3c43ea54-e9ce-53f4-8b83-bbb79026c93d/scratchpad')
REPO = Path('/home/user/HP')
PRICK = '̣'  # kombinerande punkt under: betonad vokal

# NST-SAMPA -> läsbar svensk notation. Längsta nycklar först vid matchning.
FONEM = {
    'A:': 'a:', 'a': 'a',
    'e:': 'e:', 'e': 'e', '@': 'e',
    'i:': 'i:', 'I': 'i',
    'u:': 'o:', 'U': 'o',
    'o:': 'å:', 'O': 'å',
    '}:': 'u:', 'u0': 'u',
    'y:': 'y:', 'Y': 'y',
    '2:': 'ö:', '9': 'ö',
    '{:': 'ä:', '{': 'ä', 'E:': 'ä:', 'E': 'ä',
    'ex0': 'e',
    'p': 'p', 'b': 'b', 't': 't', 'd': 'd', 'k': 'k', 'g': 'g',
    'f': 'f', 'v': 'v', 's': 's', 'h': 'h', 'j': 'j', 'l': 'l',
    'r': 'r', 'm': 'm', 'n': 'n', 'N': 'ng',
    'S': 'ʃ', 'x\\': 'ʃ', 'C': 'ç', 's\\': 'ç',
    's`': 'rs', 't`': 'rt', 'd`': 'rd', 'n`': 'rn', 'l`': 'rl',
}
NYCKLAR = sorted(FONEM, key=len, reverse=True)


def sampa_till_lasbar(sampa):
    """Konverterar en NST-transkription till läsbar notation.
    Returnerar None om något tecken inte känns igen (hellre inget än fel)."""
    accent2 = '""' in sampa
    s = sampa.replace('"""', '"')
    # Betoning: markera vokalen i stavelsen efter accenttecknet med punkt under.
    stavelser = []
    for stavelse in re.split(r'\$', s):
        stavelser.append(stavelse)
    ut = []
    for stavelse in stavelser:
        beton = stavelse.startswith('"') or stavelse.startswith('""')
        stavelse = stavelse.lstrip('"').replace('%', '')
        i = 0
        del_ = []
        vokal_markerad = not beton
        while i < len(stavelse):
            for nk in NYCKLAR:
                if stavelse.startswith(nk, i):
                    lasbar = FONEM[nk]
                    if not vokal_markerad and lasbar[0] in 'aeiouyäåö':
                        # punkt under första betonade vokalen
                        if len(lasbar) > 1 and lasbar[1] == ':':
                            del_.append(lasbar[0] + PRICK + ':')
                        else:
                            del_.append(lasbar[0] + PRICK + lasbar[1:])
                        vokal_markerad = True
                    else:
                        del_.append(lasbar)
                    i += len(nk)
                    break
            else:
                return None
        ut.append(''.join(del_))
    resultat = ''.join(ut)
    return ('²' if accent2 else '') + resultat


def las_nst():
    fil = SC / 'NST svensk leksikon/swe030224NST.pron/swe030224NST.pron'
    nst = {}
    with open(fil, encoding='latin-1') as f:
        for rad in f:
            falt = rad.split(';')
            if len(falt) < 12:
                continue
            ordet = falt[0].strip().lower()
            sampa = falt[11].strip()
            if ordet and sampa and ordet not in nst:
                nst[ordet] = sampa
    return nst


def main():
    bank = [w['word'] for w in json.loads((REPO / 'src/lib/minnesord-seed.json').read_text())]
    lexin = json.loads((SC / 'lexin-notation.json').read_text())
    nst = las_nst()
    print('nst-ord:', len(nst))

    ut = {}
    kallor = {'lexin': 0, 'nst': 0, 'saknas': 0}
    for o in bank:
        lo = o.lower()
        if o in lexin:
            ut[o] = {'n': lexin[o], 'k': 'lexin'}
            kallor['lexin'] += 1
        elif lo in nst and (n := sampa_till_lasbar(nst[lo])):
            ut[o] = {'n': n, 'k': 'nst'}
            kallor['nst'] += 1
        elif ' ' in o:
            # flerordsuttryck: slå upp del för del i NST
            delar = [sampa_till_lasbar(nst[d]) if d in nst else None for d in lo.split()]
            if all(delar):
                ut[o] = {'n': ' '.join(delar), 'k': 'nst'}
                kallor['nst'] += 1
            else:
                kallor['saknas'] += 1
        else:
            kallor['saknas'] += 1

    (REPO / 'verktyg/uttal/notation.json').write_text(
        json.dumps(ut, ensure_ascii=False, indent=0))
    print('täckning:', kallor, f"= {kallor['lexin']+kallor['nst']} av {len(bank)}")
    for o in ['skärskåda', 'ackja', 'vederhäftig', 'abderitisk', 'haricots verts', 'nyckfull']:
        print(' ', o, '->', ut.get(o, {}).get('n', 'SAKNAS'))


if __name__ == '__main__':
    main()
