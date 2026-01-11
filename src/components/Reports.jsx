import React from 'react'
import ReportImage from '../assets/Report1.png'


const Reports = () => {
  return (
    <>
    <div className='p-10'>
       <div className=''>
          <div>
            <img src={ReportImage} 
            alt="Report Image"
            className='w-[10rem] h-[10rem] pb-3 ' />
          </div>
          <div>
              <h2 className='pb-2'>2025 Annual Report</h2>

              <a href="" className=' rounded-full px-3 py-2 bg-purple-600 text-white hover:bg-purple-700'>View Report</a>
          </div>
       </div>
       </div>
    </>
  )
}

export default Reports
