export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy)', borderTop: '1px solid var(--navy-border)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rotate-45 flex-shrink-0" style={{ background: 'var(--primary)' }} aria-hidden="true" />
          <span className="text-lg font-extrabold tracking-tight" style={{ color: 'var(--navy-text)' }}>
            TrackIn
          </span>
        </a>

        <div className="flex items-center gap-7">
          <a href="#flow" className="text-sm transition-colors" style={{ color: 'var(--navy-text-muted)' }}>Flow</a>
          <a href="#insights" className="text-sm transition-colors" style={{ color: 'var(--navy-text-muted)' }}>Insights</a>
          <a href="#contact" className="text-sm transition-colors" style={{ color: 'var(--navy-text-muted)' }}>Pricing</a>
          <a href="#contact" className="text-sm transition-colors" style={{ color: 'var(--navy-text-muted)' }}>Get started</a>
        </div>

        <p className="text-xs font-mono" style={{ color: 'var(--navy-text-muted)' }}>
          &copy; {new Date().getFullYear()} TrackIn
        </p>
      </div>
    </footer>
  );
}
