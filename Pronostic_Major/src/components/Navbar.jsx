import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { WHATSAPP_CHANNEL } from '../data/bookmakers'

const navLinks = [
  { to: '/',            label: 'Accueil' },
  { to: '/jeux',        label: 'Jeux' },
  { to: '/bookmakers',  label: 'Bookmakers' },
  { to: '/strategies',  label: 'Stratégies' },
  { to: '/about',       label: 'À propos' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(5,5,15,0.95)' : 'rgba(5,5,15,0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(26,110,255,0.2)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center font-black text-sm shrink-0"
            style={{
              background: 'linear-gradient(135deg, #1A6EFF, #00CFFF)',
              boxShadow: '0 0 16px rgba(26,110,255,0.6)',
              fontFamily: "'Poppins', sans-serif",
              color: '#fff',
            }}
          >
            MP
          </div>
          <div>
            <span
              className="font-black text-base uppercase tracking-wider leading-none block text-white"
              style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: '0.06em' }}
            >
              MAJOR
            </span>
            <span
              className="text-xs font-semibold uppercase leading-none"
              style={{ color: '#00CFFF', fontFamily: "'Poppins', sans-serif", letterSpacing: '0.12em' }}
            >
              PRONOSTIC
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green hidden sm:flex"
            style={{ padding: '8px 16px', fontSize: '0.78rem' }}
          >
            Rejoindre la chaîne
          </a>
          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#A0C4FF', background: 'rgba(26,110,255,0.1)' }}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? '400px' : '0',
          background: 'rgba(5,5,15,0.98)',
          borderTop: open ? '1px solid rgba(26,110,255,0.15)' : 'none',
        }}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white bg-[rgba(26,110,255,0.15)] border border-[rgba(26,110,255,0.3)]'
                    : 'text-[#A0C4FF] hover:bg-[rgba(26,110,255,0.08)] hover:text-white'
                }`
              }
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {label}
            </NavLink>
          ))}
          <a
            href={WHATSAPP_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green justify-center mt-3"
            onClick={() => setOpen(false)}
          >
            Rejoindre la chaîne WhatsApp
          </a>
        </div>
      </div>
    </nav>
  )
}
