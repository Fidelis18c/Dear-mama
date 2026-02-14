import React from 'react'
import axios from 'axios'
import { Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
 } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer.jsx'
import MainLayout from './Layout/MainLayout.jsx'; 
import HomePage from './pages/HomePage.jsx';
import WhatWeDo from './pages/WhatWeDoPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import ReportPage from './pages/ReportPage.jsx';
import History from './components/History.jsx';
import Leadership from './components/Leadership.jsx';
import Values from './components/Values.jsx';
import Navbar from './components/Navbar.jsx';
import LatestEvents from './components/LatestEvents.jsx';
import Reports from './components/Reports.jsx';
import WhoWeAre from './components/WhoWeAre.jsx';
import GetInvolved from './components/GetInvolved.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/whatwedo" element={<WhatWeDo />} />
      <Route path="/aboutus" element={<AboutUsPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/history" element={<History />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/values" element={<Values />} />
      <Route path="/latestevents" element={<LatestEvents />} />
      <Route path="/whoweare" element={<WhoWeAre />} />  
      <Route path="/getinvolved" element={<GetInvolved />} />

    </Route>
  )
);

const App = () => {
  return ( 
    <RouterProvider router={router} />
  )
  
}

export default App
