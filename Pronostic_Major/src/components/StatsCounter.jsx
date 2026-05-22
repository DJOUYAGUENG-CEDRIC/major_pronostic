import { useEffect, useRef, useState } from 'react'

export default function StatsCounter({ value, suffix = '', label, duration = 2000, icon }) {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          setVisible(true)
          animated.current = true
        }
      },
      { threshold: 0.4 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const start = Date.now()
    const id = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setCount(Math.floor(eased * value))
      if (progress >= 1) { setCount(value); clearInterval(id) }
    }, 16)
    return () => clearInterval(id)
  }, [visible, value, duration])

  return (
    <div ref={ref} className="text-center">
      {icon && <div className="text-3xl mb-2">{icon}</div>}
      <div
        className="text-4xl md:text-5xl font-black mb-1"
        style={{
          background: 'linear-gradient(135deg, #1A6EFF, #00CFFF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {count}{suffix}
      </div>
      <div
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ color: '#A0C4FF', fontFamily: "'Inter', sans-serif" }}
      >
        {label}
      </div>
    </div>
  )
}
