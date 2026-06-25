import Nav from './components/Nav';
import BackgroundAnimation from './components/BackgroundAnimation';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
          type="video/mp4"
        />
      </video>

      {/* Palette overlay — pulls the video into the obsidian + indigo palette */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(to bottom, hsl(240 15% 6% / 0.55) 0%, hsl(245 20% 10% / 0.32) 40%, hsl(245 20% 10% / 0.32) 65%, hsl(240 15% 6% / 0.72) 100%)',
        }}
      />

      {/* Orbiting particle animation */}
      <BackgroundAnimation opacity={0.45} />

      <div className="relative z-10">
        <Nav active="home" />

        {/* Hero */}
        <section className="flex flex-col items-center text-center px-6 py-[90px]">
          {/* Pill badge */}
          <div
            className="animate-fade-rise mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs tracking-widest uppercase"
            style={{
              borderColor: 'hsl(255 90% 65% / 0.35)',
              color: 'hsl(255 90% 75%)',
              background: 'hsl(255 90% 65% / 0.08)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: 'hsl(255 90% 65%)',
                boxShadow: '0 0 6px hsl(255 90% 65%)',
              }}
            />
            Tutoring Center CRM
          </div>

          <h1
            className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] max-w-5xl font-normal text-foreground"
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '-2.46px',
            }}
          >
            Where every session builds a{' '}
            <em
              className="not-italic"
              style={{
                color: 'hsl(255 90% 72%)',
                textShadow: '0 0 60px hsl(255 90% 65% / 0.45)',
              }}
            >
              brighter
            </em>{' '}
            <em className="not-italic text-muted-foreground">mind.</em>
          </h1>

          <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
            We&apos;re building tools for tutoring centers that care — tracking
            sessions, managing staff, and creating space for every student to
            focus, grow, and thrive.
          </p>

          <div className="animate-fade-rise-delay-2 flex flex-col sm:flex-row items-center gap-5 mt-12">
            <a
              href="/features"
              className="liquid-glass rounded-full px-14 py-5 text-base text-foreground hover:scale-[1.03] transition-transform cursor-pointer"
              style={{ boxShadow: '0 0 32px hsl(255 90% 65% / 0.18)' }}
            >
              See Features
            </a>
            <a
              href="#contact"
              className="text-sm transition-colors underline underline-offset-4 cursor-pointer"
              style={{ color: 'hsl(255 90% 72%)' }}
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
