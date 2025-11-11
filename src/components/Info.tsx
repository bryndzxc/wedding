import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMapPin, HiOutlineCalendarDays, HiOutlineClock } from 'react-icons/hi2';
import Section from '../ui/Section';
import { siteConfig } from '../data/site';
import { createCeremonyEvent, createReceptionEvent, downloadICSFromEvent } from '../utils/ics';

const Info: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string>('');

  const copyHashtag = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.couple.hashtag);
      setCopiedText('hashtag');
      setTimeout(() => setCopiedText(''), 2000);
    } catch (err) {
      console.error('Failed to copy hashtag:', err);
    }
  };

  const handleCeremonyCalendar = () => {
    const ceremonyEvent = createCeremonyEvent(
      siteConfig.wedding.date,
      siteConfig.wedding.ceremonyTime,
      siteConfig.wedding.venue.ceremony
    );
    downloadICSFromEvent(ceremonyEvent, 'wedding-ceremony.ics');
  };

  const handleReceptionCalendar = () => {
    const receptionEvent = createReceptionEvent(
      siteConfig.wedding.date,
      '4:00 PM', // Reception time
      siteConfig.wedding.venue.reception
    );
    downloadICSFromEvent(receptionEvent, 'wedding-reception.ics');
  };

  const openDirections = (mapsUrl: string) => {
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Section id="info" title="Ceremony & Reception" intro="Join us as we celebrate this special day">
      <motion.div 
        className="grid gap-8 lg:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Ceremony Details */}
        <motion.div 
          className="bg-white/90 backdrop-blur rounded-2xl overflow-hidden shadow-soft-glow"
          variants={cardVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          {/* Ceremony Image */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src="/images/ceremony_location.JPG" 
              alt="Ceremony venue - Iglesia Ni Cristo Lalaan"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-navy/20"></div>
          </div>
          
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-brand-navy/10 rounded-full flex items-center justify-center mr-4">
                <HiOutlineMapPin className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="font-heading text-2xl text-brand-navy">Ceremony</h3>
            </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <HiOutlineClock className="w-5 h-5 text-brand-gold mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-brand-ink">{siteConfig.wedding.ceremonyTime}</p>
                <p className="text-brand-ink/70 text-sm">Tuesday, December 16, 2025</p>
              </div>
            </div>

            <div className="flex items-start">
              <HiOutlineMapPin className="w-5 h-5 text-brand-gold mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-brand-ink">{siteConfig.venues.ceremony.name}</p>
                <p className="text-brand-ink/70 text-sm">{siteConfig.venues.ceremony.address}</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleCeremonyCalendar}
              className="w-full flex items-center justify-center bg-brand-navy text-white px-4 py-3 rounded-lg hover:bg-brand-navy/90 transition-colors duration-200"
            >
              <HiOutlineCalendarDays className="w-5 h-5 mr-2" />
              Add to Calendar
            </button>
            
            <button
              onClick={() => openDirections(siteConfig.venues.ceremony.googleMapsUrl)}
              className="w-full flex items-center justify-center border-2 border-brand-navy text-brand-navy px-4 py-3 rounded-lg hover:bg-brand-navy hover:text-white transition-colors duration-200"
            >
              <HiOutlineMapPin className="w-5 h-5 mr-2" />
              Get Directions
            </button>
          </div>

            <p className="text-sm text-brand-ink/60 mt-4 italic">
              {siteConfig.venues.ceremony.directions}
            </p>
          </div>
        </motion.div>

        {/* Reception Details */}
        <motion.div 
          className="bg-white/90 backdrop-blur rounded-2xl overflow-hidden shadow-soft-glow"
          variants={cardVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          {/* Reception Image */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src="/images/reception_location.jpg" 
              alt="Reception venue - Farm Hills Garden"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-gold/20"></div>
          </div>
          
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-heading text-2xl text-brand-navy">Reception</h3>
            </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <HiOutlineClock className="w-5 h-5 text-brand-gold mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-brand-ink">4:00 PM</p>
                <p className="text-brand-ink/70 text-sm">Cocktail hour & celebration</p>
              </div>
            </div>

            <div className="flex items-start">
              <HiOutlineMapPin className="w-5 h-5 text-brand-gold mt-1 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-brand-ink">{siteConfig.venues.reception.name}</p>
                <p className="text-brand-ink/70 text-sm">{siteConfig.venues.reception.address}</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleReceptionCalendar}
              className="w-full flex items-center justify-center bg-brand-gold text-brand-navy px-4 py-3 rounded-lg hover:bg-brand-gold/90 transition-colors duration-200 font-medium"
            >
              <HiOutlineCalendarDays className="w-5 h-5 mr-2" />
              Add to Calendar
            </button>
            
            <button
              onClick={() => openDirections(siteConfig.venues.reception.googleMapsUrl)}
              className="w-full flex items-center justify-center border-2 border-brand-gold text-brand-gold px-4 py-3 rounded-lg hover:bg-brand-gold hover:text-brand-navy transition-colors duration-200"
            >
              <HiOutlineMapPin className="w-5 h-5 mr-2" />
              Get Directions
            </button>
          </div>

            <p className="text-sm text-brand-ink/60 mt-4 italic">
              {siteConfig.venues.reception.description}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Google Maps Embed */}
      <motion.div 
        className="mt-12"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="aspect-video rounded-2xl overflow-hidden shadow-soft-glow">
          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Farm%20Hills%20Garden%20Brgy%20Ulat%20Silang%20Cavite+(Farm%20Hills%20Garden)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Farm Hills Garden - Wedding Reception Venue"
          ></iframe>
        </div>
      </motion.div>

      {/* Wedding Notes */}
      <motion.div 
        className="mt-12 grid gap-6 md:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="bg-brand-beige/50 backdrop-blur rounded-xl p-6 text-center"
          variants={cardVariants}
        >
          <h4 className="font-heading text-lg text-brand-navy mb-3">Gift</h4>
          <p className="text-brand-ink/80 text-sm leading-relaxed">
            Your presence & prayers are our greatest gift. If you wish to give, a monetary gift is appreciated.
          </p>
        </motion.div>

        <motion.div 
          className="bg-brand-beige/50 backdrop-blur rounded-xl p-6 text-center"
          variants={cardVariants}
        >
          <h4 className="font-heading text-lg text-brand-navy mb-3">Plus One</h4>
          <p className="text-brand-ink/80 text-sm leading-relaxed">
            Attendance is limited to invited guests only. Thank you for understanding.
          </p>
        </motion.div>

        <motion.div 
          className="bg-brand-beige/50 backdrop-blur rounded-xl p-6 text-center"
          variants={cardVariants}
        >
          <h4 className="font-heading text-lg text-brand-navy mb-3">Unplugged</h4>
          <p className="text-brand-ink/80 text-sm leading-relaxed">
            Please keep phones/cameras off during the ceremony so everyone can be present.
          </p>
        </motion.div>
      </motion.div>

      {/* Hashtag */}
      <motion.div 
        className="mt-8 text-center"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="font-heading text-brand-navy mb-2">Snap & Share:</p>
        <button 
          className="font-heading text-2xl text-brand-gold hover:text-brand-navy transition-colors duration-200 relative"
          onClick={copyHashtag}
        >
          {siteConfig.couple.hashtag}
          {copiedText === 'hashtag' && (
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-brand-navy text-white text-xs px-2 py-1 rounded">
              Copied!
            </span>
          )}
        </button>
      </motion.div>
    </Section>
  );
};

export default Info;