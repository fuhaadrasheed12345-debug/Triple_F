import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Heart, ArrowUp, Code2 } from 'lucide-react';
import { BRAND_CONFIG, SERVICES_DATA } from '../data/brandData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Beauty Equipment', href: '#equipment' },
    { name: 'Contact & Booking', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-pink-deep text-white border-t-2 border-brand-gold relative overflow-hidden">
      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 bg-dark-glam opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/15">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-pink to-brand-gold flex items-center justify-center border-2 border-brand-gold shadow-pink-glow">
                <span className="font-serif text-white text-lg font-black">F³</span>
              </div>
              <span className="font-serif text-2xl font-black text-white">
                Triple F <span className="text-gold-gradient">Beauty</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-brand-pink-soft leading-relaxed max-w-sm font-normal">
              Professional beauty services and quality beauty essentials in Ojodu Berger, Lagos. Empowering Nigerian women with unforgettable beauty, nail elegance, crisp gele styling, and supreme care.
            </p>

            {/* Social Placeholders */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={BRAND_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-600 text-brand-gold hover:text-white flex items-center justify-center border border-white/20 transition-all shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Instagram SVG */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-pink text-brand-gold hover:text-white flex items-center justify-center border border-white/20 transition-all shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook SVG */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-pink text-brand-gold hover:text-white flex items-center justify-center border border-white/20 transition-all shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-pink text-brand-gold hover:text-white flex items-center justify-center border border-white/20 transition-all text-xs font-black shadow-sm"
                aria-label="TikTok"
              >
                <span>TT</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-brand-gold uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-brand-pink-soft hover:text-brand-gold transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-brand-gold uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES_DATA.map((svc) => (
                <li key={svc.id}>
                  <a
                    href="#services"
                    className="text-xs sm:text-sm text-brand-pink-soft hover:text-brand-gold transition-colors font-medium"
                  >
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold text-brand-gold uppercase tracking-wider">
              Studio Location
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-white">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{BRAND_CONFIG.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={BRAND_CONFIG.phoneTel} className="hover:text-brand-gold transition-colors font-bold">
                  {BRAND_CONFIG.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={BRAND_CONFIG.emailMailto} className="hover:text-brand-gold transition-colors font-semibold break-all">
                  {BRAND_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:text-white py-1 transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Designer Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-pink-soft">
          <p>© {BRAND_CONFIG.copyrightYear} Triple F Beauty. All rights reserved.</p>
          
          {/* User requirement #2: Designed & Developed by Fuhaad */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-brand-gold/40 text-brand-gold font-bold shadow-sm">
            <Code2 className="w-4 h-4 text-brand-gold" />
            <span>Designed &amp; Developed by <strong className="text-white font-extrabold">{BRAND_CONFIG.developedBy}</strong></span>
          </div>

          <p className="flex items-center gap-1 font-medium">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-brand-pink-hot fill-brand-pink-hot" />
            <span>for Nigerian Elegance in Lagos</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
