import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from '../assets/images/call.jpg'
function Contact() {
  useEffect(() => {
    AOS.init();
 }, []);
  return (
 <>
  <div className="min-h-[600px] bg-gradient-to-br from-yellow-300 to-yellow-600 md:px-20 md:py-20 px-5 py-5">
    <h2 className="text-5xl text-center font-bold text-white">Contact Us</h2>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between md:gap-10 gap-4">
            <div className="mt-10 w-full md:w-1/2" data-aos='fade-right' data-aos-duration='3000' data-easing='linear'>
        <form action="" className="">
            <label htmlFor="" className="block text-xl mb-2 text-white">Name</label>
            <input type="text" className="px-6 py-3 w-full rounded-xl " />
            <label htmlFor="" className="block text-xl mb-2 text-white">Email</label>
            <input type="email" className="px-6 py-3 w-full rounded-xl " />
            <label htmlFor="" className="block text-xl mb-2 text-white">Message</label>
            <textarea name="" id="" cols="30" rows="10" className="px-6 py-6 rounded-xl w-full"></textarea>
            <button className="mt-2 px-6 py-3 rounded-xl w-full bg-teal-500 text-white text-xl">Submit</button>
        </form>
    </div>
    <div className="mt-10 w-full md:w-1/2" data-aos='fade-left' data-aos-duration='3000' data-easing='linear'>
        <img src={img} alt="call" className='rounded shadow-2xl'/>
    </div>
            </div>
  </div>
 </>
  )
}

export default Contact