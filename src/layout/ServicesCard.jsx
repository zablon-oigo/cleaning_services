import React from 'react'
import { MdOutlineCleaningServices } from "react-icons/md";
import { TbIroning } from "react-icons/tb";
import { GiWashingMachine } from "react-icons/gi";
import { MdLocalLaundryService } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";
import { MdOutlineDryCleaning } from "react-icons/md";

function ServicesCard({icon,title,desc}) {
    const card = [
        {
            id: 1,
            icon: <MdOutlineCleaningServices className='text-6xl' />,
            title: "Cleaning",
            desc: "Experience top-notch cleaning services that leave your home spotless. Our expert team ensures a thorough and meticulous approach, making your living space a haven of cleanliness and freshness."
        },
        {
            id: 2,
            icon: <TbIroning className='text-6xl' />,
            title: "Ironing",
            desc: "Say goodbye to wrinkles with our professional ironing services. We handle your garments with care, providing precise ironing that guarantees a crisp and polished look for your clothing."
        },
        {
            id: 3,
            icon: <GiWashingMachine className='text-6xl' />,
            title: "Washing",
            desc: "Transform your laundry routine with our premium washing services. From delicate fabrics to tough stains, our meticulous process ensures your clothes are cleaned with utmost care and attention."
        },
        {
            id: 4,
            icon: <MdLocalLaundryService className='text-6xl' />,
            title: "Laundry",
            desc: "Revitalize your wardrobe with our efficient laundry solutions. Our dedicated team handles your garments with care, providing a comprehensive laundry service to keep your clothes fresh and vibrant."
        },
        {
            id: 5,
            icon: <GiVacuumCleaner className='text-6xl' />,
            title: "Vacuum",
            desc: "Create a dust-free environment with our thorough vacuuming services. Our expert team ensures every nook and cranny is attended to, leaving your space clean, fresh, and allergen-free."
        },
        {
            id: 6,
            icon: <MdOutlineDryCleaning className='text-6xl' />,
            title: "Dry Cleaning",
            desc: "Preserve the quality of your fabrics with our professional dry cleaning. Our meticulous process removes stains and odors, ensuring your garments receive the care they deserve for long-lasting freshness."
        }
    ];
    
  return (
    <>
      {card.map((item)=>{
        return(
            <div className="group flex flex-col items-center gap-3 p-6 bg-white shadow-2xl rounded-lg cursor-pointer lg:hover:-translate-y-6 transition-all max-w-md duration-300 ease-in-out">
                <div className="bg-[#e4d00a] p-4 text-white  transition-colors duration ease-in-out  group-hover:bg-[#ffdf00] rounded-full">
                    {item.icon}
                </div>
                <h2 className="text-2xl font-sans font-semibold group-hover:text-gray-600">
                    {item.title}
                </h2>
                <p className="  font-light text-lg font-sans transition duration-300 ease-in-out cursor-pointer group-hover:text-gray-600">
                    {item.desc}
                </p>
                <div className="w-full flex justify-start items-start">
                <a href="" className=" text-[#ffdf00] ">learn more...</a>
                </div>
            </div>
        )
      })}
    </>
  )
}

export default ServicesCard