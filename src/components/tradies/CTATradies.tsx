import { motion } from 'framer-motion';
import { ArrowRight, Coffee, Phone, Calendar, MapPin } from 'lucide-react';
import { ContactButton } from '../ContactFormModal';

const CTATradies = () => {
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
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/90 to-[#1a1a1a]/70" />
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
                Get Started
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-syne font-bold uppercase leading-[0.9] mb-6"
            >
              Ready to Fill <br/>
              <span className="text-[#E02020]">Your Schedule?</span>
            </motion.h2>

            {/* Sub-headline - Money keywords go here */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-lg"
            >
              Let us grab a coffee in North Lakes and look at your website together. We will show you exactly where you are losing leads and how tradies SEO can fix it. No pressure. No sales pitch. Just a straight conversation about your business.
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
                <Coffee className="w-4 h-4 text-[#E02020]" />
                <span className="text-sm font-medium">Coffee is on us</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2">
                <Calendar className="w-4 h-4 text-[#E02020]" />
                <span className="text-sm font-medium">15 minutes only</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2">
                <MapPin className="w-4 h-4 text-[#E02020]" />
                <span className="text-sm font-medium">North Lakes local</span>
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
                Book a 15-Min Strategy Chat
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

              <h3 className="text-2xl md:text-3xl font-syne font-bold uppercase mb-6">
                What You Get
              </h3>

              <ul className="space-y-5 mb-8">
                {[
                  "Free audit of your current online presence",
                  "Clear breakdown of where you are losing leads",
                  "Custom plan for your trade business",
                  "No obligation to work with us",
                  "Straight talk, no confusing jargon"
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
                  <span className="text-3xl font-syne font-bold text-[#E02020]">Free</span>
                  <p className="text-sm text-gray-500 mt-1">No cost to chat</p>
                </div>
                <div>
                  <span className="text-3xl font-syne font-bold text-[#E02020]">24hr</span>
                  <p className="text-sm text-gray-500 mt-1">Response time</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-[#E02020] text-white px-6 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
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

export default CTATradies;



