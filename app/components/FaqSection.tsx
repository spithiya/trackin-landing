'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How do students check in?',
    a: 'They walk up to the kiosk and search their own first or last name from a live roster — no ID card, code, or staff interaction required. Tapping their name opens a confirmation card with their subjects and session limit for the day.',
  },
  {
    q: 'Do students need a physical ID card?',
    a: 'No. The kiosk is a self-service name search, not a card or badge scanner. That keeps setup to a single tablet or shared device at the front desk, with nothing to print, lose, or replace.',
  },
  {
    q: 'What happens if a student forgets to check out?',
    a: "Their timer keeps running and turns red once they've passed their session limit, both on the kiosk and on staff's live floor view, so it's caught the moment anyone glances at the screen. Staff can also force a check-out from the owner or staff portal.",
  },
  {
    q: 'Can parents see when their student arrives?',
    a: "Every student can have multiple contacts — parent, guardian, or other — with one marked primary. If a session runs over its time limit, TrackIn sends that primary contact a pickup text automatically, with the delivery status logged for a permanent record.",
  },
  {
    q: 'Is attendance data exportable?',
    a: 'Yes. Visit history and staff timesheets both export as CSV, Excel, or a landscape PDF, and the export respects whatever filters are already applied — location, staff member, and date range all carry through.',
  },
  {
    q: 'How accurate are the timestamps?',
    a: 'Check-ins, check-outs, and staff clock-ins are all written the instant they happen through Supabase Realtime — no polling interval, no manual refresh, and no rounding to the nearest few minutes.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-16">
        <div>
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground mb-6">
            Frequently asked
          </p>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-foreground leading-[1.0] mb-6"
            style={{ letterSpacing: '-1.5px' }}
          >
            How check-in works, answered.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-sm">
            Still curious? Reach out and we&apos;ll walk you through it.
          </p>
        </div>

        <div>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b" style={{ borderColor: 'var(--border)' }}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left cursor-pointer"
                >
                  <span className="text-lg font-semibold text-foreground">{item.q}</span>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.75}
                    className="w-4 h-4 flex-shrink-0 text-muted-foreground transition-transform"
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    <path d="M3 6l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className={`faq-panel ${isOpen ? 'open' : ''}`}>
                  <div>
                    <p className="text-muted-foreground leading-relaxed pb-5 pr-8">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
