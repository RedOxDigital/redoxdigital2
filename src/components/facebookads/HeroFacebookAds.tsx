import { motion } from 'framer-motion';
import { ContactButton } from '../ContactFormModal';

const HeroFacebookAds = () => {
  return (
    <section
      className="relative flex min-h-[80vh] w-full flex-col justify-center pb-12 pt-32"
      aria-label="Hero section - Facebook Ads Specialist North Lakes"
    >
      <div className="mb-12 grid grid-cols-1 gap-8 px-6 md:grid-cols-12 md:px-12">
        <div className="md:col-span-9">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500 md:text-sm"
          >
            STRATEGIC MEDIA & PERFORMANCE MARKETING
          </motion.p>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="mb-6 font-syne text-[2.75rem] font-bold uppercase leading-[0.9] tracking-tight text-[#1a1a1a] md:text-6xl lg:text-7xl xl:text-8xl"
          >
            The Facebook Ads Specialist <br />
            <span className="animate-gradient bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-brand-red bg-300% bg-clip-text text-transparent">
              North Lakes
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 max-w-3xl font-sans text-xl font-light leading-relaxed text-gray-600 md:text-2xl"
          >
            You have built a great business. Now, work with a local{' '}
            <span className="font-bold text-brand-red">Facebook Ads Consultant</span> who knows how
            to show it off to the rest of Moreton Bay. We build{' '}
            <span className="font-bold text-brand-red">Performance Creative ads</span> that turn
            scrolling into sales.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ContactButton variant="primary">Book My Strategic Audit</ContactButton>
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
                Accepting New Clients
              </span>
            </div>
            <p className="max-w-xs text-center text-sm text-gray-600 md:max-w-[200px] md:text-right">
              Specialising in Meta Ads, Creative Production, and GA4 Analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFacebookAds;
