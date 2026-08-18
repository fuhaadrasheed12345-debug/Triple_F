import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { BRAND_CONFIG, getWhatsAppBookingUrl } from '../data/brandData';
import type { BookingFormData } from '../types';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: initialService || 'Makeover',
    preferredDate: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return false;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone number.');
      return false;
    }
    if (!formData.service) {
      setErrorMessage('Please select a service or equipment.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
    }, 700);
  };

  const handleSendToWhatsApp = () => {
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMessage('Please enter your name and phone number before sending to WhatsApp.');
      return;
    }

    const text = encodeURIComponent(
      `Hello Triple F Beauty,\n\nI would like to book an appointment / make an enquiry:\n- Name: ${formData.fullName}\n- Phone: ${formData.phone}\n- Email: ${formData.email || 'N/A'}\n- Service: ${formData.service}\n- Preferred Date: ${formData.preferredDate || 'Flexible'}\n- Note: ${formData.message || 'None'}`
    );

    window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: 'Makeover',
      preferredDate: '',
      message: '',
    });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-cream relative overflow-hidden bg-glam-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-pink-dark bg-white px-4 py-2 rounded-full border border-brand-pink/30 shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>Get in Touch</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-pink-dark tracking-tight">
            Book Your Appointment &amp; <span className="text-glam-gradient italic font-serif">Enquiries</span>
          </h2>

          <p className="text-sm sm:text-base text-brand-charcoal-muted leading-relaxed">
            Have questions or ready to schedule your glam session? Reach out directly via WhatsApp, call, email, or fill our quick form below.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl bg-gradient-to-br from-brand-pink-dark via-brand-pink-magenta to-brand-pink-deep text-white p-8 sm:p-9 shadow-glam-hover border-2 border-brand-gold space-y-8">
              
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
                  Triple F <span className="text-gold-gradient">Beauty</span>
                </span>
                <p className="text-xs sm:text-sm text-brand-pink-soft mt-2 leading-relaxed font-medium">
                  Professional beauty services and quality beauty essentials in Ojodu Berger, Lagos.
                </p>
              </div>

              <div className="space-y-5">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/40 shadow-gold-glow">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-brand-gold uppercase tracking-wider">Location</h4>
                    <p className="text-sm font-semibold text-white mt-0.5">{BRAND_CONFIG.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/40 shadow-gold-glow">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-brand-gold uppercase tracking-wider">Phone &amp; WhatsApp</h4>
                    <a href={BRAND_CONFIG.phoneTel} className="text-sm font-bold text-white hover:text-brand-gold transition-colors block mt-0.5">
                      {BRAND_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/40 shadow-gold-glow">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-brand-gold uppercase tracking-wider">Email Address</h4>
                    <a href={BRAND_CONFIG.emailMailto} className="text-sm font-bold text-white hover:text-brand-gold transition-colors block mt-0.5 break-all">
                      {BRAND_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/40 shadow-gold-glow">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-brand-gold uppercase tracking-wider">Opening Hours</h4>
                    <p className="text-xs text-brand-pink-soft mt-0.5 font-medium">{BRAND_CONFIG.openingHours}</p>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-4 border-t border-white/20 flex flex-wrap gap-3">
                <a
                  href={getWhatsAppBookingUrl('Contact Section Booking')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-flashy-gold py-3.5 rounded-full text-xs sm:text-sm font-black shadow-gold-glow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Book An Appointment on WhatsApp</span>
                </a>

                <a
                  href={BRAND_CONFIG.phoneTel}
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-bold border border-white/30 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Call Us</span>
                </a>

                <a
                  href={BRAND_CONFIG.emailMailto}
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-bold border border-white/30 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Send Email</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-7 sm:p-10 shadow-glam-hover border-2 border-brand-pink-soft relative">
              
              {status === 'success' ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-pink-100 text-brand-pink-vibrant flex items-center justify-center mx-auto shadow-pink-glow">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-pink-dark">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-brand-charcoal-muted max-w-md mx-auto leading-relaxed font-medium">
                    Your enquiry for <strong className="text-brand-pink-vibrant">{formData.service}</strong> has been received. Our team at Triple F Beauty will reach out to you via WhatsApp / phone shortly.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleSendToWhatsApp}
                      className="btn-flashy-pink px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-pink-glow cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span className="text-white">Follow-up on WhatsApp</span>
                    </button>
                    <button
                      onClick={resetForm}
                      className="px-6 py-3.5 rounded-full border-2 border-brand-pink/30 text-brand-pink-dark text-xs sm:text-sm font-bold hover:bg-brand-pink-soft transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brand-pink-dark">
                      Send an Appointment Enquiry
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-charcoal-muted mt-1">
                      Fill in your details below and we will confirm availability promptly.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2 font-semibold">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Blessing Adeleke"
                        className="w-full px-4 py-3 rounded-xl bg-brand-pink-silk/50 border border-brand-pink-soft focus:border-brand-pink focus:bg-white focus:outline-none text-sm text-brand-charcoal transition-all font-medium"
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1.5">
                        Phone Number (WhatsApp) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 08012345678"
                        className="w-full px-4 py-3 rounded-xl bg-brand-pink-silk/50 border border-brand-pink-soft focus:border-brand-pink focus:bg-white focus:outline-none text-sm text-brand-charcoal transition-all font-medium"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-brand-pink-silk/50 border border-brand-pink-soft focus:border-brand-pink focus:bg-white focus:outline-none text-sm text-brand-charcoal transition-all font-medium"
                      />
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1.5">
                        Service of Interest <span className="text-rose-500">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-brand-pink-silk/50 border border-brand-pink-soft focus:border-brand-pink focus:bg-white focus:outline-none text-sm text-brand-charcoal transition-all font-medium"
                        required
                      >
                        <option value="Nail Fixing">Nail Fixing</option>
                        <option value="Gele Making">Gele Making</option>
                        <option value="Makeover">Makeover</option>
                        <option value="Pedicure">Pedicure</option>
                        <option value="Sales of Beauty Equipment">Sales of Beauty Equipment</option>
                        <option value="Bridal / Group Package">Bridal / Group Package</option>
                        <option value="Other">Other Enquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-brand-pink-silk/50 border border-brand-pink-soft focus:border-brand-pink focus:bg-white focus:outline-none text-sm text-brand-charcoal transition-all font-medium"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1.5">
                      Message / Special Requests
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event, preferred look, or equipment inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-brand-pink-silk/50 border border-brand-pink-soft focus:border-brand-pink focus:bg-white focus:outline-none text-sm text-brand-charcoal transition-all resize-none font-medium"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="btn-flashy-pink w-full sm:flex-1 py-4 rounded-full text-xs sm:text-sm font-extrabold shadow-pink-glow flex items-center justify-center gap-2 cursor-pointer"
                      title="Send directly to WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span className="text-white">Book An Appointment on WhatsApp</span>
                    </button>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto px-6 py-4 rounded-full border-2 border-brand-pink/40 text-brand-pink-dark font-bold text-xs sm:text-sm hover:bg-brand-pink-soft transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-brand-pink" />
                      <span>{status === 'submitting' ? 'Sending...' : 'Send via Web Form'}</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
