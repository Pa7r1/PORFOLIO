import type { DictionaryKey } from "./es";

export const en: Record<DictionaryKey, string> = {
  // Nav & section labels
  "nav.about": "About",
  "nav.experience": "Experience",
  "nav.projects": "Projects",
  "nav.skills": "Skills",
  "nav.contact": "Contact",

  // Hero / mobile header
  "header.role": "FULLSTACK DEV",
  "skip.toContent": "Skip to content",
  "theme.toLight": "Switch to light mode",
  "theme.toDark": "Switch to dark mode",
  // Los asteriscos marcan el tramo resaltado — ver la nota en es.ts.
  "hero.headline": `*I develop end-to-end web applications:* from data modeling to robust, scalable, and maintainable deployments.`,
  "hero.eyebrow": "Full Stack Developer · Remote from Argentina",
  "hero.ctaPrimary": "Download CV",
  "hero.ctaSecondary": "View projects",

  // About section paragraphs
  "about.p1":
    "I am a Full Stack Developer (UTN La Rioja) specializing in end-to-end software development: from database modeling and REST API architecture to UI development and final cloud deployment configuration.",
  // Mirrors es.ts: p2's three "and"-joined clauses exposed as an actual
  // list. Also drops the EN-only "payment gateways" claim that es.ts never
  // made — an untracked asymmetry from an earlier translation pass.
  "about.teamwork.intro":
    "Working in shared repositories with other teams left me with three habits:",
  "about.teamwork.item1": "Reading and auditing someone else's code before touching it.",
  "about.teamwork.item2": "Resolving Git conflicts without blocking anyone.",
  "about.teamwork.item3": "Prioritizing the best technical solution over ego.",
  "about.p3":
    "I use AI to reach the best solution, not the first one that compiles. I specify before writing, implement and verify in separate phases, and independent agents review the change before it reaches the main branch. Each project's conventions live versioned in its repo, not in my head.",
  "about.downloadCV": "Download CV",
  "about.stat.experience": "years coding",
  "about.stat.production": "systems in production",
  "about.stat.team": "months on a team",

  // Timeline
  "timeline.hint": "Tap a row to read the detail.",
  "timeline.education": "Education",

  // Skills group labels
  "skills.group.backend": "Backend",
  "skills.group.databases": "Databases",
  "skills.group.devops": "DevOps & Infrastructure",
  "skills.group.testing": "Quality & Tooling",
  "skills.group.frontend": "Frontend",
  "skills.group.ai": "AI-assisted development",

  // Contact
  "contact.text":
    "I'm looking for a team. If you're filling a Full Stack or backend position and something here fits, drop me a line!",
  "contact.cta": "Send me an email",
  "contact.location": "Pituil, La Rioja, Argentina · Remote work",
  "contact.emailAria": "Send an email",
  "contact.whatsappMessage":
    "Hi Patricio! I saw your portfolio and I'd like to talk about a position.",
  "contact.whatsappAria": "Contact via WhatsApp",

  // Footer
  "footer.credit": "Designed and built by",

  // Projects — grouped by the nature of the work
  "projects.group.client": "For clients",
  "projects.group.product": "My own products",
  "projects.group.lab": "Lab",
  "projects.carousel.label": "Projects, one at a time",
  "projects.carousel.prev": "Previous project",
  "projects.carousel.next": "Next project",
  "projects.carousel.goto": "Go to project",
  "projects.carousel.position": "of",

  // Project detail page
  "project.back": "← Projects",
  "project.viewSource": "View source",
  "project.viewLive": "View live",
  "project.liveSoon": "Live demo soon",
  "project.codePrivate": "Private code",
  "project.badge.live": "Live",
  "project.badge.working": "Functional",
  "project.badge.soon": "Soon",
  "project.badge.private": "Private",
  "project.badge.code": "GitHub",
  "project.status.production": "In production",
  "project.status.wip": "In development",
  "project.status.mvp": "MVP",
  "project.status.archived": "Archived",
  "project.section.summary": "In short",
  "project.section.problem": "The Problem",
  "project.section.architecture": "Architecture",
  "project.section.stack": "Why this Stack",
  "project.section.challenges": "Technical Challenges",
  "project.section.results": "Results",
  "project.section.learnings": "Key Learnings",
  "project.testimonial": "What the client says",
  "project.video": "Video demo",
  "project.fallbackTitle": "Project",
  "project.screenshots": "Screenshots",
  "project.noScreenshots": "Screenshots in progress",
  "project.notFound": "Project not found",
  "project.next": "Next project",
  "project.prev": "Previous project",
  "project.closeLightbox": "Close",
  "project.prevImage": "Previous image",
  "project.nextImage": "Next image",

  // 404
  "notFound.title": "404",
  "notFound.message": "Page not found",
  "notFound.back": "Go back home",
};
