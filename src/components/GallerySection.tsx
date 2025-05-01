import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const GallerySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Vogue Editorial',
      category: 'Editorial',
      image: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Summer collection feature for Vogue Magazine',
    },
    {
      id: 2,
      title: 'Paris Fashion Week',
      category: 'Runway',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Walking for Balenciaga Spring/Summer collection',
    },
    {
      id: 3,
      title: 'Nike Campaign',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Sportswear campaign for Nike',
    },
    {
      id: 4,
      title: 'Harper\'s Bazaar Cover',
      category: 'Editorial',
      image: 'https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Cover shoot for Harper\'s Bazaar',
    },
    {
      id: 5,
      title: 'Milan Runway',
      category: 'Runway',
      image: 'https://images.pexels.com/photos/1158670/pexels-photo-1158670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Fall collection showcase in Milan',
    },
    {
      id: 6,
      title: 'Chanel Perfume',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Fragrance campaign for Chanel',
    },
  ];

  const categories = ['All', 'Editorial', 'Runway', 'Commercial'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="gallery" ref={ref} className="section bg-primary-50 py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">Portfolio Gallery</h2>
          <p className="text-primary-700 max-w-2xl mx-auto">
            Explore Jane's professional work across editorial spreads, runway performances, and commercial projects.
          </p>
        </motion.div>

        <div className="gallery-filters flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-6 py-2 rounded-full border-2 transition-all ${
                activeCategory === category
                  ? 'bg-primary-900 text-white border-primary-900'
                  : 'border-primary-300 text-primary-700 hover:border-primary-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden cursor-pointer img-hover"
                onClick={() => handleItemClick(item)}
              >
                <div className="relative group h-96 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                    <div className="p-6 w-full text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-serif">{item.title}</h3>
                      <p className="text-sm opacity-80">{item.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white max-w-4xl w-full max-h-[90vh] overflow-auto rounded-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-auto"
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-primary-900 flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">{selectedItem.title}</h3>
                  <p className="text-sm uppercase tracking-wider text-primary-500 mb-4">{selectedItem.category}</p>
                  <p className="text-primary-700">{selectedItem.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;