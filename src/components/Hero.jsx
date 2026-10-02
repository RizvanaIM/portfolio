import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-28 pb-16 px-6 flex items-center justify-center max-w-6xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
        
        {/* Left Column: Text & Stats */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          <span className="text-base sm:text-lg font-medium text-slate-400 mb-1">
            Hii I am
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-200 tracking-tight mb-2">
            {personalDetails.name}
          </h1>
          <h2 className="text-4xl sm:text-6xl font-black text-[#00eeff] tracking-tight mb-6">
            Backend &amp; Full-Stack Engineer
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-normal">
            {personalDetails.shortBio}
          </p>

          {/* Social Icons Row (Instagram, LinkedIn, GitHub, Email) */}
          <div className="flex items-center gap-3 mb-8">
            {/* Instagram Button */}
            <a
              href={personalDetails.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#242b38] border border-slate-700 text-slate-300 flex items-center justify-center hover:border-[#00eeff] hover:text-[#00eeff] hover:scale-110 transition duration-300 font-bold text-xs"
              title="Instagram (@igstar.me)"
            >
              ig
            </a>

            {/* LinkedIn */}
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#242b38] border border-slate-700 text-slate-300 flex items-center justify-center hover:border-[#00eeff] hover:text-[#00eeff] hover:scale-110 transition duration-300 font-bold text-xs"
              title="LinkedIn"
            >
              in
            </a>

            {/* GitHub */}
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-[#242b38] border border-slate-700 text-slate-300 flex items-center justify-center hover:border-[#00eeff] hover:text-[#00eeff] hover:scale-110 transition duration-300 font-bold text-xs"
              title="GitHub"
            >
              git
            </a>

            {/* Email */}
            <a
              href={`mailto:${personalDetails.email}`}
              className="w-10 h-10 rounded-full bg-[#242b38] border border-slate-700 text-slate-300 flex items-center justify-center hover:border-[#00eeff] hover:text-[#00eeff] hover:scale-110 transition duration-300"
              title="Compose Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Dual Action Buttons (Matching Reference Image) */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            {/* <a
              href="#contact"
              className="px-8 py-3 rounded-xl bg-[#00eeff] text-[#1f242d] font-bold text-sm shadow-[0_0_20px_#00eeff60] hover:scale-105 transition duration-300"
            >
              Hire Me
            </a> */}
            <a
              href={personalDetails.resumeDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-slate-700 bg-[#242b38]/60 text-slate-200 font-semibold text-sm hover:border-[#00eeff] hover:text-[#00eeff] transition duration-300"
            >
              <Download size={16} /> Download CV
            </a>
          </div>

          {/* Bottom Stats Card */}
          <div className="grid grid-cols-3 gap-6 p-5 rounded-2xl bg-[#242b38]/70 border border-slate-700/60 w-full max-w-lg shadow-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#00eeff]">3+</div>
              <div className="text-xs text-slate-400 mt-1">Industry Roles</div>
            </div>
            <div className="border-l border-slate-700 pl-6">
              <div className="text-2xl sm:text-3xl font-black text-[#00eeff]">10+</div>
              <div className="text-xs text-slate-400 mt-1">Projects Done</div>
            </div>
            <div className="border-l border-slate-700 pl-6">
              <div className="text-2xl sm:text-3xl font-black text-[#00eeff]">25+</div>
              <div className="text-xs text-slate-400 mt-1">Core Tech Stack</div>
            </div>
          </div>
        </div>

        {/* Right Column: Pop-Out Photo Breaking Outside the Circle */}
        <div className="lg:col-span-5 flex justify-center items-end relative min-h-[460px] sm:min-h-[520px]">
          {/* Subtle Glow Behind the Circle */}
          <div className="absolute bottom-6 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-[#00eeff]/15 blur-3xl rounded-full pointer-events-none -z-20" />

          {/* The Dark Background Circle */}
          <div className="absolute bottom-4 w-[290px] h-[290px] sm:w-[370px] sm:h-[370px] rounded-full bg-[#181d26] border border-slate-700/60 shadow-2xl -z-10" />

          {/* Cutout Photo: Head & Shoulders break out of the circle */}
          <div className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] flex items-end justify-center">
            <img
              src="/profile.png"
              alt={personalDetails.name}
              className="w-full h-[440px] sm:h-[510px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] hover:scale-[1.02] transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}