import React from 'react'
import Image from 'next/image'

function SponsorLogoSection({title,items=[]}) {
  return (
    <div className="flex flex-col gap-4">
        <h2 className="font-bold text-sm text-gold uppercase tracking-widest text-center">
            {title}
        </h2>
        <div className="flex justify-center items-center gap-4 flex-wrap">
            {items.map((i,index)=>(
                <div key={index} className={`${i?.bgColor} rounded-sm p-4`}>
                    <div className="relative aspect-[4/2] w-40">
                        <Image src={i.logo} alt={i.alt} fill className="object-contain" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SponsorLogoSection
