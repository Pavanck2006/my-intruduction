import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Mail, Send } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import SocialIcon from '../components/SocialIcon'
import { socialProfiles } from '../components/socialProfiles'
import './Contact.css'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="shell">
        <SectionTitle eyebrow="YOUR TURN" number="05 / 06" title="Have something" highlight="in mind?" description="A good project starts with a good conversation. Tell me what you’re thinking." />
        <div className="contact-grid">
          <motion.div className="contact-aside" initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
            <span className="contact-aside__label">LET&apos;S MAKE IT HAPPEN</span>
            <h3>Big idea or<br />small question<span>?</span></h3>
            <p>I&apos;m always happy to hear about interesting people and thoughtful projects. My inbox is open.</p>
            <a className="contact-email" href="mailto:hello@example.com"><span><Mail size={17} /></span> hello@example.com <ArrowUpRight size={15} /></a>
            <div className="contact-socials">
              <span>ELSEWHERE</span>
              {[socialProfiles.linkedin, socialProfiles.github].map(({ label, href }) => (
                <a
                  href={href}
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${label} profile in a new tab`}
                  title={label}
                >
                  <SocialIcon network={label.toLowerCase()} size={17} />
                </a>
              ))}
            </div>
            <div className="contact-aside__decoration">✳</div>
            <div className="contact-aside__foot"><span>THANK YOU FOR STOPPING BY</span><span className="status-dot" /></div>
          </motion.div>
          <motion.form className="contact-form" onSubmit={handleSubmit} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: 0.1}}>
            <div className="contact-form__top"><span>01 — SEND A NOTE</span><span>ALL FIELDS REQUIRED</span></div>
            <label htmlFor="contact-name">Your name<input id="contact-name" name="name" type="text" placeholder="How should I address you?" autoComplete="name" required /></label>
            <label htmlFor="contact-email">Email address<input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label>
            <label htmlFor="contact-subject">What&apos;s this about?<input id="contact-subject" name="subject" type="text" placeholder="A project, an idea, a hello..." required /></label>
            <label htmlFor="contact-message">A little more detail<textarea id="contact-message" name="message" rows="4" placeholder="Tell me what you have in mind..." required /></label>
            <button className="contact-submit" type="submit"><span>Send your message</span><Send size={16} /></button>
            {submitted && <p className="contact-success" role="status"><Check size={16} /> Thanks for reaching out! This demo form is frontend-only; no message was sent.</p>}
            <p className="contact-form__privacy">DEMO FORM · YOUR DETAILS STAY IN THIS BROWSER</p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
