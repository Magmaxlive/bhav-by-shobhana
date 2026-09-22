'use client'
import React from 'react'
import { BookingLink, VenueLink } from '@/data/Links'
import { Link } from 'react-scroll'

const content = {
  brand: {
    name: 'BHAV',
    tagline: 'Presented by Auckland Tamil Association. Celebrating culture. Connecting community.',
  },
  event: {
    label: 'EVENT',
    lines: [
      'Saturday, 17 October 2026',
      '6:00 PM',
      'Bruce Mason Centre,',
      'Takapuna Beach, Auckland',
    ],
    links: [
      { text: 'Book on Ticketmaster', href: BookingLink, external: true },
      { text: 'Group of 10+ — save 5%', href: BookingLink, external: true },
      { text: 'Directions to the venue', href: VenueLink, external: true },
    ],
  },
  explore: {
    label: 'EXPLORE',
    links: [
      { text: 'Shobana', href: 'shobhana' },
      { text: 'The Evening', href: 'evening' },
      { text: 'Watch the film', href: 'preLaunch' },
      { text: 'Venue', href: 'venue' },
      { text: 'Good to know', href: 'good-to-know' },
    ],
  },
  sponsor: {
    label: 'TITLE SPONSOR',
    logo: '/images/kripalogo.svg',
    name: 'Kripa Financial Solutions',
  },
  bottom: {
    copyright: '© 2026 BHAV by Shobana. All rights reserved.',
    credit: 'Auckland Tamil Association · Title Sponsor Kripa Financial Solutions',
  },
}

function Footer() {
  return (
    <footer className='px-8 py-16 bg-ink border-t border-line'>
      <div className='max-w-7xl mx-auto flex flex-col gap-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-gold text-3xl font-cormorant font-bold tracking-widest'>{content.brand.name}</h2>
            <p className='text-text/80 text-sm leading-relaxed max-w-xs'>{content.brand.tagline}</p>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-gold text-sm font-bold font-cormorant font-bold tracking-widest uppercase'>{content.event.label}</h3>
            <div className='flex flex-col text-text/90 text-sm leading-relaxed'>
              {content.event.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </div>
            <div className='flex flex-col gap-2 pt-2'>
              {content.event.links.map((l) => (
                <a
                  key={l.text}
                  href={l.href}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noreferrer' : undefined}
                  className='text-text hover:text-gold transition text-sm w-fit'
                >
                  {l.text} →
                </a>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-gold text-sm font-bold font-cormorant tracking-widest uppercase'>{content.explore.label}</h3>
            <div className='flex flex-col gap-2'>
              {content.explore.links.map((l) => (
                <Link key={l.text} to={l.href} offset={-100} smooth={true} className='cursor-pointer text-text hover:text-gold transition text-sm w-fit'>
                  {l.text}
                </Link>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-gold text-sm font-bold font-cormorant font-bold tracking-widest uppercase'>{content.sponsor.label}</h3>
            <div className='bg-cream p-4 w-fit'>
              <img src={content.sponsor.logo} alt={content.sponsor.name} className='h-16 w-auto' />
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-line'>
          <p className='text-text/60 text-xs'>{content.bottom.copyright}</p>
          <p className='text-text/60 text-xs'>{content.bottom.credit}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
