import React from 'react'

function Features() {
  return (
    <div  id='features' className='bg-base-200 py-10'>
    <div className="container mx-auto px-4 py-8 ">
  <h2 className="text-3xl font-bold text-center mb-8 text-primary">Our Features</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </figure>
      <div className="card-body items-center text-center">
        <h3 className="card-title">Donation Management</h3>
        <p>We provide a platform for non-profit organizations to manage their donations.</p>
      </div>
    </div>
    
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </figure>
      <div className="card-body items-center text-center">
        <h3 className="card-title">Volunteer Management</h3>
        <p>We provide a platform for non-profit organizations to manage their volunteers.</p>
      </div>
    </div>
    
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </figure>
      <div className="card-body items-center text-center">
        <h3 className="card-title">Collaboration Tools</h3>
          <p>Powerful collaboration features to enhance team productivity and communication.</p>
      </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Features