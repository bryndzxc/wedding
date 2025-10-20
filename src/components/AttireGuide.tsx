import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/site';
import SectionHeading from './SectionHeading';

const AttireGuide: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-baby/10 to-powder/30">
      <div className="container-max">
        <SectionHeading 
          title="Attire Guide" 
          subtitle="We can't wait to celebrate with you! Please come dressed in your most comfortable and elegant attire."
        />

        <div className="max-w-4xl mx-auto">
          {/* Principal Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gold/20">
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6 text-center uppercase tracking-wider">
                Principal Sponsors
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-navy to-steel p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img 
                        src="/images/principal_sponsor_gentlemen.png" 
                        alt="Principal Sponsor Gentlemen Attire"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-navy mb-2">Gentlemen</h4>
                  <p className="text-steel">Grey suit and navy blue necktie</p>
                </div>

                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-dusty to-baby p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img 
                        src="/images/principal_sponsor_ladies.png" 
                        alt="Principal Sponsor Ladies Attire"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-navy mb-2">Ladies</h4>
                  <p className="text-steel">Long gown (grey palette)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gold/20">
              <h3 className="font-heading text-2xl lg:text-3xl font-bold text-navy mb-6 text-center uppercase tracking-wider">
                Guests
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-steel to-navy p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img 
                        src="/images/guest_gentlemen.png" 
                        alt="Guest Gentlemen Attire"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-navy mb-2">Gentlemen</h4>
                  <p className="text-steel">Coat and tie; or long-sleeved Polo and slacks</p>
                </div>

                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-baby to-powder p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img 
                        src="/images/guest_ladies.png" 
                        alt="Guest Ladies Attire"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-navy mb-2">Ladies</h4>
                  <p className="text-steel">Long gown; or cocktail dress</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Color Palette */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-cream/90 to-powder/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gold/20 text-center">
              <h3 className="font-heading text-xl lg:text-2xl font-bold text-navy mb-6">
                See Our Color Palette Here
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                {siteConfig.colorPalette.map((color, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <div
                      className="w-16 h-16 lg:w-20 lg:h-20 rounded-full border-4 border-white shadow-lg mb-2"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="font-body text-sm lg:text-base text-navy font-medium">
                      {color.name}
                    </span>
                    <span className="font-mono text-xs text-steel">
                      {color.hex}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 text-steel text-sm lg:text-base max-w-2xl mx-auto"
              >
                These colors represent our wedding theme. Feel free to incorporate them into your attire to be part of our color story!
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AttireGuide;