import React from 'react'
import { FaChartLine } from 'react-icons/fa6'
import { FaHandHoldingHeart } from 'react-icons/fa6'
import { FaHandshake } from 'react-icons/fa6'
import { FaShieldHalved } from 'react-icons/fa6'

const Values = () => {
  return (
    <div>
      

            <div>
            

               {/* OUR CORE VALUES */}
               <div className='bg-customPink'>
                     <div>
                         <h1 className='text-center font-montserrat text-2xl pt-4'>OUR CORE VALUES</h1>
                     </div>

                     <div className='flex justify-center gap-10 items-center pt-5 pb-10'>
                         <div className='bg-white p-10  rounded-lg flex flex-col justify-center items-center '>
                            <div>< FaChartLine className='w-10 h-10 pb-1' /> </div>
                             <h2>Accountability</h2>
                         </div>

                         < div className='bg-white pt-[2.5rem] pb-[2.5rem] pr-[1.5rem] pl-[1.5rem] rounded-lg flex flex-col justify-center items-center'>
                            <div>< FaHandHoldingHeart className='w-10 h-10 pb-1' /> </div>
                             <h2>Compassion & dignity</h2>
                         </div>

                          <div className='bg-white pt-[2.5rem] pb-[2.5rem] pr-[1.5rem] pl-[1.5rem] rounded-lg flex flex-col justify-center items-center'>
                            <div>< FaShieldHalved className='w-10 h-10 pb-1' /> </div>
                             <h2>Trasparency & integrity</h2>
                         </div>

                          <div className='bg-white p-10 rounded-lg flex flex-col justify-center items-center'>
                            <div>< FaHandshake className='w-10 h-10 pb-1' /> </div>
                             <h2>Unity & Strength</h2>
                         </div>



                     </div>

               </div>
            </div>

            <div >
              <h1 className='text-center text-xs-2 p-10'>From Our hands to their hearts</h1>
            </div>

    </div>
  )
}

export default Values
