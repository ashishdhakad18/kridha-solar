'use client';

import React from 'react';
import { processSteps } from '@/data/solarData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F7F9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#12372A] bg-[#12372A]/10 px-3.5 py-1 rounded-full font-mono">
            Turnkey Customer Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight font-geist">
            Go Solar in 5 Simple Steps
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-inter">
            From initial roof evaluation to net-meter commissioning, Kridha Solar handles every phase of your solar installation.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="mt-16 relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {processSteps.map((stepItem, idx) => (
              <div
                key={stepItem.step}
                className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#12372A]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-[#12372A] text-[#F5B82E] font-black text-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      {stepItem.step}
                    </span>
                    {idx < processSteps.length - 1 && (
                      <ArrowRight className="hidden lg:block w-5 h-5 text-gray-300 group-hover:text-[#12372A] group-hover:translate-x-1 transition-all" />
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#12372A] transition-colors">
                    {stepItem.title}
                  </h3>

                  <p className="mt-2 text-xs text-gray-600 leading-relaxed font-normal">
                    {stepItem.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center space-x-1.5 text-[11px] text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Hassle-Free Process</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
