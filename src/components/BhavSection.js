'use client'

import React from 'react'
import Image from 'next/image'
import SectionHeading from './SectionHeading'
import { Dot, Upload } from 'lucide-react'
import BookingButton from './BookingButton'

const WhatsAppIcon = ({ size = 16 }) => (
  <svg viewBox='0 0 24 24' width={size} height={size} fill='currentColor' aria-hidden='true'>
    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413' />
  </svg>
)

const content = {
  "backgroundImage": {
    "src": "images/be-part-of-bhav-bg.jpg",
    "alt": ""
  },
  "eyebrow": "ONE NIGHT ONLY",
  "heading": {
    "main": 'be part of BHAV',
    
  },
  "details": {
    "date": "17 October 2026",
    "time": "6:00 PM",
    "venue": "Bruce Mason Centre, Takapuna"
  },
  "cta": {
    "label": "BOOK YOUR TICKETS ON TICKETMASTER →",
    "href": "TICKETMASTER_EVENT_URL"
  },
  "offer": {
    "label": "GROUP BOOKING OFFER",
    "text": "Book for a group of <strong>10 or more together</strong> and enjoy a <strong>5% discount</strong>.",
    "note": "Tickets are available exclusively on Ticketmaster."
  },
  "share": {
    "label": "TELL SOMEONE",
    "buttons": [
      {
        "label": "WHATSAPP",
        "icon": "whatsapp",
        "href": "https://wa.me/?text=SHARE_MESSAGE"
      },
      {
        "label": "SHARE",
        "icon": "share",
        "action": "native-share"
      }
    ]
  }
}

function BhavSection() {
  const handleShare = async () => {
    if (typeof window === 'undefined') return
    const shareData = {
      title: 'BHAV — Bharathanin Aindham Vedham',
      text: 'Padma Bhushan Shobana in Auckland — one night only.',
      url: window.location.href,
    }
    if (navigator.share) {
      try { await navigator.share(shareData) } catch {}
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareData.url)
    }
  }

  return (
    <div className='relative overflow-hidden px-8 py-20 bg-crimson'>
        <Image
          src='/images/abhinaya-1.webp'
          alt=''
          fill
          sizes='100vw'
          className='object-cover object-right opacity-25 pointer-events-none'
        />
        <div
          className='absolute inset-0 pointer-events-none'
          style={{
            background:
              'linear-gradient(to right, rgba(27, 5, 6, 0.96) 0%, rgba(34, 7, 9, 0.85) 40%, rgba(34, 8, 9, 0.6) 100%), radial-gradient(60% 80% at 80% 50%, rgba(122, 18, 20, .35), transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8">
            <SectionHeading eyebrow={content.eyebrow} heading={content.heading.main} align='justify-center items-center'/>
             <div className="flex gap-1 md:flex-row flex-col py-4 border-y border-line justify-center items-center flex-wrap">
                    <h3 className="font-semibold font-cormorant text-2xl capitalize text-text">{content.details.date}</h3>     <Dot className='text-crimson md:flex hidden' size={30} />
                    <h3 className="font-semibold font-cormorant text-2xl capitalize text-text">{content.details.time}</h3>     <Dot className='text-crimson md:flex hidden' size={30} />
                    <p className="font-semibold font-cormorant text-2xl capitalize text-text">{content.details.venue}</p>
            </div>
           <div className="flex justify-center items-center">
             <BookingButton text='book your tickets on ticketmaster →' px='px-6' py='py-5' />
           </div>

           <div className="flex flex-col items-center self-center text-center gap-3 p-8 border w-fit border-line bg-gradient-to-b from-dark-red to-ink">
                <h3 className="text-gold text-xs font-semibold tracking-widest uppercase">{content.offer.label}</h3>
                <p
                  className="font-cormorant text-xl md:text-2xl text-text max-w-2xl"
                  dangerouslySetInnerHTML={{ __html: content.offer.text }}
                />
                <p className="text-sm text-text/70">{content.offer.note}</p>
           </div>

           <div className="flex items-center flex-col md:flex-row justify-center gap-4 flex-wrap pt-2">
                <span className="text-gold text-xs uppercase tracking-widest font-semibold">{content.share.label}</span>
                <a
                  href={content.share.buttons[0].href}
                  target='_blank'
                  rel='noreferrer'
                  className="flex items-center gap-2 px-4 py-3 border border-line text-text bg-ink hover:bg-ink/40 transition"
                >
                  <WhatsAppIcon /> <span className="uppercase text-sm tracking-wider font-lora font-bold">Whatsapp</span>
                </a>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-3 border border-line text-text bg-ink hover:bg-ink/40 transition"
                >
                  <Upload size={16} /> <span className="uppercase text-sm tracking-wider font-lora font-bold">Share</span>
                </button>
           </div>
        </div>
      
    </div>
  )
}

export default BhavSection
