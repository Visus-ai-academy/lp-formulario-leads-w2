import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import ThankYouPage from './pages/ThankYouPage'
import PreInscricaoPage from './pages/PreInscricaoPage'
import PreAplicacaoPage from './pages/PreAplicacaoPage'
import ImersaoClinicaPage from './pages/ImersaoClinicaPage'
import ImersaoObrigadoPage from './pages/ImersaoObrigadoPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pre-inscricao-1" element={<PreInscricaoPage variant={1} />} />
        <Route path="/pre-inscricao-2" element={<PreInscricaoPage variant={2} />} />
        <Route path="/pre-aplicacao" element={<PreAplicacaoPage />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
        <Route path="/imersao-clinica-escalada" element={<ImersaoClinicaPage />} />
        <Route path="/inscricao-concluida" element={<ImersaoObrigadoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
