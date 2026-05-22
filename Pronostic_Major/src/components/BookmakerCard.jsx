import { useState } from 'react'
import { Star, Copy, Check, Lock } from 'lucide-react'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={12}
          fill={i <= Math.round(rating) ? '#FFD700' : 'none'}
          stroke={i <= Math.round(rating) ? '#FFD700' : '#3A4A6B'}
        />
      ))}
      <span className="text-xs ml-1 font-bold" style={{ color: '#FFD700' }}>
        {rating.toFixed(1)}
      </span>
    </div>
  )
}

function BookmakerLogo({ bk }) {
  const [imgError, setImgError] = useState(false)
  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden shrink-0"
      style={{
        background: `linear-gradient(135deg, ${bk.bgColor} 0%, ${bk.bgColor}99 100%)`,
        boxShadow: `0 0 16px ${bk.bgColor}50`,
        border: '1px solid rgba(255,255,255,0.15)',
      }}
    >
      {bk.logo && !imgError ? (
        <img
          src={bk.logo}
          alt={bk.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-contain p-1"
        />
      ) : (
        <span
          className="font-black text-base text-white"
          style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.02em' }}
        >
          {bk.initials}
        </span>
      )}
    </div>
  )
}

export default function BookmakerCard({ bk }) {
  const [copied, setCopied] = useState(false)
  const [toast, setToast] = useState(false)
  const hasLink = bk.affiliateUrl && bk.affiliateUrl !== '#'

  const copyCode = () => {
    navigator.clipboard.writeText(bk.promoCode).then(() => {
      setCopied(true)
      setToast(true)
      setTimeout(() => { setCopied(false); setToast(false) }, 2500)
    })
  }

  return (
    <>
      <div
        className="relative overflow-hidden flex flex-col rounded-2xl transition-all duration-300 hover:-translate-y-1"
        style={{
          background: '#0d0d1f',
          border: `1px solid ${bk.featured ? 'rgba(255,215,0,0.25)' : 'rgba(26,110,255,0.15)'}`,
          boxShadow: bk.featured ? '0 0 24px rgba(255,215,0,0.06)' : '0 4px 24px rgba(0,0,0,0.3)',
        }}
      >
        {/* ── HEADER ── */}
        <div className="flex items-center gap-4 p-5 pb-4">
          {/* Logo */}
          <BookmakerLogo bk={bk} />

          {/* Name + Stars */}
          <div className="flex-1 min-w-0">
            <div
              className="font-black text-white text-sm leading-tight mb-1"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {bk.name}
            </div>
            <StarRating rating={bk.rating} />
          </div>

          {/* Vedette badge */}
          {bk.featured && (
            <span
              className="shrink-0 text-xs font-bold px-2 py-0.5 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                color: '#05050f',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.6rem',
                letterSpacing: '0.06em',
              }}
            >
              ★ TOP
            </span>
          )}
        </div>

        {/* ── BONUS BADGE ── */}
        <div className="px-5 pb-4">
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-xl"
            style={{
              background: 'rgba(0,200,83,0.08)',
              border: '1px solid rgba(0,200,83,0.22)',
            }}
          >
            <span className="text-sm">🔥</span>
            <span
              className="text-xs font-bold leading-snug"
              style={{ color: '#00C853', fontFamily: "'Poppins', sans-serif" }}
            >
              {bk.bonus}
            </span>
          </div>
        </div>

        {/* ── DESCRIPTION ── */}
        <p
          className="text-xs italic px-5 pb-5 leading-relaxed"
          style={{ color: 'rgba(160,196,255,0.55)' }}
        >
          {bk.description}
        </p>

        {/* ── DIVIDER ── */}
        <div style={{ height: '1px', background: 'rgba(26,110,255,0.1)', margin: '0 20px' }} />

        {/* ── FOOTER ── */}
        <div className="flex flex-col gap-4 p-5">
          {/* Promo code */}
          <button
            onClick={copyCode}
            className="w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl transition-opacity hover:opacity-80"
            style={{
              background: 'rgba(5,5,15,0.9)',
              border: '1px solid rgba(26,110,255,0.2)',
            }}
          >
            <div className="flex items-center gap-2 min-w-0">
              <span
                className="text-xs font-semibold uppercase tracking-widest shrink-0"
                style={{ color: 'rgba(160,196,255,0.45)', letterSpacing: '0.1em' }}
              >
                Code promo :
              </span>
              <span
                className="font-black text-sm tracking-widest"
                style={{ color: bk.bgColor, fontFamily: "'Poppins', sans-serif" }}
              >
                {bk.promoCode}
              </span>
            </div>
            {copied
              ? <Check size={14} color="#00C853" className="shrink-0" />
              : <Copy size={13} style={{ color: 'rgba(160,196,255,0.4)', flexShrink: 0 }} />
            }
          </button>

          {/* CTA */}
          {hasLink ? (
            <a
              href={bk.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center font-bold text-sm text-white rounded-xl transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                padding: '12px',
                background: `linear-gradient(135deg, ${bk.bgColor} 0%, ${bk.bgColor}bb 100%)`,
                boxShadow: `0 4px 16px ${bk.bgColor}35`,
                fontFamily: "'Poppins', sans-serif",
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              S'inscrire sur {bk.name} →
            </a>
          ) : (
            <button
              disabled
              className="w-full flex items-center justify-center gap-2 rounded-xl text-xs font-semibold"
              style={{
                padding: '12px',
                background: 'rgba(26,110,255,0.05)',
                border: '1px solid rgba(26,110,255,0.12)',
                color: 'rgba(160,196,255,0.35)',
                cursor: 'not-allowed',
              }}
            >
              <Lock size={11} />
              Lien bientôt disponible
            </button>
          )}
        </div>
      </div>

      {toast && (
        <div className="toast">
          <Check size={16} color="#00C853" />
          Code <strong>{bk.promoCode}</strong> copié !
        </div>
      )}
    </>
  )
}
