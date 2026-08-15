/* =========================================================
   SITE DATA
   Add new skills / certifications / projects here — the page
   re-renders from these arrays, no HTML editing required.
   ========================================================= */

const SKILLS = [
  {
    category: "Languages & Tools",
    items: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "C", icon: "devicon-c-plain colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain colored" },
      { name: "MATLAB", icon: "devicon-matlab-plain colored" },
      { name: "SQL", icon: "devicon-mysql-plain colored" },
      { name: "Tableau", icon: "devicon-tableau-plain colored" }
    ]
  },
  
  {
    category: "Security & Systems",
    items: [
      { name: "Cybersecurity Fundamentals", icon: "shield" },
      { name: "Operating Systems", icon: "os" },
      { name: "Computer Networks", icon: "network" }
    ]
  }
];

const CERTIFICATIONS = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Aug 8, 2026",
    link: "https://www.credly.com/users/bobur-mirzarakhimov",
    icon: "assets/icon1.png"
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "Cisco Networking Academy",
    date: "Aug 9, 2026",
    link: "https://www.credly.com/users/bobur-mirzarakhimov",
    icon: "assets/icon2.png"
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "Aug 15, 2026",
    link: "https://www.credly.com/users/bobur-mirzarakhimov",
    icon: "assets/icon3.png"
  }
];

const PROJECTS = [
  {
    title: "UzBank Shield",
    logo: "assets/projectlogo1.svg",
    goal: "Give everyday users in Uzbekistan a way to sanity-check a banking or payment page before they type in a password — catching a domain that's one character off from real, before that character costs them their account.",
    output: "A terminal + desktop (PySide6) scanning engine that verifies domains against Uzbekistan's official bank/payment registry, flags typosquatting and suspicious TLDs, inspects SSL/WHOIS, scans payment pages for card-stealing forms, reads QR & barcodes live via webcam, and flags scam SMS/emails — fully localized in English, Russian, and Uzbek, backed by 66+ unit tests.",
    stack: ["Python", "PySide6", "Rich", "pytest", "SSL/WHOIS Analysis", "OpenAI API"],
    repo: "https://github.com/Phlorenci/UzBank-Shield",
    demo: ""
  }
];

const SOCIALS = [
  { name: "GitHub", url: "https://github.com/Phlorenci", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/bobur-mirzarakhimov-08a066309/", icon: "linkedin" },
  { name: "LeetCode", url: "https://leetcode.com/u/Phlorenci/", icon: "leetcode" },
  { name: "Instagram", url: "https://www.instagram.com/boburyrn/", icon: "instagram" }
];

const PROFILE = {
  avatarUrl: "assets/profilephoto.jpg", // put a path like "assets/photo.jpg" here once you have one
  name: "Bobur Mirzarakhimov",
  tagline: "Computer Engineering Student | Cybersecurity & Systems Enthusiast",
  location: "Seoul, South Korea",
  email: "boburmirzarakhimov2006@gmail.com",
  githubUsername: "Phlorenci",
  resumeUrl: "" // drop a path like "assets/resume.pdf" here once you have one
};
