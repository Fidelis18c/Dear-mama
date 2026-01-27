import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import DearMama from '../assets/DearMama.png'
import { FaChevronDown} from 'react-Icons/fa'
import Reports from './Reports'



const Navbar = () => {
   
  const [ DropdownOpen, setDropdownOpen ] = useState(false);
  const [reportDropdownOpen, setReportDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!DropdownOpen);
  };

  const handleReportToggle = () => {
  setReportDropdownOpen(!reportDropdownOpen);
  setDropdownOpen(false); // Close the other dropdown if it's open
 };

  return (
    <>



    <div className='flex items-center justify-between pb-1 pr-10 bg-customPink'>
       <div className='flex items-center gap-2'>
        <Link to="/"> <img src={DearMama} 
           alt="Dear Mama Foundation"
           className='w-20  h-15 ml-5 mt-2' /></Link>
       

        <div className='text-1xl font-opensans'>
          <Link to="/"><b>DEAR MAMA</b>  FOUNDATION</Link>  
        </div>
      </div>

      <div className='flex items-center gap-7  font-opensans font-thin relative  '>

        <div className='relative'>
           <div 
            onClick={handleDropdownToggle} 
            className='flex items-center gap-1 hover:text-purple-700'> <Link to="" className='hover:text-purple-700'>About us</Link>
          <div><FaChevronDown className={`h-3 mt-1 transition-transform ${DropdownOpen ? 'rotate-180' : ''}`} /></div>
        </div>

         {/* Dropdown menu for About Us */}

    {
      DropdownOpen && (
          <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl border rounded-md overflow-hidden z-50">
            <li className="hover:bg-purple-50 border-b border-gray-100">
              <Link 
                to="/history" 
                className="block p-3 text-gray-700"
                onClick={() => setDropdownOpen(false)} // Closes menu after clicking
              >
                Our History
              </Link>
            </li>
            <li className="hover:bg-purple-50 border-b border-gray-100">
              <Link 
                to="/values" 
                className="block p-3 text-gray-700"
                onClick={() => setDropdownOpen(false)}
              >
                Our Core Values
              </Link>
            </li>
            <li className="hover:bg-purple-50">
              <Link 
                to="/leadership" 
                className="block p-3 text-gray-700"
                onClick={() => setDropdownOpen(false)}
              >
                Our Leadership
              </Link>
            </li>
          </ul>
        )}
        </div>
        


<div className='flex items-center gap-2 hover:text-purple-700 '> <Link to="/whatwedo" className=''>What We Do</Link>
       
 </div>
  
     <div className='relative'>
           <div onClick={handleReportToggle}
            className='flex items-center gap-1 hover:text-purple-700'> <Link to="">Events and Reports</Link>
              <FaChevronDown  className={`h-3 mt-1 transition-transform ${DropdownOpen ? 'rotate-180' : ''}`}/>
            </div>
                
          {reportDropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl border rounded-md overflow-hidden z-[999]">
                <li className="hover:bg-purple-50 border-b border-gray-100">
                <Link 
                to="/events" 
                  className="block p-3 text-gray-700" 
                   onClick={() => setReportDropdownOpen(false)}
                 >
                     Latest Events
                  </Link>
         </li>
          <li className="hover:bg-purple-50">
          <Link 
          to="/reports" 
          className="block p-3 text-gray-700" 
          onClick={() => setReportDropdownOpen(false)}
        >
          Annual Reports
        </Link>
      </li>
    </ul>
  )}
     </div>
          



        <div> <Link to="/contact" className='hover:text-purple-700'>Contact Us</Link></div>
        </div>
         <div className="pl-10 "><Link to="/getinvolved" className='border-2 rounded-full px-4 py-2 bg-purple-500 text-white hover:bg-purple-700'>Get Involved</Link></div>
      </div>


   
      
    </>
  )
}

export default Navbar

