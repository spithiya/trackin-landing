'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  cx: number;    // orbit centre x, 0–1 relative to canvas
  cy: number;    // orbit centre y, 0–1 relative to canvas
  orbitR: number;
  angle: number;
  speed: number; // radians per frame — very small
  dotR: number;  // core dot radius in px
  alpha: number;
  hue: number;   // 240–280 (blue → violet)
}

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    cx: Math.random(),
    cy: Math.random(),
    orbitR: 55 + Math.random() * 170,
    angle: Math.random() * Math.PI * 2,
    // slow: full revolution in 20–55 s at 60 fps
    speed: (0.00019 + Math.random() * 0.00055) * (Math.random() > 0.5 ? 1 : -1),
    dotR: 0.6 + Math.random() * 1.5,
    alpha: 0.12 + Math.random() * 0.28,
    hue: 205 + Math.random() * 25,
  }));
}

export default function BackgroundAnimation({ opacity = 0.75 }: { opacity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let raf: number;
    const particles = makeParticles(52);

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const tick = () => {
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        p.angle += p.speed;
        const x = p.cx * W + Math.cos(p.angle) * p.orbitR;
        const y = p.cy * H + Math.sin(p.angle) * p.orbitR;

        // soft glow halo
        const glowR = p.dotR * 9;
        const grd = ctx.createRadialGradient(x, y, 0, x, y, glowR);
        grd.addColorStop(0, `hsla(${p.hue}, 80%, 52%, ${p.alpha})`);
        grd.addColorStop(1, `hsla(${p.hue}, 80%, 52%, 0)`);
        ctx.beginPath();
        ctx.arc(x, y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // bright core
        ctx.beginPath();
        ctx.arc(x, y, p.dotR, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 90%, 38%, ${Math.min(p.alpha + 0.18, 0.9)})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ width: '100vw', height: '100vh', opacity, zIndex: 1 }}
    />
  );
}
