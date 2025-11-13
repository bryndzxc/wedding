import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineXMark } from 'react-icons/hi2';
import Section from '../ui/Section';
import { siteConfig } from '../data/site';
import { encodeImageUrl, getTransformStyle, getModalStyle } from '../utils/ios';

const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<number>>(new Set());
  const [loadingImages, setLoadingImages] = useState<Set<number>>(new Set());

  // Show all images by default
  const imagesToShow = siteConfig.gallery;

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    const totalImages = siteConfig.gallery.length;
    if (direction === 'prev') {
      setSelectedImageIndex(selectedImageIndex === 0 ? totalImages - 1 : selectedImageIndex - 1);
    } else {
      setSelectedImageIndex(selectedImageIndex === totalImages - 1 ? 0 : selectedImageIndex + 1);
    }
  }, [selectedImageIndex]);

  const handleImageError = (index: number) => {
    const imagePath = imagesToShow[index];
    console.error(`Failed to load image at index ${index}:`, imagePath);
    console.error('Original path:', imagePath);
    console.error('Encoded path:', getImageUrl(imagePath));
    console.error('User agent:', navigator.userAgent);
    setImageLoadErrors(prev => new Set(prev).add(index));
    setLoadingImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  const handleImageLoad = (index: number) => {
    console.log(`Successfully loaded image at index ${index}:`, imagesToShow[index]);
    setLoadingImages(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  const handleImageLoadStart = (index: number) => {
    console.log(`Starting to load image at index ${index}:`, imagesToShow[index]);
    setLoadingImages(prev => new Set(prev).add(index));
  };

  // Create properly encoded image URLs for iOS compatibility
  const getImageUrl = (imagePath: string) => {
    return encodeImageUrl(imagePath);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
      }
    };

    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex, navigateImage]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section 
      id="gallery" 
      title="Our Journey in Pictures" 
      intro="Capturing beautiful moments from our engagement photoshoot"
      background="paper"
    >
      {/* Elegant Grid Gallery */}
      <motion.div 
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {imagesToShow.map((imagePath, index) => {
          // Skip images that failed to load
          if (imageLoadErrors.has(index)) {
            console.log(`Skipping failed image at index ${index}`);
            return null;
          }
          
          const isLoading = loadingImages.has(index);
          
          return (
            <motion.div
              key={`${imagePath}-${index}`}
              variants={imageVariants}
              className="group cursor-pointer"
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View image ${index + 1} in lightbox`}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-soft-glow transition-all duration-300 group-hover:shadow-xl group-focus:shadow-xl group-focus:outline-none group-focus:ring-2 group-focus:ring-brand-gold">
                
                {/* Loading Skeleton - Show initially and while loading */}
                <div className={`absolute inset-0 bg-brand-beige/30 flex items-center justify-center transition-opacity duration-300 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
                    <div className="text-xs text-brand-ink/60">Loading...</div>
                  </div>
                </div>
                
                <img 
                  src={getImageUrl(imagePath)}
                  alt={`Prenup photoshoot ${index + 1}`}
                  loading={index < 6 ? "eager" : "lazy"}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  onError={() => handleImageError(index)}
                  onLoad={() => handleImageLoad(index)}
                  onLoadStart={() => handleImageLoadStart(index)}
                  style={getTransformStyle({
                    /* iOS Safari image rendering fixes */
                    imageRendering: 'auto'
                  })}
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/95 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                {/* Image number indicator */}
                <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            style={getModalStyle()}
          >
            {/* Navigation Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4 z-10">
              {/* Previous Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Previous image"
              >
                <HiOutlineChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Next image"
              >
                <HiOutlineChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Close lightbox"
            >
              <HiOutlineXMark className="w-6 h-6 text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 z-20 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImageIndex + 1} / {siteConfig.gallery.length}
            </div>

            {/* Main Image */}
            <motion.div
              className="relative max-w-full max-h-full p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getImageUrl(siteConfig.gallery[selectedImageIndex])}
                alt={`Prenup photoshoot ${selectedImageIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                style={getTransformStyle({
                  /* iOS Safari image rendering fixes */
                  imageRendering: 'auto'
                })}
              />
            </motion.div>

            {/* Navigation Hints */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center">
              <p>Use arrow keys to navigate • Press ESC to close</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Gallery;