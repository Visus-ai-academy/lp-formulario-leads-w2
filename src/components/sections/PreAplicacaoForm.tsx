import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import InputField from '@/components/ui/InputField'
import RedirectModal from '@/components/ui/RedirectModal'

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL_PRE_APLICACAO || ''
const TOTAL_STEPS = 8

const FATURAMENTO_OPTIONS = [
  'Até R$ 50.000/mês',
  'De R$ 50.000 a R$ 100.000/mês',
  'De R$ 100.000 a R$ 300.000/mês',
  'Mais de R$ 300.000/mês',
]

const INVESTIMENTO_OPTIONS = [
  'À vista com R$20.000,00 de desconto',
  'Parcelado em 6x',
  'Gostaria de saber se existem outras formas de parcelamento',
  'Não tenho este valor para investir no momento',
]

function applyPhoneMask(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function generateToken(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

function getProgress(step: number): number {
  return Math.round(5 + ((step - 1) / (TOTAL_STEPS - 1)) * 95)
}

export default function PreAplicacaoForm() {
  const sessionToken = useRef(generateToken())
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    nome: '', email: '', whatsapp: '', instagram: '',
    especialidade: '', faturamento: '', clinica: '', investimento: '',
  })
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)

  function sendToSheet(payload: Record<string, string>) {
    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionToken: sessionToken.current, ...payload }),
    }).catch(() => {})
  }

  function advance() {
    setError('')

    if (step === 1) {
      if (!form.nome.trim()) { setError('Nome é obrigatório'); return }
      sendToSheet({ nome: form.nome.trim() })
    } else if (step === 2) {
      if (!form.email.trim()) { setError('E-mail é obrigatório'); return }
      if (!isValidEmail(form.email)) { setError('E-mail inválido'); return }
      sendToSheet({ email: form.email.trim() })
    } else if (step === 3) {
      if (!form.whatsapp.trim()) { setError('WhatsApp é obrigatório'); return }
      sendToSheet({ whatsapp: form.whatsapp.trim() })
    } else if (step === 4) {
      if (!form.instagram.trim()) { setError('Instagram é obrigatório'); return }
      sendToSheet({ instagram: form.instagram.trim() })
    } else if (step === 5) {
      if (!form.especialidade.trim()) { setError('Especialidade é obrigatória'); return }
      sendToSheet({ especialidade: form.especialidade.trim() })
    } else if (step === 6) {
      if (!form.faturamento) { setError('Selecione uma opção para continuar'); return }
      sendToSheet({ faturamento: form.faturamento })
    } else if (step === 7) {
      if (!form.clinica.trim()) { setError('Este campo é obrigatório'); return }
      sendToSheet({ clinica: form.clinica.trim() })
    } else if (step === 8) {
      if (!form.investimento) { setError('Selecione uma opção para continuar'); return }
      sendToSheet({ investimento: form.investimento })
      setShowModal(true)
      return
    }

    setStep(s => s + 1)
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') advance()
  }

  const progress = getProgress(step)

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Barra de progresso */}
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between text-xs text-foreground/40">
          <span>Etapa {step} de {TOTAL_STEPS}</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-primary"
            initial={{ width: '5%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Conteúdo do step */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -28 }}
          transition={{ duration: 0.25 }}
        >
          {step === 1 && (
            <InputField
              id="nome"
              label="Nome"
              type="text"
              placeholder="Seu nome completo"
              value={form.nome}
              onChange={e => { setForm(p => ({ ...p, nome: e.target.value })); setError('') }}
              onKeyDown={handleKey}
              error={error}
              required
              autoFocus
            />
          )}

          {step === 2 && (
            <InputField
              id="email"
              label="E-mail"
              type="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={e => { setForm(p => ({ ...p, email: e.target.value })); setError('') }}
              onKeyDown={handleKey}
              error={error}
              required
              autoFocus
            />
          )}

          {step === 3 && (
            <InputField
              id="whatsapp"
              label="WhatsApp (com DDD)"
              type="tel"
              placeholder="(00) 00000-0000"
              value={form.whatsapp}
              onChange={e => {
                setForm(p => ({ ...p, whatsapp: applyPhoneMask(e.target.value) }))
                setError('')
              }}
              onKeyDown={handleKey}
              error={error}
              required
              autoFocus
            />
          )}

          {step === 4 && (
            <InputField
              id="instagram"
              label="Qual seu @ do Instagram"
              type="text"
              placeholder="@seu.perfil"
              value={form.instagram}
              onChange={e => { setForm(p => ({ ...p, instagram: e.target.value })); setError('') }}
              onKeyDown={handleKey}
              error={error}
              required
              autoFocus
            />
          )}

          {step === 5 && (
            <InputField
              id="especialidade"
              label="Qual sua especialidade médica?"
              type="text"
              placeholder="Ex: Cardiologia, Dermatologia..."
              value={form.especialidade}
              onChange={e => { setForm(p => ({ ...p, especialidade: e.target.value })); setError('') }}
              onKeyDown={handleKey}
              error={error}
              required
              autoFocus
            />
          )}

          {step === 6 && (
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-foreground">
                Qual sua faixa de faturamento atual?
              </p>
              <div className="flex flex-col gap-2">
                {FATURAMENTO_OPTIONS.map(option => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => { setForm(p => ({ ...p, faturamento: option })); setError('') }}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg text-sm border transition-all duration-200
                      ${form.faturamento === option
                        ? 'bg-primary/20 border-primary text-foreground font-medium'
                        : 'bg-white/5 border-white/20 text-foreground/70 hover:border-white/40 hover:bg-white/8'
                      }
                    `}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {error && <span className="text-xs text-red-400">{error}</span>}
            </div>
          )}

          {step === 7 && (
            <InputField
              id="clinica"
              label="Você possui clínica? Se sim, quantos profissionais de saúde?"
              type="text"
              placeholder="Ex: Sim, 5 profissionais / Não"
              value={form.clinica}
              onChange={e => { setForm(p => ({ ...p, clinica: e.target.value })); setError('') }}
              onKeyDown={handleKey}
              error={error}
              required
              autoFocus
            />
          )}

          {step === 8 && (
            <div className="flex flex-col gap-3">
              <p className="text-sm text-foreground/70 leading-relaxed">
                O W2 Club é um grupo seleto para médicos que querem mais do que simplesmente
                exercer a Medicina. Querem gestão e estratégia para se tornar grandes empresários
                e aprender diretamente com quem vive isso na prática. Um copia e cola de tudo o
                que o Alexandre faz para faturar, só em uma de suas clínicas, mais de 2 milhões
                por mês. O investimento para fazer parte deste programa é de{' '}
                <span className="text-foreground font-semibold">R$100.000,00 à vista</span> ou{' '}
                <span className="text-foreground font-semibold">6x de R$20.000,00</span>.
              </p>
              <p className="text-sm font-semibold text-foreground">
                Como você faria este investimento?
              </p>
              <div className="flex flex-col gap-2">
                {INVESTIMENTO_OPTIONS.map(option => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => { setForm(p => ({ ...p, investimento: option })); setError('') }}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg text-sm border transition-all duration-200
                      ${form.investimento === option
                        ? 'bg-primary/20 border-primary text-foreground font-medium'
                        : 'bg-white/5 border-white/20 text-foreground/70 hover:border-white/40 hover:bg-white/8'
                      }
                    `}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {error && <span className="text-xs text-red-400">{error}</span>}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Botões de navegação */}
      <div className={`flex gap-3 ${step > 1 ? 'flex-row' : ''}`}>
        {step > 1 && (
          <button
            type="button"
            onClick={() => { setStep(s => s - 1); setError('') }}
            className="px-5 py-3.5 rounded-lg text-sm font-semibold tracking-widest uppercase border border-white/20 text-foreground/60 hover:border-white/40 hover:text-foreground/90 active:scale-[0.98] transition-all duration-200"
          >
            Voltar
          </button>
        )}
        <button
          type="button"
          onClick={advance}
          className="flex-1 py-3.5 rounded-lg text-sm font-semibold tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
        >
          {step === TOTAL_STEPS ? 'Enviar Formulário' : 'Próximo'}
        </button>
      </div>

      {showModal && <RedirectModal />}
    </div>
  )
}
