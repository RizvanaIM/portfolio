import React from 'react';
import { motion } from 'framer-motion';
import { 
  personalDetails, 
  stats, 
  services,
  collaborationBanner,
  experiences, 
  projects, 
  skillCategories, 
  educationList 
} from './data/portfolioData';
import { 
  Mail, 
  MapPin, 
  Phone, 
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
  Check
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

export default function App() {
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

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-600/20 via-teal-500/15 to-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[35%] right-[-150px] w-[500px] h-[500px] bg-cyan-700/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[65%] left-[-150px] w-[500px] h-[500px] bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Floating Modern Header */}
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
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
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 text-sm font-semibold backdrop-blur-md hover:border-cyan-500/40 transition"
          >
            <Download size={16} /> Download CV
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

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-cyan-300 transition"
                >
                  Inquire for Service <ArrowUpRight size={14} />
                </a>
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

        <div className="flex flex-wrap justify-center gap-6 text-sm mb-12">
          <a
            href={`mailto:${personalDetails.email}`}
            className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 text-slate-200 transition"
          >
            <Mail size={18} className="text-cyan-400" />
            {personalDetails.email}
          </a>
          <span className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200">
            <Phone size={18} className="text-teal-400" />
            {personalDetails.phone}
          </span>
          <span className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200">
            <MapPin size={18} className="text-emerald-400" />
            {personalDetails.location}
          </span>
        </div>

        <div className="text-xs text-slate-500 font-mono">
          Designed & Engineered with React, Vite & Tailwind CSS &bull; Deployed on Vercel
        </div>
      </section>
    </div>
  );
}