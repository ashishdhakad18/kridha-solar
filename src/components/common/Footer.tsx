'use client';

import React from 'react';
import { Sun, Phone, Mail, MapPin, Clock, Globe, Share2 } from 'lucide-react';
import { companyDetails } from '@/data/solarData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#F5B82E] flex items-center justify-center text-[#12372A] shadow-md">
                <Sun className="w-6 h-6 fill-current" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight font-geist">
                Kridha Solar
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm font-inter">
              {companyDetails.tagline} Empowering homeowners, businesses, and industrial complexes with high-efficiency rooftop solar systems.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-[#F5B82E] hover:text-[#12372A] flex items-center justify-center transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-[#F5B82E] hover:text-[#12372A] flex items-center justify-center transition-colors"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Quick Links</h4>
            <ul className="space-y-2.5 text-sm font-inter">
              <li><a href="#hero" className="hover:text-[#F5B82E] transition-colors">Home</a></li>
              <li><a href="#why-us" className="hover:text-[#F5B82E] transition-colors">About Kridha Solar</a></li>
              <li><a href="#solutions" className="hover:text-[#F5B82E] transition-colors">Solar Solutions</a></li>
              <li><a href="#calculator" className="hover:text-[#F5B82E] transition-colors">Savings Calculator</a></li>
              <li><a href="#projects" className="hover:text-[#F5B82E] transition-colors">Projects Delivered</a></li>
              <li><a href="#contact" className="hover:text-[#F5B82E] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Solar Solutions */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-gray-400 font-inter">
              <li>Residential Rooftop Solar</li>
              <li>Commercial Solar Plants</li>
              <li>Industrial Mega Solar</li>
              <li>Net-Metering Guidance</li>
              <li>Government Subsidy Filing</li>
              <li>Solar AMC & Cleaning</li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Contact Info</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#F5B82E] flex-shrink-0 mt-0.5" />
                <span>{companyDetails.address}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#F5B82E] flex-shrink-0" />
                <a href={`tel:${companyDetails.phone}`} className="hover:text-white transition-colors">{companyDetails.phone}</a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#F5B82E] flex-shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="hover:text-white transition-colors">{companyDetails.email}</a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>{companyDetails.operatingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Kridha Solar. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
