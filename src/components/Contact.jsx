import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    instagramHandle: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalDetails.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
      `Full Name: ${formData.fullName}\nEmail:${formData.email}\nInstagram/Contact: ${formData.instagramHandle}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#1f242d] border-t border-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12">
          Contact <span className="text-[#00eeff]">Me!</span>
        </h2>

        {/* 2x2 Form Grid */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-[#242b38] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00eeff] text-sm"
            />
            <input
              type="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-[#242b38] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00eeff] text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Instagram Handle (e.g. @yourname)"
              value={formData.instagramHandle}
              onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-[#242b38] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00eeff] text-sm"
            />
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-5 py-3.5 rounded-xl bg-[#242b38] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00eeff] text-sm"
            />
          </div>

          <textarea
            rows={5}
            required
            placeholder="Your Message / Project Details"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-5 py-3.5 rounded-xl bg-[#242b38] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00eeff] text-sm"
          ></textarea>

          <div className="text-center pt-2">
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-[#00eeff] text-[#1f242d] font-bold text-sm shadow-[0_0_20px_#00eeff80] hover:shadow-[0_0_30px_#00eeff] hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Quick Social & Location Links */}
        <div className="flex flex-wrap justify-center gap-8 text-xs text-slate-300 mt-12 pt-8 border-t border-slate-800">
          <a
            href={personalDetails.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#00eeff] transition font-medium"
          >
            <span className="font-bold text-[#00eeff] text-xs px-2 py-0.5 rounded bg-slate-800 border border-slate-700">IG</span>
            <span>Instagram: {personalDetails.instagramHandle}</span>
          </a>

          <a
            href={`mailto:${personalDetails.email}`}
            className="flex items-center gap-2 hover:text-[#00eeff] transition font-medium"
          >
            <Mail size={16} className="text-[#00eeff]" />
            <span>{personalDetails.email}</span>
          </a>

          <span className="flex items-center gap-2 text-slate-400">
            <MapPin size={16} className="text-[#00eeff]" />
            <span>{personalDetails.location}</span>
          </span>
        </div>
      </div>
    </section>
  );
}