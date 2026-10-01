'use client';

import React, { useState } from 'react';
import { X, Sun, CheckCircle2, Phone, Mail, User, MapPin, MessageSquare, ExternalLink } from 'lucide-react';
import { QuoteFormData } from '@/types/solar';
import { companyDetails } from '@/data/solarData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPropertyType?: 'Residential' | 'Commercial' | 'Industrial';
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultPropertyType = 'Residential',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    city: 'Bhopal',
    propertyType: defaultPropertyType,
    monthlyBill: '5000',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const getWhatsAppUrl = () => {
    const cleanPhone = companyDetails.phone.replace(/[^0-9]/g, '');
    const message = `☀️ *New Solar Quote Request - Kridha Solar* ☀️

👤 *Full Name:* ${formData.fullName}
📞 *Phone Number:* ${formData.phone}
📍 *City / Location:* ${formData.city}
🏢 *Property Type:* ${formData.propertyType}
⚡ *Monthly Electricity Bill:* ₹ ${formData.monthlyBill}
📧 *Email:* ${formData.email || 'N/A'}`;

    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
  };

  const getGmailUrl = () => {
    const subject = `New Solar Quote Request - ${formData.fullName}`;
    const body = `Hello Kridha Solar Team,

I would like to request a free rooftop solar quote with the following details:

- Full Name: ${formData.fullName}
- Phone Number: ${formData.phone}
- City / Location: ${formData.city}
- Property Type: ${formData.propertyType}
- Approx. Monthly Electricity Bill: ₹ ${formData.monthlyBill}
- Email: ${formData.email || 'N/A'}

Please contact me to schedule a rooftop site evaluation.

Thank you,
${formData.fullName}`;

    return `mailto:${companyDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Open WhatsApp pre-filled message directly
    window.open(getWhatsAppUrl(), '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg overflow-hidden bg-white rounded-2xl shadow-2xl border border-gray-100">
        {/* Header */}
        <div className="bg-[#12372A] text-white p-6 relative">
          <button
            onClick={resetAndClose}
            className="absolute top-5 right-5 text-gray-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-[#F5B82E] rounded-lg text-[#12372A]">
              <Sun className="w-5 h-5 fill-current" />
            </div>
            <span className="font-bold text-lg tracking-wide text-[#F5B82E]">Kridha Solar</span>
          </div>
          <h3 className="mt-3 text-2xl font-bold font-geist">Request a Free Solar Quote</h3>
          <p className="text-xs text-emerald-100 mt-1 font-inter">
            Get a tailored rooftop assessment & exact financial savings estimate.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-4 text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-gray-900 font-geist">Quote Request Prepared!</h4>
                <p className="text-gray-600 text-xs mt-1 font-inter">
                  Your quote details are formatted and ready to send to our team.
                </p>
              </div>

              {/* Submitted Details Summary Card */}
              <div className="bg-[#F7F9F5] p-4 rounded-xl border border-gray-200 text-left text-xs space-y-2 font-inter">
                <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
                  <span className="text-gray-500 font-medium">Name:</span>
                  <span className="font-bold text-gray-900">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
                  <span className="text-gray-500 font-medium">Phone:</span>
                  <span className="font-bold text-gray-900">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
                  <span className="text-gray-500 font-medium">Location:</span>
                  <span className="font-bold text-gray-900">{formData.city}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200/60 pb-1.5">
                  <span className="text-gray-500 font-medium">Property:</span>
                  <span className="font-bold text-emerald-800">{formData.propertyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Monthly Bill:</span>
                  <span className="font-bold text-gray-900">₹ {formData.monthlyBill}</span>
                </div>
              </div>

              {/* Instant Communication CTAs */}
              <div className="space-y-3 pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow transition-colors flex items-center justify-center space-x-2 text-sm"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Details via WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={getGmailUrl()}
                  className="w-full py-3 px-4 bg-gray-900 hover:bg-black text-white font-bold rounded-xl shadow transition-colors flex items-center justify-center space-x-2 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Details via Gmail / Email</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <button
                onClick={resetAndClose}
                className="text-xs text-gray-500 hover:text-gray-700 font-medium underline pt-2"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Property Type selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2 font-mono">
                  Property Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Residential', 'Commercial', 'Industrial'] as const).map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, propertyType: type })}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                        formData.propertyType === type
                          ? 'border-[#12372A] bg-[#12372A] text-white shadow-sm'
                          : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#12372A] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Phone & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="9630280482"
                      className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#12372A] focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                    City / Location
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Bhopal"
                      className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#12372A] focus:border-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#12372A] focus:border-transparent outline-none"
                  />
                </div>
              </div>

              {/* Monthly Electricity Bill */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
                  Approx. Monthly Bill (₹)
                </label>
                <select
                  value={formData.monthlyBill}
                  onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#12372A] focus:border-transparent outline-none bg-white"
                >
                  <option value="2000">Under ₹ 3,000 / month</option>
                  <option value="5000">₹ 3,000 - ₹ 7,000 / month</option>
                  <option value="10000">₹ 7,000 - ₹ 15,000 / month</option>
                  <option value="25000">₹ 15,000 - ₹ 50,000 / month</option>
                  <option value="50000">Above ₹ 50,000 / month</option>
                </select>
              </div>

              {/* Submit Action Options */}
              <div className="pt-1 space-y-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#F5B82E] text-[#12372A] font-extrabold rounded-xl shadow-md hover:bg-[#e0a31c] transition-colors flex items-center justify-center space-x-2 text-base"
                >
                  {isSubmitting ? (
                    <span>Preparing Quote...</span>
                  ) : (
                    <>
                      <span>Submit & Send Quote via WhatsApp</span>
                      <MessageSquare className="w-5 h-5 fill-current" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-gray-500">
                Instantly connects to WhatsApp (+91 9630280482) or Gmail with pre-filled quote details.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

