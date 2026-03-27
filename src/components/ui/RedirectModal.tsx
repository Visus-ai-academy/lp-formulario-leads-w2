import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function RedirectModal() {
  const [count, setCount] = useState(3)
  const navigate = useNavigate()

  useEffect(() => {
    if (count === 0) {
      navigate('/obrigado')
      return
    }
    const t = setTimeout(() => setCount(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [count, navigate])

  const radius = 28
  const circumference = 2 * Math.PI * radius
  const progress = circumference - (count / 3) * circumference

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
    >
      <motion.div
        className="flex flex-col items-center gap-6 px-12 py-10 rounded-2xl text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        style={{
          background: 'linear-gradient(135deg, rgba(20,20,20,0.95), rgba(40,36,28,0.95))',
          border: '1px solid rgba(146,133,92,0.3)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(146,133,92,0.1)',
        }}
      >
        {/* Anel de contagem regressiva */}
        <div className="relative flex items-center justify-center">
          <svg width="80" height="80" className="-rotate-90">
            <circle
              cx="40" cy="40" r={radius}
              fill="none"
              stroke="rgba(146,133,92,0.2)"
              strokeWidth="4"
            />
            <motion.circle
              cx="40" cy="40" r={radius}
              fill="none"
              stroke="#92855C"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={progress}
              animate={{ strokeDashoffset: progress }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </svg>
          <span className="absolute text-2xl font-bold" style={{ color: '#92855C' }}>
            {count}
          </span>
        </div>

        <div>
          <p className="text-white text-base font-semibold tracking-wide">
            Formulário enviado com sucesso!
          </p>
          <p className="text-white/50 text-sm mt-1">
            Redirecionando em {count} segundo{count !== 1 ? 's' : ''}...
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
