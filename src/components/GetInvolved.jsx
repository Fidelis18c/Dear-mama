import React from 'react'
import WHOimage from '../assets/WHO.png';

const GetInvolved = () => {

  return (
    <>
       <div className='relative'>
                  <img src={WHOimage}
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
     <button className='text-center border-2 rounded-full px-4 py-2 bg-purple-500 text-white hover:bg-purple-700'>Donate Here</button>
   
</div>


              
    </>
  )
}

export default GetInvolved

