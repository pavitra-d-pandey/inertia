export type GalleryItem = {
  id: number;
  title: string;
  preview: string;
  description: string;
  imageUrl: string;
  category: string;
};

export type LandingContent = {
  heroTitle: string;
  heroSubtitle: string;
  dates: string;
  location: string;
  highlights: string[];
};

export type EventInfo = {
  id: number;
  slug: string;
  title: string;
  description: string;
  dateLabel: string;
  ctaLabel: string;
};

export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  preview: string;
  about: string;
  imageUrl: string;
};

export type CulturalEvent = {
  id: number;
  title: string;
  preview: string;
  description: string;
};

export type WorkshopRegistration = {
  id: number;
  workshop: string;
  name: string;
  email: string;
  phone: string;
  paymentStatus: string;
  paymentId: string;
  createdAt: string;
};

export type RoboRegistration = {
  id: number;
  teamName: string;
  captainName: string;
  email: string;
  phone: string;
  robotName: string;
  memberCount: number;
  members: Array<{
    name: string;
    email: string;
    phone: string;
  }>;
  paymentStatus: string;
  paymentId: string;
  createdAt: string;
};

export type HackathonRegistration = {
  id: number;
  teamName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  memberCount: number;
  femaleCount: number;
  members: Array<{
    name: string;
    email: string;
    phone: string;
    gender: string;
  }>;
  paymentStatus: string;
  paymentId: string;
  createdAt: string;
};
