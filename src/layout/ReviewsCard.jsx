import React from 'react'
import {FaQuoteRight} from 'react-icons/fa'
import {BsStarFill,BsStarHalf} from 'react-icons/bs'
function ReviewsCard(props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 bg-gray-100 p-4 rounded-xl shadow-2xl">
      <div className="flex items-center flex-row justify-between gap-2">
        <div className="">
            <img src={props.img} alt="" className='w-[80px] h-[80px] rounded-full ring-2 ring-yellow-400 mr-2'/>
        </div>
            <div className="">
            <h2 className="text-md mb-2">{props.title}</h2>
        <div className="flex items-center gap-1">
                    <BsStarFill className='text-yellow-500'/>
                    <BsStarFill className='text-yellow-500'/>
                    <BsStarFill className='text-yellow-500'/>
                    <BsStarFill className='text-yellow-500'/>
                    <BsStarHalf className='text-yellow-500'/>
                    
                </div>
            </div>
        <span className="ml-16">
            <FaQuoteRight className='text-6xl text-yellow-300'/>
        </span>
    </div>
    <div className="">
        <p className="text-lg ">{props.desc}</p>
    </div>
      </div>
    </>
  )
}

export default ReviewsCard