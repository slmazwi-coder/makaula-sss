import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react'
import { SCHOOL } from '../lib/store'

export default function Footer() {
  return (
    <footer style={{ background: '#081232', borderTop: '4px solid #DAA520' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/assets/logo.jpg"
                alt="Makaula SSS Logo"
                className="w-14 h-14 rounded-lg object-contain shrink-0"
              />
              <div>
                <p className="font-display text-xl font-bold leading-tight" style={{ color: '#DAA520' }}>
                  Makaula SSS
                </p>
                <p className="text-xs italic leading-tight mt-0.5" style={{ color: 'rgba(218,165,32,0.55)' }}>
                  {SCHOOL.motto}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href={SCHOOL.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: 'rgba(218,165,32,0.12)', color: '#DAA520' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#DAA520'; e.currentTarget.style.color = '#0D1B4C' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(218,165,32,0.12)'; e.currentTarget.style.color = '#DAA520' }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#DAA520', borderBottom: '1px solid rgba(218,165,32,0.2)', paddingBottom: '0.5rem' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(218,165,32,0.7)' }}>
              {[
                ['About Us',      '/about'],
                ['Achievements',  '/achievements'],
                ['Staff',         '/staff'],
                ['Admissions',    '/admissions'],
                ['Documents',     '/documents'],
                ['Contact',       '/contact'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-amber-300 transition-colors"
                    style={{ color: 'rgba(218,165,32,0.7)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#FFD966' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(218,165,32,0.7)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#DAA520', borderBottom: '1px solid rgba(218,165,32,0.2)', paddingBottom: '0.5rem' }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm" style={{ color: 'rgba(218,165,32,0.7)' }}>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>{SCHOOL.address}</span>
              </li>
              {SCHOOL.phone && (
                <li className="flex items-center gap-2">
                  <Phone size={15} className="shrink-0" />
                  <span>{SCHOOL.phone}</span>
                </li>
              )}
              {SCHOOL.email && (
                <li className="flex items-center gap-2">
                  <Mail size={15} className="shrink-0" />
                  <span className="break-all">{SCHOOL.email}</span>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#DAA520', borderBottom: '1px solid rgba(218,165,32,0.2)', paddingBottom: '0.5rem' }}>
              School Hours
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(218,165,32,0.7)' }}>
              <li className="flex justify-between gap-4"><span>Mon – Thu</span><span className="font-medium">{SCHOOL.hoursWeek}</span></li>
              <li className="flex justify-between gap-4"><span>Friday</span><span className="font-medium">{SCHOOL.hoursFri}</span></li>
              <li className="flex justify-between gap-4"><span>Sat – Sun</span><span className="font-medium">Closed</span></li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ borderTop: '1px solid rgba(218,165,32,0.12)', color: 'rgba(218,165,32,0.4)' }}>
          <p>&copy; {new Date().getFullYear()} Makaula Senior Secondary School. All rights reserved.</p>
        </div>

      </div>
    </footer>
  )
}
