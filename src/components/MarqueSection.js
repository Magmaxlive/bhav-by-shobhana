import React from 'react'
import { Dot } from 'lucide-react'
import { BookingLink } from '@/data/Links'

const items = [
  'one icon',
  'one stage',
  'one unforgettable evening',
  'save 5% for groups of 10+',
  'book on ticket master',
]

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-5 pr-10">
      {items.map((text, i) => (
        <div key={i} className="flex items-center gap-10">
          <span className="font-cormorant font-semibold uppercase tracking-[0.25em] text-cream text-lg md:text-xl whitespace-nowrap">
            {text}
          </span>
          <Dot className="text-gold shrink-0" size={30} fill="currentColor" />
        </div>
      ))}
    </div>
  )
}

function MarqueSection() {
  return (
    <a
      href={BookingLink}
      target="_blank"
      className="block py-4 border-y border-line bg-crimson overflow-hidden group"
      aria-label="Book your tickets"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        <Row />
        <Row />
      </div>
    </a>
  )
}

export default MarqueSection
