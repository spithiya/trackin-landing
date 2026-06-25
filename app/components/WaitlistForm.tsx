'use client';

import { useState } from 'react';

interface WaitlistFormProps {
  placeholder?: string;
  buttonText?: string;
}

export default function WaitlistForm({
  placeholder = 'name@yourcenter.com',
  buttonText = 'Secure Early Access',
}: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="liquid-glass rounded-2xl px-8 py-4 text-foreground text-sm animate-fade-rise">
        You&apos;re on the list — we&apos;ll reach out when we launch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="liquid-glass rounded-full px-6 py-3.5 text-sm text-foreground placeholder:text-muted-foreground flex-1 outline-none bg-transparent"
      />
      <button
        type="submit"
        className="liquid-glass rounded-full px-8 py-3.5 text-sm text-foreground hover:scale-[1.03] transition-transform whitespace-nowrap cursor-pointer"
      >
        {buttonText}
      </button>
    </form>
  );
}
