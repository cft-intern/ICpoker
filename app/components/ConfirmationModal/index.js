import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useNavigate } from 'react-router-dom';
const ConfirmationModal = ({ isOpen, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false); // State to manage success message
  const navigate = useNavigate();

  if (!isOpen) return null; // Don't render if not open

  const handleConfirm = () => {
    setIsSuccess(true); // Set success state
  };

  const handlenavigate = () => {
    onClose();
    navigate('/cash-game'); // Change '/another-page' to your target route
  };

  return (
    <div className="w-[90%] sm:w-[70%] md:w-[50%] lg:w-[30%] h-[50%] sm:h-[70%] lg:h-[51%] bg-[#1D1D1D] rounded-md">
      <div className="flex justify-between items-center px-4 py-2">
        <h1 className="text-[15px] sm:text-[17px] text-center flex-grow">
          {isSuccess ? 'SUCCESS' : 'CONNECT WALLET'}
        </h1>
        <button
          onClick={onClose}
          className="text-[24px] text-white border border-[#27A0D4] rounded-md hover:border-[#27A0D4] hover:text-[#27A0D4] transition duration-200"
        >
          &times; {/* X icon */}
        </button>
      </div>
      <div className="mt-2 mx-auto bg-[#000000] w-[95%] md:w-[85%] h-[75%] rounded-md flex justify-center items-center">
        {isSuccess ? (
          <div className="text-white text-center">
            <h2 className="text-lg">Account connected successfully!</h2>
            <button
              onClick={() => handlenavigate()}
              className="mt-4 border border-[#27A0D4] text-white py-2 px-4 rounded hover:bg-[#27A0D4] hover:text-black transition duration-200"
            >
              OK
            </button>
          </div>
        ) : (
          <div className="mt-4 flex flex-col items-center">
            {/* Combine checkbox and button in one line */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                className="mr-2 form-checkbox h-5 w-5 text-[#27A0D4] border-[#27A0D4] rounded focus:ring-[#27A0D4] transition duration-200 hover:border-[#27A0D4] hover:ring-[#27A0D4] hover:ring-opacity-50"
              />
              <label className="text-white text-sm sm:text-base">
                I confirm that I am over 18 years old
              </label>
            </div>
            <button
              onClick={handleConfirm}
              className="border border-[#27A0D4] text-white py-2 px-4 rounded hover:bg-[#27A0D4] hover:text-black transition duration-200"
            >
              CONNECT WITH ID
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
// PropTypes validation
ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ConfirmationModal;
