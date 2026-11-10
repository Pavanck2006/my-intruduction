import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Download, Image } from 'lucide-react'
import Button from '../components/Button'
import SocialIcon from '../components/SocialIcon'
import { socialProfiles } from '../components/socialProfiles'
import './Home.css'

const titles = ['Full Stack Developer', 'Web Developer']

function Home() {
  const [photoAvailable, setPhotoAvailable] = useState(true)
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="home-section" id="home">
      <div className="home-glow home-glow--one" />
      <div className="home-glow home-glow--two" />
      <div className="home-grid shell">
        <motion.div
          className="home-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="home-greeting">HELLO, I&apos;M</p>
          <h1>Pavan C K<span className="home-period">.</span></h1>
          <div className="home-role-wrapper">
            <AnimatePresence mode="wait">
              <motion.p
                className="home-role"
                key={titles[titleIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {titles[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <p className="home-intro">
            I build thoughtful, responsive web experiences with React, JavaScript,
            and modern CSS. I love turning ideas into clear, accessible interfaces
            and sweating the small details that make the web feel great.
          </p>
          <div className="home-actions">
            <Button href="#projects">Explore My Work</Button>
            <Button
              href="/resume.pdf"
              variant="text"
              icon={Download}
              download="Pavan-CK-Resume.pdf"
            >
              Download Resume
            </Button>
            <div className="home-profile-links" aria-label="Social profiles">
              {[socialProfiles.linkedin, socialProfiles.github].map(({ label, href }) => (
                <a
                  className="home-profile-link"
                  href={href}
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${label} profile in a new tab`}
                >
                  <SocialIcon network={label.toLowerCase()} size={17} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="home-art"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="home-photo-frame">
            {photoAvailable ? (
              <img
                className="home-photo"
                src="/profile.jpg"
                alt="Portrait of Pavan C K"
                onError={() => setPhotoAvailable(false)}
              />
            ) : (
              <div className="home-photo-placeholder" role="img" aria-label="Add your profile photograph to public/profile.jpg">
                <Image size={34} strokeWidth={1.2} aria-hidden="true" />
                <span>YOUR PHOTO GOES HERE</span>
                <small>Add <code>public/profile.jpg</code></small>
              </div>
            )}
            <span className="home-photo-index">PROFILE <span>01 / 01</span></span>
            <span className="home-photo-caption">FULL STACK DEVELOPER <i>✳</i> CREATIVE BUILDER</span>
          </div>
          <div className="home-photo-note"><span className="home-photo-note__dot" /> PROFILE PHOTO</div>
          <div className="home-photo-coordinate">DESIGN <span>✳</span> DEVELOP <span>✳</span> REFINE</div>
        </motion.div>
      </div>
      <a className="home-scroll" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
    </section>
  )
}

export default Home
