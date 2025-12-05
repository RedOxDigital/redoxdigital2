import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

type Qualifier = {
  id: string;
  title: string;
  desc: ReactNode;
};

const QUALIFIERS_DATA: Qualifier[] = [
  {
    id: '01',
    title: 'You Have Success',
    desc: "You aren't a startup looking for your first dollar. You have a business that works, but you are ready to grow. You want to take your current momentum and scale it.",
  },
  {
    id: '02',
    title: 'You Share Data',
    desc: 'You are willing to be open. We need to see your numbers to understand what success looks like for you. We use your data to find the wins you are missing.',
  },
  {
    id: '03',
    title: 'You Are in Our Sectors',
    desc: (
      <>
        You are in Health,{' '}
        <Link
          to="/tradies-seo-north-lakes"
          className="relative z-50 underline decoration-[#E02020] transition-colors hover:text-[#E02020]"
        >
          Trades
        </Link>
        , or Professional Services. We don't guess with your industry; we specialise in it and know
        exactly how to get results.
      </>
    ),
  },
];

const MobileCard = ({
  qualifier,
  index,
  total,
  progress,
}: {
  qualifier: Qualifier;
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
      className="absolute left-0 right-0 top-[15vh] mx-auto flex h-[60vh] w-[90%] max-w-md flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#1a1a1a] shadow-2xl"
    >
      {/* Background Number */}
      <span className="pointer-events-none absolute left-4 top-0 z-10 select-none font-syne text-[8rem] font-bold text-white/5">
        {qualifier.id}
      </span>

      <div className="relative z-20 flex h-full flex-col justify-between p-8">
        <div className="flex justify-end">
          <motion.div
            style={{
              borderColor: isLast ? '#E02020' : accentColor,
              backgroundColor: isLast ? '#E02020' : 'transparent',
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300"
          >
            <Plus className="h-5 w-5 text-white" />
          </motion.div>
        </div>

        <div>
          <motion.h4
            style={{ color: isLast ? '#E02020' : accentColor }}
            className="mb-4 font-syne text-4xl font-bold uppercase"
          >
            {qualifier.title}
          </motion.h4>
          <div className="mb-6 h-[1px] w-full bg-white/10" />
          <p className="text-lg font-medium leading-relaxed text-gray-300">{qualifier.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const MobileQualifiers = ({ qualifiers }: { qualifiers: Qualifier[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="relative h-[300vh] md:hidden">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-white">
        {qualifiers.map((q, i) => (
          <MobileCard
            key={q.id}
            qualifier={q}
            index={i}
            total={qualifiers.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};

const ThisYouHome = () => {
  return (
    <section className="border-t border-black/10 bg-white py-12 text-black md:py-32">
      <div className="mb-16 flex flex-col gap-8 px-6 md:mb-20 md:flex-row md:gap-12 md:px-12">
        <h3 className="pb-2 font-syne text-6xl font-bold uppercase leading-[1] tracking-tight md:pb-0 md:text-5xl md:leading-[0.8] lg:text-6xl">
          IS THIS <br />{' '}
          <span className="inline-block animate-gradient bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-[#E02020] bg-300% bg-clip-text italic text-transparent">
            YOU?
          </span>
        </h3>
        <div className="flex items-end pb-4">
          <p className="max-w-md border-l-2 border-[#E02020] pl-4 text-xs uppercase tracking-widest text-gray-500">
            The Filter. <br /> I don't work with everyone. To get these results, we need to be the
            right fit.
          </p>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden grid-cols-1 border-t border-black px-6 md:grid md:grid-cols-3 md:px-0">
        {QUALIFIERS_DATA.map((q, i) => (
          <div
            key={i}
            className="group relative flex min-h-[350px] flex-col justify-between border-b border-black p-8 transition-colors duration-500 hover:bg-[#1a1a1a] hover:text-[#f2f2f2] md:min-h-[450px] md:border-b-0 md:border-r md:p-12"
          >
            {/* Giant Background Number */}
            <span className="pointer-events-none absolute left-0 top-0 -translate-x-4 -translate-y-8 select-none font-syne text-[8rem] font-bold leading-none opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.15] md:text-[12rem]">
              {q.id}
            </span>

            <div className="relative z-10 flex justify-end">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-current transition-all duration-300 group-hover:border-[#E02020] group-hover:bg-[#E02020]">
                <Plus
                  className={`h-5 w-5 transition-transform duration-500 group-hover:rotate-45`}
                />
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h4 className="mb-4 font-syne text-2xl font-bold uppercase transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#E02020] md:mb-6 md:text-3xl">
                {q.title}
              </h4>
              <div className="hidden h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:h-auto group-hover:opacity-100 md:block">
                <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 md:text-base">
                  {q.desc}
                </p>
              </div>
              {/* Visible Mobile Description */}
              <p className="mt-2 text-sm leading-relaxed text-gray-600 group-hover:text-gray-300 md:hidden">
                {q.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Stacked Cards */}
      <MobileQualifiers qualifiers={QUALIFIERS_DATA} />
    </section>
  );
};

export default ThisYouHome;
