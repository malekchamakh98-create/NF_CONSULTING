import finance from '../assets/finance.webp'
import financeCash from '../assets/finance-cash.webp'
import admin from '../assets/admin.webp'
import recovery from '../assets/recovery.webp'
import hr from '../assets/hr.webp'

export type Service = {
  slug: string; n: string; title: string; short: string; intro: string
  items: string[]; images: { src: string; alt: string }[]; closing?: string
}

// Contenu issu de la présentation « N F Facility Management & Consulting ».
export const services: Service[] = [
  {
    slug: 'finance', n: '01', title: 'Finance & DAF externalisé',
    short: 'Trésorerie, budgets, rapports financiers et solutions de financement.',
    intro: "Nos services financiers visent à optimiser la gestion financière de votre entreprise : optimisation de la trésorerie et des budgets, élaboration de rapports financiers précis et gestion des déclarations fiscales et sociales.",
    items: [
      'Recherche de partenaires financiers pour vos investissements et le financement de trésorerie',
      'Élaboration et suivi de la trésorerie et des budgets',
      'Rapports financiers clairs et détaillés',
      'Planification des déclarations fiscales et sociales',
      'Mise en place de solutions de financement sur mesure',
    ],
    images: [{ src: finance, alt: 'Illustration : analyse financière et tableaux de bord' }, { src: financeCash, alt: 'Billets et pièces en euros' }],
    closing: 'Nous recherchons et mettons en place les solutions adaptées à vos besoins : financement bancaire, leasing, subvention ou autres dispositifs financiers.',
  },
  {
    slug: 'administratif', n: '02', title: 'Gestion administrative',
    short: 'Formalités, relations avec les institutions, procédures et documentation.',
    intro: "NF Consulting prend en charge l'ensemble de vos formalités administratives : coordination avec les administrations, gestion des correspondances et organisation des tâches, pour vous permettre de vous concentrer sur l'essentiel.",
    items: [
      'Création et domiciliation de sociétés pour différentes activités, avec accompagnement personnalisé sur les avantages fiscaux et financiers',
      'Relations et suivi auprès des institutions (fiscalité, CNSS, API, APIA, CEPEX, etc.)',
      'Gestion de la correspondance',
      'Mise en place de procédures, gestion documentaire et assistance administrative quotidienne',
    ],
    images: [{ src: admin, alt: 'Touche « Démarche administrative » sur un clavier' }],
  },
  {
    slug: 'recouvrement', n: '03', title: 'Recouvrement',
    short: 'Suivi des règlements, relances, plans de paiement et reporting.',
    intro: "NF Consulting vous accompagne dans la récupération de vos paiements en attente, avec professionnalisme et conformité, afin de renforcer la stabilité financière de votre entreprise.",
    items: [
      'Suivi rigoureux des paiements clients',
      'Évaluation de la solvabilité des clients avant toute relation commerciale',
      'Relances personnalisées et adaptées à chaque situation',
      'Élaboration de plans de paiement sur mesure',
      'Coordination étroite avec votre service comptabilité',
      'Édition de rapports de suivi clairs et réguliers',
      'Collaboration avec un cabinet d’avocats partenaire, spécialisé en recouvrement de créances litigieuses',
    ],
    images: [{ src: recovery, alt: 'Un aimant attirant des billets : récupération de paiements' }],
  },
  {
    slug: 'ressources-humaines', n: '04', title: 'Ressources humaines',
    short: 'Recrutement, paie, déclarations sociales, procédures et présences.',
    intro: "NF Consulting prend en charge l'ensemble des procédures liées au recrutement des profils nécessaires, ainsi que la gestion du personnel existant, des déclarations sociales, la préparation des paies et des fiches de paie.",
    items: [
      'Gestion du recrutement et recherche de profils sur le marché',
      'Gestion des objectifs par employé (KPM) et préparation des barèmes de rémunération selon la convention en vigueur et les objectifs',
      'Préparation des paies et des fiches de paie',
      'Élaboration des manuels de procédures et des fiches de poste par poste',
      'Déclaration sociale et affiliation',
      'Audit social',
      'Gestion des présences',
    ],
    images: [{ src: hr, alt: 'Main portant un réseau de personnes : ressources humaines' }],
  },
  {
    slug: 'comptabilite-france-belgique', n: '05', title: 'Comptabilité France & Belgique',
    short: 'Externalisation de votre comptabilité pour vos activités en France et en Belgique.',
    intro: "NF Consulting prend en charge l'externalisation de votre comptabilité pour vos activités en France et en Belgique, en coordination étroite avec votre direction et vos autres services, pour des chiffres fiables et des obligations maîtrisées.",
    items: [
      'Tenue et suivi de la comptabilité (saisie, rapprochements, justificatifs)',
      'Préparation des déclarations fiscales et sociales',
      'Établissement des situations périodiques et rapports financiers clairs',
      'Suivi des échéances et des obligations propres à chaque pays',
      'Coordination avec votre service comptabilité, vos banques et vos interlocuteurs',
    ],
    images: [],
    closing: "Le périmètre exact de la mission (types d'entreprises, volumes, obligations) est défini avec vous lors d'un premier échange.",
  },
]
