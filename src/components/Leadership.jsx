import React from 'react'
import HamzaImage from '../assets/Hamza.png'
import JonaImage from '../assets/Jona.png'  
import StanImage from '../assets/Stan.png'
import EmmaImage from '../assets/Emma.png'
import MariamImage from '../assets/Mariam.png'
import { FaChartLine } from 'react-icons/fa6'
import { FaHandHoldingHeart } from 'react-icons/fa6'
import { FaHandshake } from 'react-icons/fa6'
import { FaShieldHalved } from 'react-icons/fa6'

import { motion } from 'framer-motion';



const Leadership = () => {
  return (
    <>

    {/* OUR LEADERHIP AND CORE VALUES SUBPAGE */}

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



    </>
    
  )
}

export default Leadership
