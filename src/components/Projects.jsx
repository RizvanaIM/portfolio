import React from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#1f242d] border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-14">
          Latest <span className="text-[#00eeff]">Projects</span>
        </h2>

        {/* 6 Grid Cards Matching Uploaded Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-[#242b38] border border-slate-700/80 p-6 flex flex-col justify-between hover:border-[#00eeff] hover:shadow-[0_0_20px_#00eeff25] hover:-translate-y-1.5 transition-all duration-300 text-left"
            >
              <div>
                <span className="text-xs font-mono text-[#00eeff] tracking-wider">{proj.category}</span>
                <h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-[#00eeff] transition">
                  {proj.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400 mb-2">{proj.role}</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00eeff] hover:underline"
                >
                  View Code <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}