// import React from 'react'

// function Navbar() {
//   return (
//     <div className='w-full h-[90px] flex  items-center relative '>     
//       <div className='absolute left-36 w-[140px] h-12 md:w-[150px] md:h-[70px] lg:w-[295px] lg:h-[85px]'>
//         <img src='/logo-1 1.png' alt='logo' className='w-full h-full'/>
//       </div>
//        <div className='hidden md:block gap-14  absolute  md:right-10  xl:right-64'>
//        <ul className="w-full h-full flex justify-center gap-7">
//           <li className="">About Us</li>
//           <li className="">Services</li>
//           <li className="">Team</li>
//           <li className="">Clients</li>
//           <li className="">Contact Us</li>
//        </ul>
//        </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi'; // Importing the FiMenu icon from react-icons

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    console.log("Menu button clicked");
    setIsMenuOpen(()=>!isMenuOpen);
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
      <div className="sm:hidden absolute right-4 cursor-pointer" >
        <FiMenu size={30} onClick={()=>toggleMenu} className='hover:text-yellow-400'/> {/* Hamburger menu icon from react-icons */}
      </div>

      {/* Mobile Menu - Rendered only if isMenuOpen is true */}
      {isMenuOpen && (
        <div className="z-50 sm:hidden  bg-white w-full h-screen flex flex-col items-center gap-6 py-4 border-4">
          <ul className="w-full h-full flex flex-col items-center gap-7">
            {menuItems.map(item => (
              <li key={item} className="text-lg font-semibold">{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;





