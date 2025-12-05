import { motion } from 'framer-motion';
import { CheckCircle, Camera, Globe, Settings, Link2, Zap, Shield } from 'lucide-react';
import { ContactButton } from '../ContactFormModal';

const INCLUSIONS = [
  {
    icon: <Camera className="w-5 h-5" />,
    title: "On Site Strategy & Photo Shoot",
    description: "We drive to you. We plan your pages. We take all the photos."
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "6 Page High Speed Microsite",
    description: "Custom built for 100/100 speed score. Fast sites win."
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Google Ads Account Restructure",
    description: "We set up your Sitelink Extensions so your ad doubles in size."
  },
  {
    icon: <Link2 className="w-5 h-5" />,
    title: "Job Software Integration",
    description: "Connect to ServiceM8, Simpro, Tradify, or Fergus."
  }
];

const GUARANTEES = [
  "No lock in contracts",
  "You own everything we build",
  "Results in 30 days or we fix it free"
];

const OfferAdRealEstate = () => {
  return (
    <section className="py-20 md:py-32 bg-white border-t border-black/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Content */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-[2px] bg-[#E02020]" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E02020]">
                The Offer
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
              The Ad Real Estate <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% animate-gradient">
                Overhaul
              </span>
            </motion.h2>

            {/* Body Copy - Money keywords go here */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 text-lg text-gray-600 font-light leading-relaxed max-w-xl"
            >
              <p>
                This is not a cost. This is an investment in an asset that works for you every single day. 
                Most tradies spend money on ads that disappear. You are building something that stays.
              </p>
              <p>
                With proper{" "}
                <span className="font-bold text-brand-red">Google Ads for Tradies</span>, your ad becomes 
                twice as big. Your competitors get pushed down. You get the calls.
              </p>
            </motion.div>

            {/* Inclusions List */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 space-y-4"
            >
              {INCLUSIONS.map((item, index) => (
                <div 
                  key={item.title}
                  className="flex items-start gap-4 p-4 bg-[#F2F2F2] hover:bg-[#E02020]/5 transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#1a1a1a] group-hover:bg-[#E02020] group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-syne font-bold uppercase text-[#1a1a1a] group-hover:text-[#E02020] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Pricing Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-[#1a1a1a] text-white p-8 md:p-10 relative overflow-hidden">
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E02020]" />
              <div className="absolute top-3 right-3 w-18 h-18 bg-[#1a1a1a]" style={{ width: '72px', height: '72px' }} />

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#E02020] text-white px-4 py-2 mb-8">
                <Zap className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  North Lakes Pilot
                </span>
              </div>

              {/* Package Name */}
              <h3 className="text-2xl md:text-3xl font-syne font-bold uppercase mb-6">
                Complete Package
              </h3>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl md:text-6xl font-syne font-bold text-[#E02020]">$2,500</span>
                  <span className="text-gray-400 text-lg">setup</span>
                </div>
                <p className="text-gray-400">
                  + Monthly management from $750/month
                </p>
              </div>

              {/* What's Included Quick List */}
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E02020] flex-shrink-0" />
                  <span className="text-gray-300">Site visit and photo shoot</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E02020] flex-shrink-0" />
                  <span className="text-gray-300">6 page microsite build</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E02020] flex-shrink-0" />
                  <span className="text-gray-300">Google Ads restructure</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E02020] flex-shrink-0" />
                  <span className="text-gray-300">Job software integration</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#E02020] flex-shrink-0" />
                  <span className="text-gray-300">Monthly reporting</span>
                </li>
              </ul>

              {/* CTA */}
              <ContactButton variant="primary" className="w-full justify-center">
                Book My Site Visit
              </ContactButton>

              {/* Guarantees */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-[#E02020]" />
                  <span className="text-sm font-bold uppercase tracking-widest">Guarantees</span>
                </div>
                <ul className="space-y-2">
                  {GUARANTEES.map((guarantee, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#E02020] rounded-full" />
                      {guarantee}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-center text-sm text-gray-500"
            >
              This is what professional{" "}
              <span className="font-bold text-gray-700">Web Design for Tradies North Brisbane</span>{" "}
              looks like.
            </motion.p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default OfferAdRealEstate;

