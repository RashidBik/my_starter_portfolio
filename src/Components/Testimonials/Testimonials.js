import React from 'react'
import TestimonialSlider from './TestimonialSlider'


function Testimonials() {

  return (
    <section id='Testimonials' className='py-6 lg:py-32 mb-0'>
      <div className='container my-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title 
              before:content-testimonials relative
              before:absolute before:opacity-40
              before:top-[2rem] before:-left-64 
              before:hidden before:lg:block text-3xl font-black mb-6'>
            What Other People Say
          </h2>
          <p className='subtitle'>
            lkkkkkkkkkkkkkkkkkkkkkk
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  )
}

export default Testimonials
