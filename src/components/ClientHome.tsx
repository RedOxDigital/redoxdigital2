import { useRef, useState, useEffect } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  useMotionValueEvent,
} from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';

const STATS_DATA = [
  {
    label: 'Ad Spend',
    number: '~$0',
    subtext: 'Virtually zero reliance on paid ads while patient numbers increased.',
  },
  {
    label: 'Growth',
    number: 'Organic',
    subtext: 'Sustainable traffic flow driven by local search presence.',
  },
  {
    label: 'Dominance',
    number: 'Top 3',
    subtext: "Consistently appearing in the 'Map Pack' for local radiology terms.",
  },
];

/**
 * SUB-COMPONENT: Result Card
 */
const ResultStat = ({
  number,
  label,
  subtext,
  delay,
}: {
  number: string;
  label: string;
  subtext: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border-t border-black/10 py-12 pr-8 transition-colors duration-500 hover:bg-neutral-50 md:py-16"
    >
      <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#E02020]">
        {label}
      </div>
      <h3 className="mb-4 font-syne text-4xl font-bold tracking-tighter text-black md:text-5xl">
        {number}
      </h3>
      <p className="max-w-xs font-medium leading-relaxed text-neutral-500 transition-colors duration-300 group-hover:text-black">
        {subtext}
      </p>
      <div className="absolute right-4 top-12 text-[#E02020] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <ArrowRight size={32} className="-rotate-45" />
      </div>
    </motion.div>
  );
};

const MobileResultSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);

  // Duplicate (3 sets)
  const allStats = [...STATS_DATA, ...STATS_DATA, ...STATS_DATA];

  useEffect(() => {
    if (sliderRef.current) {
      setContentWidth(sliderRef.current.scrollWidth / 3);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (!isDragging && contentWidth > 0) {
      const moveBy = -0.5 * (delta / 16);
      x.set(x.get() + moveBy);
    }
  });

  useMotionValueEvent(x, 'change', (latest) => {
    if (contentWidth > 0) {
      if (latest <= -contentWidth) {
        x.set(latest + contentWidth);
      } else if (latest > 0) {
        x.set(latest - contentWidth);
      }
    }
  });

  return (
    <div className="w-full cursor-grab overflow-hidden pb-12 active:cursor-grabbing md:hidden">
      <motion.div
        ref={sliderRef}
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -10000, right: 10000 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        className="flex gap-4 pl-0"
      >
        {allStats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex min-h-[300px] w-[85vw] max-w-[400px] flex-shrink-0 flex-col justify-between whitespace-normal border-t border-black/10 bg-neutral-50 p-8"
          >
            <div>
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#E02020]">
                {stat.label}
              </div>
              <h3 className="mb-4 font-syne text-4xl font-bold tracking-tighter text-black">
                {stat.number}
              </h3>
              <p className="font-medium leading-relaxed text-neutral-500">{stat.subtext}</p>
            </div>
            <div className="mt-8 flex justify-end text-[#E02020]">
              <ArrowRight size={32} className="-rotate-45" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Progress Indicator */}
      <div className="mt-8 flex items-center gap-3">
        <div className="relative h-[1px] w-full overflow-hidden bg-neutral-200">
          <motion.div
            className="absolute left-0 top-0 h-full w-1/3 bg-[#E02020]"
            animate={{ x: [0, 150, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <span className="whitespace-nowrap text-[10px] uppercase tracking-widest text-neutral-400">
          Swipe
        </span>
      </div>
    </div>
  );
};

const MobileClientScroll = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  // Strategy card flips from 90deg to 0deg (revealing it)
  const rotateY = useTransform(scrollYProgress, [0.3, 0.7], [90, 0]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  // Challenge card fades out and scales down
  const challengeOpacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);
  const challengeScale = useTransform(scrollYProgress, [0.3, 0.7], [1, 0.95]);

  return (
    <div
      ref={ref}
      className="relative h-[140vh] border-t border-neutral-200 bg-neutral-50 md:hidden"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6">
        {/* Card Container for perfect centering */}
        <div className="relative h-[60vh] w-full max-w-md" style={{ perspective: '1000px' }}>
          {/* Challenge Card (Base) */}
          <motion.div
            style={{ opacity: challengeOpacity, scale: challengeScale }}
            className="absolute inset-0 z-10 flex flex-col justify-between border border-neutral-200 bg-white p-8 shadow-lg"
          >
            <div>
              <span className="mb-6 inline-block bg-neutral-200 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                The Challenge
              </span>
              <h3 className="mb-6 font-syne text-3xl font-bold uppercase leading-tight">
                HIGH SPEND, <br /> EMPTY WAITING ROOM.
              </h3>
              <p className="text-base leading-relaxed text-neutral-600">
                Trying to break into the competitive Ultrasound and X-ray market, Modia Health had a
                website with zero traffic. They were burning cash on Google Ads with{' '}
                <span className="font-bold text-black">no return</span> to show for it.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-400 line-through decoration-[#E02020] decoration-2">
              Paid Acquisition
            </div>

            {/* Abstract BG Element */}
            <div className="pointer-events-none absolute right-0 top-0 p-4 opacity-10">
              <span className="text-8xl font-black">?</span>
            </div>
          </motion.div>

          {/* Strategy Card (Overlay - Flips to reveal) */}
          <motion.div
            style={{ rotateY, opacity }}
            className="absolute inset-0 z-20 flex flex-col justify-between bg-black p-8 text-white shadow-2xl"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)',
                backgroundSize: '30px 30px',
              }}
            ></div>

            <div className="relative z-10">
              <span className="mb-6 inline-block bg-[#E02020] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                THE STRATEGY
              </span>
              <h3 className="mb-6 font-syne text-3xl font-bold uppercase leading-tight">
                OWN THE MAP, <br /> OWN THE PATIENT.
              </h3>
              <p className="mb-6 text-base leading-relaxed text-neutral-400">
                We stopped the bleeding on ads. We pivoted to hyper-local dominance via{' '}
                <span className="italic text-white">Google My Business</span>, specifically
                targeting the high-volume Aged Care sector.
              </p>
            </div>

            <ul className="relative z-10 space-y-3 text-sm">
              {[
                'Google My Business Optimization',
                'Aged Care Niche Targeting',
                'Organic Traffic Focus',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold">
                  <div className="h-2 w-2 bg-[#E02020]"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

/**
 * MAIN COMPONENT: Modia Health Case Study
 */
const ClientHome = () => {
  return (
    <div
      id="case-study"
      className="bg-white text-black antialiased selection:bg-[#E02020] selection:text-white"
    >
      {/* 2. HERO SECTION */}
      <section className="relative mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          {/* Headline Area */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="h-[2px] w-12 bg-[#E02020]"></div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">
                CASE STUDY (HEALTH)
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-8 font-syne text-6xl font-bold uppercase leading-[0.9] tracking-tighter md:text-6xl lg:text-7xl"
            >
              THE ORGANIC <br />
              <span className="text-[#E02020]">REMEDY</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-3xl text-xl font-light leading-tight text-neutral-800 md:text-3xl"
            >
              We helped Modia Health cut the ad spend and{' '}
              <span className="font-bold underline decoration-[#E02020] decoration-2 underline-offset-4">
                dominated local search.
              </span>{' '}
              They were bleeding budget. We stopped it.
            </motion.p>
          </div>

          {/* Visual/Image Area (Right Side) */}
          <div className="relative h-full min-h-[400px] lg:col-span-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full w-full overflow-hidden"
            >
              <div className="absolute inset-0 z-10 bg-[#E02020] opacity-20 mix-blend-multiply"></div>
              {/* Updated Image: Modern Medical Tech / Abstract X-ray vibe */}
              <img
                src="/images/client/client-medical-tech-hero.webp"
                alt="Medical Website Design Case Study - Modia Health Radiology & Ultrasound"
                loading="lazy"
                width="800"
                height="1000"
                className="h-full w-full object-cover grayscale transition-transform duration-1000 ease-out hover:scale-105"
                onError={(e) => {
                  // Fallback to JPG if WebP fails
                  const target = e.target as HTMLImageElement;
                  if (target.src !== '/images/client/client-medical-tech-hero.jpg') {
                    target.src = '/images/client/client-medical-tech-hero.jpg';
                  }
                }}
              />
              <div className="absolute bottom-6 left-6 z-20 bg-white px-4 py-2">
                <p className="text-xs font-bold uppercase tracking-widest">
                  Radiology • Ultrasound
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CHALLENGE vs STRATEGY (Interactive Grid) */}
      <section className="hidden border-t border-neutral-200 bg-neutral-50 md:block">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: The Challenge */}
            <motion.div
              className="group relative overflow-hidden border-b border-neutral-200 p-12 md:border-b-0 md:border-r md:p-24"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute right-0 top-0 p-8 opacity-10 transition-opacity group-hover:opacity-20">
                <span className="text-9xl font-black">?</span>
              </div>

              <span className="mb-8 inline-block bg-neutral-200 px-3 py-1 text-xs font-bold uppercase tracking-widest">
                The Challenge
              </span>

              <h3 className="mb-8 font-syne text-3xl font-bold uppercase leading-tight md:text-4xl">
                HIGH SPEND, <br /> EMPTY WAITING ROOM.
              </h3>

              <p className="mb-8 text-lg leading-relaxed text-neutral-600">
                Trying to break into the competitive Ultrasound and X-ray market, Modia Health had a
                website with zero traffic. They were burning cash on Google Ads with
                <span className="mx-1 font-bold text-black">no return</span>
                to show for it.
              </p>

              <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-neutral-400 line-through decoration-[#E02020] decoration-2">
                Paid Acquisition
              </div>
            </motion.div>

            {/* Right: The Strategy */}
            <motion.div
              className="relative overflow-hidden bg-black p-12 text-white md:p-24"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)',
                  backgroundSize: '40px 40px',
                }}
              ></div>

              <span className="mb-8 inline-block bg-[#E02020] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                THE STRATEGY
              </span>

              <h3 className="relative z-10 mb-8 font-syne text-3xl font-bold uppercase leading-tight md:text-4xl">
                OWN THE MAP, <br /> OWN THE PATIENT.
              </h3>

              <p className="relative z-10 mb-8 text-lg leading-relaxed text-neutral-400">
                We stopped the bleeding on ads. We pivoted to hyper-local dominance via
                <span className="mx-1 italic text-white">Google My Business</span>, specifically
                targeting the high-volume Aged Care sector.
              </p>

              <ul className="relative z-10 space-y-4">
                {[
                  'Google My Business Optimization',
                  'Aged Care Niche Targeting',
                  'Organic Traffic Focus',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center gap-3 font-bold"
                  >
                    <div className="h-2 w-2 bg-[#E02020]"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <MobileClientScroll />

      {/* 4. RESULTS SECTION (Big Typography) */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 md:py-40">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-4 text-xl font-bold uppercase tracking-widest md:text-2xl"
          >
            The Outcome
          </motion.h2>
          <div className="h-[1px] w-full bg-black"></div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden gap-12 md:grid md:grid-cols-3 md:gap-8">
          {STATS_DATA.map((stat, i) => (
            <ResultStat key={i} delay={0.1 * (i + 1)} {...stat} />
          ))}
        </div>

        {/* Mobile Slider */}
        <MobileResultSlider />
      </section>

      {/* 5. QUOTE / TESTIMONIAL (Editorial Style) */}
      <section className="relative overflow-hidden bg-neutral-900 py-32 text-white">
        {/* Abstract Background Elements */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden opacity-20">
          <img
            src="/images/client/client-testimonial-texture.webp"
            loading="lazy"
            width="1200"
            height="800"
            className="h-full w-full object-cover mix-blend-overlay"
            alt=""
            onError={(e) => {
              // Fallback to JPG if WebP fails
              const target = e.target as HTMLImageElement;
              if (target.src !== '/images/client/client-testimonial-texture.jpg') {
                target.src = '/images/client/client-testimonial-texture.jpg';
              }
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full bg-[#E02020]"
          >
            <Quote size={32} className="fill-current text-white" />
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-2xl font-medium leading-tight md:text-3xl lg:text-4xl"
          >
            "No vague strategies or confusing jargon. He came up with a clear plan that made sense
            for us, then helped us work through it one step at a time. It felt like we were finally
            doing things that had a purpose, not just guessing."
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-2"
          >
            <div className="mb-4 h-[1px] w-12 bg-white/30"></div>
            <cite className="text-sm font-bold uppercase not-italic tracking-[0.2em]">
              Modia Health
            </cite>
            <span className="text-sm text-neutral-400">Diagnostic Imaging Specialists</span>
          </motion.div>
        </div>
      </section>

      {/* 6. CALL TO ACTION (Swipe/Hover Interaction) */}
      <section className="border-t border-black bg-white py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            whileHover={{ scale: 0.98 }}
            className="group relative inline-block cursor-pointer"
          >
            <h2 className="font-syne text-4xl font-bold uppercase tracking-tighter transition-all duration-500 group-hover:text-[#E02020] md:text-5xl">
              CUT THE <br /> AD WASTE?
            </h2>

            <motion.div
              className="absolute -right-12 bottom-4 rounded-full bg-[#E02020] p-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
              initial={{ rotate: -45 }}
              whileHover={{ rotate: 0 }}
            >
              <ArrowRight size={24} />
            </motion.div>
          </motion.div>

          <p className="mt-8 font-medium text-neutral-500">
            SCROLL TO EXPLORE MORE <br />
            <span className="text-[#E02020]">↓</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ClientHome;
