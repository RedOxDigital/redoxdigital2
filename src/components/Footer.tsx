import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ContactFormModal from './ContactFormModal';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#111] px-6 py-24 text-[#F2F2F2] md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row md:items-end">
        <div>
          <h2 className="mb-4 font-syne text-4xl font-bold uppercase md:text-5xl">
            LET'S <span className="text-[#E02020]">CHARGE</span>
          </h2>
          <p className="max-w-md text-lg text-gray-400">
            Ready to dominate the North Lakes market? Let's build a strategy that actually converts.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="group flex w-full items-center justify-center gap-4 rounded-full bg-white px-12 py-6 font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-[#E02020] hover:text-white md:w-auto"
        >
          Start Project <ArrowRight className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Footer Links Section */}
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/web-design-north-lakes"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Web Design North Lakes
              </Link>
            </li>
            <li>
              <Link
                to="/tradies-seo-north-lakes"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                SEO for Tradies
              </Link>
            </li>
            <li>
              <Link
                to="/facebook-ads-north-lakes"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Facebook Ads Management
              </Link>
            </li>
            <li>
              <Link
                to="/google-ads-tradies-north-lakes"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Google Ads for Tradies
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
            Free Resources
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/google-review-request-email-template"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Google Review Email Templates
              </Link>
            </li>
            <li>
              <Link
                to="/google-review-request-email-template#sms"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                SMS Review Request Scripts
              </Link>
            </li>
            <li>
              <Link
                to="/google-review-request-email-template#xero"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                Xero Review Automation
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-sm text-gray-400 transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:info@redoxdigital.com.au"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                info@redoxdigital.com.au
              </a>
            </li>
            <li>
              <a
                href="tel:0493992661"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                0493 992 661
              </a>
            </li>
            <li>
              <span className="text-sm text-gray-500">Dakabin, QLD 4503</span>
            </li>
          </ul>
        </div>
      </div>

      <footer className="mt-16 flex flex-col gap-8 border-t border-white/10 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center text-xs uppercase tracking-widest text-gray-500 md:flex-row md:gap-0 md:text-left">
          <div className="flex flex-col gap-2">
            <p>© 2024 Red Ox Digital. All Rights Reserved.</p>
            <p className="normal-case tracking-normal opacity-60">
              Based in Dakabin. Providing Small Business Internet Marketing Consulting to businesses
              across North Lakes, Mango Hill, and the Moreton Bay Region.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:gap-6">
            <a
              href="mailto:info@redoxdigital.com.au"
              className="transition-colors hover:text-white"
            >
              info@redoxdigital.com.au
            </a>
            <a href="tel:0493992661" className="transition-colors hover:text-white">
              0493 992 661
            </a>
          </div>
        </div>
        <div className="flex justify-center pt-4">
          <Link to="/" className="transition-opacity hover:opacity-100">
            <img
              src="/ROD-logo.svg"
              alt="Red Ox Digital Logo"
              className="h-12 w-auto opacity-80 transition-opacity hover:opacity-100 md:h-16"
            />
          </Link>
        </div>
      </footer>
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Footer;
