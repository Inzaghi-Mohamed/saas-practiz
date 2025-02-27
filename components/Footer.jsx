import React from 'react'
import footerLogo from '@/public/logo.png'
import Image from 'next/image'
import Link from 'next/link'  
function Footer() {
  return (
    <footer className ="footer p-10 bg-neutral text-neutral-content">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="mt-4 space-x-2">
          <Image className='w-10 h-10 mb-4 rounded-full' src={footerLogo} alt="Company Logo" width={50} height={50} />
          <p className="text-sm">
            <span className='font-semibold text-primary text-2xl'>Non-Profit Inc.</span><br/>
            Providing innovative solutions since 2023
          </p>
          <div className="mt-4">
            <div className="grid grid-flow-col gap-4">
              <Link href="#" className="btn btn-ghost btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-primary"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </Link> 
              <Link href="#" className="btn btn-ghost btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-red-500"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
              </Link> 
              <Link href="#" className="btn btn-ghost btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-blue-500"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Product Links */}
        <div className="mt-4 space-x-2">
          <h3 className="text-2xl font-bold mb-4">Product</h3> 
          <Link href="#" className="link link-hover">Features</Link> 
          <Link href="#" className="link link-hover">Pricing</Link> 
          <Link href="#" className="link link-hover">Use Cases</Link> 
          <Link href="#" className="link link-hover">Integrations</Link>
        </div> 
        
        {/* Company Links */}
        <div className="mt-4 space-x-2">
          <h3 className ="text-2xl font-bold mb-4">Company</h3> 
          <Link href="#" className="link link-hover">About Us</Link> 
          <Link href="#" className="link link-hover">Careers</Link> 
          <Link href="#" className="link link-hover">Press</Link> 
          <Link href="#" className="link link-hover">Blog</Link>
        </div> 
        
        {/* Support Links */}
        <div className="mt-4 space-x-2">
          <h3 className ="text-2xl font-bold mb-4">Support</h3> 
          <Link href="#" className="link link-hover">Help Center</Link> 
          <Link href="#" className="link link-hover">Documentation</Link> 
          <Link href="#" className="link link-hover">API Status</Link> 
          <Link href="#" className="link link-hover">Contact Us</Link>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-base-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">
          © 2025 Non-Profit Inc. All rights reserved.
        </div>
        <div className="flex mt-4 md:mt-0">
          <Link href="#" className="link link-hover text-sm mr-4">Privacy Policy</Link>
          <Link href="#" className="link link-hover text-sm mr-4">Terms of Service</Link>
          <Link href="#" className="link link-hover text-sm">Cookie Settings</Link>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer