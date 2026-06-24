import Nav from '../components/Nav';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
        <path d="M9 6h6M9 10h4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Self-Service Kiosk',
    description:
      'Students check in from any screen without logging in. They search their name, confirm their subjects, and are instantly tracked — kiosk resets automatically after 3 seconds.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M2 12h2m16 0h2M12 2v2m0 16v2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 8v4l2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Session Time Limits',
    description:
      'Each subject carries a built-in limit — 30 min for math or reading, 60 min for both. Timers turn yellow at the halfway mark and red when the session is over.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M3 12l4-4 4 4 4-6 4 4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="8" r="1" fill="currentColor" stroke="none" />
        <circle cx="11" cy="12" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="6" r="1" fill="currentColor" stroke="none" />
        <circle cx="19" cy="10" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: 'Live Dashboard',
    description:
      'A real-time view of every student in session and every staff member on the floor. Powered by Supabase Realtime — updates without a page refresh the moment anything changes.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M17 20H7a2 2 0 01-2-2V9l5-5h7a2 2 0 012 2v12a2 2 0 01-2 2z" />
        <path d="M12 4v5h5M9 13h6M9 17h4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Student Records',
    description:
      'Full student profiles with date of birth, assigned subjects, location, and staff notes. Notes surface as warning banners during check-in so staff are never caught off-guard.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M20 4H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1z" />
        <path d="M8 20h8M12 16v4" strokeLinecap="round" />
        <path d="M8 9l2.5 2.5L15 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Staff Check-In & Timesheets',
    description:
      'Staff clock in and out from the portal. Owners can force clock-out if someone forgets. Every session is logged and filterable by staff member, location, and date.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 10h8M8 14h5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Parent SMS Notifications',
    description:
      'When a session ends over the time limit, BrightMind texts the primary parent automatically via Twilio. Every message is logged so you always have a record.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 16V10M11 16V7M15 16v-4M19 16v-7" strokeLinecap="round" />
      </svg>
    ),
    title: 'Analytics',
    description:
      'Track visit volume, average session length, peak hours, subject mix, and check-in method trends across 7, 30, or 90-day windows — with period-over-period comparisons.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M12 3v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Data Exports',
    description:
      'Pull visit history and staff timesheets as CSV, Excel (.xlsx), or landscape PDF — all client-side, no server wait. Filter by location, date range, or staff member first.',
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav active="features" />

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-20 pb-16">
        <p className="text-sm text-muted-foreground tracking-widest uppercase mb-6">
          What&apos;s inside
        </p>
        <h1
          className="animate-fade-rise text-5xl sm:text-6xl md:text-7xl leading-[0.95] max-w-4xl font-normal text-foreground"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-2px" }}
        >
          Every tool your{" "}
          <em className="not-italic text-muted-foreground">center needs,</em>{" "}
          nothing it{" "}
          <em className="not-italic text-muted-foreground">doesn&apos;t.</em>
        </h1>
        <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          BrightMind handles the operations — check-ins, timers, staff tracking,
          parent notifications, and reporting — so your team can stay focused on
          the students in front of them.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="liquid-glass rounded-2xl p-7 flex flex-col gap-4"
              style={{
                animationDelay: `${i * 0.07}s`,
              }}
            >
              <div className="liquid-glass rounded-xl w-11 h-11 flex items-center justify-center text-foreground flex-shrink-0">
                {feature.icon}
              </div>
              <h3
                className="text-lg font-normal text-foreground leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="flex flex-col items-center text-center px-6 pb-28">
        <div
          className="w-px h-16 mb-12"
          style={{ background: 'linear-gradient(to bottom, transparent, hsl(0 0% 18%), transparent)' }}
        />
        <h2
          className="text-3xl sm:text-4xl font-normal text-foreground mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ready to run a tighter center?
        </h2>
        <p className="text-muted-foreground text-base max-w-md mb-10 leading-relaxed">
          Log in to your portal and start tracking sessions, staff, and students
          from day one.
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
