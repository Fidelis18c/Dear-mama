import React from 'react'
import ReportImage from '../assets/Report1.png'
import ReportImage2 from '../assets/Report2.png'

const LatestEvents = () => {
  return (
    <>
      {/* EVENTS */}
              <div>
                   <h1 className='pt-4 text-2xl font-Montserrat Alternates text-center font-semibold'> EVENTS </h1>
              </div>
      
              <div >
                <h2 className='pt-3 ml-[3rem] text-xl'>Last Events</h2>
              </div>
      
      
             <div className='p-10 flex items-center gap-10'>
               <div className='max-w-80 bg-customPink rounded-xl overflow-hidden shadow-md ml-[2rem] pb-[3rem]'>
                <div>
                  <img src={ReportImage} 
                  alt="Report Image"
                  className='w-[25rem] h-[18rem] pb-3  ' />
                </div>
                <div className='pt-3'>
                    <h2 className='pb-4 pl-3  bg-purple-700 text-white text-center font-semibold rounded-md ml-5 mr-5'>Visiting Patients at <br /> Hospital</h2>
              
                </div>
      
                <div className='pt-5 pl-4'>
                   <p>28/09/2025</p>
                    <p>Mpanda Municipal Hospital</p>
                </div>
      
             </div>
      
          <div className='max-w-80 bg-customPink rounded-xl overflow-hidden shadow-md ml-[2rem] pb-[3rem]'>
                <div>
                  <img src={ReportImage} 
                  alt="Report Image"
                  className='w-[25rem] h-[18rem] pb-3  ' />
                </div>
                <div className='pt-3'>
                    <h2 className='pb-4 pl-3  bg-purple-700 text-white text-center font-semibold rounded-md ml-5 mr-5'>Visiting  Chiildrens</h2>
              
                </div>
      
                <div className='pt-5 pl-4'>
                   <p>29/09/2025</p>
                    <p>St joseh Childrens Centre</p>
                </div>
      
             </div>
      
             
         </div>
      
           <div>
              <img src={ReportImage2}
               alt="Report Image 2" 
               className='w-full h-[50rem]'/>
             </div>
    </>
  )
}

export default LatestEvents
