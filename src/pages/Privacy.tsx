import { useEffect } from 'react'
export default function Privacy() {
  useEffect(() => { document.title = 'Politique de confidentialité | NF Consulting'; window.scrollTo(0, 0) }, [])
  return (
    <main className="legal"><div className="wrap">
      <h1 style={{ fontSize: 40 }}>Politique de confidentialité</h1>
      <p>TODO — À CONFIRMER : le texte des politique de confidentialité doit être fourni et validé avant publication.</p>
    </div></main>
  )
}
