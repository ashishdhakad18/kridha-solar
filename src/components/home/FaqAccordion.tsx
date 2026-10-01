'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '@/data/solarData';

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#12372A] bg-[#12372A]/10 px-3.5 py-1 rounded-full inline-flex items-center space-x-1.5 font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight font-geist">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-600 font-inter">
            Clear answers to common questions about rooftop solar panels, subsidies, savings, and installation timelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {faqData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#12372A]/30 bg-[#F7F9F5] shadow-sm'
                    : 'border-gray-200/80 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#12372A] text-[#F5B82E] rotate-180'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-200/40">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
