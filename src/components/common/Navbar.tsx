'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Menu, X, ArrowRight, Phone } from 'lucide-react';
import { companyDetails } from '@/data/solarData';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#why-us' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-[#F7F9F5] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-[#12372A] flex items-center justify-center text-[#F5B82E] shadow-sm group-hover:scale-105 transition-transform">
              <Sun className="w-6 h-6 fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#12372A] leading-tight">
                Kridha Solar
              </span>
              <span className="text-[10px] font-medium uppercase tracking-widest text-[#4b5563]">
                Clean Energy
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-[#12372A] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F5B82E] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${companyDetails.phone}`}
              className="hidden lg:flex items-center space-x-1.5 text-xs font-semibold text-gray-600 hover:text-[#12372A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#12372A]" />
              <span>{companyDetails.phone}</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 bg-[#12372A] text-white text-sm font-semibold rounded-xl hover:bg-[#1b4d3e] shadow-sm hover:shadow transition-all flex items-center space-x-2 group"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-gray-800 rounded-lg hover:bg-gray-50 hover:text-[#12372A]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-gray-100 flex flex-col space-y-2">
            <a
              href={`tel:${companyDetails.phone}`}
              className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 font-medium"
            >
              <Phone className="w-4 h-4 text-[#12372A]" />
              <span>{companyDetails.phone}</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 bg-[#12372A] text-white text-center font-bold rounded-xl shadow hover:bg-[#1b4d3e] transition-colors"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
