import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPinOff, PhoneOff, Clock, AlertTriangle } from 'lucide-react';

const PAIN_POINTS = [
  {
    icon: <MapPinOff className="h-5 w-5" />,
    title: 'Wrong Location',
    description:
      'You get calls from people on the other side of Brisbane. Some are even from other states. That is not a lead. That is a waste of your time.',
  },
  {
    icon: <PhoneOff className="h-5 w-5" />,
    title: 'Tyre Kickers',
    description:
      'Your phone rings, but it is just price shoppers who want the cheapest quote. They have no loyalty and will ghost you for $50 less.',
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: 'Wasted Hours',
    description:
      'You drive across town for a quote, only to never hear back. That is fuel, time, and energy you will never get back.',
  },
];

const ProblemTradies = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="border-t border-black/10 bg-white px-6 py-20 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-[2px] w-12 bg-[#E02020]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] md:text-sm">
                The Problem
              </span>
            </motion.div>

            {/* Headline - NO money keywords here */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6 font-syne text-3xl font-bold uppercase leading-[1.1] sm:text-4xl md:mb-8 md:text-5xl md:leading-[0.95] lg:text-6xl"
            >
              You Need Local Jobs, <br className="hidden sm:block" />
              <span className="relative inline-block md:whitespace-nowrap">
                <span className="text-[#E02020]">Not Just Traffic</span>
                <motion.span
                  className="absolute left-0 top-[55%] h-[4px] w-full origin-left -translate-y-1/2 bg-black"
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
              className="mb-10 space-y-6 text-lg leading-relaxed text-gray-700"
            >
              <p>
                It is frustrating to see website hits that do not turn into paid invoices. You might
                be ranking for broad terms, but if the phone is ringing with people from the wrong
                side of Brisbane, or worse, another state, it is a waste of your time.
              </p>
              <p>
                If you are a builder in North Lakes, you need to show up when a neighbour searches
                "Builder near me." You need tradies SEO that brings you leads who are close to home,
                ready to hire, and looking for your specific skills. That is where local SEO for
                tradies makes the difference.
              </p>
            </motion.div>

            {/* Alert Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-l-4 border-[#E02020] bg-[#E02020]/5 p-6"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="mt-1 h-6 w-6 flex-shrink-0 text-[#E02020]" />
                <div>
                  <p className="mb-2 font-bold text-[#1a1a1a]">The Real Cost of Bad Leads</p>
                  <p className="text-gray-600">
                    Every quote you give to a tyre kicker costs you money. Every drive across town
                    for a no-show burns fuel and time. A proper SEO consultant in North Lakes helps
                    you attract the right jobs, not just any jobs.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image with Parallax */}
            <div className="relative h-[500px] overflow-hidden md:h-[600px]">
              <motion.div style={{ y }} className="absolute inset-0 -top-[10%] h-[120%] w-full">
                <img
                  src="/images/tradies/tradies-problem-background.webp"
                  alt="Tradie checking phone for leads - Dealing with low quality enquiries"
                  className="contrast-110 h-full w-full object-cover grayscale"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== '/images/tradies/tradies-problem-background.jpg') {
                      target.src = '/images/tradies/tradies-problem-background.jpg';
                    }
                  }}
                />
              </motion.div>

              {/* Frame Overlay */}
              <div className="pointer-events-none absolute inset-0 border-[16px] border-[#F2F2F2] md:border-[20px]" />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Pain Point Cards - Desktop (Grid Overlay) */}
            <div className="absolute -bottom-8 -left-8 right-8 z-10 hidden md:block">
              <div className="border border-black/5 bg-white shadow-2xl">
                <div className="grid grid-cols-3 divide-x divide-black/10">
                  {PAIN_POINTS.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="p-6"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E02020]/10 text-[#E02020]">
                          {point.icon}
                        </div>
                        <h3 className="font-syne text-sm font-bold uppercase">{point.title}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-600">{point.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pain Point Cards - Mobile (Horizontal Scroll) */}
            <div className="relative z-10 -mx-6 mt-6 px-6 md:hidden">
              <div
                className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                {PAIN_POINTS.map((point, index) => (
                  <div
                    key={index}
                    className="w-[85vw] flex-shrink-0 snap-center border border-black/5 bg-white p-6 shadow-lg"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E02020]/10 text-[#E02020]">
                        {point.icon}
                      </div>
                      <h3 className="font-syne text-sm font-bold uppercase">{point.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">{point.description}</p>
                  </div>
                ))}
              </div>
              <div className="-mt-2 flex items-center justify-center gap-2">
                <div className="flex gap-1">
                  <div className="h-1 w-6 rounded-full bg-[#E02020]"></div>
                  <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                  <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                </div>
                <span className="ml-2 text-[10px] uppercase tracking-widest text-gray-400">
                  Swipe
                </span>
              </div>

              {/* "See More" Indicator Button */}
              <div className="mt-4 flex justify-center md:hidden">
                <div className="animate-bounce rounded-full bg-black/5 p-2">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
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
