interface PillProps {
  children: React.ReactNode
}

export function Pill({ children }: PillProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '6px 20px',
        borderRadius: 999,
        border: '1px solid rgba(218, 232, 255, 0.4)',
        background: 'rgba(218, 232, 255, 0.08)',
        color: 'var(--color-text-on-dark)',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  )
}
