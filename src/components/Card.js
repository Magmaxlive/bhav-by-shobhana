import React from 'react'

function Card({badge,title,content,label,link}) {
  return (
    <div className='bg-dark p-8 flex flex-col gap-4 border border-line'>
        <span className="px-3 py-2 rounded-full text-xs text-gold border w-fit border-gold/60 tracking-wides uppercase">{badge}</span>
        <h3 className="font-bold text-gold text-2xl capitalize font-cormorant">{title}</h3>
        <p className="text-base text-text">{content}</p>
        {link &&
            <a href={link} target='_blank' className='text-gold underline underline-offset-4'>{label}</a>
        }
    </div>
  )
}

export default Card
