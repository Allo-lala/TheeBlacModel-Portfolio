import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

interface PressItem {
  id: number;
  title: string;
  publication: string;
  date: string;
  image: string;
  excerpt: string;
  link: string;
}

const PressSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const pressItems: PressItem[] = [
    {
      id: 1,
      title: "The Rise of Fashion's New Icon",
      publication: "Vogue",
      date: "March 2023",
      image: "https://images.pexels.com/photos/6069544/pexels-photo-6069544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      excerpt: "Jane's distinctive style and presence has captured the attention of the fashion world, marking her as one of the industry's most influential models.",
      link: "#",
    },
    {
      id: 2,
      title: "Behind the Scenes with Jane",
      publication: "Harper's Bazaar",
      date: "December 2022",
      image: "https://images.pexels.com/photos/5611073/pexels-photo-5611073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      excerpt: "An exclusive look at the life and career of the model who's redefining beauty standards and making waves in the fashion industry.",
      link: "#",
    },
    {
      id: 3,
      title: "The New Face of Modern Fashion",
      publication: "Elle",
      date: "August 2022",
      image: "https://images.pexels.com/photos/5625010/pexels-photo-5625010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      excerpt: "Jane discusses her journey, influences, and vision for the future of inclusive fashion in this in-depth feature.",
      link: "#",
    },
  ];

  return (
    <section id="press" ref={ref} className="section bg-primary-50 py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">Press & Features</h2>
          <p className="text-primary-700 max-w-2xl mx-auto">
            Jane has been featured in numerous publications, sharing her journey and perspective on the fashion industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pressItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
              className="bg-white overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-0 left-0 bg-accent-600 text-white px-3 py-1 text-xs uppercase">
                  {item.publication}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                <p className="text-sm text-primary-500 mb-4">{item.date}</p>
                <p className="text-primary-700 mb-4">{item.excerpt}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-900 hover:text-accent-600 transition-colors"
                >
                  Read Article <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-primary-700 italic">
            For press inquiries and interview requests, please use the contact form below.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PressSection;