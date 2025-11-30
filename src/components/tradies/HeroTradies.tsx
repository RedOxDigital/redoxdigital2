import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Video, Phone } from 'lucide-react';
import { ContactButton } from '../ContactFormModal';

const IMAGES = {
  googleMap: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop",
  jobSite: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
};

const HeroTradies = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start start", "end start"] 
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <header 
      ref={ref}
      className="relative min-h-screen pt-32 pb-16 md:pb-24 overflow-hidden bg-[#F2F2F2]"
      aria-label="Tradies SEO Hero Section"
      itemScope 
      itemType="https://schema.org/WPHeader"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #1a1a1a 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }}
      />

      <div className="relative z-10 px-6 md:px-12 max-w-[1600px] mx-auto">
        
        {/* Top Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-12 h-[2px] bg-[#E02020]" />
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E02020]">
            North Lakes • Moreton Bay Region
          </span>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.h1 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2.5rem] md:text-6xl lg:text-7xl font-syne font-bold uppercase leading-[0.9] tracking-tight text-[#1a1a1a] mb-6"
              itemProp="headline"
            >
              <span itemProp="name">Tradies SEO</span> & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% animate-gradient">
                Strategic Media
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-sans font-light normal-case tracking-normal mt-4 text-gray-500" itemProp="alternativeHeadline">
                Get Found in <span itemProp="areaServed">North Lakes</span>
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mb-8"
            >
              Stop chasing leads. We combine local SEO for tradies with strategic media to rank you #1 on Google Maps. We show clients you are the expert before they even call. The result? Your phone rings with high quality jobs, not tyre kickers.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 mb-10"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs uppercase tracking-widest font-bold text-gray-600">
                  1 Spot Per Trade
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E02020]" />
                <span className="text-xs uppercase tracking-widest font-bold text-gray-600">
                  North Lakes Based
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ContactButton variant="dark">
                Get Your Free Local Audit
              </ContactButton>
              
              <a 
                href="tel:0493992661" 
                className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 group"
              >
                <Phone className="w-4 h-4" />
                <span className="uppercase text-xs font-bold tracking-widest">
                  Call: 0493 992 661
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right Visual - Split Image */}
          <motion.div 
            style={{ opacity }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
              
              {/* Google Map Image */}
              <motion.div 
                style={{ y: y1 }}
                className="absolute top-0 left-0 w-[70%] h-[60%] z-10"
              >
                <div className="relative w-full h-full overflow-hidden shadow-2xl">
                  <img 
                    src={IMAGES.googleMap}
                    alt="Google Maps ranking for local tradies in North Lakes"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Map Overlay Badge */}
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#E02020]" />
                      <span className="text-xs font-bold uppercase tracking-wide">
                        #1 Map Rank
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Job Site Image */}
              <motion.div 
                style={{ y: y2 }}
                className="absolute bottom-0 right-0 w-[70%] h-[60%] z-20"
              >
                <div className="relative w-full h-full overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src={IMAGES.jobSite}
                    alt="SEO consultant capturing strategic media content on a North Lakes job site"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Video Badge */}
                  <div className="absolute bottom-4 right-4 bg-[#E02020] text-white px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wide">
                        Strategic Media
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Background Accent */}
              <div className="absolute top-[20%] right-[10%] w-32 h-32 bg-[#E02020]/10 -z-10" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
          Scroll to learn more
        </span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#E02020] to-transparent"
        />
      </motion.div>
    </header>
  );
};

export default HeroTradies;

