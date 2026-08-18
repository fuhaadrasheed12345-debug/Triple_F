import React from 'react';
import { Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';
import { OCCASIONS_DATA, getWhatsAppBookingUrl } from '../data/brandData';

interface BeautyExperienceProps {
  onOpenBooking?: () => void;
}

export const BeautyExperience: React.FC<BeautyExperienceProps> = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-burgundy-deep text-white overflow-hidden">
      
      {/* High-res Lagos beauty background image with flashy velvet overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=1800&q=85"
          alt="African Luxury Beauty Experience in Lagos"
          className="w-full h-full object-cover object-center opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-burgundy-deep via-brand-pink-deep/95 to-brand-burgundy-deep" />
        <div className="absolute inset-0 bg-dark-glam opacity-40" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & CTA */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-brand-gold bg-brand-pink-dark/80 px-4 py-1.5 rounded-full border border-brand-gold/40 shadow-gold-glow">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Occasion Styling in Lagos</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Your Beauty. <br />
              <span className="text-gold-gradient italic font-serif">Your Style.</span> <br />
              Your Moment.
            </h2>

            <p className="text-sm sm:text-base text-brand-pink-soft leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Every milestone deserves a show-stopping look. At Triple F Beauty, we transform Nigerian weddings, birthdays, owambe parties, and everyday moments into unforgettable memories.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={getWhatsAppBookingUrl('Special Occasion Styling')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-flashy-gold w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-black shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span className="font-black tracking-wide">Book An Appointment on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Occasions Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {OCCASIONS_DATA.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-brand-pink/30 hover:border-brand-gold hover:bg-white/15 transition-all duration-300 group shadow-lg"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-pink to-brand-gold flex items-center justify-center text-white border border-white/40 group-hover:scale-110 transition-transform shadow-pink-glow">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-base font-bold text-brand-gold-light">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs text-brand-pink-soft leading-relaxed pl-10 font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
