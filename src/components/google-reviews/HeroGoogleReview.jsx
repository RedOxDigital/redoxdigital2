import { motion } from 'framer-motion';
import { Star, Download, Mail, MessageSquare } from 'lucide-react';

const HeroGoogleReview = () => {
  return (
    <section 
      className="relative pt-32 pb-24 w-full min-h-[90vh] flex flex-col justify-center"
      aria-label="Google Review Request Email Template Hero Section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-50 to-neutral-100 -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E02020]/5 to-transparent -z-10" />
      
      <div className="px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#E02020] text-[#E02020]" />
                ))}
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-[#E02020]">
                Free Template + Automation
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-syne font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1a] mb-8"
            >
              Google Review Request{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% animate-gradient">
                Email Template
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl"
            >
              Want more 5-star reviews? You need a simple google review request template 
              that works. We give you three ready-to-use options. Copy them, paste them, 
              and start getting reviews today. No tech skills needed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#templates"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E02020] text-white font-bold uppercase tracking-wider text-sm rounded-full hover:bg-[#c41a1a] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                Get The Templates
              </a>
              <a
                href="#automation"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white font-bold uppercase tracking-wider text-sm rounded-full hover:bg-black transition-colors duration-300"
              >
                <Download className="w-5 h-5" />
                Free Xero Auto-Sender
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>No signup needed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Works with any business</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Copy and paste ready</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Email Preview Card */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#E02020]/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#E02020]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Review Request</p>
                      <p className="text-sm text-gray-500">To: happy.customer@email.com</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="font-medium">Hi Sarah,</p>
                    <p className="text-sm leading-relaxed">
                      Thank you for choosing us! We hope you had a great experience. 
                      Would you mind leaving us a quick review?
                    </p>
                    <div className="bg-[#E02020] text-white text-center py-3 px-6 rounded-lg font-bold text-sm">
                      Leave a Google Review
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating SMS Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-[#1a1a1a] text-white p-4 rounded-xl shadow-xl max-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-[#E02020]" />
                  <span className="text-xs font-bold uppercase tracking-wide">SMS Backup</span>
                </div>
                <p className="text-xs text-gray-300">
                  98% open rate vs 20% for email
                </p>
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-600 fill-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1a1a1a]">+47%</p>
                    <p className="text-xs text-gray-500">More Reviews</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="w-full py-4 bg-[#1a1a1a] overflow-hidden">
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: "-50%" }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          >
            {[...Array(8)].map((_, i) => (
              <span key={i} className="text-sm font-bold uppercase text-white/50 px-8 flex items-center gap-8">
                Google Review Request Template
                <span className="w-2 h-2 bg-[#E02020] rounded-full" />
                Email Template Asking For Google Reviews
                <span className="w-2 h-2 bg-[#E02020] rounded-full" />
                Free Automation Tool
                <span className="w-2 h-2 bg-[#E02020] rounded-full" />
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroGoogleReview;

