# Music Setup Instructions

## 🎵 Adding Background Music to Your Wedding Website

### YouTube Link Provided:
- **URL**: https://www.youtube.com/watch?v=6jcD0fOyxnM

### Required Steps:

1. **Download the Audio**
   - Use a YouTube to MP3 converter (like ytmp3.cc, y2mate.com, or similar)
   - Download the audio from the YouTube link above
   - Save it as `wedding-song.mp3`

2. **Add to Project**
   - Create a `music` folder in your `public` directory: `/public/music/`
   - Place the `wedding-song.mp3` file in `/public/music/`
   - Final path should be: `/public/music/wedding-song.mp3`

3. **File Structure**
   ```
   public/
   ├── music/
   │   └── wedding-song.mp3
   ├── images/
   └── ...
   ```

### 🎮 Music Player Features:

- **Auto-play**: Attempts to start playing when the page loads
- **Loop**: Music repeats automatically when it ends
- **Pause/Play**: Click the main button to control playback
- **Mute/Unmute**: Toggle sound on/off
- **Minimize**: Reduce player to a small floating icon
- **Close**: Hide the player completely
- **Volume**: Set to 30% by default for pleasant background listening

### 📱 Browser Considerations:

- **Auto-play Policy**: Modern browsers may block auto-play until user interaction
- **Mobile Safari**: May require user interaction to start audio
- **Chrome**: May require user interaction on first visit

### 🎨 Player Design:

- **Floating Position**: Bottom-right corner of the screen
- **Elegant Styling**: Matches your wedding theme with dusty blue and gold colors
- **Responsive**: Works on all device sizes
- **Smooth Animations**: Beautiful transitions and hover effects

### 🔧 Customization Options:

If you want to change the music file:
1. Replace `/public/music/wedding-song.mp3` with your new file
2. Keep the same filename, or update the `src` path in `MusicPlayer.tsx`

The music player will enhance your guests' experience while browsing through your beautiful wedding website! 🎵💕