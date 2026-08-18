import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandData';
import type { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Makeover'
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: initialService,
    preferredDate: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }
    setError('');
    setStatus('submitting');

    setTimeout(() => {
      setStatus('success');
    }, 700);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Triple F Beauty,\n\nI would like to book an appointment:\n- Name: ${formData.fullName || 'Valued Client'}\n- Phone: ${formData.phone || 'N/A'}\n- Service: ${formData.service}\n- Preferred Date: ${formData.preferredDate || 'Flexible'}\n- Notes: ${formData.message || 'None'}`
    );
    window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleClose = () => {
    setStatus('idle');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-charcoal/75 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-glam-hover border-2 border-brand-pink overflow-hidden z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/95 text-brand-charcoal hover:text-brand-pink-vibrant flex items-center justify-center shadow transition-colors border border-brand-pink/20"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-brand-pink-dark via-brand-pink-magenta to-brand-pink-deep px-6 py-6 text-white border-b-2 border-brand-gold">
          <div className="flex items-center gap-2 text-brand-gold text-xs font-black uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Triple F Beauty Studio</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            Book An Appointment
          </h3>
          <p className="text-xs text-brand-pink-soft mt-1 font-medium">
            Ojodu Berger, Lagos • Instant WhatsApp Booking
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {status === 'success' ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-pink-100 text-brand-pink-vibrant flex items-center justify-center mx-auto shadow-pink-glow">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-brand-pink-dark">
                Appointment Request Received!
              </h4>
              <p className="text-xs sm:text-sm text-brand-charcoal-muted leading-relaxed max-w-sm mx-auto font-medium">
                Thank you, <strong>{formData.fullName}</strong>. We will confirm your session for <strong className="text-brand-pink-vibrant">{formData.service}</strong> via WhatsApp / call promptly.
              </p>
              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={handleWhatsAppBooking}
                  className="btn-flashy-pink py-3.5 rounded-full text-xs font-extrabold flex items-center justify-center gap-2 shadow-pink-glow"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span className="text-white">Message Directly on WhatsApp</span>
                </button>
                <button
                  onClick={handleClose}
                  className="py-2.5 text-xs text-brand-charcoal font-semibold hover:underline"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2 font-semibold">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Chioma Eze"
                  className="w-full px-4 py-2.5 rounded-xl bg-brand-pink-silk/60 border border-brand-pink-soft focus:border-brand-pink focus:outline-none text-sm font-medium"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1">
                    Phone Number (WhatsApp) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="070..."
                    className="w-full px-4 py-2.5 rounded-xl bg-brand-pink-silk/60 border border-brand-pink-soft focus:border-brand-pink focus:outline-none text-sm font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1">
                    Service <span className="text-rose-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-xl bg-brand-pink-silk/60 border border-brand-pink-soft focus:border-brand-pink focus:outline-none text-xs sm:text-sm font-medium"
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

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-brand-pink-silk/60 border border-brand-pink-soft focus:border-brand-pink focus:outline-none text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-1">
                  Special Notes
                </label>
                <textarea
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Optional details (e.g. event type, preferred time)..."
                  className="w-full px-4 py-2.5 rounded-xl bg-brand-pink-silk/60 border border-brand-pink-soft focus:border-brand-pink focus:outline-none text-xs resize-none font-medium"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={handleWhatsAppBooking}
                  className="btn-flashy-pink w-full py-3.5 rounded-full text-xs sm:text-sm font-extrabold shadow-pink-glow flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span className="text-white">Book An Appointment on WhatsApp</span>
                </button>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-2.5 rounded-full border-2 border-brand-pink/30 text-brand-pink-dark font-bold text-xs hover:bg-brand-pink-soft transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-brand-pink" />
                  <span>{status === 'submitting' ? 'Submitting...' : 'Submit via Web Form'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
