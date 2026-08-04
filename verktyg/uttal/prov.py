# Jämför två sätt att få fram svenskt uttal av ett enskilt ord ur ElevenLabs.
#
#   A) Ordet ensamt. Modellen gissar språk på ett enda ord, vilket gör att ord
#      som även finns i engelskan riskerar att läsas på engelska.
#   B) Ordet inbäddat i en svensk mening, utklippt med teckenexakta
#      tidsstämplar. Meningen tvingar fram svenskt uttal.
#
# Nyckeln läses ur miljön (ELEVENLABS_API_KEY) eller /root/.eleven_key och
# skrivs aldrig till någon fil i repot.
import base64
import json
import os
import subprocess
import sys
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

UT = Path('/tmp/claude-0/-home-user-HP/3c43ea54-e9ce-53f4-8b83-bbb79026c93d/scratchpad/el')
MODELL = 'eleven_multilingual_v2'
BARARE = 'Ordet är {ord}.'  # svensk kontext runt ordet

ROSTER = {
    'malin': 'zyfJspwEDo0sxPeFmtsn',
    'david': 'LJGqDlSQqFnmhbStEO8I',
    'karin': '2z4pujvcLHrr5ilDhLnD',
    'christer': 'CpPiT1LUZxBP5fFkxF9r',
}

ORD = ['skärskåda', 'nyckfull', 'hörsägen', 'vederhäftig', 'parlör',
       'genre', 'stringent', 'ljum', 'anletsdrag', 'självsvåldig', 'ackja']


def nyckel():
    n = os.environ.get('ELEVENLABS_API_KEY')
    if not n:
        n = Path('/root/.eleven_key').read_text().strip()
    return n


def anropa(vag, kropp, forsok=6):
    """Kontot har låg gräns för samtidiga anrop, så 429 backas av och görs om."""
    for n in range(forsok):
        req = urllib.request.Request(
            f'https://api.elevenlabs.io/v1/{vag}',
            data=json.dumps(kropp).encode(),
            headers={'xi-api-key': nyckel(), 'Content-Type': 'application/json'},
        )
        try:
            with urllib.request.urlopen(req, timeout=180) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code in (429, 500, 502, 503) and n < forsok - 1:
                time.sleep(2 ** n)
                continue
            raise


def tala_rakt(rost_id, ord_, mal):
    kropp = {'text': ord_, 'model_id': MODELL,
             'voice_settings': {'stability': 0.5, 'similarity_boost': 0.75, 'speed': 0.92}}
    mal.write_bytes(anropa(f'text-to-speech/{rost_id}', kropp))


def tala_barare(rost_id, ord_, mal):
    """Läser hela meningen och klipper ut just ordet med hjälp av alignment."""
    text = BARARE.format(ord=ord_)
    kropp = {'text': text, 'model_id': MODELL,
             'voice_settings': {'stability': 0.5, 'similarity_boost': 0.75, 'speed': 0.92}}
    svar = json.loads(anropa(f'text-to-speech/{rost_id}/with-timestamps', kropp))
    rå = base64.b64decode(svar['audio_base64'])
    tmp = mal.with_suffix('.hel.mp3')
    tmp.write_bytes(rå)

    a = svar['alignment']
    tecken = a['characters']
    start = a['character_start_times_seconds']
    slut = a['character_end_times_seconds']
    i = text.index(ord_)
    j = i + len(ord_)
    # Lite marginal så att inledande och avslutande konsonanter kommer med.
    t0 = max(0.0, start[i] - 0.06)
    t1 = min(slut[j - 1] + 0.12, slut[-1])
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', str(tmp),
                    '-ss', f'{t0:.3f}', '-to', f'{t1:.3f}',
                    '-af', 'afade=t=in:st=0:d=0.02,afade=t=out:st=%.3f:d=0.05' % max(0.0, t1 - t0 - 0.05),
                    '-c:a', 'libmp3lame', '-b:a', '128k', '-ar', '44100', '-ac', '1', str(mal)],
                   check=True)
    tmp.unlink()


def bygg(rost_namn, metod):
    rost_id = ROSTER[rost_namn]
    katalog = UT / f'{rost_namn}-{metod}'
    katalog.mkdir(parents=True, exist_ok=True)
    fn = tala_rakt if metod == 'rakt' else tala_barare

    def en(ord_):
        mal = katalog / f'{ord_}.mp3'
        if not mal.exists():
            fn(rost_id, ord_, mal)
        return mal

    with ThreadPoolExecutor(max_workers=2) as ex:
        filer = list(ex.map(en, ORD))

    # Sätt ihop till ett smakprov med paus mellan orden.
    tyst = UT / 'tyst.mp3'
    if not tyst.exists():
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'lavfi',
                        '-i', 'anullsrc=r=44100:cl=mono', '-t', '0.7',
                        '-c:a', 'libmp3lame', '-b:a', '128k', str(tyst)], check=True)
    lista = UT / f'lista-{rost_namn}-{metod}.txt'
    rader = []
    for f in filer:
        rader += [f"file '{f}'", f"file '{tyst}'"]
    lista.write_text('\n'.join(rader))
    slutfil = UT / f'uttal-{rost_namn}-{metod}.mp3'
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0',
                    '-i', str(lista), '-c:a', 'libmp3lame', '-b:a', '128k',
                    '-ar', '44100', '-ac', '1', str(slutfil)], check=True)
    print('klar:', slutfil.name)


if __name__ == '__main__':
    UT.mkdir(parents=True, exist_ok=True)
    for rost in sys.argv[1].split(','):
        for metod in sys.argv[2].split(','):
            bygg(rost, metod)
