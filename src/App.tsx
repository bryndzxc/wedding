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
import Gallery from './components/Gallery';
import TestGallery from './components/TestGallery';
import RSVP from './components/RSVP';
import IOSDebugInfo from './components/IOSDebugInfo';
import EmergencyFixButton from './components/EmergencyFixButton';
import { useIOSFixes } from './hooks/useIOSFixes';
import { useCharsetFix } from './hooks/useCharsetFix';
import { useForceRender } from './hooks/useForceRender';
import './App.css';

function App() {
  // Apply iOS-specific fixes
  useIOSFixes();
  useCharsetFix();
  useForceRender();

  return (
    <MotionConfig reducedMotion="user">
      <Layout>
        <IOSDebugInfo />
        <EdgeFlorals />
        <Navbar />
        <Hero />
        <Story />
        <Video />
        <Timeline />
        <AttireGuide />
        <Info />
        <Entourage />
        <TestGallery />
        <Gallery />
        <RSVP />
        <EmergencyFixButton />
        <footer className="border-t border-brand-gold/30 py-8 text-center text-sm text-brand-ink/70 mt-16 bg-brand-beige/20">
          <p className="font-body">
            With love, {new Date().getFullYear()} • <span className="font-heading text-brand-navy text-lg">Brynd & Joanna</span>
          </p>
        </footer>
      </Layout>
    </MotionConfig>
  );
}

export default App;
