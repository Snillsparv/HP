# Gör om ett verbalt pass (JSON från extrahera_verbal.py) till en datafil för
# sajten: src/lib/extraprov/data/<id>.ts
#
#   python3 verktyg/extraprov/bygg_verbal_ts.py <json> <id> <tillfalle> <passnr> <datum-text>
#
# Exempel: python3 verktyg/extraprov/bygg_verbal_ts.py ht2025-p3.json ht2025-3 ht2025 3 "19 oktober 2025"
import json
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]


def main():
    kalla, pid, tillfalle, passnr, datum = sys.argv[1:6]
    d = json.loads(Path(kalla).read_text())

    ord_q = [{'num': f['num'], 'word': f['word'], 'text': f['text'], 'options': f['options'], 'correct': f['correct']} for f in d['ord']]
    texts = [{'title': t['titel'] or f'Text {i + 1}', 'html': t['html']} for i, t in enumerate(d['las'])]
    las_q = []
    for i, t in enumerate(d['las']):
        for f in t['fragor']:
            las_q.append({'num': f['num'], 'text': f['text'], 'options': f['options'], 'correct': f['correct'], 'textIndex': i})
    mek_q = [{'num': f['num'], 'text': f['text'], 'options': f['options'], 'correct': f['correct']} for f in d['mek']]

    pass_ = {
        'id': pid,
        'tillfalle': tillfalle,
        'passNr': int(passnr),
        'kind': 'verbal',
        'name': f'Provpass {passnr} (verbalt)',
        'timeMinutes': 33,
        'extendedMinutes': 48,
        'normering': d['normering'],
        'subTests': [
            {'id': 'ord', 'name': 'ORD – Ordförståelse', 'shortName': 'ORD', 'type': 'ord', 'questions': ord_q},
            {'id': 'las', 'name': 'LÄS – Svensk läsförståelse', 'shortName': 'LÄS', 'type': 'las', 'texts': texts, 'questions': las_q},
            {'id': 'mek', 'name': 'MEK – Meningskomplettering', 'shortName': 'MEK', 'type': 'mek', 'questions': mek_q},
        ],
    }
    ut = REPO / 'src/lib/extraprov/data' / f'{pid}.ts'
    ut.parent.mkdir(parents=True, exist_ok=True)
    ut.write_text(
        f'// Högskoleprovet {datum}, provpass {passnr} (verbalt, utan ELF).\n'
        '// Uppgifterna är hämtade från UHR:s publicerade prov på studera.nu och\n'
        '// utlästa automatiskt ur PDF:en med verktyg/extraprov/extrahera_verbal.py.\n'
        "import type { ExtraPass } from '../types.js';\n\n"
        'export const pass: ExtraPass = ' + json.dumps(pass_, ensure_ascii=False, indent=1) + ';\n'
    )
    print('skrev', ut.relative_to(REPO), f"({sum(len(s['questions']) for s in pass_['subTests'])} frågor)")


if __name__ == '__main__':
    main()
