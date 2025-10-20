# Wedding Website - Brynd Limuel & Joanna

A beautiful, responsive wedding website built with React, Vite, and Tailwind CSS featuring elegant animations and modern design.

## 🎨 Features

- **Responsive Design**: Mobile-first approach with seamless tablet and desktop experiences
- **Modern Stack**: React 19 + TypeScript + Vite + Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant transitions and interactions
- **Accessibility**: High contrast, keyboard navigation, and screen reader support
- **Performance**: Optimized images, lazy loading, and fast loading times

## 🎯 Sections

- **Hero**: Full-screen engagement with couple names and wedding details
- **Countdown**: Live countdown to the wedding day
- **Timeline**: Wedding day schedule with custom SVG icons
- **Location Guide**: Ceremony and reception venue details with Google Maps integration
- **Attire Guide**: Dress code for Principal Sponsors and Guests with custom images
- **Info Cards**: Gift preferences, plus-one policy, unplugged ceremony
- **Entourage**: Wedding party and family members
- **Gallery**: Prenup photo showcase
- **RSVP**: Easy response collection
- **Music Player**: Background music with controls

## 🎨 Design Theme

**Colors:**
- Navy: #1D2A44 (primary text)
- Steel: #2F3E5E (secondary text)  
- Dusty Blue: #5A7DAC (accents)
- Baby Blue: #9EB7D9 (highlights)
- Powder Blue: #D7E4F5 (backgrounds)
- Gold: #C9A65B (accents & dividers)
- Cream: #F5F1EA (main background)

**Typography:**
- Headings: Cormorant Garamond (elegant serif)
- Script: Great Vibes (romantic script)
- Body: Lora (readable serif)

## 🛠️ Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Required Assets**
   - Wedding photos are in `/public/images/prenup-photoshoot/`
   - Location images: `ceremony_location.JPG`, `reception_location.jpg`
   - Attire guide images: `principal_sponsor_*.png`, `guest_*.png`
   - Assets are properly configured in `/src/data/site.ts`

3. **Configure Wedding Details**
   - Edit `/src/data/site.ts` with your specific information
   - Update meta tags in `index.html`

4. **Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation with scroll effects
│   ├── Hero.tsx        # Hero section with parallax
│   ├── Countdown.tsx   # Wedding countdown timer
│   ├── SectionHeading.tsx # Reusable section headers
│   └── ...             # Additional components
├── data/
│   └── site.ts         # Wedding configuration data
├── types/
│   └── index.ts        # TypeScript type definitions
├── assets/
│   └── prenup/         # Wedding photo assets
└── hooks/              # Custom React hooks
```

## ✅ Completed Features

- [x] **Hero Section** - Full-screen with couple names and wedding date
- [x] **Navbar** - Responsive navigation with scroll effects
- [x] **Countdown** - Live countdown to wedding day
- [x] **Timeline** - Wedding day schedule with custom icons
- [x] **Location Guide** - Ceremony and reception venues with images and maps
- [x] **Attire Guide** - Dress codes with custom imagery
- [x] **Info Cards** - Gift, plus-one, and unplugged ceremony information
- [x] **Entourage** - Wedding party listings
- [x] **Gallery** - Prenup photo showcase
- [x] **Music Player** - Background music controls
- [x] **RSVP Section** - Response collection interface

## 🎯 TODO Features

- [ ] **Our Story Section** - How we met and proposal story
- [ ] **Download Section** - Wedding invitation PDF download
- [ ] **Footer** - Credits and additional links
- [ ] **Gallery Lightbox** - Enhanced photo viewing experience

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ♿ Accessibility Features

- High contrast color ratios
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Reduced motion respect
- Alt text for all images



---

Built with ❤️ for Brynd Limuel & Joanna's special day
