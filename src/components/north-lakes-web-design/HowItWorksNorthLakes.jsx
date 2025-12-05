import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useMotionValueEvent } from 'framer-motion';
import { ArrowRight, Camera, Pencil, Rocket } from 'lucide-react';

const STEPS_DATA = [
  {
    number: '01',
    title: 'The Visit',
    timeframe: 'Day 1',
    icon: <Camera className="w-6 h-6" />,
    description: 'We visit your shop in North Lakes or Dakabin. We shoot professional photos of your team and your work. We chat for 30 minutes to get your story. That is all you need to do.'
  },
  {
    number: '02',
    title: 'The Build',
    timeframe: 'Day 2',
    icon: <Pencil className="w-6 h-6" />,
    description: 'We head back to our studio in Dakabin. We write your copy. We design your pages. We make sure everything loads fast. You focus on your business while we handle the rest.'
  },
  {
    number: '03',
    title: 'The Launch',
    timeframe: '48 Hours Later',
    icon: <Rocket className="w-6 h-6" />,
    description: 'You get a live link to preview. You tell us if you want any changes. Once you approve, we push your new website live. Your North Lakes business now looks amazing online.'
  }
];

const StepCard = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="group relative flex flex-col md:flex-row md:items-start gap-8 md:gap-12 border-t border-black/10 py-16 md:py-20 hover:bg-neutral-50 transition-colors duration-500"
    >
      {/* Number */}
      <div className="w-24 md:w-32 shrink-0">
        <span className="text-5xl md:text-6xl font-syne font-bold text-transparent bg-clip-text bg-gradient-to-b from-black/20 to-black/5 group-hover:from-brand-red/30 group-hover:to-brand-red/10 transition-all duration-500">
          {step.number}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red text-white text-xs font-bold tracking-widest uppercase rounded-full">
              {step.icon}
              {step.timeframe}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-syne font-bold uppercase leading-tight group-hover:text-brand-red transition-colors duration-300">
            {step.title}
          </h3>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed group-hover:text-black transition-colors duration-300">
            {step.description}
          </p>
        </div>
      </div>

      {/* Arrow Interaction */}
      <div className="absolute top-12 right-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-brand-red hidden md:block">
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
    <div className="md:hidden w-full overflow-hidden pb-12 cursor-grab active:cursor-grabbing">
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
            className="w-[85vw] max-w-[400px] bg-neutral-50 p-8 border-t border-black/10 flex flex-col justify-between min-h-[420px] relative flex-shrink-0 whitespace-normal rounded-2xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-5xl font-syne font-bold text-black/10">
                  {step.number}
                </span>
                <div className="p-2 bg-brand-red/10 rounded-lg text-brand-red">
                  {step.icon}
                </div>
              </div>
              <span className="inline-block px-3 py-1 bg-brand-red text-white text-xs font-bold tracking-widest uppercase mb-4 rounded-full">
                {step.timeframe}
              </span>
              <h3 className="text-3xl font-syne font-bold uppercase leading-tight text-black mb-6">
                {step.title}
              </h3>
              <p className="text-lg text-neutral-600 font-medium leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="absolute top-8 right-8 text-brand-red/20">
              <ArrowRight size={32} className="-rotate-45" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Progress Indicator */}
      <div className="mt-8 flex items-center gap-3 px-2">
        <div className="w-full h-[1px] bg-neutral-200 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-brand-red w-1/3"
            animate={{ x: [0, 150, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-neutral-400 whitespace-nowrap">
          Swipe
        </span>
      </div>
    </div>
  );
};

const HowItWorksNorthLakes = () => {
  return (
    <section className="bg-white text-black py-24 md:py-32 border-t border-black/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-brand-red" />
              <span className="text-brand-red text-sm font-bold tracking-widest uppercase">
                The Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold tracking-tight uppercase leading-[0.95]">
              From "Embarrassing" to "Elite" in 3 Steps
            </h2>
            <p className="mt-6 text-xl text-gray-600 font-light max-w-2xl">
              No tech skills needed. No homework for you. Just one visit and we handle everything else for your North Lakes web design project.
            </p>
          </motion.div>
        </div>

        {/* Desktop Steps */}
        <div className="hidden md:flex flex-col">
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
          className="mt-16 md:mt-24 p-8 md:p-12 bg-neutral-50 rounded-2xl border border-black/5"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-syne font-bold uppercase mb-2">
                Total Time You Spend?
              </h3>
              <p className="text-gray-600 text-lg">
                About 30 minutes. We do the rest. Your website goes live in 48 hours.
              </p>
            </div>
            <div className="flex items-center gap-4 px-6 py-4 bg-white rounded-xl border border-black/10">
              <div className="text-4xl font-syne font-bold text-brand-red">30</div>
              <div className="text-sm uppercase tracking-widest text-gray-500">
                Minutes<br />of your time
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksNorthLakes;

