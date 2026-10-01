import {
  TrustStat,
  WhyChooseUsCard,
  SolarSolution,
  ProcessStep,
  ProjectItem,
  Testimonial,
  FaqItem
} from '@/types/solar';

export const companyDetails = {
  name: 'Kridha Solar',
  tagline: 'Reliable rooftop solar solutions for homes and businesses.',
  phone: '+91 98765 43210',
  email: 'info@kridhasolar.com',
  address: 'Plot 42, MP Nagar Zone 1, Bhopal, Madhya Pradesh - 462011',
  operatingHours: 'Mon - Sat: 9:00 AM - 7:00 PM',
};

export const trustStats: TrustStat[] = [
  {
    id: 'stat-1',
    value: '10+',
    label: 'Years Experience',
    subtext: 'Delivering clean energy excellence'
  },
  {
    id: 'stat-2',
    value: '500+',
    label: 'Installations',
    subtext: 'Rooftops powered across regions'
  },
  {
    id: 'stat-3',
    value: '5 MW+',
    label: 'Installed Capacity',
    subtext: 'Clean solar power generated'
  },
  {
    id: 'stat-4',
    value: '100%',
    label: 'Customer Support',
    subtext: 'Dedicated maintenance assistance'
  }
];

export const whyChooseUsData: WhyChooseUsCard[] = [
  {
    id: 'why-1',
    title: 'Quality Solar Panels',
    description: 'Tier-1 high-efficiency monocrystalline solar panels with up to 25 years warranty for long-lasting output.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'why-2',
    title: 'Complete Installation',
    description: 'Turnkey end-to-end service including site assessment, engineering layout, net metering, and installation.',
    iconName: 'Wrench'
  },
  {
    id: 'why-3',
    title: 'Lower Electricity Bills',
    description: 'Substantially reduce monthly utility expenses by generating clean, renewable solar power directly from your roof.',
    iconName: 'TrendingDown'
  },
  {
    id: 'why-4',
    title: 'After-Sales Support',
    description: 'Proactive system monitoring, routine scheduled maintenance, and dedicated technical helpdesk for peace of mind.',
    iconName: 'Headphones'
  }
];

export const solarSolutions: SolarSolution[] = [
  {
    id: 'solution-residential',
    title: 'Residential Solar',
    subtitle: 'For Homes & Apartments',
    description: 'Power your home with clean, reliable solar energy while shielding your family from rising electricity tariffs.',
    image: '/images/hero_solar.jpg',
    tag: 'Homeowners',
    features: [
      'Tailored 3kW - 10kW home systems',
      'Government subsidy eligible options',
      'Grid-tied with Net Metering support',
      'Sleek rooftop aesthetic integration'
    ]
  },
  {
    id: 'solution-commercial',
    title: 'Commercial Solar',
    subtitle: 'For Offices & Retail Buildings',
    description: 'Reduce operational costs and elevate sustainability credentials with efficient commercial rooftop installations.',
    image: '/images/commercial_solar.jpg',
    tag: 'Commercial',
    features: [
      'High-capacity 10kW - 100kW+ arrays',
      'Accelerated tax depreciation benefit',
      'Minimal operational downtime setup',
      'Real-time power consumption dashboard'
    ]
  },
  {
    id: 'solution-industrial',
    title: 'Industrial Solar',
    subtitle: 'For Factories & Warehouses',
    description: 'Scalable solar solutions built specifically for heavy energy consumption requirements and large rooftop footprints.',
    image: '/images/industrial_solar.jpg',
    tag: 'Industrial',
    features: [
      'Custom mega-watt scale plants',
      'Robust structural engineering',
      'Heavy-duty industrial inverters',
      '24/7 remote performance monitoring'
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Free Consultation',
    description: 'Initial consultation to discuss your energy needs and evaluate solar potential.',
    detail: 'We assess your historical electricity bills and discuss your power requirements.'
  },
  {
    step: '02',
    title: 'Site Survey',
    description: 'Detailed technical survey of roof structure, shading analysis, and cable routes.',
    detail: 'Engineers inspect roof strength, shadow patterns, and optimal tilt angle.'
  },
  {
    step: '03',
    title: 'System Design',
    description: 'Custom engineering blueprint, component selection, and financial savings estimate.',
    detail: '3D shadow analysis and optimized panel arrangement for peak energy yield.'
  },
  {
    step: '04',
    title: 'Installation',
    description: 'Safe, standard-compliant panel mounting, wiring, inverter setup, and testing.',
    detail: 'Swift installation by certified solar technicians with strict safety protocols.'
  },
  {
    step: '05',
    title: 'Start Saving',
    description: 'Grid connection, net-meter commissioning, and instant electricity savings.',
    detail: 'Flip the switch to turn solar power on and watch your utility bills drop.'
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: 'proj-1',
    title: '5 kW Residential Solar System',
    location: 'Bhopal, Madhya Pradesh',
    systemSize: '5 kW',
    projectType: 'Residential',
    image: '/images/hero_solar.jpg',
    annualSavings: 'Approx. ₹ 65,000 / year'
  },
  {
    id: 'proj-2',
    title: '50 kW Commercial Office Complex',
    location: 'Indore, Madhya Pradesh',
    systemSize: '50 kW',
    projectType: 'Commercial',
    image: '/images/commercial_solar.jpg',
    annualSavings: 'Approx. ₹ 6,20,000 / year'
  },
  {
    id: 'proj-3',
    title: '250 kW Manufacturing Facility',
    location: 'Mandideep Industrial Area, MP',
    systemSize: '250 kW',
    projectType: 'Industrial',
    image: '/images/industrial_solar.jpg',
    annualSavings: 'Approx. ₹ 32,000,00 / year'
  },
  {
    id: 'proj-4',
    title: '10 kW Dual Rooftop Home',
    location: 'Bhopal, Madhya Pradesh',
    systemSize: '10 kW',
    projectType: 'Residential',
    image: '/images/hero_solar.jpg',
    annualSavings: 'Approx. ₹ 1,35,000 / year'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rajesh Sharma',
    role: 'Homeowner',
    location: 'Arera Colony, Bhopal',
    content: 'Kridha Solar transformed our home energy. The installation was smooth, completed within 4 days, and our monthly bill dropped dramatically.',
    systemSize: '5 kW System',
    rating: 5,
    placeholderNote: 'Sample verified customer testimonial placeholder'
  },
  {
    id: 'test-2',
    name: 'Ankita Verma',
    role: 'Managing Director, Horizon Tech Park',
    location: 'Indore, MP',
    content: 'Switched our corporate headquarters to solar with Kridha Solar. Their team managed everything from subsidy filings to net metering flawlessly.',
    systemSize: '40 kW Commercial',
    rating: 5,
    placeholderNote: 'Sample commercial customer testimonial placeholder'
  },
  {
    id: 'test-3',
    name: 'Vikram Singh',
    role: 'Plant Manager',
    location: 'Mandideep, Bhopal',
    content: 'Reliable execution and prompt after-sales support. Their routine inspection team keeps our 150 kW array operating at peak output.',
    systemSize: '150 kW Industrial',
    rating: 5,
    placeholderNote: 'Sample industrial customer testimonial placeholder'
  }
];

export const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How much does rooftop solar cost?',
    answer: 'The cost of rooftop solar depends on your total system capacity (kW) and battery storage options. Typically, a standard residential 3 kW system starts from ₹ 1.5 Lakh to ₹ 2.2 Lakh before government subsidies. During our free consultation, we provide an exact itemized quotation.'
  },
  {
    id: 'faq-2',
    question: 'How many solar panels does my home need?',
    answer: 'A standard household consuming around 300–400 units monthly generally requires a 3 kW system, which comprises approximately 6–8 modern high-efficiency panels requiring about 250–300 sq. ft. of shadow-free rooftop space.'
  },
  {
    id: 'faq-3',
    question: 'How much can I save with solar?',
    answer: 'Solar rooftops can offset up to 80%–90% of your current monthly electricity bill depending on your energy usage habits, local sunlight irradiance, and rooftop orientation. Most residential systems pay for themselves within 3 to 4 years.'
  },
  {
    id: 'faq-4',
    question: 'Is government subsidy available?',
    answer: 'Yes! Under central and state government renewable schemes (such as PM Surya Ghar Muft Bijli Yojana), residential customers are eligible for attractive direct subsidies ranging up to ₹ 78,000 depending on system size.'
  },
  {
    id: 'faq-5',
    question: 'How long does installation take?',
    answer: 'Physical installation of panels, mounting structures, and inverters usually takes 2 to 4 days for residential rooftops. Net-metering approval and grid connectivity by the local electricity DISCOM takes an additional 2 to 3 weeks.'
  },
  {
    id: 'faq-6',
    question: 'Do you provide maintenance after installation?',
    answer: 'Absolutly. Kridha Solar provides complimentary initial scheduled preventive maintenance along with real-time remote monitoring. Our panels come with a 25-year performance warranty and 10-year inverter coverage.'
  }
];
