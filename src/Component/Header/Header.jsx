import React from 'react'

function Header() {
   return (
      <div className='w-full flex relative md:mt-10'>

         <div className='flex  md:w-[700px] lg:w-[1320px]'>
            <div className='md:w-[900px] md:h-[500px] lg:w-[1170px] lg:h-[612px]'>
              <img src='/Group 1.png' alt='logo' className='w-full h-full ' /> 
           </div>
            <div className='absolute right-10 top-2 md:top-24 md:right-32  lg:right-44 xl:right-64'>
               <h1 className='text-xs font-bold md:text-3xl xl:text-5xl'>Mendleson <br></br>Communication<br></br>and Engagement</h1>
               <p className='mt-4 text-[7px] md:text-[12px] xl:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit <br/>
                  Malesuada sed ipsum, ut quam volutpat, tortor</p>
            </div>
         </div>

         <div className='absolute right-0 bottom-0 w-[104px] h-[125px]  md:w-[190px] md:h-[200px] lg:w-[207px] lg:h-[249px]'>
            <img src='/Assets 4.png' alt='asset4' className='w-full h-full' />
         </div>
      </div>
   )
}

export default Header






