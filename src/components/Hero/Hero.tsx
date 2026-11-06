export default function Hero() {
  return (
    <div className="hero"><div className="wrap grid">
      <div>
        <span className="badge">FACILITY MANAGEMENT &amp; CONSULTING</span>
        <h1>Votre partenaire en gestion <em>financière et administrative</em>.</h1>
        <p className="d">Externalisation DAF : réduisez vos coûts, boostez vos performances. NF Consulting accompagne les PME dans l'optimisation de leurs fonctions financières, administratives et RH.</p>
        <div className="cta">
          <a className="btn btn-gold" href="/#contact">Parler à un consultant →</a>
          <a className="btn btn-ghost" href="/#expertises">Découvrir nos expertises</a>
        </div>
      </div>
      <div className="vis" aria-hidden="true">
        <div className="panel">
          <svg viewBox="0 0 400 200" preserveAspectRatio="none">
            <path d="M0 170 C60 150 90 110 150 120 S250 60 310 70 S380 30 400 20 V200 H0Z" fill="rgba(201,169,110,.18)" />
            <path d="M0 170 C60 150 90 110 150 120 S250 60 310 70 S380 30 400 20" fill="none" stroke="#C9A96E" strokeWidth="3" />
          </svg>
        </div>
        <div className="fc a"><small>Cash Flow</small><b>+18.4%</b></div>
        <div className="fc b"><small>Budget</small><b>94%</b></div>
        <div className="fc c"><small>Performance</small><b>Optimisée</b></div>
        <span className="note">Illustration</span>
      </div>
    </div></div>
  )
}
