import React from 'react'
import SectionHeading from './SectionHeading'
import { BookingLink,VenueLink } from '@/data/Links'
import Card from './Card'

const content = {
  "eyebrow": "BEFORE YOU BOOK",
  "heading": "Good to know",
  "cards": [
    {
      "badge": "SAVE 5%",
      "title": "Coming as a group?",
      "text": "Book for a group of 10 or more together on Ticketmaster and enjoy a 5% discount — perfect for families, dance schools and community groups."
    },
    {
      "badge": "OFFICIAL",
      "title": "Where to book",
      "text": "Tickets are available exclusively on Ticketmaster.",
      "link": {
        "label": "Book here →",
        "href": BookingLink
      }
    },
    {
      "badge": "TAKAPUNA",
      "title": "Getting there",
      "text": "Bruce Mason Centre, 1 The Promenade, Takapuna Beach — a short walk from the Takapuna bus interchange.",
      "link": {
        "label": "Directions →",
        "href": VenueLink
      }
    }
  ]
}

function GoodtoKnowSection() {
  return (
    <div className='px-8 py-20 bg-gradient-to-b from-ink to-ink-2' id='good-to-know'>
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <SectionHeading eyebrow={content.eyebrow} heading={content.heading}/>
            <div className="grid grid-cols-1 md:grid-cols-2 tablet:grid-cols-3 gap-8">
                 {content.cards.map((i,index)=>(
                <Card key={index} badge={i.badge} title={i.title} content={i.text} link={i.link?.href} label={i.link?.label} />
            ))}
            </div>
        
        </div>
      
    </div>
  )
}

export default GoodtoKnowSection
