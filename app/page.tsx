import Nav from './components/Nav';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Video Background */}
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

      <Nav active="home" />

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 py-[90px]">
        <h1
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] max-w-7xl font-normal text-foreground"
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "-2.46px",
          }}
        >
          Where every session builds a{" "}
          <em className="not-italic text-muted-foreground">brighter</em>{" "}
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
          >
            See Features
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 cursor-pointer"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
