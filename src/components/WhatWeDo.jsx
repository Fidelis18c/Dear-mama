import React from 'react'
import WhatWeDo1 from '../assets/Task1.png'
import WhatWeDo2 from '../assets/Task2.png'
import WhatWeDo3 from '../assets/Task3.png'

const WhatWeDo = () => {
  return (
    <div>
  
        <div>
          {/* TASK1 */}
           <div className='grid grid-cols-2 gap-4 p-20'>
               <div >
                    <h1 className='font-Montserrat text-black-500 text-2xl font-semibold pb-3 pt-2'>Empowering future generation.</h1>

                     <p className='pb-2 font-opensans'>We believe that every child deserves a future unburdened by poverty.
                      Our dedicated youth network works actively to ensure that orphans and children from impoverished backgrounds receive more than just basic aid;
                      they receive a pathway to success. 
                      We provide comprehensive, sustained support focused on breaking cycles of hardship.</p>

                      <p className='font-opensans'>This involves securing access to quality education by covering school fees 
                       and providing necessary learning materials. Simultaneously, we guarantee consistent nutrition to support healthy development,
                       alongside personalized mentorship programs run by our older youth members, fostering resilience, confidence, and leadership skills. 
                       Our investment in these children is an investment in the future of Tanzania.</p>
               </div>

               <div>
                   <img src={WhatWeDo1} 
                   alt="Task1"
                   className='rounded-lg' />
               </div>
           </div>

           {/* TASK2 */}

           <div className='grid grid-cols-2 gap-6 p-20 bg-purple-700 text-white'>
              <div>
                   <img src={WhatWeDo2} 
                   alt="Task2"
                   className='rounded-lg' />
               </div>

               <div >
                    <h1 className='font-Montserrat text-black-500 text-2xl font-semibold pb-3 pt-3'>Holistic Community Well-being.</h1>

                     <p className='pb-2 font-opensans'>The Dear Mama Charity Foundation is dedicated to serving those who are often isolated or overlooked, 
                      ensuring they maintain their dignity during difficult times. This pillar focuses on delivering comprehensive care packages that address physical,
                       financial, and emotional needs for patients in hospitals,
                       the elderly, and incarcerated individuals.</p>

                      <p className='font-opensans'>Our program structure includes delivering basic necessities like food, 
                        hygiene items, and blankets directly to those in need. Furthermore, we actively seek opportunities to provide financial assistance for medical procedures or rehabilitation resources. 
                       By combining material aid with personalized advisory support, we are ensuring the well-being and successful reintegration of these special groups back into the community.</p>
               </div>

           
           </div>

           {/* TASK3 */}

           <div className='grid grid-cols-2 gap-4 p-20'>
               <div >
                    <h1 className='font-Montserrat text-black-500 text-2xl font-semibold pb-3 pt-2'>Rapid Crisis Response.</h1>

                     <p className='pb-2 font-opensans'>The instability of unexpected events—be they natural calamities or sudden large-scale needs requires a reliable and compassionate response.
                       Our foundation stands as a pillar of hope, committed to 
                       mitigating suffering and restoring stability within impacted communities.</p>

                      <p className='font-opensans'>We focus on assisting families with initial recovery steps, helping them bridge the gap between disaster and eventual stability.
                         Our readiness showcases our commitment to being there for Tanzanians during the most unpredictable moments.</p>
               </div>

               <div>
                   <img src={WhatWeDo3} 
                   alt="Task3"
                   className='rounded-lg h-[30rem]' />
               </div>
           </div>

           <div className='bg-customPink p-10 '>
               <h1 className=' text-center font-Montserrat text-2xl text-xs pb-3'>From Our Hands to Their Hearts</h1>
           </div>

        </div>
    </div>
  )
}

export default WhatWeDo
