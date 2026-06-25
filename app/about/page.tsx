import Nav from '../components/Nav';
import WaitlistForm from '../components/WaitlistForm';

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M15 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V8l-5-5z" />
        <path d="M15 3v5h5M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Foolproof In-Person Operations',
    description:
      'Easy student self-check-in and check-out so kids build independence while every attendance log is captured digitally — automatically, with zero staff intervention.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 10h8M8 14h5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Automated Parent Progress Reports',
    description:
      'Keep parents informed on a monthly or custom schedule with academic growth summaries generated automatically — no emails to draft, no spreadsheets to export.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 16V10M11 16V7M15 16v-4M19 16v-7" strokeLinecap="round" />
      </svg>
    ),
    title: 'All-in-One Admin Dashboard',
    description:
      'Staff timesheets, payroll tracking, and student analytics in one place — a single source of truth that replaces five fragmented spreadsheets with one clear view.',
  },
];

const founders = [
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
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav active="about" />

      {/* 1. Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-28">
        <p className="text-sm text-muted-foreground tracking-widest uppercase mb-6">
          For K-12 learning center owners
        </p>
        <h1
          className="animate-fade-rise text-5xl sm:text-6xl md:text-7xl leading-[0.95] max-w-4xl font-normal text-foreground"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-2px' }}
        >
          Stop Fighting Spreadsheets.{' '}
          <em className="not-italic text-muted-foreground">Start Growing</em>{' '}
          Your Learning Center.
        </h1>
        <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          BrightMind replaces the chaos of paper logs and messy spreadsheets with a
          single, foolproof operations platform designed specifically for K-12
          learning centers.
        </p>
        <div className="animate-fade-rise-delay-2 mt-10">
          <WaitlistForm buttonText="Secure Early Access" />
        </div>

        {/* Dashboard mockup placeholder */}
        <div className="animate-fade-rise-delay-2 mt-16 w-full max-w-4xl">
          <div className="liquid-glass rounded-3xl aspect-video flex flex-col items-center justify-center gap-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-10 h-10 text-muted-foreground">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M7 16V10M11 16V7M15 16v-4M19 16v-7" strokeLinecap="round" />
            </svg>
            <p className="text-muted-foreground text-sm">Product dashboard — coming soon</p>
          </div>
        </div>
      </section>

      {/* 2. The Chaos Section */}
      <section className="max-w-5xl mx-auto px-6 pb-28 text-center">
        <div
          className="w-px h-16 mx-auto mb-16"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(0 0% 18%), transparent)' }}
        />
        <p className="text-sm text-muted-foreground tracking-widest uppercase mb-6">
          The spreadsheet nightmare
        </p>
        <h2
          className="text-4xl sm:text-5xl font-normal text-foreground mb-12"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1.5px' }}
        >
          One Data Entry Error Shouldn&apos;t{' '}
          <em className="not-italic text-muted-foreground">
            Spiral Your Business Out of Control.
          </em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          <div className="liquid-glass rounded-2xl p-7 flex flex-col gap-4">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">The reality</p>
            <p className="text-foreground text-sm leading-relaxed">
              Student attendance, staff hours, and payroll all live in separate
              spreadsheets — and by end of week they disagree with each other.
            </p>
          </div>
          <div className="liquid-glass rounded-2xl p-7 flex flex-col gap-4">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">The failure mode</p>
            <p className="text-foreground text-sm leading-relaxed">
              One wrong cell cascades. Hours logged incorrectly. Student progress
              lost. Payroll miscalculated. Asking someone to help fix it only
              creates more errors.
            </p>
          </div>
          <div className="liquid-glass rounded-2xl p-7 flex flex-col gap-4">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">The cost</p>
            <p className="text-foreground text-sm leading-relaxed">
              Owners spend more time fighting admin work than running their centers.
              Manual data systems aren&apos;t just inefficient — they&apos;re
              inevitable points of failure.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Feature Pillars */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div
          className="w-px h-16 mx-auto mb-16"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(0 0% 18%), transparent)' }}
        />
        <p className="text-sm text-muted-foreground tracking-widest uppercase mb-6 text-center">
          What we built
        </p>
        <h2
          className="text-4xl sm:text-5xl font-normal text-foreground mb-12 text-center max-w-3xl mx-auto"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1.5px' }}
        >
          Everything your center needs,{' '}
          <em className="not-italic text-muted-foreground">automated.</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="liquid-glass rounded-2xl p-8 flex flex-col gap-5">
              <div className="liquid-glass rounded-xl w-11 h-11 flex items-center justify-center text-foreground flex-shrink-0">
                {pillar.icon}
              </div>
              <h3
                className="text-xl font-normal text-foreground leading-snug"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Founders */}
      <section className="max-w-5xl mx-auto px-6 pb-28">
        <div
          className="w-px h-16 mx-auto mb-16"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(0 0% 18%), transparent)' }}
        />
        <p className="text-sm text-muted-foreground tracking-widest uppercase mb-6 text-center">
          Our story
        </p>
        <h2
          className="text-4xl sm:text-5xl font-normal text-foreground mb-12 text-center"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1.5px' }}
        >
          Built From{' '}
          <em className="not-italic text-muted-foreground">Personal Pain</em>
        </h2>

        {/* Story narrative */}
        <div className="liquid-glass rounded-3xl p-10 mb-10 max-w-3xl mx-auto">
          <p className="text-foreground text-base leading-relaxed">
            &ldquo;As a Kumon center owner, I loved watching my students succeed. But
            behind the scenes, the daily operations were a nightmare of paper logs,
            scattered spreadsheets, and endless sticky notes. I was tracking payroll,
            student analytics, parent reports, and staff timesheets across five
            different places.
          </p>
          <p className="text-foreground text-base leading-relaxed mt-5">
            Then, the inevitable happened. A single data entry mistake spiraled out of
            control. Hours were logged incorrectly, student tracking was lost, and
            trying to get someone else to help fix the messy spreadsheets only created
            more mistakes. I realized I was spending more time fighting manual admin
            work than actually running my business.
          </p>
          <p className="text-foreground text-base leading-relaxed mt-5">
            That was my breaking point. I knew there had to be a better way — so I
            built BrightMind.&rdquo;
          </p>
        </div>

        {/* Founder cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {founders.map((founder) => (
            <div key={founder.name} className="liquid-glass rounded-2xl p-8 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="liquid-glass rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-lg font-normal text-foreground"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {founder.initials}
                  </span>
                </div>
                <div>
                  <p
                    className="text-xl font-normal text-foreground"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {founder.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{founder.role}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{founder.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Mission & Vision */}
      <section className="max-w-4xl mx-auto px-6 pb-28 text-center">
        <div
          className="w-px h-16 mx-auto mb-16"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(0 0% 18%), transparent)' }}
        />
        <p className="text-sm text-muted-foreground tracking-widest uppercase mb-6">
          What we stand for
        </p>
        <h2
          className="text-4xl sm:text-5xl font-normal text-foreground mb-8"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1.5px' }}
        >
          Our Vision for the Future of{' '}
          <em className="not-italic text-muted-foreground">Learning Centers</em>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          We believe in protecting and elevating the quality of care in K-12 education.
          We want to empower staff to focus entirely on students rather than paperwork,
          teach students capability through seamless self-check-ins, and allow owners
          to automate repetitive tasks so they can spend less time on adhoc admin work
          and more time growing their centers.
        </p>
      </section>

      {/* 6. Final CTA */}
      <section className="px-6 pb-28">
        <div className="max-w-3xl mx-auto liquid-glass rounded-3xl px-10 py-16 flex flex-col items-center text-center gap-6">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Private beta — limited spots
          </p>
          <h2
            className="text-4xl sm:text-5xl font-normal text-foreground"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1.5px' }}
          >
            Lock in early access.{' '}
            <em className="not-italic text-muted-foreground">Save big forever.</em>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg leading-relaxed">
            We are currently in private beta. Join the waitlist today to secure
            exclusive founding-member pricing — up to 50% off — when we launch.
            Spots are limited.
          </p>
          <WaitlistForm
            placeholder="name@yourcenter.com"
            buttonText="Secure My Discounted Access"
          />
          <p className="text-xs text-muted-foreground">
            🎁 Joining the waitlist is 100% free. No credit card required to lock in your lifetime discount.
          </p>
        </div>
      </section>
    </div>
  );
}
