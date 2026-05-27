import { useEffect, useState } from 'react'
import { getAbout } from '../lib/store'

export default function About() {
  const [data, setData] = useState(null)
  useEffect(() => { setData(getAbout()) }, [])
  if (!data) return null

  return (
    <main className="flex-1 section-pad" style={{ background: '#F8FAFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="gold-bar" />
        <h1 className="section-title mb-12">About Makaula SSS</h1>

        {/* Campus image */}
        <div className="mb-12 rounded-2xl overflow-hidden" style={{ maxHeight: '400px' }}>
          <img
            src="/assets/campus.png"
            alt="Makaula SSS Campus"
            className="w-full h-full object-cover"
          />
        </div>

        {/* History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h2 className="font-display font-bold text-2xl mb-6" style={{ color: '#0D1B4C' }}>Our School</h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: '#374151' }}>
              {data.history.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>

          {/* Quick facts */}
          <div className="card p-8" style={{ background: '#0D1B4C' }}>
            <h3 className="font-display font-bold text-xl mb-6" style={{ color: '#DAA520' }}>School at a Glance</h3>
            <dl className="space-y-4">
              {[
                ['Phase',       'Secondary (Grades 8–12)'],
                ['Sector',      'Public School'],
                ['Province',    'Eastern Cape'],
                ['Principal',   'Mr Nkosiphile Mmewu'],
                ['HOD',         'Mr Majiyezi'],
                ['Address',     'Makaula, Eastern Cape'],
                ['School Hours','Mon–Thu 07:30–15:30 · Fri 07:30–13:30'],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                  <dt className="text-xs font-bold uppercase tracking-widest w-28 shrink-0 mb-0.5 sm:mb-0 pt-0.5"
                    style={{ color: 'rgba(218,165,32,0.6)' }}>{label}</dt>
                  <dd className="text-sm" style={{ color: '#FFD966' }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Uniform */}
        <div className="mb-20">
          <h2 className="font-display font-bold text-2xl mb-6" style={{ color: '#0D1B4C' }}>School Uniform</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card" style={{ borderLeft: '4px solid #DAA520' }}>
              <h3 className="font-display font-bold text-lg mb-3" style={{ color: '#0D1B4C' }}>Girls</h3>
              <p className="text-sm" style={{ color: '#374151' }}>
                Teal/cyan pleated skirt, navy blue V-neck jersey with striped trim, white collared shirt, navy/cyan striped socks, black school shoes. Blazer with navy pinstripes for formal occasions.
              </p>
            </div>
            <div className="card" style={{ borderLeft: '4px solid #DAA520' }}>
              <h3 className="font-display font-bold text-lg mb-3" style={{ color: '#0D1B4C' }}>Boys</h3>
              <p className="text-sm" style={{ color: '#374151' }}>
                Dark trousers (grey/charcoal), white collared shirt, navy blue jersey/blazer with school crest, school tie. Navy pinstriped blazer for formal occasions.
              </p>
            </div>
          </div>
        </div>

        {/* Principal */}
        <div style={{ background: '#EEF1F8', border: '1px solid rgba(13,27,76,0.15)', borderRadius: '1.25rem', overflow: 'hidden' }}>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center p-10 text-center"
              style={{ background: '#0D1B4C', borderRight: '3px solid #DAA520' }}>
              <div className="w-36 h-36 rounded-full mb-4 overflow-hidden"
                style={{ border: '4px solid #DAA520' }}>
                <img
                  src="/assets/Staff/principal.jpg"
                  alt="Mr Nkosiphile Mmewu"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="font-display font-bold text-lg" style={{ color: '#DAA520' }}>{data.principal.name}</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(218,165,32,0.6)' }}>{data.principal.title}</p>
              {data.principal.qualifications && (
                <p className="text-xs mt-1" style={{ color: 'rgba(218,165,32,0.45)' }}>{data.principal.qualifications}</p>
              )}
            </div>
            <div className="col-span-2 p-8 md:p-12 flex flex-col justify-center">
              <div className="font-display text-5xl leading-none mb-4 opacity-30 select-none" style={{ color: '#DAA520' }}>"</div>
              <div className="space-y-4 text-base leading-relaxed" style={{ color: '#374151' }}>
                {data.principal.message.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
