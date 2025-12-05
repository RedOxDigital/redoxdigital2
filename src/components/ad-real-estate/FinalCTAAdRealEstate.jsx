import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, MapPin, Phone, Users } from 'lucide-react';
import { ContactButton } from '../ContactFormModal';

const FinalCTAAdRealEstate = () => {
  return (
    <section className="relative bg-[#1a1a1a] text-white overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', 
          backgroundSize: '40px 40px' 
        }}
      />

      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-15">
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/95 to-[#1a1a1a]/80" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div>
            {/* Section Label */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[2px] bg-[#E02020]" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E02020]">
                Final Call
              </span>
            </motion.div>

            {/* Headline - NO money keywords */}
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-syne font-bold uppercase leading-[0.9] mb-6"
            >
              Your Competitors <br/>
              <span className="text-[#E02020]">Hope You Don't</span> <br/>
              Read This.
            </motion.h2>

            {/* Sub-headline - Money keywords go here */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-lg"
            >
              Right now, one of your competitors is running the same small ad you are. 
              The first one to build the 6 page engine wins the screen. With proper{" "}
              <span className="text-white font-bold">Google Ads for Tradies North Lakes</span>, 
              that winner can be you.
            </motion.p>

            {/* Trust Points */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2">
                <Shield className="w-4 h-4 text-[#E02020]" />
                <span className="text-sm font-medium">No lock in contracts</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2">
                <Clock className="w-4 h-4 text-[#E02020]" />
                <span className="text-sm font-medium">Live in 2 weeks</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2">
                <MapPin className="w-4 h-4 text-[#E02020]" />
                <span className="text-sm font-medium">We come to you</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ContactButton variant="primary">
                Secure Your North Lakes Sector
              </ContactButton>
              
              <a 
                href="tel:0493992661" 
                className="flex items-center justify-center gap-3 px-6 py-3 border-2 border-white/30 text-white hover:bg-white hover:text-[#1a1a1a] transition-colors duration-300 group"
              >
                <Phone className="w-4 h-4" />
                <span className="uppercase text-xs font-bold tracking-widest">
                  Call Now
                </span>
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
            <div className="bg-white text-[#1a1a1a] p-8 md:p-10 relative">
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#E02020]" />
              <div className="absolute top-2 right-2 w-16 h-16 bg-white" />

              {/* Scarcity Badge */}
              <div className="inline-flex items-center gap-2 bg-[#E02020] text-white px-4 py-2 mb-6">
                <Users className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Limited Availability
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-syne font-bold uppercase mb-4">
                Only 5 Spots Left
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                We limit new trade partners to 5 per month. This makes sure we can visit every site, 
                take every photo, and build every page properly. No shortcuts.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Free site visit and strategy session",
                  "See exactly what your big ad will look like",
                  "Get a clear price with no surprises",
                  "No pressure to sign anything",
                  "Walk away with a plan either way"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#E02020]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="w-3 h-3 text-[#E02020]" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom Stats */}
              <div className="pt-6 border-t border-black/10 grid grid-cols-2 gap-6">
                <div>
                  <span className="text-3xl font-syne font-bold text-[#E02020]">$0</span>
                  <p className="text-sm text-gray-500 mt-1">Site visit cost</p>
                </div>
                <div>
                  <span className="text-3xl font-syne font-bold text-[#E02020]">30min</span>
                  <p className="text-sm text-gray-500 mt-1">Your time only</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-[#E02020] text-white px-6 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
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
          <p className="text-gray-500 max-w-2xl mx-auto">
            This is what happens when you stop guessing and start working with a real{" "}
            <span className="text-white font-bold">Plumber Marketing Agency</span> that 
            knows how to win the ad game for local tradies.
          </p>
        </motion.div>
      </div>

      {/* Bottom Border Accent */}
      <div className="h-2 bg-[#E02020]" />
    </section>
  );
};

export default FinalCTAAdRealEstate;

