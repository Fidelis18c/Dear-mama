import React, {useState} from 'react'
import OurHistoryImage from '../assets/History.png'

const History = () => {
  return (
    <>
         <div className='p-20 w-[50rem] pb-10 break-normal'> 
          
              <h1 className='text-2xl pb-3 font-Montserrat'>Our History</h1>
      
              <p className=''>The Dear Mama Charity Foundation was not born in a boardroom, but from a simple, personal tradition of gratitude.
                   Initially, it began as the solitary effort of a single individual who regularly visited a local orphans' center.
                    This service was an act of thanking God for the blessings received, 
                  driven by a deep conviction to share that good fortune with the children who needed it most.</p>
      
              <p className='pt-3 '>As the days turned into weeks, this personal commitment began to organically attract others.
                   What started with one person soon expanded to two, then three, then four dedicated individuals.
                    This natural multiplication of compassion led the founding group to a powerful realization: to maximize their impact, 
                  they needed to formalize their efforts.</p>
      
              <p className='pt-3'>The founders sat down and shared a collective vision: What if they could harness the energy and passion of their entire generation?
                   They reached out to their networks classmates from primary, secondary, and high school to organize and mobilize the youth. Out of this shared ambition,
                   the organization was formally established and given the name <b>Dear Mama Foundation.</b></p>
               
              <p className='pt-3 '> With the formation of the foundation, our scope of service broadened significantly beyond orphans. 
                We expanded our 100% support model to embrace other underserved and vulnerable groups, including patients in hospitals, 
                individuals who are incarcerated (prisoners), and those affected by unforeseen natural crises, such as floods.
                This expansion reflected our commitment to providing holistic care across the entire community.</p>
      
              <p className="pt-2 pb-2"><b>Why Dear Mama?</b></p>
      
              <p className=''>The name <b>"Dear Mama"</b> is central to our identity and our methodology. 
               We chose it because we recognize that all life begins with a 
               mother's fierce, unconditional love. A mother's devotion to her child is unique and limitless;
               she will tirelessly strive for the survival and well-being of her child.</p>
      
               <p className='pt-2'>The foundation is guided by this same principle of unconditional care and unwavering commitment.
                For the orphans, patients, and prisoners who lack the ability or resources to help themselves, we pledge to deliver our absolute best effort,
                acting as a devoted source of support and restoring dignity, just as a mother would.</p>
      
      
            </div>
             
             <div>
              <img src={OurHistoryImage}
               alt="OurHistoryImage"
               className='w-full h-[50rem] '
                />
             </div>
    </>
  )
}

export default History
