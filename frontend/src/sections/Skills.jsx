import { motion } from 'framer-motion'
import { Braces, Code2, GitBranch, Layers, Monitor, PenTool, Palette, Smartphone } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import './Skills.css'

const skills = [
  { icon: Code2, name: 'HTML5', type: 'STRUCTURE', detail: 'Semantic & accessible' },
  { icon: Palette, name: 'CSS3', type: 'STYLE', detail: 'Modern layouts & motion' },
  { icon: Braces, name: 'JavaScript', type: 'INTERACTION', detail: 'Thoughtful functionality' },
  { icon: Layers, name: 'React.js', type: 'FRAMEWORK', detail: 'Reusable interfaces' },
  { icon: GitBranch, name: 'Git & GitHub', type: 'WORKFLOW', detail: 'Versioned & collaborative' },
  { icon: PenTool, name: 'Figma', type: 'DESIGN', detail: 'From wireframe to detail' },
  { icon: Smartphone, name: 'Responsive design', type: 'EVERY SCREEN', detail: 'Built for every device' },
  { icon: Monitor, name: 'UI engineering', type: 'CRAFT', detail: 'Pixel-aware, user-first' },
]

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="shell">
        <SectionTitle eyebrow="THE TOOLKIT" number="02 / 06" title="A thoughtful mix of" highlight="tools & craft." description="The right tools matter. Knowing when and how to use them matters more." />
        <div className="skills-layout">
          <div className="skills-note">
            <span className="skills-note__mark">/</span>
            <h3>Built with<br />intention.</h3>
            <p>A growing toolkit for designing, building, and polishing the details that make a product feel right.</p>
            <div className="skills-note__footer"><span>ALWAYS LEARNING</span><span className="skills-note__spark">✳</span></div>
          </div>
          <div className="skills-grid">
            {skills.map(({ icon: Icon, name, type, detail }, index) => (
              <motion.article className="skill-card" key={name} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}>
                <div className="skill-card__top"><Icon size={20} strokeWidth={1.6} /><span>{type}</span></div>
                <h3>{name}</h3>
                <p>{detail}</p>
                <div className="skill-card__line"><span /></div>
              </motion.article>
            ))}
          </div>
        </div>
        <div className="skills-footer"><span>THE CONSTANT: CURIOSITY</span><span>01. DESIGN&nbsp;&nbsp; 02. BUILD&nbsp;&nbsp; 03. REFINE</span></div>
      </div>
    </section>
  )
}

export default Skills
