import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Code2, ShoppingBag, CloudSun, CheckSquare2, PanelsTopLeft } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import './Projects.css'

const projects = [
  { number: '01', title: 'Personal portfolio website', type: 'BRAND / WEB', description: 'A personal corner of the internet, built to tell a story with clarity, character, and just the right amount of motion.', tags: ['React', 'CSS', 'Framer Motion'], icon: PanelsTopLeft, visual: 'portfolio' },
  { number: '02', title: 'E-commerce website', type: 'E-COMMERCE', description: 'A considered shopping experience for independent makers, with a warm visual language and a streamlined product journey.', tags: ['React', 'JavaScript', 'CSS Grid'], icon: ShoppingBag, visual: 'shop' },
  { number: '03', title: 'Weather application', type: 'UTILITY / WEB', description: 'A calm, glanceable weather concept that makes the forecast feel as effortless as looking out the window.', tags: ['JavaScript', 'CSS', 'Responsive'], icon: CloudSun, visual: 'weather' },
  { number: '04', title: 'Task management application', type: 'PRODUCTIVITY', description: 'A lightweight task planning interface that turns a long list into a clear, achievable day.', tags: ['React', 'CSS', 'UI design'], icon: CheckSquare2, visual: 'tasks' },
]

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="shell">
        <SectionTitle eyebrow="SELECTED WORK" number="03 / 06" title="Ideas, made" highlight="tangible." description="A few concept projects that bring thoughtful design and useful technology together." />
        <div className="projects-grid">
          {projects.map(({ number, title, type, description, tags, icon: Icon, visual }, index) => (
            <motion.article className={`project-card project-card--${visual}`} key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}>
              <a className="project-preview" href="#contact" aria-label={`${title} project preview placeholder`}>
                <div className="preview-toolbar"><span /><span /><span /><i>yourname.design</i><ArrowUpRight size={13} /></div>
                <div className="preview-scene">
                  <div className="preview-decor preview-decor--one" /><div className="preview-decor preview-decor--two" />
                  <div className="preview-copy"><small>{type}</small><strong>{title}</strong><span>Designed for real life.</span><i>EXPLORE <ArrowUpRight size={11} /></i></div>
                  <div className="preview-object"><Icon size={30} strokeWidth={1.1} /></div>
                  <span className="preview-stamp">{number} / 04</span>
                </div>
                <span className="preview-hint">CONCEPT PREVIEW <ExternalLink size={11} /></span>
              </a>
              <div className="project-info">
                <div className="project-info__heading"><span className="project-number">{number}</span><span className="project-type">{type}</span><ArrowUpRight size={16} /></div>
                <h3>{title}</h3><p>{description}</p>
                <div className="project-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links"><a href="#contact" aria-label={`${title} live demo placeholder`}>Live demo <ArrowUpRight size={14} /></a><a href="#contact" aria-label={`${title} source code placeholder`}>Source code <Code2 size={14} /></a></div>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="projects-more"><span>MORE IDEAS ARE ALWAYS IN THE WORKS</span><a href="#contact">Have a project in mind? <ArrowUpRight size={14} /></a></div>
      </div>
    </section>
  )
}

export default Projects
