import React from 'react';
import { Phone, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppBookingUrl } from '../data/brandData';

interface CTABannerProps {
  onOpenBooking?: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = () => {
  return (
    <section className="py-16 sm:py-20 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Box */}
        <div className="relative rounded-3xl bg-gradient-to-r from-brand-pink-dark via-brand-pink-magenta to-brand-pink-deep overflow-hidden shadow-2xl border-2 border-brand-gold p-8 sm:p-14 text-white">
          
          {/* Background Radial Glows */}
          <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-brand-pink-hot/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-dark-glam opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-brand-gold bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-brand-gold/50 shadow-gold-glow">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step Into Unforgettable Nigerian Beauty</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Elevate Your <br />
              <span className="text-gold-gradient italic font-serif drop-shadow-md">Beauty Look?</span>
            </h2>

            {/* Text */}
            <p className="text-sm sm:text-base text-brand-pink-soft max-w-xl mx-auto font-medium leading-relaxed">
              Book your appointment with Triple F Beauty and let us create a look you'll love. Serving clients in Ojodu Berger and across Lagos.
            </p>

            {/* Direct Phone Call Indicator */}
            <div className="inline-flex items-center justify-center gap-2 text-white font-extrabold text-base sm:text-lg bg-black/50 px-6 py-2.5 rounded-full border border-brand-gold/50 shadow-md">
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>Call / WhatsApp: <strong className="text-brand-gold">{BRAND_CONFIG.phoneDisplay}</strong></span>
            </div>

            {/* Buttons with Crystal Clear High Visibility */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={getWhatsAppBookingUrl('CTA Banner')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-flashy-gold w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-base sm:text-lg font-black shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span className="font-black tracking-wide">Book An Appointment</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/20 hover:bg-white/30 text-white text-base font-bold border-2 border-white/40 transition-all shadow-md"
              >
                <span>Contact Us</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
