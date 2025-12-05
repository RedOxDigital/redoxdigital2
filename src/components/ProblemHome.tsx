import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProblemHome = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 items-center gap-16 px-6 py-24 md:grid-cols-2 md:px-12"
    >
      <div>
        <h2 className="mb-8 font-syne text-5xl font-bold uppercase leading-tight md:text-4xl lg:text-5xl">
          RESULTS NOT <br />
          <span className="relative inline-block text-[#E02020]">
            EXCUSES
            <motion.span
              className="absolute left-0 top-[55%] z-10 h-[4px] w-full origin-left -translate-y-1/2 bg-black md:h-[5px]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 1, margin: '0px 0px -100px 0px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            />
          </span>
        </h2>
        <div className="space-y-6 text-lg font-light text-gray-700">
          <p>
            In North Lakes, standing out is hard. Most agencies will tell you to just "spend more"
            or "shout louder." That isn't a strategy; that's a money pit.
          </p>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h3 className="mb-6 font-syne text-3xl font-bold uppercase">Does This Resonate?</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-brand-red pl-4">
              <p className="mb-1 font-semibold text-gray-900">
                The Empty Calendar <span className="text-brand-red">(Health)</span>
              </p>
              <p className="font-light text-gray-700">
                Are you paying for clicks, but your appointment book still has gaps?
              </p>
            </div>
            <div className="border-l-4 border-brand-red pl-4">
              <p className="mb-1 font-semibold text-gray-900">
                The Cheap Leads <span className="text-brand-red">(Trades)</span>
              </p>
              <p className="font-light text-gray-700">
                Are you sick of quoting for "tyre kickers" who only care about the cheapest price?
              </p>
            </div>
            <div className="border-l-4 border-brand-red pl-4">
              <p className="mb-1 font-semibold text-gray-900">
                The Referral Dry Spell <span className="text-brand-red">(Professional)</span>
              </p>
              <p className="font-light text-gray-700">
                Has your "word-of-mouth" dried up, leaving you wondering where the next client is
                coming from?
              </p>
            </div>
          </div>
          <p className="mt-8 text-xl font-semibold text-gray-900">
            You don't need more noise. You need a Digital Strategy.
          </p>
        </div>
      </div>

      <div className="relative h-[600px] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 -top-[10%] h-[120%] w-full">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format&fit=crop"
            alt="Digital Strategy Planning"
            className="h-full w-full object-cover contrast-125 grayscale"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 z-10 border-[20px] border-[#F2F2F2]" />
      </div>
    </section>
  );
};

export default ProblemHome;
