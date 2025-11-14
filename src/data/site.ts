// Wedding website data configuration
export const siteConfig = {
  // Couple Information
  couple: {
    bride: "Joanna",
    groom: "Brynd",
    hashtag: "#BrofoundJOWone"
  },

  // Wedding Date and Time
  wedding: {
    date: "2025-12-16",
    ceremonyTime: "2:00 PM",
    venue: {
      ceremony: {
        name: "Iglesia Ni Cristo - Lokal of Lalaan",
        address: "50 Aguinaldo Hwy, Lalaan 2nd Silang 4118 Cavite",
        mapsUrl: "https://maps.google.com/?q=Iglesia+Ni+Cristo+Lalaan+Cavite"
      },
      reception: {
        name: "Farm Hills Garden",
        address: "Brgy. Ulat Silang 4118, Cavite Tagaytay", 
        mapsUrl: "https://maps.app.goo.gl/n3xpgo8TJBHthAQWA"
      }
    }
  },

  // Venues
  venues: {
    ceremony: {
      name: "Iglesia Ni Cristo - Lokal of Lalaan",
      address: "50 Aguinaldo Hwy, Lalaan 2nd Silang 4118 Cavite",
      googleMapsUrl: "https://www.google.com/maps/search/Iglesia+Ni+Cristo+Lalaan+Silang+Cavite/@14.1449,120.9703,17z",
      directions: "Please arrive 15 minutes early for seating. The ceremony will begin promptly at 2:00 PM."
    },
    reception: {
      name: "Farm Hills Garden",
      address: "Brgy. Ulat Silang 4118, Cavite Tagaytay", 
      googleMapsUrl: "https://maps.app.goo.gl/n3xpgo8TJBHthAQWA",
      description: "Join us for cocktails, dinner, dancing, and celebration! Cocktail hour begins at 4:00 PM followed by dinner service."
    }
  },

  // Timeline
  timeline: [
    {
      time: "2:00 PM",
      event: "Ceremony",
      icon: "church",
      description: "Join us as we exchange vows"
    },
    {
      time: "3:00 PM", 
      event: "Photos",
      icon: "camera",
      description: "Capturing precious moments"
    },
    {
      time: "4:00 PM",
      event: "Reception", 
      icon: "party",
      description: "Dinner and celebration begins"
    },
    {
      time: "7:30 PM",
      event: "Fireworks",
      icon: "fireworks", 
      description: "Light up the night sky"
    },
    {
      time: "8:00 PM",
      event: "Depart",
      icon: "heart",
      description: "Thank you for celebrating with us"
    }
  ],

  // Our Story
  story: [
    {
      title: "How We Met",
      content: "Our paths crossed in the most unexpected way...",
      image: "/src/assets/prenup/story-1.jpg"
    },
    {
      title: "The Proposal", 
      content: "Under the starlit sky, a question was asked...",
      image: "/src/assets/prenup/story-2.jpg"
    },
    {
      title: "What We're Grateful For",
      content: "Every moment has led us to this beautiful journey...",
      image: "/src/assets/prenup/story-3.jpg"
    }
  ],

  // Entourage
  entourage: {
    parents: {
      groom: ["Mr. Eutiquiano B. Benosa Jr.", "Mrs. Rosemarie P. Patena"],
      bride: ["Mr. Joseph P. Rebote", "Mrs. Annaliza T. Rebote"]
    },
    principalSponsors: [
      "Bro Eric Zagala and Sis Seferina Galope",
      "Bro Edmundo Blancaflor and Sis Rosalinda Querobin", 
      "Mr. Kim Lim and Mrs. Sheila Lim",
      "Mr. Ruel Cantuba and Mrs. Laymen Cantuba",
      "Mr. Noel Calibod and Mrs. Elvi Calibod"
    ],
    bestMan: "Prince Ernhel Palacios",
    maidOfHonor: "Jhonalyn Rebote", 
    groomsmen: [
      "Allen Lagundi",
      "Mark Joseph Cruz",
      "Annjo Rebote",
      "Adrian Patena"
    ],
    bridesmaids: [
      "Bea Lorraine Benosa", 
      "Anna Paula Patena",
      "Cheddy Ann Bautista",
      "Angelica Rebote"
    ],
    ringBearer: "Prince Rebote",
    flowerGirl: ["Princess Samantha Rebote", "Ezra Carlindria Bautista"]
  },

  // Gallery Images (your actual prenup photos - expanded collection)
  gallery: [
    "/images/prenup-photoshoot/03262806-42C7-48C5-ABCF-9ABA04B58E06A9M06029 (2025-10-19T03_45_33.837).jpeg",
    "/images/prenup-photoshoot/053CCA6E-3519-4592-9771-BCF95F4E7387A9M06550 (2025-10-19T03_47_59.499).jpeg",
    "/images/prenup-photoshoot/2A098CC6-A158-4765-BD60-D286466CEA64A9204516.jpeg",
    "/images/prenup-photoshoot/4075E3FC-DE65-4CDC-9B64-7738964BCBECA9204596.jpeg",
    "/images/prenup-photoshoot/58483872-AEFE-40C4-B3C6-681CCAC72ADEA9204754.jpeg",
    "/images/prenup-photoshoot/5A4EDE5E-B2A4-4338-9141-2E952D6D5D9EA9204577.jpeg",
    "/images/prenup-photoshoot/622E2154-6455-447F-82AD-55BC7B92893AA9204209.jpeg",
    "/images/prenup-photoshoot/6BC406F9-FF54-465D-8982-7D90A6E9D734A9204500.jpeg",
    "/images/prenup-photoshoot/8F25B107-F3C0-43F3-80ED-E9943AA90B53A9204590.jpeg",
    "/images/prenup-photoshoot/91B72865-B2A1-4C66-9936-6B4C7D62066BA9204323.jpeg",
    "/images/prenup-photoshoot/AE873F0D-9B90-4AF4-B7A4-81B23C5E1353A9204675.jpeg",
    "/images/prenup-photoshoot/E5FF094F-2F31-48B1-AC74-007BC5A2C234A9204602.jpeg",
    "/images/prenup-photoshoot/F5BDF74E-3142-4161-AD9B-18316D14A189A9204582.jpeg",
    "/images/prenup-photoshoot/20EF11CE-C00F-403B-B690-7846D6CD9018A9M05944 (2025-10-19T03_45_10.223).jpeg",
    "/images/prenup-photoshoot/4E510542-6374-48DB-8AAD-89AFD763FBD8A9M05947 (2025-10-19T03_45_16.326).jpeg",
    "/images/prenup-photoshoot/DE447C06-0AF1-41B5-80E0-8B8075BD733BA9M05959 (2025-10-19T03_45_25.016).jpeg",
    "/images/prenup-photoshoot/F4A037E8-0885-4913-BF8E-25C1D33FF775A9M06068 (2025-10-19T03_45_44.257).jpeg",
    "/images/prenup-photoshoot/7EBE5F84-90DB-4A50-BDD6-23175252798CA9M06088 (2025-10-19T03_45_54.151).jpeg",
    "/images/prenup-photoshoot/8464224D-0092-47B3-8D96-4611A7F90CB5A9M06092 (2025-10-19T03_46_00.654).jpeg",
    "/images/prenup-photoshoot/4AD564EE-EE10-455C-8E27-9C6F58897399A9M06125 (2025-10-19T03_46_07.129).jpeg"
  ],

  // Social Links
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com"
  },

  // External Links
  links: {
    rsvp: "https://forms.google.com/your-rsvp-form",
    invitationPdf: "/invitation.pdf"
  },

  // Color Palette for Display
  colorPalette: [
    { name: "Navy", hex: "#1D2A44" },
    { name: "Steel", hex: "#2F3E5E" },
    { name: "Dusty Blue", hex: "#5A7DAC" },
    { name: "Baby Blue", hex: "#9EB7D9" },
    { name: "Powder Blue", hex: "#D7E4F5" }
  ]
};