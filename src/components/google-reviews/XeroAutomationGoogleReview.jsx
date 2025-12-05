import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Mail, MessageSquare, Star, CheckCircle, ArrowRight, Download, Gift, Brain, Repeat, DollarSign } from 'lucide-react';

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
      <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-[#E02020] to-[#E02020]/20 -z-10" />
      
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-[#E02020] rounded-2xl flex items-center justify-center shadow-lg shadow-[#E02020]/30">
            <Icon className="w-10 h-10 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white font-bold text-sm">
            {number}
          </div>
        </div>
        <h4 className="text-lg font-bold text-[#1a1a1a] mb-2">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">{description}</p>
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
      className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10"
    >
      <div className="w-12 h-12 bg-[#E02020]/20 rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-[#E02020]" />
      </div>
      <div>
        <h4 className="text-white font-bold mb-1">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const XeroAutomationGoogleReview = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: ''
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
      [e.target.name]: e.target.value
    });
  };

  const processSteps = [
    {
      number: "1",
      icon: DollarSign,
      title: "Mark Invoice Paid",
      description: "You finish a job and mark the invoice as \"Paid\" in Xero. That's all you do."
    },
    {
      number: "2",
      icon: Clock,
      title: "Automatic Wait",
      description: "The tool waits 1 hour. This makes the message feel natural, not rushed."
    },
    {
      number: "3",
      icon: Mail,
      title: "Email Goes Out",
      description: "Your google review request email template sends automatically to that customer."
    },
    {
      number: "4",
      icon: Star,
      title: "Reviews Roll In",
      description: "You get more 5-star reviews without lifting a finger. Set it and forget it."
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "No More Forgetting",
      description: "Every customer gets a review request. No one slips through the cracks."
    },
    {
      icon: Clock,
      title: "Save Hours Weekly",
      description: "Stop copying, pasting, and sending emails manually. The tool does it all."
    },
    {
      icon: Repeat,
      title: "Consistent Results",
      description: "Same message, same timing, every time. Build reviews on autopilot."
    },
    {
      icon: MessageSquare,
      title: "SMS Backup Included",
      description: "Add text follow-ups for customers who don't open emails."
    }
  ];

  return (
    <section id="automation" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#E02020]/10 rounded-full mb-6"
          >
            <Gift className="w-5 h-5 text-[#E02020]" />
            <span className="text-[#E02020] text-sm font-bold uppercase tracking-widest">
              Free Bonus Tool
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1a] mb-6"
          >
            Stop Asking Manually
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            You have the perfect google review request template. But let's be honest: 
            you won't remember to send it every time. Life gets busy. Customers get 
            forgotten. Reviews don't happen. We built a tool to fix that.
          </motion.p>
        </div>

        {/* The Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16 md:mb-24"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-syne font-bold uppercase text-[#1a1a1a] mb-4">
                The Real Problem
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                You finish a job. You're tired. You need to get to the next customer. 
                Sending that review request email? It can wait. Then it waits forever. 
                Sound familiar? Most small business owners only ask about 10% of their 
                customers for reviews. That's 90% of potential 5-star reviews lost.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#E02020]">90%</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Reviews Lost</p>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-300" />
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-500">0%</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">With Automation</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Xero_software_logo.svg/1200px-Xero_software_logo.svg.png" 
                    alt="Xero Logo" 
                    className="h-8 object-contain"
                  />
                  <span className="text-gray-400">+</span>
                  <div className="flex items-center gap-1">
                    <Mail className="w-5 h-5 text-[#E02020]" />
                    <MessageSquare className="w-5 h-5 text-[#E02020]" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Connect your Xero account. Every time you mark an invoice "Paid", 
                  your review request sends automatically.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">Works with any Xero account</span>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -top-4 -right-4 bg-[#E02020] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
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
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-syne font-bold uppercase text-[#1a1a1a] mb-4">
              How It Works
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Four simple steps. Set it up once. Then it runs forever on autopilot.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {processSteps.map((step, index) => (
              <ProcessStep 
                key={index} 
                {...step} 
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Benefits + Download Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Benefits */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-6 h-6 text-[#E02020]" />
                <h3 className="text-xl font-syne font-bold uppercase text-white">
                  What You Get
                </h3>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <BenefitCard key={index} {...benefit} />
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm leading-relaxed">
                  This tool works with your asking for google reviews email template. 
                  Paste your template in once. The tool sends it every time a customer 
                  pays. You build reviews while you sleep.
                </p>
              </div>
            </div>

            {/* Right: Download Form */}
            <div className="bg-white p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Download className="w-6 h-6 text-[#E02020]" />
                <h3 className="text-xl font-syne font-bold uppercase text-[#1a1a1a]">
                  Get It Free
                </h3>
              </div>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E02020] focus:border-transparent transition-all"
                      placeholder="Sarah Smith"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E02020] focus:border-transparent transition-all"
                      placeholder="sarah@yourbusiness.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E02020] focus:border-transparent transition-all"
                      placeholder="ABC Plumbing"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-[#E02020] hover:bg-[#c41a1a]'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5" />
                        Get The Free Automation Tool
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    No credit card needed. No strings attached. Just free tools.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-2xl font-syne font-bold text-[#1a1a1a] mb-2">
                    Check Your Inbox!
                  </h4>
                  <p className="text-gray-600 mb-6">
                    We just sent the automation tool to your email. 
                    Follow the setup guide inside to get started.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Mail className="w-4 h-4" />
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
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Works with Xero</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Email + SMS included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>5 minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>100% free forever</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default XeroAutomationGoogleReview;

