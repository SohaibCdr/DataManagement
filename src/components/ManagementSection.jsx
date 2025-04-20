import React from 'react'
import dataImg from "../assets/laptop.jpg"
const ManagementSection = () => {
  return (
    <div className='mt-60  bg-white lg:h-[600px]  '>
        <div className='flex justify-center flex-wrap'>  
            <div className='p-2 w-full  lg:w-1/2 '>
                <img src={dataImg} className='lg:h-[500px] lg:pl-80 lg:pt-10' alt='Code'/>
            </div>
            <div className='flex flex-start flex-col mt-20 p-2 w-full lg:w-1/2'>
                <p className='uppercase text-green-400 text-pretty text-center lg:text-left tracking-wide font-bold'>
                    Growing with data analytics
                </p>
                <h1 className='text-4xl text-black mt-5 font-bold text-center lg:text-left'>
                  Manage Data Analytics Centrally 
                </h1>
                <div className=' flex mt-2 items-center justify-center lg:justify-start'>
                <p className='text-neutral-800 max-w-[500px] lg:max-w-[700px]  font-semibold text-center lg:text-left'>
                  Streamline your data operations with a centralized analytics platform. Monitor performance,
                  gain real-time insights, and make informed decisions—all from one unified dashboard. Whether you're tracking user behavior, 
                  sales trends, or system metrics, managing your data centrally ensures consistency, 
                  accuracy, and efficiency across your organization.
                </p>
                </div>
                <div className=' flex mt-7 items-center justify-center lg:justify-start'>
                <a href='#' className='  py-3 px-10  bg-black text-green-400 rounded-md text-center text-xl font-semibold tracking-wider w-60'>Get Started</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManagementSection
