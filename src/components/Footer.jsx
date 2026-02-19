import React from 'react'
import { Link } from 'react-router-dom'
import DearMama from '../assets/DearMama.png'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (

    <div className='bg-purple-700 text-white pt-8 pb-5 pl-10'>

      <div className='relative'>
      <div className=''>Contact Us</div>
      </div>

    <div className='flex gap-2 '>
           <div><a href=""><><FaFacebook /></></a></div>
            <div><a href=""><FaTwitter /></a></div>
             <div><a href="https://www.instagram.com/dear_mama_foundation?igsh=ZjZ4bWlwcnVma3ow"><FaInstagram /></a></div>
       </div>

       <div>
          <div>
           <Link to=""> <img src={DearMama} 
             alt="Dear Mama Foundation"
             className='w-20  h-15 mt-2' /></Link>
          </div>   
       </div>

         <div className="mt-4">
           <h1 className='text-center items-center'>© 2026 DEAR MAMA FOUNDATION.</h1>
        </div>


    </div>
  )
}

export default Footer
