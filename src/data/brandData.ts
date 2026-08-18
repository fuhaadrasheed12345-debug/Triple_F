import type { ServiceItem, EquipmentItem, GalleryItem, TestimonialItem, WhyChoosePillar } from '../types';

export const BRAND_CONFIG = {
  name: 'Triple F Beauty',
  tagline: 'Beauty That Makes You Feel Unforgettable.',
  subTagline: 'Professional beauty services, elegant gele styling, stunning makeovers, nail care, pedicures, and quality beauty equipment—all in one place.',
  phoneDisplay: '07066977592',
  phoneRaw: '+2347066977592',
  phoneTel: 'tel:07066977592',
  whatsappNumber: '2347066977592',
  email: 'iyaibejif3@gmail.com',
  emailMailto: 'mailto:iyaibejif3@gmail.com',
  address: 'Ojodu Berger, Lagos, Nigeria',
  googleMapsQuery: 'Ojodu+Berger+Lagos+Nigeria',
  openingHours: 'Mon – Sat: 8:30 AM – 7:00 PM | Sunday: By Special Appointment',
  copyrightYear: 2026,
  developedBy: 'Fuhaad',
  socialLinks: {
    instagram: '#',
    tiktok: '#',
    facebook: '#',
    whatsapp: 'https://wa.me/2347066977592?text=Hello%20Triple%20F%20Beauty%2C%20I%20would%20like%20to%20book%20an%20appointment%20for%20your%20beauty%20services.'
  }
};

export const getWhatsAppBookingUrl = (serviceName?: string) => {
  const message = serviceName
    ? `Hello Triple F Beauty, I would like to book an appointment for ${serviceName}. Please let me know your available slots.`
    : 'Hello Triple F Beauty, I would like to book an appointment for your beauty services. Please let me know your available slots.';
  return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const getWhatsAppEquipmentUrl = (productName: string) => {
  const message = `Hello Triple F Beauty, I am interested in purchasing/enquiring about: ${productName}. Please share the price and availability.`;
  return `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'nail-fixing',
    title: 'Nail Fixing',
    shortDescription: 'Beautifully styled nails designed to complement your personality, outfit, and occasion.',
    fullDescription: 'From high-end acrylic sets, ombre gel extensions, chrome finishes, and custom 3D rhinestones to natural overlay cuticle care. Designed to withstand your everyday lifestyle while keeping your hands looking gorgeous.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80',
    iconName: 'Sparkles',
    features: ['Acrylic & Gel Extensions', 'Custom 3D Nail Art & Chrome', 'Ombre & French Polish', 'Cuticle Care & Nail Strengthening'],
    popularFor: 'Weddings, Birthdays & Daily Glam'
  },
  {
    id: 'gele-making',
    title: 'Gele Making',
    shortDescription: 'Elegant and professionally styled gele for weddings, parties, celebrations, and special occasions.',
    fullDescription: 'Authentic Nigerian traditional gele tying, pleated bridal head-ties, side-rose styles, avant-garde infinity designs, and ready-to-wear autogele creations made to turn heads at every owambe.',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=900&q=80',
    iconName: 'Crown',
    features: ['Traditional Bridal Gele', 'Ready-to-Wear Autogele', 'Avant-Garde & Fan Styles', 'On-Site Event Tying in Lagos'],
    popularFor: 'Owambe, Traditional Weddings & Coro'
  },
  {
    id: 'makeover',
    title: 'Makeover',
    shortDescription: 'Professional beauty makeovers designed to enhance your natural features and create a polished look.',
    fullDescription: 'Skin-first makeup artistry specifically formulated for African skin tones. Long-lasting, humidity-proof bridal glam, vibrant traditional engagement makeup, and high-fashion studio editorial glams.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80',
    iconName: 'Smile',
    features: ['Bridal Glam & White Wedding', 'Traditional Engagement Makeup', 'HD Studio Photoshoot Glam', 'Skin Tone Color Matching & Lash Styling'],
    popularFor: 'Bridal, Photoshoots & Milestone Events'
  },
  {
    id: 'pedicure',
    title: 'Pedicure',
    shortDescription: 'Relaxing and carefully performed pedicure services for clean, refreshed, and beautifully maintained feet.',
    fullDescription: 'Luxury pampering foot spa treatments featuring detoxifying botanical soaks, gentle sugar and sea-salt scrubs, callous softening, therapeutic foot massage, and flawless gel polish.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
    iconName: 'HeartHandshake',
    features: ['Jelly Spa & Sea Salt Foot Soak', 'Deep Callous Removal & Exfoliation', 'Therapeutic Foot Massage', 'Long-Wear Gel & Acrylic Toe Sets'],
    popularFor: 'Self-Care, Event Preparation & Hygiene'
  },
  {
    id: 'beauty-equipment',
    title: 'Sales of Beauty Equipment',
    shortDescription: 'Shop quality beauty equipment and essentials suitable for personal beauty care and professional use.',
    fullDescription: 'Commercial-grade salon tools, high-speed nail drills, dual-light UV/LED curing lamps, dimmable studio ring lights, sanitized tool cabinets, and autogele craft bases.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
    iconName: 'ShoppingBag',
    features: ['Professional UV/LED Nail Lamps', 'High-Torque Nail Drills & Bits', 'Studio LED Ring Lights', 'Autogele Bases & Beauty Tools'],
    popularFor: 'Beauty Professionals, Salons & Enthusiasts'
  }
];

export const OCCASIONS_DATA = [
  { name: 'Weddings & Engagements', desc: 'Bridal makeup, regal bridal gele, luxury nail sets, and bridal train glam.' },
  { name: 'Birthdays & Milestones', desc: 'Showstopper looks crafted to make your celebration radiant and unforgettable.' },
  { name: 'Owambe & Lagos Parties', desc: 'Durable, vibrant gele tying and glamorous makeup that lasts through all dancing.' },
  { name: 'Photoshoots & Editorial', desc: 'Camera-ready HD makeover, high-contrast lashes, and flawless skin finishes.' },
  { name: 'Special Celebrations', desc: 'Graduations, anniversaries, dinners, and thanksgiving styling.' },
  { name: 'Everyday Self-Care', desc: 'Pristine nail refills, pampering pedicures, and beauty upkeep in Ojodu Berger.' }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Ombre French Nails with Crystal Accents',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80',
    description: 'Precision sculpted acrylic nails with champagne crystal details on Nigerian hands.',
    occasion: 'Bridal Set'
  },
  {
    id: 'gal-2',
    title: 'Regal Pleated Nigerian Gele',
    category: 'Gele',
    image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=900&q=80',
    description: 'Crisp, symmetrical pleats designed for traditional Yoruba & Igbo wedding glam in Lagos.',
    occasion: 'Traditional Wedding'
  },
  {
    id: 'gal-3',
    title: 'Glow Velvet Glam Makeover',
    category: 'Makeup',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80',
    description: 'Warm golden undertone contour with glossy nude lips and precision defined brows on Nigerian model.',
    occasion: 'Birthday Glam'
  },
  {
    id: 'gal-4',
    title: 'Nourishing Spa Pedicure Treatment',
    category: 'Pedicure',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
    description: 'Exfoliating botanical scrub followed by lavender hydration mask and toe polish.',
    occasion: 'Weekend Self-Care'
  },
  {
    id: 'gal-5',
    title: 'Avant-Garde Infinity Gele & Golden Glow',
    category: 'Gele',
    image: 'https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?auto=format&fit=crop&w=900&q=80',
    description: 'Statement head-tie paired with high-radiance champagne highlight for Lagos party.',
    occasion: 'Owambe Glam'
  },
  {
    id: 'gal-6',
    title: 'Burgundy & Gold Foil Stiletto Nails',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80',
    description: 'Hand-detailed metallic gold flakes encapsulated over rich wine base.',
    occasion: 'Party Set'
  },
  {
    id: 'gal-7',
    title: 'Full Glam Bridal Makeover in Lagos',
    category: 'Makeup',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=900&q=80',
    description: 'Sweat-resistant 18-hour HD bridal beauty finish on glowing Nigerian skin.',
    occasion: 'White Wedding'
  },
  {
    id: 'gal-8',
    title: 'Professional Salon UV Nail Lamps & Drills',
    category: 'Beauty',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
    description: 'High-grade salon tools and accessories available for direct purchase in Lagos.',
    occasion: 'Equipment Sales'
  },
  {
    id: 'gal-9',
    title: 'Gloss Chrome Nail Art & Radiant Glam',
    category: 'Nails',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80',
    description: 'Radiant African beauty with mirror chrome manicure finish and glowing skin.',
    occasion: 'Cocktail Set'
  }
];

export const EQUIPMENT_DATA: EquipmentItem[] = [
  {
    id: 'eq-1',
    name: 'Dual-Light 54W UV/LED Nail Lamp',
    category: 'Nail Equipment',
    description: 'Smart sensor, 4 timer settings (10s, 30s, 60s, 99s painless low heat mode), rapid curing for all gel & acrylic brands.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    specs: ['54W High Power', 'Auto Infrared Sensor', 'Digital LCD Display', 'Detachable Magnetic Base'],
    priceTag: 'Contact for Price',
    inStock: true
  },
  {
    id: 'eq-2',
    name: 'High-Torque 35,000 RPM Nail Drill & E-File',
    category: 'Nail Equipment',
    description: 'Ultra-smooth vibration-free handpiece, forward/reverse rotation, variable speed dial, comes with 6 ceramic carbide drill bits.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    specs: ['35,000 RPM Max Speed', 'Low Heat & Low Noise', 'Rechargeable Battery (10h)', 'Universal 3/32" Bit Shank'],
    priceTag: 'Contact for Price',
    inStock: true
  },
  {
    id: 'eq-3',
    name: '18-Inch Bi-Color Dimmable Studio Ring Light',
    category: 'Studio & Lighting',
    description: 'Essential for Nigerian makeup artists, gele stylists, and salon content creation. Includes heavy-duty tripod and dual phone mount.',
    image: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80',
    specs: ['3200K - 5600K Color Temp', 'CRI 95+ True Color', 'Wireless Remote Control', 'Includes 2m Light Stand'],
    priceTag: 'Contact for Price',
    inStock: true
  },
  {
    id: 'eq-4',
    name: 'Professional Luxury Pedicure Basin & Foot Spa',
    category: 'Pedicure Tools',
    description: 'Deep soaking basin with heat maintenance, bubble jet massage, and roller foot reflexology zones.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    specs: ['Thermostatic Heat Control', 'Hydrotherapy Bubbles', 'Acupressure Rollers', 'Splash Guard Design'],
    priceTag: 'Contact for Price',
    inStock: true
  },
  {
    id: 'eq-5',
    name: '24-Piece Master Pro Makeup Brush Set',
    category: 'Makeup Essentials',
    description: 'Ultra-soft cruelty-free synthetic bristles with champagne gold ferrules and luxury travel organizer pouch.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    specs: ['Densely Packed Fibers', 'Non-Shedding Durability', 'Complete Face & Eye Set', 'Luxury Roll-Up Pouch'],
    priceTag: 'Contact for Price',
    inStock: true
  },
  {
    id: 'eq-6',
    name: 'Salon Tool UV/Heat Sterilizer Cabinet',
    category: 'Salon Essentials',
    description: 'High-temperature sanitation unit for tweezers, nail clippers, scissors, and salon accessories.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    specs: ['Dual Sterilization Mode', 'Stainless Steel Trays', 'Safety Auto-Shutoff', 'High Capacity Chamber'],
    priceTag: 'Contact for Price',
    inStock: true
  }
];

export const WHY_CHOOSE_US: WhyChoosePillar[] = [
  {
    title: 'Professional Touch',
    description: 'Carefully delivered beauty services with exceptional attention to detail, precision techniques, and skin safety.',
    icon: 'Sparkles',
    badge: 'Artistry & Care'
  },
  {
    title: 'Quality Service',
    description: 'A commitment to creating beautiful, lasting, and satisfying results using only premium tested beauty products.',
    icon: 'Award',
    badge: '100% Commitment'
  },
  {
    title: 'All-in-One Beauty',
    description: 'Multiple beauty services—nails, gele, makeover, pedicure, plus equipment sales—all unified under one trusted brand.',
    icon: 'Layers',
    badge: 'Complete Hub'
  },
  {
    title: 'Convenient Location',
    description: 'Easily accessible studio serving clients around Ojodu Berger and the surrounding Lagos & Ogun border areas.',
    icon: 'MapPin',
    badge: 'Ojodu Berger'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Titilayo',
    serviceUsed: 'Gele Making & Bridal Makeover',
    location: 'Lagos',
    rating: 5,
    review: 'The gele styling was beautiful and lasted throughout my event. I received endless compliments from guests, and the makeup stayed fresh even through hours of dancing. I absolutely loved the final look!',
    date: 'February 2026'
  },
  {
    id: 'test-2',
    clientName: 'Ngozi',
    serviceUsed: 'Acrylic Nail Fixing',
    location: 'Ojodu Berger',
    rating: 5,
    review: 'Triple F Beauty is my go-to salon in Ojodu Berger. The nail technician was extremely gentle with my cuticles and the acrylic set was neat, smooth, and shaped to absolute perfection.',
    date: 'January 2026'
  },
  {
    id: 'test-3',
    clientName: 'Amina',
    serviceUsed: 'Pedicure & Foot Spa',
    location: 'Lagos',
    rating: 5,
    review: 'The most relaxing pedicure session I have had in a long time. The foot massage and scrub left my feet feeling super soft and refreshed. Truly professional service from start to finish.',
    date: 'March 2026'
  },
  {
    id: 'test-4',
    clientName: 'Bolanle',
    serviceUsed: 'Beauty Equipment Purchase',
    location: 'Ikeja / Berger',
    rating: 5,
    review: 'Purchased my 54W UV nail curing lamp and drill bits from Triple F Beauty. The quality is top notch and it was delivered swiftly without any hassle. Highly recommended!',
    date: 'February 2026'
  }
];
