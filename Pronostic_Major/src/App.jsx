import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import VoiceflowChat from './components/VoiceflowChat'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Jeux from './pages/Jeux'
import Bookmakers from './pages/Bookmakers'
import Strategies from './pages/Strategies'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ backgroundColor: '#05050f', minHeight: '100vh', color: '#fff' }}>
        <Navbar />
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/jeux"       element={<Jeux />} />
          <Route path="/bookmakers" element={<Bookmakers />} />
          <Route path="/strategies" element={<Strategies />} />
          <Route path="/about"      element={<About />} />
        </Routes>
        <Footer />
        <VoiceflowChat />
      </div>
    </BrowserRouter>
  )
}
