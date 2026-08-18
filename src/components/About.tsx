import React from 'react';
import { CheckCircle2, Award, Heart, Sparkles, MapPin, Shield, MessageCircle } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppBookingUrl } from '../data/brandData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = () => {
  const highlights = [
    {
      title: 'Professional Service',
      desc: 'Expertly executed nail artistry, gele tying, and makeup transformations tailored to your style.',
      icon: Award
    },
    {
      title: 'Attention to Detail',
      desc: 'Precision in every brush stroke, cuticle cleanup, pleat alignment, and pedicure care.',
      icon: CheckCircle2
    },
    {
      title: 'Beauty Expertise',
      desc: 'Deep knowledge of African skin undertones, modern bridal aesthetics, and durable beauty techniques.',
      icon: Sparkles
    },
    {
      title: 'Customer Satisfaction',
      desc: 'A warm, welcoming, glamorous environment where your comfort and radiance come first.',
      icon: Heart
    },
    {
      title: 'Convenient Location in Ojodu Berger',
      desc: 'Centrally situated in Ojodu Berger for easy access across Lagos and surrounding areas.',
      icon: MapPin
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-brand-cream relative overflow-hidden bg-glam-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage with Lagos Gele styling */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative">
              
              {/* Primary Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] bg-brand-pink-deep">
                <img
                  src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=800&q=80"
                  alt="Triple F Beauty Lagos Gele and Makeup Elegance"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-pink-deep/70 via-transparent to-transparent" />
              </div>

              {/* Overlapping Secondary Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-64 sm:w-72 p-5 rounded-2xl bg-white shadow-glam-hover border-2 border-brand-pink/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-pink to-brand-gold text-white flex items-center justify-center font-bold shadow-pink-glow">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-brand-pink-dark">Triple F Standard</p>
                    <p className="text-[10px] text-brand-pink-vibrant uppercase tracking-wider font-bold">Flawless &amp; Lasting</p>
                  </div>
                </div>
                <p className="text-xs text-brand-charcoal leading-relaxed font-medium">
                  Dedicated to making every Nigerian woman feel regal, confident, and celebrated.
                </p>
              </div>

              {/* Decorative Gold Badge Element */}
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-tr from-brand-gold via-brand-pink-hot to-brand-pink p-[2.5px] shadow-gold-glow hidden sm:block animate-float">
                <div className="w-full h-full bg-brand-pink-deep rounded-full flex items-center justify-center">
                  <span className="font-serif text-brand-gold text-xl font-black">✦</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Highlights */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-pink-dark bg-white px-4 py-2 rounded-full border border-brand-pink/30 shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span>About Triple F Beauty</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-pink-dark leading-tight">
              Where Beauty Meets <span className="text-glam-gradient italic font-serif">Confidence.</span>
            </h2>

            {/* Polished Marketing Copy */}
            <p className="text-base sm:text-lg text-brand-charcoal leading-relaxed">
              <strong className="text-brand-pink-dark font-extrabold">Triple F Beauty</strong> is a premier Lagos beauty and fashion brand rooted in the artistry of modern African elegance. We are passionate about empowering our clients to look radiant, feel regal, and step out with unwavering confidence.
            </p>

            <p className="text-sm sm:text-base text-brand-charcoal-muted leading-relaxed">
              Whether you are preparing for your dream wedding, an energetic owambe party, a high-fashion photoshoot, or simply indulging in a restorative pedicure and pristine nail set, our studio delivers uncompromised excellence. We also supply beauty artists across Nigeria with durable, top-grade beauty equipment and essentials.
            </p>

            {/* 5 Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-2xl bg-white border border-brand-pink-soft shadow-sm hover:border-brand-pink hover:shadow-glam-card transition-all duration-300 ${
                      index === 4 ? 'sm:col-span-2 bg-gradient-to-r from-brand-pink-silk to-white' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-pink-soft to-white flex items-center justify-center shrink-0 mt-0.5 text-brand-pink-dark border border-brand-pink/30 shadow-sm">
                        <IconComponent className="w-4 h-4 text-brand-pink-vibrant" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-pink-dark">{item.title}</h4>
                        <p className="text-xs text-brand-charcoal-muted mt-1 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA row linking directly to WhatsApp */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={getWhatsAppBookingUrl('About Section Consultation')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-flashy-pink w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-extrabold shadow-pink-glow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span className="text-white">Book An Appointment</span>
              </a>
              
              <a
                href={BRAND_CONFIG.phoneTel}
                className="text-sm font-bold text-brand-pink-dark hover:text-brand-pink-vibrant flex items-center gap-1.5 underline underline-offset-4 decoration-brand-pink decoration-2"
              >
                <span>Call Us: {BRAND_CONFIG.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
