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

            <div className='ml-5'>
                    <div className='pt-5 text-center text-2xl'>
                        <h1>OUR LEADERSHIP</h1>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='flex flex-col items-center mr-[1rem] md:mr-0 md:ml-[9rem] gap-10 md:grid md:grid-cols-2 md:p-10 md:max-w-7xl md:mx-auto relative'
                    >
                        <div className='relative w-full max-w-[20rem]'>
                            <img src={HamzaImage} alt="Hamza"
                             className='w-full rounded-lg h-auto  md:mr-0 aspect-[4/5] object-cover'
                            />

                               <div className='absolute bottom-0 left-0 right-0 text-white text-center z-10 bg-black/60 py-2 rounded-b-lg'>
                                 <h1 className='font-bold'>HAMZA SAID</h1>
                                 <h2 className='text-sm'>Mwenyekiti</h2>
                               </div>  
                        </div>
                       

                         <div className='relative w-full max-w-[20rem]'>
                            <img src={EmmaImage} alt="Emma"
                             className='w-full rounded-lg h-auto aspect-[4/5] object-cover'
                            />

                               <div className='absolute bottom-0 left-0 right-0 text-white text-center z-10 bg-black/60 py-2 rounded-b-lg'>
                                 <h1 className='font-bold'>EMMAGLADNES MBUNGALO</h1>
                                 <h2 className='text-sm'>Mwenyekiti Msaidizi</h2>             
                               </div>  
                         </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex flex-col pt-10 items-center mr-[1rem] md:mr-0 gap-10 md:grid md:ml-[9rem] md:grid-cols-2 md:p-10 md:max-w-7xl md:mx-auto'
                    >
                        <div className='relative w-full max-w-[20rem]'>
                            <img src={MariamImage} alt="Mariam" 
                             className='w-full rounded-lg h-auto aspect-[4/5] object-cover'
                            />

                              <div className='absolute bottom-0 left-0 right-0 text-white text-center z-10 bg-black/60 py-2 rounded-b-lg'>
                                 <h1 className='font-bold'>MARIAM SAID</h1>
                                 <h2 className='text-sm'>Katibu Mkuu</h2>             
                               </div>  
                        </div>

                        <div className='relative w-full max-w-[20rem]'>
                            <img src={JonaImage} alt="Jona" 
                             className='w-full rounded-lg h-auto aspect-[4/5] object-cover'
                            />

                              <div className='absolute bottom-0 left-0 right-0 text-white text-center z-10 bg-black/60 py-2 rounded-b-lg'>
                                 <h1 className='font-bold'>JONATHAN MGETA</h1>
                                 <h2 className='text-sm'>Katibu Msaidizi</h2>             
                               </div>  
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='flex items-center mr-[1rem] md:mr-0 justify-center py-10'
                    >   
                           <div className='relative w-full max-w-[20rem]'>
                            <img src={StanImage} alt="Stan" 
                              className='w-full rounded-lg h-auto aspect-[4/5] object-cover' 
                           />    

                           <div className='absolute bottom-0 left-0 right-0 text-white text-center z-10 bg-black/60 py-2 rounded-b-lg'>
                                 <h1 className='font-bold'>STANSLAUS KITANDALA</h1>
                                 <h2 className='text-sm'>Mhazini</h2>
                            </div>  
                           </div>  
                    </motion.div>
                </div>


  <div>
            

               {/* OUR CORE VALUES */}
               <div className='hidden md: md:bg-customPink'>
                     <div>
                         <h1 className='md:text-center md:font-montserrat md:text-2xl md:pt-4 '>OUR CORE VALUES</h1>
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
