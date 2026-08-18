import React from 'react';
import { MapPin, Sparkles, MessageCircle, ArrowRight, Star, ShieldCheck, Heart } from 'lucide-react';
import { getWhatsAppBookingUrl } from '../data/brandData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-brand-pink-silk via-white to-brand-cream">
      {/* Background Decorative Flashy Glows */}
      <div className="absolute top-8 left-1/4 w-[32rem] h-[32rem] bg-brand-pink-light/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute bottom-6 right-8 w-[36rem] h-[36rem] bg-brand-gold-light/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-pink-glow/20 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Location & Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-brand-pink/30 text-brand-pink-dark text-xs font-bold shadow-md mx-auto lg:mx-0">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink-vibrant opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-pink-vibrant"></span>
              </span>
              <MapPin className="w-3.5 h-3.5 text-brand-pink-vibrant" />
              <span>Ojodu Berger, Lagos, Nigeria</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-brand-pink-dark tracking-tight leading-[1.14]">
              Beauty That Makes You Feel <br />
              <span className="relative inline-block mt-1">
                <span className="text-glam-gradient font-serif italic drop-shadow-sm">Unforgettable.</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-gold" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,0 Q50,12 100,0" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-lg text-brand-charcoal-muted max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Professional beauty services, elegant gele styling, stunning makeovers, nail care, pedicures, and quality beauty equipment—all in one place in Lagos.
            </p>

            {/* CTAs with Flashy High-Visibility Styling */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-flashy-pink w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-black shadow-pink-glow-lg transition-all duration-300 group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-brand-pink group-hover:rotate-12 transition-transform" />
                <span className="text-white font-extrabold tracking-wide drop-shadow-sm">Book An Appointment</span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-brand-pink-soft text-brand-pink-dark text-base font-bold border-2 border-brand-pink/30 hover:border-brand-pink shadow-md transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-brand-gold-dark" />
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-brand-pink-soft grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-left bg-white/70 p-3 rounded-2xl border border-brand-pink/20 shadow-sm">
                <div className="flex items-center gap-1 text-brand-gold mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <p className="text-xs font-bold text-brand-pink-dark">Top Rated</p>
                <p className="text-[11px] text-brand-charcoal-light">In Ojodu Berger</p>
              </div>

              <div className="text-left bg-white/70 p-3 rounded-2xl border border-brand-pink/20 shadow-sm">
                <div className="flex items-center gap-1 text-brand-pink-dark mb-1">
                  <ShieldCheck className="w-4 h-4 text-brand-gold-dark" />
                  <span className="text-xs font-bold">100%</span>
                </div>
                <p className="text-xs font-bold text-brand-pink-dark">Quality Care</p>
                <p className="text-[11px] text-brand-charcoal-light">Premium Products</p>
              </div>

              <div className="text-left bg-white/70 p-3 rounded-2xl border border-brand-pink/20 shadow-sm">
                <div className="flex items-center gap-1 text-brand-pink-dark mb-1">
                  <Heart className="w-4 h-4 text-brand-pink-vibrant fill-brand-pink-light" />
                  <span className="text-xs font-bold">5-in-1</span>
                </div>
                <p className="text-xs font-bold text-brand-pink-dark">Beauty Hub</p>
                <p className="text-[11px] text-brand-charcoal-light">Services &amp; Supply</p>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Flashy gold and pink decorative frames */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-brand-pink/40 -rotate-2 -z-10 animate-pulse-subtle" />
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand-pink/20 to-brand-gold/30 rotate-2 -z-10" />

              {/* Main Feature Image - High-end Nigerian Beauty */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-brand-pink-deep">
                <img
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=85"
                  alt="Triple F Beauty Nigerian makeup and elegant gele styling in Lagos"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Subtle vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-pink-deep/80 via-transparent to-transparent" />
                
                {/* Floating Bottom Card on Image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel-dark text-white border border-brand-gold shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-brand-gold uppercase tracking-wider font-extrabold flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-brand-gold" /> Triple F Signature Look
                      </p>
                      <p className="text-sm font-serif font-bold text-white mt-0.5">Regal Gele • Glam Makeover • Nails</p>
                    </div>
                    <a
                      href={getWhatsAppBookingUrl('Full Glam Experience')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-brand-gold text-brand-pink-deep flex items-center justify-center font-bold shadow-gold-glow hover:scale-110 transition-transform"
                      title="Book on WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Mini Badge Top Right */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border-2 border-brand-gold hidden sm:flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-pink to-brand-gold flex items-center justify-center text-white shadow-pink-glow">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-black text-brand-pink-dark">Sales &amp; Services</p>
                  <p className="text-[11px] text-brand-pink-vibrant font-semibold">Lagos Fast Delivery</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
