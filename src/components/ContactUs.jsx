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

    <div className='flex flex-row  bg-customPink  '>

      
   <div className='ml-[10rem] mt-5'>
   <div className='pl-10 bg-customPink'>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Write to us</h2>
      </div>

 

      <div className='grid grid-cols-2  gap-20 mb-10 '>
         <div>
          <label className="w-full block text-sm text-gray-600 mb-2">Name</label>
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

      <div>
        <label className="block text-sm text-gray-600 mb-2">Write something</label>
        <textarea
          rows="4"
          className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-black"
        ></textarea>
      </div>

      <button className="bg-purple-500 text-white px-6 py-2 mb-10 mt-5 hover:bg-purple-700 transition duration-300">
        SEND MESSAGE
      </button>
    </div>
  </div>



     <div className='bg-white rounded-lg max-w-80 p-7 pr-5 mb-10 mt-12 ml-[15rem]'>
      <div className=''>
      <h2 className="text-xl font-semibold mb-4">CONTACTS</h2>
      <h3 className=" font-medium">Address</h3>
      <p>Kichangani, P.O.BOX  235,</p>
      <p>Katavi, Tanzania.</p>
      <h3 className=" font-medium mt-2">E-mail</h3>
      <p className="">info@dearmamafoundation.org</p>
      <h3 className=" font-medium mt-2">Phone number</h3>
      <p>+255694007665</p>
      </div>
     </div>
</div>

    </>
  )
}

export default ContactUs
