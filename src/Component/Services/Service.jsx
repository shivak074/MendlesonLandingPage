import React from 'react'

function Service() {
    return (
        <div className="w-full h-auto  mx-auto  relative">
            <div className="flex flex-col items-center mb-16">
                <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl text-center">SERVICES</h1>
                <img src="/Group 31.png" alt="Decorative line" className="mt-2 h-2 w-24 sm:w-32 lg:w-56" />
            </div>

            <div className="flex flex-col gap-24 sm:gap-32 lg:gap-40 ">
                {/* Engagement Section */}
                <div className="w-5/6 mx-auto flex flex-col sm:flex-row items-center gap-8 xl:gap-24">
                    <div className="text-center lg:w-1/2 sm:text-right">
                        <h2 className="font-bold text-xl sm:text-2xl lg:text-4xl mb-4">ENGAGEMENT</h2>
                        <p className="text-xs sm:text-md lg:text-[14px] xl:text-lg whitespace-nowrap p-2">
                            We love what we do and are driven by achieving great results for our<br />
                            clients. Our awards and impressive client list are testament to our high<br />
                            quality approach. We deliver value, creativity, results andexceptional<br />
                            levels of customer service and professionalism. We specialise in <br />
                            infrastructure development, energy and natural resources.
                        </p>
                    </div>
                    <div className="lg:w-1/2 order-1 lg:order-2">
                        <img src="/Engagement vector 1.png" alt="Engagement illustration" className="m-auto w-3/4 lg:w-auto" />
                    </div>
                </div>

                {/* Communications Section */}
                <div className="w-5/6 mx-auto flex flex-col  sm:flex-row  lg:flex-row  gap-8 xl:gap-24 relative">
                    <div className=" lg:w-1/2  flex  lg:justify-end ">
                        <img src="/Coominucation vector 1.png" alt="Communications illustration" className="m-auto w-3/4 lg:w-auto" />
                    </div>
                    <div className="lg:w-1/2 text-center sm:text-left lg:translate-x-20">
                        <h2 className="font-bold text-lg sm:text-xl lg:text-4xl mb-4">COMMUNICATIONS</h2>
                        <p className="text-xs sm:text-md lg:text-[14px] xl:text-lg whitespace-nowrap">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                            Faucibus quam quis egestas orci. Scelerisque eu, vitae<br />
                            sapien, pellentesque et. Sit ac fames facilisis nibh<br />
                            faucibus.
                        </p>
                    </div>
                </div>
                {/* Decorative background */}
                <div className="absolute right-0 top-1/3 w-32 lg:w-48 xl:w-64 xl:top-1/4">
                    <img
                        src="/Asset 6 1.png"
                        alt="Decorative background"
                        className="w-full h-auto object-contain"
                    />
                </div>
                {/* Facilitation Section */}
                <div className="w-5/6 mx-auto flex flex-col sm:flex-row items-center gap-14 xl:gap-24">
                    <div className="lg:w-1/2 text-center sm:text-right  flex flex-col justify-center items-center ">
                        <div>
                            <h2 className="font-bold text-lg sm:text-2xl lg:text-4xl mb-4">FACILITATION</h2>
                            <p className="text-xs sm:text-md lg:text-[14px] xl:text-lg whitespace-nowrap">
                                We love what we do and are driven by achieving great results for our<br />
                                clients. Our awards and impressive client list are testament to our<br />
                                high quality approach. We deliver value, creativity, results and<br />
                                exceptional levels of customer service and professionalism. We<br />
                                specialise in infrastructure development, energy and<br />
                                natural resources.
                            </p>
                        </div>
                    </div>
                    <div className=" order-1 lg:order-2">
                        <img src="/facilation vector 1.png" alt="Facilitation illustration" className="m-auto w-3/4 lg:w-auto" />
                    </div>
                </div>

                {/* Decorative background */}
                <div className="absolute left-0 top-[58%]  md:top-[52%] w-28 md:w-36 xl:w-64 lg:top-1/2">
                    <img
                        src="/Asset 7 1.png"
                        alt="Decorative background"
                        className="w-auto h-auto max-w-full xl:max-w-none"
                    />
                </div>


                {/* Consultation Section */}
                <div className="w-5/6 mx-auto flex flex-col justify-evenly sm:flex-row items-center
                 gap-8 lg:gap-20 ">
                    <div className="lg:w-1/2   lg:flex  lg:justify-center">
                        <img src="/Consultation vector 1.png" alt="Consultation illustration" className="m-auto w-3/4 lg:w-auto" />
                    </div>
                    <div className="text-center sm:text-left  lg:w-[454px] lg:[235px]">
                        <h2 className="font-bold text-xl sm:text-2xl lg:text-4xl mb-4">
                            CONSULTATION AND<br />RESEARCH
                        </h2>
                        <p className="text-xs sm:text-md lg:text-[14px] xl:text-lg whitespace-nowrap ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                            elit. Faucibus quam quis egestas orci. Scelerisque eu,<br />
                            vitae sapien, pellentesque et. Sit ac fames facilisis<br />
                            nibh faucibus.
                        </p>
                    </div>
                </div>

                {/* Decorative background */}
                <div className="absolute right-0 bottom-72 w-36 md:bottom-8 md:w-1/4 lg:bottom-36 lg:w-56 xl:w-80">
                    <img src="/Asset 8 2.png" alt="Decorative background" className="w-full h-auto" />
                </div>

                {/* Training Section */}
                <div className="w-5/6 mx-auto flex flex-col sm:flex-row items-center gap-8 lg:gap-24 ">
                    <div className="lg:w-1/2 text-center lg:text-right">
                        <h2 className="font-bold text-xl sm:text-2xl lg:text-4xl mb-4">TRAINING & MENTORING</h2>
                        <p className="text-xs sm:text-md lg:text-[14px] xl:text-lg whitespace-nowrap">
                            We love what we do and are driven by achieving great results for our<br />
                            clients. Our awards and impressive client list are testament to our<br />
                            high quality approach. We deliver value, creativity, results and<br />
                            exceptional levels of customer service and professionalism. We<br />
                            specialise in infrastructure development, energy and natural<br />
                            resources.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img src="/Training and vector 1.png" alt="Training illustration" className="m-auto w-3/4 lg:w-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service





