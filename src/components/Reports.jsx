import React from 'react'
import ReportImage from '../assets/Report1.png'
import ReportImage2 from '../assets/Report2.png'
import AnnualImage from '../assets/Annual.jpeg'
import reportPDF from '../assets/RIPOTI YA DEAR MAMA FOUNDATION-1.pdf'


const Reports = () => {
  return (
    <>

    <div>
        <h1 className='pt-4 text-2xl font-Montserrat Alternates text-center font-semibold'> REPORTS </h1>
    </div>

    <div className='p-10 '>
       <div className='max-w-64 bg-customPink rounded-xl overflow-hidden shadow-md ml-[2rem] pb-[2rem]'>
          <div>
            <img src={AnnualImage} 
            alt="Report Image"
            className='w-[20rem] h-[18rem] pb-3  ' />
          </div>
          <div className='pt-3'>
              <h2 className='pb-2 pl-3'>2025 Annual Report</h2>

              <a href={reportPDF}
               target="_blank" 
               rel="noopener noreferrer" 
               className=' rounded-full px-3 py-2 bg-purple-600 text-white hover:bg-purple-700 ml-2 mt-2'>
                View Report</a>
          </div>
       </div>
       </div>

       <div>
        <img src={ReportImage2}
         alt="Report Image 2" 
         className='w-full  h-auto  object-cover md:h-[60rem] '/>
       </div>


      
    </>
  )
}

export default Reports
