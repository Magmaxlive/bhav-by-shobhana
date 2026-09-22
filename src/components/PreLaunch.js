import React from 'react'
import Image from 'next/image'
import SectionHeading from './SectionHeading'
import BookingButton from './BookingButton'
import PreLaunchPlayer from './PreLaunchPlayer'
import { BookingLink } from '@/data/Links'

const content ={
    eyebrow:'From the pre-launch',
    heading:'Auckland is already dancing',
    video:{
        vimeoId:'1228743282',
        title:'BHAV Pre-Launch',
        meta:'BHAV Pre-Launch • Auckland • 1 min'
    },
    images:[
        { src:'/images/abhinaya-1.webp', alt:'Shobana in abhinaya - portrait 1' },
        { src:'/images/abhinaya-3.webp', alt:'Shobana in abhinaya - portrait 2' },
        { src:'/images/abhinaya-4.webp', alt:'Shobana in abhinaya - portrait 3' },
        { src:'/images/abhinaya-2.webp', alt:'Shobana in abhinaya - portrait 4' }
    ]
}

function PreLaunch() {
  return (
    <div className='bg-ink px-8 py-20' id='preLaunch'>
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
            <SectionHeading eyebrow={content.eyebrow} heading={content.heading}/>

            <div className='bg-ink-2 border border-line overflow-hidden'>
                <PreLaunchPlayer videoId={content.video.vimeoId} title={content.video.title} />
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5'>
                    <p className='text-xs md:text-sm uppercase md:tracking-widest tracking-wider text-cream font-lora'>{content.video.meta}</p>
                    <BookingButton text='book now →' px='px-6' py='py-4' bg='bg-crimson' textColor='text-text'/>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {content.images.map((img) => (
                    <a key={img.src} href={BookingLink} target='_blank' className='group relative aspect-[3/4] overflow-hidden border border-line bg-ink-2 block'>
                        <Image src={img.src} alt={img.alt} fill sizes='(min-width: 768px) 25vw, 50vw' className='object-cover transition-transform duration-500 group-hover:scale-105' />
                        <div className='absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-ink via-ink/80 to-transparent pt-16 pb-4 px-3'>
                            <h3 className='font-bold text-xs tracking-wider text-gold uppercase text-center'>Book tickets</h3>
                        </div>
                    </a>
                    
                ))}
            </div>

        </div>

    </div>
  )
}

export default PreLaunch
