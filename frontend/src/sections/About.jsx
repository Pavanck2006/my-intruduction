import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Code2, Layers3, Sparkles } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import './About.css'

const highlights = [
  { icon: Code2, value: 'UI', label: 'Design with purpose', note: 'Clear, human-centered interfaces' },
  { icon: Layers3, value: 'Web', label: 'Frontend development', note: 'Responsive, accessible experiences' },
  { icon: Sparkles, value: 'Grow', label: 'Keep learning', note: 'Curiosity in every project' },
]

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="shell">
        <SectionTitle eyebrow="A LITTLE ABOUT ME" number="01 / 06" title="Curiosity first." highlight="Craft always." description="A creative developer who cares just as much about how it feels as how it works." />
        <div className="about-grid">
          <motion.div className="about-visual" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <div className="about-portrait">
              <span className="about-portrait__top">A WORK IN PROGRESS <span>✳</span></span>
              <div className="about-orb about-orb--one" /><div className="about-orb about-orb--two" />
              <span className="about-portrait__monogram">Y<span>.</span>N</span>
              <span className="about-portrait__caption">CURIOUS BY NATURE<br />CREATIVE BY DESIGN</span>
            </div>
            <div className="about-caption"><span>01 — A portrait in progress</span><ArrowUpRight size={14} /></div>
          </motion.div>
          <div className="about-copy">
            <span className="about-overline">THE PERSON BEHIND THE PIXELS</span>
            <h3>Good design isn&apos;t decoration.<br /><span>It&apos;s how things make sense.</span></h3>
            <p>I&apos;m Your Name, a frontend developer and creative designer drawn to the space where technology meets human experience. I love turning complex ideas into clear, inviting interfaces that feel a little bit special.</p>
            <p>My journey started with a curiosity about how websites work, and grew into a practice of building them with intention. These days, I&apos;m always learning a new tool, refining a detail, or sketching what could come next.</p>
            <p>My goal is to create accessible, responsive web products while continuing to grow as a frontend developer.</p>
            <div className="about-interests"><span>OFF-SCREEN, I&apos;M INTO</span><div><span>✳ Typography</span><span>✳ Music</span><span>✳ New places</span></div></div>
            <a className="about-link" href="#contact">A little more about my approach <ArrowDownRight size={15} /></a>
          </div>
        </div>
        <div className="about-highlights">
          {highlights.map(({ icon: Icon, value, label, note }, index) => (
            <motion.article className="highlight-card" key={label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }}>
              <Icon size={17} strokeWidth={1.6} />
              <strong>{value}</strong><span>{label}</span><small>{note}</small>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
