import { useEffect, useState } from 'react';
import { fetchJson } from '../../lib/api';
import { EventInfo, FAQ, GalleryItem, LandingContent } from '../../lib/types';

const fallbackLanding: LandingContent = {
  heroTitle: 'INERTIA 2.0: JEC Annual Tech Fest',
  heroSubtitle:
    'The flagship annual festival at Jabalpur Engineering College, bringing together hackathons, workshops, innovation showcases, racing, and culture.',
  dates: 'Coming 2026',
  location: 'Jabalpur Engineering College, Jabalpur, Madhya Pradesh',
  highlights: [
    'Unstop Hackathon',
    'AI & ML Workshops',
    'Robo Race Arena',
    'DJ Night & Culture Fest',
    'Tech Talks & Expert Sessions',
    'Startup & Project Expo'
  ]
};

const fallbackEvents: EventInfo[] = [
  {
    id: 1,
    slug: 'hackathon',
    title: 'Unstop Hackathon',
    description: '4-member teams with at least one female member. Complete registration in one step.',
    dateLabel: '48 Hours',
    ctaLabel: 'Register Team'
  },
  {
    id: 2,
    slug: 'workshops',
    title: 'AI & ML Workshops',
    description: 'Hands-on labs, experts, and project builds.',
    dateLabel: '2 Days',
    ctaLabel: 'Register Workshop'
  },
  {
    id: 3,
    slug: 'robo-race',
    title: 'Robo Race',
    description: 'Speed, precision, and a custom track. Bring your bots or build one on campus.',
    dateLabel: 'Final Day',
    ctaLabel: 'Register Robot'
  }
];

const fallbackFaqs: FAQ[] = [
  { id: 1, question: 'How do hackathon teams work?', answer: 'Hackathon registration is a single-step form for exactly 4 members.' },
  { id: 2, question: 'Do workshops require payment?', answer: 'Payment details will be shared during registration updates.' },
  { id: 3, question: 'What is the team size rule?', answer: 'A hackathon team has 4 members and must include at least one female member.' },
  { id: 4, question: 'Where is the venue?', answer: 'All events take place at the Jabalpur Engineering College campus.' },
  { id: 5, question: 'Can I register for multiple events?', answer: 'Yes, you can register for workshops, Robo Race, and the hackathon independently.' }
];

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
          highlights: Array.isArray(data?.highlights) ? data.highlights : fallbackLanding.highlights
        })
      )
      .catch(() => null);
    fetchJson<EventInfo[]>('/api/events')
      .then(data => setEvents(Array.isArray(data) && data.length > 0 ? data : fallbackEvents))
      .catch(() => null);
    fetchJson<GalleryItem[]>('/api/gallery')
      .then(data => setGallery(Array.isArray(data) ? data : []))
      .catch(() => setGallery([]));
    fetchJson<FAQ[]>('/api/faqs')
      .then(data => setFaqs(Array.isArray(data) ? data : fallbackFaqs))
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
              <a className="btn btn-primary" href="/hackathon">
                Hackathon Teams
              </a>
              <a className="btn btn-ghost" href="/workshops">
                Workshop Registration
              </a>
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

      <section className="section dark">
        <h2 className="section-title">Core Events</h2>
        <p className="section-subtitle">Hackathon, AI/ML Workshops, and Robo Race with dedicated registration flows.</p>
        <div className="event-grid">
          {(events && events.length > 0 ? events : fallbackEvents).map(event => (
            <div className="event-card" key={event.id}>
              <span className="badge">{event.dateLabel}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <a className="btn btn-ghost" href={`/${event.slug}`}>
                {event.ctaLabel}
              </a>
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
