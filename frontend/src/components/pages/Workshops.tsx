import { useEffect, useState } from 'react';
import { fetchJson } from '../../lib/api';
import { collectPayment } from '../../lib/payment';

type Workshop = { id: number; title: string; description: string };

type RegisterResponse = { message: string };

const fallbackWorkshops: Workshop[] = [
  { id: 1, title: 'Generative AI Bootcamp', description: 'Prompt engineering, RAG, and agent workflows.' },
  { id: 2, title: 'ML Ops Fundamentals', description: 'Deploy models with monitoring and pipelines.' },
  { id: 3, title: 'Computer Vision Sprint', description: 'Build detection and tracking models.' }
];

export default function Workshops() {
  const [workshops, setWorkshops] = useState<Workshop[]>(fallbackWorkshops);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    workshopId: String(fallbackWorkshops[0].id)
  });
  const [result, setResult] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchJson<Workshop[]>('/api/workshops')
      .then(data => {
        setWorkshops(data);
        if (data[0]) {
          setForm(prev => ({ ...prev, workshopId: String(data[0].id) }));
        }
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
      setResult(res.message);
      setForm(prev => ({
        name: '',
        email: '',
        phone: '',
        workshopId: prev.workshopId
      }));
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Unable to register');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section">
      <h2 className="section-title">AI & ML Workshops</h2>
      <p className="section-subtitle">Choose your workshop and complete registration.</p>

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
            placeholder="Phone"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            required
          />
          <select
            value={form.workshopId}
            onChange={e => setForm({ ...form, workshopId: e.target.value })}
          >
            {workshops.map(workshop => (
              <option key={workshop.id} value={workshop.id}>
                {workshop.title}
              </option>
            ))}
          </select>
          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? 'Processing Payment...' : 'Pay & Register Workshop'}
          </button>
        </form>
        {result && <div className="banner" style={{ marginTop: '18px' }}>{result}</div>}
      </div>
    </section>
  );
}
