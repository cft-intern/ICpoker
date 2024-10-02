import React, { useState, useEffect } from 'react';
import Progressbaar from '../Progressbaar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import ConfirmationModal from '../ConfirmationModal'; // Import the modal component

const Login = () => {
  const [progress, setProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 100; // Increase progress by 10%
        } else {
          clearInterval(interval);
          setIsModalOpen(true); // Open modal when progress reaches 100%
          return prev;
        }
      });
    }, 1000); // Increase every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleConfirm = () => {
    navigate('/cash-game'); // Change '/another-page' to your target route
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {/* Show image and progress bar only if the modal is not open */}
      {!isModalOpen && (
        <div className="w-[111px] h-[111px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px]">
          <img src="/images/logo.png" alt="Logo" />

          <div className="mt-4">
            <Progressbaar progress={progress} />
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleConfirm}
        onClose={handleCloseModal}
      />
    </div>
  );
};
export default Login;
