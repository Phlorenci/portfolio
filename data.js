/* =========================================================
   SITE DATA
   Add new skills / certifications / projects here — the page
   re-renders from these arrays, no HTML editing required.
   ========================================================= */

const SKILLS = [
  {
    category: "Languages & Tools",
    items: [
      { name: "C", icon: "clang" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain colored" },
      { name: "MATLAB", icon: "devicon-matlab-plain colored" },
      { name: "SQL", icon: "devicon-mysql-plain colored" },
      { name: "Tableau", icon: "tableau" },
      { name: "Cisco Packet Tracer", icon: "packettracer" }
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
    icon: "assets/icon1.png",
    desc: "Cisco verifies the earner of this badge successfully completed the Introduction to Cybersecurity course. The holder of this student-level credential has introductory knowledge of cybersecurity, including the global implications of cyber threats on industries, and why cybersecurity is a growing field.",
    skills: ["Cyber Best Practices", "Cybersecurity", "Network Vulnerabilities", "Privacy And Data Confidentiality", "Threat Detection"]
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Aug 9, 2026",
    link: "https://www.credly.com/users/bobur-mirzarakhimov",
    icon: "assets/icon2.png",
    desc: "This credential earner demonstrates a foundational understanding of cybersecurity concepts, objectives, and practices. This includes cyber threat groups, types of attacks, social engineering, case studies, overall security strategies, cryptography, and common approaches to incident response.",
    skills: ["Cryptography", "Cyber Attacks", "Cybersecurity", "Cybersecurity Processes", "Cybersecurity Risk Management", "Cyber Threat Analysis", "Cyber Threat Intelligence", "Incident Response", "Information Security", "Security Strategies", "Social Engineering", "Threat Analysis", "Threat Detection", "Vulnerability Management"]
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    date: "Aug 15, 2026",
    link: "https://www.credly.com/users/bobur-mirzarakhimov",
    icon: "assets/icon3.png",
    desc: "Cisco verifies the earner of this badge successfully completed the Data Analytics Essentials course. The holder of this student-level credential has a broad understanding of how the data analytics process creates value from data, and can explain characteristics of data.",
    skills: ["Dashboard", "Data Analysis", "Data Storytelling", "Data Visualization", "Excel", "SQL", "Tableau"]
  },
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "Aug 25, 2026",
    link: "https://www.credly.com/users/bobur-mirzarakhimov",
    icon: "assets/icon4.png",
    desc: "Cisco verifies the earner of this badge successfully completed the Networking Basics course and achieved this student-level credential. Earner has knowledge of the types of networks, how they work, how devices send and receive data, the types of network cabling, and how IP addressing functions.",
    skills: ["Application Layer Services", "IPv4 Addresses", "Network Media", "Network Types", "Protocols Standards", "Wireless Access"]
  },

  {
    title: "Operating Systems Basics",
    issuer: "Cisco Networking Academy",
    date: "Aug 31, 2026",
    link: "https://www.credly.com/users/bobur-mirzarakhimov",
    icon: "assets/icon5.png",
    desc: "Cisco verifies the earner of this badge successfully completed the Operating Systems Basics course and achieved this student-level credential. Earner has fundamental knowledge of operating systems, covering the basic concepts and skills needed to explain the purpose and characteristics of operating systems, implement basic operating system security, and configure mobile device network connectivity and email.",
    skills: ["Android", "iOS", "Windows", "Linux", "Mobile Network Connectivity", "Operating System Security"]
  },

    {
    title: "Networking Devices and Basic Configuration",
    issuer: "Cisco Networking Academy",
    date: "Sep 12, 2026",
    link: "https://www.credly.com/users/bobur-mirzarakhimov",
    icon: "assets/icon6.png",
    desc: "Cisco verifies the earner of this badge successfully completed the Networking Devices and Basic Configuration course and achieved this student-level credential. Earner has knowledge of networking devices, addressing, and fundamental protocols used to configure and operate a network.",
    skills: ["Cisco IOS", "ARP", "Binary Systems", "Cisco Devices", "DHCP", "DNS", "Ethernet Operates", "Hierarchical Network Design", "IPv4 Subnetting", "Network Layer Protocols", "Transport Layer Protocols", "Virtualization and Cloud Services"]
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
    title: "Starting Semester Six",
    date: "Aug 23, 2026",
    excerpt: "New courses, a harder workload, and a specific GPA goal for this semester.",
    tags: ["University", "Goals"],
    file: "posts/sixth-semester-goals.md"
  },
  {
    title: "Why the Basics Are the Whole Game",
    date: "Aug 23, 2026",
    excerpt: "Finishing Networking Basics, and why DHCP, DNS, and the OSI model matter more to security than they look like they should.",
    tags: ["Networking", "Security", { name: "Cisco Packet Tracer", icon: "packettracer" }],
    file: "posts/networking-basics.md"
  },
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

const QUOTES = [
  "Success and happiness lie in the work most people avoid.",
  "Knowing the basics well is what makes advanced things possible.",
  "The best way to understand a system is to try to break it."
  // Add more quotes here — one string per line.
];
