import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import CustomCursor from './CustomCursor';
import Preloader from './Preloader';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  showPreloader?: boolean;
}

const Layout = ({ children, showPreloader = true }: LayoutProps) => {
  const [loading, setLoading] = useState(showPreloader);

  return (
    <div className="bg-[#F2F2F2] min-h-screen text-[#1a1a1a] selection:bg-[#E02020] selection:text-white">
      <CustomCursor />
      
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
