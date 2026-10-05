import { useEffect } from 'react'
export default function Legal() {
  useEffect(() => { document.title = 'Mentions légales | NF Consulting'; window.scrollTo(0, 0) }, [])
  return (
    <main className="legal"><div className="wrap">
      <h1 style={{ fontSize: 40 }}>Mentions légales</h1>
      <p>TODO — À CONFIRMER : le texte des mentions légales doit être fourni et validé avant publication.</p>
    </div></main>
  )
}
