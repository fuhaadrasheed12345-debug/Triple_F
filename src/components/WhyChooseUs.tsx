import React from 'react';
import { Sparkles, Award, Layers, MapPin, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/brandData';

export const WhyChooseUs: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-white" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-white" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-white" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-brand-cream relative overflow-hidden bg-glam-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-pink-dark bg-white px-4 py-2 rounded-full border border-brand-pink/30 shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>The Triple F Advantage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-pink-dark tracking-tight">
            Why Choose <span className="text-glam-gradient italic font-serif">Triple F Beauty?</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-charcoal-muted leading-relaxed">
            We are more than just a salon; we are your trusted partners in looking unforgettable for every stage of your life.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((pillar, index) => (
            <div
              key={index}
              className="luxury-card rounded-3xl bg-white p-7 border-2 border-brand-pink-soft shadow-glam-card hover:border-brand-pink hover:shadow-glam-hover flex flex-col justify-between relative group"
            >
              <div>
                {/* Header Icon + Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-brand-pink to-brand-gold flex items-center justify-center p-3 text-white border border-white shadow-pink-glow group-hover:scale-105 transition-all">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <span className="font-serif text-3xl font-black text-brand-pink/30 group-hover:text-brand-pink transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Badge */}
                <span className="inline-block text-[10px] font-black uppercase tracking-wider text-brand-pink-dark bg-brand-pink-soft px-3 py-1 rounded-md mb-3 border border-brand-pink/20">
                  {pillar.badge}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-brand-pink-dark mb-2.5">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-brand-charcoal-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom Decorative check */}
              <div className="pt-6 mt-6 border-t border-brand-pink-soft flex items-center gap-1.5 text-xs font-bold text-brand-pink-dark">
                <CheckCircle className="w-3.5 h-3.5 text-brand-pink-vibrant" />
                <span>Guaranteed Nigerian Elegance</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
