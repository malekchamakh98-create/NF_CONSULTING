import { Link } from 'react-router-dom'
import { company } from '../../config/company'

export default function Footer() {
  return (
    <footer><div className="wrap">
      <div className="cols">
        <div><h4>NF Consulting</h4><p>Conseil et externalisation des fonctions financières, administratives et RH pour les entreprises.</p></div>
        <div><h4>Navigation</h4><ul>
          <li><a href="/#top">Accueil</a></li><li><a href="/#apropos">À propos</a></li><li><a href="/#expertises">Expertises</a></li>
          <li><a href="/#approche">Notre approche</a></li><li><a href="/#contact">Contact</a></li></ul></div>
        <div><h4>Expertises</h4><ul><li>Finance</li><li>Administratif</li><li>Recouvrement</li><li>RH</li><li>Comptabilité</li></ul></div>
        <div><h4>Contact</h4><ul>
          <li><a href={company.phoneHref}>{company.phoneLabel}</a></li><li>{company.address}</li></ul></div>
      </div>
      <div className="bot">
        <span>© {new Date().getFullYear()} NF Consulting</span>
        <span><Link to="/mentions-legales">Mentions légales</Link> · <Link to="/confidentialite">Politique de confidentialité</Link></span>
      </div>
    </div></footer>
  )
}
