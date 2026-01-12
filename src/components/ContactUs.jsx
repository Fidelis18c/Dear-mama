import React from 'react'
import contactImage from '../assets/Contact1.png'


const ContactUs = () => {
  return (
    <> 
   
      <div className=''>
        <img src={contactImage} 
        alt="Contact Us" 
        className='w-full h-[40rem]' />
      </div>
     
      <div className="w-full max-w-4xl px-6">
   
    <h2 className="text-2xl font-semibold mb-10 text-gray-800">
      Write to us</h2>

   <div className='flex items-center gap-4'>
     <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
      
      <div>
        <label className="block text-sm text-gray-600 mb-2">Name</label>
        <input
          type="text"
          className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-black"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-2">Email</label>
        <input
          type="email"
          className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-black"
        />
      </div>

    </div>

   
    <div className="mb-12">
      <label className="block text-sm text-gray-600 mb-4">
        Write something...
      </label>
      <textarea
        rows="3"
        className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-black resize-none"
      ></textarea>
    </div>


    <button
      className="bg-orange-500 text-white px-6 py-3 text-sm tracking-wide hover:bg-orange-600 transition"
    >
      SEND A MESSAGE
    </button>
    </div>
  </div>

     <div>
        <h1>CONTACT</h1>

        <h2>Address</h2>
        <p>Kichangani, P.O.BOX  235.</p>
        <p>Katavi, Tanzania</p>

        <h2>Email</h2>
        <p>info@dearmamafoundation.org</p>

        <h2>Phone Number</h2>
        <p>+255694007665</p>
     </div>
  </div>
    
    </>
  )
}

export default ContactUs
