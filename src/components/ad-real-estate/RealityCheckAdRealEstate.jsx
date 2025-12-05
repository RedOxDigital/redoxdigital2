import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { X, Check, Monitor } from 'lucide-react';

const RealityCheckAdRealEstate = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="py-20 md:py-32 bg-white border-t border-black/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-[#E02020]" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E02020]">
              The Reality Check
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase leading-[0.95] mb-6"
          >
            Look At Your Ad. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% animate-gradient">
              Now Look At Theirs.
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
          >
            You think the big guys are spending more? Wrong. They just know a secret about{" "}
            <span className="font-bold text-brand-red">Google Ads for Tradies</span> that nobody told you.
          </motion.p>
        </div>

        {/* Visual Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
          
          {/* Rookie Ad - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-[#F2F2F2] border border-red-200 p-6 md:p-8">
              {/* Label */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                  The Rookie Ad
                </span>
              </div>

              {/* Fake Google Ad - Small */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded">Ad</span>
                  <span className="text-xs text-green-700">www.yoursite.com.au</span>
                </div>
                <p className="text-blue-700 font-medium text-sm mb-1">North Lakes Plumber | Call Today</p>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Licensed plumber in North Lakes. Fast service. Call now for a quote.
                </p>
              </div>

              {/* Problem Description */}
              <div className="mt-6 pt-6 border-t border-red-200">
                <p className="text-gray-700 leading-relaxed">
                  Two lines of text. Easy to miss. Your ad gets pushed down by the big brands. 
                  You pay the same cost per click but get less screen space.
                </p>
              </div>
            </div>

            {/* Arrow pointing to problem */}
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="w-4 h-4 bg-[#F2F2F2] border-r border-b border-red-200 rotate-[-45deg]" />
            </div>
          </motion.div>

          {/* Red Ox Ad - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ y }}
          >
            <div className="bg-white border-2 border-green-300 p-6 md:p-8 shadow-lg">
              {/* Label */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-green-600">
                  The Red Ox Ad
                </span>
              </div>

              {/* Fake Google Ad - Big with Sitelinks */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-0.5 rounded">Ad</span>
                  <span className="text-xs text-green-700">www.yoursite.com.au</span>
                </div>
                <p className="text-blue-700 font-medium text-sm mb-1">North Lakes Plumber | 24/7 Emergency | 5 Star Reviews</p>
                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                  Licensed local plumber serving North Lakes for 15 years. Same day service. Free quotes. See our recent projects.
                </p>
                
                {/* Sitelink Extensions */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100">
                  <a href="#" className="text-blue-600 text-xs hover:underline">Our Services</a>
                  <a href="#" className="text-blue-600 text-xs hover:underline">Recent Projects</a>
                  <a href="#" className="text-blue-600 text-xs hover:underline">Customer Reviews</a>
                  <a href="#" className="text-blue-600 text-xs hover:underline">Get a Quote</a>
                </div>

                {/* Call Extension */}
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
                  <Monitor className="w-3 h-3 text-green-600" />
                  <span className="text-xs text-gray-600">0400 000 000</span>
                </div>
              </div>

              {/* Benefit Description */}
              <div className="mt-6 pt-6 border-t border-green-200">
                <p className="text-gray-700 leading-relaxed">
                  Four extra links. A phone number. Takes up the whole screen. Your competitors 
                  get pushed down. Same cost per click but double the space.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Secret Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1a1a1a] text-white p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', 
              backgroundSize: '30px 30px' 
            }}
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h3 className="text-2xl md:text-3xl font-syne font-bold uppercase mb-4">
                The Secret? It's Not Money. It's Structure.
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Google only gives you those extra links if you have pages to link them to. 
                A one page website gets a one line ad. A 6 page website built for{" "}
                <span className="text-white font-bold">Local SEO North Lakes</span> gets the big ad. 
                That is the game. We build the pages so you win.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-syne font-bold text-[#E02020]">6</div>
                <p className="text-sm uppercase tracking-widest text-gray-500 mt-2">Pages Unlock<br />Sitelink Extensions</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default RealityCheckAdRealEstate;

