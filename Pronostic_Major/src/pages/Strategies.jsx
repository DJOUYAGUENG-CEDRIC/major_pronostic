import { BookOpen, TrendingUp, Target, CheckCircle } from 'lucide-react'
import { strategies } from '../data/strategies'

const difficultyColor = {
  Débutant:      '#00C853',
  Intermédiaire: '#FF9800',
  Expert:        '#FF3355',
}

export default function Strategies() {
  return (
    <main className="pt-16 min-h-screen" style={{ background: '#05050f' }}>
      {/* Header */}
      <section
        className="py-16 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #05050f 0%, #0a0a2e 60%, #05050f 100%)', borderBottom: '1px solid #1A2A5E' }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 inline-flex">
            <BookOpen size={12} /> Guide du Parieur
          </span>
          <h1
            className="text-4xl md:text-5xl font-black text-white uppercase mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em' }}
          >
            Stratégies
          </h1>
          <p style={{ color: '#A0C4FF' }}>
            Des stratégies éprouvées pour gérer votre bankroll et maximiser vos profits sur le long terme.
            Du débutant à l'expert, trouvez la méthode qui vous correspond.
          </p>
        </div>
      </section>

      {/* Stats overview */}
      <section className="py-8 px-4" style={{ background: '#0d0d1f', borderBottom: '1px solid #1A2A5E' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'Stratégies disponibles', value: strategies.length, icon: BookOpen },
              { label: 'Meilleur ROI', value: '+45%', icon: TrendingUp },
              { label: 'Meilleur taux réussite', value: '75%', icon: Target },
            ].map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-4 px-6 py-4 rounded-xl"
                style={{ background: 'rgba(13,13,31,0.8)', border: '1px solid rgba(26,110,255,0.2)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(26,110,255,0.15)', color: '#1A6EFF' }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xl font-black" style={{ color: '#1A6EFF', fontFamily: "'Poppins', sans-serif" }}>{value}</div>
                  <div className="text-xs" style={{ color: '#A0C4FF' }}>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {strategies.map(s => (
              <div
                key={s.id}
                className="card"
                style={{ borderColor: `${s.color}30` }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}
                  >
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span
                        className="text-xs font-bold uppercase px-2 py-0.5 rounded"
                        style={{ background: `${difficultyColor[s.difficulty]}18`, color: difficultyColor[s.difficulty], border: `1px solid ${difficultyColor[s.difficulty]}30` }}
                      >
                        {s.difficulty}
                      </span>
                      <span className="text-xs" style={{ color: '#A0C4FF' }}>{s.timeframe}</span>
                    </div>
                    <h3
                      className="font-black text-lg text-white"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-xs" style={{ color: s.color }}>{s.subtitle}</p>
                  </div>
                </div>

                {/* KPIs */}
                <div className="flex gap-3 mb-5">
                  {[
                    { label: 'Win Rate', value: s.winRate, color: '#00C853' },
                    { label: 'ROI estimé', value: s.roi, color: '#FFD700' },
                  ].map(kpi => (
                    <div
                      key={kpi.label}
                      className="flex-1 text-center py-3 rounded-xl"
                      style={{ background: `${kpi.color}0d`, border: `1px solid ${kpi.color}25` }}
                    >
                      <div className="text-xl font-black" style={{ color: kpi.color, fontFamily: "'Poppins', sans-serif" }}>
                        {kpi.value}
                      </div>
                      <div className="text-xs" style={{ color: '#A0C4FF' }}>{kpi.label}</div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#A0C4FF' }}>
                  {s.description}
                </p>

                {/* Steps */}
                <div>
                  <div
                    className="text-xs font-bold uppercase mb-3 flex items-center gap-2"
                    style={{ color: s.color, letterSpacing: '0.1em' }}
                  >
                    <CheckCircle size={12} /> Étapes clés
                  </div>
                  <ol className="space-y-2">
                    {s.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#A0C4FF' }}>
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                          style={{ background: `${s.color}20`, color: s.color, border: `1px solid ${s.color}40` }}
                        >
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Tip */}
                <div
                  className="mt-4 px-4 py-3 rounded-lg text-xs"
                  style={{ background: 'rgba(26,110,255,0.06)', border: '1px solid rgba(26,110,255,0.15)', color: '#A0C4FF' }}
                >
                  💡 <strong style={{ color: '#fff' }}>Conseil : </strong>{s.tips}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
