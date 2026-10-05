const steps = [
  ['01', 'Écouter', 'Comprendre vos enjeux.'],
  ['02', 'Analyser', 'Identifier les problématiques et opportunités.'],
  ['03', 'Proposer', 'Construire une solution adaptée.'],
  ['04', 'Mettre en place', 'Déployer les actions nécessaires.'],
  ['05', 'Accompagner', 'Suivre les résultats et faire évoluer la solution.'],
]

export default function Approach() {
  return (
    <section id="approche"><div className="wrap">
      <div className="head rv"><h2>Une méthode simple, structurée et orientée résultats.</h2></div>
      <div className="steps rv">
        {steps.map(([n, t, d]) => (
          <div className="step" key={n}><i>{n}</i><h3>{t}</h3><p>{d}</p></div>
        ))}
      </div>
    </div></section>
  )
}
