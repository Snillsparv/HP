#!/usr/bin/env bash
# Renderar filmen och lägger på ljudet.
#   verktyg/film/bygg.sh <röst.mp3> <ut.mp4> [rutkatalog] [fps] [delar]
#   (rösten finns som verktyg/film/rost.mp3)
# Rutorna renderas i flera parallella delar (render.mjs full) och kodas
# sedan till H.264 i 1080 x 1920. Rösten normaliseras till ungefär -14 LUFS, som
# Instagram, TikTok och YouTube spelar upp den. Effekterna i ljud.wav (ljud.py,
# skapas vid behov) mixas in under rösten. HOPPA_RENDER=1 återanvänder rutorna.
set -euo pipefail
ROST="$(realpath "$1")"; UT="$(realpath -m "$2")"
RUTOR="$(realpath -m "${3:-/tmp/hp-film-rutor}")"
cd "$(dirname "$0")"
FPS="${4:-60}"
DELAR="${5:-3}"
LANGD=$(node -e "const s=require('fs').readFileSync('film.html','utf8');console.log(s.match(/window\.DURATION = ([0-9.]+)/)[1])")

mkdir -p "$RUTOR"
if [ "${HOPPA_RENDER:-}" != "1" ]; then
  pids=()
  for ((i = 0; i < DELAR; i++)); do
    FRAN=$(node -e "console.log(($LANGD * $i / $DELAR).toFixed(4))")
    TILL=$(node -e "console.log(($LANGD * ($i + 1) / $DELAR).toFixed(4))")
    node render.mjs full "$RUTOR" "$FPS" "$FRAN" "$TILL" > "$RUTOR/del$i.log" 2>&1 &
    pids+=($!)
  done
  for p in "${pids[@]}"; do wait "$p"; done
fi

# Ljudet: rösten normaliserad, effekterna (ljud.py) under.
[ -f ljud.wav ] || python3 ljud.py
LJUD=(-i "$ROST")
FILTER="[1:a]loudnorm=I=-13:TP=-2:LRA=9,aresample=48000[rost]"
if [ -f ljud.wav ]; then
  LJUD+=(-i ljud.wav)
  FILTER="$FILTER;[2:a]aresample=48000,volume=1.0[fx];[rost][fx]amix=inputs=2:duration=first:normalize=0,alimiter=limit=0.8:level=false[a]"
else
  FILTER="$FILTER;[rost]alimiter=limit=0.8:level=false[a]"
fi

ffmpeg -hide_banner -loglevel error -y -framerate "$FPS" -i "$RUTOR/f%05d.png" "${LJUD[@]}" \
  -filter_complex "$FILTER" -map 0:v -map "[a]" \
  -c:v libx264 -preset slow -crf 16 -profile:v high -pix_fmt yuv420p -r "$FPS" \
  -c:a aac -b:a 192k -ar 48000 -shortest -movflags +faststart "$UT"
echo "klar: $UT"
