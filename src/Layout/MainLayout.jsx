import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'    

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

    </>
  )
}

export default MainLayout
