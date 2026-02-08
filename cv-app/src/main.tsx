import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/devresume.css'
import './styles/style.css'
import '@fortawesome/fontawesome-free/js/all.min.js'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
