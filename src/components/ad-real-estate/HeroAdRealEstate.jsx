import { motion } from 'framer-motion';
import { ContactButton } from '../ContactFormModal';

const HeroAdRealEstate = () => {
  return (
    <section
      className="relative flex min-h-[80vh] w-full flex-col justify-center pb-12 pt-32"
      aria-label="Hero section - Google Ads for Tradies North Lakes"
    >
      <div className="mb-12 grid grid-cols-1 gap-8 px-6 md:grid-cols-12 md:px-12">
        <div className="md:col-span-9">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500 md:text-sm"
          >
            THE AD REAL ESTATE SECRET
          </motion.p>

          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="mb-6 font-syne text-[2.25rem] font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1a] md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Why Is Your Competitor's Ad <br className="hidden md:block" />
            Taking Up The{' '}
            <span className="animate-gradient bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-brand-red bg-300% bg-clip-text text-transparent">
              Whole Screen?
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4 font-syne text-xl font-medium text-[#1a1a1a] md:text-2xl"
          >
            (Hint: It's Not Their Budget)
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 max-w-3xl font-sans text-lg font-light leading-relaxed text-gray-600 md:text-xl"
          >
            Stop paying for ads nobody sees. We build the 6 page engine that makes your{' '}
            <span className="font-bold text-brand-red">Google Ads for Tradies</span> twice as big.
            Then we drive to your job site and take the photos you need to show Google you are the
            real deal in North Lakes.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ContactButton variant="primary">Book My Site Visit</ContactButton>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-end md:col-span-3 md:items-end">
          <div className="flex w-full flex-col items-center gap-4 md:w-auto md:items-end">
            <div className="flex items-center gap-3">
              <div
                className="h-2 w-2 animate-pulse rounded-full bg-green-500"
                aria-label="Available status"
              />
              <span className="text-xs font-bold uppercase tracking-widest">
                5 Spots Left This Month
              </span>
            </div>
            <p className="max-w-xs text-center text-sm text-gray-600 md:max-w-[200px] md:text-right">
              We come to you. Photos, strategy, and setup done for{' '}
              <span className="font-bold text-brand-red">
                Web Design for Tradies North Brisbane
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAdRealEstate;


