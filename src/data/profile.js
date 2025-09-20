export const profileData = {
  // Personal Information
  name: "Lakshya Sharma",
  title: "QA Automation Engineer",
  email: "lakshyasharmaqa@gmail.com",
  phone: "+91 9649975469",
  location: "Pune, India",
  domain: "lakshyasharmaqa.dev",
  
  // Social Links
  social: {
    linkedin: "https://linkedin.com/in/lakshyasharmaqa",
    github: "https://github.com/LakshyaQA",
    email: "lakshyasharmaqa@gmail.com"
  },

  // Hero Section
  hero: {
    headline: "QA Automation Engineer",
    subheadline: "Selenium · Pytest/TestNG · JMeter · API Testing · Appium · CI/CD · AI Testing",
    description: "QA Automation Engineer with 2+ years of experience improving regression efficiency by 40% and ensuring 95%+ release stability across Web, Mobile, API, and AI applications.",
    typingText: [
      "Web Applications",
      "Mobile Apps",
      "API Systems",
      "AI Applications",
      "E2E Automation",
      "Performance Testing"
    ]
  },

  // About Section
  about: {
    summary: "I'm Lakshya Sharma, a QA Automation Engineer based in Pune with 2+ years of experience building TDD-based automation frameworks, executing API & performance testing, and validating AI-driven systems. I specialize in streamlining release pipelines and integrating automation into CI/CD to accelerate stable releases.",
    personalIntro: "Passionate about building robust QA processes, I leverage automation and shift-left testing to reduce bugs early, enhance efficiency, and deliver reliable, high-performance software."
  },

  // Skills
  skills: {
    "Test Automation": {
      technologies: ["Selenium", "Pytest", "TestNG", "Playwright", "Appium"],
      proficiency: 90
    },
    "API Testing": {
      technologies: ["REST Assured", "Postman", "Swagger", "Newman"],
      proficiency: 85
    },
    "Performance Testing": {
      technologies: ["JMeter", "Locust"],
      proficiency: 80
    },
    "CI/CD & DevOps": {
      technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "Docker"],
      proficiency: 75
    },
    "Programming": {
      technologies: ["Python", "Java"],
      proficiency: 85
    },
    "Databases": {
      technologies: ["MySQL", "PostgreSQL"],
      proficiency: 70
    },
    "Cloud & Tools": {
      technologies: ["Azure", "Zephyr", "Git", "Jira", "TestRail"],
      proficiency: 75
    }
  },

  // Experience
  experience: [
    {
      company: "IIHT-Techademy",
      role: "QA Automation Engineer",
      duration: "Aug 2023 - Present",
      location: "Pune, India",
      logo: "/api/placeholder/60/60",
      achievements: [
        "Boosted regression efficiency by 40% through hybrid test automation framework (Selenium, Pytest, TestNG)",
        "Reduced crash rates by 30% via rigorous testing and shift-left bug detection",
        "Integrated 3+ automation suites into CI/CD pipelines, cutting manual execution by 50%",
        "Executed performance testing with JMeter, improving response times by 20%",
        "Led quality assurance for AI-driven projects including AEYE (AI Proctoring System)",
        "Managed end-to-end testing for Yaksha Assessment Platform and Techademy Campus Portal"
      ],
      projects: ["AEYE - AI Proctoring System", "YAKSHA - Assessment Platform", "Techademy Campus Portal"]
    }
  ],

  // Personal Projects
  projects: [
    {
      id: 1,
      name: "Car Dekho Automation Project",
      category: "E2E",
      description: "End-to-end automation testing framework for CarDekho platform using Selenium and Python.",
      problem: "Manual testing of car listing, search, and filter functionalities was time-consuming and error-prone.",
      solution: "Built a maintainable Page Object Model framework with data-driven testing approach.",
      techStack: ["Selenium", "Python", "Pytest", "POM", "Data-Driven Testing"],
      keyMetrics: "Reduced testing time by 60% and improved coverage to 85%",
      githubUrl: "https://github.com/LakshyaQA/ExlatProjectCarDekho",
      demoUrl: null,
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
  id: 2,
  name: "I2V QA Testing Suite (IQTS)",
  category: "API",
  description: "Developed a web automation testing framework for a CCTV control portal, automating positive/negative flows and integrating Jenkins for CI/CD with detailed reporting and screenshots.",
  problem: "The CCTV control portal required comprehensive validation of admin workflows such as camera control, user onboarding, and system management. Ensuring both normal and negative API flows with edge cases was a major challenge.",
  solution: "Built a robust API testing framework to validate all endpoints, automating positive and negative flows. Integrated Jenkins pipelines to run automated tests on every commit, generating detailed reports with screenshots for better issue tracking.",
  techStack: ["Python", "Pytest", "JMeter", "Allure/Py-HTML Reports", "API Testing", "Jenkins"],
  keyMetrics: "Achieved 95% API coverage and identified 23 critical bugs before production",
  githubUrl: "https://github.com/LakshyaQA/i2v_qa",
  demoUrl: null,
  image: "/api/placeholder/400/250",
  featured: true
}

  ],

  // Professional Projects (Experience)
  professionalProjects: [
    {
      name: "AEYE - AI Proctoring System",
      description: "AI-powered proctoring solution for online examinations with real-time monitoring.",
      role: "Led automation & performance testing including AI model validation, WebSocket, and load testing",
      techStack: ["Python", "Selenium", "JMeter", "Kafka", "Azure"],
      impact: "Improved system stability by 30% and throughput by 20%"
    },
    {
      name: "YAKSHA - Assessment Platform",
      description: "Online assessment platform for technical and aptitude evaluations.",
      role: "Implemented automation frameworks, database validation, and CI/CD integration",
      techStack: ["Selenium", "Pytest", "REST Assured", "PostgreSQL", "Jenkins"],
      impact: "Achieved 95%+ platform reliability and reduced load times by 40%"
    },
    {
      name: "Techademy Campus Portal",
      description: "Student management and learning platform for educational institutions.",
      role: "Designed regression suites and automated API/sanity checks",
      techStack: ["Selenium", "TestNG", "MySQL", "API Testing"],
      impact: "Maintained 95%+ stability post-updates and improved user experience"
    }
  ],

  // Testimonials
  testimonials: [
    {
      name: "Senior Manager",
      role: "Technical Lead at Techademy",
      content: "Lakshya's automation frameworks significantly improved our release quality and reduced testing cycles. His attention to detail and proactive QA approach is exceptional.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Project Manager",
      role: "AEYE Project Team",
      content: "His expertise in AI testing and performance optimization was crucial to our success. Lakshya consistently delivered high-quality testing solutions under tight deadlines.",
      avatar: "/api/placeholder/60/60"
    }
  ],

  // Resume
  resume: {
    downloadUrl: "/resume.pdf",
    highlights: [
      "95%+ Release Stability",
      "40% Efficiency Gains",
      "2+ Years Experience",
      "AI Testing Expertise",
      "CI/CD Integration",
      "Performance Optimization"
    ]
  },

  // SEO Data
  seo: {
    title: "Lakshya Sharma | QA Automation Engineer Portfolio",
    description: "QA Automation Engineer with 2+ years experience in Selenium, Pytest, JMeter, and CI/CD. Specializing in Web, Mobile, API, and AI testing with proven track record of 95%+ release stability.",
    keywords: "QA Automation Engineer, Selenium, Pytest, JMeter, API Testing, Performance Testing, CI/CD, Automation, Quality Assurance, Lakshya Sharma",
    ogImage: "/og-image.jpg"
  }
};
