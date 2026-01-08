import React from 'react'
import OurHistoryImage from '../assets/History.png'
import HamzaImage from '../assets/Hamza.png'
import JonaImage from '../assets/Jona.png'  
import StanImage from '../assets/Stan.png'
import EmmaImage from '../assets/Emma.png'
import MariamImage from '../assets/Mariam.png'


const Aboutus = () => {
  return (
    <div>
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
         className='w-full h-[40rem] '
          />
       </div>

  {/* OUR LEADERHIP AND CORE VALUES SUBPAGE */}

            <div>
                <div>
                    <div className='text-center text-2xl'>
                        <h1>OUR LEADERSHIP</h1>
                    </div>

                    <div  className='grid grid-cols-2 p-10 pl-[15rem] justify-center items-center relative'>
                        <div className='relative '>
                            <img src={HamzaImage} alt="Hamza"
                             className='  w-[20rem] rounded-lg'
                            />

                               <div className='absolute bottom-0 text-white text-center z-10  bg-black/60  pl-20 pr-[9.1rem] '>
                                 <h1>HAMZA SAID</h1>
                                 <h2>Mwenyekiti</h2>
                    
                               </div>  
                          
                        </div>
                       

                         <div className='relative'>
                            <img src={EmmaImage} alt="Emma"
                             className='w-[20rem] rounded-lg '
                            />

        
                               <div className='absolute bottom-0 text-white text-center z-10  bg-black/60  pl-20 pr-[2.1rem] '>
                                 <h1>EMMAGLADNES MBUNGALO</h1>
                                 <h2>Mwenyekiti Msaidizi</h2>             
                               </div>  
                         </div>

                    </div>

                    <div className='grid grid-cols-2 p-10 pl-[15rem] justify-center items-center text-center'>
                        <div className='relative'>
                            <img src={MariamImage} alt="Mariam" 
                             className='w-[20rem] rounded-lg '
                            />

                              <div className='absolute bottom-0 text-white text-center z-10  bg-black/60  pl-20  pr-[8.7rem] '>
                                 <h1>MARIAM SAID</h1>
                                 <h2>Katibu Mkuu</h2>             
                               </div>  
                        </div>
                        <div className='relative'>
                            <img src={JonaImage} alt="Jona" 
                             className='w-[20rem] rounded-lg '
                            />

                              <div className='absolute bottom-0 text-white text-center z-10  bg-black/60  pl-20 pr-[6.5rem] '>
                                 <h1>JONATHAN MGETA</h1>
                                 <h2>Katibu Msaidizi</h2>             
                               </div>  
                        </div>

                    </div>

{/* backdrop-blur-md */}

                    <div className='flex items-center justify-center pb-10 '>   
                           <div className='relative '>
                            <img src={StanImage} alt="Stan" 
                            className='w-[20rem] rounded-lg  ' 
                           />    
                       

                           <div className='absolute bottom-0 text-white text-center z-10  bg-black/60  pl-20 pr-[4.3rem] '>
                                 <h1>STANSLAUS KITANDALA</h1>
                                 <h2>Mhazini</h2>
                    
                            </div>  
                             </div>  
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Aboutus
