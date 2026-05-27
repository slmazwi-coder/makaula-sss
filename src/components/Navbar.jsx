import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, User } from 'lucide-react'
import { SCHOOL } from '../lib/store'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Staff', path: '/staff' },
  { name: 'Documents', path: '/documents' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Sport', path: '/sport' },
  { name: 'Activities', path: '/activities' },
  { name: 'General Application', path: '/admissions' },
  { name: 'Boarding Application', path: '/boarding' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  const isActive = (path) => pathname === path

  return (
    <header
      className="sticky top-0 z-50 transition-shadow duration-300"
      style={{
        background: '#0D1B4C',
        borderBottom: '3px solid #DAA520',
        boxShadow: scrolled ? '0 4px 24px rgba(13,27,76,0.25)' : 'none',
      }}
    >
      {/* Top bar: Logo + School name + Student Portal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo + Name */}
          <Link to="/" className="flex items-center gap-3 min-w-0 flex-1">
            <img
              src="/assets/logo.jpg"
              alt="Makaula SSS Logo"
              className="w-12 h-12 rounded-lg shrink-0 object-contain"
            />
            <div className="min-w-0">
              <span className="md:hidden text-sm font-bold block leading-tight" style={{ color: '#DAA520' }}>
                {SCHOOL.short}
              </span>
              <span className="hidden md:block text-base font-bold leading-tight" style={{ color: '#DAA520' }}>
                {SCHOOL.name}
              </span>
              <span className="text-xs leading-tight mt-0.5 block" style={{ color: 'rgba(218,165,32,0.65)' }}>
                {SCHOOL.motto}
              </span>
            </div>
          </Link>

          {/* Desktop: Student Portal button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              to="/student/login"
              className="px-4 py-2 rounded-lg text-sm font-bold transition-colors inline-flex items-center gap-2 border"
              style={
                pathname.startsWith('/student')
                  ? { background: '#DAA520', color: '#0D1B4C', borderColor: '#DAA520' }
                  : { borderColor: '#DAA520', color: '#DAA520' }
              }
              onMouseEnter={e => { if (!pathname.startsWith('/student')) { e.currentTarget.style.background = '#DAA520'; e.currentTarget.style.color = '#0D1B4C' } }}
              onMouseLeave={e => { if (!pathname.startsWith('/student')) { e.currentTarget.style.background = ''; e.currentTarget.style.color = '#DAA520' } }}
            >
              <User size={15} /> Student Portal
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <div className="md:hidden flex items-center shrink-0 ml-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg"
              style={{ color: '#DAA520' }}
              aria-label="Open menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar: Nav links (desktop only) */}
      <div className="hidden md:block w-full" style={{ background: '#081232', borderTop: '1px solid rgba(218,165,32,0.15)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-x-1 gap-y-0 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
                style={
                  isActive(link.path)
                    ? { background: '#DAA520', color: '#0D1B4C', fontWeight: 700 }
                    : { color: 'rgba(218,165,32,0.85)' }
                }
                onMouseEnter={e => {
                  if (!isActive(link.path)) e.currentTarget.style.background = 'rgba(218,165,32,0.12)'
                }}
                onMouseLeave={e => {
                  if (!isActive(link.path)) e.currentTarget.style.background = ''
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div style={{ background: '#081232', borderTop: '1px solid rgba(218,165,32,0.2)' }}>
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium"
                style={
                  isActive(link.path)
                    ? { background: '#DAA520', color: '#0D1B4C', fontWeight: 700 }
                    : { color: 'rgba(218,165,32,0.85)' }
                }
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/student/login"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium mt-1"
              style={{ color: '#DAA520', borderTop: '1px solid rgba(218,165,32,0.15)', paddingTop: '0.75rem' }}
            >
              Student Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
