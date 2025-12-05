import { motion } from 'framer-motion';
import { ContactButton } from '../ContactFormModal';

const HeroAdRealEstate = () => {
  return (
    <section 
      className="relative pt-32 pb-12 w-full min-h-[80vh] flex flex-col justify-center"
      aria-label="Hero section - Google Ads for Tradies North Lakes"
    >
      <div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-9">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="text-xs md:text-sm uppercase tracking-widest text-gray-500 mb-4 font-bold"
          >
            THE AD REAL ESTATE SECRET
          </motion.p>
          
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-[2.25rem] md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] font-syne font-bold uppercase tracking-tight text-[#1a1a1a] mb-6"
          >
            Why Is Your Competitor's Ad <br className="hidden md:block" />
            Taking Up The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-brand-red bg-300% animate-gradient">
              Whole Screen?
            </span>
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl font-syne font-medium text-[#1a1a1a] mb-4"
          >
            (Hint: It's Not Their Budget)
          </motion.p>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-sans font-light text-gray-600 max-w-3xl mb-8 leading-relaxed"
          >
            Stop paying for ads nobody sees. We build the 6 page engine that makes your{" "}
            <span className="font-bold text-brand-red">Google Ads for Tradies</span> twice as big. 
            Then we drive to your job site and take the photos you need to show Google you are 
            the real deal in North Lakes.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ContactButton variant="primary">Book My Site Visit</ContactButton>
          </motion.div>
        </div>
        
        <div className="md:col-span-3 flex flex-col justify-end items-center md:items-end">
          <div className="flex flex-col gap-4 items-center md:items-end w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-label="Available status" />
              <span className="text-xs uppercase tracking-widest font-bold">5 Spots Left This Month</span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs md:max-w-[200px] text-center md:text-right">
              We come to you. Photos, strategy, and setup done for{" "}
              <span className="font-bold text-brand-red">Web Design for Tradies North Brisbane</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroAdRealEstate;

