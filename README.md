# Bobur Mirzarakhimov — Portfolio

Static site, no build step, no framework. Just `index.html`, `styles.css`, `script.js`, and `data.js`.

## Run it locally in VS Code

1. Open the `portfolio` folder in VS Code (`File → Open Folder...`).
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel (`Ctrl+Shift+X` / `Cmd+Shift+X`, search "Live Server").
3. Right-click `index.html` in the file explorer → **Open with Live Server**. It'll open in your browser at `http://127.0.0.1:5500` and auto-refresh whenever you save a file.

No Live Server? Just double-click `index.html` — it'll open directly in your browser. Everything works, you just won't get auto-reload.

## Editing content (no HTML digging required)

Everything that grows over time — skills, certifications, projects, socials — lives in `data.js` as plain arrays. Add an object to the relevant array and the page re-renders it automatically. Comments in that file show the exact shape to copy for a new project or certification.

- **Add a project:** add an object to `PROJECTS` in `data.js`.
- **Add a certification:** add an object to `CERTIFICATIONS`.
- **Add the resume:** drop the PDF in `assets/`, then set `PROFILE.resumeUrl = "assets/resume.pdf"` in `data.js` — the button enables itself.
- **Contact form:** it currently falls back to opening the user's email client. To get real form submissions without a backend, create a free form at [formspree.io](https://formspree.io), and replace `YOUR_FORM_ID` in `index.html`'s `<form action="...">` with your endpoint.

## Deploying (GitHub Pages, free)

1. Push this folder to a GitHub repo (see note below on repo naming).
2. In the repo: **Settings → Pages → Source → Deploy from a branch → main / (root)**.
3. GitHub gives you a live URL in a minute or two: `https://<username>.github.io/<repo-name>/`.
4. If you want it at `https://<username>.github.io/` directly (no `/repo-name/` path), name the repo exactly `<username>.github.io`.

Any push to `main` after that redeploys automatically.
