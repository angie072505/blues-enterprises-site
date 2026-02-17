import { Instagram, Linkedin } from 'lucide-react';

interface SidebarProps {
  activePage?: string;
}

const navLinks = [
  { id: 'welcome', label: 'WELCOME', href: '#welcome' },
  { id: 'sports', label: 'SPORTS', href: '#sports' },
  { id: 'graduation', label: 'GRADUATION', href: '#graduation' },
  { id: 'portraits', label: 'PORTRAITS', href: '#portraits' },
  { id: 'experience', label: 'EXPERIENCE', href: '#experience' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
  { id: 'about', label: 'ABOUT ME', href: '#about' },
];

export function Sidebar({ activePage = 'welcome' }: SidebarProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[180px] bg-brand-bg z-50 flex flex-col justify-between py-8 px-6 animate-fade-in-left">
      {/* Logo */}
      <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
        <a 
          href="#welcome" 
          onClick={(e) => { e.preventDefault(); scrollToSection('#welcome'); }}
          className="block"
        >
          <h1 className="text-sm font-bold uppercase tracking-extra-wide text-white leading-tight">
            BLUES
            <br />
            ENTERPRISE
          </h1>
        </a>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 flex-1 justify-center">
        {navLinks.map((link, index) => (
          <a
            key={link.id}
            href={link.href}
            onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
            className={`nav-link ${activePage === link.id ? 'active' : ''}`}
            style={{ animationDelay: `${200 + index * 50}ms` }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Footer */}
      <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
        {/* Social Icons */}
        <div className="flex gap-3 mb-4">
          <a 
            href="https://www.instagram.com/bryannikolas01/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-text-muted hover:text-white transition-colors duration-200"
          >
            <Instagram size={16} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brand-text-muted hover:text-white transition-colors duration-200"
          >
            <Linkedin size={16} />
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-[10px] text-brand-text-muted leading-relaxed">
          All content Copyright ©
          <br />
          2026 Blues Enterprise
        </p>
      </div>
    </aside>
  );
}
