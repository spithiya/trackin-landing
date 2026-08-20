const stats = [
  { value: '3', label: 'Portals — kiosk, staff, and owner' },
  { value: '30 / 60m', label: 'Session limits, tracked automatically by subject' },
  { value: 'Live', label: 'Deployed and running real check-ins today' },
];

export default function StatsBar() {
  return (
    <div className="border-t" style={{ background: 'var(--secondary)', borderColor: 'var(--border)' }}>
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-14 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
        {stats.map((s) => (
          <div key={s.label} className="py-6 sm:py-0 sm:px-6 first:pt-0 sm:first:px-0">
            <p className="font-mono text-3xl sm:text-4xl font-bold text-foreground mb-2">{s.value}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
