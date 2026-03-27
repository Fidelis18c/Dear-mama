import React from 'react'
import { FaChartLine } from 'react-icons/fa6'
import { FaHandHoldingHeart } from 'react-icons/fa6'
import { FaHandshake } from 'react-icons/fa6'
import { FaShieldHalved } from 'react-icons/fa6'
import { motion } from 'framer-motion';

const Values = () => {
  return (
    <div>
      

            <div>
            

               {/* OUR CORE VALUES */}
               <div className='bg-purple-700 p-5 pb-3'>
                     <div>
                         <h1 className='text-center pb-2 text-white font-montserrat text-2xl pt-4 md:pb-0'>OUR CORE VALUES</h1>
                     </div>

                     <div className='grid grid-cols-1 gap-5 pt-3 md:flex md:justify-center md:gap-10 md:items-center md:pt-10 md:pb-10'>


 <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.7, 
        delay: 0.1, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}

      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      
      className="bg-white md:p-8 pb-[3rem] pt-[3rem] rounded-2xl shadow-lg border border-gray-50 flex flex-col items-center text-center"
    >
                         <div className='bg-white md:p-10  rounded-lg flex flex-col justify-center items-center '>
                            <div>< FaChartLine className='w-10 h-10 pb-1' /> </div>
                             <h2>Accountability</h2>
                         </div>
                         </motion.div>
<motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.7, 
        delay: 0.1, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}

      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      
      className="bg-white md:p-8 pb-[3rem] pt-[3rem] rounded-2xl shadow-lg border border-gray-50 flex flex-col items-center text-center"
    >
                         < div className='bg-white md:pt-[2.5rem] md:pb-[2.5rem] md:pr-[1.5rem] md:pl-[1.5rem] rounded-lg flex flex-col justify-center items-center'>
                            <div>< FaHandHoldingHeart className='w-10 h-10 pb-1' /> </div>
                             <h2>Compassion & dignity</h2>
                         </div>
</motion.div>

<motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.7, 
        delay: 0.1, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}

      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      
      className="bg-white md:p-8 pb-[3rem] pt-[3rem] rounded-2xl shadow-lg border border-gray-50 flex flex-col items-center text-center"
    >
                          <div className='bg-white md:pt-[2.5rem] md:pb-[2.5rem] md:pr-[1.5rem] md:pl-[1.5rem] rounded-lg flex flex-col justify-center items-center'>
                            <div>< FaShieldHalved className='w-10 h-10 pb-1' /> </div>
                             <h2>Trasparency & integrity</h2>
                         </div>
</motion.div>


<motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.7, 
        delay: 0.1, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}

      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      
      className="bg-white md:p-8 pb-[3rem] pt-[3rem]  mb-3 md:mb-0 rounded-2xl shadow-lg border border-gray-50 flex flex-col items-center text-center"
    >
                          <div className='bg-white md:p-10 rounded-lg flex flex-col justify-center items-center'>
                            <div>< FaHandshake className='w-10 h-10 pb-1' /> </div>
                             <h2>Unity & Strength</h2>
                         </div>
</motion.div>


                     </div>

               </div>
            </div>


    </div>
  )
}

export default Values
