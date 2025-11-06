import { useState } from 'react';
import Section from '../ui/Section';
import Modal from '../ui/Modal';

export default function Invitation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Section 
      id="invitation" 
      title="Invitation" 
      intro="A keepsake to view, save, or print." 
      floral
    >
      <div className="mx-auto max-w-4xl">
        <div className="elegant-frame">
          <div className="elegant-card p-6 md:p-8">
            <div className="grid gap-8 md:grid-cols-[2fr_1fr] items-center">
              {/* Invitation Preview */}
              <div className="relative group cursor-pointer" onClick={() => setIsModalOpen(true)}>
                <img 
                  src="/assets/invite-front.jpg" 
                  alt="Wedding invitation preview" 
                  className="w-full rounded-xl shadow-glow transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.02]" 
                  loading="lazy" 
                />
                <div className="absolute inset-0 rounded-xl bg-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-cream/90 backdrop-blur px-4 py-2 rounded-full text-navy font-medium">
                    Click to view fullscreen
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4 md:pl-6">
                <div className="space-y-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full rounded-full bg-gold px-6 py-3 text-navy font-medium hover:bg-navy hover:text-cream transition-all duration-300 hover:shadow-glow"
                  >
                    View Fullscreen
                  </button>
                  
                  <a
                    href="/invitation.pdf"
                    download="Brynd-Joanna-Wedding-Invitation.pdf"
                    className="block w-full text-center rounded-full border border-gold/70 px-6 py-3 text-navy hover:bg-gold/10 transition-all duration-300"
                  >
                    Download Invitation (PDF)
                  </a>
                </div>

                <div className="pt-4 border-t border-gold/20">
                  <p className="text-sm text-steel/80 leading-relaxed">
                    💡 <strong>Tip:</strong> Save to your phone or share with family and friends.
                  </p>
                  <p className="text-xs text-steel/60 mt-2">
                    High-resolution PDF perfect for printing at home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small floral divider */}
        <img 
          src="/assets/floral-divider.svg" 
          alt="" 
          aria-hidden="true" 
          className="mx-auto mt-8 opacity-40 h-6" 
        />
      </div>

      {/* Fullscreen Modal */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-6">
          <img 
            src="/assets/invite-front.jpg" 
            alt="Wedding invitation (full size)" 
            className="w-full h-auto rounded-xl max-h-[70vh] object-contain" 
          />
          
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="/invitation.pdf"
              download="Brynd-Joanna-Wedding-Invitation.pdf"
              className="rounded-full bg-gold px-6 py-2.5 text-navy font-medium hover:bg-navy hover:text-cream transition-all duration-300"
            >
              📄 Download PDF
            </a>
            <button
              onClick={() => setIsModalOpen(false)}
              className="rounded-full border border-gold/70 px-6 py-2.5 text-navy hover:bg-gold/10 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </Section>
  );
}