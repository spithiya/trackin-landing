'use client';

import { useEffect } from 'react';
import Nav from '../components/Nav';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-9 h-9">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
        <path d="M9 6h6M9 10h4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Self-Service Kiosk',
    description:
      'Students type their first or last name into a search field. The kiosk filters every active student at that location and displays their current status — checked in or available. Tapping a name opens a confirmation card showing the subject, the session time limit, and a single confirm button. The screen resets itself 3 seconds after a successful check-in or check-out, with no staff interaction required.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-9 h-9">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Session Time Limits',
    description:
      'A math-only or reading-only session caps at 30 minutes. A combined session caps at 60. The limit is locked in at the moment of check-in from the student\'s subject at that time — editing their profile later doesn\'t change the running timer. Timers shift yellow at the halfway mark and red when time is up. Any session that ends over the limit automatically queues a parent SMS at checkout.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-9 h-9">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Live Dashboard',
    description:
      'The dashboard shows every student currently in session and every staff member on the floor, updated in real time via Supabase Realtime subscriptions. Each student card displays their name, assigned tutor, subject, elapsed time, and a color-coded timer pill. There is no polling interval and no manual refresh — changes arrive the moment they happen at any location.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-9 h-9">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Student Records',
    description:
      'Every student has a profile with their name, date of birth, assigned subjects, home location, and an optional notes field. Notes appear as amber warning banners on the check-in screen before a session begins, so staff always have context in the moment. A recent-sessions panel shows the last five completed sessions with date, duration, subject, and any note left by the attending tutor.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-9 h-9">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
      </svg>
    ),
    title: 'Staff Timesheets',
    description:
      'Staff clock in by selecting their name in the portal. The system records the location, clock-in time, and shift duration for every session. Owners can force a clock-out for anyone who forgets. Every record is searchable by staff member, location, and date range. The full timesheet can be downloaded as CSV, Excel (.xlsx), or landscape PDF from the same filtered view.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-9 h-9">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 10h8M8 14h5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Parent SMS',
    description:
      'Each student can have multiple contacts — mother, father, guardian, or other. One is marked primary. When a student is checked out after exceeding their time limit, BrightMind sends a pickup text to the primary contact via Twilio. The message text, destination number, delivery status, and Twilio SID are all written to a log table so you have a permanent paper trail.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-9 h-9">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 17V11M11 17V8M15 17v-5M19 17V9" strokeLinecap="round" />
      </svg>
    ),
    title: 'Analytics',
    description:
      'The analytics dashboard computes visit volume, average session duration, peak check-in hours by time of day, subject distribution, and the split between kiosk and staff check-ins. Data is aggregated for 7, 30, or 90-day windows. Every metric shows a percentage change against the prior equal period — so you can see whether volume, duration, or subject mix are trending in the right direction.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-9 h-9">
        <path d="M12 3v13m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Data Exports',
    description:
      'Visit history and staff timesheet records can be exported as CSV, Excel (.xlsx via SheetJS), or landscape-oriented PDF (via jsPDF with autotable). The export reflects whatever filters are currently applied — location, date range, and staff selection all carry through. Everything is generated in the browser; there is no server round-trip and no waiting.',
  },
];

export default function FeaturesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.scroll-reveal, .line-reveal')
              .forEach((el) => el.classList.add('revealed'));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll('.feature-block').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Nav active="features" />

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-4">
        <p className="animate-fade-rise text-xs text-muted-foreground tracking-[0.2em] uppercase mb-7">
          What&apos;s inside
        </p>
        <h1
          className="animate-fade-rise-delay text-5xl sm:text-6xl md:text-7xl leading-[0.95] max-w-3xl font-normal text-foreground"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-2px' }}
        >
          Every tool your center{' '}
          <em className="not-italic text-muted-foreground">needs.</em>
        </h1>
        <p className="animate-fade-rise-delay-2 text-muted-foreground text-lg max-w-xl mt-8 leading-relaxed">
          Eight features. One system. Built so your staff can focus on students,
          not software.
        </p>
      </section>

      {/* Feature List */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-8">
        {features.map((feature, i) => (
          <div key={feature.title} className="feature-block relative py-20 md:py-28">
            {/* Faint background index */}
            <span
              className="absolute right-0 top-1/2 -translate-y-1/2 text-[clamp(120px,18vw,200px)] leading-none font-normal text-foreground opacity-[0.035] select-none pointer-events-none"
              style={{ fontFamily: 'var(--font-display)' }}
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* Animated divider */}
            <div className="line-reveal h-px bg-border mb-10" />

            {/* Number + Icon */}
            <div
              className="scroll-reveal flex items-center justify-between mb-7"
              style={{ transitionDelay: '80ms' }}
            >
              <span className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="text-muted-foreground">{feature.icon}</div>
            </div>

            {/* Title */}
            <h2
              className="scroll-reveal text-4xl sm:text-5xl md:text-6xl font-normal text-foreground leading-[1.0] mb-9"
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: '-1.5px',
                transitionDelay: '200ms',
              }}
            >
              {feature.title}
            </h2>

            {/* Description */}
            <p
              className="scroll-reveal text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
              style={{ transitionDelay: '340ms' }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="flex flex-col items-center text-center px-6 pt-12 pb-32">
        <div className="line-reveal h-px bg-border w-full max-w-4xl mb-20" />
        <h2
          className="text-3xl sm:text-5xl font-normal text-foreground mb-5"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1px' }}
        >
          Ready to run a tighter center?
        </h2>
        <p className="text-muted-foreground text-lg max-w-sm mb-12 leading-relaxed">
          Log in and start tracking from day one.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <a
            href="/auth/login?role=owner"
            className="liquid-glass rounded-full px-12 py-4 text-base text-foreground hover:scale-[1.03] transition-transform cursor-pointer"
          >
            Owner Portal
          </a>
          <a
            href="/auth/login?role=staff"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 cursor-pointer"
          >
            Staff Portal
          </a>
        </div>
      </section>
    </div>
  );
}
