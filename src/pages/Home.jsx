import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Award, TrendingUp, Users, Megaphone, ArrowRight, Bell } from 'lucide-react'

const stats = [
  { label: 'Matric Pass Rate', value: 'TBA', icon: TrendingUp },
  { label: 'Bachelors Pass', value: 'TBA', icon: Award },
  { label: 'Subject Distinctions', value: 'TBA', icon: Users },
]

export const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Notices */}
      <section className="section-pad" style={{ background: '#fff' }}>
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="card flex gap-4 items-start" style={{ borderLeft: '4px solid #DAA520' }}>
              <div className="p-2.5 rounded-xl shrink-0" style={{ background: 'rgba(218,165,32,0.12)', color: '#0D1B4C' }}>
                <Bell size={20} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block"
                  style={{ background: 'rgba(218,165,32,0.12)', color: '#B8860B' }}>
                  Admissions 2027
                </span>
                <h3 className="font-display font-bold text-lg mb-1" style={{ color: '#0D1B4C' }}>
                  Applications are now open
                </h3>
                <p className="text-sm mb-3" style={{ color: '#4b5563' }}>
                  General school applications for the <span className="font-bold">2027</span> academic year are open.
                </p>
                <Link to="/admissions" className="text-sm font-semibold flex items-center gap-1" style={{ color: '#DAA520' }}>
                  Apply now <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="card flex gap-4 items-start" style={{ borderLeft: '4px solid #DAA520' }}>
              <div className="p-2.5 rounded-xl shrink-0" style={{ background: 'rgba(218,165,32,0.12)', color: '#0D1B4C' }}>
                <Megaphone size={20} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-2 inline-block"
                  style={{ background: 'rgba(218,165,32,0.12)', color: '#B8860B' }}>
                  Boarding 2027
                </span>
                <h3 className="font-display font-bold text-lg mb-1" style={{ color: '#0D1B4C' }}>
                  Boarding applications are now open
                </h3>
                <p className="text-sm mb-3" style={{ color: '#4b5563' }}>
                  Hostel accommodation applications for the <span className="font-bold">2027</span> academic year are open.
                </p>
                <Link to="/boarding" className="text-sm font-semibold flex items-center gap-1" style={{ color: '#DAA520' }}>
                  Apply for boarding <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Quick View */}
      <section className="section-pad" style={{ background: '#EEF1F8' }}>
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-xl flex items-center gap-6"
                style={{ borderBottom: '4px solid #DAA520' }}
              >
                <div className="p-4 rounded-xl" style={{ background: 'rgba(218,165,32,0.12)', color: '#0D1B4C' }}>
                  <stat.icon size={32} />
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: '#0D1B4C' }}>{stat.value}</p>
                  <p className="text-gray-500 font-medium">{stat.label}</p>
                </div>
              </motion.div>
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
    </div>
  )
}

export default Home
