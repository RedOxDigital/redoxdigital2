import { motion } from 'framer-motion';
import { Zap, ArrowRight, Check, Smartphone } from 'lucide-react';

const INTEGRATIONS = [
  {
    name: "ServiceM8",
    description: "Jobs land in your calendar. Send quotes fast.",
    color: "#00A3E0"
  },
  {
    name: "Simpro",
    description: "Leads become jobs with one click.",
    color: "#FF6B00"
  },
  {
    name: "Tradify",
    description: "Track every lead from click to cash.",
    color: "#00C853"
  },
  {
    name: "Fergus",
    description: "Quote, schedule, and invoice from one place.",
    color: "#6366F1"
  }
];

const FLOW_STEPS = [
  {
    number: "01",
    title: "Customer Clicks Your Ad",
    description: "They see your big ad on Google. They click."
  },
  {
    number: "02",
    title: "Form Goes To Your Software",
    description: "Their details go straight to ServiceM8, Simpro, or Tradify."
  },
  {
    number: "03",
    title: "Job Appears In Your Calendar",
    description: "No emails to check. No typing. It is just there."
  }
];

const TechIntegrationAdRealEstate = () => {
  return (
    <section className="py-20 md:py-32 bg-[#1a1a1a] text-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-24">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[2px] bg-[#E02020]" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E02020]">
                The Tech
              </span>
            </motion.div>

            {/* H2 - NO money keywords */}
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase leading-[0.95] mb-6"
            >
              We Fill <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#E02020] bg-300% animate-gradient">
                Your Schedule
              </span>
            </motion.h2>

            {/* Body Copy - Money keywords go here */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed max-w-lg"
            >
              We do not just send you email alerts. We connect your landing pages straight to the 
              software you already use. This is what{" "}
              <span className="text-white font-bold">ServiceM8 Marketing Integration</span> looks like 
              when it is done right. Leads click, jobs appear.
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
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition-colors duration-300 group"
              >
                <div 
                  className="w-3 h-3 rounded-full mb-4"
                  style={{ backgroundColor: integration.color }}
                />
                <h4 className="font-syne font-bold text-lg uppercase mb-2 group-hover:text-[#E02020] transition-colors">
                  {integration.name}
                </h4>
                <p className="text-gray-500 text-sm">
                  {integration.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 p-8 md:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-6 h-6 text-[#E02020]" />
            <h3 className="font-syne font-bold text-xl uppercase">
              How It Works
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4">
            {FLOW_STEPS.map((step, index) => (
              <div key={step.number} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.15) }}
                  className="bg-[#1a1a1a] border border-white/10 p-6 h-full"
                >
                  <span className="text-4xl font-syne font-bold text-[#E02020]/30 mb-4 block">
                    {step.number}
                  </span>
                  <h4 className="font-syne font-bold uppercase text-lg mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow between steps */}
                {index < FLOW_STEPS.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                    <div className="w-10 h-10 rounded-full bg-[#E02020] flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
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
            className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="font-bold text-lg">No Data Entry. No Missed Leads.</p>
                <p className="text-gray-500 text-sm">
                  Every click becomes a job in your system.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 px-5 py-3">
              <Smartphone className="w-5 h-5 text-[#E02020]" />
              <span className="text-sm font-medium">
                Works on your phone too
              </span>
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
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Stop losing leads to slow follow up. With proper{" "}
            <span className="text-white font-bold">Electrician Lead Generation</span> systems, 
            every person who clicks your ad becomes a contact in your software before you finish your coffee.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default TechIntegrationAdRealEstate;

