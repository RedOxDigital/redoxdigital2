import { motion } from 'framer-motion';
import { MapPin, Clock, Camera } from 'lucide-react';
import { ContactButton } from '../ContactFormModal';

// Get current month name for the CTA
const getCurrentMonth = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
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
          src="/images/north-lakes/north-lakes-hero-scenic.webp"
          alt="North Lakes Queensland scenic boardwalk and lake view"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          onError={(e) => {
            // Fallback to JPG if WebP fails
            const target = e.target;
            if (target.src !== '/images/north-lakes/north-lakes-hero-scenic.jpg') {
              target.src = '/images/north-lakes/north-lakes-hero-scenic.jpg';
            }
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-6 pb-24 pt-32 md:px-12">
        <div className="mx-auto w-full max-w-[1600px]">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-brand-red" />
              <span className="text-sm font-medium text-white">Proudly based in Dakabin</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="mb-8 max-w-5xl font-syne text-4xl font-bold uppercase leading-[0.95] text-white md:text-6xl lg:text-7xl xl:text-8xl"
          >
            The 48-Hour Website for{' '}
            <span className="bg-gradient-to-r from-white via-white to-brand-red bg-clip-text text-transparent">
              North Lakes
            </span>{' '}
            Businesses
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12 max-w-3xl text-xl font-light leading-relaxed text-white/90 md:text-2xl lg:text-3xl"
          >
            We come to your shop, shoot professional photos, and build your site in 2 days. No Zoom
            calls. No waiting.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12 flex flex-wrap gap-4"
          >
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <Clock className="h-4 w-4 text-brand-red" />
              <span className="text-sm text-white/80">48-Hour Turnaround</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <Camera className="h-4 w-4 text-brand-red" />
              <span className="text-sm text-white/80">Professional Photos Included</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <MapPin className="h-4 w-4 text-brand-red" />
              <span className="text-sm text-white/80">We Come to You</span>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col items-start gap-6 sm:flex-row sm:items-center"
          >
            <ContactButton variant="primary" className="px-8 py-4 text-lg">
              Check Availability for {currentMonth}
            </ContactButton>

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-sm text-white/70">Limited spots this month</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-8 w-[1px] bg-gradient-to-b from-gray-400 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroNorthLakes;



