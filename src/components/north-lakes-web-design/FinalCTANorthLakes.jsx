import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import { ContactButton } from '../ContactFormModal';

// Get current month name for the CTA
const getCurrentMonth = () => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[new Date().getMonth()];
};

const FinalCTANorthLakes = () => {
  const currentMonth = getCurrentMonth();

  return (
    <section className="relative bg-gray-900 text-white py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Red Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Scarcity Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-brand-red/20 rounded-full border border-brand-red/30">
              <Users className="w-5 h-5 text-brand-red" />
              <span className="text-sm font-bold uppercase tracking-wider text-brand-red">
                Limited Availability
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-syne font-bold uppercase tracking-tight leading-[0.95] mb-8"
          >
            I Only Take{' '}
            <span className="text-brand-red">4 Clients</span>{' '}
            Per Month
          </motion.h2>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            To keep the "48 Hour Promise," I have strict limits. This means I can give every North Lakes business my full attention. Check if I have a spot open this month.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mb-12 max-w-xl mx-auto"
          >
            <div className="p-4 md:p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="text-3xl md:text-4xl font-syne font-bold text-brand-red mb-1">4</div>
              <p className="text-xs md:text-sm text-white/50 uppercase tracking-wider">Clients/Month</p>
            </div>
            <div className="p-4 md:p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="text-3xl md:text-4xl font-syne font-bold text-brand-red mb-1">48</div>
              <p className="text-xs md:text-sm text-white/50 uppercase tracking-wider">Hour Delivery</p>
            </div>
            <div className="p-4 md:p-6 bg-white/5 rounded-xl border border-white/10">
              <div className="text-3xl md:text-4xl font-syne font-bold text-brand-red mb-1">100%</div>
              <p className="text-xs md:text-sm text-white/50 uppercase tracking-wider">My Focus</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <ContactButton variant="primary" className="text-lg px-10 py-5 group">
              <span>Check Availability for {currentMonth}</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </ContactButton>
            
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white/50 text-sm">Currently accepting new projects</span>
            </div>
          </motion.div>

          {/* Bottom Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-12 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-brand-red" />
                </div>
                <div className="text-left">
                  <p className="text-white/50 text-xs uppercase tracking-wider">Visit</p>
                  <p className="text-white font-medium">We come to you</p>
                </div>
              </div>
              
              <div className="hidden md:block w-12 h-[1px] bg-white/20" />
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-red" />
                </div>
                <div className="text-left">
                  <p className="text-white/50 text-xs uppercase tracking-wider">Timeline</p>
                  <p className="text-white font-medium">Live in 48 hours</p>
                </div>
              </div>
              
              <div className="hidden md:block w-12 h-[1px] bg-white/20" />
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-brand-red" />
                </div>
                <div className="text-left">
                  <p className="text-white/50 text-xs uppercase tracking-wider">Location</p>
                  <p className="text-white font-medium">Based in Dakabin</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTANorthLakes;

