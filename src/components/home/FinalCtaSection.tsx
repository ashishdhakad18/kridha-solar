'use client';

import React from 'react';
import { Sun, ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { companyDetails } from '@/data/solarData';

interface FinalCtaSectionProps {
  onOpenQuoteModal: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F7F9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#12372A] text-white p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl border border-emerald-900/50">
          {/* Decorative Sun Glow Accent */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F5B82E]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#F5B82E]/20 text-[#F5B82E] text-xs font-bold uppercase tracking-wider">
              <Sun className="w-4 h-4 fill-current" />
              <span>Start Saving Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Make the Switch to Solar?
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-2xl mx-auto">
              Talk to Kridha Solar about the right solar solution for your home or business. Our engineers provide complimentary site surveys and customized financial savings proposals.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-8 py-4 bg-[#F5B82E] hover:bg-[#e0a31c] text-[#12372A] text-base font-extrabold rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${companyDetails.phone}`}
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-base font-semibold rounded-2xl transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5 text-[#F5B82E]" />
                <span>Call {companyDetails.phone}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#F5B82E]" />
                <span>Zero Obligation Free Consultation</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#F5B82E]" />
                <span>25-Year Performance Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
