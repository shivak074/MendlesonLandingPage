import React from 'react';

function OurProject() {
    return (
        <div className='w-full mt-40 max-w-7xl lg:py-10 mx-auto px-4 sm:px-6 lg:px-8  '>
            {/* Title Section */}
            <div className="flex flex-col justify-center items-center mb-12">
                <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl text-center">OUR PROJECTS</h1>
                <img src="/Group 33.png" alt="Decorative line" className="mt-2 w-40 sm:w-48 lg:w-80" />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-6'>
                {/* First Image */}
                <div className='md:col-span-1 md:row-span-2'>
                    <img 
                        src='/Our Project_ 1 img 1.png' 
                        alt="Project 1" 
                        className='w-full h-auto object-cover' 
                    />
                </div>

                {/* Second Image */}
                <div className='md:col-span-1'>
                    <img 
                        src='/Our Project _ 2 img 1.png' 
                        alt="Project 2" 
                        className='w-full h-auto object-cover' 
                    />
                </div>

                {/* Third Image */}
                <div className='md:col-span-1'>
                    <img 
                        src='Our Project_ 3 img 1.png' 
                        alt="Project 3" 
                        className='w-full h-auto object-cover' 
                    />
                </div>
            </div>
        </div>
    );
}

export default OurProject;

