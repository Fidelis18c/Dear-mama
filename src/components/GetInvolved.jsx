import React, { useState } from 'react'
import WHOimage from '../assets/WHO.png';
import { Link } from 'react-router-dom';
import Donate from './Donate';
import HeroImage5 from '../assets/Hero5.jpeg';




const GetInvolved = () => {

 const [IsOpen, setIsOpen] = useState(false);

  return (

    <>
       <div className='relative'>
                  <img src={HeroImage5}
                  alt=""
                  className='w-full h-[34rem] object-cover flex-shrink-0' />
      
                  <div className='absolute  left-10 bottom-[3rem] font-montserrat text-white'>
                      <h1 className='text-5xl   text-center'>From Your Hands, To Their Hearts.</h1>
                  </div>
      
         </div>

        <div className="pt-10">
           <h1 className='text-center font-semibold text-colorPurple text-5xl p-5'>Get Involved</h1>
        </div>

      <div className='flex items-center justify-center pb-10'>
           <button onClick={() => setIsOpen(true)} className='text-center border-2 rounded-full px-4 py-2 bg-purple-500 text-white hover:bg-purple-700'>Donate Here</button>
      </div>

      <Donate IsOpen={IsOpen} setIsOpen={setIsOpen} />
              
        
    </>
  )
}

export default GetInvolved

