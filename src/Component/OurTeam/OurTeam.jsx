import React from 'react';

function OurTeam() {
   return (
      <div className='w-full mt-40  m-auto px-4 sm:px-6   
       lg:px-8 lg:mt-72'>
         <div className="flex flex-col justify-center items-center mb-12">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl text-center">OUR TEAM</h1>
            <img src="/Group 32.png" alt="Decorative line" className="mt-2 h-2 w-28 sm:w-40 lg:w-56" />
         </div>

         <div className="flex flex-col sm:flex-row justify-center items-center gap-8 lg:gap-16">
            <div className="flex flex-col items-center max-w-xs w-full">
               <img 
                  src='/Person 1 img 1.png' 
                  alt="Jessica D Suza"
                  className='w-full h-auto  object-cover mb-4' 
               />
               <h2 className='font-semibold text-xl sm:text-2xl lg:text-3xl text-center'>Jessica D Suza</h2>
            </div>

            <div className="flex flex-col items-center max-w-xs w-full">
               <img 
                  src='/Person 2 img 1.png' 
                  alt="Johny Williams"
                  className='w-full h-auto aspect-[278/221] object-cover mb-4' 
               />
               <h2 className='font-semibold text-xl sm:text-2xl lg:text-3xl text-center'>Angelina McAnthony</h2>
            </div>

            <div className="flex flex-col items-center max-w-xs w-full">
               <img 
                  src='/Person 3 img 1.png' 
                  alt="Sanya R,"
                  className='w-full h-auto aspect-[278/221] object-cover mb-4' 
               />
               <h2 className='font-semibold text-xl sm:text-2xl lg:text-3xl text-center'>Christina Williams</h2>
            </div>
         </div>
      </div>
   );
}

export default OurTeam;

