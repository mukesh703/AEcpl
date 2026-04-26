/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ExternalLink, Layers, Building2, Wind, ArrowRight } from 'lucide-react';

export default function Projects() {
  const categories = ['ALL', 'PHARMA', 'INDUSTRIAL', 'SMART INFRA'];
  
  const projects = [
    {
      title: "Clean Room Setup - Quest Pharma",
      category: "PHARMACEUTICAL",
      location: "BIRGUNJ, NEPAL",
      desc: "Full turnkey installation of clean room panels and HVAC systems following international validation standards.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
      tag: "COMPLETE BUILD",
      border: "border-primary"
    },
    {
      title: "BMS Integration - Corporate Plaza",
      category: "SMART INFRASTRUCTURE",
      location: "KATHMANDU, NEPAL",
      desc: "Advanced industrial automation using LOYTEC technology for integrated light control and energy monitoring.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      tag: "AUTOMATION",
      border: "border-slate-900"
    },
    {
      title: "HVAC High Side - NPL Factory",
      category: "INDUSTRIAL",
      location: "PARSA, NEPAL",
      desc: "High-capacity chiller modules and boiler plant controls for strategic manufacturing facilities.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
      tag: "HVAC CORE",
      border: "border-blue-400"
    }
  ];

  return (
    <div className="pt-20 pb-32 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <header className="mb-20 py-24 space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter uppercase whitespace-pre-wrap">DESIGNED <span className="text-primary italic">&</span> BUILT</h1>
          <p className="text-xl text-slate-600 max-w-2xl font-sans tracking-tight leading-relaxed">
            Case studies of technical excellence in industrial automation and clean environment engineering.
          </p>
        </header>

        {/* Filter */}
        <div className="flex gap-3 mb-16 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((c, i) => (
            <button key={c} className={`px-10 py-4 bg-white border border-slate-200 rounded-sm text-xs font-bold tracking-[0.2em] transition-all whitespace-nowrap ${i === 0 ? 'bg-slate-900 text-white' : 'hover:bg-slate-50 text-slate-600'}`}>
              {c}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-12 space-y-10 group"
            >
              <div className="relative overflow-hidden aspect-video rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700 border border-slate-100">
                <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="bg-slate-900 text-white px-3 py-1.5 text-[10px] font-black uppercase tracking-widest shadow-xl">
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">{p.category}</span>
                    <span className="text-slate-400 text-[9px] font-bold tracking-widest uppercase">{p.location}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-primary transition-colors tracking-tight">
                    {p.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed font-sans line-clamp-3">
                  {p.desc}
                </p>
                <div className="flex items-center gap-4 text-xs font-black text-slate-900 uppercase tracking-[0.2em] pt-4 border-t border-slate-100">
                  EXPLORE STUDY <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
