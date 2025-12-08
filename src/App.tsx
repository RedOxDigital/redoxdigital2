import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider, PageTransition } from './modules';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const TradiesSEO = lazy(() => import('./pages/TradiesSEO'));
const FacebookAds = lazy(() => import('./pages/FacebookAds'));
const GoogleReviewTemplate = lazy(() => import('./pages/GoogleReviewTemplate'));
const NorthLakesWebDesign = lazy(() => import('./pages/NorthLakesWebDesign'));
const AdRealEstate = lazy(() => import('./pages/AdRealEstate'));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full items-center justify-center bg-white text-gray-700">
          Loading...
        </div>
      }
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />
          <Route path="/tradies-seo-north-lakes" element={<TradiesSEO />} />
          <Route path="/facebook-ads-north-lakes" element={<FacebookAds />} />
          <Route path="/google-review-request-email-template" element={<GoogleReviewTemplate />} />
          <Route path="/web-design-north-lakes" element={<NorthLakesWebDesign />} />
          <Route path="/google-ads-tradies-north-lakes" element={<AdRealEstate />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
