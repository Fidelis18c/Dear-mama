import React from 'react';
import HeroImage from '../assets/Hero.png';
import ImpactOneImage from '../assets/Impact1.png';
import ImpactTwoImage from '../assets/Impact2.png';
import ImpactThreeImage from '../assets/Impact3.png';
import { FaArrowRight } from 'react-icons/fa6';

const HeroSection = () => {
  return (
    <>
     {/* Hero Section */}
      <div className='relative h-[34rem]'>
          
        <img 
          src={HeroImage} 
          alt="HeroBackground" 
          className='absolute inset-0 w-full h-full object-cover' 
        />
          
        
        <div className='absolute inset-0 flex items-center justify-start text-white'>
            
        
          <div className=' ml-3 md:ml-20 max-w-4xl mr-8'> 
              
          
            <h1 className='font-montserrat font-extrabold text-2xl sm:text-6xl  leading-tight'>
                FROM OUR HANDS TO THEIR HEARTS.
            </h1>

            
            <p className='text-xl sm:text-3xl font-semibold mt-4 mb-8'>
                Giving help to those <br /> who needs it.
            </p>

  
            <a 
                href="#who-we-are" 
                className='inline-block border-2 border-white px-8 py-3 rounded-md text-lg transition duration-300 hover:bg-white hover:text-gray-800'
            >
                Who we Are
            </a>
          </div>
        </div>
      </div> 
      
      {/* CORE IMPACT SECTION */}


      <div className='py-16 bg-purple-700 text-white'>
        <div className=''>
        <div className=''>
          <h1 className='text-center font-opensans font-bold mb-4 '>OUR CORE IMPACT</h1>
        </div>

        {/* CARD1 */}
        <div className='flex flex-col md:flex-row gap-10 justify-center items-center mt-10'>
        <div className='max-w-xs bg-gray-100 rounded-xl overflow-hidden shadow-md ml-[4rem] pb-[6rem]'>
          <div>
             <img src={ImpactOneImage} 
             alt=" Impact One"
             className='w-[20rem] h-[200px]' /> 
          </div>
          <div>
             <h2 className='text-black font-bold text-center font-montserrat pt-2'>Empowering future <br />generation.</h2>
              <p className='max-w-xs text-black text-left text-sm pt-6 pl-6 pr-1'>We ensure orphans and children from
              impoverished backgrounds receive vital support, focusing on access to education, 
              nutrition, and mentorship.</p>
              </div>

          <div className='text-black-700 text-right pr-4  mt-4'>
            <a href="" className=''>Read More</a>
            <FaArrowRight className='inline-block ml-2' />
           </div>
        </div>

    {/* CARD2 */}

         <div className='max-w-xs bg-gray-100 rounded-xl overflow-hidden shadow-md  pb-[4rem]'>
          <div>
             <img src={ImpactTwoImage} 
             alt=" Impact One"
             className='w-[20rem] h-[200px]' /> 
          </div>
         <div>
          <h2 className='text-black font-bold text-center font-montserrat pt-2'>Holistic Community <br /> Well-being.</h2>
          <p className='max-w-xs text-black text-left text-sm pt-6 pl-4 pr-2'>Our volunteers provide 100% support to patients in hospitals, 
            the elderly, and prisoners. This includes providing basic necessities, financial assistance for treatment,
             and crucial advisory and emotional support to foster dignity and hope during difficult times.</p>
          </div>
          <div className='text-black-700 text-right pr-4  mt-4'>
            <a href="" className=''>Read More</a>
            <FaArrowRight className='inline-block ml-2' />
           </div>
        </div>

{/* CARD3 */}

         <div className='max-w-xs bg-gray-100 rounded-xl overflow-hidden shadow-md mr-[4rem] pb-[4rem]'>
          <div>
             <img src={ImpactThreeImage} 
             alt=" Impact One"
             className='w-[20rem] h-[200px]' /> 
          </div>
           <div>
          <h2 className='text-black font-bold text-center font-montserrat pt-3'>Rapid Crisis Response</h2>
          <p className='max-w-xs text-black text-left text-left text-sm pt-6 pl-4 pr-2'>We mobilize swiftly to address unexpected community emergencies and natural disasters,
             such as floods or severe food shortages. 
            Our youth network ensures immediate material aid and relief reaches affected communities rapidly when they need it most.</p>
           </div>
           <div className='text-black-700 text-right pr-4  '>
            <a href="" className='mt-4'>Read More</a>
            <FaArrowRight className='inline-block ml-2' />
           </div>
      
        </div>
        </div>
        </div>
      </div>


      <div>
        <h2 className='text-center text-xs-3xl font-montserrat Alternates'>From  Our Hands To Thier Hearts</h2>
      </div>
    </>
  );
};

export default HeroSection;