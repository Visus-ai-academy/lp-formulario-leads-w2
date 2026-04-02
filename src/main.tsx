import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import ThankYouPage from './pages/ThankYouPage'
import PreInscricaoPage from './pages/PreInscricaoPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pre-inscricao-1" element={<PreInscricaoPage variant={1} />} />
        <Route path="/pre-inscricao-2" element={<PreInscricaoPage variant={2} />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
