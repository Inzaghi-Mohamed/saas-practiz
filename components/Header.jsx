import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo.png'
function Header() {
  return (
    <section className="border-b border-gray-400 bg-base-100 mb-10 sticky top-0 z-10">
      <div className="flex justify-between items-center p-4 container mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/">
          <Image src={logo} alt="Non-Profit Project" width={60} height={60} />
        </Link>
      </div>
      <div className="space-x-4 lg:space-x-8">
        <Link className='hover:text-primary hover:underline' href="#features">Features</Link>
        <Link className='hover:text-primary hover:underline' href="#pricing">Pricing</Link>
        <Link className='hover:text-primary hover:underline' href="#testimonials">Testimonials</Link>
        <Link className='hover:text-primary hover:underline' href="#faq">FAQ</Link>
      </div>
      <div>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default Header