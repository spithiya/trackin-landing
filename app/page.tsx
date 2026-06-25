import Nav from './components/Nav';
import BackgroundAnimation from './components/BackgroundAnimation';
import FeaturesSection from './components/FeaturesSection';

export default function Home() {
  return (
    <>
      {/* Sticky nav — sits above every section */}
      <Nav />

      {/* Particle animation fixed over the entire page */}
      <BackgroundAnimation opacity={0.65} />

      {/* ── Hero ────────────────────────────────── */}
      <section id="home" className="min-h-screen relative overflow-hidden bg-background flex flex-col">
        {/* Orbs: electric indigo + blue shifted top-right and left */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="orb-a absolute top-0 right-0 w-[520px] h-[520px] rounded-full blur-[150px]"
            style={{ background: 'hsl(255 90% 65%)', opacity: 0.11 }}
          />
          <div
            className="orb-b absolute top-1/3 -left-20 w-[420px] h-[420px] rounded-full blur-[130px]"
            style={{ background: 'hsl(235 80% 60%)', opacity: 0.08 }}
          />
          <div
            className="orb-c absolute bottom-10 left-1/3 w-[380px] h-[380px] rounded-full blur-[120px]"
            style={{ background: 'hsl(268 55% 52%)', opacity: 0.07 }}
          />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
          {/* Pill badge */}
          <div
            className="animate-fade-rise mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs tracking-widest uppercase"
            style={{
              borderColor: 'hsl(255 90% 65% / 0.35)',
              color: 'hsl(255 90% 75%)',
              background: 'hsl(255 90% 65% / 0.08)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'hsl(255 90% 65%)', boxShadow: '0 0 6px hsl(255 90% 65%)' }}
            />
            Tutoring Center CRM
          </div>

          <h1
            className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] max-w-5xl font-normal text-foreground"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-2.46px' }}
          >
            Where every session builds a{' '}
            <em
              className="not-italic"
              style={{ color: 'hsl(255 90% 72%)', textShadow: '0 0 60px hsl(255 90% 65% / 0.45)' }}
            >
              brighter
            </em>{' '}
            <em className="not-italic text-muted-foreground">mind.</em>
          </h1>

          <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
            We&apos;re building tools for tutoring centers that care — tracking
            sessions, managing staff, and creating space for every student to
            focus, grow, and thrive.
          </p>

          <div className="animate-fade-rise-delay-2 flex flex-col sm:flex-row items-center gap-5 mt-12">
            <a
              href="#features"
              className="liquid-glass rounded-full px-14 py-5 text-base text-foreground hover:scale-[1.03] transition-transform cursor-pointer"
              style={{ boxShadow: '0 0 32px hsl(255 90% 65% / 0.18)' }}
            >
              See Features
            </a>
            <a
              href="#contact"
              className="text-sm transition-colors underline underline-offset-4 cursor-pointer"
              style={{ color: 'hsl(255 90% 72%)' }}
            >
              Get in Touch
            </a>
          </div>

          {/* Subtle scroll hint */}
          <div
            className="animate-fade-rise-delay-2 absolute bottom-10 flex flex-col items-center gap-2"
            style={{ opacity: 0.4 }}
          >
            <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
            <svg viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-6 text-muted-foreground">
              <rect x="1" y="1" width="14" height="22" rx="7" />
              <circle cx="8" cy="7" r="2" fill="currentColor" stroke="none" className="animate-bounce" style={{ animationDuration: '1.8s' }} />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────── */}
      <FeaturesSection />

      {/* ── About ────────────────────────────────── */}
      <section id="about" className="min-h-screen relative overflow-hidden bg-background flex flex-col">
        {/* Orbs: warm purple/violet, mirrored positions from hero */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="orb-a absolute -top-10 left-0 w-[520px] h-[520px] rounded-full blur-[150px]"
            style={{ background: 'hsl(275 65% 60%)', opacity: 0.11 }}
          />
          <div
            className="orb-b absolute top-1/2 right-0 w-[440px] h-[440px] rounded-full blur-[130px]"
            style={{ background: 'hsl(255 70% 55%)', opacity: 0.09 }}
          />
          <div
            className="orb-c absolute bottom-0 right-1/3 w-[360px] h-[360px] rounded-full blur-[120px]"
            style={{ background: 'hsl(285 50% 52%)', opacity: 0.07 }}
          />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center px-8 py-32 max-w-5xl mx-auto w-full">
          <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-7">
            About
          </p>
          <h2
            className="text-5xl sm:text-6xl font-normal text-foreground leading-[0.95] mb-16"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1.5px' }}
          >
            Built for the people who{' '}
            <em className="not-italic text-muted-foreground">show up every day.</em>
          </h2>

          {/* Placeholder cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Our Story',   lines: [3, 4, 4, 3, 2] },
              { label: 'Our Team',    lines: [4, 3, 4, 2, 3] },
              { label: 'Our Mission', lines: [3, 4, 3, 4, 2] },
            ].map(({ label, lines }) => (
              <div key={label} className="liquid-glass rounded-2xl p-8 min-h-[220px] flex flex-col gap-4">
                <p className="text-xs text-muted-foreground tracking-widest uppercase">{label}</p>
                <div className="flex-1 flex flex-col gap-2.5 mt-1">
                  {lines.map((w, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded-full"
                      style={{ width: `${w * 20}%`, background: 'hsl(240 12% 22%)' }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────── */}
      <section id="contact" className="min-h-screen relative overflow-hidden bg-background flex flex-col">
        {/* Orbs: cool blue-violet, minimal — only 2 for a quieter feel */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="orb-a absolute top-10 right-10 w-[460px] h-[460px] rounded-full blur-[140px]"
            style={{ background: 'hsl(240 70% 55%)', opacity: 0.10 }}
          />
          <div
            className="orb-b absolute bottom-20 -left-20 w-[400px] h-[400px] rounded-full blur-[130px]"
            style={{ background: 'hsl(260 60% 50%)', opacity: 0.07 }}
          />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 py-32 max-w-xl mx-auto w-full">
          <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-7">
            Contact
          </p>
          <h2
            className="text-5xl sm:text-6xl font-normal text-foreground leading-[0.95] mb-16 text-center"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1.5px' }}
          >
            Get in{' '}
            <em className="not-italic text-muted-foreground">Touch.</em>
          </h2>

          {/* Placeholder form */}
          <div className="w-full space-y-4">
            {[
              { label: 'Name',    height: 'h-5' },
              { label: 'Email',   height: 'h-5' },
              { label: 'Message', height: 'h-28' },
            ].map(({ label, height }) => (
              <div key={label} className="liquid-glass rounded-xl px-5 py-4">
                <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">{label}</p>
                <div className={`${height} rounded`} />
              </div>
            ))}

            <button
              className="liquid-glass rounded-full px-12 py-4 text-base text-foreground w-full hover:scale-[1.02] transition-transform mt-2"
              style={{ boxShadow: '0 0 24px hsl(255 90% 65% / 0.12)' }}
            >
              Send Message
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
