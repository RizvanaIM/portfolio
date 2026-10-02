import React from 'react';
import { personalDetails } from '../data/portfolioData';

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#1f242d]/90 backdrop-blur-md border-b border-slate-800/80 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#home" className="text-2xl font-extrabold text-white tracking-tight">
          {personalDetails.name.split(' ')[0]}<span className="text-[#00eeff]">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <a href="#home" className="text-[#00eeff] hover:text-[#00eeff] transition">Home</a>
          <a href="#about" className="hover:text-[#00eeff] transition">About</a>
          <a href="#services" className="hover:text-[#00eeff] transition">Services</a>
          <a href="#ai-gallery" className="hover:text-[#00eeff] transition">AI Media</a>
          <a href="#portfolio" className="hover:text-[#00eeff] transition">Portfolio</a>
          <a href="#skills" className="hover:text-[#00eeff] transition">Skills</a>
          <a href="#contact" className="hover:text-[#00eeff] transition">Contact</a>
        </div>
        <a
          href="#contact"
          className="px-5 py-2 rounded-full border border-[#00eeff] text-[#00eeff] hover:bg-[#00eeff] hover:text-[#1f242d] font-bold text-xs shadow-[0_0_15px_#00eeff40] transition duration-300"
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
}