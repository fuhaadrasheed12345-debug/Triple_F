import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppBookingUrl } from '../data/brandData';

interface NavbarProps {
  onOpenBooking?: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Beauty Equipment', href: '#equipment' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-brand-pink/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Mark */}
            <a href="#home" className="group flex items-center gap-3 focus:outline-none">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-pink-hot via-brand-pink to-brand-gold flex items-center justify-center border-2 border-brand-gold shadow-pink-glow transition-transform duration-300 group-hover:scale-105">
                <span className="font-serif text-white text-lg font-extrabold tracking-tight drop-shadow-sm">F³</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-black tracking-wide text-brand-pink-dark leading-none">
                  Triple F <span className="text-glam-gradient font-black">Beauty</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-brand-pink-vibrant mt-1 font-bold">
                  Lagos • Ojodu Berger
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-brand-charcoal hover:text-brand-pink-vibrant transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2.5px] after:bg-brand-pink after:rounded-full hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={BRAND_CONFIG.phoneTel}
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-brand-pink-dark hover:text-brand-pink-vibrant px-3.5 py-2 rounded-full border border-brand-pink/30 hover:border-brand-pink bg-brand-pink-soft/60 transition-colors shadow-sm"
                title="Call Triple F Beauty"
              >
                <Phone className="w-3.5 h-3.5 text-brand-pink" />
                <span>{BRAND_CONFIG.phoneDisplay}</span>
              </a>

              {/* High Visibility Book An Appointment Button Linking to WhatsApp */}
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-flashy-pink inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-brand-pink" />
                <span className="font-extrabold text-white tracking-wide">Book An Appointment</span>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-flashy-pink sm:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold"
              >
                <Sparkles className="w-3 h-3 text-brand-gold" />
                <span className="text-white font-bold">Book</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-brand-pink-dark bg-brand-pink-soft hover:bg-brand-pink hover:text-white transition-colors focus:outline-none shadow-sm"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop overlay */}
        <div
          className="fixed inset-0 bg-brand-charcoal/70 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`fixed top-0 right-0 w-[85%] max-w-sm h-full bg-brand-cream-light shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out border-l-2 border-brand-pink/30 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-brand-pink-soft">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-pink to-brand-gold flex items-center justify-center border border-brand-gold shadow-pink-glow">
                  <span className="font-serif text-white text-sm font-extrabold">F³</span>
                </div>
                <span className="font-serif font-black text-lg text-brand-pink-dark">Triple F Beauty</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full text-brand-charcoal hover:bg-brand-pink-soft focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-brand-pink-dark" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-brand-charcoal hover:text-brand-pink-vibrant py-2.5 px-3 rounded-xl hover:bg-brand-pink-soft transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-brand-pink font-bold">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-brand-pink-soft space-y-3">
            <a
              href={getWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full btn-flashy-pink flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-extrabold shadow-pink-glow"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span className="text-white">Book An Appointment</span>
            </a>

            <a
              href={BRAND_CONFIG.phoneTel}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl border-2 border-brand-pink/30 text-brand-pink-dark text-sm font-bold hover:bg-brand-pink-soft transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-pink" />
              <span>Call: {BRAND_CONFIG.phoneDisplay}</span>
            </a>

            <p className="text-center text-[11px] text-brand-charcoal-light pt-2 font-medium">
              📍 Ojodu Berger, Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
