import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchJson } from '../../lib/api';
import { EventInfo, FAQ, GalleryItem, LandingContent } from '../../lib/types';

const fallbackLanding: LandingContent = {
  heroTitle: 'INERTIA 2.0: JEC Annual Tech Fest',
  heroSubtitle:
    'The flagship annual festival at Jabalpur Engineering College, featuring Hackathon, Workshops, Robo Race, eSports, Open Mic, and culture.',
  dates: 'Coming 2026',
  location: 'Jabalpur Engineering College, Jabalpur, Madhya Pradesh',
  highlights: [
    'Hackathon',
    'IoT Workshop',
    'Robo Race',
    'eSports Arena',
    'Open Mic Stage',
    'DJ Night & Culture Fest',
  ]
};

const fallbackEvents: EventInfo[] = [
  {
    id: 1,
    slug: 'hackathon',
    title: 'Hackathon',
    description: '2-day hackathon: prototype build on 26 Feb and stage presentation on 27 Feb. Fixed team size: 4 (leader + 3 members).',
    dateLabel: '26-27 Feb',
    ctaLabel: 'Register Hackathon'
  },
  {
    id: 2,
    slug: 'workshops',
    title: 'Workshop',
    description: 'IoT-based single phase induction motor and speed control system workshop.',
    dateLabel: '2 Days',
    ctaLabel: 'Register Workshop'
  },
  {
    id: 3,
    slug: 'robo-race',
    title: 'Kinetic ShowDown',
    description: 'RC car design and race challenge with teams of 2 to 4 members.',
    dateLabel: 'Final Day',
    ctaLabel: 'Register Robo Race'
  },
  {
    id: 4,
    slug: 'esports',
    title: 'eSports',
    description: 'Compete in Valorant (5 players) or BGMI (4 players).',
    dateLabel: 'Tournament',
    ctaLabel: 'Register eSports'
  },
  {
    id: 5,
    slug: 'open-mic',
    title: 'Open Mic',
    description: 'Free stage registration for performers.',
    dateLabel: 'Open Stage',
    ctaLabel: 'Register Open Mic'
  }
];

const fallbackFaqs: FAQ[] = [
  { id: 1, question: 'What is the hackathon schedule?', answer: '26 February: prototype build. 27 February: stage presentation and explanation.' },
  { id: 2, question: 'What is the hackathon registration fee?', answer: 'The Hackathon registration fee is INR 300 per team.' },
  { id: 6, question: 'What is the hackathon team size?', answer: 'Exactly 4 members per team: 1 leader + 3 members.' },
  { id: 3, question: 'What are the eSports team sizes?', answer: 'Valorant needs 5 players, BGMI needs 4 players.' },
  { id: 4, question: 'When are hackathon problem statements announced?', answer: 'Problem statements are revealed on the spot.' },
  { id: 5, question: 'Can I register for multiple events?', answer: 'Yes, you can register for Hackathon, Workshops, Robo Race, eSports, and Open Mic.' }
];

function normalizeLegacyText(value: string) {
  return value
    .replace(/CodeHunt Hackathon/gi, 'Hackathon')
    .replace(/Kinetic Showdown/gi, 'Robo Race')
    .replace(/Workshop Series/gi, 'IoT Workshop');
}

function normalizeHighlights(items: string[]) {
  return items.map(item => normalizeLegacyText(item));
}

function normalizeEvents(data: EventInfo[]): EventInfo[] {
  const normalized = data.map(event => {
    if (event.slug === 'robo-race' || event.slug === 'kinetic-showdown') {
      return {
        ...event,
        slug: 'robo-race',
        title: 'Robo Race',
        ctaLabel: 'Register Robo Race'
      };
    }
    if (event.slug === 'hackathon') {
      return {
        ...event,
        title: 'Hackathon',
        ctaLabel: 'Register Hackathon'
      };
    }
    if (event.slug === 'workshops') {
      return {
        ...event,
        title: 'Workshop',
        description: 'IoT-based single phase induction motor and speed control system workshop.',
        ctaLabel: 'Register Workshop'
      };
    }
    return event;
  });

  const hasOpenMic = normalized.some(event => event.slug === 'open-mic');
  const hasEsports = normalized.some(event => event.slug === 'esports');

  const merged = [...normalized];
  if (!hasEsports) {
    merged.push(fallbackEvents.find(event => event.slug === 'esports') as EventInfo);
  }
  if (!hasOpenMic) {
    merged.push(fallbackEvents.find(event => event.slug === 'open-mic') as EventInfo);
  }
  return merged;
}

export default function Home() {
  const [landing, setLanding] = useState<LandingContent>(fallbackLanding);
  const [events, setEvents] = useState<EventInfo[]>(fallbackEvents);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>(fallbackFaqs);

  useEffect(() => {
    fetchJson<LandingContent>('/api/landing')
      .then(data =>
        setLanding({
          ...fallbackLanding,
          ...data,
          heroSubtitle: fallbackLanding.heroSubtitle,
          highlights: fallbackLanding.highlights
        })
      )
      .catch(() => null);
    fetchJson<EventInfo[]>('/api/events')
      .then(data => setEvents(Array.isArray(data) && data.length > 0 ? normalizeEvents(data) : fallbackEvents))
      .catch(() => null);
    fetchJson<GalleryItem[]>('/api/gallery')
      .then(data => setGallery(Array.isArray(data) ? data : []))
      .catch(() => setGallery([]));
    fetchJson<FAQ[]>('/api/faqs')
      .then(data =>
        setFaqs(
          Array.isArray(data)
            ? data.map(faq => ({ ...faq, question: normalizeLegacyText(faq.question), answer: normalizeLegacyText(faq.answer) }))
            : fallbackFaqs
        )
      )
      .catch(() => null);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-grid">
          <div className="text-panel">
            <span className="hero-tag">Annual Tech Fest · JEC</span>
            <h1 className="hero-title">{landing.heroTitle}</h1>
            <p className="hero-subtitle">{landing.heroSubtitle}</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/register">
                Register Now
              </Link>
              <Link className="btn btn-ghost" to="/hackathon">
                Hackathon Registration
              </Link>
            </div>
            <div className="pillars">
              <span className="pillar">{landing.dates}</span>
              <span className="pillar">{landing.location}</span>
            </div>
          </div>
        </div>
        <div className="section-divider" />
      </section>

      <section className="section">
        <h2 className="section-title">Fest Highlights</h2>
        <p className="section-subtitle">
          Explore the core experiences of Inertia 2.0 and plan your festival journey.
        </p>
        <div className="cards-grid">
          {(landing.highlights ?? fallbackLanding.highlights).map((item, index) => (
            <div className="card" key={index}>
              <span className="badge">Highlight</span>
              <h4>{item}</h4>
              <p>Join early to secure your spot and stay updated on schedules.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">About Jabalpur Engineering College</h2>
        <p className="section-subtitle">
          Jabalpur Engineering College (JEC) was established in 1947 and is the first engineering college in Central
          India. The campus hosts undergraduate, postgraduate, and doctoral programs and is known for academic
          excellence, research culture, and innovation-driven learning.
        </p>
        <div className="cards-grid">
          <div className="card">
            <h4>Legacy of Excellence</h4>
            <p>Decades of engineering education with strong industry and research outcomes.</p>
          </div>
          <div className="card">
            <h4>Research & Innovation</h4>
            <p>Modern labs and faculty guidance that fuel experimentation and new ideas.</p>
          </div>
          <div className="card">
            <h4>Campus Experience</h4>
            <p>A sprawling campus in Jabalpur built for collaboration and maker culture.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">INERTIA 2.0 Lineup</h2>
        <p className="section-subtitle">
          INERTIA 2.0 expands the festival with a stronger mix of technical and cultural experiences.
        </p>
        <div className="cards-grid">
          <div className="card">
            <h4>Tech Talks</h4>
            <p>Industry leaders and researchers share insights, trends, and real-world case studies.</p>
          </div>
          <div className="card">
            <h4>Startup & Project Expo</h4>
            <p>Showcase innovations, prototypes, and student ventures from across the region.</p>
          </div>
          <div className="card">
            <h4>Automotive Competition</h4>
            <p>Speed, strategy, and engineering challenges focused on mobility and design.</p>
          </div>
          <div className="card">
            <h4>Defense Expo</h4>
            <p>Explore defense tech, engineering showcases, and innovation exhibits.</p>
          </div>
          <div className="card">
            <h4>Cultural Extravaganza</h4>
            <p>Live stage performances, DJ night, and celebration across the campus.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Workshop Spotlight</h2>
        <p className="section-subtitle">
          Only one workshop will be conducted: IoT-based single phase induction motor and speed control system.
        </p>
        <div className="cards-grid">
          <div className="card">
            <h4>IoT-Based Motor Speed Control Workshop</h4>
            <p>Mentor: Dr. Praveen Kumar Sharma (PhD, NIT Durgapur).</p>
            <p>Date: 26-27 February 2026.</p>
            <p>Venue: Jashan Audi, JEC Jabalpur.</p>
            <p>Fee: INR 300.</p>
          </div>
        </div>
      </section>

      <section className="section dark">
        <h2 className="section-title">Core Events</h2>
        <p className="section-subtitle">Hackathon, Workshop, Robo Race, eSports, and Open Mic with dedicated registration flows.</p>
        <div className="event-grid">
          {(events && events.length > 0 ? events : fallbackEvents).map(event => (
            <div className="event-card" key={event.id}>
              <span className="badge">{event.dateLabel}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <Link className="btn btn-ghost" to={`/${event.slug}`}>
                {event.ctaLabel}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Impact Snapshot</h2>
        <p className="section-subtitle">
          From participation to media reach, INERTIA continues to grow each year.
        </p>
        <div className="cards-grid">
          <div className="card">
            <span className="badge">Footfall</span>
            <h4>1,900+</h4>
            <p>Peak campus footfall recorded for the INERTIA edition.</p>
          </div>
          <div className="card">
            <span className="badge">Social Reach</span>
            <h4>562+</h4>
            <p>Social media reach benchmark from the brochure insights.</p>
          </div>
          <div className="card">
            <span className="badge">Media Coverage</span>
            <h4>4 Outlets</h4>
            <p>Coverage across Dainik Bhaskar, Patrika, Nayi Dunia, and Hari Bhoomi.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Glimpses</h2>
        <p className="section-subtitle">Highlights and memories from previous editions.</p>
        {gallery.length === 0 ? (
          <div className="banner empty-state">No entries available yet.</div>
        ) : (
          <div className="gallery-grid">
            {gallery.map(item => (
              <div className="gallery-card" key={item.id}>
                <img src={item.imageUrl} alt={item.title} />
                <div className="gallery-meta">
                  <strong>{item.preview || item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="section">
        <h2 className="section-title">FAQs</h2>
        <div className="faq-list">
          {(faqs ?? fallbackFaqs).map(item => (
            <div className="faq-item" key={item.id}>
              <strong>{item.question}</strong>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
