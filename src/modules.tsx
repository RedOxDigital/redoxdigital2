import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

// Theme Context
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    return (
      savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    );
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

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
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
      className="rounded-lg bg-gray-200 p-2 text-gray-800 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div animate={{ rotate: theme === 'dark' ? 0 : 180 }} transition={{ duration: 0.3 }}>
        {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
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
      if (
        !target.closest('[data-target="dropdown-default"]') &&
        !target.closest('#dropdown-default')
      ) {
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
    <nav className="fixed z-50 w-full border-b border-solid border-gray-200 bg-white py-3 dark:border-gray-800 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="flex w-full flex-col lg:flex-row">
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
              className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
              aria-controls="navbar-default-with-dropdown"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${isMobileMenuOpen ? '' : 'hidden'} w-full lg:flex lg:pl-11`}
            id="navbar-default-with-dropdown"
          >
            <ul className="mt-4 flex flex-col gap-4 lg:ml-auto lg:mt-0 lg:flex-row lg:items-center lg:gap-0">
              <li>
                <Link
                  to="/"
                  className="mb-2 flex items-center justify-between text-sm font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 dark:text-gray-400 dark:hover:text-indigo-400 md:mb-0 md:mr-3 lg:mb-0 lg:mr-6 lg:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="mb-2 flex items-center justify-between text-sm font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 dark:text-gray-400 dark:hover:text-indigo-400 md:mb-0 md:mr-3 lg:mb-0 lg:mr-6 lg:text-base"
                >
                  About us
                </Link>
              </li>
              <li className="relative">
                <button
                  data-target="dropdown-default"
                  onClick={toggleDropdown}
                  className="dropdown-toggle mr-auto flex items-center text-left text-sm font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 dark:text-gray-400 dark:hover:text-indigo-400 lg:mb-0 lg:mr-6 lg:justify-between lg:text-base"
                >
                  Products
                  <svg
                    className={`ml-1.5 h-2 w-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
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
                  className={`dropdown-menu relative top-full mt-3 w-max rounded-xl lg:absolute lg:bg-white lg:shadow-lg dark:lg:bg-gray-800 ${isDropdownOpen ? 'block' : 'hidden'}`}
                  aria-labelledby="dropdown-default"
                >
                  <ul className="py-2">
                    <li>
                      <a
                        className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
                        href="javascript:;"
                      >
                        Downloads
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
                        href="javascript:;"
                      >
                        Saved Files
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-700"
                        href="javascript:;"
                      >
                        Notifications
                      </a>
                    </li>
                    <li>
                      <a
                        className="block px-6 py-2 font-medium text-red-500 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-700"
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
                  className="mb-2 flex items-center justify-between text-sm font-medium text-gray-500 transition-all duration-500 hover:text-indigo-700 dark:text-gray-400 dark:hover:text-indigo-400 md:mb-0 md:mr-3 lg:mb-0 lg:mr-6 lg:text-base"
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
    <footer className="mt-auto w-full border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
    <div className="flex min-h-screen flex-col bg-gray-50 transition-colors dark:bg-gray-950">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
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
