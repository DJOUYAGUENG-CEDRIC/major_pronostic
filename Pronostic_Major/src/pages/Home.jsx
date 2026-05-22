import { Link } from 'react-router-dom'
import { useState, useEffect, useRef, useCallback } from 'react'
import { TrendingUp, BookOpen, ArrowRight, Play, MessageCircle, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import StatsCounter from '../components/StatsCounter'
import BookmakerCard from '../components/BookmakerCard'
import { bookmakers, WHATSAPP_CHANNEL, WHATSAPP_INSCRIPTION_VIDEO } from '../data/bookmakers'

function SectionTitle({ label, title, subtitle, center = true }) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      <div className={`mb-3 ${center ? 'flex justify-center' : ''}`}>
        <span className="section-label">{label}</span>
      </div>
      <h2
        className="text-3xl md:text-4xl font-black uppercase mb-3"
        style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em', color: '#fff' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base max-w-xl mx-auto" style={{ color: '#A0C4FF' }}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('.reveal-init')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
  return ref
}

const CAROUSEL_GAP = 24


function CarouselCard({ bk }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
      style={{
        aspectRatio: '1 / 1',
        background: '#7dd3fc',
        border: `1px solid ${bk.featured ? 'rgba(255,215,0,0.3)' : 'rgba(26,110,255,0.15)'}`,
        boxShadow: '0 4px 24px rgba(255, 255, 255, 0.3)',
      }}
    >
      {bk.logo && !imgError ? (
        <img
          src={bk.logo}
          alt={bk.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-contain p-3"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <span
            className="font-black text-3xl text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {bk.initials}
          </span>
        </div>
      )}
    </div>
  )
}

function BookmakerCarousel({ items }) {
  const trackRef = useRef(null)
  const currentRef = useRef(0)
  const [current, setCurrent] = useState(0)
  const [perPage, setPerPage] = useState(3)

  useEffect(() => {
    const update = () => setPerPage(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  const maxIndex = Math.max(0, items.length - perPage)

  const scrollTo = useCallback((idx, smooth = true) => {
    const track = trackRef.current
    if (!track || !track.children[idx]) return
    track.scrollTo({ left: track.children[idx].offsetLeft, behavior: smooth ? 'smooth' : 'instant' })
  }, [])

  const goTo = useCallback((idx) => {
    const c = Math.max(0, Math.min(idx, maxIndex))
    const isWrap = c === 0 && currentRef.current >= maxIndex
    currentRef.current = c
    setCurrent(c)
    scrollTo(c, !isWrap)
  }, [maxIndex, scrollTo])

  useEffect(() => {
    const t = setInterval(() => {
      const next = currentRef.current >= maxIndex ? 0 : currentRef.current + 1
      const isWrap = next === 0 && currentRef.current >= maxIndex
      currentRef.current = next
      setCurrent(next)
      scrollTo(next, !isWrap)
    }, 3500)
    return () => clearInterval(t)
  }, [maxIndex, scrollTo])

  const isMobile = perPage === 1
  const gap = isMobile ? 0 : CAROUSEL_GAP
  const cardW = `calc((100% - ${(perPage - 1) * gap}px) / ${perPage})`

  return (
    <div>
      <div className="relative" style={{ paddingInline: isMobile ? 0 : '48px' }}>
        <div
          ref={trackRef}
          style={{ display: 'flex', gap: `${gap}px`, overflow: 'hidden', scrollbarWidth: 'none' }}
        >
          {items.map(bk => (
            <div key={bk.id} style={{ minWidth: cardW, maxWidth: cardW, flexShrink: 0 }}>
              <CarouselCard bk={bk} />
            </div>
          ))}
        </div>

        {!isMobile && (
          <>
            <button
              onClick={() => goTo(current - 1)}
              disabled={current === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all"
              style={{
                width: 36, height: 36,
                background: 'rgba(13,13,31,0.95)',
                border: `1px solid ${current === 0 ? 'rgba(26,110,255,0.1)' : 'rgba(26,110,255,0.4)'}`,
                color: current === 0 ? 'rgba(160,196,255,0.25)' : '#fff',
                cursor: current === 0 ? 'not-allowed' : 'pointer',
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => goTo(current >= maxIndex ? 0 : current + 1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-all"
              style={{
                width: 36, height: 36,
                background: 'rgba(13,13,31,0.95)',
                border: '1px solid rgba(26,110,255,0.4)',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      <div className="flex justify-center gap-2 mt-5">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: current === i ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: current === i ? '#1A6EFF' : 'rgba(26,110,255,0.25)',
              transition: 'all 0.3s',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  )
}

const services = [
  {
    icon: <TrendingUp size={28} />,
    emoji: '⚽',
    title: 'Coupons',
    desc: 'Découvrez nos pronostics sélectionnés par nos experts. Football, Basketball, Tennis et plus encore avec des taux de réussite exceptionnels.',
    to: '/coupons',
    color: '#1A6EFF',
  },
  {
    icon: <BookOpen size={28} />,
    emoji: '📊',
    title: 'Stratégies',
    desc: "Des guides complets pour maîtriser la gestion de votre bankroll et les stratégies de paris utilisées par les professionnels pour maximiser les gains.",
    to: '/strategies',
    color: '#00CFFF',
  },
]

const expertStats = [
  { value: 5, suffix: '+', label: 'Ans expertise' },
  { value: 85, suffix: '%', label: 'Taux de réussite' },
  { value: 50, suffix: '+', label: 'Championnats couverts' },
]

const specialisations = ['Football ⚽', 'Basketball 🏀', 'Tennis 🎾', 'Virtuel 🎮']

export default function Home() {
  const revealRef = useReveal()

  return (
    <main className='p-4 bg-'>
      {/* Hero */}
      <HeroSection />

      {/* WhatsApp channel banner */}
      <section
        className="py-6 px-6"
        style={{ background: 'linear-gradient(90deg, rgba(30,150,102,0.22) 5%, rgba(18,140,126,0.08) 100%)', borderTop: '1px solid rgba(37,211,102,0.2)', borderBottom: '1px solid rgba(37,211,102,0.2)' }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(37,211,102,0.2)', border: '1px solid rgba(37,211,102,0.4)' }}
            >
              <MessageCircle size={18} style={{ color: '#25D366' }} />
            </div>
            <div>
              <div className="font-bold text-white text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                📣 MAJOR PRONOSTIC — Chaîne WhatsApp Officielle
              </div>
              <div className="text-xs" style={{ color: '#A0C4FF' }}>
                Rejoignez la chaîne pour recevoir tous nos pronostics en temps réel
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a href={WHATSAPP_INSCRIPTION_VIDEO} target="_blank" rel="noopener noreferrer"
              className="btn-secondary" style={{ padding: '8px 16px', fontSize: '0.77rem' }}>
              <Play size={13} />
              Vidéo d'aide
            </a>
            <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer"
              className="btn-green" style={{ padding: '8px 16px', fontSize: '0.77rem' }}>
              <MessageCircle size={13} />
              Rejoindre
            </a>
          </div>
        </div>
      </section>

      {/* Bookmakers carousel */}
      <section className="py-20 px-4 lg:px-10" style={{ background: '#001219' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="🏆 Partenaires Exclusifs"
            title="Nos Bookmakers Partenaires"
            subtitle={
              <span>
                Inscrivez-vous via nos liens et entrez le code{' '}
                <strong style={{ color: '#FFD700', fontFamily: "'Poppins', sans-serif" }}>4PIRE</strong>{' '}
                pour activer votre bonus de bienvenue.
              </span>
            }
          />
          <BookmakerCarousel items={bookmakers} />
        </div>
      </section>

      {/* S'inscrire — cartes complètes avec code promo + lien */}
      <section className="py-40 px-4" style={{ background: '#05050f' }}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="🎁 Inscriptions & Bonus"
            title="S'inscrire Sur Nos Bookmakers"
            subtitle={
              <span>
                Utilisez le code{' '}
                <strong style={{ color: '#FFD700', fontFamily: "'Poppins', sans-serif" }}>4PIRE</strong>
                {' '}à l'inscription pour activer votre bonus de bienvenue exclusif.
              </span>
            }
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmakers.map(bk => (
              <BookmakerCard key={bk.id} bk={bk} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/bookmakers" className="btn-secondary">
              Voir tous les détails
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-40 px-4" style={{ background: '#0d0d1f' }} ref={revealRef}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            label="💎 Nos Services"
            title="Tout Pour Gagner"
            subtitle="Une plateforme complète pensée pour vous aider à prendre les meilleures décisions et maximiser vos profits."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(({ icon, emoji, title, desc, to, color }, i) => (
              <Link
                key={title}
                to={to}
                className="card reveal-init flex flex-col gap-6 group"
                style={{ textDecoration: 'none', animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `rgba(${color === '#1A6EFF' ? '26,110,255' : color === '#00CFFF' ? '0,207,255' : '255,215,0'},0.15)`, color }}
                >
                  {icon}
                </div>
                <div>
                  <div className="text-2xl mb-1">{emoji}</div>
                  <h3
                    className="font-bold text-lg text-white mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A0C4FF' }}>{desc}</p>
                </div>
                <div
                  className="flex items-center gap-2 text-sm font-semibold mt-auto pt-2 transition-all group-hover:gap-3"
                  style={{ color, borderTop: '1px solid rgba(26,110,255,0.1)' }}
                >
                  Explorer
                  <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expert section */}
      <section className="py-40 px-4" style={{ background: '#05050f' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Avatar */}
            <div className="flex flex-col items-center text-center gap-8">
              <div
                className="w-44 h-44 rounded-full flex items-center justify-center text-6xl animate-float"
                style={{
                  background: 'linear-gradient(135deg, #1A6EFF20, #00CFFF20)',
                  border: '3px solid #1A6EFF',
                  boxShadow: '0 0 40px rgba(26,110,255,0.4)',
                }}
              >
                🏆
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {specialisations.map(s => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(26,110,255,0.15)', border: '1px solid rgba(26,110,255,0.3)', color: '#00CFFF' }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-6">
              <span className="section-label inline-flex self-start">
                <Star size={12} /> Expert Pronosticeur
              </span>
              <h2
                className="text-3xl font-black text-white uppercase"
                style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em' }}
              >
                Major — Votre Expert
              </h2>
              <p className="text-sm leading-loose" style={{ color: '#A0C4FF' }}>
                Avec plus de 5 ans d'expérience dans l'analyse sportive professionnelle, Major a développé
                une méthode unique combinant statistiques avancées, analyse tactique et veille en temps réel
                pour vous offrir les pronostics les plus fiables du marché.
              </p>
              <p className="text-sm leading-loose" style={{ color: '#A0C4FF' }}>
                Chaque pronostic est le résultat d'heures de recherche et d'analyse. La transparence et
                l'honnêteté sont les valeurs fondamentales de MAJOR PRONOSTIC.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-5 mt-4">
                {expertStats.map(s => (
                  <div
                    key={s.label}
                    className="text-center p-6 rounded-xl"
                    style={{ background: 'rgba(13,13,31,0.8)', border: '1px solid rgba(26,110,255,0.2)' }}
                  >
                    <StatsCounter value={s.value} suffix={s.suffix} label={s.label} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / WhatsApp CTA */}
      <section
        className="py-40 px-4"
        style={{ background: 'linear-gradient(135deg, #0a0a2e 0%, #05050f 100%)', borderTop: '1px solid #1A2A5E' }}
      >
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <span className="section-label">
            <MessageCircle size={12} /> Communauté
          </span>

          <h2
            className="text-3xl md:text-4xl font-black text-white uppercase"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em' }}
          >
            Rejoignez MAJOR PRONOSTIC
          </h2>

          <p className="text-base leading-loose max-w-xl" style={{ color: '#A0C4FF' }}>
            Suivez notre chaîne WhatsApp officielle pour recevoir tous nos pronostics gratuits,
            alertes VIP et codes promos en temps réel.
          </p>

          {/* Code promo highlight */}
          <div
            className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl"
            style={{ background: 'rgba(255,215,0,0.08)', border: '1px solid rgba(255,215,0,0.3)' }}
          >
            <span className="text-sm" style={{ color: '#A0C4FF' }}>Code promo exclusif :</span>
            <span
              className="font-black text-2xl tracking-widest"
              style={{ color: '#FFD700', fontFamily: "'Poppins', sans-serif" }}
            >
              4PIRE
            </span>
            <span className="text-xs" style={{ color: 'rgba(255,215,0,0.6)' }}>— à entrer à l'inscription</span>
          </div>

          <div className="flex flex-wrap gap-5 justify-center">
            <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer" className="btn-green">
              <MessageCircle size={16} />
              Rejoindre la chaîne WhatsApp
            </a>
            <a href={WHATSAPP_INSCRIPTION_VIDEO} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Play size={16} />
              Vidéo d'inscription
            </a>
          </div>

          <p className="text-xs" style={{ color: 'rgba(160,196,255,0.5)' }}>
            ⚠️ Jouez responsable. Les paris sportifs peuvent créer une dépendance. +18 uniquement.
          </p>
        </div>
      </section>
    </main>
  )
}
