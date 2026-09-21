'use client'
import React from 'react'
import { Link } from 'react-scroll'

function Button({link,offset,px='px-4',py='py-3',text}) {
  return (
    <Link
        to={link}
        offset={offset}
        smooth={true}
        className={`bg-ink border border-gold inline-block uppercase text-sm ${px} ${py} cursor-pointer font-lora font-bold text-text tracking-[0.2em] transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5`}>
        {text}
    </Link>
  )
}

export default Button
