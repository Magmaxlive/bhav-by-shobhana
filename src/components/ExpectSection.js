import React from 'react'
import SectionHeading from './SectionHeading'
import ImageCard from './ImageCard'
import BookingButton from './BookingButton'

const content = {
  "eyebrow": "WHAT TO EXPECT",
  "heading": {
    "main": "Three traditions,",
    "accent": "one evening"
  },
  "cards": [
    {
      "image": {
        "src": "/images/dance-1.webp",
        "alt": "Shobana in a red-and-gold Bharatanatyam costume, holding a low dance pose in front of traditional wooden doors"
      },
      "title": "Classical Dance",
      "text": "Shobana’s distinctive interpretation of one of India’s most celebrated dance traditions."
    },
    {
      "image": {
        "src": "/images/dance-2.webp",
        "alt": "Shobana mid-dance between dark wooden pillars, one hand raised in a mudra"
      },
      "title": "Live Carnatic Music",
      "text": "The richness and spontaneity of live classical music, played on stage."
    },
    {
      "image": {
        "src": "/images/dance-3.webp",
        "alt": "Shobana in close-up with a vivid, expressive face and gesturing hands, in red silk and temple jewellery"
      },
      "title": "Theatre & Storytelling",
      "text": "Movement, expression and music together in one compelling theatrical experience."
    }
  ],
  "tagline": "DANCE • MUSIC • THEATRE — ALL ON ONE STAGE"
}

function ExpectSection() {
  return (
    <div className='px-8 py-20 bg-gradient-to-b from-crimson-lit to-crimson scroll-mt-24' id='evening'>
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        <SectionHeading 
        eyebrow={content.eyebrow} 
        heading={content.heading.main} 
        accent={content.heading.accent}
        align='justify-center items-center' 
        textAlign='text-center'/>

        {/* cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 tablet:grid-cols-3 gap-6">
            {content.cards.map((i,index)=>(
                <ImageCard key={index} image={i.image.src} alt={i.image.alt} title={i.title} content={i.text} />
            ))}
        </div>

        {/* tagline */}

      <div className="flex flex-col justify-center items-center gap-6">
          <p className="text-cream tracking-widest text-xl font-cormorant uppercase font-bold text-center">{content.tagline}</p>
        <BookingButton text='book your seats' px='px-6' py='py-5'/>
      </div>

      </div>
    </div>
  )
}

export default ExpectSection
