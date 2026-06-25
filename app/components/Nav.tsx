type NavLink = 'home' | 'features' | 'locations' | 'about' | 'contact';

const links: { href: string; label: string; key: NavLink }[] = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/features', label: 'Features', key: 'features' },
  { href: '#', label: 'Locations', key: 'locations' },
  { href: '#', label: 'About', key: 'about' },
  { href: '#', label: 'Contact', key: 'contact' },
];

export default function Nav({ active = 'home' }: { active?: NavLink }) {
  return (
    <nav className="relative z-10">
      <div className="max-w-7xl mx-auto px-8 py-6 flex flex-row items-center justify-between">
        <a
          href="/"
          className="text-3xl tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          BrightMind<sup className="text-xs">®</sup>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={`text-sm transition-colors ${
                active === link.key
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground hover:scale-[1.03] transition-transform"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}
