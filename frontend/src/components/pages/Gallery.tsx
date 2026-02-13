import { useEffect, useState } from 'react';
import { fetchJson } from '../../lib/api';
import { GalleryItem } from '../../lib/types';

export default function Gallery() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  useEffect(() => {
    fetchJson<GalleryItem[]>('/api/gallery')
      .then(data => setGallery(Array.isArray(data) ? data : []))
      .catch(() => setGallery([]));
  }, []);

  return (
    <section className="section">
      <h2 className="section-title">Glimpses & Gallery</h2>
      <p className="section-subtitle">A curated gallery from past editions.</p>

      {gallery.length === 0 ? (
        <div className="banner empty-state">No gallery items available yet.</div>
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
  );
}
