# Klipper ut figurer och DTK-sidor ur UHR:s kvantitativa provpass som webp.
#
#   python3 verktyg/extraprov/klipp_figurer.py <pdf> <utkatalog> <spec> [<spec> ...]
#
# En spec är  namn=sida:x0,y0,x1,y1[:marginal]  för en figur (koordinater i
# PDF-punkter), namn=sida:hel  för en hel stående DTK-sida, eller
# namn=sida:liggande  för en DTK-sida vars innehåll är vridet 90 grader och
# roteras tillbaka så att det blir läsbart. Sidhuvud och sidfot skalas bort.
import io
import sys
from pathlib import Path

import pymupdf
from PIL import Image

SKALA = 3.0


def spara(pix, mal, maxbredd):
    im = Image.open(io.BytesIO(pix.tobytes('png'))).convert('RGB')
    if im.width > maxbredd:
        im = im.resize((maxbredd, round(im.height * maxbredd / im.width)), Image.LANCZOS)
    im.save(mal, 'WEBP', quality=88, method=6)
    print(mal.name, im.size)


def main():
    pdf, ut = sys.argv[1], Path(sys.argv[2])
    ut.mkdir(parents=True, exist_ok=True)
    d = pymupdf.open(pdf)
    for spec in sys.argv[3:]:
        namn, rest = spec.split('=')
        delar = rest.split(':')
        sida = d[int(delar[0]) - 1]
        if delar[1] in ('hel', 'liggande'):
            # Klipp bort sidhuvudet ("DTK") och sidnumret. Liggande innehåll
            # roteras 90 grader medurs så att det blir läsbart, utom när sidan
            # redan har en rotation i PDF:en (då roterar pymupdf den själv).
            r = sida.rect
            klipp = pymupdf.Rect(r.x0 + 20, r.y0 + 45, r.x1 - 20, r.y1 - 40)
            m = pymupdf.Matrix(SKALA, SKALA)
            if delar[1] == 'liggande' and sida.rotation == 0:
                m = m.prerotate(90)
            pix = sida.get_pixmap(matrix=m, clip=klipp)
            spara(pix, ut / f'{namn}.webp', 2000)
        else:
            # namn=sida:x0,y0,x1,y1[:marginal[:liggande]] – en figur på en
            # liggande sida roteras på samma sätt som hela sidan.
            x0, y0, x1, y1 = [float(v) for v in delar[1].split(',')]
            m = float(delar[2]) if len(delar) > 2 and delar[2] else 10
            klipp = pymupdf.Rect(x0 - m, y0 - m, x1 + m, y1 + m)
            matris = pymupdf.Matrix(SKALA, SKALA)
            if len(delar) > 3 and delar[3] == 'liggande' and sida.rotation == 0:
                matris = matris.prerotate(90)
            pix = sida.get_pixmap(matrix=matris, clip=klipp)
            spara(pix, ut / f'{namn}.webp', 1000)


if __name__ == '__main__':
    main()
