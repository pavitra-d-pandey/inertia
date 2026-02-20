import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchJson } from '../../lib/api';
import { getSecretAdminToken, isSecretAdminUnlocked, unlockSecretAdmin } from '../../lib/adminAuth';
import { CulturalEvent, GalleryItem, TeamMember } from '../../lib/types';

export default function AdminContentManager() {
  const [isUnlocked, setIsUnlocked] = useState(isSecretAdminUnlocked());
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [culture, setCulture] = useState<CulturalEvent[]>([]);

  const headers = { 'X-Admin-Token': getSecretAdminToken() };

  const loadData = async () => {
    const [galleryData, teamData, cultureData] = await Promise.all([
      fetchJson<GalleryItem[]>('/api/admin/content/gallery', { headers }),
      fetchJson<TeamMember[]>('/api/admin/content/team', { headers }),
      fetchJson<CulturalEvent[]>('/api/admin/content/culture-events', { headers })
    ]);
    setGallery(Array.isArray(galleryData) ? galleryData : []);
    setTeam(Array.isArray(teamData) ? teamData : []);
    setCulture(Array.isArray(cultureData) ? cultureData.map(item => ({ ...item, imageUrl: item.imageUrl || '' })) : []);
  };

  useEffect(() => {
    if (!isUnlocked) {
      return;
    }
    loadData().catch(() => {
      setResult('Could not load content data.');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUnlocked]);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = unlockSecretAdmin(password);
    if (!ok) {
      setResult('Wrong password.');
      return;
    }
    setResult('');
    setPassword('');
    setIsUnlocked(true);
  };

  const updateGallery = async (item: GalleryItem) => {
    setLoading(true);
    setResult('');
    try {
      const res = await fetchJson<{ message: string }>(`/api/admin/glimpse/${item.id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          title: item.title,
          preview: item.preview,
          description: item.description,
          imageUrl: item.imageUrl
        })
      });
      setResult(res.message);
      await loadData();
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Update failed');
    } finally {
      setLoading(false);
    }
  };

  const deleteGallery = async (id: number) => {
    setLoading(true);
    setResult('');
    try {
      const res = await fetchJson<{ message: string }>(`/api/admin/glimpse/${id}`, {
        method: 'DELETE',
        headers
      });
      setResult(res.message);
      await loadData();
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Delete failed');
    } finally {
      setLoading(false);
    }
  };

  const updateTeam = async (member: TeamMember) => {
    setLoading(true);
    setResult('');
    try {
      const res = await fetchJson<{ message: string }>(`/api/admin/team/${member.id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          name: member.name,
          role: member.role,
          preview: member.preview,
          about: member.about,
          imageUrl: member.imageUrl
        })
      });
      setResult(res.message);
      await loadData();
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Update failed');
    } finally {
      setLoading(false);
    }
  };

  const deleteTeam = async (id: number) => {
    setLoading(true);
    setResult('');
    try {
      const res = await fetchJson<{ message: string }>(`/api/admin/team/${id}`, {
        method: 'DELETE',
        headers
      });
      setResult(res.message);
      await loadData();
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Delete failed');
    } finally {
      setLoading(false);
    }
  };

  const updateCulture = async (event: CulturalEvent) => {
    setLoading(true);
    setResult('');
    try {
      const res = await fetchJson<{ message: string }>(`/api/admin/culture-event/${event.id}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify({
          title: event.title,
          preview: event.preview,
          description: event.description,
          imageUrl: event.imageUrl
        })
      });
      setResult(res.message);
      await loadData();
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Update failed');
    } finally {
      setLoading(false);
    }
  };

  const deleteCulture = async (id: number) => {
    setLoading(true);
    setResult('');
    try {
      const res = await fetchJson<{ message: string }>(`/api/admin/culture-event/${id}`, {
        method: 'DELETE',
        headers
      });
      setResult(res.message);
      await loadData();
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Delete failed');
    } finally {
      setLoading(false);
    }
  };

  if (!isUnlocked) {
    return (
      <section className="section">
        <h2 className="section-title">Management Access - Content Manager</h2>
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
      <h2 className="section-title">Content Manager</h2>
      <p className="section-subtitle">Edit or delete any uploaded gallery, team, or cultural content.</p>
      <div className="admin-links">
        <Link className="btn btn-ghost" to="/secret-admin">Back To Content Upload Panel</Link>
      </div>

      <div className="card" style={{ marginTop: '22px' }}>
        <h4>Gallery Items</h4>
        {gallery.length === 0 ? (
          <p>No gallery items.</p>
        ) : (
          gallery.map((item, index) => (
            <div className="card" style={{ marginTop: index === 0 ? '0' : '16px' }} key={item.id}>
              <div className="form-grid">
                <input value={item.title} onChange={e => setGallery(prev => prev.map(x => x.id === item.id ? { ...x, title: e.target.value } : x))} />
                <input value={item.preview} onChange={e => setGallery(prev => prev.map(x => x.id === item.id ? { ...x, preview: e.target.value } : x))} />
                <textarea rows={3} value={item.description} onChange={e => setGallery(prev => prev.map(x => x.id === item.id ? { ...x, description: e.target.value } : x))} />
                <input value={item.imageUrl} onChange={e => setGallery(prev => prev.map(x => x.id === item.id ? { ...x, imageUrl: e.target.value } : x))} />
                <div className="admin-links">
                  <button className="btn btn-primary" type="button" disabled={loading} onClick={() => updateGallery(item)}>Save</button>
                  <button className="btn btn-ghost" type="button" disabled={loading} onClick={() => deleteGallery(item.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="card" style={{ marginTop: '22px' }}>
        <h4>Team Members</h4>
        {team.length === 0 ? (
          <p>No team members.</p>
        ) : (
          team.map((member, index) => (
            <div className="card" style={{ marginTop: index === 0 ? '0' : '16px' }} key={member.id}>
              <div className="form-grid">
                <input value={member.name} onChange={e => setTeam(prev => prev.map(x => x.id === member.id ? { ...x, name: e.target.value } : x))} />
                <input value={member.role} onChange={e => setTeam(prev => prev.map(x => x.id === member.id ? { ...x, role: e.target.value } : x))} />
                <input value={member.preview} onChange={e => setTeam(prev => prev.map(x => x.id === member.id ? { ...x, preview: e.target.value } : x))} />
                <textarea rows={3} value={member.about} onChange={e => setTeam(prev => prev.map(x => x.id === member.id ? { ...x, about: e.target.value } : x))} />
                <input value={member.imageUrl} onChange={e => setTeam(prev => prev.map(x => x.id === member.id ? { ...x, imageUrl: e.target.value } : x))} />
                <div className="admin-links">
                  <button className="btn btn-primary" type="button" disabled={loading} onClick={() => updateTeam(member)}>Save</button>
                  <button className="btn btn-ghost" type="button" disabled={loading} onClick={() => deleteTeam(member.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="card" style={{ marginTop: '22px' }}>
        <h4>Cultural Events</h4>
        {culture.length === 0 ? (
          <p>No cultural events.</p>
        ) : (
          culture.map((event, index) => (
            <div className="card" style={{ marginTop: index === 0 ? '0' : '16px' }} key={event.id}>
              <div className="form-grid">
                <input value={event.title} onChange={e => setCulture(prev => prev.map(x => x.id === event.id ? { ...x, title: e.target.value } : x))} />
                <input value={event.preview} onChange={e => setCulture(prev => prev.map(x => x.id === event.id ? { ...x, preview: e.target.value } : x))} />
                <textarea rows={3} value={event.description} onChange={e => setCulture(prev => prev.map(x => x.id === event.id ? { ...x, description: e.target.value } : x))} />
                <input value={event.imageUrl || ''} onChange={e => setCulture(prev => prev.map(x => x.id === event.id ? { ...x, imageUrl: e.target.value } : x))} />
                <div className="admin-links">
                  <button className="btn btn-primary" type="button" disabled={loading} onClick={() => updateCulture(event)}>Save</button>
                  <button className="btn btn-ghost" type="button" disabled={loading} onClick={() => deleteCulture(event.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {result && <div className="banner" style={{ marginTop: '18px' }}>{result}</div>}
    </section>
  );
}
