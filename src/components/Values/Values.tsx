const values = [
  ['Rigueur', 'Des procédures claires et un suivi précis de chaque dossier.'],
  ['Excellence', 'Des livrables détaillés et fiables, pensés pour la décision.'],
  ['Confidentialité', 'Une gestion sécurisée des informations sensibles de votre entreprise.'],
]

export default function Values() {
  return (
    <section className="dark"><div className="wrap">
      <h2>Nos engagements</h2>
      <p className="sub">Un partenaire de confiance, engagé à vos côtés pour soutenir votre croissance et simplifier votre quotidien.</p>
      <div className="stats rv">
        {values.map(([t, d]) => <div key={t}><b style={{ fontSize: 'clamp(28px,4vw,40px)' }}>{t}</b><span>{d}</span></div>)}
      </div>
    </div></section>
  )
}
