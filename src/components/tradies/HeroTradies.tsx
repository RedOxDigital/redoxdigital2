import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Video, Phone } from 'lucide-react';
import { ContactButton } from '../ContactFormModal';

const IMAGES = {
  googleMap:
    'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop',
  jobSite:
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
};

const HeroTradies = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <header
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#F2F2F2] pb-16 pt-32 md:pb-24"
      aria-label="Tradies SEO Hero Section"
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      {/* Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #1a1a1a 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="h-[2px] w-12 bg-[#E02020]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] md:text-sm">
            North Lakes • Moreton Bay Region
          </span>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 font-syne text-[2.5rem] font-bold uppercase leading-[0.9] tracking-tight text-[#1a1a1a] md:text-6xl lg:text-7xl"
              itemProp="headline"
            >
              <span itemProp="name">Tradies SEO</span> & <br />
              <span className="animate-gradient bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% bg-clip-text text-transparent">
                Strategic Media
              </span>
              <span
                className="mt-4 block font-sans text-2xl font-light normal-case tracking-normal text-gray-500 md:text-3xl lg:text-4xl"
                itemProp="alternativeHeadline"
              >
                Get Found in <span itemProp="areaServed">North Lakes</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl"
            >
              Stop chasing leads. We combine local SEO for tradies with strategic media to rank you
              #1 on Google Maps. We show clients you are the expert before they even call. The
              result? Your phone rings with high quality jobs, not tyre kickers.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-10 flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-600">
                  1 Spot Per Trade
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#E02020]" />
                <span className="text-xs font-bold uppercase tracking-widest text-gray-600">
                  North Lakes Based
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <ContactButton variant="dark">Get Your Free Local Audit</ContactButton>

              <a
                href="tel:0493992661"
                className="group flex items-center justify-center gap-3 border-2 border-[#1a1a1a] px-6 py-3 text-[#1a1a1a] transition-colors duration-300 hover:bg-[#1a1a1a] hover:text-white"
              >
                <Phone className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Call: 0493 992 661
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right Visual - Split Image */}
          <motion.div style={{ opacity }} className="relative lg:col-span-5">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              {/* Google Map Image */}
              <motion.div style={{ y: y1 }} className="absolute left-0 top-0 z-10 h-[60%] w-[70%]">
                <div className="relative h-full w-full overflow-hidden shadow-2xl">
                  <img
                    src={IMAGES.googleMap}
                    alt="Google Maps ranking for local tradies in North Lakes"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Map Overlay Badge */}
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-[#E02020]" />
                      <span className="text-xs font-bold uppercase tracking-wide">#1 Map Rank</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Job Site Image */}
              <motion.div
                style={{ y: y2 }}
                className="absolute bottom-0 right-0 z-20 h-[60%] w-[70%]"
              >
                <div className="relative h-full w-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src={IMAGES.jobSite}
                    alt="SEO consultant capturing strategic media content on a North Lakes job site"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  {/* Video Badge */}
                  <div className="absolute bottom-4 right-4 bg-[#E02020] px-4 py-2 text-white shadow-lg">
                    <div className="flex items-center gap-2">
                      <Video className="h-4 w-4" />
                      <span className="text-xs font-bold uppercase tracking-wide">
                        Strategic Media
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Background Accent */}
              <div className="absolute right-[10%] top-[20%] -z-10 h-32 w-32 bg-[#E02020]/10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Scroll to learn more
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-8 w-[1px] bg-gradient-to-b from-[#E02020] to-transparent"
        />
      </motion.div>
    </header>
  );
};

export default HeroTradies;
