import { Link } from 'react-router-dom'
import { services } from '../../data/services'

export default function Services() {
  return (
    <section id="expertises"><div className="wrap">
      <div className="head rv"><h2>Nos expertises</h2><p>Des solutions adaptées aux besoins réels de votre entreprise.</p></div>
      <div className="svc">
        {services.map((s) => (
          <Link key={s.slug} className="card rv" to={`/expertises/${s.slug}`}>
            <span className="n">{s.n}</span>
            <h3>{s.title}</h3>
            <p className="sd">{s.short}</p>
            <ul>{s.items.slice(0, 3).map((i) => <li key={i}>{i.length > 70 ? i.slice(0, i.lastIndexOf(' ', 66)) + '…' : i}</li>)}</ul>
            <span className="more">Découvrir <span>↗</span></span>
          </Link>
        ))}
      </div>
    </div></section>
  )
}
