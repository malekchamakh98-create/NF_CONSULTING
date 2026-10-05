// Ajouter uniquement de vrais témoignages autorisés. Tant que la liste est vide, la section est masquée.
export type Testimonial = { quote: string; author: string; role: string }
export const testimonials: Testimonial[] = []
