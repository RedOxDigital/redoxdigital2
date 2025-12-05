import Layout from '../components/Layout';
import HeroGoogleReview from '../components/google-reviews/HeroGoogleReview';
import HowToGoogleReview from '../components/google-reviews/HowToGoogleReview';
import EmailTemplatesGoogleReview from '../components/google-reviews/EmailTemplatesGoogleReview';
import SMSStrategyGoogleReview from '../components/google-reviews/SMSStrategyGoogleReview';
import XeroAutomationGoogleReview from '../components/google-reviews/XeroAutomationGoogleReview';

const GoogleReviewTemplate = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Google Review Request Email Template",
    "description": "Learn how to request Google reviews from customers with free email templates and SMS follow-up strategies. Plus get a free Xero automation tool.",
    "image": "https://redoxdigital.com.au/ROD-logo.svg",
    "totalTime": "PT5M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "AUD",
      "value": "0"
    },
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Google Business Profile"
      },
      {
        "@type": "HowToTool",
        "name": "Email Client"
      },
      {
        "@type": "HowToTool",
        "name": "Xero Accounting Software (optional)"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Get Your Google Review Link",
        "text": "Search for your business on Google and copy your direct review link from your Business Profile.",
        "position": 1
      },
      {
        "@type": "HowToStep",
        "name": "Choose an Email Template",
        "text": "Select from three proven email templates: Personal, Professional, or Feedback First.",
        "position": 2
      },
      {
        "@type": "HowToStep",
        "name": "Send Your Review Request",
        "text": "Customize the template with your business details and send to your customer.",
        "position": 3
      },
      {
        "@type": "HowToStep",
        "name": "Follow Up with SMS",
        "text": "If no response after 24 hours, send a polite text message as a backup.",
        "position": 4
      },
      {
        "@type": "HowToStep",
        "name": "Automate the Process",
        "text": "Use the free Xero automation tool to send review requests automatically when invoices are paid.",
        "position": 5
      }
    ],
    "author": {
      "@type": "Organization",
      "name": "Red Ox Digital",
      "url": "https://redoxdigital.com.au"
    },
    "datePublished": "2025-12-04",
    "dateModified": "2025-12-04"
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://redoxdigital.com.au/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Free Tools",
        "item": "https://redoxdigital.com.au/#tools"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Google Review Request Email Template",
        "item": "https://redoxdigital.com.au/google-review-request-email-template"
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Google review request email template?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Google review request email template is a pre-written email you send to customers asking them to leave a review on your Google Business Profile. It includes your direct review link and a polite request for feedback."
        }
      },
      {
        "@type": "Question",
        "name": "How do I get my Google review link?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Search for your business on Google, click 'Read Reviews' on your Knowledge Panel, then click 'Get more reviews' to copy your short review link (like g.page/r/yourcode)."
        }
      },
      {
        "@type": "Question",
        "name": "Should I ask for reviews via email or SMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use both. Email first, then SMS as a follow-up after 24 hours. Emails have about 20% open rates while SMS has 98% open rates. Using both channels maximizes your review collection."
        }
      },
      {
        "@type": "Question",
        "name": "When is the best time to ask for a Google review?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ask within 1-2 days after completing a job or service while the experience is fresh in the customer's mind. For the best results, send emails mid-week between 10am and 2pm."
        }
      },
      {
        "@type": "Question",
        "name": "Can I automate my review requests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can use automation tools that connect to your invoicing software like Xero. When you mark an invoice as paid, the tool automatically sends your review request email after a short delay."
        }
      }
    ]
  };

  // Combine all structured data schemas
  const combinedStructuredData = [structuredData, breadcrumbStructuredData, faqStructuredData];

  return (
    <Layout 
      title="Google Review Request Email Template + Free Xero Auto-Sender (2025)"
      description="Get our easy Google review request email templates. Plus, get a free automation that sends texts and emails directly from Xero. Copy, paste, and start collecting 5-star reviews today."
      canonical="https://redoxdigital.com.au/google-review-request-email-template"
      keywords="google review request email template, google review request template, email template asking for google reviews, asking for google reviews email template, review request email, get more google reviews"
      structuredData={combinedStructuredData}
    >
      <HeroGoogleReview />
      <HowToGoogleReview />
      <EmailTemplatesGoogleReview />
      <SMSStrategyGoogleReview />
      <XeroAutomationGoogleReview />
    </Layout>
  );
};

export default GoogleReviewTemplate;

