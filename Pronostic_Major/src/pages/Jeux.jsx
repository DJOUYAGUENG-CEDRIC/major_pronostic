import { useState } from 'react'
import { MessageCircle, TrendingUp, Gamepad2 } from 'lucide-react'
import { WHATSAPP_CHANNEL } from '../data/bookmakers'

const games = [
  {
    id: 1, emoji: '⚽', name: 'Football', category: 'Sport', color: '#00C853', popular: true,
    description: 'Championnats africains, européens et internationaux — Ligue 1, Premier League, CAN, Champions League...',
  },
  {
    id: 2, emoji: '✈️', name: 'Aviator', category: 'Virtuel', color: '#1A6EFF', popular: true,
    description: 'Le jeu crash le plus populaire sur nos bookmakers partenaires. Stratégies exclusives pour maximiser vos gains.',
  },
  {
    id: 3, emoji: '🏀', name: 'Basketball', category: 'Sport', color: '#FF6B00', popular: true,
    description: 'NBA, Euroligue et compétitions africaines. Analyses pointues sur les matchs les plus côtés.',
  },
  {
    id: 4, emoji: '🥊', name: 'Mortal Kombat', category: 'Esport', color: '#8A2BE2', popular: true,
    description: 'Tournois esport et compétitions en ligne. Pronostics sur les ligues officielles de jeux de combat.',
  },
  {
    id: 5, emoji: '🎾', name: 'Tennis', category: 'Sport', color: '#FFD700',
    description: 'ATP, WTA et Grand Chelem. Pronostics sur les grands tournois et les joueurs en forme.',
  },
  {
    id: 6, emoji: '🎮', name: 'Football Virtuel', category: 'Virtuel', color: '#00CFFF',
    description: 'Football virtuel disponible 24h/24 sur tous nos bookmakers. Analyses et signaux en temps réel.',
  },
  {
    id: 7, emoji: '♠️', name: 'Poker', category: 'Casino', color: '#FF3355',
    description: "Texas Hold'em, Omaha et variantes en ligne. Conseils de stratégie et gestion de bankroll.",
  },
  {
    id: 8, emoji: '💥', name: 'Crash / Mines', category: 'Virtuel', color: '#FF5500',
    description: 'Jeux Crash et Mines sur 1xBet, Melbet et Linebet. Techniques et signaux pour limiter les pertes.',
  },
  {
    id: 9, emoji: '🎰', name: 'Casino Live', category: 'Casino', color: '#D4A017',
    description: 'Roulette, Blackjack et Baccarat en live. Stratégies de mise et gestion de bankroll casino.',
  },
  {
    id: 10, emoji: '🐎', name: 'Course Virtuelle', category: 'Virtuel', color: '#FF9800',
    description: "Courses de chevaux et lévriers virtuels. Sélections quotidiennes sur les meilleures cotes du jour.",
  },
  {
    id: 11, emoji: '🥊', name: 'MMA / Boxe', category: 'Sport', color: '#FF3355',
    description: 'UFC, Bellator et championnats africains de boxe. Analyses des combattants et pronostics de combat.',
  },
  {
    id: 12, emoji: '🎯', name: 'Basketball Virtuel', category: 'Virtuel', color: '#00C853',
    description: 'Matchs de basketball virtuel disponibles à toute heure. Pronostics sur les meilleures rencontres.',
  },
]

const categories = [
  { key: 'all',    label: '🔥 Tous' },
  { key: 'Sport',  label: '🏆 Sports' },
  { key: 'Virtuel',label: '🎮 Virtuel' },
  { key: 'Casino', label: '🎰 Casino' },
  { key: 'Esport', label: '🕹️ Esport' },
]

const stats = [
  { value: '12+', label: 'Jeux analysés' },
  { value: '85%', label: 'Taux de réussite', color: '#00C853' },
  { value: '24/7', label: 'Pronostics live' },
]

export default function Jeux() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? games
    : games.filter(g => g.category === activeCategory)

  return (
    <main className="pt-16 min-h-screen" style={{ background: '#05050f' }}>

      {/* Header */}
      <section
        className="py-20 px-4 text-center"
        style={{
          background: 'linear-gradient(135deg, #05050f 0%, #0a0a2e 60%, #05050f 100%)',
          borderBottom: '1px solid #1A2A5E',
        }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 inline-flex items-center gap-2">
            <Gamepad2 size={12} /> Nos Jeux & Sports
          </span>
          <h1
            className="text-4xl md:text-5xl font-black text-white uppercase mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em' }}
          >
            Jeux Analysés
          </h1>
          <p className="text-base mb-10" style={{ color: '#A0C4FF' }}>
            Football, virtuel, casino, esport — on couvre tous les marchés pour maximiser vos gains.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4">
            {stats.map(s => (
              <div
                key={s.label}
                className="px-6 py-4 rounded-xl text-center"
                style={{ background: 'rgba(13,13,31,0.8)', border: `1px solid ${s.color || '#1A6EFF'}33` }}
              >
                <div
                  className="text-2xl font-black mb-1"
                  style={{ color: s.color || '#1A6EFF', fontFamily: "'Poppins', sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="text-xs" style={{ color: '#A0C4FF' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filtres catégories */}
      <section className="py-6 px-4" style={{ background: '#0d0d1f', borderBottom: '1px solid #1A2A5E' }}>
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map(c => (
            <button
              key={c.key}
              className={`filter-btn${activeCategory === c.key ? ' active' : ''}`}
              onClick={() => setActiveCategory(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grille des jeux */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(game => (
              <div
                key={game.id}
                className="relative flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: '#0d0d1f',
                  border: `1px solid ${game.popular ? `${game.color}35` : 'rgba(26,110,255,0.12)'}`,
                  boxShadow: game.popular ? `0 0 20px ${game.color}12` : '0 4px 20px rgba(0,0,0,0.25)',
                }}
              >
                {/* Badge populaire */}
                {game.popular && (
                  <span
                    className="absolute top-4 right-4 text-xs font-bold px-2 py-0.5 rounded-full"
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

                {/* Icône */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                  style={{
                    background: `${game.color}18`,
                    border: `1px solid ${game.color}35`,
                  }}
                >
                  {game.emoji}
                </div>

                {/* Nom + catégorie */}
                <div>
                  <h3
                    className="font-black text-white text-lg mb-1"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {game.name}
                  </h3>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      background: `${game.color}20`,
                      color: game.color,
                      border: `1px solid ${game.color}40`,
                    }}
                  >
                    {game.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs leading-relaxed flex-1" style={{ color: 'rgba(160,196,255,0.7)' }}>
                  {game.description}
                </p>

                {/* CTA */}
                <a
                  href={WHATSAPP_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl text-xs font-bold transition-all duration-200 hover:opacity-90"
                  style={{
                    padding: '10px',
                    background: `${game.color}18`,
                    border: `1px solid ${game.color}40`,
                    color: game.color,
                    textDecoration: 'none',
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  <TrendingUp size={12} />
                  Voir les pronostics
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section
        className="py-20 px-4"
        style={{
          background: 'linear-gradient(135deg, rgba(37,211,102,0.08) 0%, rgba(13,13,31,0.9) 100%)',
          borderTop: '1px solid rgba(37,211,102,0.15)',
        }}
      >
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.35)' }}
          >
            <MessageCircle size={28} style={{ color: '#25D366' }} />
          </div>
          <div>
            <h2
              className="text-3xl md:text-4xl font-black text-white uppercase mb-3"
              style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em' }}
            >
              Rejoins la Chaîne
            </h2>
            <p className="text-base" style={{ color: '#A0C4FF' }}>
              Reçois nos pronostics en temps réel sur tous ces jeux — football, virtuel, casino et plus — directement sur WhatsApp.
            </p>
          </div>
          <a
            href={WHATSAPP_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green"
            style={{ padding: '14px 36px', fontSize: '1rem' }}
          >
            <MessageCircle size={18} />
            Rejoindre la chaîne WhatsApp
          </a>
        </div>
      </section>

    </main>
  )
}
