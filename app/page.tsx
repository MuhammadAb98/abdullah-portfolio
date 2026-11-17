import { ArrowDown, ArrowUpRight } from "lucide-react"
import { PortfolioNav } from "@/components/portfolio-nav"
import { ParticleWord } from "@/components/particle-word"
import { AboutAndExpertise, Contact, Experience, SelectedWork } from "@/components/portfolio-sections"

export default function Portfolio() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    {/* Navigation */}
    <div id="home"><PortfolioNav/></div>
    <main id="main">
      {/* Hero Section */}
      <section className="hero shell" aria-labelledby="hero-heading">
        <div className="hero-topline"><span>MUHAMMAD ABDULLAH</span><span>SENIOR SOFTWARE ENGINEER</span><span>BASED IN LAHORE, WORKING EVERYWHERE ↗</span></div>
        <ParticleWord/>
        <div className="hero-intro"><div><p className="eyebrow status-label"><span/> THOUGHTFUL CODE. REAL-WORLD IMPACT.</p><h1 id="hero-heading">I build digital experiences<br/>that <em>actually work.</em></h1></div><div className="hero-description"><p>Not just beautiful interfaces.<br/>Fast, scalable, thoughtfully built software.<br/>From the first idea to the last little detail.</p><div className="hero-actions"><a href="#projects" className="pill-link">Explore my work <ArrowUpRight size={17}/></a><a href="https://calendly.com/muhammadabdullah101998/lets-talk" className="text-link" target="_blank" rel="noopener noreferrer">Book a meeting <ArrowUpRight size={17}/></a></div></div></div>
        <div className="hero-bottom"><span>REACT / NEXT.JS / RUBY ON RAILS / AI</span><a href="#projects">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
      </section>
      <section className="proof-strip" aria-label="Experience highlights"><div className="shell proof-grid"><div><strong>5<span>+</span></strong><p>Years of turning<br/>ideas into products</p></div><div><strong>3,000<span>+</span></strong><p>Users on the Urban<br/>Assembly platform</p></div><div><strong>40<span>%</span></strong><p>Faster load times on a<br/>customer-facing app</p></div><div className="proof-note">Less complexity.<br/><em>More possibility.</em></div></div></section>
      {/* Projects Section */}
      <SelectedWork/>
      {/* About Section */}
      {/* Skills Section */}
      <AboutAndExpertise/>
      {/* Experience Section */}
      <Experience/>
      {/* Contact Section */}
      {/* Footer */}
      <Contact/>
    </main>
  </>
}
