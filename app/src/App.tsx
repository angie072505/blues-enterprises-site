import { useState, useEffect } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { 
  Instagram, 
  Linkedin, 
  Menu,
  X
} from 'lucide-react';
import { 
  welcomeContent, 
  contactContent, 
  aboutContent, 
  graduationContent 
} from './data/content';

function App() {
  const [activeSection, setActiveSection] = useState('welcome');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['welcome', 'sports', 'graduation', 'portraits', 'experience', 'contact', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar activePage={activeSection} />
      </div>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-brand-bg/95 backdrop-blur-sm border-b border-brand-border">
        <div className="flex items-center justify-between px-4 py-4">
          <a href="#welcome" onClick={(e) => { e.preventDefault(); scrollToSection('#welcome'); }}>
            <h1 className="text-sm font-bold uppercase tracking-extra-wide text-white">
              BLUES
            </h1>
          </a>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="bg-brand-bg-secondary px-4 py-6 border-t border-brand-border">
            {['welcome', 'sports', 'graduation', 'portraits', 'experience', 'contact', 'about'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(`#${id}`); }}
                className={`block py-3 text-sm font-medium uppercase tracking-wide ${
                  activeSection === id ? 'text-white' : 'text-brand-text-secondary'
                }`}
              >
                {id}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="lg:ml-[180px]">
        {/* WELCOME SECTION */}
        <section id="welcome" className="min-h-screen pt-16 lg:pt-0">
          {/* Hero */}
          <div className="relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={welcomeContent.hero.image} 
                alt="Welcome"
                className="w-full h-full object-contain lg:object-cover animate-scale-in"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 flex justify-end">
              <div className="card-overlay max-w-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h2 className="text-3xl font-bold text-white mb-2">{welcomeContent.hero.title}</h2>
                <h3 className="text-sm uppercase tracking-wide text-brand-text-secondary mb-6">
                  {welcomeContent.hero.subtitle}
                </h3>
                {welcomeContent.hero.paragraphs.map((para, i) => (
                  <p key={i} className="text-brand-text-secondary text-sm leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                  className="btn-primary mt-4 inline-block"
                >
                  {welcomeContent.hero.cta}
                </a>
              </div>
            </div>
          </div>

        </section>

        {/* SPORTS SECTION */}
        <section id="sports" className="min-h-screen py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-xs uppercase tracking-wide text-brand-text-muted mb-2">
                  {welcomeContent.services.title}
                </p>
                <h2 className="text-3xl font-bold uppercase tracking-wide text-white mb-6">
                  {welcomeContent.services.items[1].title}
                </h2>
                <div className="text-brand-text-secondary text-sm leading-relaxed whitespace-pre-line mb-8">
                  {welcomeContent.services.items[1].description}
                </div>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                  className="text-brand-text-secondary text-sm hover:text-white transition-colors"
                >
                  {welcomeContent.services.items[1].cta}
                </a>
              </div>
              <div className="order-1 lg:order-2 img-hover">
                <img 
                  src={welcomeContent.services.items[1].image} 
                  alt="Sports"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* GRADUATION SECTION */}
        <section id="graduation" className="min-h-screen">
          {/* Graduation Hero */}
          <div className="relative min-h-[70vh] flex items-center">
            <div className="absolute inset-0">
              <img 
                src={graduationContent.hero.image} 
                alt="Graduation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 flex justify-end">
              <div className="card-overlay max-w-lg">
                <h2 className="text-3xl font-bold text-white mb-2">{graduationContent.hero.title}</h2>
                <h3 className="text-sm uppercase tracking-wide text-brand-text-secondary mb-6">
                  {graduationContent.hero.subtitle}
                </h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed mb-6">
                  {graduationContent.hero.description}
                </p>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                  className="btn-primary inline-block"
                >
                  {graduationContent.hero.cta}
                </a>
              </div>
            </div>
          </div>

          {/* Pricing & Packages */}
          <div className="py-16 px-6 max-w-6xl mx-auto">
            <h2 className="section-title mb-12 text-left">{graduationContent.packages.title}</h2>
            <div className="space-y-16">
              {graduationContent.packages.items.map((pkg, i) => (
                <div key={i} className={`grid lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-2">
                      {pkg.title}
                    </h3>
                    <p className="text-brand-text-secondary text-lg mb-4">{pkg.price}</p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="text-brand-text-secondary text-sm flex items-start">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`img-hover ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img src={pkg.image} alt={pkg.title} className="w-full h-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Ons */}
          <div className="py-16 px-6 max-w-6xl mx-auto border-t border-brand-border">
            <h3 className="text-sm uppercase tracking-wide text-brand-text-muted mb-8">
              {graduationContent.addons.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {graduationContent.addons.items.map((addon, i) => (
                <div key={i}>
                  <h4 className="text-lg font-bold uppercase tracking-wide text-white mb-2">
                    {addon.title}
                  </h4>
                  <p className="text-brand-text-secondary mb-1">{addon.price}</p>
                  <p className="text-brand-text-muted text-xs mb-2">{addon.subtitle}</p>
                  <p className="text-brand-text-secondary text-sm">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="py-16 px-6 max-w-7xl mx-auto border-t border-brand-border">
            <h2 className="section-title mb-12 text-left">{graduationContent.gallery.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {graduationContent.gallery.images.map((img, i) => (
                <div key={i} className="gallery-item aspect-[3/4]">
                  <img 
                    src={img} 
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Quote CTA */}
          <div className="py-16 px-6 max-w-4xl mx-auto border-t border-brand-border">
            <blockquote className="text-center mb-16">
              <p className="text-lg md:text-xl font-bold text-white leading-relaxed mb-4">
                "{graduationContent.quoteCTA.quote}"
              </p>
              <cite className="text-brand-text-muted text-sm not-italic">
                {graduationContent.quoteCTA.author}
              </cite>
            </blockquote>
          </div>

          {/* Final CTA */}
          <div className="relative py-24 px-6">
            <div className="absolute inset-0">
              <img 
                src={graduationContent.quoteCTA.image} 
                alt="CTA Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {graduationContent.quoteCTA.ctaTitle}
              </h2>
              <p className="text-brand-text-secondary text-sm mb-8">
                {graduationContent.quoteCTA.ctaText}
              </p>
              <a 
                href="#contact" 
                onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                className="btn-primary inline-block"
              >
                {graduationContent.quoteCTA.ctaButton}
              </a>
            </div>
          </div>
        </section>

        {/* PORTRAITS SECTION */}
        <section id="portraits" className="min-h-screen py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs uppercase tracking-wide text-brand-text-muted mb-2">
                  {welcomeContent.services.title}
                </p>
                <h2 className="text-3xl font-bold uppercase tracking-wide text-white mb-6">
                  {welcomeContent.services.items[2].title}
                </h2>
                <div className="text-brand-text-secondary text-sm leading-relaxed mb-6">
                  {welcomeContent.services.items[2].description}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-wide text-brand-text-muted">STARTING</span>
                  <span className="text-white font-semibold">{welcomeContent.services.items[2].price}</span>
                </div>
              </div>
              <div className="img-hover">
                <img 
                  src={welcomeContent.services.items[2].image} 
                  alt="Portraits"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="min-h-screen py-16 px-6 border-t border-brand-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="section-title mb-12">EXPERIENCE</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {welcomeContent.footerCTA.map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-xs uppercase tracking-wide text-brand-text-muted mb-2">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold uppercase tracking-wide text-white hover:text-brand-accent transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <a 
                      href={`#${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={(e) => { 
                        e.preventDefault(); 
                        const target = item.label.includes('ABOUT') ? '#about' : '#contact';
                        scrollToSection(target); 
                      }}
                      className="text-lg font-bold uppercase tracking-wide text-white hover:text-brand-accent transition-colors"
                    >
                      {item.text}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="min-h-screen">
          {/* Contact Hero */}
          <div className="relative min-h-[50vh] flex items-center justify-center">
            <div className="absolute inset-0">
              <img 
                src={contactContent.hero.image} 
                alt="Contact"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 text-center px-6">
              <p className="text-xs uppercase tracking-wide text-brand-text-secondary mb-4">
                {contactContent.hero.subtitle}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {contactContent.hero.title}
              </h2>
              <a 
                href={`tel:${contactContent.hero.phone}`}
                className="text-brand-accent hover:text-white transition-colors text-lg"
              >
                {contactContent.hero.phone}
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="py-16 px-6 max-w-2xl mx-auto">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-white mb-2">
                  {contactContent.form.fields.name.label} *
                </label>
                <input type="text" className="input-field" required />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-white mb-2">
                  {contactContent.form.fields.email.label} *
                </label>
                <input type="email" className="input-field" required />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-white mb-2">
                  {contactContent.form.fields.phone.label} *
                </label>
                <input type="tel" className="input-field" required />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-white mb-2">
                  {contactContent.form.fields.location.label} *
                </label>
                <input type="text" className="input-field" required />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-white mb-4">
                  {contactContent.form.fields.packages.label} *
                </label>
                <div className="space-y-2">
                  {contactContent.form.fields.packages.options.map((option, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border border-gray-500 accent-brand-accent" />
                      <span className="text-brand-text-secondary text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-white mb-4">
                  {contactContent.form.fields.addons.label} *
                </label>
                <div className="space-y-2">
                  {contactContent.form.fields.addons.options.map((option, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 border border-gray-500 accent-brand-accent" />
                      <span className="text-brand-text-secondary text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-white mb-2">
                  {contactContent.form.fields.referral.label} *
                </label>
                <select className="input-field" required>
                  <option value="">Select option</option>
                  {contactContent.form.fields.referral.options.map((option, i) => (
                    <option key={i} value={option.toLowerCase()}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-white mb-2">
                  {contactContent.form.fields.message.label} *
                </label>
                <textarea className="input-field min-h-[120px] resize-none" required />
              </div>

              <button type="submit" className="btn-primary w-full">
                {contactContent.form.submitButton}
              </button>
            </form>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="min-h-screen">
          {/* About Hero */}
          <div className="relative min-h-[70vh] flex items-center">
            <div className="absolute inset-0">
              <img 
                src={aboutContent.hero.image} 
                alt="About"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16 flex justify-end">
              <div className="card-overlay max-w-lg">
                <h2 className="text-3xl font-bold text-white mb-2">{aboutContent.hero.title}</h2>
                <h3 className="text-sm uppercase tracking-wide text-brand-text-secondary mb-6">
                  {aboutContent.hero.subtitle}
                </h3>
                {aboutContent.hero.paragraphs.map((para, i) => (
                  <p key={i} className="text-brand-text-secondary text-sm leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
                <a 
                  href="#experience" 
                  onClick={(e) => { e.preventDefault(); scrollToSection('#experience'); }}
                  className="btn-primary mt-4 inline-block"
                >
                  {aboutContent.hero.cta}
                </a>
              </div>
            </div>
          </div>

          {/* Degrees */}
          <div className="py-16 px-6 max-w-6xl mx-auto border-t border-brand-border">
            <h3 className="text-xs uppercase tracking-wide text-brand-text-muted mb-8">
              {aboutContent.degrees.title}
            </h3>
            {aboutContent.degrees.items.map((degree, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-8 items-center mb-12 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <h4 className="text-xl font-bold uppercase tracking-wide text-white mb-2">
                    {degree.title}
                  </h4>
                  {degree.emphasis && (
                    <p className="text-brand-text-secondary text-sm mb-2">{degree.emphasis}</p>
                  )}
                  {degree.school && (
                    <p className="text-brand-text-muted text-sm mb-4">{degree.school}</p>
                  )}
                  {degree.description && (
                    <p className="text-brand-text-secondary text-sm leading-relaxed">
                      {degree.description}
                    </p>
                  )}
                </div>
                <div className={`img-hover ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img src={degree.image} alt={degree.title} className="w-full h-auto" />
                </div>
              </div>
            ))}
          </div>

          {/* Athlete Section */}
          <div className="py-16 px-6 max-w-6xl mx-auto border-t border-brand-border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-wide text-white mb-4">
                  {aboutContent.athlete.title}
                </h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">
                  {aboutContent.athlete.description}
                </p>
              </div>
              <div className="img-hover">
                <img src={aboutContent.athlete.image} alt="Athlete" className="w-full h-auto" />
              </div>
            </div>
          </div>


        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-brand-border">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/bryannikolas01/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-text-muted hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-text-muted hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-brand-text-muted text-xs">
              All content Copyright © 2026 Blues Enterprise
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
