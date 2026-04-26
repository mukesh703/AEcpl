/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Package, Search, Cpu, Thermometer, Wind, Lightbulb, Shield } from 'lucide-react';

export default function Products() {
  const categories = [
    { name: 'LOYTEC Controllers', icon: Cpu },
    { name: 'Sensors / Transmitters', icon: Thermometer },
    { name: 'Clean Room Display', icon: Search },
    { name: 'HVAC Units', icon: Wind },
    { name: 'Access Control', icon: Shield },
  ];

  const featuredProducts = [
    {
      name: "L-INX Automation Servers",
      category: "BMS CORE",
      desc: "Freely programmable automation servers for seamless integration of LON, BACnet, and Modbus.",
      image: "https://images.unsplash.com/photo-1558444479-c84825927ad3?q=80&w=2070&auto=format&fit=crop",
      border: "border-primary"
    },
    {
      name: "L-WEB User Interface",
      category: "SOFTWARE",
      desc: "Cloud-based building management interface for remote monitoring and intelligent control.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2070&auto=format&fit=crop",
      border: "border-blue-400"
    },
    {
      name: "Dwyer Pressure Sensors",
      category: "SENSORS",
      desc: "High precision transmitters for monitoring clean room pressure levels with digital validation.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      border: "border-slate-900"
    },
    {
      name: "Clean Room Panels",
      category: "INFRASTRUCTURE",
      desc: "PPGI/PCGI Puff panels optimized for high-standards pharmaceutical manufacturing environments.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2080&auto=format&fit=crop",
      border: "border-primary"
    },
    {
      name: "LAF Cabinets",
      category: "PHARMA EQUIP",
      desc: "Advanced Stainless Steel laminar air flow units designed for zero contamination zones.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      border: "border-slate-400"
    },
    {
      name: "Face Recognition",
      category: "ACCESS",
      desc: "Sub-0.3 sec recognition speed with mask detection and biometrically secure live validation.",
      image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop",
      border: "border-slate-900"
    }
  ];

  return (
    <div className="pt-20 bg-white pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <header className="mb-20 py-24 space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter uppercase">Solutions <span className="text-primary italic">Portfolio</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-sans tracking-tight">
            Curated selection of industrial automation components from world-leading engineering partners.
          </p>
        </header>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-3 mb-24">
          {categories.map((c) => (
            <button key={c.name} className="flex items-center gap-3 px-8 py-4 bg-slate-50 hover:bg-primary hover:text-white transition-all text-xs font-bold text-slate-600 rounded-sm border border-slate-200 uppercase tracking-widest">
              <c.icon size={16} />
              {c.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              <div className="relative overflow-hidden rounded-sm h-64 mb-6 bg-slate-100 border border-slate-200">
                <img 
                  src={p.image} 
                  alt={p.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white px-3 py-1 text-[10px] font-black text-slate-900 tracking-[0.2em] shadow-sm">
                    {p.category}
                  </span>
                </div>
              </div>
              <div className={`p-6 bg-white border-b-4 ${p.border} shadow-sm flex-1 space-y-4`}>
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">{p.name}</h3>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">{p.desc}</p>
                <button className="text-[10px] font-black text-primary uppercase tracking-widest hover:underline underline-offset-4">
                  SPEC_SHEET.PDF
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
