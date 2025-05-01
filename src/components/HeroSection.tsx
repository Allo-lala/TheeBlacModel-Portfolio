import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ModelCanvas from './three/ModelCanvas';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/8386668/pexels-photo-8386668.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Fashion model portrait"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10 opacity-80 mix-blend-overlay">
        <ModelCanvas text="TheeBlacModel" />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent z-20"></div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-30">
        <div className="text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide text-white">
              JANE
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="text-lg md:text-xl font-sans text-white tracking-widest uppercase max-w-xl mx-auto mb-12">
              Fashion Model & Creative Influencer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <a
              href="#gallery"
              className="btn btn-outline border-2 text-white hover:bg-white hover:text-primary-900"
            >
              Explore Portfolio
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="flex flex-col items-center">
          <p className="text-xs uppercase tracking-widest mb-2 text-white">Scroll Down</p>
          <div className="w-0.5 h-8 bg-white animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;