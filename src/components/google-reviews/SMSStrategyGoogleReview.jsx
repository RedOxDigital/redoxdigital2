import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Clock, Copy, Check, Zap, TrendingUp, Eye, AlertCircle } from 'lucide-react';

const StatCard = ({ icon: Icon, stat, label, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-lg text-center"
    >
      <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <p className="text-4xl md:text-5xl font-syne font-bold text-[#1a1a1a] mb-2">{stat}</p>
      <p className="text-gray-500 text-sm font-medium">{label}</p>
    </motion.div>
  );
};

const TimelineStep = ({ number, title, description, time, isLast }) => {
  return (
    <div className="flex gap-4 md:gap-6">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 bg-[#E02020] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
          {number}
        </div>
        {!isLast && <div className="w-0.5 h-full bg-gray-200 my-2" />}
      </div>
      <div className={`pb-8 ${isLast ? '' : ''}`}>
        <div className="flex items-center gap-3 mb-2">
          <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
          <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500">
            {time}
          </span>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const SMSStrategyGoogleReview = () => {
  const [copied, setCopied] = useState(false);

  const smsTemplate = `Hi {{Name}}, it's {{Your Name}} from {{Business}}. Just wanted to make sure you got our email! If you have 30 seconds, we'd love a quick Google review here: {{Link}}. Thanks!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(smsTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const timelineSteps = [
    {
      number: "1",
      title: "Send the email",
      time: "Day 1",
      description: "Use one of our google review request email templates. Send it right after you finish the job while the experience is still fresh in their mind."
    },
    {
      number: "2",
      title: "Wait and watch",
      time: "24 Hours",
      description: "Give them a full day to open and click. Some people check email once a day. Some check it never. That's okay. We have a backup plan."
    },
    {
      number: "3",
      title: "Send the text",
      time: "Day 2",
      description: "If they haven't clicked, send a friendly text. Keep it short. Keep it polite. The text is just a gentle nudge, not a hard sell."
    }
  ];

  return (
    <section id="sms" className="py-24 md:py-32 bg-[#F2F2F2]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-[#E02020]" />
            <span className="text-[#E02020] text-sm font-bold tracking-widest uppercase">
              The Secret Weapon
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1a] mb-6"
          >
            Don't Stop at Email
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Here is the truth about your google review request template: most people will 
            not see it. Emails get buried. Texts get read. Smart business owners use both.
          </motion.p>
        </div>

        {/* Stats Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
              icon={Mail}
              stat="~20%"
              label="Email Open Rate"
              color="bg-gray-400"
            />
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="w-16 h-16 bg-[#E02020] rounded-full flex items-center justify-center"
              >
                <span className="text-white font-bold text-xl">VS</span>
              </motion.div>
            </div>
            <StatCard 
              icon={MessageSquare}
              stat="~98%"
              label="SMS Open Rate"
              color="bg-[#E02020]"
            />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-500 mt-8 text-sm"
          >
            That's almost 5x more people seeing your review request
          </motion.p>
        </motion.div>

        {/* The Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-xl font-syne font-bold uppercase text-gray-400">
                The Problem
              </h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-600">Emails land in the "Promotions" tab and die there</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-600">People check email when they have time (which is never)</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-600">Your asking for google reviews email template gets lost in a sea of newsletters</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-600">By the time they see it, they've forgotten about you</p>
              </li>
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a1a1a] rounded-2xl p-8 md:p-10 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#E02020] rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-syne font-bold uppercase text-white">
                The Fix
              </h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#E02020] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">Texts appear on their lock screen instantly</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#E02020] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">People read texts within 3 minutes on average</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#E02020] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">A short text feels personal, not spammy</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#E02020] rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300">One tap takes them straight to your Google review page</p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* The Strategy Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#E02020]/10 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-[#E02020]" />
            </div>
            <div>
              <h3 className="text-xl font-syne font-bold uppercase text-[#1a1a1a]">
                The Two-Step Strategy
              </h3>
              <p className="text-gray-500 text-sm">Email first. Text second. More reviews.</p>
            </div>
          </div>

          <div className="max-w-2xl">
            {timelineSteps.map((step, index) => (
              <TimelineStep 
                key={index} 
                {...step} 
                isLast={index === timelineSteps.length - 1}
              />
            ))}
          </div>
        </motion.div>

        {/* SMS Template */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Template */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-[#E02020]" />
                <h3 className="text-xl font-syne font-bold uppercase text-white">
                  Your SMS Template
                </h3>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/50 text-sm">Text Message</span>
                </div>
                <p className="text-white leading-relaxed">
                  Hi <span className="text-[#E02020]">{'{{Name}}'}</span>, it's <span className="text-[#E02020]">{'{{Your Name}}'}</span> from <span className="text-[#E02020]">{'{{Business}}'}</span>. Just wanted to make sure you got our email! If you have 30 seconds, we'd love a quick Google review here: <span className="text-[#E02020] underline">{'{{Link}}'}</span>. Thanks!
                </p>
              </div>

              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${
                  copied 
                    ? 'bg-green-500 text-white' 
                    : 'bg-[#E02020] text-white hover:bg-[#c41a1a]'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied to Clipboard!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy SMS Template
                  </>
                )}
              </button>
            </div>

            {/* Right: Tips */}
            <div className="bg-white/5 p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-white/10">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#E02020] mb-6">
                SMS Best Practices
              </h4>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E02020]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-4 h-4 text-[#E02020]" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Keep it under 160 characters</p>
                    <p className="text-gray-400 text-sm">This keeps it to one text message. Longer texts get split and look messy.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E02020]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-4 h-4 text-[#E02020]" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Use your name, not your business</p>
                    <p className="text-gray-400 text-sm">People reply to people. "It's Sarah" feels better than "It's ABC Plumbing".</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[#E02020]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#E02020]" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Send between 10am and 7pm</p>
                    <p className="text-gray-400 text-sm">A text at 6am or 11pm will annoy them. Time it right.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-2">
            Tired of sending these manually?
          </p>
          <p className="text-gray-500 mb-6">
            We built a free tool that does it all for you.
          </p>
          <a
            href="#automation"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#E02020] text-white font-bold uppercase tracking-wider text-sm rounded-full hover:bg-[#c41a1a] transition-colors duration-300"
          >
            <Zap className="w-4 h-4" />
            Get Free Automation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SMSStrategyGoogleReview;

