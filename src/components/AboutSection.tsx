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
              Jane is an internationally recognized fashion model with over a decade of experience working with 
              leading designers and global brands. She has graced the covers of top magazines and walked the 
              runway for luxury fashion houses around the world. Her portfolio includes major events such as the
              Bride & Groom Expo, The Mak @100 Fashion Show, Northern Uganda Fashion Show, Vumbula Uganda Fashion Show, 
              Top Model Uganda, Moreli Fashion Week, next5studios, Hair & Beauty Affair, Asfas, Trawills, waya Clothing, 
              Sheroes Ugandaand many others.
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
                  <li>• Photography</li>
                  <li>• Runway </li>
                  <li>• Campaigns</li>
                  <li>• Fashion Films</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Recognition</h3>
                <ul className="text-primary-700 space-y-1">
                  <li>•  East African Model 2023</li>
                  <li>• 1st Runner up miss MuK 2019/20 </li>
                  {/* <li>• Fashion Icon Award</li> */}
                  {/* <li>• Campaign Face (Hair & Beauty Affair)</li> */}
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
                src="https://i.ibb.co/TqrLKCR5/Whats-App-Image-2025-05-01-at-13-05-28.jpg"
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