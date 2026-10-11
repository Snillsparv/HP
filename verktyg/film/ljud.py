# Syntetiserar filmens ljudeffekter till ljud.wav (48 kHz stereo), tajmade
# mot händelserna i film.html: tryck på skärmen, sidbyten, kort som fälls ut,
# planens steg, den blå bollen som fyller bilden och konfettin. Allt ligger
# lågt under rösten.
#   python3 verktyg/film/ljud.py
import math
import os
import wave

import numpy as np

SR = 48000
LANGD = 32.05
HERE = os.path.dirname(os.path.abspath(__file__))
rng = np.random.default_rng(4136)


def db(x):
    return 10 ** (x / 20)


def tid(d):
    return np.arange(int(d * SR)) / SR


def bandpass(x, f0, q):
    """Biquad-bandpass (RBJ) där mittfrekvensen f0 får variera per sampel."""
    f0 = np.broadcast_to(np.asarray(f0, dtype=float), x.shape)
    y = np.zeros_like(x)
    x1 = x2 = y1 = y2 = 0.0
    for n in range(len(x)):
        w = 2 * math.pi * f0[n] / SR
        alfa = math.sin(w) / (2 * q)
        b0, b2 = alfa, -alfa
        a0, a1, a2 = 1 + alfa, -2 * math.cos(w), 1 - alfa
        yn = (b0 * x[n] + b2 * x2 - a1 * y1 - a2 * y2) / a0
        x2, x1 = x1, x[n]
        y2, y1 = y1, yn
        y[n] = yn
    return y


def env(n, a, d, kurva=4.0):
    """Snabb attack, exponentiell avklingning."""
    t = np.arange(n) / SR
    e = np.minimum(1, t / max(a, 1e-4)) * np.exp(-kurva * np.maximum(0, t - a) / max(d, 1e-4))
    return e


def pop(f0=620, d=0.12, niva=-24):
    t = tid(d)
    f = f0 * (0.62 + 0.38 * np.exp(-t / 0.03))
    fas = 2 * math.pi * np.cumsum(f) / SR
    s = np.sin(fas) + 0.25 * np.sin(2 * fas)
    return s * env(len(t), 0.003, d) * db(niva)


def tryck(niva=-25):
    d = 0.05
    t = tid(d)
    klick = bandpass(rng.standard_normal(len(t)), 3200, 2.5) * env(len(t), 0.0008, 0.012, 3)
    kropp = np.sin(2 * math.pi * 180 * t) * env(len(t), 0.001, 0.03, 4)
    return (klick * 0.9 + kropp * 0.35) * db(niva)


def svep(d=0.32, f_fran=700, f_till=3200, niva=-27, q=1.6):
    t = tid(d)
    p = t / d
    f = f_fran * (f_till / f_fran) ** p
    s = bandpass(rng.standard_normal(len(t)), f, q)
    hull = np.sin(math.pi * np.clip(p, 0, 1)) ** 1.6
    return s * hull / (np.max(np.abs(s)) + 1e-9) * db(niva)


def pling(fs=(1318.5, 1975.5), d=0.5, niva=-27):
    t = tid(d)
    s = sum(np.sin(2 * math.pi * f * t) / (i + 1) for i, f in enumerate(fs))
    return s * env(len(t), 0.004, d, 5) * db(niva)


def fel(niva=-28):
    d = 0.18
    t = tid(d)
    f = 240 - 60 * t / d
    s = np.sin(2 * math.pi * np.cumsum(f) / SR)
    return s * env(len(t), 0.004, d, 4) * db(niva)


def stigande(niva=-27):
    ut = np.zeros(int(0.6 * SR))
    for i, f in enumerate((987.8, 1318.5, 1975.5)):
        p = pling((f, f * 2), 0.35, niva - 2 * (2 - i))
        o = int(i * 0.075 * SR)
        ut[o:o + len(p)] += p[: len(ut) - o]
    return ut


def duns(niva=-15):
    d = 0.6
    t = tid(d)
    f = 72 * (0.6 + 0.4 * np.exp(-t / 0.08))
    s = np.sin(2 * math.pi * np.cumsum(f) / SR) * env(len(t), 0.003, 0.45, 4)
    luft = bandpass(rng.standard_normal(len(t)), 500, 0.8) * env(len(t), 0.002, 0.12, 5) * 0.25
    return (s + luft) * db(niva)


def glitter(d=0.9, niva=-31):
    ut = np.zeros(int(d * SR))
    for k in range(26):
        f = 2400 + rng.random() * 3600
        p = pling((f,), 0.18, niva - rng.random() * 6)
        o = int(rng.random() * (d - 0.2) * SR)
        ut[o:o + len(p)] += p
    return ut


def tick(niva=-30):
    d = 0.03
    t = tid(d)
    return np.sin(2 * math.pi * 2100 * t) * env(len(t), 0.001, 0.02, 5) * db(niva)


# Händelserna i filmen: (tid, ljud, panorering -1 vänster till 1 höger).
H = []
# Introt: bokstäverna, .se och utzoomningen.
for i, t0 in enumerate([0.62, 0.96, 1.16, 1.28, 1.36, 1.50, 1.58, 1.66]):
    H.append((t0 + 0.04, tick(-33), -0.3 + i * 0.08))
H.append((0.95, pop(520, 0.14, -30), 0))
H.append((1.82, pop(760, 0.1, -29), 0.3))
H.append((2.12, svep(0.9, 300, 2200, -25, 1.2), 0))
# Kameran går in i helskärm, ut från minnesregeln och till sist ut till telefonen.
H.append((3.85, svep(0.8, 300, 1800, -31, 1.2), 0))
H.append((24.0, svep(0.55, 1800, 600, -33, 1.2), 0))
H.append((27.4, svep(0.7, 1600, 400, -32, 1.2), 0))
# Tryck på skärmen.
for t0 in [7.18, 8.1, 10.86, 14.62, 15.86, 19.84, 21.34]:
    H.append((t0, tryck(), 0))
# Sidbyten (och ett steg tillbaka till kartan).
for t0 in [5.58, 7.3, 10.06, 11.95, 14.84, 16.25, 17.9, 19.95, 24.15]:
    H.append((t0 + 0.02, svep(0.36, 900, 3400, -31), 0.15))
# Rätt svar, kartan som växer och ordkorten.
H.append((10.9, pling(), 0))
H.append((15.9, pling(), 0))
H.append((16.78, stigande(), 0))
for i, t0 in enumerate([23.06, 23.51]):
    H.append((t0, pop(580 + 90 * i), -0.15 + 0.3 * i))
# Planen: ett mjukt klick när sidan stannar på varje steg.
for i, t0 in enumerate([25.98, 26.98, 27.88]):
    H.append((t0, pop(640 + 80 * i, 0.07, -33), 0))
# Steg 5 pulserar, växer ut ur telefonen och fyller bilden med blått.
H.append((28.12, pop(820, 0.1, -29), 0))
H.append((28.32, svep(0.5, 400, 2600, -26, 1.3), 0))
H.append((28.78, duns(-17), 0))
# Slutet.
H.append((28.95, svep(0.7, 350, 2400, -28, 1.2), 0))
H.append((29.62, glitter(), 0))
H.append((29.64, pop(520, 0.16, -27), 0))
H.append((30.74, pop(780, 0.12, -27), 0))
H.append((30.76, glitter(0.6, -33), 0))

ut = np.zeros((int(LANGD * SR) + SR, 2))
for t0, s, pan in H:
    o = int(t0 * SR)
    v = math.cos((pan + 1) * math.pi / 4)
    h = math.sin((pan + 1) * math.pi / 4)
    n = min(len(s), len(ut) - o)
    ut[o:o + n, 0] += s[:n] * v * math.sqrt(2)
    ut[o:o + n, 1] += s[:n] * h * math.sqrt(2)
ut = ut[: int(LANGD * SR)]
topp = np.max(np.abs(ut))
if topp > 0.7:
    ut *= 0.7 / topp
pcm = (np.clip(ut, -1, 1) * 32767).astype('<i2')
with wave.open(os.path.join(HERE, 'ljud.wav'), 'wb') as w:
    w.setnchannels(2)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes(pcm.tobytes())
print('ljud.wav klar,', len(H), 'händelser, topp', round(20 * math.log10(max(topp, 1e-9)), 1), 'dBFS')
