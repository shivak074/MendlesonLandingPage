import React from 'react';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Service from './Component/Services/Service';
import AboutUs from './Component/AboutUs/AboutUs';
import OurTeam from './Component/OurTeam/OurTeam';
import OurProject from './Component/OurProject/OurProject';
import OurClients from './Component/OurClients/OurClients';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="w-full overflow-x-hidden relative">
      <div className="w-full flex justify-between items-center relative py-2 lg:py-4">
        <div className="absolute top-[-5px] left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36">
          <img src="/Asset1.png" alt="Company Logo" className="w-full h-full object-contain" />
        </div>

        <Navbar />

        <div className="absolute top-0 right-0 w-1/3 sm:w-2/5 md:w-1/3 lg:w-1/4 max-w-[450px]">
          <img src="/Asset 2.png" alt="Graphic Element" className="w-full h-auto" />
        </div>
      </div>

      <Header />
      <AboutUs />

      <div className=' relative'>
        <div className='absolute left-[-10px] top-0 w-[150px] h-[190px] sm:w-[200px] sm:h-[240px] md:w-[220px] md:h-[270px] lg:w-[366px] lg:h-[431px]
                  -translate-y-1/4 sm:-translate-y-1/3 md:-translate-y-1/2 lg:-translate-y-40 lg:left-[-23px]'>
          <img src='/Asset5 1.png' alt='asset51' className='w-full h-full object-contain' />
        </div>
        <div className='mt-16 sm:mt-24 md:mt-32 lg:mt-40'>
          <Service />
        </div>
      </div>

      <div className='absolute left-0  w-40 md:w-56  lg:w-96'>
          <img src='/Asset 5 2.png' alt='asset52' className='w-full h-auto object-contain' />
        </div>

      <OurTeam />

      <div className="absolute right-0  w-40 md:w-56 lg:w-80 -translate-y-20 lg:-translate-y-32">
          <img
            src='/Asset 8 3.png'
            alt='Decorative background'
            className='w-full h-auto object-contain '
          />
        </div>

      <OurProject />

      <div className='relative mt-16 sm:mt-24 md:mt-32 lg:mt-40'>
        <div className='absolute left-0 top-0 w-[80px] sm:w-[120px] md:w-[150px] lg:w-[179px] lg:h-[404px] -translate-y-1/4'>
          <img src='/Assets 9 1.png' alt='asset91' className='w-full h-auto object-contain' />
        </div>
        <div className='ml-[80px] sm:ml-[120px] md:ml-[150px] lg:ml-[179px]'>
          <OurClients />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

