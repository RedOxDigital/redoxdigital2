import Layout from '../components/Layout';
import HeroNorthLakes from '../components/north-lakes-web-design/HeroNorthLakes';
import PivotNorthLakes from '../components/north-lakes-web-design/PivotNorthLakes';
import HowItWorksNorthLakes from '../components/north-lakes-web-design/HowItWorksNorthLakes';
import VisualProofNorthLakes from '../components/north-lakes-web-design/VisualProofNorthLakes';
import AuthorityNorthLakes from '../components/north-lakes-web-design/AuthorityNorthLakes';
import PricingNorthLakes from '../components/north-lakes-web-design/PricingNorthLakes';
import LocalTrustNorthLakes from '../components/north-lakes-web-design/LocalTrustNorthLakes';
import FAQNorthLakes from '../components/north-lakes-web-design/FAQNorthLakes';
import FinalCTANorthLakes from '../components/north-lakes-web-design/FinalCTANorthLakes';

const NorthLakesWebDesign = () => {
  // Structured Data for SEO - LocalBusiness + Service + FAQ Schema
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      // Local Business Schema
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.redoxdigital.com.au/#localbusiness',
        name: 'Red Ox Digital - Web Design North Lakes',
        image: 'https://www.redoxdigital.com.au/ROD-logo.svg',
        description:
          'Professional web design services for North Lakes businesses. We visit your shop, shoot professional photos, and build your website in 48 hours. Based in Dakabin, serving the Moreton Bay region.',
        url: 'https://www.redoxdigital.com.au/web-design-north-lakes',
        telephone: '+61 493 992 661',
        email: 'hello@redoxdigital.com.au',
        priceRange: '$1497 - $3997',
        currenciesAccepted: 'AUD',
        paymentAccepted: 'Cash, Credit Card, Bank Transfer',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Dakabin',
          addressLocality: 'Dakabin',
          addressRegion: 'QLD',
          postalCode: '4503',
          addressCountry: 'AU',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -27.2275,
          longitude: 152.9878,
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'North Lakes',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: -27.2408,
              longitude: 153.0119,
            },
          },
          {
            '@type': 'City',
            name: 'Dakabin',
          },
          {
            '@type': 'City',
            name: 'Mango Hill',
          },
          {
            '@type': 'City',
            name: 'Kallangur',
          },
          {
            '@type': 'City',
            name: 'Griffin',
          },
          {
            '@type': 'City',
            name: 'Petrie',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Moreton Bay Region',
          },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
          },
        ],
        sameAs: [
          'https://www.facebook.com/redoxdigital',
          'https://www.linkedin.com/company/redoxdigital',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: '10',
          bestRating: '5',
          worstRating: '1',
        },
      },
      // Service Schema - Web Design Service
      {
        '@type': 'Service',
        '@id': 'https://www.redoxdigital.com.au/web-design-north-lakes/#service',
        serviceType: 'Web Design',
        name: '48-Hour Web Design North Lakes',
        description:
          'Professional website design service for North Lakes small businesses. Includes on-site photography, copywriting, and 48-hour delivery. No DIY homework required.',
        provider: {
          '@id': 'https://www.redoxdigital.com.au/#localbusiness',
        },
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: -27.2408,
            longitude: 153.0119,
          },
          geoRadius: '30000',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Web Design Packages',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Basic Web Design Package',
              description:
                'Single page scroll website with 5 professional photos, launched in 48 hours',
              price: '1497',
              priceCurrency: 'AUD',
              itemOffered: {
                '@type': 'Service',
                name: 'Basic Web Design',
              },
            },
            {
              '@type': 'Offer',
              name: 'Pro Web Design Package',
              description:
                'Up to 5 pages with 20 professional photos, basic SEO setup, launched in 48 hours',
              price: '2497',
              priceCurrency: 'AUD',
              itemOffered: {
                '@type': 'Service',
                name: 'Pro Web Design',
              },
            },
            {
              '@type': 'Offer',
              name: 'Elite Web Design Package',
              description:
                'Up to 5 pages with 20 professional photos, cinematic video, drone photography, launched in 48 hours',
              price: '3997',
              priceCurrency: 'AUD',
              itemOffered: {
                '@type': 'Service',
                name: 'Elite Web Design',
              },
            },
          ],
        },
      },
      // FAQ Schema
      {
        '@type': 'FAQPage',
        '@id': 'https://www.redoxdigital.com.au/web-design-north-lakes/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do I have to write the text for my website?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. We interview you for about 20 minutes and write all the copy for you. You just need to tell us about your business in your own words. We turn that into website content that sounds professional and brings in customers.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I update my website myself later?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We give you a simple guide that shows you how to make basic changes. Things like updating your phone number, adding new photos, or changing your hours. If you get stuck, we are a 5 minute drive away in Dakabin and happy to help.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why is there a 5 page limit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We build fast brochure websites for North Lakes businesses that need a professional online presence now. Five pages is enough for most small businesses: Home, About, Services, Gallery, and Contact. If you need a bigger site with 20 pages and advanced SEO, we can do that too, but that is a custom project.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is hosting included?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We set up your hosting for free using Vercel, which is one of the fastest and most reliable platforms for basic websites. You do not need to pay for hosting or worry about any technical setup. We handle everything.',
            },
          },
          {
            '@type': 'Question',
            name: 'What if I do not like the design?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You get to see your website before it goes live. If you want changes, just tell us. We want you to be proud of your new site. Small tweaks are included in the price. We do not go live until you are happy with how it looks.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you work with businesses outside North Lakes?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We are based in Dakabin and serve all of the Moreton Bay region. We regularly visit businesses in Mango Hill, Kallangur, Griffin, Petrie, and beyond. If you are within a 30 minute drive, we can come to you.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I pay?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We take a 50% deposit to book your visit. The other 50% is due when we finish the build and you approve the final design. We accept bank transfer and card payments.',
            },
          },
        ],
      },
      // BreadcrumbList Schema
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.redoxdigital.com.au/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Web Design North Lakes',
            item: 'https://www.redoxdigital.com.au/web-design-north-lakes',
          },
        ],
      },
      // WebPage Schema
      {
        '@type': 'WebPage',
        '@id': 'https://www.redoxdigital.com.au/web-design-north-lakes/#webpage',
        url: 'https://www.redoxdigital.com.au/web-design-north-lakes',
        name: 'Web Design North Lakes in 48 Hours | Red Ox Digital',
        description:
          'Professional web design for North Lakes businesses. We visit your shop, take photos, and build your website in 48 hours. Based in Dakabin. From $1,497.',
        inLanguage: 'en-AU',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.redoxdigital.com.au/#website',
          url: 'https://www.redoxdigital.com.au/',
          name: 'Red Ox Digital',
          publisher: {
            '@id': 'https://www.redoxdigital.com.au/#localbusiness',
          },
        },
        about: {
          '@id': 'https://www.redoxdigital.com.au/web-design-north-lakes/#service',
        },
        mainEntity: {
          '@id': 'https://www.redoxdigital.com.au/web-design-north-lakes/#service',
        },
      },
    ],
  };

  return (
    <Layout
      title="Web Design North Lakes in 48 Hours | Red Ox Digital"
      description="Professional web design for North Lakes businesses. We visit your shop, take professional photos, and build your website in 48 hours. Based in Dakabin. Packages from $1,497."
      canonical="https://www.redoxdigital.com.au/web-design-north-lakes"
      structuredData={structuredData}
      showPreloader={false}
    >
      {/* Hero Section */}
      <HeroNorthLakes />

      {/* Internal Monologue - The Pivot */}
      <PivotNorthLakes />

      {/* How It Works - 3 Steps */}
      <HowItWorksNorthLakes />

      {/* Visual Proof - Stock vs Real */}
      <VisualProofNorthLakes />

      {/* Authority Anchor */}
      <AuthorityNorthLakes />

      {/* Pricing */}
      <PricingNorthLakes />

      {/* Local Trust Map */}
      <LocalTrustNorthLakes />

      {/* FAQ */}
      <FAQNorthLakes />

      {/* Final CTA */}
      <FinalCTANorthLakes />
    </Layout>
  );
};

export default NorthLakesWebDesign;
