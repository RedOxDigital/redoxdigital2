import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useMotionValueEvent } from 'framer-motion';
import { ArrowRight, Camera, Pencil, Rocket } from 'lucide-react';

const STEPS_DATA = [
  {
    number: '01',
    title: 'The Visit',
    timeframe: 'Day 1',
    icon: <Camera className="h-6 w-6" />,
    description:
      'We visit your shop in North Lakes or Dakabin. We shoot professional photos of your team and your work. We chat for 30 minutes to get your story. That is all you need to do.',
  },
  {
    number: '02',
    title: 'The Build',
    timeframe: 'Day 2',
    icon: <Pencil className="h-6 w-6" />,
    description:
      'We head back to our studio in Dakabin. We write your copy. We design your pages. We make sure everything loads fast. You focus on your business while we handle the rest.',
  },
  {
    number: '03',
    title: 'The Launch',
    timeframe: '48 Hours Later',
    icon: <Rocket className="h-6 w-6" />,
    description:
      'You get a live link to preview. You tell us if you want any changes. Once you approve, we push your new website live. Your North Lakes business now looks amazing online.',
  },
];

const StepCard = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="group relative flex flex-col gap-8 border-t border-black/10 py-16 transition-colors duration-500 hover:bg-neutral-50 md:flex-row md:items-start md:gap-12 md:py-20"
    >
      {/* Number */}
      <div className="w-24 shrink-0 md:w-32">
        <span className="bg-gradient-to-b from-black/20 to-black/5 bg-clip-text font-syne text-5xl font-bold text-transparent transition-all duration-500 group-hover:from-brand-red/30 group-hover:to-brand-red/10 md:text-6xl">
          {step.number}
        </span>
      </div>

      {/* Content */}
      <div className="grid flex-1 grid-cols-1 items-start gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              {step.icon}
              {step.timeframe}
            </span>
          </div>
          <h3 className="font-syne text-2xl font-bold uppercase leading-tight transition-colors duration-300 group-hover:text-brand-red md:text-3xl">
            {step.title}
          </h3>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <p className="text-lg font-medium leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-black md:text-xl">
            {step.description}
          </p>
        </div>
      </div>

      {/* Arrow Interaction */}
      <div className="absolute right-4 top-12 hidden -translate-x-4 text-brand-red opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        <ArrowRight size={32} className="-rotate-45" />
      </div>
    </motion.div>
  );
};

const MobileStepSlider = () => {
  const sliderRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);

  // Duplicate for infinite loop (3 sets)
  const allSteps = [...STEPS_DATA, ...STEPS_DATA, ...STEPS_DATA];

  useEffect(() => {
    if (sliderRef.current) {
      setContentWidth(sliderRef.current.scrollWidth / 3);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (!isDragging && contentWidth > 0) {
      const moveBy = -0.4 * (delta / 16);
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
        {allSteps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex min-h-[420px] w-[85vw] max-w-[400px] flex-shrink-0 flex-col justify-between whitespace-normal rounded-2xl border-t border-black/10 bg-neutral-50 p-8"
          >
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="font-syne text-5xl font-bold text-black/10">{step.number}</span>
                <div className="rounded-lg bg-brand-red/10 p-2 text-brand-red">{step.icon}</div>
              </div>
              <span className="mb-4 inline-block rounded-full bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                {step.timeframe}
              </span>
              <h3 className="mb-6 font-syne text-3xl font-bold uppercase leading-tight text-black">
                {step.title}
              </h3>
              <p className="text-lg font-medium leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </div>

            <div className="absolute right-8 top-8 text-brand-red/20">
              <ArrowRight size={32} className="-rotate-45" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Progress Indicator */}
      <div className="mt-8 flex items-center gap-3 px-2">
        <div className="relative h-[1px] w-full overflow-hidden bg-neutral-200">
          <motion.div
            className="absolute left-0 top-0 h-full w-1/3 bg-brand-red"
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

const HowItWorksNorthLakes = () => {
  return (
    <section className="border-t border-black/10 bg-white py-24 text-black md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-red">
                The Process
              </span>
            </div>
            <h2 className="font-syne text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
              From "Embarrassing" to "Elite" in 3 Steps
            </h2>
            <p className="mt-6 max-w-2xl text-xl font-light text-gray-600">
              No tech skills needed. No homework for you. Just one visit and we handle everything
              else for your North Lakes web design project.
            </p>
          </motion.div>
        </div>

        {/* Desktop Steps */}
        <div className="hidden flex-col md:flex">
          {STEPS_DATA.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>

        {/* Mobile Slider */}
        <MobileStepSlider />

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-black/5 bg-neutral-50 p-8 md:mt-24 md:p-12"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="mb-2 font-syne text-2xl font-bold uppercase">Total Time You Spend?</h3>
              <p className="text-lg text-gray-600">
                About 30 minutes. We do the rest. Your website goes live in 48 hours.
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-xl border border-black/10 bg-white px-6 py-4">
              <div className="font-syne text-4xl font-bold text-brand-red">30</div>
              <div className="text-sm uppercase tracking-widest text-gray-500">
                Minutes
                <br />
                of your time
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksNorthLakes;



