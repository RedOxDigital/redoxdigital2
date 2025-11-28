import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Preloader from './Preloader';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showPreloader?: boolean;
  title?: string;
  description?: string;
  canonical?: string;
}

const Layout = ({ children, showPreloader = true, title, description, canonical }: LayoutProps) => {
  const [loading, setLoading] = useState(showPreloader);

  useEffect(() => {
    // Handle Title - Only update if different from server-rendered title
    if (title && document.title !== title) {
      document.title = title;
    }

    // Handle Meta Description - Update existing or create new
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    if (description && metaDescription.getAttribute('content') !== description) {
      metaDescription.setAttribute('content', description);
    }

    // Handle Canonical Link - Update existing or create new
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    if (canonical && linkCanonical.getAttribute('href') !== canonical) {
      linkCanonical.setAttribute('href', canonical || window.location.href);
    }
  }, [title, description, canonical]);

  return (
    <div className="bg-[#F2F2F2] min-h-screen text-[#1a1a1a] selection:bg-[#E02020] selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <Preloader setLoading={setLoading} />}
      </AnimatePresence>

      {!loading && (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
