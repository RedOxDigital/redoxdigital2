import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const About = () => {
  const title = 'About Red Ox Digital | North Lakes Web & Ads';
  const description =
    'Meet Red Ox Digital. We are a North Lakes-based team that builds 48-hour websites, tradie SEO, and paid ads that actually get seen. Local, hands-on, and obsessed with fast execution.';
  const keywords =
    'Red Ox Digital about, North Lakes web design team, North Lakes marketing consultant, digital agency North Lakes';

  return (
    <Layout
      title={title}
      description={description}
      canonical="https://www.redoxdigital.com.au/about"
      keywords={keywords}
      showPreloader={false}
    >
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.h1
            className="mb-8 font-syne text-4xl font-bold uppercase text-gray-900 md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Red Ox Digital
          </motion.h1>

          <motion.div
            className="space-y-6 text-lg leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <p>
              We are a North Lakes-based studio that builds fast, search-ready pages for local
              businesses. You will not get generic templates or overseas hand-offs. We show up with
              cameras, write the copy, and publish within 48 hours so you start ranking and
              converting without a long project timeline.
            </p>
            <p>
              Our core stack is React, TypeScript, Vite, and Tailwind. That means every page we ship
              is performant, mobile-first, and easy to extend. We also wire in analytics, structured
              data, and security headers by default so crawlers and customers see the same
              high-quality experience.
            </p>
            <p>
              Red Ox Digital is hands-on by design. We work with one tradie per trade to avoid
              conflicts, and we prioritise in-person shoots around North Lakes, Dakabin, Mango Hill,
              Griffin, and the broader Moreton Bay region. When you call, you get the people who
              actually design, write, and launch your campaigns.
            </p>
            <p>
              Whether you need a 6-page sitelink engine for Google Ads, a review automation flow,
              or a new brand site, we focus on speed, clarity, and local trust signals. That mix is
              what keeps our pages indexable, clickable, and profitable.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
