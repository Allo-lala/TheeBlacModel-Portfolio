import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BrandsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const brands = [
    {
      name: 'Chanel',
      logo: 'https://seeklogo.com/images/C/Chanel-logo-4417297EC8-seeklogo.com.png',
      description: 'Collaborated on exclusive fragrance campaigns and runway shows.',
    },
    {
      name: 'Balenciaga',
      logo: 'https://seeklogo.com/images/B/balenciaga-logo-81DE85C0C3-seeklogo.com.png',
      description: 'Featured model for seasonal collections and global campaigns.',
    },
    {
      name: 'Fenty Beauty',
      logo: 'https://seeklogo.com/images/F/fenty-beauty-by-rihanna-logo-BB2F99A9E2-seeklogo.com.png',
      description: 'Brand ambassador for makeup line and special collections.',
    },
    {
      name: 'Zara',
      logo: 'https://seeklogo.com/images/Z/zara-logo-538B740904-seeklogo.com.png',
      description: 'Led multiple campaign shoots for seasonal collections.',
    },
    {
      name: 'Nike',
      logo: 'https://seeklogo.com/images/N/nike-logo-7946232FA3-seeklogo.com.png',
      description: 'Sports and athleisure campaign model for special editions.',
    },
  ];

  return (
    <section id="brands" ref={ref} className="section bg-white py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">Brands & Collaborations</h2>
          <p className="text-primary-700 max-w-2xl mx-auto">
            Jane has partnered with prestigious global brands, bringing her unique presence to their campaigns and collections.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 hidden md:block"
        >
          <div className="flex justify-center items-center flex-wrap gap-12 md:gap-16 lg:gap-24">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                className="flex flex-col items-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-16 flex items-center mb-4">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`} 
                    className="max-h-full max-w-[120px] opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0" 
                  />
                </div>
                <p className="text-primary-600 opacity-0 text-sm text-center max-w-[180px] transition-opacity duration-300 group-hover:opacity-100">
                  {brand.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel 
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            centerMode={true}
            centerSlidePercentage={80}
          >
            {brands.map((brand) => (
              <div key={brand.name} className="px-4 pb-12">
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-sm h-48">
                  <div className="h-16 flex items-center mb-6">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`} 
                      className="max-h-full max-w-[120px]" 
                    />
                  </div>
                  <p className="text-primary-600 text-sm text-center">
                    {brand.description}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-serif mb-6">Interested in collaboration?</h3>
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;