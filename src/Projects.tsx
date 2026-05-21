/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layers, Building2, Wind, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const PROJECT_SLIDES = [
  "https://images.unsplash.com/photo-1541888087425-ce81dc8caa40?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
];

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PROJECT_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % PROJECT_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + PROJECT_SLIDES.length) % PROJECT_SLIDES.length);
  const categories = ['ALL', 'TURNKEY', 'HVAC', 'BMS', 'CLEAN ROOM'];
  
  const projects = [
    {
      title: "Turnkey Projects",
      category: "TURNKEY",
      location: "MULTIPLE LOCATIONS",
      desc: "Complete end-to-end design, implementation, and qualification of critical pharmaceutical manufacturing facilities.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      tag: "COMPLETED",
      clients: ["Nepal Pharma", "Lyka Pharma", "Nepal Remedies", "SR Drug", "QbD Pharmaceutical", "Shivam Pharma", "Elixir Life Science", "Divine", "Medrik", "Nova Pharma", "Lomus Pharma"]
    },
    {
      title: "HVAC High Side",
      category: "HVAC",
      location: "MULTIPLE LOCATIONS",
      desc: "High-capacity chiller modules, boiler plant controls, and robust environmental management systems for strategic manufacturing.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
      tag: "COMPLETED",
      clients: ["Quest Pharma", "Maruti Pharma", "Multicare"]
    },
    {
      title: "BMS Integration",
      category: "BMS",
      location: "VARIOUS FACILITIES",
      desc: "Advanced industrial automation for integrated HVAC, light control, and real-time energy monitoring systems.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      tag: "AUTOMATION",
      clients: []
    },
    {
      title: "Clean Room Setup",
      category: "CLEAN ROOM",
      location: "VARIOUS FACILITIES",
      desc: "Full installation of highly controlled clean room environments, strict particulate control, and specialized panel integrations.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
      tag: "CRITICAL",
      clients: []
    }
  ];

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6 z-10 relative">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">
              Our Projects
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Engineering Excellence Delivered With Precision
            </h1>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-xl">
              At Aditya Engineering, we take pride in delivering innovative, reliable, and high-quality engineering solutions across multiple industries. Our projects reflect our commitment to precision manufacturing, advanced technology, safety standards, and client satisfaction.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={PROJECT_SLIDES[currentSlide]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
                alt={`Project highlight ${currentSlide + 1}`}
              />
            </AnimatePresence>
            
            <div className="absolute bottom-6 right-6 flex gap-3 z-20">
                <button 
                  onClick={prevSlide}
                  className="bg-white/80 hover:bg-white text-slate-900 p-3 rounded-full backdrop-blur-md transition-all shadow-lg"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="bg-white/80 hover:bg-white text-slate-900 p-3 rounded-full backdrop-blur-md transition-all shadow-lg"
                >
                  <ChevronRight size={20} />
                </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-10 pb-32">
        {/* Infographic Timeline */}
        <div className="relative mt-20">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-16 md:space-y-0">
            {projects.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                onClick={() => setSelectedProject(p)}
                className={`relative flex flex-col md:flex-row items-center cursor-pointer group ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:py-20`}
              >
                {/* Center Node */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border-4 border-slate-50 text-slate-900 font-black text-xl rounded-full items-center justify-center z-10 shadow-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:border-primary/20 transition-all duration-500">
                  0{idx + 1}
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'} z-10`}>
                  <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 relative overflow-hidden group-hover:-translate-y-2">
                     {/* decorative number for mobile */}
                    <div className="md:hidden absolute -top-4 -right-2 text-8xl font-black text-slate-50 opacity-80 z-0 select-none">
                      {idx + 1}
                    </div>
                    
                    <div className="relative z-10 space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] bg-primary/5 px-3 py-1 rounded-full">{p.category}</span>
                        <span className="text-slate-400 text-[9px] font-bold tracking-widest uppercase">{p.location}</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 group-hover:text-primary transition-colors tracking-tight">
                        {p.title}
                      </h3>
                      
                      <div className="w-12 h-1 bg-primary/20 rounded-full group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>
                      
                      <p className="text-sm text-slate-500 leading-relaxed font-sans line-clamp-3">
                        {p.desc}
                      </p>
                      
                      <div className="pt-4 flex flex-col gap-4">
                        <div className="flex items-center text-xs font-black text-slate-900 uppercase tracking-widest gap-2 group-hover:text-primary transition-colors">
                          View Details <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                        
                        {p.clients && p.clients.length > 0 && (
                          <div className="flex items-center gap-2 mt-2">
                             <Layers size={14} className="text-slate-400" />
                             <span className="text-xs text-slate-400 font-bold tracking-widest uppercase">{p.clients.length} Key Clients</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`w-full md:w-1/2 mt-6 md:mt-0 ${idx % 2 === 0 ? 'md:pl-16 lg:pl-24' : 'md:pr-16 lg:pr-24'}`}>
                  <div className="relative overflow-hidden aspect-[4/3] rounded-2xl grayscale group-hover:grayscale-0 shadow-lg group-hover:shadow-2xl transition-all duration-700 bg-slate-200">
                    <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 mix-blend-multiply group-hover:mix-blend-normal" />
                    <div className="absolute top-6 left-6 z-10">
                      <span className="bg-slate-900/90 backdrop-blur-sm text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">
                        {p.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-slate-900/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-xl overflow-hidden w-full max-w-5xl shadow-2xl relative flex flex-col md:flex-row h-full max-h-[85vh]"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/80 text-white rounded-full p-2 backdrop-blur-md transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative group">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                  <span className="bg-primary text-white px-4 py-2 text-xs font-black uppercase tracking-widest shadow-xl">
                    {selectedProject.tag}
                  </span>
                </div>
              </div>

              <div className="md:w-1/2 flex flex-col h-full bg-white overflow-y-auto">
                <div className="p-8 md:p-12 space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                      <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">{selectedProject.category}</span>
                      <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">{selectedProject.location}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                      {selectedProject.title}
                    </h2>
                  </div>
                  
                  <div className="prose prose-slate prose-p:leading-relaxed text-slate-600 font-light text-lg">
                    <p>{selectedProject.desc}</p>
                  </div>

                  {selectedProject.clients && selectedProject.clients.length > 0 && (
                    <div className="pt-8 border-t border-slate-100">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Key Clients</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.clients.map((client) => (
                          <span key={client} className="px-4 py-2 bg-slate-50 border border-slate-100 text-slate-700 text-sm font-medium rounded-full hover:bg-slate-100 transition-colors cursor-default">
                            {client}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
