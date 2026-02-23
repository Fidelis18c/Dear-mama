import React from 'react'
import { motion } from 'framer-motion';

const Mission = () => {
  return (
    <div className='md:flex md:space-x-20 md:justify-center md:items-center md:p-10 md:flex-row md:gap-10 md:pr-[10rem] md:pl-[10rem]  bg-customPink'>

      <div className='md:w-1/2 md:bg-purple-700 md:text-white p-9'>
        <h1 className='pb-3'>Our Mission</h1>
        <div className='w-1/2 border'></div>
        <p className='pt-2'>To mobilize the youth of Katavi to provide compassionate (financial, material, and advisory) 
            support to the most vulnerable groups in our community, including orphans, 
            hospital patients, prisoners and victims of natural disasters like flood, fire.</p>
      </div>
 
  
      <div className='md:w-1/2 md:bg-white md:text-black p-9 mb-[5rem]'>
        <h1 className='pb-3'>Our Vision</h1>
         <div className='w-1/2 border border-black'></div>
        <p className='pt-2'>Build a compassionate and inclusive Tanzania where every vulnerable person receives care,
             dignity and hope for a better future.</p>

      </div>
    </div>
  )
}

export default Mission
