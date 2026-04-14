// Generate a shareable result image using Canvas API

export function generateResultImage(
  testName: string,
  normered: number,
  score: number,
  total: number,
  subtestScores: { name: string; correct: number; total: number }[]
): Promise<string> {
  return new Promise((resolve) => {
    const W = 1080;
    const H = 1350; // Instagram story ratio
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d')!;

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, '#1e3a5f');
    grad.addColorStop(1, '#0f172a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Decorative circles
    ctx.globalAlpha = 0.06;
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(W * 0.85, H * 0.15, 300, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(W * 0.15, H * 0.75, 250, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;

    // HPAkuten logo
    ctx.font = '700 42px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'left';
    const hpText = 'HP';
    const akutenText = 'Akuten';
    const hpW = ctx.measureText(hpText).width;
    const akutenW = ctx.measureText(akutenText).width;
    const logoTotalW = hpW + akutenW;
    const logoX = (W - logoTotalW) / 2;
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(hpText, logoX, 90);
    ctx.fillStyle = '#3b82f6';
    ctx.fillText(akutenText, logoX + hpW, 90);

    // Test name
    ctx.font = '600 36px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.textAlign = 'center';
    ctx.fillText(testName.toUpperCase(), W / 2, 170);

    // Big normered score
    ctx.font = '800 200px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = '#fff';
    ctx.fillText(normered.toFixed(1), W / 2, 400);

    // "normerad poäng"
    ctx.font = '400 32px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText('normerad poäng', W / 2, 460);

    // Raw score
    ctx.font = '600 48px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = '#94a3b8';
    ctx.fillText(`${score} / ${total} rätt`, W / 2, 540);

    // Subtest bars
    if (subtestScores.length > 0) {
      const barY = 620;
      const barH = 44;
      const barGap = 16;
      const barMaxW = W - 300;
      const barX = 200;

      ctx.font = '700 26px system-ui, -apple-system, sans-serif';
      ctx.textAlign = 'right';

      subtestScores.forEach((st, i) => {
        const y = barY + i * (barH + barGap);
        const pct = st.total > 0 ? st.correct / st.total : 0;
        const fillW = pct * barMaxW;

        // Label
        ctx.fillStyle = '#94a3b8';
        ctx.fillText(st.name, barX - 20, y + barH / 2 + 9);

        // Track
        ctx.fillStyle = 'rgba(255,255,255,0.08)';
        roundRect(ctx, barX, y, barMaxW, barH, 8);

        // Fill
        const barColor = pct >= 0.8 ? '#22c55e' : pct >= 0.6 ? '#3b82f6' : pct >= 0.4 ? '#f59e0b' : '#ef4444';
        ctx.fillStyle = barColor;
        if (fillW > 0) roundRect(ctx, barX, y, Math.max(fillW, 16), barH, 8);

        // Score text
        ctx.fillStyle = '#fff';
        ctx.textAlign = 'center';
        ctx.font = '700 22px system-ui, -apple-system, sans-serif';
        if (fillW > 60) {
          ctx.fillText(`${st.correct}/${st.total}`, barX + fillW / 2, y + barH / 2 + 8);
        } else {
          ctx.textAlign = 'left';
          ctx.fillStyle = '#94a3b8';
          ctx.fillText(`${st.correct}/${st.total}`, barX + fillW + 12, y + barH / 2 + 8);
        }
        ctx.textAlign = 'right';
        ctx.font = '700 26px system-ui, -apple-system, sans-serif';
      });
    }

    // Bottom CTA
    ctx.textAlign = 'center';
    ctx.font = '500 30px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText('Träna gratis på www.hpakuten.se', W / 2, H - 80);

    // Small tagline
    ctx.font = '400 24px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = '#475569';
    ctx.fillText('med Jonas von Essen, 2.0 tolv gånger i rad', W / 2, H - 40);

    resolve(canvas.toDataURL('image/png'));
  });
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  ctx.fill();
}
