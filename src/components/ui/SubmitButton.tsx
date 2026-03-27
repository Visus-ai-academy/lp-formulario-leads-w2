interface SubmitButtonProps {
  status: 'idle' | 'loading' | 'success' | 'error'
}

export default function SubmitButton({ status }: SubmitButtonProps) {
  const labels = {
    idle: 'ENVIAR FORMULÁRIO',
    loading: 'ENVIANDO...',
    success: 'ENVIADO COM SUCESSO!',
    error: 'ERRO — TENTAR NOVAMENTE',
  }

  const colors = {
    idle: 'bg-primary hover:bg-primary/90 text-background',
    loading: 'bg-primary/60 text-background cursor-not-allowed',
    success: 'bg-green-500 text-white cursor-default',
    error: 'bg-red-500 text-white hover:bg-red-600',
  }

  return (
    <button
      type="submit"
      disabled={status === 'loading' || status === 'success'}
      className={`
        w-full rounded-lg py-4 text-sm font-bold tracking-widest
        transition-all duration-200 cursor-pointer
        flex items-center justify-center gap-2
        ${colors[status]}
        disabled:cursor-not-allowed
      `}
    >
      {status === 'loading' && (
        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      )}
      {labels[status]}
    </button>
  )
}
