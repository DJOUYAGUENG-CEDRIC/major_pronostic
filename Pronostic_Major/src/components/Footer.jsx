import { Link } from 'react-router-dom'
import { Hash, Camera, Play, Send } from 'lucide-react'
import { WHATSAPP_CHANNEL } from '../data/bookmakers'

const navLinks = [
  { to: '/',           label: 'Accueil' },
  { to: '/coupons',    label: 'Coupons' },
  { to: '/bookmakers', label: 'Bookmakers' },
  { to: '/strategies', label: 'Stratégies' },
  { to: '/about',      label: 'À propos' },
]

const legalLinks = [
  { to: '#', label: 'CGU' },
  { to: '#', label: 'Jeu responsable' },
  { to: '#', label: 'Mentions légales' },
]

const socials = [
  { icon: Hash,   href: '#',              label: 'Twitter / X' },
  { icon: Camera, href: '#',              label: 'Instagram' },
  { icon: Play,   href: '#',              label: 'YouTube' },
  { icon: Send,   href: WHATSAPP_CHANNEL, label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#05050f', borderTop: '1px solid #1A2A5E' }}>
      <div className="neon-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #1A6EFF, #00CFFF)',
                  boxShadow: '0 0 16px rgba(26,110,255,0.5)',
                  fontFamily: "'Poppins', sans-serif",
                  color: '#fff',
                }}
              >
                MP
              </div>
              <div>
                <div
                  className="font-black text-white uppercase tracking-wider"
                  style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.06em' }}
                >
                  MAJOR PRONOSTIC
                </div>
                <div className="text-xs" style={{ color: '#A0C4FF' }}>Pronostics sportifs premium</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#A0C4FF', maxWidth: '320px' }}>
              Votre partenaire de confiance pour maximiser vos gains grâce à des pronostics sportifs
              d'experts, des stratégies éprouvées et les meilleurs bookmakers partenaires.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                  style={{
                    background: 'rgba(26,110,255,0.12)',
                    border: '1px solid rgba(26,110,255,0.25)',
                    color: '#A0C4FF',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#1A6EFF'
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.background = 'rgba(26,110,255,0.25)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(26,110,255,0.25)'
                    e.currentTarget.style.color = '#A0C4FF'
                    e.currentTarget.style.background = 'rgba(26,110,255,0.12)'
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-bold text-white uppercase mb-4 text-sm"
              style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.1em' }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm transition-colors"
                    style={{ color: '#A0C4FF', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#A0C4FF')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4
              className="font-bold text-white uppercase mb-4 text-sm"
              style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.1em' }}
            >
              Légal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm transition-colors"
                    style={{ color: '#A0C4FF', textDecoration: 'none' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#A0C4FF')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href={WHATSAPP_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green"
                style={{ padding: '9px 16px', fontSize: '0.78rem' }}
              >
                Rejoindre la chaîne
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderTop: '1px solid #1A2A5E', color: '#A0C4FF' }}
        >
          <p>© 2024 MAJOR PRONOSTIC. Tous droits réservés.</p>
          <p className="text-center" style={{ color: 'rgba(160,196,255,0.6)' }}>
            ⚠️ Jouez responsable. Les paris sportifs peuvent créer une dépendance. +18 uniquement.
          </p>
        </div>
      </div>
    </footer>
  )
}
