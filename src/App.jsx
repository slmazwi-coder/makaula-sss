import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'
import ChatbotWidget from './components/ChatbotWidget'
import { Home } from './pages/Home'
import About from './pages/About'
import { Staff } from './pages/Staff'
import { Documents } from './pages/Documents'
import { Achievements } from './pages/Achievements'
import { Sport } from './pages/Sport'
import { Activities } from './pages/Activities'
import { Admissions } from './pages/Admissions'
import { Boarding } from './pages/Boarding'
import { Contact } from './pages/Contact'
import { StudentLogin } from './pages/StudentLogin'
import { StudentPortal } from './pages/StudentPortal'

const HomePage = () => (
  <>
    <Hero />
    <NewsSection />
    <Home />
  </>
)

const PageShell = ({ children }) => (
  <>
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </>
)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageShell><HomePage /></PageShell>} />
        <Route path="/about" element={<PageShell><About /></PageShell>} />
        <Route path="/staff" element={<PageShell><Staff /></PageShell>} />
        <Route path="/documents" element={<PageShell><Documents /></PageShell>} />
        <Route path="/achievements" element={<PageShell><Achievements /></PageShell>} />
        <Route path="/sport" element={<PageShell><Sport /></PageShell>} />
        <Route path="/activities" element={<PageShell><Activities /></PageShell>} />
        <Route path="/admissions" element={<PageShell><Admissions /></PageShell>} />
        <Route path="/boarding" element={<PageShell><Boarding /></PageShell>} />
        <Route path="/contact" element={<PageShell><Contact /></PageShell>} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student" element={<StudentPortal />} />
      </Routes>
      <ChatbotWidget />
    </BrowserRouter>
  )
}
