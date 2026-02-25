import { useState , useEffect } from 'react';
import React from 'react';
import HeroImage1 from '../assets/Hero1.png';
import HeroImage2 from '../assets/Hero2.png';
import HeroImage3 from '../assets/Hero3.png';
import HeroImage4 from '../assets/Hero4.png'; 
import HeroImage5 from '../assets/Hero5.jpeg';
import HeroImage6 from '../assets/Hero6.jpeg';
import HeroImage7 from '../assets/Hero7.jpeg';
import HeroImage8 from '../assets/Hero8.jpeg';
import HeroImage9 from '../assets/Hero9.jpeg';
import womanImage from '../assets/Woman1.jpeg';
import womanImage2 from '../assets/Woman10.jpeg';
import womanImage5 from '../assets/Woman5.jpeg';
import HospitalImage from '../assets/Hospital.jpeg';
import ImpactOneImage from '../assets/Impact1.png';
import ImpactTwoImage from '../assets/Impact2.png';
import ImpactThreeImage from '../assets/Impact3.png';
import { FaArrowRight } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";





const HeroSection = () => {

  const images = [HeroImage5, womanImage, HeroImage7, HeroImage9];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  
   return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);


  

  const navigate = useNavigate();

  const handleWhoWeAreClick = () => {
    navigate('/whoweare');
  }

 const goToImport = (id) => {
    navigate(`/whatwedo#${id}`);
  }

  


 


  return (
    <>
     {/* Hero Section */}
      <div className='relative w-full h-[20rem] overflow-hidden Hidden md:flex md:relative md:h-[34rem] md:overflow-hidden'>
          
        
      {/* <div
        className=" insert-0  md:absolute md:insert-0 md:flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className=" brightness-50 h-[20rem] object-cover object- md:w-full  md:h-[full] md:object-cover md:flex-shrink-0  md:scale-100 md:brightness-30"
          />
        ))}
      </div> */}


      <div className="relative w-full h-[20rem] overflow-hidden">

  <div
    className="flex transition-transform duration-1000 ease-in-out"
    style={{
      transform: `translateX(-${currentIndex * 100}%)`,
    }}
  >
    {images.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`Slide ${index}`}
        className="w-full h-[20rem] object-cover brightness-50 flex-shrink-0"
      />
    ))}
  </div>

</div>
        
        <div className='absolute inset-0 flex items-center justify-start text-white'>
            
        
          <div className='ml-8 md:ml-7 md:max-w-4xl md:mr-8'> 
              
          
            <h1 className='absolute top-[2.5rem]  md:flex md:absolute md:top-[3rem] font-extrabold  font-montserrat md:text-6xl  leading-tight'>
                FROM OUR HANDS TO THEIR HEARTS.
            </h1>

            
            <p className='absolute top-[5rem] md:flex  md:text-3xl md:absolute md:top-[12rem] font-semibold  md:mb-8'>
                Giving help to those <br /> who needs it.
            </p>

  
             <button className=' absolute bottom-[8rem] px-2 py-2  md:absolute  md:bottom-[10rem] md:inline-block border-2   border-white  md:px-8 md:py-3 rounded-md text-lg transition duration-300 hover:bg-white hover:text-gray-800' onClick={handleWhoWeAreClick} >
                Who we Are
            </button>
          </div>
        </div>
      </div> 
      
      {/* CORE IMPACT SECTION */}


      <div className='md:py-5  text-black  bg-customPink '>
        <div className='pt-[2rem] pb-[2rem] md:mb-10 md:pt-5'>
            <div className=''>
                <h1 className=' mb-5 text-center font-opensans font-bold md:mb-4 '>OUR CORE IMPACT</h1>
             </div>

        {/* CARD1 */}

    <div className=' flex flex-col  md:flex  md:flex-row md:gap-10 md:justify-center md:items-center md:mt-10'>
      
   <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      
    >
      
         <div className='flex flex-col pb-4 items-center justify-center rounded-lg ml-5 mr-5 mb-10 bg-gray-200  md:max-w-xs md:bg-gray-100 md:rounded-xl md:overflow-hidden md:shadow-md md:ml-[4rem] md:pb-[2rem]'>
              <div>
                <img src={HeroImage8} 
                  alt=" Impact One"
                  className='w-[25rem] h-[17rem] rounded-lg md:w-[20rem] md:h-[250px] md:object-cover md:overflow-x-hidden md:overflow-y-hidden md:scale-100'  /> 
               </div>
              <div>
               <h2 className=' pt-1 text-xl md:text-[20px]  text-black font-bold  text-center font-montserrat md:text-wrap md:pt-2'>Empowering future <br />generation.</h2>
                <p className=' ml-[1rem] max-w-64 text-sm text-balance pl-3 text-center md:text-balance md:ml-[1rem] md:max-w-xs md:text-black md:text-left md:text-sm md:pt-5 md:pl-6 md:pr-1'>We ensure orphans and children from
                impoverished backgrounds receive vital support, focusing on access to education, 
                nutrition, and mentorship.</p>
              </div>

             <div className='  mt-[2rem] ml-[12rem]    text-xs mr-[1rem]  py-2 px-3  md:text-right md:pr-4 rounded-full md:mt-[3rem] md:ml-[10rem] md:mr-[1rem] md:py-2 bg-purple-500 text-white  md:hover:bg-purple-700'>
              <button onClick={() => goToImport('Empowering')} className=''>Read More</button>
              <FaArrowRight className='inline-block ml-1' />
             </div>
           </div>
        </motion.div>

    {/* CARD2 */}
 <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      
    >
         <div className='flex flex-col pb-4 items-center justify-center rounded-lg ml-4 mr-3 mb-10 bg-gray-200  md:max-w-xs md:bg-gray-100 md:rounded-xl md:overflow-hidden md:shadow-md md:pb-[2rem]'>
            <div>
              <img src={HospitalImage} 
               alt=" Impact One"
               className='w-[25rem] h-[17rem] rounded-lg md:w-[20rem] md:h-[250px] md:object-cover md:overflow-x-hidden md:overflow-y-hidden' /> 
            </div>
             <div>
               <h2 className='pt-1 text-xl md:text-[17px] text-black font-bold text-center font-montserrat md:text-wrap md:pt-2'>Holistic Community <br /> Well-being.</h2>
                <p className='max-w-xs pt-2 text-black md:text-balance text-left text-sm md:pt-2 pl-4 pr-2 '>Our volunteers provide 100% support to patients in hospitals, 
               the elderly, and prisoners. This includes providing basic necessities, financial assistance for treatment,
               and crucial advisory and emotional support to foster dignity and hope during difficult times.</p>
            </div>
            <div className='ml-[12rem] text-right pr-4  border-2 rounded-full mt-[3rem] px-3  py-2 text-xs md:text-right md:pr-4 md:mr-[1rem] md:ml-[10rem] md:mt-[2rem] bg-purple-500 text-white hover:bg-purple-700 '>
               <button onClick={() => goToImport('Well-being')} className=''>Read More</button>
               <FaArrowRight className='inline-block ml-1' />
           </div>
        </div>
  </motion.div>

  
{/* CARD3 */}

        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
        <div className='flex flex-col pb-4 items-center justify-center rounded-lg ml-4 mr-3 mb-5  bg-gray-200 md:max-w-xs md:bg-gray-100 md:rounded-xl md:overflow-hidden md:shadow-md md:mr-[4rem] md:pb-[2rem]'>
          <div>
             <img src={womanImage2} 
             alt=" Impact One"
             className='w-[25rem] h-[20rem] md:w-[20rem] md:h-[250px] md:overflow-x-hidden  md:object-cover md:overflow-y-hidden md:scale-100' /> 
          </div>
           <div>
             <h2 className='pt-1 text-xl md:text-[17px] text-black font-bold text-center font-montserrat md:text-wrap md:pt-2'>Rapid Crisis Response</h2>
             <p className='max-w-xs pt-2 text-black text-left md:text-balance  text-sm md:pt-3 pl-6 pr-2'>We mobilize swiftly to address unexpected community emergencies and natural disasters,
             such as floods or severe food shortages. 
              Our youth network ensures immediate material aid and relief reaches affected communities rapidly when they need it most.</p>
           </div>
          <div className=' ml-[12rem] text-right  px-3  py-2 text-xs  pr-4 border-2 rounded-full mt-[3rem] md:ml-[10rem] mr-[1rem]  bg-purple-500 text-white hover:bg-purple-700 '>
            <button onClick={() => goToImport('Rapid')} className=''>Read More</button>
            <FaArrowRight className='inline-block ml-2' />
          </div>
         
        </div>
 </motion.div>
       </div>
      
    </div>
      </div>

{/* SLOGAN SECTION */}
<div className='w-full overflow-hidden'>
  <motion.div
  className="pb-6 md:pt-3 md:pb-5  bg-customPink"
  animate={{ x: [-50, 50, -50] }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>  
  <h2 className=" text-xl md:text-2xl font-montserrat text-center">
    From Our Hands To Their Hearts
  </h2>
</motion.div>

     </div> 

    </>
  );
};

export default HeroSection