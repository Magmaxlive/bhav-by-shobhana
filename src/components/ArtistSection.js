import React from 'react'
import Image from 'next/image'
import BookingButton from './BookingButton'

const artistDetails={
  "image": "/images/shobana-portrait.webp",
  "label": "THE ARTIST",
  "title": "Padma Bhushan Shobana",
  "description": [
    "An icon of Indian cinema and Indian classical dance — actress, Bharatanatyam danseuse and choreographer.",
    "Two National Film Awards, The Padma Shri and the Padma Bhushan. Now, she brings BHAV to Auckland."
  ],
  "roles": [
    "DANSEUSE",
    "ACTRESS",
    "CHOREOGRAPHER"
  ],
  "button": {
    "text": "SEE SHOBANA LIVE",
    "arrow": "→"
  }
}

const images= [
    '/images/shobana-a.webp',
    '/images/shobana-b.webp',
    '/images/shobana-c.webp',
    '/images/shobana-d.webp',
    '/images/shobana-e.webp',
]

function ArtistSection() {
  return (
    <div>
        <div className="px-8 py-20 bg-ink">
            <div className="max-w-7xl mx-auto grid grid-cols-1 tablet:grid-cols-2 gap-15">
                <div className="relative flex aspect-[3/4] md:aspect-square tablet:aspect-[5/6] after:content-[''] after:absolute after:inset-0 after:border after:border-gold/35 after:translate-x-[14px] after:translate-y-[14px] after:pointer-events-none">
                    <Image src={artistDetails.image} alt={artistDetails.title} fill className='object-cover' />
                </div>

                <div className="flex flex-col gap-6 justify-center">
                    <h3 className="font-semibold text-xs uppercase tracking-widest text-gold">{artistDetails.label}</h3>
                    <h1 className="font-black font-cormorant lg:text-7xl md:text-6xl text-4xl tracking-wider text-cream">{artistDetails.title}</h1>

                    {artistDetails.description.map((i,index)=>(
                        <p className='text-text md:text-lg text-base' key={index}>{i}</p>
                    ))}

                    <div className="flex gap-3 flex-wrap">
                        {artistDetails.roles.map((i,index)=>(
                            <div key={index} className="flex text-text text-xs tracking-widest justify-center px-4 py-2 rounded-full border uppercase border-line">
                                {i}
                            </div>
                        ))}
                    </div>

                    <BookingButton text='see shobhana live' px='px-6' py='py-4'/>

                </div>
            </div>

            <div className="mt-15 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 tablet:grid-cols-3 gap-3">
                        {images.map((i,index)=>(
                            <div key={index} className="relative flex aspect-[3/4]">
                            <Image src={i} alt='shobana image' fill className='object-cover' />
                        </div>
                            ))}
            </div>

        </div>
      
    </div>
  )
}

export default ArtistSection
