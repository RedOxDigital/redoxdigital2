import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider, Layout, PageTransition } from './modules';
import Home from './pages/Home';
import About from './pages/About';
import TradiesSEO from './pages/TradiesSEO';
import FacebookAds from './pages/FacebookAds';
import GoogleReviewTemplate from './pages/GoogleReviewTemplate';
import NorthLakesWebDesign from './pages/NorthLakesWebDesign';
import AdRealEstate from './pages/AdRealEstate';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <PageTransition>
                <About />
              </PageTransition>
            </Layout>
          }
        />
        <Route
          path="/tradies-seo-north-lakes"
          element={
            <TradiesSEO />
          }
        />
        <Route
          path="/facebook-ads-north-lakes"
          element={
            <FacebookAds />
          }
        />
        <Route
          path="/google-review-request-email-template"
          element={
            <GoogleReviewTemplate />
          }
        />
        <Route
          path="/web-design-north-lakes"
          element={
            <NorthLakesWebDesign />
          }
        />
        <Route
          path="/google-ads-tradies-north-lakes"
          element={
            <AdRealEstate />
          }
        />
      </Routes>
    </AnimatePresence>
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
