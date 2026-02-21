import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import DearMama from '../assets/DearMama.png'
import DearMamaImage from '../assets/DearMama2.png'
import { FaChevronDown} from 'react-icons/fa'
import { FaBars, FaTimes } from 'react-icons/fa'





const Navbar = () => {

  // Humberger menu state
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


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

    <div className='w-full flex items-center justify-between pb-1  bg-customPink overflow-hidden md:overflow-hidden'>
       <div className=' flex items-center gap-1 pt-3 pb-1  '>
        <Link to="/"> <img src={DearMamaImage} 
           alt="Dear Mama Foundation"
           className='w-12 h-15 md:w-20 md:h-15 md:ml-8 md:mt-2' /></Link>
      

        <div className='md:text-1xl md:font-opensans'>
          <Link to="/"><b>DEAR MAMA</b> <span className='text-xs' >FOUNDATION</span> </Link>  
        </div>
      </div>

   {/* Humburger Menu */}
     
     <div>

      <div className='md:hidden' onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {isMenuOpen && (
        <div className='absolute top-[4rem] left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center gap-4 py-4'>
          
          <div className='flex items-center justify-center pb-2 gap-1 w-full border-b-2 border-customPink onClick={handleAboutusToggle}  '>
             <Link to="/aboutus" className='hover:text-purple-700' onClick={toggleMenu}>ABOUT US</Link>
             <div><FaChevronDown className={`h-3 mt-1 transition-transform ${AboutusDropdownOpen ? 'rotate-180' : ''}`} /> </div>
          </div>
         
          <div className='flex pb-2 w-full items-center justify-center border-b-2 border-customPink '>
            <Link to="/whatwedo" onClick={toggleMenu} className='hover:text-purple-700'>WHAT WE DO</Link>
          </div>
         
          <div className='flex items-center justify-center gap-1 pb-2  w-full border-b-2 border-customPink'>
            <Link to="/eventsandreports" onClick={toggleMenu} className='hover:text-purple-700'>EVENTS AND REPORTS</Link>
            <div><FaChevronDown className={`h-3 mt-1 transition-transform ${reportDropdownOpen ? 'rotate-180' : ''}`}/></div>
          </div>
          
          <div className=' flex items-center justify-center pb-2  w-full border-b-2 border-customPink'>
            <Link to="/contact" onClick={toggleMenu} className=' hover:text-purple-700'>CONTACT US</Link>
          </div>
          
          <div>
            <Link to="/getinvolved" className='border-2 rounded-full px-3 py-2 bg-purple-500 text-white hover:bg-purple-700' onClick={toggleMenu}>GET INVOLVED</Link>
          </div>
          
        </div>
      )}
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
      
      <div className="flex flex-col space-y-4 pl-[28rem] ">
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
        
        <div className="flex flex-col space-y-4 pl-[43rem]">
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

        <div className=" hidden md:flex  ">
          <Link to="/getinvolved" className=' md:border-2 md:rounded-full md:px-3 md:py-2 md:bg-purple-500 md:text-white md:hover:bg-purple-700'>Get Involved</Link>
        </div>

      </div>


   
      
    </>
  )
}

export default Navbar

