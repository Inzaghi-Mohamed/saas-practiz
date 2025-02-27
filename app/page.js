import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import Faq from '@/components/Faq'
function Home() { 
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
