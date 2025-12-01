import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { ContactButton } from '../ContactFormModal';

const PricingFacebookAds = () => {
  return (
    <section className="py-20 md:py-32 bg-[#1a1a1a] text-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[2px] bg-[#E02020]" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E02020]">
                Invest In Growth
              </span>
            </motion.div>

            {/* H2 - NO money keywords */}
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase leading-[0.95] mb-8"
            >
              Professional <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#E02020] bg-300% animate-gradient">
                Ads Management
              </span>
            </motion.h2>

            {/* Body Copy - Money keywords go here */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-gray-400 font-light leading-relaxed max-w-xl"
            >
              <p>
                You deserve to know where every dollar goes. We believe <span className="text-white font-medium">Facebook ads management cost</span> should be an investment that pays you back, not just a bill you pay.
              </p>
              <p>
                We offer simple, flat-fee packages. They include creative production, strategy, and management. No hidden fees. No "surprise" costs. Just professional service for local businesses ready to grow.
              </p>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-10"
            >
                 <ContactButton variant="primary">View Pricing Options</ContactButton>
            </motion.div>
          </div>

          {/* Right Side: Value Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Gradient decoration */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#E02020] rounded-full blur-[100px] opacity-20 pointer-events-none" />

            <h3 className="text-2xl font-syne font-bold uppercase mb-8 text-white">What's Included:</h3>
            
            <ul className="space-y-6">
                <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#E02020] shrink-0" />
                    <div>
                        <strong className="block text-white text-lg uppercase font-syne">Creative Production</strong>
                        <p className="text-gray-400 text-sm">We design the ads for you.</p>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#E02020] shrink-0" />
                    <div>
                        <strong className="block text-white text-lg uppercase font-syne">Daily Optimisation</strong>
                        <p className="text-gray-400 text-sm">We check your account every 24 hours.</p>
                    </div>
                </li>
                 <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#E02020] shrink-0" />
                    <div>
                        <strong className="block text-white text-lg uppercase font-syne">Live Reporting</strong>
                        <p className="text-gray-400 text-sm">See your profit in real-time.</p>
                    </div>
                </li>
                <li className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#E02020] shrink-0" />
                    <div>
                        <strong className="block text-white text-lg uppercase font-syne">No Lock-In Contracts</strong>
                        <p className="text-gray-400 text-sm">We earn your business every month.</p>
                    </div>
                </li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default PricingFacebookAds;

