import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
import AttireGuide from './components/AttireGuide';
import LocationGuide from './components/LocationGuide';
import InfoCards from './components/InfoCards';
import Entourage from './components/Entourage';
import Gallery from './components/Gallery';
import MusicPlayer from './components/MusicPlayer';
import { siteConfig } from './data/site';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Countdown targetDate={`${siteConfig.wedding.date}T14:00:00`} />
      
      {/* Our Story - Coming soon */}
      <section id="story" className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-4xl text-navy text-center mb-8">Our Story</h2>
          <p className="text-center text-steel">Coming soon...</p>
        </div>
      </section>

      <Timeline />
      <LocationGuide />
      <AttireGuide />
      <InfoCards />
      <Entourage />
      <Gallery />

      <section id="rsvp" className="section-padding">
        <div className="container-max">
          <h2 className="font-heading text-4xl text-navy text-center mb-8">RSVP</h2>
          <div className="max-w-md mx-auto text-center">
            <p className="text-steel mb-6">Please let us know if you'll be joining us on our special day!</p>
            <button className="btn-primary">
              RSVP Now
            </button>
          </div>
        </div>
      </section>

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
}

export default App;
