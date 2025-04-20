import React, { useState } from 'react'
import {Menu , X} from "lucide-react"
const Navbar = () => {
    const [mobileDrawerOpen , setmobileDrawerOpen] = useState(false)
    const toggleNavbar = ()=> {
    setmobileDrawerOpen(!mobileDrawerOpen)
  }
  return (
    <nav className='sticky top-0 z-50  backdrop-blur-lg border-b border-neutral-700/80 py-3'>
        <div className='container px-4 mx-auto relative txt-sm'>
            <div className='flex px-10 justify-between items-center'>
                <span className=' text-3xl tracking-tight flex items-center flex-shrink-0 bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent '>Data.</span>
                <div className='hidden lg:flex ml-14 space-x-12 '>
                    <a href='#' className='hover:text-green-700'>Home</a>
                    <a href='#' className='hover:text-green-700'>Account</a>
                    <a href='#' className='hover:text-green-700'>Settings</a>
                </div>
                <div className='hidden lg:flex justify-center space-x-12 items-center'> 
                    <a href='#' className='border rounded-md py-2 px-3'>Sign in</a>
                    <a href='#' className='py-2 px-3 bg-gradient-to-r from-green-700 to-green-950 rounded-md '>Create an account</a>
                </div>
                <div className='lg:hidden md:flex flex-col justify-end mr-20'>
                  <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X/> : <Menu/>}
                  </button>
                </div>
            </div>
            {mobileDrawerOpen && (
              <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex justify-center items-center flex-col lg:hidden space-y-6'>
                <div className='flex  space-x-12 items-center '>
                    <a href='#' className='hover:text-green-700'>Home</a>
                    <a href='#' className='hover:text-green-700'>Account</a>
                    <a href='#' className='hover:text-green-700'>Settings</a>
                </div>
                <div className='flex justify-center space-x-6 items-center'>
                    <a href='#' className='border rounded-md py-2 px-3'>Sign in</a>
                    <a href='#' className='py-2 px-3 bg-gradient-to-r from-green-500 to-green-900 rounded-md '>Create an account</a>
                </div>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar
  