import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ManagementSection from './components/ManagementSection'
import NewsSection from './components/NewsSection'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection/>
    </div>
    <div className=''>
      <ManagementSection/>
    </div>
    <NewsSection/>
    <PricingSection/>
    <Footer/>
    </>
  )
}

export default App
