'use client';

function RosterVisual() {
  const rows = [
    { name: 'Maya R.', tag: 'In', time: '09:02' },
    { name: 'Devon K.', tag: 'In', time: '09:05' },
    { name: 'Priya S.', tag: 'In', time: '09:11' },
  ];
  return (
    <div className="space-y-2">
      {rows.map((r) => (
        <div key={r.name} className="rounded-lg px-3.5 py-2.5 flex items-center justify-between text-sm" style={{ background: 'var(--muted)' }}>
          <span className="text-foreground">{r.name}</span>
          <span className="font-mono text-xs" style={{ color: 'var(--primary)' }}>{r.tag} {r.time}</span>
        </div>
      ))}
    </div>
  );
}

function TimerVisual() {
  return (
    <div className="flex flex-col items-center gap-4 py-2 text-center">
      <p className="text-[11px] tracking-widest uppercase text-muted-foreground">Math + Reading</p>
      <div className="font-mono text-4xl font-semibold tracking-tight text-foreground">42:18</div>
      <div className="w-full h-1.5 rounded-full overflow-hidden timer-track">
        <div className="h-full rounded-full" style={{ width: '70%', background: 'var(--primary)' }} />
      </div>
      <p className="text-xs text-muted-foreground">of a 60 minute session</p>
    </div>
  );
}

function AnalyticsVisual() {
  const bars = [40, 62, 48, 75, 88, 55, 38];
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <p className="text-[11px] tracking-widest uppercase text-muted-foreground">Peak hours</p>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full" style={{ background: 'color-mix(in srgb, var(--primary) 12%, transparent)', color: 'var(--primary)' }}>8pm</span>
      </div>
      <div className="flex items-end gap-2 h-20 mt-4">
        {bars.map((h, idx) => (
          <div
            key={idx}
            className="bar-reveal flex-1 rounded-sm"
            style={{ height: `${h}px`, background: 'color-mix(in srgb, var(--primary) 22%, transparent)', transitionDelay: `${idx * 70}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function TimesheetVisual() {
  const rows = [
    { name: 'Patel, P.', out: null },
    { name: 'Johnson, A.', out: '6:27 PM' },
    { name: 'Shorne, M.', out: '3:49 PM' },
  ];
  return (
    <div className="space-y-2">
      {rows.map((r) => (
        <div key={r.name} className="rounded-lg px-3.5 py-2.5 flex items-center justify-between text-sm" style={{ background: 'var(--muted)' }}>
          <span className="text-foreground">{r.name}</span>
          {r.out ? (
            <span className="font-mono text-xs text-muted-foreground">{r.out}</span>
          ) : (
            <span className="font-mono text-xs flex items-center gap-1.5" style={{ color: 'var(--primary)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--primary)' }} />
              On duty
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function ExportVisual() {
  const formats = ['CSV', 'XLSX', 'PDF'];
  return (
    <div>
      <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-4">Visit history &middot; export</p>
      <div className="flex gap-2">
        {formats.map((f) => (
          <div
            key={f}
            className="flex-1 text-center rounded-full px-3 py-2.5 text-xs font-mono font-medium text-foreground border"
            style={{ borderColor: 'var(--border)' }}
          >
            {f}
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-4 leading-relaxed">Filters for location, staff, and date range carry straight into the file.</p>
    </div>
  );
}

function SubjectsVisual() {
  const rows = [
    { label: 'Reading', pct: 40, color: 'var(--primary)' },
    { label: 'Math + Reading', pct: 35, color: 'var(--accent)' },
    { label: 'Math', pct: 25, color: 'hsl(222 47% 30%)' },
  ];
  return (
    <div className="space-y-3.5">
      {rows.map((r) => (
        <div key={r.label}>
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-foreground">{r.label}</span>
            <span className="font-mono text-muted-foreground">{r.pct}%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden timer-track">
            <div className="h-full rounded-full" style={{ width: `${r.pct}%`, background: r.color }} />
          </div>
        </div>
      ))}
    </div>
  );
}

const cards: { n: string; tag: string; title: string; Visual: () => React.ReactElement }[] = [
  { n: '01', tag: 'Roster',    title: 'A live student list, always sorted.',          Visual: RosterVisual },
  { n: '02', tag: 'Timer',     title: 'Session limits, locked in automatically.',     Visual: TimerVisual },
  { n: '03', tag: 'Analytics', title: 'Attendance patterns, at a glance.',            Visual: AnalyticsVisual },
  { n: '04', tag: 'Timesheets',title: 'Clock-ins become clean payroll records.',      Visual: TimesheetVisual },
  { n: '05', tag: 'Exports',   title: 'One click to CSV, Excel, or PDF.',             Visual: ExportVisual },
  { n: '06', tag: 'Subjects',  title: 'Math, Reading, or both — tracked precisely.',  Visual: SubjectsVisual },
];

export default function LivePulseSection() {
  return (
    <section id="insights" className="reveal-block relative bg-background py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-6">
              The live pulse
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-[1.0] max-w-2xl"
              style={{ letterSpacing: '-2px' }}
            >
              The cleanest parts of the software, up close.
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-xs lg:text-right">
            No clutter. No noise. Just the pieces that make a director&apos;s day run on time.
          </p>
        </div>

        <div className="index-card-row">
          {cards.map((c) => (
            <div key={c.n} className="index-card card p-6">
              <div className="flex items-center gap-2 pb-4 mb-5 border-b" style={{ borderColor: 'var(--border)' }}>
                <span className="text-xs font-mono font-semibold" style={{ color: 'var(--primary)' }}>{c.n}</span>
                <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--primary)' }}>&middot; {c.tag}</span>
              </div>
              <p className="text-lg font-semibold text-foreground mb-6 leading-snug">{c.title}</p>
              <c.Visual />
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">Scroll for more &rarr;</p>
      </div>
    </section>
  );
}
