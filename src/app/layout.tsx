import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kridha Solar | Rooftop Solar Solutions',
  description:
    'Reliable rooftop solar solutions for homes, commercial properties, and industrial facilities. Reduce electricity bills with Tier-1 panels & turnkey installations.',
  keywords: [
    'Solar energy',
    'Rooftop solar',
    'Kridha Solar',
    'Bhopal solar company',
    'Solar panel installation',
    'Solar calculator',
    'Commercial solar',
    'Residential solar',
  ],
  openGraph: {
    title: 'Kridha Solar | Rooftop Solar Solutions',
    description:
      'Power your home and business with clean, reliable solar energy. Calculate your savings and get a free quote today.',
    siteName: 'Kridha Solar',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#F7F9F5] text-[#111827] flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
