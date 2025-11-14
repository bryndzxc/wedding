import Section from '../ui/Section';
import { siteConfig } from '../data/site';

const TimelineIcon = ({ icon }: { icon: string }) => {
  const iconMap = {
    church: "💒",
    camera: "📸",
    party: "🎉",
    fireworks: "🎆",
    heart: "💕"
  };
  
  return (
    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-navy font-semibold shadow-lg">
      <span className="text-xl">{iconMap[icon as keyof typeof iconMap] || "🎉"}</span>
    </div>
  );
};

export default function Timeline() {
  return (
    <Section 
      id="timeline" 
      title="Wedding Timeline" 
      intro="Our special day schedule"
    >
      <div className="mx-auto max-w-4xl">
        <div className="elegant-frame">
          <div className="elegant-card p-8 md:p-12">
            {/* Timeline Header */}
            <div className="text-center mb-12">
              <h3 className="font-heading text-2xl md:text-3xl text-brand-navy mb-4">
                Wedding Timeline
              </h3>
              <div className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent w-24 mx-auto"></div>
            </div>

            {/* Timeline Container */}
            <div className="relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-brand-gold/30 h-full hidden md:block"></div>

              {/* Timeline Events */}
              <div className="space-y-8 md:space-y-12">
                {siteConfig.timeline.map((item, index) => (
                  <div key={index} className={`relative flex items-center ${
                    index % 2 === 0 
                      ? 'md:flex-row' 
                      : 'md:flex-row-reverse'
                  } flex-col md:flex-row`}>
                    
                    {/* Left Side Content (or Right on odd items) */}
                    <div className={`w-full md:w-5/12 ${
                      index % 2 === 0 
                        ? 'md:text-right md:pr-8' 
                        : 'md:text-left md:pl-8'
                    } text-center md:text-left`}>
                      <div className="mb-4 md:mb-0">
                        <h4 className="font-heading text-xl md:text-2xl text-brand-navy font-semibold mb-2">
                          {item.event}
                        </h4>
                        <p className="font-body text-brand-ink/80 text-sm md:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="relative z-10 flex items-center justify-center md:w-2/12 mb-4 md:mb-0">
                      <TimelineIcon icon={item.icon} />
                    </div>

                    {/* Right Side Time (or Left on odd items) */}
                    <div className={`w-full md:w-5/12 ${
                      index % 2 === 0 
                        ? 'md:text-left md:pl-8' 
                        : 'md:text-right md:pr-8'
                    } text-center`}>
                      <div className="bg-brand-navy/5 rounded-lg p-4 border border-brand-gold/20">
                        <div className="text-2xl md:text-3xl font-heading font-bold text-brand-navy mb-1 !font-heading">
                          {item.time}
                        </div>
                        <div className="font-body text-brand-ink/60 text-sm uppercase tracking-wide">
                          {item.event}
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot (hidden on mobile since we show icon) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-gold rounded-full border-4 border-brand-paper hidden md:block z-10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="text-center mt-8">
          <div className="inline-block text-brand-gold/60">
            ✦ ✦ ✦
          </div>
        </div>
      </div>
    </Section>
  );
}