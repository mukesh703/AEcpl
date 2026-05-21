import React from 'react';
import { motion } from 'motion/react';

export default function BryAir() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-16 font-sans">
      {/* Container 1: The Bry-Air Solution */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          {/* Logo and Titles */}
          <div className="md:w-[50%]">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#E61C24] text-white font-black italic text-4xl px-8 py-3 skew-x-[15deg] inline-block">
                <span className="skew-x-[-15deg] block">Bry-Air</span>
              </div>
              <span className="text-gray-500 font-bold ml-2">®</span>
            </div>
            <h1 className="text-4xl md:text-[42px] font-bold text-gray-900 leading-tight mb-4 tracking-tight">
              Don't Allow Moisture to<br/>Spoil Your Quality and Profits
            </h1>
            <div className="inline-block bg-[#971E1C] text-white font-bold tracking-widest px-4 py-1.5 rounded-sm uppercase mb-16 shadow-md text-sm">
              PHARMACEUTICALS
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-8">The Bry-Air Solution</h2>
            
            <div className="relative h-64 mt-20">
              {/* Image graphic container */}
              <div className="absolute left-0 bottom-0 max-w-[80%] z-10">
                 <img src={encodeURI([import.meta.env.BASE_URL.replace(/\/$/, ''), 'img/Product/HVAC High Side/Dihumdifier.png'].join('/'))} alt="Dehumidifiers" className="h-48 object-contain" />
              </div>
              
              <div className="absolute top-[-30px] right-0 bg-white/50 backdrop-blur-sm p-4 max-w-[200px] z-20">
                <div className="bg-[#F6A810] text-black font-black italic px-3 py-1 rounded-full absolute -top-4 -left-6 text-sm transform -rotate-12">New</div>
                <p className="text-gray-800 text-sm">Bry-Air BrySmart® Series (BBS)<br/>with Patented Technology</p>
              </div>
              
              {/* Badge elements */}
              <div className="absolute bottom-16 right-0 z-20 flex flex-col items-center">
                 <img src={encodeURI([import.meta.env.BASE_URL.replace(/\/$/, ''), 'img/Product/HVAC High Side/Dihumdifier.png'].join('/'))} alt="Bry-Air" className="h-20 object-contain mix-blend-multiply" />
                 <h3 className="font-bold text-xl mt-2">Bry-Air<span className="text-xs font-normal align-top">®</span></h3>
                 <h4 className="font-black text-2xl">Dehumidifiers</h4>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="md:w-[50%] md:border-l-2 md:border-gray-200 md:pl-12 pt-4">
            <p className="text-gray-700 text-[16px] mb-8 leading-relaxed">
              Desiccant dehumidification is the most effective way to protect pharmaceutical raw material and products during production, storage and transportation from moisture menace. Bry_Air desiccant dehumidification system ensure optimum moisture control in storage, packaging etc. and help in maintaining hygienic conditions all year round, regardless of the ambient conditions, at a very low dew point.
            </p>
            <p className="text-gray-700 text-[16px] leading-relaxed">
              Bry-Air can provide custom designed package system with pre-filter, after-filter, precoling (fresh air cooling), post-cooling and bypass arrangement for complete air and bypass arrangement for complete air handling and environment control solutions for each stage of pharmaceutical production.
            </p>
            <div className="mt-6 flex justify-end">
              <span className="font-bold text-2xl tracking-widest text-slate-800">.....</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 mb-20 flex justify-between items-center text-sm font-bold text-gray-500 uppercase">
          <div>ADITYA ENGINEERING & CONSULTANCY PVT. LTD.</div>
          <div className="bg-[#2E6B8C] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">10</div>
      </div>


      {/* Capsule Banner Section */}
      <div className="relative h-64 md:h-96 w-full overflow-hidden mb-16 bg-[#FDFDFD]">
         {/* Capsule shapes representation */}
         <div className="absolute inset-0 z-0 flex">
           <div className="w-[40%] bg-gradient-to-br from-[#F5D7CD] to-[#EFA09C] h-[150%] rounded-[100px] transform -translate-y-1/4 -translate-x-1/4 rotate-12 blur-sm"></div>
           <div className="w-[60%] bg-gradient-to-r from-[#90C8D6] to-[#0186D5] h-[120%] rounded-[200px] transform -translate-x-1/4 scale-125 blur-sm opacity-90"></div>
         </div>
         
         <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 max-w-7xl mx-auto w-full">
            <div className="w-full flex flex-col items-start md:items-start text-center md:text-left">
              <div className="text-[#E61C24] font-black text-xl md:text-3xl lg:text-4xl mb-4">
                www.bryair.com
              </div>
              <a 
                href="https://www.bryair.com/products/?utm_term=&utm_source=google_ads&utm_medium=google&utm_campaign=Bry-Air+-+Brand+Campaign&hsa_cam=11440842460&hsa_grp=118652274907&hsa_mt=&hsa_src=g&hsa_ad=488617570544&hsa_acc=5313548888&hsa_net=adwords&hsa_kw=&hsa_tgt=dsa-2273893977299&hsa_ver=3&gad_source=1&gad_campaignid=11440842460&gbraid=0AAAAAD71EIKW5sTxSVG4s7eHfTodrkti2&gclid=CjwKCAjwtvvPBhBuEiwAPMijr0Jt3vshSOlHycl0dzmftyiHUvWjPqHS5PA-KiF-H1mtSlDIUaAacxoC1eIQAvD_BwE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#E61C24] hover:bg-[#c9181f] text-white font-bold py-2 px-6 rounded-full transition-colors shadow-md text-sm md:text-base inline-block"
              >
                Learn more
              </a>
            </div>
            
            <div className="flex flex-col items-end whitespace-nowrap mt-8 md:mt-0">
              <div className="text-[#E61C24] font-medium text-lg italic tracking-wider mb-2 pr-20">Moisture in...</div>
              <div className="flex items-center">
                 <div className="h-[2px] w-32 bg-gray-400 opacity-50 mr-4"></div>
                 <img src={encodeURI([import.meta.env.BASE_URL.replace(/\/$/, ''), 'img/Product/HVAC High Side/Dihumdifier.png'].join('/'))} alt="Bry-Air" className="h-24 md:h-32 object-contain mix-blend-multiply filter contrast-125 z-20 relative drop-shadow-xl" />
                 <div className="text-[#0186D5] font-medium text-lg italic tracking-wider ml-4 mt-8">Dry air out</div>
              </div>
              <div className="bg-[#E61C24] text-white font-black px-6 py-3 text-sm md:text-base leading-tight text-center relative z-20 mt-4 shadow-xl">
                EXPERIENCE THE<br/>MAGIC OF DRY AIR
              </div>
            </div>
         </div>
      </div>

      {/* Product Range Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div className="mb-10 md:mb-0 relative">
             <h3 className="text-2xl md:text-[28px] font-bold text-gray-900 mb-1 leading-tight tracking-tight">Desiccant Dehumidification</h3>
             <p className="text-gray-800 text-[18px]">for humidity control & drying</p>
             <div className="mt-8 relative mr-12">
                <img src={encodeURI([import.meta.env.BASE_URL.replace(/\/$/, ''), 'img/Product/HVAC High Side/Dihumdifier.png'].join('/'))} alt="Dehumidifier" className="h-32 md:h-48 object-contain mix-blend-multiply" />
                <div className="absolute right-0 top-0 bg-[#E61C24] text-white font-black px-3 py-2 rounded-[24px] transform -rotate-[20deg] star-burst text-sm">
                  New
                </div>
             </div>
          </div>
          
          <div className="text-center md:text-right flex flex-col items-center md:items-end">
            <h2 className="text-3xl md:text-[40px] font-bold text-[#E61C24] leading-tight mb-2 tracking-tight">
              Unlimited customisation... at limited cost
            </h2>
            <p className="text-xl md:text-3xl text-gray-800 mb-8 font-light tracking-wide">Dehumidifiers - You name it, we have it</p>
            <div className="inline-block bg-[#A11B21] border border-white outline outline-4 outline-[#A11B21] text-white font-black text-2xl md:text-3xl px-12 py-3 rounded-xl shadow-lg uppercase tracking-wider">
              Our Product Range
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard 
            title="Gas Phase Filtration" 
            desc="for removal of corrosive & odorous gases"
          />
          <ProductCard 
            title="High Temperature" 
            desc="Heat Recovery Wheel"
          />
          <ProductCard 
            title="Adsorption Chillers" 
            desc={<>Use low grade waste heat<br/>for Energysmart Green Cooling</>}
            isNew={true}
          />
          <ProductCard 
            title="Plastics Auxiliaries" 
            desc={<>for Drying, Conveying, Blending,<br/>Heating & Cooling and Mould<br/>Dehumidification</>}
          />
        </div>
        
        <div className="mt-16 border-t-2 border-gray-300 pt-4 flex justify-between items-center text-sm font-bold text-gray-500 uppercase">
          <div>ADITYA ENGINEERING & CONSULTANCY PVT. LTD.</div>
          <div className="bg-[#2E6B8C] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">11</div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ title, desc, isNew = false }: { title: string, desc: React.ReactNode, isNew?: boolean }) {
  return (
    <div className="border border-gray-200 rounded-[24px] p-6 pb-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all relative overflow-hidden bg-white group min-h-[400px]">
      <h4 className="text-[22px] font-black text-gray-900 mb-2 mt-4 leading-tight">{title}</h4>
      <p className="text-[14px] text-gray-700 leading-snug px-2">{desc}</p>
      
      {isNew && (
        <div className="absolute right-6 top-[40%] bg-[#E61C24] text-white font-black text-center flex items-center justify-center rounded-full transform -rotate-[15deg] z-10 w-20 h-20 shadow-md">
          <span className="text-xl">New</span>
          {/* Implement star-burst effect with CSS if possible, using simple circle for now */}
          <div className="absolute inset-0 border-dashed border-2 border-white rounded-full"></div>
        </div>
      )}

      <div className="mt-auto pt-6 w-full flex items-center justify-center relative z-0">
         <img 
            src={encodeURI([import.meta.env.BASE_URL.replace(/\/$/, ''), 'img/Product/HVAC High Side/Chiller and Heat Pump.png'].join('/'))} 
            alt={title} 
            className="max-h-40 object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
         />
      </div>
      
      {/* subtle frame bottom border inside */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </div>
  )
}
