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
      name: 'Morelli Agency',
      logo: 'https://i.ibb.co/DfLjtXkf/Logo-Moreli-Modeling.webp',
      description: ' ',
    },
    {
      name: 'Skills Klinic',
      logo: 'https://i.ibb.co/XZSvyh3g/Skills-Klinic.png',
      description: ' ',
    },
    {
      name: ' Absa Bank',
      logo: 'https://www.absa.co.ug/content/dam/uganda/absa/logos/absa-logo-bg.png',
      description: '',
    },
    {
      name: ' Rosy Lips',
      logo: 'https://i.ibb.co/4w0tJS1g/Rosy-Lips.jpg',
      description: ' ',
    },
    {
      name: 'Next Media',
      logo: 'https://nextmedia.co.ug/wp-content/uploads/2022/10/Next-Media-cropped-logo.png',
      description: ' ',
    },
    {
      name: 'Victoria University',
      logo: 'https://vu.ac.ug/_nuxt/img/vu-logo-with-words.ac2cb23.png',
      description: '',
    },
    {
      name: 'Airtel Uganda',
      logo: 'https://cdn-webportal.airtelstream.net/website/uganda/assets/images/logo.svg',
      description: '',
    },
    {
      name: 'swang ',
      logo: 'https://swangzavenue.com/wp-content/uploads/2020/03/SWANGZ-2022-logo-2.png',
      description: '',
    },

    {
      name: 'Radiant',
      logo: 'https://movitproducts.com/wp-content/uploads/2022/02/radiant-logo-1.jpg',
      description: '',
    },
    {
      name: 'Movit ',
      logo: 'https://movitproducts.com/wp-content/uploads/2022/02/logo-pink-1.png',
      description: '',
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
            I have partnered with prestigious brands, bringing unique presence to their campaigns and collections.
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
            transitionTime={800}
            centerMode={true}
            centerSlidePercentage={80}
            stopOnHover={false}
            swipeScrollTolerance={1}
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