import React from 'react'
import image from '../assets/img/about.webp';

function About() {

  return (
    <section className='py-12 lg:py-32'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-2 lg:gap-24'>
          <img className='object-cover h-full w-[566xp] md:mx-auto
          lg:mx-0 rounded-2xl' src={image} />
          <div className='flex flex-col items-center text-center lg:items-start
          lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3  
              before:content-about relative 
              before:absolute before:opacity-40 
              before:-top[2rem] before:hidden 
              before:lg:block'> Rashid bik
              </h2>
              <p className='mb-2 text-accent'>Freelancer</p>
              <hr className='mb-4 opacity-5' />
              <p className='mb-2'>
                I 
              </p>
            </div>
           <a href='https://goo.gl/jnmjnZ'>
            <button className='py-4 px-7 font-medium text-white flex items-center justify-center rounded-sm hover:bg-accent-hover transition-all btn-md bg-accent 
            hover:bg-accent-hover transition-all'>
              Contact me
            </button>
           </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
