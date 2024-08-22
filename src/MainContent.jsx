import React from 'react';
import { FaBell, FaChevronDown } from 'react-icons/fa';

function MainContent() {
  return (
    <div className="flex-1 p-4 md:p-6 bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center border-b pb-4 mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-6">
              <span className="text-lg text-gray-700">00:03:20</span>
              <button className="relative">
                <FaBell className="text-gray-500 text-lg" />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">1</span>
              </button>
            </div>
            <div className="bg-gray-300 p-2 rounded-full">
              <span className="block bg-gray-500 w-8 h-8 rounded-full"></span>
            </div>
            <div>
              <span className="font-bold text-gray-700">John Doe</span>
              <span className="text-sm text-gray-500 block">UI/UX Designer</span>
            </div>
          </div>
          <FaChevronDown className="text-gray-500 text-lg" />
        </div>
      </header>

      {/* Main Content Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Dashboard Content</h2>
        <p className="text-gray-600">This is where the main content will go.</p>
      </div>
    </div>
  );
}

export default MainContent;
