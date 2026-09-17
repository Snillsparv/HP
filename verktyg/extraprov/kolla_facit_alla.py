"""Jämför alla importerade provs 'correct' och förklaringarnas slutsvar mot UHR:s officiella facit-PDF.
Facit hämtas lokalt från uhr/<id>/*facit*.pdf eller laddas ned från provsidan i register.ts."""
import re, os, glob, sys, subprocess, html
import fitz

ROT = '/home/user/HP/src/lib/extraprov/'
UHR = os.environ.get('HP_FACIT_DIR') or os.path.join(os.path.expanduser('~'), '.cache', 'hp-facit')
reg = open(ROT + 'register.ts', encoding='utf-8').read()
prov = re.findall(r"id: '([a-z0-9]+)',\s*name: '([^']*)',\s*date: '([^']*)',\s*source: '([^']*)'", reg)

def hamta_facit(pid, url):
    d = os.path.join(UHR, pid); os.makedirs(d, exist_ok=True)
    lokala = sorted(f for f in glob.glob(os.path.join(d, '*facit*.pdf')) if 'exempel' not in f)
    if lokala:
        v1 = [f for f in lokala if 'version-1' in f or 'v1' in f or 'version1' in f]
        return (v1 or lokala)[0], 'lokal'
    sida = subprocess.run(['curl', '-sL', url], capture_output=True, text=True).stdout
    lankar = re.findall(r'href="([^"]*facit[^"]*\.pdf)"', sida, re.I)
    lankar = [html.unescape(l) for l in lankar]
    if not lankar:
        return None, 'ingen facitlänk på ' + url
    v1 = [l for l in lankar if 'version-1' in l or 'v1' in l or 'version1' in l]
    utan = [l for l in lankar if 'version' not in l.lower()]
    l = (v1 or utan or lankar)[0]
    if l.startswith('/'): l = 'https://www.studera.nu' + l
    ut = os.path.join(d, 'facit-dl.pdf')
    subprocess.run(['curl', '-sL', '-o', ut, l], check=True)
    return ut, 'nedladdad ' + l

def tolka_facit(pdf):
    """Returnerar {passnr: {fråga: bokstav}} genom att läsa ord med koordinater."""
    doc = fitz.open(pdf)
    per_pass = {}
    for page in doc:
        words = [list(w) for w in page.get_text('words')]
        # slå ihop siffror som ligger som separata ord intill varandra ("1" "0" -> "10")
        words.sort(key=lambda w: (round(w[1] / 4), w[0]))
        ihop = []
        for w in words:
            if ihop and re.fullmatch(r'\d', w[4]) and re.fullmatch(r'\d', ihop[-1][4]) \
               and abs(w[1] - ihop[-1][1]) < 3 and 0 <= w[0] - ihop[-1][2] < 3:
                ihop[-1][4] += w[4]; ihop[-1][2] = w[2]
            else:
                ihop.append(w)
        words = ihop
        # kolumnrubriker "Provpass N"
        rubriker = []
        for i, w in enumerate(words):
            if w[4].lower().startswith('provpass'):
                m = re.match(r'provpass\s*(\d)', w[4], re.I)
                n = None
                if m: n = int(m.group(1))
                elif i + 1 < len(words) and re.fullmatch(r'\d', words[i + 1][4]): n = int(words[i + 1][4])
                if n: rubriker.append((n, (w[0] + w[2]) / 2, w[1]))
        if not rubriker: continue
        # par (nummer, bokstav)
        bokst = [w for w in words if re.fullmatch(r'[A-E]', w[4])]
        for w in words:
            if not re.fullmatch(r'\d{1,2}', w[4]): continue
            num = int(w[4])
            if not 1 <= num <= 40: continue
            yc = (w[1] + w[3]) / 2
            kand = [b for b in bokst if abs((b[1] + b[3]) / 2 - yc) < 7 and 0 <= b[0] - w[2] < 45]
            if not kand: continue
            b = min(kand, key=lambda b: b[0] - w[2])
            xc = (w[0] + w[2]) / 2
            ovan = [r for r in rubriker if r[2] < w[1]]
            if not ovan: continue
            nara = [r for r in ovan if abs(r[1] - xc) < 120]
            n = min(nara, key=lambda r: (-round(r[2] / 5), abs(r[1] - xc)))[0] if nara else min(ovan, key=lambda r: abs(r[1] - xc))[0]
            per_pass.setdefault(n, {})
            if num in per_pass[n] and per_pass[n][num] != b[4]:
                print(f'   VARNING dubbel tolkning pass {n} fråga {num}: {per_pass[n][num]} / {b[4]}')
            per_pass[n][num] = b[4]
    return per_pass

totfel = 0
for pid, namn, datum, url in prov:
    pdf, kalla = hamta_facit(pid, url)
    if not pdf:
        print(f'{namn} ({pid}): FACIT SAKNAS, {kalla}'); totfel += 1; continue
    facit = tolka_facit(pdf)
    fel = 0; rader = []
    for datafil in sorted(glob.glob(f'{ROT}data/{pid}-*.ts')):
        p = int(re.search(r'-(\d)\.ts$', datafil).group(1))
        data = open(datafil, encoding='utf-8').read()
        par = re.findall(r'"?num"?: (\d+),.*?"?correct"?: (\d)', data, re.S)
        svar = {int(n): 'ABCDE'[int(c)] for n, c in par}
        fk = open(f'{ROT}forklaringar/{pid}-{p}.ts', encoding='utf-8').read()
        block = re.findall(r'\n  (\d+): `(.*?)`,(?=\n)', fk, re.S)
        fsvar = {}
        for n, text in block:
            m = re.findall(r'Svar ([A-E])\.', text)
            if not m: m = re.findall(r'alternativ ([A-E])\b', text)
            if not m: m = re.findall(r'Alternativ ([A-E])\b', text)
            if m: fsvar[int(n)] = m[-1]
        f = facit.get(p, {})
        if len(f) < len(svar):
            rader.append(f'  pass {p}: facit-PDF gav bara {len(f)} svar, data har {len(svar)}'); fel += 1
        for q in sorted(svar):
            if f.get(q) != svar[q]:
                rader.append(f'  pass {p} fråga {q}: data {svar[q]} facit {f.get(q)}'); fel += 1
            if fsvar.get(q) != f.get(q):
                rader.append(f'  pass {p} förklaring {q}: säger {fsvar.get(q)} facit {f.get(q)}'); fel += 1
        rader.append(f'  pass {p}: {len(svar)} frågor jämförda mot facit ({len(f)} i PDF), {len(fsvar)} förklaringar')
    print(f'{namn} ({pid}), facit {kalla}: ' + ('ALLT OK' if fel == 0 else f'{fel} FEL'))
    for r in rader:
        if fel or '--v' in sys.argv: print(r)
    totfel += fel
print('=== TOTALT', 'ALLT OK' if totfel == 0 else f'{totfel} FEL')
