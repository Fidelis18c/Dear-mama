import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import DearMama from '../assets/DearMama.png'
import DearMamaImage from '../assets/DearMama2.png'
import { FaChevronDown} from 'react-icons/fa'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion } from 'framer-motion'





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
  setAboutusDropdownOpen(false); // Close the other dropdown if it's open
 };


  return (
    <>

    <div className='w-full max-w-full   md:flex md:items-center md:justify-between bg-customPink  overflow-x-hidden'>
       <div className='flex items-center gap-1 pt-4 pb-3 bg-no-repeat bg-cover bg-center '>
        <Link to="/"> <img src={DearMamaImage} 
           alt="Dear Mama Foundation"
           className='w-12 h-15 ml-6 object-cover object-center md:w-20 md:h-15 md:ml-8 md:mt-2' /></Link>
      

        <div className='md:text-1xl md:font-opensans'>
          <Link to="/"><b>DEAR MAMA</b> <span className='text-xs' >FOUNDATION</span> </Link>  
        </div>
      </div>

   {/* Humburger Menu */}
     
     <div>

      <div className='absolute z-20 top-[2rem] right-4 md:hidden' onClick={toggleMenu}>
        {isMenuOpen ? 
            <FaTimes size={20} /> : <FaBars size={20}
         />}
      </div>

{/* About Us hamburger menu */}
      {isMenuOpen && (
        <div className='absolute  top-[4rem] left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center gap-2 py-3'>
          
          <div className='flex items-center justify-center pb-2 gap-1 w-full border-b-2 border-customPink 'onClick={handleAboutusToggle}>
             <span to="" className='' >About Us</span>
             <div><FaChevronDown className={`h-3 mt-1 transition-transform ${AboutusDropdownOpen ? 'rotate-180' : ''}`} /> </div>
                                  
              </div>

          

             {AboutusDropdownOpen && (
              <div className="flex flex-row px-8 pb-3 ml-3 gap-4 text-sm h-[2rem] z-20 bg-white font-bold text-gray-600"> 
                <Link to="/history" className='hover:text-purple-700 space-y-4'
                  onClick={() => {setAboutusDropdownOpen(false); setIsMenuOpen(false);}}
                    >
                     Our History
                      </Link>

                      <Link to="/leadership" className='hover:text-purple-700'  onClick={() => {setAboutusDropdownOpen(false); setIsMenuOpen(false);}}>
                      Our Leadership
                      </Link>

          </div>
        )}
         
         

          {/* What We Do hamburger menu */}
         
          <div className='flex pb-2 w-full items-center justify-center border-b-2 border-customPink '>
            <Link to="/whatwedo" onClick={toggleMenu} className='hover:text-purple-700'>What we do</Link>
          </div>
         
         {/* Events and Reports hamburger menu */}
          <div className='flex items-center justify-center gap-1 pb-2  w-full border-b-2 border-customPink'onClick={handleReportToggle}>
            <span to=""  className=''>Events and Reports</span>
            <div><FaChevronDown className={`h-3 mt-1 transition-transform ${reportDropdownOpen ? 'rotate-180' : ''}`}/></div>
          </div>
           
          {reportDropdownOpen && (
             <div className="flex flex-row px-8 pb-3  ml-3 gap-4 text-sm h-[2rem] bg-white font-bold text-gray-600">
                <Link to="/latestevents"  onClick={() => {setReportDropdownOpen(false); setIsMenuOpen(false);}}
                >Latest Events
                </Link>

                <Link to="/reports" onClick={() => {setReportDropdownOpen(false); setIsMenuOpen(false);}}
                >Annual Reports
                </Link>

             </div>
             )}
       


          {/* Contact Us hamburger menu */}
          
          <div className=' flex items-center justify-center pb-2  w-full border-b-2 border-customPink'>
            <Link to="/contact" onClick={toggleMenu} className=' hover:text-purple-700'>Contact us</Link>
          </div>
          

            {/* Get Involved hamburger menu */}
          <div>
            <Link to="/getinvolved" className='border-2 rounded-full px-3 py-2 mt-4 bg-purple-500 text-white hover:bg-purple-700' onClick={toggleMenu}>Get Involved</Link>
          </div>
          
        </div>
      )}
     </div>


      
      {/* MAIN NAVBAR */}

      <div className='md:flex md:items-center md:gap-7  font-opensans font-thin relative  '>

        {/* ABOUT US */}

           <div className='md:relative'>
             <div 
              onClick={handleAboutusToggle} 
              className='hidden md:flex md:items-center md:gap-1 md:hover:text-purple-700'>
                 <span to="" className='hover:text-purple-700'>About us</span>
             <div><FaChevronDown className={`h-3 mt-1 transition-transform ${AboutusDropdownOpen ? 'rotate-180' : ''}`} /> </div>
            </div>

           {/* Dropdown menu for About Us */}
         
         {AboutusDropdownOpen && (
  
               <div className="md:fixed md:top-[90px] md:left-0 md:w-full md:h-[25vh] md:bg-white shadow-2xl border-t border-gray-100 md:z-50">
    
                  <div className="md:max-w-7xl md:mx-auto md:h-full flex flex-col justify-center items-start px-20">
      
                    <div className="flex flex-col space-y-4 pl-[28rem] ">
                      <Link to="/history" 
                         className="md:text-1xl md:font-bold md:text-gray-800 md:hover:text-purple-700 transition-colors"
                         onClick={() => setAboutusDropdownOpen(false)}>Our History
                      </Link>

  
                      <Link to="/leadership" 
                          className="md:text-1xl md:font-bold md:text-gray-800 md:hover:text-purple-700 transition-colors"
                          onClick={() => setAboutusDropdownOpen(false)}>Our Leadership
                      </Link>

                   </div>
                  </div>
                </div>
          )}
      </div>
        

{/* EVENTS AND REPORT */}

<div className='hidden md:flex md:items-center md:gap-2 hover:text-purple-700 '> <Link to="/whatwedo" className=''>What We Do</Link>
       
   </div>
  
       <div className='relative'>
      
            {/* Trigger Button */}
            <div  onClick={handleReportToggle} className='hidden md:flex md:items-center md:gap-1 hover:text-purple-700 cursor-pointer'> 
                <span className="">Events and Reports</span>
                <FaChevronDown className={`h-3 mt-1 transition-transform ${reportDropdownOpen ? 'rotate-180' : ''}`}/>
            </div>
      
         {/* FULL WIDTH DROPDOWN */}


           {reportDropdownOpen && (
             <div className="md:fixed top-[90px] left-0 md:w-full md:h-[25vh] bg-white shadow-2xl border-t border-gray-100 z-50">
      
                {/* Centered Container matching your About Us style */}
                   <div className="max-w-7xl mx-auto h-full flex flex-col justify-center items-start px-20">
        
                     <div className="flex flex-col space-y-4 pl-[44rem]">
                       <Link  to="/latestevents" 
                         className="text-1xl font-bold text-gray-800 hover:text-purple-700 transition-colors"
                          onClick={() => setReportDropdownOpen(false)}
                           >
                           Latest Events
                       </Link>

                      <Link to="/reports" 
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


   {/* Hamburger Icon */}
{/* <div className='pt-3 pr-4 md:hidden' onClick={toggleMenu}>
  {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
</div> */}

{/* Mobile Menu */}
// {isMenuOpen && (
//   <div className="absolute top-[4rem] left-0 w-full bg-white shadow-lg z-50 flex flex-col py-4 transition-all duration-300">

    {/* ABOUT US */}
    // <div className="w-full border-b border-gray-200">
    //   <div 
    //     onClick={handleAboutusToggle}
    //     className="flex justify-between items-center px-6 py-3 cursor-pointer"
    //   >
    //     <span>About Us</span>
    //     <FaChevronDown className={`transition-transform ${AboutusDropdownOpen ? 'rotate-180' : ''}`} />
    //   </div>

    //   {AboutusDropdownOpen && (
    //     <div className="flex flex-col px-8 pb-3 text-sm text-gray-600">
    //       <Link to="/history" onClick={toggleMenu}>Our History</Link>
    //       <Link to="/leadership" onClick={toggleMenu}>Our Leadership</Link>
    //     </div>
    //   )}
    // </div>

    {/* WHAT WE DO */}
    // <Link 
    //   to="/whatwedo" 
    //   onClick={toggleMenu}
    //   className="px-6 py-3 border-b border-gray-200"
    // >
    //   What We Do
    // </Link>

    {/* EVENTS */}
    // <div className="w-full border-b border-gray-200">
    //   <div 
    //     onClick={handleReportToggle}
    //     className="flex justify-between items-center px-6 py-3 cursor-pointer"
    //   >
    //     <span>Events & Reports</span>
    //     <FaChevronDown className={`transition-transform ${reportDropdownOpen ? 'rotate-180' : ''}`} />
    //   </div>

    //   {reportDropdownOpen && (
    //     <div className="flex flex-col px-8 pb-3 text-sm text-gray-600">
    //       <Link to="/latestevents" onClick={toggleMenu}>Latest Events</Link>
    //       <Link to="/reports" onClick={toggleMenu}>Annual Reports</Link>
    //     </div>
    //   )}
    // </div>

    {/* CONTACT */}
    // <Link 
    //   to="/contact" 
    //   onClick={toggleMenu}
    //   className="px-6 py-3 border-b border-gray-200"
    // >
    //   Contact Us
    // </Link>

    {/* BUTTON */}
  //   <div className="px-6 pt-4">
  //     <Link 
  //       to="/getinvolved" 
  //       onClick={toggleMenu}
  //       className="block text-center bg-purple-500 text-white py-2 rounded-full hover:bg-purple-700"
  //     >
  //       Get Involved
  //     </Link>
  //   </div>

  // </div>
// )}
     