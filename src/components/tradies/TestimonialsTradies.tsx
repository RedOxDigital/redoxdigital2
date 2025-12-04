import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame, useMotionValueEvent } from 'framer-motion';
import { Quote, Star, Wrench, HardHat, Leaf } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Steve",
    business: "Plumber",
    location: "North Lakes",
    icon: <Wrench className="w-5 h-5" />,
    quote: "Phone has not stopped ringing since we fixed the Google Map listing. I used to get maybe two calls a week. Now I am turning down jobs because I am fully booked.",
    result: "Fully booked in 60 days",
    stars: 5
  },
  {
    id: 2,
    name: "Mike",
    business: "Builder",
    location: "Mango Hill",
    icon: <HardHat className="w-5 h-5" />,
    quote: "Finally, someone who explains it in plain English. No confusing tech talk. He sat down with me over a coffee and made a plan I could actually understand.",
    result: "Clear strategy, real results",
    stars: 5
  },
  {
    id: 3,
    name: "Sarah",
    business: "Landscaping Co.",
    location: "Griffin",
    icon: <Leaf className="w-5 h-5" />,
    quote: "The video content he added to our site changed everything. Clients already trust us before they call. They have seen our work and know we are the real deal.",
    result: "Higher quality enquiries",
    stars: 5
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof TESTIMONIALS[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-white border border-black/10 p-6 md:p-8 hover:border-[#E02020]/30 transition-all duration-500 h-full flex flex-col"
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 -left-2 md:-left-4 w-10 h-10 md:w-12 md:h-12 bg-[#E02020] rounded-full flex items-center justify-center shadow-lg">
        <Quote className="w-4 h-4 md:w-5 md:h-5 text-white fill-current" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-6 mt-2">
        {[...Array(testimonial.stars)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>

      {/* Quote Text */}
      <blockquote className="text-lg md:text-xl text-[#1a1a1a] leading-relaxed mb-8 flex-1">
        "{testimonial.quote}"
      </blockquote>

      {/* Result Badge */}
      <div className="bg-[#F2F2F2] group-hover:bg-[#E02020]/10 px-4 py-2 inline-block mb-6 transition-colors duration-300">
        <span className="text-xs font-bold uppercase tracking-widest text-[#E02020]">
          {testimonial.result}
        </span>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-black/10">
        <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white group-hover:bg-[#E02020] transition-colors duration-300">
          {testimonial.icon}
        </div>
        <div>
          <cite className="not-italic font-syne font-bold text-[#1a1a1a] block">
            {testimonial.name}
          </cite>
          <span className="text-sm text-gray-500">
            {testimonial.business} • {testimonial.location}
          </span>
        </div>
      </div>

      {/* Hover Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E02020] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

const MobileTestimonialSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);

  const allTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  useEffect(() => {
    if (sliderRef.current) {
      setContentWidth(sliderRef.current.scrollWidth / 3);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    if (!isDragging && contentWidth > 0) {
      const moveBy = -0.3 * (delta / 16);
      x.set(x.get() + moveBy);
    }
  });

  useMotionValueEvent(x, "change", (latest) => {
    if (contentWidth > 0) {
      if (latest <= -contentWidth) {
        x.set(latest + contentWidth);
      } else if (latest > 0) {
        x.set(latest - contentWidth);
      }
    }
  });

  return (
    <div className="md:hidden w-full overflow-hidden pb-8 cursor-grab active:cursor-grabbing">
      <motion.div
        ref={sliderRef}
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -10000, right: 10000 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        className="flex gap-4"
      >
        {allTestimonials.map((testimonial, index) => (
          <div 
            key={`${testimonial.id}-${index}`}
            className="min-w-[85vw] max-w-[400px] flex-shrink-0"
          >
            <div className="relative bg-white border border-black/10 p-6 h-full flex flex-col">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 w-10 h-10 bg-[#E02020] rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-4 h-4 text-white fill-current" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base text-[#1a1a1a] leading-relaxed mb-6 flex-1">
                "{testimonial.quote}"
              </blockquote>

              {/* Result Badge */}
              <div className="bg-[#F2F2F2] px-3 py-1.5 inline-block mb-4 self-start">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E02020]">
                  {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/10">
                <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white">
                  {testimonial.icon}
                </div>
                <div>
                  <cite className="not-italic font-syne font-bold text-sm text-[#1a1a1a] block">
                    {testimonial.name}
                  </cite>
                  <span className="text-xs text-gray-500">
                    {testimonial.business} • {testimonial.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Progress Indicator */}
      <div className="mt-6 flex items-center gap-3 px-6">
        <div className="w-full h-[1px] bg-gray-200 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#E02020] w-1/3"
            animate={{ x: [0, 150, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-gray-400 whitespace-nowrap">
          Swipe
        </span>
      </div>
    </div>
  );
};

const TestimonialsTradies = () => {
  return (
    <section className="py-20 md:py-32 bg-[#F2F2F2] border-t border-black/10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="w-12 h-[2px] bg-[#E02020]" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#E02020]">
              Social Proof
            </span>
            <div className="w-12 h-[2px] bg-[#E02020]" />
          </motion.div>

          {/* H2 - NO money keywords */}
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-syne font-bold uppercase leading-[0.95] mb-6"
          >
            What Local Tradies <br/>
            <span className="text-[#E02020]">Are Saying</span>
          </motion.h2>

          {/* Body Copy - Money keywords go here */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Real results from real trade businesses in North Lakes and the Moreton Bay Region. Our tradies SEO and strategic media content helps local businesses get found and get booked.
          </motion.p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>

        {/* Mobile Slider */}
        <MobileTestimonialSlider />

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm font-bold text-gray-700">5.0 Average Rating</span>
          </div>
          
          <div className="w-[1px] h-6 bg-gray-300 hidden md:block" />
          
          <div className="text-sm text-gray-600">
            <span className="font-bold text-[#1a1a1a]">100%</span> of clients would recommend
          </div>
          
          <div className="w-[1px] h-6 bg-gray-300 hidden md:block" />
          
          <div className="text-sm text-gray-600">
            <span className="font-bold text-[#1a1a1a]">Local</span> North Lakes business
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsTradies;



