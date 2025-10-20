import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { siteConfig } from '../data/site';
import SectionHeading from './SectionHeading';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [key: string]: boolean }>({});

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? siteConfig.gallery.length - 1 : selectedImage - 1);
    }
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === siteConfig.gallery.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleImageLoad = (src: string) => {
    setImageLoaded(prev => ({ ...prev, [src]: true }));
  };

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-powder/20 to-cream">
      <div className="container-max">
        <SectionHeading 
          title="Gallery" 
          subtitle="Capturing precious moments from our love story"
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {siteConfig.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              {/* Loading placeholder */}
              {!imageLoaded[image] && (
                <div className="absolute inset-0 bg-powder/50 animate-pulse" />
              )}
              
              <img
                src={image}
                alt={`Prenup photo ${index + 1}`}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                  imageLoaded[image] ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
                onLoad={() => handleImageLoad(image)}
              />
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-300" />
              
              {/* Hover icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-cream/90 rounded-full p-3">
                  <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 right-4 z-60 bg-cream/20 hover:bg-cream/30 text-cream p-2 rounded-full transition-colors duration-300"
                onClick={closeLightbox}
              >
                <FiX size={24} />
              </motion.button>

              {/* Navigation buttons */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 bg-cream/20 hover:bg-cream/30 text-cream p-2 rounded-full transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
              >
                <FiChevronLeft size={24} />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 bg-cream/20 hover:bg-cream/30 text-cream p-2 rounded-full transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
              >
                <FiChevronRight size={24} />
              </motion.button>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={siteConfig.gallery[selectedImage]}
                  alt={`Prenup photo ${selectedImage + 1}`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </motion.div>

              {/* Image counter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-cream/20 text-cream px-4 py-2 rounded-full text-sm font-medium"
              >
                {selectedImage + 1} of {siteConfig.gallery.length}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;