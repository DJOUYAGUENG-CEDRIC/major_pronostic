import { Calendar, Clock, TrendingUp } from 'lucide-react'

const statusConfig = {
  won:     { label: '✅ Gagné',    cls: 'badge-won' },
  pending: { label: '🔄 En cours', cls: 'badge-pending' },
  lost:    { label: '❌ Perdu',    cls: 'badge-lost' },
}

export default function CouponCard({ coupon }) {
  const status = statusConfig[coupon.status]

  const borderColor =
    coupon.status === 'won'     ? 'rgba(0,200,83,0.2)'   :
    coupon.status === 'lost'    ? 'rgba(255,51,85,0.2)'  :
                                  'rgba(26,110,255,0.2)'

  return (
    <div className="card flex flex-col gap-5 relative overflow-hidden" style={{ borderColor }}>
      {/* Sport + compétition */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">{coupon.icon}</span>
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#A0C4FF' }}>
            {coupon.sport}
          </div>
          <div className="text-xs" style={{ color: 'rgba(160,196,255,0.6)' }}>
            {coupon.competition}
          </div>
        </div>
      </div>

      {/* Match + pronostic */}
      <div>
        <h3
          className="font-bold text-white text-base leading-snug mb-1"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {coupon.match}
        </h3>
        <p className="text-sm" style={{ color: '#A0C4FF' }}>{coupon.pronostic}</p>
      </div>

      {/* Cote */}
      <div
        className="flex items-center justify-between px-4 py-3 rounded-xl"
        style={{ background: 'rgba(26,110,255,0.08)', border: '1px solid rgba(26,110,255,0.15)' }}
      >
        <div className="flex items-center gap-2" style={{ color: '#A0C4FF' }}>
          <TrendingUp size={14} />
          <span className="text-xs font-semibold uppercase tracking-wider">Cote</span>
        </div>
        <span
          className="text-2xl font-black"
          style={{
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {coupon.cote.toFixed(2)}
        </span>
      </div>

      {/* Analyse */}
      <p className="text-xs leading-relaxed italic" style={{ color: 'rgba(160,196,255,0.7)' }}>
        {coupon.analysis}
      </p>

      {/* Footer */}
      <div
        className="flex items-center justify-between mt-auto pt-2"
        style={{ borderTop: '1px solid rgba(26,110,255,0.1)' }}
      >
        <div className="flex items-center gap-3 text-xs" style={{ color: 'rgba(160,196,255,0.6)' }}>
          <span className="flex items-center gap-1">
            <Calendar size={11} /> {coupon.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} /> {coupon.time}
          </span>
        </div>
        <span className={status.cls}>{status.label}</span>
      </div>
    </div>
  )
}
