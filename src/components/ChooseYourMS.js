import React, {useState} from 'react'
import data from '../homepage_data/section1'

function ChooseYourMs() {

    const [card, setItems ] = useState(data)
  return (
    <>
        <section className='my-8 mx-5'>
            <div>
                {card.map((item) => {
                    const {id, image, text} = item

                    return (
                        <div key={id} className="flex gap-2 py-2 items-center justify-start">
                            <img src={image} alt="" />
                            <p className='font-semibold hover:underline cursor-pointer'>{text}</p> 
                            {/* Turn to a Link */}
                        </div>
                    )
                })}
            </div>
        </section>
    </>
  )
}

export default ChooseYourMs