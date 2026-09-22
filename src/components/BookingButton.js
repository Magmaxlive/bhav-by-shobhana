import React from 'react'
import { BookingLink } from '@/data/Links'

function BookingButton({text='book tickets',py='py-3',px='px-4',bg='bg-gold',textColor='text-ink'}) {
  return (
    <a
      href={BookingLink}
      target='_blank'
      className={`shine-border ${bg} text-center inline-block uppercase w-fit text-sm ${px} ${py} font-lora font-bold ${textColor} tracking-[0.2em] transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5`}>
      {text}
    </a>
  )
}

export default BookingButton
