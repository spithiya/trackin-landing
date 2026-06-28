import Nav from './components/Nav';
import BackgroundAnimation from './components/BackgroundAnimation';
import FeaturesSection from './components/FeaturesSection';

export default function Home() {
  return (
    <>
      <Nav />
      <BackgroundAnimation opacity={0.65} />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section id="home" className="min-h-screen relative overflow-hidden bg-background flex flex-col">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="orb-a absolute top-0 right-0 w-[520px] h-[520px] rounded-full blur-[150px]" style={{ background: 'hsl(255 90% 65%)', opacity: 0.11 }} />
          <div className="orb-b absolute top-1/3 -left-20 w-[420px] h-[420px] rounded-full blur-[130px]" style={{ background: 'hsl(235 80% 60%)', opacity: 0.08 }} />
          <div className="orb-c absolute bottom-10 left-1/3 w-[380px] h-[380px] rounded-full blur-[120px]" style={{ background: 'hsl(268 55% 52%)', opacity: 0.07 }} />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
          {/* Audience label */}
          <div
            className="animate-fade-rise mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs tracking-widest uppercase"
            style={{ borderColor: 'hsl(255 90% 65% / 0.35)', color: 'hsl(255 90% 75%)', background: 'hsl(255 90% 65% / 0.08)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(255 90% 65%)', boxShadow: '0 0 6px hsl(255 90% 65%)' }} />
            For K-12 learning center owners
          </div>

          <h1
            className="animate-fade-rise text-5xl sm:text-6xl md:text-7xl leading-[1.0] max-w-4xl font-normal text-foreground"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-2px' }}
          >
            Stop Fighting Spreadsheets.{' '}
            <em className="not-italic" style={{ color: 'hsl(255 90% 72%)', textShadow: '0 0 60px hsl(255 90% 65% / 0.4)' }}>
              Start Growing
            </em>{' '}
            <em className="not-italic text-muted-foreground">Your Learning Center.</em>
          </h1>

          <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-xl mt-8 leading-relaxed">
            BrightMind replaces the chaos of paper logs and messy spreadsheets with a single,
            foolproof operations platform designed specifically for K-12 learning centers.
          </p>

          <div className="animate-fade-rise-delay-2 flex flex-col sm:flex-row items-center gap-5 mt-12">
            <a
              href="#contact"
              className="liquid-glass rounded-full px-14 py-5 text-base text-foreground hover:scale-[1.03] transition-transform cursor-pointer"
              style={{ boxShadow: '0 0 32px hsl(255 90% 65% / 0.2)' }}
            >
              Secure Early Access
            </a>
            <a href="#features" className="text-sm transition-colors underline underline-offset-4 cursor-pointer" style={{ color: 'hsl(255 90% 72%)' }}>
              See What&apos;s Inside
            </a>
          </div>

          <p className="animate-fade-rise-delay-2 text-xs text-muted-foreground mt-8 tracking-wide">
            Product dashboard — coming soon
          </p>

          {/* Scroll hint */}
          <div className="absolute bottom-10 flex flex-col items-center gap-2" style={{ opacity: 0.35 }}>
            <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
            <svg viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-6 text-muted-foreground">
              <rect x="1" y="1" width="14" height="22" rx="7" />
              <circle cx="8" cy="7" r="2" fill="currentColor" stroke="none" className="animate-bounce" style={{ animationDuration: '1.8s' }} />
            </svg>
          </div>
        </div>
      </section>

      {/* ── The Chaos / Problem ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-background py-32">
        {/* Orbs — deep muted indigo + faint amber to signal warning */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="orb-b absolute -top-20 left-0 w-[500px] h-[500px] rounded-full blur-[150px]" style={{ background: 'hsl(240 40% 30%)', opacity: 0.14 }} />
          <div className="orb-c absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full blur-[140px]" style={{ background: 'hsl(255 35% 35%)', opacity: 0.10 }} />
          <div className="orb-a absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full blur-[120px]" style={{ background: 'hsl(38 70% 45%)', opacity: 0.05 }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-8">
          <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-7">
            The spreadsheet nightmare
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-normal text-foreground leading-[1.0] max-w-3xl mb-20"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1.5px' }}
          >
            One Data Entry Error Shouldn&apos;t Spiral Your Business{' '}
            <em className="not-italic text-muted-foreground">Out of Control.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: 'The reality',
                body: 'Student attendance, staff hours, and payroll all live in separate spreadsheets — and by end of week they disagree with each other.',
                accent: 'hsl(38 80% 55%)',
              },
              {
                label: 'The failure mode',
                body: 'One wrong cell cascades. Hours logged incorrectly. Student progress lost. Payroll miscalculated. Asking someone to help fix it only creates more errors.',
                accent: 'hsl(0 75% 60%)',
              },
              {
                label: 'The cost',
                body: 'Owners spend more time fighting admin work than running their centers. Manual data systems aren\'t just inefficient — they\'re inevitable points of failure.',
                accent: 'hsl(255 70% 68%)',
              },
            ].map(({ label, body, accent }) => (
              <div key={label} className="liquid-glass rounded-2xl p-8 flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
                  <span className="text-xs tracking-widest uppercase" style={{ color: accent }}>{label}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features / Pillars ──────────────────────────────── */}
      <FeaturesSection />

      {/* ── About — Founders + Mission ──────────────────────── */}
      <section id="about" className="relative overflow-hidden bg-background py-32">
        {/* Orbs — warm purple/violet */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="orb-a absolute -top-10 left-0 w-[520px] h-[520px] rounded-full blur-[150px]" style={{ background: 'hsl(275 65% 60%)', opacity: 0.11 }} />
          <div className="orb-b absolute top-1/2 right-0 w-[440px] h-[440px] rounded-full blur-[130px]" style={{ background: 'hsl(255 70% 55%)', opacity: 0.09 }} />
          <div className="orb-c absolute bottom-0 right-1/3 w-[360px] h-[360px] rounded-full blur-[120px]" style={{ background: 'hsl(285 50% 52%)', opacity: 0.07 }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-8">
          {/* ── Founders ── */}
          <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-7">Our story</p>
          <h2
            className="text-5xl sm:text-6xl font-normal text-foreground leading-[0.95] mb-16 max-w-2xl"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1.5px' }}
          >
            Built From{' '}
            <em className="not-italic text-muted-foreground">Personal Pain.</em>
          </h2>

          {/* Founder quote */}
          <blockquote className="liquid-glass rounded-2xl p-10 mb-14 relative">
            <svg viewBox="0 0 40 30" fill="currentColor" className="absolute top-8 left-8 w-8 h-6 text-muted-foreground opacity-20">
              <path d="M0 30V18C0 8 6 2 18 0l2 4C12 6 9 10 9 14h7v16H0zm22 0V18c0-10 6-16 18-18l2 4c-8 2-11 6-11 10h7v16H22z" />
            </svg>
            <p className="text-lg sm:text-xl text-foreground leading-relaxed pl-4">
              As a Kumon center owner, I loved watching my students succeed. But behind the scenes,
              the daily operations were a nightmare of paper logs, scattered spreadsheets, and endless
              sticky notes. I was tracking payroll, student analytics, parent reports, and staff
              timesheets across five different places.
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed pl-4 mt-5">
              Then, the inevitable happened. A single data entry mistake spiraled out of control.
              Hours were logged incorrectly, student tracking was lost, and trying to get someone
              else to help fix the messy spreadsheets only created more mistakes. I realized I was
              spending more time fighting manual admin work than actually running my business.
            </p>
            <p
              className="text-xl sm:text-2xl text-foreground leading-relaxed pl-4 mt-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              That was my breaking point. I knew there had to be a better way — so I built BrightMind.
            </p>
          </blockquote>

          {/* Founder cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {[
              {
                initials: 'ZL',
                name: 'Zehan',
                role: 'Co-Founder',
                bio: 'Math & CS student at NYU. 8+ years as a Kumon student — giving him a firsthand understanding of what parents expect and what students need. A tech educator who has spoken at national conferences, inspiring 20,000+ students and professionals to leverage AI and app development for societal impact.',
              },
              {
                initials: 'SP',
                name: 'Samar',
                role: 'Co-Founder',
                bio: '10 years as a Kumon student (ages 5–15). Experienced staff tutor who managed a fast-paced learning center, mentored 150+ students in math and reading, and logged 1,000+ hours overseeing worksheet grading and academic record entries. She knows the daily reality of center operations from the inside.',
              },
            ].map(({ initials, name, role, bio }) => (
              <div key={initials} className="liquid-glass rounded-2xl p-8 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-base font-normal flex-shrink-0"
                    style={{
                      fontFamily: 'var(--font-display)',
                      background: 'hsl(255 90% 65% / 0.12)',
                      border: '1px solid hsl(255 90% 65% / 0.25)',
                      color: 'hsl(255 90% 75%)',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="text-foreground font-medium">{name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>

          {/* ── Mission & Vision ── */}
          <div className="border-t pt-16" style={{ borderColor: 'hsl(240 12% 20%)' }}>
            <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-7">What we stand for</p>
            <h3
              className="text-4xl sm:text-5xl font-normal text-foreground leading-[0.95] mb-10 max-w-2xl"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1.2px' }}
            >
              Our Vision for the Future of{' '}
              <em className="not-italic text-muted-foreground">Learning Centers.</em>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              We believe in protecting and elevating the quality of care in K-12 education.
              We want to empower staff to focus entirely on students rather than paperwork,
              teach students capability through seamless self-check-ins, and allow owners to
              automate repetitive tasks so they can spend less time on ad hoc admin work and
              more time growing their centers.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact / CTA ───────────────────────────────────── */}
      <section id="contact" className="min-h-screen relative overflow-hidden bg-background flex flex-col">
        {/* Orbs — cool blue-violet, minimal */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="orb-a absolute top-10 right-10 w-[460px] h-[460px] rounded-full blur-[140px]" style={{ background: 'hsl(240 70% 55%)', opacity: 0.10 }} />
          <div className="orb-b absolute bottom-20 -left-20 w-[400px] h-[400px] rounded-full blur-[130px]" style={{ background: 'hsl(260 60% 50%)', opacity: 0.07 }} />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 py-32 text-center max-w-2xl mx-auto w-full">
          <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-7">
            Private beta — limited spots
          </p>
          <h2
            className="text-5xl sm:text-6xl font-normal text-foreground leading-[0.95] mb-6"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1.5px' }}
          >
            Lock in early access.{' '}
            <em className="not-italic" style={{ color: 'hsl(255 90% 72%)', textShadow: '0 0 60px hsl(255 90% 65% / 0.4)' }}>
              Save big forever.
            </em>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-lg">
            We are currently in private beta. Join the waitlist today to secure exclusive
            founding-member pricing — up to 50% off — when we launch. Spots are limited.
          </p>

          {/* Email capture */}
          <form className="w-full flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="email"
              placeholder="name@yourcenter.com"
              className="flex-1 liquid-glass rounded-full px-6 py-4 text-sm text-foreground placeholder:text-muted-foreground outline-none"
              style={{ minWidth: 0 }}
            />
            <button
              type="submit"
              className="liquid-glass rounded-full px-8 py-4 text-sm text-foreground whitespace-nowrap hover:scale-[1.03] transition-transform"
              style={{ boxShadow: '0 0 28px hsl(255 90% 65% / 0.2)' }}
            >
              Secure My Discounted Access
            </button>
          </form>

          <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
            🎁 Joining the waitlist is 100% free. No credit card required to lock in your lifetime discount.
          </p>

          {/* Direct contact */}
          <div className="w-full mt-16 pt-10" style={{ borderTop: '1px solid hsl(240 12% 20%)' }}>
            <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-6">
              Or reach us directly
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {[
                { name: 'Samar Pithiya', phone: '302-521-9375', email: 'samar.pithiya@gmail.com', photo: '/samar.png' },
                { name: 'Zehan Li',      phone: '484-477-6726', email: 'zehanli2025@gmail.com',   photo: '/zehan.png' },
              ].map(({ name, phone, email, photo }) => (
                <div key={name} className="liquid-glass rounded-2xl p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-4 mb-1">
                    <img
                      src={photo}
                      alt={name}
                      className="w-20 h-20 rounded-full object-cover object-center flex-shrink-0"
                      style={{ border: '1px solid hsl(255 90% 65% / 0.25)', objectPosition: 'center 15%' }}
                    />
                    <p className="text-foreground font-medium" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>{name}</p>
                  </div>
                  <a
                    href={`tel:${phone.replace(/-/g, '')}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 flex-shrink-0">
                      <path d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-7.18 0-13-5.82-13-13V3.5z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {phone}
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 flex-shrink-0">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {email}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
