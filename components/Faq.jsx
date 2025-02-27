import React from 'react'

function Faq() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold text-center mb-8 text-primary'>Frequently Asked Questions</h1>
    <div id='faq' className="join join-vertical w-full container mx-auto px-4 py-8">
  <div className="collapse collapse-arrow join-item border-base-300 border hover:cursor-pointer">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title text-xl font-medium">How does this platform help non-profit organizations?</div>
    <div className="collapse-content">
      <p>This platform helps non-profit organizations by providing a user-friendly interface for managing projects and donations.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border hover:cursor-pointer ">
    <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">How does this platform help non-profit organizations?</div>
    <div className="collapse-content">
      <p>This platform helps non-profit organizations by providing a user-friendly interface for managing projects and donations.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">How does this platform help non-profit organizations?</div>
    <div className="collapse-content">
      <p>This platform helps non-profit organizations by providing a user-friendly interface for managing projects and donations.</p>
    </div>
  </div>
</div>
  </div>
  )
}

export default Faq