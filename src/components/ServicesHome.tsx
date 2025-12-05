import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Eye, MousePointer, DollarSign, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type ServiceStep = {
  id: string;
  title: string;
  sub: string;
  icon: ReactNode;
  desc: string;
  img: string;
  link: string;
  linkText: string;
};

const MobileCard = ({
  step,
  index,
  total,
  progress,
}: {
  step: ServiceStep;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) => {
  // Calculate ranges for this card
  const rangeStep = 1 / (total - 1);
  const start = (index - 1) * rangeStep;
  const end = index * rangeStep;

  const nextStart = index * rangeStep;
  const nextEnd = (index + 1) * rangeStep;

  const isFirst = index === 0;
  const isLast = index === total - 1;

  // Entrance animation (Y position)
  const y = useTransform(progress, [start, end], ['110vh', '0vh']);

  // Exit/Background animation (Scale & Brightness)
  const scale = useTransform(progress, [nextStart, nextEnd], [1, 0.9]);

  const brightness = useTransform(progress, [nextStart, nextEnd], [1, 0.5]);

  // Convert brightness value to filter string - must be called at top level
  const brightnessFilter = useTransform(brightness, (b) => `brightness(${b})`);

  // Color Animations (Highlight -> Dimmed)
  const highlightTrigger = end - rangeStep * 0.3;
  const colorInputRange = [start, highlightTrigger, end, nextEnd];

  // Grayscale for Image
  const grayscale = useTransform(progress, colorInputRange, ['100%', '100%', '0%', '100%']);

  // Convert grayscale value to filter string - must be called at top level
  const grayscaleFilter = useTransform(grayscale, (g) => `grayscale(${g})`);

  // Text Colors
  const accentColor = useTransform(progress, colorInputRange, [
    '#ffffff',
    '#ffffff',
    '#E02020',
    '#ffffff',
  ]);

  return (
    <motion.div
      style={{
        y: isFirst ? 0 : y,
        scale: isLast ? 1 : scale,
        filter: isLast ? 'none' : brightnessFilter,
        zIndex: index,
        transformOrigin: 'top center',
      }}
      className="absolute left-0 right-0 top-[15vh] mx-auto flex h-[70vh] w-[90%] max-w-md flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-gray-900 shadow-2xl"
    >
      {/* Background Image */}
      <motion.div className="absolute inset-0 z-0" style={{ filter: grayscaleFilter }}>
        <img
          src={step.img}
          alt={step.title}
          loading="lazy"
          width="800"
          height="1200"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Background Number */}
      <span className="absolute right-4 top-4 z-10 select-none font-syne text-8xl font-bold text-white/10">
        {step.id}
      </span>

      <div className="relative z-20 flex h-full flex-col justify-between p-8">
        <div>
          <motion.div
            style={{ color: isLast ? '#E02020' : accentColor }}
            className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm"
          >
            {step.icon}
          </motion.div>
          <motion.h4
            style={{ color: isLast ? '#E02020' : accentColor }}
            className="mb-2 font-syne text-3xl font-bold uppercase"
          >
            {step.title}
          </motion.h4>
          <p className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-300">
            {step.sub}
          </p>
        </div>

        <div>
          <div className="mb-6 h-[1px] w-full bg-white/20" />
          <p className="text-2xl font-medium leading-relaxed text-gray-200">{step.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const MobileProcess = ({ steps }: { steps: ServiceStep[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-[#F2F2F2]">
        {steps.map((step, i) => (
          <MobileCard
            key={step.id}
            step={step}
            index={i}
            total={steps.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};

const ServicesHome = () => {
  const steps: ServiceStep[] = [
    {
      id: '01',
      title: 'VIEWS',
      sub: 'I need more traffic.',
      icon: <Eye className="h-6 w-6" />,
      desc: 'You have a great offer, but nobody knows you exist. As your digital marketing consultant, I help you get found. We stop chasing "likes" and use strategic media content to target locals in North Lakes who are ready to buy.',
      img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop',
      link: '/tradies-seo-north-lakes',
      linkText: 'SEO for Tradies',
    },
    {
      id: '02',
      title: 'LEADS',
      sub: 'I have traffic, but no leads.',
      icon: <MousePointer className="h-6 w-6" />,
      desc: "People visit your website, but they aren't calling. We fix this common small business problem. We build specific pages designed to capture contact details, turning curious visitors into real enquiries for your business.",
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
      link: '/web-design-north-lakes',
      linkText: 'Web Design',
    },
    {
      id: '03',
      title: 'SALES',
      sub: 'I have leads, but no sales.',
      icon: <DollarSign className="h-6 w-6" />,
      desc: 'You are chasing leads who stop replying. We help you close the deal. We use strategic media content, like video and email, to follow up automatically. This warms up your prospects until they are ready to pay.',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
      link: '/facebook-ads-north-lakes',
      linkText: 'Facebook Ads',
    },
    {
      id: '04',
      title: 'ADVOCATES',
      sub: 'I have sales, but no reviews.',
      icon: <Users className="h-6 w-6" />,
      desc: 'You do great work, but your Google profile looks empty. We help your North Lakes business build trust. We automate the "ask" to get you the 5-star reviews that bring in your next customer.',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
      link: '/google-review-request-email-template',
      linkText: 'Free Review Templates',
    },
  ];

  return (
    <>
      {/* Desktop Grid Layout */}
      <section id="services" className="hidden bg-[#F2F2F2] px-12 py-24 text-[#1a1a1a] md:block">
        <div className="mb-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-[2px] w-12 bg-[#E02020]"></div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#E02020]">
              THE PROCESS
            </span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-syne text-4xl font-bold uppercase leading-tight md:text-5xl lg:text-6xl"
          >
            WE MOVE STRANGERS TO{' '}
            <span className="animate-gradient bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% bg-clip-text text-transparent">
              CUSTOMERS.
            </span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl text-sm text-gray-600"
          >
            We don't force you into a pre-set package. We diagnose exactly where your growth is
            stuck. Read the list below: where is your bottleneck? We prioritise the fix that drives
            immediate profit.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative flex min-h-[500px] flex-col justify-between overflow-hidden rounded-2xl"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={step.img}
                  alt={step.title}
                  loading="lazy"
                  width="800"
                  height="1200"
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/70 transition-colors duration-500 group-hover:bg-black/40" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between p-8">
                {/* Background Number */}
                <span className="absolute right-4 top-4 select-none font-syne text-8xl font-bold text-white/5 transition-colors duration-500 group-hover:text-white/10">
                  {step.id}
                </span>

                <div className="relative z-10">
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-[#E02020]">
                    {step.icon}
                  </div>
                  <h4 className="mb-2 font-syne text-2xl font-bold uppercase text-white transition-colors group-hover:text-[#E02020]">
                    {step.title}
                  </h4>
                  <p className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-400">
                    {step.sub}
                  </p>
                </div>

                <div className="relative z-10">
                  <div className="mb-6 h-[1px] w-full bg-white/20 transition-colors group-hover:bg-[#E02020]/50" />
                  <p className="mb-6 text-sm leading-relaxed text-gray-300 transition-colors group-hover:text-white">
                    {step.desc}
                  </p>
                  <Link
                    to={step.link}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/70 transition-colors group-hover:text-[#E02020]"
                  >
                    {step.linkText}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mobile Stack Layout */}
      <div id="services-mobile" className="bg-[#F2F2F2] text-[#1a1a1a] md:hidden">
        <div className="px-6 pb-12 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center gap-4"
          >
            <div className="h-[2px] w-12 bg-[#E02020]"></div>
            <span className="text-sm font-bold uppercase tracking-widest text-[#E02020]">
              THE PROCESS
            </span>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-syne text-5xl font-bold uppercase leading-[0.9] md:text-4xl"
          >
            WE MOVE STRANGERS TO{' '}
            <span className="animate-gradient bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% bg-clip-text text-transparent">
              CUSTOMERS.
            </span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm text-gray-600"
          >
            We don't force you into a pre-set package. We diagnose exactly where your growth is
            stuck. Read the list below: where is your bottleneck? We prioritise the fix that drives
            immediate profit.
          </motion.p>
        </div>

        <MobileProcess steps={steps} />
      </div>
    </>
  );
};

export default ServicesHome;
