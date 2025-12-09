import { motion } from 'framer-motion';
import BrutalistHero from './BrutalistHero';

const Hero = () => {
  return (
    <section
      className="relative flex h-[55vh] md:h-[60vh] w-full flex-col justify-center overflow-hidden bg-white"
      aria-label="Hero section - Small Business Digital Marketing Consultant North Lakes"
    >
      {/* Canvas Background */}
      <div className="absolute inset-0 z-0">
        <BrutalistHero />
      </div>

      {/* Eyebrow Above - Higher Z-index */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 flex justify-center pt-[14vh]">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          className="text-xs font-bold uppercase tracking-widest text-gray-500 md:text-sm"
        >
          North Lakes & Moreton Bay Businesses
        </motion.p>
      </div>
      
      {/* Subtext Below - positioned just under hero text */}
      <div className="pointer-events-none absolute left-0 right-0 z-20 flex justify-center top-[80%] md:top-[74%]">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
          className="max-w-3xl px-6 text-center text-xs font-light leading-relaxed text-gray-600 md:text-sm md:px-12"
        >
          Your partner in building a digital presence that drives real business growth — 
          whether you need{' '}
          <span className="font-medium text-[#E02020]">visibility</span>,{' '}
          <span className="font-medium text-[#E02020]">leads</span>, or a complete{' '}
          <span className="font-medium text-[#E02020]">digital strategy</span>.
        </motion.p>
      </div>
    </section>
  );
};

export const Marquee = ({ text }: { text: string }) => (
  <div className="relative z-10 flex w-full origin-left -rotate-1 scale-105 items-center overflow-hidden bg-brand-red py-8">
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: '-50%' }}
      transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
    >
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className="flex items-center gap-8 px-8 font-syne text-4xl font-bold uppercase text-white md:text-6xl"
        >
          {text} <span className="h-3 w-3 rounded-full bg-black" />
        </span>
      ))}
    </motion.div>
  </div>
);

// --- Main App ---

const HeroHome = () => {
  return <Hero />;
};

export default HeroHome;
