import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { company } from '../../config/company'
import { services } from '../../data/services'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('keydown', esc) }
  }, [])

  const close = () => setOpen(false)
  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="wrap bar">
          <a className="logo" href="/#top" aria-label="NF Consulting, accueil">
            <b>NF<i>.</i> Consulting</b><small>{company.baseline}</small>
          </a>
          <nav aria-label="Navigation principale">
            <ul>
              <li><a href="/#top">Accueil</a></li>
              <li><a href="/#apropos">À propos</a></li>
              <li className="has-dd">
                <button className="dd" aria-haspopup="true">Expertises ▾</button>
                <ul className="menu">
                  {services.map((s) => <li key={s.slug}><Link to={`/expertises/${s.slug}`}>{s.title}</Link></li>)}
                </ul>
              </li>
              <li><a href="/#approche">Notre approche</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </nav>
          <a className="btn btn-gold hd-cta" href="/#contact">Parler à un consultant <span aria-hidden="true">→</span></a>
          <button className="burger" aria-label="Ouvrir le menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <span /><span />
          </button>
        </div>
      </header>
      <div className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button className="x" aria-label="Fermer le menu" onClick={close}>×</button>
        <a className="l" href="/#top" onClick={close}>Accueil</a>
        <a className="l" href="/#apropos" onClick={close}>À propos</a>
        <a className="l" href="/#expertises" onClick={close}>Expertises</a>
        <a className="l" href="/#approche" onClick={close}>Notre approche</a>
        <a className="l" href="/#contact" onClick={close}>Contact</a>
        <a className="btn btn-gold" href={company.phoneHref} onClick={close}>Appeler le {company.phoneLabel}</a>
      </div>
    </>
  )
}
