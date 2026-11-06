import { Link } from 'react-router-dom'
import { company } from '../../config/company'
import { services } from '../../data/services'

export default function Footer() {
  return (
    <footer><div className="wrap">
      <div className="cols">
        <div><h4>{company.name}</h4><p>{company.tagline}. Externalisation DAF : réduisez vos coûts, boostez vos performances.</p></div>
        <div><h4>Navigation</h4><ul>
          <li><a href="/#top">Accueil</a></li><li><a href="/#apropos">À propos</a></li><li><a href="/#expertises">Expertises</a></li>
          <li><a href="/#approche">Notre approche</a></li><li><a href="/#contact">Contact</a></li></ul></div>
        <div><h4>Expertises</h4><ul>
          {services.map((s) => <li key={s.slug}><Link to={`/expertises/${s.slug}`}>{s.title}</Link></li>)}</ul></div>
        <div><h4>Contact</h4><ul>
          <li><a href={company.phoneHref}>{company.phoneLabel}</a></li><li><a href={company.emailHref}>{company.email}</a></li><li>{company.address}</li></ul></div>
      </div>
      <div className="bot">
        <span>© {new Date().getFullYear()} {company.legalName}</span>
        <span><Link to="/mentions-legales">Mentions légales</Link> · <Link to="/confidentialite">Politique de confidentialité</Link></span>
      </div>
    </div></footer>
  )
}
