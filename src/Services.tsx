/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { SERVICES } from './constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-24 mb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-10 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tighter"
          >
            Engineering <span className="text-primary">&</span> Consultancy
          </motion.h1>
          <p className="text-xl text-slate-600 max-w-2xl font-sans tracking-tight">
            Strategic solutions for pharmaceutical and industrial complexes. Turnkey builds delivered with geometric precision.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-10 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-10 border border-slate-100 shadow-xl shadow-slate-200/40 group hover:translate-y-[-4px] transition-all flex flex-col h-full"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
                <div className="bg-blue-50 p-6 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <service.icon size={36} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{service.title}</h3>
                  <p className="text-base text-slate-600 leading-relaxed font-sans">{service.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                {service.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                    <CheckCircle2 className="text-primary shrink-0" size={16} />
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">{detail}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-flex items-center gap-3 text-primary text-sm font-bold uppercase tracking-widest mt-10 hover:gap-5 transition-all">
                CONSULT WITH EXPERTS <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
