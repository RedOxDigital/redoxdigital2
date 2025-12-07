import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Mail,
  Clock,
  Copy,
  Check,
  Zap,
  TrendingUp,
  Eye,
  AlertCircle,
} from 'lucide-react';

const StatCard = ({ icon: Icon, stat, label, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="rounded-2xl bg-white p-6 text-center shadow-lg md:p-8"
    >
      <div
        className={`h-16 w-16 ${color} mx-auto mb-4 flex items-center justify-center rounded-full`}
      >
        <Icon className="h-8 w-8 text-white" />
      </div>
      <p className="mb-2 font-syne text-4xl font-bold text-[#1a1a1a] md:text-5xl">{stat}</p>
      <p className="text-sm font-medium text-gray-500">{label}</p>
    </motion.div>
  );
};

const TimelineStep = ({ number, title, description, time, isLast }) => {
  return (
    <div className="flex gap-4 md:gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#E02020] text-sm font-bold text-white">
          {number}
        </div>
        {!isLast && <div className="my-2 h-full w-0.5 bg-gray-200" />}
      </div>
      <div className={`pb-8 ${isLast ? '' : ''}`}>
        <div className="mb-2 flex items-center gap-3">
          <h4 className="text-lg font-bold text-gray-900">{title}</h4>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-500">
            {time}
          </span>
        </div>
        <p className="leading-relaxed text-gray-600">{description}</p>
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
      number: '1',
      title: 'Send the email',
      time: 'Day 1',
      description:
        'Use one of our google review request email templates. Send it right after you finish the job while the experience is still fresh in their mind.',
    },
    {
      number: '2',
      title: 'Wait and watch',
      time: '24 Hours',
      description:
        "Give them a full day to open and click. Some people check email once a day. Some check it never. That's okay. We have a backup plan.",
    },
    {
      number: '3',
      title: 'Send the text',
      time: 'Day 2',
      description:
        "If they haven't clicked, send a friendly text. Keep it short. Keep it polite. The text is just a gentle nudge, not a hard sell.",
    },
  ];

  return (
    <section id="sms" className="bg-[#F2F2F2] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-[2px] w-12 bg-[#E02020]" />
            <span className="text-sm font-bold uppercase tracking-widest text-[#E02020]">
              The Secret Weapon
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 font-syne text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1a] md:text-5xl lg:text-6xl"
          >
            Don't Stop at Email
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed text-gray-600"
          >
            Here is the truth about your google review request template: most people will not see
            it. Emails get buried. Texts get read. Smart business owners use both.
          </motion.p>
        </div>

        {/* Stats Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <StatCard icon={Mail} stat="~20%" label="Email Open Rate" color="bg-gray-400" />
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E02020]"
              >
                <span className="text-xl font-bold text-white">VS</span>
              </motion.div>
            </div>
            <StatCard icon={MessageSquare} stat="~98%" label="SMS Open Rate" color="bg-[#E02020]" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center text-sm text-gray-500"
          >
            That's almost 5x more people seeing your review request
          </motion.p>
        </motion.div>

        {/* The Problem & Solution */}
        <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white p-8 shadow-lg md:p-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                <AlertCircle className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="font-syne text-xl font-bold uppercase text-gray-400">The Problem</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gray-300" />
                <p className="text-gray-600">Emails land in the "Promotions" tab and die there</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gray-300" />
                <p className="text-gray-600">
                  People check email when they have time (which is never)
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gray-300" />
                <p className="text-gray-600">
                  Your asking for google reviews email template gets lost in a sea of newsletters
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gray-300" />
                <p className="text-gray-600">
                  By the time they see it, they've forgotten about you
                </p>
              </li>
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-[#1a1a1a] p-8 shadow-lg md:p-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E02020]">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-syne text-xl font-bold uppercase text-white">The Fix</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#E02020]" />
                <p className="text-gray-300">Texts appear on their lock screen instantly</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#E02020]" />
                <p className="text-gray-300">People read texts within 3 minutes on average</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#E02020]" />
                <p className="text-gray-300">A short text feels personal, not spammy</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#E02020]" />
                <p className="text-gray-300">
                  One tap takes them straight to your Google review page
                </p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* The Strategy Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 rounded-2xl bg-white p-8 shadow-lg md:p-12"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E02020]/10">
              <Clock className="h-6 w-6 text-[#E02020]" />
            </div>
            <div>
              <h3 className="font-syne text-xl font-bold uppercase text-[#1a1a1a]">
                The Two-Step Strategy
              </h3>
              <p className="text-sm text-gray-500">Email first. Text second. More reviews.</p>
            </div>
          </div>

          <div className="max-w-2xl">
            {timelineSteps.map((step, index) => (
              <TimelineStep key={index} {...step} isLast={index === timelineSteps.length - 1} />
            ))}
          </div>
        </motion.div>

        {/* SMS Template */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl bg-[#1a1a1a]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Template */}
            <div className="p-8 md:p-12">
              <div className="mb-6 flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-[#E02020]" />
                <h3 className="font-syne text-xl font-bold uppercase text-white">
                  Your SMS Template
                </h3>
              </div>

              <div className="mb-6 rounded-xl bg-white/10 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-white/50">Text Message</span>
                </div>
                <p className="leading-relaxed text-white">
                  Hi <span className="text-[#E02020]">{'{{Name}}'}</span>, it's{' '}
                  <span className="text-[#E02020]">{'{{Your Name}}'}</span> from{' '}
                  <span className="text-[#E02020]">{'{{Business}}'}</span>. Just wanted to make sure
                  you got our email! If you have 30 seconds, we'd love a quick Google review here:{' '}
                  <span className="text-[#E02020] underline">{'{{Link}}'}</span>. Thanks!
                </p>
              </div>

              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all ${
                  copied ? 'bg-green-500 text-white' : 'bg-[#E02020] text-white hover:bg-[#c41a1a]'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied to Clipboard!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy SMS Template
                  </>
                )}
              </button>
            </div>

            {/* Right: Tips */}
            <div className="border-t border-white/10 bg-white/5 p-8 md:p-12 lg:border-l lg:border-t-0">
              <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#E02020]">
                SMS Best Practices
              </h4>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#E02020]/20">
                    <TrendingUp className="h-4 w-4 text-[#E02020]" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-white">Keep it under 160 characters</p>
                    <p className="text-sm text-gray-400">
                      This keeps it to one text message. Longer texts get split and look messy.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#E02020]/20">
                    <Eye className="h-4 w-4 text-[#E02020]" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-white">Use your name, not your business</p>
                    <p className="text-sm text-gray-400">
                      People reply to people. "It's Sarah" feels better than "It's ABC Plumbing".
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#E02020]/20">
                    <Clock className="h-4 w-4 text-[#E02020]" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-white">Send between 10am and 7pm</p>
                    <p className="text-sm text-gray-400">
                      A text at 6am or 11pm will annoy them. Time it right.
                    </p>
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
          <p className="mb-2 text-lg text-gray-600">Tired of sending these manually?</p>
          <p className="mb-6 text-gray-500">We built a free tool that does it all for you.</p>
          <a
            href="#automation"
            className="inline-flex items-center gap-3 rounded-full bg-[#E02020] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#c41a1a]"
          >
            <Zap className="h-4 w-4" />
            Get Free Automation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SMSStrategyGoogleReview;

