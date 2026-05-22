import { Shield, TrendingUp, Star, Play, MessageCircle } from 'lucide-react'
import BookmakerCard from '../components/BookmakerCard'
import { bookmakers, WHATSAPP_CHANNEL, WHATSAPP_INSCRIPTION_VIDEO } from '../data/bookmakers'

export default function Bookmakers() {
  const avgRating = (bookmakers.reduce((s, b) => s + b.rating, 0) / bookmakers.length).toFixed(1)

  return (
    <main className="pt-16 min-h-screen" style={{ background: '#05050f' }}>
      {/* Header */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #05050f 0%, #0a0a2e 60%, #05050f 100%)', borderBottom: '1px solid #1A2A5E' }}
      >
        <div className="max-w-3xl mx-auto">
          <span className="section-label mb-4 inline-flex">
            <Shield size={12} /> Partenaires Vérifiés
          </span>
          <h1
            className="text-4xl md:text-5xl font-black text-white uppercase mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em' }}
          >
            Nos Bookmakers
          </h1>
          <p className="text-base mb-8" style={{ color: '#A0C4FF' }}>
            {bookmakers.length} bookmakers soigneusement sélectionnés pour leur fiabilité,
            leurs cotes compétitives et leurs bonus exclusifs négociés pour vous.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Shield, label: '100% Fiables', sub: 'Vérifiés et licenciés' },
              { icon: TrendingUp, label: 'Bonus Exclusifs', sub: 'Codes promo MAJOR' },
              { icon: Star, label: avgRating + '/5 Moyen', sub: `${bookmakers.reduce((s,b)=>s+b.ratingCount,0).toLocaleString()} avis` },
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-5 py-3 rounded-xl"
                style={{ background: 'rgba(13,13,31,0.8)', border: '1px solid rgba(26,110,255,0.2)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(26,110,255,0.15)', color: '#1A6EFF' }}
                >
                  <Icon size={16} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>{label}</div>
                  <div className="text-xs" style={{ color: '#A0C4FF' }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 px-4" style={{ background: '#0d0d1f' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <span className="section-label mb-3 inline-flex">⭐ Top Sélection</span>
            <h2
              className="text-2xl font-black text-white uppercase"
              style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em' }}
            >
              Bookmakers Vedettes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bookmakers.filter(b => b.featured).map(bk => (
              <BookmakerCard key={bk.id} bk={bk} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="neon-divider mx-8" />

      {/* All bookmakers */}
      <section className="py-20 px-4" style={{ background: '#05050f' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <span className="section-label mb-3 inline-flex">🎯 Catalogue Complet</span>
            <h2
              className="text-2xl font-black text-white uppercase"
              style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em' }}
            >
              Tous Nos Partenaires
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bookmakers.map(bk => (
              <BookmakerCard key={bk.id} bk={bk} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Vidéo d'inscription */}
          <div
            className="rounded-2xl p-8 mb-6 flex flex-col sm:flex-row items-center gap-6"
            style={{
              background: 'linear-gradient(135deg, rgba(37,211,102,0.08) 0%, rgba(18,140,126,0.05) 100%)',
              border: '1px solid rgba(37,211,102,0.25)',
            }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(37,211,102,0.15)', border: '2px solid #25D366' }}
            >
              <Play size={28} style={{ color: '#25D366' }} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-black text-white text-lg uppercase mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Comment s'inscrire ?
              </h3>
              <p className="text-sm mb-4" style={{ color: '#A0C4FF' }}>
                Regardez notre vidéo tutoriel sur la chaîne WhatsApp MAJOR PRONOSTIC pour apprendre à vous
                inscrire sur nos bookmakers partenaires et activer votre code promo <strong style={{ color: '#FFD700' }}>4PIRE</strong>.
              </p>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <a href={WHATSAPP_INSCRIPTION_VIDEO} target="_blank" rel="noopener noreferrer" className="btn-green" style={{ padding: '9px 18px', fontSize: '0.8rem' }}>
                  <Play size={14} />
                  Voir la vidéo
                </a>
                <a href={WHATSAPP_CHANNEL} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '9px 18px', fontSize: '0.8rem' }}>
                  <MessageCircle size={14} />
                  Rejoindre la chaîne
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
          <div
            className="rounded-2xl p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(26,110,255,0.12) 0%, rgba(0,207,255,0.06) 100%)',
              border: '1px solid rgba(26,110,255,0.3)',
            }}
          >
            <h3
              className="text-2xl font-black text-white uppercase mb-3"
              style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.04em' }}
            >
              Un Bookmaker Manquant ?
            </h3>
            <p className="text-sm mb-6" style={{ color: '#A0C4FF' }}>
              Contactez-nous via WhatsApp pour nous suggérer un bookmaker ou obtenir des informations
              sur nos offres exclusives.
            </p>
            <a
              href={WHATSAPP_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green"
            >
              Nous contacter
            </a>
          </div>
          </div>
        </div>
      </section>
    </main>
  )
}
