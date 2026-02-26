import React, { useEffect } from 'react'
import HospitalImage from '../assets/Hospital.jpeg';
import WhatWeDo1 from '../assets/Task1.png'
import WhatWeDo2 from '../assets/Task2.png'
import WhatWeDo3 from '../assets/Task3.png'
import womanImage11 from '../assets/Women11.jpeg';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const WhatWeDo = () => {

    const { hash } = useLocation();

    useEffect(() => {
    if (hash) {
      const id = hash.replace('#', ''); 
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]); 

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };


  return (
    <div>
  
        <div>
          {/* TASK1 */}
          <div className="overflow-x-hidden">

            <motion.div 
  initial={{ opacity: 0, x: -100 }} // Starts off-screen to the left
  whileInView={{ opacity: 1, x: 0 }} // Slides to its natural position
  viewport={{ once: true, amount: 0.2 }} // Triggers when 20% visible
  transition={{ duration: 0.8, ease: "easeOut" }}
  className='flex flex-col md:flex-row gap-8 items-center md:py-10 overflow-hidden'
>
           <div className='grid  grid-flow-row items-center justify-center  md:grid md:grid-cols-2 md:gap-4 md:pl-0 md:pl-15  md:text-balance'>
        
            <div>
                   <img src={womanImage11} 
                   alt="Task1"
                   className='md:rounded-lg h-[24rem] w-[35rem] ' />
               </div>

               <div >
                    <h1 id='Empowering'  className=' pl-[4rem] leading-4 scroll-mt-24 transition-all duration-700 font- text-xl text-black-500 md:text-2xl  font-semibold pb-3 pt-2 md:pl-0 '>Empowering future generation.</h1>

                     <p className='text-sm pl-7 text-balance leading-5 md:text-[16px] md:leading-6 pb-2 md:pl-0 font-montserrat md:text-balance '>We believe that every child deserves a future unburdened by poverty.
                      Our dedicated youth network works actively to ensure that orphans and children from impoverished backgrounds receive more than just basic aid;
                      they receive a pathway to success. 
                      We provide comprehensive, sustained support focused on breaking cycles of hardship.</p>

                      <p className='text-sm pl-7 pb-5 md:pb-0 leading-5 text-balance font-montserrat md:text-[16px] md:pl-0 md:leading-6'>This involves securing access to quality education by covering school fees 
                       and providing necessary learning materials. Simultaneously, we guarantee consistent nutrition to support healthy development,
                       alongside personalized mentorship programs run by our older youth members, fostering resilience, confidence, and leadership skills. 
                       Our investment in these children is an investment in the future of Tanzania.</p>
               </div>

               
           </div>

       </motion.div>  

           {/* TASK2 */}

           <motion.div 
  initial={{ opacity: 0, x: 100 }} // Starts 100px to the right
  whileInView={{ opacity: 1, x: 0 }} // Moves to center
  viewport={{ once: true, amount: 0.2 }} // Triggers when 20% visible
  transition={{ duration: 0.8, ease: "easeOut" }}
  
>
           <div className='grid  grid-flow-row items-center justify-center  md:grid md:grid-cols-2 md:gap-6 md:p-10 bg-purple-700 text-white md:text-balance'>

     
            

               <div >
                    <h1 id='Well-being' className='pl-[3rem] scroll-mt-24 transition-all duration-700 font-montserrat text-xl text-black-500  md:text-2xl  font-semibold pb-3 pt-3 md:pl-0'>Holistic Community Well-being.</h1>

                     <p className='text-sm pl-6 pb-4  text-balance leading-5 md:text-[16px] md:leading-6 font-montserrat md:pl-0 '>The Dear Mama Charity Foundation is dedicated to serving those who are often isolated or overlooked, 
                      ensuring they maintain their dignity during difficult times. This pillar focuses on delivering comprehensive care packages that address physical,
                       financial, and emotional needs for patients in hospitals,
                       the elderly, and incarcerated individuals.</p>

                      <p className='text-sm pl-6   text-balance leading-5 font-montserrat md:text-[16px] md:leading-6 md:pl-0'>Our program structure includes delivering basic necessities like food, 
                        hygiene items, and blankets directly to those in need. Furthermore, we actively seek opportunities to provide financial assistance for medical procedures or rehabilitation resources. 
                       By combining material aid with personalized advisory support, we are ensuring the well-being and successful reintegration of these special groups back into the community.</p>
               </div>
       
             <div>
                   <img src={HospitalImage} 
                   alt="Task2"
                   className='w-[31rem] h-[20rem] pt-4 object-cover md:pt-0  md:rounded-lg md:h-[23rem] md:w-[30rem] md:object-cover' />
               </div>
  
           </div>    

               </motion.div>     
              {/* TASK3 */}


            <motion.div 
  initial={{ opacity: 0, x: -100 }} // Starts off-screen to the left
  whileInView={{ opacity: 1, x: 0 }} // Slides to its natural position
  viewport={{ once: true, amount: 0.2 }} // Triggers when 20% visible
  transition={{ duration: 0.8, ease: "easeOut" }}
  className='flex flex-col md:flex-row gap-8 items-center py-10 overflow-hidden'
>
           <div className='grid  grid-flow-row items-center justify-center  md:grid md:grid-cols-2 md:gap-4 md:p-10 md:text-balance'>


               <div >
                    <h1 id='Rapid' className=' pl-[6rem] pr-[5rem] scroll-mt-24 transition-all duration-700 font-montserrat text-xl text-black-500 md:text-2xl font-semibold pb-3 pt-2 md:pl-0 md:pr-0'>Rapid Crisis Response.</h1>

                     <p className='text-sm pl-6 pb-2  text-balance leading-5 font-montserrat md:text-[16px] md:leading-6 md:pl-0'>The instability of unexpected events—be they natural calamities or sudden large-scale needs requires a reliable and compassionate response.
                       Our foundation stands as a pillar of hope, committed to 
                       mitigating suffering and restoring stability within impacted communities.</p>

                      <p className='text-sm pl-6 pb-2 text-balance leading-5 font-montserrat md:text-[16px] md:leading-6 md:pl-0'>We focus on assisting families with initial recovery steps, helping them bridge the gap between disaster and eventual stability.
                         Our readiness showcases our commitment to being there for Tanzanians during the most unpredictable moments.</p>
               </div>
        
        
            <div>
                   <img src={WhatWeDo3} 
                   alt="Task3"
                   className=' w-[28rem] md:w-[30rem] md:rounded-lg md:h-[35rem]' />
               </div>
               
           </div>

           </motion.div>

</div>
           <div className='bg-customPink p-10 '>
               <h1 className=' text-center font-Montserrat text-2xl  pb-3'>From Our Hands to Their Hearts</h1>
           </div>

        </div>
    </div>
  )
}

export default WhatWeDo
