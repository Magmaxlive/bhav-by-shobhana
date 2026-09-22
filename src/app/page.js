import ArtistSection from '@/components/ArtistSection'
import EventDateSection from '@/components/EventDateSection'
import ExperienceSection from '@/components/ExperienceSection'
import Hero from '@/components/Hero'
import MarqueSection from '@/components/MarqueSection'
import React from 'react'

function page() {
  return (
    <div>
      <Hero/>
      <MarqueSection/>
      <EventDateSection/>
      <ArtistSection/>
      <ExperienceSection/>
    </div>
  )
}

export default page
