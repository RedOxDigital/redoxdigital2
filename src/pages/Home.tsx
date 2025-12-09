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
      'Web design and digital marketing agency based in Dakabin, serving North Lakes, Mango Hill, Kallangur, and Petrie. We build fast websites, boost local SEO, and create media that helps your business stand out.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Dakabin',
      addressRegion: 'QLD',
      postalCode: '4503',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -27.2008,
      longitude: 152.9958,
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
    areaServed: [
      {
        '@type': 'City',
        name: 'Dakabin',
        '@id': 'https://en.wikipedia.org/wiki/Dakabin,_Queensland',
      },
      {
        '@type': 'City',
        name: 'North Lakes',
        '@id': 'https://en.wikipedia.org/wiki/North_Lakes,_Queensland',
      },
      {
        '@type': 'City',
        name: 'Mango Hill',
        '@id': 'https://en.wikipedia.org/wiki/Mango_Hill,_Queensland',
      },
      {
        '@type': 'City',
        name: 'Kallangur',
        '@id': 'https://en.wikipedia.org/wiki/Kallangur,_Queensland',
      },
      {
        '@type': 'City',
        name: 'Petrie',
        '@id': 'https://en.wikipedia.org/wiki/Petrie,_Queensland',
      },
    ],
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
            areaServed: 'Dakabin, North Lakes, Mango Hill, Kallangur, Petrie, QLD',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Local SEO Services',
            description: 'Search engine optimization to help local businesses get found by customers in their area',
            areaServed: 'Dakabin, North Lakes, Mango Hill, Kallangur, Petrie, QLD',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Professional Media Production',
            description: 'Photos and videos that build trust and help your business stand out',
            areaServed: 'Dakabin, North Lakes, Mango Hill, Kallangur, Petrie, QLD',
          },
        },
      ],
    },
  };

  return (
    <Layout
      title="Web Designer Dakabin, North Lakes & Mango Hill | Red Ox Digital"
      description="Web design and digital marketing agency in Dakabin serving North Lakes, Mango Hill, Kallangur, and Petrie. Fast websites, local SEO, and media that gets you customers."
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
