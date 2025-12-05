import { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Facebook, Copy, Check, ExternalLink, MapPin, Search, Share2 } from 'lucide-react';

const StepCard = ({ number, title, description, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="flex gap-4"
    >
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-[#E02020] text-white rounded-full flex items-center justify-center font-bold text-sm">
          {number}
        </div>
      </div>
      <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-6 -ml-5">
        <div className="flex items-center gap-2 mb-2">
          {Icon && <Icon className="w-4 h-4 text-[#E02020]" />}
          <h4 className="font-bold text-gray-900">{title}</h4>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-600" />
          <span className="text-green-600">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 text-gray-600" />
          <span className="text-gray-600">Copy Link Format</span>
        </>
      )}
    </button>
  );
};

const HowToGoogleReview = () => {
  const [activeTab, setActiveTab] = useState('desktop');

  const googleDesktopSteps = [
    {
      number: "1",
      title: "Search for your business",
      description: "Go to Google.com. Type your exact business name in the search bar. Press enter.",
      icon: Search
    },
    {
      number: "2",
      title: "Find your business panel",
      description: "Look for your business info on the right side of the screen. This is called your Knowledge Panel. You will see your name, address, and reviews here.",
      icon: Monitor
    },
    {
      number: "3",
      title: "Click on Read Reviews",
      description: "Find the button that says \"Read Reviews\" or \"Ask for reviews\". Click on it. A new window will pop up.",
      icon: ExternalLink
    },
    {
      number: "4",
      title: "Get your review link",
      description: "Look for a button that says \"Get more reviews\". Click it. You will see a short link (like g.page/r/yourcode). Copy this link and save it.",
      icon: Copy
    }
  ];

  const googleMobileSteps = [
    {
      number: "1",
      title: "Open Google Maps",
      description: "Open the Google Maps app on your phone. Make sure you are logged into the account that owns your business listing.",
      icon: MapPin
    },
    {
      number: "2",
      title: "Go to your profile",
      description: "Tap your profile picture in the top right corner. Then tap \"Your Business Profile\" from the menu.",
      icon: Smartphone
    },
    {
      number: "3",
      title: "Find the review section",
      description: "Scroll down until you see \"Get more reviews\". This section has your sharing tools.",
      icon: Search
    },
    {
      number: "4",
      title: "Share and copy",
      description: "Tap \"Share profile\". Copy the link it gives you. Save this link somewhere safe. You will use it in your review request emails.",
      icon: Share2
    }
  ];

  const facebookSteps = [
    {
      number: "1",
      title: "Go to your business page",
      description: "Log into Facebook. Go to your business page (not your personal profile).",
      icon: Facebook
    },
    {
      number: "2",
      title: "Click the Reviews tab",
      description: "Look at the tabs under your cover photo. Click on \"Reviews\". If you cannot see it, go to Settings, then Templates and Tabs, then turn on Reviews.",
      icon: ExternalLink
    },
    {
      number: "3",
      title: "Copy the page address",
      description: "Once you are on the Reviews page, look at your browser address bar at the top. Copy the full web address you see there.",
      icon: Copy
    },
    {
      number: "4",
      title: "Clean up the link",
      description: "Look at the link you copied. If you see a question mark (?) in it, delete everything after it. This makes your link shorter and cleaner.",
      icon: Check
    }
  ];

  return (
    <section id="how-to" className="py-24 md:py-32 bg-[#F2F2F2]">
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
              Before You Start
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase leading-[0.95] tracking-tight text-[#1a1a1a] mb-6"
          >
            Find Your Review Links
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Before you send any google review request email template, you need your direct 
            review links ready. These links take customers straight to your review page. 
            No confusion. No extra clicks. Just a fast path to leave feedback.
          </motion.p>
        </div>

        {/* Google Business Profile Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-[#1a1a1a] p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-syne font-bold text-white uppercase">
                      Google Business Profile Link
                    </h3>
                    <p className="text-gray-400 text-sm">Your direct review link for Google</p>
                  </div>
                </div>
                
                {/* Toggle Tabs */}
                <div className="flex bg-white/10 rounded-full p-1">
                  <button
                    onClick={() => setActiveTab('desktop')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                      activeTab === 'desktop' 
                        ? 'bg-white text-[#1a1a1a]' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <Monitor className="w-4 h-4" />
                    Desktop
                  </button>
                  <button
                    onClick={() => setActiveTab('mobile')}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                      activeTab === 'mobile' 
                        ? 'bg-white text-[#1a1a1a]' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    <Smartphone className="w-4 h-4" />
                    Mobile App
                  </button>
                </div>
              </div>
            </div>

            {/* Steps Content */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  {(activeTab === 'desktop' ? googleDesktopSteps : googleMobileSteps).map((step, index) => (
                    <StepCard key={index} {...step} />
                  ))}
                </div>
                
                {/* Example Link Box */}
                <div className="lg:sticky lg:top-8 h-fit">
                  <div className="bg-gray-50 rounded-xl p-6 border-2 border-dashed border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-600" />
                      Your link will look like this:
                    </h4>
                    <div className="bg-white rounded-lg p-4 font-mono text-sm text-gray-700 mb-4 break-all">
                      https://g.page/r/CYourBusinessCode/review
                    </div>
                    <CopyButton text="https://g.page/r/CYourBusinessCode/review" />
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-500">
                        <strong className="text-[#E02020]">Pro Tip:</strong> Save this link in a note 
                        on your phone. You can share it anytime a happy customer is standing in front of you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Facebook Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Card Header */}
          <div className="bg-[#1877F2] p-6 md:p-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <Facebook className="w-6 h-6 text-[#1877F2]" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-syne font-bold text-white uppercase">
                  Facebook Review Link
                </h3>
                <p className="text-blue-100 text-sm">Your backup review option</p>
              </div>
            </div>
          </div>

          {/* Steps Content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                {facebookSteps.map((step, index) => (
                  <StepCard key={index} {...step} />
                ))}
              </div>
              
              {/* Example Link Box */}
              <div className="lg:sticky lg:top-8 h-fit">
                <div className="bg-blue-50 rounded-xl p-6 border-2 border-dashed border-blue-200">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    Your link will look like this:
                  </h4>
                  <div className="bg-white rounded-lg p-4 font-mono text-sm text-gray-700 mb-4 break-all">
                    https://facebook.com/yourbusiness/reviews
                  </div>
                  <CopyButton text="https://facebook.com/yourbusiness/reviews" />
                  
                  <div className="mt-6 pt-6 border-t border-blue-200">
                    <p className="text-sm text-gray-500">
                      <strong className="text-[#1877F2]">Why Facebook?</strong> Some customers 
                      prefer Facebook. Give them a choice in your asking for google reviews email 
                      template. More options mean more reviews.
                    </p>
                  </div>
                </div>
              </div>
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
          <p className="text-lg text-gray-600 mb-6">
            Got your links ready? Great. Now let's look at the email templates.
          </p>
          <a
            href="#templates"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#E02020] text-white font-bold uppercase tracking-wider text-sm rounded-full hover:bg-[#c41a1a] transition-colors duration-300"
          >
            See The Templates
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToGoogleReview;

