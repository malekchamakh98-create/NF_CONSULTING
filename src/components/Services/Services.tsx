import { services } from '../../data/services'

export default function Services() {
  return (
    <section id="expertises"><div className="wrap">
      <div className="head rv"><h2>Nos expertises</h2><p>Des solutions adaptées aux besoins réels de votre entreprise.</p></div>
      <div className="svc">
        {services.map((s) => (
          <a key={s.n} className={`card rv ${s.dark ? 'fr' : ''}`} href="/#contact">
            <span className="n">{s.n}</span>
            <h3>{s.title}</h3>
            <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            <span className="more">Découvrir <span>↗</span></span>
          </a>
        ))}
      </div>
    </div></section>
  )
}
