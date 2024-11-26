import { useState } from 'react';
import Logo from '../Logo';
import InputForm from './InputForm';
function DashboardHeader() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to toggle popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="relative">
      {/* Header Section */}
      <div className={`flex justify-between ${isPopupOpen ? 'blur-sm' : ''}`}>
        <Logo />
        <div>
          <button
            onClick={togglePopup}
            className="text-white bg-blue-500 px-6 py-2 rounded-md mx-2"
          >
            Add Expense
          </button>
          <button className="text-white bg-red-500 px-6 py-2 rounded-md">
            Logout
          </button>
        </div>
      </div>

      {/* Popup Section */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-md shadow-md max-w-lg w-full">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 bg-red-500 px-2 text-white hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              Add Expense
            </h2>
            {/* InputForm Component */}
            <InputForm
              onSubmit={(formData) => {
                console.log('Form Submitted:', formData);
                togglePopup(); // Close the popup after submission
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardHeader;
