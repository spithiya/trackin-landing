export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32" style={{ background: 'var(--secondary)' }}>
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <p className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-6">
          About TrackIn
        </p>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-[1.0] mb-14 max-w-2xl"
          style={{ letterSpacing: '-2px' }}
        >
          Built from personal pain.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 md:gap-16">
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              As a longtime Kumon student and later a staff tutor, Samar Pithiya loved watching students
              succeed. But behind the scenes, the daily operations were a nightmare of paper logs, scattered
              spreadsheets, and sticky notes — payroll, student progress, parent reports, and staff timesheets
              tracked across five different places.
            </p>
            <p>
              Then the inevitable happened. A single data entry mistake spiraled out of control. Hours were
              logged incorrectly, a student&apos;s record went missing, and asking someone else to help fix the
              spreadsheet only created more mistakes. He was spending more time fighting admin work than
              actually helping students.
            </p>
            <p className="text-foreground font-semibold text-xl" style={{ letterSpacing: '-0.3px' }}>
              That was the breaking point. There had to be a better way — so he built TrackIn.
            </p>
          </div>

          <div className="card p-6 flex flex-col gap-5 h-fit">
            <div className="flex items-center gap-3.5">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  background: 'color-mix(in srgb, var(--primary) 12%, transparent)',
                  color: 'var(--primary)',
                }}
              >
                SP
              </div>
              <div>
                <p className="text-foreground font-semibold">Samar Pithiya</p>
                <p className="text-xs text-muted-foreground mt-0.5">Founder</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              CS and AI student at Purdue. Ten years as a Kumon student, ages 5&ndash;15. Staff tutor who
              managed a fast-paced learning center, mentored 150+ students in math and reading, and logged
              1,000+ hours overseeing worksheet grading and academic record entries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
