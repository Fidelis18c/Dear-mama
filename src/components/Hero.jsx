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
      <div className=' relative w-full h-[20rem] overflow-hidden Hidden md:flex md:relative md:h-[34rem] md:overflow-hidden'>
          
        
      <div
        className="absolute insert-0 flex Hidden md:absolute md:inset-0 md:flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className=" brightness-50 md:w-full  md:h-[full] md:object-cover md:flex-shrink-0 md:scale-100 md:brightness-30"
          />
        ))}
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


      <div className='py-5  text-black  bg-customPink '>
        <div className='mb-10 pt-5'>
            <div className=''>
                <h1 className='text-center font-opensans font-bold mb-4 '>OUR CORE IMPACT</h1>
             </div>

        {/* CARD1 */}

    <div className='  md:flex  md:flex-row md:gap-10 md:justify-center md:items-center md:mt-10'>
      
   <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      
    >
      
         <div className='md:max-w-xs md:bg-gray-100 md:rounded-xl md:overflow-hidden md:shadow-md md:ml-[4rem] md:pb-[2rem]'>
              <div>
                <img src={HeroImage8} 
                  alt=" Impact One"
                  className='md:w-[20rem] md:h-[250px] md:object-cover md:overflow-x-hidden md:overflow-y-hidden md:scale-100'  /> 
               </div>
              <div>
               <h2 className='text-black font-bold text-center font-montserrat pt-2'>Empowering future <br />generation.</h2>
                <p className='max-w-xs text-black text-left text-sm pt-6 pl-6 pr-1'>We ensure orphans and children from
                impoverished backgrounds receive vital support, focusing on access to education, 
                nutrition, and mentorship.</p>
              </div>

             <div className=' text-right pr-4 border-2 rounded-full mt-[4rem] ml-[10rem] mr-[1rem] py-2 bg-purple-500 text-white hover:bg-purple-700'>
              <button onClick={() => goToImport('Empowering')} className=''>Read More</button>
              <FaArrowRight className='inline-block ml-2' />
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
         <div className='md:max-w-xs md:bg-gray-100 md:rounded-xl md:overflow-hidden md:shadow-md md:pb-[2rem]'>
            <div>
              <img src={HospitalImage} 
               alt=" Impact One"
               className='md:w-[20rem] md:h-[250px] md:overflow-x-hidden md:overflow-y-hidden' /> 
            </div>
             <div>
               <h2 className='text-black font-bold text-center font-montserrat pt-2'>Holistic Community <br /> Well-being.</h2>
                <p className='max-w-xs text-black text-left text-sm pl-4 pr-2 '>Our volunteers provide 100% support to patients in hospitals, 
               the elderly, and prisoners. This includes providing basic necessities, financial assistance for treatment,
               and crucial advisory and emotional support to foster dignity and hope during difficult times.</p>
            </div>
            <div className='text-right pr-4  border-2 rounded-full mt-[3rem] ml-[10rem] mr-[1rem] py-2 bg-purple-500 text-white hover:bg-purple-700 '>
               <button onClick={() => goToImport('Well-being')} className=''>Read More</button>
               <FaArrowRight className='inline-block ml-2' />
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
        <div className='md:max-w-xs md:bg-gray-100 md:rounded-xl md:overflow-hidden md:shadow-md md:mr-[4rem] md:pb-[2rem]'>
          <div>
             <img src={womanImage2} 
             alt=" Impact One"
             className='md:w-[20rem] md:h-[250px] md:overflow-x-hidden md:overflow-y-hidden md:scale-100' /> 
          </div>
           <div>
             <h2 className='text-black font-bold text-center font-montserrat pt-3'>Rapid Crisis Response</h2>
             <p className='max-w-xs text-black text-left  text-sm pt-6 pl-4 pr-2'>We mobilize swiftly to address unexpected community emergencies and natural disasters,
             such as floods or severe food shortages. 
              Our youth network ensures immediate material aid and relief reaches affected communities rapidly when they need it most.</p>
           </div>
          <div className=' text-right pr-4 border-2 rounded-full mt-[3rem] ml-[10rem] mr-[1rem] py-2 bg-purple-500 text-white hover:bg-purple-700 '>
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
  className="pt-5 pb-5  bg-customPink"
  animate={{ x: [-50, 50, -50] }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>  
  <h2 className="  text-center text-2xl font-montserrat">
    From Our Hands To Their Hearts
  </h2>
</motion.div>

     </div> 

    </>
  );
};

export default HeroSection