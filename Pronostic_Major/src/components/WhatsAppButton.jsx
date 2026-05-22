import { MessageCircle } from 'lucide-react'
import { WHATSAPP_CHANNEL } from '../data/bookmakers'

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_CHANNEL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full font-bold text-sm text-white transition-all duration-300 hover:-translate-y-1 animate-pulse-glow"
      style={{
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: '0 0 22px rgba(37,211,102,0.5)',
        padding: '12px 20px',
        textDecoration: 'none',
      }}
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Rejoindre la chaîne</span>
    </a>
  )
}
