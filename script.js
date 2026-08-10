/* =========================================================
   ICON SET (small inline SVGs, no external icon library)
   ========================================================= */
const ICONS = {
  shield: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l8 3.5v5c0 5-3.4 8.7-8 9.5-4.6-.8-8-4.5-8-9.5v-5L12 3z"/></svg>`,
  github: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.71c-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.78-4.57 5.04.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/></svg>`,
  linkedin: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM3.3 8.75h3.6V21H3.3V8.75Zm6.28 0h3.45v1.68h.05c.48-.9 1.65-1.85 3.4-1.85 3.64 0 4.31 2.4 4.31 5.52V21h-3.6v-5.9c0-1.4-.03-3.2-1.95-3.2-1.96 0-2.26 1.53-2.26 3.1V21H9.58V8.75Z"/></svg>`,
  leetcode: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 3 6 10l7 7"/><path d="M9.5 13.5h9"/><path d="M12 19.5c-1.5 1.5-4 1.5-5.5 0s-1.5-4 0-5.5"/></svg>`,
  instagram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>`,
  external: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg>`,
  os: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg>`,
  network: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v6M12 13 6.5 17.5M12 13l5.5 4.5"/></svg>`,
  wifi: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0"/><circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/></svg>`,
  brain: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 2 5v.5a3 3 0 0 0 3 3M14.5 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-2 5v.5a3 3 0 0 1-3 3M9.5 3v17M14.5 3v17"/></svg>`,
};

/* =========================================================
   RENDER: SKILLS
   ========================================================= */
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  grid.innerHTML = SKILLS.map(group => `
    <div class="skill-card">
      <h3>${group.category}</h3>
      <ul class="skill-tags">
        ${group.items.map(item => `
          <li>
            <span class="skill-icon">${item.icon.startsWith("devicon") ? `<i class="${item.icon}"></i>` : ICONS[item.icon] || ""}</span>
            ${item.name}
          </li>
        `).join("")}
      </ul>
    </div>
  `).join("");
}

/* =========================================================
   RENDER: CERTIFICATIONS
   ========================================================= */
function renderCertifications() {
  const grid = document.getElementById("certs-grid");
  if (!CERTIFICATIONS.length) {
    grid.innerHTML = `<div class="placeholder-card"><p>No certifications listed yet.</p></div>`;
    return;
  }
  grid.innerHTML = CERTIFICATIONS.map(cert => {
    const isImage = /\.(png|jpg|jpeg|svg|webp)$/i.test(cert.icon);
    const iconHtml = isImage
      ? `<img src="${cert.icon}" alt="${cert.title} badge">`
      : (ICONS[cert.icon] || ICONS.shield);
    return `
      <div class="cert-card">
        <div class="cert-icon">${iconHtml}</div>
        <div class="cert-body">
          <h3>${cert.title}</h3>
          <p>${cert.issuer}${cert.date ? " · " + cert.date : ""}</p>
          <a class="cert-link" href="${cert.link}" target="_blank" rel="noopener noreferrer">
            View credential ${ICONS.external}
          </a>
        </div>
      </div>
    `;
  }).join("");
}

/* =========================================================
   RENDER: PROJECTS
   ========================================================= */
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!PROJECTS.length) {
    grid.innerHTML = `
      <a href="https://github.com/${PROFILE.githubUsername}" target="_blank" rel="noopener noreferrer"
         class="placeholder-card cta-card" style="grid-column: 1 / -1;">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 9h8M8 13h5"/></svg>
        <p>Projects coming soon</p>
        <span class="placeholder-sub">In the meantime, browse the code on GitHub: github.com/${PROFILE.githubUsername}</span>
      </a>`;
    return;
  }
  grid.innerHTML = PROJECTS.map(p => `
    <div class="project-card">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="project-tags">${(p.stack || []).map(t => `<span>${t}</span>`).join("")}</div>
      <div class="project-links">
        ${p.repo ? `<a href="${p.repo}" target="_blank" rel="noopener noreferrer">Repo →</a>` : ""}
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" style="margin-left:12px;">Live →</a>` : ""}
      </div>
    </div>
  `).join("");
}

/* =========================================================
   RENDER: SOCIALS
   ========================================================= */
function renderSocials() {
  const wrap = document.getElementById("socials");
  wrap.innerHTML = SOCIALS.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.name}" title="${s.name}">
      ${ICONS[s.icon]}
    </a>
  `).join("");
}

/* =========================================================
   RESUME BUTTON — enable automatically once PROFILE.resumeUrl is set
   ========================================================= */
function setupResumeButton() {
  const btn = document.getElementById("resume-btn");
  if (PROFILE.resumeUrl) {
    btn.href = PROFILE.resumeUrl;
    btn.removeAttribute("aria-disabled");
    btn.setAttribute("download", "");
  } else {
    btn.addEventListener("click", e => e.preventDefault());
  }
}

function setupAvatar() {
  const wrap = document.getElementById("hero-avatar");
  if (PROFILE.avatarUrl) {
    wrap.innerHTML = `<img src="${PROFILE.avatarUrl}" alt="${PROFILE.name}">`;
  }
}

/* =========================================================
   NAV: scroll shadow, active link highlight, mobile toggle
   ========================================================= */
function setupNav() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  const navAnchors = [...links.querySelectorAll("a")];
  const sections = navAnchors.map(a => document.getElementById(a.dataset.nav));

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  }, { passive: true });

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navAnchors.forEach(a => a.classList.toggle("active", a.dataset.nav === id));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  sections.forEach(s => s && observer.observe(s));
}

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(i => observer.observe(i));
}

/* =========================================================
   HERO TYPEWRITER
   ========================================================= */
function setupTypewriter() {
  const el = document.getElementById("typed-role");
  const phrases = [
    "loading profile...",
    "computer engineering student",
    "cybersecurity & systems enthusiast",
    "based in Seoul, South Korea"
  ];
  let phraseIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = phrases[phraseIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 28 : 45);
  }
  tick();
}

/* =========================================================
   CONTACT FORM (progressive: works with Formspree if configured,
   otherwise falls back to a mailto link)
   ========================================================= */
function setupContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const usesPlaceholderEndpoint = form.action.includes("YOUR_FORM_ID");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);

    if (usesPlaceholderEndpoint) {
      const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
      status.textContent = "Opening your email client...";
      return;
    }

    status.textContent = "Sending...";
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      status.textContent = res.ok ? "Message sent — thanks!" : "Something went wrong. Try emailing directly.";
      if (res.ok) form.reset();
    } catch {
      status.textContent = "Network error — try emailing directly.";
    }
  });
}

function setupCursorGlow() {
  const glow = document.getElementById("cursor-glow");
  if (!glow || window.matchMedia("(hover: none)").matches) return;
  window.addEventListener("mousemove", e => {
    glow.style.setProperty("--x", `${e.clientX}px`);
    glow.style.setProperty("--y", `${e.clientY}px`);
  }, { passive: true });
}

function setupMagnetic() {
  document.querySelectorAll(".magnetic").forEach(btn => {
    btn.addEventListener("mousemove", e => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });
    btn.addEventListener("mouseleave", () => { btn.style.transform = "translate(0,0)"; });
  });
}

function setupCardGlow() {
  document.querySelectorAll(".skill-card, .cert-card, .project-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderCertifications();
  renderProjects();
  renderSocials();
  setupResumeButton();
  setupAvatar();
  setupNav();
  setupReveal();
  setupTypewriter();
  setupContactForm();
  setupCursorGlow();
  setupMagnetic();
  setupCardGlow();
  document.getElementById("footer-year").textContent = new Date().getFullYear();
});
