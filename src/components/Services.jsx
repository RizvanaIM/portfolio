import React from 'react';
import { services } from '../data/portfolioData';
import { Code, Radio, Video, ArrowRight } from 'lucide-react';

export default function Services({ onOpenNfcModal }) {
  const getIcon = (type) => {
    switch (type) {
      case 'code':
        return <Code size={36} className="text-[#00eeff]" />;
      case 'nfc':
        return <Radio size={36} className="text-[#00eeff]" />;
      case 'ai':
        return <Video size={36} className="text-[#00eeff]" />;
      default:
        return <Code size={36} className="text-[#00eeff]" />;
    }
  };

  return (
    <section id="services" className="py-24 px-6 bg-[#1f242d] border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-14">
          Our <span className="text-[#00eeff]">Services</span>
        </h2>

        {/* 3 Square Cards Matching Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#242b38] border border-slate-700/60 p-8 flex flex-col items-center text-center justify-between hover:border-[#00eeff] hover:shadow-[0_0_25px_#00eeff25] hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                <div className="mb-6 flex items-center justify-center">
                  {getIcon(item.iconType)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              {item.iconType === 'nfc' ? (
                <button
                  onClick={onOpenNfcModal}
                  className="px-6 py-2 rounded-full bg-[#00eeff] text-[#1f242d] font-bold text-xs shadow-[0_0_15px_#00eeff50] hover:scale-105 transition duration-300"
                >
                  View Sample Designs
                </button>
              ) : (
                <a
                  href="#contact"
                  className="px-6 py-2 rounded-full bg-[#00eeff] text-[#1f242d] font-bold text-xs shadow-[0_0_15px_#00eeff50] hover:scale-105 transition duration-300"
                >
                  Read More
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}