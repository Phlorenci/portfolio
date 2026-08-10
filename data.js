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
      { name: "SQL", icon: "devicon-mysql-plain colored" }
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
    issuer: "IBM SkillsBuild",
    date: "Aug 9, 2026",
    link: "https://www.credly.com/users/bobur-mirzarakhimov",
    icon: "assets/icon2.png"
  }
];

const PROJECTS = [
  // Empty for now — when ready, add objects like:
  // {
  //   title: "Project Name",
  //   description: "One or two lines on what it does and why it exists.",
  //   stack: ["Python", "Linux"],
  //   repo: "https://github.com/Phlorenci/project-name",
  //   demo: ""
  // }
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
