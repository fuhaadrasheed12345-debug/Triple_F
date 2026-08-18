import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { getWhatsAppBookingUrl } from '../data/brandData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Floating Mini Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-pink-glow border-2 border-brand-pink text-xs text-brand-charcoal animate-float">
          <Sparkles className="w-4 h-4 text-brand-gold-dark shrink-0" />
          <span className="font-extrabold text-brand-pink-dark">Chat &amp; Book on WhatsApp!</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-brand-charcoal-muted hover:text-brand-pink p-0.5 rounded-full"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Pulsating Flashy Floating Button */}
      <a
        href={getWhatsAppBookingUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-16 h-16 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-pink-glow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300 border-2 border-white"
        aria-label="Chat with Triple F Beauty on WhatsApp"
      >
        {/* Pulsating Ring */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 group-hover:opacity-80" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-8 h-8 relative z-10 fill-white" />
      </a>
    </div>
  );
};
