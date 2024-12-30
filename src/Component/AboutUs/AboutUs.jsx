import React from 'react';

function AboutUs() {
    return (
        <div className='flex flex-col justify-evenly p-4  md:mt-4 lg:mt-10  md:flex-row xl:p-8 gap-4'>
            <div className='w-4/5 mt-1 m-auto md:w-[500px] md:mt-10  xl:w-[612px] xl:h-[408px]'>
                <img src='/aboutus1.png' alt='aboutus' className='w-full h-full' />
            </div>
            <div className=' w-full  md:w-[612px] h-auto xl:w-[658px] xl:mr-10'>
                <h1 className=' font-bold text-xl  md:text-2xl lg:text-3xl xl:text-5xl'>ABOUT US</h1>
                <img src='/Group 30.png' alt="group" className='h-[7px] w-[100px] md:w-[120px] lg:w-36 xl:w-[238px]' />
                <p className='mt-2 text-[11px] md:text-sm  xl:text-lg lg:mt-4'>
                    We love what we do and are driven by achieving great results for our clients.
                    Our awards and impressive client list are testament to our high quality
                    approach. We deliver value, creativity, results, and exceptional levels of
                    customer service and professionalism. We specialize in infrastructure
                    development, energy, and natural resources.
                </p>

                <div className='w-full flex justify-start items-center mt-2 gap-x-4 text-start  lg:mt-4 lg:gap-20 '>
                    <div>
                        <img src='/Enagagement icon 1.png' alt="engagement icon" className='w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px]' />
                        <h1 className=' font-bold md:text-xl lg:text-2xl xl:text-3xl'>Engagement</h1>
                        <p className='mt-2 text-sm xl:text-lg  lg:mt-4'>    
                            We are engagement specialists,<br />
                            who have led projects at all<br />
                            levels of the IAP2 spectrum.<br />
                            READ MORE
                        </p>
                    </div>
                    <div>
                        <img src='/coomunication icon 1.png' className='w-4 h-[20px] md:w-8 md:h-8 xl:w-10 xl:h-10' alt="communication icon" />
                        <h1 className='font-bold md:text-xl lg:text-2xl xl:text-3xl'>Communications</h1>
                        <p className='mt-2 text-sm  xl:text-lg lg:mt-4'>
                            We are engagement specialists,<br />
                            who have led projects at all<br />
                            levels of the IAP2 spectrum.<br />
                            READ MORE
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
