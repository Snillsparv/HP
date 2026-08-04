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
BARARE = 'Nästa ord: <break time="0.5s" /> {ord}.'  # garanterad paus före ordet

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


def tala_sv(rost_id, ord_, mal):
    """Ordet ensamt, men med språket låst till svenska via language_code.
    Kräver turbo/flash-modellerna; multilingual_v2 saknar parametern."""
    kropp = {'text': ord_, 'model_id': 'eleven_turbo_v2_5', 'language_code': 'sv',
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
    start = a['character_start_times_seconds']
    i = text.index(ord_)
    # Klipp i tystnaden före ordet i stället för vid tidsstämpeln: leta upp
    # sista tysta luckan som slutar strax före ordets start.
    det = subprocess.run(['ffmpeg', '-i', str(tmp), '-af',
                          'silencedetect=noise=-32dB:d=0.06', '-f', 'null', '-'],
                         capture_output=True, text=True).stderr
    tysta = []
    st = None
    for rad in det.splitlines():
        if 'silence_start:' in rad:
            st = float(rad.split('silence_start:')[1].strip())
        elif 'silence_end:' in rad and st is not None:
            en = float(rad.split('silence_end:')[1].split('|')[0].strip())
            tysta.append((st, en))
            st = None
    ordstart = start[i]
    # Break-taggen ger en rejäl tystnad före ordet. Klipp vid dess slut med
    # god marginal; faller tillbaka på tidsstämpeln minus en bred marginal.
    t0 = max(0.0, ordstart - 0.25)
    kandidater = [(a0, a1) for a0, a1 in tysta if a1 - a0 >= 0.15 and a0 <= ordstart + 0.05]
    if kandidater:
        a0, a1 = kandidater[-1]
        t0 = max(0.0, min(a1 - 0.08, ordstart - 0.02))
    # Behåll allt till slutet: ordet ligger sist i meningen, så bara den
    # avslutande tystnaden trimmas bort.
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', str(tmp),
                    '-ss', f'{t0:.3f}',
                    '-af', 'areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.15,areverse,'
                           'afade=t=in:st=0:d=0.015,apad=pad_dur=0.08',
                    '-c:a', 'libmp3lame', '-b:a', '128k', '-ar', '44100', '-ac', '1', str(mal)],
                   check=True)
    tmp.unlink()


def bygg(rost_namn, metod):
    rost_id = ROSTER[rost_namn]
    katalog = UT / f'{rost_namn}-{metod}'
    katalog.mkdir(parents=True, exist_ok=True)
    fn = {'rakt': tala_rakt, 'sv': tala_sv, 'barare': tala_barare}[metod]

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
