import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, LayoutPanelTop, RefreshCw, Smartphone } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import './Services.css'

const services = [
  { icon: Code2, number: '01', title: 'Frontend development', text: 'Fast, accessible, carefully built interfaces that make the most of modern web technology.', detail: 'REACT · JAVASCRIPT · CSS' },
  { icon: Smartphone, number: '02', title: 'Responsive web design', text: 'Flexible experiences that feel natural on every screen, from the first sketch to the final breakpoint.', detail: 'MOBILE · TABLET · DESKTOP' },
  { icon: LayoutPanelTop, number: '03', title: 'UI / UX design', text: 'Clear, human-centered flows and visual systems that help people get where they need to go.', detail: 'WIREFRAMES · PROTOTYPES · UI' },
  { icon: RefreshCw, number: '04', title: 'Website redesign', text: 'A fresh perspective for existing sites, with better usability, sharper visuals, and a solid foundation.', detail: 'AUDIT · REFRESH · REBUILD' },
]

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="shell">
        <SectionTitle eyebrow="WHAT I CAN DO" number="04 / 06" title="Good ideas deserve" highlight="great execution." description="From a first sketch to a polished launch, here’s where I can help." />
        <div className="services-grid">
          {services.map(({ icon: Icon, number, title, text, detail }, index) => (
            <motion.article className="service-card" key={number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: index * 0.07 }}>
              <div className="service-card__top"><span>{number} / SERVICE</span><Icon size={19} strokeWidth={1.5} /></div>
              <h3>{title}</h3><p>{text}</p>
              <div className="service-card__bottom"><span>{detail}</span><a href="#contact" aria-label={`Discuss ${title}`}><ArrowUpRight size={15} /></a></div>
            </motion.article>
          ))}
        </div>
        <div className="services-note"><span className="services-note__symbol">↳</span><span>Not sure what you need yet? That&apos;s a good place to start.</span><a href="#contact">Let&apos;s figure it out <ArrowUpRight size={14} /></a></div>
      </div>
    </section>
  )
}

export default Services
