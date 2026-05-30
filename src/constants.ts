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
    description: 'Highly integrated systems for energy efficiency and maintainability.',
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
  { name: 'Quest Pharmaceuticals', logo: './logos/quest.png' },
  { name: 'Lyka Pharmaceuticals', logo: './logos/lyka.png' },
  { name: 'NPL', logo: './logos/npl.png' },
  { name: 'Medrik Pharmaceuticals', logo: './logos/medrik.png' },
  { name: 'Shivam Pharmaceutical', logo: './logos/shivam.png' },
  { name: 'Keva', logo: './logos/keva.png' },
  { name: 'Apex', logo: './logos/apex.png' },
  { name: 'Maruti Pharma', logo: './logos/maruti.png' },
  { name: 'Lomus', logo: './logos/lomus.png' },
  { name: 'MultiCare', logo: './logos/multicare.png' },
  { name: 'Divine Healthcare', logo: './logos/divine.png' },
  { name: 'Nova Genetica', logo: './logos/nova.png' },
  { name: 'Elixir Life Science', logo: './logos/elixir.png' }
];

export const INDUSTRY_LEADERS = [
  { name: 'Client 1', logo: './logos/Client/1.jpg' },
  { name: 'Client 2', logo: './logos/Client/2.jpg' },
  { name: 'Client 3', logo: './logos/Client/3.jpg' },
  { name: 'Client 4', logo: './logos/Client/4.jpg' },
  { name: 'Client 5', logo: './logos/Client/5.jpg' },
  { name: 'Client 6', logo: './logos/Client/6.jpg' },
  { name: 'Client 7', logo: './logos/Client/7.jpg' },
  { name: 'Client 8', logo: './logos/Client/8.jpg' },
  { name: 'Client 9', logo: './logos/Client/9.jpg' },
  { name: 'Client 10', logo: './logos/Client/10.jpg' },
  { name: 'Client 11', logo: './logos/Client/11.jpg' },
  { name: 'Client 12', logo: './logos/Client/12.jpg' },
  { name: 'Client 13', logo: './logos/Client/13.jpg' },
  { name: 'Client 14', logo: './logos/Client/14.jpg' },
  { name: 'Client 15', logo: './logos/Client/15.jpg' },
  { name: 'Client 16', logo: './img/16.jpg' },
  { name: 'Client 17', logo: './img/17.jpg' },
  { name: 'Client 18', logo: './img/18.jpg' },
];

export const SUPPLIERS = [
  { name: 'Supplier 1', logo: './logos/Suppliers/1.jpg' },
  { name: 'Supplier 2', logo: './logos/Suppliers/2.jpg' },
  { name: 'Supplier 3', logo: './logos/Suppliers/3.jpg' },
  { name: 'Supplier 4', logo: './logos/Suppliers/4.jpg' },
  { name: 'Supplier 5', logo: './logos/Suppliers/5.jpg' },
  { name: 'Supplier 6', logo: './logos/Suppliers/6.jpg' },
  { name: 'Supplier 7', logo: './logos/Suppliers/7.jpg' },
  { name: 'Supplier 8', logo: './logos/Suppliers/8.jpg' },
];

export const OTHER_INDUSTRIES_CLIENTS = [
  { name: 'Other Industry Client 1', logo: './logos/other-industries/1.jpg' },
  { name: 'Other Industry Client 2', logo: './logos/other-industries/2.png' },
  { name: 'Other Industry Client 3', logo: './logos/other-industries/3.jpeg' },
  { name: 'Other Industry Client 4', logo: './logos/other-industries/4.png' },
  { name: 'Other Industry Client 5', logo: './logos/other-industries/5.jpg' },
  { name: 'Other Industry Client 6', logo: './logos/other-industries/6.jpg' },
];

export const PARTNERS = [
  'Bry-Air', 'Dwyer', 'Enviro Technologies', 'PMEA', 'P3Ductal'
];

export const SLIDES = [
  {
    id: 1,
    title: "Motorized Mobile Storage Systems",
    subtitle: "Manufacturer, Supplier & Exporter of advanced space optimization solutions.",
    description: "We are Manufacturer, Supplier, Exporter of Motorized Mobile Storage Systems, Mobile Racking Systems, Mobile Compactors. With ability to store as high as 150 tons in a single mobile unit, this products leaves others far behind in space optimization.",
    image: "./img/motorized_storage.png",
    cta: "Learn More"
  },
  {
    id: 2,
    title: "Compact Racking System",
    subtitle: "High-density mobile racking for intelligent space utilization and maximum storage capacity.",
    description: "Our Compact Racking Systems offer optimal space utilization by eliminating idle aisles. These high-density mobile racking systems are designed to maximize storage capacity in warehouses and industrial facilities, providing a robust and efficient storage solution.",
    image: "./img/compact storage system.jpg",
    cta: "Learn More"
  },
  {
    id: 3,
    title: "Pharma Engineering Excellence",
    subtitle: "Devoted to the Pharma Industry with turnkey solutions from design to validation.",
    description: "Our pharma engineering team provides start-to-finish solutions including custom designing, manufacturing, and complete validation of critical pharmaceutical equipment.",
    image: "./img/pharma engineering.png",
    cta: "Our Expertise"
  },
  {
    id: 4,
    title: "Clean Room & HVAC Experts",
    subtitle: "Providing robust and sustainable foundations for diverse pharmaceutical projects.",
    description: "We deliver turnkey clean room and HVAC solutions with unparalleled standards, focusing on rigorous particulate control and consistent thermal management for critical environments.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    cta: "Learn More"
  },
  {
    id: 5,
    title: "Advanced Sensor Technology",
    subtitle: "High precision monitoring for humidity, temperature, and differential pressure.",
    description: "Equip your facility with state-of-the-art sensors that provide real-time, high-precision monitoring of environmental variables seamlessly integrated with your control systems.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    cta: "View Products"
  },
  {
    id: 6,
    title: "Integrated BMS Solutions",
    subtitle: "Seamless integration of HVAC, Lighting, and Access Control via L-WEB systems.",
    description: "Our integrated Building Management Systems centralize control of HVAC, lighting, and security to maximize energy efficiency and operational simplicity.",
    image: "https://images.unsplash.com/photo-1558444479-c84825927ad3?q=80&w=2070&auto=format&fit=crop",
    cta: "Technology"
  },
  {
    id: 7,
    title: "Innovative Industrial Controls",
    subtitle: "Empowering technological support for Nepal's growing industrial sector.",
    description: "We provide innovative and robust industrial control mechanisms specifically tailored to support and advance the rapidly growing industrial sector in Nepal.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2070&auto=format&fit=crop",
    cta: "Contact Us"
  }
];
