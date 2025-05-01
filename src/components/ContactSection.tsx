import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Check } from 'lucide-react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset submission status after a delay
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" ref={ref} className="section bg-white py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-4">Get in Touch</h2>
          <p className="text-primary-700 max-w-xl mx-auto">
            For booking inquiries, collaborations, or press opportunities, please complete the form below.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-primary-50 border ${
                    errors.name ? 'border-accent-600' : 'border-primary-200'
                  } focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-colors`}
                />
                {errors.name && <p className="mt-1 text-accent-600 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-primary-50 border ${
                    errors.email ? 'border-accent-600' : 'border-primary-200'
                  } focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-colors`}
                />
                {errors.email && <p className="mt-1 text-accent-600 text-sm">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-primary-50 border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-colors"
              >
                <option value="">Select a subject</option>
                <option value="Booking Inquiry">Booking Inquiry</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Press Inquiry">Press Inquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 bg-primary-50 border ${
                  errors.message ? 'border-accent-600' : 'border-primary-200'
                } focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-transparent transition-colors`}
              ></textarea>
              {errors.message && <p className="mt-1 text-accent-600 text-sm">{errors.message}</p>}
            </div>

            <div className="text-right">
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`btn ${
                  isSubmitted ? 'bg-green-600 text-white' : 'btn-primary'
                } inline-flex items-center justify-center min-w-[150px]`}
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="inline-flex items-center">
                    <Check size={18} className="mr-2" /> Sent
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    Send Message <Send size={18} className="ml-2" />
                  </span>
                )}
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-serif mb-4">Management Contact</h3>
            <p className="text-primary-700">
              For urgent matters, please contact Jane's management team directly:
            </p>
            <p className="mt-2">
              <a href="mailto:janemukisa16@gmail.com<" className="text-primary-900 hover:text-accent-600 transition-colors">
                management@janemodel.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;