const pillars = [
  { t: 'Expertise', d: 'Une compréhension concrète des problématiques financières et administratives.', p: 'M12 3l9 5-9 5-9-5 9-5zM5 12v4c0 1.5 3.1 3 7 3s7-1.5 7-3v-4' },
  { t: 'Confidentialité', d: 'Une gestion rigoureuse des informations sensibles.', p: 'M5 11h14v9H5zM8 11V8a4 4 0 018 0v3' },
  { t: 'Sur mesure', d: 'Des solutions adaptées à chaque entreprise.', p: 'M4 7h10M18 7h2M4 17h2M10 17h10' },
  { t: 'Accompagnement', d: 'Une relation durable et un suivi régulier.', p: 'M8 12l3 3 5-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
]

export default function WhyUs() {
  return (
    <section className="why"><div className="wrap grid">
      <div className="rv"><h2>Plus qu'un prestataire, un partenaire de gestion.</h2><span className="rule" /></div>
      <div className="pil rv">
        {pillars.map((x) => (
          <div key={x.t}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d={x.p} /></svg>
            <h3>{x.t}</h3><p>{x.d}</p>
          </div>
        ))}
      </div>
    </div></section>
  )
}
