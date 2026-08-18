'use client';

import React, { useEffect } from 'react';

/* ── Mini-mockup visual panels ── */

function KioskVisual() {
  return (
    <div className="liquid-glass rounded-2xl p-6 space-y-3">
      <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">Student check-in</p>
      <div className="liquid-glass rounded-xl px-4 py-3 flex items-center gap-3 text-muted-foreground text-sm">
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 flex-shrink-0">
          <circle cx="8.5" cy="8.5" r="5.5" />
          <path d="M15 15l3 3" strokeLinecap="round" />
        </svg>
        <span>Search students...</span>
      </div>
      <div className="liquid-glass rounded-xl px-4 py-3 flex items-center justify-between text-sm">
        <div>
          <p className="text-foreground">Alex Johnson</p>
          <p className="text-xs text-muted-foreground mt-0.5">Math + Reading</p>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'rgba(52,211,153,0.12)', color: 'rgb(52,211,153)' }}>
          Ready
        </span>
      </div>
      <div className="liquid-glass rounded-xl px-4 py-3 flex items-center justify-between text-sm">
        <div>
          <p className="text-foreground">Priya Rao</p>
          <p className="text-xs text-muted-foreground mt-0.5">Reading</p>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'rgba(251,191,36,0.12)', color: 'rgb(251,191,36)' }}>
          In session
        </span>
      </div>
    </div>
  );
}

function TimerVisual() {
  return (
    <div className="liquid-glass rounded-2xl p-8 flex flex-col items-center gap-5 text-center">
      <p className="text-xs text-muted-foreground tracking-widest uppercase">Math + Reading</p>
      <div className="timer-pulse text-5xl font-mono tracking-tight" style={{ color: 'rgb(248,113,113)' }}>
        47:23
      </div>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full" style={{ background: 'rgb(248,113,113)' }} />
        <span className="text-sm" style={{ color: 'rgb(248,113,113)' }}>Session over time</span>
      </div>
      <div className="w-full liquid-glass rounded-full h-1.5 mt-1 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: '79%', background: 'rgb(248,113,113)', opacity: 0.7 }} />
      </div>
    </div>
  );
}

function LiveVisual() {
  const students = [
    { name: 'Sarah M.', subject: 'Math',    time: '12m', color: 'rgb(52,211,153)' },
    { name: 'Jake T.',  subject: 'Both',    time: '38m', color: 'rgb(251,191,36)' },
    { name: 'Nadia K.', subject: 'Reading', time: '61m', color: 'rgb(248,113,113)' },
  ];
  return (
    <div className="liquid-glass rounded-2xl p-5 space-y-3">
      <div className="flex items-center gap-2 mb-5">
        <span className="relative flex w-2 h-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: 'rgb(52,211,153)' }} />
          <span className="relative inline-flex rounded-full w-2 h-2" style={{ background: 'rgb(52,211,153)' }} />
        </span>
        <span className="text-xs text-muted-foreground">Live · 3 students in session</span>
      </div>
      {students.map((s) => (
        <div key={s.name} className="liquid-glass rounded-xl px-4 py-3 flex items-center justify-between text-sm">
          <div>
            <p className="text-foreground">{s.name}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{s.subject}</p>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded-full" style={{ background: `${s.color}18`, color: s.color }}>
            {s.time}
          </span>
        </div>
      ))}
    </div>
  );
}

function RecordsVisual() {
  return (
    <div className="liquid-glass rounded-2xl p-5 space-y-4">
      <div className="rounded-xl px-4 py-3 text-sm" style={{ background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)' }}>
        <div className="flex items-start gap-2">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'rgb(251,191,36)' }}>
            <path d="M10 3L2 17h16L10 3z" strokeLinejoin="round" />
            <path d="M10 9v4M10 15h.01" strokeLinecap="round" />
          </svg>
          <p className="text-xs leading-relaxed" style={{ color: 'rgb(251,191,36)' }}>
            Needs extra support with fractions — remind tutor to check homework first.
          </p>
        </div>
      </div>
      <div className="liquid-glass rounded-xl px-4 py-4 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-foreground text-sm font-medium">Marcus Lee</p>
          <span className="text-xs text-muted-foreground">Age 12</span>
        </div>
        <div className="flex gap-2">
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(94,234,212,0.1)', color: 'rgb(94,234,212)' }}>Math</span>
          <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(59,130,246,0.12)', color: 'rgb(37,99,235)' }}>Reading</span>
        </div>
        <p className="text-xs text-muted-foreground">Westside Center · Active</p>
      </div>
    </div>
  );
}

function TimesheetVisual() {
  const rows = [
    { name: 'Sarah K.', inn: '9:00 am',  out: '5:30 pm' },
    { name: 'Tom R.',   inn: '10:00 am', out: '3:45 pm' },
    { name: 'Anna S.',  inn: '8:30 am',  out: null },
  ];
  return (
    <div className="liquid-glass rounded-2xl p-5">
      <div className="grid grid-cols-[1fr_5.5rem_5.5rem] text-xs text-muted-foreground mb-3 px-4">
        <span>Staff</span>
        <span>In</span>
        <span>Out</span>
      </div>
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.name} className="liquid-glass rounded-xl px-4 py-3 grid grid-cols-[1fr_5.5rem_5.5rem] items-center text-sm">
            <span className="text-foreground truncate">{r.name}</span>
            <span className="text-muted-foreground font-mono text-xs">{r.inn}</span>
            {r.out ? (
              <span className="text-muted-foreground font-mono text-xs">{r.out}</span>
            ) : (
              <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgb(52,211,153)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0" style={{ background: 'rgb(52,211,153)' }} />
                Now
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SmsVisual() {
  return (
    <div className="liquid-glass rounded-2xl p-5 space-y-3">
      <p className="text-xs text-muted-foreground tracking-widest uppercase mb-4">Twilio · Primary contact</p>
      <div className="flex justify-end">
        <div className="liquid-glass rounded-2xl rounded-br-sm p-4 text-sm text-foreground leading-relaxed max-w-[85%]">
          Hi! Alex has finished their session at TrackIn and is ready for pickup.
        </div>
      </div>
      <div className="flex justify-end items-center gap-1.5">
        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-muted-foreground">
          <path d="M13.5 3.5l-7 7-3-3-1 1 4 4 8-8z" />
          <path d="M11.5 3.5l-7 7" opacity="0.5" />
        </svg>
        <span className="text-xs text-muted-foreground">Delivered · Just now</span>
      </div>
    </div>
  );
}

const barData = [
  { h: 40, label: 'M', d: '0ms' },
  { h: 62, label: 'T', d: '80ms' },
  { h: 48, label: 'W', d: '160ms' },
  { h: 75, label: 'T', d: '240ms' },
  { h: 88, label: 'F', d: '320ms' },
  { h: 55, label: 'S', d: '400ms' },
  { h: 38, label: 'S', d: '480ms' },
];

function AnalyticsVisual() {
  return (
    <div className="liquid-glass rounded-2xl p-5">
      <div className="flex items-center justify-between mb-1">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">Visits this week</p>
        <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(52,211,153,0.1)', color: 'rgb(52,211,153)' }}>+14%</span>
      </div>
      <div className="flex items-end gap-2 h-24 mt-5">
        {barData.map((b, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center gap-1.5">
            <div
              className="bar-reveal w-full rounded-sm"
              style={{ height: `${b.h}px`, background: 'rgba(59,130,246,0.22)', transitionDelay: b.d }}
            />
            <span className="text-[10px] text-muted-foreground">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExportVisual() {
  const formats = ['CSV', 'XLSX', 'PDF'];
  return (
    <div className="liquid-glass rounded-2xl p-5 space-y-4">
      <p className="text-xs text-muted-foreground uppercase tracking-widest">Visit history — March</p>
      <div className="liquid-glass rounded-xl px-4 py-3 space-y-2 text-xs text-muted-foreground">
        {['Westside Center', 'Mar 1 – Mar 31', 'All staff'].map((f) => (
          <div key={f} className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-muted-foreground opacity-50" />
            {f}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        {formats.map((f) => (
          <div
            key={f}
            className="liquid-glass rounded-full px-4 py-2 text-xs text-foreground flex-1 text-center hover:scale-[1.04] transition-transform cursor-pointer"
          >
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Feature definitions ── */

const features: {
  Icon: () => React.ReactElement;
  title: string;
  description: string;
  Visual: () => React.ReactElement;
}[] = [
  {
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-8 h-8">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
        <path d="M9 6h6M9 10h4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Self-Service Kiosk',
    description:
      'Students type their first or last name into a search field. The kiosk filters every active student at that location and displays their current status. Tapping a name opens a confirmation card with the subject and session time limit. The screen resets 3 seconds after a successful check-in or check-out — no staff interaction required.',
    Visual: KioskVisual,
  },
  {
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-8 h-8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Session Time Limits',
    description:
      'A math-only or reading-only session caps at 30 minutes. A combined session caps at 60. The limit is locked in at check-in from the student\'s subject at that moment — editing their profile later doesn\'t change the running timer. Timers shift yellow at the halfway mark and red when time is up. Any session ending over the limit queues a parent SMS at checkout.',
    Visual: TimerVisual,
  },
  {
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-8 h-8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Live Dashboard',
    description:
      'The dashboard shows every student in session and every staff member on the floor, updated in real time via Supabase Realtime subscriptions. Each card displays name, assigned tutor, subject, elapsed time, and a color-coded timer pill. There is no polling interval and no manual refresh — changes arrive the moment they happen at any location.',
    Visual: LiveVisual,
  },
  {
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-8 h-8">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Student Records',
    description:
      'Every student has a profile with name, date of birth, assigned subjects, home location, and an optional notes field. Notes appear as amber warning banners on the check-in screen before the session begins. A recent-sessions panel shows the last five completed sessions with date, duration, subject, and any note left by the attending tutor.',
    Visual: RecordsVisual,
  },
  {
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-8 h-8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" />
      </svg>
    ),
    title: 'Staff Timesheets',
    description:
      'Staff clock in by selecting their name in the portal. The system records the location, clock-in time, and shift duration for every session. Owners can force a clock-out for anyone who forgets. Every record is searchable by staff member, location, and date range. The full timesheet can be exported as CSV, Excel, or landscape PDF from the same filtered view.',
    Visual: TimesheetVisual,
  },
  {
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-8 h-8">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 10h8M8 14h5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Parent SMS',
    description:
      'Each student can have multiple contacts — mother, father, guardian, or other. One is marked primary. When a student is checked out after exceeding their time limit, TrackIn sends a pickup text to the primary contact via Twilio. The message, destination number, delivery status, and Twilio SID are all written to a log table for a permanent record.',
    Visual: SmsVisual,
  },
  {
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-8 h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 17V11M11 17V8M15 17v-5M19 17V9" strokeLinecap="round" />
      </svg>
    ),
    title: 'Analytics',
    description:
      'The analytics dashboard computes visit volume, average session duration, peak check-in hours by time of day, subject distribution, and the split between kiosk and staff check-ins. Data is aggregated for 7, 30, or 90-day windows. Every metric shows a percentage change against the prior equal period so trends are immediately visible.',
    Visual: AnalyticsVisual,
  },
  {
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-8 h-8">
        <path d="M12 3v13m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Data Exports',
    description:
      'Visit history and staff timesheet records can be exported as CSV, Excel (.xlsx via SheetJS), or landscape PDF (via jsPDF with autotable). The export reflects whatever filters are currently applied — location, date range, and staff selection all carry through. Everything generates in the browser with no server round-trip.',
    Visual: ExportVisual,
  },
];

/* ── Section ── */

export default function FeaturesSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target
              .querySelectorAll('.scroll-reveal, .line-reveal, .bar-reveal')
              .forEach((el) => el.classList.add('revealed'));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    document.querySelectorAll('.feature-block').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="relative overflow-hidden bg-background">
      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb-a absolute -top-10 right-0 w-[550px] h-[550px] rounded-full blur-[160px]"
          style={{ background: 'hsl(217 90% 60%)', opacity: 0.13 }}
        />
        <div
          className="orb-b absolute top-1/2 -left-40 w-[480px] h-[480px] rounded-full blur-[140px]"
          style={{ background: 'hsl(200 80% 65%)', opacity: 0.10 }}
        />
        <div
          className="orb-c absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[130px]"
          style={{ background: 'hsl(225 80% 65%)', opacity: 0.09 }}
        />
      </div>

      <div className="relative z-10">
        {/* Section intro */}
        <div className="flex flex-col items-center text-center px-6 pt-24 pb-4">
          <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-7">
            What&apos;s inside
          </p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl leading-[0.95] max-w-3xl font-normal text-foreground"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-2px' }}
          >
            Every tool your center{' '}
            <em className="not-italic text-muted-foreground">needs.</em>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mt-8 leading-relaxed">
            Eight features. One system. Built so your staff can focus on students,
            not software.
          </p>
        </div>

        {/* Feature list */}
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-8">
          {features.map((feature, i) => (
            <div key={feature.title} className="feature-block relative py-16 md:py-24">
              <span
                className="absolute right-6 text-[clamp(100px,14vw,170px)] leading-none font-normal text-foreground select-none pointer-events-none"
                style={{ fontFamily: 'var(--font-display)', opacity: 0.03 }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="line-reveal h-px bg-border mb-10" />

              <div
                className="scroll-reveal flex items-center justify-between mb-8"
                style={{ transitionDelay: '60ms' }}
              >
                <span className="text-xs tracking-[0.22em] text-muted-foreground uppercase">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="text-muted-foreground"><feature.Icon /></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-start">
                <div>
                  <h3
                    className="scroll-reveal text-4xl sm:text-5xl font-normal text-foreground leading-[1.0] mb-8"
                    style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1.5px', transitionDelay: '170ms' }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="scroll-reveal text-lg sm:text-xl text-muted-foreground leading-relaxed"
                    style={{ transitionDelay: '300ms' }}
                  >
                    {feature.description}
                  </p>
                </div>
                <div className="scroll-reveal mt-2" style={{ transitionDelay: '220ms' }}>
                  <feature.Visual />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition CTA */}
        <div className="flex flex-col items-center text-center px-6 pt-12 pb-32">
          <div className="line-reveal h-px bg-border w-full max-w-5xl mb-20" />
          <h3
            className="text-3xl sm:text-5xl font-normal text-foreground mb-5"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1px' }}
          >
            Ready to run a tighter center?
          </h3>
          <p className="text-muted-foreground text-lg max-w-sm mb-12 leading-relaxed">
            Log in and start tracking from day one.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <a
              href="#contact"
              className="liquid-glass rounded-full px-12 py-4 text-base text-foreground hover:scale-[1.03] transition-transform cursor-pointer"
            >
              Get in Touch
            </a>
            <a
              href="#home"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 cursor-pointer"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
