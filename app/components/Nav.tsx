'use client';

import { useState, useEffect } from 'react';

type Section = 'home' | 'flow' | 'insights' | 'about' | 'contact';

const links: { href: string; label: string; key: Section }[] = [
  { href: '#home',     label: 'Home',     key: 'home' },
  { href: '#flow',     label: 'Flow',     key: 'flow' },
  { href: '#insights', label: 'Insights', key: 'insights' },
  { href: '#about',    label: 'About',    key: 'about' },
  { href: '#contact',  label: 'Pricing',  key: 'contact' },
];

export default function Nav() {
  const [active, setActive] = useState<Section>('home');

  useEffect(() => {
    const ids = links.map(l => l.key);
    const track = () => {
      const mid = window.innerHeight / 2;
      let current: Section = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= mid) current = id as Section;
      }
      setActive(current);
    };
    window.addEventListener('scroll', track, { passive: true });
    track();
    return () => window.removeEventListener('scroll', track);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: 'hsl(48 24% 96% / 0.86)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex flex-row items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <span
            className="w-3 h-3 rotate-45 flex-shrink-0"
            style={{ background: 'var(--primary)' }}
            aria-hidden="true"
          />
          <span className="text-xl font-extrabold tracking-tight text-foreground">
            TrackIn<sup className="text-[10px] align-super font-medium">®</sup>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.slice(1).map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                active === link.key
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="account-trigger relative">
          <button
            type="button"
            className="flex items-center gap-1.5 text-sm font-medium text-foreground border rounded-full px-4 py-2 cursor-pointer"
            style={{ borderColor: 'var(--border)' }}
          >
            Account
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3 h-3">
              <path d="M2.5 4.5L6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="account-menu absolute right-0 top-full mt-2 w-40 card overflow-hidden shadow-lg">
            <a
              href="https://app.trackins.us/auth/login"
              className="block px-4 py-3 text-sm text-foreground hover:bg-[var(--muted)] transition-colors border-b"
              style={{ borderColor: 'var(--border)' }}
            >
              Sign in
            </a>
            <a
              href="https://app.trackins.us/auth/signup"
              className="block px-4 py-3 text-sm text-foreground hover:bg-[var(--muted)] transition-colors"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
