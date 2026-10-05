import { useEffect, useRef, useState } from 'react'
import { stats } from '../../data/stats'

function Counter({ value }: { value: string }) {
  const [shown, setShown] = useState(value)
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const target = Number(value)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!/^\d+$/.test(value) || reduce || !ref.current) return
    setShown('0')
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t: number) => {
        const p = Math.min((t - t0) / 1200, 1)
        setShown(String(Math.round(target * p)))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [value])
  return <b ref={ref}>{shown}</b>
}

export default function Stats() {
  return (
    <section className="dark"><div className="wrap">
      <h2>Nos engagements en chiffres</h2>
      <p className="sub">Valeurs à renseigner dans <code>src/data/stats.ts</code> une fois les chiffres confirmés.</p>
      <div className="stats rv">
        {stats.map((s) => <div key={s.label}><Counter value={s.value} /><span>{s.label}</span></div>)}
      </div>
    </div></section>
  )
}
