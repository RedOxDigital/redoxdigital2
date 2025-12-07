import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Briefcase, MessageCircle, Copy, Check, Star, ArrowRight } from 'lucide-react';

const CopyableTemplate = ({ template, variant }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const variantColors = {
    personal: 'border-[#E02020] bg-red-50',
    professional: 'border-[#1a1a1a] bg-gray-50',
    feedback: 'border-green-500 bg-green-50',
  };

  return (
    <div className={`relative rounded-xl border-2 ${variantColors[variant]} p-6 md:p-8`}>
      <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-gray-700 md:text-base">
        {template}
      </pre>
      <button
        onClick={handleCopy}
        className={`absolute right-4 top-4 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-all ${
          copied ? 'bg-green-500 text-white' : 'bg-white text-gray-700 shadow-md hover:bg-gray-100'
        }`}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            Copy
          </>
        )}
      </button>
    </div>
  );
};

const TemplateCard = ({
  icon: Icon,
  iconBg,
  title,
  subtitle,
  bestFor,
  tone,
  template,
  variant,
  tips,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className="overflow-hidden rounded-2xl bg-white shadow-lg"
    >
      {/* Card Header */}
      <div className="cursor-pointer p-6 md:p-8" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className={`h-14 w-14 ${iconBg} flex flex-shrink-0 items-center justify-center rounded-xl`}
            >
              <Icon className="h-7 w-7 text-white" />
            </div>
            <div>
              <h3 className="mb-1 font-syne text-xl font-bold uppercase text-[#1a1a1a] md:text-2xl">
                {title}
              </h3>
              <p className="text-sm text-gray-500">{subtitle}</p>
            </div>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100"
          >
            <ArrowRight className="h-5 w-5 text-gray-600" />
          </motion.div>
        </div>

        {/* Quick Info */}
        <div className="mt-6 flex flex-wrap gap-4">
          <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5">
            <span className="text-xs font-bold uppercase tracking-wide text-gray-500">
              Best For:
            </span>
            <span className="text-xs font-bold text-gray-700">{bestFor}</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5">
            <span className="text-xs font-bold uppercase tracking-wide text-gray-500">Tone:</span>
            <span className="text-xs font-bold text-gray-700">{tone}</span>
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="border-t border-gray-100 px-6 pb-8 pt-6 md:px-8">
          <div className="mb-6">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#E02020]">
              The Template
            </h4>
            <CopyableTemplate template={template} variant={variant} />
          </div>

          {/* Tips */}
          <div className="rounded-xl bg-gray-50 p-6">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-500">
              Quick Tips
            </h4>
            <ul className="space-y-3">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#E02020]">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-600">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const EmailTemplatesGoogleReview = () => {
  const templates = [
    {
      icon: Heart,
      iconBg: 'bg-[#E02020]',
      title: 'Personal & Direct',
      subtitle: 'Warm and friendly approach',
      bestFor: 'Service Businesses',
      tone: 'Warm, Appreciative, Casual',
      variant: 'personal',
      template: `Subject: A quick favour, {{First Name}}?

Hi {{First Name}},

Thank you so much for choosing {{Business Name}}. We really enjoyed working with you!

We are trying to help more people like you find us. Would you mind taking 30 seconds to share your experience?

👉 Leave a review on Google:
{{Your Google Review Link}}

Or if you prefer Facebook:
{{Your Facebook Review Link}}

Your kind words mean the world to us. Thank you for your support!

Warm regards,
{{Your Name}}
{{Business Name}}`,
      tips: [
        "Replace {{First Name}} with your customer's actual first name",
        'Send this 1 to 2 days after the job is done while the experience is fresh',
        'The emoji makes it feel more human and less corporate',
        'Giving a Facebook option increases your total review count',
      ],
    },
    {
      icon: Briefcase,
      iconBg: 'bg-[#1a1a1a]',
      title: 'Short & Professional',
      subtitle: 'Respects their time',
      bestFor: 'B2B / Corporate Clients',
      tone: 'Efficient, Respectful, Direct',
      variant: 'professional',
      template: `Subject: Quick feedback request

Hi {{First Name}},

We are updating our online profile and would value your feedback.

If you have a moment, please rate your experience with us:

👉 Rate us on Google:
{{Your Google Review Link}}

Thank you for your partnership.

Best regards,
{{Your Name}}
{{Business Name}}`,
      tips: [
        'Keep it short because busy professionals skim emails',
        'One link only removes choice paralysis',
        'The word "partnership" feels respectful and equal',
        'Best sent mid-week between 10am and 2pm',
      ],
    },
    {
      icon: MessageCircle,
      iconBg: 'bg-green-500',
      title: 'Feedback First',
      subtitle: 'Softer approach that protects your rating',
      bestFor: 'When You Want to Filter',
      tone: 'Customer Service Focused',
      variant: 'feedback',
      template: `Subject: How did we do, {{First Name}}?

Hi {{First Name}},

We hope everything went well with {{Business Name}}. Your opinion matters to us!

How was your experience?

✅ I had a great experience
👉 {{Your Google Review Link}}

❌ I had an issue
👉 {{Your Private Feedback Email or Form Link}}

We read every piece of feedback. Thank you for helping us improve!

Best,
{{Your Name}}
{{Business Name}}`,
      tips: [
        'This filters unhappy customers away from public reviews',
        'The private feedback link should go to your email or a form',
        'Happy customers click the Google link and leave 5 stars',
        'Unhappy customers get a chance to vent privately first',
      ],
    },
  ];

  return (
    <section id="templates" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-[2px] w-12 bg-[#E02020]" />
            <span className="text-sm font-bold uppercase tracking-widest text-[#E02020]">
              Copy & Paste Ready
            </span>
          </motion.div>

          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mb-6 font-syne text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1a] md:text-5xl lg:text-6xl"
              >
                The Email Templates
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg leading-relaxed text-gray-600"
              >
                Three proven options for your google review request template. Each one works for a
                different situation. Pick the one that fits your business and your customers. Copy
                it. Paste it. Send it.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 lg:justify-end"
            >
              <div className="flex items-center gap-2 rounded-full bg-red-100 px-4 py-2">
                <div className="h-3 w-3 rounded-full bg-[#E02020]" />
                <span className="text-sm font-bold text-[#E02020]">Personal</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
                <div className="h-3 w-3 rounded-full bg-[#1a1a1a]" />
                <span className="text-sm font-bold text-gray-700">Professional</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-sm font-bold text-green-700">Feedback First</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Template Cards */}
        <div className="space-y-6">
          {templates.map((template, index) => (
            <TemplateCard key={index} {...template} />
          ))}
        </div>

        {/* Pro Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl bg-[#1a1a1a] p-8 md:p-12"
        >
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Star className="h-6 w-6 text-[#E02020]" />
                <h3 className="font-syne text-xl font-bold uppercase text-white">
                  Quick Customization Guide
                </h3>
              </div>
              <p className="mb-6 leading-relaxed text-gray-300">
                Replace the placeholder text in double curly brackets with your real info. These
                email templates asking for google reviews work best when they feel personal. Use
                your customer's real name. Mention what you did for them. Make it feel like a real
                message from a real person.
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-6">
              <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#E02020]">
                Replace These:
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="h-4 w-4 text-[#E02020]" />
                  <code className="rounded bg-white/10 px-2 py-1">{'{{First Name}}'}</code>
                  <span>→ Sarah, Mike, etc.</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="h-4 w-4 text-[#E02020]" />
                  <code className="rounded bg-white/10 px-2 py-1">{'{{Business Name}}'}</code>
                  <span>→ Your company</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="h-4 w-4 text-[#E02020]" />
                  <code className="rounded bg-white/10 px-2 py-1">{'{{Your Name}}'}</code>
                  <span>→ Your name</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <ArrowRight className="h-4 w-4 text-[#E02020]" />
                  <code className="rounded bg-white/10 px-2 py-1">{'{{Google Review Link}}'}</code>
                  <span>→ Your g.page link</span>
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
          <p className="mb-2 text-lg text-gray-600">Emails are great. But texts get opened more.</p>
          <p className="mb-6 text-gray-500">
            Learn how to add SMS to your review request strategy.
          </p>
          <a
            href="#sms"
            className="inline-flex items-center gap-3 rounded-full bg-[#E02020] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#c41a1a]"
          >
            See SMS Strategy
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailTemplatesGoogleReview;

