import React from 'react'
import contactImage from '../assets/Contact1.png'
import HeroImage5 from '../assets/Hero5.jpeg';
import ReportImage2 from '../assets/Report2.png'

import { useState } from 'react'


const ContactUs = () => {



    const [formData, setFormData] = useState({ name: '', email: '', message: ''});
    const [loading, setLoading] = useState(false);


    
    const handleSubmit = async (e) => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' }); // Clear form
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };
 


  return (
    <> 
    
          <div className=''>
            <img src={HeroImage5} 
               alt="Contact Us" 
               className='md:w-full md:h-[50rem]' />
           </div>

  <div className='md:flex   bg-customPink  '>

      
     <div className='pt-[3rem] md:ml-[10rem] md:mt-5 '>
         <div className='ml-5 mr-4 md:mr-0 md:ml-0 md:pl-10 bg-customPink'>
                 <div>
                  <h2 className=" text-2xl font-semibold mb-4  md:ml-0">Write to us</h2>
                </div>

 
             <form onSubmit={handleSubmit}>

                <div className='flex flex-col gap-10 md:grid md:grid-cols-2  md:gap-18 mb-10  bg-customPink '>
                    <div>
                      <label className="w-full block text-sm text-gray-600 mb-2">Name</label>
                       <input
                       value={formData.name} 
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        type="text"
                         className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-black"
                         />
                     </div>

                     <div>
                        <label className="block text-sm text-gray-600 mb-2">Email</label>
                         <input
                        value={formData.email} 
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        type="email"
                        className="max-w-108 bg-transparent border-b border-gray-500 focus:outline-none focus:border-black"
                         />
                       </div>
                   </ div>

                   <div>
                     <label className="block text-sm text-gray-600 mb-2">Write something</label>
                      <textarea
                       value={formData.message} 
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                         rows="4"
                         className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-black"
                      ></textarea>
                   </div>

                   <button className="bg-purple-500 text-white px-6 py-2 mb-10 md:mt-5 mt-7 hover:bg-purple-700 transition duration-300">
                    SEND MESSAGE
                   </button>
       
              </form>

          </div>
      </div>
   

      <div className='mb-10 pl-7 pr-7 pt-7 pb-7 mt-20 mr-[3rem] ml-5 md:ml-0 bg-white   md:absolute  rounded-lg md:max-w-80 md:p-7 md:pr-5  md:mt-12 md:mb-0 md:mr-[5rem]  md:right-[2rem] '>
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

       <div className='bg-customPink pt-6 mt-4'>

       </div>

  </div>

  <div className='md:hidden'>
               <img src={ReportImage2}
                alt="Report Image 2" 
                className='md:w-full md:h-[50rem]'/>
             </div>
    </>
  )
}

export default ContactUs
