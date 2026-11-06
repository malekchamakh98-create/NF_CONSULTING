const values = ['Rigueur', 'Excellence', 'Confidentialité', 'Professionnalisme']

export default function About() {
  return (
    <section className="about" id="apropos"><div className="wrap grid">
      <div className="rv">
        <span className="label">À propos de NF Consulting</span><span className="rule" />
        <h2>Nous transformons la complexité administrative en décisions plus simples.</h2>
        <div className="vals">{values.map((v) => <span key={v}>{v}</span>)}</div>
      </div>
      <div className="rv">
        <p>Nous accompagnons les petites et moyennes entreprises dans l'optimisation de leurs départements administratifs et financiers.</p>
        <p>Nous intervenons également dans la recherche et la mise en place de solutions de financement adaptées à vos besoins : financement bancaire, leasing, subvention ou autres dispositifs financiers.</p>
        <p>Notre rôle : vous libérer des tâches administratives chronophages afin que vous puissiez vous concentrer sur vos objectifs commerciaux et stratégiques, avec rigueur, excellence et confidentialité, pour une gestion fluide, professionnelle et sécurisée.</p>
        <a className="btn btn-line" href="/#approche">Notre approche</a>
      </div>
    </div></section>
  )
}
