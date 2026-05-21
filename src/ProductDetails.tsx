import { useParams, Link } from 'react-router-dom';
import { CATALOG_ITEMS } from './Products';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProductDetails() {
  const { id } = useParams();
  const product = CATALOG_ITEMS.find((item) => item.title.toLowerCase().replace(/\s+/g, '-') === id);

  if (!product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Product Not Found</h2>
        <Link to="/products" className="text-[#004A8F] hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <Link to="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#004A8F] mb-8 transition-colors font-medium text-sm">
          <ArrowLeft size={16} /> Back to all products
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Section */}
            <div className="bg-[#f8f9fc] p-8 md:p-16 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 min-h-[400px]">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={encodeURI([import.meta.env.BASE_URL.replace(/\/$/, ''), product.image.replace(/^\//, '')].join('/'))}
                alt={product.title}
                className="max-w-full max-h-[500px] object-contain mix-blend-multiply"
              />
            </div>

            {/* Details Section */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-block px-3 py-1 rounded-full bg-[#004A8F]/10 text-[#004A8F] text-xs font-bold uppercase tracking-wider mb-6">
                  {product.category}
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#003B73] leading-tight mb-6">
                  {product.title}
                </h1>

                <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
                  <p className="text-lg">
                    Premium quality {product.title.toLowerCase()} designed for precise applications in highly controlled environments. This component ensures maximum reliability, efficiency, and seamless integration into modern infrastructure systems.
                  </p>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-[#004A8F]"></div>
                      <span className="text-sm font-medium">Industry Standard Compliance</span>
                    </li>
                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-[#004A8F]"></div>
                      <span className="text-sm font-medium">High Durability Materials</span>
                    </li>
                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-[#004A8F]"></div>
                      <span className="text-sm font-medium">Energy Efficient Design</span>
                    </li>
                    <li className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="w-2 h-2 rounded-full bg-[#004A8F]"></div>
                      <span className="text-sm font-medium">Seamless Integration</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-[#004A8F] text-white font-bold rounded-lg hover:bg-[#003366] transition-colors gap-2 shadow-lg shadow-[#004A8F]/20"
                  >
                    Request a Quote
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
