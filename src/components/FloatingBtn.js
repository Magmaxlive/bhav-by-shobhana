'use client'

import React, { useState } from 'react'
import BookingButton from './BookingButton'
import { Dot, X } from 'lucide-react'

const event = {
  "date": "Sat 17 October 2026",
  "time": "6:00 PM",
  "venue": "Bruce Mason Centre, Takapuna",
}

function FloatingBtn() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <div className='fixed bottom-0 inset-x-0 z-50 bg-crimson px-6 py-4 border-t border-line shadow-[0_-8px_24px_rgba(0,0,0,0.4)]'>
        <button
          onClick={() => setOpen(false)}
          aria-label='Close'
          className='absolute -top-3 right-3 md:top-2 md:right-2 p-1.5 bg-ink text-gold border border-gold/40 rounded-full shadow-md hover:bg-ink/80 transition'
        >
          <X size={16} />
        </button>
        <div className="max-w-7xl mx-auto flex justify-center gap-2 md:gap-6">
             <div className="flex gap-1 items-start md:items-center flex-wrap">
                    <h3 className="font-semibold font-cormorant text-sm  md:text-lg tablet:text-xl capitalize text-text">{event.date}</h3>     <Dot className='text-cream md:flex hidden' size={20} />
                    <h3 className="font-semibold font-cormorant text-sm md:text-lg tablet:text-xl capitalize text-text">{event.time}</h3>     <Dot className='text-cream md:flex hidden' size={20} />
                    <p className="font-semibold  font-cormorant text-sm md:text-lg tablet:text-xl capitalize text-text">{event.venue}</p>
            </div>
            <div className="h-fit">
                <BookingButton/>
            </div>
        </div>

    </div>
  )
}

export default FloatingBtn
