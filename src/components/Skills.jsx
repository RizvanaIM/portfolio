import React from 'react';
import { visualSkills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#242b38] border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Technical <span className="text-[#00eeff]">Skills</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto mb-14">
          Quick-view visual matrix of core languages, backend frameworks, databases, and DevOps tools.
        </p>

        {/* Visual App-Style Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {visualSkills.map((sk, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#1f242d] border border-slate-700/80 flex flex-col items-center text-center hover:border-[#00eeff] hover:shadow-[0_0_15px_#00eeff30] hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{sk.icon}</div>
              <div className="text-sm font-bold text-white">{sk.name}</div>
              <div className="text-[10px] font-mono text-[#00eeff] mt-0.5">{sk.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}