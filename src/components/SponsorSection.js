import React from 'react'
import SectionHeading from './SectionHeading'
import SponsorLogoSection from './SponsorLogoSection'

const content ={
    eyebrow:'Powered By',
    heading:'Our Proud Sponsors',
    titleSponsor:[{
        logo:'/images/kripalogo.svg',
        alt:'kripa financial solutions',
        bgColor:'bg-white'
    }],
    premierSponsor:[
        {
            logo:'/images/sponsors/Malabar Gold Vertical.png',
            alt:'Malabar Gold and Diamonds',
            bgColor:'bg-white'
        },
        {
            logo:'/images/sponsors/Transcend Group.png',
            alt:'Transcend Group',
            bgColor:'bg-white'
        },
        {
            logo:'/images/sponsors/Idly Sambar.png',
            alt:'Idly Sambar',
            bgColor:'bg-white'
        }
    ],
    associateSponsor:[{
        logo:'/images/sponsors/Nrityasaras.png',
        alt:'Nrityasaras',
        bgColor:'bg-white'
    }],
    leadSponsor:[{
        logo:'/images/sponsors/S-Con Limited.png',
        alt:'S con Limited',
        bgColor:'bg-white'
    }],
    supportingSponsor:[
        {
            logo:'/images/sponsors/RC Karthic.png',
            alt:'RC Karthik',
            bgColor:'bg-white'
        },
        {
            logo:'/images/sponsors/Yogi B Jewelry.png',
            alt:'Yogi B Jewellery',
            bgColor:'bg-white'
        },
        {
            logo:'/images/sponsors/Marvel- IT .jpg',
            alt:'Marvel IT',
            bgColor:'bg-white'
        },
        {
            logo:'/images/sponsors/RRK Group.png',
            alt:'RRK Group',
            bgColor:'bg-white'
        }
    ],
    eventPartner:[{
        logo:'/images/sponsors/Moksha Base .png',
        alt:'Moksha Base',
        bgColor:'bg-white'
    }],
    immigrationPartner:[{
        logo:'/images/sponsors/IVN.png',
        alt:'IVN',
        bgColor:'bg-white'
    }],
    mediaSponsor:[
        {
            logo:'/images/sponsors/Indian Newslink.png',
            alt:'Indian Newslink',
            bgColor:'bg-white'
        },
        {
            logo:'/images/sponsors/Melissai FM.png',
            alt:'Melissai FM',
            bgColor:'bg-white'
        },
        {
            logo:'/images/sponsors/Radio Lemon.png',
            alt:'Radio Lemon',
            bgColor:'bg-white'
        },
        {
            logo:'/images/sponsors/Starlight.png',
            alt:'Starlight',
            bgColor:'bg-white'
        }
    ]
}

function SponsorSection() {
  return (
    <div className='px-8 py-20 bg-[radial-gradient(ellipse_at_top,_var(--color-brown)_0%,_var(--color-ink)_55%,_var(--color-ink-2)_100%)]'>
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
            <SectionHeading eyebrow={content.eyebrow} textAlign='text-center' heading={content.heading} align='justify-center items-center'/>

            <div className="flex flex-col mt-4 gap-8 justify-center items-center">
                <SponsorLogoSection title='title sponsor' items={content.titleSponsor} />
                <SponsorLogoSection title='Premier sponsor' items={content.premierSponsor} />

                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                    <SponsorLogoSection title='associate sponsor' items={content.associateSponsor} />
                    <SponsorLogoSection title='lead supporting sponsor' items={content.leadSponsor} />
                </div>

                <SponsorLogoSection title='supporing sponsor' items={content.supportingSponsor} />

                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                    <SponsorLogoSection title='event partner' items={content.eventPartner} />
                    <SponsorLogoSection title='immigration partner' items={content.immigrationPartner} />
                </div>

                <SponsorLogoSection title='media sponsor' items={content.mediaSponsor} />
            </div>
        </div>

       
      
    </div>
  )
}

export default SponsorSection
