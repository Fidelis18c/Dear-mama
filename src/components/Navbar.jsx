import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import DearMama from '../assets/DearMama.png'
import { FaChevronDown} from 'react-Icons/fa'




const Navbar = () => {

  
   
  const [ AboutusDropdownOpen, setAboutusDropdownOpen ] = useState(false);
  const [reportDropdownOpen, setReportDropdownOpen] = useState(false);

  const handleAboutusToggle = () => {
    setAboutusDropdownOpen(!AboutusDropdownOpen);
    setReportDropdownOpen(false); // Close the other dropdown if it's open
  };

  const handleReportToggle = () => {
  setReportDropdownOpen(!reportDropdownOpen);
  setAboutUsDropdownOpen(false); // Close the other dropdown if it's open
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
            onClick={handleAboutusToggle} 
            className='flex items-center gap-1 hover:text-purple-700'> <Link to="" className='hover:text-purple-700'>About us</Link>
          <div><FaChevronDown className={`h-3 mt-1 transition-transform ${AboutusDropdownOpen ? 'rotate-180' : ''}`} /></div>
        </div>

         {/* Dropdown menu for About Us */}
         
         {AboutusDropdownOpen && (
  
  <div className="fixed top-[90px] left-0 w-full h-[25vh] bg-white shadow-2xl border-t border-gray-100 z-50">
    
    <div className="max-w-7xl mx-auto h-full flex flex-col justify-center items-start px-20">
      
      <div className="flex flex-col space-y-4">
        <Link 
          to="/history" 
          className="text-1xl font-bold text-gray-800 hover:text-purple-700 transition-colors"
          onClick={() => setAboutusDropdownOpen(false)}
        >
          Our History
        </Link>

  
        <Link 
          to="/leadership" 
          className="text-1xl font-bold text-gray-800 hover:text-purple-700 transition-colors"
          onClick={() => setAboutusDropdownOpen(false)}
        >
          Our Leadership
        </Link>
      </div>
    </div>
  </div>
)}

        </div>
        


<div className='flex items-center gap-2 hover:text-purple-700 '> <Link to="/whatwedo" className=''>What We Do</Link>
       
 </div>
  

     <div className='relative'>
  {/* Trigger Button */}
  <div 
    onClick={handleReportToggle}
    className='flex items-center gap-1 hover:text-purple-700 cursor-pointer'
  > 
    <span className="font-montserrat">Events and Reports</span>
    <FaChevronDown className={`h-3 mt-1 transition-transform ${reportDropdownOpen ? 'rotate-180' : ''}`}/>
  </div>
      
  {/* FULL WIDTH DROPDOWN */}
  {reportDropdownOpen && (
    <div className="fixed top-[90px] left-0 w-full h-[25vh] bg-white shadow-2xl border-t border-gray-100 z-50">
      
      {/* Centered Container matching your About Us style */}
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center items-start px-20">
        
        <div className="flex flex-col space-y-4">
          <Link 
            to="/latestevents" 
            className="text-1xl font-bold text-gray-800 hover:text-purple-700 transition-colors"
            onClick={() => setReportDropdownOpen(false)}
          >
            Latest Events
          </Link>

          <Link 
            to="/reports" 
            className="text-1xl font-bold text-gray-800 hover:text-purple-700 transition-colors"
            onClick={() => setReportDropdownOpen(false)}
          >
            Annual Reports
          </Link>
        </div>
        
      </div>
    </div>
  )}
</div>
          



        <div> <Link to="/contact" className='hover:text-purple-700'>Contact Us</Link></div>

        </div>
         <div className="pl-10 ">
          <Link to="/getinvolved" className='border-2 rounded-full px-4 py-2 bg-purple-500 text-white hover:bg-purple-700'>Get Involved</Link></div>
      </div>


   
      
    </>
  )
}

export default Navbar

