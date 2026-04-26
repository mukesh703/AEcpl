/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Zap, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { CLIENTS } from './constants';

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
      title: "Engineering a Smarter Future",
      desc: "Leading force in pharmaceutical engineering solutions, dedicated to redefining industrial excellence across Nepal."
    },
    {
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop",
      title: "Precision in Every Detail",
      desc: "We bring world-class engineering standards to local industries, ensuring safety and compliance."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);


  const values = [
    { 
      title: 'Our Vision', 
      desc: 'We envision a future where engineering marvels seamlessly integrate with sustainable solutions. To be at the forefront of technological advancements.',
      icon: Eye,
      bg: 'bg-blue-50'
    },
    { 
      title: 'Our Mission', 
      desc: 'Providing unparalleled engineering and consultancy services that meet client expectations. Delivering innovative, cost-effective, and sustainable solutions.',
      icon: Target,
      bg: 'bg-slate-50'
    },
    { 
      title: 'Our Value', 
      desc: 'Client-centric approach focusing on understanding unique needs and tailoring solutions specifically. We blend expertise with a personalized touch.',
      icon: Heart,
      bg: 'bg-slate-50'
    }
  ];

  const team = [
    {
      name: "Er. Subash Gupta",
      role: "Managing Director",
      image: "/subash-gupta-md.png",
      bio: "15+ years of expertise in pharmaceutical engineering and turnkey project management."
    },
    {
      name: "Priya Sharma",
      role: "Lead BMS Consultant",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      bio: "Specialist in LOYTEC automation systems and smart building integration."
    },
    {
      name: "Rajesh Khatri",
      role: "Senior HVAC Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
      bio: "Expert in clean room design and high-efficiency ventilation solutions."
    },
    {
      name: "Anjali Thapa",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      bio: "Dedicated to ensuring project timelines and operational excellence across Nepal."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Slider with 3D animation */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1, rotateY: 5 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: -5 }}
            transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-slate-900/40 z-10" />
            <img 
              src={heroSlides[currentSlide].image} 
              alt="Hero" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-10 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-3xl space-y-6"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                  {heroSlides[currentSlide].title.split(' ').map((word, i) => (
                    word === 'Smarter' ? <span key={i} className="text-primary italic"> {word} </span> : word + ' '
                  ))}
                </h1>
                <p className="text-xl text-white/80 max-w-2xl font-sans leading-relaxed">
                  {heroSlides[currentSlide].desc}
                </p>
                <div className="pt-4 flex gap-4">
                  <div className="flex gap-2">
                    {heroSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-12 h-1.5 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-primary' : 'bg-white/30'}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-24">
        {/* MD Message Section Like Quest */}
        <section className="mb-32">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-2xl flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/3 shrink-0">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] rotate-3 group-hover:rotate-6 transition-transform" />
                <img 
                  src="/subash-gupta-md.png" 
                  alt="Managing Director" 
                  className="relative z-10 rounded-[2.5rem] shadow-xl w-full aspect-[4/5] object-cover hover:grayscale-0 transition-all duration-700" 
                />
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em] flex items-center gap-3">
                <span className="w-10 h-px bg-primary"></span>
                Message from the Managing Director
              </h2>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  "Our goal is to transcend technological barriers in Nepal."
                </h3>
                <div className="text-lg text-slate-600 font-sans leading-relaxed space-y-4">
                  <p>
                    Since our inception, Aditya Engineering & Consultancy has been driven by a singular vision: to empower the industrial landscape of Nepal with world-class engineering solutions. We believe that efficiency is not just a metric, but a cornerstone of sustainable growth.
                  </p>
                  <p>
                    By integrating innovative BMS technologies and pharmaceutical-grade infrastructure, we are not just building facilities; we are building the future of self-reliance for our nation.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xl font-bold text-slate-900">Er. Subash Gupta</p>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">Managing Director</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-primary text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="w-10 h-px bg-primary"></span>
              Our Journey
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              A commitment to technical excellence in Nepal.
            </h3>
            <div className="space-y-6 text-lg text-slate-600 font-sans leading-relaxed">
              <p>
                Established in 2018, Aditya Engineering & Consultancy has rapidly become a trusted partner for the pharmaceutical industry. We simplify complex engineering challenges through a unified approach to design and automation.
              </p>
              <div className="p-10 bg-slate-900 text-white rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
                <p className="italic font-medium leading-relaxed relative z-10">
                  "Our goal is to deliver world-class engineering solutions that empower local industries to thrive on a global scale."
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] rotate-2" />
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
              className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl transition-all duration-700" 
              alt="Aditya Tech" 
            />
          </div>
        </section>

        {/* Our Network - Logo Grid Section */}
        <section className="mb-32 text-center">
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Our Network</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900">Trusted by Local & International Leaders</h3>
            <p className="text-slate-500 font-sans text-lg">Partnering with pioneers to deliver excellence in the pharmaceutical and industrial landscape.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {CLIENTS.map((client, idx) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center min-h-[120px]"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-h-16 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=f1f5f9&color=1b3281&font-size=0.33&length=2`;
                  }}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-primary text-xs font-bold uppercase tracking-[0.3em]">Our Professionals</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900">The Minds Behind Excellence</h3>
            <p className="text-slate-500 font-sans text-lg">Our multi-disciplinary team of engineers and consultants work together to deliver precision at every scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col items-center text-center p-8 rounded-[2rem] bg-white border border-slate-50 hover:shadow-2xl hover:border-primary/10 transition-all duration-300"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-50 group-hover:border-primary/20 transition-all grayscale group-hover:grayscale-0">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest">{member.role}</p>
                  <p className="text-sm text-slate-500 pt-4 font-sans leading-relaxed line-clamp-2">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {values.map((v, idx) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-[2.5rem] ${v.bg} border border-slate-100 space-y-8 group hover:translate-y-[-10px] transition-all duration-300 shadow-xl shadow-slate-200/20`}
            >
              <div className="w-14 h-14 bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all rounded-2xl shadow-sm">
                <v.icon size={28} />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-slate-900">{v.title}</h4>
                <p className="text-base text-slate-500 leading-relaxed font-sans">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </section>
      </div>
    </div>
  );
}
