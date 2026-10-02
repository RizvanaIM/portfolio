import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AiVideoGallery from './components/AiVideoGallery';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AudioWelcome from './components/AudioWelcome';
import NfcModal from './components/NfcModal';
import ProjectCollab from './components/ProjectCollab';

export default function App() {
  const [isNfcOpen, setIsNfcOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1f242d] text-slate-100 font-sans selection:bg-[#00eeff] selection:text-[#1f242d]">
      <Navbar />
      <Hero />
      <About />
      <Services onOpenNfcModal={() => setIsNfcOpen(true)} />
      <AiVideoGallery />
      <Projects />
      <Skills />
      <ProjectCollab />
      <Contact />
      {/* <AudioWelcome /> */}
      <NfcModal isOpen={isNfcOpen} onClose={() => setIsNfcOpen(false)} />
    </div>
  );
}