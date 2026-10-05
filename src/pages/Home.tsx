import { useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import WhyUs from '../components/WhyUs/WhyUs'
import Approach from '../components/Approach/Approach'
import Stats from '../components/Stats/Stats'
import Financing from '../components/Financing/Financing'
import Projects from '../components/Projects/Projects'
import Testimonials from '../components/Testimonials/Testimonials'
import Contact from '../components/Contact/Contact'
import Newsletter from '../components/Newsletter/Newsletter'

export default function Home() {
  useEffect(() => {
    document.title = 'NF Consulting | Gestion financière, administrative et RH'
    const els = document.querySelectorAll('.rv')
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.12 })
    els.forEach((el) => io.observe(el))
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
    return () => io.disconnect()
  }, [])
  return (
    <main id="top">
      <Hero /><About /><Services /><WhyUs /><Approach /><Stats />
      <Financing /><Projects /><Testimonials /><Contact /><Newsletter />
    </main>
  )
}
