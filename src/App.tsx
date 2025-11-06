import { MotionConfig } from 'framer-motion';
import Layout from './ui/Layout';
import Navbar from './components/Navbar';
import EdgeFlorals from './ui/EdgeFlorals';
import Hero from './components/Hero';
import Story from './components/Story';
import Video from './components/Video';
import Timeline from './components/Timeline';
import AttireGuide from './components/AttireGuide';
import Info from './components/Info';
import Entourage from './components/Entourage';
import LocationGuide from './components/LocationGuide';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import './App.css';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Layout>
        <EdgeFlorals />
        <Navbar />
        <Hero />
        <Story />
        <Timeline />
        <AttireGuide />
        <Info />
        <Entourage />
        <LocationGuide />
        <Gallery />
        <Video />
        <RSVP />
        <footer className="border-t border-brand-gold/30 py-8 text-center text-sm text-brand-ink/70 mt-16 bg-brand-beige/20">
          <p className="font-body">
            With love, {new Date().getFullYear()} • <span className="font-script text-brand-navy text-lg">Brynd & Joanna</span>
          </p>
        </footer>
      </Layout>
    </MotionConfig>
  );
}

export default App;
