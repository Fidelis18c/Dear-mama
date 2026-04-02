import React from 'react'
import { Link } from 'react-router-dom'
import DearMama from '../assets/DearMama.png'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-purple-700 text-white pt-10 pb-6 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto'>
        {/* Footer Top: 3-column grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mb-10'>
          
          {/* Column 1: Identity & Slogan */}
          <div className='flex flex-col gap-4'>
            <Link to="/">
              <img src={DearMama} 
                alt="Dear Mama Foundation"
                className='w-24 h-auto' />
            </Link>
            <p className='text-sm font-light leading-relaxed max-w-sm'>
              From Our Hands To Their Hearts. We are dedicated to providing compassionate support to orphans, hospital patients, and vulnerable groups in Katavi, Tanzania.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className='text-xl font-semibold mb-4 border-b border-purple-500 pb-2 inline-block'>Quick Links</h3>
            <ul className='flex flex-col gap-2 text-sm font-light'>
              <li><Link to="/" className='hover:text-purple-300 hover:border-b-2 transition-colors'>Home</Link></li>
              <li><Link to="/history" className='hover:text-purple-300 hover:border-b-2 transition-colors'>Our History</Link></li>
              <li><Link to="/whatwedo" className='hover:text-purple-300 hover:border-b-2 transition-colors'>What We Do</Link></li>
              <li><Link to="/latestevents" className='hover:text-purple-300 hover:border-b-2 transition-colors'>Latest Events</Link></li>
              <li><Link to="/contact" className='hover:text-purple-300 hover:border-b-2 transition-colors'>Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className='text-xl font-semibold mb-4 border-b border-purple-500 pb-2 inline-block'>Contacts</h3>
            <div className='flex flex-col gap-3 text-sm font-light'>
              <div>
                <p className='font-semibold'>Address</p>
                <p>Kichangani, P.O.BOX 235,</p>
                <p>Katavi, Tanzania.</p>
              </div>
              <div>
                <p className='font-semibold'>Email</p>
                <p>info@dearmamafoundation.org</p>
              </div>
              <div>
                <p className='font-semibold'>Phone</p>
                <p>+255 694 007 665</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom: Socials & Copyright */}
        <div className='border-t border-purple-600 pt-6 flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='flex gap-6 text-2xl'>
            <a href="#" className='hover:text-purple-300 transition-all hover:scale-110'><FaFacebook /></a>
            <a href="#" className='hover:text-purple-300 transition-all hover:scale-110'><FaTwitter /></a>
            <a href="https://www.instagram.com/dear_mama_foundation?igsh=ZjZ4bWlwcnVma3ow" 
               target="_blank" 
               rel="noopener noreferrer" 
               className='hover:text-purple-300 transition-all hover:scale-110'>
              <FaInstagram />
            </a>
          </div>
          
          <div className='text-xs md:text-sm text-center md:text-right font-light'>
            © 2026 DEAR MAMA FOUNDATION. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
