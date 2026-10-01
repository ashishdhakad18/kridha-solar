'use client';

import React from 'react';
import { trustStats } from '@/data/solarData';

export const TrustStats: React.FC = () => {
  return (
    <section className="py-10 bg-[#12372A] text-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {trustStats.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center p-4 ${
                idx > 0 ? 'pt-6 lg:pt-4' : ''
              }`}
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F5B82E] tracking-tight">
                {stat.value}
              </span>
              <span className="mt-1 text-base sm:text-lg font-bold text-white">
                {stat.label}
              </span>
              {stat.subtext && (
                <span className="mt-1 text-xs text-emerald-200/80 font-normal">
                  {stat.subtext}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
