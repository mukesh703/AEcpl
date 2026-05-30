/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, Building2, Clock } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      dept: "Technical Department",
      name: "Mr. Subash Gupta",
      role: "Technical Director",
      phone: "+977-9855072285",
      email: "subash@adityaengineering.com.np",
      image: "./img/Subash.jpeg"
    },
    {
      dept: "Operations Department",
      name: "Mrs. Samjhana Shrestha",
      role: "Operations Manager",
      phone: "+977-9851358709",
      email: "sales@adityaengineering.com.np",
      image: "./img/samjhana_new.jpg"
    },
    {
      dept: "Purchase Department",
      name: "Mr. Ajay Pd. Yadav",
      role: "Senior Manager",
      phone: "+977-9855072285",
      email: "ajay@adityaengineering.com.np",
      image: "./img/ajay-pd-yadav.jpg"
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-10 pb-32">
        <header className="mb-16 py-24 space-y-4 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter uppercase">GET IN <span className="text-primary italic">TOUCH</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl font-sans tracking-tight">
            Consult with our engineering experts to design your next pharmaceutical environment.
          </p>
        </header>

        {/* Key Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contacts.map((contact, idx) => (
            <motion.div 
              key={contact.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg relative group-hover:border-primary transition-colors duration-300">
                  <img 
                    src={import.meta.env.BASE_URL + contact.image.replace(/^\//, '')} 
                    alt={contact.name} 
                    className={`w-full h-full object-cover ${contact.name.includes('Samjhana') ? 'object-top' : ''}`}
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                    {contact.dept}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-4 tracking-tight">
                    {contact.name}
                  </h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest pt-1">
                    {contact.role}
                  </p>
                </div>
                
                <div className="w-full h-px bg-slate-200 my-4" />
                
                <div className="space-y-4 w-full">
                  <a href={`tel:${contact.phone}`} className="flex items-center gap-4 text-slate-600 hover:text-primary transition-colors group/link p-2 -mx-2 rounded-lg hover:bg-white text-sm font-bold tracking-wider">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white group-hover/link:border-primary transition-colors">
                      <Phone size={16} />
                    </div>
                    {contact.phone}
                  </a>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-slate-600 hover:text-primary transition-colors group/link p-2 -mx-2 rounded-lg hover:bg-white text-sm font-bold tracking-wider relative">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white group-hover/link:border-primary transition-colors shrink-0">
                      <Mail size={16} />
                    </div>
                    <span className="truncate">{contact.email}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
                  <p className="text-base font-bold text-slate-900 leading-tight break-all">subash@adityaengineering.com.np</p>
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
            <form action="https://formsubmit.co/adityaengineering@outlook.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="New Inquiry from Website" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="FULL NAME" required className="w-full px-6 py-4 bg-white border border-slate-200 text-xs font-bold tracking-widest focus:ring-1 focus:ring-primary focus:outline-none rounded-sm" />
                <input type="email" name="email" placeholder="BUSINESS EMAIL" required className="w-full px-6 py-4 bg-white border border-slate-200 text-xs font-bold tracking-widest focus:ring-1 focus:ring-primary focus:outline-none rounded-sm" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="company" placeholder="COMPANY" className="w-full px-6 py-4 bg-white border border-slate-200 text-xs font-bold tracking-widest focus:ring-1 focus:ring-primary focus:outline-none rounded-sm" />
                <select name="inquiry_type" className="w-full px-6 py-4 bg-white border border-slate-200 text-xs font-bold tracking-widest focus:ring-1 focus:ring-primary focus:outline-none rounded-sm appearance-none">
                  <option value="General">INQUIRY TYPE</option>
                  <option value="BMS & AUTOMATION">BMS & AUTOMATION</option>
                  <option value="HVAC SOLUTIONS">HVAC SOLUTIONS</option>
                  <option value="CLEAN ROOM BUILD">CLEAN ROOM BUILD</option>
                </select>
              </div>
              <textarea name="message" rows={6} placeholder="SPECIFICATION DETAILS" required className="w-full px-6 py-4 bg-white border border-slate-200 text-xs font-bold tracking-widest focus:ring-1 focus:ring-primary focus:outline-none rounded-sm" />
              <button type="submit" className="w-full btn-primary py-5 text-base shadow-xl shadow-primary/10 uppercase tracking-[0.3em]">
                SUBMIT FOR REVIEW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
