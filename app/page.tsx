"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Code,
  Database,
  Cloud,
  Wrench,
  Brain,
  Calendar,
  Building,
  ChevronDown,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { ContactForm } from "@/components/contact-form"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const { theme, setTheme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Ruby"],
    Frontend: ["React.js", "Next.js", "Redux Saga", "Context API", "Tailwind CSS", "Ant Design"],
    Backend: ["Ruby on Rails", "RESTful APIs", "Node.js"],
    Databases: ["MySQL", "PostgreSQL", "Supabase"],
    "Cloud & DevOps": ["AWS", "Heroku", "CircleCI", "Vercel"],
    Testing: ["Jest", "RSpec", "Capybara"],
    "AI Integration": ["ChatGPT", "RAG", "AI-driven personalization"],
    Tools: ["Git", "Jira", "Webpack", "Chart.js", "Lodash"],
  }

  const experience = [
    {
      company: "Clustox",
      location: "Lahore, Pakistan",
      positions: [
        {
          title: "Senior Software Engineer",
          period: "April 2025 - Present",
          achievements: [
            "Led frontend initiatives, refactored complex modules using Next.js and TypeScript for improved performance and scalability",
            "Designed reusable UI components and implemented frontend architecture best practices, reducing tech debt across multiple projects",
            "Integrated advanced AI-based solutions using AI Models and Retrieval-Augmented Generation (RAG) to enhance user experience",
            "Enhanced customer-facing web application with React and Next.js, reducing load times by 40% through SSR, API optimization, lazy loading, and caching",
          ],
        },
        {
          title: "Software Engineer",
          period: "July 2022 - March 2025",
          achievements: [
            "Contributed to all phases of the software development lifecycle, including design, code reviews, testing, and deployment",
            "Developed scalable front-end solutions using Flexbox, CSS Grids, Ant Design, and Redux Saga",
            "Integrated Ruby on Rails-based RESTful APIs and collaborated with senior developers on complex tasks",
          ],
        },
        {
          title: "Associate Software Engineer",
          period: "Feb 2022 - July 2022",
          achievements: [
            "Gained hands-on experience in software development, debugging, and testing while contributing to live projects",
            "Collaborated with senior developers to enhance technical proficiency and industry best practices",
          ],
        },
      ],
    },
    {
      company: "Greelogix",
      location: "Lahore, Pakistan",
      positions: [
        {
          title: "Associate Software Engineer",
          period: "Aug 2021 – Feb 2022",
          achievements: [
            "Gained foundational experience in software development and testing",
            "Worked on live projects under senior developer guidance",
          ],
        },
      ],
    },
  ]

  const projects = [
    {
      title: "Urban Assembly - NYC",
      description:
        "A platform with 3000+ users, designed to enhance student data management, academic tracking, and Social-Emotional Learning (SEL) for educational institutions",
      technologies: ["React.js", "Rails 7", "PostgreSQL", "Ant Design", "Chart.js", "AWS", "CircleCI"],
      achievements: [
        "Improved platform responsiveness and reduced load times by 30%",
        "Developed AI-powered learning tools and programs to improve student growth",
        "Designed and integrated RESTful APIs with Ruby on Rails",
        "Automated deployment pipelines with CircleCI, AWS, and Heroku",
      ],
    },
    {
      title: "Konnekt – Bug & Issue Tracking Tool",
      description: "Developed a comprehensive tool for bug and issue tracking with task and requirements management",
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "Ant Design", "Redux Saga", "Jest"],
      achievements: [
        "Designed scalable front-end features delivering seamless, modern user experiences",
        "Built optimized modular components with lazy loading and React animations",
        "Implemented Lexical Editor by Meta for rich-text editing",
        "Developed REST APIs with SSO for secure authentication",
      ],
    },
    {
      title: "OECD Platform",
      description: "Platform promoting international comparative research, innovation, and key indicators in education",
      technologies: ["React", "AWS", "Performance Optimization"],
      achievements: [
        "Improved application performance by transitioning class components to React hooks",
        "Managed AWS services, deployments, and resource optimization",
        "Ensured timely project delivery by coordinating with team and meeting deadlines",
      ],
    },
    {
      title: "ALLBCI - The Complete BCI Hub",
      description: "Remote contract project for hosting, publishing, and collaboratively reviewing research papers",
      technologies: ["Supabase", "Vector Search", "Performance Optimization"],
      achievements: [
        "Achieved 15% improvement in application loading speed",
        "Successfully launched thumbnail and vector search feature",
        "Resolved major Supabase migration errors blocking production deployment",
        "Built robust document sharing feature boosting user engagement",
      ],
    },
    {
      title: "GuardsPur",
      description: "Simplified security company operations by consolidating tasks into one dashboard",
      technologies: ["React", "Google Maps API", "Redux Toolkit", "Mobile-First Design"],
      achievements: [
        "Developed mobile-friendly design with real-time tracking",
        "Managed asynchronous actions with Redux toolkit",
        "Implemented responsive dashboard for security operations",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl text-slate-800 dark:text-white"
            >
              Muhammad Abdullah
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["about", "skills", "experience", "projects", "education", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white capitalize transition-colors"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Navigation Toggle */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 space-y-2"
            >
              {["about", "skills", "experience", "projects", "education", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white capitalize transition-colors"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center gap-2 w-full text-left px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </button>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 opacity-50"
        />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6">
              Muhammad Abdullah
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-8">
              Senior Software Engineer
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Results-driven Senior Software Engineer with 5 years of experience in building scalable, high-performance
              web applications. Proficient in React.js, Next.js, TypeScript, and the MERN stack.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <MapPin size={18} />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Phone size={18} />
                <span>+92 312 7677525</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Mail size={18} />
                <span>muhammadabdullah101998@gmail.com</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                View My Work
              </Button>
              <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-slate-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Professional Summary
            </h2>
            <Card className="p-8">
              <CardContent className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Results-driven Senior Software Engineer with 5 years of experience in building scalable,
                  high-performance web applications. Proficient in React.js, Next.js, TypeScript, and the MERN stack,
                  with strong backend expertise in Ruby on Rails and RESTful APIs.
                </p>
                <p>
                  Adept at integrating AI tools like ChatGPT, managing cloud infrastructure on AWS, and delivering
                  robust solutions through CI/CD pipelines (CircleCI, Heroku). Demonstrated success in client-facing
                  roles, remote teams, and staff augmentation environment, with a strong focus on product quality,
                  performance, and delivery.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg text-slate-900 dark:text-white">
                        {category === "Programming Languages" && <Code size={20} />}
                        {category === "Databases" && <Database size={20} />}
                        {category === "Cloud & DevOps" && <Cloud size={20} />}
                        {category === "AI Integration" && <Brain size={20} />}
                        {!["Programming Languages", "Databases", "Cloud & DevOps", "AI Integration"].includes(
                          category,
                        ) && <Wrench size={20} />}
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Work Experience
            </h2>
            <div className="space-y-8">
              {experience.map((company, companyIndex) => (
                <motion.div
                  key={company.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: companyIndex * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <Building className="text-emerald-600" size={24} />
                        <div>
                          <CardTitle className="text-xl text-slate-900 dark:text-white">{company.company}</CardTitle>
                          <CardDescription className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                            <MapPin size={14} />
                            {company.location}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {company.positions.map((position, positionIndex) => (
                        <div key={positionIndex}>
                          <div className="flex items-center gap-2 mb-3">
                            <Calendar size={16} className="text-slate-500" />
                            <h4 className="font-semibold text-slate-900 dark:text-white">{position.title}</h4>
                            <span className="text-sm text-slate-500">({position.period})</span>
                          </div>
                          <ul className="space-y-2 ml-6">
                            {position.achievements.map((achievement, achievementIndex) => (
                              <li
                                key={achievementIndex}
                                className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed"
                              >
                                • {achievement}
                              </li>
                            ))}
                          </ul>
                          {positionIndex < company.positions.length - 1 && <Separator className="mt-4" />}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-slate-900 dark:text-white">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-sm mb-2 text-slate-900 dark:text-white">
                          Technologies Used:
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-semibold text-sm mb-2 text-slate-900 dark:text-white">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {project.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed"
                            >
                              • {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Let's Work Together</h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto text-center">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
              ideas to life.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: contact info */}
              <div className="space-y-6">
                <Card className="bg-slate-800 border-slate-700 text-slate-200">
                  <CardHeader>
                    <CardTitle>Contact information</CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 gap-6">
                    <div className="flex items-start gap-3">
                      <Mail className="text-emerald-400 mt-1" size={20} />
                      <div>
                        <p className="text-sm text-slate-400">Email</p>
                        <p className="font-medium">muhammadabdullah101998@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="text-emerald-400 mt-1" size={20} />
                      <div>
                        <p className="text-sm text-slate-400">Phone</p>
                        <p className="font-medium">+92 312 7677525</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="text-emerald-400 mt-1" size={20} />
                      <div>
                        <p className="text-sm text-slate-400">Location</p>
                        <p className="font-medium">Lahore, Pakistan</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-emerald-600 hover:bg-emerald-700"
                        onClick={() => window.open("mailto:muhammadabdullah101998@gmail.com")}
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-600 text-white hover:bg-slate-800 bg-transparent"
                        onClick={() => window.open("https://www.linkedin.com/in/muhammadab98/", "_blank")}
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right: form */}
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800 text-slate-400 text-center">
        <p>&copy; 2025 Muhammad Abdullah. All rights reserved.</p>
      </footer>
    </div>
  )
}
