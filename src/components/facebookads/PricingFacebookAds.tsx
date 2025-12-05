import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { ContactButton } from '../ContactFormModal';

const PricingFacebookAds = () => {
  return (
    <section className="bg-[#1a1a1a] py-20 text-white md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Side: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-[2px] w-12 bg-[#E02020]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] md:text-sm">
                Invest In Growth
              </span>
            </motion.div>

            {/* H2 - NO money keywords */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8 font-syne text-4xl font-bold uppercase leading-[0.95] md:text-5xl lg:text-6xl"
            >
              Professional <br />
              <span className="animate-gradient bg-gradient-to-r from-white via-white to-[#E02020] bg-300% bg-clip-text text-transparent">
                Ads Management
              </span>
            </motion.h2>

            {/* Body Copy - Money keywords go here */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-xl space-y-6 text-lg font-light leading-relaxed text-gray-400"
            >
              <p>
                You deserve to know where every dollar goes. We believe{' '}
                <span className="font-medium text-white">Facebook ads management cost</span> should
                be an investment that pays you back, not just a bill you pay.
              </p>
              <p>
                We offer simple, flat-fee packages. They include creative production, strategy, and
                management. No hidden fees. No "surprise" costs. Just professional service for local
                businesses ready to grow.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10"
            >
              <ContactButton variant="primary">View Pricing Options</ContactButton>
            </motion.div>
          </div>

          {/* Right Side: Value Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12"
          >
            {/* Gradient decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#E02020] opacity-20 blur-[100px]" />

            <h3 className="mb-8 font-syne text-2xl font-bold uppercase text-white">
              What's Included:
            </h3>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-[#E02020]" />
                <div>
                  <strong className="block font-syne text-lg uppercase text-white">
                    Creative Production
                  </strong>
                  <p className="text-sm text-gray-400">We design the ads for you.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-[#E02020]" />
                <div>
                  <strong className="block font-syne text-lg uppercase text-white">
                    Daily Optimisation
                  </strong>
                  <p className="text-sm text-gray-400">We check your account every 24 hours.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-[#E02020]" />
                <div>
                  <strong className="block font-syne text-lg uppercase text-white">
                    Live Reporting
                  </strong>
                  <p className="text-sm text-gray-400">See your profit in real-time.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 shrink-0 text-[#E02020]" />
                <div>
                  <strong className="block font-syne text-lg uppercase text-white">
                    No Lock-In Contracts
                  </strong>
                  <p className="text-sm text-gray-400">We earn your business every month.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingFacebookAds;
