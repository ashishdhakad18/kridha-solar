export interface TrustStat {
  id: string;
  value: string;
  label: string;
  subtext?: string;
}

export interface WhyChooseUsCard {
  id: string;
  title: string;
  description: string;
  iconName: 'ShieldCheck' | 'Wrench' | 'TrendingDown' | 'Headphones';
}

export interface SolarSolution {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  features: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  systemSize: string;
  projectType: 'Residential' | 'Commercial' | 'Industrial';
  image: string;
  annualSavings?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  systemSize: string;
  rating: number;
  placeholderNote?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  propertyType: 'Residential' | 'Commercial' | 'Industrial';
  monthlyBill: string;
  notes?: string;
}
