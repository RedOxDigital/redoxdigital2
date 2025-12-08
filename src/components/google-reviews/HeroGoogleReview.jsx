import { motion } from 'framer-motion';
import { Star, Download, Mail, MessageSquare } from 'lucide-react';

const HeroGoogleReview = () => {
  return (
    <section
      className="relative flex min-h-[90vh] w-full flex-col justify-center pb-24 pt-32"
      aria-label="Google Review Request Email Template Hero Section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-neutral-50 to-neutral-100" />
      <div className="absolute right-0 top-0 -z-10 h-full w-1/2 bg-gradient-to-l from-[#E02020]/5 to-transparent" />

      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#E02020] text-[#E02020]" />
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
              className="mb-8 font-syne text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1a] md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Google Review Request{' '}
              <span className="animate-gradient bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% bg-clip-text text-transparent">
                Email Template
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl"
            >
              Want more 5-star reviews? You need a simple google review request template that works.
              We give you three ready-to-use options. Copy them, paste them, and start getting
              reviews today. No tech skills needed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#templates"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E02020] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#c41a1a]"
              >
                <Mail className="h-5 w-5" />
                Get The Templates
              </a>
              <a
                href="#automation"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#1a1a1a] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-black"
              >
                <Download className="h-5 w-5" />
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
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>No signup needed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Works with any business</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
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
              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl">
                <div className="border-b border-gray-100 bg-gray-50 px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E02020]/10">
                      <Mail className="h-5 w-5 text-[#E02020]" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Review Request</p>
                      <p className="text-sm text-gray-500">To: happy.customer@email.com</p>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-700">
                    <p className="font-medium">Hi Sarah,</p>
                    <p className="text-sm leading-relaxed">
                      Thank you for choosing us! We hope you had a great experience. Would you mind
                      leaving us a quick review?
                    </p>
                    <div className="rounded-lg bg-[#E02020] px-6 py-3 text-center text-sm font-bold text-white">
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
                className="absolute -bottom-6 -left-6 max-w-[200px] rounded-xl bg-[#1a1a1a] p-4 text-white shadow-xl"
              >
                <div className="mb-2 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-[#E02020]" />
                  <span className="text-xs font-bold uppercase tracking-wide">SMS Backup</span>
                </div>
                <p className="text-xs text-gray-300">98% open rate vs 20% for email</p>
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -right-4 -top-4 rounded-xl border border-gray-100 bg-white p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Star className="h-6 w-6 fill-green-600 text-green-600" />
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
        <div className="w-full overflow-hidden bg-[#1a1a1a] py-4">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: '-50%' }}
            transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
          >
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className="flex items-center gap-8 px-8 text-sm font-bold uppercase text-white/50"
              >
                Google Review Request Template
                <span className="h-2 w-2 rounded-full bg-[#E02020]" />
                Email Template Asking For Google Reviews
                <span className="h-2 w-2 rounded-full bg-[#E02020]" />
                Free Automation Tool
                <span className="h-2 w-2 rounded-full bg-[#E02020]" />
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroGoogleReview;


