import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import DearMama from "../assets/DearMama.png";
import MixxImage from "../assets/MIXXBYYAS.png";
import { useState } from 'react';


const Donate = ({ IsOpen, setIsOpen }) => {



    const [phone, setPhone] = useState("");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);


    const checkStatus = (tx_ref) => {
  const interval = setInterval(async () => {
    const response = await fetch(`${API_BASE_URL}/payment/status/${tx_ref}`);
    const result = await response.json();

    if (result.data.status === 'SUCCESSFUL') {
      clearInterval(interval);
      alert("Thank you for your donation!");
      setIsOpen(false); // Close the modal
    } else if (result.data.status === 'FAILED') {
      clearInterval(interval);
      alert("Transaction failed or was cancelled.");
    }
  }, 5000); // Check every 5 seconds
};


  const handleDonate = async (e) => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    e.preventDefault();
    setLoading(true);


  try {
    const response = await fetch(`${API_BASE_URL}/payment/initiate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: amount, // from your state
        phone: phone,   // from your state
        name: "Donor",  // Zenopay needs this
        email: "donor@mail.com" // Zenopay needs this
      }),
    });

    const result = await response.json();

    if (result.success) {
      // 1. Tell the user to check their phone
      alert("Please check your phone for the M-Pesa/TigoPesa prompt!");
      
      // 2. Start checking the status every 5 seconds
      checkStatus(result.data.reference);
    }
  } catch (error) {
    alert("Payment failed to start.");
  } finally {
    setLoading(false);
  }

};


  return (
    <AnimatePresence>
      {IsOpen && (
        <motion.div
          // Backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] flex items-center justify-center p-4"
        >
          <motion.div
            // Popup card
            initial={{ scale: 0.7, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full relative"

          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-6 text-3xl font-bold text-gray-400 hover:text-gray-800"
              aria-label="Close"
              type="button"
            >
              &times;
            </button>

            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-center gap-3">
                <Link to="/">
                  <img
                    src={DearMama}
                    alt="Dear Mama Foundation"
                    className="w-20 h-auto"
                  />
                </Link>

                <div className="text-lg font-opensans">
                  <Link to="/">
                    <b>DEAR MAMA</b> FOUNDATION
                  </Link>
                </div>
              </div>

              {/* Title */}
              <div className="flex flex-col justify-center items-center ">
                <div className="text-center">
                  <h2 className="text-2xl">Donate to</h2>
                  <h2 className="font-semibold text-3xl">
                    DEAR MAMA FOUNDATION
                  </h2>
                </div>

                <p className=" text-center max-w-xl">
                  When you donate you are giving more than a gift, you are giving
                  hope, strength, and a reason to smile.
                </p>
              </div>

              {/* Payment */}
              <div className="flex flex-col items-center justify-center ">
                <img
                  src={MixxImage}
                  alt="Mixx By YAS"
                  className="w-40 h-40 object-contain"
                />
                <h2 className="text-xl font-semibold">LIPA NAMBA 555555</h2>
              </div>

              {/* Form */}
              <form onSubmit={handleDonate} className="flex flex-col items-center justify-center ">
                <div className="w-full max-w-md">
                  <label className="block text-sm font-semibold mb-1">
                    Phone 
                  </label>
                  <input
                    type="text"
                    placeholder="255694007665"
                    className="w-full p-3 border-2 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <label className="block text-sm font-semibold mb-1">
                    Amount
                  </label>
                  <input
                    type="text"
                    placeholder="TSh 10,000"
                    className="w-full p-3 border-2 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                

                <button
                  type = "submit"
                  disabled ={loading}
                  className="w-full max-w-md bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg mt-4 mb-2"
                >
                 {loading ? "Starting payment..." : "Donate via Mobile Money"}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Donate;
