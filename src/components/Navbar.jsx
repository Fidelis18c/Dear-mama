import React from 'react'
import DearMama from '../assets/DearMama.png'
import { FaChevronDown} from 'react-Icons/fa'


const Navbar = () => {
  return (
    <>
    <div className='flex items-center justify-between pb-1 pr-10'>
       <div className='flex items-center bg-customPink'>
        <img src={DearMama} alt="Dear Mama Foundation" className='w-20  h-15 ml-5 mt-2' />
        <div className='text-2xl font-opensans'>
            DEAR MAMA FOUNDATION
        </div>
      </div>
     
      <div className='flex items-center gap-10'>
        <div> <a href="">About us</a></div>
        <div className='flex items-center gap-1'> <a href="">What we Do</a>
          <FaChevronDown className='h-3 mt-1' />
          </div>
        <div> <a href="">Events and Reports</a></div>
        <div> <a href="">Contact Us</a></div>
        <div className="pl-10px"><a href="">Get Involved</a></div>
      </div>
      </div>
    </>
  )
}

export default Navbar
