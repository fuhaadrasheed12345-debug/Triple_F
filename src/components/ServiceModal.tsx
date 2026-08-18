import React from 'react';
import { X, Check, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import type { ServiceItem } from '../types';
import { getWhatsAppBookingUrl } from '../data/brandData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService?: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose
}) => {
  if (!service) return null;

  const whatsappUrl = getWhatsAppBookingUrl(service.title);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-charcoal/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-2 border-brand-pink/40 overflow-hidden z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/95 text-brand-charcoal hover:text-brand-pink-vibrant flex items-center justify-center shadow-lg transition-colors border border-brand-pink/20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Image Banner */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-brand-pink-deep">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-pink-deep/95 via-brand-pink-deep/50 to-transparent" />
          
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest text-brand-gold bg-brand-pink-dark/80 px-3 py-1 rounded-full border border-brand-gold/40 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Triple F Signature
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-brand-pink-dark mb-2">Overview</h4>
            <p className="text-sm sm:text-base text-brand-charcoal leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Features / What's Included */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-extrabold text-brand-pink-dark mb-3">Highlights &amp; Options</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-brand-pink-silk border border-brand-pink-soft">
                  <div className="w-5 h-5 rounded-full bg-brand-pink flex items-center justify-center text-white shrink-0">
                    <Check className="w-3 h-3 text-white font-black" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-brand-charcoal">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular For */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-brand-pink-soft to-white border border-brand-pink/30 text-xs text-brand-charcoal flex items-center justify-between">
            <span className="font-bold text-brand-pink-dark">Recommended For:</span>
            <span className="font-semibold text-brand-pink-vibrant">{service.popularFor}</span>
          </div>

          {/* Actions */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-brand-pink-soft">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-brand-charcoal-muted/30 text-brand-charcoal text-xs font-bold hover:bg-brand-pink-soft transition-colors"
            >
              Close
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flashy-pink w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold shadow-pink-glow transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span className="text-white">Book An Appointment on WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
