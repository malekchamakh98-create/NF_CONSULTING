const items = ['Financement bancaire', 'Leasing', 'Aides et subventions', 'Financement de trésorerie', 'Autres mécanismes financiers']

export default function Financing() {
  return (
    <section className="fin"><div className="wrap grid">
      <div className="rv">
        <h2>Trouver le financement adapté à votre projet.</h2>
        <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
        <a className="btn btn-navy" href="/#contact">Échanger sur votre projet →</a>
      </div>
      <div className="doc rv" aria-hidden="true">
        <span className="label">Dossier de financement</span>
        <div className="bars">{[35, 50, 42, 78, 60, 92].map((h, i) => <i key={i} style={{ height: `${h}%` }} />)}</div>
        <div className="ln" style={{ width: '90%' }} /><div className="ln" style={{ width: '70%' }} /><div className="ln" style={{ width: '80%' }} />
      </div>
    </div></section>
  )
}
