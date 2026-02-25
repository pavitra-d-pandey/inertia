import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/pages/Home';
import Hackathon from './components/pages/Hackathon';
import Workshops from './components/pages/Workshops';
import RoboRace from './components/pages/RoboRace';
import Esports from './components/pages/Esports';
import OpenMic from './components/pages/OpenMic';
import Register from './components/pages/Register';
import Culture from './components/pages/Culture';
import Gallery from './components/pages/Gallery';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';
import Admin from './components/pages/Admin';
import AdminRegistrations from './components/pages/AdminRegistrations';
import AdminContentManager from './components/pages/AdminContentManager';
import HackathonManager from './components/pages/HackathonManager';
import ProblemStatement from './components/pages/ProblemStatement';
import NotFound from './components/pages/NotFound';

export default function App() {
  useEffect(() => {
    document.documentElement.dataset.theme = 'dark';
  }, []);

  return (
    <div className="app-shell">
      <ScrollToTop />
      <Background />
      <Header />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/problemstatement" element={<ProblemStatement />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/kinetic-showdown" element={<RoboRace />} />
          <Route path="/robo-race" element={<RoboRace />} />
          <Route path="/esports" element={<Esports />} />
          <Route path="/open-mic" element={<OpenMic />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/secret-admin" element={<Admin />} />
          <Route path="/secret-admin/registrations" element={<AdminRegistrations />} />
          <Route path="/secret-admin/manage-content" element={<AdminContentManager />} />
          <Route path="/hackathon-manager" element={<HackathonManager />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
