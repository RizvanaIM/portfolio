import React from 'react';
import { nfcSamples, personalDetails } from '../data/portfolioData';
import { X, CheckCircle2, ShoppingBag } from 'lucide-react';

export default function NfcModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={onClose}>
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#1f242d] border border-[#00eeff]/40 p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white transition">
          <X size={20} />
        </button>

        <h3 className="text-2xl font-bold text-white mb-1">Smart NFC Products &amp; Samples</h3>
        <p className="text-xs text-slate-400 mb-6">Custom contactless business cards and digital keytags.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {nfcSamples.map((s) => (
            <div key={s.id} className="p-5 rounded-2xl bg-[#242b38] border border-slate-700 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#00eeff] uppercase">{s.type}</span>
                <h4 className="text-base font-bold text-white mt-1 mb-2">{s.title}</h4>
                <p className="text-xs text-slate-300 mb-4">{s.description}</p>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  {s.specs.map((sp, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#00eeff] shrink-0" />
                      <span>{sp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={`mailto:${personalDetails.email}?subject=NFC%20Inquiry%20-%20${encodeURIComponent(s.title)}`}
                className="mt-6 w-full text-center px-4 py-2 rounded-xl bg-[#00eeff] text-[#1f242d] font-bold text-xs shadow-[0_0_15px_#00eeff50] hover:scale-105 transition"
              >
                Inquire Sample
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}