import Layout from '../components/Layout';
import HeroHome from '../components/HeroHome';
import WedoHome from '../components/WedoHome';
import ServicesHome from '../components/ServicesHome';
import ClientHome from '../components/ClientHome';
import ThisYouHome from '../components/ThisYouHome';
import HowItWorksHome from '../components/HowItWorksHome';
import FAQHome from '../components/FAQHome';

const Home = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Red Ox Digital',
    image: 'https://www.redoxdigital.com.au/ROD-logo.svg',
    description:
      'Website designer in North Lakes. We build fast websites, boost your local SEO, and create media that helps your business stand out and get more customers.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'North Lakes',
      addressRegion: 'QLD',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -27.2408,
      longitude: 153.0119,
    },
    url: 'https://www.redoxdigital.com.au/',
    telephone: '+61 493 992 661',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    sameAs: [
      'https://www.facebook.com/redoxdigital',
      'https://www.linkedin.com/company/redoxdigital',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '10',
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: -27.2408,
        longitude: 153.0119,
      },
      geoRadius: '50000',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Marketing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Local Web Design',
            description: 'Fast, mobile-first websites designed to convert visitors into customers',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Professional Media Production',
            description: 'Photos and videos that build trust and help your business stand out',
          },
        },
      ],
    },
  };

  return (
    <Layout
      title="Website Designer North Lakes | Local Web Design | Red Ox Digital"
      description="Website designer in North Lakes. We build fast websites, local SEO, and media that helps your business get found and win more customers."
      canonical="https://www.redoxdigital.com.au/"
      structuredData={structuredData}
    >
      <HeroHome />
      <WedoHome />
      <ServicesHome />
      <ClientHome />
      <ThisYouHome />
      <HowItWorksHome />
      <FAQHome />
    </Layout>
  );
};

export default Home;
