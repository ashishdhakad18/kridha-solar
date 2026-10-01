'use client';

import React from 'react';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';
import { solarSolutions } from '@/data/solarData';

interface SolarSolutionsProps {
  onSelectSolution: (type: 'Residential' | 'Commercial' | 'Industrial') => void;
}

export const SolarSolutions: React.FC<SolarSolutionsProps> = ({ onSelectSolution }) => {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-[#F7F9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#12372A] bg-[#12372A]/10 px-3 py-1 rounded-full font-mono">
            Tailored Energy Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight font-geist">
            Solar Solutions for Every Need
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-inter">
            Whether for your home, commercial property, or industrial facility, Kridha Solar engineers high-efficiency solar plants built for maximum energy yield.
          </p>
        </div>

        {/* 3 Solutions Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {solarSolutions.map((solution) => {
            const mappedType =
              solution.id.includes('residential')
                ? 'Residential'
                : solution.id.includes('commercial')
                ? 'Commercial'
                : 'Industrial';

            return (
              <div
                key={solution.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 hover:border-[#12372A]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Visual Image */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#12372A] text-[#F5B82E] text-xs font-bold px-3 py-1 rounded-full shadow font-mono">
                      {solution.tag}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider font-mono">
                      {solution.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#12372A] transition-colors font-geist">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-inter">
                      {solution.description}
                    </p>

                    {/* Features list */}
                    <ul className="pt-2 space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs text-gray-700 font-medium">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Action */}
                  <div className="pt-4 border-t border-gray-100">
                    <button
                      onClick={() => onSelectSolution(mappedType)}
                      className="w-full py-3 bg-[#12372A]/5 hover:bg-[#12372A] text-[#12372A] hover:text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center space-x-2 group/btn"
                    >
                      <span>Learn More & Quote</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
