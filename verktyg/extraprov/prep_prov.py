#!/usr/bin/env python3
"""Förbered ett UHR-prov: ladda ner PDF:er, dumpa facit och normering, rendera kvantsidor.
Användning: prep_prov.py <utkatalog> <provsida-url> [<normeringssida-url>]"""
import sys, os, re, subprocess, pymupdf

out, page = sys.argv[1], sys.argv[2]
normpage = sys.argv[3] if len(sys.argv) > 3 else None
os.makedirs(out, exist_ok=True)
os.chdir(out)

def fetch(url, fn):
    subprocess.run(['curl', '-sL', '--max-time', '120', url, '-o', fn], check=True)

def pdf_links(html):
    links = set()
    for m in re.finditer(r'href="([^"]*\.pdf[^"]*)"', html, re.I):
        h = m.group(1)
        if h.startswith('/'):
            h = 'https://www.studera.nu' + h
        links.add(h)
    return sorted(links)

fetch(page, 'sida.html')
links = pdf_links(open('sida.html', encoding='utf-8', errors='replace').read())
if normpage:
    fetch(normpage, 'norm.html')
    links += pdf_links(open('norm.html', encoding='utf-8', errors='replace').read())
files = []
for url in links:
    fn = os.path.basename(url.split('?')[0])
    if not os.path.exists(fn):
        fetch(url, fn)
    files.append(fn)
    print('PDF', fn, os.path.getsize(fn))

# facit
for fn in files:
    if 'facit' in fn.lower() and 'norm' not in fn.lower():
        d = pymupdf.open(fn)
        txt = '\n'.join(p.get_text('text') for p in d)
        open('facit-raw.txt', 'w').write(txt)
        for i, p in enumerate(d):
            p.get_pixmap(matrix=pymupdf.Matrix(2, 2)).save(f'facit-s{i+1}.png')
        print('FACIT', fn, len(d), 'sidor')
        # försök sekventiell parsning
        rows = re.findall(r'^\s*(\d{1,2})\s+([A-E])\s*$', txt, re.M)
        blocks, cur = [], []
        for n, l in rows:
            if int(n) == 1 and cur:
                blocks.append(cur); cur = []
            cur.append(l)
        if cur: blocks.append(cur)
        print('  sekventiella block:', [len(b) for b in blocks])
        for b in blocks: print('   ', ''.join(b))

# normering
for fn in files:
    if 'norm' in fn.lower():
        d = pymupdf.open(fn)
        t = '\n'.join(p.get_text('text') for p in d)
        open(fn.replace('.pdf', '.txt'), 'w').write(t)
        iv = re.findall(r'(\d+)\s*[–-]\s*(\d+)\s*\n\s*(\d[.,]\d)', t)
        print('NORM', fn, [[int(a), float(c.replace(',', '.'))] for a, b, c in iv])

# kvantpass: rendera sidor och dumpa text
for fn in files:
    low = fn.lower()
    if 'kvant' in low and 'norm' not in low:
        m = re.search(r'del-?(\d)', low) or re.search(r'pass-?(\d)', low)
        n = m.group(1) if m else 'x'
        d = pymupdf.open(fn)
        sub = f'provpass-{n}-kvant'
        os.makedirs(sub, exist_ok=True)
        outtxt = []
        for i, p in enumerate(d):
            p.get_pixmap(matrix=pymupdf.Matrix(1.72, 1.72)).save(f'{sub}/s{i+1:02d}.png')
            outtxt.append(f'===== SIDA {i+1} =====\n' + p.get_text('text'))
        open(f'p{n}-text.txt', 'w').write('\n'.join(outtxt))
        print('KVANT', fn, '->', sub, len(d), 'sidor')
    elif 'verb' in low and 'norm' not in low:
        m = re.search(r'del-?(\d)', low) or re.search(r'pass-?(\d)', low)
        print('VERBAL', fn, 'pass', m.group(1) if m else '?')
