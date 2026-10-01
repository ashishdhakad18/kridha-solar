'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Calculator, Sun, Zap, TrendingDown, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-[#F7F9F5]">
      {/* Background Accent Gradients (Subtle) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#F5B82E]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#12372A]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#12372A]/10 border border-[#12372A]/15 text-[#12372A] text-xs font-semibold tracking-wide">
              <Sun className="w-4 h-4 text-[#F5B82E] fill-current" />
              <span>Rooftop Solar Solutions Specialist</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.12]">
              Switch to Solar. <br />
              <span className="text-[#12372A] relative inline-block">
                Save on Every Bill.
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#F5B82E]/40 -z-10 rounded-sm" />
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl font-normal leading-relaxed">
              Reliable rooftop solar solutions for homes and businesses. Turn your unutilized roof space into a clean power generator and reduce monthly electricity costs.
            </p>

            {/* Key Value Points Badges */}
            <div className="pt-1 flex flex-wrap gap-4 text-xs font-semibold text-gray-700">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#12372A]" />
                <span>Tier-1 Solar Panels</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Zap className="w-4 h-4 text-[#F5B82E]" />
                <span>Government Subsidy Eligible</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <TrendingDown className="w-4 h-4 text-emerald-700" />
                <span>Up to 80% Bill Reduction</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 bg-[#12372A] text-white text-base font-bold rounded-2xl hover:bg-[#1b4d3e] shadow-lg shadow-[#12372A]/20 hover:shadow-xl transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 text-[#F5B82E] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#calculator"
                className="px-7 py-4 bg-white text-[#12372A] border border-gray-200 text-base font-semibold rounded-2xl hover:bg-gray-50 hover:border-[#12372A]/30 shadow-sm transition-all flex items-center justify-center space-x-2"
              >
                <Calculator className="w-5 h-5 text-[#12372A]" />
                <span>Calculate Savings</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Image & Floating Information Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image
                  src="/images/hero_solar.jpg"
                  alt="Modern rooftop solar panel installation by Kridha Solar"
                  width={700}
                  height={500}
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Card 1: Clean Energy */}
              <div className="absolute -top-4 -left-4 sm:top-6 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center space-x-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center">
                  <Sun className="w-6 h-6 fill-current text-[#F5B82E]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Environmental Impact</p>
                  <p className="text-sm font-bold text-[#12372A]">Clean Energy</p>
                </div>
              </div>

              {/* Floating Card 2: Lower Electricity Costs */}
              <div className="absolute -bottom-5 -right-3 sm:bottom-6 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#F5B82E]/20 text-[#12372A] flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-[#12372A]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Monthly Impact</p>
                  <p className="text-sm font-bold text-gray-900">Lower Electricity Costs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
