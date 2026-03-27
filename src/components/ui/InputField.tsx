interface InputFieldProps {
  label: string
  id: string
  type?: string
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  required?: boolean
}

export default function InputField({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-semibold text-foreground/80">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`
          w-full rounded-lg px-4 py-3 text-sm font-normal
          bg-white/5 border text-foreground placeholder:text-foreground/30
          outline-none transition-colors duration-200
          focus:border-primary focus:bg-white/8
          ${error ? 'border-red-400' : 'border-white/20 hover:border-white/40'}
        `}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  )
}
