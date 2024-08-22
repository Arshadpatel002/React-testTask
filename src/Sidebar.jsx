import React from 'react';
import {
  FaTachometerAlt, FaComments, FaRegCalendarAlt, FaRegClock,
  FaClipboardList, FaClipboard, FaFileInvoiceDollar, FaChartLine,
  FaDollarSign, FaThList, FaCog, FaSignOutAlt
} from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="flex h-screen">
      {/* Icon Strip */}
      <div className="bg-white w-16 md:w-20 flex flex-col items-center py-6">
        <FaTachometerAlt className="text-black text-xl mb-8" />
        <FaComments className="text-black text-xl mb-8" />
        <FaRegCalendarAlt className="text-black text-xl mb-8" />
        <FaRegClock className="text-black text-xl mb-8" />
        <FaClipboardList className="text-black text-xl mb-8" />
        <FaClipboard className="text-black text-xl mb-8" />
        <FaFileInvoiceDollar className="text-black text-xl mb-8" />
        <FaChartLine className="text-black text-xl mb-8" />
        <FaDollarSign className="text-black text-xl mb-8" />
        <FaThList className="text-black text-xl mb-8" />
        <FaCog className="text-black text-xl mb-8" />
        <FaSignOutAlt className="text-red-500 text-xl mt-auto" />
      </div>

      {/* Main Sidebar */}
      <aside className="hidden md:flex w-64 md:w-72 bg-white h-screen flex-col justify-between border-r">
        <div>
          {/* Logo and Search */}
          <div className="flex items-center justify-center mt-6">
            <div className="bg-gray-300 p-2 rounded-full">
              <span className="block bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center">ZH</span>
            </div>
          </div>

          <div className="mt-8 mb-6 px-6">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 text-gray-700 placeholder-gray-500 rounded-full py-2 px-4 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Menu Items */}
          <nav className="text-gray-600">
            <ul>
              <li className="flex items-center py-3 px-6 hover:bg-gray-100 cursor-pointer">
                <FaTachometerAlt className="mr-4 text-blue-600" /> Dashboard
              </li>
              <li className="flex items-center py-3 px-6 hover:bg-gray-100 cursor-pointer">
                <FaComments className="mr-4" /> Feedbacks
              </li>
              <li className="flex items-center py-3 px-6 hover:bg-gray-100 cursor-pointer">
                <FaRegCalendarAlt className="mr-4" /> Leaves
              </li>
              <li className="flex items-center py-3 px-6 hover:bg-gray-100 cursor-pointer">
                <FaRegClock className="mr-4" /> Attendance
              </li>
              <li className="flex items-center py-3 px-6 hover:bg-gray-100 cursor-pointer">
                <FaClipboardList className="mr-4" /> Daily Timesheet
              </li>
              <li className="flex items-center py-3 px-6 hover:bg-gray-100 cursor-pointer">
                <FaClipboard className="mr-4" /> Work Log
              </li>
              <li className="flex items-center py-3 px-6 hover:bg-gray-100 cursor-pointer">
                <FaFileInvoiceDollar className="mr-4" /> Reimbursements
              </li>
              <li className="flex items-center py-3 px-6 hover:bg-gray-100 cursor-pointer">
                <FaChartLine className="mr-4" /> Reports
              </li>
              <li className="flex items-center py-3 px-6 hover:bg-gray-100 cursor-pointer">
                <FaDollarSign className="mr-4" /> My Expenses
              </li>
              <li className="flex items-center py-3 px-6 hover:bg-gray-100 cursor-pointer">
                <FaThList className="mr-4" /> Categories
              </li>
              <li className="flex items-center py-3 px-6 hover:bg-gray-100 cursor-pointer">
                <FaCog className="mr-4" /> Settings
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
