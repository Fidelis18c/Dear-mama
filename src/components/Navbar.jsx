import { Link } from 'react-router-dom'
import DearMama from '../assets/DearMama.png'
import { FaChevronDown} from 'react-Icons/fa'



const Navbar = () => {
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

      <div className='flex items-center gap-7  font-opensans font-thin  '>
        <div> <Link to="/aboutus" className='hover:text-purple-700'>About us</Link></div>
           <div className='flex items-center gap-1 hover:text-purple-700'> <Link to="/whatwedo">What we Do</Link>
                <div><FaChevronDown className='h-3 mt-1' /></div>
          </div>
        <div className='flex items-center gap-2 hover:text-purple-700 '> <Link to="/events" className=''>Events and Reports</Link>
        <FaChevronDown className='h-3 mt-1' />
        </div>
        <div> <Link to="/contact" className='hover:text-purple-700'>Contact Us</Link></div>
        </div>
         <div className="pl-10 "><Link to="/getinvolved" className='border-2 rounded-full px-4 py-2 bg-purple-500 text-white hover:bg-purple-700'>Get Involved</Link></div>
      </div>
      
    </>
  )
}

export default Navbar
