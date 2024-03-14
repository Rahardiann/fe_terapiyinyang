import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center bg-white text-main py-4 px-6 ">
      <div className="flex items-center">
       
        <ul className="hidden md:flex mx-auto md:ml-24  space-x-6 justify-center">
          <li>
            <Link to="/" className="text-main hover:text-orange hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-main hover:text-orange hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/galery" className="text-main hover:text-orange hover:underline">
              Product
            </Link>
          </li>
        
        </ul>
      </div>
     
      <div className="lg:flex items-center relative">
      <img src="/assets/logo.png" alt="Logo" className="w-40 h-auto" />
       
      </div>

      <div className="block md:hidden">
        {/* Toggle icon for mobile */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-400 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={toggleSidebar}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
      <div className={`md:hidden fixed top-0 right-0 h-full bg-white w-1/2 z-20 transform ${showSidebar ? "translate-x-0" : "translate-x-full"} transition duration-300 ease-in-out`}>
        {/* Sidebar */}
        <ul className="flex flex-col h-full items-center justify-top space-y-6">
          <button onClick={closeSidebar} className="absolute top-4 right-4 text-black hover:text-orange">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <li>
            <Link
              to="/"
              className="text-black hover:text-orange-200 hover:underline"
              onClick={toggleSidebar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-black hover:text-orange-200 hover:underline"
              onClick={toggleSidebar}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/galery"
              className="text-black hover:text-orange-200 hover:underline"
              onClick={toggleSidebar}
            >
              Product
            </Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
