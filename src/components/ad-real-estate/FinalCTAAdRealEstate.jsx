import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, MapPin, Phone, Users } from 'lucide-react';
import { ContactButton } from '../ContactFormModal';

const FinalCTAAdRealEstate = () => {
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
      <div className="absolute inset-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/95 to-[#1a1a1a]/80" />
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
                Final Call
              </span>
            </motion.div>

            {/* Headline - NO money keywords */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6 font-syne text-4xl font-bold uppercase leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Your Competitors <br />
              <span className="text-[#E02020]">Hope You Don't</span> <br />
              Read This.
            </motion.h2>

            {/* Sub-headline - Money keywords go here */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8 max-w-lg text-lg leading-relaxed text-gray-400 md:text-xl"
            >
              Right now, one of your competitors is running the same small ad you are. The first one
              to build the 6 page engine wins the screen. With proper{' '}
              <span className="font-bold text-white">Google Ads for Tradies North Lakes</span>, that
              winner can be you.
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
                <Shield className="h-4 w-4 text-[#E02020]" />
                <span className="text-sm font-medium">No lock in contracts</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2">
                <Clock className="h-4 w-4 text-[#E02020]" />
                <span className="text-sm font-medium">Live in 2 weeks</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2">
                <MapPin className="h-4 w-4 text-[#E02020]" />
                <span className="text-sm font-medium">We come to you</span>
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
              <ContactButton variant="primary">Secure Your North Lakes Sector</ContactButton>

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

              {/* Scarcity Badge */}
              <div className="mb-6 inline-flex items-center gap-2 bg-[#E02020] px-4 py-2 text-white">
                <Users className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Limited Availability
                </span>
              </div>

              <h3 className="mb-4 font-syne text-2xl font-bold uppercase md:text-3xl">
                Only 5 Spots Left
              </h3>

              <p className="mb-6 leading-relaxed text-gray-600">
                We limit new trade partners to 5 per month. This makes sure we can visit every site,
                take every photo, and build every page properly. No shortcuts.
              </p>

              <ul className="mb-8 space-y-4">
                {[
                  'Free site visit and strategy session',
                  'See exactly what your big ad will look like',
                  'Get a clear price with no surprises',
                  'No pressure to sign anything',
                  'Walk away with a plan either way',
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
                  <span className="font-syne text-3xl font-bold text-[#E02020]">$0</span>
                  <p className="mt-1 text-sm text-gray-500">Site visit cost</p>
                </div>
                <div>
                  <span className="font-syne text-3xl font-bold text-[#E02020]">30min</span>
                  <p className="mt-1 text-sm text-gray-500">Your time only</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#E02020] px-6 py-4 text-white shadow-xl md:-left-8">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 animate-pulse rounded-full bg-white" />
                <span className="text-sm font-bold uppercase tracking-widest">
                  Booking This Week
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="mx-auto max-w-2xl text-gray-500">
            This is what happens when you stop guessing and start working with a real{' '}
            <span className="font-bold text-white">Plumber Marketing Agency</span> that knows how to
            win the ad game for local tradies.
          </p>
        </motion.div>
      </div>

      {/* Bottom Border Accent */}
      <div className="h-2 bg-[#E02020]" />
    </section>
  );
};

export default FinalCTAAdRealEstate;

