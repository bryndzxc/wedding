import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlinePlay, HiOutlinePause, HiOutlineVolumeUp, HiOutlineVolumeOff } from 'react-icons/hi';
import { MdFullscreen } from 'react-icons/md';
import Section from '../ui/Section';

const Video: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => {
      setDuration(video.duration);
      setIsLoaded(true);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('loadeddata', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('loadeddata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !videoRef.current || !duration) return;
    
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const controlsVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <Section 
      id="video" 
      title="Prenup Video" 
      intro="A glimpse into our engagement photoshoot and special moments"
    >
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={fadeUpVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div 
          className="relative bg-black rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(isPlaying ? false : true)}
          onClick={handleVideoClick}
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-auto"
            muted={isMuted}
            onEnded={handleVideoEnd}
            poster="/assets/prenup/hero.jpg"
            preload="metadata"
          >
            <source src="/videos/STD-Brynd-Joanna.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Main Play/Pause Overlay */}
          {(!isPlaying || !isLoaded) && (
            <motion.div
              className="absolute inset-0 bg-black/40 flex items-center justify-center"
              variants={controlsVariants}
              animate={showControls ? "visible" : "hidden"}
            >
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <HiOutlinePause className="w-8 h-8 text-brand-navy ml-1" />
                ) : (
                  <HiOutlinePlay className="w-8 h-8 text-brand-navy ml-1" />
                )}
              </motion.button>
            </motion.div>
          )}

          {/* Enhanced Controls Bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4"
            variants={controlsVariants}
            animate={showControls ? "visible" : "hidden"}
          >
            {/* Progress Bar */}
            <div className="mb-4">
              <div 
                ref={progressRef}
                className="w-full h-2 bg-white/30 rounded-full cursor-pointer hover:h-3 transition-all duration-200"
                onClick={handleProgressClick}
              >
                <div 
                  className="h-full bg-brand-gold rounded-full transition-all duration-100 relative"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-200"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Play/Pause Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay();
                  }}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? (
                    <HiOutlinePause className="w-5 h-5 text-white" />
                  ) : (
                    <HiOutlinePlay className="w-5 h-5 text-white ml-0.5" />
                  )}
                </button>

                {/* Mute/Unmute Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? (
                    <HiOutlineVolumeOff className="w-5 h-5 text-white" />
                  ) : (
                    <HiOutlineVolumeUp className="w-5 h-5 text-white" />
                  )}
                </button>

                {/* Time Display */}
                <div className="text-white text-sm font-mono">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* Video Title */}
                <div className="text-white text-sm font-medium hidden md:block">
                  Prenup Video - Brynd & Joanna
                </div>

                {/* Fullscreen Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFullscreen();
                  }}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label="Toggle fullscreen"
                >
                  <MdFullscreen className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Loading State */}
          {!isLoaded && (
            <div className="absolute top-4 right-4">
              <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm animate-pulse">
                Loading...
              </div>
            </div>
          )}

          {/* Click to play hint */}
          {!isPlaying && isLoaded && (
            <div className="absolute top-4 right-4">
              <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                Click to play
              </div>
            </div>
          )}
        </div>

        {/* Video Description */}
        <motion.div 
          className="mt-8 text-center"
          variants={fadeUpVariants}
        >
          <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-soft-glow">
            <h3 className="font-heading text-xl text-brand-navy mb-3">
              Behind the Scenes
            </h3>
            <p className="text-brand-ink/80 leading-relaxed">
              Take a peek at our prenup photoshoot and see some of the fun moments 
              we captured while preparing for our big day. These memories are just the beginning!
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Video;