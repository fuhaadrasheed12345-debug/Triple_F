import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import type { GalleryItem } from '../types';
import { getWhatsAppBookingUrl } from '../data/brandData';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
  onBookItem?: (title: string) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  onClose,
  onSelect
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    onSelect(items[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIdx]);
  };

  const whatsappUrl = getWhatsAppBookingUrl(`Look: ${item.title}`);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* Dark Backdrop */}
      <div
        className="fixed inset-0 bg-brand-charcoal/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Main Lightbox Container */}
      <div className="relative w-full max-w-4xl bg-brand-pink-deep rounded-3xl shadow-2xl border-2 border-brand-gold overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-brand-pink text-white flex items-center justify-center border border-white/30 transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Preview with Next/Prev navigation */}
        <div className="relative md:w-3/5 bg-black flex items-center justify-center overflow-hidden min-h-[280px] md:min-h-[480px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[60vh] md:max-h-[80vh]"
          />

          {/* Navigation arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-brand-pink text-white flex items-center justify-center border border-white/30 transition-all shadow-md"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-brand-pink text-white flex items-center justify-center border border-white/30 transition-all shadow-md"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Info */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-white space-y-6 overflow-y-auto bg-gradient-to-b from-brand-pink-deep to-brand-burgundy-deep">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-black uppercase tracking-wider text-brand-gold bg-brand-gold/20 px-3 py-1 rounded-full border border-brand-gold/40">
                {item.category}
              </span>
              {item.occasion && (
                <span className="text-[11px] font-bold text-white bg-brand-pink/50 px-2.5 py-1 rounded-full border border-white/20">
                  {item.occasion}
                </span>
              )}
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug mb-3">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-brand-pink-soft leading-relaxed font-normal">
              {item.description}
            </p>
          </div>

          <div className="pt-4 border-t border-white/20 space-y-4">
            <div className="flex items-center justify-between text-xs text-brand-pink-soft font-semibold">
              <span>Triple F Lagos Portfolio</span>
              <span>{currentIndex + 1} of {items.length}</span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flashy-gold w-full inline-flex items-center justify-center gap-2.5 py-3.5 rounded-full text-xs sm:text-sm font-black shadow-gold-glow cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Book This Look on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
