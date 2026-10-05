import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section><div className="wrap">
      <div className="head rv"><h2>Nos accompagnements</h2><p>Exemples à remplacer par des références validées et autorisées.</p></div>
      <div className="proj rv">
        {projects.map((p) => (
          <div className="pj" key={p.title}><small>{p.tag}</small><h3>{p.title}</h3><p>{p.text}</p></div>
        ))}
      </div>
    </div></section>
  )
}
