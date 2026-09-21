import React from 'react'
import BookingButton from './BookingButton'

const items = [
    {
        title:'date',
        content:'Saturday, 17 Oct 2026'
    },
    {
        title:'curtain',
        content:'6:00 PM'
    },
    {
        title:'venue',
        content:'Bruce Mason Centre, Takapuna',
        link:'https://www.google.com/maps?q=Bruce+Mason+Centre,+Takapuna,+Auckland'
    },
]

function EventDateSection() {
  return (
    <div className='px-8 py-10 bg-ink-2'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 tablet:grid-cols-4 gap-y-8 md:gap-x-8 items-center">
        {items.map((i,index)=>(

        <div
          key={index}
          className="flex flex-col gap-3 md:pr-8 md:border-line md:border-r [&:nth-child(2n)]:md:border-r-0 tablet:[&:nth-child(2n)]:border-r tablet:[&:nth-child(4n)]:border-r-0"
        >
            <h3 className="text-xs font-semibold text-gold uppercase tracking-widest">{i.title}</h3>
            {i.link ? (
                <a href={i.link} target='_blank' className="text-xl font-semibold font-cormorant text-cream underline underline-offset-6 decoration-gold capitalize tracking-widest">{i.content}</a>

            ) : (
                <h2 className="text-xl font-semibold font-cormorant text-cream capitalize tracking-widest">{i.content}</h2>

            )}

        </div>

        ))}

        <div className="flex justify-self-start">
            <BookingButton text='get tickets' bg='bg-crimson-lit' px='px-6' py='py-4' textColor='text-cream' />
        </div>

      </div>
    </div>
  )
}

export default EventDateSection
