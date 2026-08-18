import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/brandData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-brand-pink-silk via-white to-brand-cream relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-brand-pink-light/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-brand-gold-light/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-pink-dark bg-white px-4 py-2 rounded-full border border-brand-pink/30 shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>Client Experiences</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-pink-dark tracking-tight">
            Words of <span className="text-glam-gradient italic font-serif">Satisfaction</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-charcoal-muted leading-relaxed">
            See what our lovely clients in Lagos have to say about their transformations and shopping experience with Triple F Beauty.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-white p-8 sm:p-12 shadow-glam-hover border-2 border-brand-pink-soft">
            
            {/* Top Quote Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-pink to-brand-gold flex items-center justify-center text-white mb-6 border border-white shadow-pink-glow">
              <Quote className="w-7 h-7 text-white" />
            </div>

            {/* Star Rating */}
            <div className="flex items-center gap-1.5 text-brand-gold mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
              ))}
            </div>

            {/* Review Body */}
            <blockquote className="font-serif text-lg sm:text-2xl text-brand-charcoal font-medium leading-relaxed mb-8 min-h-[5rem]">
              “{current.review}”
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-brand-pink-soft">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-pink to-brand-gold text-white font-serif font-black text-lg flex items-center justify-center border-2 border-white shadow-pink-glow">
                  {current.clientName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-brand-pink-dark">
                    {current.clientName}
                  </h4>
                  <p className="text-xs text-brand-charcoal-light font-medium">
                    {current.serviceUsed} • <span className="text-brand-pink-vibrant font-bold">{current.location}</span>
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-11 h-11 rounded-full bg-brand-pink-soft hover:bg-brand-pink hover:text-white text-brand-pink-dark flex items-center justify-center border border-brand-pink/30 transition-colors focus:outline-none shadow-sm"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-11 h-11 rounded-full btn-flashy-pink flex items-center justify-center text-white transition-colors focus:outline-none shadow-pink-glow"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-9 bg-brand-pink-vibrant'
                      : 'w-2.5 bg-brand-pink-soft hover:bg-brand-pink'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
