import React from 'react'
import './index.css';
import Navbar from './components/Navbar.jsx'    
import HeroSection from './components/Hero.jsx'
import Mission from './components/Mission.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Mission />
      <Footer />
    </>
  )
}

export default App
