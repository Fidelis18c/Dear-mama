import React from 'react'
import { Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
 } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer.jsx'
import MainLayout from './Layout/MainLayout.jsx'; 
import HomePage from './pages/HomePage.jsx';
import WhatWeDo from './pages/WhatWeDo.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/whatwedo" element={<WhatWeDo />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
  
}

export default App
