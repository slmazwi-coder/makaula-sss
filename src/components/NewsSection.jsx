import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Tag } from 'lucide-react'
import { getNews } from '../lib/store'

export default function NewsSection() {
  const [news, setNews] = useState([])
  useEffect(() => { setNews(getNews().slice(0, 3)) }, [])

  if (!news.length) return null

  return (
    <section className="section-pad" style={{ background: '#F8FAFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <div className="gold-bar" />
            <h2 className="section-title">News & Notices</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map(item => (
            <article key={item.id} className="card flex flex-col">
              {item.image && (
                <img src={item.image} alt={item.title}
                  className="w-full h-44 object-cover rounded-lg mb-4" />
              )}
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(218,165,32,0.12)', color: '#B8860B' }}>
                  <Tag size={11} /> {item.category}
                </span>
                <span className="flex items-center gap-1 text-xs" style={{ color: '#6b7280' }}>
                  <Calendar size={11} /> {item.date}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg mb-2 leading-tight" style={{ color: '#0D1B4C' }}>
                {item.title}
              </h3>
              <p className="text-sm flex-1 mb-4" style={{ color: '#374151' }}>
                {item.excerpt}
              </p>
              <span className="text-sm font-semibold flex items-center gap-1" style={{ color: '#DAA520' }}>
                Read more <ArrowRight size={14} />
              </span>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
