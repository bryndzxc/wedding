import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineClipboardDocumentCheck } from 'react-icons/hi2';
import Section from '../ui/Section';

const Gifts: React.FC = () => {
  const [copiedAccount, setCopiedAccount] = useState<string>('');

  const accountDetails = [
    {
      bank: 'BPI',
      accountName: 'Brynd Limuel Benosa',
      accountNumber: '0123-4567-89',
      type: 'Savings Account'
    },
    {
      bank: 'BDO',
      accountName: 'Joanna Rebote',
      accountNumber: '9876-5432-10',
      type: 'Savings Account'
    }
  ];

  const copyToClipboard = async (text: string, identifier: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAccount(identifier);
      setTimeout(() => setCopiedAccount(''), 2000);
    } catch (err) {
      console.error('Failed to copy account number:', err);
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <Section 
      id="gifts" 
      title="Wedding Gifts" 
      intro="Your presence at our wedding is the greatest gift of all"
      background="beige"
    >
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Gift Message */}
        <motion.div 
          className="text-center mb-12"
          variants={cardVariants}
        >
          <div className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-soft-glow">
            <h3 className="font-heading text-2xl text-brand-navy mb-4">
              A Note About Gifts
            </h3>
            <p className="text-brand-ink/80 leading-relaxed text-lg">
              Your presence on our special day means the world to us. However, if you wish to honor us with a gift, 
              a monetary contribution would be greatly appreciated as we begin our new life together.
            </p>
          </div>
        </motion.div>

        {/* QR Code Section */}
        <motion.div 
          className="text-center mb-12"
          variants={cardVariants}
        >
          <div className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-soft-glow">
            <h4 className="font-heading text-xl text-brand-navy mb-6">
              Digital Payment
            </h4>
            
            {/* QR Code Placeholder */}
            <div className="w-48 h-48 mx-auto bg-brand-beige/50 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center text-brand-ink/60">
                <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM19 13h2v2h-2zM13 13h2v2h-2zM15 15h2v2h-2zM13 17h2v2h-2zM15 19h2v2h-2zM17 17h2v2h-2zM17 13h2v2h-2zM19 15h2v2h-2z"/>
                </svg>
                <p className="text-sm">QR Code</p>
                <p className="text-xs">Coming Soon</p>
              </div>
            </div>
            
            <p className="text-brand-ink/70 text-sm">
              Scan the QR code above for GCash or Maya payments
            </p>
          </div>
        </motion.div>

        {/* Bank Account Details */}
        <motion.div 
          className="grid gap-6 md:grid-cols-2 mb-12"
          variants={containerVariants}
        >
          {accountDetails.map((account, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-soft-glow"
            >
              <div className="text-center">
                <h4 className="font-heading text-xl text-brand-navy mb-4">
                  {account.bank}
                </h4>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-brand-ink/70 mb-1">Account Name</p>
                    <p className="font-medium text-brand-ink">{account.accountName}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-brand-ink/70 mb-1">Account Number</p>
                    <div className="flex items-center justify-center gap-2">
                      <p className="font-mono text-lg text-brand-navy">{account.accountNumber}</p>
                      <button
                        onClick={() => copyToClipboard(account.accountNumber, `${account.bank}-${index}`)}
                        className="p-2 rounded-lg bg-brand-gold/10 hover:bg-brand-gold/20 transition-colors duration-200 relative"
                        aria-label={`Copy ${account.bank} account number`}
                      >
                        <HiOutlineClipboardDocumentCheck className="w-5 h-5 text-brand-gold" />
                        
                        {copiedAccount === `${account.bank}-${index}` && (
                          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-brand-navy text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                            Copied!
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-brand-ink/70">{account.type}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.div 
          className="text-center"
          variants={cardVariants}
        >
          <div className="bg-brand-paper/50 backdrop-blur rounded-xl p-6">
            <p className="text-brand-ink/70 text-sm leading-relaxed italic">
              Please know that your presence at our wedding is truly the most meaningful gift you could give us. 
              These details are provided only for those who have expressed a desire to contribute to our future together. 
              We are grateful for your love and support in whatever form it takes.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Gifts;