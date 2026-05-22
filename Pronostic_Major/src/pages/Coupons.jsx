import { useState, useMemo } from 'react'
import { Search, TrendingUp, Filter } from 'lucide-react'
import CouponCard from '../components/CouponCard'
import { coupons } from '../data/coupons'

const sportFilters = [
  { key: 'all',        label: '🔥 Tous' },
  { key: 'Football',   label: '⚽ Football' },
  { key: 'Basketball', label: '🏀 Basketball' },
  { key: 'Tennis',     label: '🎾 Tennis' },
  { key: 'Virtuel',    label: '🎮 Virtuel' },
  { key: 'Casino',     label: '🎰 Casino' },
]

const statusFilters = [
  { key: 'all',     label: 'Tous les statuts' },
  { key: 'won',     label: '✅ Gagnés' },
  { key: 'pending', label: '🔄 En cours' },
  { key: 'lost',    label: '❌ Perdus' },
]

export default function Coupons() {
  const [sport, setSport]   = useState('all')
  const [status, setStatus] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return coupons.filter(c => {
      if (sport  !== 'all' && c.sport  !== sport)  return false
      if (status !== 'all' && c.status !== status) return false
      if (q) {
        const matchText    = c.match.toLowerCase().includes(q)
        const pronosticText = c.pronostic.toLowerCase().includes(q)
        if (!matchText && !pronosticText) return false
      }
      return true
    })
  }, [sport, status, search])

  const won  = coupons.filter(c => c.status === 'won').length
  const rate = Math.round((won / coupons.length) * 100)

  return (
    <main className="pt-16 min-h-screen" style={{ background: '#05050f' }}>
      {/* Header */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #05050f 0%, #0a0a2e 60%, #05050f 100%)', borderBottom: '1px solid #1A2A5E' }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 inline-flex">
            <TrendingUp size={12} /> Pronostics Sportifs
          </span>
          <h1
            className="text-4xl md:text-5xl font-black text-white uppercase mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em' }}
          >
            Nos Coupons
          </h1>
          <p className="text-base" style={{ color: '#A0C4FF' }}>
            {coupons.length} coupons postés — {rate}% de taux de réussite global
          </p>

          {/* Stats rapides */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { label: 'Gagnés',    value: coupons.filter(c => c.status === 'won').length,     color: '#00C853' },
              { label: 'En cours',  value: coupons.filter(c => c.status === 'pending').length, color: '#FF9800' },
              { label: 'Perdus',    value: coupons.filter(c => c.status === 'lost').length,    color: '#FF3355' },
            ].map(s => (
              <div
                key={s.label}
                className="px-5 py-3 rounded-xl text-center"
                style={{ background: 'rgba(13,13,31,0.8)', border: `1px solid ${s.color}33` }}
              >
                <div className="text-2xl font-black" style={{ color: s.color, fontFamily: "'Poppins', sans-serif" }}>
                  {s.value}
                </div>
                <div className="text-xs" style={{ color: '#A0C4FF' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="py-8 px-4" style={{ background: '#0d0d1f', borderBottom: '1px solid #1A2A5E' }}>
        <div className="max-w-7xl mx-auto space-y-3">
          {/* Filtre sport */}
          <div className="flex flex-wrap gap-2 justify-center">
            {sportFilters.map(f => (
              <button
                key={f.key}
                className={`filter-btn${sport === f.key ? ' active' : ''}`}
                onClick={() => setSport(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Statut + recherche */}
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {statusFilters.map(f => (
              <button
                key={f.key}
                className={`filter-btn${status === f.key ? ' active' : ''}`}
                style={{ fontSize: '0.75rem', padding: '6px 14px' }}
                onClick={() => setStatus(f.key)}
              >
                {f.label}
              </button>
            ))}
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: '#A0C4FF' }} />
              <input
                type="text"
                placeholder="Rechercher un match..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="input-field"
                style={{ paddingLeft: '34px', width: '220px', padding: '8px 12px 8px 34px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grille coupons */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6" style={{ color: '#A0C4FF' }}>
            <Filter size={14} />
            <span className="text-sm">
              {filtered.length} coupon{filtered.length !== 1 ? 's' : ''} affiché{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map(c => <CouponCard key={c.id} coupon={c} />)}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Aucun coupon trouvé
              </h3>
              <p style={{ color: '#A0C4FF' }}>Modifiez vos filtres pour voir plus de résultats</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
