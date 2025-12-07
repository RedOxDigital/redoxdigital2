import Layout from '../components/Layout';
import HeroFacebookAds from '../components/facebookads/HeroFacebookAds';
import EmpathyFacebookAds from '../components/facebookads/EmpathyFacebookAds';
import MethodologyFacebookAds from '../components/facebookads/MethodologyFacebookAds';
import ProcessFacebookAds from '../components/facebookads/ProcessFacebookAds';
import PricingFacebookAds from '../components/facebookads/PricingFacebookAds';
import FAQFacebookAds from '../components/facebookads/FAQFacebookAds';
import CTAFacebookAds from '../components/facebookads/CTAFacebookAds';

const FacebookAds = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Facebook Ads Management',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Red Ox Digital',
      url: 'https://www.redoxdigital.com.au',
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
    },
    areaServed: {
      '@type': 'City',
      name: 'North Lakes',
    },
    description:
      'Facebook Ads Specialist in North Lakes. We help local businesses grow with Performance Creative ads and strategic media.',
    offers: {
      '@type': 'Offer',
      description:
        'Professional Facebook Ads Management services including creative production, strategy, and daily optimisation',
    },
  };

  return (
    <Layout
      title="Facebook Ads Specialist North Lakes | Red Ox Digital"
      description="Facebook Ads Specialist in North Lakes. We help local businesses grow with Performance Creative ads and strategic media."
      canonical="https://www.redoxdigital.com.au/facebook-ads-north-lakes"
      keywords="Facebook Ads Specialist, North Lakes, Performance Creative Agency, Facebook Marketing Expert"
      showPreloader={false}
      structuredData={structuredData}
    >
      <HeroFacebookAds />
      <EmpathyFacebookAds />
      <MethodologyFacebookAds />
      <ProcessFacebookAds />
      <PricingFacebookAds />
      <FAQFacebookAds />
      <CTAFacebookAds />
    </Layout>
  );
};

export default FacebookAds;
