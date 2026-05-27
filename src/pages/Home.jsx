import { Link } from 'react-router-dom'
import { ArrowRight, Award, TrendingUp, Users, Bell, BookOpen, Target } from 'lucide-react'
import Hero from '../components/Hero'
import NewsSection from '../components/NewsSection'

const PILLARS = [
  { icon: Award,     title: 'Academic Excellence', desc: 'Preparing learners for the National Senior Certificate (NSC) and beyond through quality education.' },
  { icon: Target,    title: 'Sport & Athletics',   desc: 'Competitive teams in soccer, netball, and athletics at district and regional level.' },
  { icon: BookOpen,  title: 'Arts & Culture',      desc: 'Choir, drama, debating, and spelling bee programmes that celebrate our heritage.' },
  { icon: Users,     title: 'Community Values',    desc: 'A school rooted in respect, discipline, and pride — where every learner belongs.' },
]

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <NewsSection />

      {/* Notice banners */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                badge: 'Admissions 2027',
                title: 'Applications are now open',
                body:  'Submit your admission application for the 2027 academic year at Makaula Senior Secondary School.',
                to:    '/admissions',
                label: 'Apply now',
              },
            ].map(({ badge, title, body, to, label }) => (
              <div key={to} className="card flex gap-4 items-start"
                style={{ borderLeft: '4px solid #DAA520' }}>
                <div className="p-2.5 rounded-xl shrink-0" style={{ background: 'rgba(218,165,32,0.12)', color: '#0D1B4C' }}>
                  <Bell size={20} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ background: 'rgba(218,165,32,0.12)', color: '#B8860B' }}>
                    {badge}
                  </span>
                  <h3 className="font-display font-bold text-lg mb-1" style={{ color: '#0D1B4C' }}>{title}</h3>
                  <p className="text-sm mb-3" style={{ color: '#4b5563' }}>{body}</p>
                  <Link to={to} className="text-sm font-semibold flex items-center gap-1" style={{ color: '#DAA520' }}>
                    {label} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-pad" style={{ background: '#EEF1F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="gold-bar mx-auto" />
            <h2 className="section-title">Why Makaula SSS?</h2>
            <p className="mt-3 max-w-xl mx-auto text-sm" style={{ color: '#4b5563' }}>
              A school where every learner is seen, valued, and challenged to reach their full potential.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card text-center">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'rgba(218,165,32,0.12)', color: '#0D1B4C' }}>
                  <Icon size={24} />
                </div>
                <h3 className="font-display font-bold mb-2" style={{ color: '#0D1B4C' }}>{title}</h3>
                <p className="text-sm" style={{ color: '#4b5563' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-pad" style={{ background: '#EEF1F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="gold-bar mx-auto" />
            <h2 className="section-title">School Life</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: '/assets/hero/award-ceremony.jpg', alt: 'Awards ceremony' },
              { src: '/assets/hero/choir.jpg', alt: 'School choir' },
              { src: '/assets/hero/assembly.jpg', alt: 'School assembly' },
              { src: '/assets/hero/group-photo.jpg', alt: 'Students and staff group photo' },
              { src: '/assets/hero/certificates.jpg', alt: 'Certificate presentation' },
              { src: '/assets/hero/gathering.jpg', alt: 'Community gathering' },
            ].map(({ src, alt }) => (
              <div key={src} className="rounded-2xl overflow-hidden shadow-md">
                <img src={src} alt={alt} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motto CTA */}
      <section style={{ background: '#0D1B4C', borderTop: '4px solid #DAA520', borderBottom: '4px solid #DAA520' }}>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="font-display font-black text-3xl sm:text-4xl mb-4" style={{ color: '#DAA520' }}>
            "Progress Through Learning"
          </p>
          <p className="text-base mb-8" style={{ color: 'rgba(218,165,32,0.7)' }}>
            Transforming minds, achieving excellence — join the Makaula SSS family and discover what you're truly capable of.
          </p>
          <Link to="/admissions" className="btn-primary text-base px-8 py-3">
            Start Your Application <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
