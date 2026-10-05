import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  if (testimonials.length === 0) return null
  return (
    <section className="why"><div className="wrap">
      <div className="head rv"><h2>Ils nous font confiance</h2></div>
      <div className="proj rv">
        {testimonials.map((t) => (
          <figure className="ci" key={t.author} style={{ margin: 0 }}>
            <blockquote style={{ margin: 0 }}>{t.quote}</blockquote>
            <figcaption><b>{t.author}</b> {t.role}</figcaption>
          </figure>
        ))}
      </div>
    </div></section>
  )
}
