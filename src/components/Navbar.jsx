import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import DearMama from '../assets/DearMama.png'
import DearMamaImage from '../assets/DearMama2.png'
import { FaChevronDown} from 'react-icons/fa'





const Navbar = () => {

  // Humberger menu state
  


  // Dropdown menu states

   
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

    <div className='w-full flex items-center justify-between pb-1  bg-customPink overflow-hidden'>
       <div className=' flex items-center gap-1  '>
        <Link to="/"> <img src={DearMamaImage} 
           alt="Dear Mama Foundation"
           className='w-18 h-15 md:w-20 md:h-15 md:ml-5 md:mt-2' /></Link>
      

        <div className='md:text-1xl md:font-opensans'>
          <Link to="/"><b>DEAR MAMA</b> <span className='text-xs' >FOUNDATION</span> </Link>  
        </div>
      </div>


      <div className='md:flex md:items-center md:gap-7  font-opensans font-thin relative  '>

        <div className='md:relative'>
           <div 
            onClick={handleAboutusToggle} 
            className='hidden md:flex md:items-center md:gap-1 md:hover:text-purple-700'> <Link to="" className='hover:text-purple-700'>About us</Link>
          <div><FaChevronDown className={`h-3 mt-1 transition-transform ${AboutusDropdownOpen ? 'rotate-180' : ''}`} /> </div>
        </div>

         {/* Dropdown menu for About Us */}
         
         {AboutusDropdownOpen && (
  
  <div className="md:fixed md:top-[90px] md:left-0 md:w-full md:h-[25vh] md:bg-white shadow-2xl border-t border-gray-100 z-50">
    
    <div className="max-w-7xl mx-auto h-full flex flex-col justify-center items-start px-20">
      
      <div className="flex flex-col space-y-4 pl-[22.5rem] ">
        <Link 
          to="/history" 
          className="md:text-1xl md:font-bold md:text-gray-800 md:hover:text-purple-700 transition-colors"
          onClick={() => setAboutusDropdownOpen(false)}
        >
          Our History
        </Link>

  
        <Link 
          to="/leadership" 
          className="md:text-1xl md:font-bold md:text-gray-800 md:hover:text-purple-700 transition-colors"
          onClick={() => setAboutusDropdownOpen(false)}
        >
          Our Leadership
        </Link>
      </div>
    </div>
  </div>
)}
        </div>
        


<div className='hidden md:flex md:items-center md:gap-2 hover:text-purple-700 '> <Link to="/whatwedo" className=''>What We Do</Link>
       
 </div>
  
     <div className='relative'>
      
  {/* Trigger Button */}
  <div 
    onClick={handleReportToggle}
    className='hidden md:flex md:items-center md:gap-1 hover:text-purple-700 cursor-pointer'
  > 
    <span className="md:font-montserrat">Events and Reports</span>
    <FaChevronDown className={`h-3 mt-1 transition-transform ${reportDropdownOpen ? 'rotate-180' : ''}`}/>
  </div>
      
  {/* FULL WIDTH DROPDOWN */}


  {reportDropdownOpen && (
    <div className="fixed top-[90px] left-0 w-full h-[25vh] bg-white shadow-2xl border-t border-gray-100 z-50">
      
      {/* Centered Container matching your About Us style */}
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center items-start px-20">
        
        <div className="flex flex-col space-y-4 pl-[39rem]">
          <Link 
            to="/latestevents" 
            className="text-1xl font-bold text-gray-800 hover:text-purple-700 transition-colors"
            onClick={() => setReportDropdownOpen(false)}
          >
            Latest Events
          </Link>

          <Link 
            to="/reports" 
            className="text-1xl md:font-bold text-gray-800 hover:text-purple-700 transition-colors"
            onClick={() => setReportDropdownOpen(false)}
          >
            Annual Reports
          </Link>
        </div>
        
      </div>
    </div>
  )}
</div>
          



        
        <div className='hidden md:flex'> 
          <Link to="/contact" className=''>Contact Us</Link></div>
        </div>

        <div className=" md:pl-10 ">
          <Link to="/getinvolved" className=' md:border-2 md:rounded-full md:px-3 md:py-2 md:bg-purple-500 md:text-white md:hover:bg-purple-700'>Get Involved</Link>
        </div>

      </div>


   
      
    </>
  )
}

export default Navbar

