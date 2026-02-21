import { useState } from 'react';
import { fetchJson } from '../../lib/api';

type ContactResponse = { message: string };

export default function Contact() {
  const [form, setForm] = useState({
    email: '',
    phone: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult('');
    setSubmitting(true);
    try {
      const res = await fetchJson<ContactResponse>('/api/contact', {
        method: 'POST',
        body: JSON.stringify(form)
      });
      setResult(res.message);
      setForm({ email: '', phone: '' });
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Unable to submit contact');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">Share your email and phone number. Our team will reach out to you.</p>

      <div className="card" style={{ marginTop: '24px', maxWidth: '640px' }}>
        <h4>Contact Form</h4>
        <form className="form-grid" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            placeholder="Phone number"
            value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })}
            required
          />
          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit Contact'}
          </button>
        </form>
        {result && <div className="banner" style={{ marginTop: '18px' }}>{result}</div>}
      </div>
    </section>
  );
}
