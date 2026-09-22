import React from 'react'
import SectionHeading from './SectionHeading'
import BookingButton from './BookingButton'
import AnchorBtn from './AnchorBtn'
import { VenueLink } from '@/data/Links'
import Image from 'next/image'

const content = {
    eyebrow:'The Venue',
    heading:'Bruce Mason Centre',
    eventDetails:
        [
            {
                    content:'1 The Promenade, Takapuna Beach,Auckland 0622, New Zealand',
                    title:'address'
            },
            {   
                title:'date',
                content:'Saturday, 17 October 2026'
            },

            {
                title:'curtain',
                content:'6:00 PM'
            }
        ],
    image:'/images/dance-2.webp'    
}

function VenueSection() {
  return (
    <div className='bg-ink-2 px-8 py-20 border-y border-line' id='venue'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 tablet:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
            <SectionHeading eyebrow={content.eyebrow} heading={content.heading} maxW='max-w-lg'/>
            
            <div className="flex flex-col gap-3 max-w-lg">
                {content.eventDetails.map((i,index)=>(
                    <div key={index} className="flex font-cormorant  gap-10 py-4 border-t border-line">
                        <h3 className="text-gold uppercase font-bold text-sm w-24 shrink-0">{i.title}</h3>
                        <p className='text-text max-w-md text-lg font-semibold'>{i.content}</p>
                    </div>
                ))}
            </div>

            <div className="flex gap-4 flex-wrap">
                <BookingButton text='book tickets →'/>
                <AnchorBtn text='get directions' link={VenueLink}/>

            </div>
            
        </div>

        <div className="relative aspect-[4/3] self-center w-full">
            <Image src={content.image} alt='shobhana dancing' fill className='object-cover border border-line object-top'/>
        </div>

      </div>
    </div>
  )
}

export default VenueSection
