export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  features: string[];
  popularFor: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
  priceTag: string; // "Contact for Price" or placeholder
  inStock: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Nails' | 'Gele' | 'Makeup' | 'Pedicure' | 'Beauty';
  image: string;
  description: string;
  occasion?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  serviceUsed: string;
  location: string;
  rating: number;
  review: string;
  avatarUrl?: string;
  date: string;
}

export interface WhyChoosePillar {
  title: string;
  description: string;
  icon: string;
  badge: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime?: string;
  message: string;
}
