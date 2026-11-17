"use client"

import { useState } from "react"
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"

const links = [ ["About", "about"], ["Selected work", "projects"], ["Expertise", "skills"], ["Experience", "experience"] ]

export function PortfolioNav() {
  const [open, setOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <header className="site-header shell">
      <a className="wordmark" href="#home" aria-label="Muhammad Abdullah home">abdullah<span>.</span></a>
      <nav aria-label="Main navigation" className="desktop-nav">
        {links.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <button className="theme-toggle" aria-label="Toggle light and dark theme" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}><Sun className="sun-icon" size={17}/><Moon className="moon-icon" size={17}/></button>
        <a href="https://calendly.com/muhammadabdullah101998/lets-talk" className="pill-link nav-cta" target="_blank" rel="noopener noreferrer" aria-label="Book a meeting with Muhammad Abdullah on Calendly, opens in a new tab">Book a meeting <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{[...links, ["Contact", "contact"]].map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={16}/></a>)}<a href="https://calendly.com/muhammadabdullah101998/lets-talk" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Book a meeting<ArrowUpRight size={16}/></a></nav>}
    </header>
  )
}
