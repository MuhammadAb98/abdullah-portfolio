"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Code2,
  Database,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Server,
  Sparkles,
  Sun,
  X,
} from "lucide-react"
import { useTheme } from "next-themes"

const navItems = ["about", "experience", "projects", "skills", "contact"]

const skills = [
  { label: "Frontend", icon: Code2, items: ["React.js", "Next.js", "TypeScript", "Angular", "Redux Toolkit", "Tailwind CSS"] },
  { label: "Backend", icon: Server, items: ["Ruby on Rails", "Node.js", "NestJS", "REST APIs", "Microservices"] },
  { label: "AI & Data", icon: BrainCircuit, items: ["OpenAI API", "RAG", "Vector databases", "Embedding models", "Conversational AI"] },
  { label: "Cloud & DevOps", icon: Database, items: ["AWS Lambda", "S3", "CloudWatch", "CircleCI", "Jenkins", "Heroku", "Vercel"] },
]

const experience = [
  {
    company: "Focusteck",
    role: "Senior Software Engineer",
    period: "Jan 2026 — Present",
    location: "Lahore, Pakistan",
    current: true,
    points: [
      "Delivered 4+ customer-facing features and enhancements, contributing to on-time product releases.",
      "Improved application performance by 20% through API, database, and query optimization.",
      "Resolved 10+ production issues and customer defects using AWS CloudWatch, Kibana, and application logs.",
      "Conducted 70+ code reviews and mentored junior developers to raise engineering standards.",
    ],
  },
  {
    company: "Clustox",
    role: "Senior Software Engineer",
    period: "Apr 2025 — Dec 2025",
    location: "Lahore, Pakistan",
    points: [
      "Reduced page load times by 40% through SSR, API optimization, lazy loading, and caching strategies.",
      "Integrated RAG-based AI solutions for context-aware document retrieval in production environments.",
      "Architected reusable UI components and frontend standards across client projects.",
      "Delivered full-stack features for an NYC-based client using React, TypeScript, Next.js, and Rails.",
    ],
  },
  {
    company: "Clustox",
    role: "Software Engineer",
    period: "Feb 2022 — Mar 2025",
    location: "Lahore, Pakistan",
    points: [
      "Modernized codebases with React, TypeScript, Next.js, Rails, and RESTful APIs.",
      "Built features, wrote RSpec tests, reviewed pull requests, and supported production stability.",
      "Led client syncs, product demos, and Scrum planning in a staff augmentation model.",
    ],
  },
  {
    company: "Greelogix",
    role: "Associate Software Engineer",
    period: "Aug 2021 — Feb 2022",
    location: "Lahore, Pakistan",
    points: ["Contributed to production applications across development, debugging, testing, and maintenance.", "Collaborated with senior engineers to ship features and resolve defects in an Agile environment."],
  },
]

const projects = [
  { name: "Ideawake", type: "Idea management SaaS", description: "A configurable platform for capturing, evaluating, and acting on ideas across an organization.", stack: "Angular · NestJS · AWS · DynamoDB", result: "Built scalable multi-tenant services, async jobs, and microservices while resolving critical real-time connectivity issues." },
  { name: "Urban Assembly — NYC", type: "EdTech platform · 3,000+ users", description: "Student data management, academic tracking, and Social-Emotional Learning for educational institutions.", stack: "React · Rails 7 · PostgreSQL · AWS", result: "Reduced load times by 30% and delivered AI-powered learning tools, reporting APIs, and personalized content experiences." },
  { name: "ALLBCI", type: "Research collaboration platform", description: "A hub for hosting, publishing, and collaboratively reviewing research papers privately or openly.", stack: "Supabase · Vector search · React", result: "Improved loading speed by 15%, launched thumbnail previews and vector search, and shipped document sharing." },
  { name: "Konnekt", type: "Bug & issue tracking", description: "Task, requirements, and issue management for product teams.", stack: "React 18 · TypeScript · Redux Saga · Lexical", result: "Built modular lazy-loaded interfaces and integrated Meta’s Lexical editor for rich-text workflows." },
  { name: "GuardsPur", type: "Security operations dashboard", description: "A single dashboard for security company operations and field verification.", stack: "React · Google Maps API · Redux Toolkit", result: "Delivered real-time location tracking, QR verification, and a responsive mobile-first experience." },
]

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><p className="eyebrow">{eyebrow}</p><h2 className="section-title">{title}</h2></div>{children}</div>
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false) }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="grid-texture pointer-events-none fixed inset-0 -z-10" />
      <header className="site-header">
        <div className="container flex h-20 items-center justify-between">
          <button onClick={() => scrollTo("top")} className="flex items-center gap-3 text-left" aria-label="Back to top">
            <span className="brand-mark">MA</span><span className="hidden text-sm font-semibold tracking-wide sm:block">Muhammad Abdullah</span>
          </button>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {navItems.map((item) => <button key={item} onClick={() => scrollTo(item)} className="nav-link">{item}</button>)}
            <button className="theme-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle color theme">{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}</button>
          </nav>
          <button className="theme-button md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
        {menuOpen && <div className="container border-t border-border pb-5 pt-4 md:hidden"><div className="flex flex-col gap-4">{navItems.map((item) => <button key={item} onClick={() => scrollTo(item)} className="nav-link text-left">{item}</button>)}<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="nav-link flex items-center gap-2 text-left">{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />} toggle theme</button></div></div>}
      </header>

      <section id="top" className="container relative flex min-h-[calc(100vh-5rem)] items-center py-20 lg:py-28">
        <div className="hero-orb" />
        <motion.div className="hero-signal" animate={{ x: [0, 12, 0], y: [0, -10, 0], rotate: [0, 2, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
          
          <div className="availability-copy"><span className="signal-ping" /><span>Available for ambitious builds</span><span className="signal-arrow">↗</span></div>
        </motion.div>
        <motion.div className="hero-float-card hero-float-card-top" animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          <span className="hero-float-label">LATEST SHIP</span><strong>AI workflow systems</strong>
        </motion.div>
        <motion.div className="hero-float-card hero-float-card-bottom" animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: .6 }}>
          <span className="hero-float-label">SYSTEM HEALTH</span><strong><span className="signal-ping" /> 99.9% reliable</strong>
        </motion.div>
        <motion.div className="hero-console" initial={{ opacity: 0, scale: .94, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: .35, duration: .8 }} aria-label="Live engineering system map">
          <div className="hero-console-top"><span><i className="signal-ping" /> LIVE SYSTEM MAP</span><span>v5.0.26</span></div>
          <div className="system-map">
            <span className="map-line map-line-one" /><span className="map-line map-line-two" /><span className="map-line map-line-three" />
            <motion.div className="map-node map-node-core" animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2.5, repeat: Infinity }}>MA</motion.div>
            <motion.div className="map-node map-node-api" animate={{ y: [0, -7, 0] }} transition={{ duration: 3, repeat: Infinity }}>API</motion.div>
            <motion.div className="map-node map-node-ai" animate={{ y: [0, 7, 0] }} transition={{ duration: 3.4, repeat: Infinity, delay: .3 }}>AI</motion.div>
            <motion.div className="map-node map-node-data" animate={{ x: [0, 5, 0] }} transition={{ duration: 2.8, repeat: Infinity, delay: .5 }}>DB</motion.div>
          </div>
          <div className="hero-console-footer"><span>PRODUCT ENGINEERING</span><span>● ALL SYSTEMS GO</span></div>
        </motion.div>
        <div className="relative max-w-5xl">
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="eyebrow mb-6">Senior Software Engineer · Lahore, Pakistan</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }} className="hero-title max-w-[680px]">Building software that <span>moves ideas forward.</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }} className="hero-copy">I’m Muhammad Abdullah — a full-stack and agentic AI engineer with 5+ years of experience turning complex product requirements into secure, production-ready systems.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .24 }} className="mt-9 flex flex-wrap gap-4"><button onClick={() => scrollTo("projects")} className="button-primary">Explore my work <ArrowUpRight size={17} /></button><button onClick={() => scrollTo("contact")} className="button-secondary">Let’s work together</button></motion.div>
          <div className="mt-16 grid max-w-2xl grid-cols-2 gap-8 border-t border-border pt-6 sm:grid-cols-4"><div><strong className="stat-number">5+</strong><span className="stat-label">years building</span></div><div><strong className="stat-number">40%</strong><span className="stat-label">faster page loads</span></div><div><strong className="stat-number">70+</strong><span className="stat-label">code reviews</span></div><div><strong className="stat-number">20%</strong><span className="stat-label">performance gains</span></div></div>
        </div>
      </section>

      <div className="signal-rail" aria-label="Capabilities and focus areas">
        <div className="signal-rail-track">
          {["FULL-STACK SYSTEMS", "APPLIED AI", "PRODUCT ENGINEERING", "PERFORMANCE", "CLOUD ARCHITECTURE", "FULL-STACK SYSTEMS", "APPLIED AI", "PRODUCT ENGINEERING"].map((item, index) => <span key={`${item}-${index}`}><i />{item}</span>)}
        </div>
      </div>

      <section id="about" className="section container"><SectionHeading eyebrow="01 / About" title="Engineering with context." /><div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]"><div className="prose-custom"><p>I’m a Senior Software Engineer focused on full-stack product engineering — from architecture and implementation through testing, deployment, optimization, and production support.</p><p>I work AI-first across the SDLC, using modern tools to move faster while keeping reliability, security, and maintainability at the center. My experience spans EdTech, research, security, and data-driven SaaS products.</p><p>I enjoy client-facing teams, staff augmentation environments, and collaborating with engineers and product leaders across time zones.</p></div><div className="quote-card"><Sparkles className="mb-8 text-primary" size={22} /><p>“Strong software engineering fundamentals matter just as much as adopting new technology.”</p><span>— A principle I bring to every build</span></div></div></section>

      <section id="experience" className="section border-y border-border bg-card/50"><div className="container"><div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="eyebrow">02 / Experience</p><h2 className="section-title mt-5 max-w-xl">From first commit to production confidence.</h2></div><p className="max-w-sm text-sm leading-7 text-muted-foreground">Five years of building, optimizing, and supporting products across SaaS, EdTech, research, and security.</p></div><div className="grid gap-4 lg:grid-cols-[.78fr_1.22fr]">{experience.map((item, index) => <motion.article key={`${item.company}-${item.role}`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className={`group rounded-2xl border p-6 transition-colors sm:p-7 ${item.current ? "border-primary/50 bg-primary/[.06]" : "border-border bg-background/70 hover:border-primary/30"} ${index === 0 ? "lg:row-span-2" : ""}`}><div className="flex items-start justify-between gap-4"><span className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${item.current ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>0{index + 1}</span><span className="period text-right">{item.period}</span></div><div className="mt-10"><div className="flex items-center gap-2"><span className={`h-2 w-2 rounded-full ${item.current ? "bg-primary shadow-[0_0_0_5px_hsl(var(--primary)/.12)]" : "bg-muted-foreground/40"}`} /><span className="text-xs font-semibold uppercase tracking-[.16em] text-muted-foreground">{item.company}</span></div><h3 className="mt-3 text-2xl font-semibold tracking-tight">{item.role}</h3><p className="mt-1 text-sm text-muted-foreground">{item.location}</p><ul className="mt-7 space-y-3 border-t border-border/70 pt-6">{item.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-muted-foreground"><Check className="mt-1 shrink-0 text-primary" size={15} />{point}</li>)}</ul></div></motion.article>)}</div></div></section>

      <section id="projects" className="section container"><SectionHeading eyebrow="03 / Selected work" title="Systems with a point of view." /><div className="grid gap-5 md:grid-cols-2">{projects.map((project, index) => <motion.article key={project.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="project-card"><div className="flex items-start justify-between gap-4"><div><p className="project-type">{project.type}</p><h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.name}</h3></div><span className="project-index">0{index + 1}</span></div><p className="mt-5 text-muted-foreground">{project.description}</p><p className="mt-5 text-xs font-semibold uppercase tracking-[.14em] text-primary">{project.stack}</p><div className="mt-6 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Impact — </span>{project.result}</div></motion.article>)}</div></section>

      <section id="skills" className="section border-y border-border bg-card/50"><div className="container"><SectionHeading eyebrow="04 / Toolkit" title="The tools behind the work." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{skills.map(({ label, icon: Icon, items }) => <div key={label} className="skill-card"><Icon className="text-primary" size={22} /><h3 className="mt-5 font-semibold">{label}</h3><div className="mt-4 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="skill-pill">{item}</span>)}</div></div>)}</div></div></section>

      <section id="contact" className="section container"><div className="contact-panel"><div><p className="eyebrow">05 / Contact</p><h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">Have a difficult problem? Let’s make it shippable.</h2><p className="mt-6 max-w-lg text-muted-foreground">Open to Senior Software Engineer, Full-Stack, Applied AI, and Technical Lead opportunities.</p></div><div className="mt-10 space-y-4 lg:mt-0"><a className="contact-link" href="mailto:muhammadabdullah101998@gmail.com"><Mail size={18} />muhammadabdullah101998@gmail.com<ArrowUpRight size={16} /></a><a className="contact-link" href="https://calendly.com/muhammadabdullah101998/lets-talk" target="_blank" rel="noreferrer"><BriefcaseBusiness size={18} />Book a meeting<ArrowUpRight size={16} /></a><a className="contact-link" href="https://www.linkedin.com/in/muhammadab98" target="_blank" rel="noreferrer"><Linkedin size={18} />linkedin.com/in/muhammadab98<ArrowUpRight size={16} /></a><a className="contact-link" href="https://instagram.com/muhammad.abdullah.38" target="_blank" rel="noreferrer"><Instagram size={18} />instagram.com/muhammad.abdullah.38<ArrowUpRight size={16} /></a></div></div></section>

      <footer className="container flex flex-col gap-4 border-t border-border py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Muhammad Abdullah. Built with care.</p><div className="flex gap-4"><a href="mailto:muhammadabdullah101998@gmail.com" aria-label="Email"><Mail size={17} /></a><a href="https://www.linkedin.com/in/muhammadab98" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://github.com/mabdullah98" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="https://instagram.com/muhammad.abdullah.38" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17} /></a></div></footer>
    </main>
  )
}
