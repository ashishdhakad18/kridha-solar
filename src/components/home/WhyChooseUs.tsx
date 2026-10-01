'use client';

import React from 'react';
import { ShieldCheck, Wrench, TrendingDown, Headphones } from 'lucide-react';
import { whyChooseUsData } from '@/data/solarData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Wrench: Wrench,
  TrendingDown: TrendingDown,
  Headphones: Headphones,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#12372A] bg-[#12372A]/10 px-3 py-1 rounded-full font-mono">
            Our Key Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight font-geist">
            Why Choose Kridha Solar?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-inter">
            We simplify your transition to solar energy with engineered precision, high-quality components, and seamless end-to-end service.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {whyChooseUsData.map((card) => {
            const IconComponent = iconMap[card.iconName];

            return (
              <div
                key={card.id}
                className="group bg-[#F7F9F5] p-6 sm:p-8 rounded-2xl border border-gray-200/80 hover:border-[#12372A]/30 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#12372A] text-[#F5B82E] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {IconComponent && <IconComponent className="w-6 h-6" />}
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-[#12372A] transition-colors">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold text-[#12372A]">
                  <span>Reliable & Verified</span>
                  <span className="w-2 h-2 rounded-full bg-[#F5B82E]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
