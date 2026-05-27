// ── Storage helpers ────────────────────────────────────────────────────────
const get = (key, fallback) => {
  try {
    const raw = localStorage.getItem(`mss_${key}`)
    return raw ? JSON.parse(raw) : fallback
  } catch { return fallback }
}

const set = (key, value) => {
  try { localStorage.setItem(`mss_${key}`, JSON.stringify(value)) } catch {}
}

// ── School constants ────────────────────────────────────────────────────────
export const SCHOOL = {
  name:       'Makaula Senior Secondary School',
  short:      'Makaula SSS',
  motto:      'Progress Through Learning',
  theme:      'Transforming Minds: Achieving Excellence — The Rebuilding Journey',
  emis:       '',
  address:    'Makaula, Eastern Cape, South Africa',
  postal:     '',
  phone:      '',
  cell:       '',
  email:      '',
  province:   'Eastern Cape',
  district:   '',
  circuit:    '',
  sector:     'Public',
  grades:     'Grade 8 – Grade 12',
  hoursWeek:  '07:30 – 15:30',
  hoursFri:   '07:30 – 13:30',
  coords:     { lat: -31.0, lng: 28.5 },
  facebook:   'https://www.facebook.com/profile.php?id=100063904498498',
  tiktok:     '#',
}

// ── Default data ─────────────────────────────────────────────────────────
const DEFAULT_NEWS = [
  {
    id: '1',
    title: '2027 Admissions Now Open',
    date: '2026-05-01',
    excerpt: 'Applications for Grade 8–12 admission for the 2027 academic year are now open at Makaula Senior Secondary School.',
    body: 'Makaula Senior Secondary School is accepting applications for the 2027 academic year. Contact the school office for more details on the admission process and requirements.',
    image: '',
    category: 'Admissions',
  },
  {
    id: '2',
    title: 'Awards Ceremony Highlights',
    date: '2026-04-15',
    excerpt: 'Top-performing learners were honoured at our annual awards ceremony, celebrating academic excellence across all grades.',
    body: 'Makaula SSS celebrated its top-performing learners at the annual awards ceremony. Students received certificates and tablets in recognition of their outstanding academic achievements. The event was attended by staff, parents, community leaders, and MUT representatives.',
    image: '/assets/hero/award-ceremony.jpg',
    category: 'Events',
  },
  {
    id: '3',
    title: 'New Departmental Head Appointed',
    date: '2026-03-20',
    excerpt: 'Congratulations to Mr Majiyezi on his appointment as the new Departmental Head at Makaula SSS.',
    body: 'We are proud to announce the appointment of Mr Majiyezi as the new Departmental Head at Makaula Senior Secondary School. His leadership and commitment to excellence will strengthen our academic programmes as we continue our rebuilding journey.',
    image: '/assets/Staff/hod-majiyezi.jpg',
    category: 'Staff',
  },
]

const DEFAULT_ABOUT = {
  history: [
    'Makaula Senior Secondary School is a public secondary school serving learners from Grade 8 to Grade 12 in the Eastern Cape, South Africa.',
    'With our motto "Progress Through Learning", Makaula SSS is committed to academic excellence, community values, and the holistic development of every learner who walks through our doors.',
    'The school is on a transformative journey — "Transforming Minds: Achieving Excellence — The Rebuilding Journey" — dedicated to rebuilding a culture of achievement, discipline, and pride in education.',
    'Our school boasts a vibrant community with strong ties to local organisations and universities, including partnerships with Mangosuthu University of Technology (MUT) and various agricultural development programmes.',
  ],
  principal: {
    name: 'Mr Nkosiphile Mmewu',
    title: 'Principal',
    qualifications: 'Honours in Education',
    message: [
      'Welcome to Makaula Senior Secondary School. We believe every learner carries within them the capacity for greatness. Our role is to unlock it — through discipline, love, and unwavering belief in their potential.',
      'At Makaula SSS, we are on a rebuilding journey — transforming minds and achieving excellence. Our motto — Progress Through Learning — inspires us each day to pursue progress in everything we do.',
      'Together with our dedicated staff, parents, and community, we are building a school that every learner can be proud of.',
    ],
  },
}

const DEFAULT_RESULTS = {
  '2025': {
    passRate: 0,
    bachelors: 0,
    bachelorRate: 0,
    distinctions: 0,
    wrote: 0,
    subjects: [],
  },
  '2024': { passRate: 0, bachelors: 0, bachelorRate: 0, distinctions: 0, wrote: 0, subjects: [] },
  '2023': { passRate: 0, bachelors: 0, bachelorRate: 0, distinctions: 0, wrote: 0, subjects: [] },
}

const DEFAULT_ACTIVITIES = [
  { id: '1', name: 'Soccer',    category: 'Sport',    description: 'Boys and girls teams competing at district and regional level.',      image: '' },
  { id: '2', name: 'Netball',   category: 'Sport',    description: 'Competitive teams across all age groups.',                           image: '' },
  { id: '3', name: 'Athletics', category: 'Sport',    description: 'Track and field development and inter-district competition.',         image: '' },
  { id: '4', name: 'Debating',  category: 'Academic', description: 'Building critical thinking and public speaking skills.',              image: '' },
  { id: '5', name: 'Spelling Bee', category: 'Academic', description: 'Language enrichment and vocabulary building.',                    image: '' },
  { id: '6', name: 'Choir',     category: 'Culture',  description: 'Celebrating our heritage through choral music.',                     image: '/assets/hero/choir.jpg' },
  { id: '7', name: 'Drama',     category: 'Culture',  description: 'Performances celebrating culture, language, and community.',         image: '' },
]

const DEFAULT_HALL = [
  { id: '1', name: 'Top Achiever', title: 'Best Matric Learner', year: '2025', desc: '', image: '' },
  { id: '2', name: 'Top Achiever', title: '2nd Best Matric Learner', year: '2025', desc: '', image: '' },
  { id: '3', name: 'Top Achiever', title: '3rd Best Matric Learner', year: '2025', desc: '', image: '' },
]

const DEFAULT_CONTACT = {
  address: SCHOOL.address,
  postal:  SCHOOL.postal,
  phone:   SCHOOL.phone || 'Contact the school office',
  cell:    SCHOOL.cell,
  email:   SCHOOL.email || 'Contact the school office',
  monThu:  '07:30 – 15:30',
  friday:  '07:30 – 13:30',
  hoursWeek: SCHOOL.hoursWeek,
  hoursFri:  SCHOOL.hoursFri,
}

// ── Getters / Setters ───────────────────────────────────────────────────────
export const getNews       = ()      => get('news',       DEFAULT_NEWS)
export const setNews       = (v)     => set('news',       v)
export const getAbout      = ()      => get('about',      DEFAULT_ABOUT)
export const setAbout      = (v)     => set('about',      v)
export const getActivities = ()      => get('activities', DEFAULT_ACTIVITIES)
export const setActivities = (v)     => set('activities', v)
export const getHallOfFame = ()      => get('hall',       DEFAULT_HALL)
export const setHallOfFame = (v)     => set('hall',       v)
export const getContact    = ()      => get('contact',    DEFAULT_CONTACT)
export const setContact    = (v)     => set('contact',    v)
export const getDocuments  = ()      => get('documents',  [])
export const setDocuments  = (v)     => set('documents',  v)
export const getApplications = ()   => get('applications', [])
export const setApplications = (v)  => set('applications', v)
export const getResultsByYear = (y)  => get(`results_${y}`, DEFAULT_RESULTS[y] || null)
export const setResultsByYear = (y, v) => set(`results_${y}`, v)
export const getAchievers = (y)      => get(`achievers_${y}`, [])
export const setAchievers = (y, v)   => set(`achievers_${y}`, v)

// ── Auth ────────────────────────────────────────────────────────────
export const isAuthenticated = () => localStorage.getItem('mss_auth') === 'true'
export const login  = (pw) => { if (pw === 'admin2026') { localStorage.setItem('mss_auth', 'true'); return true } return false }
export const logout = ()   => localStorage.removeItem('mss_auth')

// ── IDs ────────────────────────────────────────────────────────────
export const generateId = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`

export const generateStudentNumber = (year) => {
  const key = `mss_ctr_${year}`
  const n = Number(localStorage.getItem(key) || 0) + 1
  localStorage.setItem(key, String(n))
  return `${year}-${String(n).padStart(6, '0')}`
}

export const calcAvg = (marks = []) => {
  if (!marks.length) return 0
  return Math.round((marks.reduce((s, m) => s + (m.mark || 0), 0) / marks.length) * 10) / 10
}
