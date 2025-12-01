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
  { 
    label: "Services", 
    children: [
      { label: "Tradies SEO", href: "/tradies-seo-north-lakes", isExternal: true },
      { label: "Facebook Ads", href: "/facebook-ads-north-lakes", isExternal: true },
    ]
  },
  { label: "Case Study", href: "#case-study" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
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
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const handleLinkClick = (item: NavLink) => {
    if (item.children) {
      // Toggle services submenu
      setExpandedService(expandedService === item.label ? null : item.label);
      return;
    }
    
    onClose();
    
    if (item.isContact) {
      // Small delay to allow menu animation to start before opening modal
      setTimeout(() => {
        onContactClick();
      }, 300);
    } else if (item.isExternal && item.href) {
        // Direct navigation for external/page links
        onClose();
        // React Router Link handled in render, this is fallback or if button used
    } else if (item.href) {
      // Small delay to allow menu animation to start before scrolling
      setTimeout(() => {
        const element = document.querySelector(item.href!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
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
                {item.children ? (
                  <div className="flex flex-col items-center">
                    <button 
                      onClick={() => handleLinkClick(item)}
                      className="font-syne text-5xl md:text-8xl font-bold uppercase transition-colors duration-300 hover:text-[#E02020]"
                    >
                      {item.label}
                    </button>
                    <AnimatePresence>
                      {expandedService === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mt-4 flex flex-col gap-3"
                        >
                          {item.children.map((child, childIndex) => (
                            <motion.div
                              key={child.label}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: childIndex * 0.1 }}
                            >
                              {child.isExternal && child.href ? (
                                <Link 
                                  to={child.href}
                                  onClick={onClose}
                                  className="font-syne text-2xl md:text-4xl font-bold uppercase transition-colors duration-300 hover:text-[#E02020] block"
                                >
                                  {child.label}
                                </Link>
                              ) : (
                                <button
                                  onClick={() => handleLinkClick(child)}
                                  className="font-syne text-2xl md:text-4xl font-bold uppercase transition-colors duration-300 hover:text-[#E02020]"
                                >
                                  {child.label}
                                </button>
                              )}
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.isExternal ? (
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
            <div className="flex flex-col pointer-events-auto">
            <span className="font-bold text-2xl tracking-tighter uppercase font-syne leading-none">Red Ox</span>
            <span className="text-xs tracking-widest uppercase opacity-70">Digital Strategy</span>
            </div>
            
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
