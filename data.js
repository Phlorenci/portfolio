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
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "C", icon: "clang" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain colored" },
      { name: "MATLAB", icon: "devicon-matlab-plain colored" },
      { name: "SQL", icon: "devicon-mysql-plain colored" },
      { name: "Tableau", icon: "tableau" }
    ]
  },

  {
    category: "Languages",
    items: [
      { name: "English", icon: "globe" },
      { name: "Russian", icon: "globe" },
      { name: "Korean", icon: "globe" },
      { name: "Uzbek", icon: "globe" }
    ]
  },
  
  {
    category: "Security & Systems",
    items: [
      { name: "CCNA - Network Security (in progress)", icon: "network" },
      { name: "CEH - Ethical Hacking (in progress)", icon: "shield" },
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
    issuer: "IBM SkillsBuild",
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

const BLOG_POSTS = [
  {
    title: "Phishing, and What Actually Catches It",
    date: "Aug 15, 2026",
    excerpt: "What I learned building UzBank Shield's detection engine, and how it connects to CCNA/CEH fundamentals and data analytics.",
    tags: ["Security", "UzBank Shield"],
    file: "posts/phishing-detection-basics.md"
  },
  {
    title: "Getting Started",
    date: "Aug 15, 2026",
    excerpt: "How this blog works, and what belongs here.",
    tags: ["Meta"],
    file: "posts/getting-started.md"
  }
];

const SOCIALS = [
  { name: "GitHub", url: "https://github.com/Phlorenci", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/bobur-mirzarakhimov-08a066309/", icon: "linkedin" },
  { name: "Instagram", url: "https://www.instagram.com/boburyrn/", icon: "instagram" },
  { name: "Reddit", url: "https://www.reddit.com/user/Phlorenci/", icon: "reddit" },
  { name: "Credly", url: "https://www.credly.com/users/bobur-mirzarakhimov/", icon: "credly" },
  { name: "Chess.com", url: "https://www.chess.com/member/phlorenci", icon: "chess" },
  { name: "LeetCode", url: "https://leetcode.com/u/Phlorenci/", icon: "leetcode" }
];

const PROFILE = {
  avatarUrl: "assets/profilephoto.jpg", // put a path like "assets/photo.jpg" here once you have one
  name: "Bobur Mirzarakhimov",
  tagline: "Computer Engineering and Science Student | Cybersecurity & Systems Enthusiast",
  location: "Seoul, South Korea",
  email: "boburmirzarakhimov2006@gmail.com",
  githubUsername: "Phlorenci",
  resumeUrl: "" // drop a path like "assets/resume.pdf" here once you have one
};
