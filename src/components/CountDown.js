'use client'

import { useEffect, useState } from 'react'

function getRemaining(target) {
  const diff = target - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    
    done: false,
  }
}

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center min-w-16">
      <span className=" font-bold text-gold text-xl leading-none tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-text/70 text-[10px] md:text-xs uppercase tracking-[0.25em] mt-1">
        {label}
      </span>
    </div>
  )
}

function Separator() {
  return <span className="font-cormorant text-crimson text-4xl md:text-5xl leading-none">:</span>
}

function CountDown({ target = '2026-10-17T18:00:00+13:00' }) {
  const targetMs = new Date(target).getTime()
  const [t, setT] = useState(null)

  useEffect(() => {
    setT(getRemaining(targetMs))
    const id = setInterval(() => setT(getRemaining(targetMs)), 1000)
    return () => clearInterval(id)
  }, [targetMs])

  if (!t) {
    return <div className="h-20" aria-hidden />
  }

  if (t.done) {
    return (
      <div className="font-cormorant text-gold text-2xl tracking-widest uppercase">
        The show has begun
      </div>
    )
  }

  return (
    <div className="flex items-end gap-3 md:gap-4">
      <Unit value={t.days} label="Days" />
      <Separator />
      <Unit value={t.hours} label="Hours" />
      <Separator />
      <Unit value={t.minutes} label="Minutes" />
     
    </div>
  )
}

export default CountDown
