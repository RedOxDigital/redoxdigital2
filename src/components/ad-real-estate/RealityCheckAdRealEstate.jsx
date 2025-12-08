import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { X, Check, Monitor } from 'lucide-react';

const RealityCheckAdRealEstate = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="border-t border-black/10 bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-[2px] w-12 bg-[#E02020]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] md:text-sm">
              The Reality Check
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 font-syne text-4xl font-bold uppercase leading-[0.95] md:text-5xl lg:text-6xl"
          >
            Look At Your Ad. <br />
            <span className="animate-gradient bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% bg-clip-text text-transparent">
              Now Look At Theirs.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            You think the big guys are spending more? Wrong. They just know a secret about{' '}
            <span className="font-bold text-brand-red">Google Ads for Tradies</span> that nobody
            told you.
          </motion.p>
        </div>

        {/* Visual Comparison */}
        <div className="mb-16 grid grid-cols-1 gap-8 md:mb-24 md:gap-12 lg:grid-cols-2">
          {/* Rookie Ad - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="border border-red-200 bg-[#F2F2F2] p-6 md:p-8">
              {/* Label */}
              <div className="mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                  <X className="h-5 w-5 text-red-500" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                  The Rookie Ad
                </span>
              </div>

              {/* Fake Google Ad - Small */}
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-500">
                    Ad
                  </span>
                  <span className="text-xs text-green-700">www.yoursite.com.au</span>
                </div>
                <p className="mb-1 text-sm font-medium text-blue-700">
                  North Lakes Plumber | Call Today
                </p>
                <p className="text-xs leading-relaxed text-gray-600">
                  Licensed plumber in North Lakes. Fast service. Call now for a quote.
                </p>
              </div>

              {/* Problem Description */}
              <div className="mt-6 border-t border-red-200 pt-6">
                <p className="leading-relaxed text-gray-700">
                  Two lines of text. Easy to miss. Your ad gets pushed down by the big brands. You
                  pay the same cost per click but get less screen space.
                </p>
              </div>
            </div>

            {/* Arrow pointing to problem */}
            <div className="absolute -right-2 top-1/2 hidden -translate-y-1/2 lg:block">
              <div className="h-4 w-4 rotate-[-45deg] border-b border-r border-red-200 bg-[#F2F2F2]" />
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
            <div className="border-2 border-green-300 bg-white p-6 shadow-lg md:p-8">
              {/* Label */}
              <div className="mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-green-600">
                  The Red Ox Ad
                </span>
              </div>

              {/* Fake Google Ad - Big with Sitelinks */}
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-500">
                    Ad
                  </span>
                  <span className="text-xs text-green-700">www.yoursite.com.au</span>
                </div>
                <p className="mb-1 text-sm font-medium text-blue-700">
                  North Lakes Plumber | 24/7 Emergency | 5 Star Reviews
                </p>
                <p className="mb-3 text-xs leading-relaxed text-gray-600">
                  Licensed local plumber serving North Lakes for 15 years. Same day service. Free
                  quotes. See our recent projects.
                </p>

                {/* Sitelink Extensions */}
                <div className="grid grid-cols-2 gap-2 border-t border-gray-100 pt-3">
                  <a href="#" className="text-xs text-blue-600 hover:underline">
                    Our Services
                  </a>
                  <a href="#" className="text-xs text-blue-600 hover:underline">
                    Recent Projects
                  </a>
                  <a href="#" className="text-xs text-blue-600 hover:underline">
                    Customer Reviews
                  </a>
                  <a href="#" className="text-xs text-blue-600 hover:underline">
                    Get a Quote
                  </a>
                </div>

                {/* Call Extension */}
                <div className="mt-3 flex items-center gap-2 border-t border-gray-100 pt-3">
                  <Monitor className="h-3 w-3 text-green-600" />
                  <span className="text-xs text-gray-600">0400 000 000</span>
                </div>
              </div>

              {/* Benefit Description */}
              <div className="mt-6 border-t border-green-200 pt-6">
                <p className="leading-relaxed text-gray-700">
                  Four extra links. A phone number. Takes up the whole screen. Your competitors get
                  pushed down. Same cost per click but double the space.
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
          className="relative overflow-hidden bg-[#1a1a1a] p-8 text-white md:p-12"
        >
          {/* Background Pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-5"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)',
              backgroundSize: '30px 30px',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <h3 className="mb-4 font-syne text-2xl font-bold uppercase md:text-3xl">
                The Secret? It's Not Money. It's Structure.
              </h3>
              <p className="text-lg leading-relaxed text-gray-400">
                Google only gives you those extra links if you have pages to link them to. A one
                page website gets a one line ad. A 6 page website built for{' '}
                <span className="font-bold text-white">Local SEO North Lakes</span> gets the big ad.
                That is the game. We build the pages so you win.
              </p>
            </div>
            <div className="flex justify-center md:col-span-4 md:justify-end">
              <div className="text-center">
                <div className="font-syne text-6xl font-bold text-[#E02020] md:text-7xl">6</div>
                <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">
                  Pages Unlock
                  <br />
                  Sitelink Extensions
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealityCheckAdRealEstate;


