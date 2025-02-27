import React from 'react'
import Image from 'next/image'
import hero from '@/public/hero.png'    
function Hero() {
  return (
    <div className=' flex justify-between items-center px-4 py-10 container mx-auto'>
      <div className='space-y-4'>
        <h1 className='text-4xl lg:text-6xl font-bold'>Transform Your NonProfit's <span className='text-primary'>Digital Operations</span></h1>
        <p className='text-gray-500 lg:text-lg'>Non-Profit Project is a platform for non-profit organizations to manage their projects and donations.</p>
        <div className='flex gap-4'>
          <button className='btn btn-primary'>Get Started</button>
          <button className='btn btn-outline'>Watch Demo</button>
        </div>
      </div>
      <div>
        <Image className='rounded-lg' src={hero} alt="Non-Profit Project" width={500} height={500} />
      </div>
    </div>
  )
}

export default Hero