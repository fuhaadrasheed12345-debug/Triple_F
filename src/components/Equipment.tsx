import React from 'react';
import { ShoppingBag, MessageCircle, Check, Tag, ShieldCheck } from 'lucide-react';
import { EQUIPMENT_DATA, BRAND_CONFIG, getWhatsAppEquipmentUrl } from '../data/brandData';

interface EquipmentProps {
  onEnquireProduct?: (productName: string) => void;
}

export const Equipment: React.FC<EquipmentProps> = () => {
  return (
    <section id="equipment" className="py-20 lg:py-28 bg-gradient-to-b from-white via-brand-pink-silk to-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-pink-dark bg-white px-4 py-2 rounded-full border border-brand-pink/30 shadow-sm">
            <ShoppingBag className="w-4 h-4 text-brand-gold" />
            <span>Sales &amp; Supply</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-pink-dark tracking-tight">
            Beauty Tools &amp; <span className="text-glam-gradient italic font-serif">Essentials</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-charcoal-muted leading-relaxed">
            Get the tools and beauty essentials you need for your personal routine or professional beauty setup. Tested durability, high performance, and prompt delivery across Lagos.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EQUIPMENT_DATA.map((product) => {
            const whatsappUrl = getWhatsAppEquipmentUrl(product.name);

            return (
              <div
                key={product.id}
                className="luxury-card rounded-3xl bg-white border-2 border-brand-pink-soft shadow-glam-card hover:shadow-glam-hover hover:border-brand-pink overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-brand-pink-deep">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-black uppercase tracking-wider text-brand-pink-dark bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-brand-pink/30">
                        {product.category}
                      </span>
                    </div>

                    {/* In Stock Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 text-[10px] font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> In Stock (Lagos)
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-pink-dark leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-brand-charcoal-muted leading-relaxed">
                      {product.description}
                    </p>

                    {/* Specs bullet points */}
                    <div className="space-y-1.5 pt-1">
                      {product.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-brand-charcoal font-medium">
                          <Check className="w-3.5 h-3.5 text-brand-pink-vibrant shrink-0 font-black" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Price & Enquiry Actions */}
                <div className="p-6 sm:p-7 pt-4 border-t border-brand-pink-soft flex items-center justify-between gap-3 mt-auto bg-brand-pink-silk/60">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-brand-charcoal-light uppercase font-bold">Pricing</span>
                    <span className="text-xs sm:text-sm font-black text-brand-pink-dark flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5 text-brand-gold-dark" />
                      {product.priceTag}
                    </span>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-flashy-pink inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold shadow-pink-glow transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white text-brand-pink" />
                    <span className="text-white">Enquire on WhatsApp</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Sourcing Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-pink-dark via-brand-burgundy-deep to-brand-pink-deep text-white flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-brand-gold shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/50 shadow-gold-glow">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-extrabold text-white">
                Looking for Specific Salon Equipment or Wholesale Orders in Lagos?
              </h4>
              <p className="text-xs sm:text-sm text-brand-pink-soft mt-1 max-w-xl">
                We source commercial-grade beauty equipment, autoclaves, salon chairs, and wholesale lash packs for salons across Nigeria.
              </p>
            </div>
          </div>
          
          <a
            href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=Hello%20Triple%20F%20Beauty%2C%20I%20would%20like%20to%20enquire%20about%20bulk%20beauty%20equipment%20orders%20in%20Lagos.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-flashy-gold whitespace-nowrap px-8 py-4 rounded-full text-xs sm:text-sm font-black shadow-gold-glow flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat for Bulk Orders</span>
          </a>
        </div>

      </div>
    </section>
  );
};
