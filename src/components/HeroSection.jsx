import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const words = ["BTB", "BTC", "SASS"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className='flex flex-col mt-6 lg:mt-20 items-center'>
      <p className='uppercase text-green-600 text-pretty text-center tracking-wide'>
        Growing with data analytics
      </p>

      <div className='flex items-center mt-9 text-4xl sm:text-6xl lg:text-6xl text-center tracking-wide font-semibold'>
        <h1>Grow with{" "}</h1>
        <span className='pl-4 bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent'>
          data.
        </span>
      </div>

      <div className='  flex items-center mt-9 text-xl lg:text-4xl tracking-wider font-medium'>
        <h2>Fast, flexible financing for&nbsp;
          <span className="text-neutral-700 shadow-lg font-semibold">{words[currentIndex]}</span>
        </h2>
      </div>
      <p className='   mt-6 text-xl lg:text-2xl tracking-wider max-w-[800px] text-center text-neutral-700 font-semibold'>Monitor your data to increase revenue for BTB,BTC,SASS platforms.</p>
      <a href='#' className=' mt-7 py-3 px-10 bg-gradient-to-r from-green-700 to-green-950 rounded-md  text-xl font-semibold tracking-wider'>Get Started</a>
    </div>
  );
};

export default HeroSection;
