'use client';

import React from 'react';
import { Star, Quote, Info } from 'lucide-react';
import { testimonialsData } from '@/data/solarData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F7F9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#12372A] bg-[#12372A]/10 px-3.5 py-1 rounded-full">
            Customer Feedback & Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-base text-gray-600">
            Real feedback from homeowners and business managers who made the switch to clean rooftop energy with Kridha Solar.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-100 group-hover:text-[#F5B82E]/20 transition-colors pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Rating stars */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5B82E] text-[#F5B82E]" />
                  ))}
                </div>

                <p className="text-sm text-gray-700 italic leading-relaxed">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-medium">
                    {t.role} • {t.location}
                  </p>
                </div>
                <span className="text-[11px] font-bold text-[#12372A] bg-emerald-50 px-2.5 py-1 rounded-lg">
                  {t.systemSize}
                </span>
              </div>

              {t.placeholderNote && (
                <div className="mt-3 flex items-center space-x-1 text-[10px] text-gray-400 italic">
                  <Info className="w-3 h-3 text-gray-400" />
                  <span>{t.placeholderNote}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
