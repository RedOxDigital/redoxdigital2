import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPinOff, PhoneOff, Clock, AlertTriangle } from 'lucide-react';

const PAIN_POINTS = [
  {
    icon: <MapPinOff className="w-5 h-5" />,
    title: "Wrong Location",
    description: "You get calls from people on the other side of Brisbane. Some are even from other states. That is not a lead. That is a waste of your time."
  },
  {
    icon: <PhoneOff className="w-5 h-5" />,
    title: "Tyre Kickers",
    description: "Your phone rings, but it is just price shoppers who want the cheapest quote. They have no loyalty and will ghost you for $50 less."
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Wasted Hours",
    description: "You drive across town for a quote, only to never hear back. That is fuel, time, and energy you will never get back."
  }
];

const ProblemTradies = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: ref, 
    offset: ["start end", "end start"] 
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      ref={ref} 
      className="py-20 md:py-32 px-6 md:px-12 bg-white border-t border-black/10"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div>
            {/* Section Label */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[2px] bg-[#E02020]" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E02020]">
                The Problem
              </span>
            </motion.div>

            {/* Headline - NO money keywords here */}
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase leading-[0.95] mb-8"
            >
              You Need Local Jobs, <br/>
              <span className="relative inline-block whitespace-nowrap">
                <span className="text-[#E02020]">Not Just Traffic</span>
                <motion.span
                  className="absolute left-0 top-[55%] w-full h-[4px] bg-black origin-left -translate-y-1/2"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                />
              </span>
            </motion.h2>

            {/* Body Copy - Money keywords go here */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-700 leading-relaxed mb-10"
            >
              <p>
                It is frustrating to see website hits that do not turn into paid invoices. You might be ranking for broad terms, but if the phone is ringing with people from the wrong side of Brisbane, or worse, another state, it is a waste of your time.
              </p>
              <p>
                If you are a builder in North Lakes, you need to show up when a neighbour searches "Builder near me." You need tradies SEO that brings you leads who are close to home, ready to hire, and looking for your specific skills. That is where local SEO for tradies makes the difference.
              </p>
            </motion.div>

            {/* Alert Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#E02020]/5 border-l-4 border-[#E02020] p-6"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-[#E02020] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-[#1a1a1a] mb-2">
                    The Real Cost of Bad Leads
                  </p>
                  <p className="text-gray-600">
                    Every quote you give to a tyre kicker costs you money. Every drive across town for a no-show burns fuel and time. A proper SEO consultant in North Lakes helps you attract the right jobs, not just any jobs.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image with Parallax */}
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
              <motion.div 
                style={{ y }} 
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
                  alt="Frustrated tradie dealing with bad leads and wasted time"
                  className="w-full h-full object-cover grayscale contrast-110"
                  loading="lazy"
                />
              </motion.div>
              
              {/* Frame Overlay */}
              <div className="absolute inset-0 border-[16px] md:border-[20px] border-[#F2F2F2] pointer-events-none" />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Pain Point Cards - Desktop (Grid Overlay) */}
            <div className="hidden md:block absolute -bottom-8 -left-8 right-8 z-10">
              <div className="bg-white shadow-2xl border border-black/5">
                <div className="grid grid-cols-3 divide-x divide-black/10">
                  {PAIN_POINTS.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                      className="p-6"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-[#E02020]/10 flex items-center justify-center text-[#E02020]">
                          {point.icon}
                        </div>
                        <h3 className="font-syne font-bold uppercase text-sm">
                          {point.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pain Point Cards - Mobile (Horizontal Scroll) */}
            <div className="md:hidden mt-6 relative z-10 -mx-6 px-6">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
                    {PAIN_POINTS.map((point, index) => (
                        <div key={index} className="flex-shrink-0 w-[85vw] bg-white p-6 shadow-lg border border-black/5 snap-center">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-[#E02020]/10 flex items-center justify-center text-[#E02020]">
                                    {point.icon}
                                </div>
                                <h3 className="font-syne font-bold uppercase text-sm">
                                    {point.title}
                                </h3>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-2 -mt-2">
                    <div className="flex gap-1">
                        <div className="w-6 h-1 bg-[#E02020] rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 ml-2">Swipe</span>
                </div>
                
                {/* "See More" Indicator Button */}
                <div className="flex justify-center mt-4 md:hidden">
                    <div className="animate-bounce bg-black/5 p-2 rounded-full">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemTradies;

