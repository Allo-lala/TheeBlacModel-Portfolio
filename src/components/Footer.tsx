// Removed unused React import
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-serif tracking-wider">
              JANE
            </a>
            <p className="mt-2 text-primary-300 text-sm">
              Fashion Model & Creative Influencer
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="#" 
              className="text-white hover:text-accent-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-accent-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-accent-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="mailto:contact@janemodel.com" 
              className="text-white hover:text-accent-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-4 md:mb-0">
            <a href="#home" className="text-primary-300 hover:text-white transition-colors text-sm">
              Home
            </a>
            <a href="#about" className="text-primary-300 hover:text-white transition-colors text-sm">
              About
            </a>
            <a href="#gallery" className="text-primary-300 hover:text-white transition-colors text-sm">
              Gallery
            </a>
            <a href="#brands" className="text-primary-300 hover:text-white transition-colors text-sm">
              Brands
            </a>
            <a href="#press" className="text-primary-300 hover:text-white transition-colors text-sm">
              Press
            </a>
            <a href="#contact" className="text-primary-300 hover:text-white transition-colors text-sm">
              Contact
            </a>
          </nav>
          
          <p className="text-primary-400 text-sm">
            &copy; {currentYear} Jane Model Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;