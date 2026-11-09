import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import './Navbar.css'

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Services', '#services'],
  ['Contact', '#contact'],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="MyPortfolio home">
          <span className="brand__symbol">M<span>.</span></span>
          <span className="brand__name">MYPORTFOLIO</span>
        </a>
        <button
          className="navbar__toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div className={`navbar__links${menuOpen ? ' is-open' : ''}`} id="primary-navigation">
          {links.map(([label, target], index) => (
            <a key={target} className={index === 0 ? 'navbar__link navbar__link--home' : 'navbar__link'} href={target} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="navbar__cta" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
