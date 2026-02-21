import { useState } from 'react';
import { API_BASE, fetchJson } from '../../lib/api';
import { redirectToWhatsApp, WHATSAPP_LINKS } from '../../lib/eventLinks';

type RegisterResponse = { message: string };

export default function OpenMic() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    enrollmentNumber: '',
    year: '',
    collegeName: '',
    performanceType: '',
    scriptPdfUrl: ''
  });
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState('');

  const uploadPDF = async (file: File) => {
    const body = new FormData();
    body.append('document', file);
    const res = await fetch(`${API_BASE}/api/uploads/document`, {
      method: 'POST',
      body
    });
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const data = (await res.json()) as { documentUrl: string };
    return data.documentUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult('');
    setSubmitting(true);
    try {
      if (!pdfFile && !form.scriptPdfUrl) {
        throw new Error('Please upload a PDF or provide a PDF link for your script/plan.');
      }
      let scriptPdfUrl = form.scriptPdfUrl;
      if (pdfFile) {
        scriptPdfUrl = await uploadPDF(pdfFile);
      }

      const res = await fetchJson<RegisterResponse>('/api/open-mic/register', {
        method: 'POST',
        body: JSON.stringify({
          ...form,
          scriptPdfUrl
        })
      });
      setResult(`${res.message} Redirecting to WhatsApp group...`);
      setTimeout(() => redirectToWhatsApp(WHATSAPP_LINKS.openMic), 1400);
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Unable to register');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section">
      <h2 className="section-title">Open Mic</h2>
      <p className="section-subtitle">Open Mic is free. Registration is mandatory.</p>

      <div className="card" style={{ marginTop: '24px' }}>
        <h4>Open Mic Registration</h4>
        <form className="form-grid" onSubmit={handleSubmit}>
          <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
          <input placeholder="WhatsApp number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
          <input placeholder="Enrollment number" value={form.enrollmentNumber} onChange={e => setForm({ ...form, enrollmentNumber: e.target.value })} required />
          <input placeholder="Year" value={form.year} onChange={e => setForm({ ...form, year: e.target.value })} required />
          <input placeholder="College name" value={form.collegeName} onChange={e => setForm({ ...form, collegeName: e.target.value })} required />
          <input
            placeholder="What do you want to perform?"
            value={form.performanceType}
            onChange={e => setForm({ ...form, performanceType: e.target.value })}
            required
          />
          <input
            type="url"
            placeholder="Script/plan PDF URL (optional if uploading below)"
            value={form.scriptPdfUrl}
            onChange={e => setForm({ ...form, scriptPdfUrl: e.target.value })}
          />
          <input type="file" accept="application/pdf" onChange={e => setPdfFile(e.target.files?.[0] ?? null)} />
          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Register Open Mic'}
          </button>
        </form>
        {result && <div className="banner" style={{ marginTop: '18px' }}>{result}</div>}
      </div>
    </section>
  );
}
