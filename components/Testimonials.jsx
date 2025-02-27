import React from 'react'
import Image from 'next/image'
import testimonial1 from '@/public/testimonial1.jpg'
import testimonial2 from '@/public/testimonial2.jpg'
import testimonial3 from '@/public/testimonial3.jpg'

function Testimonials() {
  return (
    <div id='testimonials' className="">
    <section className="py-16 bg-blue-600">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 text-white">What Our Clients Say</h2>
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="card bg-base-100 shadow-xl mx-auto max-w-3xl">
          <div className="card-body items-center text-center">
            <div className="avatar mb-4">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image src={testimonial1} alt="John Doe" />
              </div>
            </div>
            <p className="text-lg mb-4">This product has revolutionized our workflow. It's intuitive, powerful, and has saved us countless hours. Highly recommended!</p>
            <h3 className="font-semibold text-xl">John Doe</h3>
            <p className="text-sm opacity-70">CEO, TechCorp</p>
            <div className="rating rating-md mt-4">
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked readOnly/>
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked readOnly/>
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked readOnly/>
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked readOnly/>
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked readOnly/>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      {/* Add more carousel items for additional testimonials */}
      <div id="slide2" className="carousel-item relative w-full">
        <div className="card bg-base-100 shadow-xl mx-auto max-w-3xl">
          <div className="card-body items-center text-center">
            <div className="avatar mb-4">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image src={testimonial2} alt="Sarah Johnson" />
              </div>
            </div>
            <p className="text-lg mb-4">The platform has made managing our non-profit so much easier. The donation tracking and volunteer coordination features are exceptional!</p>
            <h3 className="font-semibold text-xl">Sarah Johnson</h3>
            <p className="text-sm opacity-70">Director, Hope Foundation</p>
            <div className="rating rating-md mt-4">
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked readOnly/>
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked readOnly/>
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked readOnly/>
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked readOnly/>
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked readOnly/>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="card bg-base-100 shadow-xl mx-auto max-w-3xl">
          <div className="card-body items-center text-center">
            <div className="avatar mb-4">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <Image src={testimonial3} alt="Michael Smith" />
              </div>
            </div>
            <p className="text-lg mb-4">As a small non-profit, this tool has been a game-changer. The collaboration features and donor management system are exactly what we needed!</p>
            <h3 className="font-semibold text-xl">Michael Smith</h3>
            <p className="text-sm opacity-70">Founder, Community Outreach</p>
            <div className="rating rating-md mt-4">
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked readOnly/>
                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked readOnly/>
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked readOnly/>
              <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked readOnly/>
                  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked readOnly/>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default Testimonials