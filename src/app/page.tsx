'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Hero } from '@/components/home/Hero';
import { TrustStats } from '@/components/home/TrustStats';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { SolarSolutions } from '@/components/home/SolarSolutions';
import { SolarCalculator } from '@/components/home/SolarCalculator';
import { HowItWorks } from '@/components/home/HowItWorks';
import { ProjectsGrid } from '@/components/home/ProjectsGrid';
import { Testimonials } from '@/components/home/Testimonials';
import { FaqAccordion } from '@/components/home/FaqAccordion';
import { FinalCtaSection } from '@/components/home/FinalCtaSection';
import { Footer } from '@/components/common/Footer';
import { QuoteModal } from '@/components/common/QuoteModal';

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedPropertyType, setSelectedPropertyType] = useState<
    'Residential' | 'Commercial' | 'Industrial'
  >('Residential');

  const handleOpenQuoteModal = (
    type: 'Residential' | 'Commercial' | 'Industrial' = 'Residential'
  ) => {
    setSelectedPropertyType(type);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Navbar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal('Residential')} />

      <main className="flex-grow">
        {/* 2. Hero */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal('Residential')} />

        {/* 3. Trust Stats */}
        <TrustStats />

        {/* 4. Why Kridha Solar */}
        <WhyChooseUs />

        {/* 5. Solar Solutions */}
        <SolarSolutions onSelectSolution={(type) => handleOpenQuoteModal(type)} />

        {/* 6. Solar Savings Calculator */}
        <SolarCalculator onOpenQuoteModal={(type) => handleOpenQuoteModal(type)} />

        {/* 7. How It Works */}
        <HowItWorks />

        {/* 8. Projects */}
        <ProjectsGrid onOpenQuoteModal={() => handleOpenQuoteModal('Residential')} />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. FAQ */}
        <FaqAccordion />

        {/* 11. Final CTA */}
        <FinalCtaSection onOpenQuoteModal={() => handleOpenQuoteModal('Residential')} />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Global Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultPropertyType={selectedPropertyType}
      />
    </div>
  );
}
