import React from 'react';
import { aiVideos } from '../data/portfolioData';
import { Play, Sparkles, Wand2 } from 'lucide-react';

export default function AiVideoGallery() {
  return (
    <section id="ai-gallery" className="py-24 px-6 bg-[#242b38] border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#00eeff]/10 border border-[#00eeff]/30 text-[#00eeff] text-xs font-semibold mb-4">
          <Sparkles size={14} /> Generative AI Media &amp; Voice Showcase
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          AI Video &amp; <span className="text-[#00eeff]">Commercial Creations</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto mb-14">
          Explore AI video advertising, high-conversion visual marketing, and synthetic voiceover projects.
        </p>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aiVideos.map((vid, idx) => (
            <div
              key={idx}
              className="group rounded-2xl bg-[#1f242d] border border-slate-700 overflow-hidden hover:border-[#00eeff] hover:shadow-[0_0_20px_#00eeff30] transition duration-300 flex flex-col justify-between"
            >
              {/* Video Player Mockup Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-tr from-slate-900 via-cyan-950 to-slate-900 flex items-center justify-center p-4 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#00eeff] text-[#1f242d] flex items-center justify-center shadow-[0_0_20px_#00eeff] group-hover:scale-110 transition duration-300">
                  <Play size={20} className="fill-current ml-0.5" />
                </div>
                <span className="absolute bottom-2 right-2 text-[10px] font-mono bg-black/80 px-2 py-0.5 rounded text-[#00eeff]">
                  AI Generated
                </span>
              </div>

              {/* Video Info */}
              <div className="p-6 text-left">
                <div className="text-xs font-mono text-[#00eeff] mb-1">{vid.category}</div>
                <h3 className="text-lg font-bold text-white mb-2">{vid.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{vid.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800">
                  {vid.tools.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}