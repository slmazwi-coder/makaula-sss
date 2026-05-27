import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Sparkles } from 'lucide-react'
import { SCHOOL } from '../lib/store'

const SYSTEM = `You are a helpful, warm assistant for Makaula Senior Secondary School in the Eastern Cape, South Africa.

School facts:
- Address: Makaula, Eastern Cape, South Africa
- Grades 8–12, public school
- Motto: Progress Through Learning
- Theme: Transforming Minds: Achieving Excellence — The Rebuilding Journey
- Principal: Mr Nkosiphile Mmewu (Honours in Education)
- HOD: Mr Majiyezi (Departmental Head)
- 2027 admission applications currently open
- School hours: Mon–Thu 07:30–15:30, Fri 07:30–13:30
- Sports: Soccer, Netball, Athletics
- Activities: Debating, Spelling Bee, Choir, Drama

Be concise, warm and helpful. If unsure, direct them to contact the school office.`

const uid = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`

const QUICK = [
  'How do I apply for admission?',
  'Who is the principal?',
  'What are your school hours?',
  'What activities do you offer?',
]

export default function ChatbotWidget() {
  const [open, setOpen]       = useState(false)
  const [input, setInput]     = useState('')
  const [busy, setBusy]       = useState(false)
  const [messages, setMessages] = useState([{
    id: uid(), role: 'bot',
    text: `Hello! I'm the ${SCHOOL.short} assistant. Ask me anything about admissions, activities, or school life!`,
  }])
  const endRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])
  useEffect(() => { if (open) setTimeout(() => inputRef.current?.focus(), 150) }, [open])

  const addMsg = (role: string, text: string) => setMessages(p => [...p, { id: uid(), role, text }])

  const send = async (override?: string) => {
    const text = (override ?? input).trim()
    if (!text || busy) return
    addMsg('user', text)
    setInput('')
    setBusy(true)
    try {
      const lower = text.toLowerCase()
      let reply = ''
      if (lower.includes('principal')) {
        reply = 'Our principal is Mr Nkosiphile Mmewu. He holds an Honours in Education and leads the school with dedication.'
      } else if (lower.includes('admission') || lower.includes('apply')) {
        reply = 'Admissions for 2027 are currently open. Visit the Admissions page on our website or contact the school office for application forms and requirements.'
      } else if (lower.includes('hours') || lower.includes('time')) {
        reply = 'School hours are Monday–Thursday 07:30–15:30 and Friday 07:30–13:30.'
      } else if (lower.includes('activities') || lower.includes('sport') || lower.includes('choir')) {
        reply = 'We offer Soccer, Netball, Athletics, Debating, Spelling Bee, Choir, and Drama. Visit our Sport & Arts page for more details!'
      } else if (lower.includes('motto') || lower.includes('vision')) {
        reply = 'Our motto is "Progress Through Learning". Our theme is "Transforming Minds: Achieving Excellence — The Rebuilding Journey".'
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('email')) {
        reply = 'Please visit our Contact page for the latest contact details, or reach us via our Facebook page.'
      } else {
        reply = 'Thank you for your question! For detailed information, please visit the relevant page on our website or contact the school office directly.'
      }
      addMsg('bot', reply)
    } catch {
      addMsg('bot', 'I\'m having trouble right now. Please contact the school directly.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      {open && (
        <div className="fixed z-50 bottom-20 right-3 sm:right-6 flex flex-col"
          style={{
            width: 'min(375px, calc(100vw - 1.5rem))',
            height: 'min(560px, 72vh)',
            background: '#fff',
            borderRadius: '1.25rem',
            boxShadow: '0 24px 64px rgba(13,27,76,0.18)',
            border: '1px solid rgba(218,165,32,0.2)',
            overflow: 'hidden',
          }}>

          <div className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{ background: '#0D1B4C', borderBottom: '3px solid #DAA520' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#DAA520' }}>
                <Sparkles size={15} style={{ color: '#0D1B4C' }} />
              </div>
              <div>
                <p className="text-sm font-bold leading-tight" style={{ color: '#DAA520' }}>Makaula Assistant</p>
                <p className="text-xs flex items-center gap-1" style={{ color: 'rgba(218,165,32,0.6)' }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-green-400 inline-block" />
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="p-1.5 rounded-lg transition-colors"
              style={{ color: '#DAA520' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(218,165,32,0.15)' }}
              onMouseLeave={e => { e.currentTarget.style.background = '' }}>
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: '#F8FAFF' }}>
            {messages.map(m => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
                  style={m.role === 'user'
                    ? { background: '#0D1B4C', color: '#FFD966' }
                    : { background: '#fff', color: '#374151', border: '1px solid rgba(218,165,32,0.15)' }
                  }>
                  {m.text}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex justify-start">
                <div className="rounded-2xl px-4 py-3 text-sm"
                  style={{ background: '#fff', border: '1px solid rgba(218,165,32,0.15)' }}>
                  <span className="flex gap-1">
                    <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#DAA520', animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#DAA520', animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: '#DAA520', animationDelay: '300ms' }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {QUICK.map(q => (
                <button key={q} onClick={() => send(q)}
                  className="text-xs px-3 py-1.5 rounded-full transition-colors"
                  style={{ background: 'rgba(218,165,32,0.1)', color: '#0D1B4C', border: '1px solid rgba(218,165,32,0.2)' }}>
                  {q}
                </button>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2 px-3 py-3 shrink-0" style={{ borderTop: '1px solid rgba(218,165,32,0.12)' }}>
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask a question..."
              className="flex-1 text-sm px-3 py-2 rounded-xl border outline-none"
              style={{ borderColor: 'rgba(218,165,32,0.2)' }}
            />
            <button onClick={() => send()}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
              style={{ background: '#DAA520', color: '#0D1B4C' }}
              disabled={busy || !input.trim()}>
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(v => !v)}
        className="fixed z-50 bottom-4 right-3 sm:right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
        style={{ background: '#DAA520', color: '#0D1B4C' }}
        aria-label="Chat">
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  )
}
