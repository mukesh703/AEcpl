/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, ArrowUpRight, Wrench, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDER_IMAGES = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2070&auto=format&fit=crop"
];

const SERVICE_CATEGORIES = ['All', 'Services', 'Engineering Consultancy'];

const CATALOG_ITEMS = [
  { title: "Clean Room Partition", category: "Services", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" },
  { title: "HVAC Low Side", category: "Services", image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&auto=format&fit=crop" },
  { title: "HVAC High Slide", category: "Services", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop" },
  { title: "Dehumidification", category: "Services", image: "https://images.unsplash.com/photo-1558444479-c84825927ad3?q=80&w=600&auto=format&fit=crop" },
  { title: "Clean Room Display", category: "Services", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=600&auto=format&fit=crop" },
  { title: "Access Control & Door Interlock System", category: "Services", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" },
  { title: "BMS & EMS", category: "Services", image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop" },
  { title: "Clean Room Epoxy Flooring", category: "Services", image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=600&auto=format&fit=crop" },
  { title: "SS Furniture & Equipment", category: "Services", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop" },
  { title: "Electrical Solution & Lighting", category: "Services", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop" },
  { title: "Spare Sales", category: "Services", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=601&auto=format&fit=crop" },
  { title: "Upcoming Product & Services", category: "Services", image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=601&auto=format&fit=crop" },
  { title: "Conceptual Engineering", category: "Engineering Consultancy", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=601&auto=format&fit=crop" },
  { title: "Process Engineering", category: "Engineering Consultancy", image: "https://images.unsplash.com/photo-1558444479-c84825927ad3?q=80&w=601&auto=format&fit=crop" },
  { title: "Detailed Engineering", category: "Engineering Consultancy", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=601&auto=format&fit=crop" },
  { title: "Procurement Assistance", category: "Engineering Consultancy", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=601&auto=format&fit=crop" },
  { title: "Qualification & Validation", category: "Engineering Consultancy", image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=601&auto=format&fit=crop" },
  { title: "Site Management", category: "Engineering Consultancy", image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=601&auto=format&fit=crop" }
];

export default function Services() {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 6000); // 6000 matches Home.tsx hero timings
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-0 font-sans bg-slate-50 min-h-screen">
      {/* Header Slider */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-slate-900 mb-12" style={{ perspective: '1200px' }}>
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, rotateX: 15, scale: 1.1, z: -100 }}
            animate={{ opacity: 1, rotateX: 0, scale: 1, z: 0 }}
            exit={{ opacity: 0, rotateX: -15, scale: 0.9, z: -100 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 origin-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src={SLIDER_IMAGES[currentImage]}
              alt="Engineering Dashboard"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 md:px-0">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-10 mt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -40, filter: 'blur(4px)' }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl space-y-6 md:space-y-8"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                  Engineering Services & Consultancy
                </h1>
                <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-3xl">
                  Innovative engineering products ensuring robust and sustainable foundations for diverse projects, from pharmaceuticals to industrial complexes and End-to-end support for projects, ensuring seamless execution, timely delivery, and budget adherence through strategic project management services.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slider indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {SLIDER_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentImage === idx ? 'bg-primary w-10' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-10 pb-32">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {SERVICE_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-8 py-4 rounded-full font-bold transition-all text-sm tracking-wide ${
                activeFilter === category
                  ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-105'
                  : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {CATALOG_ITEMS.filter(item => activeFilter === 'All' || item.category === activeFilter).map((item, idx) => (
              <motion.div
                layout
                key={item.title + idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/50 transition-all flex flex-col h-full group overflow-hidden"
              >
                <div className="h-48 w-full overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-primary shadow-sm flex items-center gap-1">
                    {item.category === 'Services' ? <Wrench size={14} /> : <Settings size={14} />}
                    <span className="uppercase tracking-wider">{item.category}</span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">{item.title}</h3>
                  </div>
                  
                  <Link to="/contact" className="mt-auto inline-flex items-center justify-center w-full gap-2 py-3 px-4 bg-slate-50 text-slate-900 hover:bg-primary hover:text-white font-semibold rounded-xl text-sm transition-all">
                    Contact <ArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
