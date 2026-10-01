'use client';

import React, { useState } from 'react';
import { X, Sun, CheckCircle2, Phone, Mail, User, MapPin } from 'lucide-react';
import { QuoteFormData } from '@/types/solar';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
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
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 font-geist">Thank You!</h4>
              <p className="text-gray-600 text-sm max-w-xs mx-auto font-inter">
                Your quote request has been received. Our solar engineer will contact you shortly to conduct a site assessment.
              </p>
              <button
                onClick={resetAndClose}
                className="mt-4 px-6 py-2.5 bg-[#12372A] text-white font-semibold rounded-xl hover:bg-[#1b4d3e] transition-colors"
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
                      placeholder="9876543210"
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

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 py-3 bg-[#F5B82E] text-[#12372A] font-bold rounded-xl shadow-md hover:bg-[#e0a31c] transition-colors flex items-center justify-center space-x-2 text-base"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Submit Quote Request</span>
                    <Sun className="w-5 h-5 fill-current" />
                  </>
                )}
              </button>
              <p className="text-[11px] text-center text-gray-500">
                100% Privacy guaranteed. No pressure sales calls.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
