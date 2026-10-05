import { company, todo } from '../../config/company'

export default function Contact() {
  return (
    <section className="contact" id="contact"><div className="wrap">
      <div className="head rv"><h2>Parlons de votre projet.</h2><p>Appelez-nous ou passez nous voir : nous vous répondons avec plaisir.</p></div>
      <div className="cc rv">
        <a className="ci" href={company.phoneHref}><b>Téléphone / Fax</b><span>{company.phoneLabel}</span><em>Appeler →</em></a>
        <a className="ci" href={company.mapUrl} target="_blank" rel="noopener noreferrer"><b>Adresse</b><span>{company.address}</span><em>Voir sur la carte ↗</em></a>
        <div className="ci"><b>Email</b><span>{company.email || todo}</span></div>
        <div className="ci"><b>Horaires</b><span>{company.hours || todo}</span></div>
      </div>
    </div></section>
  )
}
