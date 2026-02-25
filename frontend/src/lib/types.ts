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
  imageUrl: string;
};

export type WorkshopRegistration = {
  id: number;
  workshop: string;
  name: string;
  email: string;
  phone: string;
  collegeName: string;
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
  collegeName: string;
  memberCount: number;
  members: Array<{
    name: string;
    email: string;
    phone: string;
    branch: string;
    semester: string;
    collegeName: string;
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
  collegeName: string;
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

export type HackathonIDCardParticipant = {
  name: string;
  phone: string;
  gender: string;
  role: string;
};

export type HackathonIDCardRequest = {
  requestId: number;
  registrationId: number;
  requestedAt: string;
  teamName: string;
  collegeName: string;
  leaderName: string;
  leaderPhone: string;
  participants: HackathonIDCardParticipant[];
};

export type HackathonIDCard = {
  teamName: string;
  collegeName: string;
  participantName: string;
  participantPhone: string;
  role: string;
  teamId: number;
  teamCode: string;
  issuedAt: string;
};

export type HackathonProblemStatementChoice = {
  teamId: string;
  teamName: string;
  leaderName: string;
  themeName: string;
  domain: string;
  title: string;
  confirmedAt: string;
};

export type EsportsRegistration = {
  id: number;
  teamName: string;
  game: string;
  isCollegeParticipant: boolean;
  collegeName: string;
  teamLeaderName: string;
  teamLeaderEmail: string;
  teamLeaderPhone: string;
  hasSubstitute: boolean;
  substitutePlayer?: {
    name: string;
    gameId: string;
    whatsappNumber: string;
  };
  memberCount: number;
  members: Array<{
    name: string;
    whatsappNumber: string;
    gameId: string;
    collegeName: string;
  }>;
  paymentStatus: string;
  paymentId: string;
  createdAt: string;
};

export type SoloEsportsRegistration = {
  id: number;
  game: string;
  playerName: string;
  whatsappNumber: string;
  gameId: string;
  isCollegeParticipant: boolean;
  collegeName: string;
  isTeamAssigned: boolean;
  assignedTeamId: number;
  refundEligible: boolean;
  paymentStatus: string;
  paymentId: string;
  createdAt: string;
};

export type SoloEsportsRandomTeam = {
  id: number;
  teamCode: string;
  game: string;
  teamSize: number;
  memberCount: number;
  members: Array<{
    soloRegistrationId: number;
    name: string;
    whatsappNumber: string;
    gameId: string;
    collegeName: string;
  }>;
  createdAt: string;
};

export type OpenMicRegistration = {
  id: number;
  name: string;
  email: string;
  phone: string;
  enrollmentNumber: string;
  year: string;
  collegeName: string;
  performanceType: string;
  scriptPdfUrl: string;
  createdAt: string;
};

export type ContactSubmission = {
  id: number;
  email: string;
  phone: string;
  issue: string;
  createdAt: string;
};
