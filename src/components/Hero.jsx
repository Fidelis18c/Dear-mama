import React from 'react'
import HeroImage from '../assets/Hero.png'

const HeroSection = () => {
  return (
    <div className='relatve'>
     <div>
          <div className=''>
            <img src={HeroImage} alt="HeroBackground" className='absolute w-full h-[34rem] object-cover mb-20' />
          </div>
        <div className='pt-[15rem] pl-[5rem] w-1/2  relative text-white '>
        <h1 className='font-montserrat  font-bold md:text-4xl text-3xl'>FROM OUR HANDS TO THEIR HEARTS.</h1>

            <p className='text-2xl mt-2rem'>Giving help to those <br /> who needs it.</p>

        <button> <a href="" className='mt-8 border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black'>Who we Are</a> </button>
       </div>
     </div>
    </div>
  )
}

export default HeroSection