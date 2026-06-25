'use client';

import { useEffect } from 'react';

const pillars: {
  num: string;
  title: string;
  description: string;
  Icon: () => React.ReactElement;
}[] = [
  {
    num: '01',
    title: 'Foolproof In-Person Operations',
    description:
      'Easy student self-check-in and check-out so kids build independence while every attendance log is captured digitally — automatically, with zero staff intervention.',
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-7 h-7">
        <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Automated Parent Progress Reports',
    description:
      'Keep parents informed on a monthly or custom schedule with academic growth summaries generated automatically — no emails to draft, no spreadsheets to export.',
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-7 h-7">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'All-in-One Admin Dashboard',
    description:
      'Staff timesheets, payroll tracking, and student analytics in one place — a single source of truth that replaces five fragmented spreadsheets with one clear view.',
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-7 h-7">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

// React import needed for JSX in Icon arrow functions
import React from 'react';

export default function FeaturesSection() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.feature-pillar').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="features" className="min-h-screen relative overflow-hidden bg-background flex flex-col">
      {/* Orbs — indigo set, same as established palette */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb-a absolute -top-10 right-0 w-[550px] h-[550px] rounded-full blur-[160px]"
          style={{ background: 'hsl(255 90% 65%)', opacity: 0.12 }}
        />
        <div
          className="orb-b absolute top-1/2 -left-40 w-[480px] h-[480px] rounded-full blur-[140px]"
          style={{ background: 'hsl(270 60% 55%)', opacity: 0.09 }}
        />
        <div
          className="orb-c absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[130px]"
          style={{ background: 'hsl(230 75% 60%)', opacity: 0.08 }}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-5xl mx-auto px-8 py-28 w-full">
        <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-6">
          What we built
        </p>
        <h2
          className="text-5xl sm:text-6xl font-normal text-foreground leading-[0.95] mb-20 max-w-2xl"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1.5px' }}
        >
          Everything your center needs,{' '}
          <em className="not-italic text-muted-foreground">automated.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className="feature-pillar scroll-reveal liquid-glass rounded-2xl p-8 flex flex-col gap-6"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="text-xs tracking-[0.22em] text-muted-foreground uppercase">{p.num}</span>
                <div className="text-muted-foreground">
                  <p.Icon />
                </div>
              </div>
              <h3
                className="text-2xl font-normal text-foreground leading-tight"
                style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.5px' }}
              >
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
