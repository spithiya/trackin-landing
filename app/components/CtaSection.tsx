'use client';

import { useState } from 'react';

export default function CtaSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-28 md:py-36" style={{ background: 'var(--navy)' }}>
      <div className="max-w-2xl mx-auto px-6 md:px-8 text-center">
        <p className="text-xs font-mono tracking-[0.2em] uppercase mb-7" style={{ color: 'var(--primary)' }}>
          The director&apos;s dashboard
        </p>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.0] mb-6"
          style={{ letterSpacing: '-2px', color: 'var(--navy-text)' }}
        >
          Run your center on a single, reliable record.
        </h2>
        <p className="text-lg leading-relaxed mb-12 max-w-lg mx-auto" style={{ color: 'var(--navy-text-muted)' }}>
          We&apos;re in private beta. Join the waitlist to secure founding-member pricing &mdash; up to 50%
          off &mdash; when we launch. Spots are limited.
        </p>

        {submitted ? (
          <div
            className="rounded-full px-8 py-4 text-sm max-w-md mx-auto"
            style={{ background: 'var(--navy-2)', border: '1px solid var(--navy-border)', color: 'var(--navy-text)' }}
          >
            You&apos;re on the list &mdash; we&apos;ll reach out when we launch.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto mb-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@yourcenter.com"
              className="flex-1 rounded-full px-6 py-3.5 text-sm outline-none"
              style={{ background: 'var(--navy-2)', border: '1px solid var(--navy-border)', color: 'var(--navy-text)', minWidth: 0 }}
            />
            <button
              type="submit"
              className="rounded-full px-8 py-3.5 text-sm font-semibold whitespace-nowrap hover:scale-[1.03] transition-transform cursor-pointer"
              style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
            >
              Secure Early Access
            </button>
          </form>
        )}

        <p className="text-xs" style={{ color: 'var(--navy-text-muted)' }}>
          Live status: Operational &middot; All systems normal
        </p>

        <div className="w-full mt-16 pt-10" style={{ borderTop: '1px solid var(--navy-border)' }}>
          <p className="text-xs font-mono tracking-[0.2em] uppercase mb-6" style={{ color: 'var(--navy-text-muted)' }}>
            Or reach us directly
          </p>
          <div className="flex items-center justify-center gap-4">
            <div
              className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
              style={{ border: '1px solid var(--navy-border)' }}
            >
              <img src="/samar.png" alt="Samar Pithiya" className="w-full h-full object-cover scale-[1.18]" />
            </div>
            <div className="text-left">
              <p className="font-semibold" style={{ color: 'var(--navy-text)' }}>Samar Pithiya</p>
              <div className="flex flex-col sm:flex-row sm:gap-4 mt-1">
                <a href="tel:3025219375" className="text-sm hover:underline" style={{ color: 'var(--navy-text-muted)' }}>
                  302-521-9375
                </a>
                <a href="mailto:samar.pithiya@gmail.com" className="text-sm hover:underline" style={{ color: 'var(--navy-text-muted)' }}>
                  samar.pithiya@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
