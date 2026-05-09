import React from 'react';
import { motion } from 'motion/react';
import { Monitor, Home, MousePointerClick, Server, Lightbulb } from 'lucide-react';

export default function BMS() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16 font-sans">
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[500px] w-full bg-[#004A8F] overflow-hidden flex items-center mb-16">
        {/* Abstract Background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-1/4 w-[40rem] h-[40rem] bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10 text-white w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight drop-shadow-lg">
              Highly Integrated<br />Building Management System
            </h1>
            <p className="text-xl md:text-2xl font-light text-blue-100 drop-shadow">
              for energy efficiency and maintainability
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          <FeatureCard 
            icon={<Monitor className="text-pink-500" size={32} strokeWidth={1.5} />}
            title="Building Management System (L-WEB)"
            features={[
              "User-friendly interface",
              "Innovative and comprehensive building management",
              "Device management and daily operation for facilities"
            ]}
          />
          <FeatureCard 
            icon={<Home className="text-slate-700" size={32} strokeWidth={1.5} />}
            title="Room Automation (L-ROC)"
            features={[
              "Scalable room layout as needed",
              "Easy to handle function set for every room segment",
              "IP communication down to room level"
            ]}
          />
          <FeatureCard 
            icon={<MousePointerClick className="text-purple-600" size={32} strokeWidth={1.5} />}
            title="Touch Panel (L-VIS)"
            features={[
              "Alarming, scheduling and trending",
              "Remote access for device and network management",
              "Available for LonMark systems and BACnet networks"
            ]}
          />
          <FeatureCard 
            icon={<Server className="text-green-500" size={32} strokeWidth={1.5} />}
            title="Integrated Automation Servers (L-INX)"
            features={[
              "Freely programmable",
              "Efficient I/O integration through L-IOB modules",
              "Distributed alarming, scheduling, and trending"
            ]}
          />
          <FeatureCard 
            icon={<Lightbulb className="text-yellow-500" size={32} strokeWidth={1.5} />}
            title="Lighting Control (L-DALI)"
            features={[
              "Integration to LonMark systems or BACnet networks",
              "All luminaries are monitored for lamp or ballast failure",
              "Supports calculation of energy consumption and combustion duration"
            ]}
          />
        </div>
      </div>

      {/* Blue Informational Banner Section */}
      <div className="w-full bg-[#009FE3] text-white py-16 relative overflow-hidden rounded-t-[40px] shadow-2xl">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 grid grid-cols-1 xl:grid-cols-12 gap-12 relative z-10">
          
          {/* Left Content Area */}
          <div className="xl:col-span-8 flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <BlueCard 
                title="One for all protocols"
                subtitle="All protocols confluent at device level"
                content={
                  <div className="mt-6 flex flex-col text-[10px] items-center justify-center opacity-90 h-32 relative">
                    <div className="absolute inset-0 border border-white/20 bg-white/5 rounded-lg flex items-center justify-center break-words text-center p-2 backdrop-blur-sm font-mono leading-tight">
                       LON • M-Bus • KNX • Wi-Fi • BACnet • Modbus • EnOcean • OPC XML-DA
                    </div>
                  </div>
                }
              />
              <BlueCard 
                title="Maintenance anywhere anytime"
                subtitle="Local access through embedded display"
                content={
                  <div className="mt-6 flex flex-col items-center justify-center opacity-90 h-32 relative">
                    <div className="flex gap-4 items-center justify-center absolute inset-0 border border-white/20 bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                      <div className="flex flex-col items-center">
                        <Monitor size={24} className="mb-2" />
                        <span className="text-[10px]">Client</span>
                      </div>
                      <div className="w-8 border-t-2 border-dashed border-white/50"></div>
                      <div className="flex flex-col items-center">
                        <Server size={24} className="mb-2" />
                        <span className="text-[10px]">Embedded</span>
                      </div>
                    </div>
                  </div>
                }
              />
              <div className="flex flex-col">
                <h3 className="font-bold text-[17px] leading-tight mb-3">Global connection for system integration</h3>
                <ul className="text-sm space-y-1.5 text-white/90">
                  <li className="flex items-start"><span className="mr-2">•</span> Create data cloud via IP network</li>
                  <li className="flex items-start"><span className="mr-2">•</span> Secure remote access to each data point with</li>
                  <li className="flex items-start"><span className="mr-2">•</span> assigned identification keys</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/20 pt-8">
               <div className="flex flex-col">
                  <h3 className="font-bold text-[17px] leading-tight mb-3 text-white">Easy network extension</h3>
                  <ul className="text-sm space-y-1.5 text-white/90">
                    <li className="flex items-start"><span className="mr-2">•</span> Standalone I/O module for</li>
                    <li className="flex items-start"><span className="mr-2">•</span> LonMark and BACnet networks</li>
                    <li className="flex items-start"><span className="mr-2">•</span> Turn IP-based protocols into</li>
                    <li className="flex items-start"><span className="mr-2">•</span> wireless connections</li>
                  </ul>
               </div>
               <div className="flex flex-col">
                  <h3 className="font-bold text-[17px] leading-tight mb-3 text-white">Plug & play</h3>
                  <ul className="text-sm space-y-1.5 text-white/90">
                    <li className="flex items-start"><span className="mr-2">•</span> Technical-barrier-free installation</li>
                    <li className="flex items-start"><span className="mr-2">•</span> Automatic backup and restore</li>
                    <li className="flex items-start"><span className="mr-2">•</span> Hot swappable</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* Right Isometric Map Placeholder Container */}
          <div className="xl:col-span-4 flex items-center justify-center pl-0 xl:pl-8 border-t xl:border-t-0 xl:border-l border-white/20 pt-8 xl:pt-0">
             <div className="w-full bg-white/10 rounded-xl p-4 border border-white/20 relative shadow-inner overflow-hidden flex flex-col min-h-[350px]">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#ffffff33_25%,transparent_25%,transparent_50%,#ffffff33_50%,#ffffff33_75%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>
                
                {/* Structural Graphic Representation */}
                <div className="flex-1 flex flex-col items-center justify-center z-10 gap-6">
                  {/* Fake floors */}
                  <div className="w-[80%] h-24 bg-white/10 border border-white/30 rounded-lg transform -skew-y-6 flex items-center justify-between p-4 shadow-[0_10px_0_rgba(255,255,255,0.1)]">
                     <span className="text-xs font-bold font-mono">HVAC / ROOF</span>
                     <div className="w-8 h-8 rounded-full bg-blue-400/50 flex animate-pulse items-center justify-center text-[10px]">L-INX</div>
                  </div>
                  <div className="w-[85%] h-24 bg-white/10 border border-white/30 rounded-lg transform -skew-y-6 flex items-center justify-between p-4 shadow-[0_10px_0_rgba(255,255,255,0.1)]">
                     <span className="text-xs font-bold font-mono text-left">OFFICE SPACE<br/><span className="text-[10px] font-normal opacity-80">Lighting, Climate, Blinds</span></span>
                     <div className="max-w-[40%] flex gap-2">
                       <div className="w-6 h-6 rounded-full bg-yellow-400/50 flex items-center justify-center text-[8px]">L-DALI</div>
                       <div className="w-6 h-6 rounded-full bg-green-400/50 flex items-center justify-center text-[8px]">L-ROC</div>
                     </div>
                  </div>
                  <div className="w-[90%] h-24 bg-white/10 border border-white/30 rounded-lg transform -skew-y-6 flex items-center justify-between p-4 shadow-[0_10px_0_rgba(255,255,255,0.1)]">
                     <span className="text-xs font-bold font-mono text-left">LOBBY / SECURITY</span>
                     <div className="w-8 h-8 rounded-full bg-purple-400/50 flex items-center justify-center text-[10px]">L-VIS</div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>

      {/* Footer / Branding */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 mt-16 flex justify-between items-center text-sm font-bold text-gray-500 uppercase tracking-wider relative pt-6 border-t border-gray-200">
          <div>ADITYA ENGINEERING & CONSULTANCY PVT. LTD.</div>
          <div className="bg-[#2E6B8C] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">7</div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, features }: { icon: React.ReactNode, title: string, features: string[] }) {
  return (
    <div className="flex gap-5 items-start bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-16 h-16 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-slate-800 text-[17px] leading-snug mb-3 pr-2">{title}</h3>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="text-slate-600 text-sm flex items-start leading-relaxed">
              <span className="text-[#004A8F] font-bold mr-2 mt-0.5">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function BlueCard({ title, subtitle, content }: { title: string, subtitle: string, content: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full bg-white/5 rounded-2xl p-5 border border-white/10 shadow-lg backdrop-blur-sm">
      <h3 className="font-bold text-[17px] leading-tight mb-1">{title}</h3>
      <p className="text-sm font-medium text-white/90 flex items-start"><span className="mr-2">•</span> {subtitle}</p>
      <div className="mt-auto">
        {content}
      </div>
    </div>
  )
}
