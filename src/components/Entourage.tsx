import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/site';
import SectionHeading from './SectionHeading';

const Entourage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="entourage" className="section-padding bg-gradient-to-b from-powder/20 to-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-baby/5 to-dusty/5"></div>
      
      <div className="container-max relative z-10">
        <SectionHeading 
          title="Benosa & Rebote Nuptial" 
          subtitle="Our beloved family and friends who will stand with us"
        />

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Parents */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center justify-center mb-6">
                <div className="dusty-divider"></div>
                <h3 className="font-heading text-2xl lg:text-3xl text-navy px-6 uppercase tracking-wider">
                  Parents
                </h3>
                <div className="dusty-divider"></div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div variants={itemVariants} className="text-center">
                <h4 className="font-heading text-xl text-steel mb-4 uppercase tracking-wide">
                  Parents of the Groom
                </h4>
                <div className="space-y-2">
                  {siteConfig.entourage.parents.groom.map((parent, index) => (
                    <p key={index} className="font-body text-navy text-lg">
                      {parent}
                    </p>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <h4 className="font-heading text-xl text-steel mb-4 uppercase tracking-wide">
                  Parents of the Bride
                </h4>
                <div className="space-y-2">
                  {siteConfig.entourage.parents.bride.map((parent, index) => (
                    <p key={index} className="font-body text-navy text-lg">
                      {parent}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Principal Sponsors */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.div variants={itemVariants}>
              <div className="flex items-center justify-center mb-6">
                <div className="dusty-divider"></div>
                <h3 className="font-heading text-2xl lg:text-3xl text-navy px-6 uppercase tracking-wider">
                  Principal Sponsors
                </h3>
                <div className="dusty-divider"></div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              {siteConfig.entourage.principalSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/60 backdrop-blur-sm rounded-lg p-4 shadow-md border border-powder/30"
                >
                  <p className="font-body text-navy text-base lg:text-lg">
                    {sponsor}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Best Man & Maid of Honor */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center"
          >
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div variants={itemVariants}>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-px bg-gold"></div>
                  <h3 className="font-heading text-xl lg:text-2xl text-navy px-4 uppercase tracking-wider">
                    Best Man
                  </h3>
                  <div className="w-12 h-px bg-gold"></div>
                </div>
                <div className="bg-gradient-to-br from-navy/10 to-steel/5 rounded-xl p-6 shadow-lg">
                  <p className="font-body text-navy text-lg lg:text-xl font-medium">
                    {siteConfig.entourage.bestMan}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-px bg-gold"></div>
                  <h3 className="font-heading text-xl lg:text-2xl text-navy px-4 uppercase tracking-wider">
                    Maid of Honor
                  </h3>
                  <div className="w-12 h-px bg-gold"></div>
                </div>
                <div className="bg-gradient-to-br from-dusty/10 to-baby/5 rounded-xl p-6 shadow-lg">
                  <p className="font-body text-navy text-lg lg:text-xl font-medium">
                    {siteConfig.entourage.maidOfHonor}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Groomsmen & Bridesmaids */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center"
          >
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div variants={itemVariants}>
                <div className="flex items-center justify-center mb-6">
                  <div className="w-8 h-px bg-gold"></div>
                  <h3 className="font-heading text-xl lg:text-2xl text-navy px-4 uppercase tracking-wider">
                    Groomsmen
                  </h3>
                  <div className="w-8 h-px bg-gold"></div>
                </div>
                <div className="space-y-3">
                  {siteConfig.entourage.groomsmen.map((groomsman, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white/50 backdrop-blur-sm rounded-lg p-3 shadow-md border border-navy/10"
                    >
                      <p className="font-body text-navy text-base lg:text-lg">
                        {groomsman}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="flex items-center justify-center mb-6">
                  <div className="w-8 h-px bg-gold"></div>
                  <h3 className="font-heading text-xl lg:text-2xl text-navy px-4 uppercase tracking-wider">
                    Bridesmaids
                  </h3>
                  <div className="w-8 h-px bg-gold"></div>
                </div>
                <div className="space-y-3">
                  {siteConfig.entourage.bridesmaids.map((bridesmaid, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white/50 backdrop-blur-sm rounded-lg p-3 shadow-md border border-dusty/10"
                    >
                      <p className="font-body text-navy text-base lg:text-lg">
                        {bridesmaid}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Ring Bearer & Flower Girl */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center"
          >
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div variants={itemVariants}>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-8 h-px bg-gold"></div>
                  <h3 className="font-heading text-xl lg:text-2xl text-navy px-4 uppercase tracking-wider">
                    Ring Bearer
                  </h3>
                  <div className="w-8 h-px bg-gold"></div>
                </div>
                <div className="bg-gradient-to-br from-gold/10 to-cream rounded-xl p-6 shadow-lg">
                  <p className="font-body text-navy text-lg lg:text-xl font-medium">
                    {siteConfig.entourage.ringBearer}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-8 h-px bg-gold"></div>
                  <h3 className="font-heading text-xl lg:text-2xl text-navy px-4 uppercase tracking-wider">
                    Flower Girls
                  </h3>
                  <div className="w-8 h-px bg-gold"></div>
                </div>
                <div className="bg-gradient-to-br from-baby/10 to-powder/20 rounded-xl p-6 shadow-lg space-y-2">
                  {Array.isArray(siteConfig.entourage.flowerGirl) ? (
                    siteConfig.entourage.flowerGirl.map((girl, index) => (
                      <p key={index} className="font-body text-navy text-lg lg:text-xl font-medium">
                        {girl}
                      </p>
                    ))
                  ) : (
                    <p className="font-body text-navy text-lg lg:text-xl font-medium">
                      {siteConfig.entourage.flowerGirl}
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-cream/80 to-powder/30 rounded-2xl p-8 shadow-xl border border-gold/20">
            <p className="font-script text-2xl lg:text-3xl text-navy mb-4">
              "Surrounded by love, supported by family"
            </p>
            <p className="font-body text-steel text-base lg:text-lg">
              We are blessed to have these wonderful people by our side as we begin this new chapter together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Entourage;