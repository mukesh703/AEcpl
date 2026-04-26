/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Building2, 
  Wind, 
  Lightbulb, 
  Activity, 
  Cpu, 
  Workflow, 
  ShieldCheck, 
  Layers,
  Thermometer,
  Zap,
  Package,
  Settings
} from 'lucide-react';

export const COLORS = {
  primary: '#1d4ed8', // blue-700
  secondary: '#3B82F6', // blue-500
  accent: '#F8FAFC', // slate-50
  dark: '#0F172A', // slate-900
  gray: '#64748B' // slate-500
};

export const SERVICES = [
  {
    id: 'hvac',
    title: 'HVAC Solutions',
    description: 'High Side & Low Side solutions including Chiller, Heat Pumps, AHUs, and Dehumidifiers.',
    icon: Wind,
    details: ['Cooling Towers', 'Mechanical Piping', 'P3/GI Ducting', 'Advanced Filters']
  },
  {
    id: 'cleanroom',
    title: 'Clean Room Panels',
    description: 'Ensuring compliance with industry standards through advanced filtration and durable construction.',
    icon: Layers,
    details: ['PPGI/PCGI Puff Panels', 'Rockwool Panels', 'Clean Room Doors', 'Epoxy Flooring']
  },
  {
    id: 'bms',
    title: 'Building Management (BMS)',
    description: 'Highly integrated systems for energy efficiency and maintainability. LOYTEC certified solutions.',
    icon: Building2,
    details: ['Room Automation', 'Lighting Control', 'Integrated Servers', 'Touch Panels']
  },
  {
    id: 'electrical',
    title: 'Electrical & Lighting',
    description: 'Automated systems design, energy conservation, and robust safety measures.',
    icon: Zap,
    details: ['HT & LT Panels', 'Cable Laying', 'Sodium Monochromatic Light', 'Lux Design']
  },
  {
    id: 'automation',
    title: 'Automation & Sensors',
    description: 'Smart infrastructure with high-precision sensor technology and door interlocking.',
    icon: Cpu,
    details: ['Face Recognition', 'Sensor Displays', 'Differential Pressure Switch', 'Actuators']
  },
  {
    id: 'pharma-equip',
    title: 'Pharma SS Equipment',
    description: 'Customized SS equipment and furniture designed per customer requirements and regulatory compliance.',
    icon: Package,
    details: ['Apron Cabinets', 'Pass Boxes', 'RLAF & LAF', 'Storage Tanks & Mixers']
  }
];

export const CLIENTS = [
  { name: 'Quest Pharmaceuticals', logo: '/logos/quest.png' },
  { name: 'Lyka Pharmaceuticals', logo: '/logos/lyka.png' },
  { name: 'NPL', logo: '/logos/npl.png' },
  { name: 'Medrik Pharmaceuticals', logo: '/logos/medrik.png' },
  { name: 'Shivam Pharmaceutical', logo: '/logos/shivam.png' },
  { name: 'Keva', logo: '/logos/keva.png' },
  { name: 'Apex', logo: '/logos/apex.png' },
  { name: 'Maruti Pharma', logo: '/logos/maruti.png' },
  { name: 'Lomus', logo: '/logos/lomus.png' },
  { name: 'MultiCare', logo: '/logos/multicare.png' },
  { name: 'Divine Healthcare', logo: '/logos/divine.png' },
  { name: 'Nova Genetica', logo: '/logos/nova.png' },
  { name: 'Elixir Life Science', logo: '/logos/elixir.png' }
];

export const PARTNERS = [
  'Bry-Air', 'Dwyer', 'Enviro Technologies', 'PMEA', 'P3Ductal', 'LOYTEC'
];

export const SLIDES = [
  {
    id: 1,
    title: "Smart Building Automation & Control Solutions",
    subtitle: "Experience the next level of energy efficiency and control with LOYTEC-based solutions.",
    image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=2070&auto=format&fit=crop",
    cta: "Get Quote"
  },
  {
    id: 2,
    title: "Pharma Engineering Excellence",
    subtitle: "Devoted to the Pharma Industry with turnkey solutions from design to validation.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    cta: "Our Expertise"
  },
  {
    id: 3,
    title: "Clean Room & HVAC Experts",
    subtitle: "Providing robust and sustainable foundations for diverse pharmaceutical projects.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    cta: "Learn More"
  },
  {
    id: 4,
    title: "Advanced Sensor Technology",
    subtitle: "High precision monitoring for humidity, temperature, and differential pressure.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    cta: "View Products"
  },
  {
    id: 5,
    title: "Integrated BMS Solutions",
    subtitle: "Seamless integration of HVAC, Lighting, and Access Control via L-WEB systems.",
    image: "https://images.unsplash.com/photo-1558444479-c84825927ad3?q=80&w=2070&auto=format&fit=crop",
    cta: "Technology"
  },
  {
    id: 6,
    title: "Innovative Industrial Controls",
    subtitle: "Empowering technological support for Nepal's growing industrial sector.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop",
    cta: "Contact Us"
  }
];
