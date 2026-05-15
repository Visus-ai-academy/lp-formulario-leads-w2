import { useEffect, useState } from 'react'

const TARGET = new Date('2026-06-06T13:00:00Z') // 10h Brasília = 13h UTC

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="countdown-bar">
      <div className="section-inner countdown-inner">
        <p className="countdown-label">
          A IMERSÃO CLÍNICA ESCALADA
          <br />
          COMEÇA EM:
        </p>

        <div className="countdown-timer">
          <div className="countdown-unit">
            <span className="countdown-num">{pad(time.days)}</span>
            <span className="countdown-sub">DIAS</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-unit">
            <span className="countdown-num">{pad(time.hours)}</span>
            <span className="countdown-sub">HORAS</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-unit">
            <span className="countdown-num">{pad(time.minutes)}</span>
            <span className="countdown-sub">MINUTOS</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-unit">
            <span className="countdown-num">{pad(time.seconds)}</span>
            <span className="countdown-sub">SEGUNDOS</span>
          </div>
        </div>
      </div>
    </div>
  )
}
