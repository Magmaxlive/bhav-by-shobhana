import React from 'react'

function AnchorBtn({link,px='px-4',py='py-3',text}) {
  return (
     <a
        href={link}
        target='_blank'
        className={`bg-ink border border-gold inline-block uppercase text-sm ${px} ${py} cursor-pointer font-lora font-bold text-text tracking-[0.2em] transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5`}>
        {text}
    </a>
  )
}

export default AnchorBtn
