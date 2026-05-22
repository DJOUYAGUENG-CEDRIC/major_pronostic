import { Users, Target, Shield, TrendingUp, Heart, MessageCircle, Zap } from 'lucide-react'
import StatsCounter from '../components/StatsCounter'
import { WHATSAPP_CHANNEL } from '../data/bookmakers'

const values = [
  { icon: Target, title: 'Précision', desc: 'Chaque pronostic est le résultat d\'une analyse rigoureuse. Pas de chance, que de la méthode.', color: '#1A6EFF' },
  { icon: Shield, title: 'Transparence', desc: 'Tous nos résultats sont publiés, y compris les pertes. Aucune manipulation des statistiques.', color: '#00CFFF' },
  { icon: Heart, title: 'Jeu Responsable', desc: 'Nous promouvons une pratique saine et responsable des paris. Votre bien-être avant tout.', color: '#FF3355' },
  { icon: Zap, title: 'Innovation', desc: 'Nos outils d\'analyse évoluent constamment pour vous offrir un avantage compétitif réel.', color: '#FFD700' },
]

const team = [
  { name: 'Major', role: 'Fondateur & Expert Foot', emoji: '⚽', bio: '5 ans d\'expertise en pronostics foot. Champion Ligue 1, Champions League, Premier League.', color: '#1A6EFF' },
  { name: 'Chris', role: 'Expert Basketball & Tennis', emoji: '🏀', bio: 'Analyste NBA et ATP. Spécialiste des cotes tennis et statistiques avancées.', color: '#00CFFF' },
  { name: 'Sarah', role: 'Gestionnaire Communauté', emoji: '💬', bio: 'Responsable de notre communauté WhatsApp. Support et coordination des alertes VIP.', color: '#FFD700' },
]

const timeline = [
  { year: '2019', event: 'Création du compte WhatsApp MAJOR PRONOSTIC', icon: '🚀' },
  { year: '2020', event: 'Premier millier de membres — 78% de taux de réussite', icon: '🏆' },
  { year: '2021', event: 'Lancement des partenariats avec les bookmakers', icon: '🤝' },
  { year: '2022', event: '5 000 membres — Taux de réussite de 82%', icon: '📈' },
  { year: '2023', event: 'Lancement du site officiel et du Marketplace', icon: '💻' },
  { year: '2024', event: '10 000+ membres — Expansion internationale', icon: '🌍' },
]

export default function About() {
  return (
    <main className="pt-16 min-h-screen" style={{ background: '#05050f' }}>
      {/* Hero */}
      <section
        className="py-20 px-4 text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #05050f 0%, #0a0a2e 60%, #05050f 100%)', borderBottom: '1px solid #1A2A5E' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(circle at 50% 50%, #1A6EFF 0%, transparent 70%)' }}
        />
        <div className="relative max-w-3xl mx-auto">
          <span className="section-label mb-4 inline-flex"><Users size={12} /> Notre Histoire</span>
          <h1
            className="text-4xl md:text-5xl font-black text-white uppercase mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em' }}
          >
            À Propos de MAJOR PRONOSTIC
          </h1>
          <p className="text-base leading-relaxed" style={{ color: '#A0C4FF' }}>
            Né d'une passion pour le sport et de l'expertise analytique, MAJOR PRONOSTIC est
            aujourd'hui la référence en matière de pronostics sportifs premium pour la communauté
            africaine et francophone.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-4" style={{ background: '#0d0d1f', borderBottom: '1px solid #1A2A5E' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: 85, suffix: '%', label: 'Taux de réussite' },
            { value: 10, suffix: 'k+', label: 'Membres actifs' },
            { value: 500, suffix: '+', label: 'Coupons postés' },
            { value: 5, suffix: '+', label: 'Années expertise' },
          ].map(s => (
            <div
              key={s.label}
              className="text-center p-6 rounded-2xl"
              style={{ background: 'rgba(13,13,31,0.8)', border: '1px solid rgba(26,110,255,0.2)' }}
            >
              <StatsCounter value={s.value} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label mb-4 inline-flex"><Target size={12} /> Notre Mission</span>
            <h2
              className="text-3xl font-black text-white uppercase mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em' }}
            >
              Démocratiser le Pari Sportif Expert
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#A0C4FF' }}>
              MAJOR PRONOSTIC a été créé avec une mission simple : rendre accessibles les méthodes
              d'analyse sportive professionnelles au plus grand nombre. Trop longtemps, les techniques
              des parieurs professionnels sont restées réservées à quelques initiés.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#A0C4FF' }}>
              Aujourd'hui, nous partageons notre expertise avec transparence, rigueur et passion
              pour vous aider à prendre des décisions éclairées et à maximiser vos gains.
            </p>
            <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <TrendingUp size={16} />
              Rejoindre la communauté
            </a>
          </div>
          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(26,110,255,0.1), rgba(0,207,255,0.05))',
              border: '1px solid rgba(26,110,255,0.2)',
            }}
          >
            <div className="text-7xl mb-4">🏆</div>
            <h3 className="text-xl font-black text-white uppercase mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
              #1 en Pronostics
            </h3>
            <p className="text-sm" style={{ color: '#A0C4FF' }}>
              Référence numéro 1 en pronostics sportifs pour la communauté francophone d'Afrique et d'Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4" style={{ background: '#0d0d1f', borderTop: '1px solid #1A2A5E' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label mb-3 inline-flex">💎 Nos Valeurs</span>
            <h2
              className="text-3xl font-black text-white uppercase"
              style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em' }}
            >
              Ce Qui Nous Définit
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="card text-center">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${color}18`, color }}
                >
                  <Icon size={22} />
                </div>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#A0C4FF' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label mb-3 inline-flex"><Users size={12} /> L'équipe</span>
            <h2
              className="text-3xl font-black text-white uppercase"
              style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em' }}
            >
              Notre Équipe d'Experts
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map(m => (
              <div key={m.name} className="card text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4"
                  style={{
                    background: `${m.color}18`,
                    border: `2px solid ${m.color}`,
                    boxShadow: `0 0 20px ${m.color}40`,
                  }}
                >
                  {m.emoji}
                </div>
                <h3 className="font-black text-white text-lg mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{m.name}</h3>
                <div className="text-xs font-semibold mb-3" style={{ color: m.color, letterSpacing: '0.08em' }}>
                  {m.role}
                </div>
                <p className="text-sm" style={{ color: '#A0C4FF' }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4" style={{ background: '#0d0d1f', borderTop: '1px solid #1A2A5E' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label mb-3 inline-flex">📅 Historique</span>
            <h2
              className="text-3xl font-black text-white uppercase"
              style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em' }}
            >
              Notre Parcours
            </h2>
          </div>
          <div className="space-y-6">
            {timeline.map((t, i) => (
              <div key={t.year} className="flex items-start gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm"
                    style={{ background: 'linear-gradient(135deg, #1A6EFF, #00CFFF)', color: '#fff', fontFamily: "'Poppins', sans-serif" }}
                  >
                    {t.icon}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ background: 'rgba(26,110,255,0.25)', minHeight: '24px' }} />
                  )}
                </div>
                <div
                  className="flex-1 pb-4 rounded-xl p-4"
                  style={{ background: 'rgba(13,13,31,0.8)', border: '1px solid rgba(26,110,255,0.15)' }}
                >
                  <div className="font-black text-sm mb-1" style={{ color: '#1A6EFF', fontFamily: "'Poppins', sans-serif" }}>
                    {t.year}
                  </div>
                  <p className="text-sm" style={{ color: '#A0C4FF' }}>{t.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
