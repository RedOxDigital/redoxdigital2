import { motion } from 'framer-motion';
import { MapPin, Clock, Camera } from 'lucide-react';
import { ContactButton } from '../ContactFormModal';

// Get current month name for the CTA
const getCurrentMonth = () => {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[new Date().getMonth()];
};

const HeroNorthLakes = () => {
  const currentMonth = getCurrentMonth();

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden"
      aria-label="Hero section - Web Design North Lakes"
    >
      {/* Background Image - Lake Eden / North Lakes Business Park Style */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
          alt="North Lakes Queensland scenic boardwalk and lake view"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-24">
        <div className="max-w-[1600px] mx-auto w-full">
          
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="text-sm text-white font-medium">Proudly based in Dakabin</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-syne font-bold uppercase leading-[0.95] text-white mb-8 max-w-5xl"
          >
            The 48-Hour Website for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-brand-red">
              North Lakes
            </span>{' '}
            Businesses
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light leading-relaxed max-w-3xl mb-12"
          >
            We come to your shop, shoot professional photos, and build your site in 2 days. No Zoom calls. No waiting.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Clock className="w-4 h-4 text-brand-red" />
              <span className="text-sm text-white/80">48-Hour Turnaround</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <Camera className="w-4 h-4 text-brand-red" />
              <span className="text-sm text-white/80">Professional Photos Included</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <MapPin className="w-4 h-4 text-brand-red" />
              <span className="text-sm text-white/80">We Come to You</span>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <ContactButton variant="primary" className="text-lg px-8 py-4">
              Check Availability for {currentMonth}
            </ContactButton>
            
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white/70 text-sm">Limited spots this month</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-gray-400 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroNorthLakes;

