const steps = [
  {
    n: '1',
    title: 'Search.',
    body: 'Students search their own name at the kiosk — first or last, filtered live from the roster on shift. No ID card, no code to remember, no clipboard.',
  },
  {
    n: '2',
    title: 'Confirm.',
    body: "TrackIn shows today's subjects and the session limit that comes with them — 30 minutes for a single subject, 60 for math and reading combined — locked in the moment they check in.",
  },
  {
    n: '3',
    title: 'Teach.',
    body: 'With attendance handled automatically, staff get a live floor view instead of a sign-in sheet, and directors get a clean record instead of five mismatched spreadsheets.',
  },
];

export default function FlowSection() {
  return (
    <section id="flow" className="relative bg-background py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-6">
          The three-step flow
        </p>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-[1.02] mb-16"
          style={{ letterSpacing: '-2px' }}
        >
          Three steps. Zero friction.
        </h2>

        <div className="border-t" style={{ borderColor: 'var(--border)' }}>
          {steps.map((step) => (
            <div
              key={step.n}
              className="reveal-block grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-16 py-14 md:py-16 border-b items-start"
              style={{ borderColor: 'var(--border)' }}
            >
              <span
                className="scroll-reveal text-[clamp(64px,9vw,110px)] leading-none font-extrabold select-none"
                style={{ color: 'var(--border)' }}
                aria-hidden="true"
              >
                {step.n}
              </span>
              <div>
                <h3
                  className="scroll-reveal text-3xl sm:text-4xl font-extrabold text-foreground mb-4"
                  style={{ letterSpacing: '-1px', transitionDelay: '120ms' }}
                >
                  {step.title}
                </h3>
                <p
                  className="scroll-reveal text-lg text-muted-foreground leading-relaxed max-w-xl"
                  style={{ transitionDelay: '220ms' }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
