import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { services } from '../data/services'
import { company } from '../config/company'

export default function Service() {
  const { slug } = useParams()
  const s = services.find((x) => x.slug === slug)
  useEffect(() => {
    if (s) document.title = `${s.title} | NF Consulting`
    window.scrollTo(0, 0)
  }, [s])
  if (!s) return <Navigate to="/" replace />
  const others = services.filter((x) => x.slug !== s.slug)
  return (
    <main className="legal sp"><div className="wrap">
      <Link to="/#expertises" className="back">← Toutes nos expertises</Link>
      <span className="label">Expertise {s.n}</span>
      <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', margin: '12px 0 0' }}>{s.title}</h1>
      <span className="rule" />
      <div className={`sgrid ${s.images.length === 0 ? "one" : ""}`}>
        <div>
          <p className="lead">{s.intro}</p>
          <h2 style={{ fontSize: 24, margin: '32px 0 8px' }}>Nos prestations comprennent</h2>
          <ul className="checks">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
          {s.closing && <p>{s.closing}</p>}
          <div className="cta">
            <a className="btn btn-navy" href={company.phoneHref}>Appeler le {company.phoneLabel}</a>
            <Link className="btn btn-line" to="/#contact">Nous contacter</Link>
          </div>
        </div>
        <div className="simgs" hidden={s.images.length === 0}>{s.images.map((im) => <img key={im.src} src={im.src} alt={im.alt} loading="lazy" />)}</div>
      </div>
      <h2 style={{ fontSize: 24, margin: '64px 0 16px' }}>Nos autres expertises</h2>
      <div className="oth">{others.map((o) => <Link key={o.slug} className="ci" to={`/expertises/${o.slug}`}><b>{o.n}</b><span style={{ fontSize: 18 }}>{o.title}</span></Link>)}</div>
    </div></main>
  )
}
