import { useMemo, useState } from 'react';
import { fetchJson } from '../../lib/api';
import { collectPayment } from '../../lib/payment';
import { redirectToWhatsApp, WHATSAPP_LINKS } from '../../lib/eventLinks';

type RegisterResponse = { message: string };

type EsportsMember = {
  name: string;
  whatsappNumber: string;
  gameId: string;
};

function createMembers(count: number): EsportsMember[] {
  return Array.from({ length: count }, () => ({ name: '', whatsappNumber: '', gameId: '' }));
}

type SubstitutePlayer = {
  name: string;
  gameId: string;
  whatsappNumber: string;
};

export default function Esports() {
  const [mode, setMode] = useState<'team' | 'solo'>('team');
  const [game, setGame] = useState<'valorant' | 'bgmi'>('valorant');
  const [form, setForm] = useState({
    teamName: '',
    isCollegeParticipant: 'yes' as 'yes' | 'no',
    collegeName: '',
    teamLeaderName: '',
    teamLeaderPhone: ''
  });
  const [soloForm, setSoloForm] = useState({
    playerName: '',
    whatsappNumber: '',
    gameId: '',
    isCollegeParticipant: 'yes' as 'yes' | 'no',
    collegeName: ''
  });
  const [hasSubstitute, setHasSubstitute] = useState<'yes' | 'no'>('no');
  const [substitute, setSubstitute] = useState<SubstitutePlayer>({
    name: '',
    gameId: '',
    whatsappNumber: ''
  });
  const [members, setMembers] = useState<EsportsMember[]>(createMembers(5));
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState('');

  const requiredCount = useMemo(() => (game === 'valorant' ? 5 : 4), [game]);

  const feeLabel = useMemo(() => {
    if (mode === 'solo') {
      return game === 'valorant' ? 'INR 60' : 'INR 50';
    }
    return game === 'valorant' ? 'INR 300' : 'INR 200';
  }, [game, mode]);

  const paymentEvent = useMemo(() => {
    if (mode === 'solo') {
      return game === 'valorant' ? 'esports-solo-valorant' : 'esports-solo-bgmi';
    }
    return game === 'valorant' ? 'esports-valorant' : 'esports-bgmi';
  }, [game, mode]);

  const onGameChange = (value: 'valorant' | 'bgmi') => {
    setGame(value);
    setMembers(createMembers(value === 'valorant' ? 5 : 4));
  };

  const updateMember = (index: number, key: keyof EsportsMember, value: string) => {
    setMembers(prev => prev.map((member, i) => (i === index ? { ...member, [key]: value } : member)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResult('');
    setSubmitting(true);
    try {
      const prefill = mode === 'solo'
        ? { name: soloForm.playerName, contact: soloForm.whatsappNumber }
        : { name: form.teamLeaderName, contact: form.teamLeaderPhone };

      const payment = await collectPayment(paymentEvent, prefill, mode === 'solo' ? `Solo eSports ${game.toUpperCase()}` : `eSports ${game.toUpperCase()}`);

      const endpoint = mode === 'solo' ? '/api/esports/solo-register' : '/api/esports/register';
      const body = mode === 'solo'
        ? {
            game,
            playerName: soloForm.playerName,
            whatsappNumber: soloForm.whatsappNumber,
            gameId: soloForm.gameId,
            isCollegeParticipant: soloForm.isCollegeParticipant === 'yes',
            collegeName: soloForm.isCollegeParticipant === 'yes' ? soloForm.collegeName.trim() : '',
            ...payment
          }
        : {
            ...form,
            isCollegeParticipant: form.isCollegeParticipant === 'yes',
            collegeName: form.isCollegeParticipant === 'yes' ? form.collegeName.trim() : '',
            game,
            members: members.map(member => ({ ...member })),
            hasSubstitute: hasSubstitute === 'yes',
            ...(hasSubstitute === 'yes' ? { substitutePlayer: substitute } : {}),
            ...payment
          };

      const res = await fetchJson<RegisterResponse>(endpoint, {
        method: 'POST',
        body: JSON.stringify(body)
      });

      setResult(`${res.message} Redirecting to WhatsApp group...`);
      setTimeout(() => redirectToWhatsApp(WHATSAPP_LINKS.esports), 1400);
    } catch (err) {
      setResult(err instanceof Error ? err.message : 'Unable to register');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section">
      <h2 className="section-title">eSports</h2>
      <div className="prize-pool-spotlight">
        <span className="prize-pool-label">Prize Pool</span>
        <div className="prize-pool-value">INR 11,000</div>
      </div>
      <p className="section-subtitle">Select game first: Valorant (5 players, INR 300 per team) or BGMI (4 players, INR 200 per team).</p>
      <div className="card" style={{ marginTop: '20px' }}>
        <h4>Core Tournament Rules & Requirements</h4>
        <ul>
          <li>Team composition: 5 main players and up to 2 substitutes.</li>
          <li>No account recruitment is allowed.</li>
          <li>Device restriction (BGMI): only mobile/tablet devices are allowed. Emulator usage leads to ban/disqualification.</li>
          <li>Account requirements (BGMI): minimum tier and level may be required (for example Gold V and Level 15+).</li>
          <li>Game mode (BGMI): Classic mode (Squad).</li>
          <li>BGMI map pool: Erangel, Miramar, and Rondo.</li>
          <li>Valorant map order: Ascent, Split, Haven (Finale).</li>
          <li>Points system (BGMI): based on placement and kills. Tiebreakers prioritize total kills, then Chicken Dinner count.</li>
          <li>Winning qualifies the team for the next round.</li>
          <li>No toxic behavior, toxic chat/voice chat, griefing, or team killing will be tolerated.</li>
        </ul>

        <h4 style={{ marginTop: '16px' }}>Match Procedures</h4>
        <ul>
          <li>Check-in: teams must join the custom room/party 10-15 minutes before match start.</li>
          <li>Recording/proof: players may be required to record POV/screen and submit it if requested.</li>
          <li>Technical issues: players are responsible for their own internet connectivity.</li>
        </ul>

        <h4 style={{ marginTop: '16px' }}>Violations & Penalties</h4>
        <ul>
          <li>Cheating (ESP, aimbot, hacks): permanent ban and disqualification.</li>
          <li>Intentional exploitation of bugs/glitches is prohibited.</li>
          <li>Offensive team names or player names are not allowed.</li>
        </ul>
      </div>

      <div className="card" style={{ marginTop: '24px' }}>
        <h4>eSports Registration</h4>
        <form className="form-grid" onSubmit={handleSubmit}>
          <select value={game} onChange={e => onGameChange(e.target.value as 'valorant' | 'bgmi')}>
            <option value="valorant">Valorant (5 players)</option>
            <option value="bgmi">BGMI (4 players)</option>
          </select>

          <select value={mode} onChange={e => setMode(e.target.value as 'team' | 'solo')}>
            <option value="team">Team Registration</option>
            <option value="solo">Solo Registration (Random Squad Match)</option>
          </select>

          {mode === 'solo' && (
            <div className="banner" style={{ marginBottom: '8px' }}>
              You can register solo for BGMI or Valorant. You will still play in squad format and we will match you with random teammates. If a full team cannot be formed, your registration amount will be refunded.
            </div>
          )}

          {mode === 'team' ? (
            <>
              <input placeholder="Team name" value={form.teamName} onChange={e => setForm({ ...form, teamName: e.target.value })} required />
              <select value={form.isCollegeParticipant} onChange={e => setForm({ ...form, isCollegeParticipant: e.target.value as 'yes' | 'no' })}>
                <option value="yes">Are you from a college? Yes</option>
                <option value="no">Are you from a college? No</option>
              </select>
              {form.isCollegeParticipant === 'yes' && (
                <input placeholder="College name" value={form.collegeName} onChange={e => setForm({ ...form, collegeName: e.target.value })} required />
              )}
              <input placeholder="Team leader name" value={form.teamLeaderName} onChange={e => setForm({ ...form, teamLeaderName: e.target.value })} required />
              <input placeholder="Team leader WhatsApp number" value={form.teamLeaderPhone} onChange={e => setForm({ ...form, teamLeaderPhone: e.target.value })} required />

              {members.map((member, index) => (
                <div className="card" key={index}>
                  <h4>Player {index + 1}</h4>
                  <div className="form-grid">
                    <input placeholder="Name" value={member.name} onChange={e => updateMember(index, 'name', e.target.value)} required />
                    <input placeholder="WhatsApp number" value={member.whatsappNumber} onChange={e => updateMember(index, 'whatsappNumber', e.target.value)} required />
                    <input placeholder="Game ID" value={member.gameId} onChange={e => updateMember(index, 'gameId', e.target.value)} required />
                  </div>
                </div>
              ))}

              <select value={hasSubstitute} onChange={e => setHasSubstitute(e.target.value as 'yes' | 'no')}>
                <option value="no">Need substitute player? No</option>
                <option value="yes">Need substitute player? Yes</option>
              </select>
              {hasSubstitute === 'yes' && (
                <div className="card">
                  <h4>Substitute Player Details</h4>
                  <div className="form-grid">
                    <input placeholder="Substitute name" value={substitute.name} onChange={e => setSubstitute({ ...substitute, name: e.target.value })} required />
                    <input placeholder="Substitute Game ID" value={substitute.gameId} onChange={e => setSubstitute({ ...substitute, gameId: e.target.value })} required />
                    <input placeholder="Substitute WhatsApp number" value={substitute.whatsappNumber} onChange={e => setSubstitute({ ...substitute, whatsappNumber: e.target.value })} required />
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <input placeholder="Player name" value={soloForm.playerName} onChange={e => setSoloForm({ ...soloForm, playerName: e.target.value })} required />
              <input placeholder="WhatsApp number" value={soloForm.whatsappNumber} onChange={e => setSoloForm({ ...soloForm, whatsappNumber: e.target.value })} required />
              <input placeholder="Game ID" value={soloForm.gameId} onChange={e => setSoloForm({ ...soloForm, gameId: e.target.value })} required />
              <select value={soloForm.isCollegeParticipant} onChange={e => setSoloForm({ ...soloForm, isCollegeParticipant: e.target.value as 'yes' | 'no' })}>
                <option value="yes">Are you from a college? Yes</option>
                <option value="no">Are you from a college? No</option>
              </select>
              {soloForm.isCollegeParticipant === 'yes' && (
                <input placeholder="College name" value={soloForm.collegeName} onChange={e => setSoloForm({ ...soloForm, collegeName: e.target.value })} required />
              )}
            </>
          )}

          <button className="btn btn-primary" type="submit" disabled={submitting}>
            {submitting ? 'Processing Payment...' : `Pay ${feeLabel} & Register`}
          </button>
        </form>
        {result && <div className="banner" style={{ marginTop: '18px' }}>{result}</div>}
      </div>

      <p style={{ marginTop: '14px', opacity: 0.8 }}>Required players for selected game: {requiredCount}</p>
    </section>
  );
}
