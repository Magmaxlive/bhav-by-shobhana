import React from 'react'

function SectionHeading({eyebrow,heading,accent,eybrowColor='text-gold',headingColor='text-cream',align='justify-start items-start',textAlign='text-start'}) {
  return (
    <div className={`flex flex-col gap-6 ${align}`}>
        {eyebrow &&
            <h3 className={`text-sm uppercase text-gold font-bold tracking-widest ${textAlign}`}>{eyebrow}</h3>
        }
        {heading &&
        <div className={`flex flex-col ${textAlign}`}>
            
            <h1 className="tablet:text-6xl text-5xl max-w-lg leading-tight font-bold capitalize font-cormorant text-cream tracking-wider">{heading}</h1>
        
            {accent &&
                <h2 className="tablet:text-6xl text-5xl max-w-lg leading-tight font-bold capitalize font-cormorant text-gold italic tracking-wider">{accent}</h2>
            }
        </div>
        }
    </div>
  )
}

export default SectionHeading
