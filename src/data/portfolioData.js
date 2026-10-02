// src/data/portfolioData.js

// In src/data/portfolioData.js

export const personalDetails = {
  name: "Rizvana I.M.",
  title: "Software Engineer & Backend Specialist",
  location: "Battaramulla, Sri Lanka",
  email: "rizvanaisam@gmail.com",
  instagram: "https://www.instagram.com/igstar.me?stkn=Y25zazI2Mzh0NXJz&utm_source=qr",
  instagramHandle: "@igstar.me",
  github: "https://github.com/RizvanaIM",
  linkedin: "https://www.linkedin.com/in/rizvana-im2001",
  resumeDriveUrl: "https://drive.google.com/file/d/1MM673af2XefBjLXZTpcRqPBfvPm6g7gQ/view?usp=sharing",
  shortBio: "Software Engineer with a BSc (Hons) in Software Engineering. Specialized in building scalable Java/Spring Boot microservices, enterprise ERP systems, and modern full-stack solutions.",
  fullBio: "Software Engineer with completed degree studies in Software Engineering. Experienced in building robust Spring Boot REST APIs, relational databases, and enterprise workflows through industry internships at ZeroCode Software and Tringledo. Currently focused on engineering high-impact personal projects and actively open for software engineering opportunities and collaborations."
};
  

export const services = [
  {
    title: "Web & Software Solutions",
    description: "High-performance enterprise web applications, Spring Boot RESTful API microservices, ERP customizations, and database architectures.",
    badge: "Core Engineering",
    iconType: "code"
  },
  {
    title: "Smart NFC Cards & Keytags",
    description: "Custom contactless NFC smart business cards & digital keytags. Instant one-tap profile sharing without any app installation.",
    badge: "Digital Hardware",
    iconType: "nfc"
  },
  {
    title: "AI Media, Video & Voice",
    description: "Generative AI commercial video production, synthetic voice cloning, promo advertisements, and dynamic brand visuals.",
    badge: "AI Media",
    iconType: "ai"
  }
];

export const aiVideos = [
  {
    title: "Next-Gen Brand Commercial",
    category: "AI Video Generation",
    description: "Cinematic commercial video created using generative AI visual prompting and dynamic scene sequencing.",
    tools: ["Midjourney / Runway", "ElevenLabs Voice", "CapCut"],
    aspectRatio: "16:9"
  },
  {
    title: "Synthetic AI Voiceover Ad",
    category: "Voice Cloning & Audio",
    description: "Ultra-realistic multilingual voice narration synced with digital product showcase animations.",
    tools: ["ElevenLabs", "Audio Mastering", "AI Scripting"],
    aspectRatio: "16:9"
  },
  {
    title: "Dynamic Social Media Promo",
    category: "Short-form AI Reel",
    description: "High-converting motion ad optimized for Instagram and TikTok with rhythmic AI sound design.",
    tools: ["Sora / Pika", "Motion Graphics", "AI B-Roll"],
    aspectRatio: "9:16"
  }
];

export const projects = [
  {
    title: "Pet Care Management System",
    category: "Industry Training Placement",
    role: "Backend Developer (Spring Boot, MySQL, Flyway, Docker)",
    description: "Complete pet care platform with appointment management, shop inventory, billing, notifications, and layered API architecture.",
    tech: ["Spring Boot", "Hibernate", "MySQL", "Flyway", "Docker", "REST API"],
    github: "https://github.com/RizvanaIM"
  },
  {
    title: "Bridging the Technological Gap",
    category: "Empirical Research Project",
    role: "Lead Researcher & Web Developer",
    description: "Comparative study on youth digital adoption between Sri Lanka and Singapore with an interactive analytics dashboard.",
    tech: ["React.js", "Spring Boot", "Data Analytics", "Chart.js"],
    github: "https://github.com/RizvanaIM"
  },
  {
    title: "FOREVER INVITED — Wedding Platform",
    category: "Full-Stack Development Project",
    role: "Team Member / Full-Stack",
    description: "Service management for venue providers, digital invitation builder, and automated guest RSVP tracking.",
    tech: ["React.js", "Spring Boot", "MySQL Workbench", "Figma", "Jira"],
    github: "https://github.com/RizvanaIM"
  }
];

export const visualSkills = [
  { name: "Java", level: "Advanced", icon: "☕" },
  { name: "Spring Boot", level: "Advanced", icon: "🍃" },
  { name: "React.js", level: "Intermediate", icon: "⚛️" },
  { name: "Docker", level: "Proficient", icon: "🐳" },
  { name: "MySQL", level: "Advanced", icon: "🐬" },
  { name: "Flyway", level: "Proficient", icon: "🚀" },
  { name: "Kafka / RabbitMQ", level: "Hands-on", icon: "📬" },
  { name: "Odoo / Python", level: "ERP Integration", icon: "⚙️" },
  { name: "Git / GitHub", level: "Advanced", icon: "🐙" },
  { name: "Linux / Ubuntu", level: "Intermediate", icon: "🐧" },
  { name: "JUnit / Mockito", level: "Automated QA", icon: "🧪" },
  { name: "REST APIs", level: "Architecture", icon: "🌐" }
];

export const nfcSamples = [
  {
    id: "stealth-black",
    title: "Stealth Matte Black & Gold Foil",
    type: "Executive NFC Business Card",
    description: "Laser-engraved matte black card with gold hot-stamping and NTAG216 high-frequency microchip.",
    specs: ["Instant Tap-to-Share", "Scratch-Resistant Matte Finish", "No App Needed", "Universal iOS & Android"]
  },
  {
    id: "cyber-emerald",
    title: "Cyberpunk Frosted Glass Edition",
    type: "Developer & Tech Card",
    description: "Semi-translucent acrylic displaying simulated copper RFID antenna circuits with neon accents.",
    specs: ["Translucent Frosted Acrylic", "Visible RFID Circuit", "Dynamic Profile Sync", "Waterproof"]
  },
  {
    id: "smart-keytag",
    title: "Smart Epoxy Digital Keytag",
    type: "Portable Pocket Tag",
    description: "High-gloss crystal epoxy keytag with steel ring. Attach to keys or bags to share contacts anywhere.",
    specs: ["Heavy-Duty Steel Ring", "Glossy Drop Epoxy", "100% Shockproof", "Compact 30mm x 50mm"]
  }
];