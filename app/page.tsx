import Nav from './components/Nav';
import ScrollRevealInit from './components/ScrollRevealInit';
import HeroWidget from './components/HeroWidget';
import FlowSection from './components/FlowSection';
import LivePulseSection from './components/LivePulseSection';
import AboutSection from './components/AboutSection';
import StatsBar from './components/StatsBar';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Nav />

      {/* ── Hero ────────────────────────────────────────────── */}
      <section id="home" className="relative bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8 pt-16 pb-24 md:pt-24 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="animate-fade-rise mb-7 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-mono tracking-widest uppercase"
              style={{ borderColor: 'color-mix(in srgb, var(--primary) 35%, transparent)', color: 'var(--primary)', background: 'color-mix(in srgb, var(--primary) 8%, transparent)' }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--primary)' }} />
              For K-12 learning center owners
            </div>

            <h1
              className="animate-fade-rise text-5xl sm:text-6xl xl:text-7xl leading-[1.0] font-extrabold text-foreground"
              style={{ letterSpacing: '-3px' }}
            >
              Effortless entry.
              <br />
              Absolute oversight.
            </h1>

            <p className="animate-fade-rise-delay text-muted-foreground text-lg max-w-md mt-8 leading-relaxed">
              TrackIn is the check-in and check-out system that turns student flow into a clear, reliable
              record &mdash; so directors can stop managing spreadsheets and get back to running the center.
            </p>

            <div className="animate-fade-rise-delay-2 flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
              <a
                href="#contact"
                className="rounded-full px-9 py-4 text-sm font-semibold hover:scale-[1.03] transition-transform cursor-pointer"
                style={{ background: 'var(--primary)', color: 'var(--primary-foreground)' }}
              >
                Secure Early Access
              </a>
              <a href="#flow" className="text-sm font-medium transition-colors cursor-pointer" style={{ color: 'var(--primary)' }}>
                See how it works &rarr;
              </a>
            </div>
          </div>

          <div className="animate-fade-rise-delay-2">
            <HeroWidget />
          </div>
        </div>
      </section>

      <FlowSection />
      <LivePulseSection />
      <AboutSection />
      <StatsBar />
      <FaqSection />
      <CtaSection />
      <Footer />
    </>
  );
}
