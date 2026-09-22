import React from 'react'
import Image from 'next/image'

function ImageCard({image,alt,title,content}) {
  return (
    <div className='flex flex-col gap-3 bg-dark-red border border-gold/40'>
        <div className="relative aspect-square">
            <Image fill src={image} alt={alt} className='absolute object-cover' />
        </div>
        <div className="flex flex-col gap-3 px-8 pb-8 pt-4">
            <h3 className="font-semibold text-2xl text-gold font-cormorant">{title}</h3>
            <p className='text-sm text-cream'>{content}</p>
        </div>
      
    </div>
  )
}

export default ImageCard
