import { useEffect, useState } from 'react';
import { fetchJson } from '../../lib/api';
import { collectPayment } from '../../lib/payment';
import { redirectToWhatsApp, WHATSAPP_LINKS } from '../../lib/eventLinks';

type Workshop = { id: number; title: string; description: string };

type RegisterResponse = { message: string };

const IOT_WORKSHOP: Workshop = {
  id: 1,
  title: 'IoT-Based Single Phase Induction Motor / Speed Control System',
  description: 'Mentor: Dr. Praveen Kumar Sharma (PhD, NIT Durgapur) | Date: 26-27 Feb 2026 | Venue: Jashan Audi, JEC Jabalpur | Fee: INR 300.'
};

export default function Workshops() {
  const [workshops, setWorkshops] = useState<Workshop[]>([IOT_WORKSHOP]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    collegeName: '',
    workshopId: String(IOT_WORKSHOP.id)
  });
  const [result, setResult] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchJson<Workshop[]>('/api/workshops')
      .then(data => {
        if (!Array.isArray(data) || data.length === 0) {
          return;
        }
        const preferred =
          data.find(item => /iot|single phase|induction|speed control/i.test(`${item.title} ${item.description}`)) ?? data[0];
        setWorkshops([{ ...IOT_WORKSHOP, id: preferred.id }]);
        setForm(prev => ({ ...prev, workshopId: String(preferred.id) }));
      })
      .catch(() => null);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult('');
    setSubmitting(true);
    try {
      const payment = await collectPayment(
        'workshops',
        { name: form.name, email: form.email, contact: form.phone },
        'Workshop'
      );
      const res = await fetchJson<RegisterResponse>('/api/workshops/register', {
        method: 'POST',
        body: JSON.stringify({
          ...form,
          ...payment
        })
      });
      setResult(`${res.message} Redirecting to WhatsApp group...`);
      setForm(prev => ({
        name: '',
        email: '',
        phone: '',
        collegeName: '',
        workshopId: prev.workshopId
      }));
      setTimeout(() => redirectToWhatsApp(WHATSAPP_LINKS.workshops), 1400);
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Unable to register');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section">
      <h2 className="section-title">Workshop</h2>
      <p className="section-subtitle">Only one workshop is available. Complete registration below.</p>

      <div className="cards-grid">
        {workshops.map(workshop => (
          <div className="card" key={workshop.id}>
            <h4>{workshop.title}</h4>
            <p>{workshop.description}</p>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: '28px' }}>
        <h4>Workshop Registration</h4>
        <form className="form-grid" onSubmit={handleSubmit}>
          <input
            placeholder="Full name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            placeholder="WhatsApp number"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            required
          />
          <input
            placeholder="College name"
            value={form.collegeName}
            onChange={e => setForm({ ...form, collegeName: e.target.value })}
            required
          />
          <input value={workshops[0]?.title ?? IOT_WORKSHOP.title} readOnly />
          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? 'Processing Payment...' : 'Pay & Register Workshop'}
          </button>
        </form>
        {result && <div className="banner" style={{ marginTop: '18px' }}>{result}</div>}
      </div>
    </section>
  );
}
