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
        'https://form.jotform.com/'
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
          className="fixed inset-0 z-[9999] flex items-end justify-center md:items-center"
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
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 300,
              duration: 0.5,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative mx-0 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-[#0F0F0F] shadow-2xl md:mx-4 md:max-h-[85vh] md:rounded-2xl"
          >
            {/* Header - Dark Theme */}
            <div className="sticky top-0 z-10 border-b border-white/10 bg-[#0F0F0F]">
              {/* Mobile drag indicator */}
              <div className="flex justify-center pb-1 pt-3 md:hidden">
                <div className="h-1.5 w-12 rounded-full bg-white/30" />
              </div>

              <div className="flex items-center justify-between px-5 py-4 md:px-8 md:py-6">
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <div className="h-[2px] w-6 bg-[#E02020]" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E02020] md:text-xs">
                      Start Your Growth
                    </span>
                  </div>
                  <h2 className="font-syne text-xl font-bold uppercase tracking-tight text-[#F2F2F2] md:text-2xl">
                    Apply Now
                  </h2>
                </div>

                <button
                  onClick={onClose}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 hover:bg-[#E02020] md:h-12 md:w-12"
                  aria-label="Close form"
                >
                  <X className="h-5 w-5 text-[#F2F2F2] transition-colors group-hover:text-white" />
                </button>
              </div>
            </div>

            {/* Call Now Section */}
            <div className="border-b border-white/10 bg-[#1a1a1a] px-5 py-4 md:px-8">
              <a href="tel:0493992661" className="group flex items-center justify-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E02020] transition-transform duration-300 group-hover:scale-110">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                    Prefer to talk?
                  </span>
                  <span className="font-syne text-lg font-bold text-[#F2F2F2] transition-colors group-hover:text-[#E02020] md:text-xl">
                    0493 992 661
                  </span>
                </div>
              </a>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto bg-[#0F0F0F] px-0 py-0 md:px-4 md:py-4">
              <div className="relative min-h-[500px] w-full md:min-h-[450px]">
                {/* Loading state */}
                {!iframeLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0F0F0F]">
                    <div className="flex flex-col items-center gap-3">
                      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#E02020] border-t-transparent" />
                      <span className="text-sm font-medium text-white/50">Loading form...</span>
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
            <div className="sticky bottom-0 border-t border-white/10 bg-gradient-to-t from-[#0F0F0F] to-[#0F0F0F]/80 px-5 py-4 md:px-8">
              <p className="text-center text-xs text-white/40">
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
  children = 'Apply Now',
  variant = 'primary',
  className = '',
  showArrow = true,
  onClick,
}: ContactButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (onClick) onClick();
    setIsModalOpen(true);
  };

  const baseStyles = 'flex items-center gap-3 transition-colors duration-300 cursor-pointer';

  const variants = {
    primary: 'bg-[#E02020] text-white px-6 py-3 hover:bg-white hover:text-black group/btn',
    secondary: 'bg-white text-black px-6 py-3 hover:bg-[#E02020] hover:text-white group/btn',
    dark: 'bg-[#1a1a1a] text-white px-6 py-3 rounded-none hover:bg-[#E02020] group/btn',
    link: 'text-black hover:text-[#E02020] group inline-flex',
  };

  return (
    <>
      <button onClick={handleClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {typeof children === 'string' ? (
          <span className="text-xs font-bold uppercase tracking-widest">{children}</span>
        ) : (
          children
        )}
        {showArrow && variant !== 'link' && (
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
        className={`group inline-flex cursor-pointer items-center gap-3 text-base font-bold uppercase tracking-wide transition-colors hover:text-[#E02020] md:gap-4 md:text-lg ${className}`}
      >
        {children}
      </button>
      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default ContactFormModal;
