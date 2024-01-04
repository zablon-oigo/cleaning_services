import React from 'react'
import about from '../assets/images/about.jpg'
import Button from '../layout/Button'
function About() {
  return (
    <div className='w-full min-h-screen md:px-20 px-5 py-10 bg-gradient-to-r md:from-yellow-200 from-yellow-600 to-yellow-300  md:to-yellow-600'>
        <h1 className="md:text-5xl text-3xl font-bold capitalize text-center text-white">about us</h1>
        <div className="md:my-20 my-10 flex flex-col md:flex-row items-center justify-center gap-10">
            <div className="w-full md:1/2">
            <img src={about} alt="about" className='rounded'/>
            </div>
            <div className="w-full md:1/2">
                <h2 className="mb-6 md:text-3xl text-2xl text-center md:text-start font-semibold text-white capitalize">Why choose us for your cleaning services ?</h2>
                <p className="mb-6 text-white text-xl font-light ">
                At Wee Clean, we pride ourselves on delivering exceptional cleaning services tailored to meet your unique needs. Our commitment to excellence, attention to detail, and use of eco-friendly products set us apart in the industry. With a team of dedicated professionals, we guarantee a spotless and hygienic environment for your home or business.
                </p>
                <p className="mb-6 text-white text-xl font-light ">
                Your satisfaction is our top priority. We understand the importance of a clean and healthy space, and we go the extra mile to ensure every corner is pristine. Whether it's regular maintenance, deep cleaning, or specialized services, Wee Clean is your trusted partner in creating a fresh and inviting atmosphere.
                </p>
                <div className="flex items-center justify-center md:justify-start">
                    <button className="border-2 border-white px-6 py-3 text-white text-xl bg-">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About