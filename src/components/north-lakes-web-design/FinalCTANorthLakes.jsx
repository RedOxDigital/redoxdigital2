import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';
import { ContactButton } from '../ContactFormModal';

// Get current month name for the CTA
const getCurrentMonth = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return months[new Date().getMonth()];
};

const FinalCTANorthLakes = () => {
  const currentMonth = getCurrentMonth();

  return (
    <section className="relative overflow-hidden bg-gray-900 py-24 text-white md:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Red Accent Glow */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-red/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          {/* Scarcity Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-brand-red/30 bg-brand-red/20 px-5 py-2.5">
              <Users className="h-5 w-5 text-brand-red" />
              <span className="text-sm font-bold uppercase tracking-wider text-brand-red">
                Limited Availability
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8 font-syne text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-5xl lg:text-7xl"
          >
            I Only Take <span className="text-brand-red">4 Clients</span> Per Month
          </motion.h2>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-12 max-w-2xl text-xl font-light leading-relaxed text-white/70 md:text-2xl"
          >
            To keep the "48 Hour Promise," I have strict limits. This means I can give every North
            Lakes business my full attention. Check if I have a spot open this month.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mx-auto mb-12 grid max-w-xl grid-cols-3 gap-4 md:gap-8"
          >
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 md:p-6">
              <div className="mb-1 font-syne text-3xl font-bold text-brand-red md:text-4xl">4</div>
              <p className="text-xs uppercase tracking-wider text-white/50 md:text-sm">
                Clients/Month
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 md:p-6">
              <div className="mb-1 font-syne text-3xl font-bold text-brand-red md:text-4xl">48</div>
              <p className="text-xs uppercase tracking-wider text-white/50 md:text-sm">
                Hour Delivery
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 md:p-6">
              <div className="mb-1 font-syne text-3xl font-bold text-brand-red md:text-4xl">
                100%
              </div>
              <p className="text-xs uppercase tracking-wider text-white/50 md:text-sm">My Focus</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <ContactButton variant="primary" className="group px-10 py-5 text-lg">
              <span>Check Availability for {currentMonth}</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </ContactButton>

            <div className="flex items-center gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-sm text-white/50">Currently accepting new projects</span>
            </div>
          </motion.div>

          {/* Bottom Promise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 border-t border-white/10 pt-12"
          >
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Calendar className="h-5 w-5 text-brand-red" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wider text-white/50">Visit</p>
                  <p className="font-medium text-white">We come to you</p>
                </div>
              </div>

              <div className="hidden h-[1px] w-12 bg-white/20 md:block" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Clock className="h-5 w-5 text-brand-red" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wider text-white/50">Timeline</p>
                  <p className="font-medium text-white">Live in 48 hours</p>
                </div>
              </div>

              <div className="hidden h-[1px] w-12 bg-white/20 md:block" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Users className="h-5 w-5 text-brand-red" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wider text-white/50">Location</p>
                  <p className="font-medium text-white">Based in Dakabin</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTANorthLakes;


