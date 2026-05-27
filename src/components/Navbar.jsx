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
  const { pathname } = useLocation()

  useEffect(() => { setIsOpen(false) }, [pathname])

  const isActive = (path) => pathname === path

  return (
    <nav className="glass-nav w-full">

      {/* Top bar: Logo + School name + Student Portal */}
      <div className="w-full border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo + Name */}
            <Link to="/" className="flex items-center gap-3 min-w-0 flex-1">
              <div className="h-11 w-11 shrink-0 rounded-xl bg-white flex items-center justify-center border border-gray-200 shadow-md overflow-hidden">
                <img
                  src="/assets/logo.jpg"
                  alt="Makaula SSS logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <span className="md:hidden text-sm font-bold text-navy block leading-tight">
                  {SCHOOL.short}
                </span>
                <span className="hidden md:block text-base font-bold text-navy leading-tight">
                  {SCHOOL.name}
                </span>
                <span className="text-xs font-semibold text-gray-400 tracking-wide uppercase">
                  {SCHOOL.motto}
                </span>
              </div>
            </Link>

            {/* Desktop: Student Portal button */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <Link
                to="/student/login"
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors inline-flex items-center gap-2
                  ${pathname.startsWith('/student')
                    ? 'text-white bg-navy'
                    : 'text-navy border border-navy hover:bg-navy hover:text-white'
                  }`}
              >
                <User size={15} /> Student Portal
              </Link>
            </div>

            {/* Mobile: hamburger */}
            <div className="md:hidden flex items-center shrink-0 ml-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-navy p-2"
                aria-label="Open menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar: Nav links (desktop only) */}
      <div className="hidden md:block bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-x-1 gap-y-0 py-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap
                  ${isActive(link.path)
                    ? 'text-navy bg-blue-50 font-semibold'
                    : 'text-gray-600 hover:text-navy hover:bg-gray-50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-3 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors
                  ${isActive(link.path)
                    ? 'text-navy bg-blue-50 font-semibold'
                    : 'text-gray-700 hover:text-navy hover:bg-gray-50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/student/login"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-bold text-navy border-t border-gray-100 mt-2 pt-4"
            >
              <User size={15} /> Student Portal
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
