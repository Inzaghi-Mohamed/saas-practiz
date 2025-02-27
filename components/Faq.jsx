import React from 'react'

function Faq() {
  return (
    <div id='faq' className="join join-vertical w-full container mx-auto px-4 py-8">
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div className="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div className="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div className="collapse-content">
      <p>hello</p>
    </div>
  </div>
</div>
  )
}

export default Faq