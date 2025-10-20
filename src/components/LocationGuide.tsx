import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiNavigation } from 'react-icons/fi';
import { siteConfig } from '../data/site';
import SectionHeading from './SectionHeading';

const LocationGuide: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="locations" className="section-padding bg-gradient-to-b from-cream to-powder/30 relative overflow-hidden">
      {/* Background Floral Elements */}
      <div className="absolute top-0 left-0 w-32 h-full opacity-10">
        <div className="h-full bg-gradient-to-r from-dusty/30 to-transparent"></div>
      </div>
      <div className="absolute top-0 right-0 w-32 h-full opacity-10">
        <div className="h-full bg-gradient-to-l from-dusty/30 to-transparent"></div>
      </div>

      <div className="container-max relative z-10">
        <SectionHeading 
          title="Location Guide" 
          subtitle="Join us at these beautiful venues for our special celebration"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Ceremony Location */}
            <motion.div variants={itemVariants} className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gold/20">
              {/* Location Image */}
              <div className="h-80 relative overflow-hidden">
                <img 
                  src="/images/ceremony_location.JPG" 
                  alt="Iglesia Ni Cristo - Lokal of Lalaan"
                  className="w-full h-full object-cover brightness-110 contrast-110 saturate-110"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy to-steel rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cream" fill="currentColor" viewBox="0 0 24 24">
                      {/* Church/ceremony icon */}
                      <path d="M12 2L13.5 5.5H17L14.5 7.5L15.5 11L12 9L8.5 11L9.5 7.5L7 5.5H10.5L12 2Z"/>
                      <path d="M12 9V22M8 14H16M6 18H18M4 22H20"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-2">
                    Wedding Ceremony
                  </h3>
                  <div className="flex items-center justify-center text-gold mb-4">
                    <FiClock className="w-4 h-4 mr-2" />
                    <span className="font-heading text-lg">2:00 PM</span>
                  </div>
                </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <FiMapPin className="w-5 h-5 text-dusty mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-navy mb-1">
                      {siteConfig.venues.ceremony.name}
                    </h4>
                    <p className="text-steel text-sm leading-relaxed">
                      {siteConfig.venues.ceremony.address}
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cream to-powder/50 rounded-lg p-4">
                  <p className="text-sm text-navy font-medium mb-2">
                    📍 Getting There:
                  </p>
                  <p className="text-xs text-steel leading-relaxed">
                    {siteConfig.venues.ceremony.directions || "Please arrive 15 minutes early for seating. Parking is available on-site."}
                  </p>
                </div>

                <motion.a
                  href={siteConfig.venues.ceremony.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-navy to-steel text-cream py-3 px-4 rounded-lg font-medium text-center flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg"
                >
                  <FiNavigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </motion.a>
              </div>
              </div>
            </motion.div>

            {/* Reception Location */}
            <motion.div variants={itemVariants} className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gold/20">
              {/* Location Image */}
              <div className="h-80 relative overflow-hidden">
                <img 
                  src="/images/reception_location.jpg" 
                  alt="Farm Hills Garden"
                  className="w-full h-full object-cover brightness-125 contrast-125 saturate-125"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-dusty to-baby rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cream" fill="currentColor" viewBox="0 0 24 24">
                      {/* Reception/party icon */}
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"/>
                      <path d="M3 13C3 10.8 4.8 9 7 9S11 10.8 11 13"/>
                      <path d="M13 13C13 10.8 14.8 9 17 9S21 10.8 21 13"/>
                      <path d="M2 13H22V15C22 16.1 21.1 17 20 17H4C2.9 17 2 16.1 2 15V13Z"/>
                      <circle cx="7" cy="19" r="2"/>
                      <circle cx="17" cy="19" r="2"/>
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-2">
                    Reception
                  </h3>
                  <div className="flex items-center justify-center text-gold mb-4">
                    <FiClock className="w-4 h-4 mr-2" />
                    <span className="font-heading text-lg">4:00 PM</span>
                  </div>
                </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <FiMapPin className="w-5 h-5 text-dusty mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-navy mb-1">
                      {siteConfig.venues.reception.name}
                    </h4>
                    <p className="text-steel text-sm leading-relaxed">
                      {siteConfig.venues.reception.address}
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cream to-powder/50 rounded-lg p-4">
                  <p className="text-sm text-navy font-medium mb-2">
                    🎉 What to Expect:
                  </p>
                  <p className="text-xs text-steel leading-relaxed">
                    {siteConfig.venues.reception.description || "Join us for dinner, dancing, and celebration! Cocktail hour begins at 4:00 PM."}
                  </p>
                </div>

                <motion.a
                  href={siteConfig.venues.reception.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-navy to-steel text-cream py-3 px-4 rounded-lg font-medium text-center flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg"
                >
                  <FiNavigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </motion.a>
              </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 max-w-3xl mx-auto text-center"
          >
            <div className="bg-gradient-to-r from-cream/80 to-powder/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gold/20">
              <h4 className="font-heading text-xl font-bold text-navy mb-4">
                🚗 Transportation & Parking
              </h4>
              <p className="text-steel text-sm leading-relaxed mb-4">
                Both venues offer complimentary parking for all guests. The ceremony and reception locations are approximately 10 minutes apart by car.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-xs text-steel">
                <div className="bg-white/60 rounded-lg p-3">
                  <strong className="text-navy">Ceremony Parking:</strong><br />
                  On-site parking available
                </div>
                <div className="bg-white/60 rounded-lg p-3">
                  <strong className="text-navy">Reception Parking:</strong><br />
                  On-site parking available
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationGuide;