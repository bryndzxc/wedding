import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../ui/Section';
import { siteConfig } from '../data/site';
import { getTextStyle, getTransformStyle, getModalStyle } from '../utils/ios';

interface EntourageMember {
  name: string;
  role: string;
  photo?: string;
  description?: string;
}

const Entourage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<EntourageMember | null>(null);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
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

  const hoverVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Transform entourage data into renderable sections
  const entourageSections = [
    {
      title: "Parents of the Groom",
      members: siteConfig.entourage.parents.groom.map(name => ({ name, role: "Parent", photo: undefined, description: undefined } as EntourageMember))
    },
    {
      title: "Parents of the Bride", 
      members: siteConfig.entourage.parents.bride.map(name => ({ name, role: "Parent", photo: undefined, description: undefined } as EntourageMember))
    },
    {
      title: "Principal Sponsors",
      members: siteConfig.entourage.principalSponsors.map(name => ({ name, role: "Principal Sponsor", photo: undefined, description: undefined } as EntourageMember))
    },
    {
      title: "Best Man & Maid of Honor",
      members: [
        { name: siteConfig.entourage.bestMan, role: "Best Man", photo: undefined, description: undefined } as EntourageMember,
        { name: siteConfig.entourage.maidOfHonor, role: "Maid of Honor", photo: undefined, description: undefined } as EntourageMember
      ]
    },
    {
      title: "Groomsmen",
      members: siteConfig.entourage.groomsmen.map(name => ({ name, role: "Groomsman", photo: undefined, description: undefined } as EntourageMember))
    },
    {
      title: "Bridesmaids",
      members: siteConfig.entourage.bridesmaids.map(name => ({ name, role: "Bridesmaid", photo: undefined, description: undefined } as EntourageMember))
    },
    {
      title: "Special Roles",
      members: [
        { name: siteConfig.entourage.ringBearer, role: "Ring Bearer", photo: undefined, description: undefined } as EntourageMember,
        ...siteConfig.entourage.flowerGirl.map(name => ({ name, role: "Flower Girl", photo: undefined, description: undefined } as EntourageMember))
      ]
    }
  ];

  const openModal = (member: EntourageMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  // Handle keyboard navigation for modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedMember) {
        closeModal();
      }
    };

    if (selectedMember) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

  return (
    <Section 
      id="entourage" 
      title="Our Wedding Party" 
      intro="The special people who will stand with us on our big day"
    >
      <div className="space-y-12">
        {entourageSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="font-heading text-2xl text-brand-navy text-center mb-8"
              variants={cardVariants}
            >
              {section.title}
            </motion.h3>
            
            <div className={`grid gap-4 sm:gap-6 ${
              section.members.length === 1 
                ? 'justify-center max-w-sm mx-auto'
                : section.members.length === 2 
                  ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
                : section.title === 'Principal Sponsors'
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'
                : section.title === 'Special Roles'
                    ? 'grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto'
                  : section.members.length <= 4
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            }`}>
              {section.members.map((member, memberIndex) => (
                <motion.div
                  key={`${sectionIndex}-${memberIndex}`}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group cursor-pointer"
                  onClick={() => openModal(member)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openModal(member);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View details for ${member.name}`}
                >
                  <motion.div 
                    className={`bg-white/90 backdrop-blur rounded-2xl shadow-soft-glow transition-all duration-300 group-hover:shadow-lg group-focus:shadow-lg group-focus:outline-none group-focus:ring-2 group-focus:ring-brand-gold ${
                      section.title === 'Principal Sponsors' 
                        ? 'p-4 min-h-[120px] flex flex-col justify-center'
                        : 'p-6'
                    }`}
                    variants={hoverVariants}
                    style={getTransformStyle()}
                  >
                    <h4 className={`font-heading text-brand-navy text-center mb-1 ${
                      section.title === 'Principal Sponsors' 
                        ? 'text-base leading-snug'
                        : 'text-lg'
                    }`}
                    style={getTextStyle()}>
                      {member.name}
                    </h4>
                    
                    <p className="text-brand-gold text-sm text-center font-medium"
                    style={getTextStyle()}>
                      {member.role}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for member details */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            style={getModalStyle()}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm" />
            
            {/* Modal Content */}
            <motion.div
              className="relative bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={getTransformStyle()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-brand-beige/50 hover:bg-brand-beige transition-colors duration-200"
                aria-label="Close modal"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-heading text-2xl text-brand-navy mb-2">
                  {selectedMember.name}
                </h3>
                <p className="text-brand-gold font-medium mb-4">
                  {selectedMember.role}
                </p>
                {selectedMember.description && (
                  <p className="text-brand-ink/80 leading-relaxed">
                    {selectedMember.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Entourage;