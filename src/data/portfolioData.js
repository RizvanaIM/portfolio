// src/data/portfolioData.js

export const personalDetails = {
  name: "Rizvana I.M.",
  headline: "Backend Software Engineer & Spring Boot Specialist",
  location: "Battaramulla, Sri Lanka",
  email: "rizvanaisam@gmail.com",
  phone: "+94743631536", // Direct tel dialer format
  displayPhone: "+94 74 363 1536", // Clean visual format
  github: "https://github.com/RizvanaIM",
  linkedin: "https://www.linkedin.com/in/rizvana-im2001",
  resumeDriveUrl: "https://drive.google.com/file/d/17-DnNT5lReSVvmSK4meIxhtamKEIJeIA/view?usp=sharing",
  bio: "BSc (Hons) Software Engineering graduate with hands-on experience in Java, Spring Boot, REST APIs, databases, Docker, CI/CD, and ERP systems. Passionate about building practical software solutions and learning new technologies."
};

export const stats = [
  { label: "Industry Roles", value: "3+" },
  { label: "Core Enterprise Technologies", value: "25+" },
  { label: "Degree Level", value: "BSc (Hons)" },
  { label: "Architecture", value: "REST & Microservices" }
];

export const experiences = [
  {
    role: "Trainee Software Engineer",
    company: "ZeroCode Software (Pvt) Ltd",
    period: "Jan 2026 – Jul 2026",
    badge: "Industry Placement",
    points: [
      "Engineered backend RESTful APIs for the Pet Care Management System using Spring Boot & layered architecture.",
      "Designed relational schema & managed database migrations with Flyway, Hibernate, and Spring Data JPA.",
      "Built multi-container local and deployment environments using Docker & Docker Compose.",
      "Participated actively in Agile/Scrum sprints, automated testing (JUnit 5, Mockito), and GitHub code reviews."
    ],
    stack: ["Java 17", "Spring Boot", "MySQL", "Flyway", "Docker", "REST API", "Git"]
  },
  {
    role: "IT Trainee",
    company: "Nisaco Mall",
    period: "Aug 2025 – Jan 2026",
    badge: "Enterprise Operations",
    points: [
      "Hands-on exposure to enterprise supply chain, financial accounts, and billing management systems.",
      "Configured retail ERP workflows for procurement, stock movement, and audit integrity.",
      "Supported business data analytics and internal IT process automation."
    ],
    stack: ["ERP Systems", "Supply Chain", "Inventory Management", "Data Analytics"]
  },
  {
    role: "Odoo Developer (Remote)",
    company: "Tringledo (PVT) Ltd",
    period: "Jun 2025 – Aug 2025",
    badge: "Remote Internship",
    points: [
      "Customized enterprise ERP modules using Python and XML on top of the Odoo platform.",
      "Integrated business logic enhancements and optimized operational workflows for clients."
    ],
    stack: ["Odoo ERP", "Python", "XML", "PostgreSQL"]
  }
];

export const projects = [
  {
    title: "Pet Care Management System",
    category: "Enterprise System",
    type: "Industry Training Project",
    description: "Production-grade backend system facilitating appointment bookings, multi-vendor pet shops, payment gateways, and real-time alerts.",
    stack: ["Spring Boot", "Spring Data JPA", "MySQL", "Flyway", "Docker", "REST API"],
    github: "https://github.com/RizvanaIM"
  },
  {
    title: "Bridging the Technological Gap",
    category: "Empirical Research & Analytics",
    type: "BSc Final Year Thesis Project",
    description: "Comparative study on youth digital adoption between Sri Lanka and Singapore. Built an interactive full-stack analytics dashboard with interactive data visualization.",
    stack: ["React.js", "Spring Boot", "Data Visualization", "REST APIs", "Render"],
    github: "https://github.com/RizvanaIM"
  },
  {
    title: "FOREVER INVITED — Wedding Hall System",
    category: "Full-Stack Web Application",
    type: "Development Project",
    description: "Venue reservation and guest coordination platform with custom digital invitation design and automated RSVP tracking.",
    stack: ["React.js", "Spring Boot", "MySQL Workbench", "Figma", "Jira", "Trello"],
    github: "https://github.com/RizvanaIM"
  }
];

export const skillCategories = [
  {
    title: "Backend & Spring Ecosystem",
    skills: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Spring Security", "REST APIs", "DTO & Validation", "WebSocket", "Asynchronous Events"]
  },
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "PHP", "C#", "HTML5", "CSS3", "SQL"]
  },
  {
    title: "Databases & Migration",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "MariaDB", "MS SQL Server", "H2", "Hibernate", "Flyway", "Liquibase"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Docker Compose", "Docker Swarm", "Git", "GitHub", "Linux (Ubuntu)"]
  },
  {
    title: "Testing & Code Quality",
    skills: ["JUnit 5", "Mockito", "MockMvc", "TestNG", "Spring Test", "AssertJ", "Selenium", "SonarQube", "JaCoCo"]
  },
  {
    title: "Messaging & Observability",
    skills: ["RabbitMQ", "Apache Kafka", "Spring AMQP", "Grafana", "Prometheus", "ELK Stack", "Logback"]
  }
];

export const educationList = [
  {
    school: "Kaatsu International University (KIU), Sri Lanka",
    degree: "BSc (Hons) in Software Engineering",
    period: "2022 – 2026",
    focus: "Enterprise Software Architecture, Distributed Backend Systems, Database Engineering"
  },
  {
    school: "Zahira College, Mawanella",
    degree: "G.C.E. Advanced Level",
    period: "2020",
    focus: "Bio System Technology Stream"
  }

];


export const services = [
  {
    title: "Smart NFC Cards & Keytags",
    category: "Digital Identity & Contactless Tech",
    description: "Custom smart NFC business cards and digital keytags. One-tap contact sharing, portfolio links, and social profile connectivity without needing any app.",
    features: ["Instant Tap-to-Share", "Custom Business Branding", "Durable Smart Keytags", "Zero App Requirement"],
    badge: "Hardware & Digital"
  },
  {
    title: "Business Websites & Software Solutions",
    category: "Full-Stack Development & Architecture",
    description: "Tailor-made, high-speed corporate websites, enterprise ERP workflows (Odoo), and scalable backend software systems built with Spring Boot & React.",
    features: ["Custom Web Platforms", "RESTful API Architecture", "ERP & Inventory Systems", "SEO & Cloud Deployment"],
    badge: "Core Engineering"
  },
  {
    title: "AI Commercials, Video & Voice Creations",
    category: "Generative AI Media Production",
    description: "High-impact AI promotional video ads, realistic AI voiceover narration, and commercial marketing visuals tailored for brands and social campaigns.",
    features: ["Cinematic Promo Ads", "Natural AI Voiceovers", "Social Media Creatives", "Rapid Turnaround"],
    badge: "Next-Gen AI"
  }
];


export const collaborationBanner = {
  status: "Open for Collaboration & Client Projects",
  heading: "Have an Idea or Project in Mind? Let's Collaborate!",
  text: "Whether you need custom software development, high-impact business websites, smart NFC solutions, or AI promotional creatives — I'm ready to team up and bring your vision to life."
};

// Append this to src/data/portfolioData.js

export const nfcSamples = [
  {
    id: "stealth-gold",
    title: "Stealth Matte Black & Gold Foil",
    type: "Luxury NFC Business Card",
    material: "Premium Matte PVC / Metal Composite",
    chip: "NTAG216 (High Capacity & Universal Tap)",
    description: "Designed for executives, founders, and consultants. Features laser-sharp gold foil hot-stamping, embedded contactless chip, and an ultra-durable fingerprint-resistant matte finish.",
    specs: ["Instant Contact Sharing", "Gold Foil Engraved Details", "Waterproof & Scratch-Resistant", "No Battery Required"],
    theme: {
      bg: "from-zinc-900 via-black to-zinc-950",
      accent: "#f59e0b",
      border: "border-amber-500/40",
      chipColor: "#fbbf24"
    }
  },
  {
    id: "cyber-glass",
    title: "Cyber Emerald & Frosted Acrylic",
    type: "Tech & Creator Edition",
    material: "Semi-Translucent Frosted Acrylic",
    chip: "NTAG215 / Universal Smartphone Sync",
    description: "Futuristic translucent design displaying simulated internal copper antenna coils. Ideal for software engineers, digital creators, and tech innovators.",
    specs: ["Visible Micro-Antenna Traces", "Neon Glow Accent Lines", "Dynamic Web Portfolio Sync", "Matte Frosted Grip"],
    theme: {
      bg: "from-slate-900/90 via-teal-950/70 to-slate-950",
      accent: "#14b8a6",
      border: "border-teal-400/50",
      chipColor: "#2dd4bf"
    }
  },
  {
    id: "pearl-silver",
    title: "Pearl White & Platinum Mirror",
    type: "Corporate Minimalist Edition",
    material: "Reinforced Ceramic-Touch PVC",
    chip: "NTAG213 / Universal Compatibility",
    description: "Clean, minimalist aesthetic with reflective platinum silver debossing and a built-in high-contrast dynamic QR backup.",
    specs: ["Mirror Silver Accents", "QR Backup on Reverse", "Anti-Smudge Coating", "Clean Scandinavian Aesthetic"],
    theme: {
      bg: "from-slate-100 via-slate-200 to-slate-300",
      accent: "#0ea5e9",
      border: "border-slate-300",
      chipColor: "#94a3b8",
      darkText: true
    }
  },
  {
    id: "epoxy-keytag",
    title: "Smart Epoxy Tap Keytag",
    type: "Portable Keychain & Bag Tag",
    material: "Crystal Drop Epoxy + Steel Ring",
    chip: "NTAG216 High Frequency",
    description: "Compact, pocket-sized NFC keytag. Attach to car keys, backpacks, or lanyards to share your social profiles, digital portfolio, or business contact anywhere on the go.",
    specs: ["Compact 30mm x 50mm Form", "High-Gloss Glassy Epoxy Finish", "Heavy-Duty Keyring Hole", "100% Shockproof & Waterproof"],
    theme: {
      bg: "from-teal-950 via-slate-900 to-cyan-950",
      accent: "#06b6d4",
      border: "border-cyan-400/50",
      chipColor: "#38bdf8",
      isKeytag: true
    }
  }
];
