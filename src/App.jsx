import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  personalDetails, 
  stats, 
  services,
  nfcSamples,
  collaborationBanner,
  experiences, 
  projects, 
  skillCategories, 
  educationList 
} from './data/portfolioData';
import { 
  Mail, 
  MapPin, 
  PhoneCall, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Layers, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Download,
  CreditCard,
  Globe,
  Video,
  Handshake,
  Check,
  X,
  Radio,
  Eye,
  ShoppingBag
} from 'lucide-react';

// Official GitHub & LinkedIn SVG Icons
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Realistic Contactless RFID Waves SVG
const ContactlessWave = ({ color = "#fbbf24", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round">
    <path d="M5 8.5C7.5 6 11.5 6 14 8.5" />
    <path d="M2.5 12C6 8.5 13 8.5 16.5 12" />
    <path d="M7.5 15.5C9 14 11 14 12.5 15.5" />
  </svg>
);

// Realistic Gold / Silver Microchip SVG
const SmartChip = ({ color = "#fbbf24" }) => (
  <div className="w-11 h-9 rounded border border-amber-400/40 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 shadow-inner relative overflow-hidden flex items-center justify-center p-0.5">
    <div className="w-full h-full border border-amber-800/30 rounded flex flex-col justify-between p-0.5 opacity-90">
      <div className="flex justify-between h-2 border-b border-amber-900/30">
        <div className="w-2 border-r border-amber-900/30"></div>
        <div className="w-2 border-l border-amber-900/30"></div>
      </div>
      <div className="w-3 h-2 rounded-full border border-amber-900/40 mx-auto"></div>
      <div className="flex justify-between h-2 border-t border-amber-900/30">
        <div className="w-2 border-r border-amber-900/30"></div>
        <div className="w-2 border-l border-amber-900/30"></div>
      </div>
    </div>
  </div>
);

// Realistic NFC Card & Keytag Visualizer Component
const NfcRealisticMockup = ({ sample }) => {
  const isDark = !sample.theme.darkText;
  const isKeytag = sample.theme.isKeytag;

  if (isKeytag) {
    return (
      <div className="relative mx-auto w-48 h-72 rounded-[40px] p-6 bg-gradient-to-b from-slate-900 via-teal-950 to-black border-2 border-cyan-400/60 shadow-2xl shadow-cyan-500/20 flex flex-col items-center justify-between text-center overflow-hidden">
        {/* Keyring hole */}
        <div className="w-6 h-6 rounded-full bg-slate-950 border-2 border-slate-600 shadow-inner flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-slate-800" />
        </div>

        {/* Shiny epoxy reflection */}
        <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-[40px]" />

        <div className="my-auto flex flex-col items-center">
          <div className="p-3 rounded-full bg-cyan-500/10 border border-cyan-400/40 mb-3 animate-pulse">
            <Radio size={28} className="text-cyan-400" />
          </div>
          <div className="text-sm font-extrabold tracking-widest text-white uppercase">TAP TO CONNECT</div>
          <div className="text-[10px] font-mono text-cyan-400 mt-1">NTAG216 ACTIVE</div>
        </div>

        <div className="w-full text-center pb-2">
          <div className="text-xs font-bold text-slate-200">{personalDetails.name}</div>
          <div className="text-[9px] text-slate-400 uppercase tracking-wider">Smart Digital Badge</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative mx-auto w-full max-w-sm aspect-[1.586/1] rounded-2xl p-6 bg-gradient-to-br ${sample.theme.bg} ${sample.theme.border} border shadow-2xl overflow-hidden flex flex-col justify-between transition-all duration-300`}
    >
      {/* Glossy Sheen Overlay */}
      <div className="absolute top-0 -left-1/2 w-[200%] h-[70%] bg-gradient-to-b from-white/10 via-white/5 to-transparent rotate-12 pointer-events-none" />

      {/* Top row: Chip + Contactless wave */}
      <div className="flex items-center justify-between relative z-10">
        <SmartChip color={sample.theme.chipColor} />
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-mono tracking-widest uppercase ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            NFC ENABLED
          </span>
          <ContactlessWave color={sample.theme.accent} size={22} />
        </div>
      </div>

      {/* Middle row: Brand & Technology */}
      <div className="relative z-10 my-auto">
        <div className={`text-xs font-mono tracking-widest uppercase opacity-70 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          {sample.type}
        </div>
        <div className={`text-xl sm:text-2xl font-black tracking-wider uppercase mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {personalDetails.name}
        </div>
        <div className="text-xs font-semibold text-teal-400 mt-0.5">
          Backend Engineer &bull; Tech Solutions
        </div>
      </div>

      {/* Bottom row: Tap notice and security ID */}
      <div className="flex items-center justify-between relative z-10 pt-2 border-t border-white/10">
        <div className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          Universal Tap &bull; iOS & Android
        </div>
        <div className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/40 text-cyan-300 border border-white/10">
          {sample.chip.split(' ')[0]}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isNfcModalOpen, setIsNfcModalOpen] = useState(false);
  const [selectedSampleIndex, setSelectedSampleIndex] = useState(0);

  const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const getServiceIcon = (index) => {
    switch (index) {
      case 0:
        return <CreditCard className="text-cyan-400" size={28} />;
      case 1:
        return <Globe className="text-teal-400" size={28} />;
      case 2:
        return <Video className="text-emerald-400" size={28} />;
      default:
        return <Sparkles className="text-cyan-400" size={28} />;
    }
  };

  const currentSample = nfcSamples[selectedSampleIndex];

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-600/20 via-teal-500/15 to-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[35%] right-[-150px] w-[500px] h-[500px] bg-cyan-700/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[65%] left-[-150px] w-[500px] h-[500px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Floating Modern Header */}
      <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4">
        <nav className="flex items-center gap-6 px-6 py-3 rounded-full bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl shadow-2xl shadow-cyan-950/20 text-sm">
          <a href="#" className="font-bold tracking-tight bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            {personalDetails.name}
          </a>
          <div className="hidden md:flex items-center gap-5 text-slate-300 font-medium">
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#services" className="hover:text-cyan-400 transition">Services</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#education" className="hover:text-cyan-400 transition">Education</a>
          </div>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-semibold text-xs hover:shadow-lg hover:shadow-cyan-500/25 transition"
          >
            Connect
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-36 pb-16 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-medium tracking-wide mb-6 backdrop-blur-md"
        >
          <Sparkles size={14} className="text-teal-400" />
          Software Engineer &bull; Tech Solutions &bull; Open for Collaboration
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight mb-6"
        >
          Architecting Scalable Backend Systems with{" "}
          <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Java & Spring Boot
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-10 font-normal"
        >
          Hi, I'm <strong className="text-slate-100">{personalDetails.name}</strong>. {personalDetails.bio}
        </motion.p>

        {/* Hero CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-4 mb-16"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition"
          >
            Let's Collaborate
          </a>

          <a
            href={personalDetails.resumeDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 text-sm font-semibold backdrop-blur-md hover:border-cyan-500/40 transition group"
          >
            <Download size={16} className="text-teal-400 group-hover:-translate-y-0.5 transition" /> Download CV
          </a>

          <a
            href={`tel:${personalDetails.phone}`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-teal-500/30 bg-teal-950/30 hover:bg-teal-900/50 text-teal-300 text-sm font-semibold backdrop-blur-md transition group"
            title="Direct Call"
          >
            <PhoneCall size={16} className="text-teal-400 group-hover:rotate-12 transition" /> Call Now
          </a>

          <div className="flex gap-2">
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition"
              title="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-cyan-400 hover:border-slate-700 transition"
              title="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md"
        >
          {stats.map((stat, i) => (
            <div key={i} className="p-3 text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Collaboration Callout Banner */}
      <section className="px-6 max-w-5xl mx-auto mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative overflow-hidden rounded-3xl p-8 md:p-10 border border-teal-500/30 bg-gradient-to-r from-slate-900/90 via-teal-950/30 to-slate-900/90 backdrop-blur-xl shadow-2xl shadow-cyan-950/40"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold mb-3">
                <Handshake size={14} className="text-teal-400" />
                {collaborationBanner.status}
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                {collaborationBanner.heading}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {collaborationBanner.text}
              </p>
            </div>
            <a
              href="#contact"
              className="whitespace-nowrap px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 font-bold text-sm hover:scale-105 transition shadow-lg shadow-teal-500/25"
            >
              Start a Project &rarr;
            </a>
          </div>
        </motion.div>
      </section>

      {/* Services & Solutions Section */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-2">Capabilities & Offerings</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold flex items-center gap-3">
            <Sparkles className="text-teal-400" /> Services & Solutions
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mt-3">
            Specialized solutions ranging from enterprise software to custom smart products and modern AI media.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((srv, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="group relative flex flex-col justify-between p-7 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/40 backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/50 group-hover:scale-110 transition">
                    {getServiceIcon(i)}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    {srv.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs font-mono text-teal-400/90 mb-3">{srv.category}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {srv.description}
                </p>
              </div>

              <div>
                <ul className="space-y-2 pt-4 border-t border-slate-800/80 mb-6 text-xs text-slate-300">
                  {srv.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <Check size={14} className="text-teal-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* If it's the NFC Service, show "View Sample Designs" Gallery Trigger */}
                {i === 0 ? (
                  <button
                    onClick={() => setIsNfcModalOpen(true)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-xs font-bold transition shadow-lg shadow-cyan-950/30"
                  >
                    <Eye size={15} /> View Sample Designs &amp; Mockups
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-cyan-300 transition"
                  >
                    Inquire for Service <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-2">Track Record</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold flex items-center gap-3">
            <Briefcase className="text-teal-400" /> Work Experience
          </h2>
        </div>

        <div className="relative border-l border-slate-800 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeIn}
              className="relative pl-8 md:pl-10"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 shadow-md shadow-cyan-500/50 border-2 border-[#030712]" />

              <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono text-slate-400 mb-2 md:mb-0">
                {exp.period}
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm hover:border-teal-500/40 transition">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-300 border border-teal-500/20">
                    {exp.badge}
                  </span>
                </div>
                <div className="text-sm font-medium text-cyan-400 mb-4">{exp.company}</div>
                <ul className="space-y-2 mb-5 text-sm text-slate-300 leading-relaxed">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-teal-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((stk, sIdx) => (
                    <span key={sIdx} className="text-xs px-2.5 py-1 rounded-md bg-slate-800/70 border border-slate-700/50 text-slate-300 font-mono">
                      {stk}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-2">Engineering Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold flex items-center gap-3">
            <Code2 className="text-teal-400" /> Featured Projects
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-b from-slate-900/70 to-slate-900/40 border border-slate-800 hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-950/40 backdrop-blur-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-3">
                  <span>{proj.category}</span>
                  <span className="text-slate-500">{proj.type}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition mb-3">
                  {proj.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.stack.map((item, idx) => (
                    <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 hover:text-cyan-300 transition"
                >
                  Inspect Source Code <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-2">Technical Arsenal</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold flex items-center gap-3">
            <Layers className="text-teal-400" /> Technologies & Frameworks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm hover:border-slate-700 transition"
            >
              <h3 className="text-base font-bold text-teal-300 mb-4 pb-2 border-b border-slate-800">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/60 border border-slate-700/40 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-800/80">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-2">Qualifications</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold flex items-center gap-3">
            <GraduationCap className="text-teal-400" /> Academic Background
          </h2>
        </div>

        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                <p className="text-teal-400 font-semibold text-sm">{edu.degree}</p>
                <p className="text-xs text-slate-400 mt-1">{edu.focus}</p>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50 shrink-0">
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center border-t border-slate-800/80">
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
          Ready to Collaborate? Let's <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-slate-400 text-base max-w-xl mx-auto mb-10">
          Reach out directly for enterprise software development, smart NFC solutions, AI promo creatives, or project collaborations.
        </p>

        {/* Interactive Action Buttons */}
        <div className="flex flex-wrap justify-center gap-5 text-sm mb-12">
          {/* Working Mail Compose Link */}
          <a
            href={`mailto:${personalDetails.email}?subject=Project%20Inquiry%20/%20Collaboration&body=Hi%20Rizvana,%0D%0A%0D%0AI%20am%20reaching%20out%20regarding...`}
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500 hover:bg-slate-800/90 text-slate-200 transition group shadow-lg shadow-cyan-950/20"
            title="Click to Compose Email"
          >
            <Mail size={20} className="text-cyan-400 group-hover:scale-110 transition" />
            <div className="text-left">
              <div className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Email Me</div>
              <div className="font-semibold text-white">{personalDetails.email}</div>
            </div>
          </a>

          {/* Working Click-to-Call Dialer Link */}
          <a
            href={`tel:${personalDetails.phone}`}
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-teal-500 hover:bg-slate-800/90 text-slate-200 transition group shadow-lg shadow-teal-950/20"
            title="Click to Call Direct"
          >
            <PhoneCall size={20} className="text-teal-400 group-hover:scale-110 group-hover:rotate-12 transition" />
            <div className="text-left">
              <div className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Call / WhatsApp</div>
              <div className="font-semibold text-white">{personalDetails.displayPhone}</div>
            </div>
          </a>

          {/* Location Badge */}
          <div className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-900/40 border border-slate-800/70 text-slate-300">
            <MapPin size={20} className="text-emerald-400 shrink-0" />
            <div className="text-left">
              <div className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Location</div>
              <div className="font-semibold text-slate-200">{personalDetails.location}</div>
            </div>
          </div>
        </div>

        {/* <div className="text-xs text-slate-500 font-mono">
          Designed & Engineered with React, Vite & Tailwind CSS &bull; Deployed via Cloudflare / Vercel
        </div> */}
      </section>

      {/* Interactive NFC Sample Designs Gallery Modal */}
      <AnimatePresence>
        {isNfcModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsNfcModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700/80 p-6 md:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsNfcModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                title="Close"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Interactive Showcase</span>
                <h3 className="text-2xl font-bold text-white mt-1">Smart NFC Products &amp; Designs</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Realistic digital preview of custom contactless cards and tags available for businesses and personal brands.
                </p>
              </div>

              {/* Realistic Mockup Display Area */}
              <div className="p-8 rounded-2xl bg-[#030712] border border-slate-800 flex items-center justify-center mb-6">
                <NfcRealisticMockup sample={currentSample} />
              </div>

              {/* Design Details & Specs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{currentSample.title}</h4>
                  <div className="text-xs font-mono text-teal-400 mb-2">{currentSample.type} &bull; {currentSample.chip}</div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{currentSample.description}</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Specifications:</div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {currentSample.specs.map((sp, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-teal-400 shrink-0" />
                        <span>{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Thumbnail Selector & Order Button */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Thumbnails */}
                <div className="flex gap-2">
                  {nfcSamples.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSampleIndex(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition border ${
                        selectedSampleIndex === idx
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold'
                          : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      0{idx + 1}
                    </button>
                  ))}
                </div>

                {/* Direct Order / Inquire Button */}
                <a
                  href={`mailto:${personalDetails.email}?subject=NFC%20Design%20Order%20-%20${encodeURIComponent(currentSample.title)}&body=Hi%20Rizvana,%0D%0A%0D%0AI%20am%20interested%20in%20ordering%20the%20${encodeURIComponent(currentSample.title)}%20NFC%20product.`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition"
                >
                  <ShoppingBag size={14} /> Inquire / Order This Design
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}