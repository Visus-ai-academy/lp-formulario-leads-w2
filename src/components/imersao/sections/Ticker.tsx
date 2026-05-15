const LABEL = 'IMERSÃO CLÍNICA ESCALADA'
const ITEMS_PER_SET = 10

export function Ticker() {
  const set = Array.from({ length: ITEMS_PER_SET }, (_, i) => i)

  return (
    <div className="ticker-wrapper">
      <div className="ticker-track">
        {[0, 1].map(setIndex =>
          set.map(i => (
            <span key={`${setIndex}-${i}`} className="ticker-item">
              <span className="ticker-text">{LABEL}</span>
              <span className="ticker-sep">◆</span>
            </span>
          ))
        )}
      </div>
    </div>
  )
}
