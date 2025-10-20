import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiMusic, FiMinus } from 'react-icons/fi';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // No auto-play - user must manually start music
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.loop = true;
      
      // Just listen for play/pause events to update UI state
      const handlePause = () => setIsPlaying(false);
      const handlePlay = () => setIsPlaying(true);

      audio.addEventListener('pause', handlePause);
      audio.addEventListener('play', handlePlay);

      // Cleanup
      return () => {
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('play', handlePlay);
      };
    }
  }, [])

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (audio) {
      try {
        if (isPlaying) {
          await audio.pause();
          setIsPlaying(false);
        } else {
          await audio.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log('Toggle play failed:', error);
      }
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/music/wedding-song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: isMinimized ? 0.8 : 1
          }}
          className={`fixed bottom-6 right-6 z-50 ${
            isMinimized ? 'w-16 h-16' : 'w-80'
          }`}
        >
          <div className={`bg-white/95 backdrop-blur-md shadow-2xl border border-gold/30 transition-all duration-300 ${
            isMinimized 
              ? 'rounded-full p-4' 
              : 'rounded-2xl p-6'
          }`}>
            {!isMinimized ? (
              // Full Player
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold to-dusty rounded-full flex items-center justify-center">
                      <FiMusic className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-semibold text-navy">
                        Wedding Music
                      </h4>
                      <p className="text-xs text-steel">
                        Background Music
                      </p>
                    </div>
                  </div>
                  
                  {/* Only minimize button, no close button */}
                  <div className="flex items-center space-x-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsMinimized(true)}
                      className="w-8 h-8 bg-steel/20 hover:bg-steel/30 rounded-full flex items-center justify-center transition-colors duration-200"
                      title="Minimize player"
                    >
                      <FiMinus className="w-4 h-4 text-steel" />
                    </motion.button>
                  </div>
                </div>

              {/* Music Info */}
              <div className="bg-gradient-to-r from-cream to-powder/50 rounded-lg p-3">
                <p className="text-sm font-medium text-navy">
                  🎵 {isPlaying ? 'Playing our special song' : 'Click play to start our special song'}
                </p>
                <p className="text-xs text-steel">
                  {isPlaying ? 'Perfect for browsing our memories' : 'Background music for your visit'}
                </p>
              </div>                {/* Controls */}
                <div className="flex items-center justify-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMute}
                    className="w-10 h-10 bg-steel/10 hover:bg-steel/20 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    {isMuted ? (
                      <FiVolumeX className="w-5 h-5 text-steel" />
                    ) : (
                      <FiVolume2 className="w-5 h-5 text-steel" />
                    )}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={togglePlay}
                    className="w-14 h-14 bg-gradient-to-br from-navy to-steel text-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    {isPlaying ? (
                      <FiPause className="w-6 h-6" />
                    ) : (
                      <FiPlay className="w-6 h-6 ml-1" />
                    )}
                  </motion.button>

                  <div className="w-10 h-10 bg-steel/10 rounded-full flex items-center justify-center">
                    <span className="text-xs text-steel font-medium">♾️</span>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="text-center">
                  <span className="text-xs text-steel">
                    {isPlaying ? '🎵 Playing' : '⏸️ Paused'} • Loop: ON
                  </span>
                </div>
              </div>
            ) : (
              // Minimized Player
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMinimized(false)}
                className="w-full h-full flex items-center justify-center"
              >
                {isPlaying ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <FiMusic className="w-6 h-6 text-navy" />
                  </motion.div>
                ) : (
                  <FiMusic className="w-6 h-6 text-steel" />
                )}
              </motion.button>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;