/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Building2, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <header className="mb-20 py-24 space-y-4 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter uppercase">GET IN <span className="text-primary italic">TOUCH</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl font-sans tracking-tight">
            Consult with our engineering experts to design your next pharmaceutical environment.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-slate-200 border border-slate-200">
          {/* Info Side */}
          <div className="lg:col-span-5 bg-white p-10 md:p-16 space-y-16">
            <div className="space-y-10">
              <div className="flex gap-8 group">
                <div className="text-primary group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Address</p>
                  <p className="text-base font-bold text-slate-900 leading-tight">Birgunj-12, Parsa Nepal</p>
                  <p className="text-xs font-medium text-slate-400 mt-2 tracking-widest">Reg. 226344/076/077</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="text-primary group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Direct Line</p>
                  <p className="text-base font-bold text-slate-900 leading-tight">+977-9855072285</p>
                  <p className="text-xs font-medium text-slate-400 mt-2 tracking-widest text-primary">+977-9802748626</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Support</p>
                  <p className="text-base font-bold text-slate-900 leading-tight break-all">adityaengineering@outlook.com</p>
                  <p className="text-[10px] font-medium text-slate-400 mt-2 tracking-widest uppercase">www.adityaengineering.com.np</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-10 rounded-sm text-white space-y-6 relative overflow-hidden">
               <Building2 className="absolute -bottom-10 -right-10 text-white/5" size={180} />
               <h3 className="text-xl font-bold tracking-tight">ADITYA SOLUTIONS</h3>
               <p className="text-xs text-slate-400 font-sans leading-relaxed relative z-10">
                 Dedicated to empowering technological support for the Growing industrial landscape of Nepal.
               </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-slate-50 p-10 md:p-16">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="FULL NAME" className="w-full px-6 py-4 bg-white border border-slate-200 text-xs font-bold tracking-widest focus:ring-1 focus:ring-primary focus:outline-none rounded-sm" />
                <input type="email" placeholder="BUSINESS EMAIL" className="w-full px-6 py-4 bg-white border border-slate-200 text-xs font-bold tracking-widest focus:ring-1 focus:ring-primary focus:outline-none rounded-sm" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="COMPANY" className="w-full px-6 py-4 bg-white border border-slate-200 text-xs font-bold tracking-widest focus:ring-1 focus:ring-primary focus:outline-none rounded-sm" />
                <select className="w-full px-6 py-4 bg-white border border-slate-200 text-xs font-bold tracking-widest focus:ring-1 focus:ring-primary focus:outline-none rounded-sm appearance-none">
                  <option>INQUIRY TYPE</option>
                  <option>BMS & AUTOMATION</option>
                  <option>HVAC SOLUTIONS</option>
                  <option>CLEAN ROOM BUILD</option>
                </select>
              </div>
              <textarea rows={6} placeholder="SPECIFICATION DETAILS" className="w-full px-6 py-4 bg-white border border-slate-200 text-xs font-bold tracking-widest focus:ring-1 focus:ring-primary focus:outline-none rounded-sm" />
              <button className="w-full btn-primary py-5 text-base shadow-xl shadow-primary/10 uppercase tracking-[0.3em]">
                SUBMIT FOR REVIEW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
