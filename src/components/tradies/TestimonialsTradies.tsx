import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame, useMotionValueEvent } from 'framer-motion';
import { Quote, Star, Wrench, HardHat, Leaf } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Steve',
    business: 'Plumber',
    location: 'North Lakes',
    icon: <Wrench className="h-5 w-5" />,
    quote:
      'Phone has not stopped ringing since we fixed the Google Map listing. I used to get maybe two calls a week. Now I am turning down jobs because I am fully booked.',
    result: 'Fully booked in 60 days',
    stars: 5,
  },
  {
    id: 2,
    name: 'Mike',
    business: 'Builder',
    location: 'Mango Hill',
    icon: <HardHat className="h-5 w-5" />,
    quote:
      'Finally, someone who explains it in plain English. No confusing tech talk. He sat down with me over a coffee and made a plan I could actually understand.',
    result: 'Clear strategy, real results',
    stars: 5,
  },
  {
    id: 3,
    name: 'Sarah',
    business: 'Landscaping Co.',
    location: 'Griffin',
    icon: <Leaf className="h-5 w-5" />,
    quote:
      'The video content he added to our site changed everything. Clients already trust us before they call. They have seen our work and know we are the real deal.',
    result: 'Higher quality enquiries',
    stars: 5,
  },
];

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative flex h-full flex-col border border-black/10 bg-white p-6 transition-all duration-500 hover:border-[#E02020]/30 md:p-8"
    >
      {/* Quote Icon */}
      <div className="absolute -left-2 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#E02020] shadow-lg md:-left-4 md:h-12 md:w-12">
        <Quote className="h-4 w-4 fill-current text-white md:h-5 md:w-5" />
      </div>

      {/* Stars */}
      <div className="mb-6 mt-2 flex gap-1">
        {[...Array(testimonial.stars)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
        ))}
      </div>

      {/* Quote Text */}
      <blockquote className="mb-8 flex-1 text-lg leading-relaxed text-[#1a1a1a] md:text-xl">
        "{testimonial.quote}"
      </blockquote>

      {/* Result Badge */}
      <div className="mb-6 inline-block bg-[#F2F2F2] px-4 py-2 transition-colors duration-300 group-hover:bg-[#E02020]/10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#E02020]">
          {testimonial.result}
        </span>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4 border-t border-black/10 pt-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1a1a] text-white transition-colors duration-300 group-hover:bg-[#E02020]">
          {testimonial.icon}
        </div>
        <div>
          <cite className="block font-syne font-bold not-italic text-[#1a1a1a]">
            {testimonial.name}
          </cite>
          <span className="text-sm text-gray-500">
            {testimonial.business} • {testimonial.location}
          </span>
        </div>
      </div>

      {/* Hover Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 transform bg-[#E02020] transition-transform duration-500 group-hover:scale-x-100" />
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

  useMotionValueEvent(x, 'change', (latest) => {
    if (contentWidth > 0) {
      if (latest <= -contentWidth) {
        x.set(latest + contentWidth);
      } else if (latest > 0) {
        x.set(latest - contentWidth);
      }
    }
  });

  return (
    <div className="w-full cursor-grab overflow-hidden pb-8 active:cursor-grabbing md:hidden">
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
            <div className="relative flex h-full flex-col border border-black/10 bg-white p-6">
              {/* Quote Icon */}
              <div className="absolute -left-2 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#E02020] shadow-lg">
                <Quote className="h-4 w-4 fill-current text-white" />
              </div>

              {/* Stars */}
              <div className="mb-4 mt-2 flex gap-1">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mb-6 flex-1 text-base leading-relaxed text-[#1a1a1a]">
                "{testimonial.quote}"
              </blockquote>

              {/* Result Badge */}
              <div className="mb-4 inline-block self-start bg-[#F2F2F2] px-3 py-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#E02020]">
                  {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-black/10 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
                  {testimonial.icon}
                </div>
                <div>
                  <cite className="block font-syne text-sm font-bold not-italic text-[#1a1a1a]">
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
        <div className="relative h-[1px] w-full overflow-hidden bg-gray-200">
          <motion.div
            className="absolute left-0 top-0 h-full w-1/3 bg-[#E02020]"
            animate={{ x: [0, 150, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <span className="whitespace-nowrap text-[10px] uppercase tracking-widest text-gray-400">
          Swipe
        </span>
      </div>
    </div>
  );
};

const TestimonialsTradies = () => {
  return (
    <section className="overflow-hidden border-t border-black/10 bg-[#F2F2F2] py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <div className="h-[2px] w-12 bg-[#E02020]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E02020] md:text-sm">
              Social Proof
            </span>
            <div className="h-[2px] w-12 bg-[#E02020]" />
          </motion.div>

          {/* H2 - NO money keywords */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 font-syne text-4xl font-bold uppercase leading-[0.95] md:text-5xl lg:text-6xl"
          >
            What Local Tradies <br />
            <span className="text-[#E02020]">Are Saying</span>
          </motion.h2>

          {/* Body Copy - Money keywords go here */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed text-gray-600"
          >
            Real results from real trade businesses in North Lakes and the Moreton Bay Region. Our
            tradies SEO and strategic media content helps local businesses get found and get booked.
          </motion.p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden gap-8 md:grid md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
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
          className="mt-12 flex flex-wrap items-center justify-center gap-6 md:mt-16 md:gap-12"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-gray-700">5.0 Average Rating</span>
          </div>

          <div className="hidden h-6 w-[1px] bg-gray-300 md:block" />

          <div className="text-sm text-gray-600">
            <span className="font-bold text-[#1a1a1a]">100%</span> of clients would recommend
          </div>

          <div className="hidden h-6 w-[1px] bg-gray-300 md:block" />

          <div className="text-sm text-gray-600">
            <span className="font-bold text-[#1a1a1a]">Local</span> North Lakes business
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsTradies;


