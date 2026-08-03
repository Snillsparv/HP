# Väljer ord ur seedfilen och skriver anim-kavalkad.html med orden inbakade.
import json
import random

with open('src/lib/minnesord-seed.json') as f:
    data = json.load(f)

# Korta ord och korta betydelser så att korten går att läsa även i högt tempo.
kandidater = [
    {'w': w['word'], 'd': w['definition']}
    for w in data
    if len(w['word']) <= 13 and 8 <= len(w['definition']) <= 40 and '\n' not in w['definition']
]
rnd = random.Random(4136)  # deterministiskt urval
rnd.shuffle(kandidater)
urval = kandidater[:60]

with open('verktyg/animation/anim-kavalkad.mall.html') as f:
    mall = f.read()
html = mall.replace('__WORDS__', json.dumps(urval, ensure_ascii=False))
with open('verktyg/animation/anim-kavalkad.html', 'w') as f:
    f.write(html)
print('kavalkad byggd med', len(urval), 'ord')
