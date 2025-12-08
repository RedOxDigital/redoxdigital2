import { motion } from 'framer-motion';
import { Zap, ArrowRight, Check, Smartphone } from 'lucide-react';

const INTEGRATIONS = [
  {
    name: 'ServiceM8',
    description: 'Jobs land in your calendar. Send quotes fast.',
    color: '#00A3E0',
  },
  {
    name: 'Simpro',
    description: 'Leads become jobs with one click.',
    color: '#FF6B00',
  },
  {
    name: 'Tradify',
    description: 'Track every lead from click to cash.',
    color: '#00C853',
  },
  {
    name: 'Fergus',
    description: 'Quote, schedule, and invoice from one place.',
    color: '#6366F1',
  },
];

const FLOW_STEPS = [
  {
    number: '01',
    title: 'Customer Clicks Your Ad',
    description: 'They see your big ad on Google. They click.',
  },
  {
    number: '02',
    title: 'Form Goes To Your Software',
    description: 'Their details go straight to ServiceM8, Simpro, or Tradify.',
  },
  {
    number: '03',
    title: 'Job Appears In Your Calendar',
    description: 'No emails to check. No typing. It is just there.',
  },
];

const TechIntegrationAdRealEstate = () => {
  return (
    <section className="overflow-hidden bg-[#1a1a1a] py-20 text-white md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:mb-24 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-[2px] w-12 bg-[#E02020]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] md:text-sm">
                The Tech
              </span>
            </motion.div>

            {/* H2 - NO money keywords */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6 font-syne text-4xl font-bold uppercase leading-[0.95] md:text-5xl lg:text-6xl"
            >
              We Fill <br />
              <span className="animate-gradient bg-gradient-to-r from-white via-white to-[#E02020] bg-300% bg-clip-text text-transparent">
                Your Schedule
              </span>
            </motion.h2>

            {/* Body Copy - Money keywords go here */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-lg text-lg leading-relaxed text-gray-400"
            >
              We do not just send you email alerts. We connect your landing pages straight to the
              software you already use. This is what{' '}
              <span className="font-bold text-white">ServiceM8 Marketing Integration</span> looks
              like when it is done right. Leads click, jobs appear.
            </motion.p>
          </div>

          {/* Integration Logos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {INTEGRATIONS.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group border border-white/10 bg-white/5 p-5 transition-colors duration-300 hover:bg-white/10"
              >
                <div
                  className="mb-4 h-3 w-3 rounded-full"
                  style={{ backgroundColor: integration.color }}
                />
                <h4 className="mb-2 font-syne text-lg font-bold uppercase transition-colors group-hover:text-[#E02020]">
                  {integration.name}
                </h4>
                <p className="text-sm text-gray-500">{integration.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-white/10 bg-white/5 p-8 md:p-12"
        >
          <div className="mb-8 flex items-center gap-3">
            <Zap className="h-6 w-6 text-[#E02020]" />
            <h3 className="font-syne text-xl font-bold uppercase">How It Works</h3>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
            {FLOW_STEPS.map((step, index) => (
              <div key={step.number} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15 }}
                  className="h-full border border-white/10 bg-[#1a1a1a] p-6"
                >
                  <span className="mb-4 block font-syne text-4xl font-bold text-[#E02020]/30">
                    {step.number}
                  </span>
                  <h4 className="mb-3 font-syne text-lg font-bold uppercase">{step.title}</h4>
                  <p className="leading-relaxed text-gray-500">{step.description}</p>
                </motion.div>

                {/* Arrow between steps */}
                {index < FLOW_STEPS.length - 1 && (
                  <div className="absolute -right-5 top-1/2 z-10 hidden -translate-y-1/2 transform md:flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E02020]">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                <Check className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-lg font-bold">No Data Entry. No Missed Leads.</p>
                <p className="text-sm text-gray-500">Every click becomes a job in your system.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 px-5 py-3">
              <Smartphone className="h-5 w-5 text-[#E02020]" />
              <span className="text-sm font-medium">Works on your phone too</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="mx-auto max-w-2xl text-lg text-gray-500">
            Stop losing leads to slow follow up. With proper{' '}
            <span className="font-bold text-white">Electrician Lead Generation</span> systems, every
            person who clicks your ad becomes a contact in your software before you finish your
            coffee.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechIntegrationAdRealEstate;


