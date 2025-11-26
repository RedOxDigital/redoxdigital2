import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Theme Context
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme Toggle Component
export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  );
};

// Navbar Component
export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Handle dropdown toggle on click outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('[data-target="dropdown-default"]') && !target.closest('#dropdown-default')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="fixed border-b border-solid border-gray-200 dark:border-gray-800 w-full py-3 bg-white dark:bg-gray-900 z-50">
      <div className="container mx-auto">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="flex justify-between lg:flex-row">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
                Redox Digital
              </span>
            </Link>
            <button
              data-collapse-toggle="navbar-default-with-dropdown"
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default-with-dropdown"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className={`${isMobileMenuOpen ? '' : 'hidden'} w-full lg:flex lg:pl-11`} id="navbar-default-with-dropdown">
            <ul className="flex lg:items-center flex-col mt-4 lg:mt-0 lg:ml-auto lg:flex-row gap-4 lg:gap-0">
              <li>
                <Link
                  to="/"
                  className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm lg:text-base font-medium hover:text-indigo-700 dark:hover:text-indigo-400 transition-all duration-500 mb-2 lg:mb-0 lg:mr-6 md:mb-0 md:mr-3"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm lg:text-base font-medium hover:text-indigo-700 dark:hover:text-indigo-400 transition-all duration-500 mb-2 lg:mb-0 lg:mr-6 md:mb-0 md:mr-3"
                >
                  About us
                </Link>
              </li>
              <li className="relative">
                <button
                  data-target="dropdown-default"
                  onClick={toggleDropdown}
                  className="dropdown-toggle flex items-center lg:justify-between text-gray-500 dark:text-gray-400 text-sm lg:text-base font-medium hover:text-indigo-700 dark:hover:text-indigo-400 transition-all duration-500 lg:mb-0 lg:mr-6 mr-auto text-left"
                >
                  Products
                  <svg
                    className={`w-3 h-2 ml-1.5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L3.58579 3.58579C4.25245 4.25245 4.58579 4.58579 5 4.58579C5.41421 4.58579 5.74755 4.25245 6.41421 3.58579L9 1"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdown-default"
                  className={`dropdown-menu rounded-xl lg:shadow-lg lg:bg-white dark:lg:bg-gray-800 relative lg:absolute top-full w-max mt-3 ${isDropdownOpen ? 'block' : 'hidden'}`}
                  aria-labelledby="dropdown-default"
                >
                  <ul className="py-2">
                    <li>
                      <a
                        className="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium"
                        href="javascript:;"
                      >
                        Downloads
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium"
                        href="javascript:;"
                      >
                        Saved Files
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium"
                        href="javascript:;"
                      >
                        Notifications
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-500 dark:text-red-400 font-medium"
                        href="javascript:;"
                      >
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="/features"
                  className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm lg:text-base font-medium hover:text-indigo-700 dark:hover:text-indigo-400 transition-all duration-500 mb-2 lg:mb-0 lg:mr-6 md:mb-0 md:mr-3"
                >
                  Features
                </Link>
              </li>
              <li className="lg:ml-4">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Footer Component
export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Redox Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Layout Component
export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors">
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Page Transition Component
const pageVariants = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 50,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4,
};

export const PageTransition: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

