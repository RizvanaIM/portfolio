// src/data/portfolioData.js

export const personalDetails = {
  name: "Rizvana I.M.",
  headline: "Backend Software Engineer & Spring Boot Specialist",
  location: "Battaramulla, Sri Lanka",
  email: "rizvanaisam@gmail.com",
  phone: "+94 74 363 1536",
  github: "https://github.com/RizvanaIM",
  linkedin: "https://www.linkedin.com/in/rizvana-im2001",
  resumeDriveUrl: "https://drive.google.com/file/d/1eRTEwpcVj0R4Et7ZNPeRVn3sHPHZJZ2h/view?usp=drivesdk",
  bio: "BSc (Hons) Software Engineering undergraduate with specialized industry internship experience in architecting robust Spring Boot microservices, high-performance RESTful APIs, and relational persistence layers. Proven experience in containerized CI/CD environments and enterprise ERP workflows."
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