import { useState } from 'react'

export default function Newsletter() {
  const [done, setDone] = useState(false)
  return (
    <div className="news"><div className="wrap in">
      <h2 style={{ fontSize: 26 }}>Recevez nos actualités et conseils.</h2>
      <form onSubmit={(e) => { e.preventDefault(); setDone(true) /* TODO : brancher un service d'envoi */ }}>
        <label htmlFor="ne" style={{ position: 'absolute', left: -9999 }}>Votre adresse email</label>
        <input id="ne" type="email" placeholder="Votre adresse email" required />
        <button className="btn btn-navy" type="submit">{done ? 'Merci !' : "S'inscrire →"}</button>
      </form>
    </div></div>
  )
}
