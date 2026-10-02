import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { GitPullRequest, Users, Sparkles, ArrowRight } from 'lucide-react';

export default function ProjectCollab() {
  return (
    <section className="py-14 px-6 bg-[#1f242d] border-t border-slate-800">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#242b38] via-[#1a2230] to-[#242b38] border border-[#00eeff]/30 p-8 md:p-10 shadow-[0_0_30px_#00eeff15] flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Collaboration Info */}
        <div className="text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00eeff]/10 text-[#00eeff] text-xs font-semibold mb-3 border border-[#00eeff]/20">
            <GitPullRequest size={14} /> Open for Project Collaboration
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Have an Ongoing Project or an Idea to Build?
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            I am actively looking to team up on interesting projects, startup MVPs, or open-source initiatives. Ready to contribute with <strong>Java, Spring Boot APIs, Docker containerization, or React full-stack development</strong>. Let's brainstorm and build something impactful together!
          </p>
        </div>

        {/* Right Side: CTA Button */}
        <a
          href={`mailto:${personalDetails.email}?subject=Project%20Collaboration%20Idea&body=Hi%20Rizvana,%20I%20have%20an%20ongoing%20project%20/%20idea%20and%20would%20like%20to%20collaborate...`}
          className="whitespace-nowrap px-7 py-3.5 rounded-full bg-[#00eeff] text-[#1f242d] font-bold text-xs shadow-[0_0_20px_#00eeff60] hover:scale-105 transition duration-300 flex items-center gap-2"
        >
          Let's Build Together <ArrowRight size={15} />
        </a>

      </div>
    </section>
  );
}