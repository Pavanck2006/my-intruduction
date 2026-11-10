import { ArrowUpRight, ArrowUp, Mail } from 'lucide-react'
import SocialIcon from './SocialIcon'
import { socialProfiles } from './socialProfiles'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main shell">
        <a className="brand" href="#home" aria-label="MyPortfolio, back to home">
          <span className="brand__symbol">M<span>.</span></span>
          <span className="brand__name">MYPORTFOLIO</span>
        </a>
        <p>Thoughtful interfaces, made for the real world.</p>
        <div className="footer__links">
          <a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </div>
        <div className="footer__socials" aria-label="Social profiles">
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
          <a href="mailto:hello@example.com" aria-label="Email hello@example.com"><Mail size={17} /></a>
        </div>
      </div>
      <div className="footer__bottom shell">
        <span>© {new Date().getFullYear()} Pavan C K. Designed with intention.</span>
        <span className="footer__note">Full Stack Developer · web UI</span>
        <a className="footer__top" href="#home">Back to top <ArrowUp size={14} /></a>
        <span className="footer__credit">Made to make an impression <ArrowUpRight size={13} /></span>
      </div>
    </footer>
  )
}

export default Footer
