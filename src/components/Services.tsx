import React, { useState } from 'react';
import { Sparkles, Crown, Smile, HeartHandshake, ShoppingBag, ArrowRight, MessageCircle, Info } from 'lucide-react';
import { SERVICES_DATA, getWhatsAppBookingUrl } from '../data/brandData';
import type { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesProps {
  onOpenBooking?: (serviceName?: string) => void;
}

const getServiceIcon = (name: string) => {
  switch (name) {
    case 'Crown':
      return <Crown className="w-5 h-5 text-brand-gold" />;
    case 'Smile':
      return <Smile className="w-5 h-5 text-brand-gold" />;
    case 'HeartHandshake':
      return <HeartHandshake className="w-5 h-5 text-brand-gold" />;
    case 'ShoppingBag':
      return <ShoppingBag className="w-5 h-5 text-brand-gold" />;
    case 'Sparkles':
    default:
      return <Sparkles className="w-5 h-5 text-brand-gold" />;
  }
};

export const Services: React.FC<ServicesProps> = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-white via-brand-pink-silk to-brand-cream relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-brand-pink-light/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-brand-gold-light/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-pink-dark bg-white px-4 py-2 rounded-full border border-brand-pink/30 shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>Our Signature Services</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-pink-dark tracking-tight">
            Crafted for Elegance, <span className="text-glam-gradient italic font-serif">Tailored for You</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-charcoal-muted leading-relaxed">
            Experience our curated suite of professional beauty services and equipment in Ojodu Berger, Lagos. Every service is delivered with passion and supreme artistry.
          </p>
        </div>

        {/* Services Grid (5 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isSpanTwo = index === 3 || index === 4;
            const whatsappUrl = getWhatsAppBookingUrl(service.title);

            return (
              <div
                key={service.id}
                className={`group relative rounded-3xl bg-white border-2 border-brand-pink-soft shadow-glam-card hover:shadow-glam-hover hover:border-brand-pink transition-all duration-500 overflow-hidden flex flex-col justify-between ${
                  isSpanTwo ? 'lg:col-span-1 lg:last:col-span-1' : ''
                }`}
              >
                {/* Image Container with Zoom Effect */}
                <div>
                  <div className="relative h-64 w-full overflow-hidden bg-brand-pink-deep">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-pink-deep/85 via-brand-pink-deep/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                    {/* Service Number Badge */}
                    <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center font-serif text-xs font-black text-brand-pink-dark shadow-sm border border-brand-pink/30">
                      0{index + 1}
                    </div>

                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br from-brand-pink to-brand-gold backdrop-blur-md flex items-center justify-center border border-white shadow-pink-glow">
                      {getServiceIcon(service.iconName)}
                    </div>

                    {/* Title on Image overlay */}
                    <div className="absolute bottom-4 left-5 right-5">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide drop-shadow-sm">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <p className="text-sm text-brand-charcoal-muted leading-relaxed min-h-[4rem]">
                      {service.shortDescription}
                    </p>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.features.slice(0, 2).map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="text-[11px] font-bold text-brand-pink-dark bg-brand-pink-soft px-3 py-1 rounded-lg border border-brand-pink/20"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions with High-Visibility Booking Button Linking to WhatsApp */}
                <div className="p-6 sm:p-7 pt-0 border-t border-brand-pink-soft flex items-center justify-between gap-2 mt-auto">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-charcoal hover:text-brand-pink-vibrant py-2 transition-colors"
                  >
                    <Info className="w-3.5 h-3.5 text-brand-pink" />
                    <span>Learn More</span>
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-flashy-pink inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold shadow-pink-glow transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white text-brand-pink" />
                    <span className="text-white font-extrabold tracking-wide">Book An Appointment</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner Prompt */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-pink-soft via-white to-brand-pink-soft border-2 border-brand-pink/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-glam-card">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-brand-pink-dark">
              Need a Custom Package for Your Bridal Train or Owambe Event in Lagos?
            </h4>
            <p className="text-xs sm:text-sm text-brand-charcoal-muted">
              We provide group bookings for weddings, birthdays, and special celebrations across Lagos.
            </p>
          </div>
          <a
            href={getWhatsAppBookingUrl('Group & Bridal Train Package')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-flashy-pink whitespace-nowrap px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold shadow-pink-glow flex items-center gap-2 cursor-pointer"
          >
            <span className="text-white font-extrabold">Book An Appointment for Group</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>

      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
