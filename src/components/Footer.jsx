import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegTimesCircle, FaBusinessTime } from "react-icons/fa";
import { IoMdCall  } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { GiVacuumCleaner } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
function Footer() {
  return (
    <div>
         <div className="min-h-[400px] bg-black md:px-20 md:py-20 px-5 py-5">
            <div className="mt-10 flex  justify-between gap-3 flex-col md:flex-row">
                <div className="w-full md:w-2/3">
                
                <h2 className="text-4xl text-white mb-6 flex items-center gap-3 font-semibold">Wee Clean <GiVacuumCleaner className='text-6xl' /></h2>
                
                    <p className="text-xl text-white font-light">
                    Est. 2003, Wee Clean offers excellent cleaning services with a commitment to perfection. Our team ensures meticulous cleanliness, making your space a pristine haven.
                    </p>
                    


                </div>
                <div className="w-full md:w-3/4 flex justify-around flex-col md:flex-row">
                <div className="w-full mb-6">
                    <h2 className="text-3xl text-white font-semibold">Working Hours</h2>
                    <div className="mt-4">
                    <p className="flex items-center gap-3 mb-3 text-xl text-white">
                    <FaBusinessTime className='text-4xl text-white'/> Mon – Fri: 08:00 – 17:00
                    </p>
                    <p className="flex items-center gap-3 mb-3 text-xl text-white">
                    <FaBusinessTime className='text-4xl text-white'/> Saturday: 09:00 – 14:00
                    </p>
                <p className="flex items-center gap-3 mb-3 text-xl text-white">
                <FaRegTimesCircle className='text-4xl text-white' /> Sunday: Close
                </p>
                    </div>
                </div>
                <div className="w-full">
                    <h2 className="text-3xl font-semibold text-white">Visit Us</h2>
                    <div className="flex flex-col  justify-center gap-4 mt-4">
                    <div className="flex items-center gap-3">
                    <FaLocationDot className='text-4xl text-white'/> 
                        <p className="text-white text-xl">
                        123 Street,Nairobi, Kenya
                        </p>
                    </div>
                    <div className="flex items-start gap-3 ">
                    <IoMdCall   className='text-4xl text-white '/>
                        <a href="tel:+254 712 345 678" className="text-white text-xl">(+254) 712 345 678</a>
                    </div>
                        <div className="flex items-center gap-3">
                        <MdOutlineEmail className='text-4xl text-white'/> 
                        <a href="mailto:hello@mail.com" className="text-white text-xl">hello@services.com</a>
                        </div>
                        <div className="mt-4 flex gap-4 items-center">
                        <FaFacebookSquare className='text-4xl text-white'/>
                        <FaInstagram className='text-4xl text-white'/>
                        <FaTwitter className='text-4xl text-white'/>
                        <FaYoutube className='text-4xl text-white'/>
                        </div>
                    </div>

                </div>
                </div>
            </div>
            <p className="text-xl text-white text-center">
            Copyright &copy; {new Date().getFullYear()} Wee Clean. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer