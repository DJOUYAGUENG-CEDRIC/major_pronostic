import { Link } from 'react-router-dom'
import { TrendingUp, Zap, ChevronDown } from 'lucide-react'
import StatsCounter from './StatsCounter'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden "
      style={{ background: 'linear-gradient(135deg, #0f172a 10%, #0a0a2e 50%, #0f172a 100%)' }}
    >
      {/* Particles */}
      <div className="particles-wrap">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Ambient glow orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '15%', left: '10%', width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26,110,255,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '20%', right: '10%', width: '350px', height: '350px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,207,255,0.09) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase mb-8 animate-fade-in"
          style={{
            background: 'rgba(26,110,255,0.12)',
            border: '1px solid rgba(26,110,255,0.35)',
            color: '#00CFFF',
            letterSpacing: '0.15em',
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <Zap size={12} />
          Pronostics Sportifs Premium — 85% de réussite
        </div>

        {/* Main title */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase animate-fade-in-up"
          style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em', lineHeight: '1.1' }}
        >
          <span style={{ color: '#fff' }}>GAGNEZ GROS AVEC</span>
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #1A6EFF 0%, #00CFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AVEC MAJOR PRONOSTIC
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-200"
          style={{ color: '#A0C4FF', fontFamily: "'Inter', sans-serif" }}
        >
          Rejoignez des milliers de parieurs qui font confiance à notre expertise pour des pronostics
          de qualité supérieure, des stratégies gagnantes et les meilleures offres bookmakers.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-14 animate-fade-in delay-300">
          <Link to="/coupons" className="btn-primary">
            <TrendingUp size={18} />
            Voir les Coupons VIP
          </Link>
          <Link to="/bookmakers" className="btn-secondary">
            Bookmakers Partenaires
          </Link>
        </div>

        {/* Stats bar */}
        <div
          className="grid grid-cols-3 gap-6 sm:gap-10 max-w-2xl mx-auto animate-fade-in delay-400 rounded-2xl"
          style={{
            background: 'rgba(13,13,31,0.7)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(26,110,255,0.2)',
            padding: '28px 24px',
          }}
        >
          <StatsCounter value={85} suffix="%" label="Taux de réussite" />
          <StatsCounter value={500} suffix="+" label="Coupons postés" />
          <StatsCounter value={10} suffix="k+" label="Membres actifs" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer"
        style={{ color: 'rgba(160,196,255,0.5)' }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown size={28} />
      </div>
    </section>
  )
}
