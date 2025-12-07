import { motion } from 'framer-motion';
import { ArrowRight, Coffee, Phone, Calendar, MapPin } from 'lucide-react';
import { ContactButton } from '../ContactFormModal';

const CTAFacebookAds = () => {
  return (
    <section className="relative overflow-hidden bg-[#1a1a1a] text-white">
      {/* Background Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-[#1a1a1a]/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div>
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-[2px] w-12 bg-[#E02020]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] md:text-sm">
                Get Started
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6 font-syne text-4xl font-bold uppercase leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Ready to Upgrade <br />
              <span className="text-[#E02020]">Your Strategy?</span>
            </motion.h3>

            {/* Sub-headline - Money keywords go here */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8 max-w-lg text-lg leading-relaxed text-gray-400 md:text-xl"
            >
              Let's sit down for a coffee in North Lakes and look at your ad account. No pressure,
              just a clear plan for what is possible with a dedicated{' '}
              <span className="font-bold text-white">Facebook Ads Consultant</span>.
            </motion.p>

            {/* Trust Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mb-10 flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2">
                <Coffee className="h-4 w-4 text-[#E02020]" />
                <span className="text-sm font-medium">Coffee is on us</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2">
                <Calendar className="h-4 w-4 text-[#E02020]" />
                <span className="text-sm font-medium">15 minutes only</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2">
                <MapPin className="h-4 w-4 text-[#E02020]" />
                <span className="text-sm font-medium">North Lakes local</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <ContactButton variant="primary">Schedule a Meeting with a Specialist</ContactButton>

              <a
                href="tel:0493992661"
                className="group flex items-center justify-center gap-3 border-2 border-white/30 px-6 py-3 text-white transition-colors duration-300 hover:bg-white hover:text-[#1a1a1a]"
              >
                <Phone className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-widest">Call Now</span>
              </a>
            </motion.div>
          </div>

          {/* Right Content - Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white p-8 text-[#1a1a1a] md:p-10">
              {/* Corner Accent */}
              <div className="absolute right-0 top-0 h-20 w-20 bg-[#E02020]" />
              <div className="absolute right-2 top-2 h-16 w-16 bg-white" />

              <h3 className="mb-6 font-syne text-2xl font-bold uppercase md:text-3xl">
                What You Get
              </h3>

              <ul className="mb-8 space-y-5">
                {[
                  'Free audit of your current Facebook Ads',
                  'Clear breakdown of where you are losing leads',
                  'Custom Strategic Media plan',
                  'No obligation to work with us',
                  'Straight talk, no confusing jargon',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#E02020]/10">
                      <ArrowRight className="h-3 w-3 text-[#E02020]" />
                    </div>
                    <span className="font-medium text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom Stats */}
              <div className="grid grid-cols-2 gap-6 border-t border-black/10 pt-6">
                <div>
                  <span className="font-syne text-3xl font-bold text-[#E02020]">Free</span>
                  <p className="mt-1 text-sm text-gray-500">No cost to chat</p>
                </div>
                <div>
                  <span className="font-syne text-3xl font-bold text-[#E02020]">24hr</span>
                  <p className="mt-1 text-sm text-gray-500">Response time</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#E02020] px-6 py-4 text-white shadow-xl md:-left-8">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 animate-pulse rounded-full bg-white" />
                <span className="text-sm font-bold uppercase tracking-widest">
                  Now Accepting Clients
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border Accent */}
      <div className="h-2 bg-[#E02020]" />
    </section>
  );
};

export default CTAFacebookAds;

