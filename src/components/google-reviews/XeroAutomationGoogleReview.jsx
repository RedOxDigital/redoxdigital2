import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Clock,
  Mail,
  MessageSquare,
  Star,
  CheckCircle,
  ArrowRight,
  Download,
  Gift,
  Brain,
  Repeat,
  DollarSign,
} from 'lucide-react';

const ProcessStep = ({ number, icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative"
    >
      {/* Connector Line (hidden on last item via CSS) */}
      <div className="absolute left-[calc(50%+40px)] top-10 -z-10 hidden h-0.5 w-[calc(100%-80px)] bg-gradient-to-r from-[#E02020] to-[#E02020]/20 md:block" />

      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#E02020] shadow-lg shadow-[#E02020]/30">
            <Icon className="h-10 w-10 text-white" />
          </div>
          <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#1a1a1a] text-sm font-bold text-white">
            {number}
          </div>
        </div>
        <h4 className="mb-2 text-lg font-bold text-[#1a1a1a]">{title}</h4>
        <p className="max-w-[250px] text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const BenefitCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6"
    >
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#E02020]/20">
        <Icon className="h-6 w-6 text-[#E02020]" />
      </div>
      <div>
        <h4 className="mb-1 font-bold text-white">{title}</h4>
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const XeroAutomationGoogleReview = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const processSteps = [
    {
      number: '1',
      icon: DollarSign,
      title: 'Mark Invoice Paid',
      description: 'You finish a job and mark the invoice as "Paid" in Xero. That\'s all you do.',
    },
    {
      number: '2',
      icon: Clock,
      title: 'Automatic Wait',
      description: 'The tool waits 1 hour. This makes the message feel natural, not rushed.',
    },
    {
      number: '3',
      icon: Mail,
      title: 'Email Goes Out',
      description:
        'Your google review request email template sends automatically to that customer.',
    },
    {
      number: '4',
      icon: Star,
      title: 'Reviews Roll In',
      description: 'You get more 5-star reviews without lifting a finger. Set it and forget it.',
    },
  ];

  const benefits = [
    {
      icon: Brain,
      title: 'No More Forgetting',
      description: 'Every customer gets a review request. No one slips through the cracks.',
    },
    {
      icon: Clock,
      title: 'Save Hours Weekly',
      description: 'Stop copying, pasting, and sending emails manually. The tool does it all.',
    },
    {
      icon: Repeat,
      title: 'Consistent Results',
      description: 'Same message, same timing, every time. Build reviews on autopilot.',
    },
    {
      icon: MessageSquare,
      title: 'SMS Backup Included',
      description: "Add text follow-ups for customers who don't open emails.",
    },
  ];

  return (
    <section id="automation" className="overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#E02020]/10 px-4 py-2"
          >
            <Gift className="h-5 w-5 text-[#E02020]" />
            <span className="text-sm font-bold uppercase tracking-widest text-[#E02020]">
              Free Bonus Tool
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 font-syne text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1a] md:text-5xl lg:text-6xl"
          >
            Stop Asking Manually
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed text-gray-600"
          >
            You have the perfect google review request template. But let's be honest: you won't
            remember to send it every time. Life gets busy. Customers get forgotten. Reviews don't
            happen. We built a tool to fix that.
          </motion.p>
        </div>

        {/* The Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl bg-gray-50 p-8 md:mb-24 md:p-12"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 font-syne text-2xl font-bold uppercase text-[#1a1a1a] md:text-3xl">
                The Real Problem
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                You finish a job. You're tired. You need to get to the next customer. Sending that
                review request email? It can wait. Then it waits forever. Sound familiar? Most small
                business owners only ask about 10% of their customers for reviews. That's 90% of
                potential 5-star reviews lost.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#E02020]">90%</p>
                  <p className="text-xs uppercase tracking-wide text-gray-500">Reviews Lost</p>
                </div>
                <ArrowRight className="h-6 w-6 text-gray-300" />
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-500">0%</p>
                  <p className="text-xs uppercase tracking-wide text-gray-500">With Automation</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-xl">
                <div className="mb-4 flex items-center gap-3 border-b border-gray-100 pb-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Xero_software_logo.svg/1200px-Xero_software_logo.svg.png"
                    alt="Xero Logo"
                    className="h-8 object-contain"
                  />
                  <span className="text-gray-400">+</span>
                  <div className="flex items-center gap-1">
                    <Mail className="h-5 w-5 text-[#E02020]" />
                    <MessageSquare className="h-5 w-5 text-[#E02020]" />
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-600">
                  Connect your Xero account. Every time you mark an invoice "Paid", your review
                  request sends automatically.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-gray-600">Works with any Xero account</span>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -right-4 -top-4 rounded-full bg-[#E02020] px-4 py-2 text-sm font-bold text-white shadow-lg"
              >
                100% Free
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* How It Works - Process Steps */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h3 className="mb-4 font-syne text-2xl font-bold uppercase text-[#1a1a1a] md:text-3xl">
              How It Works
            </h3>
            <p className="mx-auto max-w-xl text-gray-600">
              Four simple steps. Set it up once. Then it runs forever on autopilot.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-4">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} delay={index * 0.1} />
            ))}
          </div>
        </div>

        {/* Benefits + Download Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl bg-[#1a1a1a]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Benefits */}
            <div className="p-8 md:p-12">
              <div className="mb-8 flex items-center gap-3">
                <Zap className="h-6 w-6 text-[#E02020]" />
                <h3 className="font-syne text-xl font-bold uppercase text-white">What You Get</h3>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <BenefitCard key={index} {...benefit} />
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <p className="text-sm leading-relaxed text-gray-400">
                  This tool works with your asking for google reviews email template. Paste your
                  template in once. The tool sends it every time a customer pays. You build reviews
                  while you sleep.
                </p>
              </div>
            </div>

            {/* Right: Download Form */}
            <div className="bg-white p-8 md:p-12">
              <div className="mb-6 flex items-center gap-3">
                <Download className="h-6 w-6 text-[#E02020]" />
                <h3 className="font-syne text-xl font-bold uppercase text-[#1a1a1a]">
                  Get It Free
                </h3>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#E02020]"
                      placeholder="Sarah Smith"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#E02020]"
                      placeholder="sarah@yourbusiness.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-gray-700">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#E02020]"
                      placeholder="ABC Plumbing"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all ${
                      isSubmitting
                        ? 'cursor-not-allowed bg-gray-400'
                        : 'bg-[#E02020] hover:bg-[#c41a1a]'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Download className="h-5 w-5" />
                        Get The Free Automation Tool
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    No credit card needed. No strings attached. Just free tools.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                  <h4 className="mb-2 font-syne text-2xl font-bold text-[#1a1a1a]">
                    Check Your Inbox!
                  </h4>
                  <p className="mb-6 text-gray-600">
                    We just sent the automation tool to your email. Follow the setup guide inside to
                    get started.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Mail className="h-4 w-4" />
                    <span>Sent to {formData.email}</span>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Trust Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Works with Xero</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Email + SMS included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>5 minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>100% free forever</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default XeroAutomationGoogleReview;



