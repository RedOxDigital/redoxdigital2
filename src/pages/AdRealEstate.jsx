import Layout from '../components/Layout';
import HeroAdRealEstate from '../components/ad-real-estate/HeroAdRealEstate';
import RealityCheckAdRealEstate from '../components/ad-real-estate/RealityCheckAdRealEstate';
import SolutionAdRealEstate from '../components/ad-real-estate/SolutionAdRealEstate';
import DoneForYouAdRealEstate from '../components/ad-real-estate/DoneForYouAdRealEstate';
import TechIntegrationAdRealEstate from '../components/ad-real-estate/TechIntegrationAdRealEstate';
import SocialProofAdRealEstate from '../components/ad-real-estate/SocialProofAdRealEstate';
import OfferAdRealEstate from '../components/ad-real-estate/OfferAdRealEstate';
import FAQAdRealEstate from '../components/ad-real-estate/FAQAdRealEstate';
import FinalCTAAdRealEstate from '../components/ad-real-estate/FinalCTAAdRealEstate';

const AdRealEstate = () => {
  // Primary structured data: Service + LocalBusiness
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.redoxdigital.com.au/google-ads-tradies-north-lakes#service',
        name: 'Google Ads for Tradies North Lakes',
        serviceType: 'Google Ads Management for Tradies',
        description:
          'We build the 6 page Sitelink Engine that doubles your Google Ad size. On site photo shoots, microsite builds, and job software integration for plumbers, electricians, and builders in North Lakes.',
        provider: {
          '@id': 'https://www.redoxdigital.com.au/#organization',
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'North Lakes',
            containedInPlace: {
              '@type': 'State',
              name: 'Queensland',
            },
          },
          {
            '@type': 'City',
            name: 'Mango Hill',
          },
          {
            '@type': 'City',
            name: 'Griffin',
          },
          {
            '@type': 'City',
            name: 'Redcliffe',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'North Brisbane',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Moreton Bay Region',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Ad Real Estate Overhaul Package',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'On Site Strategy and Photo Shoot',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '6 Page High Speed Microsite Build',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Google Ads Account Restructure with Sitelink Extensions',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'ServiceM8 Simpro Tradify Integration',
              },
            },
          ],
        },
        offers: {
          '@type': 'Offer',
          name: 'Ad Real Estate Overhaul',
          price: '2500',
          priceCurrency: 'AUD',
          description:
            'Complete Google Ads setup for tradies including site visit, 6 page microsite, ad restructure, and job software integration',
          availability: 'https://schema.org/LimitedAvailability',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://www.redoxdigital.com.au/#organization',
        name: 'Red Ox Digital',
        url: 'https://www.redoxdigital.com.au',
        logo: 'https://www.redoxdigital.com.au/ROD-logo.svg',
        image: 'https://www.redoxdigital.com.au/ROD-logo.svg',
        telephone: '+61493992661',
        email: 'hello@redoxdigital.com.au',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'North Lakes',
          addressLocality: 'North Lakes',
          addressRegion: 'QLD',
          postalCode: '4509',
          addressCountry: 'AU',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -27.2408,
          longitude: 153.0119,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '17:00',
        },
        sameAs: [
          'https://www.facebook.com/redoxdigital',
          'https://www.linkedin.com/company/redoxdigital',
        ],
        priceRange: '$$',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.redoxdigital.com.au/google-ads-tradies-north-lakes#webpage',
        url: 'https://www.redoxdigital.com.au/google-ads-tradies-north-lakes',
        name: 'Google Ads for Tradies North Lakes | Double Your Ad Size | Red Ox Digital',
        description:
          'Stop paying for invisible ads. We build the 6 page Sitelink Engine that doubles your Google Ad size for tradies in North Lakes and North Brisbane.',
        isPartOf: {
          '@id': 'https://www.redoxdigital.com.au/#website',
        },
        about: {
          '@id': 'https://www.redoxdigital.com.au/google-ads-tradies-north-lakes#service',
        },
        provider: {
          '@id': 'https://www.redoxdigital.com.au/#organization',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do I need to scrap my old website?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. Your old website stays where it is. We build a new 6 page microsite that runs alongside it. This new site is built just for your Google Ads. Think of it as a high speed engine that powers your ads while your main site does its own thing.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why do you only work in North Lakes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Because we actually show up. We drive to your job site and take the photos ourselves. We are not sitting in a call centre overseas. We are down the road. That local touch is what makes your ads feel real to Google and to your customers.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long until I see results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most tradies see their ad size double within 2 weeks of launch. The pages go live fast because we handle everything. You do not need to send us files or write anything. We come to you, we build it, we launch it.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is this worth it if I already run Google Ads?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. If you are already spending money on ads, this makes that money work harder. You pay the same cost per click but get double the screen space. Your competitors get pushed down. More people see you first and call you first.',
            },
          },
          {
            '@type': 'Question',
            name: 'What trades do you work with?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We work with plumbers, electricians, roofers, builders, and other trade businesses in North Lakes and North Brisbane. If you do jobs for homes or businesses and want more local leads, we can help.',
            },
          },
        ],
      },
    ],
  };

  return (
    <Layout
      title="Google Ads for Tradies North Lakes | Double Your Ad Size | Red Ox Digital"
      description="Stop paying for invisible ads. We build the 6 page Sitelink Engine that doubles your Google Ad size for tradies in North Lakes. On site photo shoots, microsite builds, ServiceM8 integration."
      canonical="https://www.redoxdigital.com.au/google-ads-tradies-north-lakes"
      keywords="Google Ads for Tradies, Google Ads for Tradies North Lakes, Web Design for Tradies North Brisbane, ServiceM8 Marketing Integration, Local SEO North Lakes, Plumber Marketing Agency, Electrician Lead Generation, Google Ads Management for Tradies"
      showPreloader={false}
      structuredData={structuredData}
    >
      <HeroAdRealEstate />
      <RealityCheckAdRealEstate />
      <SolutionAdRealEstate />
      <DoneForYouAdRealEstate />
      <TechIntegrationAdRealEstate />
      <SocialProofAdRealEstate />
      <OfferAdRealEstate />
      <FAQAdRealEstate />
      <FinalCTAAdRealEstate />
    </Layout>
  );
};

export default AdRealEstate;

