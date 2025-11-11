import { useEffect, useState } from 'react';

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  
  useEffect(() => {
    const onS = () => setSolid(window.scrollY > 24);
    onS();
    window.addEventListener('scroll', onS);
    return () => window.removeEventListener('scroll', onS);
  }, []);
  
  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition ${solid ? 'bg-cream/80 backdrop-blur border-b border-gold/30' : ''}`}>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <span className="font-heading text-2xl text-navy">Brynd & Joanna</span>
        <div className="hidden sm:flex gap-6 text-navy">
          {['Story','Timeline','Attire','Entourage','Locations','Gallery','RSVP'].map(id =>
            <a key={id} href={`#${id.toLowerCase()}`} className="hover:text-gold transition">{id}</a>
          )}
        </div>
      </div>
    </nav>
  );
}