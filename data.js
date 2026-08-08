/* =========================================================
   SITE DATA
   Add new skills / certifications / projects here — the page
   re-renders from these arrays, no HTML editing required.
   ========================================================= */

const SKILLS = [
  {
    category: "Languages & Tools",
    items: ["Python", "C", "Git", "Linux"]
  },
  {
    category: "Security & Systems",
    items: ["Cybersecurity Fundamentals", "Operating Systems", "Computer Networks"]
  },
  {
    category: "Other Coursework",
    items: ["MATLAB", "Wireless Communication", "AI", "Web Programming & Development"]
  }
];

const CERTIFICATIONS = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "",
    link: "https://www.credly.com/users/bobur-mirzarakhimov",
    icon: "shield"
  }
  // Add more certifications here, e.g.:
  // { title: "CompTIA Security+", issuer: "CompTIA", date: "2026", link: "#", icon: "shield" }
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
