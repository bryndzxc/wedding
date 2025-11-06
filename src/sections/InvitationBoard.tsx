import { motion } from "framer-motion";
import { fadeUp, stagger } from "../theme/motion";

export default function InvitationBoard() {
  return (
    <section id="board" className="relative bg-brand-paper min-h-screen">
      {/* Welcome Header */}
      <div className="mx-auto max-w-6xl px-6 pt-16 md:pt-24">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-6xl text-brand-navy mb-4">
            Brynd & Joanna
          </h1>
          <p className="text-xl md:text-2xl text-brand-gold font-heading mb-2">
            December 16, 2025
          </p>
          <p className="text-brand-ink/70 mb-8">
            You're invited to celebrate our love story
          </p>
          <div className="flex justify-center">
            <img 
              src="/assets/floral-divider.png" 
              alt="" 
              aria-hidden="true" 
              className="h-6 opacity-60" 
            />
          </div>
        </div>
      </div>

      {/* Mosaic */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 px-6 py-10 md:py-16"
      >
        {/* Save the Date */}
        <Card href="#invitation" className="md:row-span-2 flex flex-col justify-center">
          <h3 className="font-heading text-2xl md:text-3xl text-brand-navy mb-3">
            Save the Date
          </h3>
          <p className="text-3xl md:text-4xl font-heading text-brand-gold mb-2">
            December 16
          </p>
          <p className="text-lg md:text-xl text-brand-navy">2025</p>
          <p className="text-sm text-brand-ink/60 mt-3">Jardin de Josefina</p>
        </Card>

        {/* Photo */}
        <Card href="#gallery" className="aspect-square overflow-hidden">
          <img 
            src="/assets/prenup/hero.jpg" 
            alt="Prenup" 
            className="w-full h-full object-cover rounded-xl"
          />
        </Card>

        {/* RSVP */}
        <Card href="#rsvp" className="flex flex-col justify-center text-center">
          <h3 className="font-heading text-xl md:text-2xl text-brand-navy mb-4">
            RSVP
          </h3>
          <button className="inline-flex items-center justify-center rounded-full border-2 border-brand-gold/60 px-6 py-3 text-sm font-medium text-brand-navy hover:bg-brand-gold/10 transition-colors">
            Respond Now
          </button>
        </Card>

        {/* Details */}
        <Card href="#locations" className="flex flex-col justify-center">
          <h3 className="font-heading text-xl text-brand-navy mb-2">
            Details
          </h3>
          <p className="text-sm text-brand-ink/70 mb-3">
            Ceremony, reception & map
          </p>
          <span className="text-xs text-brand-gold font-medium">
            → Open Details
          </span>
        </Card>

        {/* Timeline */}
        <Card href="#timeline" className="flex flex-col justify-center">
          <h3 className="font-heading text-xl text-brand-navy mb-2">
            Event Timeline
          </h3>
          <p className="text-sm text-brand-ink/70">
            Schedule of festivities
          </p>
        </Card>

        {/* Gallery teaser */}
        <Card href="#gallery" className="md:col-span-1 flex flex-col justify-center">
          <h3 className="font-heading text-xl text-brand-navy mb-2">
            Gallery
          </h3>
          <p className="text-sm text-brand-ink/70">
            Photo memories
          </p>
        </Card>
      </motion.div>

      {/* Floating round FAQs button */}
      <motion.a
        href="#faqs"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        whileHover={{ scale: 1.02 }}
        className="fixed md:absolute right-6 bottom-6 md:right-[8%] md:-bottom-10
                   grid place-items-center w-32 h-32 md:w-40 md:h-40 rounded-full 
                   bg-brand-navy text-brand-beige shadow-lg ring-1 ring-black/5 
                   transition-transform duration-300 z-10"
        aria-label="Open FAQs"
      >
        <span className="font-heading text-lg md:text-xl">FAQs</span>
      </motion.a>
    </section>
  );
}

function Card({
  href,
  className = "",
  children,
}: React.PropsWithChildren<{ href: string; className?: string }>) {
  return (
    <motion.a
      variants={fadeUp}
      href={href}
      whileHover={{ 
        y: -4, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className={`group relative rounded-2xl p-6 md:p-8 bg-white/90 backdrop-blur-sm
                  border-2 border-brand-gold/20 shadow-lg hover:shadow-xl hover:border-brand-gold/40
                  transition-all duration-300 block min-h-[140px] md:min-h-[160px] ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-paper/50 to-brand-beige/30 rounded-2xl" />
      <div className="relative h-full z-10">{children}</div>
      
      {/* Decorative corner accent */}
      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-brand-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.a>
  );
}