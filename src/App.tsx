import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BrandsSection from './components/BrandsSection';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
// import PressSection from './components/PressSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="bg-white text-primary-800 font-sans">
      <Header />
      <main>
        <AnimatePresence>
          <HeroSection />
          <AboutSection />
          <GallerySection />
          <BrandsSection />
          {/* <PressSection /> */}
          <ContactSection />
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App