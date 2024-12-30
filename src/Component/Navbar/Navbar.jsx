import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import Menu and X icons from Lucide

function Navbar() {
  // State to handle the toggle of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); // Toggle the menu state
  };

  const menuItems = ['About Us', 'Services', 'Team', 'Clients', 'Contact Us'];

  return (
    <div className="w-full h-[90px] flex items-center relative">
      {/* Logo Section */}
      <div className="absolute left-36 w-[140px] h-12 md:w-[150px] md:h-[70px] lg:w-[295px] lg:h-[85px]">
        <img src="/logo-1 1.png" alt="logo" className="w-full h-full" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:block gap-14 absolute md:right-10 xl:right-64">
        <ul className="w-full h-full flex justify-center gap-7">
          {menuItems.map(item => (
            <li key={item} className="text-sm">{item}</li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Toggle Icon */}
      <div
        className="sm:hidden absolute right-4 cursor-pointer z-50"
        onClick={toggleMenu} // Ensure this is correctly attached
      >
        <Menu size={30} />
      </div>

      {/* Mobile Menu - Rendered only if isMenuOpen is true */}
      {isMenuOpen && (
        <div
          className="z-50 sm:hidden absolute top-0 right-0 bg-white w-full h-screen flex flex-col items-center gap-6 border-4 border-gray-300 rounded-lg shadow-xl transition-all duration-300 ease-in-out"
        >
          {/* Close Button */}
          <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleMenu}>
            <X size={30} />
          </div>

          {/* Menu Items */}
          <ul className="w-full flex flex-col items-center gap-6 mt-16">
            {menuItems.map(item => (
              <li key={item} className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-200">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
