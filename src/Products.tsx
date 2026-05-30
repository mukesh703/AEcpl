import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDER_IMAGES = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
];

const PRODUCT_CATEGORIES = [
  'All',
  'HVAC High Side',
  'HVAC Low Side',
  'Clean Room Panel',
  'Clean Room Epoxy Flooring',
  'Electrical Solutions',
  'Access Control & Door Interlock Systems',
  'Clean Room Display',
  'Sensor Technology',
  'SS Equipment & Furniture',
  'Spare Division',
  'Storage System'
];

export const CATALOG_ITEMS = [
  // Storage System
  { title: "Motorized Racking Systems", category: "Storage System", image: "./img/motorized_storage.png" },
  { title: "Compact Racking System", category: "Storage System", image: "./img/Product/Access Controls & Door Interlock System/Compact Storage System.png" },

  // HVAC High Side
  { title: "Cooling Tower", category: "HVAC High Side", image: "./img/Product/HVAC High Side/Cooing Tower.png" },
  { title: "Chiller & Heat Pump", category: "HVAC High Side", image: "./img/Product/HVAC High Side/Chiller and Heat Pump.png" },
  { title: "AHU", category: "HVAC High Side", image: "./img/Product/HVAC High Side/AHU.png" },
  { title: "Dehumidifier", category: "HVAC High Side", image: "./img/Product/HVAC High Side/Dihumdifier.png" },

  // HVAC Low Side
  { title: "P3 Ducting", category: "HVAC Low Side", image: "./img/Product/HVAC Low Side/P3 Ducting.png" },
  { title: "GI Ducting", category: "HVAC Low Side", image: "./img/Product/HVAC Low Side/GI Ducting.png" },
  { title: "Mechanical Piping", category: "HVAC Low Side", image: "./img/Product/HVAC Low Side/Mechanicle Piping.png" },
  { title: "Filters", category: "HVAC Low Side", image: "./img/Product/HVAC Low Side/Filters.png" },

  // Clean Room Panel
  { title: "PPGI / PCGI Puff Panels", category: "Clean Room Panel", image: "./img/Product/Clean Room Pannel/PPGI: PCGI  Puff Panel.png" },
  { title: "Rockwool Panels", category: "Clean Room Panel", image: "./img/Product/Clean Room Pannel/Rockwools Panel.png" },
  { title: "Clean Room Doors", category: "Clean Room Panel", image: "./img/Product/Clean Room Pannel/Clean Room Doors.png" },
  
  // Clean Room Epoxy Flooring
  { title: "Epoxy Flooring", category: "Clean Room Epoxy Flooring", image: "./img/Product/Clean room expoxy Flooring/epoxy flooring.png" },
  { title: "Epoxy Coving", category: "Clean Room Epoxy Flooring", image: "./img/Product/Clean room expoxy Flooring/epoxy coving.png" },

  // Electrical Solutions
  { title: "Clean Room Lighting", category: "Electrical Solutions", image: "./img/Product/Electrical Solution/Clean Room Lighting.png" },
  { title: "HT & LT Panels", category: "Electrical Solutions", image: "./img/Product/Electrical Solution/HT & LT Panels.png" },
  { title: "Sodium Monochromatic Light", category: "Electrical Solutions", image: "./img/Product/Electrical Solution/Sodium Monochromatic Light.png" },

  // Clean Room Display
  { title: "Clean Room Display", category: "Clean Room Display", image: "./img/Product/Clean Room Display/Clean Room Display.png" },

  // Access Control & Door Interlock Systems
  { title: "Face Recognition Systems", category: "Access Control & Door Interlock Systems", image: "./img/Product/Access Controls & Door Interlock System/Face Recognition System.png" },
  { title: "Access Control", category: "Access Control & Door Interlock Systems", image: "./img/Product/Access Controls & Door Interlock System/Access Control.png" },
  { title: "Door Interlocking System", category: "Access Control & Door Interlock Systems", image: "./img/Product/Access Controls & Door Interlock System/Door Interlocking System.png" },

  // Sensor Technology
  { title: "Air Velocity Transmitter", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Air Velocity Transmitter.png" },
  { title: "Air Velocity Sensor", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Air Velocity Sensor.png" },
  { title: "Humidity Transmitter", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Humidity.png" },
  { title: "Differential Pressure Switch", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Differential Pressure Switch.png" },
  { title: "Magnehelic Gauge", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Magnehelic Gauge.png" },
  { title: "Digital Magnehelic Gauge", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Digital Magnehelic Gauge.png" },
  { title: "Air Flow Management", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Air Flow Management.png" },
  { title: "Valve Actuator", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Valve Acutator.png" },
  { title: "Flow Transmitter", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Flow Transmitter.png" },
  { title: "PICV", category: "Sensor Technology", image: "./img/Product/Sensor Technology/PICV.png" },
  { title: "Flotech Liquid Level Switch", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Flotech Liquid Level Switch.png" },
  { title: "Differential Pressure Transmitter", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Differential Pressure Transmitter.png" },
  { title: "Level Switch", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Level Switch.png" },
  { title: "CO2 Sensor", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Co2 Sensor.png" },
  { title: "Temperature Transmitter RS", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Temperature Transmitter RS.png" },
  { title: "Float Sensor", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Flot Sensor.png" },
  { title: "Pneumatic Valve", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Pnumetic Valve.png" },
  { title: "Butterfly Valve", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Butter Fly Valve.png" },
  { title: "Control Valve", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Control Valve.png" },
  { title: "DPT Transmitter", category: "Sensor Technology", image: "./img/Product/Sensor Technology/DPT Transmitter.png" },
  { title: "Wet DPT Transmitter", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Wet DPT Transmitter.png" },
  { title: "Gas Sensing Transmitter", category: "Sensor Technology", image: "./img/Product/Sensor Technology/Gas Sensating Transmitter.png" },

  // SS Equipment & Furniture
  { title: "Apron Cabinets", category: "SS Equipment & Furniture", image: "./img/Product/SS Equipment & Furniture/Apron Cabinet.png" },
  { title: "Cross Over bench", category: "SS Equipment & Furniture", image: "./img/Product/SS Equipment & Furniture/Cross Over Bench.png" },
  { title: "Pass Box", category: "SS Equipment & Furniture", image: "./img/Product/SS Equipment & Furniture/Pass Box.png" },
  { title: "RLAF and LAF", category: "SS Equipment & Furniture", image: "./img/Product/SS Equipment & Furniture/RLAF and LAF.png" },
  { title: "Conveyor Belt", category: "SS Equipment & Furniture", image: "./img/Product/SS Equipment & Furniture/Conveyar Belt.png" },
  { title: "Trolley", category: "SS Equipment & Furniture", image: "./img/Product/SS Equipment & Furniture/Trolly.png" },
  { title: "Storage Tank & Mixers", category: "SS Equipment & Furniture", image: "./img/Product/SS Equipment & Furniture/Storage Tank & Mixer.png" },
  { title: "SS Ducts", category: "SS Equipment & Furniture", image: "./img/Product/SS Equipment & Furniture/SS Ducts.png" },

  // Spare Division
  { title: "Silicon Products", category: "Spare Division", image: "./img/Product/Spare Division/Silicon Products.png" },
  { title: "Sanitizers & Dryers", category: "Spare Division", image: "./img/Product/Spare Division/Sanitizer & Dryers.png" },
  { title: "Air Curtains", category: "Spare Division", image: "./img/Product/Spare Division/Air Curtains.png" },
  { title: "Sieves & Spares", category: "Spare Division", image: "./img/Product/Spare Division/Sives and Spare.png" },
  { title: "Pneumatic Products", category: "Spare Division", image: "./img/Product/Spare Division/Pnumatic Products.png" },
  { title: "Insulation", category: "Spare Division", image: "./img/Product/Spare Division/Insulation.png" },
  { title: "Valves & Actuators", category: "Spare Division", image: "./img/Product/Spare Division/Valve and Acutator.png" },
  { title: "Pipes & Fittings", category: "Spare Division", image: "./img/Product/Spare Division/Piping & Fitting.png" }
];

export default function Products() {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % SLIDER_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-0 font-sans bg-slate-50 min-h-screen">
      {/* 2-Image Header Slider */}
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
              alt="Engineering Products Slider"
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
                  High-Performance Engineering Products
                </h1>
                <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-3xl">
                  Explore our comprehensive portfolio of premium automation components, specialized clean room equipment, and infrastructure solutions developed for strict compliance and maximum efficiency.
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
        {/* Category Dropdown Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 uppercase tracking-tight">
            {activeFilter === 'All' ? 'All Products' : activeFilter}
          </h2>
          <div className="relative w-full sm:w-80 shrink-0">
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="w-full appearance-none bg-white border-2 border-slate-200 text-[#004A8F] py-4 px-6 pr-12 rounded-xl font-bold text-sm uppercase tracking-wider focus:outline-none focus:border-[#004A8F] focus:ring-4 focus:ring-[#004A8F]/10 transition-all cursor-pointer shadow-sm hover:border-slate-300"
            >
              {PRODUCT_CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Products Grid to match image design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {CATALOG_ITEMS.filter(item => activeFilter === 'All' || item.category === activeFilter).map((item, idx) => (
              <motion.div
                layout
                key={item.title + idx}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-slate-100/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:border-slate-200 transition-all flex flex-col h-full group p-5"
              >
                {/* Embedded image container matching the gray rounded rectangle look */}
                <div className="h-48 w-full bg-[#f8f9fc] rounded-lg overflow-hidden relative mb-5 flex items-center justify-center p-4">
                  <img 
                    src={encodeURI([import.meta.env.BASE_URL.replace(/\/$/, ''), item.image.replace(/^\//, '')].join('/'))} 
                    alt={item.title} 
                    className="max-w-full max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                
                <div className="flex flex-col flex-grow text-center items-center">
                  <div className="mb-6 flex-grow flex items-center justify-center">
                    <h3 className="text-[17px] font-bold text-[#003B73] tracking-tight leading-snug uppercase">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Contact Button perfectly aligned at the bottom */}
                  <Link 
                    to={`/products/${encodeURIComponent(item.title.toLowerCase().replace(/\s+/g, '-'))}`} 
                    className="mt-auto inline-flex items-center justify-center w-full gap-2 py-2.5 px-4 bg-transparent border-2 border-[#003B73] text-[#003B73] hover:bg-[#003B73] hover:text-white font-bold rounded-lg text-xs uppercase tracking-widest transition-colors duration-300"
                  >
                    About More <ArrowUpRight size={14} className="stroke-[3]" />
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
