import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section bg-white py-20 md:py-32">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">About Jane</h2>
            
            <p className="mb-6 text-primary-700">
              Jane is an internationally recognized fashion model with over a decade of experience
              working with the world's leading designers and brands. Born in Paris and based in New York,
              she has graced the covers of Vogue, Elle, and Harper's Bazaar, and walked the runway for
              luxury fashion houses across the globe.
            </p>
            
            <p className="mb-6 text-primary-700">
              With her distinctive look and versatile presence, Jane has become a muse for photographers
              and designers alike, bringing artistic vision to life through her expressive modeling style.
              Her portfolio spans high fashion editorials, commercial campaigns, and avant-garde art projects.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h3 className="text-xl font-serif mb-2">Expertise</h3>
                <ul className="text-primary-700 space-y-1">
                  <li>• Editorial Photography</li>
                  <li>• Runway Modeling</li>
                  <li>• Commercial Campaigns</li>
                  <li>• Fashion Films</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Recognition</h3>
                <ul className="text-primary-700 space-y-1">
                  <li>• Model of the Year 2023</li>
                  <li>• Vogue Cover Feature</li>
                  <li>• Fashion Icon Award</li>
                  <li>• Best Campaign Face</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 overflow-hidden">
            <motion.div
              initial={{ scale: 1.1 }}
              animate={inView ? { scale: 1 } : { scale: 1.1 }}
              transition={{ duration: 1.2 }}
              className="relative h-[70vh] max-h-[600px] overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Jane portrait"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;