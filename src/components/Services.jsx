import React from 'react'
import ServicesCard from '../layout/ServicesCard'

function Services() {
  return (
    < >
        <div className="min-h-screen md:px-20 px-5 py-10 bg-gray-100">
            <h2 className="md:text-5xl text-3xl font-bold capitalize text-center">our <span className="text-yellow-300">services</span></h2>
            <div className="mt-10 grid md:grid-cols-3 gap-6 grid-cols-1">
            <ServicesCard/>
            </div>
        </div>
    </>
  )
}

export default Services