'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MapPin, Zap, ArrowUpRight } from 'lucide-react';
import { projectsData } from '@/data/solarData';

interface ProjectsGridProps {
  onOpenQuoteModal: () => void;
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onOpenQuoteModal }) => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Industrial'>('All');

  const filteredProjects = projectsData.filter((p) => filter === 'All' || p.projectType === filter);

  return (
    <section id="projects" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#12372A] bg-[#12372A]/10 px-3.5 py-1 rounded-full font-mono">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight font-geist">
              Solar Projects We’ve Delivered
            </h2>
            <p className="text-base text-gray-600 font-inter">
              Browse a sample showcase of completed rooftop solar installations across residential, commercial, and industrial segments.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {(['All', 'Residential', 'Commercial', 'Industrial'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all font-mono ${
                  filter === tab
                    ? 'bg-[#12372A] text-[#F5B82E] shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#F7F9F5] rounded-2xl overflow-hidden border border-gray-200/80 hover:border-[#12372A]/30 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#12372A]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {project.projectType}
                  </span>
                </div>
              </div>

              {/* Info Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#12372A] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <div className="mt-2 space-y-1.5 text-xs text-gray-600">
                    <div className="flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 font-semibold text-[#12372A]">
                      <Zap className="w-3.5 h-3.5 text-[#F5B82E]" />
                      <span>Capacity: {project.systemSize}</span>
                    </div>
                  </div>
                </div>

                {project.annualSavings && (
                  <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-[11px]">
                    <span className="text-gray-500 font-medium">Estimated Output:</span>
                    <span className="font-bold text-emerald-800">{project.annualSavings}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center space-x-2 text-sm font-bold text-[#12372A] hover:text-[#1b4d3e] group"
          >
            <span>Have a similar project requirement? Get a customized proposal</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
