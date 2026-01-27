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



    </>
    
  )
}

export default Leadership
