import React, {useState} from 'react'
import data from '../homepage_data/section2'
import {FaChevronRight} from 'react-icons/fa'

function Section2() {
    const [sectionData] = useState(data)
  return (
    <>
        <section>
            <div className='grid gap-8 p-5'>
                {sectionData.map((data) => {
                    const {id ,image ,title ,desc ,link} = data

                    return (
                        <div key={id} className="py-2">
                            <img src={image} alt="" />
                            <h2 className='font-bold my-2 text-lg'>{title}</h2>
                            <p className='text-sm my-2'>{desc}</p>
                            <button className='flex items-center justify-center font-semibold text-red-600 py-2 hover:bg-red-800 hover:text-white hover:underline tracking-wide'>{link} <FaChevronRight className='ml-1'/></button>
                        </div>
                    )
                })}
            </div>
        </section>
    </>
  )
}

export default Section2