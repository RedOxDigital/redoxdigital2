import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useAnimationFrame, useMotionValueEvent } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const STEPS_DATA = [
  {
    number: '01',
    title: 'The Strategic Audit',
    description:
      'We sit down (in North Lakes or via Zoom) and look at your past numbers. We find exactly where you are losing money and where your biggest chances for growth are hiding.',
  },
  {
    number: '02',
    title: 'Creative Production',
    description:
      'The Facebook algorithm now favours fresh, engaging content over complex settings. As your Facebook Ad Creative Agency, we write, design, and edit the ads for you. We handle the Strategic Media work in-house.',
  },
  {
    number: '03',
    title: 'Launch & Improve',
    description:
      'We launch your ads using our modern system. We check them every day. We change bids and swap out pictures to make sure you keep getting results.',
  },
  {
    number: '04',
    title: 'Clear Reporting',
    description:
      'You get a live dashboard and monthly video updates. You will never have to ask, "Is this working?" You will see the money clearly.',
  },
];

const StepCard = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
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
        <span className="bg-gradient-to-b from-black/20 to-black/5 bg-clip-text font-syne text-5xl font-bold text-transparent transition-all duration-500 group-hover:from-[#E02020]/20 group-hover:to-[#E02020]/5 md:text-6xl">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="grid flex-1 grid-cols-1 items-start gap-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <h3 className="font-syne text-2xl font-bold uppercase leading-tight transition-colors duration-300 group-hover:text-[#E02020] md:text-3xl">
            {title}
          </h3>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <p className="text-lg font-medium leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-black md:text-xl">
            {description}
          </p>
        </div>
      </div>

      {/* Arrow Interaction */}
      <div className="absolute right-4 top-12 hidden -translate-x-4 text-[#E02020] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        <ArrowRight size={32} className="-rotate-45" />
      </div>
    </motion.div>
  );
};

const MobileStepSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
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
        {allSteps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex min-h-[400px] w-[85vw] max-w-[400px] flex-shrink-0 flex-col justify-between whitespace-normal border-t border-black/10 bg-neutral-50 p-8"
          >
            <div>
              <div className="mb-6">
                <span className="font-syne text-5xl font-bold text-black/10">{step.number}</span>
              </div>
              <h3 className="mb-6 font-syne text-4xl font-bold uppercase leading-tight text-black">
                {step.title}
              </h3>
              <p className="text-lg font-medium leading-relaxed text-neutral-500">
                {step.description}
              </p>
            </div>

            <div className="absolute right-8 top-8 text-[#E02020]/20">
              <ArrowRight size={32} className="-rotate-45" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Progress Indicator */}
      <div className="mt-8 flex items-center gap-3 px-2">
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

const ProcessFacebookAds = () => {
  return (
    <section className="border-t border-black bg-white py-24 text-black md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[#E02020]"></div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#E02020]">
                The Process
              </span>
            </div>
            <h2 className="font-syne text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              A Simple Path <br /> to Growth
            </h2>
          </motion.div>
        </div>

        <div className="hidden flex-col md:flex">
          {STEPS_DATA.map((step, i) => (
            <StepCard key={i} {...step} />
          ))}
        </div>

        <MobileStepSlider />
      </div>
    </section>
  );
};

export default ProcessFacebookAds;
