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
  ogImage?: string;
  structuredData?: object;
  keywords?: string;
}

const Layout = ({
  children,
  showPreloader = true,
  title,
  description,
  canonical,
  ogImage = 'https://redoxdigital.com.au/ROD-logo.svg',
  structuredData,
  keywords,
}: LayoutProps) => {
  const [loading, setLoading] = useState(showPreloader);

  useEffect(() => {
    // Handle Title
    if (title && document.title !== title) {
      document.title = title;
    }

    // Handle Meta Description
    const updateOrCreateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      if (content && meta.getAttribute('content') !== content) {
        meta.setAttribute('content', content);
      }
    };

    if (description) {
      updateOrCreateMeta('description', description);
      updateOrCreateMeta('og:description', description, true);
      updateOrCreateMeta('twitter:description', description, true);
    }

    if (title) {
      updateOrCreateMeta('og:title', title, true);
      updateOrCreateMeta('twitter:title', title, true);
    }

    if (canonical) {
      updateOrCreateMeta('og:url', canonical, true);
      updateOrCreateMeta('twitter:url', canonical, true);
    }

    if (ogImage) {
      updateOrCreateMeta('og:image', ogImage, true);
      updateOrCreateMeta('twitter:image', ogImage, true);
    }

    if (keywords) {
      updateOrCreateMeta('keywords', keywords);
    }

    // Robots meta - ensure page is indexable
    updateOrCreateMeta(
      'robots',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    // Handle Canonical Link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    if (canonical && linkCanonical.getAttribute('href') !== canonical) {
      linkCanonical.setAttribute('href', canonical || window.location.href);
    }

    // Handle Structured Data (JSON-LD)
    if (structuredData) {
      // Remove existing page-specific structured data
      const existingScript = document.querySelector('script[data-page-schema="true"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Add new structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page-schema', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup on unmount
    return () => {
      const pageSchema = document.querySelector('script[data-page-schema="true"]');
      if (pageSchema) {
        pageSchema.remove();
      }
    };
  }, [title, description, canonical, ogImage, structuredData, keywords]);

  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#1a1a1a] selection:bg-[#E02020] selection:text-white">
      <AnimatePresence mode="wait">
        {loading && <Preloader setLoading={setLoading} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
