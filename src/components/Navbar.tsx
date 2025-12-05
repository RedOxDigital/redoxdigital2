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
  { label: "Home", href: "/", isExternal: true },
  { label: "Web Design", href: "/web-design-north-lakes", isExternal: true },
  { label: "SEO for Tradies", href: "/tradies-seo-north-lakes", isExternal: true },
  { label: "Facebook Ads", href: "/facebook-ads-north-lakes", isExternal: true },
  { label: "Google Ads", href: "/google-ads-tradies-north-lakes", isExternal: true },
  { label: "Free Tools", href: "/google-review-request-email-template", isExternal: true },
  { label: "Contact", isContact: true },
];

const FullScreenMenu = ({ 
  isOpen, 
  onClose,
  onContactClick 
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
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 bg-[#0F0F0F] z-40 flex flex-col justify-center items-center text-[#F2F2F2]"
        >
          <div className="flex flex-col gap-6 text-center">
            {NAV_LINKS.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="overflow-hidden"
              >
                {item.isExternal ? (
                  <Link 
                    to={item.href!}
                    onClick={onClose}
                    className="font-syne text-5xl md:text-8xl font-bold uppercase transition-colors duration-300 hover:text-[#E02020]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button 
                    onClick={() => handleLinkClick(item)}
                    className={`font-syne text-5xl md:text-8xl font-bold uppercase transition-colors duration-300 ${
                      item.isContact 
                        ? 'text-[#E02020] hover:text-white' 
                        : 'hover:text-[#E02020]'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
          <div className="absolute bottom-12 flex flex-col items-center gap-2">
              <span className="text-sm uppercase tracking-widest text-gray-500">North Lakes, QLD</span>
              <div className="w-px h-12 bg-gray-800"></div>
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
        <nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
            <Link to="/" className="flex flex-col pointer-events-auto hover:opacity-80 transition-opacity">
            <span className="font-bold text-2xl tracking-tighter uppercase font-syne leading-none">Red Ox</span>
            <span className="text-xs tracking-widest uppercase opacity-70">Digital Strategy</span>
            </Link>
            
            <button 
            onClick={toggleMenu}
            className="group flex flex-col items-end gap-1.5 cursor-pointer pointer-events-auto"
            >
            <div className={`w-8 h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <div className={`w-8 h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
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
