import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactFormModal from './ContactFormModal';

interface NavLink {
  label: string;
  href?: string;
  isContact?: boolean;
  isExternal?: boolean;
  children?: NavLink[];
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/', isExternal: true },
  { label: 'Web Design', href: '/web-design-north-lakes', isExternal: true },
  { label: 'SEO for Tradies', href: '/tradies-seo-north-lakes', isExternal: true },
  { label: 'Facebook Ads', href: '/facebook-ads-north-lakes', isExternal: true },
  { label: 'Google Ads', href: '/google-ads-tradies-north-lakes', isExternal: true },
  { label: 'Free Tools', href: '/google-review-request-email-template', isExternal: true },
  { label: 'Contact', isContact: true },
];

const FullScreenMenu = ({
  isOpen,
  onClose,
  onContactClick,
}: {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}) => {
  const handleLinkClick = (item: NavLink) => {
    onClose();

    if (item.isContact) {
      // Small delay to allow menu animation to start before opening modal
      setTimeout(() => {
        onContactClick();
      }, 300);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#0F0F0F] text-[#F2F2F2]"
        >
          <div className="flex flex-col gap-6 text-center">
            {NAV_LINKS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="overflow-hidden"
              >
                {item.isExternal ? (
                  <Link
                    to={item.href!}
                    onClick={onClose}
                    className="font-syne text-5xl font-bold uppercase transition-colors duration-300 hover:text-[#E02020] md:text-8xl"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleLinkClick(item)}
                    className={`font-syne text-5xl font-bold uppercase transition-colors duration-300 md:text-8xl ${
                      item.isContact ? 'text-[#E02020] hover:text-white' : 'hover:text-[#E02020]'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
          <div className="absolute bottom-12 flex flex-col items-center gap-2">
            <span className="text-sm uppercase tracking-widest text-gray-500">
              North Lakes, QLD
            </span>
            <div className="h-12 w-px bg-gray-800"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Logo - separate layer, no blend mode, stays red */}
      <Link
        to="/"
        className="pointer-events-auto fixed left-6 top-6 z-50 transition-opacity hover:opacity-80 md:left-12 md:top-8"
      >
        <img src="/favicon.svg" alt="Red Ox Digital" className="h-10 w-10 object-contain" />
      </Link>

      {/* Nav text and hamburger - with blend mode */}
      <nav className="pointer-events-none fixed top-0 z-50 flex w-full items-start justify-between px-6 py-6 text-white mix-blend-difference md:px-12 md:py-8">
        <Link
          to="/"
          className="pointer-events-auto flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          {/* Spacer for logo */}
          <div className="h-10 w-10" />
          <div className="flex flex-col">
            <span className="font-syne text-2xl font-bold uppercase leading-none tracking-tighter">
              Red Ox
            </span>
            <span className="text-[10px] uppercase tracking-widest opacity-70 leading-none">
              Digital
            </span>
          </div>
        </Link>

        <button
          onClick={toggleMenu}
          className="group pointer-events-auto flex cursor-pointer flex-col items-end gap-1.5"
        >
          <div
            className={`h-[2px] w-8 bg-current transition-all duration-300 ${isMenuOpen ? 'translate-y-[5px] rotate-45' : ''}`}
          />
          <div
            className={`h-[2px] w-8 bg-current transition-all duration-300 ${isMenuOpen ? '-translate-y-[5px] -rotate-45' : ''}`}
          />
        </button>
      </nav>
      <FullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onContactClick={() => setIsContactOpen(true)}
      />
      <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
};

export default Navbar;
