import { useState } from 'react'
import { motion } from 'framer-motion'
import InputField from '@/components/ui/InputField'
import SelectField from '@/components/ui/SelectField'
import SubmitButton from '@/components/ui/SubmitButton'
import RedirectModal from '@/components/ui/RedirectModal'

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL2 || ''

type Status = 'idle' | 'loading' | 'success' | 'error'

const FATURAMENTO_OPTIONS = [
  'Até R$50.000,00 ao mês',
  'De R$50.000,00 à R$100.000,00 ao mês',
  'De R$100.000,00 à R$300.000,00 ao mês',
  'Mais de R$300.000,00 ao mês',
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

export default function PreInscricaoForm() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    instagram: '',
    especialidade: '',
    faturamento: '',
    clinica: '',
  })
  const [errors, setErrors] = useState<Partial<typeof form>>({})
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      let value = e.target.value
      if (field === 'whatsapp') value = applyPhoneMask(value)
      setForm(prev => ({ ...prev, [field]: value }))
      if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  function validate(): boolean {
    const next: Partial<typeof form> = {}
    if (!form.nome.trim()) next.nome = 'Nome é obrigatório'
    if (!form.email.trim()) next.email = 'E-mail é obrigatório'
    else if (!isValidEmail(form.email)) next.email = 'E-mail inválido'
    if (!form.whatsapp.trim()) next.whatsapp = 'WhatsApp é obrigatório'
    if (!form.instagram.trim()) next.instagram = 'Instagram é obrigatório'
    if (!form.especialidade.trim()) next.especialidade = 'Especialidade é obrigatória'
    if (!form.faturamento) next.faturamento = 'Selecione uma faixa de faturamento'
    if (!form.clinica.trim()) next.clinica = 'Este campo é obrigatório'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          whatsapp: form.whatsapp,
          instagram: form.instagram,
          especialidade: form.especialidade,
          faixaFaturamento: form.faturamento,
          possuiClinica: form.clinica,
        }),
      })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.4 },
    }),
  }

  const textFields = [
    { field: 'nome' as const, label: 'Nome', type: 'text', placeholder: 'Seu nome completo' },
    { field: 'email' as const, label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
    { field: 'whatsapp' as const, label: 'WhatsApp (com DDD)', type: 'tel', placeholder: '(00) 00000-0000' },
    { field: 'instagram' as const, label: 'Qual @ do seu Instagram?', type: 'text', placeholder: '@seuinstagram' },
    { field: 'especialidade' as const, label: 'Qual sua especialidade médica?', type: 'text', placeholder: 'Ex: Cardiologia, Dermatologia...' },
  ]

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full"
      initial="hidden"
      animate="visible"
    >
      {textFields.map(({ field, label, type, placeholder }, i) => (
        <motion.div key={field} custom={i} variants={fadeUp}>
          <InputField
            id={field}
            label={label}
            type={type}
            placeholder={placeholder}
            value={form[field]}
            onChange={handleChange(field)}
            error={errors[field]}
            required
          />
        </motion.div>
      ))}

      <motion.div custom={5} variants={fadeUp}>
        <SelectField
          id="faturamento"
          label="Qual sua faixa de faturamento atual?"
          value={form.faturamento}
          onChange={handleChange('faturamento')}
          options={FATURAMENTO_OPTIONS}
          error={errors.faturamento}
          required
        />
      </motion.div>

      <motion.div custom={6} variants={fadeUp}>
        <InputField
          id="clinica"
          label="Você possui clínica? Se sim, quantos profissionais de saúde?"
          type="text"
          placeholder="Ex: Sim, 5 profissionais"
          value={form.clinica}
          onChange={handleChange('clinica')}
          error={errors.clinica}
          required
        />
      </motion.div>

      <motion.div custom={7} variants={fadeUp}>
        <SubmitButton status={status} />
      </motion.div>

      {status === 'success' && <RedirectModal />}
    </motion.form>
  )
}
