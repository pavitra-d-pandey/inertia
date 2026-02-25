import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE, fetchJson } from '../../lib/api';
import { HackathonIDCard } from '../../lib/types';

type RegisterResponse = { message: string };

export default function Hackathon() {
  const [leaderPhoneForRequest, setLeaderPhoneForRequest] = useState('');
  const [requestingID, setRequestingID] = useState(false);
  const [requestStatus, setRequestStatus] = useState('');

  const [verifyForm, setVerifyForm] = useState({ phone: '', code: '' });
  const [verifyingID, setVerifyingID] = useState(false);
  const [verifyStatus, setVerifyStatus] = useState('');
  const [idCard, setIDCard] = useState<HackathonIDCard | null>(null);

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
        body: JSON.stringify({ phone: verifyForm.phone, code: verifyForm.code })
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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone: verifyForm.phone, code: verifyForm.code })
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
        <strong>Hackathon registrations are closed.</strong>
        <p style={{ margin: '8px 0 0' }}>If your team is already registered, use the sections below for e-ID card and problem statement.</p>
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
              <p><strong>Team ID:</strong> {idCard.teamId}</p>
              <p><strong>Team Code:</strong> {idCard.teamCode}</p>
              <p><strong>Issued:</strong> {idCard.issuedAt}</p>
            </div>
          </div>
          <button className="btn btn-primary" type="button" style={{ marginTop: '16px' }} onClick={downloadIDCard}>
            Download ID Card
          </button>
        </div>
      )}

      <div className="card" style={{ marginTop: '24px' }}>
        <h4>Problem Statements</h4>
        <p>After receiving Team ID from manager, open complete problem statement flow.</p>
        <Link className="btn btn-primary" to="/problemstatement">
          View Problem Statement
        </Link>
      </div>
    </section>
  );
}
