import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

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
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${geistSans.variable} ${geistMono.variable} ${inter.variable}`}
    >
      <body className="antialiased bg-[#F7F9F5] text-[#111827] flex flex-col min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}

