import { useEffect } from 'react'
import { company } from '../config/company'

export default function Legal() {
  useEffect(() => { document.title = 'Mentions légales | NF Consulting'; window.scrollTo(0, 0) }, [])
  return (
    <main className="legal"><div className="wrap prose">
      <h1 style={{ fontSize: 40 }}>Mentions légales</h1>
      <h2>Éditeur du site</h2>
      <p>{company.legalName} (nom commercial : {company.name})<br />{company.address}<br />Téléphone / Fax : {company.phoneLabel}<br />Email : {company.email}</p>
      <h2>Hébergement</h2>
      <p>Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>
      <h2>Propriété intellectuelle</h2>
      <p>Les textes, visuels et éléments graphiques de ce site sont la propriété de {company.legalName} ou utilisés avec l'autorisation de leurs titulaires. Toute reproduction sans accord préalable est interdite.</p>
      <h2>Responsabilité</h2>
      <p>Les informations présentées ont une valeur informative et ne constituent pas un engagement contractuel. Pour toute demande précise, contactez-nous par téléphone ou par email.</p>
    </div></main>
  )
}
