import { ArrowDown, ArrowUpRight, Plus } from "lucide-react"
import { projects, experience, skills } from "@/lib/portfolio"
import { ContactForm } from "@/components/contact-form"

export function SelectedWork() {
  return <section className="section shell" id="projects">
    <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Real products.<br/><em>Meaningful impact.</em></h2></div><p>Thoughtful engineering, from the first component to the final deployment.</p></div>
    <div className="work-list">{projects.map((project, index) => <details className="work-item" key={project.title}>
      <summary><span className="work-number">0{index + 1}</span><div className="work-title"><span className="eyebrow">{["EDUCATION · FULL-STACK", "DEVELOPER TOOLS · FRONTEND", "RESEARCH · WEB PLATFORM", "RESEARCH · CONTRACT", "OPERATIONS · DASHBOARD"][index]}</span><h3>{project.title}</h3><p>{project.description}</p></div><span className="work-arrow"><Plus size={22}/></span></summary>
      <div className="work-details"><div className="technology-list">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><ul>{project.achievements.map(item => <li key={item}>{item}</li>)}</ul></div>
    </details>)}</div>
    <p className="work-footnote">A few things I&apos;ve helped bring to life. Select a project to explore the details. <ArrowDown size={14}/></p>
  </section>
}

export function AboutAndExpertise() {
  return <>
    <section className="about-section" id="about"><div className="shell about-grid"><div className="portrait-wrap"><img src="/headshot.jpg" alt="Muhammad Abdullah, Senior Software Engineer" width={480} height={540} loading="lazy"/><span className="portrait-note">THE PERSON BEHIND THE CODE ↗</span></div><div className="about-copy"><p className="eyebrow">02 / A LITTLE ABOUT ME</p><h2>Good software starts<br/>with <em>understanding.</em></h2><p>I&apos;m Muhammad Abdullah, a Senior Software Engineer based in Lahore, Pakistan. I turn complex problems into thoughtful digital experiences.</p><p>With 5 years of experience across React, Next.js, and Ruby on Rails, I care as much about how a product feels as how well it works. Clean architecture. Fast interfaces. Details that make a difference.</p><p>From client-facing projects to distributed teams, I bring a practical, collaborative approach to building software that lasts.</p><a className="text-link" href="https://www.linkedin.com/in/muhammadab98/" target="_blank" rel="noopener noreferrer">A little more about me on LinkedIn <ArrowUpRight size={18}/></a></div></div></section>
    <section className="section shell" id="skills"><div className="section-heading"><div><p className="eyebrow">03 / THE TOOLKIT</p><h2>The right tools.<br/><em>Not just the latest ones.</em></h2></div><p>Full-stack foundations, modern interfaces, and AI where it makes a real difference.</p></div><div className="skills-grid">{Object.entries(skills).map(([name, items], index) => <div className="skill-group" key={name}><span className="eyebrow">0{index + 1}</span><h3>{name}</h3><p>{items.join(" · ")}</p></div>)}</div></section>
  </>
}

export function Experience() {
  return <section className="experience-section" id="experience"><div className="shell section"><div className="section-heading"><div><p className="eyebrow">04 / THE JOURNEY</p><h2>Always learning.<br/><em>Always building.</em></h2></div><p>A journey from shipping my first features to leading frontend initiatives.</p></div><div className="experience-list">{experience.map(company => <div className="company-row" key={company.company}><div><h3>{company.company}</h3><p>{company.location}</p></div><div className="roles">{company.positions.map(role => <details key={role.title}><summary><div><h4>{role.title}</h4><span>{role.period}</span></div><Plus size={19}/></summary><ul>{role.achievements.map(item => <li key={item}>{item}</li>)}</ul></details>)}</div></div>)}</div></div></section>
}

export function Contact() {
  return <section className="contact-section" id="contact"><div className="shell section"><p className="eyebrow">05 / YOUR NEXT CHAPTER</p><div className="contact-heading"><h2>Have something<br/>in mind? <em>Let&apos;s build it.</em></h2><ArrowUpRight className="contact-arrow" strokeWidth={1}/></div><div className="contact-grid"><div className="contact-copy"><p>A new product, a tricky challenge, or a team that needs an extra pair of hands. I&apos;d love to hear about it.</p><a className="meeting-link" href="https://calendly.com/muhammadabdullah101998/lets-talk" target="_blank" rel="noopener noreferrer" aria-label="Book a meeting with Muhammad Abdullah on Calendly, opens in a new tab">Book a meeting <ArrowUpRight size={18}/></a><a className="contact-email" href="mailto:muhammadabdullah101998@gmail.com">muhammadabdullah101998@gmail.com <ArrowUpRight size={18}/></a><a href="tel:+923127677525">+92 312 7677525</a><span>Lahore, Pakistan · Working everywhere</span><a className="text-link" href="https://www.linkedin.com/in/muhammadab98/" target="_blank" rel="noopener noreferrer">Find me on LinkedIn <ArrowUpRight size={17}/></a></div><div className="contact-form-wrap"><ContactForm/></div></div></div><footer className="shell footer"><a className="wordmark" href="#home">abdullah<span>.</span></a><span>© {new Date().getFullYear()} Muhammad Abdullah</span><a href="#home">Back to top ↑</a></footer></section>
}
