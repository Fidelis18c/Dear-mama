import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import DearMama from "../assets/DearMama.png";
import MixxImage from "../assets/MIXXBYYAS.png";

const Donate = ({ IsOpen, setIsOpen }) => {
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

                <p className="mt-3 text-center max-w-xl">
                  When you donate you are giving more than a gift, you are giving
                  hope, strength, and a reason to smile.
                </p>
              </div>

              {/* Payment */}
              <div className="flex flex-col items-center justify-center mt-2">
                <img
                  src={MixxImage}
                  alt="Mixx By YAS"
                  className="w-40 h-40 object-contain"
                />
                <h2 className="text-xl font-semibold">LIPA NAMBA 555555</h2>
              </div>

              {/* Form */}
              <form className="flex flex-col items-center justify-center mt-2">
                <div className="w-full max-w-md">
                  <label className="block text-sm font-semibold mb-1">
                    Amount
                  </label>
                  <input
                    type="text"
                    placeholder="TSh 10,000"
                    className="w-full p-3 border-2 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <button
                  type="button"
                  className="w-full max-w-md bg-purple-500 hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg mt-4 mb-2"
                >
                  Donate via Mobile Money
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
