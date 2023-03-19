import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import hero from '../images/hero_539.png'

function Hero() {
  return (
    <>
    <section>
        <div>
            <img src={hero} alt="" />
        </div>

        <div className='bg-gray-300 p-10 text-center'>
            <p className='bg-white inline-block p-1 text-red-500 font-bold mb-3'>Countdown Sales</p>
            <h1 className='font-bold text-xl mb-2'>Bundle and save up to $430</h1>
            <p>Complete your surface 7 pro with choice of select Type Cover and free sleeve</p>
            <button className='flex items-center block mx-auto justify-center bg-red-600 text-white py-2 px-4 mt-3 hover:bg-red-800 hover:underline tracking-wide'>Shop Now <FaChevronRight className='ml-1'/></button>
        </div>
    </section>        
    </>
  )
}

export default Hero