import React from 'react';
import { motion } from 'framer-motion';
import { FiGift, FiUsers, FiCamera, FiInstagram, FiFacebook } from 'react-icons/fi';
import { siteConfig } from '../data/site';

const InfoCards: React.FC = () => {
  const cards = [
    {
      title: "Gift Guide",
      icon: <FiGift className="w-8 h-8" />,
      content: "With all that we have, we've been truly blessed. Your Presence and Prayers are all that we request. But if you desire to give nonetheless, Monetary gift is the one we humbly suggest.",
      bgGradient: "from-gold/10 to-cream"
    },
    {
      title: "Plus One",
      icon: <FiUsers className="w-8 h-8" />,
      content: "To keep our celebration intimate, we kindly request that attendance be limited to our invited guests only. Thank you for understanding as we cherish this moment with our closest love ones.",
      bgGradient: "from-dusty/10 to-baby/5"
    },
    {
      title: "Let's Unplug",
      icon: <FiCamera className="w-8 h-8" />,
      content: "We truly appreciate the genuine happiness felt on this celebration with you. Please turn off/silent your phones and cameras until after ceremony.",
      bgGradient: "from-navy/10 to-steel/5"
    },
    {
      title: "Snap & Share",
      icon: <FiInstagram className="w-8 h-8" />,
      content: `We'd love to relive our day through your eyes! Don't forget to tag your photos with our official hashtag: ${siteConfig.couple.hashtag}`,
      bgGradient: "from-powder/30 to-baby/10",
      social: true
    }
  ];

  const copyHashtag = () => {
    navigator.clipboard.writeText(siteConfig.couple.hashtag);
    // You could add a toast notification here
  };

  return (
    <section className="section-padding bg-gradient-to-b from-cream to-powder/20">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${card.bgGradient} rounded-2xl p-8 shadow-lg border border-gold/20 card-hover`}
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mr-4 shadow-md">
                  <div className="text-navy">
                    {card.icon}
                  </div>
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-navy">
                  {card.title}
                </h3>
              </div>

              {/* Content */}
              <p className="text-steel text-base lg:text-lg leading-relaxed mb-6">
                {card.content}
              </p>

              {/* Special Actions */}
              {card.social && (
                <div className="space-y-4">
                  {/* Hashtag with Copy Button */}
                  <div className="bg-white/60 rounded-lg p-4 border border-gold/30">
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-xl text-navy font-bold">
                        {siteConfig.couple.hashtag}
                      </span>
                      <motion.button
                        onClick={copyHashtag}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-navy text-cream px-4 py-2 rounded-lg text-sm font-medium hover:bg-steel transition-colors duration-300"
                      >
                        Copy
                      </motion.button>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <FiInstagram className="w-6 h-6" />
                    </motion.a>
                    <motion.a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <FiFacebook className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
              )}

              {/* Attire Guide Special Content */}
              {card.title === "Attire Guide" && (
                <div className="space-y-4">
                  <div className="bg-white/60 rounded-lg p-4 border border-gold/30">
                    <h4 className="font-heading text-lg font-semibold text-navy mb-2">
                      Principal Sponsors:
                    </h4>
                    <p className="text-steel text-sm mb-1">Gentlemen: Grey suit and navy blue necktie</p>
                    <p className="text-steel text-sm">Ladies: Long gown (grey pallet)</p>
                  </div>
                  
                  <div className="bg-white/60 rounded-lg p-4 border border-gold/30">
                    <h4 className="font-heading text-lg font-semibold text-navy mb-2">
                      Guests:
                    </h4>
                    <p className="text-steel text-sm mb-1">Gentlemen: Coat and tie; or long-sleeved Polo and slacks</p>
                    <p className="text-steel text-sm">Ladies: Long gown; or cocktail dress</p>
                  </div>

                  {/* Color Palette */}
                  <div className="bg-white/60 rounded-lg p-4 border border-gold/30">
                    <h4 className="font-heading text-sm font-semibold text-navy mb-3">
                      See our color palette:
                    </h4>
                    <div className="flex space-x-2">
                      {siteConfig.colorPalette.map((color, idx) => (
                        <div
                          key={idx}
                          className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;