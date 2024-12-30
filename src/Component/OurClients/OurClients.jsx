import React from 'react'

function OurClients() {
    return (
        <div className='w-full max-w-7xl  px-4 sm:px-6 lg:px-8 mt-20 lg:mt-40'>
            <div className="flex flex-col justify-center items-center mb-12 -translate-x-8 ">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">OUR CLIENTS</h1>
                <img src="/Group 33.png" alt="Decorative line" className="w-48 md:w-64 lg:w-80 mt-4" />
            </div>

            <div className='flex flex-wrap  gap-8 md:gap-12 lg:gap-16'>
                <div className="flex items-center justify-center m-w-[212px]">
                    <img src='Layer 19.png' alt="Client 1" className='max-w-full h-auto' />
                </div>
                <div className="flex items-center justify-center m-w-[129px]">
                    <img src='Layer 20.png' alt="Client 2" className='max-w-full h-auto' />
                </div>
                <div className="flex items-center justify-center m-w-[222px]">
                    <img src='1280px-Brigitte-Logo.png' alt="Client 3" className='max-w-full h-auto' />
                </div>
                <div className="flex items-center justify-center m-w-[143px]">
                    <img src='Layer 22.png' alt="Client 4" className='max-w-full h-auto' />
                </div>
                <div className="flex items-center justify-center m-w-[163px]">
                    <img src='BHP_2017_logo.png' alt="Client 5" className='max-w-full h-auto' />
                </div>
                <div className="flex items-center justify-center m-w-[185px]">
                    <img src='Layer 21.png' alt="Client 6" className='max-w-full h-auto' />
                </div>
                <div className="flex items-center justify-center m-w-[268px]">
                    <img src='Layer 23.png' alt="Client 7" className='max-w-full h-auto' />
                </div>
                <div className="flex items-center justify-center m-w-[246px]">
                    <img src='Layer 24.png' alt="Client 8" className='max-w-full h-auto' />
                </div>
                <div className="flex items-center justify-center m-w-[243px]">
                    <img src='MelbourneWaterLogo-1024x282.png' alt="Client 9" className='max-w-full h-auto' />
                </div>
            </div>
        </div>
    )
}

export default OurClients


