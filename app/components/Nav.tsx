'use client';

import { useState, useEffect } from 'react';

type Section = 'home' | 'features' | 'about' | 'contact';

const links: { href: string; label: string; key: Section }[] = [
  { href: '#home',     label: 'Home',     key: 'home' },
  { href: '#features', label: 'Features', key: 'features' },
  { href: '#about',    label: 'About',    key: 'about' },
  { href: '#contact',  label: 'Contact',  key: 'contact' },
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
        background: 'hsl(240 15% 8% / 0.78)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid hsl(240 12% 20% / 0.5)',
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex flex-row items-center justify-between">
        <a
          href="#home"
          className="text-3xl tracking-tight text-foreground"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          BrightMind<sup className="text-xs">®</sup>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={`text-sm transition-colors ${
                active === link.key
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
