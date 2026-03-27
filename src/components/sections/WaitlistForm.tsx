import { useState } from 'react'
import { motion } from 'framer-motion'
import InputField from '@/components/ui/InputField'
import SubmitButton from '@/components/ui/SubmitButton'
import RedirectModal from '@/components/ui/RedirectModal'

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL || ''

type Status = 'idle' | 'loading' | 'success' | 'error'

function applyPhoneMask(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function WaitlistForm() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', crm: '' })
  const [errors, setErrors] = useState<Partial<typeof form>>({})
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value
      if (field === 'telefone') value = applyPhoneMask(value)
      setForm(prev => ({ ...prev, [field]: value }))
      if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  function validate(): boolean {
    const next: Partial<typeof form> = {}
    if (!form.nome.trim()) next.nome = 'Nome é obrigatório'
    if (!form.email.trim()) next.email = 'E-mail é obrigatório'
    else if (!isValidEmail(form.email)) next.email = 'E-mail inválido'
    if (!form.telefone.trim()) next.telefone = 'Telefone é obrigatório'
    if (!form.crm.trim()) next.crm = 'CRM é obrigatório'
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
          ...form,
          dataHora: new Date().toLocaleString('pt-BR'),
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

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full"
      initial="hidden"
      animate="visible"
    >
      {([
        { field: 'nome', label: 'Nome', type: 'text', placeholder: 'Seu nome completo' },
        { field: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
        { field: 'telefone', label: 'Telefone', type: 'tel', placeholder: '(00) 00000-0000' },
        { field: 'crm', label: 'CRM', type: 'text', placeholder: 'Número do seu CRM' },
      ] as const).map(({ field, label, type, placeholder }, i) => (
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

      <motion.div custom={4} variants={fadeUp}>
        <SubmitButton status={status} />
      </motion.div>

      {status === 'success' && <RedirectModal />}
    </motion.form>
  )
}
