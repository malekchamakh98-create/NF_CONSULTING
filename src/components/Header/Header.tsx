import { useEffect, useState } from 'react'
import { company } from '../../config/company'

const links = [
  ['Accueil', '/#top'], ['À propos', '/#apropos'], ['Notre approche', '/#approche'], ['Contact', '/#contact'],
]
const expertises = ['Finance & DAF', 'Gestion administrative', 'Recouvrement', 'Ressources humaines', 'Comptabilité France & Belgique']

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
                  {expertises.map((e) => <li key={e}><a href="/#expertises">{e}</a></li>)}
                </ul>
              </li>
              {links.slice(2).map(([l, h]) => <li key={l}><a href={h}>{l}</a></li>)}
            </ul>
          </nav>
          <a className="btn btn-gold hd-cta" href="/#contact">Parler à un consultant <span aria-hidden="true">→</span></a>
          <button className="burger" aria-label="Ouvrir le menu" aria-expanded={open} onClick={() => setOpen(true)}>
            <span /><span />
          </button>
        </div>
      </header>
      <div className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <button className="x" aria-label="Fermer le menu" onClick={() => setOpen(false)}>×</button>
        {[...links.slice(0, 2), ['Expertises', '/#expertises'], ...links.slice(2)].map(([l, h]) => (
          <a key={l} className="l" href={h} onClick={() => setOpen(false)}>{l}</a>
        ))}
        <a className="btn btn-gold" href="/#contact" onClick={() => setOpen(false)}>Parler à un consultant →</a>
      </div>
    </>
  )
}
