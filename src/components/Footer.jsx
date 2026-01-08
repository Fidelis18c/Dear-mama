import React from 'react'
import { Link } from 'react-router-dom'
import DearMama from '../assets/DearMama.png'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-purple-700 text-white pt-8 pb-5 pl-10'>
      <div>Contact Us</div>
       <div className='flex gap-2 '>
           <div><a href=""><><FaFacebook /></></a></div>
            <div><a href=""><FaTwitter /></a></div>
             <div><a href=""><FaInstagram /></a></div>
       </div>

       <div>
          <div>
           <Link to=""> <img src={DearMama} 
             alt="Dear Mama Foundation"
             className='w-20  h-15 mt-2' /></Link>
          </div>
        <p>© 2026 DEAR MAMA FOUNDATION.</p>
       </div>
    </div>
  )
}

export default Footer
