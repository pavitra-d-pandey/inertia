import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE, fetchJson } from '../../lib/api';
import { getSecretAdminToken, isSecretAdminUnlocked, unlockSecretAdmin } from '../../lib/adminAuth';

export default function Admin() {
  const [isUnlocked, setIsUnlocked] = useState(isSecretAdminUnlocked());
  const [password, setPassword] = useState('');

  const [galleryTitle, setGalleryTitle] = useState('');
  const [galleryPreview, setGalleryPreview] = useState('');
  const [galleryDescription, setGalleryDescription] = useState('');
  const [galleryFile, setGalleryFile] = useState<File | null>(null);

  const [memberName, setMemberName] = useState('');
  const [memberRole, setMemberRole] = useState('');
  const [memberPreview, setMemberPreview] = useState('');
  const [memberAbout, setMemberAbout] = useState('');
  const [memberFile, setMemberFile] = useState<File | null>(null);

  const [cultureTitle, setCultureTitle] = useState('');
  const [culturePreview, setCulturePreview] = useState('');
  const [cultureDescription, setCultureDescription] = useState('');
  const [mailAudience, setMailAudience] = useState<'all' | 'workshops' | 'hackathon' | 'robo-race'>('all');
  const [mailSubject, setMailSubject] = useState('');
  const [mailBody, setMailBody] = useState('');

  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = unlockSecretAdmin(password);
    if (!ok) {
      setResult('Wrong password.');
      return;
    }
    setResult('');
    setIsUnlocked(true);
    setPassword('');
  };

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('image', file);

    const uploadRes = await fetch(`${API_BASE}/api/admin/upload`, {
      method: 'POST',
      headers: {
        'X-Admin-Token': getSecretAdminToken()
      },
      body: formData
    });

    if (!uploadRes.ok) {
      throw new Error(await uploadRes.text());
    }

    const { imageUrl } = (await uploadRes.json()) as { imageUrl: string };
    return imageUrl;
  };

  const handleGalleryUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryFile) {
      setResult('Please select an image for gallery item.');
      return;
    }

    setLoading(true);
    setResult('');
    try {
      const imageUrl = await uploadImage(galleryFile);
      const saveRes = await fetchJson<{ message: string }>('/api/admin/glimpse', {
        method: 'POST',
        headers: {
          'X-Admin-Token': getSecretAdminToken()
        },
        body: JSON.stringify({
          title: galleryTitle,
          preview: galleryPreview,
          description: galleryDescription,
          imageUrl
        })
      });

      setResult(saveRes.message);
      setGalleryTitle('');
      setGalleryPreview('');
      setGalleryDescription('');
      setGalleryFile(null);
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  const handleTeamUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberFile) {
      setResult('Please select a team photo.');
      return;
    }

    setLoading(true);
    setResult('');
    try {
      const imageUrl = await uploadImage(memberFile);
      const saveRes = await fetchJson<{ message: string }>('/api/admin/team', {
        method: 'POST',
        headers: {
          'X-Admin-Token': getSecretAdminToken()
        },
        body: JSON.stringify({
          name: memberName,
          role: memberRole,
          preview: memberPreview,
          about: memberAbout,
          imageUrl
        })
      });

      setResult(saveRes.message);
      setMemberName('');
      setMemberRole('');
      setMemberPreview('');
      setMemberAbout('');
      setMemberFile(null);
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  const handleCultureSave = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setResult('');
    try {
      const saveRes = await fetchJson<{ message: string }>('/api/admin/culture-event', {
        method: 'POST',
        headers: {
          'X-Admin-Token': getSecretAdminToken()
        },
        body: JSON.stringify({
          title: cultureTitle,
          preview: culturePreview,
          description: cultureDescription
        })
      });

      setResult(saveRes.message);
      setCultureTitle('');
      setCulturePreview('');
      setCultureDescription('');
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setLoading(false);
    }
  };

  const handleBroadcastMail = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setResult('');
    try {
      const sendRes = await fetchJson<{ message: string; count: number }>('/api/admin/notifications/broadcast', {
        method: 'POST',
        headers: {
          'X-Admin-Token': getSecretAdminToken()
        },
        body: JSON.stringify({
          audience: mailAudience,
          subject: mailSubject,
          message: mailBody
        })
      });
      setResult(`${sendRes.message}. Sent to ${sendRes.count} recipients.`);
      setMailSubject('');
      setMailBody('');
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Mail send failed');
    } finally {
      setLoading(false);
    }
  };

  if (!isUnlocked) {
    return (
      <section className="section">
        <h2 className="section-title">Management Access</h2>
        <div className="card" style={{ maxWidth: '520px' }}>
          <h4>Enter Password</h4>
          <form className="form-grid" onSubmit={handleUnlock}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit">Unlock</button>
          </form>
          {result && <div className="banner" style={{ marginTop: '18px' }}>{result}</div>}
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Management Panel</h2>
      <p className="section-subtitle">
        Manage content, registrations, and bulk announcements in one place.
      </p>

      <div className="admin-links">
        <Link className="btn btn-ghost" to="/secret-admin/registrations">View Registrations Data</Link>
        <Link className="btn btn-ghost" to="/secret-admin/manage-content">Edit / Delete Uploaded Content</Link>
      </div>

      <div className="card">
        <h4>Upload Gallery Item</h4>
        <form className="form-grid" onSubmit={handleGalleryUpload}>
          <input placeholder="Title" value={galleryTitle} onChange={e => setGalleryTitle(e.target.value)} required />
          <input
            placeholder="Preview text"
            value={galleryPreview}
            onChange={e => setGalleryPreview(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={galleryDescription}
            onChange={e => setGalleryDescription(e.target.value)}
            rows={3}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={e => setGalleryFile(e.target.files?.[0] ?? null)}
            required
          />
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? 'Saving...' : 'Upload Gallery Item'}
          </button>
        </form>
      </div>

      <div className="card" style={{ marginTop: '28px' }}>
        <h4>Upload Team Member</h4>
        <form className="form-grid" onSubmit={handleTeamUpload}>
          <input placeholder="Name" value={memberName} onChange={e => setMemberName(e.target.value)} required />
          <input placeholder="Role" value={memberRole} onChange={e => setMemberRole(e.target.value)} required />
          <input
            placeholder="Preview text"
            value={memberPreview}
            onChange={e => setMemberPreview(e.target.value)}
            required
          />
          <textarea
            placeholder="About"
            value={memberAbout}
            onChange={e => setMemberAbout(e.target.value)}
            rows={4}
            required
          />
          <input type="file" accept="image/*" onChange={e => setMemberFile(e.target.files?.[0] ?? null)} required />
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? 'Saving...' : 'Upload Team Member'}
          </button>
        </form>
      </div>

      <div className="card" style={{ marginTop: '28px' }}>
        <h4>Add Cultural Event</h4>
        <form className="form-grid" onSubmit={handleCultureSave}>
          <input placeholder="Title" value={cultureTitle} onChange={e => setCultureTitle(e.target.value)} required />
          <input
            placeholder="Preview text"
            value={culturePreview}
            onChange={e => setCulturePreview(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={cultureDescription}
            onChange={e => setCultureDescription(e.target.value)}
            rows={3}
            required
          />
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? 'Saving...' : 'Save Cultural Event'}
          </button>
        </form>
      </div>

      <div className="card" style={{ marginTop: '28px' }}>
        <h4>Send Mail To Registrants</h4>
        <form className="form-grid" onSubmit={handleBroadcastMail}>
          <select value={mailAudience} onChange={e => setMailAudience(e.target.value as 'all' | 'workshops' | 'hackathon' | 'robo-race')}>
            <option value="all">Everyone (All Events)</option>
            <option value="workshops">Only Workshops</option>
            <option value="hackathon">Only Hackathon</option>
            <option value="robo-race">Only Robo Race</option>
          </select>
          <input
            placeholder="Mail subject"
            value={mailSubject}
            onChange={e => setMailSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="Write the mail content..."
            rows={6}
            value={mailBody}
            onChange={e => setMailBody(e.target.value)}
            required
          />
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Mail'}
          </button>
        </form>
      </div>

      {result && <div className="banner" style={{ marginTop: '18px' }}>{result}</div>}
    </section>
  );
}
