import { useEffect } from 'react'
import { company } from '../config/company'

export default function Privacy() {
  useEffect(() => { document.title = 'Politique de confidentialité | NF Consulting'; window.scrollTo(0, 0) }, [])
  return (
    <main className="legal"><div className="wrap prose">
      <h1 style={{ fontSize: 40 }}>Politique de confidentialité</h1>
      <h2>Données collectées</h2>
      <p>Ce site est un site de présentation : il ne comporte ni formulaire de saisie, ni compte utilisateur, ni outil de mesure d'audience, et il ne dépose pas de cookies de suivi. Nous ne collectons donc aucune donnée personnelle via ce site.</p>
      <h2>Journaux techniques</h2>
      <p>Comme tout site web, l'hébergeur peut enregistrer des données techniques de connexion (adresse IP, navigateur, date de visite) à des fins de sécurité et de bon fonctionnement.</p>
      <h2>Vous nous contactez</h2>
      <p>Si vous nous appelez, nous écrivez ou venez nous voir, les informations que vous nous communiquez sont utilisées uniquement pour répondre à votre demande, et traitées avec la confidentialité qui caractérise notre activité.</p>
      <h2>Vos droits</h2>
      <p>Pour toute question sur vos données ou pour exercer vos droits d'accès, de rectification ou de suppression, contactez {company.legalName} au {company.phoneLabel} à l'adresse {company.email} ou à l'adresse postale : {company.address}.</p>
    </div></main>
  )
}
