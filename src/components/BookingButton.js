import React from 'react'
import { BookingLink } from '@/data/Links'

function BookingButton({text='book tickets'}) {
  return (
    <a
      href={BookingLink}
      target='_blank'
      className='shine-border inline-block uppercase text-sm px-4 py-3 font-lora font-bold text-ink tracking-[0.2em] transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5'
    >
      {text}
    </a>
  )
}

export default BookingButton
