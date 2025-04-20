import React from 'react'

const NewsSection = () => {
  return (
    <div className='mt-20 h-[300px] lg:h-[200px]'>
        <div className='flex justify-center items-center  flex-wrap '>
            <div className='lg:pl-60 flex flex-col w-full lg:w-1/2'>
                <h1 className='text-center text-4xl font-semibold'>
                    Want tips & tricks to optimize your flow?
                </h1>
                <p className='text-center  mt-2 text-neutral-500'>
                    Sign up to our newsletter and stay up to date.
                </p>
            </div>
            <div className='flex justify-center items-center mt-5  flex-col w-full lg:w-1/2'>
                <div className='flex space-x-5 text-lg text-center  text-neutral-700'>
                    <input className='bg-white border rounded-md px-6 py-3 placeholder-inherit' placeholder='Enter yout email'/>
                    <a href='#' className='  py-3 px-10 text-black  bg-gradient-to-r from-green-500 to-green-900 rounded-md text-center text-xl font-semibold tracking-wider w-60'>Notify me</a>
                </div>
                <p className='pr-40 text-start mt-2 text-neutral-500'>
                    Sign up to our newsletter and stay up to date.
                </p>
                <a href="#" className='mt-1 pr-[400px] underline text-green-500 '>Privacy,Policy</a>
            </div>
        </div>
    </div>
  )
}

export default NewsSection
