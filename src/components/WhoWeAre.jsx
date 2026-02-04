import React from 'react'
import WHOimage from '../assets/WHO.png';
import Task2image from '../assets/Task2.png';
import Mission from './Mission.jsx';
import Values from './Values.jsx';
import { motion } from 'framer-motion';


const WhoWeAre = () => {
  return (
    <>
      <div>
        <div className='relative'>
            <img src={WHOimage}
            alt=""
            className='w-full h-[34rem] object-cover flex-shrink-0' />

            <div className='absolute inset-0 left-10 top-[15rem] font-montserrat text-white'>
                <h1 className='text-5xl font-bold  text-center'>More Than Foundation, We Are Family.</h1>
            </div>

            <div className='bg-customPink'>
                <p className='p-10 text-center max-w-1xl text-1xl font-montserrat'>The Dear Mama Charity Foundation is a grassroots initiative born from a simple desire to serve. <br /> We stand as a pillar of hope for the vulnerable, 
                    providing sustained support and a pathway to a better life for those who need it most.</p>
            </div>
        </div>

        <div className='pb-5 pt-5 '>
            <h1 className='text-center text-3xl font-semibold'>Who We Are Today?</h1>
        </div>


     <motion.div 
  initial={{ opacity: 0, x: 100 }} // Starts 100px to the right
  whileInView={{ opacity: 1, x: 0 }} // Moves to center
  viewport={{ once: true, amount: 0.2 }} // Triggers when 20% visible
  transition={{ duration: 0.8, ease: "easeOut" }}
  
>
       <div className=' bg-purple-700 p-10 flex items-center justify-center gap-5'>
         <div className=''>
            <p className='max-w-3xl text-white'>Today, Dear Mama is a vibrant network of volunteers and youth leaders driven by a single purpose, 
                 providing help straight from our hearts to those in need. <br /> We are not a place of formal processes,
                 we are a community that welcomes anyone whose heart has been touched by our cause to join us in serving.</p>
         </div>
         <div>
            <img src={Task2image}
             alt="Who2image" 
            className='w-98 h-96 object-cover rounded-sm'/>
         </div>
       </div>
</motion.div>

      </div>


{/* MISSIONA AND VISION */}
      <div>
        <Mission />
      </div>

    <div>
        <Values />
    </div>
    </>
  )
}

export default WhoWeAre
