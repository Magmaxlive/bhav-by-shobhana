import ArtistSection from '@/components/ArtistSection'
import EventDateSection from '@/components/EventDateSection'
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
    </div>
  )
}

export default page
