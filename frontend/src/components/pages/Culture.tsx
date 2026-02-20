import { useEffect, useState } from 'react';
import { fetchJson } from '../../lib/api';
import { CulturalEvent } from '../../lib/types';

export default function Culture() {
  const [events, setEvents] = useState<CulturalEvent[]>([]);

  useEffect(() => {
    fetchJson<CulturalEvent[]>('/api/culture/events')
      .then(data => setEvents(Array.isArray(data) ? data : []))
      .catch(() => setEvents([]));
  }, []);

  return (
    <section className="section">
      <h2 className="section-title">Culture Fest</h2>
      <p className="section-subtitle">
        When the coding ends, the celebration begins.
      </p>

      {events.length === 0 ? (
        <div className="banner empty-state">No events announced yet.</div>
      ) : (
        <div className="cards-grid">
          {events.map(event => (
            <div className="card" key={event.id}>
              {event.imageUrl && <img src={event.imageUrl} alt={event.title} style={{ width: '100%', borderRadius: '14px', marginBottom: '12px' }} />}
              <h4>{event.title}</h4>
              <p className="team-preview">{event.preview}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
