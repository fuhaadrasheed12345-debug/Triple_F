import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { BeautyExperience } from './components/BeautyExperience';
import { Gallery } from './components/Gallery';
import { Equipment } from './components/Equipment';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { CTABanner } from './components/CTABanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Makeover');

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleEnquireProduct = (productName: string) => {
    setSelectedService(`Equipment: ${productName}`);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal flex flex-col font-sans selection:bg-brand-burgundy selection:text-brand-gold-light">
      {/* Sticky Header Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking('General Makeover & Styling')} />

        {/* 2. About Section */}
        <About onOpenBooking={() => handleOpenBooking('Studio Consultation')} />

        {/* 3. Signature Services Section */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 4. Featured Beauty Experience (Occasions) */}
        <BeautyExperience onOpenBooking={() => handleOpenBooking('Occasion / Event Glam')} />

        {/* 5. Portfolio & Lightbox Gallery */}
        <Gallery onOpenBooking={handleOpenBooking} />

        {/* 6. Beauty Equipment Sales */}
        <Equipment onEnquireProduct={handleEnquireProduct} />

        {/* 7. Why Choose Us (Value Pillars) */}
        <WhyChooseUs />

        {/* 8. Client Testimonials Carousel */}
        <Testimonials />

        {/* 9. Final Call To Action Banner */}
        <CTABanner onOpenBooking={() => handleOpenBooking('VIP Appointment')} />

        {/* 10. Contact & Interactive Booking Section */}
        <Contact initialService={selectedService} />
      </main>

      {/* Dark Velvet Footer */}
      <Footer />

      {/* Global Interactive Booking Pop-up Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />

      {/* Floating Animated WhatsApp Integration Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
