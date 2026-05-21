/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, ArrowUpRight, Wrench, Settings, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDER_IMAGES = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2070&auto=format&fit=crop"
];

const SERVICE_CATEGORIES = ['All', 'Services', 'Engineering Consultancy'];

const CATALOG_ITEMS = [
  { title: "Clean Room Partition", category: "Services", image: "/img/Services/clean room partition.jpg", description: "High-quality, modular clean room partitions designed to maintain strict environmental controls, preventing contamination and ensuring compliance with industry standards." },
  { title: "HVAC Low Side", category: "Services", image: "/img/Services/HVAC Low Side.png", description: "Comprehensive HVAC low side services including ducting, grilles, and diffusers to ensure optimal air distribution and thermal comfort in critical environments." },
  { title: "HVAC High Slide", category: "Services", image: "/img/Services/HVAC High Slide.jpg", description: "Advanced HVAC high side solutions featuring chillers, cooling towers, and heavy duty components for efficient climate control at an industrial scale." },
  { title: "Dehumidification", category: "Services", image: "/img/Services/Dehumidification.jpg", description: "Professional dehumidification systems and services to strictly control moisture levels, critical for manufacturing processes, storage, and clean room environments." },
  { title: "Clean Room Display", category: "Services", image: "/img/Services/clean room display.jpg", description: "Specialized display panels and monitoring systems designed specifically for clean room environments, providing real-time data on temperature, humidity, and pressure." },
  { title: "Access Control & Door Interlock System", category: "Services", image: "/img/Services/Access Control & Door Interlock System .jpg", description: "Secure access control and interlocking door systems to maintain room pressurization and prevent cross-contamination between different zones." },
  { title: "BMS & EMS", category: "Services", image: "/img/Services/BMS & EMS.jpg", description: "Building Management Systems (BMS) and Environment Management Systems (EMS) for centralized monitoring, control, and optimization of facility operations." },
  { title: "Clean Room Epoxy Flooring", category: "Services", image: "/img/Services/clean room expoxy flooring.jpg", description: "Seamless, chemical-resistant, and easy-to-clean epoxy flooring solutions tailored for clean rooms, laboratories, and pharmaceutical facilities." },
  { title: "SS Furniture & Equipment", category: "Services", image: "/img/Services/SS Furniture & Equipment.png", description: "High-grade stainless steel furniture and equipment, offering durability, hygiene, and resistance to corrosion for sterile environments." },
  { title: "Electrical Solution & Lighting", category: "Services", image: "/img/Services/Electric Solution & Lighting.jpeg", description: "Clean room compatible electrical integration and specialized lighting solutions designed to minimize particle generation and ensure safe, efficient illumination." },
  { title: "Spare Sales", category: "Services", image: "/img/Services/Spare Sales.webp", description: "A comprehensive inventory of genuine spare parts for clean room equipment, HVAC systems, and other critical infrastructure to ensure minimal downtime." },
  { title: "Upcoming Product & Services", category: "Services", image: "/img/Services/upcoming product and services.jpg", description: "Stay tuned for our latest innovative products and advanced engineering services designed to meet evolving industry demands." },
  { title: "Conceptual Engineering", category: "Engineering Consultancy", image: "/img/Services/conceptual engineering.webp", description: "Initial phase engineering consultancy focusing on feasibility studies, project scoping, and high-level conceptual designs to set a strong foundation for your project." },
  { title: "Process Engineering", category: "Engineering Consultancy", image: "/img/Services/Process Engineering.jpg", description: "Expert process engineering to optimize manufacturing workflows, enhance system efficiency, and ensure adherence to stringent quality and safety standards." },
  { title: "Procurement Assistance", category: "Engineering Consultancy", image: "/img/Services/Procurement Assistance .webp", description: "Strategic procurement support to help source high-quality materials and equipment, manage vendor relationships, and ensure cost-effective purchasing." },
  { title: "Qualification & Validation", category: "Engineering Consultancy", image: "/img/Services/Qualification & Validation.jpg", description: "Rigorous qualification and validation services (IQ/OQ/PQ) to ensure your equipment and facilities meet regulatory requirements and operate flawlessly." },
  { title: "Site Management", category: "Engineering Consultancy", image: "/img/Services/Site Management.webp", description: "Professional on-site management services to oversee project execution, coordinate contractors, and ensure timely, safe, and high-quality construction." }
];

export default function Services() {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedService, setSelectedService] = useState<typeof CATALOG_ITEMS[0] | null>(null);

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
                onClick={() => setSelectedService(item)}
                className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/50 transition-all flex flex-col h-full group overflow-hidden cursor-pointer"
              >
                <div className="h-48 w-full overflow-hidden relative">
                  <img src={encodeURI([import.meta.env.BASE_URL.replace(/\/$/, ''), item.image.replace(/^\//, '')].join('/'))} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl overflow-hidden w-full max-w-3xl shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 backdrop-blur-md transition-colors"
                aria-label="Close details"
              >
                <X size={20} />
              </button>
              
              <div className="h-64 sm:h-80 w-full relative">
                 <img 
                    src={encodeURI([import.meta.env.BASE_URL.replace(/\/$/, ''), selectedService.image.replace(/^\//, '')].join('/'))} 
                    alt={selectedService.title} 
                    className="w-full h-full object-cover" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-sm inline-flex items-center gap-1 mb-3 border border-white/30">
                       {selectedService.category === 'Services' ? <Wrench size={14} /> : <Settings size={14} />}
                       <span className="uppercase tracking-wider">{selectedService.category}</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight drop-shadow-md">
                       {selectedService.title}
                    </h2>
                 </div>
              </div>

              <div className="p-6 sm:p-8 bg-slate-50">
                 <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed font-light">
                       {selectedService.description}
                    </p>
                 </div>
                 
                 <div className="mt-8 flex justify-end">
                   <Link 
                     to="/contact" 
                     className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-primary text-white hover:bg-primary/90 font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
                     onClick={() => setSelectedService(null)}
                   >
                     Inquire Now <ArrowUpRight size={18} />
                   </Link>
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
