import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import why from '../assets/images/why.jpg'
import { CiCircleCheck } from "react-icons/ci";
function Why() {
    useEffect(() => {
        AOS.init();
     }, []);
    const bgImage={
        backgroundImage: `url(${why})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
  return (
 <>
 <div className="md:min-h-[400px] min-h-screen md:px-20 bg-right-top px-5 py-10 bg-gray-100 relative" style={bgImage}>
    <div className="bg-black w-full absolute right-0 top-0 md:h-[400px] h-screen bg-opacity-60 md:px-20 px-5 py-20">
        <div className="flex items-center justify-center gap-10 flex-col-reverse md:flex-row">
        <div className="bg-white rounded-xl shadow-2xl w-full md:w-1/2" data-aos='fade-right'>
             <ul className="space-y-6 p-10">
                <li className="inline-flex items-center gap-1">
                <CiCircleCheck  className='text-2xl text-rose-500'/>
                <span className="text-sm md:text-lg">
                    Move In/Outs & Deep Cleaning services only $59
                    </span>
                </li>
                <li className="inline-flex items-center gap-1">
                <CiCircleCheck  className='text-2xl text-rose-500'/>
                <span className="text-sm md:text-lg">
                Recurring discounts (monthly 5% off)
                </span>
                </li>               
                 <li className="inline-flex items-center gap-1">
                <CiCircleCheck  className='text-2xl text-rose-500'/>
                <span className="text-sm md:text-lg">
                Simple flat rate pricing for you & your family!
                </span>
                </li>               
                 <li className="inline-flex items-center gap-1">
                <CiCircleCheck  className='text-2xl text-rose-500'/>
                <span className="text-sm md:text-lg">
                Easy online booking
                </span>
                </li>
             </ul>
        </div>
        <div className="w-full md:w-1/2" data-aos='fade-left'>
         <h2 className="md:text-5xl text-2xl  font-bold text-yellow-400 capitalize mb-6">
         Get Your Place Cleaned and Healthy
         </h2>
         <p className="text-xl text-white font-light">
         Elevate your surroundings with our meticulous cleaning services. Experience a refreshing and healthy environment as we remove impurities, leaving your space immaculate. Our dedicated team ensures your place is not just clean but also a sanctuary of well-being.
         </p>
        </div>
        </div>
    </div>
 </div>
 </>
  )
}

export default Why