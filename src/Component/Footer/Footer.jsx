import React from 'react';

function Footer() {
  return (
    <footer className='w-full'>
      <div className="w-full px-4 sm:px-6 m-auto mt-14 bg-[#BFDBFF] py-20 lg:w-5/6 xl:w-4/5 lg:px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 py-4 gap-4">
          <div>
            <h3 className="text-xl text-black font-bold mb-4">Social</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-blue-400 flex items-center"><img src="/facebook 1.png" alt="Facebook" className="w-6 h-6 mr-2" /> Facebook</a></li>
              <li><a href="#" className="text-black hover:text-blue-400 flex items-center"><img src="/linkedin 1.png" alt="LinkedIn" className="w-6 h-6 mr-2" /> LinkedIn</a></li>
              <li><a href="#" className="text-black hover:text-blue-400 flex items-center"><img src="/search 1.png" alt="Google+" className="w-6 h-6 mr-2" /> Google+</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-black font-bold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-blue-400">Services</a></li>
              <li><a href="#" className="text-black hover:text-blue-400">Team</a></li>
              <li><a href="#" className="text-black hover:text-blue-400">Clients</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-black font-bold mb-4">Contact</h3>
            <div className='space-y-2'>
              <p className='text-black break-words'>Lorem Ipsum dummy address<br /> used for display</p>
              <p className='text-black'>1234567890</p>
            </div>
          </div>
          <div>
            <h3 className="text-black font-bold mb-4 lg:text-xl">Email</h3>
            <p className='text-black text-md'>mendlesoncommunication@email.com</p>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
          <p className='text-black'>&copy; Copyright 2018 Mendleson Communication Pty Ltd</p>
        </div>
    </footer>
  );
}

export default Footer;
