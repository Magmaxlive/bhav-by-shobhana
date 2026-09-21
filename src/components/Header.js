'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import {Menu,X} from 'lucide-react';
import {Link} from 'react-scroll'
import { links } from "@/data/Links";
import BookingButton from "./BookingButton";

export default function Header() {
    const [drawerOpen,setDrawerOpen] = useState(false)
    

    const toggleNavbar = () =>{
        setDrawerOpen(!drawerOpen)
    }

    const Ticket = () =>{
        window.open(
            "https://www.eventfinda.co.nz/2026/naresh-iyers-valentine-musical-concert/auckland/manukau-city/tickets",
            "_blank"
        );
    };

  return (
    <>
    <nav className={`sticky top-0 z-50`}>
            <div className="py-4 backdrop-blur-lg font-lora bg-ink text-text border-b border-primary/30">
            <div className="px-6">
                <div className="mx-auto container max-w-7xl  text-base">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold font-cormorant text-gold tracking-widest">BHAV</h1>

                    <ul className="hidden lg:flex space-x-12">
                        {
                            links.map((i,index)=>(
                                <li key={index}><Link to={i.link} offset={-100} smooth={true} duration={500} className='cursor-pointer text-sm transition-all duration-300 uppercase font-semibold tracking-widest hover:text-white hover:underline underline-offset-8'>{i.title}</Link></li>

                            ))
                        }
                    </ul>

                        <div className="hidden lg:flex">
                            <BookingButton/>
                        </div>

                    

                    <div className="lg:hidden flex flex-row gap-6 justify-end">
                        <BookingButton/>
                            
                        <button onClick={toggleNavbar} className="cursor-pointer relative z-50">
                            {drawerOpen ?<X/> : <Menu/>}
                        </button>
                    </div>

                    {drawerOpen &&
                        <div className="fixed z-20 w-full bg-ink right-0 top-0 p-12 flex flex-col justify-start items-start lg:hidden gap-3">
                             <ul className="flex flex-col gap-3">
                                {
                            links.map((i,index)=>(
                                <li key={index}><Link to={i.link} offset={-100} smooth={true} duration={500} className='cursor-pointer text-sm transition-all duration-300 uppercase font-semibold tracking-widest hover:text-white hover:underline underline-offset-8'>{i.title}</Link></li>

                            ))
                        }

                            </ul>
                            
                        </div>
                    }
                </div>
            </div>
            </div>
            </div>
           
        </nav>
            
    </>
  )
}