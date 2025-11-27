import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Phone } from 'lucide-react';

// Extend window for JotForm
declare global {
  interface Window {
    jotformEmbedHandler?: (selector: string, baseUrl: string) => void;
  }
}

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Initialize JotForm embed handler when iframe loads
  const handleIframeLoad = useCallback(() => {
    setIframeLoaded(true);
    if (window.jotformEmbedHandler) {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-252807783245060']",
        "https://form.jotform.com/"
      );
    }
  }, []);

  // Reset iframe loaded state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIframeLoaded(false);
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Use portal to render modal at document body level (escapes card overflow)
  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          
          {/* Modal Container - Dark Theme */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 300,
              duration: 0.5 
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl mx-0 md:mx-4 bg-[#0F0F0F] rounded-t-3xl md:rounded-2xl overflow-hidden max-h-[90vh] md:max-h-[85vh] flex flex-col shadow-2xl border border-white/10"
          >
            {/* Header - Dark Theme */}
            <div className="sticky top-0 z-10 bg-[#0F0F0F] border-b border-white/10">
              {/* Mobile drag indicator */}
              <div className="flex justify-center pt-3 pb-1 md:hidden">
                <div className="w-12 h-1.5 bg-white/30 rounded-full" />
              </div>
              
              <div className="flex items-center justify-between px-5 md:px-8 py-4 md:py-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-[2px] bg-[#E02020]" />
                    <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-[#E02020]">
                      Start Your Growth
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-syne font-bold text-[#F2F2F2] uppercase tracking-tight">
                    Apply Now
                  </h2>
                </div>
                
                <button
                  onClick={onClose}
                  className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-[#E02020] transition-colors duration-300"
                  aria-label="Close form"
                >
                  <X className="w-5 h-5 text-[#F2F2F2] group-hover:text-white transition-colors" />
                </button>
              </div>
            </div>

            {/* Call Now Section */}
            <div className="bg-[#1a1a1a] border-b border-white/10 px-5 md:px-8 py-4">
              <a 
                href="tel:0493992661" 
                className="flex items-center justify-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#E02020] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold">
                    Prefer to talk?
                  </span>
                  <span className="text-lg md:text-xl font-syne font-bold text-[#F2F2F2] group-hover:text-[#E02020] transition-colors">
                    0493 992 661
                  </span>
                </div>
              </a>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto px-0 md:px-4 py-0 md:py-4 bg-[#0F0F0F]">
              <div className="relative w-full min-h-[500px] md:min-h-[450px]">
                {/* Loading state */}
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0F0F0F]">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-8 h-8 border-2 border-[#E02020] border-t-transparent rounded-full animate-spin" />
                      <span className="text-sm text-white/50 font-medium">Loading form...</span>
                    </div>
                  </div>
                )}
                <iframe
                  id="JotFormIFrame-252807783245060"
                  title="Client Intake Form"
                  onLoad={handleIframeLoad}
                  allowTransparency={true}
                  allow="geolocation; microphone; camera; fullscreen; payment"
                  src="https://form.jotform.com/252807783245060"
                  frameBorder={0}
                  className={`transition-opacity duration-300 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    minWidth: '100%',
                    maxWidth: '100%',
                    height: '539px',
                    border: 'none',
                  }}
                  scrolling="no"
                />
              </div>
            </div>

            {/* Footer - Dark Theme */}
            <div className="sticky bottom-0 bg-gradient-to-t from-[#0F0F0F] to-[#0F0F0F]/80 border-t border-white/10 px-5 md:px-8 py-4">
              <p className="text-xs text-white/40 text-center">
                By submitting, you agree to our terms. We'll be in touch within 24 hours.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Render modal in portal to escape card's overflow:hidden
  return createPortal(modalContent, document.body);
};

// Trigger button component with consistent styling
interface ContactButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'link';
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
}

export const ContactButton = ({ 
  children = "Apply Now", 
  variant = 'primary', 
  className = '',
  showArrow = true,
  onClick
}: ContactButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (onClick) onClick();
    setIsModalOpen(true);
  };

  const baseStyles = "flex items-center gap-3 transition-colors duration-300 cursor-pointer";
  
  const variants = {
    primary: "bg-[#E02020] text-white px-6 py-3 hover:bg-white hover:text-black group/btn",
    secondary: "bg-white text-black px-6 py-3 hover:bg-[#E02020] hover:text-white group/btn",
    dark: "bg-[#1a1a1a] text-white px-6 py-3 rounded-none hover:bg-[#E02020] group/btn",
    link: "text-black hover:text-[#E02020] group inline-flex"
  };

  return (
    <>
      <button 
        onClick={handleClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {typeof children === 'string' ? (
          <span className="uppercase text-xs font-bold tracking-widest">{children}</span>
        ) : (
          children
        )}
        {showArrow && variant !== 'link' && (
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        )}
      </button>
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

// Standalone link-style trigger (for FAQ section)
interface ContactLinkProps {
  children: React.ReactNode;
  className?: string;
}

export const ContactLink = ({ children, className = '' }: ContactLinkProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)}
        className={`group inline-flex items-center gap-3 md:gap-4 text-base md:text-lg font-bold uppercase tracking-wide hover:text-[#E02020] transition-colors cursor-pointer ${className}`}
      >
        {children}
      </button>
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ContactFormModal;
