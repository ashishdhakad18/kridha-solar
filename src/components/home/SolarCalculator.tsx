'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, Sun, Zap, IndianRupee, ArrowRight, Info } from 'lucide-react';

interface SolarCalculatorProps {
  onOpenQuoteModal: (propertyType: 'Residential' | 'Commercial' | 'Industrial') => void;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [monthlyBill, setMonthlyBill] = useState<number>(6000);
  const [propertyType, setPropertyType] = useState<'Residential' | 'Commercial' | 'Industrial'>('Residential');

  // Simple, isolated calculation logic
  const calculationResults = useMemo(() => {
    // Tariff estimate assumptions per property category
    const tariffPerUnit = propertyType === 'Residential' ? 8.0 : propertyType === 'Commercial' ? 9.5 : 10.5;

    // Monthly unit consumption based on bill
    const monthlyUnits = monthlyBill / tariffPerUnit;

    // 1 kW solar plant generates ~120 units / month in sunny regions
    const systemKwp = Math.max(1, Math.round((monthlyUnits / 120) * 10) / 10);

    // Annual generation: kW * 1440 units/year
    const annualGenerationKwh = Math.round(systemKwp * 1440);

    // Estimated financial savings per year (₹)
    const annualSavingsInr = Math.round(annualGenerationKwh * tariffPerUnit * 0.85); // 85% bill offset estimate

    // Estimated CO2 reduction (tonnes / yr): ~0.82 kg CO2 per kWh
    const co2SavedTonnes = ((annualGenerationKwh * 0.82) / 1000).toFixed(1);

    return {
      systemKwp,
      annualGenerationKwh,
      annualSavingsInr,
      co2SavedTonnes,
      tariffPerUnit,
    };
  }, [monthlyBill, propertyType]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#12372A] bg-[#12372A]/10 px-3.5 py-1 rounded-full inline-flex items-center space-x-1.5 font-mono">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight font-geist">
            How Much Can You Save With Solar?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-inter">
            Use our quick calculator to estimate your recommended rooftop solar capacity and potential annual electricity bill savings.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#F7F9F5] border border-gray-200/90 rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Input Controls Column */}
            <div className="lg:col-span-6 space-y-8">
              {/* 1. Property Type Selector */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-3 font-mono">
                  1. Select Property Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Residential', 'Commercial', 'Industrial'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPropertyType(type)}
                      className={`py-3 px-3 text-xs sm:text-sm font-bold rounded-2xl border transition-all ${
                        propertyType === type
                          ? 'border-[#12372A] bg-[#12372A] text-white shadow-md'
                          : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Monthly Electricity Bill Input & Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-mono">
                    2. Monthly Electricity Bill
                  </label>
                  <span className="text-xl font-extrabold text-[#12372A] bg-white px-3 py-1 rounded-xl border border-gray-200 shadow-sm font-mono">
                    {formatCurrency(monthlyBill)}
                  </span>
                </div>

                {/* Range Slider */}
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#12372A]"
                />

                <div className="flex justify-between text-[11px] text-gray-500 mt-2 font-medium font-mono">
                  <span>₹ 2,000 / mo</span>
                  <span>₹ 50,000 / mo</span>
                  <span>₹ 1,00,000+ / mo</span>
                </div>
              </div>

              {/* Information Note */}
              <div className="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-100 flex items-start space-x-3 text-xs text-emerald-900">
                <Info className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <p className="font-inter">
                  Estimated based on average irradiance in Madhya Pradesh and typical utility tariff rates ({formatCurrency(calculationResults.tariffPerUnit)}/unit).
                </p>
              </div>
            </div>

            {/* Results Output Column */}
            <div className="lg:col-span-6 bg-[#12372A] text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#F5B82E] font-mono">
                  Estimated Solar Output
                </span>
                <Sun className="w-5 h-5 text-[#F5B82E] fill-current" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Result Item 1: System Size */}
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <p className="text-xs text-emerald-200 font-medium">Recommended System Size</p>
                  <p className="mt-1 text-2xl sm:text-3xl font-black text-white">
                    {calculationResults.systemKwp} <span className="text-base font-bold text-[#F5B82E]">kW</span>
                  </p>
                </div>

                {/* Result Item 2: Annual Generation */}
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <p className="text-xs text-emerald-200 font-medium">Estimated Annual Gen.</p>
                  <p className="mt-1 text-2xl sm:text-3xl font-black text-white">
                    {calculationResults.annualGenerationKwh.toLocaleString('en-IN')}{' '}
                    <span className="text-xs font-bold text-gray-300">kWh</span>
                  </p>
                </div>
              </div>

              {/* Main Annual Savings Banner */}
              <div className="bg-gradient-to-r from-emerald-900/80 to-[#12372A] p-5 rounded-2xl border border-[#F5B82E]/30">
                <p className="text-xs font-bold uppercase tracking-wider text-[#F5B82E]">
                  Estimated Annual Savings
                </p>
                <p className="mt-2 text-3xl sm:text-4xl font-extrabold text-white flex items-center">
                  <span>{formatCurrency(calculationResults.annualSavingsInr)}</span>
                  <span className="text-xs text-emerald-200 font-normal ml-2">/ year</span>
                </p>
                <p className="mt-1 text-[11px] text-emerald-300">
                  Approx. {calculationResults.co2SavedTonnes} tonnes CO₂ emission offset per year
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenQuoteModal(propertyType)}
                className="w-full py-4 bg-[#F5B82E] hover:bg-[#e0a31c] text-[#12372A] font-extrabold text-base rounded-2xl shadow-lg transition-all flex items-center justify-center space-x-2 group"
              >
                <span>Get My Solar Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[10px] text-center text-emerald-200/70">
                * Note: Figures presented are preliminary estimates and do not represent guaranteed financial returns. Actual performance varies by shadow clearance and local DISCOM policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
