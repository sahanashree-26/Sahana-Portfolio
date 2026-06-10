import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomeDeck from "./pages/WelcomeDeck";
import MeetSahana from "./pages/MeetSahana";
import SkillUniverse from "./pages/SkillUniverse";
import BuildGallery from "./pages/BuildGallery";
import ResumeVault from "./pages/ResumeVault";
import SocialBridge from "./pages/SocialBridge";
import JourneyTimeline from "./pages/JourneyTimeline";
import LetsConnect from "./pages/LetsConnect";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<WelcomeDeck />} />
        <Route path="/meet-sahana" element={<MeetSahana />} />
        <Route path="/skill-universe" element={<SkillUniverse />} />
        <Route path="/build-gallery" element={<BuildGallery />} />
        <Route path="/resume-vault" element={<ResumeVault />} />
        <Route path="/social-bridge" element={<SocialBridge />} />
        <Route path="/journey-timeline" element={<JourneyTimeline />} />
        <Route path="/lets-connect" element={<LetsConnect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;