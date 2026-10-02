import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { Code2, Briefcase, Rocket, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#242b38] border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            About <span className="text-[#00eeff]">Me</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-lg mx-auto">
            A quick overview of my background, technical focus, and current status.
          </p>
        </div>

        {/* 3 Quick-Read Cards (Quick Understanding) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Core Engineering */}
          <div className="p-7 rounded-2xl bg-[#1f242d] border border-slate-700/80 hover:border-[#00eeff]/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#00eeff]/10 text-[#00eeff] flex items-center justify-center mb-4">
              <Code2 size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Backend &amp; Full-Stack</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Specialized in architecting high-performance RESTful APIs, Spring Boot microservices, Flyway database migrations, and clean layered architectures.
            </p>
          </div>

          {/* Card 2: Industry Exposure */}
          <div className="p-7 rounded-2xl bg-[#1f242d] border border-slate-700/80 hover:border-[#00eeff]/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#00eeff]/10 text-[#00eeff] flex items-center justify-center mb-4">
              <Briefcase size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Industry Experience</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Gained practical enterprise experience through internships at <strong>ZeroCode Software</strong> (Spring Boot &amp; Docker) and <strong>Tringledo</strong> (Odoo ERP customization).
            </p>
          </div>

          {/* Card 3: Current Focus & Collabs */}
          <div className="p-7 rounded-2xl bg-[#1f242d] border border-slate-700/80 hover:border-[#00eeff]/50 transition duration-300">
            <div className="w-12 h-12 rounded-xl bg-[#00eeff]/10 text-[#00eeff] flex items-center justify-center mb-4">
              <Rocket size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Ready for Action</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Completed BSc (Hons) Software Engineering studies. Actively leveling up through production-grade projects and ready for software engineering roles &amp; collaborations.
            </p>
          </div>

        </div>

        {/* Short Summary Bar with Direct Action */}
        <div className="p-6 rounded-2xl bg-[#1f242d]/60 border border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <CheckCircle2 size={20} className="text-[#00eeff] shrink-0" />
            <span className="text-xs sm:text-sm text-slate-200">
              Degree studies completed &bull; Based in Battaramulla, Sri Lanka &bull; Available for Remote &amp; On-Site Work
            </span>
          </div>
          <a
            href="#contact"
            className="whitespace-nowrap px-6 py-2.5 rounded-full bg-[#00eeff] text-[#1f242d] font-bold text-xs shadow-[0_0_15px_#00eeff50] hover:scale-105 transition"
          >
            Let's Collaborate
          </a>
        </div>

      </div>
    </section>
  );
}