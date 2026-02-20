import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import DearMama from '../assets/DearMama.png'
import { FaChevronDown} from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa6'




const Navbar = () => {

  // Humberger menu state
  const [ismobileMenuOpen, setMobieMenuOpen] = useState(false);

   const toggleMobileMenu = () => {
    setMobileMenuOpen(!ismobileMenuOpen);
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



    <div className='flex items-center justify-between pb-1 pr-10 bg-customPink'>
       <div className='flex items-center gap-2'>
        <Link to="/"> <img src={DearMama} 
           alt="Dear Mama Foundation"
           className='w-20  h-15 ml-5 mt-2' /></Link>
       

        <div className='text-1xl font-opensans'>
          <Link to="/"><b>DEAR MAMA</b>  FOUNDATION</Link>  
        </div>
      </div>

  // HUMBURGER MENU BUTTON
        <div className="md:hidden mr-5" onClick={toggleMobileMenu}>
          {ismobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
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

{/* --- MOBILE MENU OVERLAY (Visible only when ismobileMenuOpen is true) --- */}
      <div className={`${ismobileMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col bg-white w-full p-5 shadow-lg border-t space-y-4 font-opensans`}>
        <Link to="/history" onClick={() => setMobieMenuOpen(false)}>About Us - History</Link>
        <Link to="/leadership" onClick={() => setMobieMenuOpen(false)}>About Us - Leadership</Link>
        <Link to="/whatwedo" onClick={() => setMobieMenuOpen(false)}>What We Do</Link>
        <Link to="/latestevents" onClick={() => setMobieMenuOpen(false)}>Latest Events</Link>
        <Link to="/reports" onClick={() => setMobieMenuOpen(false)}>Annual Reports</Link>
        <Link to="/contact" onClick={() => setMobieMenuOpen(false)}>Contact Us</Link>
        <Link to="/getinvolved" className="bg-purple-500 text-white text-center py-2 rounded-lg" onClick={() => setMobieMenuOpen(false)}>Get Involved</Link>
      </div>
   
      
    </>
  )
}

export default Navbar

