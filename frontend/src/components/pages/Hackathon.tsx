import { useState } from 'react';
import { API_BASE, fetchJson } from '../../lib/api';
import { collectPayment } from '../../lib/payment';
import { redirectToWhatsApp, WHATSAPP_LINKS } from '../../lib/eventLinks';
import { HackathonIDCard } from '../../lib/types';

type RegisterResponse = { message: string };

type HackathonMember = {
  name: string;
  phone: string;
  gender: string;
};

const createMembers = (): HackathonMember[] =>
  Array.from({ length: 3 }, () => ({
    name: '',
    phone: '',
    gender: 'female'
  }));

export default function Hackathon() {
  const [form, setForm] = useState({
    teamName: '',
    contactName: '',
    contactPhone: '',
    collegeName: ''
  });
  const [members, setMembers] = useState<HackathonMember[]>(createMembers());
  const [result, setResult] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [leaderPhoneForRequest, setLeaderPhoneForRequest] = useState('');
  const [requestingID, setRequestingID] = useState(false);
  const [requestStatus, setRequestStatus] = useState('');
  const [verifyForm, setVerifyForm] = useState({
    phone: '',
    code: ''
  });
  const [verifyingID, setVerifyingID] = useState(false);
  const [verifyStatus, setVerifyStatus] = useState('');
  const [idCard, setIDCard] = useState<HackathonIDCard | null>(null);

  const updateMember = (index: number, key: keyof HackathonMember, value: string) => {
    setMembers(prev => prev.map((member, i) => (i === index ? { ...member, [key]: value } : member)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult('');
    setSubmitting(true);
    try {
      const femaleCount = members.filter(m => m.gender.toLowerCase() === 'female').length;
      if (femaleCount < 1) {
        throw new Error('At least one female member is required.');
      }

      const payment = await collectPayment(
        'hackathon',
        { name: form.contactName, contact: form.contactPhone },
        'CodeHunt Hackathon'
      );

      const res = await fetchJson<RegisterResponse>('/api/hackathon/register', {
        method: 'POST',
        body: JSON.stringify({
          ...form,
          members,
          ...payment
        })
      });

      setResult(`${res.message} Redirecting to WhatsApp group...`);
      setForm({
        teamName: '',
        contactName: '',
        contactPhone: '',
        collegeName: ''
      });
      setMembers(createMembers());
      setTimeout(() => redirectToWhatsApp(WHATSAPP_LINKS.hackathon), 1400);
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Unable to complete registration');
    } finally {
      setSubmitting(false);
    }
  };

  const handleLeaderRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setRequestStatus('');
    setRequestingID(true);
    try {
      const res = await fetchJson<RegisterResponse>('/api/hackathon/id-card/request', {
        method: 'POST',
        body: JSON.stringify({ leaderPhone: leaderPhoneForRequest })
      });
      setRequestStatus(res.message);
      setLeaderPhoneForRequest('');
    } catch (err) {
      setRequestStatus(err instanceof Error ? err.message : 'Unable to send request');
    } finally {
      setRequestingID(false);
    }
  };

  const handleVerifyAndFetchCard = async (e: React.FormEvent) => {
    e.preventDefault();
    setVerifyStatus('');
    setVerifyingID(true);
    try {
      const card = await fetchJson<HackathonIDCard>('/api/hackathon/id-card/verify', {
        method: 'POST',
        body: JSON.stringify({
          phone: verifyForm.phone,
          code: verifyForm.code
        })
      });
      setIDCard(card);
      setVerifyStatus('ID card generated successfully.');
    } catch (err) {
      setIDCard(null);
      setVerifyStatus(err instanceof Error ? err.message : 'Unable to verify details');
    } finally {
      setVerifyingID(false);
    }
  };

  const downloadIDCard = () => {
    if (!idCard) {
      return;
    }
    setVerifyStatus('');
    fetch(`${API_BASE}/api/hackathon/id-card/download`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone: verifyForm.phone,
        code: verifyForm.code
      })
    })
      .then(async res => {
        if (!res.ok) {
          const message = await res.text();
          throw new Error(message || 'Unable to download ID card');
        }
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        const safeName = idCard.participantName.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
        link.href = url;
        link.download = `${safeName || 'participant'}-hackathon-id.svg`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch(err => {
        setVerifyStatus(err instanceof Error ? err.message : 'Unable to download ID card');
      });
  };

  return (
    <section className="section">
      <h2 className="section-title">CodeHunt Hackathon</h2>
      <div className="banner" style={{ marginBottom: '18px' }}>
        <strong>Top Note: We only need the solution for the idea.</strong>
        <p style={{ margin: '8px 0 0' }}>
          Focus on solving the problem clearly. Your implementation can be simple, scrappy, or polished. Vibe coding is allowed.
        </p>
      </div>
      <div className="banner" style={{ marginBottom: '18px' }}>
        <strong>Important: Team size is fixed to 4 members only</strong>
        <p style={{ margin: '8px 0 0' }}>1 Leader + 3 Team Members</p>
      </div>
      <div className="prize-pool-spotlight">
        <span className="prize-pool-label">Prize Pool</span>
        <div className="prize-pool-value">INR 12,000</div>
      </div>
      <p className="section-subtitle">Two-day hackathon with internship interview opportunities, prototype building, and live stage presentations.</p>

      <div className="cards-grid" style={{ marginTop: '24px' }}>
        <div className="card">
          <h4>Hackathon Sponsors</h4>
          <div className="sponsor-row">
            <img className="sponsor-logo" src="/time.png" alt="Time sponsor" onError={e => ((e.currentTarget.style.display = 'none'))} />
            <img className="sponsor-logo" src="/upgrad.png" alt="upGrad sponsor" onError={e => ((e.currentTarget.style.display = 'none'))} />
          </div>
          <p style={{ marginTop: '12px' }}>Sponsors: TIME and upGrad.</p>
        </div>
      </div>

      <div className="banner" style={{ marginTop: '22px' }}>
        <h4 style={{ marginTop: 0 }}>Why Join CodeHunt Hackathon</h4>
        <ul>
          <li><strong>Day 1 (26 February):</strong> Build your prototype.</li>
          <li><strong>Day 2 (27 February):</strong> Present and explain your prototype live on stage.</li>
          <li><strong>Team size rule:</strong> Exactly 4 members (1 leader + 3 members).</li>
          <li>Registration fee: INR 300 per team.</li>
          <li>Problem statements will be revealed on the spot.</li>
          <li><strong>Vibe coding is allowed:</strong> Use AI tools, rapid prototyping, and creative workflows to build your solution faster.</li>
          <li>100% internship opportunity path: 10 participants will be shortlisted for internship interviews at upGrad or TIME.</li>
          <li>Refreshments will be provided during the hackathon.</li>
          <li>Strong exposure for students across Jabalpur.</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <h4>Hackathon Team Registration</h4>
        <p style={{ marginTop: 0 }}>Fill details for the leader first, then add 3 team members.</p>
        <form className="form-grid" onSubmit={handleSubmit}>
          <input
            placeholder="Team name"
            value={form.teamName}
            onChange={e => setForm({ ...form, teamName: e.target.value })}
            required
          />
          <input
            placeholder="Leader name"
            value={form.contactName}
            onChange={e => setForm({ ...form, contactName: e.target.value })}
            required
          />
          <input
            placeholder="Leader WhatsApp number"
            value={form.contactPhone}
            onChange={e => setForm({ ...form, contactPhone: e.target.value })}
            required
          />
          <input
            placeholder="College name"
            value={form.collegeName}
            onChange={e => setForm({ ...form, collegeName: e.target.value })}
            required
          />

          {members.map((member, index) => (
            <div className="card" key={index}>
              <h4>Team Member {index + 1}</h4>
              <div className="form-grid">
                <input
                  placeholder={`Member ${index + 1} name`}
                  value={member.name}
                  onChange={e => updateMember(index, 'name', e.target.value)}
                  required
                />
                <input
                  placeholder={`Member ${index + 1} WhatsApp number`}
                  value={member.phone}
                  onChange={e => updateMember(index, 'phone', e.target.value)}
                  required
                />
                <select
                  value={member.gender}
                  onChange={e => updateMember(index, 'gender', e.target.value)}
                >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          ))}

          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? 'Processing Payment...' : 'Pay & Register Hackathon'}
          </button>
        </form>
      </div>

      {result && <div className="banner" style={{ marginTop: '20px' }}>{result}</div>}

      <div className="cards-grid" style={{ marginTop: '24px' }}>
        <div className="card">
          <h4>Team Leader: Request e-ID Card</h4>
          <p>Enter the registered leader phone number and send request to hackathon manager.</p>
          <form className="form-grid" onSubmit={handleLeaderRequest}>
            <input
              placeholder="Registered leader WhatsApp number"
              value={leaderPhoneForRequest}
              onChange={e => setLeaderPhoneForRequest(e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit" disabled={requestingID}>
              {requestingID ? 'Sending Request...' : 'Request e-ID Card'}
            </button>
          </form>
          {requestStatus && <div className="banner" style={{ marginTop: '16px' }}>{requestStatus}</div>}
        </div>

        <div className="card">
          <h4>Team Member: Get e-ID Card</h4>
          <p>Enter your registered phone number and 4-digit code from manager.</p>
          <form className="form-grid" onSubmit={handleVerifyAndFetchCard}>
            <input
              placeholder="Registered phone number"
              value={verifyForm.phone}
              onChange={e => setVerifyForm(prev => ({ ...prev, phone: e.target.value }))}
              required
            />
            <input
              placeholder="4-digit code"
              value={verifyForm.code}
              maxLength={4}
              onChange={e => setVerifyForm(prev => ({ ...prev, code: e.target.value }))}
              required
            />
            <button className="btn btn-primary" type="submit" disabled={verifyingID}>
              {verifyingID ? 'Verifying...' : 'Get ID Card'}
            </button>
          </form>
          {verifyStatus && <div className="banner" style={{ marginTop: '16px' }}>{verifyStatus}</div>}
        </div>
      </div>

      {idCard && (
        <div className="card" style={{ marginTop: '24px' }}>
          <h4>Your Hackathon e-ID Card</h4>
          <div className="id-card-preview">
            <div className="id-card-header">
              <div className="id-card-event">CODEHUNT HACKATHON</div>
              <div className="id-card-subtitle">Official Participant ID</div>
            </div>
            <div className="id-card-body">
              <p><strong>Name:</strong> {idCard.participantName}</p>
              <p><strong>Role:</strong> {idCard.role}</p>
              <p><strong>Phone:</strong> {idCard.participantPhone}</p>
              <p><strong>Team:</strong> {idCard.teamName}</p>
              <p><strong>College:</strong> {idCard.collegeName}</p>
              <p><strong>Team ID:</strong> CH-{idCard.teamId}</p>
              <p><strong>Team Code:</strong> {idCard.teamCode}</p>
              <p><strong>Issued:</strong> {idCard.issuedAt}</p>
            </div>
          </div>
          <button className="btn btn-primary" type="button" style={{ marginTop: '16px' }} onClick={downloadIDCard}>
            Download ID Card
          </button>
        </div>
      )}
    </section>
  );
}
