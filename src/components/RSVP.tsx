import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

interface FormData {
  name: string;
  email: string;
  attendance: 'yes' | 'no' | '';
  message: string;
}

interface FormErrors {
  name?: string;
  attendance?: string;
}

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    attendance: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.attendance) {
      newErrors.attendance = 'Please select your attendance status';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Check if EmailJS environment variables exist
      if (import.meta.env.VITE_EMAILJS_SERVICE_ID && 
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID && 
          import.meta.env.VITE_EMAILJS_USER_ID) {
        
        // EmailJS integration would go here
        // For now, we'll simulate the submission
        console.log('EmailJS would send:', formData);
        
      } else {
        // Log the form data and show success
        console.log('RSVP Submission:', {
          ...formData,
          submittedAt: new Date().toISOString()
        });
      }
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        attendance: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
      
    } catch (error) {
      console.error('Failed to submit RSVP:', error);
      // In a real implementation, you'd show an error toast here
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 1 : value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const fadeUpVariants = {
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
      id="rsvp" 
      title="RSVP" 
      intro="We'd be honored to know if you'll celebrate with us"
      background="beige"
    >
      <motion.div 
        className="mx-auto max-w-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        {showSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-soft-glow text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl text-brand-navy mb-2">Thank You!</h3>
            <p className="text-brand-ink/80">
              Your RSVP has been received. We can't wait to celebrate with you!
            </p>
          </motion.div>
        ) : (
          <div className="bg-white/90 backdrop-blur rounded-2xl p-8 shadow-soft-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Name Field */}
                <div className="md:col-span-1">
                  <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none focus:ring-0 ${
                      errors.name 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-brand-beige focus:border-brand-gold'
                    } bg-white/80`}
                    placeholder="Enter your full name"
                    required
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="md:col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-brand-beige focus:border-brand-gold transition-colors duration-200 focus:outline-none focus:ring-0 bg-white/80"
                    placeholder="your.email@example.com"
                  />
                  <p className="mt-1 text-xs text-brand-ink/60">
                    Optional - for any updates or changes
                  </p>
                </div>
              </div>

              {/* Attendance Radio Buttons */}
              <div>
                <fieldset>
                  <legend className="block text-sm font-medium text-brand-navy mb-3">
                    Will you attend? *
                  </legend>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="attendance"
                        value="yes"
                        checked={formData.attendance === 'yes'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-brand-gold focus:ring-brand-gold border-brand-beige"
                        required
                      />
                      <span className="ml-2 text-brand-ink">Yes, I'll be there!</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="attendance"
                        value="no"
                        checked={formData.attendance === 'no'}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-brand-gold focus:ring-brand-gold border-brand-beige"
                        required
                      />
                      <span className="ml-2 text-brand-ink">Sorry, can't make it</span>
                    </label>
                  </div>
                  {errors.attendance && (
                    <p className="mt-2 text-sm text-red-600" role="alert">
                      {errors.attendance}
                    </p>
                  )}
                </fieldset>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-2">
                  Message for the Couple
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-brand-beige focus:border-brand-gold transition-colors duration-200 focus:outline-none focus:ring-0 bg-white/80 resize-vertical"
                  placeholder="Share your wishes, memories, or any special requests..."
                />
                <p className="mt-1 text-xs text-brand-ink/60">
                  Optional - share your excitement or any special requests
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-brand-ink/60 text-center sm:text-left">
                  We'll only use your details for guest list management and seating arrangements.
                </p>
                
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className={`inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 ${
                    isLoading
                      ? 'bg-brand-gold/50 text-brand-navy/70 cursor-not-allowed'
                      : 'bg-brand-gold text-brand-navy hover:bg-brand-navy hover:text-white shadow-soft-glow hover:shadow-lg'
                  }`}
                  whileTap={{ scale: 0.98 }}
                  aria-live="polite"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit RSVP'
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </Section>
  );
};

export default RSVP;