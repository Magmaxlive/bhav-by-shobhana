import React from 'react'
import { Dot } from 'lucide-react';
import BookingButton from './BookingButton';
import Button from './Button';
import CountDown from './CountDown';
import VideoPlayer from './VideoPlayer';


const event = {
  "presented_by": "Auckland Tamil Association",
  "program_name": "BHAV",
  "program_title": "Bharathanin Aindham Vedham",
  "subtitle": "Bharatha’s 5th Vedha",
  "featured_artist": "Padma Bhushan Shobana",
  "date": "Sat 17 October 2026",
  "time": "6:00 PM",
  "venue": "Bruce Mason Centre, Takapuna",
  'link':'https://www.google.com/maps?q=Bruce+Mason+Centre,+Takapuna,+Auckland',
  'iso':'2026-10-17T18:00:00+13:00'
}

function Hero() {
  return (
    <div className='px-8 py-20 bg-ink'>
        <div className="max-w-7xl mx-auto grid grid-cols-1 tablet:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <h3 className="text-gold text-xs font-semibold tracking-widest uppercase">{event.presented_by} presents</h3>
                    <h1 className="font-black font-cormorant text-hero leading-none text-gold">{event.program_name}</h1>
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="font-semibold font-cormorant uppercase tracking-widest md:text-3xl text-2xl text-text">{event.program_title}</h2>
                    <h3 className="font-semibold font-cormorant uppercase tracking-widest text-xl text-text/80">{event.subtitle}</h3>
                </div>

                <h2 className="font-semibold font-cormorant capitalize tracking-widest text-3xl text-gold">{event.featured_artist}</h2>

                <div className="flex gap-1 md:flex-row flex-col items-start md:items-center flex-wrap">
                    <h3 className="font-semibold font-cormorant text-2xl capitalize text-text">{event.date}</h3>     <Dot className='text-crimson md:flex hidden' size={30} />
                    <h3 className="font-semibold font-cormorant text-2xl capitalize text-text">{event.time}</h3>     <Dot className='text-crimson md:flex hidden' size={30} />
                    <a href={event.link} target='_blank' className="font-semibold underline underline-offset-7 decoration-gold font-cormorant text-2xl capitalize text-text">{event.venue}</a>
                </div>


                <div className="flex gap-4 mt-4 flex-wrap">
                    <BookingButton text='book on ticketmaster' px='px-6' py='py-5'/>
                    <Button text='watch the film' link='#film' px='px-6' py='py-5'/>
                </div>

                <CountDown target={event.iso} />


            </div>

            {/* video section */}

            <div className="flex items-stretch justify-center">
                <VideoPlayer videoId="1228743282" title="180926 - Shobana Pre Launch Event (v3)" />
            </div>

        </div>
      
    </div>
  )
}

export default Hero
