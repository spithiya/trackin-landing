const roster: { name: string; subjects: string[]; time: string; status: 'in' | 'out' }[] = [
  { name: 'Maya R.',   subjects: ['Math', 'Reading'], time: '09:02', status: 'in' },
  { name: 'Devon K.',  subjects: ['Math'],             time: '09:05', status: 'in' },
  { name: 'Priya S.',  subjects: ['Reading'],          time: '09:11', status: 'in' },
  { name: 'Liam T.',   subjects: ['Math'],             time: '10:48', status: 'out' },
];

export default function HeroWidget() {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-2">
          <span className="relative w-2 h-2 rounded-full flex-shrink-0" style={{ color: 'var(--primary)' }}>
            <span className="live-ping absolute inset-0" />
            <span className="relative block w-2 h-2 rounded-full" style={{ background: 'var(--primary)' }} />
          </span>
          <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">TrackIn &middot; Live</span>
        </div>
        <span className="text-xs font-mono text-muted-foreground">4 present</span>
      </div>

      <div className="px-6 py-5 border-b" style={{ borderColor: 'var(--border)' }}>
        <p className="text-[11px] tracking-widest uppercase text-muted-foreground mb-3">Kiosk &middot; search your name</p>
        <div className="rounded-full px-4 py-2.5 flex items-center gap-2.5 text-sm text-muted-foreground" style={{ background: 'var(--muted)' }}>
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 flex-shrink-0">
            <circle cx="8.5" cy="8.5" r="5.5" />
            <path d="M15 15l3 3" strokeLinecap="round" />
          </svg>
          <span>Search students&hellip;</span>
        </div>
      </div>

      <div>
        {roster.map((s, i) => (
          <div
            key={s.name}
            className="flex items-center justify-between px-6 py-3.5"
            style={{ borderBottom: i < roster.length - 1 ? '1px solid var(--border)' : 'none' }}
          >
            <div>
              <p className="text-sm text-foreground font-medium">{s.name}</p>
              <div className="flex gap-1.5 mt-1">
                {s.subjects.map((subj) => (
                  <span
                    key={subj}
                    className="text-[10px] px-1.5 py-0.5 rounded"
                    style={{ background: 'color-mix(in srgb, var(--primary) 10%, transparent)', color: 'var(--primary)' }}
                  >
                    {subj}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-mono text-muted-foreground">{s.time}</span>
              <span
                className="text-[10px] font-mono font-semibold uppercase px-2 py-1 rounded border"
                style={{
                  color: s.status === 'in' ? 'var(--status-in)' : 'var(--status-out)',
                  borderColor: s.status === 'in' ? 'var(--status-in)' : 'var(--status-out)',
                }}
              >
                {s.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
