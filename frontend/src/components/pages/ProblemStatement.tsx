import { useMemo, useState } from 'react';
import { fetchJson } from '../../lib/api';
import compendiumRaw from '../../../Professional_Hackathon_Compendium_Full_Edition.txt?raw';

type Domain = 'fullstack' | 'ai_ml' | 'cybersecurity' | 'blockchain';

type Statement = {
  domain: Domain;
  title: string;
  summary: string;
};

type StatementDetails = {
  background: string;
  problemStatement: string;
  functionalRequirements: string[];
  technicalExpectations: string[];
  deliverables: string[];
  evaluationCriteria: string[];
  constraints: string[];
};

type Theme = {
  slug: string;
  name: string;
  statements: Record<Domain, Statement>;
};

type SessionState = {
  baseThemeIndex: number;
  activeThemeIndex: number;
  hiddenDomain: Domain;
  changeThemeState: 'unused' | 'active' | 'reverted';
  revealState: 'unused' | 'active' | 'reverted';
  superUsed: boolean;
  superThemeSlug: string;
  selectedKey: string;
  confirmedKey: string;
};

const DOMAINS: Domain[] = ['fullstack', 'ai_ml', 'cybersecurity', 'blockchain'];

const THEMES: Theme[] = [
  {
    slug: 'transport-mobility',
    name: 'Transport & Mobility',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Integrated Multi-Modal Urban Mobility Management Platform', summary: 'Build one platform for route planning, tracking, ticketing, and transport analytics.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Based Traffic Congestion Prediction & Dynamic Routing System', summary: 'Predict congestion and recommend better routes and traffic signal actions.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Secure Connected Vehicle & Transport Infrastructure Monitoring System', summary: 'Detect spoofing, intrusion, and anomalies in connected transport systems.' },
      blockchain: { domain: 'blockchain', title: 'Decentralized Smart Ticketing & Fare Settlement System', summary: 'Use smart contracts for transparent ticketing and automated fare splits.' }
    }
  },
  {
    slug: 'logistics-supply-chain',
    name: 'Logistics & Supply Chain',
    statements: {
      fullstack: { domain: 'fullstack', title: 'End-to-End Digital Supply Chain Visibility Platform', summary: 'Create end-to-end tracking across warehouse, shipments, and vendors.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Powered Demand Forecasting & Inventory Optimization System', summary: 'Forecast demand and optimize stock across locations.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Supply Chain Cyber Risk Detection & Vendor Vulnerability Monitoring System', summary: 'Monitor vendor risk and detect weak links in the supply chain network.' },
      blockchain: { domain: 'blockchain', title: 'Immutable Supply Chain Provenance & Anti-Counterfeit System', summary: 'Track provenance and verify authenticity with tamper-proof records.' }
    }
  },
  {
    slug: 'toys-games-entertainment',
    name: 'Toys, Games & Entertainment',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Adaptive Cross-Platform Gaming & Community Engagement Ecosystem', summary: 'Build identity, progression, events, and engagement features for players.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Driven Personalized Gaming Experience Engine', summary: 'Personalize difficulty, content, and retention using behavior data.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Online Gaming Fraud & Cheating Detection System', summary: 'Detect bots, account abuse, and transaction fraud in real time.' },
      blockchain: { domain: 'blockchain', title: 'Decentralized Ownership & NFT-Based In-Game Asset Marketplace', summary: 'Enable secure ownership and transfer of digital game assets.' }
    }
  },
  {
    slug: 'healthcare-medical',
    name: 'Healthcare & Medical Systems',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Integrated Digital Health Records & Telemedicine Platform', summary: 'Unify EMR, appointments, teleconsultation, and prescriptions.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Based Early Disease Detection & Risk Stratification System', summary: 'Predict risk early with explainable clinical AI models.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Medical IoT Device Intrusion Detection System', summary: 'Secure connected medical devices and detect anomalous activity.' },
      blockchain: { domain: 'blockchain', title: 'Decentralized Patient Data Exchange & Consent Management System', summary: 'Use consent smart contracts and immutable access trails.' }
    }
  },
  {
    slug: 'education-learning',
    name: 'Education & Learning Solutions',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Intelligent Unified Learning Management & Academic Analytics Platform', summary: 'Create an integrated LMS with engagement and performance analytics.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Powered Personalized Learning & Adaptive Curriculum Engine', summary: 'Recommend personalized study plans and adaptive content.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Secure Online Examination & Academic Integrity Monitoring System', summary: 'Protect exams against impersonation and cheating.' },
      blockchain: { domain: 'blockchain', title: 'Decentralized Academic Credit & Micro-Credential Verification Network', summary: 'Issue and verify tamper-proof credits across institutions.' }
    }
  },
  {
    slug: 'agriculture-agritech',
    name: 'Agriculture & Agri-Tech',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Digital Farm Management & Crop Monitoring Platform', summary: 'Track crop lifecycle, weather, pest alerts, and market insights.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Based Crop Yield Prediction & Disease Detection System', summary: 'Predict yield and detect diseases using time-series and vision models.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Secure Agricultural IoT Infrastructure Protection System', summary: 'Protect farm IoT devices and detect unauthorized access.' },
      blockchain: { domain: 'blockchain', title: 'Transparent Farm-to-Consumer Produce Traceability System', summary: 'Ensure produce traceability and authenticity from farm to retail.' }
    }
  },
  {
    slug: 'bfsi',
    name: 'Banking, Finance & Insurance',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Unified Digital Banking & Financial Services Super-App', summary: 'Integrate accounts, payments, loans, insurance, and analytics.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Based Credit Risk Assessment & Loan Default Prediction System', summary: 'Predict defaults with interpretable and fair credit models.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Real-Time Financial Fraud Detection & Risk Monitoring System', summary: 'Identify suspicious transactions and account compromise in real time.' },
      blockchain: { domain: 'blockchain', title: 'Decentralized Cross-Border Payment & Settlement Network', summary: 'Enable transparent, near real-time cross-border settlement.' }
    }
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Omnichannel Retail Experience & Inventory Intelligence Platform', summary: 'Unify catalog, inventory sync, order flow, and analytics.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Driven Personalized Shopping & Demand Forecasting Engine', summary: 'Recommend products and forecast demand simultaneously.' },
      cybersecurity: { domain: 'cybersecurity', title: 'E-Commerce Platform Threat Detection & Payment Security System', summary: 'Detect bots, fraud, and suspicious purchase behavior.' },
      blockchain: { domain: 'blockchain', title: 'Decentralized Product Authenticity & Anti-Counterfeit Verification System', summary: 'Offer product authenticity verification with blockchain traceability.' }
    }
  },
  {
    slug: 'energy-power',
    name: 'Energy & Power Management',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Intelligent Energy Monitoring & Distributed Grid Management Platform', summary: 'Monitor distributed energy systems and optimize load management.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Based Energy Demand Forecasting & Load Optimization System', summary: 'Predict demand and improve load balancing strategies.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Critical Infrastructure Protection for Smart Power Grids', summary: 'Secure SCADA and smart grid communications against cyber threats.' },
      blockchain: { domain: 'blockchain', title: 'Decentralized Peer-to-Peer Renewable Energy Trading Platform', summary: 'Trade surplus renewable energy with smart-contract settlement.' }
    }
  },
  {
    slug: 'smart-cities',
    name: 'Smart Cities & Urban Development',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Integrated Urban Operations & Citizen Engagement Platform', summary: 'Centralize city services, complaints, tracking, and analytics.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Driven Urban Planning & Resource Allocation Optimization System', summary: 'Model growth and optimize urban resource planning.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Urban Infrastructure Threat Detection & Surveillance Security System', summary: 'Detect cyber anomalies in city networks and surveillance systems.' },
      blockchain: { domain: 'blockchain', title: 'Transparent Municipal Governance & Budget Allocation Tracking System', summary: 'Track municipal budgets and expenditures transparently.' }
    }
  },
  {
    slug: 'tourism-hospitality',
    name: 'Tourism & Hospitality',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Intelligent End-to-End Travel Planning & Hospitality Management Platform', summary: 'Unify bookings, itineraries, and hospitality operations.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Powered Dynamic Pricing & Personalized Travel Recommendation Engine', summary: 'Forecast demand and optimize pricing and recommendations.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Hospitality Data Breach Prevention & Booking Fraud Detection System', summary: 'Detect fraud and suspicious access across booking flows.' },
      blockchain: { domain: 'blockchain', title: 'Decentralized Global Travel Identity & Loyalty Rewards Network', summary: 'Secure identity and interoperable loyalty rewards.' }
    }
  },
  {
    slug: 'sports-fitness',
    name: 'Sports & Fitness',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Integrated Athlete Performance & Fan Engagement Platform', summary: 'Track athlete metrics and improve fan interaction in one system.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Based Athlete Performance Prediction & Injury Risk Assessment System', summary: 'Predict injury risk and optimize training loads.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Sports Event Infrastructure & Streaming Security Protection System', summary: 'Protect ticketing and streaming pipelines from attacks.' },
      blockchain: { domain: 'blockchain', title: 'Transparent Athlete Contract & Sponsorship Management System', summary: 'Automate sponsorship and royalty agreements transparently.' }
    }
  },
  {
    slug: 'food-nutrition',
    name: 'Food & Nutrition',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Intelligent Digital Nutrition & Meal Planning Ecosystem', summary: 'Plan meals, track nutrients, and integrate grocery workflows.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Based Personalized Nutrition Recommendation & Health Risk Prediction System', summary: 'Personalize nutrition and predict diet-related risk.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Food Industry Digital Infrastructure & Payment Security Monitoring System', summary: 'Detect fraud, abuse, and payment anomalies in food systems.' },
      blockchain: { domain: 'blockchain', title: 'Transparent Food Supply Chain & Nutritional Authenticity Verification System', summary: 'Verify food provenance and nutritional authenticity.' }
    }
  },
  {
    slug: 'environment-sustainability',
    name: 'Environment & Sustainability',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Integrated Environmental Monitoring & Sustainability Reporting Platform', summary: 'Track emissions and environmental metrics with live reporting.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Driven Climate Risk Prediction & Sustainability Optimization System', summary: 'Predict climate risk and recommend sustainability actions.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Critical Environmental Infrastructure Security & Data Integrity Monitoring System', summary: 'Protect environmental systems against tampering and breach.' },
      blockchain: { domain: 'blockchain', title: 'Decentralized Carbon Credit Trading & Emission Verification System', summary: 'Tokenize and track carbon credits with transparent retirement.' }
    }
  },
  {
    slug: 'manufacturing-automation',
    name: 'Manufacturing & Industrial Automation',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Smart Factory Operations & Production Intelligence Platform', summary: 'Manage production, maintenance, quality, and workforce analytics.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Based Predictive Maintenance & Production Optimization System', summary: 'Predict failures and optimize maintenance and throughput.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Industrial Control System (ICS) Intrusion Detection & Protection Framework', summary: 'Detect attacks and anomalies in ICS/SCADA environments.' },
      blockchain: { domain: 'blockchain', title: 'Immutable Manufacturing Process & Quality Assurance Ledger', summary: 'Track components and quality checks in tamper-proof records.' }
    }
  },
  {
    slug: 'cybersecurity-data-protection',
    name: 'Cybersecurity & Data Protection',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Enterprise Data Governance & Access Management Platform', summary: 'Centralize access control, policies, and compliance reporting.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Driven Insider Threat & Data Leakage Prediction System', summary: 'Predict insider risk with behavioral analytics.' },
      cybersecurity: { domain: 'cybersecurity', title: 'AI-Augmented Security Operations Center (SOC) Monitoring System', summary: 'Aggregate logs and prioritize incidents automatically.' },
      blockchain: { domain: 'blockchain', title: 'Decentralized Identity (DID) & Secure Data Sharing Framework', summary: 'Enable selective disclosure with decentralized identity.' }
    }
  },
  {
    slug: 'media-digital-content',
    name: 'Media & Digital Content',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Unified Digital Content Creation, Distribution & Monetization Platform', summary: 'Support upload, streaming, monetization, and analytics.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Powered Content Recommendation & Audience Engagement Optimization Engine', summary: 'Deliver personalized recommendations and reduce churn.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Digital Media Platform Threat Detection & Anti-Piracy Monitoring System', summary: 'Identify scraping, abuse, piracy, and attack patterns.' },
      blockchain: { domain: 'blockchain', title: 'Decentralized Digital Rights Management & Royalty Distribution System', summary: 'Track ownership and automate transparent royalty payouts.' }
    }
  },
  {
    slug: 'real-estate-infrastructure',
    name: 'Real Estate & Infrastructure',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Smart Property Management & Infrastructure Analytics Platform', summary: 'Manage property, tenants, maintenance, and occupancy analytics.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Driven Property Valuation & Infrastructure Investment Optimization System', summary: 'Predict prices and optimize investment allocation.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Smart Building Infrastructure Security Monitoring System', summary: 'Protect smart building networks, access controls, and tenant data.' },
      blockchain: { domain: 'blockchain', title: 'Decentralized Real Estate Title Registry & Transaction Platform', summary: 'Maintain immutable title and ownership transfer records.' }
    }
  },
  {
    slug: 'defense-public-safety',
    name: 'Defense & Public Safety',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Integrated Emergency Response & Public Safety Command Platform', summary: 'Coordinate incidents, resources, and inter-agency communication.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Based Predictive Threat Assessment & Disaster Risk Forecasting System', summary: 'Forecast risk zones and likely incident severity.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Critical National Infrastructure Threat Intelligence & Intrusion Detection System', summary: 'Detect and prioritize risks across critical national systems.' },
      blockchain: { domain: 'blockchain', title: 'Tamper-Proof Defense Supply Chain & Asset Tracking System', summary: 'Track defense assets and inspections with immutable trails.' }
    }
  },
  {
    slug: 'social-impact-ngos',
    name: 'Social Impact & NGOs',
    statements: {
      fullstack: { domain: 'fullstack', title: 'NGO Program Management & Impact Analytics Platform', summary: 'Manage beneficiaries, volunteers, donations, and impact reporting.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Based Social Impact Measurement & Resource Allocation Optimization System', summary: 'Score outcomes and optimize resource placement.' },
      cybersecurity: { domain: 'cybersecurity', title: 'NGO Data Privacy & Donor Information Protection Framework', summary: 'Protect donor and beneficiary data from leaks and abuse.' },
      blockchain: { domain: 'blockchain', title: 'Transparent Donation Tracking & Fund Allocation System', summary: 'Track donation flow with milestone smart contracts.' }
    }
  },
  {
    slug: 'waste-management-recycling',
    name: 'Waste Management & Recycling',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Smart Waste Collection & Route Optimization Platform', summary: 'Optimize collection routes and track operations efficiently.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Based Waste Segregation & Recycling Efficiency Optimization System', summary: 'Classify waste and improve recycling decision-making.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Smart Waste Infrastructure Security Monitoring System', summary: 'Secure IoT-based waste infrastructure and monitor anomalies.' },
      blockchain: { domain: 'blockchain', title: 'Incentivized Recycling & Waste Credit Trading System', summary: 'Issue and redeem recycling credits transparently.' }
    }
  },
  {
    slug: 'hr-workforce-tech',
    name: 'Human Resources & Workforce Tech',
    statements: {
      fullstack: { domain: 'fullstack', title: 'Unified Talent Management & Workforce Analytics Platform', summary: 'Integrate hiring, performance, and workforce planning analytics.' },
      ai_ml: { domain: 'ai_ml', title: 'AI-Based Talent Matching & Workforce Retention Prediction System', summary: 'Improve hiring fit and predict attrition risk.' },
      cybersecurity: { domain: 'cybersecurity', title: 'Enterprise Insider Threat & HR Data Protection Monitoring System', summary: 'Monitor HR data access and detect insider anomalies.' },
      blockchain: { domain: 'blockchain', title: 'Decentralized Employment Credential & Experience Verification Network', summary: 'Verify employment history with tamper-proof records.' }
    }
  }
];

const EASIEST_THEME_SLUGS = ['education-learning', 'transport-mobility', 'healthcare-medical'];

const DOMAIN_LABELS: Record<Domain, string> = {
  fullstack: 'Full Stack',
  ai_ml: 'AI & ML',
  cybersecurity: 'Cybersecurity',
  blockchain: 'Blockchain'
};

const DOMAIN_HEADER_TO_KEY: Record<string, Domain> = {
  'Full Stack Problem Statement': 'fullstack',
  'Blockchain Problem Statement': 'blockchain',
  'Cybersecurity Problem Statement': 'cybersecurity',
  'AI & ML Problem Statement': 'ai_ml'
};

function normalizeLabel(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function normalizeParagraph(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

function parseBullets(section: string): string[] {
  const lines = section.split('\n').map(line => line.trim()).filter(Boolean);
  const items: string[] = [];
  let current = '';
  for (const line of lines) {
    if (line.startsWith('•')) {
      if (current) {
        items.push(normalizeParagraph(current));
      }
      current = line.replace(/^•\s*/, '');
      continue;
    }
    if (current) {
      current += ` ${line}`;
    }
  }
  if (current) {
    items.push(normalizeParagraph(current));
  }
  return items;
}

function sectionBetween(block: string, start: string, endMarkers: string[]): string {
  const startIdx = block.indexOf(start);
  if (startIdx < 0) {
    return '';
  }
  const from = startIdx + start.length;
  const rest = block.slice(from);
  let end = rest.length;
  for (const marker of endMarkers) {
    const idx = rest.indexOf(marker);
    if (idx >= 0 && idx < end) {
      end = idx;
    }
  }
  return rest.slice(0, end).trim();
}

function parseCompendium(content: string): Record<string, StatementDetails> {
  const cleaned = content.replace(/\r/g, '\n').replace(/\f/g, '\n');
  const themeRegex = /Theme:\s*([^\n]+)\n([\s\S]*?)(?=\nTheme:|\s*$)/g;
  const domainHeaderRegex = /(Full Stack Problem Statement|Blockchain Problem Statement|Cybersecurity Problem Statement|AI & ML Problem Statement)\n([\s\S]*?)(?=(?:Full Stack Problem Statement|Blockchain Problem Statement|Cybersecurity Problem Statement|AI & ML Problem Statement)\n|$)/g;

  const result: Record<string, StatementDetails> = {};
  let themeMatch: RegExpExecArray | null = themeRegex.exec(cleaned);
  while (themeMatch) {
    const themeName = normalizeParagraph(themeMatch[1]);
    const themeBody = themeMatch[2];

    domainHeaderRegex.lastIndex = 0;
    let domainMatch: RegExpExecArray | null = domainHeaderRegex.exec(themeBody);
    while (domainMatch) {
      const domainHeader = normalizeParagraph(domainMatch[1]);
      const domainKey = DOMAIN_HEADER_TO_KEY[domainHeader];
      const domainBody = domainMatch[2];
      if (domainKey) {
        const backgroundRaw = sectionBetween(domainBody, 'Background & Context:', [
          'Problem Statement:'
        ]);
        const problemRaw = sectionBetween(domainBody, 'Problem Statement:', [
          'Functional Requirements:'
        ]);
        const functionalRaw = sectionBetween(domainBody, 'Functional Requirements:', [
          'Technical Expectations & Constraints:'
        ]);
        const technicalRaw = sectionBetween(domainBody, 'Technical Expectations & Constraints:', [
          'Deliverables:'
        ]);
        const deliverablesRaw = sectionBetween(domainBody, 'Deliverables:', [
          'Evaluation Criteria:'
        ]);
        const evaluationRaw = sectionBetween(domainBody, 'Evaluation Criteria:', []);

        const key = `${normalizeLabel(themeName)}::${domainKey}`;
        result[key] = {
          background: normalizeParagraph(backgroundRaw),
          problemStatement: normalizeParagraph(problemRaw),
          functionalRequirements: parseBullets(functionalRaw),
          technicalExpectations: parseBullets(technicalRaw),
          deliverables: parseBullets(deliverablesRaw),
          evaluationCriteria: parseBullets(evaluationRaw),
          constraints: []
        };
      }
      domainMatch = domainHeaderRegex.exec(themeBody);
    }

    themeMatch = themeRegex.exec(cleaned);
  }
  return result;
}

const COMPENDIUM_DETAILS = parseCompendium(compendiumRaw);

function isPlaceholderText(value: string): boolean {
  const normalized = value.toLowerCase();
  return (
    normalized.includes('this section provides an in-depth explanation') ||
    normalized.includes('participants must design and implement a comprehensive') ||
    normalized.includes('complete expanded narrative')
  );
}

function isPlaceholderDetails(details: StatementDetails): boolean {
  if (isPlaceholderText(details.background) || isPlaceholderText(details.problemStatement)) {
    return true;
  }
  const allLines = [
    ...details.functionalRequirements,
    ...details.technicalExpectations,
    ...details.deliverables,
    ...details.evaluationCriteria,
    ...details.constraints
  ];
  return allLines.some(isPlaceholderText);
}

const THEME_CONTEXT: Record<string, { challenge: string; stakeholders: string; impact: string }> = {
  'transport-mobility': {
    challenge: 'fragmented multimodal journeys, congestion, and poor real-time coordination',
    stakeholders: 'commuters, transport operators, municipal planners, and traffic authorities',
    impact: 'improved commuter experience, lower congestion, and better operational planning'
  },
  'logistics-supply-chain': {
    challenge: 'siloed visibility across procurement, warehousing, movement, and delivery',
    stakeholders: 'manufacturers, logistics providers, distributors, and retailers',
    impact: 'faster decisions, reduced delays, and stronger supply chain resilience'
  },
  'toys-games-entertainment': {
    challenge: 'player retention, trust, and monetization across fragmented gaming ecosystems',
    stakeholders: 'players, creators, game studios, and platform operators',
    impact: 'higher engagement, fairer digital ownership, and improved platform integrity'
  },
  'healthcare-medical': {
    challenge: 'disconnected records, security risks, and delayed predictive interventions',
    stakeholders: 'patients, clinicians, hospitals, and health administrators',
    impact: 'safer care pathways, better outcomes, and stronger data governance'
  },
  'education-learning': {
    challenge: 'non-personalized learning and disconnected institutional systems',
    stakeholders: 'students, faculty, administrators, and credential verifiers',
    impact: 'improved learning outcomes and stronger academic transparency'
  },
  'agriculture-agritech': {
    challenge: 'low digital visibility in farm operations and high uncertainty in yield planning',
    stakeholders: 'farmers, cooperatives, agri-enterprises, and buyers',
    impact: 'better farm decisions, lower losses, and improved market confidence'
  },
  bfsi: {
    challenge: 'fraud risk, fragmented digital services, and slow settlement layers',
    stakeholders: 'customers, banks, insurers, lenders, and regulators',
    impact: 'secure financial access, faster transactions, and robust risk control'
  },
  'retail-ecommerce': {
    challenge: 'inventory mismatch, fraud, and inconsistent omnichannel experiences',
    stakeholders: 'consumers, merchants, marketplaces, and supply teams',
    impact: 'higher conversion, lower fraud losses, and tighter operations'
  },
  'energy-power': {
    challenge: 'demand-supply variability and distributed grid complexity',
    stakeholders: 'utilities, prosumers, grid operators, and communities',
    impact: 'better load balancing, improved sustainability, and operational reliability'
  },
  'smart-cities': {
    challenge: 'unintegrated urban systems and weak service transparency',
    stakeholders: 'citizens, municipal bodies, planners, and public service teams',
    impact: 'faster service delivery and smarter city-level decisions'
  },
  'tourism-hospitality': {
    challenge: 'fragmented booking journeys and weak operational intelligence',
    stakeholders: 'travelers, hotels, operators, and destination managers',
    impact: 'better traveler experiences and improved occupancy efficiency'
  },
  'sports-fitness': {
    challenge: 'scattered athlete data, integrity threats, and uneven fan engagement',
    stakeholders: 'athletes, coaches, clubs, leagues, and fans',
    impact: 'better performance, reduced risk, and stronger event trust'
  },
  'food-nutrition': {
    challenge: 'low nutrition personalization and weak food provenance confidence',
    stakeholders: 'consumers, nutrition experts, food platforms, and producers',
    impact: 'healthier behavior and safer, more trusted food systems'
  },
  'environment-sustainability': {
    challenge: 'fragmented environmental monitoring and low emissions accountability',
    stakeholders: 'governments, enterprises, communities, and sustainability teams',
    impact: 'better climate decision support and measurable sustainability progress'
  },
  'manufacturing-automation': {
    challenge: 'downtime, quality drift, and poor process traceability',
    stakeholders: 'plant operators, quality teams, maintenance teams, and suppliers',
    impact: 'higher throughput, lower defects, and stronger auditability'
  },
  'cybersecurity-data-protection': {
    challenge: 'distributed attack surfaces and weak policy-to-practice enforcement',
    stakeholders: 'security operations teams, governance teams, and enterprise users',
    impact: 'reduced breach probability and stronger compliance posture'
  },
  'media-digital-content': {
    challenge: 'content abuse, piracy, and unclear creator monetization',
    stakeholders: 'creators, platforms, advertisers, and audiences',
    impact: 'fair revenue models and trustworthy digital distribution'
  },
  'real-estate-infrastructure': {
    challenge: 'manual workflows in ownership, operations, and property analytics',
    stakeholders: 'developers, managers, tenants, and public registries',
    impact: 'transparent transactions and efficient asset operations'
  },
  'defense-public-safety': {
    challenge: 'high-stakes incident coordination and critical infrastructure security',
    stakeholders: 'response agencies, operators, planners, and citizens',
    impact: 'faster incident response and stronger public safety readiness'
  },
  'social-impact-ngos': {
    challenge: 'limited transparency in beneficiary impact and funding utilization',
    stakeholders: 'NGOs, donors, volunteers, and beneficiary communities',
    impact: 'higher donor trust and measurable social outcomes'
  },
  'waste-management-recycling': {
    challenge: 'inefficient collection operations and weak recycling incentives',
    stakeholders: 'municipal teams, recyclers, citizens, and waste operators',
    impact: 'cleaner cities and improved circular economy outcomes'
  },
  'hr-workforce-tech': {
    challenge: 'fragmented talent workflows and data sensitivity in employee systems',
    stakeholders: 'candidates, HR teams, managers, and enterprises',
    impact: 'better hiring outcomes and safer workforce data practices'
  }
};

function getStatementDetails(theme: Theme, statement: Statement): StatementDetails {
  const exactKey = `${normalizeLabel(theme.name)}::${statement.domain}`;
  const exact = COMPENDIUM_DETAILS[exactKey];
  if (exact && !isPlaceholderDetails(exact)) {
    return exact;
  }

  const context = THEME_CONTEXT[theme.slug] || {
    challenge: 'cross-functional digital transformation and operational modernization',
    stakeholders: 'business operators, end users, and technical teams',
    impact: 'higher efficiency and stronger decision-making'
  };

  const baseBackground = `${theme.name} ecosystems currently face ${context.challenge}. This creates delivery risk for ${context.stakeholders}.`;
  const baseProblem = `Design and implement an industry-ready ${DOMAIN_LABELS[statement.domain]} solution for "${statement.title}" that can be deployed at scale and measured against business outcomes.`;

  if (statement.domain === 'fullstack') {
    return {
      background: `${baseBackground} Existing tools are often disconnected, leading to data silos and low operational visibility.`,
      problemStatement: `${baseProblem} The solution must provide an integrated product workflow with strong user and admin experiences.`,
      functionalRequirements: [
        'Role-based user and admin modules with secure authentication and authorization.',
        `Core workflow implementation aligned to ${theme.name} operations.`,
        'Operational dashboard with status tracking, filters, and actionable alerts.',
        'Audit-friendly activity logs for critical user and system events.',
        'Search, drill-down views, and lifecycle state transitions.',
        'Exportable reporting for operational and management review.'
      ],
      technicalExpectations: [
        'Modular service-oriented backend with clean API contracts.',
        'Normalized data model with indexing strategy for scale.',
        'Caching and pagination support for high-volume read scenarios.',
        'Cloud-ready deployment architecture with environment separation.',
        'Input validation, rate limiting, and secure secret handling.',
        'Observability: health checks, structured logging, and metrics.'
      ],
      deliverables: [
        'Working deployed application (frontend + backend + datastore).',
        'Architecture diagram and component interaction notes.',
        'API specification with request/response examples.',
        'Test evidence for core business and failure paths.',
        'Demo script showing end-to-end workflow value.'
      ],
      evaluationCriteria: [
        'Functional completeness and requirement fit.',
        'System scalability and reliability under load assumptions.',
        'Security posture and data integrity protections.',
        'UX clarity and decision support quality.',
        'Practicality for real-world adoption.'
      ],
      constraints: []
    };
  }

  if (statement.domain === 'blockchain') {
    return {
      background: `${baseBackground} Trust, verification, and auditability are difficult with centralized ledgers and opaque reconciliation.`,
      problemStatement: `${baseProblem} Use distributed ledger design to improve transparency, integrity, and verifiable transactions.`,
      functionalRequirements: [
        'On-chain asset/record lifecycle tracking with verifiable state changes.',
        'Smart contract logic for automated execution and settlement rules.',
        'Identity-aware participant actions with role restrictions.',
        'Event timeline or ledger explorer for transparent auditing.',
        'Integrity validation flow using transaction/hash references.',
        'Admin controls for contract configuration and emergency handling.'
      ],
      technicalExpectations: [
        'Well-structured smart contracts with access control checks.',
        'Gas-aware contract design and optimized state writes.',
        'Off-chain storage strategy with on-chain hash anchoring.',
        'Wallet integration and transaction signature flow.',
        'Replay-safe request handling and contract error management.',
        'Clear test coverage for core and adversarial scenarios.'
      ],
      deliverables: [
        'Deployed contracts with ABI and interaction scripts.',
        'DApp or API gateway for contract operations.',
        'Transaction evidence for core lifecycle operations.',
        'Security notes: assumptions, threat model, and mitigations.',
        'Cost analysis for representative transaction volume.'
      ],
      evaluationCriteria: [
        'Smart contract correctness and security hygiene.',
        'Transparency and traceability of lifecycle events.',
        'Gas efficiency and operational feasibility.',
        'Integration quality between on-chain and off-chain layers.',
        'Clarity of business value and ecosystem fit.'
      ],
      constraints: [
        'Do not place sensitive personally identifiable data directly on-chain.',
        'Provide a strategy for key compromise and role recovery.',
        'Ensure transaction cost remains practical for intended scale.'
      ]
    };
  }

  if (statement.domain === 'cybersecurity') {
    return {
      background: `${baseBackground} Expanding digital surfaces increase breach risk, operational disruption, and compliance exposure.`,
      problemStatement: `${baseProblem} Build a proactive security monitoring and response framework with measurable detection quality.`,
      functionalRequirements: [
        'Ingestion pipeline for security-relevant telemetry and activity logs.',
        'Detection logic for anomalies, misuse patterns, and threat indicators.',
        'Risk scoring and incident prioritization workflow.',
        'Real-time alerting with contextual evidence for triage.',
        'Investigation dashboard with timeline and entity correlation.',
        'Response playbooks for containment and recovery actions.'
      ],
      technicalExpectations: [
        'Low-latency stream or near-real-time event processing.',
        'Rule + behavior-based detection strategy with tunable thresholds.',
        'False-positive control mechanisms and suppression logic.',
        'Secure storage for logs with tamper-evident retention controls.',
        'Access control and least-privilege operations.',
        'Metrics on precision, recall proxy, and response SLA.'
      ],
      deliverables: [
        'Operational detection dashboard with live/recorded scenarios.',
        'Threat model and attack surface documentation.',
        'Detection rulebook or model description with tuning notes.',
        'Incident simulation report with outcomes and limitations.',
        'Hardening checklist for production rollout.'
      ],
      evaluationCriteria: [
        'Detection effectiveness and incident triage quality.',
        'Robustness against noisy or adversarial inputs.',
        'Operational usability for security teams.',
        'Scalability and maintainability of detection logic.',
        'Practical defense impact for the target domain.'
      ],
      constraints: [
        'Respect privacy boundaries while collecting telemetry.',
        'Minimize detection blind spots without over-alerting teams.',
        'Document assumptions and known bypass risks.'
      ]
    };
  }

  return {
    background: `${baseBackground} Static decisioning is insufficient where data variability and uncertainty are high.`,
    problemStatement: `${baseProblem} Build an explainable, production-oriented AI workflow that improves decision quality and operational outcomes.`,
    functionalRequirements: [
      'Data ingestion and preprocessing pipeline with quality checks.',
      'Model training workflow aligned with problem objective.',
      'Evaluation module with suitable metrics and validation split.',
      'Inference pipeline for real-time or batch prediction use.',
      'Decision dashboard exposing outputs and confidence signals.',
      'Feedback loop for continuous model monitoring and retraining.'
    ],
    technicalExpectations: [
      'Feature engineering with clear domain rationale.',
      'Bias, drift, and model stability assessment.',
      'Model versioning and reproducible training setup.',
      'Latency and throughput planning for target usage.',
      'Explainability support for critical predictions.',
      'Secure handling of sensitive training/inference data.'
    ],
    deliverables: [
      'Trained model artifacts and reproducible training notebook/pipeline.',
      'Inference service or evaluation harness.',
      'Model card including assumptions, metrics, and failure modes.',
      'Dataset documentation and preprocessing rationale.',
      'Business impact simulation or scenario-based validation.'
    ],
    evaluationCriteria: [
      'Predictive performance and generalization quality.',
      'Interpretability and trustworthiness of outputs.',
      'Operational fitness for production deployment.',
      'Fairness/risk awareness in model behavior.',
      'Clarity of measurable domain impact.'
    ],
    constraints: [
      'Avoid leakage between train/validation/test workflows.',
      'Document data limitations and model confidence boundaries.',
      'Provide rollback strategy for underperforming model versions.'
    ]
  };
}

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = ((hash << 5) - hash + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function pickHiddenDomain(seed: string): Domain {
  return DOMAINS[hashString(`${seed}:hidden`) % DOMAINS.length];
}

function storageKey(teamId: string): string {
  return `problem_statement_state_v1:${teamId.trim().toUpperCase()}`;
}

function defaultState(teamId: string): SessionState {
  const baseThemeIndex = hashString(`${teamId}:theme`) % THEMES.length;
  return {
    baseThemeIndex,
    activeThemeIndex: baseThemeIndex,
    hiddenDomain: pickHiddenDomain(teamId),
    changeThemeState: 'unused',
    revealState: 'unused',
    superUsed: false,
    superThemeSlug: '',
    selectedKey: '',
    confirmedKey: ''
  };
}

function loadState(teamId: string): SessionState {
  const key = storageKey(teamId);
  const raw = localStorage.getItem(key);
  if (!raw) {
    return defaultState(teamId);
  }
  try {
    return JSON.parse(raw) as SessionState;
  } catch {
    return defaultState(teamId);
  }
}

function saveState(teamId: string, state: SessionState): void {
  localStorage.setItem(storageKey(teamId), JSON.stringify(state));
}

export default function ProblemStatement() {
  const [teamIdInput, setTeamIdInput] = useState('');
  const [teamId, setTeamId] = useState('');
  const [state, setState] = useState<SessionState | null>(null);
  const [result, setResult] = useState('');
  const [confirming, setConfirming] = useState(false);

  const currentTheme = useMemo(() => {
    if (!state) {
      return null;
    }
    if (state.superUsed && state.superThemeSlug) {
      return THEMES.find(item => item.slug === state.superThemeSlug) || THEMES[state.baseThemeIndex];
    }
    return THEMES[state.activeThemeIndex] || THEMES[state.baseThemeIndex];
  }, [state]);

  const visibleStatements = useMemo(() => {
    if (!state || !currentTheme) {
      return [] as Statement[];
    }

    if (state.superUsed) {
      return [currentTheme.statements.fullstack];
    }

    return DOMAINS
      .filter(domain => state.revealState === 'active' || domain !== state.hiddenDomain)
      .map(domain => currentTheme.statements[domain]);
  }, [state, currentTheme]);

  const enterTeam = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = teamIdInput.trim().toUpperCase();
    if (!trimmed) {
      setResult('Team ID is required.');
      return;
    }
    const loaded = loadState(trimmed);
    setTeamId(trimmed);
    setState(loaded);
    setResult('');
  };

  const update = (updater: (prev: SessionState) => SessionState) => {
    if (!state || !teamId) {
      return;
    }
    const next = updater(state);
    setState(next);
    saveState(teamId, next);
  };

  const useChangeTheme = () => {
    if (!state || state.superUsed) {
      return;
    }
    if (state.changeThemeState === 'reverted') {
      return;
    }
    update(prev => {
      if (prev.changeThemeState === 'unused') {
        const nextThemeIndex = (prev.activeThemeIndex + 1 + (hashString(`${teamId}:change`) % (THEMES.length - 1))) % THEMES.length;
        return {
          ...prev,
          activeThemeIndex: nextThemeIndex,
          changeThemeState: 'active',
          selectedKey: '',
          confirmedKey: ''
        };
      }
      return {
        ...prev,
        activeThemeIndex: prev.baseThemeIndex,
        changeThemeState: 'reverted',
        selectedKey: '',
        confirmedKey: ''
      };
    });
  };

  const useRevealFourth = () => {
    if (!state || state.superUsed) {
      return;
    }
    if (state.revealState === 'reverted') {
      return;
    }
    update(prev => {
      if (prev.revealState === 'unused') {
        return { ...prev, revealState: 'active', selectedKey: '', confirmedKey: '' };
      }
      return { ...prev, revealState: 'reverted', selectedKey: '', confirmedKey: '' };
    });
  };

  const useSuperPower = () => {
    if (!state || state.superUsed) {
      return;
    }
    const idx = hashString(`${teamId}:super`) % EASIEST_THEME_SLUGS.length;
    const superThemeSlug = EASIEST_THEME_SLUGS[idx];
    update(prev => ({
      ...prev,
      superUsed: true,
      superThemeSlug,
      selectedKey: '',
      confirmedKey: ''
    }));
  };

  const confirmSelection = async () => {
    if (!state || !state.selectedKey || !currentTheme) {
      setResult('Select one problem statement first.');
      return;
    }

    const selectedStatement = visibleStatements.find(
      item => `${currentTheme.slug}:${item.domain}` === state.selectedKey
    );
    if (!selectedStatement) {
      setResult('Selected statement is not available. Please select again.');
      return;
    }

    setConfirming(true);
    try {
      const res = await fetchJson<{ message: string }>('/api/hackathon/problem-statement/confirm', {
        method: 'POST',
        body: JSON.stringify({
          teamId,
          themeSlug: currentTheme.slug,
          themeName: currentTheme.name,
          domain: selectedStatement.domain,
          title: selectedStatement.title,
          summary: selectedStatement.summary
        })
      });
      update(prev => ({ ...prev, confirmedKey: prev.selectedKey }));
      setResult(res.message || 'Problem statement confirmed successfully.');
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Unable to confirm problem statement');
    } finally {
      setConfirming(false);
    }
  };

  return (
    <section className="section">
      <h2 className="section-title">Problem Statement</h2>
      <p className="section-subtitle">Enter Team ID to unlock your assigned theme and select the final statement.</p>

      {!state && (
        <div className="card" style={{ maxWidth: '620px', marginTop: '20px' }}>
          <h4>Enter Team ID</h4>
          <form className="form-grid" onSubmit={enterTeam}>
            <input
              placeholder="Team ID"
              value={teamIdInput}
              onChange={e => setTeamIdInput(e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit">Unlock Theme</button>
          </form>
          {result && <div className="banner" style={{ marginTop: '16px' }}>{result}</div>}
        </div>
      )}

      {state && currentTheme && (
        <>
          <div className="card" style={{ marginTop: '22px' }}>
            <h4>Assigned Theme</h4>
            <p><strong>Team ID:</strong> {teamId}</p>
            <p><strong>Theme:</strong> {currentTheme.name}</p>
            {state.superUsed && <p><strong>Mode:</strong> Super Power Key Active (non-revertible)</p>}
          </div>

          <div className="card" style={{ marginTop: '20px' }}>
            <h4>Power Key</h4>
            <div className="power-key-grid">
              <button
                className="btn btn-ghost"
                type="button"
                onClick={useChangeTheme}
                disabled={state.superUsed || state.changeThemeState === 'reverted'}
              >
                {state.changeThemeState === 'unused' && 'Change Theme (One Time)'}
                {state.changeThemeState === 'active' && 'Revert Theme (Final)'}
                {state.changeThemeState === 'reverted' && 'Change Theme Used'}
              </button>

              <button
                className="btn btn-ghost"
                type="button"
                onClick={useRevealFourth}
                disabled={state.superUsed || state.revealState === 'reverted'}
              >
                {state.revealState === 'unused' && 'Reveal Hidden 4th Statement'}
                {state.revealState === 'active' && 'Revert Hidden Statement (Final)'}
                {state.revealState === 'reverted' && 'Reveal Power Used'}
              </button>

              <button
                className="btn btn-primary"
                type="button"
                onClick={useSuperPower}
                disabled={state.superUsed}
              >
                {state.superUsed ? 'Super Power Key Used' : 'Activate Super Power Key (One Time, No Revert)'}
              </button>
            </div>
          </div>

          <div className="cards-grid" style={{ marginTop: '22px' }}>
            {visibleStatements.map(statement => {
              const statementKey = `${currentTheme.slug}:${statement.domain}`;
              const selected = state.selectedKey === statementKey;
              const confirmed = state.confirmedKey === statementKey;
              const details = getStatementDetails(currentTheme, statement);
              return (
                <div className="card" key={statementKey}>
                  <h4>{DOMAIN_LABELS[statement.domain]}</h4>
                  <p><strong>{statement.title}</strong></p>
                  <p>{statement.summary}</p>

                  <div className="problem-details">
                    <p><strong>Background:</strong> {details.background}</p>
                    <p><strong>Problem Statement:</strong> {details.problemStatement}</p>
                    <p><strong>Functional Requirements:</strong></p>
                    <ul>
                      {details.functionalRequirements.map(item => <li key={item}>{item}</li>)}
                    </ul>
                    <p><strong>Technical Expectations & Constraints:</strong></p>
                    <ul>
                      {details.technicalExpectations.map(item => <li key={item}>{item}</li>)}
                    </ul>
                    <p><strong>Deliverables:</strong></p>
                    <ul>
                      {details.deliverables.map(item => <li key={item}>{item}</li>)}
                    </ul>
                    <p><strong>Evaluation Criteria:</strong></p>
                    <ul>
                      {details.evaluationCriteria.map(item => <li key={item}>{item}</li>)}
                    </ul>
                    {details.constraints.length > 0 && (
                      <>
                        <p><strong>Constraints:</strong></p>
                        <ul>
                          {details.constraints.map(item => <li key={item}>{item}</li>)}
                        </ul>
                      </>
                    )}
                  </div>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '12px' }}>
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => update(prev => ({ ...prev, selectedKey: selected ? '' : statementKey }))}
                      style={{ width: '18px', height: '18px' }}
                    />
                    <span>Select this statement</span>
                  </label>
                  {confirmed && <p style={{ marginTop: '10px', color: '#86efac' }}><strong>Confirmed</strong></p>}
                </div>
              );
            })}
          </div>

          <div className="card" style={{ marginTop: '22px' }}>
            <button className="btn btn-primary" type="button" onClick={confirmSelection} disabled={confirming}>
              {confirming ? 'Confirming...' : 'Confirm Problem Statement'}
            </button>
            {result && <div className="banner" style={{ marginTop: '16px' }}>{result}</div>}
          </div>
        </>
      )}
    </section>
  );
}
