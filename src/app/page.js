import ArtistSection from '@/components/ArtistSection'
import EventDateSection from '@/components/EventDateSection'
import ExpectSection from '@/components/ExpectSection'
import ExperienceSection from '@/components/ExperienceSection'
import Hero from '@/components/Hero'
import MarqueSection from '@/components/MarqueSection'
import PreLaunch from '@/components/PreLaunch'
import React from 'react'

function page() {
  return (
    <div>
      <Hero/>
      <MarqueSection/>
      <EventDateSection/>
      <ArtistSection/>
      <ExperienceSection/>
      <ExpectSection/>
      <PreLaunch/>
    </div>
  )
}

export default page
