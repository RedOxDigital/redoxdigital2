import { motion } from 'framer-motion';
import { ContactButton } from '../ContactFormModal';

const HeroFacebookAds = () => {
  return (
    <section 
      className="relative pt-32 pb-12 w-full min-h-[80vh] flex flex-col justify-center"
      aria-label="Hero section - Facebook Ads Specialist North Lakes"
    >
      <div className="px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
        <div className="md:col-span-9">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
              className="text-xs md:text-sm uppercase tracking-widest text-gray-500 mb-4 font-bold"
            >
                STRATEGIC MEDIA & PERFORMANCE MARKETING
            </motion.p>
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-[2.75rem] md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-syne font-bold uppercase tracking-tight text-[#1a1a1a] mb-6"
            >
                The Facebook Ads Specialist <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-brand-red bg-300% animate-gradient">
                    North Lakes
                </span>
            </motion.h1>
            
            <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl font-sans font-light text-gray-600 max-w-3xl mb-8 leading-relaxed"
            >
                You have built a great business. Now, work with a local <span className="font-bold text-brand-red">Facebook Ads Consultant</span> who knows how to show it off to the rest of Moreton Bay. We build <span className="font-bold text-brand-red">Performance Creative ads</span> that turn scrolling into sales.
            </motion.p>
            
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <ContactButton variant="primary">Book My Strategic Audit</ContactButton>
            </motion.div>
        </div>
        
        <div className="md:col-span-3 flex flex-col justify-end items-center md:items-end">
            <div className="flex flex-col gap-4 items-center md:items-end w-full md:w-auto">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-label="Available status" />
                    <span className="text-xs uppercase tracking-widest font-bold">Accepting New Clients</span>
                </div>
                <p className="text-sm text-gray-600 max-w-xs md:max-w-[200px] text-center md:text-right">
                    Specialising in Meta Ads, Creative Production, and GA4 Analytics.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFacebookAds;

