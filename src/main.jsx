import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA_VERSION = 'makaula-v1'
if (localStorage.getItem('_mss_version') !== DATA_VERSION) {
  Object.keys(localStorage)
    .filter(k => k.startsWith('mss_'))
    .forEach(k => localStorage.removeItem(k))
  localStorage.setItem('_mss_version', DATA_VERSION)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
