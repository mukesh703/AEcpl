/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Quote, Building2 } from 'lucide-react';
import { SLIDES, SERVICES, CLIENTS, PARTNERS } from './constants';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-slate-900" style={{ perspective: '1200px' }}>
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, rotateX: 15, scale: 1.1, z: -100 }}
          animate={{ opacity: 1, rotateX: 0, scale: 1, z: 0 }}
          exit={{ opacity: 0, rotateX: -15, scale: 0.9, z: -100 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 origin-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={SLIDES[current].image}
            alt={SLIDES[current].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 md:px-0">
        <div className="max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -40, filter: 'blur(4px)' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl space-y-6 md:space-y-8"
            >
            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
              {SLIDES[current].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl">
              {SLIDES[current].subtitle}
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                to="/services"
                className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg text-lg uppercase tracking-wider"
              >
                Our Reach
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all text-lg uppercase tracking-wider"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === idx ? 'bg-primary w-10' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

const ServiceSection = () => (
  <section className="py-24 bg-white border-y border-slate-200">
    <div className="max-w-7xl mx-auto px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Integrated Solutions for High Performance <br className="hidden md:block"/> Industrial Infrastructure
          </h3>
        </div>
        <Link to="/services" className="text-primary text-xs font-bold flex items-center gap-2 group h-fit uppercase tracking-widest border-b border-primary/20 pb-1">
          Explore Services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s, idx) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group card-geometric hover:border-slate-900 transition-all cursor-default"
          >
            <div className="mb-6 w-12 h-12 bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all rounded-sm">
              <s.icon size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h4>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed font-sans">{s.description}</p>
            <div className="flex flex-wrap gap-2">
              {s.details.slice(0, 2).map((d) => (
                <span key={d} className="px-3 py-1 bg-slate-50 rounded-sm text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  {d}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="pt-0 font-sans bg-white">
      <Hero />
      
      {/* Introduction Section Like Quest */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] flex items-center gap-3">
                <span className="w-10 h-px bg-primary"></span>
                Welcome to Aditya Engineering
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Enhancing Industrial <span className="text-primary underline decoration-primary/20 decoration-8 underline-offset-4">Efficiency</span> Across Nepal.
              </h3>
              <p className="text-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
                Aditya Engineering & Consultancy specializes in precision instrumentation and advanced automation for the pharmaceutical and industrial sectors. Our mission is to lead Nepal toward a more automated and infrastructure-ready future.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                   <p className="text-4xl font-bold text-slate-900">80+</p>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Projects Delivered</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                   <p className="text-4xl font-bold text-slate-900">2M+</p>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Sq. Ft. Automated</p>
                </div>
              </div>

              <Link to="/about" className="inline-flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all text-sm uppercase tracking-widest pt-4">
                Learn More About Our Journey <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/5 -rotate-2 rounded-[3rem]" />
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
                alt="Engineering Excellence"
                className="relative z-10 rounded-[3rem] shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Precision Engineering Solutions</h3>
            <p className="text-slate-500 font-sans">We provide end-to-end automation and control systems tailored for pharmaceutical manufacturing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((s) => (
              <div key={s.id} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 group hover:translate-y-[-8px] transition-all duration-300">
                <div className="mb-8 w-14 h-14 bg-blue-50 flex items-center justify-center text-primary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                  <s.icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h4>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed font-sans">{s.description}</p>
                <Link to="/services" className="text-primary text-xs font-bold hover:underline underline-offset-4 tracking-widest uppercase">
                  Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Our Network</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Trusted by Local & International Leaders</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-60">
            {CLIENTS.slice(0, 5).map((client) => (
              <div key={client.name} className="flex flex-col items-center justify-center text-center h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=f1f5f9&color=1b3281&font-size=0.33&length=2`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Message */}
      <section className="bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
           <h4 className="text-2xl md:text-4xl text-white font-bold leading-tight">
             Engineering the foundations of a smarter, more efficient industrial future in Nepal.
           </h4>
           <Link to="/contact" className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold hover:bg-blue-50 transition-all uppercase tracking-widest text-sm">
             Work With Us
           </Link>
        </div>
      </section>
    </div>
  );
}
