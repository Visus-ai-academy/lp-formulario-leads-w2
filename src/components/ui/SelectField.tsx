interface SelectFieldProps {
  label?: string
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: string[]
  placeholder?: string
  error?: string
  required?: boolean
}

export default function SelectField({
  label,
  id,
  value,
  onChange,
  options,
  placeholder = 'Selecione uma opção',
  error,
  required,
}: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-foreground/80">
          {label} {required && <span className="text-primary">*</span>}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className={`
          w-full rounded-lg px-4 py-3 text-sm font-normal
          bg-white/5 border text-foreground
          outline-none transition-colors duration-200
          focus:border-primary focus:bg-white/8
          ${!value ? 'text-foreground/30' : ''}
          ${error ? 'border-red-400' : 'border-white/20 hover:border-white/40'}
        `}
      >
        <option value="" disabled className="bg-background text-foreground/30">
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-background text-foreground">
            {opt}
          </option>
        ))}
      </select>
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  )
}
