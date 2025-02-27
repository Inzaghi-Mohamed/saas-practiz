import React from 'react'
import Image from 'next/image'
import hero from '@/public/hero.png'    
import Button from '@/components/ButtonCheckout'
function Hero() {
  return (
    <div className=' flex justify-between items-center px-4 py-10 container mx-auto max-md:flex-col '>
      <div className='space-y-4 lg:w-1/2'>
        <h1 className='text-4xl lg:text-6xl font-bold'>Transform Your NonProfit's <span className='text-primary'>Digital Operations</span></h1>
        <p className='text-gray-500'>Non-Profit Project is a platform for non-profit organizations to manage their projects and donations.</p>
        <div className='flex gap-4'>
          <Button extrastyle="btn-primary" name="Get Started"/>
          <button className='btn btn-outline'>Watch Demo</button>
        </div>
      </div>
          <div className='mt-10 lg:w-1/2'>
        <Image className='rounded-lg' src={hero} alt="Non-Profit Project" width={500} height={500} />
      </div>
    </div>
  )
}

export default Hero