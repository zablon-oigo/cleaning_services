import {useState,React,useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-scroll'
import header from '../assets/images/header.jpg'
import Button from '../layout/Button'
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
function Navbar() {
    useEffect(() => {
        AOS.init();
     }, []);

    const[menu,setMenu]=useState(false)
    const bgImage={
        backgroundImage: `url(${header})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    const toggleMenu=()=>{
        setMenu(!menu)
    }
    const closeMenu=()=>{
        setMenu(false)
    }
  return (
    <>
      <header className="min-h-screen " style={bgImage}>
        <div className="bg-black absolute top-0 right-0 w-full h-screen bg-opacity-70 md:px-20 px-5 py-10">
        <nav className="flex justify-between items-center">
            <div className="">
                <Link to={'home'} smooth={true} duration={500} spy={true} className="text-4xl cursor-pointer font-bold text-white">
                    Wee <span className="text-yellow-300">Clean</span>
                </Link>
            </div>
            <div className="hidden md:flex items-center gap-6 ">
                <Link to={'home'} spy={true} duration={500} smooth={true} className="text-xl font-medium text-white relative group cursor-pointer">
                    Home
                    <span className="duration-300 absolute bottom-0 inset-x-0 scale-x-0 transform transition-transform origin-left bg-yellow-300 group-hover:scale-x-100 h-0.5 "></span>
                </Link>
                <Link to={'about'} spy={true} duration={500} smooth={true} className="text-xl font-medium relative group cursor-pointer text-white">
                    About
                    <span className="duration-300 absolute inset-x-0 bottom-0 h-0.5 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 bg-yellow-300"></span>
                </Link>
                <Link to={'services'} spy={true} duration={500} smooth={true} className="text-xl font-medium relative group cursor-pointer text-white">
                    Services
                    <span className="duration-300 absolute bottom-0 origin-left scale-x-0 inset-x-0 bg-yellow-300 transform transition-transform group-hover:scale-x-100 h-0.5"></span>
                </Link>
                <Link to={'why'} spy={true} duration={500} smooth={true} className="text-xl font-medium relative group cursor-pointer text-white">
                    Why Choose Us
                    <span className="duration-300 absolute bottom-0 origin-left scale-x-0 inset-x-0 bg-yellow-300 transform transition-transform group-hover:scale-x-100 h-0.5"></span>
                </Link>
                <Link to={'reviews'} spy={true} duration={500} smooth={true} className="text-xl font-medium relative group cursor-pointer text-white">
                    Reviews
                    <span className="duration-300 absolute bottom-0 origin-left scale-x-0 inset-x-0 bg-yellow-300 transform transition-transform group-hover:scale-x-100 h-0.5"></span>
                </Link>
                <Link to={'contact'} spy={true} duration={500} smooth={true} className="text-xl font-medium relative group cursor-pointer text-white">
                    Contact
                    <span className="duration-300 absolute bottom-0 origin-left scale-x-0 inset-x-0 bg-yellow-300 transform transition-transform group-hover:scale-x-100 h-0.5"></span>
                </Link>
            </div>
            <div className="md:block hidden">
                <Button title='call us today'/>
            </div>
            <button className="block md:hidden bg-yellow-300 rounded  px-0.5 py-0.5" onClick={toggleMenu}>
                {menu?<LiaTimesSolid  className='text-white text-4xl '/>:<HiMiniBars3BottomRight className='text-white text-4xl  '/>}
            
            
            </button>
            
        </nav>
        <section className={`${menu?'translate-x-0':'-translate-x-full'} duration-300 transition-transform md:hidden absolute top-[90px]  left-0 -translate-x-1/2 w-full bg-white h-[450px] flex justify-center gap-6 items-center flex-col`}>
        <div className=" flex flex-col justify-center  items-start space-y-6">
                <Link to={'home'} spy={true} duration={500} smooth={true} onClick={closeMenu} className="text-3xl font-medium  text-gray-800 relative group cursor-pointer">
                    Home
                    <span className="duration-300 absolute bottom-0 inset-x-0 scale-x-0 transform transition-transform origin-left bg-yellow-300 group-hover:scale-x-100 h-0.5 "></span>
                </Link>
                <Link to={'about'} spy={true} duration={500} smooth={true} onClick={closeMenu} className="text-3xl font-medium  relative group cursor-pointer text-gray-800">
                    About
                    <span className="duration-300 absolute inset-x-0 bottom-0 h-0.5 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 bg-yellow-300"></span>
                </Link>
                <Link to={'services'} spy={true} duration={500} smooth={true} onClick={closeMenu} className="text-3xl font-medium  relative group cursor-pointer text-gray-800">
                    Services
                    <span className="duration-300 absolute bottom-0 origin-left scale-x-0 inset-x-0 bg-yellow-300 transform transition-transform group-hover:scale-x-100 h-0.5"></span>
                </Link>
                <Link to={'why'} spy={true} duration={500} smooth={true} onClick={closeMenu} className="text-3xl font-medium  relative group cursor-pointer text-gray-800">
                    Why Choose Us
                    <span className="duration-300 absolute bottom-0 origin-left scale-x-0 inset-x-0 bg-yellow-300 transform transition-transform group-hover:scale-x-100 h-0.5"></span>
                </Link>
                <Link to={'reviews'} spy={true} duration={500} smooth={true} onClick={closeMenu} className="text-3xl font-medium  relative group cursor-pointer text-gray-800">
                    Reviews
                    <span className="duration-300 absolute bottom-0 origin-left scale-x-0 inset-x-0 bg-yellow-300 transform transition-transform group-hover:scale-x-100 h-0.5"></span>
                </Link>
                <Link to={'contact'} spy={true} duration={500} smooth={true} onClick={closeMenu} className="text-3xl font-medium  relative group cursor-pointer text-gray-800">
                    Contact
                    <span className="duration-300 absolute bottom-0 origin-left scale-x-0 inset-x-0 bg-yellow-300 transform transition-transform group-hover:scale-x-100 h-0.5"></span>
                </Link>
            </div>
            <div className="w-full flex justify-center mr-20">
         <Button title='Call us now'/>
            </div>
        </section>
        <div className="md:my-60 my-10 w-full md:w-2/3" data-aos='zoom-in-up'>
            <h2 className="text-6xl font-bold  uppercase text-yellow-300 md:mb-10 mb-6 text-center md:text-start">We clean to the highest standards</h2>
            <p className="text-2xl text-white font-light md:mb-8 mb-4 text-center md:text-start ">
            Embark on a journey to a spotless haven where <span className="text-yellow-300">cleanliness</span> meets tranquility. Our meticulous touch transforms every nook and cranny into a sanctuary of purity. Experience the epitome of <span className="text-yellow-300">cleanliness</span>, tailored just for you. Join us in creating a space that radiates freshness and invites serenity.

            </p>
            <div className="flex justify-center md:justify-start">
                <Button title='request a free quote'/>
            </div>
        </div>
        </div>
      </header>
    </>
  )
}

export default Navbar