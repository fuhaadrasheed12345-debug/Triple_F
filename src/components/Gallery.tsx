import React, { useState, useMemo } from 'react';
import { Sparkles, Eye } from 'lucide-react';
import { GALLERY_DATA } from '../data/brandData';
import type { GalleryItem } from '../types';
import { Lightbox } from './Lightbox';

interface GalleryProps {
  onOpenBooking?: (serviceName?: string) => void;
}

const CATEGORIES = ['All', 'Nails', 'Gele', 'Makeup', 'Pedicure', 'Beauty'] as const;

export const Gallery: React.FC<GalleryProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_DATA;
    return GALLERY_DATA.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-brand-cream relative overflow-hidden bg-glam-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-pink-dark bg-white px-4 py-2 rounded-full border border-brand-pink/30 shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>Our Lagos Portfolio</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-pink-dark tracking-tight">
            Artistry in Every <span className="text-glam-gradient italic font-serif">Detail</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-charcoal-muted leading-relaxed">
            Explore our curated gallery of nail transformations, crisp gele pleats, glowing Nigerian makeovers, and soothing pedicure results created for our clients in Lagos.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 shadow-sm ${
                  isActive
                    ? 'btn-flashy-pink text-white shadow-pink-glow'
                    : 'bg-white text-brand-charcoal hover:bg-brand-pink-soft hover:text-brand-pink-dark border border-brand-pink-soft'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden bg-brand-pink-deep cursor-pointer shadow-glam-card hover:shadow-glam-hover transition-all duration-500 aspect-[4/5] border-2 border-brand-pink-soft hover:border-brand-pink"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-pink-deep/90 via-brand-pink-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6" />

              {/* Badges on Hover */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-gold bg-brand-pink-dark/90 backdrop-blur-md px-3 py-1 rounded-full border border-brand-gold/40 shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Center Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-gold to-brand-pink text-white flex items-center justify-center shadow-gold-glow">
                  <Eye className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Bottom Caption on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                {item.occasion && (
                  <p className="text-[11px] text-brand-gold uppercase tracking-wider font-black mb-1">
                    {item.occasion}
                  </p>
                )}
                <h3 className="font-serif text-lg font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedImage}
        items={filteredItems}
        onClose={() => setSelectedImage(null)}
        onSelect={(img) => setSelectedImage(img)}
      />
    </section>
  );
};
