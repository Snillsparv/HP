# Bygger redigerarsidan (Artifact) från nyhetsbrevet och editor-skalet.
# Bilderna bäddas in som data-URI:er (Artifact-sidor får inte hämta externt)
# med riktiga adressen i data-mailsrc, som exporten byter tillbaka till.
import base64
import io
import json
import re

REPO = '/home/user/HP'
UT = '/tmp/claude-0/-home-user-HP/3c43ea54-e9ce-53f4-8b83-bbb79026c93d/scratchpad/brevredigerare.html'

with open(f'{REPO}/verktyg/nyhetsbrev/nyhetsbrev-ordtraning.html') as f:
    mail = f.read()

# HEAD: allt till och med <body ...>-raden. FOOT: </body></html>.
m = re.search(r'^(.*<body[^>]*>)(.*)(</body>\s*</html>\s*)$', mail, re.S)
head, body, foot = m.group(1), m.group(2), m.group(3)

def data_uri(namn):
    with open(f'{REPO}/public/nyhetsbrev/{namn}', 'rb') as f:
        rå = f.read()
    if namn == 'app.png':
        # Stor skärmdump utan genomskinlighet: JPEG håller nere sidstorleken.
        from PIL import Image
        im = Image.open(io.BytesIO(rå)).convert('RGB')
        buf = io.BytesIO()
        im.save(buf, 'JPEG', quality=86)
        return 'data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode()
    return 'data:image/png;base64,' + base64.b64encode(rå).decode()

for namn in ['app.png', 'fejs1.png', 'fejs10.png', 'david.png']:
    url = f'https://www.hpakuten.se/nyhetsbrev/{namn}'
    body = body.replace(f'src="{url}"', f'src="{data_uri(namn)}" data-mailsrc="{url}"')

with open(f'{REPO}/verktyg/nyhetsbrev/editor-shell.html') as f:
    skal = f.read()

sida = (skal
        .replace('__HEAD__', json.dumps(head, ensure_ascii=False))
        .replace('__FOOT__', json.dumps(foot, ensure_ascii=False))
        .replace('__PREVIEW__', body))
with open(UT, 'w') as f:
    f.write(sida)
print(f'sida byggd, {len(sida) // 1024} kB')
