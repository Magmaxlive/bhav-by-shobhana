import React from 'react'
import SectionHeading from './SectionHeading'

const content = {
  "eyebrow": "EXPERIENCE BHAV",
  "heading": "Where dance, music and theatre meet",
  "body": [
    "Rooted in the principles of the Natyashastra, BHAV brings Bharatanatyam, live Carnatic music and theatre onto one stage — Shobana alongside renowned vocalist Abhishek Raghuram.",
    "Music for dance, dance for music: an evening that moves beyond a conventional classical recital."
  ],
  "tagline": "One stage. Many expressions."
}

function ExperienceSection() {
  return (
    <div className='py-20 px-8 bg-ink-2'>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionHeading eyebrow={content.eyebrow} heading={content.heading} maxW='max-w-lg'/>

            <div className="flex flex-col gap-6 text-text">
                {content.body.map((i,index)=>(
                    <p className='max-w-lg tablet:text-lg text-base' key={index}>{i}</p>
                ))}

                <hr className='text-line mt-2' />

                <h4 className="text-gold tablet:text-4xl text-3xl italic font-cormorant">{content.tagline}</h4>
                
            </div>

        </div>
    </div>
  )
}

export default ExperienceSection
