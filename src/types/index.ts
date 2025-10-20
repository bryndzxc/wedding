export interface TimelineItem {
  time: string;
  event: string;
  icon: string;
  description: string;
}

export interface StoryItem {
  title: string;
  content: string;
  image: string;
}

export interface Venue {
  name: string;
  address: string;
  mapsUrl: string;
}

export interface EntourageGroup {
  bride: string[];
  groom: string[];
}

export interface Entourage {
  parents: EntourageGroup;
  principalSponsors: string[];
  bestMan: string;
  maidOfHonor: string;
  groomsmen: string[];
  bridesmaids: string[];
  ringBearer: string;
  flowerGirl: string;
}

export interface ColorItem {
  name: string;
  hex: string;
}

export interface SiteConfig {
  couple: {
    bride: string;
    groom: string;
    hashtag: string;
  };
  wedding: {
    date: string;
    ceremonyTime: string;
    venue: {
      ceremony: Venue;
      reception: Venue;
    };
  };
  timeline: TimelineItem[];
  story: StoryItem[];
  entourage: Entourage;
  gallery: string[];
  social: {
    instagram: string;
    facebook: string;
  };
  links: {
    rsvp: string;
    invitationPdf: string;
  };
  colorPalette: ColorItem[];
}