import Layout from '../components/Layout';
import HeroHome from '../components/HeroHome';
import ProblemHome from '../components/ProblemHome';
import ServicesHome from '../components/ServicesHome';
import ClientHome from '../components/ClientHome';
import ThisYouHome from '../components/ThisYouHome';
import HowItWorksHome from '../components/HowItWorksHome';
import FAQHome from '../components/FAQHome';

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Red Ox Digital",
    "image": "https://redoxdigital.com.au/ROD-logo.svg",
    "description": "Small Business Digital Marketing Consultant in North Lakes. We help you find high-value clients and grow through digital marketing and strategic media content.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "North Lakes",
      "addressRegion": "QLD",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.2408,
      "longitude": 153.0119
    },
    "url": "https://redoxdigital.com.au/",
    "telephone": "+61 493 992 661",
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/redoxdigital",
      "https://www.linkedin.com/company/redoxdigital"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "10"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -27.2408,
        "longitude": 153.0119
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing Consulting",
            "description": "Small business digital marketing strategy and consulting services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Strategic Media Content",
            "description": "Content creation and media strategy for small businesses"
          }
        }
      ]
    }
  };

  return (
    <Layout 
      title="Small Business Digital Marketing Consultant North Lakes, Red Ox Digital"
      description="Red Ox Digital - Small Business Digital Marketing Consultant in North Lakes. We help you find high-value clients and grow."
      canonical="https://redoxdigital.com.au/"
      structuredData={structuredData}
    >
      <HeroHome />
      <ProblemHome />
      <ServicesHome />
      <ClientHome />
      <ThisYouHome />
      <HowItWorksHome />
      <FAQHome />
    </Layout>
  );
};

export default Home;
